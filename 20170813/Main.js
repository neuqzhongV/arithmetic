"use strict";
exports.__esModule = true;
var Decorators_1 = require("./Decorators");
// import {Component} from "./Component";
// import {IComponent} from "./IComponent";
// import {DeduplicateComponent} from "./DeduplicateComponent";
// import {OptimizeComponent} from "./OptimizeComponent";
// let c:IComponent = new Component();
// // 要对数组进行如下操作
// // 排序、去重、删除为undefined/null/0的数据
var ary = [1, 2, 2, undefined, null, 0, 5, 3, 4];
// c.optimizeData(ary);
// let d:DeduplicateComponent = new DeduplicateComponent();
// d.optimizeData(ary);
// let o:OptimizeComponent = new OptimizeComponent();
// o.optimizeData(ary);
var d = new Decorators_1.Decorators();
d.optimizeData(ary);
console.log(ary);
