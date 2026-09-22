const consoleWraps = document.querySelectorAll('.consoleWrap');

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
                output.innerHTML = '<span class="placeholder"> // ran with no console.log output </span>';
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


// slecting element by id selector
let idSection = document.getElementById('domP'); //section domP
console.log(idSection);
console.dir(idSection);
console.log(idSection.innerHTML);
console.log(idSection.innerText);


let idHeading = document.getElementById('heading'); // h1 selected by ID
console.log(idHeading);
console.dir(idHeading);
console.log(idHeading.innerHTML);
console.log(idHeading.innerText);

// selecting element by using element class selector
let classHeading = document.getElementsByClassName('heading');
console.log(classHeading); // output will be in collection of those which has class heading
console.dir(classHeading)
console.log(classHeading[0].innerHTML);
console.log(classHeading[0].innerText);
console.log(classHeading[1].innerHTML);
console.log(classHeading[1].innerText);


// selectin element by using element tag selector
let para = document.getElementsByTagName('p');
console.log(para);
console.log(para[0].innerHTML);
console.log(para[0].innerText);
console.log(para[1].innerHTML);
console.log(para[1].innerText);
console.log(para[2].innerHTML);
console.log(para[2].innerText);



// selecting element by using query selector
// selectin id by query selector
let idSections = document.querySelector('#domP');
console.log(idSections);
console.dir(idSections);
console.log(idSections.innerHTML);
console.log(idSections.innerText);


let idHeadings = document.querySelector('#heading');
console.log(idHeadings);
console.dir(idHeadings);
console.log(idHeadings.innerHTML);
console.log(idHeadings.innerText);


// selecting class by query selector
let classHeadings = document.querySelectorAll('.heading');
console.log(classHeadings);
console.dir(classHeadings);
console.log(classHeadings[0].innerHTML);
console.log(classHeadings[1].innerText);


// selecting html tags using query selector
// by using .querySelector we can only select first p 
let firstP = document.querySelector('p');
console.log(firstP);

// if we want select all same tap we can use queryselector all
let allParahs = document.querySelectorAll('p'); //all elements
console.log(allParahs);
console.log(allParahs[0].innerHTML);
console.log(allParahs[1].innerHTML);
console.log(allParahs[2].innerHTML);

// properties 

// a. tagName : returns tag for element nodes
console.log(`tag name is ${idSection.tagName}`);
console.log(`tag name is ${idHeading.tagName}`);
console.log(`tag name is ${classHeading[0].tagName}`);
console.log(`tag name is ${classHeading[1].tagName}`);
console.log(`tag name is ${para[0].tagName}`);
console.log(`tag name is ${para[1].tagName}`);

// b. inner Text we've already praticed but here we also can  set the inner content 
// console.log(idSection.innerHTML = "Anees Ul Rehman");
// console.log(idHeading.innerHTML = "<span> I've Praticed getElementById/byClass </span>");

// c. innerHTML we've already praticed
// d. textContent 
console.log(idSection.textContent);
console.log(idHeading.textContent);
console.log(classHeading[0].textContent);
console.log(classHeading[1].textContent);
console.log(para[0].textContent);
console.log(para[1].textContent);
console.log(para[2].textContent);

// html collection and node items 

console.log(para.item(0))
console.log(para.item(1));
console.log(para.item(2));


let paragraph = document.querySelector('.paragraph');
console.log(paragraph);

console.log(paragraph.getAttribute('class'));
console.log(paragraph.getAttribute('spellcheck'));
console.log(paragraph.getAttribute('name'));
console.log(idHeading.getAttribute('id'));

// setAttributes
paragraph.setAttribute('class', 'newParagraph');
console.log(paragraph.getAttribute('class'));

let section = document.querySelector('#domP');
console.log(section);
section.style.backgroundColor = "transparent";
section.style.color = "white";
section.style.lineHeight = 3;

// same job but good way to define 
Object.assign(section.style, {
    backgroundColor: "transparent",
    color: "white",
    lineHeight: 3
});

let button = document.createElement('button');
button.innerHTML = "Click here";
Object.assign(button.style, {
    backgroundColor: "transparent",
    color: "white",
    paddingBlock: ".5rem",
    paddingInline: "2rem",
    border: "none",
    boxShadow: " 0 0 10px var(--secondry-bg)"
});
section.append(button);


let newHeading = document.createElement('h3');
newHeading.innerHTML = "<i> Hey this heading & it's style added from JS";
section.prepend(newHeading);
Object.assign(newHeading.style, {
    color: "yellow",
    fontSize: "clamp(1rem, 5vw, 2rem",
    textDecoration: "overline",
});

let hLink = document.createElement('a');
hLink.setAttribute('href', "#");
hLink.innerText = "click here to visit google";
section.before(hLink);
Object.assign(hLink.style, {
    color: "aqua",
    textDecoration: "underline"
});

let hLink1 = document.createElement('a');
hLink1.setAttribute('href', 'https://www.facebook.com');
hLink1.setAttribute('target', '_blank');
hLink1.innerText = "click here to visit facebook";
section.after(hLink1);
Object.assign(hLink1.style, {
    color: "aqua",
    textDecoration: "underline"
});

paragraph.remove();


