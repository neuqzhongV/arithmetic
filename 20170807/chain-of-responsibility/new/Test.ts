import { CEO } from "./CEO";
import { Manager } from "./Manager";
import { TeamLeader } from "./TeamLeader";
import { Programmer } from "./Programmer";
import { Problem } from "./Problem";
import { Handler } from "./Handler";
/**
 * Created by zhongwei on 8/5/17.
 */

let person: Handler = new Programmer(new TeamLeader(new Manager(new CEO(undefined))));

for (let i = 0; i < 10; i++) {
    let p = new Problem(Math.random() * 10);
    person.handler(p);
}
