!function() {
	var e = "@charset \"utf-8\";html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration:underline}ins,a{text-decoration:none}"
	, t = document.createElement("style");
	if (document.getElementsByTagName("head")[0].appendChild(t),
		t.styleSheet)
		t.styleSheet.disabled || (t.styleSheet.cssText = e);
	else
		try {
			t.innerHTML = e
		} catch (i) {
			t.innerText = e
		}
}(),
!function(e, t) {
	function i() {
		var t = r.getBoundingClientRect().width;
		// t / s > 540 && (t = 540 * s);
		var i = t / 10;
		r.style.fontSize = i + "px",
		c.rem = e.rem = i
	}
	var n, a = e.document, r = a.documentElement, o = a.querySelector('meta[name="viewport"]'), l = a.querySelector('meta[name="flexible"]'), s = 0, d = 0, c = t.flexible || (t.flexible = {});
	if (o) {
//		console.warn("将根据已有的meta标签来设置缩放比例");
		var m = o.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
		m && (d = parseFloat(m[1]),
			s = parseInt(1 / d))
	} else if (l) {
		var h = l.getAttribute("content");
		if (h) {
			var p = h.match(/initial\-dpr=([\d\.]+)/)
			, f = h.match(/maximum\-dpr=([\d\.]+)/);
			p && (s = parseFloat(p[1]),
				d = parseFloat((1 / s).toFixed(2))),
			f && (s = parseFloat(f[1]),
				d = parseFloat((1 / s).toFixed(2)))
		}
	}
	if (!s && !d) {
		var u = (e.navigator.appVersion.match(/android/gi),
			e.navigator.appVersion.match(/iphone/gi))
		, b = e.devicePixelRatio;
		s = u ? b >= 3 && (!s || s >= 3) ? 3 : b >= 2 && (!s || s >= 2) ? 2 : 1 : 1,
		d = 1 / s
	}
	if (r.setAttribute("data-dpr", s),!o)
		if (o = a.createElement("meta"),
			o.setAttribute("name", "viewport"),
			o.setAttribute("content", "initial-scale=" + d + ", maximum-scale=" + d + ", minimum-scale=" + d + ", user-scalable=no"),
			r.firstElementChild)
			r.firstElementChild.appendChild(o);
		else {
			var g = a.createElement("div");
			g.appendChild(o),
			a.write(g.innerHTML)
		}
		e.addEventListener("resize", function() {
			clearTimeout(n),
			n = setTimeout(i, 300)
		}, !1),
		e.addEventListener("pageshow", function(e) {
			e.persisted && (clearTimeout(n),
				n = setTimeout(i, 300))
		}, !1),
		"complete" === a.readyState ? a.body.style.fontSize = 12 * s + "px" : a.addEventListener("DOMContentLoaded", function() {
			a.body.style.fontSize = 12 * s + "px"
		}, !1),
		i(),
		c.dpr = e.dpr = s,
		c.refreshRem = i,
		c.rem2px = function(e) {
			var t = parseFloat(e) * this.rem;
			return "string" == typeof e && e.match(/rem$/) && (t += "px"),
			t
		}
		,
		c.px2rem = function(e) {
			var t = parseFloat(e) / this.rem;
			return "string" == typeof e && e.match(/px$/) && (t += "rem"),
			t
		}
}(window, window.lib || (window.lib = {}));
