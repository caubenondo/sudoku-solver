let problem = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const printGrid = (grid) => {
    // console.clear();
    for (let row of grid) {
        let tRow = ``;
        for (let cell of row) {
            tRow += `${cell}  `;
        }
        console.log(tRow);
    }
};

const possible = (y, x, n) => {
    for (let i = 0; i < 9; i++) {
        if (problem[y][i] == n) {
            return false;
        }
    }

    for (let i = 0; i < 9; i++) {
        if (problem[i][x] == n) {
            return false;
        }
    }
    x0 = Math.floor(x / 3) * 3;
    y0 = Math.floor(y / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (problem[y0+j][x0+i] == n) {
                return false;
            }
        }
    }

    return true;
};

console.log(possible(4,4, 3));
console.log(possible(4,4, 5));
console.table(problem);
const solve = (grid) => {
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            if (grid[y][x] == 0) {
                for (let n = 1; n <10; n++) {
                    if ( possible(y, x, n)) {
                        grid[y][x] = n;   
                        solve(grid);
                        grid[y][x] = 0;
                    }                              
                }
                return grid;
            }
            // return;
        }
        // return;
    }
    printGrid(grid);
};

solve(problem);



