'use strict';

console.log('funguju!');

let naTahu = 'circle';

const kliknuti = (event) => {
  if (naTahu === 'circle') {
    event.target.classList.add('board__field--circle');
    document.querySelector('.hraje').innerHTML =
      '<h2>HRAJE: </h2> <img class="kolecko" src="images/circle.svg" alt="znak kolecko">';
    event.target.disabled = true;
    naTahu = 'cross';
    document.querySelector('.hraje').innerHTML =
      '<h2>HRAJE: </h2> <img class="krizek" src="images/cross.svg" alt="znak krizek">';
  } else {
    event.target.classList.add('board__field--cross');
    document.querySelector('.hraje').innerHTML =
      '<h2>HRAJE: </h2> <img class="krizek" src="images/cross.svg" alt="znak krizek">';
    event.target.disabled = true;
    naTahu = 'circle';
    document.querySelector('.hraje').innerHTML =
      '<h2>HRAJE: </h2> <img class="kolecko" src="images/circle.svg" alt="znak kolecko">';
  }
};

const items = document.querySelectorAll('.policko');

for (let i = 0; i < items.length; i += 1)
  items[i].addEventListener('click', kliknuti);

//------------------------------------------------------------

//     document.querySelector('.kolecko').src = 'images/circle.svg';
