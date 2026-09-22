const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const div1 = document.querySelector('.div1');

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     console.log('btn1 was clicked');
//     let a = 25;
//     a++;
//     console.log(a);
// };

// btn2.ondblclick = () => {
//     console.log('btn 2 was clicked twice');
//     alert('double clicked on btn2')
// }

// div1.onmouseover = (evt) => { 
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.clientX, evt.clientY);
//     console.log('right now you hovered on div box')
// }

btn1.addEventListener('click', (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log('btn1 was clicked by handler 1');
});

btn1.addEventListener('click', (evt) => {
    console.log('btn1 was clicked by handler 2');
});

const handler3 = (evt) => {
    console.log('btn1 was clicked by handler 3')
}

btn1.addEventListener('click', handler3);

btn1.addEventListener('click', (evt) => {
    console.log('btn1 was clicked by handler 4');
});

btn1.removeEventListener('click', handler3);