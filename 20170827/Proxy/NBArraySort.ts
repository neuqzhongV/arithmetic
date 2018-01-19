import { ArraySort } from "./ArraySort";

export class NBArraySort {
    private ary: Array<Number>
    constructor(ary: Array<Number>) {
        this.ary = ary;
    }
    arySortProxy() {
        return new ArraySort(this.ary);
    }
    quickSort(): void {
        console.time('quickSort:');
        this.arySortProxy().quickSort();
        console.timeEnd('quickSort:');
    }

    bubbleSort(): void {
        console.time('bubbleSort:');
        this.arySortProxy().bubbleSort();
        console.timeEnd('bubbleSort:');
    }
}
