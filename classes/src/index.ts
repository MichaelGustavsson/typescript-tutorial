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
  // skapar egenskaperna...

  private _test: string;
  constructor(
    public title: string,
    public director: string,
    public releaseYear: number,
    protected _length: number
  ) {
    this._length = 180;
    this._test = 'Hej';
  }

  get movieInfo(): string {
    return `${this.title} - ${this.director} - ${this.releaseYear} - ${this._length}`;
  }

  set length(length: number) {
    // Rimlighetslogik...
    if (length > 240) {
      throw new Error('Alldeles för lång, korta ner filmen');
    } else {
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

enum HorrorMovieEnum {
  Slasher,
  Teenage,
  ScreamQueens,
}

class HorrorMovie extends Movie {
  constructor(
    public category: HorrorMovieEnum,
    public title: string,
    public director: string,
    public releaseYear: number,
    protected _length: number
  ) {
    // Här skapar vi föräldern(Movie)...
    // new Movie('Scream', 'Wes Craven', 2005, 96)
    super(title, director, releaseYear, _length);
    // Nu kan vi gå vidare och skapa en instans av HorrorMovie...
    // category = Slasher

    this._length;
  }

  public displayMovieInfo() {
    this._length = 194;
  }
}

const scream = new HorrorMovie(
  HorrorMovieEnum.Slasher,
  'Scream',
  'Wes Craven',
  2005,
  96
);
scream.length = 108;

class Vehicle {}

class Car extends Vehicle {}

class Taxi extends Car {}

class Bike extends Vehicle {}

/*******************************************************************
                  ABSTRAKT KLASSER(ABSTRACT CLASSES)
*******************************************************************/

abstract class Employee {
  constructor(public firstName: string, public lastName: string) {}
  // Abstract functions...
  // Abstrakta funktioner är tvingande...
  abstract getSalary(): number;

  // Concrete functions with it's on implementation...
  displayEmployeeInfo(): void {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

// Concrete class
class FullTimeEmployee extends Employee {
  constructor(
    public firstName: string,
    public lastName: string,
    private _salary: number
  ) {
    super(firstName, lastName);
  }

  // Concrete implementation of abstract function...
  getSalary(): number {
    return this._salary;
  }

  // Override(Åsidosätter) funktionen i föräldern
  override displayEmployeeInfo(): void {
    console.log(
      `Display employee info(FullTimeEmployee): ${this.firstName} ${this.lastName} ${this._salary}`
    );
  }
}

// Concrete class
class PartTimeEmployee extends Employee {
  constructor(
    public firstName: string,
    public lastName: string,
    private _hourlyRate: number,
    private _workedHours: number
  ) {
    super(firstName, lastName);
  }

  // Concrete implementation of abstract function...
  // Data hiding...
  getSalary(): number {
    return this._hourlyRate * this._workedHours;
  }
  // Override(Åsidosätter) funktionen i föräldern
  override displayEmployeeInfo(): void {
    console.log(
      `Display employee info(PartTimeEmployee): ${this.firstName} ${this.lastName} ${this._hourlyRate} ${this._workedHours}`
    );
  }
}

const michael = new FullTimeEmployee('Michael', 'Gustavsson', 300000);
michael.displayEmployeeInfo();

const tobias = new PartTimeEmployee('Tobias', 'Tobiasson', 800, 120);
tobias.displayEmployeeInfo();

const nisse: Employee = new FullTimeEmployee('nisse', 'nilsson', 400);

// Polymorfism...
nisse.displayEmployeeInfo();
