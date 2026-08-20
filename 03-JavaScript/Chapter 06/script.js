const consoleWraps = document.querySelectorAll('.console-wrap');

consoleWraps.forEach((wrap) => {
    const input = wrap.querySelector('.jsInput');
    const output = wrap.querySelector('.output');
    const runBtn = wrap.querySelector('.runBtn');

    function runCode() {
        const logs = [];

        const fakeConsole = {
            log: (...args) => {
                const formatted = args.map((a) => {
                    if (typeof a === 'object' && a !== null) {
                        try {
                            return JSON.stringify(a, null, 2)
                        } catch (e) {
                            return String(a);
                        }
                    }
                    return String(a);
                }).join(' ');
                logs.push(formatted);
            }
        };

        try {
            const fn = new Function('console', input.value);
            fn(fakeConsole);

            if (logs.length > 0) {
                output.innerHTML = '<span class="ok">' + logs.join('\n') + '</span>';
            } else {
                output.innerHTML = '<span class="placeholder">// ran with no conosle.log output</span>';
            }
        } catch (err) {
            output.innerHTML = '<span class="err">✕ ' + err.message + '</span>';
        }
    }

    runBtn.addEventListener('click', runCode);
    input.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            e.preventDefault();
            runCode();
        }
    });
});


// practiced content
// functions in JS

// .log .toUpperCase .toLowerCase .push are all built in function of JavaScript
console.log("hello")
"abc".toUpperCase();
"xyz".toLowerCase();
[1, 2, 3].push(1);

// Function Definitioniii
function name() {
    // do some work
}

// example 
function myFunction() {
    console.log("welcome to Apna College!");
    console.log("We are learning JS :");
}

// function call or invoke function
// functionName();
// example 
myFunction();
myFunction();
// function argument or parameter -> input 
function newFunction(msg, n) {
    console.log(msg, n);
}

newFunction("Write any message here", 100); // argument parameter

// function -> for 2 numbers, sum
function sum(x, y) {
    console.log(x + y);
}
sum(10, 20);

// return
function sum1(x, y) {
    let s = x + y;
    console.log("Before return");
    return s;
    console.log("After return"); // kabhi nhi print hoga 
}

let value = sum1(10, 10);
console.log(value);


// arrow function 
// sum function 
function sum2(a, b) {
    return a + b;
}
let val = sum2(10, 40);
console.log(val);

// modern js arrow fn
const arrowSum = (a, b) => {
    console.log(a + b);
}
console.log(arrowSum);
arrowSum(30, 70);


// multiple function 
function mul(a, b) {
    console.log(a * b);
}
mul(10, 4);

// modern js arrow function
const arrowMul = (a, b) => {
    return a * b;
}
arrowMul(3, 4);


// forEach(callBackFunction); forEach loop in arrays 
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
arr.forEach(function printVal(val) {// value at each idx
    console.log(val)
});

let arr2 = ["Anees", "khalid", "Yasir", "Nasir", "Khalil", "Ikhtiyar", "Abdul Rehman"]
arr2.forEach((val, i, a) => {
    val = val.toUpperCase();
    console.log(val, i, a);
});

// array methods 
// map
let newArr = arr.map((val) => {
    return val;
});
console.log(newArr);

// filter method 
let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);

let oddArr = arr.filter((val) => {
    return val % 2 !== 0;
});
console.log(oddArr);

let primeArr = arr.filter((val) => {
    if (val < 2) return false;
    for (let i = 2; i < val; i++) {
        if (val % i === 0) {
            return false;
        }
    }
    return true;
});
console.log(primeArr)

// value greater than 3
let newNum = arr.filter((val) => {
    return val > 3;
});
console.log(newNum);

// reduce method
const sumArr = arr.reduce((res, curr) => {
    return res > curr ? res : curr;
    // return res < curr ? res : curr;
});
console.log(sumArr);

console.log(arr.reduce((res, curr) => {
    return res < curr ? res : curr;
}));

console.log(arr.reduce((res, curr) => {
    return curr + res
}));

// average by using reduce method 
const sumArr1 = arr.reduce((res, curr) => res + curr)/arr.length;
console.log(sumArr1)