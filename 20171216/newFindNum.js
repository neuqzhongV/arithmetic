let arr = [];
let count = 2000001;
for (let i = 0; i < count; i++) {
    arr.push(Math.floor(count * Math.random()));
}


function findMaxNum(arr) {
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxNum = maxNum > arr[i] ? maxNum : arr[i];
    }
    return maxNum;
}

function findMinNum(arr) {
    let minNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        minNum = minNum < arr[i] ? minNum : arr[i];
    }
    return minNum;
}


function findNthNum(arr, n) {
    let smallArr = [],
        bigArr = [];
    let num = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > num) {
            bigArr.push(arr[i]);
        } else {
            smallArr.push(arr[i]);
        }
    }
    let smallLen = smallArr.length;
    let bigLen = bigArr.length;
    if (bigLen === n - 1) {
        return num;
    }
    if (bigLen > n - 1) {
        return findNthNum(bigArr, n);
    }
    if (bigLen < n - 1) {
        return findNthNum(smallArr, n - 1 - bigLen);
    }
}

function findMedianNum(arr, left, right) {
    left = left || 0;
    right = right || 0;
    let smallArr = [],
        bigArr = [];
    let num = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > num) {
            bigArr.push(arr[i]);
        } else {
            smallArr.push(arr[i]);
        }
    }
    let smallLen = smallArr.length + left;
    let bigLen = bigArr.length + right;
    if ((smallLen + bigLen) % 2 === 0) {
        if (smallLen === bigLen) {
            return num;
        }
        if (smallLen > bigLen) {
            return findMedianNum(smallArr, left, bigLen + 1);
        }
        if (bigLen > smallLen) {
            return findMedianNum(bigArr, smallLen + 1, right);
        }
    }

    if (smallLen > bigLen) {
        if (smallLen - bigLen === 1) {
            return (num + findMaxNum(smallArr)) / 2;
        }
        return findMedianNum(smallArr, left, bigLen + 1);
    } else {
        if (bigLen - smallLen === 1) {
            return (num + findMinNum(bigArr)) / 2;
        }
        return findMedianNum(bigArr, smallLen + 1, right);
    }
}

a = findMedianNum(arr);

b = (findNthNum(arr, Math.ceil((arr.length + 1) / 2)) + findNthNum(arr, Math.floor((arr.length + 1) / 2))) / 2

console.log(a + "---------" + b);