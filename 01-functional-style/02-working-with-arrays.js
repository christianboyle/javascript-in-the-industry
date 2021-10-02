// Imperative

const points = [3, 9, 7, 8, 5, 2, 11, 14];

// let totalPoints = 0;

// for (const point of points) {
//   totalPoints += point;
// }

// console.log(totalPoints); // 59

// Declarative

const totalPoints = points.reduce((total, point) => total + point);

console.log(totalPoints); // 59
