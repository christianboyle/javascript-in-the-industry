const members = [
  {
    name: 'Paul',
    age: 17,
  },
  {
    name: 'Mary',
    age: 16,
  },
  {
    name: 'Peter',
    age: 15,
  },
  {
    name: 'John',
    age: 31,
  },
];

function getValidCandidate(candidate, members) {
  if (candidate) {
    const member = members.find((member) => member.name === candidate);

    if (member) {
      const hasLegalAge = member.age > 18;

      if (hasLegalAge) {
        return member;
      }
    }
  }
}

console.log(getValidCandidate('John', members)); // { name: 'John', age: 31 }
