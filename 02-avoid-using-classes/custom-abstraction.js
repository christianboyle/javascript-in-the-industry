function hasPassed({ points, threshold }) {
  let average = 0;
  let sum = 0;
  let acceptedPoints = [];

  for (let i = 0; i < points.length; i++) {
    if (points[i] < threshold) {
      acceptedPoints.push(points[i]);
      sum += points[i];
    }

    if (i === points.length - 1) {
      average = sum / acceptedPoints.length;
    }

    return average > 4.5;
  }
}

const passedBasedOnPoints = hasPassed({
  points: [3, 5, 9],
  threshold: 8,
});

console.log(passedBasedOnPoints); // false
