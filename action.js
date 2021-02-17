$(document).ready(function () {
    var source= $('#todolist-item-template').html();
    var template= Handlebars.compile(source);
    // // update
    $('#todolist')
    .on('dblclick','.content', function() {
        $(this).prop('contenteditable',true).focus();
    })
    .on('blur','.content', function() {
        var isnew = $(this).closest('li').is('.new');
        if(isnew){
            var todo = $(this).text().trim();//用來去前後空格
            // todo = todo.trim()//用來去前後空格;
            if(todo.length>0){
                todo = {
                    is_complete:false,
                    content:todo,
                };
                var li=template(todo)
                $(this).closest('li').before(li);
                }
            $(this).empty();//去掉輸入文字   
        }else{
            $(this).prop('contenteditable',false).focus();
        } 
    })

    //delet
    .on('click','.delet', function () {
        var result= confirm('do you want todelet?')
        if(result){
            $(this).closest('li').remove();
        }
    }) 
    //complete
    .on('click','.checkbox', function () {
        $(this).closest('li').toggleClass('complete');
        
    });
$('#todolist').find('ul').sortable({
        items:'li:not(.new)',
    });
});