let button = document.createElement('button');
button.innerText  = "click me!";
Object.assign(button.style, {
    background: "red", 
    color: "white",
    paddingBlock: "1rem",
    paddingInline: "2rem",
    border: "none",
    fontWeight: "600",
});

let body = document.querySelector('body');
body.prepend(button);