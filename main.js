// Wait for the page to load
window.onload = function() {
    // Get the canvas element
    var grid = document.getElementById("gameGrid");

    var snake = [{x: 10, y: 10}]; // Initial snake position
    var direction = "right"; // Initial snake direction

    const cellNumber = 20;
    const gridSize = grid.clientWidth;
    const cellSize = gridSize / cellNumber;



    function startGame() {
        drawGrid();
    }

    function gameLoop() {
        update();
        draw();
    }

    function drawGrid() {
        grid.innerHTML = '';
        for (i = 0; i < cellNumber; i++) {
            for (j = 0; j < cellNumber; j++) {
                const cell = document.createElement('div');
                cell.id = `${i} ${j}`;
                styleCells(cell);
                grid.appendChild(cell);
            }
        }
    }

    function styleCells(cell) {
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.style.backgroundColor = 'black';
        // cell.style.border = '1px outset yellowgreen'
    }

    function update() {
            // TODO: Update snake position, check for collisions, handle input, etc.
    }

    function draw() {
        // Clear canvas

        // TODO: Draw snake, food, and other elements
    }

    setInterval(gameLoop, 1000 / 10); // 10 FPS

    startGame();
};