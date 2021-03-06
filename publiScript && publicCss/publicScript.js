/**EventUtil对象:封装跨浏览器添加事件**/
var EventUtil = {
    addHandler: function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    }, //添加跨浏览器的事件

    removeHandler: function (element, type, handler) {
        if (element.removeEventListener) {
            element.removeEventListener(element, type, handler);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },//移除跨浏览器的事件

    getEvent: function (event) {
        return event ? event : window.event;
    },//取得跨浏览器的事件event

    getTarget: function (event) {
        return event.target || event.srcElement;
    },//取得事件的目标

    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = null;
        }
    },//取消事件的默认行为

    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },//取消事件的进一步传播和冒泡

    getRelatedTarget: function (event) {
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null;
        }
    }, //取得相关元素的方法

    getButton: function (event) {
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return event.button;
        } else {
            switch (event.button) {
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },// 取得跨浏览器的鼠标按钮事件

    getWheelDelta: function (event) {
        if (event.wheelDelta) {
            return event.wheelDelta;
        } else {
            return -event.detail * 40;
        }
    }, //鼠标滚轮事件

    getCharCode: function (event) {
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    } //取得字符编码
};

/**添加自定义事件**/
function EventTarget() {
    this.handlers = {}; //构造函数内定义一个this.handlers属性，并把一个空对对象赋值给此属性
}
EventTarget.prototype = {
    constructor: EventTarget,
    addHandler: function(type, handler){
        if(typeof this.handlers[type] == "undefined"){
            //如果this.handlers对象没有type属性，就创建此属性，然后把一个空数组赋值给它
            this.handlers[type] = [];
        }
        //往this.handlers.type数组中推入一个项，但是此项实际上是一个函数
        this.handlers[type].push(handler);
    },
    fire: function(event){
        if(!event.target){
            event.target = this;
        }
        if(this.handlers[event.type] instanceof Array){
            var handlers = this.handlers[event.type];
            for(var i=0, len=handlers.length; i< len; i++){
                handlers[i](event);
            }
        }
    },
    removeHandler: function(type, handler){
        if(this.handlers[type] instanceof Array){
            var handlers = this.handlers[type];
            for(var i=0, len=handlers.length; i< len; i++){
                if(handlers[i] === handler){
                    break;
                }
            }
            handler.splice(i, 1); //移除事件就是利用数组的splice方法把此项从输入中移除
        }
    }
};


/**函数绑定-js高级: 增加了函数柯里化的复杂函数绑定 **/
function bind(fn, context){
    /* 对arguments对象使用 Array.prototype.slice() 方法可以将其转换为数组。
     * 丢弃第一个参数，因为第一参数就是将要柯里化的函数。
     * 丢弃第二个参数，是因为context上下文是传入的一个object对象*/
   var args = Array.prototype.slice.call(arguments, 2);
   return function(){
       var innerArgs = Array.prototype.slice.call(arguments);
       var finalArgs = args.concat(innerArgs);
       return fn.apply(context, finalArgs);
   }
}
/*使用bind()的方法
var handler = {
    message: "使用bind绑定函数方法示例",
    clickEffect: function(event){
        alert(this.message + ":" + event.type);
    }
};
var btn = getClassName("myBtn");
EventUtil.addHandler(btn, "click", bind(handler.clickEffect, handler));*/


/**高级定时器-js高级-数组分块(array chunking)**/
function chunk(arry, process, context){
    setTimeout(function(){
        var item = array.shift();
        process.call(context, item);
        if(array.length > 0){
            setTimeout(arguments.callee, 100);
        }
    },100)
}   //调用方法见 22.3.2-高级定时器-数组分块.html



/**通过id获取元素**/
var getId = function(id) {
    //当id传进来的是字符串时调用getElementById方法返回id元素，如果不是字符串直接返回此参数
    return typeof id === "string" ? document.getElementById(id): id;
};



/**通过标签名tagName($$)获取元素**/
var getTagName = function(tagName, oParent){
    //如果有父级parent就在父级元素之下查找，如果没有父级元素就直接在document下查找
    return (oParent || document).getElementsByTagName(tagName);
};


/**通过class($$$)获取元素**/
var getClassName = function(oClass, oParent){
    var saveClassArray = [],
        regClass = new RegExp("(\\s|^)" + oClass + "($|\\s)"),//\s匹配一个空白字符
        allCurrentEle = getTagName("*", oParent); //用getTagName方法取得所有当前标签名的元素
    for(var i=0; i< allCurrentEle.length; i++){
        //regClass.test(allCurrentEle[i].className) && saveClassArray.push(allCurrentEle[i]);
        if(regClass.test(allCurrentEle[i].className)){
            saveClassArray.push(allCurrentEle[i]);
        }
    }
    return saveClassArray;
};

