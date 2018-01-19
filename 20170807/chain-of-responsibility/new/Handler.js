"use strict";
/**
 * reated by zhongwei on 8/7/17.
 */
exports.__esModule = true;
var Handler = (function () {
    function Handler(higherHandler) {
        this.higherHandler = higherHandler;
    }
    ;
    Handler.prototype.handler = function (problem) {
        if (problem.getLevel() > this.getMaxHandlerLevel()) {
            if (this.higherHandler) {
                return this.higherHandler.handler(problem);
            }
            return false;
        }
        return true;
    };
    return Handler;
}());
exports.Handler = Handler;
