<script type="text/javascript">
     function validate(){
       var reg = new RegExp("^[0-9]*$");
       var obj = document.getElementById("name");
    if(!reg.test(obj.value)){
        alert("请输入数字!");
    }
    if(!/^[0-9]*$/.test(obj.value)){
        alert("请输入数字!");
    }
  }
</script>

# 验证数字的正则表达式集
1.   验证数字：               ^[0-9]*$
2.   验证n位的数字：           ^\d{n}$
3.   验证至少n位数字：         ^\d{n,}$
4.   验证m-n位的数字：         ^\d{m,n}$
5.   验证零和非零开头的数字：    ^(0|[1-9][0-9]*)$
6.   验证有两位小数的正实数：    ^[0-9]+(.[0-9]{2})?$
7.   验证有1-3位小数的正实数：   ^[0-9]+(.[0-9]{1,3})?$
8.   验证非零的正整数：         ^\+?[1-9][0-9]*$
9.   验证非零的负整数：         ^\-[1-9][0-9]*$
10.  验证非负整数（正整数 + 0）  ^\d+$
11.  验证非正整数（负整数 + 0）  ^((-\d+)|(0+))$
12.  验证长度为3的字符：^.{3}$
13.  验证由26个英文字母组成的字符串：^[A-Za-z]+$
14.  验证由26个大写英文字母组成的字符串：^[A-Z]+$
15.  验证由26个小写英文字母组成的字符串：^[a-z]+$
16.  验证由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$
17.  验证由数字、26个英文字母或者下划线组成的字符串：^\w+$
18.  验证用户密码:^[a-zA-Z]\w{5,17}$ 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。
19.  验证是否含有 ^%&',;=?$\" 等字符：[^%&',;=?$\x22]+
20.  验证汉字：^[\u4e00-\u9fa5],{0,}$
21.  验证Email地址：^\w+[-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
22.  验证InternetURL：^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$
23.  验证电话号码：^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$：--正确格式为：
        XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。
        
24.  验证手机号码: var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
                      //$: 匹配以数字结尾, [xyz]: 匹配这个集合中的任何一个元字符        
        
25.  验证身份证号（15位或18位数字）：^\d{15}|\d{}18$
26.  验证一年的12个月：^(0?[1-9]|1[0-2])$ 正确格式为：“01”-“09”和“1”“12”
27.  验证一个月的31天：^((0?[1-9])|((1|2)[0-9])|30|31)$ 正确格式为：01、09和1、31。
28.  整数：^-?\d+$
29.  非负浮点数（正浮点数 + 0）：^\d+(\.\d+)?$
30.  正浮点数 ^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$
31.  非正浮点数（负浮点数 + 0） ^((-\d+(\.\d+)?)|(0+(\.0+)?))$
32.  负浮点数 ^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$
33.  浮点数 ^(-?\d+)(\.\d+)?$


34. 判断密码是不是由8-12位英文字母、数字或者符号(_-@) 组成 ： var parten=/^(\w){8,12}$/; 
