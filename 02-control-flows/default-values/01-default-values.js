function negateOdd(n) {
  let result;

  if (n % 2 === 0) {
    result = n;
  } else {
    result = n * -1;
  }

  return result;
}

console.log(negateOdd(5));
