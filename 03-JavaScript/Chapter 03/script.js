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
                output.innerHTML = '<span class="placeholder"> // ran with no console.log output</span>';
            }
        } catch (err) {
            output.innerHTML = '<span class="err"> ✕' + err.message + '</span>';
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


// praticed content 

// for loop for multiple time print something
for (let count = 1; count <= 5; count++) {
    console.log("Apna college");
}

console.log("Congratulation! your loop is completed");


// for loop for add number
let sum = 0; 
let number = Number(prompt("Enter a number"))
for (let i = 1; i <= number; i++) {
    sum = sum +i;
}
console.log("sum is", sum);
console.log("Congratulation! your Addition loop is completed");

// infinite loop and never use that anywhere
/* for (let i = 1; i >= 0; i++) {
    console.log("i is =", i);
} */

// while loop 
let i = 1;
while (i <= 10) {
    console.log("Anees Ul Rehman");
    i = i + 1;
}

console.log("Congratulation! your loop is completed");

// a tool that can calulate my earning when I'll launch my LMS saas for schools per school 8000
let school = Number(prompt("Enter number of Schools:"));
let monthlyCharge = 8000;
let total = school * monthlyCharge
console.log("If", school, "schools will use your system you can monthly earn",total);

// same tool with conditional statements
if (school <= 0 || isNaN(school)) {
    console.log("Please Enter a valid number of schools!")
} else {
    console.log("if", school, "schools will use your system you can monthly earn", total);
}


// do while loop 
let p = Number(prompt("Enter a number"));
do {
    console.log("Anees Ul Rehman");
    p++;
} while (p <= 5);


// for of loop 
let size = 0;
let str = "Apna College"
for (let i of str) {
    console.log("i is =", i);
    size++;
}

console.log("String size is =", size);

// for in loop 
let student = {
    name: "Anees Ul Rehamn", 
    age: 20,
    cgpa: 7.5,
    isPass: true,
};

for(let key in student) {
    console.log("key =", key, "value =", student[key]);
}


