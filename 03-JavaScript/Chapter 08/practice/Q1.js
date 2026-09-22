const toggleTheme = document.querySelector('.toggleTheme');
const body = document.querySelector('body');
let themeColor = 'Dark Mode';


const toggleThemeFun = () => {
    body.classList.toggle('dark');
    if (themeColor === 'Dark Mode') {
        toggleTheme.textContent = 'Light Mode';
        themeColor = 'Light Mode';
    } else {
        toggleTheme.textContent = 'Dark Mode';
        themeColor = 'Dark Mode';
    }

}

toggleTheme.addEventListener('click', toggleThemeFun)