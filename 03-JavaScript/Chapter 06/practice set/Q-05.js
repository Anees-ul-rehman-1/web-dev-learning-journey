// a. Take a number n as input from user. Create an array of numbers from 1 to n.
let userNum = Number(prompt("Enter a number: "));
const numFun = () => {
    let numberArr = [];
    if (userNum < 1) {
        for (let i = 0; i >= userNum; i--) {
            numberArr.push(i);
        }
        return numberArr;
    } else {
        for (let i = 1; i <= userNum; i++) {
            numberArr.push(i);
        }
        return numberArr;
    }

}
let sequence = numFun();
console.log(sequence);

// b. Use the reduce method to calculate sum of all numbers in the array
let sum = numFun();
sum = sum.reduce((res, curr) => {
   return res + curr
});
console.log(sum);


// c. Use the reduce method to calculate product of all numbers in the array
let product = numFun();

let product1 = product.reduce((res, curr) => {
    return res * curr;
});
console.log(product1);

