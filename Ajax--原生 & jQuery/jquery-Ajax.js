/**Created on 2017/1/22. 编辑于: 2017/3/14**/

$(function(){
    $.ajax({
        type: "post",
        dataType: "json",
        async:false,
        url: "data.jon",
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

   /* $.ajax({
        //..... 一个页面中可以有多个ajax请求
    })*/
});
