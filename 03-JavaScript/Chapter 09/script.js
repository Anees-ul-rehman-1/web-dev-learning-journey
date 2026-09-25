const totalWins = document.querySelectorAll('.totalWinsNum');
const totalDraws = document.querySelectorAll('.totalDrawsNum');
const totalLosses = document.querySelectorAll('.totalLossesNum');
const totalGames = document.querySelector('.totalGamesNum');
const gameBody = document.querySelector('.gameBody');
const clearHistory = document.querySelector('.clearBtn');
const currentResult = document.querySelector('.currentResult');
const yourChoice = document.querySelector('.yourChoice')
const comChoice = document.querySelector('.comChoice');
const yourChoiceImg = document.querySelector('.yourChoiceImg');
const comChoiceImg = document.querySelector('.comChoiceImg');
const historyContainer = document.querySelector('.historyContent');


const choices = ["Rock", "Paper", "Scissors"];

const createHistory = (historyContent) => {
    const result = document.createElement('div');
    result.classList.add('hisRes', 'stack');
    result.innerHTML = `
        <div class="hisIcon stack">
        <i data-lucide="${historyContent.icon}"></i>
        </div>
        <p>${historyContent.text}</p>
    `;
    historyContainer.append(result);

};

const userChoiceImg = (src) => {
    yourChoiceImg.innerHTML = '';
    const img = document.createElement('img');
    img.classList.add('valImg');
    img.src = src;
    yourChoiceImg.append(img);
}

const botchoiceImg = (src) => {
    comChoiceImg.innerHTML = '';
    const img = document.createElement('img');
    img.classList.add('valImg');
    img.src = src;
    comChoiceImg.append(img);
}

const gameFunction = (userChoice) => {
    const randomNum = Math.random() * choices.length;
    const randomIdx = Math.floor(randomNum);
    const userChose = userChoice.innerText;
    const botChose = choices[randomIdx];
    yourChoice.innerText = userChose;
    comChoice.innerText = botChose;

    if (userChose === 'Rock') userChoiceImg("images/rock_icon.png");
    else if (userChose === 'Paper') userChoiceImg("images/paper_icon.png");
    else if (userChose === 'Scissors') userChoiceImg("images/scissors_icon.png");

    if (botChose === 'Rock') botchoiceImg("images/rock_icon.png");
    else if (botChose === 'Paper') botchoiceImg("images/paper_icon.png");
    else if (botChose === 'Scissors') botchoiceImg("images/scissors_icon.png")



    if (userChose === botChose) {
        const draw = document.createElement('div');
        draw.classList.add('stackRow', 'draw');
        draw.innerHTML = `
            <div class="resIcon stack">
                <i data-lucide="scale"></i>
            </div>
            <div class="drawContent">
                <h3>It's a Draw!</h3>
                <p>Both chose ${botChose}</p>
            </div>
        `;
        const historyContent = {
            icon: 'scale',
            text: 'Draw',
        }

        currentResult.innerHTML = '';
        currentResult.append(draw);
        totalDraws.forEach(draw => draw.innerText = Number(draw.innerText) + 1);
        createHistory(historyContent);
    } else {
        if (
            (userChose === 'Rock' && botChose === 'Scissors') ||
            (userChose === 'Scissors' && botChose === 'Paper') ||
            (userChose === 'Paper' && botChose === 'Rock')
        ) {
            const won = document.createElement('div');
            won.classList.add('stackRow', 'won');
            won.innerHTML = `
            <div class="resIcon stack">
                <i data-lucide="trophy"></i>
            </div>
            <div class="drawContent">
                <h3>You Win!</h3>
                <p>${userChose} beats ${botChose}</p>
            </div>
        `;
            const historyContent = {
                icon: 'trophy',
                text: 'Win'
            }
            currentResult.innerHTML = '';
            currentResult.append(won);
            totalWins.forEach(win => win.innerText = Number(win.innerText) + 1);
            createHistory(historyContent);
        } else {
            const lose = document.createElement('div');
            lose.classList.add('stackRow', 'lose');
            lose.innerHTML = `
            <div class="resIcon stack">
                <i data-lucide="face-angry"></i>
            </div>
            <div class="drawContent">
                <h3>You Lose!</h3>
                <p>${botChose} beats ${userChose}</p>
            </div>
        `;

            const historyContent = {
                icon: 'face-angry',
                text: 'Lose'
            }
            currentResult.innerHTML = '';
            currentResult.append(lose);
            totalLosses.forEach(lose => lose.innerText = Number(lose.innerText) + 1);
            createHistory(historyContent)
        }
    }

    totalGames.innerText = Number(totalGames.innerText) + 1;
    lucide.createIcons();
    saveLocalStorage()
};

gameBody.addEventListener('click', (e) => {
    const clickedBtn = e.target.closest('button');
    if (!clickedBtn) return;
    gameFunction(clickedBtn)
});

const saveLocalStorage = () => {
    const appData = {
        totalGames: totalGames.innerText,
        totalWins: totalWins[0].innerText,
        totalLosses: totalLosses[0].innerText,
        totalDraws: totalDraws[0].innerText,

        historyContainer: historyContainer.innerHTML,
    };

    localStorage.setItem('gameApp', JSON.stringify(appData));
};

const fetchData = () => {
    const savedData = localStorage.getItem('gameApp');
    if (savedData) {
        const appData = JSON.parse(savedData);
        totalGames.innerText = appData.totalGames || '-';
        totalWins.forEach(win => win.innerText = appData.totalWins || '-');
        totalLosses.forEach(loss => loss.innerText = appData.totalLosses || '-');
        totalDraws.forEach(draw => draw.innerText = appData.totalDraws || '-');
        historyContainer.innerHTML = appData.historyContainer || '';
    }
};

clearHistory.addEventListener('click', () => {
    localStorage.removeItem('gameApp');
    location.reload();
});
window.addEventListener('DOMContentLoaded', fetchData);
