// Imperative - sort() mutates original array and returns new array

const grades = ['C', 'A', 'I', 'B', 'F'];

// const sortedGrades = grades.sort();

// console.log(grades); // ['A', 'B', 'C', 'F', 'I'];

// Declarative

const sortedGrades = [...grades].sort();

console.log(grades); // ['C', 'A', 'I', 'B', 'F'];

console.log(sortedGrades); // ['A', 'B', 'C', 'F', 'I'];
