var data =  [{"x":3.52,"y":-2.21},{"x":2.34,"y":0.89},{"x":8.85,"y":10.43},{"x":12.78,"y":21.9},{"x":15.61,"y":18.35},{"x":5.7,"y":14.15},{"x":17.57,"y":15.69},{"x":17.41,"y":16.82},{"x":11.53,"y":23.03},{"x":12.07,"y":27.17},{"x":15.35,"y":28.69},{"x":15.65,"y":31.91},{"x":16.86,"y":31.82},{"x":13.79,"y":50.62},{"x":16.12,"y":41.39},{"x":21.34,"y":47.52},{"x":23.7,"y":62.85},{"x":23.48,"y":57.66},{"x":24.24,"y":61.61},{"x":20.99,"y":72.13},{"x":31.84,"y":67.63},{"x":22.08,"y":70.83},{"x":24.35,"y":77.97},{"x":26.7,"y":72.01},{"x":32.64,"y":72.9},{"x":31.81,"y":88.12},{"x":34.34,"y":90.82},{"x":38.22,"y":88.84},{"x":36.37,"y":98.37},{"x":31.16,"y":98.51},{"x":35.45,"y":85.33},{"x":33.25,"y":105.9},{"x":36.09,"y":102.87},{"x":45.14,"y":112.5},{"x":43.1,"y":113.3},{"x":42.64,"y":116.66},{"x":39.96,"y":113.57},{"x":43.13,"y":122.15},{"x":44.95,"y":114.19},{"x":41.96,"y":125.97},{"x":45.15,"y":127.21},{"x":52.46,"y":120.49},{"x":45.66,"y":133.19},{"x":43.71,"y":126.46},{"x":44.9,"y":140.32},{"x":44.97,"y":142.4},{"x":53.14,"y":138.62},{"x":57.71,"y":140.45},{"x":48.74,"y":146.32},{"x":51.91,"y":164.08}];
const delta = 0.0001;
const step = 0.01;
const precision = 0.01;

// y = a*x + b;

function getSumDelta(a, b) {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
        result += data[i].y - getY(a, b, data[i].x);
    }
    return Math.abs(result) / data.length;
}

function getY(a, b, x) {
    return a * x + b;
}

function getGradientA(a, b) {
    return (getSumDelta(a + delta, b) - getSumDelta(a, b)) / delta;
}

function getGradientB(a, b) {
    return (getSumDelta(a, b + delta) - getSumDelta(a, b)) / delta;
}

function getGradientDescent() {
    let minPoint = {
        a: 0,
        b: 0,
        D: getSumDelta(0, 0)
    };

    for (let i = 0; i < 500; i++) {
        let startA = Math.random() * 20 - 10;
        let startB = Math.random() * 20 - 10;
        let point = getMin(startA, startB);
        if (point.D < minPoint.D) {
            minPoint = point;
        }
    }
    return minPoint;
}

function getMin(a, b) {
    let curA = a;
    let curB = b;
    let curD = getSumDelta(a, b);
    let nowA = curA - getGradientA(curA, curB) * step;
    let nowB = curB - getGradientB(curA, curB) * step;
    let nowD = getSumDelta(nowA, nowB);
    while (curD - nowD > precision) {
        curA = nowA;
        curB = nowB;
        curD = nowD;
        nowA = curA - getGradientA(curA, curB) * step;
        nowB = curB - getGradientB(curA, curB) * step;
        nowD = getSumDelta(nowA, nowB);
    }
    return {
        a: nowA,
        b: nowB,
        D: nowD
    }
}
console.log(getGradientDescent());