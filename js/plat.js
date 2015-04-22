 function createMessage() {
         var html = '<tr><td><input name="name" class="required" id="name"/></td><td><input name="tel"  class="required" id="tel"/></td><td><input name="chargename"  class="required"  id="chargename"/></td><td><input name="playID"  class="required" id="playID"/></td><td><input name="chargeID"  class="required" id="chargeID"/></td></tr>'
        $(".myAdd tbody").append(html)
        addClass();
       /* rowspan();*/
        setValue();

    }     //添加新增元素；

    //设置每个input的属性；

    function setValue() {
        var data = ["", "", "", "", , ""];
        var sum = 0;
        $(".myAdd tbody tr:last td input").each(function () {
            $(this).val(data[sum])
            sum++;
        });

    }


    //为表格添加样式
    function addClass(){
        
        $(".myAdd tbody tr:odd").addClass("odd");

        $(".myAdd tbody tr:even").addClass("even");

    }
      //获取表格中的值

   function getValue() {
        var data = {};
        
        $(".myAdd tbody tr:last td input").each(function () {
             data[$(this).attr("name")]=$(this).val();
           
        });
       var json_data = JSON.stringify(data);

       console.log(json_data);
    }

   
     $(".myAdd tbody").on("focus","tr input",function(){
        var $required=$("<strong class='high'>*</strong>");//创建元素
        $(this).parent().append($required);//追加到文档中
     })
    //为表单元素添加失去焦点事件
    
    $(".myAdd tbody").on("blur","tr input",function(){  
        var $parent=$(this).parent();
        //验证用户
        if($(this).is("#name")){
            if (this.value==""||this.value.length<2) {
                var errorMsg="请至少输入两个汉字.";
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                var okMsg ="输入正确";
                $parent.append ('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }
        //验证电话
        if($(this).is("#tel")){
            if (this.value==""||this.value.length<11) {
                var errorMsg="请输入正确的手机号.";
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                var okMsg ="输入正确";
                $parent.append ('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }
       //验证身份证号 
        if($(this).is("#playID")){
            if (this.value==""||this.value.length<18){
                var errorMsg="请输入正确的营业执照.";
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                var okMsg ="输入正确";
                $parent.append ('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }
        //验证负责人名字
        if($(this).is("#chargename")){
            if (this.value==""||this.value.length<2) {
                var errorMsg="请输入正确的负责人姓名.";
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                var okMsg ="输入正确";
                $parent.append ('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }
       if($(this).is("#chargeID")){
            if (this.value==""||this.value.length<2) {
                var errorMsg="请输入正确的负责人身份证号码.";
                $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                var okMsg ="输入正确";
                $parent.append ('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }
    });