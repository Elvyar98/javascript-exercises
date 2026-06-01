const palindromes = function (sentence) {
    const cleaned = sentence
                            .replace(/[^a-zA-Z0-9]/g, "")
                            .toLowerCase()
                            .split("");
    return cleaned.join("") === cleaned.reverse().join("");  

    };

console.log(palindromes("A car, a man, a maraca"));

// Do not edit below this line
module.exports = palindromes;
