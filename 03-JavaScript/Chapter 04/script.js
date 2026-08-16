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
            
            if(logs.length > 0) {
                output.innerHTML = '<span class="ok">' +logs.join('\n') + '</span>';
            } else {
                output.innerHTML = '<span class="placeholder"> // ran with no console.log output</span>';
            } 
        } catch (err){
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


// practiced content

// strings
let str = "ApnaCollege";
let str2 = 'ShardhaWedding';
console.log(str);
console.log(str2);

//--------- strings property ------------
// length 
console.log(str.length);
console.log(str2.length);

// indices 
console.log(str[4]);
console.log(str[8]);
console.log(str[0], str[1], str[2], str[3], str[4], str[5], str[6], str[7], str[8], str[9], str[10]);

// Template Literals
let specialString =  `This is a Template Literal`;
console.log(specialString);
console.log(typeof specialString);

let obj = {
    item: "pen",
    price: 10,
};

let output = `Ths cost of ${obj.item} is ${obj.price} pkr.`
console.log(output);
console.log("The cost of", obj.item, "is", obj.price, "pkr.");

// escape characters
console.log("Anees\nUl\nRehman");
console.log("Anees\tUl\tRehman");

//------------ string methods -----------
console.log(specialString.toUpperCase());
console.log(specialString.toLowerCase());
console.log(specialString);
specialString = `   This is TEMPLATE LITERAL       JS          `;
console.log(specialString);
console.log(specialString.trim());

let number = "123456789";
console.log(number.slice(3, 7));
result = specialString.concat(number);
console.log(result.trim());

let str3 = "hello";
console.log(str3)
console.log(str3.replace("h", "y"));
console.log(str3.replace("lo", "p"));

str3 = "hellololo";
console.log(str3);
console.log(str3.replaceAll("lo", "p"));

