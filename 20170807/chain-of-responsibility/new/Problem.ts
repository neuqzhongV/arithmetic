/**
 * Created by onlyjyf on 8/5/17.
 */
export class Problem {
    private level:number = 1;
    /**
     * @param diffcultLevel 难度级别 (1~9)
     */
    constructor(diffcultLevel:number) {
        this.level = diffcultLevel;
    }

    public getLevel():number {
        return this.level;
    }
}
