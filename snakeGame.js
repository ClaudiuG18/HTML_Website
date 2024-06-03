function startClick() {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  const gridSize = 20;
  const canvasSize = canvas.width;
  const tileCount = canvasSize / gridSize;
  var isStart = false;

  var image = new Image();
  image.src = "../Image/Projects.png";

  let snake = [
    { x: gridSize * 5, y: gridSize * 5 },
    { x: gridSize * 4, y: gridSize * 5 },
    { x: gridSize * 3, y: gridSize * 5 },
  ];

  let apple = {
    x: Math.floor(Math.random() * tileCount) * gridSize,
    y: Math.floor(Math.random() * tileCount) * gridSize,
  };

  let dx = gridSize;
  let dy = 0;
  let score = 0;

  function drawGame() {
    moveSnake();
    if (isGameOver()) {
      return alert("Game Over");
    }
    clearCanvas();
    drawApple();
    drawSnake();
    drawScore();

    setTimeout(drawGame, 100);
  }

  function clearCanvas() {
    ctx.fillStyle = "black";
    ctx.drawImage(image, 0, 0, canvasSize, canvasSize);
  }

  function drawSnake() {
    ctx.fillStyle = "lime";
    snake.forEach((segment) => {
      ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
    });
  }

  function drawApple() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(apple.x, apple.y, gridSize, gridSize);
  }

  function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === apple.x && head.y === apple.y) {
      score += 10;
      apple.x = Math.floor(Math.random() * tileCount) * gridSize;
      apple.y = Math.floor(Math.random() * tileCount) * gridSize;
    } else {
      snake.pop();
    }
  }

  function isGameOver() {
    const head = snake[0];
    for (let i = 1; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        return true;
      }
    }
    const hitLeftWall = head.x < 0;
    const hitRightWall = head.x >= canvasSize;
    const hitTopWall = head.y < 0;
    const hitBottomWall = head.y >= canvasSize;

    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
  }

  function drawScore() {
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 20);
  }

  document.addEventListener("keydown", changeDirection);

  function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;
    const goingUp = dy === -gridSize;
    const goingDown = dy === gridSize;
    const goingRight = dx === gridSize;
    const goingLeft = dx === -gridSize;

    if (keyPressed === LEFT_KEY && !goingRight) {
      dx = -gridSize;
      dy = 0;
    }

    if (keyPressed === UP_KEY && !goingDown) {
      dx = 0;
      dy = -gridSize;
    }

    if (keyPressed === RIGHT_KEY && !goingLeft) {
      dx = gridSize;
      dy = 0;
    }

    if (keyPressed === DOWN_KEY && !goingUp) {
      dx = 0;
      dy = gridSize;
    }
  }

  function mobileDirection(direction) {
    const goingUp = dy === -gridSize;
    const goingDown = dy === gridSize;
    const goingRight = dx === gridSize;
    const goingLeft = dx === -gridSize;

    if (direction === 'LEFT' && !goingRight) {
      dx = -gridSize;
      dy = 0;
    }

    if (direction === 'UP' && !goingDown) {
      dx = 0;
      dy = -gridSize;
    }

    if (direction === 'RIGHT' && !goingLeft) {
      dx = gridSize;
      dy = 0;
    }

    if (direction === 'DOWN' && !goingUp) {
      dx = 0;
      dy = gridSize;
    }
  }

  document.getElementById("left").addEventListener("click", () => mobileDirection('LEFT'));
  document.getElementById("up").addEventListener("click", () => mobileDirection('UP'));
  document.getElementById("down").addEventListener("click", () => mobileDirection('DOWN'));
  document.getElementById("right").addEventListener("click", () => mobileDirection('RIGHT'));

  drawGame();
}
