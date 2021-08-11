# Class 43: Ethics in Tech, Typescript Bonus

## Lightening Talk

* JS Iterators - Dion

## Warm Up

Code Challenge

## Code Review

```javascript
const contact = await Contacts.getAsync(sortType);
```

* How to handle device specific features?
* Publishing to expo.
  * Openning up the app on other devices.
* Emulation on Android Studio
  * .bash_profile getting overwritten or appended to.
  * bash configuration.

## Ethics in Tech

Moral VS Ethics

* What is Ethics?
  * Society
  * Broader considerations
* What is Morals?
  * Individual
  * Specific scenario
* How do they difference:  Ethics is what we all **Should** do, while moral are what we **feel** is right.
  * You will be asked to do things by your employer that don't take into consideration your feelings.
  * Where you're morals exist, and where your employers ethics are defined.

### Readings

* Amazon / Microsoft / Google: working with law enforment agencies with facial recognition.
  * Often corporations ethics fall in line with money making.
  * What was missing here?
    * Law enforcement looking out for the greater good.
    * Maybe there intentions are good, so many little things are overlooked.

* Facet that only recoginizes certain skin colors.

* Is technology ethical?
  * So many examples of ethically unsound practices.
    * What can we as technologists do to enfluence this?
    * Developers have options, there are solutions that can do both (solve problems and do so ethically)
  * Mistakes will always happen.
    * We need to be able to learn from them.
  * Doesn't utilitarian benefit the most represented groups over others?
    * utitlitarion perspectives should be avoided, we should try and learn from these mistakes.
    * Trial and error happens because time is really important.
      * "One size fits all", but not really :(
    * iteration is really important.
  * Any application that is generic, we need to be able to formalize the bounds of those applications.
    * What are the things we need to look out for that present risks.

* A developer working on a survey for a drug.
  * He programmed that was misleading, all the answers led to "you should take this".
  * A young girl died :(.
  * More research to be able to re-program.
  * Ethics vs moral, clearly against his morals and he is hirting, clearly un-ethical but someone was going to do it.  The company should have have better ethics.  A company is being manipulative.
    * So hard to know what effects will occur.

* Speak recoginition for Google / Amazon.
  * Speech recognition being given to prison systems.
  * Something to be wary of as a user.
  * How do we feel about this?
    * Would you be comfortable with a stranger just listening to your conservation.

* Research your companies!!!
  * Do they do things that align with your values.

## Typescript and it's Applications

What is Typescript?

* A superse of JavaScript that allows you to define "types".
* A Type is simply the declaration of primitive and complex data.
  * JS
    * string
    * number
    * boolean
    * undefined
    * null
  * Typescript
    * enum - enumerated set of value.
    * function
    * generics (variables for types)

  * Usage: whenever we know the type of data that vairables / functions / class use, we can declare those using typescript syntax:

```typescript

let name = "Jacob";

// declare a vairable with a type
let name: string = "Jacob";
// enforcing a type on this variable

name = 1 // this is a "compilation" error in typescript
```

* Compilation??
  * Typescript is a compiled language, meaning that in order to run in our engine / runtime environment, we turn our typescript back into JS.
  * All tthis provides is a a safegaurd for runtime code.
    * Trying to use a function that is declared as recieving specific types, typescript will let you know.

```typescript


// declaring comoplex types.
// interface allows us to define complex data types.
interface Person {
  name: string;
  id: number;
}

// typescript would really prefer that we declare a type for "person" and a return value.
function greeting(person: Person): string {
  return `hello ${person.name}`; // if we try to use a property that is not defined on the interface, typescript will let us know.
}
```

* Typescript comes with a compiler, we need to run it in order to create our runtime code.
  * `tsc` command line compiler.
* All this can be done with the typescript npm package.
