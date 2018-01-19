import {NBArraySort} from "./NBArraySort";

let ary = [];
for (let i = 0; i < 10000; i ++) {
    ary.push(Math.random());
}

let nbSort:NBArraySort = new NBArraySort(ary);
nbSort.bubbleSort();
nbSort.quickSort();