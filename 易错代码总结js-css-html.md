##### 创建于2016-9-23 ： 主要是想总结平时写错的代码和容易犯错的地方，当然还有一些不会的后来学会了的总结。

1. #### 如果在"提交"按钮上绑定了事件，比如说弹出窗口之类，这样"提交"按钮就不能用`</button>` 和 `<input type="submit" value="提交">`这两种写法，原因是button按钮和type="submit"这种方法，在点击之后会刷新页面，所以弹出提示的窗口会在闪出一瞬间消失，因为刷新页面之后默认隐藏的弹出窗口肯定还是隐藏的，所以如果在提交和登录这样的按钮上绑定事件的话，正确写法可以这样`<input type="button" value="登录"/>` 这样需要提示的弹出框就可以正常弹出了，当然如果提交或登录按钮上没有绑定事件，按照上面两种写法也是可以的。

2.  #### 所有的input和button都要放在`<form action="" method="post"></form>`标签对里，因为只有这样才可以提交给服务器，但是如果需要把页面里input的值传递给创建的一组隐藏input域的话那就不需要吧input放入到form里面了。

3. #### jq中获取当前元素的索引的方法: 代码如下
    $(".selFun .closeFun").click(function(){ <br/>
        $(this).css("backgroundColor", "#ccc"); 
        
        var nIndex = $(".selFun .closeFun").index(this);  //获取当前元素索引的方法
        
        $(".selFun li").eq(nIndex).css({"display":"none"}); <br/>
    });

4. #### 关于清除浮动的问题: 
      (1).如果一个div或者ul没有设置高度，子元素又设置了float:left; 那么在子元素的最后加一个同级元素`<div class="clear"></div>`css中增加.clear{ clear:both; } <br/>
      因为只有这样才可以在试调的时候得到父级元素(div/ul)的高度，而且这种做法是最多使用的一种情况。 <br/>
      (2).如果父级元素div/ul设置了高度，那么里面的子元素即使用了float也是不用添加clear清除浮动的，因为在父级元素上增加overflow:hidden;这样已经清除浮动了。<br/>
      (3).不清楚浮动父级div/ul会出现的问题，一.背景不能显示。 二.边框不能撑开。 三.margin设置值不能正确显示。<br/>
      
5. #### box-shadow属性: 
    box-shadow: 1px 1px 3px 2px #cfcecf; //横向阴影1px, 纵向阴影1px, 模糊半径3px, 阴影展开半径2px, 颜色值。

6. #### 关于页面中的字体:
    <br/>亮仔给的字体:<br/>
        body{ "Lantinghei SC","Open Sans",Arial,"Hiragino Sans GB","Microsoft YaHei","STHeiti","WenQuanYi Micro Hei",SimSun,sans-serif;} 
    <br/> 京东字体:<br/>
        body{}
    <br/>腾讯AlloyTeam网站的字体写法：<br/>
        body{font-family: 'Helvetica Neue', Helvetica, 'Lucida Grande', Arial, 'Hiragino Sans GB', 微软雅黑, 'WenQuanYi Micro Hei', STHeiti, SimSun, sans-serif;}
        *{font-family: Michroma,'Segoe UI Light','Segoe UI','Segoe UI WP','Microsoft Jhenghei','微软雅黑',tahoma,'Hiragino Sans GB W3';}
}
    
7. #### 关于js原生给元素添加样式和删除样式的方法，在js高级上是有一个classList属性,但是IE8之后才支持这个属性，firefox,chrome，safari都支持，目前用的还不算普及,大致的写法如下: // 原生方法
    document.querySelector('.el').classList.add('class'); <br/>
    document.querySelector('.el').classList.remove('class'); <br/>
    document.querySelector('.el').classList.toggle('class'); <br/>
    
   ##### jq的removeClass()和addClass()用的比较普及,代码如下: //jq方法
         $("#eyeIcon").click(function(){
           if($(this).hasClass("eyeIcon")){
               $(this).removeClass("eyeIcon");
               $(this).addClass("hidePasEye");
           }else{
               $(this).removeClass("hidePasEye");
               $(this).addClass("eyeIcon");
           }
         })
         
8. #### 关于替换type="password"为 type="text"的写法，代码如下:
       $(function(){
           $("#eyeIcon").click(function(){
               var inputPasValue = $("#inputPassword").val();
               if($(this).hasClass("eyeIcon")){
                   $(this).removeClass("eyeIcon");
                   $(this).addClass("hidePasEye");
                   $(".inputPasWall").html('<input type="text" id="inputPassword" placeholder="请输入密码">')
               }else{
                   $(this).removeClass("hidePasEye");
                   $(this).addClass("eyeIcon");
                   $(".inputPasWall").html('<input type="password" id="inputPassword" placeholder="请输入密码">')
               }
               $("#inputPassword").val(inputPasValue);
           })
       })   //文件夹"扫描支付9-27"-->201-login.html
       
