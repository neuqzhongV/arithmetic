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
 * Created by onlyjyf on 8/5/17.
 */
var TeamLeader = (function (_super) {
    __extends(TeamLeader, _super);
    function TeamLeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TeamLeader.prototype.getMaxHandlerLevel = function () {
        return 6;
    };
    return TeamLeader;
}(Handler_1.Handler));
exports.TeamLeader = TeamLeader;