/**取得当前元素的className的数量**/
function getClassNum(ele){
    //split()基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中。
    return ele.className.split(/\s+/);
}

/**取得当前元素的索引**/
function getIndex(ele){
    var n=0;
    //同级节点中第一个节点的previousSibling属性为null,最后一个节点的nextSibling属性为null;
    var pre = ele.previousSibling;
    while(pre != null){
        if(pre.nodeType == 1){
            n++;
        }
        pre = pre.previousSibling;
    }
    return n;
}


/**元素添加class**/
var addClassFun = function(ele, addClassName){
    var oldClassName = ele.className;
    if(oldClassName == ""){
        oldClassName = className;
        return oldClassName;
    }else{
        var aClassName = oldClassName.split(" ");
        var oIndex = arrIndexOf(aClassName, addClassName);
        if(oIndex == -1){
            oldClassName += " " + addClassName;
            return  oldClassName;
        }
    }
};

/**元素删除class**/
var removeClassFun = function(ele, remClassName){
    var oldClassName = ele.className;
    if(oldClassName != ""){
        var aClassName = oldClassName.split(" ");
        var oIndex = arrIndexOf(aClassName, remClassName);
        if(oIndex != -1){
            //splice() 方法始终都会返回一个数组，该数组中包含从原始数组中删除的项（如果没有删除任何项，则返回一个空数组）
            aClassName.splice(oIndex, 1); //删除当前项
            oldClassName = aClassName.join(" ");
            return oldClassName;
        }
    }
};
/**删除class**/


/**判断数组是不是包含某一个特定的项,如果包含此项就返回数组中此项的索引，如果没有就返回-1**/
var arrIndexOf = function(arr, oneOf){
    for(var i=0; i<arr.length; i++){
        if(arr[i] == oneOf){
            return i;
        }
    }
    return -1;
};

/**仿jQuery的siblings方法**/
function siblings(ele){
    var arr = [];
    var previousSib = ele.previousSibling;
    while(previousSib){
        if(previousSib.nodeType === 1){
            arr.push(previousSib);
        }
        previousSib = previousSib.previousSibling;
        arr.reverse(); //把顺序反转一下，这样元素的顺序就是按照先后的了
    }
    var nextSib = ele.nextSibling;
    while(nextSib){
        if(nextSib.nodeType === 1){
            arr.push(nextSib);
        }
        nextSib = nextSib.nextSibling;
    }
    return arr;
}



/**获取元素的偏移量**/
function getPosition(ele){
    var curEleLeft = ele.offsetLeft;
    var curEleTop = ele.offsetTop;
    var curEleParent = ele.offsetParent;
    while(curEleParent != null){
        curEleLeft += curEleParent.offsetLeft;
        curEleTop += curEleParent.offsetTop;
        curEleParent = curEleParent.offsetParent;
    }
    return {left: curEleLeft, top: curEleTop};
}


/**获取元素的样式**/
function getCss(ele, attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele, false)[attr];
    }else{
        return ele.currentStyle[attr];
    }
}


/**数组去重 : 实现思路: 获取没重复的最右一个值放入到数组(检测到有重复值时终止当前循环同时进入到顶层循环的下一轮判断)**/
function unique(arr){ // unique /juː'niːk/ 唯一的
    var saveArr = [];
    var len = arr.length;
    for(var i= 0; i < len; i++){
        for(var j= i+1; j< len; j++){
            if(arr[i] === arr[j]){
                j = ++i;
            }
        }
        saveArr.push(arr[i]);
    }
    return saveArr
}
/*var theArray = [1, 1, 4, 5, 6, 6, 8, 7, 3, 7, 9, 11, 10, 11, 15, 17, 15, 31];
 var uniqueArr = unique(theArray);
 for(var i=0; i < uniqueArr.length; i++){
 console.log(uniqueArr[i]);
 }*/


/**数组去重方法2**/
/*function unique2(){
    var arr1 =[1,2,2,2,3,3,3,4,5,6],
        arr2 = [];
    for(var i = 0,len = arr1.length; i< len; i++){
        if(arr2.indexOf(arr1[i]) < 0){
            arr2.push(arr1[i]);
        }
    }
    console.log(arr2); // 1,2,3,4,5,6
}*/


/**清除字符串前后的空格**/
function trim(str){ // /trɪm/去除 修剪
    if(str && typeof str === "string"){
        // return str.replace(/\s+/g, ""); //去除所有空格
        return str.replace(/^\s+|\s+$/g, "");  //去除两头空格
    }
}