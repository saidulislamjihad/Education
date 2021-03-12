// Fixed Header On window Scroll
$(document).ready(function(){
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if(scrollTop >= 150){
        $('body').addClass('fixed-header');
      }else{
        $('body').removeClass('fixed-header');
      }
    });
  });
// owl-carousel start
$(document).ready(function() {
        $('.home-silder-outer').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
                nav: true
              },
              600: {
                items: 1,
                nav: true
              },
              1000: {
                items: 1,
                nav: true,
                loop: true,
                margin: 0
              }
            },
            autoplay: true,
            smartSpeed:1000,
            navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
        });
    });
    $(document).ready(function() {
        $('.popular-slider-items-inner').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
                nav: true
              },
              600: {
                items: 1,
                nav: true
              },
              1024: {
                items: 2,
                nav: true,
                loop: true,
                margin: 0
              },
              1025: {
                items: 3,
                nav: true,
                loop: true,
                margin: 0 
              }
            },
            autoplay: true,
            smartSpeed:1000,
            navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
        });
    });
    $(document).ready(function() {
        $('.advisor-slider-items-inner').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
                nav: true
              },
              600: {
                items: 2,
                nav: true
              },
              1024: {
                items: 2,
                nav: true,
                loop: true,
                margin: 0
              },
              1025: {
                items: 3,
                nav: true,
                loop: true,
                margin: 0
              }
            },
            autoplay: true,
            smartSpeed:1000,
            navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
        });
    });
    $(document).ready(function() {
        $('.student-slider-items-inner').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
                nav: true
              },
              600: {
                items: 1,
                nav: true
              },
              1024: {
                items: 2,
                nav: true,
                loop: true,
                margin: 0
              }
            },
            autoplay: true,
            smartSpeed:1000,
            navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
        });
    });
    $(document).ready(function() {
      $('.clients-list-wrapper').owlCarousel({
          loop: true,
          margin: 0,
          nav: false,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: false
            },
            676: {
              items: 2,
              nav: false
            },
            991: {
              items: 4,
              nav: false
            },
            1000: {
              items: 3,
              nav: false,
              loop: true,
              margin: 0
            }
          },
          autoplay: true,
          smartSpeed:1000,
      });
    });
// video popup start
$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});


// Input Validation For Animate Label
$('.animate-label input, .animate-label textarea').on('change', function(){
  if($(this).val().length > 0){
    $(this).addClass('filled');
  }else{
    $(this).removeClass('filled');
  }
});

$('.animate-label input, .animate-label textarea').on('focusout', function(){
  if($(this).val().length > 0){
    $(this).removeClass('empty');
  }else{
    $(this).addClass('empty');
  }
});
//Small Device Nav Collapse
$(document).ready(function(){
  if($(window).width() <= 1024){
    $('.nav-item-submenu,.nav-item-mega-menu').addClass('collapse');
  }else{
    $('.nav-item-submenu,.nav-item-mega-menu').removeClass('collapse');
  }
  $(window).resize(function(){
    if($(window).width() <= 1024){
      $('.nav-item-submenu,.nav-item-mega-menu').addClass('collapse');
    }else{
      $('.nav-item-submenu,.nav-item-mega-menu').removeClass('collapse');
    }
  });
  // Small Device Submenu Show and Hide
  $('.nav-item-main-link').on('click', function(e){
    e.preventDefault();
    $(this).closest('.nav-item-main').find('.collapse').collapse('toggle');
  });
  // Small Device Nav Visible and Hide
  $('.nav-toggle-btn').click(function(){
    $(this).closest('.nav-main').toggleClass('menu-visible');
    $(this).closest('body').toggleClass('body-overflow');
  });
});

// Gallery Data Item Filtering
$('#gallery li').hide();
var thisBtnVal = $('.item-filter-btn a:first-child').attr('data-liquo');
if(thisBtnVal == 'all' || thisBtnVal == '*'){
  $('#gallery li').show('500');
}else{
  $('#gallery li').hide();
}
$('.item-filter-btn a').click(function(s){
  s.preventDefault();
  $('#gallery li').hide();
  $('.item-filter-btn a').removeClass('liquo-active');
  $(this).addClass('liquo-active');
  var thisBtnVal = $(this).attr('data-liquo');
  if(thisBtnVal == 'all' || thisBtnVal == '*'){
    $('#gallery li').show('500');
  }
  $('#gallery li').each(function(){
    var thisEle = $(this);
    var thisEleVal = $(this).attr('data-liquo');
    if(thisBtnVal == thisEleVal){
      thisEle.show('500');
    };
  });
});