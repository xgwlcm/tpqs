/*!
 * classie v1.0.1
 * class helper functions
 * from bonzo https://github.com/ded/bonzo
 * MIT license
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else if ( typeof exports === 'object' ) {
  // CommonJS
  module.exports = classie;
} else {
  // browser global
  window.classie = classie;
}

})( window );



$(function(){
    var rightNav = "";
    rightNav += "<ul class='ccRightNav'>";
    rightNav += "<li><a href='https://211611411.github.io' target='_blank'>首页</a></li>";
    rightNav += "</ul>";
    $("body").append(rightNav);
    $(".ccRightNav").css({
        "width":"200px",
        "background":"#fff",
        "position":"fixed",
        "border":"1px solid #bababa",
        "padding":"5px 0 0 0",
        "margin":"0",
        "z-index":"1200",
        "display":"none"
    });
    $(".ccRightNav li").css({
        "height":"23px",
        "line-height":"23px",
        "font-size":"12px",
        "list-style":"none",
        "padding":"0",
        "margin":"0 0 4px 0",
        "text-decoration":"none"
    }).mouseover(function(){
        $(this).css("background","#4281f4").find("a,small").css("color","#fff");
    }).mouseleave(function(){
        $(this).css("background","none").find("a").css("color","#111").find("small").css("color","#a6a6a6");
    });
    $(".ccRightNav li a").css({
        "display":"block",
        "padding":"0 25px",
        "margin":"0",
        "color":"#111",
        "text-decoration":"none",
        "font-size":"12px",
        "cursor":"pointer"
    });
    $(".ccRightNav li a small").css({
        "color":"#a6a6a6",
        "font-size":"13px",
        "float":"right"
    });
    $(".ccRightNav hr").css({
        "border":"none",
        "border-bottom":"1px solid #e9e9e9"
    });
    $(".ccRightNav li.qrBox").css({
        "width":$(".ccRightNav").height()-22+"px",
        "height":$(".ccRightNav").height()-22+"px",
        "max-width":"300px",
        "max-height":"300px",
        "position":"absolute",
        "bottom":"-5px",
        "border":"1px solid #bababa",
		"padding":"0",
        "overflow":"hidden",
        "display":"none"
    });
    $(".ccRightNav li.qrBox img").css({
        "width":"100%",
        "height":"100%",
		"margin-left":"0"
    });
    $(".ccRightNav li.qrBtn").mouseover(function(){
        $(".ccRightNav li.qrBox").fadeIn(1);
    }).mouseleave(function(){
        $(".ccRightNav li.qrBox").fadeOut(1);
    });
    $("*").bind("contextmenu",function(e){
        var pointX = (e.pageX)-($(window).scrollLeft()),pointY = (e.pageY)-($(window).scrollTop());
        $(".ccRightNav").css({
            "display":"block"
        });
        if(pointX+600>=$(window).width()){
            $(".ccRightNav").css({
                "right":$(window).width()-pointX+"px",
                "left":"auto"
            });
			$(".ccRightNav li.qrBox").css({
				"right":"200px",
				"left":"auto"
			});
        }else{
            $(".ccRightNav").css({
                "left":pointX+"px",
                "right":"auto"
            });
			$(".ccRightNav li.qrBox").css({
				"left":"200px",
				"right":"auto"
			});
        }
        if($(window).height()-pointY<=$(".ccRightNav").height()){
            $(".ccRightNav").css({
                "bottom":$(window).height()-pointY+"px",
                "top":"auto"
            });
        }else{
            $(".ccRightNav").css({
                "top":pointY+"px",
                "bottom":"auto"
            });
        }
        return false;
    }).click(function(){
        $(".ccRightNav").css("display","none");
    })
});

(function(){
	"use strict";

	var colour = "#D1AB73";
	var opacity = 0.3;
	var ripple_within_elements = ['input', 'button', 'a'];
	var ripple_without_diameter = 50;

	var overlays = {
		items: [],
		get: function(){
			var $element;
			for(var i = 0; i < overlays.items.length; i++){
				$element = overlays.items[i];
				if($element.transition_phase === false) {
					$element.transition_phase = 0;
					return $element;
				}
			}
			$element = document.createElement("div");
			$element.style.position = "absolute";
			$element.style.opacity = opacity;
			//$element.style.outline = "10px solid red";
			$element.style.pointerEvents = "none";
			$element.style.background = "-webkit-radial-gradient(" + colour + " 64%, rgba(0,0,0,0) 65%) no-repeat";
			$element.style.background = "radial-gradient(" + colour + " 64%, rgba(0,0,0,0) 65%) no-repeat";
			$element.style.transform = "translateZ(0)";
			$element.transition_phase = 0;
			$element.rid = overlays.items.length;
			$element.next_transition = overlays.next_transition_generator($element);
			document.body.appendChild($element);
			overlays.items.push($element);
			return $element;
		},
		next_transition_generator: function($element){
			return function(){
				$element.transition_phase++;
				switch($element.transition_phase){
					case 1:
						$element.style[transition] = "all 0.2s ease-in-out";
						$element.style.backgroundSize = $element.ripple_backgroundSize;
						$element.style.backgroundPosition = $element.ripple_backgroundPosition;
						setTimeout($element.next_transition, 0.2 * 1000); //now I know transitionend is better but it fires multiple times when multiple properties are animated, so this is simpler code and (imo) worth tiny delays
						break;
					case 2:
						$element.style[transition] = "opacity 0.15s ease-in-out";
						$element.style.opacity = 0;
						setTimeout($element.next_transition, 0.15 * 1000);
						break;
					case 3:
						overlays.recycle($element);
						break;
				}
			};
		},
		recycle: function($element){
			$element.style.display = "none";
			$element.style[transition] = "none";
			if($element.timer) clearTimeout($element.timer);
			$element.transition_phase = false;
		}
	};

	var transition = function(){
		var i,
			el = document.createElement('div'),
			transitions = {
				'WebkitTransition':'webkitTransition',
				'transition':'transition',
				'OTransition':'otransition',
				'MozTransition':'transition'
			};
		for (i in transitions) {
			if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
				return transitions[i];
			}
		}
	}();

	var click = function(event){
		var $element = overlays.get(),
			touch,
			x,
			y;

		touch = event.touches ? event.touches[0] : event;

		$element.style[transition] = "none";
		$element.style.backgroundSize = "3px 3px";
		$element.style.opacity = opacity;
		if(ripple_within_elements.indexOf(touch.target.nodeName.toLowerCase()) > -1) {
			x = touch.offsetX;
			y = touch.offsetY;
			
			var dimensions = touch.target.getBoundingClientRect();
			if(!x || !y){
				x = (touch.clientX || touch.x) - dimensions.left;
				y = (touch.clientY || touch.y) - dimensions.top;
			}
			$element.style.backgroundPosition = x + "px " + y + "px";
			$element.style.width = dimensions.width + "px";
			$element.style.height = dimensions.height + "px";
			$element.style.left = (dimensions.left) + "px";
			$element.style.top = (dimensions.top + document.body.scrollTop + document.documentElement.scrollTop) + "px";
			var computed_style = window.getComputedStyle(event.target);
			for (var key in computed_style) {
				if (key.toString().indexOf("adius") > -1) {
					if(computed_style[key]) {
						$element.style[key] = computed_style[key];
					}
				} else if(parseInt(key, 10).toString() === key && computed_style[key].indexOf("adius") > -1){
					$element.style[computed_style[key]] = computed_style[computed_style[key]];
				}
			}
			$element.style.backgroundPosition = x + "px " + y + "px";
			$element.ripple_backgroundPosition = (x - dimensions.width)  + "px " + (y - dimensions.width) + "px";
			$element.ripple_backgroundSize = (dimensions.width * 2) + "px " + (dimensions.width * 2) + "px";
		} else { //click was outside of ripple element
			x = touch.clientX || touch.x || touch.pageX;
			y = touch.clientY || touch.y || touch.pageY;
			
			$element.style.borderRadius = "0px";
			$element.style.left = (x - ripple_without_diameter / 2) + "px";
			$element.style.top = (document.body.scrollTop + document.documentElement.scrollTop + y - ripple_without_diameter / 2) + "px";
			$element.ripple_backgroundSize = ripple_without_diameter + "px " + ripple_without_diameter + "px";
			$element.style.width = ripple_without_diameter + "px";
			$element.style.height = ripple_without_diameter + "px";
			$element.style.backgroundPosition = "center center";
			$element.ripple_backgroundPosition = "center center";
			$element.ripple_backgroundSize = ripple_without_diameter + "px " + ripple_without_diameter + "px";
		}
		$element.ripple_x = x;
		$element.ripple_y = y;
		$element.style.display = "block";
		setTimeout($element.next_transition, 20);
	};

	if('ontouchstart' in window || 'onmsgesturechange' in window){
		document.addEventListener("touchstart", click, false);
	} else {
		document.addEventListener("click", click, false);
	}
}());