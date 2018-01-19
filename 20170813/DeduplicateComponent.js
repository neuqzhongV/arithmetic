"use strict";
exports.__esModule = true;
/**
 * Created by onlyjyf on 8/12/17.
 */
var DeduplicateComponent = (function () {
    function DeduplicateComponent() {
    }
    /**
     * 去重
     * @param ary
     */
    DeduplicateComponent.prototype.optimizeData = function (ary) {
        var map = {};
        for (var i = 0; i < ary.length; i++) {
            var item = ary[i];
            if (map[item] === undefined) {
                map[item] = true;
            }
            else {
                ary.splice(i--, 1);
            }
        }
    };
    return DeduplicateComponent;
}());
exports.DeduplicateComponent = DeduplicateComponent;
