// Q-03: For a given array of number, print the square of each value using the forEach loop.

// directly using forEAch
let numArr = [12, 13, 14, 15, 16, 17, 18, 20, 21];
numArr.forEach((val) => {
    let square = val * val;
    console.log(square);
});

// using function in forEach parameter
let square1 = ((val) => {
    console.log(val * val);
});

numArr.forEach(square1);