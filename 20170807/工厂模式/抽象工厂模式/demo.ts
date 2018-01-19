/**
 * created by zhongwei 8/7/17
 */
interface AddMedicine {
    addMed();
}

abstract class BaseContainer implements AddMedicine { // 抽象产品 - 基础容器
    protected _solidMed: SolidMed;

    addSolidMed(solidMed: SolidMed) {
        this._solidMed = solidMed;
    }

    abstract addMed();
}

class Beaker extends BaseContainer { //具体产品 - 烧杯

    addMed() {
        console.log(`烧杯添加了药品。`);
    }

}
class TestTube extends BaseContainer { //具体产品 - 试管

    addMed() {
        console.log(`试管添加了药品。`);
    }
}

abstract class SolidMed { // 抽象固体药品
    abstract name: string;
}

class NaOH { // 氢氧化钠
    name: string = '氢氧化钠固体';
}

class NaCl { // 氯化钠
    name: string = '氯化钠固体';
}

abstract class ChemicalFactory { //抽象化学工厂
    abstract createBaseContainer(): BaseContainer;
    abstract createSolidMed(): SolidMed;
}

class BeakerFactory extends ChemicalFactory { //烧杯工厂
    createBaseContainer(): BaseContainer {
        let beaker = new Beaker();  // 创建烧杯
        console.log('Created a Beaker');
        this.enableRotate(beaker);       // 添加可旋转
        return beaker;
    }

    private enableRotate(container: BaseContainer) {
        console.log('添加旋转功能');
    }

    createSolidMed(): SolidMed {
        return new NaOH();
    }
}

class TestTubeFactory extends ChemicalFactory { //试管工厂 
    createBaseContainer(): BaseContainer {
        let testTube = new TestTube();   // 创建试管
        console.log('Created a TestTube');
        this.enableRotate(testTube);        //  添加可旋转
        return testTube;
    }

    private enableRotate(container: BaseContainer) {
        console.log('添加旋转功能');
    }
    createSolidMed(): SolidMed {
        return new NaCl();
    }
}

//使用
function addMed(container: BaseContainer, solidMed: SolidMed) // 使用生产的枪和子弹
{
    container.addSolidMed(solidMed);
    container.addMed();
}

let beakerFactory = new BeakerFactory();
addMed(beakerFactory.createBaseContainer(), beakerFactory.createSolidMed());

let testTubeFactory = new TestTubeFactory();
addMed(testTubeFactory.createBaseContainer(), testTubeFactory.createSolidMed());

