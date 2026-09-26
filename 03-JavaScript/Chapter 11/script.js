// Async programmin 
console.log('One');
console.log('Two');

function Khalid() {
    console.log("I'm Khalid from Umerkot");
};

setTimeout(() => {
    console.log("I'm Anees Ul Rehman");
    Khalid();
}, 1000);

console.log('Three');
console.log('Four');

// CALLBACKS 
function sum(a, b) {
    console.log(a + b);
};

function calculate(a, b, sumCallBack) {
    sumCallBack('a, b =', a + b)
};

calculate(3, 10, sum);
calculate(10, 5, function (a, b) {
    console.log('a + b =', a + b)
});

calculate(10, 30, (a, b) => {
    console.log('a + b =', a + b)
});


// CALLBACK HELL
// NESTING  EXAMPLES 
// IF INSIDE IF IS CALLING NESTING PROGRAMMING
let age = 19;
if (age >= 18) {
    if (age >= 60) {
        console.log('Secior Citizen');
    } else {
        console.log('Junior Citizen')
    }
} else {
    console.log('Child Citizen');
}

// LOOP INSIDE LOOP IS CALLED NESTING PROGRAMMING
for (let i = 0; i < 5; i++) {
    let str = '';
    for (let x = 0; x < 5; x++) {
        str += x;
    }
    console.log(i, str)
};

// SAME NESTING IN CALLBACKS IN CALLED CALLBACK HELL
function getData(dataId, getNextData) {
    setTimeout(() => {

        console.log('data', dataId);
        getNextData ? getNextData() : '';
    }, 2000);
};

// THIS IS CALLBACK HELL / NESTED CALLBACK / PYRAMID OF DOOM
getData(1, () => {
    console.log('Getting data 2...');
    getData(2, () => {
        console.log('Getting data 3...');
        getData(3, () => {
            console.log('Getting data 4...');
            getData(4, () => {
                console.log('Getting data 5...');
                getData(5);
            });
        });
    });
});

// PROMISSES SAME JOB OF CALLBACK HELL BUT WITH READABLE CODE

// CREATING PROMISES MOSTLY CREATED BY WHO WANT CREATE API SO IF YOU FETCHING API THEN YOU DONT HAVE TO CRETE PROMISES YOU HAVE TO HANDLE PROMIESSES
let promise = new Promise((resolve, reject) => {
    console.log("I'm a promise");
    resolve('Success');
    // reject('Network error');
});

function getDataPromise(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('promses data', dataId);
            resolve('Success');
        }, 5000);
    });
};

// HANDLING PROMISES BY USING THEN.() & CATCH()
promise.then(res => {
    console.log(`promise  ${res}`);
    console.log('promise fulfilled')
});

promise.catch(err => {
    console.log(`promise ${err}`);
    console.log(`promise rejected`)
});


// PROMISE CHAINING
getDataPromise(100).then(res => {
    console.log(`promise 1 ${res}`);
    console.log('promise 1 fulfilled');
    console.log('fetching promise 2...');
    return getDataPromise(200);
}).then(res => {
    console.log(`promise 2 ${res}`);
    console.log('promise 2 fulfilled');
    console.log('fetching promise 3...');
    return getDataPromise(300);
}).then(res => {
    console.log(`promise 3 ${res}`);
    console.log('promise 3 fulfilled');
    console.log('fetching promise 4...');
    return getDataPromise(400);
}).then(res => {
    console.log(`promise 4 ${res}`);
    console.log('promise 4 fulfilled');
    return;
}).catch(err => {
    console.log(`promise 1 ${err}`);
    console.log('promise 1 rejected');
})


// ASYNC-AWAIT SIMPLE/EASY WAY OF PROMISSES

async function asyncAwaitFun() {
    try {
        console.log('This is from AyncAwair Function 100')
        console.log('Getting promise 1...');
        await getDataPromise(1000);
        console.log('Getting promise 2...');
        await getDataPromise(2000);
        console.log('Getting promis 3...');
        await getDataPromise(3000);
        console.log('Getting promise 4...');
        await getDataPromise(4000);
        console.log('Success Async Await');
    } catch (err) {
        console.log(`async await eerror occured ${err}`);
    }
}

asyncAwaitFun();


// IIFE TO CALL EMIDIATELY/AUTOMATICALY MOSTLY USED FOR ASYNC-AWAIT
// UNNECCESSARY FUNCTION BNANE SE BACHNE KE LIYE 
(async () => {
    console.log('This is from AyncAwair Function 100')
    console.log('Getting promise 1...');
    await getDataPromise(1000);
    console.log('Getting promise 2...');
    await getDataPromise(2000);
    console.log('Getting promis 3...');
    await getDataPromise(3000);
    console.log('Getting promise 4...');
    await getDataPromise(4000);
    console.log('Success Async Await');
})();