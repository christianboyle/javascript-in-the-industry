function multiply(a) {
  return function (b) {
    return b ? multiply(b * a) : a;
  };
}

const m1 = multiply(2)(); // 2
const m2 = multiply(2)(2)(); // 4
const m3 = multiply(2)(2)(2)(); // 8

console.log(m1, m2, m3); // 2 4 8
