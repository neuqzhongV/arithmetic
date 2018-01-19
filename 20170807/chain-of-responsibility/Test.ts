import {CEO} from "./CEO";
import {Manager} from "./Manager";
import {TeamLeader} from "./TeamLeader";
import {Programmer} from "./Programmer";
import {Problem} from "./Problem";
import {Handler} from "./Handler";
/**
 * Created by onlyjyf on 8/5/17.
 */
let p0:Handler = new CEO();
let p1:Handler = new Manager();
let p2:Handler = new TeamLeader();
let p3:Handler = new Programmer();

for (let i = 0; i < 10; i ++) {
    let p = new Problem(Math.random() * 10);
    if (p.getLevel() < p3.getMaxHandlerLevel()) {
        p3.handler(p);
    } else if (p.getLevel() < p2.getMaxHandlerLevel()) {
        p2.handler(p);
    } else if (p.getLevel() < p1.getMaxHandlerLevel()) {
        p1.handler(p);
    } else {
        p0.handler(p);
    }
}
