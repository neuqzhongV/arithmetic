// z = x*x + y*y - x*y*sinx + x + x*y

const delta = 0.000001;
const step = 0.001;
const precision = 0.000001

function getZ(x, y) {
    return x * x + y * y - x * y * Math.sin(x) + x + x * y;
}

function getGradientX(x, y) {
    // return 2 * x - y * Math.sin(x) - y * x * Math.cos(x) + y + 1;
    return (getZ(x + delta, y) - getZ(x, y)) / delta;
}

function getGradientY(x, y) {
    // return 2 * y - x * Math.sin(x) + x;
    return (getZ(x, y + delta) - getZ(x, y)) / delta;
}

function getGradientDescent() {
    let minPoint = {
        x: 0,
        y: 0,
        z: getZ(0, 0)
    };
    for (let i = 0; i < 200; i++) {
        let startX = Math.random() * 200 - 100;
        let startY = Math.random() * 200 - 100;
        let point = getMin(startX, startY);
        if (point.z < minPoint.z) {
            minPoint = point;
        }
    }
    return minPoint;
}

function getMin(x, y) {
    let curX = x;
    let curY = y;
    let curZ = getZ(x, y);
    let nowX = curX - getGradientX(curX, curY) * step;
    let nowY = curY - getGradientY(curX, curY) * step;
    let nowZ = getZ(nowX, nowY);
    while (curZ - nowZ > precision) {
        curX = nowX;
        curY = nowY;
        curZ = nowZ;
        nowX = curX - getGradientX(curX, curY) * step;
        nowY = curY - getGradientY(curX, curY) * step;
        nowZ = getZ(nowX, nowY);
    }
    return {
        x: curX,
        y: curY,
        z: curZ
    }
}

console.log(getGradientDescent());