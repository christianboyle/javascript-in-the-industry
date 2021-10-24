function multiply(a, b, c) {
  if (a && !b) {
    return a;
  }

  if (a && !c) {
    return a * b;
  }

  if (a && b && c) {
    return a * b * c;
  }
}

const m1 = multiply(2); // 2
const m2 = multiply(2, 2); // 4
const m3 = multiply(2, 2, 2); // 8

console.log(m1, m2, m3); // 2 4 8
