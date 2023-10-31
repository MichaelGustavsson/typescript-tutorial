/**************************************************
                  GENERICS
**************************************************/
// Detta är inte generic, definierar att funktionen kan ta antingen string eller number som argument
// function demo(arg: string | number): string | number {
//   return "Hello World"
// }

// Det finns flera inbyggda generics i TypeScript
// Exempel 1:
// const numbers: Array<number> = [];
// const names: Array<string> = [];
// const booleans: Array<boolean> = [];

// Exempell 2:
// const inputVehicle = document.querySelector('#vehiclename');
// console.log(inputVehicle.value);
// const inputVehicle = document.querySelector('#vehiclename') as HTMLInputElement;
// console.log(inputVehicle.value);
// const inputVehicle = document.querySelector<HTMLInputElement>('#vehiclename')!;
// console.log(inputVehicle.value);

// Enkelt exempel...

function demoString(arg: string): string {
  return arg;
}
function demoNumber(arg: number): number {
  return arg;
}
function demoBoolean(arg: boolean): boolean {
  return arg;
}

// Detta är inget bra exempel...
// argument kan vara av annan typ än retur typ...
// function demo(arg: any): any{
//   return arg;
// }

function demo<T>(arg: T): T {
  return arg;
}

// const value1 = demo<string>('kalle');
// const value2 = demo<number>(23);
// const value3 = demo<boolean>(true);

// Type inference...
const value1 = demo('kalle');
const value2 = demo(23);
const value3 = demo(true);

console.log(value1, value2, value3);

// funktioner med flera argument...
// function merge(x, y) {
//   return {
//     ...x,
//     ...y,
//   };
// }

// Returns an intersect of T & U...
// Utan kontroll om T och U är objekt!!!
// function merge<T, U>(x: T, y: U) {
//   return {
//     ...x,
//     ...y,
//   };
// }

// Försök 1...
// const merged = merge(
//   { name: 'Volvo' },
//   { features: ['Navigator', 'Heated backseat'] }
// );

// Försök 2...
// const merged = merge({ name: 'Volvo' }, 12);

// Returns an intersect of T & U...
// Med Type Constraint
function merge<T extends object, U extends object>(x: T, y: U) {
  return {
    ...x,
    ...y,
  };
}

// Nu går inte detta att göra!!!
// const merged = merge({ name: 'Volvo' }, 12);
const merged = merge({ name: 'Volvo' }, { numberOfGears: 6 });

console.log(merged);

// Använd ett interface som begränsning
interface Vehicle {
  name: string;
  numberOfGears: number;
}

// function addVehicle<T>(vehicle: T): T {
//   return vehicle;
// }

function addVehicle<T extends Vehicle>(vehicle: T): T {
  return vehicle;
}

// const addedVehicle1 = addVehicle({ name: 'Volvo', gears: 6 });
const addedVehicle2 = addVehicle({ name: 'Volvo', numberOfGears: 6 });
// console.log('addedVehicle: ', addedVehicle1);
console.log('addedVehicle: ', addedVehicle2);

// Hur skapar vi generics med standard typ?...
// function createArray<T>(): T[] {
//   return [];
// }

function createArray<T = string>(): T[] {
  return [];
}

const arr1 = createArray();
const arr2 = createArray<number>();

// Skapa generic klasser...

interface Movie {
  title: string;
  director: string;
  length: number;
}

interface Music {
  title: string;
  artist: string;
}

// class MoviePlaylist {
//   public movies: Movie[] = [];
// }

// class MusicPlaylist {
//   public music: Music[] = [];
// }

class Playlist<T> {
  public list: T[] = [];
  public add(item: T) {
    this.list.push(item);
  }
}

const musicList = new Playlist<Music>();
const movieList = new Playlist<Movie>();

// musicList.add
// movieList.add
