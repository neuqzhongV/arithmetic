import { Problem } from "./Problem";
/**
 * Created by onlyjyf on 8/5/17.
 */
export abstract class Handler {
    /**处理问题*/
    public handler(problem: Problem): boolean {
        if (problem.getLevel() > this.getMaxHandlerLevel()) {
            return false;
        }
        return true;
    }
    /**获取处理问题的最大能力值*/
    abstract getMaxHandlerLevel(): number;
    abstract higherHandler(): Handler;
}