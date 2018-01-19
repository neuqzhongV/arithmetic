/**
 * created by zhongwei 8/7/17
 */
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
var Dish = (function () {
    function Dish() {
    }
    return Dish;
}());
var XiaoChaoRou = (function (_super) {
    __extends(XiaoChaoRou, _super);
    function XiaoChaoRou() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XiaoChaoRou.prototype.taste = function () {
        console.log('小炒肉很辣');
    };
    return XiaoChaoRou;
}(Dish));
var KaoYa = (function (_super) {
    __extends(KaoYa, _super);
    function KaoYa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KaoYa.prototype.taste = function () {
        console.log('烤鸭很香');
    };
    return KaoYa;
}(Dish));
var DishFactory = (function () {
    function DishFactory() {
    }
    return DishFactory;
}());
var XiaoChaoRouFactory = (function (_super) {
    __extends(XiaoChaoRouFactory, _super);
    function XiaoChaoRouFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    XiaoChaoRouFactory.prototype.create = function () {
        var dish = new XiaoChaoRou(); // 炒好小炒肉
        console.log('炒好了小炒肉');
        this.sendToTable(dish); // 送到餐桌
        this.applyCoolTea(dish); // 提供凉茶
        return dish;
    };
    XiaoChaoRouFactory.prototype.sendToTable = function (dish) {
        console.log('服务员上菜了');
    };
    XiaoChaoRouFactory.prototype.applyCoolTea = function (dish) {
        console.log('送上凉茶');
    };
    return XiaoChaoRouFactory;
}(DishFactory));
var KaoYaFactory = (function (_super) {
    __extends(KaoYaFactory, _super);
    function KaoYaFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KaoYaFactory.prototype.create = function () {
        var dish = new KaoYa(); // 切好烤鸭
        console.log('切好了烤鸭');
        this.sendToTable(dish); // 送到餐桌
        this.applyDouPi(dish); // 提供豆皮
        return dish;
    };
    KaoYaFactory.prototype.sendToTable = function (dish) {
        console.log('服务员上菜了');
    };
    KaoYaFactory.prototype.applyDouPi = function (dish) {
        console.log('送上豆皮');
    };
    return KaoYaFactory;
}(DishFactory));
var xiaoChaoRou = new XiaoChaoRouFactory().create();
xiaoChaoRou.taste();
var beiJingKaoYa = new KaoYaFactory().create();
beiJingKaoYa.taste();
