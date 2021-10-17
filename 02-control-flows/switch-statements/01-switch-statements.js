function pointsFromGrade(grade) {
  switch (grade) {
    case 'A':
      return 10;
    case 'B':
      return 8;
    case 'C':
      return 5;
    case 'I':
      return 3;
    case 'F':
      return -1;
    default:
      return NaN;
  }
}

console.log(pointsFromGrade('B')); // 8
