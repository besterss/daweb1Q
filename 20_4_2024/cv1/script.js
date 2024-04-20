/*
* 1 CV - zkracování
*/

/*const isEmail = (str) => {
    return str.includes('@');
};*/

const isEmail = (str) => str.includes('@');

/* const roll = () => {
    return Math.floor(Math.random() * 6) + 1;
}; */

const roll = () => Math.floor(Math.random() * 6) + 1;

/*const getNumber = (id) => {
    return Number(document.querySelector(`#${id}`).value);
}; */

const getNumber = (id) => Number(document.querySelector(`#${id}`).value);

/*
const weather = (temperature) => {
    if (temperature > 16) {
      return 'teplo';
    }
  
    return 'zima';
};*/

const weather = (temperature) => (temperature > 16 ? 'teplo' : 'zima');

/*
* 2 CV - map
Opakování map

*/

const weekdays = [
    'pondělí',
    'úterý',
    'středa',
    'čtvrtek',
    'pátek',
    'sobota',
    'neděle',
];

const months = [
    {
      name: 'leden',
      days: 31,
    },
    {
      name: 'únor',
      days: 28,
    },
    {
      name: 'březen',
      days: 31,
    },
    {
      name: 'duben',
      days: 30,
    },
    {
      name: 'květen',
      days: 31,
    },
    {
      name: 'červen',
      days: 30,
    },
    {
      name: 'červenec',
      days: 31,
    },
    {
      name: 'srpen',
      days: 31,
    },
    {
      name: 'září',
      days: 30,
    },
    {
      name: 'říjen',
      days: 31,
    },
    {
      name: 'listopad',
      days: 30,
    },
    {
      name: 'prosinec',
      days: 31,
    },
];

  /*
    Z pole weekdays vyrobte pole obsahující všechny názvy dnů napsané VELKÝMI PÍSMENY.
    -> toUpperCase()
    Z pole weekdays vyrobte pole obsahující pouze první dvě písmena každého dne, tedy
    ['po', 'út', 'st' ];
    -> slice(0,2)
    Z pole months vyrobte pole obsahující pouze počty dní v každém měsíci.
    -> jen days
    Z pole months vyrobte pole obsahující pro každý měsíc datum jeho prvního dne v roce 2020, tedy
    ['1. leden 2020', '1. únor 2020'];
    ->  textový obsah ``
*/

const weekdaysUpper = weekdays.map((weekday) => weekday.toUpperCase())
console.log(weekdaysUpper)

const weekdaysJustTwoChars = weekdays.map((weekday) => weekday.slice(0,2))
console.log(weekdaysJustTwoChars)

const monthDays = moth
