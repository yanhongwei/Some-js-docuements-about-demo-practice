/**Created on 2017/1/22. 编辑于: 2017/3/14**/

$(function(){
    $.ajax({
        type: "post",
        dataType: "json",
        async:false,
        url: "xxxx/data.jon",
        data: {"mobile": "数据","smsToken":""}, //提交给后台的数据
        success: function (data) {
            //短信发送成功，则开始倒计时
            if(data.code == "success"){
                sendVerCodeFun();
            }else{
                alert(data.msg);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });

    $.ajax({
        //..... 一个页面中可以有多个ajax请求
    })
});


//-------------------------------------------------------
//原生ajax，这个写法只是简单的获取数据，提交数据没有写，而且form表单序列化的方法也没有写，以后慢慢扩展 2017/3/14
function createXHR(){
    if(typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    }else if(window.ActiveXObject){
        return new ActiveXObject("Microsoft XMLHTTP");
    }
}
var xhr = createXHR();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
            alert(xhr.responseText);
        }else{
            alert("Request was unsuccessful:" + xhr.status);
        }
    }
};
xhr.open("get", "example.txt", true); //true就代表是异步传输
xhr.setRequestHeader("Content-Type", "application/x-www.form-urlencoded");
xhr.send();