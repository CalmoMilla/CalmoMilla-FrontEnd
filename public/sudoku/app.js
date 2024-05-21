// Screens
const startScreen = document.querySelector('#startScreen');
const gameScreen = document.querySelector('#gameScreen');
const pauseScreen = document.querySelector('#pauseScreen');
const resultScreen = document.querySelector('#resultScreen');
// ----------
const cells = document.querySelectorAll('.mainGridCell');

const nameInput = document.querySelector('#inputName');

const numberInputs = document.querySelectorAll('.number');

const playerName = document.querySelector('#playerName');
const gameLevel = document.querySelector('#gameLevel');
const gameTime = document.querySelector('#gameTime');

const resultTime = document.querySelector('#resultTime');

let levelIndex = 0;
let level = CONSTANT.LEVEL[levelIndex];

let timer = null;
let pause = false;
let seconds = 0;

let su = undefined;
let suAnswer = undefined;

let selectedCell = -1;

// --------

const getGameInfo = () => JSON.parse(localStorage.getItem('game'));

// Add space for each 9 cells
const initGameGrid = () => {
    let index = 0;

    for (let i = 0; i < Math.pow(CONSTANT.GRID_SIZE, 2); i++) {
        let row = Math.floor(i / CONSTANT.GRID_SIZE);
        let col = i % CONSTANT.GRID_SIZE;
        if (row === 2 || row === 5) cells[index].style.marginBottom = '10px';
        if (col === 2 || col === 5) cells[index].style.marginRight = '10px';

        index++;
    }
}
// ----------------

const setPlayerName = (name) => localStorage.setItem('player_name', name);
const getPlayerName = () => localStorage.getItem('player_name');

const showTime = (seconds) => new Date(seconds * 1000).toISOString().substr(11, 8);

const clearSudoku = () => {
    for (let i = 0; i < Math.pow(CONSTANT.GRID_SIZE, 2); i++) {
        cells[i].innerHTML = '';
        cells[i].classList.remove('filled');
        cells[i].classList.remove('selected');
    }
}

const initSudoku = () => {
    // Clear old sudoku
    clearSudoku();
    resetBg();
    // Generate sudoku puzzle here
    su = sudokuGen(level);
    suAnswer = [...su.question];

    seconds = 0;

    saveGameInfo();

    // Show sudoku to div
    for (let i = 0; i < Math.pow(CONSTANT.GRID_SIZE, 2); i++) {
        let row = Math.floor(i / CONSTANT.GRID_SIZE);
        let col = i % CONSTANT.GRID_SIZE;
        
        cells[i].setAttribute('data-value', su.question[row][col]);

        if (su.question[row][col] !== 0) {
            cells[i].classList.add('filled');
            cells[i].innerHTML = su.question[row][col];
        }
    }
}

const loadSudoku = () => {
    let game = getGameInfo();

    gameLevel.innerHTML = CONSTANT.LEVEL_NAME[game.level];

    su = game.su;

    suAnswer = su.answer;

    seconds = game.seconds;
    gameTime.innerHTML = showTime(seconds);

    levelIndex = game.level;

    // Show sudoku to div
    for (let i = 0; i < Math.pow(CONSTANT.GRID_SIZE, 2); i++) {
        let row = Math.floor(i / CONSTANT.GRID_SIZE);
        let col = i % CONSTANT.GRID_SIZE;
        
        cells[i].setAttribute('data-value', suAnswer[row][col]);
        cells[i].innerHTML = suAnswer[row][col] !== 0 ? suAnswer[row][col] : '';
        if (su.question[row][col] !== 0) {
            cells[i].classList.add('filled');
        }
    }
}

const hoverBg = (index) => {
    let row = Math.floor(index / CONSTANT.GRID_SIZE);
    let col = index % CONSTANT.GRID_SIZE;

    let boxStartRow = row - row % 3;
    let boxStartCol = col - col % 3;

    for (let i = 0; i < CONSTANT.BOX_SIZE; i++) {
        for (let j = 0; j < CONSTANT.BOX_SIZE; j++) {
            let cell = cells[9 * (boxStartRow + i) + (boxStartCol + j)];
            cell.classList.add('hover');
        }
    }

    let step = 9;
    while (index - step >= 0) {
        cells[index - step].classList.add('hover');
        step += 9;
    }

    step = 9;
    while (index + step < 81) {
        cells[index + step].classList.add('hover');
        step += 9;
    }

    step = 1;
    while (index - step >= 9 * row) {
        cells[index - step].classList.add('hover');
        step += 1;
    }

    step = 1;
     while (index + step < 9 * row + 9) {
        cells[index + step].classList.add('hover');
        step += 1;
    }
}

const resetBg = () => {
    cells.forEach(e => e.classList.remove('hover'));
}

const checkErr = (value) => {
    const addErr = (cell) => {
        if (parseInt(cell.getAttribute('data-value')) === value) {
            cell.classList.add('err');
            cell.classList.add('cellErr');
            setTimeout(() => {
                cell.classList.remove('cellErr');
            }, 500);
        }
    }

    let index = selectedCell;

    let row = Math.floor(index / CONSTANT.GRID_SIZE);
    let col = index % CONSTANT.GRID_SIZE;

    let boxStartRow = row - row % 3;
    let boxStartCol = col - col % 3;

    for (let i = 0; i < CONSTANT.BOX_SIZE; i++) {
        for (let j = 0; j < CONSTANT.BOX_SIZE; j++) {
            let cell = cells[9 * (boxStartRow + i) + (boxStartCol + j)];
            if (!cell.classList.contains('selected')) addErr(cell);
        }
    }

    let step = 9;
    while (index - step >= 0) {
        addErr(cells[index - step]);
        step += 9;
    }

    step = 9;
    while (index + step < 81) {
        addErr(cells[index + step]);
        step += 9;
    }

    step = 1;
    while (index - step >= 9 * row) {
        addErr(cells[index - step]);
        step += 1;
    }

    step = 1;
    while (index + step < 9 * row + 9) {
        addErr(cells[index + step]);
        step += 1;
    }
}

