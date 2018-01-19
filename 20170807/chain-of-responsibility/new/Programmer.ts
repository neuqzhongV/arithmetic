import {Handler} from "./Handler";
/**
 * Created by onlyjyf on 8/5/17.
 */
export class Programmer extends Handler {
    getMaxHandlerLevel(): number {
        return 3;
    }
}