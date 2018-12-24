// Displays the thumbnail on the big image
$(".small-imgs").click(function(){
	$(".big-img").attr("src",$(this).attr("src"));
});

var paused = false;
var counter = 1;

// Virtual click
$("#img"+counter).click();

// When backward button is clicked
$("#backward").click(function(){
	counter = counter - 1;
	if(counter < 1)
		counter = 4;
	$("#img"+counter).click();
});

// When left arrow is pressed on keyboard
$(document).keydown(function(e){
	if(e.which == 37){
		counter = counter - 1;
		if(counter < 1)
			counter = 4;
		$("#img"+counter).click();
	}
});

// When forward button is clicked
$("#forward").click(function(){
	counter = counter + 1;
	if(counter > 4)
		counter = 1;
	$("#img"+counter).click();
});

// When right arrow is pressed on keyboard
$(document).keydown(function(e){
	if(e.which == 39){
		counter = counter + 1;
		if(counter > 4)
			counter = 1;
		$("#img"+counter).click();
	}
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('bigImage');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Pauses the slideshow if #bigImage is clicked
$("#bigImage").click(function (){
	paused = !paused;
	if(paused == true)
		// Opens up the modal
		modal.style.display = "block";
});

// When the user clicks the cross, close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  };
};

// (Slideshow)Changes the image after every 2000ms
setInterval(function(){
	if(!paused)
		$("#forward").click();
},2000);