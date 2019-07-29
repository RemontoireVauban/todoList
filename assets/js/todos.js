//alert("Connected");

//check off specific todos by clicking
//$("li").click(function(){
	//if li is gray
//	if($(this).css("color") === "rgb(128, 128, 128)") {
	//turn black
//$(this).css({color: "black", textDecoration: "none" });
//	}
	//else
//	else {
//		$(this).css({color: "gray", textDecoration: "line-through" });

//	}

//});

//Checking new todos

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//taking new todo text
	var todoText = $(this).val();
		//clear todo
	$(this).val("");
		//create new li
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")	
	}

});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
});