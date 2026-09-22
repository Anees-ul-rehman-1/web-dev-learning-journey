// Q02: Create 3 divs with common class name-"box". Access them & some unique text to each of them.
let divs = document.querySelectorAll(".box");

divs[0].innerHTML = divs[0].innerHTML + " Apna College";
divs[1].innerHTML = divs[1].innerText + " Anees Ul Rehman";
divs[2].innerHTML = divs[2].textContent + " Khalid";


let idx = 1;
for (let div of divs) {
    div.innerHTML = `${div.innerHTML} (New Unique div ${idx})`
    idx++;
}


