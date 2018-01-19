import {IComponent} from "./IComponent";
/**
 * Created by onlyjyf on 8/12/17.
 */
export class Component implements IComponent {
    optimizeData(data: Object) {
        if (data instanceof Array) {
            data.sort();
        }
    }
}
