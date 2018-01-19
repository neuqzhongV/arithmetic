const _ = require('lodash');

// 1. compact
let arr1 = [0, 1, false, 2, '', 3];
console.log(_.compact(arr1));


function myCompact(arr) {
    let newArr = [];
    for (let i = 0, ii = arr.length; i < ii; i++) {
        arr[i] && newArr.push(arr[i]);
    }
    return newArr;
}
console.log(myCompact(arr1));
console.log("------------------");


// 2.concat
arr1 = [1];
console.log(_.concat(arr1, 2, [3], [
    [4]
]));

function myConcat() {
    let arr = arguments[0] || [];
    for (let i = 1, ii = arguments.length; i < ii; i++) {
        let arg = arguments[i];
        if (Object.prototype.toString.call(arg) === '[object Array]') {
            for (let j = 0, jj = arg.length; j < jj; j++) {
                arr.push(arg[j]);
            }
        } else {
            arr.push(arguments[i]);
        }
    }
    return arr;
}
console.log(myCompact(arr1, 2, [3], [
    [4]
]));
console.log("------------------");

// 3. xor
arr1 = [2, 1];
arr2 = [2, 3];
console.log(_.xor(arr1, arr2));

function myXor() {
    let arr = []

    for (let i = 0, ii = arguments.length; i < ii; i++) {
        arr = _.concat(arr, arguments[i]);
    }
    let newArr = [];
    for (let j = 0, jj = arr.length; j < jj; j++) {
        let flag = true;
        for (let i = 0, ii = arr.length; i < ii; i++) {
            if (arr[i] === arr[j] && i !== j) {
                flag = false;
                break;
            }
        }
        if (flag) {
            newArr.push(arr[j]);
        }
    }
    return newArr;
}
console.log(myXor(arr1, arr2));
console.log("---------------------------------");

// 4.zipWith

arr1 = ['a', 'b'];
arr2 = [1, 2];
arr3 = [true, false];

console.log(_.zip(arr1, arr2, arr3));

function myZip() {
    if (arguments.lenth <= 0) return [];
    let len = arguments[0].length;
    for (let i = 1, ii = arguments.length; i < ii; i++) {
        len = len > arguments[i].length ? len : arguments[i].length;
    }
    let arr = [];
    for (let i = 0, ii = len; i < ii; i++) {
        if (!arr[i]) {
            arr[i] = [];
        }
        for (let j = 0, jj = arguments.length; j < jj; j++) {
            if (arguments[j].length > i) {
                arr[i].push(arguments[j][i]);
            }
        }
    }
    return arr;
}

console.log(myZip(arr1, arr2, arr3))
console.log("-----------------------------");

// 5.find
arr1 = [{
        'user': 'barney',
        'age': 36,
        'active': true
    },
    {
        'user': 'fred',
        'age': 40,
        'active': false
    },
    {
        'user': 'pebbles',
        'age': 1,
        'active': true
    }
];
console.log(_.find(arr1, {
    'age': 1,
    'active': true
}));

function myFind() {
    let arr = arguments[0];
    if (arguments.length < 2) {
        return arr || {};
    }
    let data = arguments[1]
    let str = Object.prototype.toString(data);
    if (str === "[object String]") {
        for (let i = 0, ii = arr.length; i < ii; i++) {
            for (let k in arr[i]) {
                if (data === k) {
                    return arr[i];
                }
            }
        }
    }
    if (str === "[object Array]") {
        for (let i = 0, ii = arr.length; i < ii; i++) {
            if (arr[i][data[0]] === data[1]) {
                return arr[i];
            }
        }
    }
    if (str === "[object Object]") {
        for (let i = 0, ii = arr.length; i < ii; i++) {
            let flag = true;
            for (let k in data) {
                if (arr[i][k] !== data[k]) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                return arr[i];
            }
        }
    }
    if (str === "[object Function]") {
        for (let i = 0, ii = arr.length; i < ii; i++) {
            if (data(arr[i])) {
                return arr[i];
            }
        }
    }
    return {};
}

console.log(myFind(arr1, {
    'age': 1,
    'active': true
}));
console.log("------------------------");

// 6.gt
console.log(_.gt(4, 1, 2));

function myGt() {
    if (arguments.length < 2) {
        return false;
    }
    return arguments[0] > arguments[1];
}
console.log(myGt(4, 1, 2));
console.log("--------------------------");

// 7.mean
arr1 = [4,  2,  8, 11,  6];
console.log(_.mean(arr1));

function myMean() {
    let len = arguments[0] && arguments[0].length || null;
    let result = 0;
    for (let i = 0, ii = arguments[0].length; i < ii; i++) {
        result += arguments[0][i];
    }
    return result / len;
}
console.log(myMean(arr1));
console.log("-------------------------");