"use strict";
exports.__esModule = true;
/**
 * Created by onlyjyf on 8/5/17.
 */
var Problem = (function () {
    /**
     * @param diffcultLevel 难度级别 (1~9)
     */
    function Problem(diffcultLevel) {
        this.level = 1;
        this.level = diffcultLevel;
    }
    Problem.prototype.getLevel = function () {
        return this.level;
    };
    return Problem;
}());
exports.Problem = Problem;
