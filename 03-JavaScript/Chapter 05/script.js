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
                output.innerHTML = '<span class="placeholder">// ran with no console.log output</span>';
            }
        } catch (err) {
            output.innerHTML = '<span class="err"> ✕ ' + err.message + '</span>';
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


// Practced today content 
// Arrays
// exmple
let marksStudent1 = 80;
let marksStudent2 = 50;
let marksStudent3 = 40;
let marksStudent4 = 30;
let marksStudent5 = 90;

let marks = [97, 44, 54, 65, 77];
console.log(marks);
console.log(marks.length);
console.log(marks[4]);

let heros = ["Ironman", "thor", "hulk", "spiderman", "tony stark"];
console.log(heros);
console.log(heros.length);
console.log(heros[0]);
console.log(heros[1])
console.log(typeof heros);

// looping on arrays 
// array element print using for loop
for (let i = 0; i < heros.length; i++) {
    console.log(heros[i]);
}

// array element print using for of loop 
for (let hero of heros) {
    console.log(hero.toUpperCase());
    console.log(hero.toLowerCase())
}

// array element print using for in loop 
for (let i in heros) {
    console.log(i);
}


// array methods 
// push method 
let foodItems = ["potato", "apple", "litchi", "tomato"];
console.log(foodItems);
foodItems.push("chips", "paneer", "burger");
console.log(foodItems);

// pop method 
// foodItems.pop();
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log(deletedItem);

// tosString method 
console.log(foodItems.toString());
console.log(`original array still same ${foodItems}`);


let scores = [54, 67, 43, 76, 65];
console.log(scores.toString());
console.log(`original scores array still ${scores}`);

// array concat method 
let marvel = ["thor", "spiderman", "ironman"];
let dcHeroes = ["superman", "baaghi", "batman"];
let indianHeroes = ["krish", "sakhtiman"];
console.log(marvel);
console.log(dcHeroes);
let mixHeroes = marvel.concat(dcHeroes).concat(indianHeroes);
console.log(mixHeroes);
console.log(dcHeroes);
console.log(marvel);

// unShift and shift  method add to start 
marvel.unshift("antman");
console.log(marvel);

let val = marvel.shift();
console.log(marvel)
console.log(val);

// slice method 
let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr.Strange"];

console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1, 3));

// splice method  add, remove, replace
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let spliced = arr.splice(2, 2, 101, 2026, 2035, 2045)
console.log(arr)
// console.log(marveHeroes)