const removeErr = () => cells.forEach(e => e.classList.remove('err'));

const saveGameInfo = () => {
    let game = {
        level: levelIndex,
        seconds: seconds,
        su: {
            original: su.original,
            question: su.question,
            answer: suAnswer
        }
    }
    localStorage.setItem('game', JSON.stringify(game));
}

const removeGameInfo = () => {
    localStorage.removeItem('game');
    document.querySelector('#btnContinue').style.display = 'none';
}

const isGameWin = () => sudokuCheck(suAnswer);

const showResult = () => {
    clearInterval(timer);
    resultScreen.classList.add('active');
    resultTime.innerHTML = showTime(seconds);
}

const initNumberInputEvent = () => {
    numberInputs.forEach((e, index) => {
        e.addEventListener('click', () => {
            if (!cells[selectedCell].classList.contains('filled')) {
                cells[selectedCell].innerHTML = index + 1;
                cells[selectedCell].setAttribute('data-value', index + 1);
                // Add to answer
                let row = Math.floor(selectedCell / CONSTANT.GRID_SIZE);
                let col = selectedCell % CONSTANT.GRID_SIZE;
                suAnswer[row][col] = index + 1;
                // Save game
                saveGameInfo()
                // -----
                removeErr();
                checkErr(index + 1);
                cells[selectedCell].classList.add('zoomIn');
                setTimeout(() => {
                    cells[selectedCell].classList.remove('zoomIn');
                }, 500);

                // Check game win
                if (isGameWin()) {
                    removeGameInfo();
                    showResult();
                }
                // ----
            }
        })
    })
}

const initCellsEvent = () => {
    cells.forEach((e, index) => {
        e.addEventListener('click', () => {
            if (!e.classList.contains('filled')) {
                cells.forEach(e => e.classList.remove('selected'));

                selectedCell = index;
                e.classList.remove('err');
                e.classList.add('selected');
                resetBg();
                hoverBg(index);
            }
        })
    })
}

const startGame = () => {
    startScreen.classList.remove('active');
    gameScreen.classList.add('active');

    playerName.innerHTML = nameInput.value.trim();
    setPlayerName(nameInput.value.trim());

    gameLevel.innerHTML = CONSTANT.LEVEL_NAME[levelIndex];

    showTime(seconds);

    timer = setInterval(() => {
        if (!pause) {
            seconds = seconds + 1;
            gameTime.innerHTML = showTime(seconds);
        }
    }, 1000);
}

const returnStartScreen = () => {
    clearInterval(timer);
    pause = false;
    seconds = 0;
    startScreen.classList.add('active');
    gameScreen.classList.remove('active');
    pauseScreen.classList.remove('active');
    resultScreen.classList.remove('active');
}

// Add button event
document.querySelector('#btnLevel').addEventListener('click', (e) => {
    levelIndex = levelIndex + 1 > CONSTANT.LEVEL.length - 1 ? 0 : levelIndex + 1;
    level = CONSTANT.LEVEL[levelIndex];
    e.target.innerHTML = CONSTANT.LEVEL_NAME[levelIndex];
});

document.querySelector('#btnPlay').addEventListener('click', () => {
    if (nameInput.value.trim().length > 0) {
        initSudoku();
        startGame();
    } else {
        nameInput.classList.add('inputErr');
        setTimeout(() => {
            nameInput.classList.remove('inputErr');
            nameInput.focus();
        }, 500);
    }
});

document.querySelector('#btnContinue').addEventListener('click', () => {
    if (nameInput.value.trim().length > 0) {
        loadSudoku();
        startGame();
    } else {
        nameInput.classList.add('inputErr');
        setTimeout(() => {
            nameInput.classList.remove('inputErr');
            nameInput.focus();
        }, 500);
    }
});

document.querySelector('#btnPause').addEventListener('click', () => {
    pauseScreen.classList.add('active');
    pause = true;
});

document.querySelector('#btnResume').addEventListener('click', () => {
    pauseScreen.classList.remove('active');
    pause = false;
});

document.querySelector('#btnNewGame').addEventListener('click', () => {
    returnStartScreen();
});

document.querySelector('#btnNewGame2').addEventListener('click', () => {
    console.log('object')
    returnStartScreen();
});

document.querySelector('#btnDelete').addEventListener('click', deleteNumber);
document.querySelector('#btnDelete').addEventListener('touchstart', deleteNumber);

function deleteNumber() {
    cells[selectedCell].innerHTML = '';
    cells[selectedCell].setAttribute('data-value', 0);

    let row = Math.floor(selectedCell / CONSTANT.GRID_SIZE);
    let col = selectedCell % CONSTANT.GRID_SIZE;

    suAnswer[row][col] = 0;

    removeErr();
}

// -------------

const init = () => {

    const game = getGameInfo();

    document.querySelector('#btnContinue').style.display = game ? 'grid' : 'none';

    initGameGrid();
    initCellsEvent();
    initNumberInputEvent();

    if (getPlayerName()) {
        nameInput.value = getPlayerName();
    } else {
        nameInput.focus();
    }
}

init();
