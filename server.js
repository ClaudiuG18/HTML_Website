const express = require('express');
const session = require('express-session');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;

// ── Config ────────────────────────────────────────────────────────────────────
const ADMIN_USER = process.env.ADMIN_USER || 'claudiu';
const ADMIN_PASS = process.env.ADMIN_PASS || 'schimba_parola_123';
const SITE_ROOT  = process.env.SITE_ROOT  || path.join(__dirname, '..');   // /var/www/claudiu-ghise.de
const DATA_DIR   = path.join(__dirname, 'data');
const UPLOAD_DIR = path.join(SITE_ROOT, 'Image');

// ensure dirs exist
[DATA_DIR, UPLOAD_DIR].forEach(d => fs.mkdirSync(d, { recursive: true }));

// ── Multer (image uploads) ────────────────────────────────────────────────────
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename:    (req, file, cb) => {
    const safe = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '_');
    cb(null, Date.now() + '_' + safe);
  }
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ok = /image\/(jpeg|png|gif|webp|svg\+xml)/.test(file.mimetype);
    cb(ok ? null : new Error('Doar imagini!'), ok);
  }
});

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'cms_secret_key_schimba_asta',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 8 * 60 * 60 * 1000 }  // 8 ore
}));

// Serve admin UI
app.use('/admin', express.static(path.join(__dirname, 'public/admin')));

// Auth guard for API
function requireAuth(req, res, next) {
  if (req.session?.loggedIn) return next();
  res.status(401).json({ error: 'Neautentificat' });
}

// ── Helper: read/write JSON ───────────────────────────────────────────────────
function readJSON(file, fallback) {
  const p = path.join(DATA_DIR, file);
  if (!fs.existsSync(p)) return fallback;
  try { return JSON.parse(fs.readFileSync(p, 'utf8')); }
  catch { return fallback; }
}
function writeJSON(file, data) {
  fs.writeFileSync(path.join(DATA_DIR, file), JSON.stringify(data, null, 2));
}

// ── Auth routes ───────────────────────────────────────────────────────────────
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    req.session.loggedIn = true;
    res.json({ ok: true });
  } else {
    res.status(401).json({ error: 'Credențiale greșite' });
  }
});

app.post('/api/logout', (req, res) => {
  req.session.destroy();
  res.json({ ok: true });
});

app.get('/api/me', (req, res) => {
  res.json({ loggedIn: !!req.session?.loggedIn });
});

// ── Projects API ──────────────────────────────────────────────────────────────
app.get('/api/projects', requireAuth, (req, res) => {
  res.json(readJSON('projects.json', []));
});

app.post('/api/projects', requireAuth, upload.single('image'), (req, res) => {
  const projects = readJSON('projects.json', []);
  const proj = {
    id:          Date.now(),
    title:       req.body.title || '',
    description: req.body.description || '',
    url:         req.body.url || '',
    image:       req.file ? '/Image/' + req.file.filename : (req.body.existingImage || ''),
    createdAt:   new Date().toISOString()
  };
  projects.push(proj);
  writeJSON('projects.json', projects);
  generateProjectsPage(projects);
  res.json({ ok: true, project: proj });
});

