"use strict";
// 1: a försöket...
// class Movie{
//   constructor(title:string, director: string) {
//     this.title = title;
//     this.director = director;
//   }
// }
// 2:a försöket...
// class Movie {
//   // skapar egenskaperna...
//   title: string;
//   director: string;
//   constructor(title: string, director: string) {
//     this.title = title;
//     this.director = director;
//   }
// }
// 3:e försöket visa hur implicit typning(inference)...
// class Movie {
//   // skapar egenskaperna...
//   title: string;
//   director: string;
//   releaseYear = 2023;
//   constructor(title: string, director: string, releaseYear: number) {
//     this.title = title;
//     this.director = director;
//     this.releaseYear = releaseYear;
//   }
// }
// 4:e försöket använda readonly mekanismen
// class Movie {
//   // skapar egenskaperna...
//   readonly title: string; // Endast constructor funktionen får skriva till en readonly egenskap...
//   director: string;
//   releaseYear = 2023;
//   constructor(title: string, director: string, releaseYear: number) {
//     this.title = title;
//     this.director = director;
//     this.releaseYear = releaseYear;
//   }
// }
// // 5:e public och private
// class Movie {
//   // skapar egenskaperna...
//   private readonly _title: string;
//   private _director: string;
//   private _releaseYear = 2023;
//   private _movieSecret: string;
//   #rating: number;
//   constructor(
//     title: string,
//     director: string,
//     releaseYear: number,
//     rating: number
//   ) {
//     this._title = title;
//     this._director = director;
//     this._releaseYear = releaseYear;
//     this._movieSecret = 'My Secret';
//     this.#rating = rating;
//   }
//   get movieTitle() {
//     return this._title;
//   }
//   get movieDirector() {
//     return this._director;
//   }
//   get movieReleaseYear() {
//     return this._releaseYear;
//   }
//   public displaySecret() {
//     return this._movieSecret;
//   }
// }
// 6:e försöket Parameter shortcut(Parameters properties)
// class Movie {
//   // skapar egenskaperna...
//   #rating: number;
//   constructor(
//     private _title: string,
//     private _director: string,
//     private _releaseYear: number,
//     public length: number,
//     private _rating: number
//   ) {
//     this.#rating = _rating;
//   }
//   get movieTitle() {
//     return this._title;
//   }
//   get movieDirector() {
//     return this._director;
//   }
//   get movieReleaseYear() {
//     return this._releaseYear;
//   }
// }
// const taken = new Movie('taken', 'Pierre Morel', 2008, 6.8, 134);
// const title = taken.movieTitle;
// const director = taken.movieDirector;
// const releaseYear = taken.movieReleaseYear;
// const rating = taken.#rating;
// taken.title = 'Taken 2';
/*******************************************************************
                  ARV(INHERITANCE)
*******************************************************************/
class Movie {
    constructor(title, director, releaseYear, _length) {
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this._length = _length;
        this._length = 180;
        this._test = 'Hej';
    }
    get movieInfo() {
        return `${this.title} - ${this.director} - ${this.releaseYear} - ${this._length}`;
    }
    set length(length) {
        // Rimlighetslogik...
        if (length > 240) {
            throw new Error('Alldeles för lång, korta ner filmen');
        }
        else {
            this._length = length;
        }
    }
    test() {
        this._length = 240;
        this._test = 'Hej på dig!';
    }
}
const taken = new Movie('Taken', 'Pierre Morel', 2008, 134);
taken.length = 240;
var HorrorMovieEnum;
(function (HorrorMovieEnum) {
    HorrorMovieEnum[HorrorMovieEnum["Slasher"] = 0] = "Slasher";
    HorrorMovieEnum[HorrorMovieEnum["Teenage"] = 1] = "Teenage";
    HorrorMovieEnum[HorrorMovieEnum["ScreamQueens"] = 2] = "ScreamQueens";
})(HorrorMovieEnum || (HorrorMovieEnum = {}));
class HorrorMovie extends Movie {
    constructor(category, title, director, releaseYear, _length) {
        // Här skapar vi föräldern(Movie)...
        // new Movie('Scream', 'Wes Craven', 2005, 96)
        super(title, director, releaseYear, _length);
        this.category = category;
        this.title = title;
        this.director = director;
        this.releaseYear = releaseYear;
        this._length = _length;
        // Nu kan vi gå vidare och skapa en instans av HorrorMovie...
        // category = Slasher
        this._length;
    }
    displayMovieInfo() {
        this._length = 194;
    }
}
const scream = new HorrorMovie(HorrorMovieEnum.Slasher, 'Scream', 'Wes Craven', 2005, 96);
scream.length = 108;
class Vehicle {
}
class Car extends Vehicle {
}
class Taxi extends Car {
}
class Bike extends Vehicle {
}
/*******************************************************************
                  ABSTRAKT KLASSER(ABSTRACT CLASSES)
*******************************************************************/
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Concrete functions with it's on implementation...
    displayEmployeeInfo() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
// Concrete class
class FullTimeEmployee extends Employee {
    constructor(firstName, lastName, _salary) {
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this._salary = _salary;
    }
    // Concrete implementation of abstract function...
    getSalary() {
        return this._salary;
    }
    // Override(Åsidosätter) funktionen i föräldern
    displayEmployeeInfo() {
        console.log(`Display employee info(FullTimeEmployee): ${this.firstName} ${this.lastName} ${this._salary}`);
    }
}
// Concrete class
class PartTimeEmployee extends Employee {
    constructor(firstName, lastName, _hourlyRate, _workedHours) {
        super(firstName, lastName);
        this.firstName = firstName;
        this.lastName = lastName;
        this._hourlyRate = _hourlyRate;
        this._workedHours = _workedHours;
    }
    // Concrete implementation of abstract function...
    // Data hiding...
    getSalary() {
        return this._hourlyRate * this._workedHours;
    }
    // Override(Åsidosätter) funktionen i föräldern
    displayEmployeeInfo() {
        console.log(`Display employee info(PartTimeEmployee): ${this.firstName} ${this.lastName} ${this._hourlyRate} ${this._workedHours}`);
    }
}
const michael = new FullTimeEmployee('Michael', 'Gustavsson', 300000);
michael.displayEmployeeInfo();
const tobias = new PartTimeEmployee('Tobias', 'Tobiasson', 800, 120);
tobias.displayEmployeeInfo();
const nisse = new FullTimeEmployee('nisse', 'nilsson', 400);
// Polymorfism...
nisse.displayEmployeeInfo();
