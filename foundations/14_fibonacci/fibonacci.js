const fibonacci = function(num) {
    let fiboPrev = 1;
    let fiboPrevPrev = 0;
    let fibo = 0;

    if (num < 0) return "OOPS";
    if (num == 0) return 0;
    if (num == 1) return 1;

    for(let i = 2; i <= num; i++) {
        fibo = fiboPrev + fiboPrevPrev;
        fiboPrevPrev = fiboPrev;
        fiboPrev = fibo
    };

    return fibo;

};



// Do not edit below this line
module.exports = fibonacci;
