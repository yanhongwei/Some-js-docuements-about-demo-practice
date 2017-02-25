/**Created by wxh-s022 on 2017/1/22.**/
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
xhr.send(document);


$(document).ready(function(){
    $("#start").click(startAjax);
    $.post("Test",{'name':'Hello','age':22});
});

//-------------------------------------------------------
$(function(){
    $.ajax({
        type: "get",
        url: "xxxx/data.jon",
        dataType: "json",
        error: function(xhr, textStatus, errorThrown){
            alert("error");
        },
        success: function(data){
            $(".headerWall").html(data);
        }
    });
    
    $.ajax({
        //..... 一个页面中可以有多个ajax请求
    })
});
