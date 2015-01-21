

// ------------------------------------------------------------------------------------- //
// On Document Ready Event:

$(document).ready(function() {

  setTimeout(check_for_hash, 0);

  // eventCheck for all browsers
  mq.addEventListener('webkitTransitionEnd', eventCheck, true);
  mq.addEventListener('MSTransitionEnd', eventCheck, true);
  mq.addEventListener('oTransitionEnd', eventCheck, true);
  mq.addEventListener('transitionend', eventCheck, true);

  // setup for number scroll
  if(numbers_container.length) {
    
    btc_val = btc_timer.html().replace(/,/g,""),
    usd_val = usd_timer.html().replace(/,/g,"");

    btc_timer.html('0');
    usd_timer.html('0');
  }

  // init any scrolling anchors
  $('[data-func="scroll_to"]').on("click", scroll_to);

  // init the mobile language select
  $('#language_select').customSelect();
  

  // init the desktop language selects...
  create_drop_downs();
  dropdown_click_events();

  // init email form validation
  email_form_events();


  // activate / deactivate nav drawer
  $('#click_menu').on("click", toggle_nav);
  $('#click_data').on("click", toggle_nav);

  // activate / deactivate nav drawer
  $('.slideshow__link').on("click", transition_slideshow);


  // init fasClick objects
  FastClick.attach(document.getElementById('click_menu'));
  FastClick.attach(document.getElementById('click_data'));

  if($('#timeline__graph').length) {
    load_timeline();
    FastClick.attach(document.getElementById('timeline__graph'));
  }

});


// ------------------------------------------------------------------------------------- //
// On Window Load Event:

_window.load(function () {

  eventCheck();

});


// ------------------------------------------------------------------------------------- //
// On Window Scroll Event:

_window.scroll(function () {

  if(numbers_container.length) {
    number_scroll();
  }

  if(slideshow_container.length) {
    slideshow_scroll();
  }


});


// ------------------------------------------------------------------------------------- //
// resize function

var resize_end = function() {
  if (new Date() - rtime < delta) {
    setTimeout(resize_end, delta);
  } else {
    timeout = false;
    
    if(!Modernizr.csstransitions) {
      eventCheck();
    } else {
      update_drawer();
    }
  }               
}

// resize calculations...

var rtime = new Date(1, 1, 2000, 12,00,00);
var timeout = false;
var delta = 200;

// On Window Resize Event:

_window.resize(function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resize_end, delta);
    }
});