/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-shiv-cssclasses-prefixed-testprop-testallprops-prefixes-domprefixes-css_filters-load
 */
;
window.Modernizr = function(a, b, c) {
	function y(a) {
		j.cssText = a
	}
	function z(a, b) {
		return y(m.join(a + ";") + (b || ""))
	}
	function A(a, b) {
		return typeof a === b
	}
	function B(a, b) {
		return !!~ ("" + a).indexOf(b)
	}
	function C(a, b) {
		for (var d in a) {
			var e = a[d];
			if (!B(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
		}
		return !1
	}
	function D(a, b, d) {
		for (var e in a) {
			var f = b[a[e]];
			if (f !== c) return d === !1 ? a[e] : A(f, "function") ? f.bind(d || b) : f
		}
		return !1
	}
	function E(a, b, c) {
		var d = a.charAt(0).toUpperCase() + a.slice(1),
			e = (a + " " + o.join(d + " ") + d).split(" ");
		return A(b, "string") || A(b, "undefined") ? C(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), D(e, b, c))
	}
	var d = "2.8.3",
		e = {},
		f = !0,
		g = b.documentElement,
		h = "modernizr",
		i = b.createElement(h),
		j = i.style,
		k, l = {}.toString,
		m = " -webkit- -moz- -o- -ms- ".split(" "),
		n = "Webkit Moz O ms",
		o = n.split(" "),
		p = n.toLowerCase().split(" "),
		q = {},
		r = {},
		s = {},
		t = [],
		u = t.slice,
		v, w = {}.hasOwnProperty,
		x;
	!A(w, "undefined") && !A(w.call, "undefined") ? x = function(a, b) {
		return w.call(a, b)
	} : x = function(a, b) {
		return b in a && A(a.constructor.prototype[b], "undefined")
	}, Function.prototype.bind || (Function.prototype.bind = function(b) {
		var c = this;
		if (typeof c != "function") throw new TypeError;
		var d = u.call(arguments, 1),
			e = function() {
				if (this instanceof e) {
					var a = function() {};
					a.prototype = c.prototype;
					var f = new a,
						g = c.apply(f, d.concat(u.call(arguments)));
					return Object(g) === g ? g : f
				}
				return c.apply(b, d.concat(u.call(arguments)))
			};
		return e
	}), q.cssanimations = function() {
		return E("animationName")
	};
	for (var F in q) x(q, F) && (v = F.toLowerCase(), e[v] = q[F](), t.push((e[v] ? "" : "no-") + v));
	return e.addTest = function(a, b) {
		if (typeof a == "object") for (var d in a) x(a, d) && e.addTest(d, a[d]);
		else {
			a = a.toLowerCase();
			if (e[a] !== c) return e;
			b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
		}
		return e
	}, y(""), i = k = null, function(a, b) {
		function l(a, b) {
			var c = a.createElement("p"),
				d = a.getElementsByTagName("head")[0] || a.documentElement;
			return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
		}
		function m() {
			var a = s.elements;
			return typeof a == "string" ? a.split(" ") : a
		}
		function n(a) {
			var b = j[a[h]];
			return b || (b = {}, i++, a[h] = i, j[i] = b), b
		}
		function o(a, c, d) {
			c || (c = b);
			if (k) return c.createElement(a);
			d || (d = n(c));
			var g;
			return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
		}
		function p(a, c) {
			a || (a = b);
			if (k) return a.createDocumentFragment();
			c = c || n(a);
			var d = c.frag.cloneNode(),
				e = 0,
				f = m(),
				g = f.length;
			for (; e < g; e++) d.createElement(f[e]);
			return d
		}
		function q(a, b) {
			b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
				return s.shivMethods ? o(c, a, b) : b.createElem(c)
			}, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
				return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
			}) + ");return n}")(s, b.frag)
		}
		function r(a) {
			a || (a = b);
			var c = n(a);
			return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !! l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
		}
		var c = "3.7.0",
			d = a.html5 || {},
			e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
			f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
			g, h = "_html5shiv",
			i = 0,
			j = {},
			k;
		(function() {
			try {
				var a = b.createElement("a");
				a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 ||
				function() {
					b.createElement("a");
					var a = b.createDocumentFragment();
					return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
				}()
			} catch (c) {
				g = !0, k = !0
			}
		})();
		var s = {
			elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
			version: c,
			shivCSS: d.shivCSS !== !1,
			supportsUnknownElements: k,
			shivMethods: d.shivMethods !== !1,
			type: "default",
			shivDocument: r,
			createElement: o,
			createDocumentFragment: p
		};
		a.html5 = s, r(b)
	}(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function(a) {
		return C([a])
	}, e.testAllProps = E, e.prefixed = function(a, b, c) {
		return b ? E(a, b, c) : E(a, "pfx")
	}, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
}(this, this.document), function(a, b, c) {
	function d(a) {
		return "[object Function]" == o.call(a)
	}
	function e(a) {
		return "string" == typeof a
	}
	function f() {}
	function g(a) {
		return !a || "loaded" == a || "complete" == a || "uninitialized" == a
	}
	function h() {
		var a = p.shift();
		q = 1, a ? a.t ? m(function() {
			("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
		}, 0) : (a(), h()) : q = 0
	}
	function i(a, c, d, e, f, i, j) {
		function k(b) {
			if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
				"img" != a && m(function() {
					t.removeChild(l)
				}, 50);
				for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
			}
		}
		var j = j || B.errorTimeout,
			l = b.createElement(a),
			o = 0,
			r = 0,
			u = {
				t: d,
				s: c,
				e: f,
				a: i,
				x: j
			};
		1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
			k.call(this, r)
		}, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
	}
	function j(a, b, c, d, f) {
		return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
	}
	function k() {
		var a = B;
		return a.loader = {
			load: j,
			i: 0
		}, a
	}
	var l = b.documentElement,
		m = a.setTimeout,
		n = b.getElementsByTagName("script")[0],
		o = {}.toString,
		p = [],
		q = 0,
		r = "MozAppearance" in l.style,
		s = r && !! b.createRange().compareNode,
		t = s ? l : n.parentNode,
		l = a.opera && "[object Opera]" == o.call(a.opera),
		l = !! b.attachEvent && !l,
		u = r ? "object" : l ? "script" : "img",
		v = l ? "script" : u,
		w = Array.isArray ||
	function(a) {
		return "[object Array]" == o.call(a)
	}, x = [], y = {}, z = {
		timeout: function(a, b) {
			return b.length && (a.timeout = b[0]), a
		}
	}, A, B;
	B = function(a) {
		function b(a) {
			var a = a.split("!"),
				b = x.length,
				c = a.pop(),
				d = a.length,
				c = {
					url: c,
					origUrl: c,
					prefixes: a
				},
				e, f, g;
			for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
			for (f = 0; f < b; f++) c = x[f](c);
			return c
		}
		function g(a, e, f, g, h) {
			var i = b(a),
				j = i.autoCallback;
			i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
				k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
			})))
		}
		function h(a, b) {
			function c(a, c) {
				if (a) {
					if (e(a)) c || (j = function() {
						var a = [].slice.call(arguments);
						k.apply(this, a), l()
					}), g(a, j, b, 0, h);
					else if (Object(a) === a) for (n in m = function() {
						var b = 0,
							c;
						for (c in a) a.hasOwnProperty(c) && b++;
						return b
					}(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
						var a = [].slice.call(arguments);
						k.apply(this, a), l()
					} : j[n] = function(a) {
						return function() {
							var b = [].slice.call(arguments);
							a && a.apply(this, b), l()
						}
					}(k[n])), g(a[n], j, b, n, h))
				} else!c && l()
			}
			var h = !! a.test,
				i = a.load || a.both,
				j = a.callback || f,
				k = j,
				l = a.complete || f,
				m, n;
			c(h ? a.yep : a.nope, !! i), i && c(i)
		}
		var i, j, l = this.yepnope.loader;
		if (e(a)) g(a, 0, l, 0);
		else if (w(a)) for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
		else Object(a) === a && h(a, l)
	}, B.addPrefix = function(a, b) {
		z[a] = b
	}, B.addFilter = function(a) {
		x.push(a)
	}, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
		b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
	}, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
		var k = b.createElement("script"),
			l, o, e = e || B.errorTimeout;
		k.src = a;
		for (o in d) k.setAttribute(o, d[o]);
		c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
			!l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
		}, m(function() {
			l || (l = 1, c(1))
		}, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
	}, a.yepnope.injectCss = function(a, c, d, e, g, i) {
		var e = b.createElement("link"),
			j, c = i ? h : c || f;
		e.href = a, e.rel = "stylesheet", e.type = "text/css";
		for (j in d) e.setAttribute(j, d[j]);
		g || (n.parentNode.insertBefore(e, n), m(c, 0))
	}
}(this, document), Modernizr.load = function() {
	yepnope.apply(window, [].slice.call(arguments, 0))
}, Modernizr.addTest("cssfilters", function() {
	var a = document.createElement("div");
	return a.style.cssText = Modernizr._prefixes.join("filter:blur(2px); "), !! a.style.length && (document.documentMode === undefined || document.documentMode > 9)
});


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