"use strict";
// Type of Guards...
function triple(value) {
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
}
else {
    elem;
}
// function countCharacters(word: string | null) {
//   if (word) {
//     return word.length;
//   } else {
//     word.length
//   }
// }
function countCharacters(word) {
    if (word) {
        return word.length;
    }
    else {
        // word.length;
        console.log('Finns inget ord att räkna fram längden för!');
    }
}
function displayDuration(media) {
    if ('episodes' in media) {
        return media.episodes * media.length;
    }
    return media.length;
}
console.log(displayDuration({
    title: 'Taken',
    director: '',
    length: 134,
    genre: ['action', 'thriller'],
}));
console.log(displayDuration({ title: 'La Brea', episodes: 14, length: 40 }));
// INSTANCE OF NARROWING...
class Car {
    constructor(name) {
        this.name = name;
    }
}
class Boat {
    constructor(name) {
        this.name = name;
    }
}
function displayName(vehicle) {
    // if ("name" in vehicle) {
    //   vehicle
    // }
    if (vehicle instanceof Car) {
        console.log(vehicle.name);
    }
    else {
        console.log(vehicle.name);
    }
}
displayName(new Car('Volvo V60'));
displayName(new Boat('Fanny'));
// TYPE PREDICATE...
// Predicate function...
function isMovie(media) {
    return media.genre !== undefined;
}
function displayMediaInfo(media) {
    if (isMovie(media)) {
        return `${media.title} - ${media.director} - ${media.length} ${media.genre}`;
    }
    return `${media.title} - ${media.episodes} - ${media.length}`;
}
