let slides = document.querySelectorAll('#slider .slide');
// make variable for current slide
let currSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);

function nextSlide(){
	goToSlide(currSlide+1);
} 
function prevSlide(){
	goToSlide(currSlide-1);
} 
//stop the slideshow when click to dot
window.dotToSlide = function(n){
	goToSlide(n-1);
	pauseSlideshow();
}

window.goToSlide = function goToSlide(n){
	slides[currSlide].className = 'slide';
	// get current slide by divide amount of slides
	currSlide = (n+slides.length)%slides.length;
	slides[currSlide].className = 'slide showing active';
	
}
// make prev and next buttons
let next = document.getElementById('next');
let previous = document.getElementById('previous');

//click to slides don't break by autoplay because autoplay will stopped by clicks to buttons
next.onclick = function(){
	pauseSlideshow();
	nextSlide();
}
previous.onclick = function(){
	pauseSlideshow();
	prevSlide();
}
let playing = true;
let pause = document.getElementById('pause');

// stop a slideInterval
	function pauseSlideshow(){
		pause.innerHTML = 'Pause';
		playing = false;
		clearInterval(slideInterval); 
	}
// set a slideInterval
	function playSlideshow(){
		pause.innerHTML = 'Play';
		playing = true;
		slideInterval = setInterval(nextSlide, 1000);
	}

	//check the pause or play
	pause.onclick = function(){
		if(playing){pauseSlideshow();}
		else{playSlideshow();}
	}

