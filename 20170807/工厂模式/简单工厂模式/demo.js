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
/**
 * created by zhongwei 8/7/17
 */
var DogType;
(function (DogType) {
    DogType[DogType["ErHa"] = 0] = "ErHa";
    DogType[DogType["ZangAo"] = 1] = "ZangAo";
})(DogType || (DogType = {}));
var Dog = (function () {
    function Dog() {
    }
    return Dog;
}());
var ErHa = (function (_super) {
    __extends(ErHa, _super);
    function ErHa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErHa.prototype.fight = function () {
        console.log('很蠢很逗比');
        return false;
    };
    return ErHa;
}(Dog));
var ZangAo = (function (_super) {
    __extends(ZangAo, _super);
    function ZangAo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZangAo.prototype.fight = function () {
        console.log('很猛很强势');
        return true;
    };
    return ZangAo;
}(Dog));
var DogFactory = (function () {
    function DogFactory() {
    }
    DogFactory.createGun = function (type) {
        switch (type) {
            case DogType.ErHa:
                return new ErHa();
            case DogType.ZangAo:
                return new ZangAo();
            default:
                throw Error('本店没有这个品种的狗');
        }
    };
    return DogFactory;
}());
DogFactory.createGun(DogType.ErHa).fight();
DogFactory.createGun(DogType.ZangAo).fight();
