/**
 * Created by onlyjyf on 8/12/17.
 */
export class OptimizeComponent {
    optimizeData(ary:Array<any>) {
        for (let i = 0; i < ary.length; i ++) {
            if (!ary[i]) {
                ary.splice(i--, 1);
            }
        }
    }
}
