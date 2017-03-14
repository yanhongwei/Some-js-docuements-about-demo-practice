
function randomString(length) {
    // split() : 基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中。
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
    if (! length) {
        //Math.random() 方法返回大于等于0小于1的一个随机数。
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    // return str;
}
console.log(str + ",");

for(var i=0; i<100; i++){
    randomString(6);
}
