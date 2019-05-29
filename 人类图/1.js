/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = a.document
      , e = c.slice
      , f = c.concat
      , g = c.push
      , h = c.indexOf
      , i = {}
      , j = i.toString
      , k = i.hasOwnProperty
      , l = {}
      , m = "2.2.4"
      , n = function(a, b) {
        return new n.fn.init(a,b)
    }
      , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , p = /^-ms-/
      , q = /-([\da-z])/gi
      , r = function(a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    },
    n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || n.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a)
                    c = g[b],
                    d = a[b],
                    g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1,
                    f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {},
                    g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }
    ,
    n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a))
                return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf"))
                return !1;
            for (b in a)
                ;
            return void 0 === b || k.call(a, b)
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a),
            a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"),
            b.text = a,
            d.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1)
                        break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a))
                for (d = a.length; d > g; g++)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            else
                for (g in a)
                    e = b(a[g], g, c),
                    null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b],
            b = a,
            a = c),
            n.isFunction(a) ? (d = e.call(arguments, 2),
            f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)))
            }
            ,
            f.guid = a.guid = a.guid || n.guid++,
            f) : void 0
        },
        now: Date.now,
        support: l
    }),
    "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]),
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = !!a && "length"in a && a.length
          , c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b)
                    return c;
            return -1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+","g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
            bool: new RegExp("^(?:" + K + ")$","i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), ca = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, da = function() {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes),
            E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            if (d = d || [],
            "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x)
                return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f)))
                                return d;
                            if (j.id === f)
                                return d.push(j),
                                d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f)
                            return d.push(j),
                            d
                    } else {
                        if (o[2])
                            return H.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return H.apply(d, b.getElementsByClassName(f)),
                            d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x)
                        w = b,
                        s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u),
                        r = g(a),
                        h = r.length,
                        l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--)
                            r[h] = l + " " + qa(r[h]);
                        s = r.join(","),
                        w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s)
                        try {
                            return H.apply(d, w.querySelectorAll(s)),
                            d
                        } catch (y) {} finally {
                            k === u && b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }
        function ga() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ha(a) {
            return a[u] = !0,
            a
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function ja(a, b) {
            var c = a.split("|")
              , e = c.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function ka(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function na(a) {
            return ha(function(b) {
                return b = +b,
                ha(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {},
        f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
            o = n.documentElement,
            p = !f(n),
            (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)),
            c.attributes = ia(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = Z.test(n.getElementsByClassName),
            c.getById = ia(function(a) {
                return o.appendChild(a).id = u,
                !n.getElementsByName || !n.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }),
            ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", O)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = Z.test(o.compareDocumentPosition),
            t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [a], h = [b];
                if (!e || !f)
                    return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)
                    return ka(a, b);
                c = a;
                while (c = c.parentNode)
                    g.unshift(c);
                c = b;
                while (c = c.parentNode)
                    h.unshift(c);
                while (g[d] === h[d])
                    d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }
            ,
            n) : n
        }
        ,
        fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }
        ,
        fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(T, "='$1']"),
            c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }
        ,
        fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        fa.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null,
            a
        }
        ,
        e = fa.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                m = q,
                                l = m[u] || (m[u] = {}),
                                k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                t = n && j[2],
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b,
                            l = m[u] || (m[u] = {}),
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                            j = k[a] || [],
                            n = j[0] === w && j[1],
                            t = n),
                            t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}),
                                    k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                    k[a] = [w, t]),
                                    m === b))
                                        break;
                            return t -= e,
                            t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = J(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a),
                    a = a.replace(ba, ca).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = la(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = ma(b);
        function pa() {}
        pa.prototype = d.filters = d.pseudos,
        d.setFilters = new pa,
        g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = S.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        }
        ;
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function ra(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}),
                            i = j[b.uniqueID] || (j[b.uniqueID] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return k[2] = h[2];
                            if (i[d] = k,
                            k[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fa(a, b[d], c);
            return c
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f),
                j && b.push(h)));
            return g
        }
        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)),
            e && !e[u] && (e = va(e, f)),
            ha(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = ua(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = ua(r === g ? r.splice(o, r.length) : r),
                    e ? e(null, g, r, i) : H.apply(g, r)
            })
        }
        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b
            }, h, !0), l = ra(function(a) {
                return J(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                e
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }
        function xa(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0,
                        g || l.ownerDocument === n || (m(l),
                        h = !p);
                        while (q = a[o++])
                            if (q(l, g || n, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--,
                    f && t.push(l))
                }
                if (r += s,
                c && s !== r) {
                    o = 0;
                    while (q = b[o++])
                        q(t, u, g, h);
                    if (f) {
                        if (r > 0)
                            while (s--)
                                t[s] || u[s] || (u[s] = F.call(i));
                        u = ua(u)
                    }
                    H.apply(i, u),
                    k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                }
                return k && (w = y,
                j = v),
                t
            };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = wa(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && qa(j),
                        !a)
                            return H.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ia(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        fa
    }(a);
    n.find = t,
    n.expr = t.selectors,
    n.expr[":"] = n.expr.pseudos,
    n.uniqueSort = n.unique = t.uniqueSort,
    n.text = t.getText,
    n.isXMLDoc = t.isXML,
    n.contains = t.contains;
    var u = function(a, b, c) {
        var d = []
          , e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType)
            if (1 === a.nodeType) {
                if (e && n(a).is(c))
                    break;
                d.push(a)
            }
        return d
    }
      , v = function(a, b) {
        for (var c = []; a; a = a.nextSibling)
            1 === a.nodeType && a !== b && c.push(a);
        return c
    }
      , w = n.expr.match.needsContext
      , x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , y = /^.[^:#\[\.,]*$/;
    function z(a, b, c) {
        if (n.isFunction(b))
            return n.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return n.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (y.test(b))
                return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)
                return this.pushStack(n(a).filter(function() {
                    for (b = 0; c > b; b++)
                        if (n.contains(e[b], this))
                            return !0
                }));
            for (b = 0; c > b; b++)
                n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d),
            d.selector = this.selector ? this.selector + " " + a : a,
            d
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a, b, c) {
        var e, f;
        if (!a)
            return this;
        if (c = c || A,
        "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a),
            !e || !e[1] && b)
                return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b,
                n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)),
                x.test(e[1]) && n.isPlainObject(b))
                    for (e in b)
                        n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            return f = d.getElementById(e[2]),
            f && f.parentNode && (this.length = 1,
            this[0] = f),
            this.context = d,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        n.makeArray(a, this))
    }
    ;
    C.prototype = n.fn,
    A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/
      , E = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this)
              , c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (n.contains(this, b[a]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function F(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType)
            ;
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = n.filter(d, e)),
            this.length > 1 && (E[a] || n.uniqueSort(e),
            D.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var G = /\S+/g;
    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            for (e = a.once,
            d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length)
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length,
                    c = !1)
            }
            a.memory || (c = !1),
            b = !1,
            e && (f = c ? [] : "")
        }, j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1,
                g.push(c)),
                function d(b) {
                    n.each(b, function(b, c) {
                        n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                    })
                }(arguments),
                c && !b && i()),
                this
            },
            remove: function() {
                return n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, f, c)) > -1)
                        f.splice(c, 1),
                        h >= c && h--
                }),
                this
            },
            has: function(a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0
            },
            empty: function() {
                return f && (f = []),
                this
            },
            disable: function() {
                return e = g = [],
                f = c = "",
                this
            },
            disabled: function() {
                return !f
            },
            lock: function() {
                return e = g = [],
                c || (f = c = ""),
                this
            },
            locked: function() {
                return !!e
            },
            fireWith: function(a, c) {
                return e || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                g.push(c),
                b || i()),
                this
            },
            fire: function() {
                return j.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return j
    }
    ,
    n.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            n.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(d) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? e.call(arguments) : d,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (d > 1)
                for (i = new Array(d),
                j = new Array(d),
                k = new Array(d); d > b; b++)
                    c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a),
        this
    }
    ,
    n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
            a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]),
            n.fn.triggerHandler && (n(d).triggerHandler("ready"),
            n(d).off("ready"))))
        }
    });
    function J() {
        d.removeEventListener("DOMContentLoaded", J),
        a.removeEventListener("load", J),
        n.ready()
    }
    n.ready.promise = function(b) {
        return I || (I = n.Deferred(),
        "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J),
        a.addEventListener("load", J))),
        I.promise(b)
    }
    ,
    n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)
                K(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        n.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null) : (j = b,
        b = function(a, b, c) {
            return j.call(n(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , L = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    function M() {
        this.expando = n.expando + M.uid++
    }
    M.uid = 1,
    M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }),
            a[this.expando]
        },
        cache: function(a) {
            if (!L(a))
                return {};
            var b = a[this.expando];
            return b || (b = {},
            L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))),
            b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b)
                e[b] = c;
            else
                for (d in b)
                    e[d] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b),
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c),
            void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b)
                    this.register(a);
                else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b),
                    b in f ? d = [b, e] : (d = e,
                    d = d in f ? [d] : d.match(G) || [])),
                    c = d.length;
                    while (c--)
                        delete f[d[c]]
                }
                (void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b)
        }
    };
    var N = new M
      , O = new M
      , P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Q = /[A-Z]/g;
    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(Q, "-$&").toLowerCase(),
            c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
                } catch (e) {}
                O.set(a, b, c)
            } else
                c = void 0;
        return c
    }
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a)
        },
        data: function(a, b, c) {
            return O.access(a, b, c)
        },
        removeData: function(a, b) {
            O.remove(a, b)
        },
        _data: function(a, b, c) {
            return N.access(a, b, c)
        },
        _removeData: function(a, b) {
            N.remove(a, b)
        }
    }),
    n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f),
                1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
                        R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a)
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()),
                    void 0 !== c)
                        return c;
                    if (d = n.camelCase(a),
                    c = O.get(f, d),
                    void 0 !== c)
                        return c;
                    if (c = R(f, d, void 0),
                    void 0 !== c)
                        return c
                } else
                    d = n.camelCase(a),
                    this.each(function() {
                        var c = O.get(this, d);
                        O.set(this, d, b),
                        a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b)
                    })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a)
            })
        }
    }),
    n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = N.get(a, b),
            c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = n._queueHooks(a, b)
              , g = function() {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = N.get(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$","i")
      , U = ["Top", "Right", "Bottom", "Left"]
      , V = function(a, b) {
        return a = b || a,
        "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    };
    function W(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur()
        }
        : function() {
            return n.css(a, b, "")
        }
        , i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3],
            c = c || [],
            k = +i || 1;
            do
                f = f || ".5",
                k /= f,
                n.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0,
        e = c[1] ? k + (c[1] + 1) * c[2] : +c[2],
        d && (d.unit = j,
        d.start = k,
        d.end = e)),
        e
    }
    var X = /^(?:checkbox|radio)$/i
      , Y = /<([\w:-]+)/
      , Z = /^$|\/(?:java|ecma)script/i
      , $ = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    $.optgroup = $.option,
    $.tbody = $.tfoot = $.colgroup = $.caption = $.thead,
    $.th = $.td;
    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }
    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"))
    }
    var ba = /<|&#?\w+;/;
    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++)
            if (f = a[o],
            f || 0 === f)
                if ("object" === n.type(f))
                    n.merge(m, f.nodeType ? [f] : f);
                else if (ba.test(f)) {
                    g = g || l.appendChild(b.createElement("div")),
                    h = (Y.exec(f) || ["", ""])[1].toLowerCase(),
                    i = $[h] || $._default,
                    g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2],
                    k = i[0];
                    while (k--)
                        g = g.lastChild;
                    n.merge(m, g.childNodes),
                    g = l.firstChild,
                    g.textContent = ""
                } else
                    m.push(b.createTextNode(f));
        l.textContent = "",
        o = 0;
        while (f = m[o++])
            if (d && n.inArray(f, d) > -1)
                e && e.push(f);
            else if (j = n.contains(f.ownerDocument, f),
            g = _(l.appendChild(f), "script"),
            j && aa(g),
            c) {
                k = 0;
                while (f = g[k++])
                    Z.test(f.type || "") && c.push(f)
            }
        return l
    }
    !function() {
        var a = d.createDocumentFragment()
          , b = a.appendChild(d.createElement("div"))
          , c = d.createElement("input");
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var da = /^key/
      , ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , fa = /^([^.]*)(?:\.(.+)|)/;
    function ga() {
        return !0
    }
    function ha() {
        return !1
    }
    function ia() {
        try {
            return d.activeElement
        } catch (a) {}
    }
    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c,
            c = void 0);
            for (h in b)
                ja(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c,
        d = c = void 0) : null == e && ("string" == typeof c ? (e = d,
        d = void 0) : (e = d,
        d = c,
        c = void 0)),
        e === !1)
            e = ha;
        else if (!e)
            return a;
        return 1 === f && (g = e,
        e = function(a) {
            return n().off(a),
            g.apply(this, arguments)
        }
        ,
        e.guid = g.guid || (g.guid = n.guid++)),
        a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) {
                c.handler && (f = c,
                c = f.handler,
                e = f.selector),
                c.guid || (c.guid = n.guid++),
                (i = r.events) || (i = r.events = {}),
                (g = r.handle) || (g = r.handle = function(b) {
                    return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }
                ),
                b = (b || "").match(G) || [""],
                j = b.length;
                while (j--)
                    h = fa.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o && (l = n.event.special[o] || {},
                    o = (e ? l.delegateType : l.bindType) || o,
                    l = n.event.special[o] || {},
                    k = n.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && n.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, f),
                    (m = i[o]) || (m = i[o] = [],
                    m.delegateCount = 0,
                    l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)),
                    l.add && (l.add.call(a, k),
                    k.handler.guid || (k.handler.guid = c.guid)),
                    e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                    n.event.global[o] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(G) || [""],
                j = b.length;
                while (j--)
                    if (h = fa.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = n.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        m = i[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        g = f = m.length;
                        while (f--)
                            k = m[f],
                            !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                            k.selector && m.delegateCount--,
                            l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
                        delete i[o])
                    } else
                        for (o in i)
                            n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (N.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                        a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g,
                        a.data = g.data,
                        d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                        void 0 !== d && (a.result = d) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i !== this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [],
                        c = 0; h > c; c++)
                            f = b[c],
                            e = f.selector + " ",
                            void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length),
                            d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d,
                e = c.documentElement,
                f = c.body,
                a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0),
                a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)),
                a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[n.expando])
                return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}),
            e = h.props ? this.props.concat(h.props) : this.props,
            a = new n.Event(g),
            b = e.length;
            while (b--)
                c = e[b],
                a[c] = g[c];
            return a.target || (a.target = d),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            h.filter ? h.filter(a, g) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    },
    n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    }
    ,
    n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a,
        b && n.extend(this, b),
        this.timeStamp = a && a.timeStamp || n.now(),
        void (this[n.expando] = !0)) : new n.Event(a,b)
    }
    ,
    n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga,
            a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga,
            a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga,
            a && !this.isSimulated && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b,
            b = void 0),
            c === !1 && (c = ha),
            this.each(function() {
                n.event.remove(this, a, c, b)
            })
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , la = /<script|<style|<link/i
      , ma = /checked\s*(?:[^=]|=\s*.checked.)/i
      , na = /^true\/(.*)/
      , oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a),
            g = N.set(b, f),
            j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j)
                    for (c = 0,
                    d = j[e].length; d > c; c++)
                        n.event.add(b, e, j[e][c])
            }
            O.hasData(a) && (h = O.access(a),
            i = n.extend({}, h),
            O.set(b, i))
        }
    }
    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }
    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q))
            return a.each(function(e) {
                var f = a.eq(e);
                r && (b[0] = q.call(this, e, f.html())),
                ua(f, b, c, d)
            });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d),
        g = e.firstChild,
        1 === e.childNodes.length && (e = g),
        g || d)) {
            for (h = n.map(_(e, "script"), qa),
            i = h.length; o > m; m++)
                j = e,
                m !== p && (j = n.clone(j, !0, !0),
                i && n.merge(h, _(j, "script"))),
                c.call(a[m], j, m);
            if (i)
                for (k = h[h.length - 1].ownerDocument,
                n.map(h, ra),
                m = 0; i > m; m++)
                    j = h[m],
                    Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")))
        }
        return a
    }
    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
            c || 1 !== d.nodeType || n.cleanData(_(d)),
            d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")),
            d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (g = _(h),
                f = _(a),
                d = 0,
                e = f.length; e > d; d++)
                    ta(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || _(a),
                    g = g || _(h),
                    d = 0,
                    e = f.length; e > d; d++)
                        sa(f[d], g[d]);
                else
                    sa(a, h);
            return g = _(h, "script"),
            g.length > 0 && aa(g, !i && _(a, "script")),
            h
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++)
                if (L(c)) {
                    if (b = c[N.expando]) {
                        if (b.events)
                            for (d in b.events)
                                e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        c[N.expando] = void 0
                    }
                    c[O.expando] && (c[O.expando] = void 0)
                }
        }
    }),
    n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0)
        },
        remove: function(a) {
            return va(this, a)
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++)
                1 === a.nodeType && (n.cleanData(_(a, !1)),
                a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a && 1 === b.nodeType)
                    return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (n.cleanData(_(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)),
                c && c.replaceChild(b, this))
            }, a)
        }
    }),
    n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++)
                c = h === f ? this : this.clone(!0),
                n(e[h])[b](c),
                g.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    };
    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body)
          , d = n.css(c[0], "display");
        return c.detach(),
        d
    }
    function za(a) {
        var b = d
          , c = xa[a];
        return c || (c = ya(a, b),
        "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = wa[0].contentDocument,
        b.write(),
        b.close(),
        c = ya(a, b),
        wa.detach()),
        xa[a] = c),
        c
    }
    var Aa = /^margin/
      , Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$","i")
      , Ca = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a),
        c.getComputedStyle(b)
    }
      , Da = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
      , Ea = d.documentElement;
    !function() {
        var b, c, e, f, g = d.createElement("div"), h = d.createElement("div");
        if (h.style) {
            h.style.backgroundClip = "content-box",
            h.cloneNode(!0).style.backgroundClip = "",
            l.clearCloneStyle = "content-box" === h.style.backgroundClip,
            g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            g.appendChild(h);
            function i() {
                h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                h.innerHTML = "",
                Ea.appendChild(g);
                var d = a.getComputedStyle(h);
                b = "1%" !== d.top,
                f = "2px" === d.marginLeft,
                c = "4px" === d.width,
                h.style.marginRight = "50%",
                e = "4px" === d.marginRight,
                Ea.removeChild(g)
            }
            n.extend(l, {
                pixelPosition: function() {
                    return i(),
                    b
                },
                boxSizingReliable: function() {
                    return null == c && i(),
                    c
                },
                pixelMarginRight: function() {
                    return null == c && i(),
                    e
                },
                reliableMarginLeft: function() {
                    return null == c && i(),
                    f
                },
                reliableMarginRight: function() {
                    var b, c = h.appendChild(d.createElement("div"));
                    return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    c.style.marginRight = c.style.width = "0",
                    h.style.width = "1px",
                    Ea.appendChild(g),
                    b = !parseFloat(a.getComputedStyle(c).marginRight),
                    Ea.removeChild(g),
                    h.removeChild(c),
                    b
                }
            })
        }
    }();
    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
        c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f),
        void 0 !== g ? g + "" : g
    }
    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Ha = /^(none|table(?!-c[ea]).+)/
      , Ia = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ja = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ka = ["Webkit", "O", "Moz", "ms"]
      , La = d.createElement("div").style;
    function Ma(a) {
        if (a in La)
            return a;
        var b = a[0].toUpperCase() + a.slice(1)
          , c = Ka.length;
        while (c--)
            if (a = Ka[c] + b,
            a in La)
                return a
    }
    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }
    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += n.css(a, c + U[f], !0, e)),
            d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)),
            "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e),
            "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g
    }
    function Pa(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Ca(a)
          , g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Fa(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            Ba.test(e))
                return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + Oa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = N.get(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d),
            "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h),
                g = n.cssHooks[b] || n.cssHooks[h],
                void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
                "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e),
                f = "number"),
                null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")),
                l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)),
                void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h),
            g = n.cssHooks[b] || n.cssHooks[h],
            g && "get"in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = Fa(a, b, d)),
            "normal" === e && b in Ja && (e = Ja[b]),
            "" === c || c ? (f = parseFloat(e),
            c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }),
    n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d)
                }) : Pa(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a), g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c,
                c = n.css(a, b)),
                Na(a, c, g)
            }
        }
    }),
    n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        })) + "px" : void 0
    }),
    n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [a, "marginRight"]) : void 0
    }),
    n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Aa.test(a) || (n.cssHooks[a + b].set = Na)
    }),
    n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Qa(this, !0)
        },
        hide: function() {
            return Qa(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a,b,c,d,e)
    }
    n.Tween = Ra,
    Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || n.easing._default,
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : Ra.propHooks._default.set(this),
            this
        }
    },
    Ra.prototype.init.prototype = Ra.prototype,
    Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    },
    Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    },
    n.fx = Ra.prototype.init,
    n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/, Va = /queueHooks$/;
    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0
        }),
        Sa = n.now()
    }
    function Xa(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)
            c = U[d],
            e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && V(a), q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        l.always(function() {
            l.always(function() {
                h.unqueued--,
                n.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY],
        j = n.css(a, "display"),
        k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j,
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")),
        c.overflow && (o.overflow = "hidden",
        l.always(function() {
            o.overflow = c.overflow[0],
            o.overflowX = c.overflow[1],
            o.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            Ua.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d])
                        continue;
                    p = !0
                }
                m[d] = q && q[d] || n.style(a, d)
            } else
                j = void 0;
        if (n.isEmptyObject(m))
            "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);
        else {
            q ? "hidden"in q && (p = q.hidden) : q = N.access(a, "fxshow", {}),
            f && (q.hidden = !p),
            p ? n(a).show() : l.done(function() {
                n(a).hide()
            }),
            l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m)
                    n.style(a, b, m[b])
            });
            for (d in m)
                g = Ya(p ? q[d] : 0, d, l),
                d in q || (q[d] = g.start,
                p && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c),
            e = b[d],
            f = a[c],
            n.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = n.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function _a(a, b, c) {
        var d, e, f = 0, g = _a.prefilters.length, h = n.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {},
                easing: n.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Sa || Wa(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]),
                h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++)
            if (d = _a.prefilters[f].call(j, a, k, j.opts))
                return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)),
                d;
        return n.map(k, Ya, j),
        n.isFunction(j.opts.start) && j.opts.start.call(a, j),
        n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(_a, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return W(c.elem, a, T.exec(b), c),
                c
            }
            ]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                _a.tweeners[c] = _a.tweeners[c] || [],
                _a.tweeners[c].unshift(b)
        },
        prefilters: [Za],
        prefilter: function(a, b) {
            b ? _a.prefilters.unshift(a) : _a.prefilters.push(a)
        }
    }),
    n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
        null != d.queue && d.queue !== !0 || (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            n.isFunction(d.old) && d.old.call(this),
            d.queue && n.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a)
              , f = n.speed(b, c, d)
              , g = function() {
                var b = _a(this, n.extend({}, a), f);
                (e || N.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = n.timers
                  , g = N.get(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && Va.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                !b && c || n.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = N.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                n.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    n.each(["toggle", "show", "hide"], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e)
        }
    }),
    n.each({
        slideDown: Xa("show"),
        slideUp: Xa("hide"),
        slideToggle: Xa("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    n.timers = [],
    n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (Sa = n.now(); b < c.length; b++)
            a = c[b],
            a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(),
        Sa = void 0
    }
    ,
    n.fx.timer = function(a) {
        n.timers.push(a),
        a() ? n.fx.start() : n.timers.pop()
    }
    ,
    n.fx.interval = 13,
    n.fx.start = function() {
        Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval))
    }
    ,
    n.fx.stop = function() {
        a.clearInterval(Ta),
        Ta = null
    }
    ,
    n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b,
        c = c || "fx",
        this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    }
    ,
    function() {
        var a = d.createElement("input")
          , b = d.createElement("select")
          , c = b.appendChild(d.createElement("option"));
        a.type = "checkbox",
        l.checkOn = "" !== a.value,
        l.optSelected = c.selected,
        b.disabled = !0,
        l.optDisabled = !c.disabled,
        a = d.createElement("input"),
        a.value = "t",
        a.type = "radio",
        l.radioValue = "t" === a.value
    }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }),
    n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
                e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)),
                void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""),
                c) : e && "get"in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b),
                null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = n.propFix[c] || c,
                    n.expr.match.bool.test(c) && (a[d] = !1),
                    a.removeAttribute(c)
        }
    }),
    ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b],
            bb[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null,
            bb[b] = f),
            e
        }
    });
    var cb = /^(?:input|select|textarea|button)$/i
      , db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a]
            })
        }
    }),
    n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f)
                return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b,
                e = n.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex)
        }
    }),
    n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    });
    var eb = /[\t\r\n\f]/g;
    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).addClass(a.call(this, b, fb(this)))
                });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d),
                        e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a))
                return this.each(function(b) {
                    n(this).removeClass(a.call(this, b, fb(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = fb(c),
                    d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1)
                                d = d.replace(" " + f + " ", " ");
                        h = n.trim(d),
                        e !== h && c.setAttribute("class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0,
                    e = n(this),
                    f = a.match(G) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    void 0 !== a && "boolean" !== c || (b = fb(this),
                    b && N.set(this, "__className__", b),
                    this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1)
                    return !0;
            return !1
        }
    });
    var gb = /\r/g
      , hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = n.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)
            }
        }
    }),
    n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)
                        d = e[g],
                        (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        },
        l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d,
            3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."),
            q = r.shift(),
            r.sort()),
            l = q.indexOf(":") < 0 && "on" + q,
            b = b[n.expando] ? b : new n.Event(q,"object" == typeof b && b),
            b.isTrigger = f ? 2 : 3,
            b.namespace = r.join("."),
            b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            b.result = void 0,
            b.target || (b.target = e),
            c = null == c ? [b] : n.makeArray(c, [b]),
            o = n.event.special[q] || {},
            f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q,
                    ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode)
                        p.push(h),
                        i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = p[g++]) && !b.isPropagationStopped())
                    b.type = g > 1 ? j : o.bindType || q,
                    m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"),
                    m && m.apply(h, c),
                    m = l && h[l],
                    m && m.apply && L(h) && (b.result = m.apply(h, c),
                    b.result === !1 && b.preventDefault());
                return b.type = q,
                f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l],
                i && (e[l] = null),
                n.event.triggered = q,
                e[q](),
                n.event.triggered = void 0,
                i && (e[l] = i)),
                b.result
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b)
        }
    }),
    n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    }),
    n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    l.focusin = "onfocusin"in a,
    l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = N.access(d, b);
                e || d.addEventListener(a, c, !0),
                N.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0),
                N.remove(d, b))
            }
        }
    });
    var jb = a.location
      , kb = n.now()
      , lb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "")
    }
    ,
    n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b)
            return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch (d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b),
        c
    }
    ;
    var mb = /#.*$/
      , nb = /([?&])_=[^&]*/
      , ob = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , qb = /^(?:GET|HEAD)$/
      , rb = /^\/\//
      , sb = {}
      , tb = {}
      , ub = "*/".concat("*")
      , vb = d.createElement("a");
    vb.href = jb.href;
    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++])
                    "+" === d[0] ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function xb(a, b, c, d) {
        var e = {}
          , f = a === tb;
        function g(h) {
            var i;
            return e[h] = !0,
            n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d),
        a
    }
    function zb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a)
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b,
            b = void 0),
            c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c), o = m.context || m, p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event, q = n.Deferred(), r = n.Callbacks("once memory"), s = m.statusCode || {}, t = {}, u = {}, v = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === v) {
                        if (!h) {
                            h = {};
                            while (b = ob.exec(g))
                                h[b[1].toLowerCase()] = b[2]
                        }
                        b = h[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === v ? g : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return v || (a = u[c] = u[c] || a,
                    t[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return v || (m.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > v)
                            for (b in a)
                                s[b] = [s[b], a[b]];
                        else
                            x.always(a[x.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || w;
                    return e && e.abort(b),
                    z(0, b),
                    this
                }
            };
            if (q.promise(x).complete = r.add,
            x.success = x.done,
            x.error = x.fail,
            m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"),
            m.type = c.method || c.type || m.method || m.type,
            m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""],
            null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url,
                    j.href = j.href,
                    m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host
                } catch (y) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)),
            xb(sb, m, c, x),
            2 === v)
                return x;
            k = n.event && m.global,
            k && 0 === n.active++ && n.event.trigger("ajaxStart"),
            m.type = m.type.toUpperCase(),
            m.hasContent = !qb.test(m.type),
            f = m.url,
            m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data,
            delete m.data),
            m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)),
            m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]),
            n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])),
            (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType),
            x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers)
                x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v))
                return x.abort();
            w = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            })
                x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1,
                k && p.trigger("ajaxSend", [x, m]),
                2 === v)
                    return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout")
                }, m.timeout));
                try {
                    v = 1,
                    e.send(t, z)
                } catch (y) {
                    if (!(2 > v))
                        throw y;
                    z(-1, y)
                }
            } else
                z(-1, "No Transport");
            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2,
                i && a.clearTimeout(i),
                e = void 0,
                g = h || "",
                x.readyState = b > 0 ? 4 : 0,
                j = b >= 200 && 300 > b || 304 === b,
                d && (u = zb(m, x, d)),
                u = Ab(m, u, x, j),
                j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"),
                w && (n.lastModified[f] = w),
                w = x.getResponseHeader("etag"),
                w && (n.etag[f] = w)),
                204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state,
                l = u.data,
                t = u.error,
                j = !t)) : (t = y,
                !b && y || (y = "error",
                0 > b && (b = 0))),
                x.status = b,
                x.statusText = (c || y) + "",
                j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]),
                x.statusCode(s),
                s = void 0,
                k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]),
                r.fireWith(o, [x, y]),
                k && (p.trigger("ajaxComplete", [x, m]),
                --n.active || n.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }),
    n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }),
    n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && b.insertBefore(this[0]),
            b.map(function() {
                var a = this;
                while (a.firstElementChild)
                    a = a.firstElementChild;
                return a
            }).append(this)),
            this)
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a)
    }
    ,
    n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0
    }
    ;
    var Bb = /%20/g
      , Cb = /\[\]$/
      , Db = /\r?\n/g
      , Eb = /^(?:submit|button|image|reset|file)$/i
      , Fb = /^(?:input|select|textarea|keygen)/i;
    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b))
            n.each(b, function(b, e) {
                c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== n.type(b))
            d(a, b);
        else
            for (e in b)
                Gb(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
        n.isArray(a) || a.jquery && !n.isPlainObject(a))
            n.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+")
    }
    ,
    n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                }
            }).get()
        }
    }),
    n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    ;
    var Hb = {
        0: 200,
        1223: 204
    }
      , Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials"in Ib,
    l.ajax = Ib = !!Ib,
    n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password),
                b.xhrFields)
                    for (g in b.xhrFields)
                        h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
                b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e)
                    h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null,
                        "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()))
                    }
                }
                ,
                h.onload = c(),
                d = h.onerror = c("error"),
                void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                }
                ,
                c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch (i) {
                    if (c)
                        throw i
                }
            },
            abort: function() {
                c && c()
            }
        } : void 0
    }),
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a),
                a
            }
        }
    }),
    n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(),
                        c = null,
                        a && f("error" === a.type ? 404 : 200, a.type)
                    }
                    ),
                    d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Jb = []
      , Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0,
            a
        }
    }),
    n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            Jb.push(e)),
            g && n.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || d;
        var e = x.exec(a)
          , f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ca([a], b, f),
        f && f.length && n(f).remove(),
        n.merge([], e.childNodes))
    }
    ;
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb)
            return Lb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)),
        a = a.slice(0, h)),
        n.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }
        ),
        this
    }
    ,
    n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = n.css(a, "top"),
            i = n.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, m) : l.css(m)
        }
    },
    n.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    n.offset.setOffset(this, a, b)
                });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f)
                return b = f.documentElement,
                n.contains(b, d) ? (e = d.getBoundingClientRect(),
                c = Mb(f),
                {
                    top: e.top + c.pageYOffset - b.clientTop,
                    left: e.left + c.pageXOffset - b.clientLeft
                }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                n.nodeName(a[0], "html") || (d = a.offset()),
                d.top += n.css(a[0], "borderTopWidth", !0),
                d.left += n.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === n.css(a, "position"))
                    a = a.offsetParent;
                return a || Ea
            })
        }
    }),
    n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Mb(a);
                return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
            }, a, d, arguments.length)
        }
    }),
    n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b),
            Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }),
    n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }),
    n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        },
        size: function() {
            return this.length
        }
    }),
    n.fn.andSelf = n.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var Nb = a.jQuery
      , Ob = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Ob),
        b && a.jQuery === n && (a.jQuery = Nb),
        n
    }
    ,
    b || (a.jQuery = a.$ = n),
    n
});
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery),
+function(a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap")
          , b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)
            if (void 0 !== a.style[c])
                return {
                    end: b[c]
                };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1
          , d = this;
        a(this).one("bsTransitionEnd", function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b),
        this
    }
    ,
    a(function() {
        a.support.transition = b(),
        a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function(b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var c = a(this)
              , e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)),
            "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]'
      , d = function(b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.6",
    d.TRANSITION_DURATION = 150,
    d.prototype.close = function(b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this)
          , f = e.attr("data-target");
        f || (f = e.attr("href"),
        f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(),
        g.length || (g = e.closest(".alert")),
        g.trigger(b = a.Event("close.bs.alert")),
        b.isDefaultPrevented() || (g.removeClass("in"),
        a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    }
    ;
    var e = a.fn.alert;
    a.fn.alert = b,
    a.fn.alert.Constructor = d,
    a.fn.alert.noConflict = function() {
        return a.fn.alert = e,
        this
    }
    ,
    a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.button")
              , f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this,f)),
            "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }
    var c = function(b, d) {
        this.$element = a(b),
        this.options = a.extend({}, c.DEFAULTS, d),
        this.isLoading = !1
    };
    c.VERSION = "3.3.6",
    c.DEFAULTS = {
        loadingText: "loading..."
    },
    c.prototype.setState = function(b) {
        var c = "disabled"
          , d = this.$element
          , e = d.is("input") ? "val" : "html"
          , f = d.data();
        b += "Text",
        null == f.resetText && d.data("resetText", d[e]()),
        setTimeout(a.proxy(function() {
            d[e](null == f[b] ? this.options[b] : f[b]),
            "loadingText" == b ? (this.isLoading = !0,
            d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1,
            d.removeClass(c).removeAttr(c))
        }, this), 0)
    }
    ,
    c.prototype.toggle = function() {
        var a = !0
          , b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1),
            b.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1),
            this.$element.toggleClass("active")),
            c.prop("checked", this.$element.hasClass("active")),
            a && c.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var d = a.fn.button;
    a.fn.button = b,
    a.fn.button.Constructor = c,
    a.fn.button.noConflict = function() {
        return a.fn.button = d,
        this
    }
    ,
    a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")),
        b.call(d, "toggle"),
        a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.carousel")
              , f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b)
              , g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this,f)),
            "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }
    var c = function(b, c) {
        this.$element = a(b),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = c,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.6",
    c.TRANSITION_DURATION = 600,
    c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    c.prototype.keydown = function(a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            a.preventDefault()
        }
    }
    ,
    c.prototype.cycle = function(b) {
        return b || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    c.prototype.getItemIndex = function(a) {
        return this.$items = a.parent().children(".item"),
        this.$items.index(a || this.$active)
    }
    ,
    c.prototype.getItemForDirection = function(a, b) {
        var c = this.getItemIndex(b)
          , d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap)
            return b;
        var e = "prev" == a ? -1 : 1
          , f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }
    ,
    c.prototype.to = function(a) {
        var b = this
          , c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            b.to(a)
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }
    ,
    c.prototype.pause = function(b) {
        return b || (this.paused = !0),
        this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    c.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }
    ,
    c.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }
    ,
    c.prototype.slide = function(b, d) {
        var e = this.$element.find(".item.active")
          , f = d || this.getItemForDirection(b, e)
          , g = this.interval
          , h = "next" == b ? "left" : "right"
          , i = this;
        if (f.hasClass("active"))
            return this.sliding = !1;
        var j = f[0]
          , k = a.Event("slide.bs.carousel", {
            relatedTarget: j,
            direction: h
        });
        if (this.$element.trigger(k),
        !k.isDefaultPrevented()) {
            if (this.sliding = !0,
            g && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b),
            f[0].offsetWidth,
            e.addClass(h),
            f.addClass(h),
            e.one("bsTransitionEnd", function() {
                f.removeClass([b, h].join(" ")).addClass("active"),
                e.removeClass(["active", h].join(" ")),
                i.sliding = !1,
                setTimeout(function() {
                    i.$element.trigger(m)
                }, 0)
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"),
            f.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(m)),
            g && this.cycle(),
            this
        }
    }
    ;
    var d = a.fn.carousel;
    a.fn.carousel = b,
    a.fn.carousel.Constructor = c,
    a.fn.carousel.noConflict = function() {
        return a.fn.carousel = d,
        this
    }
    ;
    var e = function(c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data())
              , h = e.attr("data-slide-to");
            h && (g.interval = !1),
            b.call(f, g),
            h && f.data("bs.carousel").to(h),
            c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
    a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }
    function c(b) {
        return this.each(function() {
            var c = a(this)
              , e = c.data("bs.collapse")
              , f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
            e || c.data("bs.collapse", e = new d(this,f)),
            "string" == typeof b && e[b]()
        })
    }
    var d = function(b, c) {
        this.$element = a(b),
        this.options = a.extend({}, d.DEFAULTS, c),
        this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.6",
    d.TRANSITION_DURATION = 350,
    d.DEFAULTS = {
        toggle: !0
    },
    d.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }
    ,
    d.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"),
            b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f),
                !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"),
                    b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var h = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition)
                        return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }
    ,
    d.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b),
            !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var e = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }
    ,
    d.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    d.prototype.getParent = function() {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }
    ,
    d.prototype.addAriaAndCollapsedClass = function(a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
        b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    }
    ;
    var e = a.fn.collapse;
    a.fn.collapse = c,
    a.fn.collapse.Constructor = d,
    a.fn.collapse.noConflict = function() {
        return a.fn.collapse = e,
        this
    }
    ,
    a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e)
          , g = f.data("bs.collapse")
          , h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"),
        c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    function c(c) {
        c && 3 === c.which || (a(e).remove(),
        a(f).each(function() {
            var d = a(this)
              , e = b(d)
              , f = {
                relatedTarget: this
            };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)),
            c.isDefaultPrevented() || (d.attr("aria-expanded", "false"),
            e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }
    function d(b) {
        return this.each(function() {
            var c = a(this)
              , d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)),
            "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop"
      , f = '[data-toggle="dropdown"]'
      , g = function(b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.6",
    g.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e)
              , g = f.hasClass("open");
            if (c(),
            !g) {
                "ontouchstart"in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)),
                d.isDefaultPrevented())
                    return;
                e.trigger("focus").attr("aria-expanded", "true"),
                f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }
    ,
    g.prototype.keydown = function(c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(),
            c.stopPropagation(),
            !d.is(".disabled, :disabled")) {
                var e = b(d)
                  , g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which)
                    return 27 == c.which && e.find(f).trigger("focus"),
                    d.trigger("click");
                var h = " li:not(.disabled):visible a"
                  , i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--,
                    40 == c.which && j < i.length - 1 && j++,
                    ~j || (j = 0),
                    i.eq(j).trigger("focus")
                }
            }
        }
    }
    ;
    var h = a.fn.dropdown;
    a.fn.dropdown = d,
    a.fn.dropdown.Constructor = g,
    a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = h,
        this
    }
    ,
    a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery),
