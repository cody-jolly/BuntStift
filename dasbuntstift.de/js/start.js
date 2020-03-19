// Open Eck-Info modals when "fenster" elements are clicked
$('.index__fenster').click(function(){
  // get fenster number
  const id = this.id[7]; 
  console.log('open modal');
  $('#fenster-modal' + id).toggleClass('show');
});


// animation for door 
function openDoor() {
  console.log('open the door');
  // give door transition property for animation
  $('#start__door').css('transition', 'all 1000ms ease-in-out');
  $('#index__uu').removeClass('hide');

  // compensate for responsive layout by small viewport height
  if ($(window).height() <= 630) {
    console.log('small window');
    $('#index__start').addClass('hidden')
    // turn scrolling back on
    $('body').removeClass('no-scroll'); 
    // set scroll back to top of page
    $(window).scrollTop(0); 
    window.setTimeout(() => $('#index__start').css('display', 'none'), 1400);
  } else {
    // hide door cover
    $('#start__door-cover').hide(); 
    $('#start__door').css('z-index', '3');
    
    // make door full size, and then blend it out
    $('#start__door').addClass('open'); 
    window.setTimeout(() => {
      $('#index__start').addClass('hidden');
      // turn scrolling back on
      $('body').removeClass('no-scroll'); 
      // set scroll back to top of page
      $(window).scrollTop(0);
    }, 1000);
    window.setTimeout(() => $('#index__start').css('display', 'none'), 1400);
  }
};

// prohibit scrolling on landing screen
$('body').addClass('no-scroll');

// add event handlers to door cover and start nav link
$('#start__door-cover').click(openDoor);
$('#start-nav__uu-link').click(openDoor);

// animation for uu info blocks
// ***!!!adapted from css-tricks.com!!!***
// check if elements are visible in window
$.fn.visible = function(partial) {
    
  let $t            = $(this),
      $w            = $(window),
      viewTop       = $w.scrollTop(),
      viewBottom    = viewTop + $w.height(),
      _top          = $t.offset().top,
      _bottom       = _top + $t.height(),
      compareTop    = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
};

// slide and fade .infos into view when they are scrolled to
$(window).scroll(function(event) {
  $(".info").each(function(i, el) {
    el = $(el);
    if (el.visible(true)) {
      window.setTimeout(() => el.addClass("centered"), 400); 
    } 
  });
});

// hide uu__index until door is opened
$('#index__uu').addClass('hide');

// show Über Uns if Über Uns anchor in location
if (location.href.includes('#index__uu') === true) {
  console.log('über uns');
  $('body').removeClass('no-scroll');
  $('#index__start').css('display', 'none');
  $('#index__uu').removeClass('hide');
};