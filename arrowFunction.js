// Task 1

const greet = (name) => `Hello, ${name}`;
console.log(greet("Yousef"));

// Task 2

const sum = (num1, num2) => num1 + num2;

console.log(sum(10, 5));

// Task 3

const squareANumber = (num1) => num1 ** 2;

// Challenge

const array = [2, 4, 6, 8];

const squareAnArray = (array) => {
  let squaredArray = [];

  for (let num of array) {
    squaredArray.push(num ** 2);
  }
  return squaredArray;
};

console.log(squareAnArray(array));
