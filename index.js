'use strict';

console.log('funguju!');

let naTahu = 'circle';

//------------------------------------------------------ Vem řádek a sloupec a vyrob z něj číslo políčka
const boardSize = 10;
const fields = document.querySelectorAll('.policko');
const getField = (row, column) => fields[row * boardSize + column];
//-------------------------------------------------------------------------------------------------------------

const kliknuti = (event) => {
  if (naTahu === 'circle') {
    event.target.classList.add('board__field--circle');
    document.querySelector('.hraje').innerHTML =
      '<h2>HRAJE: </h2> <img class="kolecko" src="images/circle.svg" alt="znak kolecko">';
    event.target.disabled = true;

    const dejPozici = () => {
      let souradnice = getPosition(event.target);
      let { row, column } = souradnice;
      console.log(row, column);
      const numberOfField = row * 10 + column;
      console.log(numberOfField);
      const field = (numberOfField) => fields[numberOfField];
      console.log(fields[numberOfField]);
      console.log(getSymbol(fields[numberOfField]));
      console.log(isWinningMove(fields[numberOfField]));
      if (isWinningMove(fields[numberOfField]) === true) {
        alert('Gratulujeme, vyhrálo kolečko !');
      }
    };
    dejPozici();

    naTahu = 'cross';
    document.querySelector('.hraje').innerHTML =
      '<h2>HRAJE: </h2> <img class="krizek" src="images/cross.svg" alt="znak krizek">';
  } else {
    event.target.classList.add('board__field--cross');
    document.querySelector('.hraje').innerHTML =
      '<h2>HRAJE: </h2> <img class="krizek" src="images/cross.svg" alt="znak krizek">';
    event.target.disabled = true;
    const dejPozici = () => {
      let souradnice = getPosition(event.target);
      let { row, column } = souradnice;
      console.log(row, column);
      const numberOfField = row * 10 + column;
      console.log(numberOfField);
      const field = (numberOfField) => fields[numberOfField];
      console.log(fields[numberOfField]);

      console.log(getSymbol(fields[numberOfField]));
      console.log(isWinningMove(fields[numberOfField]));
      if (isWinningMove(fields[numberOfField]) === true) {
        alert('Gratulujeme, vyhrál křížek!');
      }
    };
    dejPozici();

    naTahu = 'circle';
    document.querySelector('.hraje').innerHTML =
      '<h2>HRAJE: </h2> <img class="kolecko" src="images/circle.svg" alt="znak kolecko">';
  }
};

const items = document.querySelectorAll('.policko');

for (let i = 0; i < items.length; i += 1) {
  items[i].addEventListener('click', kliknuti);
}

//-------------------------------------------------------Vrať řádek a sloupec kliknutého políčka
const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

//     document.querySelector('.kolecko').src = 'images/circle.svg';

const getSymbol = (field) => {
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  }
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};

//
// else if (isWinningMove === true && kolecko) {
//   alert ('Vyhrálo kolečko')
// }
