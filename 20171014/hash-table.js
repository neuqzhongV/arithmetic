let randomNum = Math.random(); // 随机数
let len = 256; // hash-table的size
let hashTable = {};
let data = []; // 生成假数据
for (let i = 0; i < len + 20; i++) {
    data.push(Math.ceil(Math.random() * len));
}
for (let i = 0; i < data.length; i++) {
    let key = hash(data[i]);
    if (!hashTable[key]) { // 不存在hash值 直接添加
        hashTable[key] = data[i];
    } else { // 存在hash值
        // 当前校验值
        let checkKey = checkHash(data[i]);

        if (Object.prototype.toString.call(hashTable[key]) === '[object Object]') {
            // 存储的是一个对象，说明已经是有两个或以上冲突值 
            // 当该对象里没有当前校验值时往里面的对象添加一个键值对
            if (hashTable[key][checkKey] === undefined) {
                hashTable[key][checkKey] = data[i];
            }
        } else { // 不是一个对象
            let dat = hashTable[key];
            let checkKeyOld = checkHash(dat);
            // 当前校验值与已经存储的数据的hash校验值不一样的时
            // 表示当前这个数据和原先存储的不一样 添加一个键值对
            if (checkKeyOld != checkKey) {
                hashTable[key] = {};
                hashTable[key][checkKeyOld] = dat;
                hashTable[key][checkKey] = data[i];
            }
        }
    }
}
/**
 * 哈希算法（乘以一个斐波那契数再右移24位）
 *  长度为256
 */
function hash(key) {
    return (key * 2654435769) >> 24;
}

/**
 * 
 * 用于处理冲突的校验值
 */
function checkHash(key) {
    return (Math.floor(len * (key * randomNum - Math.floor(key * randomNum))));
}

console.log(hashTable);