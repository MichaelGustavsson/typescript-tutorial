"use strict";
/***    First try...    ***/
// class Movie{
//   constructor(title, director) {
//     this.title = title;
//     this.director = director;
//   }
// }
/***    Second try...   ***/
// class Movie{
//   constructor(title: string, director:string) {
//     this.title = title;
//     this.director = director;
//   }
// }
/***    third try...   ***/
// class Movie {
//   title: string;
//   director: string;
//   constructor(title: string, director: string) {
//     this.title = title;
//     this.director = director;
//   }
// }
/***    third try with implicit datatyping(inference)...   ***/
// class Movie {
//   title: string;
//   director: string;
//   // releaseYear: number;
//   releaseYear = 2023;
//   constructor(title: string, director: string, releaseYear: number) {
//     this.title = title;
//     this.director = director;
//     // this.releaseYear = 2023
//     this.releaseYear = releaseYear;
//   }
// }
/***    Readonly modifier   ***/
// class Movie {
//   readonly title: string;
//   director: string;
//   // releaseYear: number;
//   releaseYear = 2023;
//   constructor(title: string, director: string, releaseYear: number) {
//     this.title = title;
//     this.director = director;
//     // this.releaseYear = 2023
//     this.releaseYear = releaseYear;
//   }
// }
// /***    public modifier   ***/
// class Movie {
//   public readonly title: string;
//   public director: string;
//   // releaseYear: number;
//   public releaseYear = 2023;
//   constructor(title: string, director: string, releaseYear: number) {
//     this.title = title;
//     this.director = director;
//     // this.releaseYear = 2023
//     this.releaseYear = releaseYear;
//   }
// }
/***    private modifier   ***/
// class Movie {
//   public readonly title: string;
//   public director: string;
//   // releaseYear: number;
//   public releaseYear = 2023;
//   // private length: number;
//   #length: number;
//   constructor(title: string, director: string, releaseYear: number) {
//     this.title = title;
//     this.director = director;
//     // this.releaseYear = 2023
//     this.releaseYear = releaseYear;
//     // this.length = 134;
//     this.#length = 134;
//   }
// }
// /***    Parameter shortcut(Parameters properties)   ***/
// class Movie {
//   constructor(
//     public readonly title: string,
//     public director: string,
//     public releaseYear: number
//   ) {}
// }
/***    getters och setters   ***/
class Movie {
    constructor(title, director, releaseYear, 
    // private _length: number
    _length) {
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this._length = _length;
    }
    get movieinfo() {
        return `${this.title} - ${this.director} - ${this.releaseYear} - ${this._length}`;
    }
    set length(length) {
        this._length = length;
    }
}
var HorrorMovieEnum;
(function (HorrorMovieEnum) {
    HorrorMovieEnum[HorrorMovieEnum["Slasher"] = 0] = "Slasher";
    HorrorMovieEnum[HorrorMovieEnum["Teenage"] = 1] = "Teenage";
    HorrorMovieEnum[HorrorMovieEnum["ScreamQueens"] = 2] = "ScreamQueens";
})(HorrorMovieEnum || (HorrorMovieEnum = {}));
class HorrorMovie extends Movie {
    constructor(category, title, director, releaseYear, _length) {
        super(title, director, releaseYear, length);
        this.category = category;
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this._length = _length;
    }
    displayInfo() {
        this._length = 196;
    }
}
const taken = new Movie('Taken', 'Pierre Morel', 2008, 134);
console.log(taken.title);
// taken.title = "Taken 2";
// console.log(taken._length);
taken.length = 100;
const scream = new HorrorMovie(HorrorMovieEnum.Slasher, 'Scream', 'Wes Craven', 2005, 96);
/***************    ABSTRACT CLASSES    **********************/
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayEmployeeInfo() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
class FullTimeEmployee extends Employee {
    constructor(firstName, lastName, _salary) {
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this._salary = _salary;
    }
    getSalary() {
        return this._salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(firstName, lastName, _hourlyRate, _workedHours) {
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this._hourlyRate = _hourlyRate;
        this._workedHours = _workedHours;
    }
    getSalary() {
        return this._hourlyRate * this._workedHours;
    }
}
// const michael = new Employee();
const michael = new FullTimeEmployee('Michael', 'Gustavsson', 300000);
console.log(michael.getSalary());
const oskar = new PartTimeEmployee('Oskar', 'Oskarsson', 1600, 125);
console.log(oskar.getSalary());
