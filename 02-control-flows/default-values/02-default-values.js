function negateOdd(n) {
  let result = n;

  if (n % 2 !== 0) {
    result = n * -1;
  }

  return result;
}

console.log(negateOdd(5));
