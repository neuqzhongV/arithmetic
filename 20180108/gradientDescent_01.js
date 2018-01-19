// y = 2x^2 + 3x - 6

const delta = 0.00001;
const step = 0.01;
const precision = 0.0000001

function getY(x) {
    return 2 * x * x + 3 * x - 6;
}

function getGradient(x) {
    // return 4 * x + 3;
    return (getY(x + delta) - getY(x)) / delta;
}

function getGradientDescent() {
    let minPoint = {
        x: 0,
        y: getY(0)
    };
    for (let i = 0; i < 20; i++) {
        let start = Math.random() * 200 - 100;
        let point = getMin(start);
        console.log(point);
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