/**
 * created by zhongwei 8/7/17
 */
enum DogType{
    ErHa,
    ZangAo,
}

interface Fightable{
    fight();
}

abstract class Dog implements Fightable{ // 抽象产品 - 狗
    abstract fight();
}

class ErHa extends Dog{ // 二哈
    fight(){
        console.log('很蠢很逗比');
        return false;
    }
}

class ZangAo extends Dog{ //具体产品 - M4A1
    fight(){
        console.log('很猛很强势');
        return true;
    }
}

class DogFactory{

    static createGun(type: DogType): Dog{
        switch(type){
            case DogType.ErHa:
                return new ErHa();
            case DogType.ZangAo:
                return new ZangAo();
            default:
                throw Error('本店没有这个品种的狗');
        }
    }
}

DogFactory.createGun(DogType.ErHa).fight();
DogFactory.createGun(DogType.ZangAo).fight();
