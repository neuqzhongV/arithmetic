"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Handler_1 = require("./Handler");
/**
 * Created by zhongwei on 8/7/17.
 */
var CEO = (function (_super) {
    __extends(CEO, _super);
    function CEO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CEO.prototype.getMaxHandlerLevel = function () {
        return 10;
    };
    return CEO;
}(Handler_1.Handler));
exports.CEO = CEO;