9.  #### 关于"验证码表单"和"密码表单"在当前页面提示错误，错误情况会不弹出的问题，在U盘备份的文件 -- 工作页面 --> 微信页面 --> confirmDrawCash.html中有详细的写法

10. #### jquery的fadeIn()是展示，fadeOut()是隐藏

11. #### javascript 原生ajax方法: 
        
12. #### select的option不支持click事件，所以以后在写下拉的时候，不管是手机端还是PC端尽量不要用select

13. #### 关于点击当前p后ul下拉出现，写法有两种:代码如下:
       #####第一种: //购买数量 :  示例见xiaMen-H5-Page文件夹
       
               $(".purNumInputWall").click(function(event){
                   event = EventUtil.getEvent(event);
                   $(".purchaseNumUl").toggle(); //这个toggle方法就是
                   EventUtil.stopPropagation(event);
               });
               //在body上点击下拉隐藏
               $(document).click(function(){
                   $(".purchaseNumUl").css("display","none");
               });  //如果不在body上增加这行代码，点击li之后是不会隐藏的，上面再purchaseNumberInputWall上写了stopPropagation
               //充值面额下拉值写进表单里
               $(".recAmountUl li").click(function(){
                   $(".outputPurNum").html($(this).html());
               });
               
       #####第二种： 这种写法就是直接判断有没有displayNone和displayBlock样式，这种更符合直觉的写法 示例见:zhiFuWallet-206.html
       
               //点击"证件所在地"后面的选择框出现下拉框，再次点击隐藏
               $(".selectArea").click(function(){
                   if($(".showAreaUl").hasClass("displayNone")){
                       $(".showAreaUl").removeClass("displayNone").addClass("displayBlock");
                   }else{
                       $(".showAreaUl").removeClass("displayBlock").addClass("displayNone");
                   }
               });
               //把地区值写进上面的span框中
               $(".showAreaUl li").click(function(){
                   $(".saveAreaSpan").html($(this).html());
                   $(".showAreaUl").removeClass("displayBlock").addClass("displayNone");
               }) 
               //若果想在body上单击隐藏，可见206-xxxx.html的页面 主要是注意event是必须在点击函数上就当参数传入封装函数的
               
                                 
14. ####js高级 5.5.5函数属性和方法 apply()和call(): 这两个方法的用途是在特定的作用域中调用函数，实际上等于设置函数体内this对象的值。
      ##### 1.apply()方法接收两个参数：一个是在其中运行函数的作用域，另一个是参数数组。其中，第二个参数可以是Array的实例，也可以是arguments对象。
      
                function sum(num1, num2){
                    return num1 + num2;
                }
                function callSum1(num1, num2){
                    return sum.apply(sum, arguments); //传入arguments对象
                }
                fuction callSum2(num1, num2){
                    return sum.apply(sum, [num1, num2]); //传入数组
                }
                alert(callSum1(10, 10)); //20
                alert(callSum2(10, 10)); //20   
                总结: 在我看来apply()方法和call()方法，实际上就是自己调自己，函数的实例用sum.apply()方法调用，
                但是apply方法中第一个是参数是函数自己(也可以写this)，第二个参数是外围函数传进来的参数     
            
 14-2. ##### 1. call()方法也是接收两个参数: 第一个参数是this值没有变化，变化的是其余参数都是直接传递给函数。换句话说就是在使用call()方法时，传递给函数的参数必须诸葛列举出来。
      
15. #### 表格清除格与格之前的间距的样式: border-collapse: collapse;

16. #### 手机端页面解决ios的button按钮的各种bug问题
       /*解决点击input textarea出现边框的问题*/ <br/>
       input:focus, input:active, input:link, input:visited{ outline:none;border:0;} <br/>
       textarea:focus, textarea:active, textarea:link, textarea:visited{ outline:none;border:0;} <br/>
       /*解决点击input textarea出现边框的问题*/ 
       
       /*解决ios苹果button圆角和渐变的问题*/ <br/>
       input[type=button], input[type=submit], input[type=file], button { cursor: pointer;  -webkit-appearance: none; } <br/>
       /*解决ios苹果button圆角和渐变的问题*/ 
       
       /*解决ios移动端点击按钮会出现暗色背景的问题*/  <br/>
       input{  -webkit-appearance:none; /*去除系统默认的样式*/ -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /* 点击高亮的颜色*/ } <br/>
       /*解决ios移动端点击按钮会出现暗色背景的问题*/
      
