import { Handler } from "./Handler";
import { Problem } from "./Problem";
/**
 * Created by zhongwei on 8/7/17.
 */
export class CEO extends Handler {
  
    getMaxHandlerLevel(): number {
        return 10;
    }
}