app.put('/api/projects/:id', requireAuth, upload.single('image'), (req, res) => {
  let projects = readJSON('projects.json', []);
  const idx = projects.findIndex(p => p.id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Nu există' });
  projects[idx] = {
    ...projects[idx],
    title:       req.body.title       || projects[idx].title,
    description: req.body.description || projects[idx].description,
    url:         req.body.url !== undefined ? req.body.url : projects[idx].url,
    image:       req.file ? '/Image/' + req.file.filename : projects[idx].image,
  };
  writeJSON('projects.json', projects);
  generateProjectsPage(projects);
  res.json({ ok: true, project: projects[idx] });
});

app.delete('/api/projects/:id', requireAuth, (req, res) => {
  let projects = readJSON('projects.json', []);
  projects = projects.filter(p => p.id != req.params.id);
  writeJSON('projects.json', projects);
  generateProjectsPage(projects);
  res.json({ ok: true });
});

// ── Home / Bio API ────────────────────────────────────────────────────────────
app.get('/api/home', requireAuth, (req, res) => {
  res.json(readJSON('home.json', {
    bio: '',
    cards: []
  }));
});

app.post('/api/home', requireAuth, upload.single('image'), (req, res) => {
  const home = readJSON('home.json', { bio: '', cards: [] });
  if (req.body.bio !== undefined) home.bio = req.body.bio;

  // card update/add
  if (req.body.cardAction === 'add') {
    home.cards.push({
      id:          Date.now(),
      title:       req.body.cardTitle || '',
      description: req.body.cardDescription || '',
      image:       req.file ? '/Image/' + req.file.filename : (req.body.existingImage || '')
    });
  } else if (req.body.cardAction === 'delete' && req.body.cardId) {
    home.cards = home.cards.filter(c => c.id != req.body.cardId);
  } else if (req.body.cardAction === 'edit' && req.body.cardId) {
    const ci = home.cards.findIndex(c => c.id == req.body.cardId);
    if (ci !== -1) {
      home.cards[ci] = {
        ...home.cards[ci],
        title:       req.body.cardTitle       || home.cards[ci].title,
        description: req.body.cardDescription || home.cards[ci].description,
        image:       req.file ? '/Image/' + req.file.filename : home.cards[ci].image,
      };
    }
  }

  writeJSON('home.json', home);
  generateHomePage(home);
  res.json({ ok: true, home });
});

// ── Project page content API ──────────────────────────────────────────────────
// Get page content for a project
app.get('/api/projects/:id/page', requireAuth, (req, res) => {
  const projects = readJSON('projects.json', []);
  const proj = projects.find(p => p.id == req.params.id);
  if (!proj) return res.status(404).json({ error: 'Nu există' });
  const pages = readJSON('pages.json', {});
  res.json({ content: pages[req.params.id] || { body: '', images: [] } });
});

// Save page content for a project
app.post('/api/projects/:id/page', requireAuth, upload.array('images', 10), (req, res) => {
  const projects = readJSON('projects.json', []);
  const proj = projects.find(p => p.id == req.params.id);
  if (!proj) return res.status(404).json({ error: 'Nu există' });

  const pages = readJSON('pages.json', {});
  const existing = pages[req.params.id] || { body: '', images: [] };

  // Handle new uploaded images
  const newImages = (req.files || []).map(f => '/Image/' + f.filename);

  // Parse existing images from body (kept ones)
  let keptImages = [];
  try { keptImages = JSON.parse(req.body.keptImages || '[]'); } catch {}

  pages[req.params.id] = {
    body:   req.body.body || '',
    images: [...keptImages, ...newImages]
  };

  writeJSON('pages.json', pages);
  generateProjectPage(proj, pages[req.params.id]);
  res.json({ ok: true, page: pages[req.params.id] });
});

// ── Dedicated image upload ────────────────────────────────────────────────────
app.post('/api/upload-image', requireAuth, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'Nicio imagine' });
  res.json({ ok: true, path: '/Image/' + req.file.filename });
});

// ── Image list ────────────────────────────────────────────────────────────────
app.get('/api/images', requireAuth, (req, res) => {
  try {
    const files = fs.readdirSync(UPLOAD_DIR)
      .filter(f => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(f))
      .map(f => '/Image/' + f);
    res.json(files);
  } catch { res.json([]); }
});

