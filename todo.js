$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(){
    $(this).parent().remove();
});
$("input[type = 'text'").keypress(function(event){
if(event.which == 13)
{
    var todotext = $(this).val();
     $(this).val("");
     $("ul").append("<li><span><i class='fas fa-trash'></i></span>" + todotext + "</li>")
}
});
$(".fa-plus").click(function(){
    $("input[type = 'text'").toggleClass('remove');
});