// Imperative - if you see push() being used it is mutating the array

const activeMembers = ['alex', 'stephanie'];
const candidates = ['alex', 'martin', 'anna'];

// const activeCandidates = [];

// for (const candidate of candidates) {
//   if (activeMembers.includes(candidate)) {
//     activeCandidates.push(candidate);
//   }
// }

// console.log(activeCandidates); // ['alex]

// Declarative

const activeCandidates = candidates.filter((candidate) =>
  activeMembers.includes(candidate)
);

console.log(activeCandidates); // ['alex]
