function countVowels(str) {
    let count = 0;
    str = str.toLowerCase();
    for (let char of str) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++
        }
    }

    console.log(count);
}
countVowels("abc");
countVowels("aebc");
countVowels("aeibc");
countVowels("aeiobc");
countVowels("aeioufdfd");
countVowels("apnacollege");
countVowels("AneesUlRehman");
