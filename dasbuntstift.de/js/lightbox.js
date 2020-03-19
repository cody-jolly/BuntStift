const imagesLB = [];
let currentModalImage = '';

// ***!!! populate images array, ALTER IMAGE COUNT HERE!!!***
for (let i = 0; i < 19; i++) {
  imagesLB.push('image' + (i + 1) + '.jpg');
  }
//console.log(imagesLightbox);

// create Lightbox images and modals in DOM
function createLightbox() {
  for (let imageLB of imagesLB) {
    let image = `img/entstehung/${imageLB}`;
    let lightboxImage = `lightbox__${imageLB}`;
    let modalLightboxThumb = `modal__${lightboxImage}`;
    console.log('let there be image!');

    //create thumbnails in #uu__entstehung and in modal
    //console.log($('#entstehung__lightbox'));
    $('#entstehung__lightbox').append(`<div class="lightbox__img-frame"><img src="img/entstehung/${imageLB}" alt="Foto von der Entstehung" class="lightbox__img" id="${lightboxImage}"></div>`);
    $('#modal__thumbs-wrap').append(`<div class="lightbox__img-frame"><img src="img/entstehung/${imageLB}" alt="Foto von der Entstehung" class="lightbox__img" id="${modalLightboxThumb}"></div>`);
    //console.log($('.lightbox__image'));
  
    // add event handlers to thumbnails to show modals and switch images
    document.getElementById(lightboxImage).onclick = () => {
      console.log('open modal');
      $('#modal__img').attr('src', image);
      $('#lightbox__modal').toggleClass('show');
      currentModalImage = imageLB;
    };

    document.getElementById(modalLightboxThumb).onclick = () => {
      console.log('switch image');
      $('#modal__img').attr('src', image);
      currentModalImage = imageLB;
    };
  }

  // add event handler to down arrow 
  $('#modal__arrow-down').click(() => {
    //function to scroll through thumbs
    let scrollHeight = $('#modal__thumbs-wrap').scrollTop();
    console.log('scroll thumbs');
    if ($(window).width() >= 700) {
      if (scrollHeight === 0) {
        $('#modal__thumbs-wrap').scrollTop(110);
      } else if((scrollHeight + 6) === document.getElementById('modal__lightbox__image19.jpg').offsetTop) {
        $('#modal__thumbs-wrap').scrollTop(0);
      } else {
        $('#modal__thumbs-wrap').scrollTop((scrollHeight + 110));
      }
    } else {
      console.log('small viewport');
      if (scrollHeight === 0) {
        $('#modal__thumbs-wrap').scrollTop(85);
      } else if((scrollHeight + 6) === document.getElementById('modal__lightbox__image19.jpg').offsetTop) {
        $('#modal__thumbs-wrap').scrollTop(0);
      } else {
        $('#modal__thumbs-wrap').scrollTop((scrollHeight + 85));
      }
    }
    
  });

  // function to regress image
  function previousImage(){
    console.log('previous image');
    let imageBack = imagesLB.indexOf(currentModalImage) - 1;
    //console.log(imageBack);
    if (imageBack >= 0) {
      // switches to previous image in array
      $('#modal__img').attr('src', `img/entstehung/${imagesLB[imageBack]}`);
      currentModalImage = imagesLB[imageBack];
    } else {
      //switches to last image in array
      $('#modal__img').attr('src', `img/entstehung/${imagesLB[imagesLB.length - 1]}`);
      currentModalImage = imagesLB[imagesLB.length - 1];
    }
  };

  // function to progress image
  function nextImage() {
    console.log('next image');
    let imageForward = imagesLB.indexOf(currentModalImage) + 1;
    //console.log(imageForward);
    if (imageForward < imagesLB.length) {
      // switches to next image in array
      $('#modal__img').attr('src', `img/entstehung/${imagesLB[imageForward]}`);
      currentModalImage = imagesLB[imageForward];
    } else {
      //switches to first image in array
      $('#modal__img').attr('src', `img/entstehung/${imagesLB[0]}`);
      currentModalImage = imagesLB[0];
    }
  }

  // add event handlers to forward and back arrows
  $('#modal__arrow-back').click(previousImage);
  $('#modal__arrow-forward').click(nextImage);
}

createLightbox();


