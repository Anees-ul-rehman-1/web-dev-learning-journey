// Playround pratice box
// STEP 1: find EVERY playground block on the page (not just one)
const consoleWraps = document.querySelectorAll('.console-wrap');

// STEP 2: loop through each one set it up independently 
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
                            return JSON.stringify(a, null, 2);
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
                output.innerHTML = '<span class="placeholder">//ran with no console.log output</span>';
            }

        } catch (err) {
            output.innerHTML = '<span class="err">✗' + err.message + '</span>';
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


// pricticed content 

// This code prints Hello world!
let greeting = "Hello world!";
console.log(greeting);

//Operators in JS
//Arthmetic operators
let a = 5;
let b = 2;
console.log("a = ", a, "& b = ", b);
console.log("a + b =", a + b);      // output will be addition of a + b
console.log("a - b =", a - b);      // output will be subtraction of a - b
console.log("a * b =", a * b);      // output will be multiplication of a * b
console.log("a / b =", a / b);      // output will be division of a / b
// modules operator
console.log("a % b =", a % b);      // output will be remainder of a / b
// exponentiation operator
console.log("a ** b = ", a ** b);   // ooutput will be a power b (a^b)
// unary operators
// increment , decreement operator
console.log("a-- =",a--);
console.log("now a =",a);
console.log("a++ =", a++);
console.log("now a =", a);
console.log("--a =", --a);
console.log("++a =", ++a);



//Assignment Operators
a += 4; // a = a + 4
console.log("a =", a);
a -= 4; // a = a -4
console.log("a =", a);
a *= 4; // a= a * 4
console.log("a =", a);
a /= 4; // a = a / 4
console.log("a =", a);
a %= 4; // a = a % 4
console.log("a =", a);
a **= 4; // a = a ** 4
console.log("a= ", a);

c = a;
c += a;
console.log("c =",c);

// Comparison Operators
let d = 5;
let e = 2;
let f = "5";
console.log("d =", d, "e =", e, "f =", f);
console.log("d == e", d == e);
console.log("d != e", d != e);
console.log("d == f", d == f); // alert f's value is string althouht js converted string to number then compared it 
console.log("d != f", d != f);  
console.log("d === f", d === f); // we had same value but it was strict operator 
console.log("d !== f", d !== f);


console.log("d > e", d > e);
console.log("d < e", d < e);
console.log("d >= f", d >= e);
console.log("d <= e", d <= e);


// logical operators
// logical and &&
let cond1 = d > e;   // true
let cond2 = d === 6; // true
console.log("cond1 && cond2 =", cond1 && cond2);
// logical or ||
console.log("cond1 || cond2 =", cond1 || cond2);
// logical not !
console.log("! cond2 =", ! cond2)
console.log("! cond1 =", ! cond1);


