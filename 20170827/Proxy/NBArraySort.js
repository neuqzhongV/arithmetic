"use strict";
exports.__esModule = true;
var ArraySort_1 = require("./ArraySort");
var NBArraySort = (function () {
    function NBArraySort(ary) {
        this.ary = ary;
    }
    NBArraySort.prototype.arySortProxy = function () {
        return new ArraySort_1.ArraySort(this.ary);
    };
    NBArraySort.prototype.quickSort = function () {
        console.time('quickSort:');
        this.arySortProxy().quickSort();
        console.timeEnd('quickSort:');
    };
    NBArraySort.prototype.bubbleSort = function () {
        console.time('bubbleSort:');
        this.arySortProxy().bubbleSort();
        console.timeEnd('bubbleSort:');
    };
    return NBArraySort;
}());
exports.NBArraySort = NBArraySort;
