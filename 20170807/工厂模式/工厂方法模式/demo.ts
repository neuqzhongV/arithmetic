/**
 * created by zhongwei 8/7/17
 */

interface Taste {
    taste();
}

abstract class Dish implements Taste { // 抽象产品 - 菜品
    abstract taste();
}

class XiaoChaoRou extends Dish { //具体产品 - 小炒肉
    taste() {
        console.log('小炒肉很辣');
    }
}

class KaoYa extends Dish { //具体产品 - k烤鸭
    taste() {
        console.log('烤鸭很香');
    }
}

abstract class DishFactory { //抽象菜肴工厂
    abstract create(): Dish;
}

class XiaoChaoRouFactory extends DishFactory { //小炒肉工厂
    create(): Dish {
        let dish = new XiaoChaoRou();  // 炒好小炒肉
        console.log('炒好了小炒肉');
        this.sendToTable(dish);    // 送到餐桌
        this.applyCoolTea(dish);// 提供凉茶
        return dish;
    }

    private sendToTable(dish: Dish) {
        console.log('服务员上菜了');
    }

    private applyCoolTea(dish: Dish) {
        console.log('送上凉茶');
    }
}

class KaoYaFactory extends DishFactory { //烤鸭工厂
    create(): Dish {
        let dish = new KaoYa();  // 切好烤鸭
        console.log('切好了烤鸭');
        this.sendToTable(dish);  // 送到餐桌
        this.applyDouPi(dish);  // 提供豆皮
        return dish;
    }
    private sendToTable(dish: Dish) {
        console.log('服务员上菜了');
    }
    private applyDouPi(dish: Dish) {
        console.log('送上豆皮');
    }
}

let xiaoChaoRou = new XiaoChaoRouFactory().create();
xiaoChaoRou.taste();

let beiJingKaoYa = new KaoYaFactory().create();
beiJingKaoYa.taste();
