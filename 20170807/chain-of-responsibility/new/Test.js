"use strict";
exports.__esModule = true;
var CEO_1 = require("./CEO");
var Manager_1 = require("./Manager");
var TeamLeader_1 = require("./TeamLeader");
var Programmer_1 = require("./Programmer");
var Problem_1 = require("./Problem");
/**
 * Created by zhongwei on 8/5/17.
 */
var person = new Programmer_1.Programmer(new TeamLeader_1.TeamLeader(new Manager_1.Manager(new CEO_1.CEO(undefined))));
for (var i = 0; i < 10; i++) {
    var p = new Problem_1.Problem(Math.random() * 10);
    person.handler(p);
}
