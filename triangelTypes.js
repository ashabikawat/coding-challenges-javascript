function triangleTypes(x, y, z) {
  if (x === y && y === z) {
    return `The triangle is equilateral triangle`;
  } else if (x === y || x === z) {
    return `The triangle is isosceles triangle`;
  } else {
    return `The triangle is scalene triangle`;
  }
}

console.log(triangleTypes(2, 2, 2));
console.log(triangleTypes(2, 2, 3));
console.log(triangleTypes(3, 2, 3));
console.log(triangleTypes(4, 5, 3));
