/**
 * 求差商之和
 * @param {*} arr 
 */
function chashang(n, arr) {
    let f = 0;
    for (let i = 0; i < n + 1; i++) {
        let temp = arr[i].y;
        for (let j = 0; j < n + 1; j++) {
            if (i != j) {
                temp /= (arr[i].x - arr[j].x);
            }
        }
        f += temp;
    }
    return f;
}


function newton(x, arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let temp = 1;
        let f = chashang(i, arr);
        for (let j = 0; j < i; j++) {
            temp *= (x - arr[j].x);
        }
        result += f * temp;
    }
    return result;
}