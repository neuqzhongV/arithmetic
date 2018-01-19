import { Md5 } from 'ts-md5/dist/md5';

export class EncryptUserPassword {

    constructor(data:Array<any>) {
        let map:any = {};
        data.forEach((user:any)=> {
            // 进行2次MD5加密
            let str:any = Md5.hashStr(user.password);
            user.password = Md5.hashStr(str);
        });
    }

}