17. #### 自己常用到的正则判断
    ###### 1. 判断手机号的: /^0?1[3|4|5|8][0-9]\d{8}$/
            `if(/^0?1[3|4|5|8][0-9]\d{8}$/.test(target.value) && target.value != ""){
                return null;
            }else{
                $(".errorPromptDiv").html("请输入正确的手机号！");
            }`
    ###### 2.判断验证码: /^[0-9]{6}$/    <br/>
    ###### 3.判断身份证: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/     <br/>
    ###### 4.判断银行卡: /([0-9]{17}([0-9]|X|x))|([0-9]{15})/   <br/>
    ###### 4.判断邮箱: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
      
18. #### 字体两端对齐
    `text-align:justify; 
    
    text-justify:distribute-all-lines;/*ie6-8*/
    
    text-align-last:justify;/* ie9*/
    
    -moz-text-align-last:justify;/*ff*/
    
    -webkit-text-align-last:justify;/*chrome 20+*/`
    
19. #### unbind()方法真的很好用 : 示例详见zhiFuWallet --> 1-113-transferAccountMoney.html
    `$(".dropDownP").each(function(i) {
        //给动态创建的行，点击到账时间，下面的ul中的第一个li字体变蓝
        $(".dropDownP").next("ul").eq(i).children("li:nth-child(1)").addClass("blueFont");
        $(".dropDownP").next("ul").eq(i).children("li:nth-child(1)").css("background-color", "#eef6fa");
        $(this).unbind().click(function() {
            $(".showHideUl").hide();
            $(".dropDownP").next("ul").eq(i).toggle();
        });
    });
    `
20. #### outerHTML 属性
    `在读模式下， outerHTML 返回调用它的元素及所有子节点的 HTML 标签。在写模式下， outerHTML会根据指定的 HTML 字符串创建新的 DOM子树，然后用这个DOM子树完全替换调用元素。下面是一个例子。`
        <div id="content">
            <p>This is a <strong>paragraph</strong> with a list following it.</p>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
        var allContent =  content.outerHTML; allContent就输出上面所有的代码
    
21. #### cloneNode() 方法
    `cloneNode() 方法不会复制添加到 DOM 节点中的 JavaScript 属性，例如事件处
    理程序等。这个方法只复制特性、（在明确指定的情况下也复制）子节点，其他一切
    都不会复制。`
    
22. #### 函数声明 函数表达式 和 匿名函数
    ```下面的代码却会导致错误。
           function(){
                //这里是块级作用域
           }(); //出错！
            这段代码会导致语法错误，是因为 JavaScript 将 function 关键字当作一个函数声明的开始，
            而函数声明后面不能跟圆括号。然而，函数表达式的后面可以跟圆括号。要将函数声明转换成函数表达式，
            只要像下面这样给它加上一对圆括号即可。
           (function(){
                //这里是块级作用域
           })();
    ```
    
23. #### 响应式网页的头部
    *viewport是网页默认的宽度和高度，网页宽度默认等于屏幕宽度（width=device-width）原始缩放比例（initial-scale=1）为1.0，即网页初始大小占屏幕面积的100%, maximum-scale允许用户缩放到的最大比例，user-scalable允许用户是否可以手动缩放* <br>
    `meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" ` <br>
    `meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"`
    *忽略将页面中的数字识别为电话号码，忽略android平台中对邮箱地 址的识别* <br>
    `meta content="telephone=no,email=no" name="format-detection" /`
    
24. ####   media总结
    @media only screen and (max-width:480px){/*max-device-width:480px:(不大于480px)也就是小于480px的手机，包含了iphone 4, 5, 6, 6+*/} <br>
    @media only screen and (min-width:480px) and (max-width:960px){/*不小于480px不大于960px的判断*/} <br>
    @media only screen and (min-width:960px) and (max-width:1440px){/*不小于960px不大于1440px的判断*/} <br>
    @media only screen and (min-width:1440px){} <br>
    @media only screen and (min-width:2000px){} <br>

25. #### String对象的split()方法：用于把一个字符串分割为一个字符串数组。  
        示例见:
            /**取得当前元素的className的数量**/
            function getClassNum(ele){
                //split()基于指定的分隔符将一个字符串分割成多个子字符串，并将结果放在一个数组中。
                return ele.className.split(/\s+/);
            }
            /**取得当前元素的className的数量**/
            
26. #### mouseover和mouseenter的区别：(js高级 13.4.3节)<br/>
      mouseenter ：在鼠标光标从元素外部首次移动到元素范围之内时触发。这个事件不冒泡，而且在光标移动到后代元素上不会触发。<br/>
      mousemove ：当鼠标指针在元素内部移动时重复地触发。

27. ####  //     去掉字符串前后的空格
        //去左空格;
        function ltrim(s){
            return s.replace(/(^\s*)/g, "");
        }
        //去右空格;
        function rtrim(s){
            return s.replace(/(\s*$)/g, "");
        }
        //去左右空格;
        function trim(s){
            return s.replace(/(^\s*)|(\s*$)/g, "");
        }
28. ####    
    
    
    
    
    
    
