import {ISortable} from "./ISortable";

export class ArraySort implements ISortable {
    private ary:Array<Number>;
    constructor(ary:Array<Number>) {
        this.ary = ary;
    }

    public quickSort(): void {
        console.log('# quick sort');
        this.ary.sort();
    }

    public bubbleSort(): void {
        console.log('# bubble sort');
        this.ary.sort();
    }
}
