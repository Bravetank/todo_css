//Check off specific Todos by Clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});


//Click on X to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation(); //Stops event bubbling up tp parent elements
});

//Create todos
$("input[type='text']").keypress(function(event){
  if(event.which === 13)//The enter key
    {
      var todoText = $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }

});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
