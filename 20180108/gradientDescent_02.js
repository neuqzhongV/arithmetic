// y = x * sinx * e / ß3 * Pi + x * x / e
const NUM = Math.E / 3 * Math.PI;
const delta = 0.00001
const step = 0.001;
const precision = 0.00001

function getY(x) {
    return NUM * x * Math.sin(x) + x * x / Math.E;
}

function getGradient(x) {
    // return NUM * Math.sin(x) + NUM * Math.cos(x) * x + 2 / Math.E * x;
    return (getY(x + delta) - getY(x)) / delta;
}

function getGradientDescent() {
    let minPoint = {
        x: 0,
        y: getY(0)
    };
    for (let i = 0; i < 500; i++) {
        let start = Math.random() * 200 - 100;
        let point = getMin(start);
        if (point.y < minPoint.y) {
            minPoint = point;
        }
    }
    return minPoint;
}

function getMin(x) {
    let curX = x;
    let curY = getY(curX);
    let nowX = curX - getGradient(curX) * step;
    let nowY = getY(nowX);
    while (curY - nowY > precision) {
        curX = nowX;
        curY = nowY;
        nowX = curX - getGradient(curX) * step;
        nowY = getY(nowX);
    }
    return {
        x: curX,
        y: curY
    }
}

console.log(getGradientDescent());