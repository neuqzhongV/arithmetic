"use strict";
exports.__esModule = true;
var NBArraySort_1 = require("./NBArraySort");
var ary = [];
for (var i = 0; i < 10000; i++) {
    ary.push(Math.random());
}
var nbSort = new NBArraySort_1.NBArraySort(ary);
nbSort.bubbleSort();
nbSort.quickSort();
