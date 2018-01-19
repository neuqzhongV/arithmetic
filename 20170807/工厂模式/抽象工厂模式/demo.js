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
var BaseContainer = (function () {
    function BaseContainer() {
    }
    BaseContainer.prototype.addSolidMed = function (solidMed) {
        this._solidMed = solidMed;
    };
    return BaseContainer;
}());
var Beaker = (function (_super) {
    __extends(Beaker, _super);
    function Beaker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Beaker.prototype.addMed = function () {
        console.log("\u70E7\u676F\u6DFB\u52A0\u4E86\u836F\u54C1\u3002");
    };
    return Beaker;
}(BaseContainer));
var TestTube = (function (_super) {
    __extends(TestTube, _super);
    function TestTube() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestTube.prototype.addMed = function () {
        console.log("\u8BD5\u7BA1\u6DFB\u52A0\u4E86\u836F\u54C1\u3002");
    };
    return TestTube;
}(BaseContainer));
var SolidMed = (function () {
    function SolidMed() {
    }
    return SolidMed;
}());
var NaOH = (function () {
    function NaOH() {
        this.name = '氢氧化钠固体';
    }
    return NaOH;
}());
var NaCl = (function () {
    function NaCl() {
        this.name = '氯化钠固体';
    }
    return NaCl;
}());
var ChemicalFactory = (function () {
    function ChemicalFactory() {
    }
    return ChemicalFactory;
}());
var BeakerFactory = (function (_super) {
    __extends(BeakerFactory, _super);
    function BeakerFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BeakerFactory.prototype.createBaseContainer = function () {
        var beaker = new Beaker(); // 创建烧杯
        console.log('Created a Beaker');
        this.enableRotate(beaker); // 添加可旋转
        return beaker;
    };
    BeakerFactory.prototype.enableRotate = function (container) {
        console.log('添加旋转功能');
    };
    BeakerFactory.prototype.createSolidMed = function () {
        return new NaOH();
    };
    return BeakerFactory;
}(ChemicalFactory));
var TestTubeFactory = (function (_super) {
    __extends(TestTubeFactory, _super);
    function TestTubeFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestTubeFactory.prototype.createBaseContainer = function () {
        var testTube = new TestTube(); // 创建试管
        console.log('Created a TestTube');
        this.enableRotate(testTube); //  添加可旋转
        return testTube;
    };
    TestTubeFactory.prototype.enableRotate = function (container) {
        console.log('添加旋转功能');
    };
    TestTubeFactory.prototype.createSolidMed = function () {
        return new NaCl();
    };
    return TestTubeFactory;
}(ChemicalFactory));
//使用
function addMed(container, solidMed) {
    container.addSolidMed(solidMed);
    container.addMed();
}
var beakerFactory = new BeakerFactory();
addMed(beakerFactory.createBaseContainer(), beakerFactory.createSolidMed());
var testTubeFactory = new TestTubeFactory();
addMed(testTubeFactory.createBaseContainer(), testTubeFactory.createSolidMed());
