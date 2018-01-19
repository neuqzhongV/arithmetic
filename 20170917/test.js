/**
 *  m 底数
 *  n 幂
 *  a 除数
 *  b 加数
 */
function remainderFun(m, n, a, b) {
    let result = 1
    for (let i = 0; i < n; i++) {
        result = result * m % a
    }
    return (result + b) % a
}

// console.log(remainderFun(5, 43, 7, 0));
// console.log(remainderFun(5, 43, 7, 1));

function isPrimeNumber(num) {
    if (num <= 1) return false;
    let count = 1;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) count = i;
    }
    return count === 1;
}

function findPrimeNumber(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (isPrimeNumber(i)) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(findPrimeNumber(1231));