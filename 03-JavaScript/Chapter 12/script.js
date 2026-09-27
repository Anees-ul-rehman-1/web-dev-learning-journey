const catBtn = document.querySelector('.catFactBtn');
const factP = document.querySelector('.catFactPera');
const dogBtn = document.querySelector('.dogFactBtn');
const dogFact = document.querySelector('.dogFactPera');
const randomBtn = document.querySelector('.randomJoke');
const randomPera = document.querySelector('.randomJokePera');
const adviceBtn = document.querySelector('.adviceBtn');
const advicePera = document.querySelector('.advicePera');
const activityBtn = document.querySelector('.activityBtn');
const activityPera = document.querySelector('.activityPera');

// FETCH API'S PRACTICE
const catUrl = "https://catfact.ninja/fact";
const dogUrl = "https://dogapi.dog/api/v2/breeds";
const jokeUrl = "https://v2.jokeapi.dev/joke/Any?format=json";
const adviceUrl = "https://api.adviceslip.com/advice";
// const activityUrl = "https://api.allorigins.win/raw?url=" + encodeURIComponent("https://bored-api.appbrewery.com/random");
const activityUrl = "https://bored.api.lewagon.com/api/activity/";


//FETCHING API'S USING ASYNC AWAIT
// const getFacts = async () => {
//     try {
//         const response = await fetch(catUrl);
//         const catFact = await response.json();
//         factP.textContent = catFact.fact;
//     } catch (err) {
//         factP.innerText = 'Sorry! Try again.'
//     }
// }



// const dogFactsFun = async () => {
//     try {
//         const response = await fetch(dogUrl);
//         if (!document.querySelector('img')) {
//             const img = document.createElement('img');
//             img.src = "https://dogapi.dog/api/v2/breeds/image";
//             img.style.display = 'block';
//             img.style.width = '10rem';
//             dogBtn.after(img);
//         } else {
//             const imgExtist = document.querySelector('img');
//             imgExtist.src = "https://dogapi.dog/api/v2/breeds/image";
//         }

//         const factArray = await response.json()
//         const randomNum = Math.random() * factArray.data.length;
//         const randomIdx = Math.floor(randomNum);
//         const fact = factArray.data[randomIdx].attributes.description;
//         dogFact.innerText = fact;
//     } catch (err) {
//         dogFact.innerText = `Sorry! Try again.`;
//     }
// };




// const randomJokeFun = async () => {
//     try {
//         const response = await fetch(jokeUrl);
//         const data = await response.json();
//         if (data.type === 'twopart') {
//             randomPera.innerText = data.setup;
//             randomPera.innerHTML = `Q: ${randomPera.innerText} <br>` + `Reply:${data.delivery}`;
//         } else {
//             randomPera.innerText = data.joke;
//         }
//     } catch {
//         randomPera.innerText = 'Sorry! try again...'
//     }
// };



// const adviceFun = async () => {
//     try {
//         const response = await fetch(adviceUrl);
//         const advice = await response.json();
//         advicePera.innerText = advice.slip.advice;
//     } catch (err) {
//         advicePera.innerText = 'Sorry! try again...'
//     }
// };

// const activityFun = async () => {
//     try {
//         const response = await fetch(activityUrl);
//         const data = await response.json();
//         activityPera.innerText = data.activity;
//     } catch {
//         activityPera.innerText = 'Sorry! try again...'
//     }
// };

// FETCHING API'S USING PROMISES 


const getFacts = () => {
    const api = fetch(catUrl);
    api.then((response) => {
        return response.json();

    }).then(response => {
        factP.innerText = response.fact;
    }).catch(err => {
        factP.innerText = 'Sorr! try again...'
    })
};

const dogFactsFun = () => {
    const response = fetch(dogUrl);
    response.then(response => {

        return response.json();

    }).then(response => {
        const factArray = response.data;
        const randomNum = Math.random() * factArray.length;
        const randomIdx = Math.floor(randomNum);


        // DOG IMAGE CODE
        const images = factArray[randomIdx].attributes.images;
        const randomImgIdx = Math.random() * images.length;
        const finalImage = images[Math.floor(randomImgIdx)].url;
        if (!document.querySelector('img')) {
            const img = document.createElement('img');
            img.src = finalImage;
            img.style.width = '10rem';
            dogFact.after(img);
        } else {
            const img = document.querySelector('img');
            img.src = finalImage;
        }

        // DOG FACT CODE
        const joke = factArray[randomIdx].attributes.description;
        dogFact.innerText = joke;

    }).catch(err => {
        dogFact.innerText = 'Sorry! try again...'
    });
};

const randomJokeFun = () => {
    const response = fetch(jokeUrl);
    response.then(response => {
        return response.json();
    }).then(response => {
        if (response.type === 'twopart') {
            randomPera.innerHTML = `
           Q: ${response.setup} <br> Ans: ${response.delivery}           
            `
        } else {
            randomPera.innerText = response.joke;
        }
    }).catch(err => {
        randomPera.innerText = 'Sorry! try again...'
    })
};

const adviceFun = () => {
    const response = fetch(adviceUrl);
    response.then(reponse => {
        return reponse.json();
    }).then(response => {
        advicePera.innerText = response.slip.advice;
    }).catch(err => {
        advicePera.innerText = 'Sorry! try again...'
    })
}

const activityFun = () => {
    const response = fetch(activityUrl);
    response.then(response => {
        return response.json();
    }).then(response => {
        activityPera.innerText = response.activity;
    }).catch(err => {
        activityPera.innerText = 'Sorry! try again...'
    })
}

catBtn.addEventListener('click', getFacts);
dogBtn.addEventListener('click', dogFactsFun);
randomBtn.addEventListener('click', randomJokeFun);
adviceBtn.addEventListener('click', adviceFun);
activityBtn.addEventListener('click', activityFun);

