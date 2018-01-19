"use strict";
exports.__esModule = true;
var Component_1 = require("./Component");
var DeduplicateComponent_1 = require("./DeduplicateComponent");
var OptimizeComponent_1 = require("./OptimizeComponent");
var Decorators = (function () {
    function Decorators() {
        this.component = new Component_1.Component();
        this.deduplicateComponent = new DeduplicateComponent_1.DeduplicateComponent();
        this.optimizeComponent = new OptimizeComponent_1.OptimizeComponent();
    }
    Decorators.prototype.optimizeData = function (data) {
        this.component.optimizeData(data);
        this.deduplicateComponent.optimizeData(data);
        this.optimizeComponent.optimizeData(data);
    };
    return Decorators;
}());
exports.Decorators = Decorators;
