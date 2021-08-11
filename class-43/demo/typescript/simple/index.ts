const word: string = 'Jacob';

function hello(arg: string): string {
  return `Hello ${arg}`;
}

// let greeting: string = hello(word);

interface User {
  name: string;
  id: number;
}

class User {
  name: string;
  id: number;

  constructor(name: string, id: number = 1) {
    this.name = name;
    this.id = id;
  }
}

const Jacob: User = new User('Jacob');

let greeting = hello(Jacob.name);
console.log(greeting);
