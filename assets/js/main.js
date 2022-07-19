// Window Resize
jQuery(window).resize(function() {
	moveMenu();
});

// Window Load
jQuery(window).load(function(){
	moveMenu();
	setTimeout(function(){
		$('.home, .page, .single, .error404').css('opacity', '1');
        $('.home').addClass('home-dark-bg');
	},350);
});

function waypointDetector() {

    var dynamicHigh;

    var Wsize = $(window).width();
     if (Wsize <= 768) {          
        dynamicHigh = '50%';
    } else {
        dynamicHigh = '60%';
    }  

   var tl = new TimelineLite();

    tl.to('polygon#SVGID_3_', 0, {
        y : '-100%'
    });

    tl.to('polygon#SVGID_1_', 0, {
        y : '100%'
    });

    tl.to('polygon#thirdElement', 0, {
        y : '-100%'
    });

    tl.to('polygon#firstElement', 0, {
        y : '100%'
    });
   

	var waypoint = new Waypoint({
        element: document.getElementById('selector-0'),
        handler: function(direction) {
            if (direction === 'down') {            
                
                tl.to('polygon#SVGID_3_', 1, {
                    y : '-4%',
                    ease: Power1.easeInOut
                });

                tl.to('polygon#SVGID_1_', 1, {
                    y : '0%',
                    ease: Power1.easeInOut
                });

            }
        },
        offset: dynamicHigh
    });

    var waypoint2 = new Waypoint({
        element: document.getElementById('selector-1'),
        handler: function(direction) {
            if (direction === 'down') {
            	tl.to('polygon#firstElement', 1, {
                    y : '0%',
                    ease: Power1.easeInOut
                });

                tl.to('polygon#thirdElement', 1, {
                    y : '0%',
                    ease: Power1.easeInOut
                });        	

            }
        },
        offset: dynamicHigh
    });

    $(window).resize(function() {

        var Wsize = $(window).width();           

        if (Wsize <= 991) {          
           // waypoint.disable();
        } else {
        	waypoint.enable();
        }   
    });

     $(window).load(function(){

     	var Wsize = $(window).width();
     	 if (Wsize <= 991) {          
           // waypoint.disable();
        } else {
        	waypoint.enable();
        }  
     })
}

function moveMenu() {  

	if (window.innerWidth <= 768) {
		$("#menu-main-menu").appendTo("header .mobile-menu-container");
        $("#menu-languages").appendTo("header .mobile-menu-container");
	} else {
		$("#menu-main-menu").appendTo("header .middle-section .menu-container");
        $("#menu-languages").appendTo("header .right-section .menu-container-language");
		$("#menu-main-menu").removeAttr("style");
	}
}

function initMenu(){
	var $menu = $('#menu-main-menu');
    var $languageMenu = $('#menu-languages');

	$('.mobile-menu-btn').on('click', function(){
		$(this).toggleClass('active');
		$('header').toggleClass('displayed');
        $languageMenu.toggleClass('on-mobile');

		$menu.slideToggle();
	});
	$menu.smartmenus();
}

function animateRotation() {
    var tl = new TimelineLite();
    tl.to('svg.svg-pos-0, svg.svg-pos-1, svg.svg-pos-2', 5, {
        rotationY: 360, repeat:-1, transformOrigin : '50% 30%', ease:Linear.easeNone
    });
}

function bannerAnimation() {

    var tl = new TimelineLite();

    tl.to('polygon#center', 0, {
        y : '100%',
        ease: Power1.easeInOut
    });

    tl.to('polygon#middle', 0, {
        y : '-100%',
        ease: Power1.easeInOut
    });

    setTimeout(function() {

        tl.to('polygon#middle', 1, {
            y : '0%',
            ease: Power1.easeInOut
        });

        tl.to('polygon#center', 1, {
            y : '0%',
            ease: Power1.easeInOut
        });

    }, 1200);
}

function trianglesAnimation() {

    var triangleOne   = $('.position-number-0');
    var triangleTwo   = $('.position-number-1');
    var trianglethree = $('.position-number-2');

    setTimeout(function(){
        triangleOne.removeClass('on-load-0');
    }, 1000);

    setTimeout(function(){
        triangleTwo.removeClass('on-load-1');
    }, 2500);

    setTimeout(function(){
        trianglethree.removeClass('on-load-2');
    }, 1000);

    console.log('trianglesAnimation');


}


jQuery('document').ready(function(){

	initMenu();
	moveMenu();		
    animateRotation();

    setTimeout(function(){
        animateRotation();
        bannerAnimation();
    }, 400);

    if ($('body').hasClass('home')) {
      setTimeout(function(){
        waypointDetector();     
        trianglesAnimation();
      }, 1330);
    }	

});

