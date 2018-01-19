/**
 * 判断一个数是否为质数
 * @param {*} num 
 */
function isPrimeNumber(num) {
    if (num <= 1) return false;
    let count = 1;
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) count = i;
    }
    return count === 1;
}

/**
 * 获取小于等于某一个数的所有质数
 * @param {*} num 
 */
function findPrimeNumber(num) {
    let arr = [];
    for (let i = 1; i <= num; i++) {
        if (isPrimeNumber(i)) {
            arr.push(i);
        }
    }
    return arr;
}

/**
 * 快速求次幂取模
 *  m 底数
 *  n 幂
 *  a 除数
 */
function remainderFun(m, n, a) {
    let result = 1
    for (let i = 0; i < n; i++) {
        result = result * m % a
    }
    return result
}

// 获取一个数的所有质因子；
function getPrimeFactor(num) {
    let ary = [];
    let primeAry = findPrimeNumber(num);
    for (let i = 0; i < primeAry.length; i++) {
        if (num % primeAry[i] === 0) {
            num /= primeAry[i];
            ary.push(primeAry[i]);
        }
        if (num === 1) break;
    }
    return ary
}

function main(num) {
    let ary = [];
    let primeFactor = getPrimeFactor(num - 1);
    for (let i = 2; i < num; i++) {
        let flag = true;
        for (let j = 0; j < primeFactor.length; j++) {
            let p = primeFactor[j];
            if (remainderFun(i, (num - 1) / p, num) === 1) {
                flag = false;
                break;
            }
        }
        if (flag) {
            ary.push(i);
        }
    }
    return ary;
}


// 穷举方法
function main2(num) {
    let ary = [];
    for (let i = 2; i < num; i++) {
        let flag = true;
        for (let j = 1; j < num - 1; j++) {
            if (remainderFun(i, j, num) === 1) {
                flag = false;
                break;
            }
        }
        if (flag) {
            ary.push(i);
        }
    }
    return ary;
}
