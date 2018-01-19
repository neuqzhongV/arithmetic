/**
 *  声明抽象类 Restaurant
 */

abstract class Restaurant {
    protected cookingStyle: string;
    protected averageSpend: number;
    constructor(cookingStyle: string, averageSpend: number) {
        this.cookingStyle = cookingStyle;
        this.averageSpend = averageSpend;
    }

    getCookingStyle(): string {
        return this.cookingStyle;
    }

    getAverageSpend(): number {
        return this.averageSpend;
    }

    abstract activity(): any ;
}

class ChuanCaiGuan extends Restaurant {
    private bossInfo: object;

    constructor(bossInfo: object) {
        super("hot-spic",100);
        this.bossInfo = bossInfo;
    }

    activity(): any {
        
    }
}

