/**
 *  julia set
 *  created by ZhongV 2017/06/18
 */

//复数的实部为x，虚部位y
function creatObj(real, imag) {
    return {
        real: real,
        imag: imag
    };
}


//公式 Fc(z) = z*z + c；
function mainFun(z, c) {
    let newReal = z.real * z.real - z.imag * z.imag + c.real;
    let newImag = 2 * z.real * z.imag + c.imag;
    return {
        real: newReal,
        imag: newImag
    }
}

//半径
function model(z) {
    return Math.sqrt(z.real * z.real + z.imag * z.imag);
}

// 递归
function iteration(n, z, c) {
    if (n == 0) {
        return model(z);
    } else {
        z = mainFun(z, c);
        return iteration(n - 1, z, c);
    }
}

// 改变imageData
function draw(imgData, n, c) {
    for (let y = 0; y < HEIGHT; y++) {
        for (let x = 0; x < WIDTH; x++) {
            let posX = (x - WIDTH / 2) / 150;
            let posY = (HEIGHT / 2 - y)  / 150;
            let z = creatObj(posX, posY);
            let result = iteration(n, z, c);
            let index = 4 * (y * WIDTH + x);
            if (result < 4) {
                imgData.data[index] = 252;
                imgData.data[index + 1] = 157;
                imgData.data[index + 1] = 154;
                imgData.data[index + 3] = 255;
            } else {
                imgData.data[index] = 0;
                imgData.data[index + 1] = 0;
                imgData.data[index + 1] = 0;
                imgData.data[index + 3] = 255;
            }
        }
    }
}