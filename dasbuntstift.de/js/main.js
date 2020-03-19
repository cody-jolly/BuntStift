//Expand Mobile Nav when Hamburger is clicked
$('.nav__hamburger').click (function() {
  console.log('click');
  $('#mobile-nav').toggleClass('active');
});

// add event handler to close button to close modals
$('.modal__close').click(function(){
  console.log('close modal');
  this.parentElement.classList.remove('show');
}); 