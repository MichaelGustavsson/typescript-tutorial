const KLM = {
  airline: 'KLM',
  iataCode: 'KL',
  bookings: [],
  // book: function () {},
  book(flightNumber, passenger) {
    console.log(
      `${passenger} har bokat en plats med ${this.airline} och flightnummer ${flightNumber}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, passenger });
  },
};

KLM.book(1178, 'Michael Gustavsson');
KLM.book(1178, 'Annika Gustavsson');
KLM.book(2278, 'Bertil Jonsson');

const cityhopper = {
  airline: 'KLM Cityhopper',
  iataCode: 'WA',
  bookings: [],
};

const book = KLM.book;
// book(3322, 'Claes Stjernlöf');
book.call(cityhopper, 3322, 'Claes Stjernlöf');
console.log(cityhopper);

book.call(KLM, 4569, 'Ulf Örnqvist');
console.log(KLM);

const finnair = {
  airline: 'Finnair',
  iataCode: 'AY',
  bookings: [],
};

book.call(finnair, 1111, 'Lars Hansson');
console.log(finnair);

// Exempel på omodern JavaScript...
// Metoden apply...
const flightInfo = [4431, 'Oscar Jacobsson'];
book.apply(finnair, flightInfo);
console.log(finnair);

// Gör så här istället...
book.call(cityhopper, ...flightInfo);
console.log(cityhopper);

// Metoden bind...
// Returnerar alltid en ny funktion...
const bookWA = book.bind(cityhopper);
const bookKL = book.bind(KLM);
const bookAY = book.bind(finnair);

bookWA(1122, 'Eva Larsson');
bookKL(3355, 'Lina Eriksson');
bookAY(7788, 'Erland Arvidsson');

console.log(cityhopper);
console.log(KLM);
console.log(finnair);

// Skapa en "Partial Application"
// Betyder att delar av argument redan är definierade/satta...
const bookWA6498 = book.bind(cityhopper, 6498);
bookWA6498('Leif Gustavsson');
bookWA6498('Eva Gustavsson');
console.log(cityhopper);

// Working with events...
finnair.meals = 200;
// Metod...
// finnair.addMeal = function () {
//   console.log(this);

//   this.meals++;
//   console.log(this.meals);
// };

finnair.addMeal = () => {
  finnair.meals++;
  console.log(finnair.meals);
};

// Fungerar ej!
// document.querySelector('.btn').addEventListener('click', finnair.addMeal);

// Detta fungerar...
// document.querySelector('.btn').addEventListener('click', finnair.addMeal.bind(finnair.addMeal));
// document.querySelector('.btn').addEventListener('click', finnair.addMeal.bind(finnair.addMeal));
document.querySelector('.btn').addEventListener('click', finnair.addMeal);
// document.querySelector('.btn').addEventListener('click', () => finnair.addMeal());

// Partial applications...
const calculateVAT = (rate, value) => value + value * rate;
console.log('Inklusive moms: ', calculateVAT(0.25, 200));

// BAD PRACTICE!!!
// const calculateGroceryVAT = (rate, value) => value + value * rate;

const groceryVAT = calculateVAT.bind(null, 0.12);
console.log('Livsmedel inklusive moms: ', groceryVAT(19.98).toFixed(2));
console.log('Livsmedel inklusive moms: ', groceryVAT(21.08).toFixed(2));

// IIFE Immediatelly Invoked Function Expression...
(function () {
  console.log('IIFE is running');
  let firstName = 'Nisse';
})();

// console.log(firstName);

(() => console.log('IIFE is running inside a arrow function...'))();
