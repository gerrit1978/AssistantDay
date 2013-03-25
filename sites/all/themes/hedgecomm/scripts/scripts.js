/**
 * @file
 * Default jQuery scripts
 */

jQuery(document).ready(function($) {

	// slider twitter
	$('#block-hc-twitter-hc-twitter ul').carouFredSel({
    items   : 1,
    direction: "left",
    scroll : {
      fx: "fade"
    },
    auto : {
      timeoutDuration: 5000
    }
  });


/*
  if ($("body").hasClass('front')) {

		$.fancybox({
		  'helpers' : {
		    'overlay' : {
		      'css' : {
		        'background' : 'rgba(10, 10, 10, 0.85)'
		      }
		    }
		  },
	    'padding'        : 0,
	    'autoScale'      : false,
	    'transitionIn'   : 'none',
	    'transitionOut'  : 'none',
	    'title'          : this.title,
	    'width'          : 680,
	    'height'         : 495,
	    'href'           : "http://www.youtube.com/v/Pb1XXs7e7ac&fs=1&autoplay=1",
	    'type'           : 'swf',
	    'swf'            : {
	        'wmode'              : 'transparent',
	        'allowfullscreen'    : 'true'
	    }
    });

  }
*/

  $('a.fancybox').click(function(e) {
		$.fancybox({
		  'helpers' : {
		    'overlay' : {
		      'css' : {
		        'background' : 'rgba(10, 10, 10, 0.85)'
		      }
		    }
		  },
	    'padding'        : 0,
	    'autoScale'      : false,
	    'transitionIn'   : 'none',
	    'transitionOut'  : 'none',
	    'title'          : this.title,
	    'width'          : 680,
	    'height'         : 495,
	    'href'           : "http://www.youtube.com/v/Pb1XXs7e7ac&fs=1&autoplay=1",
	    'type'           : 'swf',
	    'swf'            : {
	        'wmode'              : 'transparent',
	        'allowfullscreen'    : 'true'
	    }
    });
  
  });

  $('#webform-client-form-7 #webform-component-gift-markup ul li').click(function() {
    
    // change value of select options for form
    var index = $(this).index();
    var indexPlusOne = index + 1;
    var selector = "#webform-component-gift #edit-submitted-gift option:eq(" + indexPlusOne + ")";
    $(selector).attr('selected', 'selected');
    
    // make current gift selected
    $('ul.gifts li').removeClass('selected');
    $(this).addClass('selected');
    
  });


});