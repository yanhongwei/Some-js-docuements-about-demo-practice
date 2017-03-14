/** Create on 2017/3/13*/

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




/*
console.log(Math.random()); //0.9395614803309535
console.log(Math.floor(Math.random() * 10));  //1

var arr = [];
for(var i=0; i<20; i++){
    //console.log(Math.floor(Math.random() * 10));
    arr.push(Math.floor(Math.random() * 10));
}
console.log(arr);  //[ 2, 0, 7, 4, 3, 5, 3, 5, 0, 4, 8, 1, 1, 6, 4, 4, 4, 5, 9, 8 ] */
