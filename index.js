'use strict';

console.log('funguju!');

let naTahu = 'circle';

const items = document.querySelectorAll('.policko');

const kliknuti = (event) => {
    if (naTahu === 'circle') {
        event.target.classList.add('board__field--circle');
        document.querySelector('.hraje').innerHTML = '<h2>HRAJE: </h2> <img class="kolecko" src="images/circle.svg" alt="znak kolecko">';
        event.target.disabled = true;
        naTahu = 'cross';
    } else {
        event.target.classList.add('board__field--cross');
        document.querySelector('.hraje').innerHTML = '<h2>HRAJE: </h2> <img class="krizek" src="images/cross.svg" alt="znak krizek">';
        event.target.disabled = true;
        naTahu = 'circle';
    }

}

for (let i = 0; i < items.length; i += 1)
    items[i].addEventListener('click', kliknuti);






//------------------------------------------------------------
// const items = document.querySelectorAll('.policko');

// const kliknuti = (event) => {
//     event.target.classList.add('board__field--circle');
//     document.querySelector('.kolecko').src = 'images/circle.svg';
// }



// const naTahu = circle;

// for (let i = 0; i < items.length; i += 1)
//     items[i].addEventListener('click', kliknuti);