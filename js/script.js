var images = ['background-image.jpg', 'background-image2.jpg', 'background-image3.jpg'];
var path = 'img/'; 
var n_windows = document.getElementsByClassName("parallax-window").length;
var n_images = images.length;

$(document).ready(function(n_images){
	$('.parallax-window').each(function(i){
		if (i > n_images - 1) {
			i = Math.round(Math.random(n_images - 1));
		}
		$(this).parallax({
			imageSrc: (path + images[i]),
			zIndex: 2
		});
	});
});