let arr = [];
for (let i = 0; i < 1000; i++) {
    arr.push(Math.floor(1000 * Math.random()));
}

function findMaxNum(arr) {
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxNum = maxNum > arr[i] ? maxNum : arr[i];
    }
    return maxNum;
}


function findMedianNum(arr) {
    let len = arr.length;
    for (let i = 0; i <= len / 2; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return (arr[Math.floor((len - 1) / 2)] + arr[Math.ceil((len - 1) / 2)]) / 2;
}

function findNthNum(arr, n) {
    let len = arr.length;
    let type = 2 * n > len + 1;
    let currentLen = type ? (len + 1 - n) : n;
    for (let i = 0; i < currentLen; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (sortNum(arr[j], arr[j + 1], type)) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr[len - currentLen];
}

function sortNum(num1, num2, type) {
    return type ? num1 < num2 : num1 > num2;
}

// console.log(findMaxNum(arr));
// console.log(findMedianNum(arr));
// console.log(findNthNum(arr, 1));