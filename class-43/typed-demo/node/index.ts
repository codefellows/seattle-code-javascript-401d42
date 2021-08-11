interface Person {
  name: string;
  id: number;
}

// typescript would really prefer that we declare a type for "person" and a return value.
function greeting(person: Person): string {
  return `hello ${person.name}`; // if we try to use a property that is not defined on the interface, typescript will let us know.
}

const jacob: Person = {
  name: 'Jacob',
  id: 1,
} 

class User {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  greeting(): string {
    return `hello ${this.name}`;
  }
}

const phrase: string = greeting(jacob);
console.log(phrase);

