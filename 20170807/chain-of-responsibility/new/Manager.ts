import {Handler} from "./Handler";
/**
 * Created by onlyjyf on 8/5/17.
 */
export class Manager extends Handler {
    getMaxHandlerLevel(): number {
        return 8;
    }
}
