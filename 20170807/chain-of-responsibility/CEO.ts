import { Handler } from "./Handler";
/**
 * Created by onlyjyf on 8/5/17.
 */
export class CEO extends Handler {
    getMaxHandlerLevel(): number {
        return 10;
    }
    higherHandler(): Handler {
        return null;
    }
}