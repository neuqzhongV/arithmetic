/**
 * reated by zhongwei on 8/7/17.
 */

import { Problem } from "./Problem";


export abstract class Handler {
    constructor(protected higherHandler: Handler) { };
    public handler(problem: Problem): boolean {
        if (problem.getLevel() > this.getMaxHandlerLevel()) {
            if (this.higherHandler) {
                return this.higherHandler.handler(problem);
            }
            return false;
        }
        return true;
    }

    abstract getMaxHandlerLevel(): number;

} 