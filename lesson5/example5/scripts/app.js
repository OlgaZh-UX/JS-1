'use strict';

let app = {
    config: {
        rows: [8, 7 ,6, 5, 4, 3, 2, 1],
        cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    },
    run() {
        let board = this.generateBoard();
        document.body.innerHTML = board;

        this.insertRowsNumbers();
        this.insertColsChars();
    },
    generateBoard() {
        let board = '';
        let rowStartColor = 'white';
        for (let i = 0; i < this.config.rows.length; i++) {
            let row = '';
            if (rowStartColor == 'white') {
                row = this.generateRow(rowStartColor, this.config.rows[i]);
                rowStartColor = 'black';
            } else {
                row = this.generateRow(rowStartColor, this.config.rows[i]);
                rowStartColor = 'white';
            }
            board += row;
        }
        return `<div class='table'>${board}</div>`
    },
    generateRow(startColor, rowNum) {
        let currentColorClass = startColor;
        let row = "";
        for (let i = 0; i < this.config.cols.length; i++) {
            let field = '';
            if (currentColorClass === 'white') {
                field = this.generateField('white', rowNum, this.config.cols[i]);
                currentColorClass = 'black';
            } else {
                field = this.generateField('black', rowNum, this.config.cols[i]);
                currentColorClass = 'white';
            }
            row += field;
        }
        return `<div class='row'>${row}</div>`;
    },
    generateField(color, rowNum, colChar) {
        return `<div data-rownum='${rowNum}' data-colchar='${colChar}' class="cell ${color}"></div>`;
    },
    insertRowsNumbers() {
        let rows = document.querySelectorAll('row');
        for (let i = 0; i < rows.length; i++) {
            let row = document.createElement('label');
            row.innerText = this.config.rows[i];
            rows[i].insertAdjacentElement('afterbegin', row);
        }

    },
    insertColsChars() {
        let col = document.createElement('row');
        col.innerHTML += '<label></label>';
        
        for (let i = 0; i < this.config.cols.length; i++) {
            col.innerHTML += `<label>${this.config.cols[i]}</label>`;            
        }
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentElement('beforeend', col);
    }
};

app.run();