// ── HTML Generators ───────────────────────────────────────────────────────────
function generateProjectPage(proj, page) {
  const images = (page.images || []).map(src =>
    `      <div><img src="${src}" alt="${proj.title}" style="max-width:100%;border-radius:8px;margin-bottom:10px;"></div>`
  ).join('\n');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${proj.title} - Portfolio</title>
  <link rel="stylesheet" href="/CSS/pass-man.css">
</head>
<body>

  <nav class="navbar">
    <div class="logo"><img src="/Image/Claudiu_Ghise_100x40.png"></div>
    <div class="nav-buttons">
      <a href="/index.html" class="nav-btn">Home</a>
      <a href="/HTML/projects.html" class="nav-btn">Projects</a>
    </div>
    <div class="menu-toggle">&#9776;</div>
  </nav>

  <div class="main-content">
    <div class="text">
      ${page.body || '<p>Niciun conținut încă.</p>'}
    </div>
    <div class="pics">
${images}
    </div>
  </div>

  <div class="footer">
    <div class="git-logo"><img src="/Image/github.png" alt="GitHub Logo"></div>
    <div class="git-link"><a href="https://github.com/ClaudiuG18" class="footer-link">GitHub</a></div>
    <div class="impress-div"><a href="/HTML/impressum.html" class="footer-link">Impressum</a></div>
  </div>

  <script src="/JS/hamburger_btn.js"></script>
</body>
</html>`;

  // slug din titlu sau URL existent
  let filename;
  if (proj.url && proj.url.includes('/HTML/')) {
    filename = path.basename(proj.url);
  } else {
    filename = proj.title.toLowerCase().replace(/[^a-z0-9]+/g, '_') + '.html';
  }

  const outPath = path.join(SITE_ROOT, 'HTML', filename);
  fs.writeFileSync(outPath, html);

  // Actualizează URL în projects.json dacă nu era setat
  if (!proj.url) {
    const projects = readJSON('projects.json', []);
    const idx = projects.findIndex(p => p.id == proj.id);
    if (idx !== -1) {
      projects[idx].url = '/HTML/' + filename;
      writeJSON('projects.json', projects);
    }
  }
}


function generateProjectsPage(projects) {
  const items = projects.map(p => {
    const href = p.url || '#';
    return `
    <div class="project">
      <h2><a href="${href}">${p.title}</a></h2>
      <p>${p.description}</p>
    </div>`;
  }).join('\n');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Projects - Portfolio</title>
  <link rel="stylesheet" href="/CSS/proj.css">
</head>
<body>

  <nav class="navbar">
    <div class="logo"><img src="/Image/Claudiu_Ghise_100x40.png"></div>
    <div class="nav-buttons">
      <a href="/index.html" class="nav-btn">Home</a>
      <a href="/HTML/projects.html" class="nav-btn">Projects</a>
    </div>
    <div class="menu-toggle">&#9776;</div>
  </nav>

  <div class="main">
    <h1>Projects</h1>
    <p>Below, you will see my recent projects</p>
${items}
    <div class="project">
      <h2><a href="#">Work in progress..</a></h2>
      <p>More content will be available soon.</p>
    </div>
  </div>

  <div class="footer">
    <div class="git-logo"><img src="/Image/github.png" alt="GitHub Logo"></div>
    <div class="git-link"><a href="https://github.com/ClaudiuG18" class="footer-link">GitHub</a></div>
    <div class="impress-div"><a href="/HTML/impressum.html" class="footer-link">Impressum</a></div>
  </div>

  <script src="/JS/hamburger_btn.js"></script>
</body>
</html>`;

  const outPath = path.join(SITE_ROOT, 'HTML', 'projects.html');
  fs.writeFileSync(outPath, html);
}

function generateHomePage(home) {
  const cards = (home.cards || []).map(c => `
    <div class="card">
      ${c.image ? `<img src="${c.image}" alt="${c.title}">` : ''}
      <h3>${c.title}</h3>
      <p>${c.description}</p>
    </div>`).join('\n');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home - Portfolio</title>
  <link rel="stylesheet" href="/CSS/index.css">
</head>
<body>

  <nav class="navbar">
    <div class="logo"><img src="/Image/Claudiu_Ghise_100x40.png"></div>
    <div class="nav-buttons">
      <a href="/index.html" class="nav-btn">Home</a>
      <a href="/HTML/projects.html" class="nav-btn">Projects</a>
    </div>
    <div class="menu-toggle">&#9776;</div>
  </nav>

  <div class="main-content">
    <div class="profile-pic">
      <img src="/Image/selfie2.jpg" alt="Profile pic">
    </div>
    <div class="introtext">
      ${home.bio || ''}
    </div>
  </div>

  <div class="cards-container">
${cards}
  </div>

  <div class="footer">
    <div class="git-logo"><img src="/Image/github.png" alt="GitHub Logo"></div>
    <div class="git-link"><a href="https://github.com/ClaudiuG18" class="footer-link">GitHub</a></div>
    <div class="impress-div"><a href="/HTML/impressum.html" class="footer-link">Impressum</a></div>
  </div>

  <script src="/JS/hamburger_btn.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(SITE_ROOT, 'index.html'), html);
}

// ── Start ─────────────────────────────────────────────────────────────────────
app.listen(PORT, '127.0.0.1', () => {
  console.log(`CMS API pornit pe http://127.0.0.1:${PORT}`);
  console.log(`Admin UI: http://127.0.0.1:${PORT}/admin`);
});
