function lagrange(x, arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].y;
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                temp = temp * (x - arr[j].x);
                temp = temp / (arr[i].x - arr[j].x);
            }
        }
        result += temp;
    }
    return result;
}