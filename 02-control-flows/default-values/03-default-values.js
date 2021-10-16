function negateOdd(n) {
  if (n % 2 === 0) {
    return n;
  }

  return n * -1;
}

console.log(negateOdd(5));
