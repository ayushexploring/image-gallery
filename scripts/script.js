$(".small-imgs").click(function(){
	$(".big-img").attr("src",$(this).attr("src"));
});

var paused = false;
var counter = 1;

$("#img"+counter).click();

$("#backward").click(function(){
	counter = counter - 1;
	if(counter < 1)
		counter = 4;
	$("#img"+counter).click();
});

$("#forward").click(function(){
	counter = counter + 1;
	if(counter > 4)
		counter = 1;
	$("#img"+counter).click();
});

$(".big-img").click(function (){
	paused = !paused;
});

setInterval(function(){
	if(!paused)
		$("#forward").click()
},2000);