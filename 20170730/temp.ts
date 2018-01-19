
/**
 * 声明抽象类Shape 
 * */
abstract class Shape {
    //声明受保护的属性edge, 是的，你没看错，protected只能用于父类和子类
    protected edge: number;
    //声明构造函数，入参类型为number
    constructor(edge: number) {
        this.edge = edge;
    }
    //声明类实例方法，方法名后面的number是限制方法的返回类型
    getEdge(): number {
        return this.edge;
    }
    //声明抽象方法
    abstract getArea(): number;
}

/**
 * 声明类Triangle, 继承自抽象类Shape，必须实现抽象方法getArea()
 * */
class Triangle extends Shape {
    //声明类私有属性，其他类不能访问，包括父类
    private width: number;
    private height: number;

    //声明构造函数，必须显式调用父类构造函数，用super()
    constructor(width: number, height: number) {
        super(3);
        this.width = width;
        this.height = height;
    }

    //实例方法，重写父类同名方法
    getArea(): number {
        return this.width * this.height / 2;
    }
}

/**
 * 声明类Rectangle, 继承自抽象类Shape，必须实现抽象方法getArea()
 * */
class Rectangle extends Shape {
    //声明类私有属性，其他类不能访问，包括父类
    private width: number;
    private height: number;

    //声明构造函数，必须显式调用父类构造函数，用super()
    constructor(width: number, height: number) {
        super(4);
        this.width = width;
        this.height = height;
    }
    
    //实例方法，重写父类同名方法
    getArea(): number {
        return this.width * this.height;
    }
}

//模拟入参数类型限制为Shape抽象类实例
function outputShape(shape: Shape) {
    console.log(shape.getEdge());
    console.log(shape.getArea());
}

//模拟程序主入口函数
function main() {
    outputShape(new Triangle(4, 5));
    outputShape(new Rectangle(4, 5));
}

main();