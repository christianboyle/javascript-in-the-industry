/*
Object-oriented programming follows an imperative paradigm.
Functional programming follows a declarative paradigm.
*/

// Imperative

function multiplyAll(list) {
  for (let i = 0; i < list.length; i++) {
    list[i] *= 2;
  }
}

const listOfNumbers = [1, 2, 3, 4, 5];
//multiplyAll(listOfNumbers); // [1, 2, 3, 4, 5]
//console.log(listOfNumbers); // [2, 4, 6, 8, 10]

// Declarative - if line 15 is uncommented then we get [4, 8, 12, 16, 20], because listOfNumbers is mutated in the imperative example

const multipliedNumbers = listOfNumbers.map((n) => n * 2);
console.log(multipliedNumbers); // [2, 4, 6, 8, 10]
