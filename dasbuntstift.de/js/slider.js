const images = [];
let currentImage = 'image4.jpg';
const slide = $('#slide')[0].style;
let automatic = 0;
let automaticTest = 0;

// ***!!! populate images array, ALTER IMAGE COUNT HERE!!!***
for (let i = 0; i < 14; i++) {
images.push('image' + (i + 1) + '.jpg');
}
//console.log(images);

// creates image dots
for (let image of images) {
  console.log('let there be dot!');
  //console.log(image);
  $('#slider__dots-wrap').append(`<div class="slider__dot" id="${image}"><div>`);

  // add event handlers to image dots
  document.getElementById(image).onclick = function(){ 
    console.log('go to ' + image);
    //console.log(document.getElementById(image));
    slide.backgroundImage = `url(./img/gallerie/${image})`;
    currentImage = image;
    //console.log(currentImage);
    toggleDot();
  }
};

// function to regress image
function previousImage(){
  console.log('previous image');
  let imageBack = images.findIndex(image => image === currentImage) - 1;
  //console.log(imageBack);
  if (imageBack >= 0) {
    slide.backgroundImage = `url(./img/gallerie/${images[imageBack]})`; //switches to previous image in array
    currentImage = images[imageBack];
  } else {
    slide.backgroundImage = `url(./img/gallerie/${images[images.length - 1]})`; //switches to last image in array
    currentImage = images[images.length - 1];
  }
  toggleDot();
};

// function to progress image
function nextImage() {
  console.log('next image');
  let imageForward = images.findIndex(image => image === currentImage) + 1;
  //console.log(imageForward);
  
  if (imageForward < images.length) {
    slide.backgroundImage = `url(./img/gallerie/${images[imageForward]})`; //switches to next image in array
    currentImage = images[imageForward];
  } else {
    slide.backgroundImage = `url(./img/gallerie/${images[0]})`; //switches to first image in array
    currentImage = images[0];
  }
  toggleDot();
}

// add event handler to forward arrow
$('#slider__arrow-forward').click(nextImage);
// add event handler to back arrow
$('#slider__arrow-back').click(previousImage);

// show and hide play and pause
$('#slider__hover-toggle').hover(function() {
  console.log('hover');
  $('#slider__play-pause-wrap').toggleClass('active');
});

// add event handlers to play and pause
$('#slider__play').click(function() {
  console.log('play');
  if (automatic === automaticTest || automatic === 0) {
    nextImage();
    //console.log(automatic);
    automatic = setInterval(nextImage, 4000);
  };
});// plays slider

$('#slider__pause').click(function() {
  console.log('pause');
  clearInterval(automatic);
  automaticTest = automatic;
  //console.log(automatic);
});// pauses slider


// adds class current-dot to corresponding dot of current image
function toggleDot() {
  console.log('highlight dot');
  $('.slider__dot').removeClass('current-dot');
  document.getElementById(`${currentImage}`).classList.add('current-dot');
  //console.log(document.getElementById(currentImage));
}

toggleDot();

