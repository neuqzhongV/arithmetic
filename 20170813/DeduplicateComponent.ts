/**
 * Created by onlyjyf on 8/12/17.
 */
export class DeduplicateComponent {

    /**
     * 去重
     * @param ary
     */
    optimizeData(ary:Array<any>) {
        let map = {};
        for (let i = 0; i < ary.length; i ++) {
            let item = ary[i];
            if (map[item] === undefined) {
                map[item] = true;
            } else {
                ary.splice(i--, 1);
            }
        }
    }
}