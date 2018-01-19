"use strict";
exports.__esModule = true;
var ArraySort = (function () {
    function ArraySort(ary) {
        this.ary = ary;
    }
    ArraySort.prototype.quickSort = function () {
        console.log('# quick sort');
        this.ary.sort();
    };
    ArraySort.prototype.bubbleSort = function () {
        console.log('# bubble sort');
        this.ary.sort();
    };
    return ArraySort;
}());
exports.ArraySort = ArraySort;
