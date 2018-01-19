// 如果需要正常编译，需要运行以下命令
// npm install "@types/node" --save-dev
// npm install --save ts-md5

import { EncryptUserPassword } from "./EncryptUserPassword";
import * as data from "./user.json";
import * as fs from 'fs';

console.time('run');
let f: EncryptUserPassword = new EncryptUserPassword(data);
console.timeEnd('run');

fs.writeFileSync('user-output.json', JSON.stringify(data));
