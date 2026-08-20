const countVowel = (str) => {
    let nOVowel = 0;
    str = str.toLowerCase();
    for(let char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            nOVowel++;
        }
    }
    return nOVowel;
}
const result = countVowel("AneesUlRehman");
console.log(result);
