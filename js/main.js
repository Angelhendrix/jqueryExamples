$(function() {
    alert( "ready!" );
});


$("#hide").click(function(){
    $(".image").hide();
});

$("#show").click(function(){
    $(".image").show();
});



$(".header h1").dblclick(function(){
	$(".header h1").toggleClass("switch");
});

$("#btn").click(function(){
        $("ul").append("<li></li>");
    });

$('#huh').hover(function(){
	$(this).toggleClass('forum_hover');
});


$("h2").hover(function(){
    $('h2').slideUp(3000);
});


$("#btn2").click(function(){
    $("#id2").fadeToggle();
});

$("#id2").hover(function(){
	$(this).toggleClass('heavyFont');
})