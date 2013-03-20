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

});