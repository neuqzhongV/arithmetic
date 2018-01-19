"use strict";
exports.__esModule = true;
/**
 * Created by onlyjyf on 8/12/17.
 */
var Component = (function () {
    function Component() {
    }
    Component.prototype.optimizeData = function (data) {
        if (data instanceof Array) {
            data.sort();
        }
    };
    return Component;
}());
exports.Component = Component;
