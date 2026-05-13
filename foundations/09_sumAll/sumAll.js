const sumAll = function(a, b) {
    if ((!Number.isInteger(a) || a < 0) || 
    ((!Number.isInteger(b)) || b < 0)) return "ERROR";
   
    let max = 0;
    let min = 0;
    if (a < b) {
        max = b;
        min = a;
    } else {
        max = a;
        min = b;
    }

    let total = 0;

    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;

};

// Do not edit below this line
module.exports = sumAll;
