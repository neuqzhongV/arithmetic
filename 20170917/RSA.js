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

function getKey(num, p, q) {
    let n = p * q;
    let r = (p - 1) * (q - 1);
    let e = r - 1;
    let count = 1;
    while (e === e * count + count - 1) {
        count++;
    }
    let d = e * count + count - 1;
    let k = e * count - 1;
    let pub = remainderFun(num, e, n, 0);
    let pri = remainderFun(pub, d, n, 0);
    console.log(pub + "----------" + pri);
    console.log(String.fromCharCode(pub) + "----------" + String.fromCharCode(pri));
}

function encryption(str,p,q) {
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        getKey(arr[i].charCodeAt(), p, q);
    }
}

encryption("nobook",11003,11093);