+function(a) {
    "use strict";
    function b(b, d) {
        return this.each(function() {
            var e = a(this)
              , f = e.data("bs.modal")
              , g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this,g)),
            "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function(b, c) {
        this.options = c,
        this.$body = a(document.body),
        this.$element = a(b),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.6",
    c.TRANSITION_DURATION = 300,
    c.BACKDROP_TRANSITION_DURATION = 150,
    c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    c.prototype.toggle = function(a) {
        return this.isShown ? this.hide() : this.show(a)
    }
    ,
    c.prototype.show = function(b) {
        var d = this
          , e = a.Event("show.bs.modal", {
            relatedTarget: b
        });
        this.$element.trigger(e),
        this.isShown || e.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body),
            d.$element.show().scrollTop(0),
            d.adjustDialog(),
            e && d.$element[0].offsetWidth,
            d.$element.addClass("in"),
            d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function() {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }
    ,
    c.prototype.hide = function(b) {
        b && b.preventDefault(),
        b = a.Event("hide.bs.modal"),
        this.$element.trigger(b),
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        a(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    c.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    c.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    c.prototype.resize = function() {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }
    ,
    c.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(),
        this.backdrop(function() {
            a.$body.removeClass("modal-open"),
            a.resetAdjustments(),
            a.resetScrollbar(),
            a.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    c.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    c.prototype.backdrop = function(b) {
        var d = this
          , e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
                return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function() {
                d.removeBackdrop(),
                b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else
            b && b()
    }
    ,
    c.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    c.prototype.adjustDialog = function() {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }
    ,
    c.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    c.prototype.checkScrollbar = function() {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    c.prototype.setScrollbar = function() {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }
    ,
    c.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }
    ,
    c.prototype.measureScrollbar = function() {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure",
        this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a),
        b
    }
    ;
    var d = a.fn.modal;
    a.fn.modal = b,
    a.fn.modal.Constructor = c,
    a.fn.modal.noConflict = function() {
        return a.fn.modal = d,
        this
    }
    ,
    a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
        var d = a(this)
          , e = d.attr("href")
          , f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, ""))
          , g = f.data("bs.modal") ? "toggle" : a.extend({
            remote: !/#/.test(e) && e
        }, f.data(), d.data());
        d.is("a") && c.preventDefault(),
        f.one("show.bs.modal", function(a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                d.is(":visible") && d.trigger("focus")
            })
        }),
        b.call(f, g, this)
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.tooltip")
              , f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this,f)),
            "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.6",
    c.TRANSITION_DURATION = 150,
    c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    c.prototype.init = function(b, c, d) {
        if (this.enabled = !0,
        this.type = b,
        this.$element = a(c),
        this.options = this.getOptions(d),
        this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g)
                this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin"
                  , i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }
    ,
    c.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b),
        b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }),
        b
    }
    ,
    c.prototype.getDelegateOptions = function() {
        var b = {}
          , c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }),
        b
    }
    ,
    c.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c)),
        b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
        c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout),
        c.hoverState = "in",
        c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }
    ,
    c.prototype.isInStateTrue = function() {
        for (var a in this.inState)
            if (this.inState[a])
                return !0;
        return !1
    }
    ,
    c.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c)),
        b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
        c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout),
        c.hoverState = "out",
        c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }
    ,
    c.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d)
                return;
            var e = this
              , f = this.tip()
              , g = this.getUID(this.type);
            this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement
              , i = /\s?auto?\s?/i
              , j = i.test(h);
            j && (h = h.replace(i, "") || "top"),
            f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this),
            this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition()
              , l = f[0].offsetWidth
              , m = f[0].offsetHeight;
            if (j) {
                var n = h
                  , o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h,
                f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function() {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type),
                e.hoverState = null,
                "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }
    ,
    c.prototype.applyPlacement = function(b, c) {
        var d = this.tip()
          , e = d[0].offsetWidth
          , f = d[0].offsetHeight
          , g = parseInt(d.css("margin-top"), 10)
          , h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
        isNaN(h) && (h = 0),
        b.top += g,
        b.left += h,
        a.offset.setOffset(d[0], a.extend({
            using: function(a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0),
        d.addClass("in");
        var i = d[0].offsetWidth
          , j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c)
          , m = l ? 2 * k.left - e + i : 2 * k.top - f + j
          , n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b),
        this.replaceArrow(m, d[0][n], l)
    }
    ,
    c.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }
    ,
    c.prototype.setContent = function() {
        var a = this.tip()
          , b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
        a.removeClass("fade in top bottom left right")
    }
    ,
    c.prototype.hide = function(b) {
        function d() {
            "in" != e.hoverState && f.detach(),
            e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type),
            b && b()
        }
        var e = this
          , f = a(this.$tip)
          , g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g),
        g.isDefaultPrevented() ? void 0 : (f.removeClass("in"),
        a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(),
        this.hoverState = null,
        this)
    }
    ,
    c.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }
    ,
    c.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    c.prototype.getPosition = function(b) {
        b = b || this.$element;
        var c = b[0]
          , d = "BODY" == c.tagName
          , e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
            top: 0,
            left: 0
        } : b.offset()
          , g = {
            scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
        }
          , h = d ? {
            width: a(window).width(),
            height: a(window).height()
        } : null;
        return a.extend({}, e, g, h, f)
    }
    ,
    c.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }
    ,
    c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return e;
        var f = this.options.viewport && this.options.viewport.padding || 0
          , g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll
              , i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f
              , k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }
    ,
    c.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }
    ,
    c.prototype.getUID = function(a) {
        do
            a += ~~(1e6 * Math.random());
        while (document.getElementById(a));return a
    }
    ,
    c.prototype.tip = function() {
        if (!this.$tip && (this.$tip = a(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    c.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    c.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    c.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    c.prototype.toggle = function(b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type),
        c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
        a(b.currentTarget).data("bs." + this.type, c))),
        b ? (c.inState.click = !c.inState.click,
        c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }
    ,
    c.prototype.destroy = function() {
        var a = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            a.$element.off("." + a.type).removeData("bs." + a.type),
            a.$tip && a.$tip.detach(),
            a.$tip = null,
            a.$arrow = null,
            a.$viewport = null
        })
    }
    ;
    var d = a.fn.tooltip;
    a.fn.tooltip = b,
    a.fn.tooltip.Constructor = c,
    a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = d,
        this
    }
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.popover")
              , f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this,f)),
            "string" == typeof b && e[b]())
        })
    }
    var c = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.6",
    c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype),
    c.prototype.constructor = c,
    c.prototype.getDefaults = function() {
        return c.DEFAULTS
    }
    ,
    c.prototype.setContent = function() {
        var a = this.tip()
          , b = this.getTitle()
          , c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
        a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c),
        a.removeClass("fade top bottom left right in"),
        a.find(".popover-title").html() || a.find(".popover-title").hide()
    }
    ,
    c.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    c.prototype.getContent = function() {
        var a = this.$element
          , b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }
    ,
    c.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var d = a.fn.popover;
    a.fn.popover = b,
    a.fn.popover.Constructor = c,
    a.fn.popover.noConflict = function() {
        return a.fn.popover = d,
        this
    }
}(jQuery),
+function(a) {
    "use strict";
    function b(c, d) {
        this.$body = a(document.body),
        this.$scrollElement = a(a(c).is(document.body) ? window : c),
        this.options = a.extend({}, b.DEFAULTS, d),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function c(c) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.scrollspy")
              , f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this,f)),
            "string" == typeof c && e[c]()
        })
    }
    b.VERSION = "3.3.6",
    b.DEFAULTS = {
        offset: 10
    },
    b.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    b.prototype.refresh = function() {
        var b = this
          , c = "offset"
          , d = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        a.isWindow(this.$scrollElement[0]) || (c = "position",
        d = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var b = a(this)
              , e = b.data("target") || b.attr("href")
              , f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
        }).sort(function(a, b) {
            return a[0] - b[0]
        }).each(function() {
            b.offsets.push(this[0]),
            b.targets.push(this[1])
        })
    }
    ,
    b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(),
        b >= d)
            return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0])
            return this.activeTarget = null,
            this.clear();
        for (a = e.length; a--; )
            g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }
    ,
    b.prototype.activate = function(b) {
        this.activeTarget = b,
        this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]'
          , d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
        d.trigger("activate.bs.scrollspy")
    }
    ,
    b.prototype.clear = function() {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c,
    a.fn.scrollspy.Constructor = b,
    a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = d,
        this
    }
    ,
    a(window).on("load.bs.scrollspy.data-api", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.6",
    c.TRANSITION_DURATION = 150,
    c.prototype.show = function() {
        var b = this.element
          , c = b.closest("ul:not(.dropdown-menu)")
          , d = b.data("target");
        if (d || (d = b.attr("href"),
        d = d && d.replace(/.*(?=#[^\s]*$)/, "")),
        !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")
              , f = a.Event("hide.bs.tab", {
                relatedTarget: b[0]
            })
              , g = a.Event("show.bs.tab", {
                relatedTarget: e[0]
            });
            if (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c),
                this.activate(h, h.parent(), function() {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }),
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }
    ,
    c.prototype.activate = function(b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            h ? (b[0].offsetWidth,
            b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            e && e()
        }
        var g = d.find("> .active")
          , h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(),
        g.removeClass("in")
    }
    ;
    var d = a.fn.tab;
    a.fn.tab = b,
    a.fn.tab.Constructor = c,
    a.fn.tab.noConflict = function() {
        return a.fn.tab = d,
        this
    }
    ;
    var e = function(c) {
        c.preventDefault(),
        b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery),
+function(a) {
    "use strict";
    function b(b) {
        return this.each(function() {
            var d = a(this)
              , e = d.data("bs.affix")
              , f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this,f)),
            "string" == typeof b && e[b]()
        })
    }
    var c = function(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d),
        this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = a(b),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    c.VERSION = "3.3.6",
    c.RESET = "affix affix-top affix-bottom",
    c.DEFAULTS = {
        offset: 0,
        target: window
    },
    c.prototype.getState = function(a, b, c, d) {
        var e = this.$target.scrollTop()
          , f = this.$element.offset()
          , g = this.$target.height();
        if (null != c && "top" == this.affixed)
            return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
            return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed
          , i = h ? e : f.top
          , j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }
    ,
    c.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop()
          , b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }
    ,
    c.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }
    ,
    c.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var b = this.$element.height()
              , d = this.options.offset
              , e = d.top
              , f = d.bottom
              , g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : "")
                  , j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j),
                j.isDefaultPrevented())
                    return;
                this.affixed = h,
                this.unpin = "bottom" == h ? this.getPinnedOffset() : null,
                this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({
                top: g - b - f
            })
        }
    }
    ;
    var d = a.fn.affix;
    a.fn.affix = b,
    a.fn.affix.Constructor = c,
    a.fn.affix.noConflict = function() {
        return a.fn.affix = d,
        this
    }
    ,
    a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var c = a(this)
              , d = c.data();
            d.offset = d.offset || {},
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d)
        })
    })
}(jQuery);
/*!
 * VERSION: 1.13.1
 * DATE: 2014-07-22
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var s, n, r, a, o, l = function(t) {
            var e, s = t.split("."), n = i;
            for (e = 0; s.length > e; e++)
                n[s[e]] = n = n[s[e]] || {};
            return n
        }, h = l("com.greensock"), _ = 1e-10, u = function(t) {
            var e, i = [], s = t.length;
            for (e = 0; e !== s; i.push(t[e++]))
                ;
            return i
        }, f = function() {}, m = function() {
            var t = Object.prototype.toString
              , e = t.call([]);
            return function(i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
        }(), p = {}, c = function(s, n, r, a) {
            this.sc = p[s] ? p[s].sc : [],
            p[s] = this,
            this.gsClass = null,
            this.func = r;
            var o = [];
            this.check = function(h) {
                for (var _, u, f, m, d = n.length, v = d; --d > -1; )
                    (_ = p[n[d]] || new c(n[d],[])).gsClass ? (o[d] = _.gsClass,
                    v--) : h && _.sc.push(this);
                if (0 === v && r)
                    for (u = ("com.greensock." + s).split("."),
                    f = u.pop(),
                    m = l(u.join("."))[f] = this.gsClass = r.apply(r, o),
                    a && (i[f] = m,
                    "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                        return m
                    }) : s === e && "undefined" != typeof module && module.exports && (module.exports = m)),
                    d = 0; this.sc.length > d; d++)
                        this.sc[d].check()
            }
            ,
            this.check(!0)
        }, d = t._gsDefine = function(t, e, i, s) {
            return new c(t,e,i,s)
        }
        , v = h._class = function(t, e, i) {
            return e = e || function() {}
            ,
            d(t, [], function() {
                return e
            }, i),
            e
        }
        ;
        d.globals = i;
        var g = [0, 0, 1, 1]
          , T = []
          , y = v("easing.Ease", function(t, e, i, s) {
            this._func = t,
            this._type = i || 0,
            this._power = s || 0,
            this._params = e ? g.concat(e) : g
        }, !0)
          , w = y.map = {}
          , P = y.register = function(t, e, i, s) {
            for (var n, r, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1; )
                for (r = l[_],
                n = s ? v("easing." + r, null, !0) : h.easing[r] || {},
                a = u.length; --a > -1; )
                    o = u[a],
                    w[r + "." + o] = w[o + r] = n[o] = t.getRatio ? t : t[o] || new t
        }
        ;
        for (r = y.prototype,
        r._calcEnd = !1,
        r.getRatio = function(t) {
            if (this._func)
                return this._params[0] = t,
                this._func.apply(null, this._params);
            var e = this._type
              , i = this._power
              , s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s),
            1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
        }
        ,
        s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
        n = s.length; --n > -1; )
            r = s[n] + ",Power" + n,
            P(new y(null,null,1,n), r, "easeOut", !0),
            P(new y(null,null,2,n), r, "easeIn" + (0 === n ? ",easeNone" : "")),
            P(new y(null,null,3,n), r, "easeInOut");
        w.linear = h.easing.Linear.easeIn,
        w.swing = h.easing.Quad.easeInOut;
        var b = v("events.EventDispatcher", function(t) {
            this._listeners = {},
            this._eventTarget = t || this
        });
        r = b.prototype,
        r.addEventListener = function(t, e, i, s, n) {
            n = n || 0;
            var r, l, h = this._listeners[t], _ = 0;
            for (null == h && (this._listeners[t] = h = []),
            l = h.length; --l > -1; )
                r = h[l],
                r.c === e && r.s === i ? h.splice(l, 1) : 0 === _ && n > r.pr && (_ = l + 1);
            h.splice(_, 0, {
                c: e,
                s: i,
                up: s,
                pr: n
            }),
            this !== a || o || a.wake()
        }
        ,
        r.removeEventListener = function(t, e) {
            var i, s = this._listeners[t];
            if (s)
                for (i = s.length; --i > -1; )
                    if (s[i].c === e)
                        return s.splice(i, 1),
                        void 0
        }
        ,
        r.dispatchEvent = function(t) {
            var e, i, s, n = this._listeners[t];
            if (n)
                for (e = n.length,
                i = this._eventTarget; --e > -1; )
                    s = n[e],
                    s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i)
        }
        ;
        var k = t.requestAnimationFrame
          , A = t.cancelAnimationFrame
          , S = Date.now || function() {
            return (new Date).getTime()
        }
          , x = S();
        for (s = ["ms", "moz", "webkit", "o"],
        n = s.length; --n > -1 && !k; )
            k = t[s[n] + "RequestAnimationFrame"],
            A = t[s[n] + "CancelAnimationFrame"] || t[s[n] + "CancelRequestAnimationFrame"];
        v("Ticker", function(t, e) {
            var i, s, n, r, l, h = this, u = S(), m = e !== !1 && k, p = 500, c = 33, d = function(t) {
                var e, a, o = S() - x;
                o > p && (u += o - c),
                x += o,
                h.time = (x - u) / 1e3,
                e = h.time - l,
                (!i || e > 0 || t === !0) && (h.frame++,
                l += e + (e >= r ? .004 : r - e),
                a = !0),
                t !== !0 && (n = s(d)),
                a && h.dispatchEvent("tick")
            };
            b.call(h),
            h.time = h.frame = 0,
            h.tick = function() {
                d(!0)
            }
            ,
            h.lagSmoothing = function(t, e) {
                p = t || 1 / _,
                c = Math.min(e, p, 0)
            }
            ,
            h.sleep = function() {
                null != n && (m && A ? A(n) : clearTimeout(n),
                s = f,
                n = null,
                h === a && (o = !1))
            }
            ,
            h.wake = function() {
                null !== n ? h.sleep() : h.frame > 10 && (x = S() - p + 5),
                s = 0 === i ? f : m && k ? k : function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                }
                ,
                h === a && (o = !0),
                d(2)
            }
            ,
            h.fps = function(t) {
                return arguments.length ? (i = t,
                r = 1 / (i || 60),
                l = this.time + r,
                h.wake(),
                void 0) : i
            }
            ,
            h.useRAF = function(t) {
                return arguments.length ? (h.sleep(),
                m = t,
                h.fps(i),
                void 0) : m
            }
            ,
            h.fps(t),
            setTimeout(function() {
                m && (!n || 5 > h.frame) && h.useRAF(!1)
            }, 1500)
        }),
        r = h.Ticker.prototype = new h.events.EventDispatcher,
        r.constructor = h.Ticker;
        var C = v("core.Animation", function(t, e) {
            if (this.vars = e = e || {},
            this._duration = this._totalDuration = t || 0,
            this._delay = Number(e.delay) || 0,
            this._timeScale = 1,
            this._active = e.immediateRender === !0,
            this.data = e.data,
            this._reversed = e.reversed === !0,
            B) {
                o || a.wake();
                var i = this.vars.useFrames ? q : B;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
            }
        });
        a = C.ticker = new h.Ticker,
        r = C.prototype,
        r._dirty = r._gc = r._initted = r._paused = !1,
        r._totalTime = r._time = 0,
        r._rawPrevTime = -1,
        r._next = r._last = r._onUpdate = r._timeline = r.timeline = null,
        r._paused = !1;
        var R = function() {
            o && S() - x > 2e3 && a.wake(),
            setTimeout(R, 2e3)
        };
        R(),
        r.play = function(t, e) {
            return null != t && this.seek(t, e),
            this.reversed(!1).paused(!1)
        }
        ,
        r.pause = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!0)
        }
        ,
        r.resume = function(t, e) {
            return null != t && this.seek(t, e),
            this.paused(!1)
        }
        ,
        r.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        }
        ,
        r.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }
        ,
        r.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
        }
        ,
        r.render = function() {}
        ,
        r.invalidate = function() {
            return this
        }
        ,
        r.isActive = function() {
            var t, e = this._timeline, i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }
        ,
        r._enabled = function(t, e) {
            return o || a.wake(),
            this._gc = !t,
            this._active = this.isActive(),
            e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
        }
        ,
        r._kill = function() {
            return this._enabled(!1, !1)
        }
        ,
        r.kill = function(t, e) {
            return this._kill(t, e),
            this
        }
        ,
        r._uncache = function(t) {
            for (var e = t ? this : this.timeline; e; )
                e._dirty = !0,
                e = e.timeline;
            return this
        }
        ,
        r._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
            return i
        }
        ,
        r.eventCallback = function(t, e, i, s) {
            if ("on" === (t || "").substr(0, 2)) {
                var n = this.vars;
                if (1 === arguments.length)
                    return n[t];
                null == e ? delete n[t] : (n[t] = e,
                n[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                n[t + "Scope"] = s),
                "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }
        ,
        r.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        r.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t,
            this._uncache(!0),
            this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
            this) : (this._dirty = !1,
            this._duration)
        }
        ,
        r.totalDuration = function(t) {
            return this._dirty = !1,
            arguments.length ? this.duration(t) : this._totalDuration
        }
        ,
        r.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(),
            this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }
        ,
        r.totalTime = function(t, e, i) {
            if (o || a.wake(),
            !arguments.length)
                return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()),
                this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var s = this._totalDuration
                      , n = this._timeline;
                    if (t > s && !i && (t = s),
                    this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? s - t : t) / this._timeScale,
                    n._dirty || this._uncache(!1),
                    n._timeline)
                        for (; n._timeline; )
                            n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0),
                            n = n._timeline
                }
                this._gc && this._enabled(!0, !1),
                (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1),
                O.length && M())
            }
            return this
        }
        ,
        r.progress = r.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }
        ,
        r.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t,
            this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
            this) : this._startTime
        }
        ,
        r.timeScale = function(t) {
            if (!arguments.length)
                return this._timeScale;
            if (t = t || _,
            this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime
                  , i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t,
            this._uncache(!1)
        }
        ,
        r.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t,
            this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
            this) : this._reversed
        }
        ,
        r.paused = function(t) {
            if (!arguments.length)
                return this._paused;
            if (t != this._paused && this._timeline) {
                o || t || a.wake();
                var e = this._timeline
                  , i = e.rawTime()
                  , s = i - this._pauseTime;
                !t && e.smoothChildTiming && (this._startTime += s,
                this._uncache(!1)),
                this._pauseTime = t ? i : null,
                this._paused = t,
                this._active = this.isActive(),
                !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
            }
            return this._gc && !t && this._enabled(!0, !1),
            this
        }
        ;
        var D = v("core.SimpleTimeline", function(t) {
            C.call(this, 0, t),
            this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        r = D.prototype = new C,
        r.constructor = D,
        r.kill()._gc = !1,
        r._first = r._last = null,
        r._sortChildren = !1,
        r.add = r.insert = function(t, e) {
            var i, s;
            if (t._startTime = Number(e || 0) + t._delay,
            t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
            t.timeline && t.timeline._remove(t, !0),
            t.timeline = t._timeline = this,
            t._gc && t._enabled(!0, !0),
            i = this._last,
            this._sortChildren)
                for (s = t._startTime; i && i._startTime > s; )
                    i = i._prev;
            return i ? (t._next = i._next,
            i._next = t) : (t._next = this._first,
            this._first = t),
            t._next ? t._next._prev = t : this._last = t,
            t._prev = i,
            this._timeline && this._uncache(!0),
            this
        }
        ,
        r._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0),
            t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
            t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
            t._next = t._prev = t.timeline = null,
            this._timeline && this._uncache(!0)),
            this
        }
        ,
        r.render = function(t, e, i) {
            var s, n = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; n; )
                s = n._next,
                (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                n = s
        }
        ,
        r.rawTime = function() {
            return o || a.wake(),
            this._totalTime
        }
        ;
        var I = v("TweenLite", function(e, i, s) {
            if (C.call(this, i, s),
            this.render = I.prototype.render,
            null == e)
                throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : I.selector(e) || e;
            var n, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? Q[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : Q[l],
            (o || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
                for (this._targets = a = u(e),
                this._propLookup = [],
                this._siblings = [],
                n = 0; a.length > n; n++)
                    r = a[n],
                    r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(n--, 1),
                    this._targets = a = a.concat(u(r))) : (this._siblings[n] = $(r, this, !1),
                    1 === l && this._siblings[n].length > 1 && K(r, this, null, 1, this._siblings[n])) : (r = a[n--] = I.selector(r),
                    "string" == typeof r && a.splice(n + 1, 1)) : a.splice(n--, 1);
            else
                this._propLookup = {},
                this._siblings = $(e, this, !1),
                1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_,
            this.render(-this._delay))
        }, !0)
          , E = function(e) {
            return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        }
          , z = function(t, e) {
            var i, s = {};
            for (i in t)
                G[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (s[i] = t[i],
                delete t[i]);
            t.css = s
        };
        r = I.prototype = new C,
        r.constructor = I,
        r.kill()._gc = !1,
        r.ratio = 0,
        r._firstPT = r._targets = r._overwrittenProps = r._startAt = null,
        r._notifyPluginsOfEnabled = r._lazy = !1,
        I.version = "1.13.1",
        I.defaultEase = r._ease = new y(null,null,1,1),
        I.defaultOverwrite = "auto",
        I.ticker = a,
        I.autoSleep = !0,
        I.lagSmoothing = function(t, e) {
            a.lagSmoothing(t, e)
        }
        ,
        I.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (I.selector = i,
            i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        }
        ;
        var O = []
          , L = {}
          , N = I._internals = {
            isArray: m,
            isSelector: E,
            lazyTweens: O
        }
          , U = I._plugins = {}
          , F = N.tweenLookup = {}
          , j = 0
          , G = N.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1
        }
          , Q = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        }
          , q = C._rootFramesTimeline = new D
          , B = C._rootTimeline = new D
          , M = N.lazyRender = function() {
            var t = O.length;
            for (L = {}; --t > -1; )
                s = O[t],
                s && s._lazy !== !1 && (s.render(s._lazy, !1, !0),
                s._lazy = !1);
            O.length = 0
        }
        ;
        B._startTime = a.time,
        q._startTime = a.frame,
        B._active = q._active = !0,
        setTimeout(M, 1),
        C._updateRoot = I.render = function() {
            var t, e, i;
            if (O.length && M(),
            B.render((a.time - B._startTime) * B._timeScale, !1, !1),
            q.render((a.frame - q._startTime) * q._timeScale, !1, !1),
            O.length && M(),
            !(a.frame % 120)) {
                for (i in F) {
                    for (e = F[i].tweens,
                    t = e.length; --t > -1; )
                        e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete F[i]
                }
                if (i = B._first,
                (!i || i._paused) && I.autoSleep && !q._first && 1 === a._listeners.tick.length) {
                    for (; i && i._paused; )
                        i = i._next;
                    i || a.sleep()
                }
            }
        }
        ,
        a.addEventListener("tick", C._updateRoot);
        var $ = function(t, e, i) {
            var s, n, r = t._gsTweenID;
            if (F[r || (t._gsTweenID = r = "t" + j++)] || (F[r] = {
                target: t,
                tweens: []
            }),
            e && (s = F[r].tweens,
            s[n = s.length] = e,
            i))
                for (; --n > -1; )
                    s[n] === e && s.splice(n, 1);
            return F[r].tweens
        }
          , K = function(t, e, i, s, n) {
            var r, a, o, l;
            if (1 === s || s >= 4) {
                for (l = n.length,
                r = 0; l > r; r++)
                    if ((o = n[r]) !== e)
                        o._gc || o._enabled(!1, !1) && (a = !0);
                    else if (5 === s)
                        break;
                return a
            }
            var h, u = e._startTime + _, f = [], m = 0, p = 0 === e._duration;
            for (r = n.length; --r > -1; )
                (o = n[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || H(e, 0, p),
                0 === H(o, h, p) && (f[m++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((p || !o._initted) && 2e-10 >= u - o._startTime || (f[m++] = o)));
            for (r = m; --r > -1; )
                o = f[r],
                2 === s && o._kill(i, t) && (a = !0),
                (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
            return a
        }
          , H = function(t, e, i) {
            for (var s = t._timeline, n = s._timeScale, r = t._startTime; s._timeline; ) {
                if (r += s._startTime,
                n *= s._timeScale,
                s._paused)
                    return -100;
                s = s._timeline
            }
            return r /= n,
            r > e ? r - e : i && r === e || !t._initted && 2 * _ > r - e ? _ : (r += t.totalDuration() / t._timeScale / n) > e + _ ? 0 : r - e - _
        };
        r._init = function() {
            var t, e, i, s, n, r = this.vars, a = this._overwrittenProps, o = this._duration, l = !!r.immediateRender, h = r.ease;
            if (r.startAt) {
                this._startAt && (this._startAt.render(-1, !0),
                this._startAt.kill()),
                n = {};
                for (s in r.startAt)
                    n[s] = r.startAt[s];
                if (n.overwrite = !1,
                n.immediateRender = !0,
                n.lazy = l && r.lazy !== !1,
                n.startAt = n.delay = null,
                this._startAt = I.to(this.target, 0, n),
                l)
                    if (this._time > 0)
                        this._startAt = null;
                    else if (0 !== o)
                        return
            } else if (r.runBackwards && 0 !== o)
                if (this._startAt)
                    this._startAt.render(-1, !0),
                    this._startAt.kill(),
                    this._startAt = null;
                else {
                    i = {};
                    for (s in r)
                        G[s] && "autoCSS" !== s || (i[s] = r[s]);
                    if (i.overwrite = 0,
                    i.data = "isFromStart",
                    i.lazy = l && r.lazy !== !1,
                    i.immediateRender = l,
                    this._startAt = I.to(this.target, 0, i),
                    l) {
                        if (0 === this._time)
                            return
                    } else
                        this._startAt._init(),
                        this._startAt._enabled(!1)
                }
            if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h,r.easeParams) : w[h] || I.defaultEase : I.defaultEase,
            r.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, r.easeParams)),
            this._easeType = this._ease._type,
            this._easePower = this._ease._power,
            this._firstPT = null,
            this._targets)
                for (t = this._targets.length; --t > -1; )
                    this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
            else
                e = this._initProps(this.target, this._propLookup, this._siblings, a);
            if (e && I._onPluginEvent("_onInitAllProps", this),
            a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
            r.runBackwards)
                for (i = this._firstPT; i; )
                    i.s += i.c,
                    i.c = -i.c,
                    i = i._next;
            this._onUpdate = r.onUpdate,
            this._initted = !0
        }
        ,
        r._initProps = function(e, i, s, n) {
            var r, a, o, l, h, _;
            if (null == e)
                return !1;
            L[e._gsTweenID] && M(),
            this.vars.css || e.style && e !== t && e.nodeType && U.css && this.vars.autoCSS !== !1 && z(this.vars, e);
            for (r in this.vars) {
                if (_ = this.vars[r],
                G[r])
                    _ && (_ instanceof Array || _.push && m(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[r] = _ = this._swapSelfInParams(_, this));
                else if (U[r] && (l = new U[r])._onInitTween(e, this.vars[r], this)) {
                    for (this._firstPT = h = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: r,
                        pg: !0,
                        pr: l._priority
                    },
                    a = l._overwriteProps.length; --a > -1; )
                        i[l._overwriteProps[a]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (o = !0),
                    (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else
                    this._firstPT = i[r] = h = {
                        _next: this._firstPT,
                        t: e,
                        p: r,
                        f: "function" == typeof e[r],
                        n: r,
                        pg: !1,
                        pr: 0
                    },
                    h.s = h.f ? e[r.indexOf("set") || "function" != typeof e["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(e[r]),
                    h.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - h.s || 0;
                h && h._next && (h._next._prev = h)
            }
            return n && this._kill(n, e) ? this._initProps(e, i, s, n) : this._overwrite > 1 && this._firstPT && s.length > 1 && K(e, this, i, this._overwrite, s) ? (this._kill(i, e),
            this._initProps(e, i, s, n)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0),
            o)
        }
        ,
        r.render = function(t, e, i) {
            var s, n, r, a, o = this._time, l = this._duration, h = this._rawPrevTime;
            if (t >= l)
                this._totalTime = this._time = l,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (s = !0,
                n = "onComplete"),
                0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                (0 === t || 0 > h || h === _) && h !== t && (i = !0,
                h > _ && (n = "onReverseComplete")),
                this._rawPrevTime = a = !e || t || h === t ? t : _);
            else if (1e-7 > t)
                this._totalTime = this._time = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== o || 0 === l && h > 0 && h !== _) && (n = "onReverseComplete",
                s = this._reversed),
                0 > t ? (this._active = !1,
                0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (i = !0),
                this._rawPrevTime = a = !e || t || h === t ? t : _)) : this._initted || (i = !0);
            else if (this._totalTime = this._time = t,
            this._easeType) {
                var u = t / l
                  , f = this._easeType
                  , m = this._easePower;
                (1 === f || 3 === f && u >= .5) && (u = 1 - u),
                3 === f && (u *= 2),
                1 === m ? u *= u : 2 === m ? u *= u * u : 3 === m ? u *= u * u * u : 4 === m && (u *= u * u * u * u),
                this.ratio = 1 === f ? 1 - u : 2 === f ? u : .5 > t / l ? u / 2 : 1 - u / 2
            } else
                this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
                if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                        return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                        return this._time = this._totalTime = o,
                        this._rawPrevTime = h,
                        O.push(this),
                        this._lazy = t,
                        void 0;
                    this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1),
                this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0),
                0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")),
                this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || T))),
                r = this._firstPT; r; )
                    r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s,
                    r = r._next;
                this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i),
                e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || T)),
                n && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
                s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
                !e && this.vars[n] && this.vars[n].apply(this.vars[n + "Scope"] || this, this.vars[n + "Params"] || T),
                0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
            }
        }
        ,
        r._kill = function(t, e) {
            if ("all" === t && (t = null),
            null == t && (null == e || e === this.target))
                return this._lazy = !1,
                this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
            var i, s, n, r, a, o, l, h;
            if ((m(e) || E(e)) && "number" != typeof e[0])
                for (i = e.length; --i > -1; )
                    this._kill(t, e[i]) && (o = !0);
            else {
                if (this._targets) {
                    for (i = this._targets.length; --i > -1; )
                        if (e === this._targets[i]) {
                            a = this._propLookup[i] || {},
                            this._overwrittenProps = this._overwrittenProps || [],
                            s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target)
                        return !1;
                    a = this._propLookup,
                    s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    l = t || a,
                    h = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill);
                    for (n in l)
                        (r = a[n]) && (r.pg && r.t._kill(l) && (o = !0),
                        r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next),
                        r._next && (r._next._prev = r._prev),
                        r._next = r._prev = null),
                        delete a[n]),
                        h && (s[n] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return o
        }
        ,
        r.invalidate = function() {
            return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this),
            this._firstPT = null,
            this._overwrittenProps = null,
            this._onUpdate = null,
            this._startAt = null,
            this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1,
            this._propLookup = this._targets ? {} : [],
            this
        }
        ,
        r._enabled = function(t, e) {
            if (o || a.wake(),
            t && this._gc) {
                var i, s = this._targets;
                if (s)
                    for (i = s.length; --i > -1; )
                        this._siblings[i] = $(s[i], this, !0);
                else
                    this._siblings = $(this.target, this, !0)
            }
            return C.prototype._enabled.call(this, t, e),
            this._notifyPluginsOfEnabled && this._firstPT ? I._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }
        ,
        I.to = function(t, e, i) {
            return new I(t,e,i)
        }
        ,
        I.from = function(t, e, i) {
            return i.runBackwards = !0,
            i.immediateRender = 0 != i.immediateRender,
            new I(t,e,i)
        }
        ,
        I.fromTo = function(t, e, i, s) {
            return s.startAt = i,
            s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender,
            new I(t,e,s)
        }
        ,
        I.delayedCall = function(t, e, i, s, n) {
            return new I(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                onCompleteScope: s,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                onReverseCompleteScope: s,
                immediateRender: !1,
                useFrames: n,
                overwrite: 0
            })
        }
        ,
        I.set = function(t, e) {
            return new I(t,0,e)
        }
        ,
        I.getTweensOf = function(t, e) {
            if (null == t)
                return [];
            t = "string" != typeof t ? t : I.selector(t) || t;
            var i, s, n, r;
            if ((m(t) || E(t)) && "number" != typeof t[0]) {
                for (i = t.length,
                s = []; --i > -1; )
                    s = s.concat(I.getTweensOf(t[i], e));
                for (i = s.length; --i > -1; )
                    for (r = s[i],
                    n = i; --n > -1; )
                        r === s[n] && s.splice(i, 1)
            } else
                for (s = $(t).concat(),
                i = s.length; --i > -1; )
                    (s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
            return s
        }
        ,
        I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e,
            e = !1);
            for (var s = I.getTweensOf(t, e), n = s.length; --n > -1; )
                s[n]._kill(i, t)
        }
        ;
        var J = v("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","),
            this._propName = this._overwriteProps[0],
            this._priority = e || 0,
            this._super = J.prototype
        }, !0);
        if (r = J.prototype,
        J.version = "1.10.1",
        J.API = 2,
        r._firstPT = null,
        r._addTween = function(t, e, i, s, n, r) {
            var a, o;
            return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                _next: this._firstPT,
                t: t,
                p: e,
                s: i,
                c: a,
                f: "function" == typeof t[e],
                n: n || e,
                r: r
            },
            o._next && (o._next._prev = o),
            o) : void 0
        }
        ,
        r.setRatio = function(t) {
            for (var e, i = this._firstPT, s = 1e-6; i; )
                e = i.c * t + i.s,
                i.r ? e = Math.round(e) : s > e && e > -s && (e = 0),
                i.f ? i.t[i.p](e) : i.t[i.p] = e,
                i = i._next
        }
        ,
        r._kill = function(t) {
            var e, i = this._overwriteProps, s = this._firstPT;
            if (null != t[this._propName])
                this._overwriteProps = [];
            else
                for (e = i.length; --e > -1; )
                    null != t[i[e]] && i.splice(e, 1);
            for (; s; )
                null != t[s.n] && (s._next && (s._next._prev = s._prev),
                s._prev ? (s._prev._next = s._next,
                s._prev = null) : this._firstPT === s && (this._firstPT = s._next)),
                s = s._next;
            return !1
        }
        ,
        r._roundProps = function(t, e) {
            for (var i = this._firstPT; i; )
                (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e),
                i = i._next
        }
        ,
        I._onPluginEvent = function(t, e) {
            var i, s, n, r, a, o = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; o; ) {
                    for (a = o._next,
                    s = n; s && s.pr > o.pr; )
                        s = s._next;
                    (o._prev = s ? s._prev : r) ? o._prev._next = o : n = o,
                    (o._next = s) ? s._prev = o : r = o,
                    o = a
                }
                o = e._firstPT = n
            }
            for (; o; )
                o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
                o = o._next;
            return i
        }
        ,
        J.activate = function(t) {
            for (var e = t.length; --e > -1; )
                t[e].API === J.API && (U[(new t[e])._propName] = t[e]);
            return !0
        }
        ,
        d.plugin = function(t) {
            if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
            var e, i = t.propName, s = t.priority || 0, n = t.overwriteProps, r = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_roundProps",
                initAll: "_onInitAllProps"
            }, a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                J.call(this, i, s),
                this._overwriteProps = n || []
            }, t.global === !0), o = a.prototype = new J(i);
            o.constructor = a,
            a.API = t.API;
            for (e in r)
                "function" == typeof t[e] && (o[r[e]] = t[e]);
            return a.version = t.version,
            J.activate([a]),
            a
        }
        ,
        s = t._gsQueue) {
            for (n = 0; s.length > n; n++)
                s[n]();
            for (r in p)
                p[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
        }
        o = !1
    }
}
)("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
/*!
 * VERSION: beta 1.9.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
        var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope, n = r.com.greensock, a = 2 * Math.PI, o = Math.PI / 2, h = n._class, l = function(e, i) {
            var s = h("easing." + e, function() {}, !0)
              , r = s.prototype = new t;
            return r.constructor = s,
            r.getRatio = i,
            s
        }, _ = t.register || function() {}
        , u = function(t, e, i, s) {
            var r = h("easing." + t, {
                easeOut: new e,
                easeIn: new i,
                easeInOut: new s
            }, !0);
            return _(r, t),
            r
        }, c = function(t, e, i) {
            this.t = t,
            this.v = e,
            i && (this.next = i,
            i.prev = this,
            this.c = i.v - e,
            this.gap = i.t - t)
        }, p = function(e, i) {
            var s = h("easing." + e, function(t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                this._p2 = 1.525 * this._p1
            }, !0)
              , r = s.prototype = new t;
            return r.constructor = s,
            r.getRatio = i,
            r.config = function(t) {
                return new s(t)
            }
            ,
            s
        }, f = u("Back", p("BackOut", function(t) {
            return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
        }), p("BackIn", function(t) {
            return t * t * ((this._p1 + 1) * t - this._p1)
        }), p("BackInOut", function(t) {
            return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
        })), m = h("easing.SlowMo", function(t, e, i) {
            e = e || 0 === e ? e : .7,
            null == t ? t = .7 : t > 1 && (t = 1),
            this._p = 1 !== t ? e : 0,
            this._p1 = (1 - t) / 2,
            this._p2 = t,
            this._p3 = this._p1 + this._p2,
            this._calcEnd = i === !0
        }, !0), d = m.prototype = new t;
        return d.constructor = m,
        d.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }
        ,
        m.ease = new m(.7,.7),
        d.config = m.config = function(t, e, i) {
            return new m(t,e,i)
        }
        ,
        e = h("easing.SteppedEase", function(t) {
            t = t || 1,
            this._p1 = 1 / t,
            this._p2 = t + 1
        }, !0),
        d = e.prototype = new t,
        d.constructor = e,
        d.getRatio = function(t) {
            return 0 > t ? t = 0 : t >= 1 && (t = .999999999),
            (this._p2 * t >> 0) * this._p1
        }
        ,
        d.config = e.config = function(t) {
            return new e(t)
        }
        ,
        i = h("easing.RoughEase", function(e) {
            e = e || {};
            for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1; )
                i = f ? Math.random() : 1 / u * p,
                s = d ? d.getRatio(i) : i,
                "none" === h ? r = g : "out" === h ? (n = 1 - i,
                r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i,
                r = .5 * n * n * g) : (n = 2 * (1 - i),
                r = .5 * n * n * g),
                f ? s += Math.random() * r - .5 * r : p % 2 ? s += .5 * r : s -= .5 * r,
                m && (s > 1 ? s = 1 : 0 > s && (s = 0)),
                l[_++] = {
                    x: i,
                    y: s
                };
            for (l.sort(function(t, e) {
                return t.x - e.x
            }),
            o = new c(1,1,null),
            p = u; --p > -1; )
                a = l[p],
                o = new c(a.x,a.y,o);
            this._prev = new c(0,0,0 !== o.t ? o : o.next)
        }, !0),
        d = i.prototype = new t,
        d.constructor = i,
        d.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t; )
                    e = e.next;
                e = e.prev
            } else
                for (; e.prev && e.t >= t; )
                    e = e.prev;
            return this._prev = e,
            e.v + (t - e.t) / e.gap * e.c
        }
        ,
        d.config = function(t) {
            return new i(t)
        }
        ,
        i.ease = new i,
        u("Bounce", l("BounceOut", function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), l("BounceIn", function(t) {
            return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), l("BounceInOut", function(t) {
            var e = .5 > t;
            return t = e ? 1 - 2 * t : 2 * t - 1,
            t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
            e ? .5 * (1 - t) : .5 * t + .5
        })),
        u("Circ", l("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), l("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), l("CircInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })),
        s = function(e, i, s) {
            var r = h("easing." + e, function(t, e) {
                this._p1 = t || 1,
                this._p2 = e || s,
                this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
            }, !0)
              , n = r.prototype = new t;
            return n.constructor = r,
            n.getRatio = i,
            n.config = function(t, e) {
                return new r(t,e)
            }
            ,
            r
        }
        ,
        u("Elastic", s("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .3), s("ElasticIn", function(t) {
            return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
        }, .3), s("ElasticInOut", function(t) {
            return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
        }, .45)),
        u("Expo", l("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), l("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), l("ExpoInOut", function(t) {
            return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })),
        u("Sine", l("SineOut", function(t) {
            return Math.sin(t * o)
        }), l("SineIn", function(t) {
            return -Math.cos(t * o) + 1
        }), l("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })),
        h("easing.EaseLookup", {
            find: function(e) {
                return t.map[e]
            }
        }, !0),
        _(r.SlowMo, "SlowMo", "ease,"),
        _(i, "RoughEase", "ease,"),
        _(e, "SteppedEase", "ease,"),
        f
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()();
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        }
        ;
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        }
        ;
}());
;(function(window, document, undefined) {
    "use strict";
    (function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof require == "function" && require;
                    if (!u && a)
                        return a(o, !0);
                    if (i)
                        return i(o, !0);
                    var f = new Error("Cannot find module '" + o + "'");
                    throw f.code = "MODULE_NOT_FOUND",
                    f
                }
                var l = n[o] = {
                    exports: {}
                };
                t[o][0].call(l.exports, function(e) {
                    var n = t[o][1][e];
                    return s(n ? n : e)
                }, l, l.exports, e, t, n, r)
            }
            return n[o].exports
        }
        var i = typeof require == "function" && require;
        for (var o = 0; o < r.length; o++)
            s(r[o]);
        return s
    }
    )({
        1: [function(require, module, exports) {
            'use strict';
            var _interopRequireWildcard = function(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            };
            var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation = require('./modules/handle-dom');
            var _extend$hexToRgb$isIE8$logStr$colorLuminance = require('./modules/utils');
            var _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition = require('./modules/handle-swal-dom');
            var _handleButton$handleConfirm$handleCancel = require('./modules/handle-click');
            var _handleKeyDown = require('./modules/handle-key');
            var _handleKeyDown2 = _interopRequireWildcard(_handleKeyDown);
            var _defaultParams = require('./modules/default-params');
            var _defaultParams2 = _interopRequireWildcard(_defaultParams);
            var _setParameters = require('./modules/set-params');
            var _setParameters2 = _interopRequireWildcard(_setParameters);
            var previousWindowKeyDown;
            var lastFocusedButton;
            var sweetAlert, swal;
            sweetAlert = swal = function() {
                var customizations = arguments[0];
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(document.body, 'stop-scrolling');
                _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.resetInput();
                function argumentOrDefault(key) {
                    var args = customizations;
                    return args[key] === undefined ? _defaultParams2['default'][key] : args[key];
                }
                if (customizations === undefined) {
                    _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert expects at least 1 attribute!');
                    return false;
                }
                var params = _extend$hexToRgb$isIE8$logStr$colorLuminance.extend({}, _defaultParams2['default']);
                switch (typeof customizations) {
                case 'string':
                    params.title = customizations;
                    params.text = arguments[1] || '';
                    params.type = arguments[2] || '';
                    break;
                case 'object':
                    if (customizations.title === undefined) {
                        _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Missing "title" argument!');
                        return false;
                    }
                    params.title = customizations.title;
                    for (var customName in _defaultParams2['default']) {
                        params[customName] = argumentOrDefault(customName);
                    }
                    params.confirmButtonText = params.showCancelButton ? 'Confirm' : _defaultParams2['default'].confirmButtonText;
                    params.confirmButtonText = argumentOrDefault('confirmButtonText');
                    params.doneFunction = arguments[1] || null;
                    break;
                default:
                    _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof customizations);
                    return false;
                }
                _setParameters2['default'](params);
                _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.fixVerticalPosition();
                _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.openModal(arguments[1]);
                var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
                var $buttons = modal.querySelectorAll('button');
                var buttonEvents = ['onclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onfocus'];
                var onButtonEvent = function onButtonEvent(e) {
                    return _handleButton$handleConfirm$handleCancel.handleButton(e, params, modal);
                };
                for (var btnIndex = 0; btnIndex < $buttons.length; btnIndex++) {
                    for (var evtIndex = 0; evtIndex < buttonEvents.length; evtIndex++) {
                        var btnEvt = buttonEvents[evtIndex];
                        $buttons[btnIndex][btnEvt] = onButtonEvent;
                    }
                }
                _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay().onclick = onButtonEvent;
                previousWindowKeyDown = window.onkeydown;
                var onKeyEvent = function onKeyEvent(e) {
                    return _handleKeyDown2['default'](e, params, modal);
                };
                window.onkeydown = onKeyEvent;
                window.onfocus = function() {
                    setTimeout(function() {
                        if (lastFocusedButton !== undefined) {
                            lastFocusedButton.focus();
                            lastFocusedButton = undefined;
                        }
                    }, 0);
                }
                ;
                swal.enableButtons();
            }
            ;
            sweetAlert.setDefaults = swal.setDefaults = function(userParams) {
                if (!userParams) {
                    throw new Error('userParams is required');
                }
                if (typeof userParams !== 'object') {
                    throw new Error('userParams has to be a object');
                }
                _extend$hexToRgb$isIE8$logStr$colorLuminance.extend(_defaultParams2['default'], userParams);
            }
            ;
            sweetAlert.close = swal.close = function() {
                var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(_sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay(), 5);
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(modal, 5);
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'showSweetAlert');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(modal, 'hideSweetAlert');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'visible');
                var $successIcon = modal.querySelector('.sa-icon.sa-success');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon, 'animate');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-tip'), 'animateSuccessTip');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-long'), 'animateSuccessLong');
                var $errorIcon = modal.querySelector('.sa-icon.sa-error');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'animateErrorIcon');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon.querySelector('.sa-x-mark'), 'animateXMark');
                var $warningIcon = modal.querySelector('.sa-icon.sa-warning');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon, 'pulseWarning');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-body'), 'pulseWarningIns');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-dot'), 'pulseWarningIns');
                setTimeout(function() {
                    var customClass = modal.getAttribute('data-custom-class');
                    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, customClass);
                }, 300);
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(document.body, 'stop-scrolling');
                window.onkeydown = previousWindowKeyDown;
                if (window.previousActiveElement) {
                    window.previousActiveElement.focus();
                }
                lastFocusedButton = undefined;
                clearTimeout(modal.timeout);
                return true;
            }
            ;
            sweetAlert.showInputError = swal.showInputError = function(errorMessage) {
                var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
                var $errorIcon = modal.querySelector('.sa-input-error');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorIcon, 'show');
                var $errorContainer = modal.querySelector('.sa-error-container');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorContainer, 'show');
                $errorContainer.querySelector('p').innerHTML = errorMessage;
                setTimeout(function() {
                    sweetAlert.enableButtons();
                }, 1);
                modal.querySelector('input').focus();
            }
            ;
            sweetAlert.resetInputError = swal.resetInputError = function(event) {
                if (event && event.keyCode === 13) {
                    return false;
                }
                var $modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
                var $errorIcon = $modal.querySelector('.sa-input-error');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'show');
                var $errorContainer = $modal.querySelector('.sa-error-container');
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorContainer, 'show');
            }
            ;
            sweetAlert.disableButtons = swal.disableButtons = function(event) {
                var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
                var $confirmButton = modal.querySelector('button.confirm');
                var $cancelButton = modal.querySelector('button.cancel');
                $confirmButton.disabled = true;
                $cancelButton.disabled = true;
            }
            ;
            sweetAlert.enableButtons = swal.enableButtons = function(event) {
                var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
                var $confirmButton = modal.querySelector('button.confirm');
                var $cancelButton = modal.querySelector('button.cancel');
                $confirmButton.disabled = false;
                $cancelButton.disabled = false;
            }
            ;
            if (typeof window !== 'undefined') {
                window.sweetAlert = window.swal = sweetAlert;
            } else {
                _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert is a frontend module!');
            }
        }
        , {
            "./modules/default-params": 2,
            "./modules/handle-click": 3,
            "./modules/handle-dom": 4,
            "./modules/handle-key": 5,
            "./modules/handle-swal-dom": 6,
            "./modules/set-params": 8,
            "./modules/utils": 9
        }],
        2: [function(require, module, exports) {
            'use strict';
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            var defaultParams = {
                title: '',
                text: '',
                type: null,
                allowOutsideClick: false,
                showConfirmButton: true,
                showCancelButton: false,
                closeOnConfirm: true,
                closeOnCancel: true,
                confirmButtonText: 'OK',
                confirmButtonColor: '#8CD4F5',
                cancelButtonText: 'Cancel',
                imageUrl: null,
                imageSize: null,
                timer: null,
                customClass: '',
                html: false,
                animation: true,
                allowEscapeKey: true,
                inputType: 'text',
                inputPlaceholder: '',
                inputValue: '',
                showLoaderOnConfirm: false
            };
            exports['default'] = defaultParams;
            module.exports = exports['default'];
        }
        , {}],
        3: [function(require, module, exports) {
            'use strict';
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            var _colorLuminance = require('./utils');
            var _getModal = require('./handle-swal-dom');
            var _hasClass$isDescendant = require('./handle-dom');
            var handleButton = function handleButton(event, params, modal) {
                var e = event || window.event;
                var target = e.target || e.srcElement;
                var targetedConfirm = target.className.indexOf('confirm') !== -1;
                var targetedOverlay = target.className.indexOf('sweet-overlay') !== -1;
                var modalIsVisible = _hasClass$isDescendant.hasClass(modal, 'visible');
                var doneFunctionExists = params.doneFunction && modal.getAttribute('data-has-done-function') === 'true';
                var normalColor, hoverColor, activeColor;
                if (targetedConfirm && params.confirmButtonColor) {
                    normalColor = params.confirmButtonColor;
                    hoverColor = _colorLuminance.colorLuminance(normalColor, -0.04);
                    activeColor = _colorLuminance.colorLuminance(normalColor, -0.14);
                }
                function shouldSetConfirmButtonColor(color) {
                    if (targetedConfirm && params.confirmButtonColor) {
                        target.style.backgroundColor = color;
                    }
                }
                switch (e.type) {
                case 'mouseover':
                    shouldSetConfirmButtonColor(hoverColor);
                    break;
                case 'mouseout':
                    shouldSetConfirmButtonColor(normalColor);
                    break;
                case 'mousedown':
                    shouldSetConfirmButtonColor(activeColor);
                    break;
                case 'mouseup':
                    shouldSetConfirmButtonColor(hoverColor);
                    break;
                case 'focus':
                    var $confirmButton = modal.querySelector('button.confirm');
                    var $cancelButton = modal.querySelector('button.cancel');
                    if (targetedConfirm) {
                        $cancelButton.style.boxShadow = 'none';
                    } else {
                        $confirmButton.style.boxShadow = 'none';
                    }
                    break;
                case 'click':
                    var clickedOnModal = modal === target;
                    var clickedOnModalChild = _hasClass$isDescendant.isDescendant(modal, target);
                    if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && !params.allowOutsideClick) {
                        break;
                    }
                    if (targetedConfirm && doneFunctionExists && modalIsVisible) {
                        handleConfirm(modal, params);
                    } else if (doneFunctionExists && modalIsVisible || targetedOverlay) {
                        handleCancel(modal, params);
                    } else if (_hasClass$isDescendant.isDescendant(modal, target) && target.tagName === 'BUTTON') {
                        sweetAlert.close();
                    }
                    break;
                }
            };
            var handleConfirm = function handleConfirm(modal, params) {
                var callbackValue = true;
                if (_hasClass$isDescendant.hasClass(modal, 'show-input')) {
                    callbackValue = modal.querySelector('input').value;
                    if (!callbackValue) {
                        callbackValue = '';
                    }
                }
                params.doneFunction(callbackValue);
                if (params.closeOnConfirm) {
                    sweetAlert.close();
                }
                if (params.showLoaderOnConfirm) {
                    sweetAlert.disableButtons();
                }
            };
            var handleCancel = function handleCancel(modal, params) {
                var functionAsStr = String(params.doneFunction).replace(/\s/g, '');
                var functionHandlesCancel = functionAsStr.substring(0, 9) === 'function(' && functionAsStr.substring(9, 10) !== ')';
                if (functionHandlesCancel) {
                    params.doneFunction(false);
                }
                if (params.closeOnCancel) {
                    sweetAlert.close();
                }
            };
            exports['default'] = {
                handleButton: handleButton,
                handleConfirm: handleConfirm,
                handleCancel: handleCancel
            };
            module.exports = exports['default'];
        }
        , {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        4: [function(require, module, exports) {
            'use strict';
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            var hasClass = function hasClass(elem, className) {
                return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
            };
            var addClass = function addClass(elem, className) {
                if (!hasClass(elem, className)) {
                    elem.className += ' ' + className;
                }
            };
            var removeClass = function removeClass(elem, className) {
                var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
                if (hasClass(elem, className)) {
                    while (newClass.indexOf(' ' + className + ' ') >= 0) {
                        newClass = newClass.replace(' ' + className + ' ', ' ');
                    }
                    elem.className = newClass.replace(/^\s+|\s+$/g, '');
                }
            };
            var escapeHtml = function escapeHtml(str) {
                var div = document.createElement('div');
                div.appendChild(document.createTextNode(str));
                return div.innerHTML;
            };
            var _show = function _show(elem) {
                elem.style.opacity = '';
                elem.style.display = 'block';
            };
            var show = function show(elems) {
                if (elems && !elems.length) {
                    return _show(elems);
                }
                for (var i = 0; i < elems.length; ++i) {
                    _show(elems[i]);
                }
            };
            var _hide = function _hide(elem) {
                elem.style.opacity = '';
                elem.style.display = 'none';
            };
            var hide = function hide(elems) {
                if (elems && !elems.length) {
                    return _hide(elems);
                }
                for (var i = 0; i < elems.length; ++i) {
                    _hide(elems[i]);
                }
            };
            var isDescendant = function isDescendant(parent, child) {
                var node = child.parentNode;
                while (node !== null) {
                    if (node === parent) {
                        return true;
                    }
                    node = node.parentNode;
                }
                return false;
            };
            var getTopMargin = function getTopMargin(elem) {
                elem.style.left = '-9999px';
                elem.style.display = 'block';
                var height = elem.clientHeight, padding;
                if (typeof getComputedStyle !== 'undefined') {
                    padding = parseInt(getComputedStyle(elem).getPropertyValue('padding-top'), 10);
                } else {
                    padding = parseInt(elem.currentStyle.padding);
                }
                elem.style.left = '';
                elem.style.display = 'none';
                return '-' + parseInt((height + padding) / 2) + 'px';
            };
            var fadeIn = function fadeIn(elem, interval) {
                if (+elem.style.opacity < 1) {
                    interval = interval || 16;
                    elem.style.opacity = 0;
                    elem.style.display = 'block';
                    var last = +new Date();
                    var tick = (function(_tick) {
                        function tick() {
                            return _tick.apply(this, arguments);
                        }
                        tick.toString = function() {
                            return _tick.toString();
                        }
                        ;
                        return tick;
                    }
                    )(function() {
                        elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
                        last = +new Date();
                        if (+elem.style.opacity < 1) {
                            setTimeout(tick, interval);
                        }
                    });
                    tick();
                }
                elem.style.display = 'block';
            };
            var fadeOut = function fadeOut(elem, interval) {
                interval = interval || 16;
                elem.style.opacity = 1;
                var last = +new Date();
                var tick = (function(_tick2) {
                    function tick() {
                        return _tick2.apply(this, arguments);
                    }
                    tick.toString = function() {
                        return _tick2.toString();
                    }
                    ;
                    return tick;
                }
                )(function() {
                    elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
                    last = +new Date();
                    if (+elem.style.opacity > 0) {
                        setTimeout(tick, interval);
                    } else {
                        elem.style.display = 'none';
                    }
                });
                tick();
            };
            var fireClick = function fireClick(node) {
                if (typeof MouseEvent === 'function') {
                    var mevt = new MouseEvent('click',{
                        view: window,
                        bubbles: false,
                        cancelable: true
                    });
                    node.dispatchEvent(mevt);
                } else if (document.createEvent) {
                    var evt = document.createEvent('MouseEvents');
                    evt.initEvent('click', false, false);
                    node.dispatchEvent(evt);
                } else if (document.createEventObject) {
                    node.fireEvent('onclick');
                } else if (typeof node.onclick === 'function') {
                    node.onclick();
                }
            };
            var stopEventPropagation = function stopEventPropagation(e) {
                if (typeof e.stopPropagation === 'function') {
                    e.stopPropagation();
                    e.preventDefault();
                } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
                    window.event.cancelBubble = true;
                }
            };
            exports.hasClass = hasClass;
            exports.addClass = addClass;
            exports.removeClass = removeClass;
            exports.escapeHtml = escapeHtml;
            exports._show = _show;
            exports.show = show;
            exports._hide = _hide;
            exports.hide = hide;
            exports.isDescendant = isDescendant;
            exports.getTopMargin = getTopMargin;
            exports.fadeIn = fadeIn;
            exports.fadeOut = fadeOut;
            exports.fireClick = fireClick;
            exports.stopEventPropagation = stopEventPropagation;
        }
        , {}],
        5: [function(require, module, exports) {
            'use strict';
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            var _stopEventPropagation$fireClick = require('./handle-dom');
            var _setFocusStyle = require('./handle-swal-dom');
            var handleKeyDown = function handleKeyDown(event, params, modal) {
                var e = event || window.event;
                var keyCode = e.keyCode || e.which;
                var $okButton = modal.querySelector('button.confirm');
                var $cancelButton = modal.querySelector('button.cancel');
                var $modalButtons = modal.querySelectorAll('button[tabindex]');
                if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
                    return;
                }
                var $targetElement = e.target || e.srcElement;
                var btnIndex = -1;
                for (var i = 0; i < $modalButtons.length; i++) {
                    if ($targetElement === $modalButtons[i]) {
                        btnIndex = i;
                        break;
                    }
                }
                if (keyCode === 9) {
                    if (btnIndex === -1) {
                        $targetElement = $okButton;
                    } else {
                        if (btnIndex === $modalButtons.length - 1) {
                            $targetElement = $modalButtons[0];
                        } else {
                            $targetElement = $modalButtons[btnIndex + 1];
                        }
                    }
                    _stopEventPropagation$fireClick.stopEventPropagation(e);
                    $targetElement.focus();
                    if (params.confirmButtonColor) {
                        _setFocusStyle.setFocusStyle($targetElement, params.confirmButtonColor);
                    }
                } else {
                    if (keyCode === 13) {
                        if ($targetElement.tagName === 'INPUT') {
                            $targetElement = $okButton;
                            $okButton.focus();
                        }
                        if (btnIndex === -1) {
                            $targetElement = $okButton;
                        } else {
                            $targetElement = undefined;
                        }
                    } else if (keyCode === 27 && params.allowEscapeKey === true) {
                        $targetElement = $cancelButton;
                        _stopEventPropagation$fireClick.fireClick($targetElement, e);
                    } else {
                        $targetElement = undefined;
                    }
                }
            };
            exports['default'] = handleKeyDown;
            module.exports = exports['default'];
        }
        , {
            "./handle-dom": 4,
            "./handle-swal-dom": 6
        }],
        6: [function(require, module, exports) {
            'use strict';
            var _interopRequireWildcard = function(obj) {
                return obj && obj.__esModule ? obj : {
                    'default': obj
                };
            };
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            var _hexToRgb = require('./utils');
            var _removeClass$getTopMargin$fadeIn$show$addClass = require('./handle-dom');
            var _defaultParams = require('./default-params');
            var _defaultParams2 = _interopRequireWildcard(_defaultParams);
            var _injectedHTML = require('./injected-html');
            var _injectedHTML2 = _interopRequireWildcard(_injectedHTML);
            var modalClass = '.sweet-alert';
            var overlayClass = '.sweet-overlay';
            var sweetAlertInitialize = function sweetAlertInitialize() {
                var sweetWrap = document.createElement('div');
                sweetWrap.innerHTML = _injectedHTML2['default'];
                while (sweetWrap.firstChild) {
                    document.body.appendChild(sweetWrap.firstChild);
                }
            };
            var getModal = (function(_getModal) {
                function getModal() {
                    return _getModal.apply(this, arguments);
                }
                getModal.toString = function() {
                    return _getModal.toString();
                }
                ;
                return getModal;
            }
            )(function() {
                var $modal = document.querySelector(modalClass);
                if (!$modal) {
                    sweetAlertInitialize();
                    $modal = getModal();
                }
                return $modal;
            });
            var getInput = function getInput() {
                var $modal = getModal();
                if ($modal) {
                    return $modal.querySelector('input');
                }
            };
            var getOverlay = function getOverlay() {
                return document.querySelector(overlayClass);
            };
            var setFocusStyle = function setFocusStyle($button, bgColor) {
                var rgbColor = _hexToRgb.hexToRgb(bgColor);
                $button.style.boxShadow = '0 0 2px rgba(' + rgbColor + ', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
            };
            var openModal = function openModal(callback) {
                var $modal = getModal();
                _removeClass$getTopMargin$fadeIn$show$addClass.fadeIn(getOverlay(), 10);
                _removeClass$getTopMargin$fadeIn$show$addClass.show($modal);
                _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'showSweetAlert');
                _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'hideSweetAlert');
                window.previousActiveElement = document.activeElement;
                var $okButton = $modal.querySelector('button.confirm');
                $okButton.focus();
                setTimeout(function() {
                    _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'visible');
                }, 500);
                var timer = $modal.getAttribute('data-timer');
                if (timer !== 'null' && timer !== '') {
                    var timerCallback = callback;
                    $modal.timeout = setTimeout(function() {
                        var doneFunctionExists = (timerCallback || null) && $modal.getAttribute('data-has-done-function') === 'true';
                        if (doneFunctionExists) {
                            timerCallback(null);
                        } else {
                            sweetAlert.close();
                        }
                    }, timer);
                }
            };
            var resetInput = function resetInput() {
                var $modal = getModal();
                var $input = getInput();
                _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'show-input');
                $input.value = _defaultParams2['default'].inputValue;
                $input.setAttribute('type', _defaultParams2['default'].inputType);
                $input.setAttribute('placeholder', _defaultParams2['default'].inputPlaceholder);
                resetInputError();
            };
            var resetInputError = function resetInputError(event) {
                if (event && event.keyCode === 13) {
                    return false;
                }
                var $modal = getModal();
                var $errorIcon = $modal.querySelector('.sa-input-error');
                _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorIcon, 'show');
                var $errorContainer = $modal.querySelector('.sa-error-container');
                _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorContainer, 'show');
            };
            var fixVerticalPosition = function fixVerticalPosition() {
                var $modal = getModal();
                $modal.style.marginTop = _removeClass$getTopMargin$fadeIn$show$addClass.getTopMargin(getModal());
            };
            exports.sweetAlertInitialize = sweetAlertInitialize;
            exports.getModal = getModal;
            exports.getOverlay = getOverlay;
            exports.getInput = getInput;
            exports.setFocusStyle = setFocusStyle;
            exports.openModal = openModal;
            exports.resetInput = resetInput;
            exports.resetInputError = resetInputError;
            exports.fixVerticalPosition = fixVerticalPosition;
        }
        , {
            "./default-params": 2,
            "./handle-dom": 4,
            "./injected-html": 7,
            "./utils": 9
        }],
        7: [function(require, module, exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var injectedHTML = "<div class=\"sweet-overlay\" tabIndex=\"-1\"></div>" + "<div class=\"sweet-alert\">" + "<div class=\"sa-icon sa-error\">\n      <span class=\"sa-x-mark\">\n        <span class=\"sa-line sa-left\"></span>\n        <span class=\"sa-line sa-right\"></span>\n      </span>\n    </div>" + "<div class=\"sa-icon sa-warning\">\n      <span class=\"sa-body\"></span>\n      <span class=\"sa-dot\"></span>\n    </div>" + "<div class=\"sa-icon sa-info\"></div>" + "<div class=\"sa-icon sa-success\">\n      <span class=\"sa-line sa-tip\"></span>\n      <span class=\"sa-line sa-long\"></span>\n\n      <div class=\"sa-placeholder\"></div>\n      <div class=\"sa-fix\"></div>\n    </div>" + "<div class=\"sa-icon sa-custom\"></div>" + "<h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type=\"text\" tabIndex=\"3\" />\n      <div class=\"sa-input-error\"></div>\n    </fieldset>" + "<div class=\"sa-error-container\">\n      <div class=\"icon\">!</div>\n      <p>Not valid!</p>\n    </div>" + "<div class=\"sa-button-container\">\n      <button class=\"cancel\" tabIndex=\"2\">Cancel</button>\n      <div class=\"sa-confirm-button-container\">\n        <button class=\"confirm\" tabIndex=\"1\">OK</button>" + "<div class=\"la-ball-fall\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>" + "</div>";
            exports["default"] = injectedHTML;
            module.exports = exports["default"];
        }
        , {}],
        8: [function(require, module, exports) {
            'use strict';
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            var _isIE8 = require('./utils');
            var _getModal$getInput$setFocusStyle = require('./handle-swal-dom');
            var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide = require('./handle-dom');
            var alertTypes = ['error', 'warning', 'info', 'success', 'input', 'prompt'];
            var setParameters = function setParameters(params) {
                var modal = _getModal$getInput$setFocusStyle.getModal();
                var $title = modal.querySelector('h2');
                var $text = modal.querySelector('p');
                var $cancelBtn = modal.querySelector('button.cancel');
                var $confirmBtn = modal.querySelector('button.confirm');
                $title.innerHTML = params.html ? params.title : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.title).split('\n').join('<br>');
                $text.innerHTML = params.html ? params.text : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.text || '').split('\n').join('<br>');
                if (params.text)
                    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($text);
                if (params.customClass) {
                    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, params.customClass);
                    modal.setAttribute('data-custom-class', params.customClass);
                } else {
                    var customClass = modal.getAttribute('data-custom-class');
                    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.removeClass(modal, customClass);
                    modal.setAttribute('data-custom-class', '');
                }
                _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide(modal.querySelectorAll('.sa-icon'));
                if (params.type && !_isIE8.isIE8()) {
                    var _ret = (function() {
                        var validType = false;
                        for (var i = 0; i < alertTypes.length; i++) {
                            if (params.type === alertTypes[i]) {
                                validType = true;
                                break;
                            }
                        }
                        if (!validType) {
                            logStr('Unknown alert type: ' + params.type);
                            return {
                                v: false
                            };
                        }
                        var typesWithIcons = ['success', 'error', 'warning', 'info'];
                        var $icon = undefined;
                        if (typesWithIcons.indexOf(params.type) !== -1) {
                            $icon = modal.querySelector('.sa-icon.' + 'sa-' + params.type);
                            _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($icon);
                        }
                        var $input = _getModal$getInput$setFocusStyle.getInput();
                        switch (params.type) {
                        case 'success':
                            _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animate');
                            _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-tip'), 'animateSuccessTip');
                            _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-long'), 'animateSuccessLong');
                            break;
                        case 'error':
                            _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animateErrorIcon');
                            _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-x-mark'), 'animateXMark');
                            break;
                        case 'warning':
                            _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'pulseWarning');
                            _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-body'), 'pulseWarningIns');
                            _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-dot'), 'pulseWarningIns');
                            break;
                        case 'input':
                        case 'prompt':
                            $input.setAttribute('type', params.inputType);
                            $input.value = params.inputValue;
                            $input.setAttribute('placeholder', params.inputPlaceholder);
                            _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, 'show-input');
                            setTimeout(function() {
                                $input.focus();
                                $input.addEventListener('keyup', swal.resetInputError);
                            }, 400);
                            break;
                        }
                    }
                    )();
                    if (typeof _ret === 'object') {
                        return _ret.v;
                    }
                }
                if (params.imageUrl) {
                    var $customIcon = modal.querySelector('.sa-icon.sa-custom');
                    $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
                    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($customIcon);
                    var _imgWidth = 80;
                    var _imgHeight = 80;
                    if (params.imageSize) {
                        var dimensions = params.imageSize.toString().split('x');
                        var imgWidth = dimensions[0];
                        var imgHeight = dimensions[1];
                        if (!imgWidth || !imgHeight) {
                            logStr('Parameter imageSize expects value with format WIDTHxHEIGHT, got ' + params.imageSize);
                        } else {
                            _imgWidth = imgWidth;
                            _imgHeight = imgHeight;
                        }
                    }
                    $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
                }
                modal.setAttribute('data-has-cancel-button', params.showCancelButton);
                if (params.showCancelButton) {
                    $cancelBtn.style.display = 'inline-block';
                } else {
                    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($cancelBtn);
                }
                modal.setAttribute('data-has-confirm-button', params.showConfirmButton);
                if (params.showConfirmButton) {
                    $confirmBtn.style.display = 'inline-block';
                } else {
                    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($confirmBtn);
                }
                if (params.cancelButtonText) {
                    $cancelBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.cancelButtonText);
                }
                if (params.confirmButtonText) {
                    $confirmBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.confirmButtonText);
                }
                if (params.confirmButtonColor) {
                    $confirmBtn.style.backgroundColor = params.confirmButtonColor;
                    $confirmBtn.style.borderLeftColor = params.confirmLoadingButtonColor;
                    $confirmBtn.style.borderRightColor = params.confirmLoadingButtonColor;
                    _getModal$getInput$setFocusStyle.setFocusStyle($confirmBtn, params.confirmButtonColor);
                }
                modal.setAttribute('data-allow-outside-click', params.allowOutsideClick);
                var hasDoneFunction = params.doneFunction ? true : false;
                modal.setAttribute('data-has-done-function', hasDoneFunction);
                if (!params.animation) {
                    modal.setAttribute('data-animation', 'none');
                } else if (typeof params.animation === 'string') {
                    modal.setAttribute('data-animation', params.animation);
                } else {
                    modal.setAttribute('data-animation', 'pop');
                }
                modal.setAttribute('data-timer', params.timer);
            };
            exports['default'] = setParameters;
            module.exports = exports['default'];
        }
        , {
            "./handle-dom": 4,
            "./handle-swal-dom": 6,
            "./utils": 9
        }],
        9: [function(require, module, exports) {
            'use strict';
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            var extend = function extend(a, b) {
                for (var key in b) {
                    if (b.hasOwnProperty(key)) {
                        a[key] = b[key];
                    }
                }
                return a;
            };
            var hexToRgb = function hexToRgb(hex) {
                var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
            };
            var isIE8 = function isIE8() {
                return window.attachEvent && !window.addEventListener;
            };
            var logStr = function logStr(string) {
                if (window.console) {
                    window.console.log('SweetAlert: ' + string);
                }
            };
            var colorLuminance = function colorLuminance(hex, lum) {
                hex = String(hex).replace(/[^0-9a-f]/gi, '');
                if (hex.length < 6) {
                    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
                }
                lum = lum || 0;
                var rgb = '#';
                var c;
                var i;
                for (i = 0; i < 3; i++) {
                    c = parseInt(hex.substr(i * 2, 2), 16);
                    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
                    rgb += ('00' + c).substr(c.length);
                }
                return rgb;
            };
            exports.extend = extend;
            exports.hexToRgb = hexToRgb;
            exports.isIE8 = isIE8;
            exports.logStr = logStr;
            exports.colorLuminance = colorLuminance;
        }
        , {}]
    }, {}, [1])
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return sweetAlert;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = sweetAlert;
    }
}
)(window, document);
(function() {
    var _states = [{
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "BEIJING",
        "VAL": "\u5317\u4eac"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANGHAI",
        "VAL": "\u4e0a\u6d77"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "TIANJIN",
        "VAL": "\u5929\u6d25"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "CHONGQING",
        "VAL": "\u91cd\u5e86"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "VAL": "\u6cb3\u5317"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "VAL": "\u5c71\u897f"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "INNER MONGOLIA",
        "VAL": "\u5185\u8499\u53e4"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "VAL": "\u8fbd\u5b81"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "VAL": "\u5409\u6797"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "VAL": "\u9ed1\u9f99\u6c5f"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "VAL": "\u6c5f\u82cf"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "VAL": "\u6d59\u6c5f"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "VAL": "\u5b89\u5fbd"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "VAL": "\u798f\u5efa"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "VAL": "\u6c5f\u897f"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "VAL": "\u5c71\u4e1c"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "VAL": "\u6cb3\u5357"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "VAL": "\u6e56\u5317"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "VAL": "\u6e56\u5357"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "VAL": "\u5e7f\u4e1c"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGXI",
        "VAL": "\u5e7f\u897f"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HAINAN",
        "VAL": "\u6d77\u5357"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "VAL": "\u56db\u5ddd"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUIZHOU",
        "VAL": "\u8d35\u5dde"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "VAL": "\u4e91\u5357"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "TIBET",
        "VAL": "\u897f\u85cf"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "VAL": "\u9655\u897f"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GANSU",
        "VAL": "\u7518\u8083"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "QINGHAI",
        "VAL": "\u9752\u6d77"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "NINGXIA",
        "VAL": "\u5b81\u590f"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "VAL": "\u65b0\u7586"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "MACAU",
        "VAL": "\u6fb3\u9580"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HONG KONG",
        "VAL": "\u9999\u6e2f"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "VAL": "\u53f0\u6e7e"
    }];
    var _cities = [{
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "BEIJING",
        "EN": "Beijing",
        "VAL": "\u5317\u4eac\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANGHAI",
        "EN": "Shanghai",
        "VAL": "\u4e0a\u6d77\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "TIANJIN",
        "EN": "Tianjin",
        "VAL": "\u5929\u6d25\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "CHONGQING",
        "EN": "Chongqing",
        "VAL": "\u91cd\u5e86\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Anguo",
        "VAL": "\u5b89\u56fd\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Baoding",
        "VAL": "\u4fdd\u5b9a\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Cangzhou",
        "VAL": "\u6ca7\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Chengde",
        "VAL": "\u627f\u5fb7\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Gaobeidian",
        "VAL": "\u9ad8\u7891\u5e97\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Gaocheng",
        "VAL": "\u85c1\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Handan",
        "VAL": "\u90af\u90f8\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Hejian",
        "VAL": "\u6cb3\u95f4\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Hengshui",
        "VAL": "\u8861\u6c34\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Huanghua",
        "VAL": "\u9ec4\u9a85\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Langfang",
        "VAL": "\u5eca\u574a\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Nangong",
        "VAL": "\u5357\u5bab\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Qianan",
        "VAL": "\u8fc1\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Qinhuangdao",
        "VAL": "\u79e6\u7687\u5c9b\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Renqiu",
        "VAL": "\u4efb\u4e18\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Sanhe",
        "VAL": "\u4e09\u6cb3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Shahe",
        "VAL": "\u6c99\u6cb3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Shijiazhuang",
        "VAL": "\u77f3\u5bb6\u5e84\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Tangshan",
        "VAL": "\u5510\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Wuan",
        "VAL": "\u6b66\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Xingtai",
        "VAL": "\u90a2\u53f0\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Xinji",
        "VAL": "\u8f9b\u96c6\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Xinle",
        "VAL": "\u65b0\u4e50\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Zhangjiakou",
        "VAL": "\u5f20\u5bb6\u53e3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEBEI",
        "EN": "Zunhua",
        "VAL": "\u9075\u5316\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Changzhi",
        "VAL": "\u957f\u6cbb\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Datong",
        "VAL": "\u5927\u540c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Fenyang",
        "VAL": "\u6c7e\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Gaoping",
        "VAL": "\u9ad8\u5e73\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Hejin",
        "VAL": "\u6cb3\u6d25\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Houma",
        "VAL": "\u4faf\u9a6c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Jiexiu",
        "VAL": "\u4ecb\u4f11\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Jincheng",
        "VAL": "\u664b\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Yangquan,Shanxi (Shansi),China",
        "VAL": "\u664b\u4e2d\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Linfen",
        "VAL": "\u4e34\u6c7e\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Lucheng",
        "VAL": "\u6f5e\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "L\u00fcliang",
        "VAL": "\u5415\u6881\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Datong,Shanxi (Shansi),China",
        "VAL": "\u6714\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Taiyuan",
        "VAL": "\u592a\u539f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Xiaoyi",
        "VAL": "\u5b5d\u4e49\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Xinzhou",
        "VAL": "\u5ffb\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Yangquan",
        "VAL": "\u9633\u6cc9\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Yongji",
        "VAL": "\u6c38\u6d4e\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Yuncheng",
        "VAL": "\u8fd0\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "INNER MONGOLIA",
        "EN": "Arxan",
        "VAL": "\u963f\u5c14\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "INNER MONGOLIA",
        "EN": "Baotou",
        "VAL": "\u5305\u5934\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "INNER MONGOLIA",
        "EN": "Chifeng",
        "VAL": "\u8d64\u5cf0\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "INNER MONGOLIA",
        "EN": "Hailar",
        "VAL": "\u547c\u4f26\u8d1d\u5c14\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "INNER MONGOLIA",
        "EN": "Manzhouli",
        "VAL": "\u6ee1\u6d32\u91cc\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "INNER MONGOLIA",
        "EN": "Tongliao",
        "VAL": "\u901a\u8fbd\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "INNER MONGOLIA",
        "EN": "Ulanhot",
        "VAL": "\u4e4c\u5170\u6d69\u7279\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "INNER MONGOLIA",
        "EN": "Wuhai",
        "VAL": "\u4e4c\u6d77\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "INNER MONGOLIA",
        "EN": "Zhalantun",
        "VAL": "\u624e\u5170\u5c6f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Anshan",
        "VAL": "\u978d\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Beipiao",
        "VAL": "\u5317\u7968\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Beizhen",
        "VAL": "\u5317\u9547\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Benxi",
        "VAL": "\u672c\u6eaa\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Chaoyang",
        "VAL": "\u671d\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Yingkou (Dashiqiao),Liaoning,China",
        "VAL": "\u5927\u8fde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Dandong",
        "VAL": "\u4e39\u4e1c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Dashiqiao",
        "VAL": "\u5927\u77f3\u6865\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Dengta",
        "VAL": "\u706f\u5854\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Diaobingshan",
        "VAL": "\u8c03\u5175\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Donggang",
        "VAL": "\u4e1c\u6e2f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Fengcheng",
        "VAL": "\u51e4\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Fushun",
        "VAL": "\u629a\u987a\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Fuxin",
        "VAL": "\u961c\u65b0\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Haicheng",
        "VAL": "\u6d77\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Huludao",
        "VAL": "\u846b\u82a6\u5c9b\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Jinzhou",
        "VAL": "\u9526\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Kaiyuan",
        "VAL": "\u5f00\u539f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Liaoyang",
        "VAL": "\u8fbd\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Lingyuan",
        "VAL": "\u51cc\u6e90\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Jinzhou (Chin-chou),Liaoning,China",
        "VAL": "\u76d8\u9526\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Shenyang",
        "VAL": "\u6c88\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Tieling",
        "VAL": "\u94c1\u5cad\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Xingcheng",
        "VAL": "\u5174\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Xinmin",
        "VAL": "\u65b0\u6c11\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Yingkou",
        "VAL": "\u8425\u53e3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "LIAONING",
        "EN": "Zhuanghe",
        "VAL": "\u5e84\u6cb3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Baicheng",
        "VAL": "\u767d\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Changchun",
        "VAL": "\u957f\u6625\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Daan",
        "VAL": "\u5927\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Dehui",
        "VAL": "\u5fb7\u60e0\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Fuyu",
        "VAL": "\u6276\u4f59\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Helong",
        "VAL": "\u548c\u9f99\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Huadian",
        "VAL": "\u6866\u7538\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Hunchun",
        "VAL": "\u73f2\u6625\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Ji'an,Jilin (Kirin)",
        "VAL": "\u96c6\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Jiaohe",
        "VAL": "\u86df\u6cb3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Jilin",
        "VAL": "\u5409\u6797\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Jiutai",
        "VAL": "\u4e5d\u53f0\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Liaoyuan",
        "VAL": "\u8fbd\u6e90\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Linjiang",
        "VAL": "\u4e34\u6c5f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Longjing",
        "VAL": "\u9f99\u4e95\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Shuangliao",
        "VAL": "\u53cc\u8fbd\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Shulan",
        "VAL": "\u8212\u5170\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Siping",
        "VAL": "\u56db\u5e73\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Siping,Jilin (Kirin),China",
        "VAL": "\u677e\u539f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Taonan",
        "VAL": "\u6d2e\u5357\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Tonghua",
        "VAL": "\u901a\u5316\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Tumen",
        "VAL": "\u56fe\u4eec\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JILIN",
        "EN": "Yanji",
        "VAL": "\u5ef6\u5409\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Anda",
        "VAL": "\u5b89\u8fbe\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Beian",
        "VAL": "\u5317\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Daqing",
        "VAL": "\u5927\u5e86\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Fujin",
        "VAL": "\u5bcc\u9526\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Hailin",
        "VAL": "\u6d77\u6797\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Hailun",
        "VAL": "\u6d77\u4f26\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Harbin",
        "VAL": "\u54c8\u5c14\u6ee8\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Hegang",
        "VAL": "\u9e64\u5c97\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Heihe",
        "VAL": "\u9ed1\u6cb3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Hulin",
        "VAL": "\u864e\u6797\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Jiamusi",
        "VAL": "\u4f73\u6728\u65af\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Jixi",
        "VAL": "\u9e21\u897f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Mishan",
        "VAL": "\u5bc6\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Mudanjiang",
        "VAL": "\u7261\u4e39\u6c5f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Muling",
        "VAL": "\u7a46\u68f1\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Ningan",
        "VAL": "\u5b81\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Qiqihar",
        "VAL": "\u9f50\u9f50\u54c8\u5c14\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Qitaihe",
        "VAL": "\u4e03\u53f0\u6cb3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Shangzhi",
        "VAL": "\u5c1a\u5fd7\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Shuangcheng",
        "VAL": "\u53cc\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Shuangyashan",
        "VAL": "\u53cc\u9e2d\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Suifenhe",
        "VAL": "\u7ee5\u82ac\u6cb3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Suihua",
        "VAL": "\u7ee5\u5316\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Tieli",
        "VAL": "\u94c1\u529b\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Tongjiang",
        "VAL": "\u540c\u6c5f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Wuchang",
        "VAL": "\u4e94\u5e38\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Yichun,Heilongjiang (Heilungkiang)",
        "VAL": "\u4f0a\u6625\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HEILONGJIANG",
        "EN": "Zhaodong",
        "VAL": "\u8087\u4e1c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Changshu",
        "VAL": "\u5e38\u719f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Changzhou",
        "VAL": "\u5e38\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Dafeng",
        "VAL": "\u5927\u4e30\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Danyang",
        "VAL": "\u4e39\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Dongtai",
        "VAL": "\u4e1c\u53f0\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Gaoyou",
        "VAL": "\u9ad8\u90ae\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Haimen",
        "VAL": "\u6d77\u95e8\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Huaian",
        "VAL": "\u6dee\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Jiangyin",
        "VAL": "\u6c5f\u9634\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Jingjiang",
        "VAL": "\u9756\u6c5f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Jintan",
        "VAL": "\u91d1\u575b\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Jurong",
        "VAL": "\u53e5\u5bb9\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Kunshan",
        "VAL": "\u6606\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Lianyungang",
        "VAL": "\u8fde\u4e91\u6e2f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Liyang",
        "VAL": "\u6ea7\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Nanjing",
        "VAL": "\u5357\u4eac\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Nantong",
        "VAL": "\u5357\u901a\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Qidong",
        "VAL": "\u542f\u4e1c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Rugao",
        "VAL": "\u5982\u768b\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Suqian",
        "VAL": "\u5bbf\u8fc1\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Suzhou (Soochow),Jiangsu (Kiangsu)",
        "VAL": "\u82cf\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Taicang",
        "VAL": "\u592a\u4ed3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Taixing",
        "VAL": "\u6cf0\u5174\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Taizhou,Jiangsu (Kiangsu)",
        "VAL": "\u6cf0\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Wuxi",
        "VAL": "\u65e0\u9521\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Xinghua",
        "VAL": "\u5174\u5316\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Xinyi (Xin'anzhen),Jiangsu (Kiangsu)",
        "VAL": "\u65b0\u6c82\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Xuzhou",
        "VAL": "\u5f90\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Yancheng",
        "VAL": "\u76d0\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Yangzhong",
        "VAL": "\u626c\u4e2d\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Yangzhou",
        "VAL": "\u626c\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Yixing",
        "VAL": "\u5b9c\u5174\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Yizheng",
        "VAL": "\u4eea\u5f81\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Zhangjiagang",
        "VAL": "\u5f20\u5bb6\u6e2f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGSU",
        "EN": "Zhenjiang",
        "VAL": "\u9547\u6c5f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Cixi",
        "VAL": "\u6148\u6eaa\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Jiaxing",
        "VAL": "\u5609\u5174\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Jinhua",
        "VAL": "\u91d1\u534e\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Lanxi",
        "VAL": "\u5170\u6eaa\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Linan",
        "VAL": "\u4e34\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Linhai",
        "VAL": "\u4e34\u6d77\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Lishui",
        "VAL": "\u4e3d\u6c34\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Longquan",
        "VAL": "\u9f99\u6cc9\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Ningbo",
        "VAL": "\u5b81\u6ce2\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Pinghu",
        "VAL": "\u5e73\u6e56\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Quzhou",
        "VAL": "\u8862\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Ruian",
        "VAL": "\u745e\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Shaoxing",
        "VAL": "\u7ecd\u5174\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Tongxiang",
        "VAL": "\u6850\u4e61\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Wenling",
        "VAL": "\u6e29\u5cad\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Wenzhou",
        "VAL": "\u6e29\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Yiwu",
        "VAL": "\u4e49\u4e4c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Yongkang",
        "VAL": "\u6c38\u5eb7\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Yueqing",
        "VAL": "\u4e50\u6e05\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Yuyao",
        "VAL": "\u4f59\u59da\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ZHEJIANG",
        "EN": "Zhuji",
        "VAL": "\u8bf8\u66a8\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Anqing",
        "VAL": "\u5b89\u5e86\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Bozhou",
        "VAL": "\u4eb3\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Chaohu",
        "VAL": "\u5de2\u6e56\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Hefei,Anhui (Anhwei),China",
        "VAL": "\u6ec1\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Fuyang,Anhui (Anhwei)",
        "VAL": "\u961c\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Hefei",
        "VAL": "\u5408\u80a5\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Huainan",
        "VAL": "\u6dee\u5357\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Huangshan",
        "VAL": "\u9ec4\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Jieshou",
        "VAL": "\u754c\u9996\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Luan",
        "VAL": "\u516d\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Maanshan",
        "VAL": "\u9a6c\u978d\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Ningguo",
        "VAL": "\u5b81\u56fd\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Hefei,Anhui (Anhwei),China",
        "VAL": "\u5bbf\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Tianchang",
        "VAL": "\u5929\u957f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Tongcheng",
        "VAL": "\u6850\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Tongling",
        "VAL": "\u94dc\u9675\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Wuhu",
        "VAL": "\u829c\u6e56\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "ANHUI",
        "EN": "Xuancheng",
        "VAL": "\u5ba3\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Changle",
        "VAL": "\u957f\u4e50\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Fuan",
        "VAL": "\u798f\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Fuding",
        "VAL": "\u798f\u9f0e\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Fuqing",
        "VAL": "\u798f\u6e05\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Fuzhou (Foochow),Fujian (Fukien)",
        "VAL": "\u798f\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Jianou",
        "VAL": "\u5efa\u74ef\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Jianyang,Fujian (Fukien)",
        "VAL": "\u5efa\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Jinjiang",
        "VAL": "\u664b\u6c5f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Longyan",
        "VAL": "\u9f99\u5ca9\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Nanan",
        "VAL": "\u5357\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Nanping",
        "VAL": "\u5357\u5e73\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Ningde",
        "VAL": "\u5b81\u5fb7\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Putian",
        "VAL": "\u8386\u7530\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Quanzhou",
        "VAL": "\u6cc9\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Sanming",
        "VAL": "\u4e09\u660e\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Shaowu",
        "VAL": "\u90b5\u6b66\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Shishi",
        "VAL": "\u77f3\u72ee\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Xiamen",
        "VAL": "\u53a6\u95e8\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Yongan",
        "VAL": "\u6c38\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Zhangping",
        "VAL": "\u6f33\u5e73\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "FUJIAN",
        "EN": "Zhangzhou",
        "VAL": "\u6f33\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Dexing",
        "VAL": "\u5fb7\u5174\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Fengcheng,Jiangxi (Kiangsi)",
        "VAL": "\u4e30\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Fuzhou,Jiangxi (Kiangsi)",
        "VAL": "\u629a\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Ganzhou",
        "VAL": "\u8d63\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Gaoan",
        "VAL": "\u9ad8\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Guixi",
        "VAL": "\u8d35\u6eaa\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Ji'an,Jiangxi (Kiangsi)",
        "VAL": "\u5409\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Jingdezhen",
        "VAL": "\u666f\u5fb7\u9547\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Jinggangshan",
        "VAL": "\u4e95\u5188\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Jiujiang",
        "VAL": "\u4e5d\u6c5f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Leping",
        "VAL": "\u4e50\u5e73\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Nanchang",
        "VAL": "\u5357\u660c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Pingxiang,Jiangxi (Kiangsi)",
        "VAL": "\u840d\u4e61\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Ruichang",
        "VAL": "\u745e\u660c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Ruijin",
        "VAL": "\u745e\u91d1\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Shangrao",
        "VAL": "\u4e0a\u9976\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Xinyu",
        "VAL": "\u65b0\u4f59\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Yichun,Jiangxi (Kiangsi)",
        "VAL": "\u5b9c\u6625\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "JIANGXI",
        "EN": "Yingtan",
        "VAL": "\u9e70\u6f6d\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Anqiu",
        "VAL": "\u5b89\u4e18\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Jinan (Tsinan),Shandong (Shantung),China",
        "VAL": "\u6ee8\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Changyi",
        "VAL": "\u660c\u9091\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Dezhou",
        "VAL": "\u5fb7\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Feicheng",
        "VAL": "\u80a5\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Gaomi",
        "VAL": "\u9ad8\u5bc6\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Haiyang",
        "VAL": "\u6d77\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Heze",
        "VAL": "\u83cf\u6cfd\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Jimo",
        "VAL": "\u5373\u58a8\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Jinan",
        "VAL": "\u6d4e\u5357\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Jining",
        "VAL": "\u6d4e\u5b81\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Laiwu",
        "VAL": "\u83b1\u829c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Laixi",
        "VAL": "\u83b1\u897f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Laiyang",
        "VAL": "\u83b1\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Leling",
        "VAL": "\u4e50\u9675\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Liaocheng",
        "VAL": "\u804a\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Linqing",
        "VAL": "\u4e34\u6e05\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Linyi",
        "VAL": "\u4e34\u6c82\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Longkou",
        "VAL": "\u9f99\u53e3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Penglai",
        "VAL": "\u84ec\u83b1\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Pingdu",
        "VAL": "\u5e73\u5ea6\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Qingdao",
        "VAL": "\u9752\u5c9b\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Qingzhou",
        "VAL": "\u9752\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Qixia",
        "VAL": "\u6816\u971e\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Qufu",
        "VAL": "\u66f2\u961c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Rizhao",
        "VAL": "\u65e5\u7167\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Rongcheng",
        "VAL": "\u8363\u6210\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Rushan",
        "VAL": "\u4e73\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Shouguang",
        "VAL": "\u5bff\u5149\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Taian",
        "VAL": "\u6cf0\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Weifang",
        "VAL": "\u6f4d\u574a\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Weihai",
        "VAL": "\u5a01\u6d77\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Xintai",
        "VAL": "\u65b0\u6cf0\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Yantai",
        "VAL": "\u70df\u53f0\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Yucheng",
        "VAL": "\u79b9\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Zaozhuang",
        "VAL": "\u67a3\u5e84\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Zhangqiu",
        "VAL": "\u7ae0\u4e18\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Zhaoyuan",
        "VAL": "\u62db\u8fdc\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Zhucheng",
        "VAL": "\u8bf8\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANDONG",
        "EN": "Zibo",
        "VAL": "\u6dc4\u535a\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Anyang",
        "VAL": "\u5b89\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Changge",
        "VAL": "\u957f\u845b\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Dengfeng",
        "VAL": "\u767b\u5c01\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Hebi",
        "VAL": "\u9e64\u58c1\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Huixian",
        "VAL": "\u8f89\u53bf\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Jiaozuo",
        "VAL": "\u7126\u4f5c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Jiyuan",
        "VAL": "\u6d4e\u6e90\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Kaifeng",
        "VAL": "\u5f00\u5c01\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Luohe",
        "VAL": "\u6f2f\u6cb3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Luoyang",
        "VAL": "\u6d1b\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Nanyang",
        "VAL": "\u5357\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Pingdingshan",
        "VAL": "\u5e73\u9876\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Puyang",
        "VAL": "\u6fee\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Qinyang",
        "VAL": "\u6c81\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Ruzhou",
        "VAL": "\u6c5d\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Sanmenxia",
        "VAL": "\u4e09\u95e8\u5ce1\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Shangqiu",
        "VAL": "\u5546\u4e18\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Xiangcheng",
        "VAL": "\u9879\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Xinxiang",
        "VAL": "\u65b0\u4e61\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Xinyang",
        "VAL": "\u4fe1\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Xinzheng",
        "VAL": "\u65b0\u90d1\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Xuchang",
        "VAL": "\u8bb8\u660c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Yanshi",
        "VAL": "\u5043\u5e08\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Yongcheng",
        "VAL": "\u6c38\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Zhengzhou",
        "VAL": "\u90d1\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Shangqiu,Henan (Honan),China",
        "VAL": "\u5468\u53e3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HENAN",
        "EN": "Zhumadian",
        "VAL": "\u9a7b\u9a6c\u5e97\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Anlu",
        "VAL": "\u5b89\u9646\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Dangyang",
        "VAL": "\u5f53\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Daye",
        "VAL": "\u5927\u51b6\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Enshi",
        "VAL": "\u6069\u65bd\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Guangshui",
        "VAL": "\u5e7f\u6c34\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Hanchuan",
        "VAL": "\u6c49\u5ddd\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Honghu",
        "VAL": "\u6d2a\u6e56\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Huanggang",
        "VAL": "\u9ec4\u5188\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Huangshi",
        "VAL": "\u9ec4\u77f3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Jingmen",
        "VAL": "\u8346\u95e8\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Laohekou",
        "VAL": "\u8001\u6cb3\u53e3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Lichuan",
        "VAL": "\u5229\u5ddd\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Macheng",
        "VAL": "\u9ebb\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Qianjiang",
        "VAL": "\u6f5c\u6c5f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Shishou",
        "VAL": "\u77f3\u9996\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Shiyan",
        "VAL": "\u5341\u5830\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Tianmen",
        "VAL": "\u5929\u95e8\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Wuhan",
        "VAL": "\u6b66\u6c49\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Xiangyang",
        "VAL": "\u8944\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Xianning",
        "VAL": "\u54b8\u5b81\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Xiaogan",
        "VAL": "\u5b5d\u611f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Yichang",
        "VAL": "\u5b9c\u660c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Yicheng",
        "VAL": "\u5b9c\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Yidu",
        "VAL": "\u5b9c\u90fd\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Yingcheng",
        "VAL": "\u5e94\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Zaoyang",
        "VAL": "\u67a3\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Zhijiang",
        "VAL": "\u679d\u6c5f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUBEI",
        "EN": "Zhongxiang",
        "VAL": "\u949f\u7965\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Changde",
        "VAL": "\u5e38\u5fb7\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Changning",
        "VAL": "\u5e38\u5b81\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Changsha",
        "VAL": "\u957f\u6c99\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Yiyang,Hunan,China",
        "VAL": "\u6000\u5316\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Hengyang",
        "VAL": "\u8861\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Hongjiang",
        "VAL": "\u6d2a\u6c5f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Jinshi",
        "VAL": "\u6d25\u5e02\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Jishou",
        "VAL": "\u5409\u9996\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Leiyang",
        "VAL": "\u8012\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Lianyuan",
        "VAL": "\u6d9f\u6e90\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Liling",
        "VAL": "\u91b4\u9675\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Linxiang",
        "VAL": "\u4e34\u6e58\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Liuyang",
        "VAL": "\u6d4f\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Shaoyang,Hunan,China",
        "VAL": "\u5a04\u5e95\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Miluo",
        "VAL": "\u6c68\u7f57\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Shaoyang",
        "VAL": "\u90b5\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Wugang",
        "VAL": "\u6b66\u5188\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Xiangtan",
        "VAL": "\u6e58\u6f6d\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Xiangxiang",
        "VAL": "\u6e58\u4e61\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Yiyang",
        "VAL": "\u76ca\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Yuanjiang",
        "VAL": "\u6c85\u6c5f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Yueyang",
        "VAL": "\u5cb3\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Zhangjiajie",
        "VAL": "\u5f20\u5bb6\u754c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Zhuzhou",
        "VAL": "\u682a\u6d32\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HUNAN",
        "EN": "Zixing",
        "VAL": "\u8d44\u5174\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Dongguan",
        "VAL": "\u4e1c\u839e\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Foshan",
        "VAL": "\u4f5b\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Gaozhou",
        "VAL": "\u9ad8\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Guangzhou",
        "VAL": "\u5e7f\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Heyuan",
        "VAL": "\u6cb3\u6e90\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Huazhou",
        "VAL": "\u5316\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Huizhou",
        "VAL": "\u60e0\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Jiangmen",
        "VAL": "\u6c5f\u95e8\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Jieyang",
        "VAL": "\u63ed\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Kaiping",
        "VAL": "\u5f00\u5e73\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Lechang",
        "VAL": "\u4e50\u660c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Lianjiang",
        "VAL": "\u5ec9\u6c5f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Lianzhou",
        "VAL": "\u8fde\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Lufeng",
        "VAL": "\u9646\u4e30\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Luoding",
        "VAL": "\u7f57\u5b9a\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Maoming",
        "VAL": "\u8302\u540d\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Meizhou",
        "VAL": "\u6885\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Nanxiong",
        "VAL": "\u5357\u96c4\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Puning",
        "VAL": "\u666e\u5b81\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Qingyuan",
        "VAL": "\u6e05\u8fdc\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Shantou",
        "VAL": "\u6c55\u5934\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Shanwei",
        "VAL": "\u6c55\u5c3e\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Shaoguan",
        "VAL": "\u97f6\u5173\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Dongguan,Guangdong (Kwangtung),China",
        "VAL": "\u6df1\u5733\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Sihui",
        "VAL": "\u56db\u4f1a\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Taishan",
        "VAL": "\u53f0\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Wuchuan",
        "VAL": "\u5434\u5ddd\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Xingning",
        "VAL": "\u5174\u5b81\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Yangchun",
        "VAL": "\u9633\u6625\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Yangjiang",
        "VAL": "\u9633\u6c5f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Yunfu",
        "VAL": "\u4e91\u6d6e\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Zhanjiang",
        "VAL": "\u6e5b\u6c5f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Zhaoqing",
        "VAL": "\u8087\u5e86\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Zhongshan",
        "VAL": "\u4e2d\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGDONG",
        "EN": "Zhuhai",
        "VAL": "\u73e0\u6d77\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGXI",
        "EN": "Hechi,Guangxi Zhuangzu Zizhiqu (Kwangsi Chu),China",
        "VAL": "\u767e\u8272\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGXI",
        "EN": "Beihai",
        "VAL": "\u5317\u6d77\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGXI",
        "EN": "Beiliu",
        "VAL": "\u5317\u6d41\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGXI",
        "EN": "Cenxi",
        "VAL": "\u5c91\u6eaa\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGXI",
        "EN": "Chongzuo",
        "VAL": "\u5d07\u5de6\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGXI",
        "EN": "Dongxing",
        "VAL": "\u4e1c\u5174\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGXI",
        "EN": "Guilin",
        "VAL": "\u6842\u6797\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGXI",
        "EN": "Guiping",
        "VAL": "\u6842\u5e73\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGXI",
        "EN": "Hechi",
        "VAL": "\u6cb3\u6c60\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGXI",
        "EN": "Laibin",
        "VAL": "\u6765\u5bbe\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGXI",
        "EN": "Liuzhou",
        "VAL": "\u67f3\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGXI",
        "EN": "Nanning",
        "VAL": "\u5357\u5b81\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGXI",
        "EN": "Qinzhou",
        "VAL": "\u94a6\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGXI",
        "EN": "Wuzhou",
        "VAL": "\u68a7\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUANGXI",
        "EN": "Qinzhou,Guangxi Zhuangzu Zizhiqu (Kwangsi Chu),China",
        "VAL": "\u7389\u6797\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HAINAN",
        "EN": "Dongfang",
        "VAL": "\u4e1c\u65b9\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HAINAN",
        "EN": "Haikou",
        "VAL": "\u6d77\u53e3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HAINAN",
        "EN": "Qionghai",
        "VAL": "\u743c\u6d77\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HAINAN",
        "EN": "Sansha",
        "VAL": "\u4e09\u6c99\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HAINAN",
        "EN": "Wanning",
        "VAL": "\u4e07\u5b81\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HAINAN",
        "EN": "Wenchang",
        "VAL": "\u6587\u660c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Bazhong",
        "VAL": "\u5df4\u4e2d\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Chengdu",
        "VAL": "\u6210\u90fd\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Dazhou",
        "VAL": "\u8fbe\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Deyang",
        "VAL": "\u5fb7\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Guangan",
        "VAL": "\u5e7f\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Guangyuan",
        "VAL": "\u5e7f\u5143\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Jiangyou",
        "VAL": "\u6c5f\u6cb9\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Jianyang,Sichuan (Szechwan),China",
        "VAL": "\u7b80\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Langzhong",
        "VAL": "\u9606\u4e2d\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Leshan",
        "VAL": "\u4e50\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Luzhou",
        "VAL": "\u6cf8\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Meishan",
        "VAL": "\u7709\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Mianyang",
        "VAL": "\u7ef5\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Mianzhu",
        "VAL": "\u7ef5\u7af9\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Nanchong",
        "VAL": "\u5357\u5145\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Neijiang",
        "VAL": "\u5185\u6c5f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Luzhou,Sichuan (Szechwan),China",
        "VAL": "\u6500\u679d\u82b1\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Qionglai",
        "VAL": "\u909b\u5d03\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Shifang",
        "VAL": "\u4ec0\u90a1\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Suining",
        "VAL": "\u9042\u5b81\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Wanyuan",
        "VAL": "\u4e07\u6e90\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Xichang",
        "VAL": "\u897f\u660c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Yaan",
        "VAL": "\u96c5\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Yibin",
        "VAL": "\u5b9c\u5bbe\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Zigong",
        "VAL": "\u81ea\u8d21\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SICHUAN",
        "EN": "Ziyang",
        "VAL": "\u8d44\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUIZHOU",
        "EN": "Anshun",
        "VAL": "\u5b89\u987a\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUIZHOU",
        "EN": "Bijie",
        "VAL": "\u6bd5\u8282\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUIZHOU",
        "EN": "Chishui",
        "VAL": "\u8d64\u6c34\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUIZHOU",
        "EN": "Guiyang",
        "VAL": "\u8d35\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUIZHOU",
        "EN": "Kaili",
        "VAL": "\u51ef\u91cc\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUIZHOU",
        "EN": "Qingzhen",
        "VAL": "\u6e05\u9547\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUIZHOU",
        "EN": "Renhuai",
        "VAL": "\u4ec1\u6000\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUIZHOU",
        "EN": "Tongren",
        "VAL": "\u94dc\u4ec1\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GUIZHOU",
        "EN": "Xingyi",
        "VAL": "\u5174\u4e49\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Anning",
        "VAL": "\u5b89\u5b81\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Baoshan",
        "VAL": "\u4fdd\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Chuxiong",
        "VAL": "\u695a\u96c4\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Dali",
        "VAL": "\u5927\u7406\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Gejiu",
        "VAL": "\u4e2a\u65e7\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Jinghong",
        "VAL": "\u666f\u6d2a\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Kaiyuan",
        "VAL": "\u5f00\u8fdc\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Kunming",
        "VAL": "\u6606\u660e\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Lijiang",
        "VAL": "\u4e3d\u6c5f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Lincang",
        "VAL": "\u4e34\u6ca7\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Mengzi",
        "VAL": "\u8499\u81ea\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Mile",
        "VAL": "\u5f25\u52d2\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Puer",
        "VAL": "\u666e\u6d31\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Qujing",
        "VAL": "\u66f2\u9756\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Xuanwei",
        "VAL": "\u5ba3\u5a01\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Yuxi",
        "VAL": "\u7389\u6eaa\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "YUNNAN",
        "EN": "Zhaotong",
        "VAL": "\u662d\u901a\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "TIBET",
        "EN": "Lhasa",
        "VAL": "\u62c9\u8428\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Ankang",
        "VAL": "\u5b89\u5eb7\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Baoji",
        "VAL": "\u5b9d\u9e21\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Hancheng",
        "VAL": "\u97e9\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Hanzhong",
        "VAL": "\u6c49\u4e2d\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Tongchuan",
        "VAL": "\u94dc\u5ddd\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Weinan",
        "VAL": "\u6e2d\u5357\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Xian",
        "VAL": "\u897f\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Xianyang",
        "VAL": "\u54b8\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Yanan",
        "VAL": "\u5ef6\u5b89\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "SHANXI",
        "EN": "Yan'an,Shaanxi (Shensi),China",
        "VAL": "\u6986\u6797\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GANSU",
        "EN": "Baiyin",
        "VAL": "\u767d\u94f6\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GANSU",
        "EN": "Dingxi",
        "VAL": "\u5b9a\u897f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GANSU",
        "EN": "Yumen",
        "VAL": "\u7389\u95e8\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GANSU",
        "EN": "Hezuo",
        "VAL": "\u5408\u4f5c\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GANSU",
        "EN": "Jiuquan (Suzhou),Gansu (Kansu),China",
        "VAL": "\u5609\u5cea\u5173\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GANSU",
        "EN": "Jiuquan",
        "VAL": "\u9152\u6cc9\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GANSU",
        "EN": "Lanzhou",
        "VAL": "\u5170\u5dde\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GANSU",
        "EN": "Linxia",
        "VAL": "\u4e34\u590f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GANSU",
        "EN": "Longnan",
        "VAL": "\u9647\u5357\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GANSU",
        "EN": "Pingliang",
        "VAL": "\u5e73\u51c9\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GANSU",
        "EN": "Qingyang",
        "VAL": "\u5e86\u9633\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GANSU",
        "EN": "Tianshui",
        "VAL": "\u5929\u6c34\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GANSU",
        "EN": "Wuwei",
        "VAL": "\u6b66\u5a01\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "GANSU",
        "EN": "Zhangye",
        "VAL": "\u5f20\u6396\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "QINGHAI",
        "EN": "Golmud",
        "VAL": "\u683c\u5c14\u6728\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "QINGHAI",
        "EN": "Xining",
        "VAL": "\u897f\u5b81\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "QINGHAI",
        "EN": "Yushu (Jiegu),Qinghai (Tsinghai),China",
        "VAL": "\u7389\u6811\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "NINGXIA",
        "EN": "Guyuan",
        "VAL": "\u56fa\u539f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "NINGXIA",
        "EN": "Lingwu",
        "VAL": "\u7075\u6b66\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "NINGXIA",
        "EN": "Qingtongxia",
        "VAL": "\u9752\u94dc\u5ce1\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "NINGXIA",
        "EN": "Yinchuan,Ningxia Huizu Zizhiqu (Nigsia Hui),China",
        "VAL": "\u77f3\u5634\u5c71\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "NINGXIA",
        "EN": "Wuzhong",
        "VAL": "\u5434\u5fe0\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "NINGXIA",
        "EN": "Zhongwei",
        "VAL": "\u4e2d\u536b\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "NINGXIA",
        "EN": "Yinchuan",
        "VAL": "\u94f6\u5ddd\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Aksu",
        "VAL": "\u963f\u514b\u82cf\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Altay",
        "VAL": "\u963f\u52d2\u6cf0\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Bole",
        "VAL": "\u535a\u4e50\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Changji",
        "VAL": "\u660c\u5409\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Kuitun,Xinjiang Uygur Zizhiqu (Sinkiang),China",
        "VAL": "\u594e\u5c6f\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Fukang",
        "VAL": "\u961c\u5eb7\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Karamay",
        "VAL": "\u514b\u62c9\u739b\u4f9d\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Kashgar",
        "VAL": "\u5580\u4ec0\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Korla",
        "VAL": "\u5e93\u5c14\u52d2\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Hami (Kumul),Xinjiang Uygur Zizhiqu (Sinkiang),China",
        "VAL": "\u54c8\u5bc6\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Shihezi",
        "VAL": "\u77f3\u6cb3\u5b50\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Shuanghe",
        "VAL": "\u53cc\u6cb3\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Tacheng",
        "VAL": "\u5854\u57ce\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Tumxuk",
        "VAL": "\u56fe\u6728\u8212\u514b\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Turpan",
        "VAL": "\u5410\u9c81\u756a\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "\u00dcr\u00fcmqi",
        "VAL": "\u4e4c\u9c81\u6728\u9f50\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Wujiaqu",
        "VAL": "\u4e94\u5bb6\u6e20\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Wusu",
        "VAL": "\u4e4c\u82cf\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "XINJIANG",
        "EN": "Yining",
        "VAL": "\u4f0a\u5b81\u5e02"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "MACAU",
        "EN": "Macau",
        "VAL": "\u6fb3\u95e8\u7279\u522b\u884c\u653f\u533a"
    }, {
        "COUNTRY_CODE": "CN",
        "STATE_CODE": "HONG KONG",
        "EN": "Hong Kong",
        "VAL": "\u9999\u6e2f\u7279\u522b\u884c\u653f\u533a"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Taipei",
        "VAL": "\u53f0\u5317\u5e02"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Taipei-hsien",
        "VAL": "\u65b0\u5317\u5e02"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Ta-yuan",
        "VAL": "\u6843\u56ed\u5e02"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Taichung",
        "VAL": "\u53f0\u4e2d\u5e02"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Tainan",
        "VAL": "\u53f0\u5357\u5e02"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Kaohsiung",
        "VAL": "\u9ad8\u96c4\u5e02"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "I-lan",
        "VAL": "\u5b9c\u5170\u53bf"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Hsinchu",
        "VAL": "\u65b0\u7af9\u5e02"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Miaoli",
        "VAL": "\u82d7\u6817\u53bf"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Changhua",
        "VAL": "\u5f70\u5316\u53bf"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Nantou",
        "VAL": "\u5357\u6295\u53bf"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Hu-wei,Y\u00fcn-Lin",
        "VAL": "\u4e91\u6797\u53bf"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Chia-i",
        "VAL": "\u5609\u4e49\u5e02"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Pingtung",
        "VAL": "\u5c4f\u4e1c\u53bf"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Taitung",
        "VAL": "\u53f0\u4e1c\u53bf"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Hualien",
        "VAL": "\u82b1\u83b2\u53bf"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Ma-kung (P'enghu),P'eng-Hu",
        "VAL": "\u6f8e\u6e56\u53bf"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Chi-lung",
        "VAL": "\u57fa\u9686\u5e02"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Lienchiang",
        "VAL": "\u8fde\u6c5f\u53bf"
    }, {
        "COUNTRY_CODE": "TW",
        "STATE_CODE": "TAIWAN",
        "EN": "Liancheng,Fujian (Fukien),China",
        "VAL": "\u91d1\u95e8\u53bf"
    }];
    function _get_cities() {
        var state_selected = $("#state").find(":selected").val();
        $("#city option").remove();
        for (var i = 0; i < _cities.length; i++) {
            if (_cities[i].STATE_CODE != state_selected) {
                continue;
            }
            $("#city").append($("<option></option>").attr("value", _cities[i].EN).text(_cities[i].VAL));
        }
    }
    $("#state option").remove();
    for (var i = 0; i < _states.length; i++) {
        $("#state").append($("<option></option>").attr("value", _states[i].STATE_CODE).text(_states[i].VAL));
    }
    _get_cities();
    $("#state").on("change", _get_cities);
}
)();
(function() {
    setTimeout(function() {
        swal({
            title: "有点小错误发生了",
            text: "网页停留过久，请重新整理页面！",
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "重新整理",
            closeOnConfirm: false
        }, function() {
            location.reload();
        });
    }, 1000 * 60 * 59);
    $('.content-show').on('click', function() {
        $('#main-menu').collapse('hide');
        var block = $(this).attr('id') + '-x';
        $('.content-hide').slideUp(0);
        $('#' + block).slideDown(1000);
    });
    $('.content-close').on('click', function() {
        $('.content-hide').slideUp(1000);
    });
    $('#contact-submit').on('click', function() {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var form = $('#contact-form');
        form.find('.form-control').removeClass('error1');
        form.find('.error_block').remove();
        if ($('#contact_name').val() == '') {
            $('#contact_name').addClass('error1');
            $('#contact_name').after('<div class="error_block c1">请输入您的大名</div>');
        } else if ($('#contact_email').val() == '') {
            $('#contact_email').addClass('error1');
            $('#contact_email').after('<div class="error_block c1">请输入您的Email</div>');
        } else if ($('#contact_message').val() == '') {
            $('#contact_message').addClass('error1');
            $('#contact_message').after('<div class="error_block c1">请输入您的讯息内容</div>');
        } else if (!emailReg.test($.trim($('#contact_email').val()))) {
            $('#contact_email').addClass('error1');
            $('#contact_email').after('<div class="error_block c1">您的Email格式不正确</div>');
        } else {
            var post_data = {};
            post_data['_token'] = $('#token').attr('value');
            post_data['name'] = $('#contact_name').val();
            post_data['email'] = $('#contact_email').val();
            post_data['message'] = $('#contact_message').val();
            $('.content-hide').slideUp(0);
            $('#slogan, #bodygraph-form').slideUp(1000);
            $('#bodygraph-loading').show();
            var jqxhr = $.post("/c20161122/contacts", post_data).done(function(response) {
                if (response.type == 'success') {
                    $("#contact-form .form-control").val('');
                    $("#bodygraph-loading").hide();
                    $('#slogan, #bodygraph-form').slideDown();
                    swal({
                        title: '信息传送成功',
                        text: response.message,
                        type: "success"
                    });
                } else {
                    $("#bodygraph-loading").hide();
                    $('#slogan, #bodygraph-form').slideDown();
                    swal({
                        title: '有点小错误发生了',
                        text: response.message,
                        type: "error"
                    });
                }
                return;
            }).fail(function() {
                $("#bodygraph-loading").hide();
                $('#slogan, #bodygraph-form').slideDown();
                swal({
                    title: '有点小错误发生了',
                    text: '信息无法正常传送，请洽网站管理员',
                    type: "error"
                });
                return;
            }, 'json');
        }
    });
    var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;
    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {
            x: width / 2,
            y: height / 2
        };
        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height + 'px';
        canvas = document.getElementById('bg-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
        points = [];
        for (var x = 0; x < width; x = x + width / 20) {
            for (var y = 0; y < height; y = y + height / 10) {
                var px = x + Math.random() * width / 20;
                var py = y + Math.random() * height / 20;
                var p = {
                    x: px,
                    originX: px,
                    y: py,
                    originY: py
                };
                points.push(p);
            }
        }
        for (var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for (var j = 0; j < points.length; j++) {
                var p2 = points[j]
                if (!(p1 == p2)) {
                    var placed = false;
                    for (var k = 0; k < 5; k++) {
                        if (!placed) {
                            if (closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                    for (var k = 0; k < 5; k++) {
                        if (!placed) {
                            if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }
        for (var i in points) {
            var c = new Circle(points[i],2 + Math.random() * 2,'rgba(255,255,255,0.3)');
            points[i].circle = c;
        }
    }
    function addListeners() {
        if (!('ontouchstart'in window)) {
            window.addEventListener('mousemove', mouseMove);
        }
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }
    function mouseMove(e) {
        var posx = posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;
    }
    function scrollCheck() {
        if (document.body.scrollTop > height)
            animateHeader = false;
        else
            animateHeader = true;
    }
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height + 'px';
        canvas.width = width;
        canvas.height = height;
    }
    function initAnimation() {
        animate();
        for (var i in points) {
            shiftPoint(points[i]);
        }
    }
    function animate() {
        if (animateHeader) {
            ctx.clearRect(0, 0, width, height);
            for (var i in points) {
                if (Math.abs(getDistance(target, points[i])) < 4000) {
                    points[i].active = 0.3;
                    points[i].circle.active = 0.6;
                } else if (Math.abs(getDistance(target, points[i])) < 20000) {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.3;
                } else if (Math.abs(getDistance(target, points[i])) < 40000) {
                    points[i].active = 0.02;
                    points[i].circle.active = 0.1;
                } else {
                    points[i].active = 0;
                    points[i].circle.active = 0;
                }
                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(animate);
    }
    function shiftPoint(p) {
        TweenLite.to(p, 1 + 1 * Math.random(), {
            x: p.originX - 50 + Math.random() * 100,
            y: p.originY - 50 + Math.random() * 100,
            ease: Circ.easeInOut,
            onComplete: function() {
                shiftPoint(p);
            }
        });
    }
    function drawLines(p) {
        if (!p.active)
            return;
        for (var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(156,217,249,' + p.active + ')';
            ctx.stroke();
        }
    }
    function Circle(pos, rad, color) {
        var _this = this;
        (function() {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        }
        )();
        this.draw = function() {
            if (!_this.active)
                return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(156,217,249,' + _this.active + ')';
            ctx.fill();
        }
        ;
    }
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
    initHeader();
    initAnimation();
    addListeners();
    $('#bodygraph-draw').on('click', function() {
        $('#slogan, #bodygraph-form').slideUp(1000);
        $('#bodygraph-loading').show();
        var post_data = {};
        post_data['_token'] = $('#token').attr('value');
        $.each($('#bodygraph-form select'), function() {
            post_data[$(this).attr('name')] = $(this).val();
        });
         $('#HdImage').html('<img class="img-responsive" src="/c20161122/graph?' + $.now() + '">');
         return;
        var jqxhr = $.post("/c20161122/draw", post_data).done(function(response) {
            if (response.type == 'success') {
                $('#HdType').text(response.HdType);
                $('#HdProfile').text(response.HdProfile);
                $('#HdDefinition').text(response.HdDefinition);
                $('#HdAuthority').text(response.HdAuthority);
                $('#HdStrategy').text(response.HdStrategy);
                $('#HdTheme').text(response.HdTheme);
                $('#HdCross').text(response.HdCross);
                $('#HdImage').html('<img class="img-responsive" src="/c20161122/graph?' + $.now() + '">');
                $("#bodygraph-loading").hide();
                $("#bodygraph-result").slideDown(1000);
            } else {
                $("#bodygraph-loading").hide();
                $('#slogan, #bodygraph-form').slideDown();
                swal({
                    title: '有点小错误发生了',
                    text: response.message,
                    type: "error"
                });
            }
            return;
        }).fail(function() {
            $("#bodygraph-loading").hide();
            $('#slogan, #bodygraph-form').slideDown();
            swal({
                title: '有点小错误发生了',
                text: '暂时无法绘制，请洽网站管理员',
                type: "error"
            });
            return;
        }, 'json');
    });
    $('#bodygraph-redraw').on('click', function() {
        $("#bodygraph-loading").hide();
        $("#bodygraph-result").slideUp(600);
        $('#slogan, #bodygraph-form').slideDown(800);
    });
}
)();
