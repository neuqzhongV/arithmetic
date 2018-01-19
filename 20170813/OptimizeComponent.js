"use strict";
exports.__esModule = true;
/**
 * Created by onlyjyf on 8/12/17.
 */
var OptimizeComponent = (function () {
    function OptimizeComponent() {
    }
    OptimizeComponent.prototype.optimizeData = function (ary) {
        for (var i = 0; i < ary.length; i++) {
            if (!ary[i]) {
                ary.splice(i--, 1);
            }
        }
    };
    return OptimizeComponent;
}());
exports.OptimizeComponent = OptimizeComponent;
