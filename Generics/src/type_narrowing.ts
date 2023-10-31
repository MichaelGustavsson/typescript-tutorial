// Type of Guards...
function triple(value: string | number) {
  if (typeof value === 'string') {
    return value.repeat(3);
  }
  return value * 3;
}

console.log(triple('Hello'));
console.log(triple(4));

// Truthiness guard...
const elem = document.querySelector('#xyz');

if (elem) {
  elem;
} else {
  elem;
}

// function countCharacters(word: string | null) {
//   if (word) {
//     return word.length;
//   } else {
//     word.length
//   }
// }

function countCharacters(word?: string) {
  if (word) {
    return word.length;
  } else {
    // word.length;
    console.log('Finns inget ord att räkna fram längden för!');
  }
}

// THE IN NARROWING...
interface Movie {
  title: string;
  director: string;
  length: number;
  genre: string[];
}

interface TVShow {
  title: string;
  episodes: number;
  length: number;
}

function displayDuration(media: Movie | TVShow) {
  if ('episodes' in media) {
    return media.episodes * media.length;
  }

  return media.length;
}

console.log(
  displayDuration({
    title: 'Taken',
    director: '',
    length: 134,
    genre: ['action', 'thriller'],
  })
);
console.log(displayDuration({ title: 'La Brea', episodes: 14, length: 40 }));

// INSTANCE OF NARROWING...
class Car {
  constructor(public name: string) {}
}

class Boat {
  constructor(public name: string) {}
}

function displayName(vehicle: Car | Boat) {
  // if ("name" in vehicle) {
  //   vehicle
  // }

  if (vehicle instanceof Car) {
    console.log(vehicle.name);
  } else {
    console.log(vehicle.name);
  }
}

displayName(new Car('Volvo V60'));
displayName(new Boat('Fanny'));

// TYPE PREDICATE...
// Predicate function...
function isMovie(media: Movie | TVShow): media is Movie {
  return (media as Movie).genre !== undefined;
}

function displayMediaInfo(media: Movie | TVShow): string {
  if (isMovie(media)) {
    return `${media.title} - ${media.director} - ${media.length} ${media.genre}`;
  }
  return `${media.title} - ${media.episodes} - ${media.length}`;
}
