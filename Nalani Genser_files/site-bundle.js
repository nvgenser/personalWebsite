! function(e) {
    function t(i) { if (n[i]) return n[i].exports; var o = n[i] = { exports: {}, id: i, loaded: !1 }; return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports } var n = {}; return t.m = e, t.c = n, t.p = "", t(0) }([function(e, t, n) { n(1), n(2), n(3), n(4), n(5), n(66), n(67), n(71), e.exports = n(128) }, function(e, t) { Y || (Y = {}), Y.Template || (Y.Template = {}), Y.Template.noYUI = { init: function() { this.setIndexFullscreenGalleryHeights(), this.scrollYPolyfill(), this.vCenterTopSectionContent() }, scrollYPolyfill: function() { window.scrollY || (window.scrollY = window.pageYOffset || document.documentElement.scrollTop, window.addEventListener("scroll", function() { window.scrollY = window.pageYOffset || document.documentElement.scrollTop })) }, setIndexFullscreenGalleryHeights: function() { if (document.querySelectorAll && !(document.body.className.indexOf(" design-grid") > -1)) { var e = document.querySelectorAll("body.collection-type-index.slideshow-aspect-ratio-fullscreen .gallery-wrapper"); if (0 !== e.length)
                    for (var t = window.innerHeight, n = 0; n < e.length; n++) e[n].style.height = t + "px" } }, vCenterTopSectionContent: function() { var e = window.getComputedStyle(document.getElementById("header"), null).getPropertyValue("position"),
                t = document.querySelector(".main-content .index-section:first-child"); if (t) { var n = t.querySelectorAll(".has-main-media").length > 0,
                    i = t.querySelectorAll(".index-gallery").length > 0; if ("absolute" == e && n && !i) { var o = document.querySelector("#header .header-inner"),
                        r = header.querySelector(".title-logo-wrapper"),
                        a = document.querySelector("#mainNavigation"),
                        s = parseInt(window.getComputedStyle(o, null).paddingTop, 10); if (a) { a.style.whiteSpace = "nowrap", a.style.display = "inline"; var l = a.offsetWidth + (2 * r.offsetWidth - 18);
                        a.style.whiteSpace = "normal", a.style.display = "block"; var c = 0,
                            u = r.offsetHeight;
                        c = o.offsetWidth < l ? (u + s) / 2 + a.offsetHeight : (u + s) / 2, t.querySelector(".content-inner").style.paddingTop = c + "px"; var h = function() { return u === r.offsetHeight },
                            d = function() { nIntervId = setInterval(function() { h() === !1 && (c = o.offsetWidth < l ? (r.offsetHeight + s) / 2 + a.offsetHeight : (r.offsetHeight + s) / 2, t.querySelector(".content-inner").style.paddingTop = c + "px", clearInterval(nIntervId)) }, 10), setTimeout(function() { clearInterval(nIntervId) }, 1e3) };
                        d() } } } } }, Y.Template.noYUI.init() }, function(e, t) {! function() { var e, t = ".disable-hover:not(.sqs-layout-editing) #siteWrapper, .disable-hover:not(.sqs-layout-editing) #siteWrapper * {pointer-events: none !important;}",
            n = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style"),
            o = document.body;
        i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t)), n.appendChild(i), window.addEventListener("scroll", function() { clearTimeout(e), o.classList.contains("disable-hover") || o.classList.add("disable-hover"), e = setTimeout(function() { o.classList.remove("disable-hover") }, 200) }, !1) }() }, function(e, t) { Y.namespace("Template").Lazyload = Class.create({ initialize: function(e) { return this.el = e.el, this.mobile = e.mobile || !1, this.loadEvent = e.loadEvent || "throttle", "string" == typeof this.loadEvent && (this.loadEvent = this.loadEvent.toLowerCase()), this.el ? this.mobile === !1 && Y.UA.mobile ? (Y.all(this.el).each(function(e) { ImageLoader.load(e, { load: !0 }) }), !1) : void this.bindUI() : (console.error("lazyload.js: You must define an element."), !1) }, bindUI: function() { Y.all('img[data-load="viewport"]').each(function(e) { ImageLoader.load(e) }), this.loadImages(), "debounce" == this.loadEvent ? this.mitigate = function() { this.timeout && this.timeout.cancel(), this.timeout = Y.later(100, this, this.loadImages) } : this.mitigate = Y.throttle(this.loadImages, 200, this), Y.one(window).on("scroll", this.mitigate, this) }, loadImages: function() { Y.all(this.el).each(function(e) { e.getY() < 1.5 * Y.config.win.innerHeight + Y.config.win.scrollY && ImageLoader.load(e, { load: !0 }) }) }, refresh: function() { this.loadImages() } }) }, function(e, t) { Y.namespace("Template").RevealOnScroll = Class.create({ initialize: function(e) { return this.el = e.el, this.offsetEl = e.offsetEl, this.behavior = e.behavior || "top", "string" == typeof this.behavior && (this.behavior = this.behavior.toLowerCase()), this.el ? !!Y.one(this.el) && void this.bindUI() : (console.error("sticky.js: You must specify an element."), !1) }, bindUI: function() { this.getVariables(), Y.one(window).on("resize", function() { this.getVariables(), this.showOrHide() }, this), this.throttle = Y.throttle(Y.bind(function() { this.showOrHide() }, this), 200), this.debounce = function() { this.timeout && this.timeout.cancel(), this.timeout = Y.later(100, this, this.showOrHide) }, Y.one(window).on("scroll", function() { this.throttle(), this.debounce() }, this), Y.one(window).on("hashchange", this.debounce, this), this.showOrHide() }, getVariables: function() { Y.one(this.offsetEl) && ("bottom" == this.behavior ? this.y = Y.one(this.offsetEl).getY() + Y.one(this.offsetEl).get("clientHeight") - Y.one(this.el).get("clientHeight") : this.y = Y.one(this.offsetEl).getY() - Y.one(this.el).get("clientHeight")) }, showOrHide: function() { var e = Y.config.win.scrollY;
            e >= this.y ? Y.one(this.el).addClass("show") : Y.one(this.el).removeClass("show") } }) }, function(e, t, n) { var i = n(6);
    Y.namespace("Template").CenterNav = Class.create({ initialize: function(e) { if (this.navItems = e.navItems, this.centerEl = e.centerEl, this.wrapper = e.wrapper, this.innerWrapper = e.innerWrapper, !this.navItems) return console.error("centernav.js: You must specify the nav items selector."), !1; if (!this.centerEl) return console.error("centernav.js: You must specify an element to center around."), !1; if (!this.wrapper) return console.error("centernav.js: You must specify an outer wrapper that contains the nav items and nav wrapper."), !1; if (!this.innerWrapper) return console.error("centernav.js: You must specify an inner nav wrapper."), !1;
            this.refresh(); var t = new i({ callback: this.refresh.bind(this), targets: ["#siteTitleWrapper"] });
            t.init() }, refresh: function() { if (Y.all(this.navItems).size() > 1)
                if (this.CENTER_SPACING = 30, this.getVariables(), this.navSpace = (this.wrapperWidth - this.centerElWidth) / 2, Y.one(".custom-cart") && (this.navSpace = (this.wrapperWidth - this.centerElWidth) / 2 - (Y.one(".custom-cart").get("offsetWidth") + parseInt(Y.Squarespace.Template.getTweakValue("headerPadding"), 10))), this.navItemsSplitPoint = Math.round(Y.all(this.navItems).size() / 2), this.splitPointWidth = Y.all(this.navItems).item(this.navItemsSplitPoint - 1).get("offsetWidth"), this.navItemsLeft = Y.all(this.navItems).slice(0, this.navItemsSplitPoint), this.navItemsRight = Y.all(this.navItems).slice(this.navItemsSplitPoint), Y.all(this.navItems).size() % 2 !== 0 && this.navItemsLeft.get("offsetWidth").reduce(this.sum, 0) - this.splitPointWidth > this.navItemsRight.get("offsetWidth").reduce(this.sum, 0) && (this.navItemsSplitPoint = this.navItemsSplitPoint - 1, this.navItemsLeft = Y.all(this.navItems).slice(0, this.navItemsSplitPoint), this.navItemsRight = Y.all(this.navItems).slice(this.navItemsSplitPoint)), this.calculateWidthDiff(), this.leftOfLogo = Y.all(this.navItems).item(this.navItemsSplitPoint - 1), this.rightOfLogo = Y.all(this.navItems).item(this.navItemsSplitPoint), this.navItemsLeft.get("offsetWidth").reduce(this.sum, 0) > this.navSpace - 12 || this.navItemsRight.get("offsetWidth").reduce(this.sum, 0) > this.navSpace - 12) this.destroy(), Y.one(this.innerWrapper).setStyles({ marginLeft: 0, marginTop: "10px", marginBottom: 0 });
                else { this.destroy(), Y.one(this.leftOfLogo).setStyle("marginRight", this.centerElWidth / 2), Y.one(this.rightOfLogo).setStyle("marginLeft", this.centerElWidth / 2); var e = parseInt(Y.one(this.innerWrapper).getComputedStyle("height"), 10);
                    Y.one(this.innerWrapper).setStyles({ marginLeft: this.widthDiff, marginTop: Math.ceil(-1 * (this.centerElHeight / 2 + e / 2)), marginBottom: Math.ceil(this.centerElHeight / 2 + e / 2 - e) }) }
            Y.one(this.innerWrapper).addClass("positioned") }, destroy: function() { Y.all(this.navItems).removeAttribute("style") }, getVariables: function() { this.wrapperWidth = Y.one(this.wrapper).get("offsetWidth") - 2 * parseInt(Y.Squarespace.Template.getTweakValue("headerPadding"), 10), this.centerElWidth = Y.one(this.centerEl).get("offsetWidth") + 2 * this.CENTER_SPACING, this.centerElHeight = Y.one(this.centerEl).get("offsetHeight") }, calculateWidthDiff: function() { this.widthDiff = this.navItemsRight.get("offsetWidth").reduce(this.sum, 0) - this.navItemsLeft.get("offsetWidth").reduce(this.sum, 0) }, sum: function(e, t) { return "number" == typeof e && "number" == typeof t ? e + t : (console.warn("centernav.js sum function: can't add non-numbers."), !1) } }) }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var o = n(7),
        r = i(o),
        a = n(60),
        s = i(a),
        l = n(61),
        c = i(l),
        u = n(65),
        h = "This browser does not support MutationObserver",
        d = function() {
            function e(t) { var n = t.callback,
                    i = t.targets,
                    o = void 0 === i ? [] : i; return (0, s.default)(this, e), this.MutationObserver = (0, u.checkForMutationObserver)(), this.MutationObserver ? (this.callback = (0, u.validateCallback)(n), void(this.targets = o)) : void console.error(h) } return (0, c.default)(e, [{ key: "init", value: function() { return this.MutationObserver ? (this.observer = this.createObserver(), void this.observeTargets()) : void console.error(h) } }, { key: "destroy", value: function() { return this.MutationObserver ? (this.observer.disconnect(), this.observer = null, void document.removeEventListener("DOMContentLoaded", this.reactToMutations)) : void console.error(h) } }, { key: "createObserver", value: function() { var e = this; return new this.MutationObserver(function(t) { e.evaluateMutations(t) }) } }, { key: "observeTargets", value: function() { var e = this;
                    this.targets.forEach(function(t) {
                        (0, r.default)(document.querySelectorAll(t)).forEach(function(t) { e.observer.observe(t, { childList: !0, subtree: !0, attributes: !0 }) }) }) } }, { key: "evaluateMutations", value: function(e) { e && ("loading" === document.readyState ? document.addEventListener("DOMContentLoaded", this.reactToMutations) : this.reactToMutations()) } }, { key: "reactToMutations", value: function() { this.timer && clearTimeout(this.timer), this.timer = setTimeout(this.callback, 150) } }]), e }();
    t.default = d, e.exports = t.default }, function(e, t, n) { e.exports = { default: n(8), __esModule: !0 } }, function(e, t, n) { n(9), n(53), e.exports = n(17).Array.from }, function(e, t, n) { "use strict"; var i = n(10)(!0);
    n(13)(String, "String", function(e) { this._t = String(e), this._i = 0 }, function() { var e, t = this._t,
            n = this._i; return n >= t.length ? { value: void 0, done: !0 } : (e = i(t, n), this._i += e.length, { value: e, done: !1 }) }) }, function(e, t, n) { var i = n(11),
        o = n(12);
    e.exports = function(e) { return function(t, n) { var r, a, s = String(o(t)),
                l = i(n),
                c = s.length; return l < 0 || l >= c ? e ? "" : void 0 : (r = s.charCodeAt(l), r < 55296 || r > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : r : e ? s.slice(l, l + 2) : (r - 55296 << 10) + (a - 56320) + 65536) } } }, function(e, t) { var n = Math.ceil,
        i = Math.floor;
    e.exports = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e) } }, function(e, t) { e.exports = function(e) { if (void 0 == e) throw TypeError("Can't call method on  " + e); return e } }, function(e, t, n) { "use strict"; var i = n(14),
        o = n(15),
        r = n(30),
        a = n(20),
        s = n(31),
        l = n(32),
        c = n(33),
        u = n(49),
        h = n(51),
        d = n(50)("iterator"),
        f = !([].keys && "next" in [].keys()),
        p = "@@iterator",
        A = "keys",
        m = "values",
        g = function() { return this };
    e.exports = function(e, t, n, v, y, w, b) { c(n, t, v); var S, x, T, k = function(e) { if (!f && e in E) return E[e]; switch (e) {
                    case A:
                        return function() { return new n(this, e) };
                    case m:
                        return function() { return new n(this, e) } } return function() { return new n(this, e) } },
            Y = t + " Iterator",
            I = y == m,
            C = !1,
            E = e.prototype,
            P = E[d] || E[p] || y && E[y],
            L = P || k(y),
            M = y ? I ? k("entries") : L : void 0,
            N = "Array" == t ? E.entries || P : P; if (N && (T = h(N.call(new e)), T !== Object.prototype && T.next && (u(T, Y, !0), i || s(T, d) || a(T, d, g))), I && P && P.name !== m && (C = !0, L = function() { return P.call(this) }), i && !b || !f && !C && E[d] || a(E, d, L), l[t] = L, l[Y] = g, y)
            if (S = { values: I ? L : k(m), keys: w ? L : k(A), entries: M }, b)
                for (x in S) x in E || r(E, x, S[x]);
            else o(o.P + o.F * (f || C), t, S); return S } }, function(e, t) { e.exports = !0 }, function(e, t, n) { var i = n(16),
        o = n(17),
        r = n(18),
        a = n(20),
        s = "prototype",
        l = function(e, t, n) { var c, u, h, d = e & l.F,
                f = e & l.G,
                p = e & l.S,
                A = e & l.P,
                m = e & l.B,
                g = e & l.W,
                v = f ? o : o[t] || (o[t] = {}),
                y = v[s],
                w = f ? i : p ? i[t] : (i[t] || {})[s];
            f && (n = t); for (c in n) u = !d && w && void 0 !== w[c], u && c in v || (h = u ? w[c] : n[c], v[c] = f && "function" != typeof w[c] ? n[c] : m && u ? r(h, i) : g && w[c] == h ? function(e) { var t = function(t, n, i) { if (this instanceof e) { switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n) } return new e(t, n, i) } return e.apply(this, arguments) }; return t[s] = e[s], t }(h) : A && "function" == typeof h ? r(Function.call, h) : h, A && ((v.virtual || (v.virtual = {}))[c] = h, e & l.R && y && !y[c] && a(y, c, h))) };
    l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l }, function(e, t) { var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) }, function(e, t) { var n = e.exports = { version: "2.5.0" }; "number" == typeof __e && (__e = n) }, function(e, t, n) { var i = n(19);
    e.exports = function(e, t, n) { if (i(e), void 0 === t) return e; switch (n) {
            case 1:
                return function(n) { return e.call(t, n) };
            case 2:
                return function(n, i) { return e.call(t, n, i) };
            case 3:
                return function(n, i, o) { return e.call(t, n, i, o) } } return function() { return e.apply(t, arguments) } } }, function(e, t) { e.exports = function(e) { if ("function" != typeof e) throw TypeError(e + " is not a function!"); return e } }, function(e, t, n) { var i = n(21),
        o = n(29);
    e.exports = n(25) ? function(e, t, n) { return i.f(e, t, o(1, n)) } : function(e, t, n) { return e[t] = n, e } }, function(e, t, n) { var i = n(22),
        o = n(24),
        r = n(28),
        a = Object.defineProperty;
    t.f = n(25) ? Object.defineProperty : function(e, t, n) { if (i(e), t = r(t, !0), i(n), o) try { return a(e, t, n) } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!"); return "value" in n && (e[t] = n.value), e } }, function(e, t, n) { var i = n(23);
    e.exports = function(e) { if (!i(e)) throw TypeError(e + " is not an object!"); return e } }, function(e, t) { e.exports = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e } }, function(e, t, n) { e.exports = !n(25) && !n(26)(function() { return 7 != Object.defineProperty(n(27)("div"), "a", { get: function() { return 7 } }).a }) }, function(e, t, n) { e.exports = !n(26)(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(e, t) { e.exports = function(e) { try { return !!e() } catch (e) { return !0 } } }, function(e, t, n) { var i = n(23),
        o = n(16).document,
        r = i(o) && i(o.createElement);
    e.exports = function(e) { return r ? o.createElement(e) : {} } }, function(e, t, n) { var i = n(23);
    e.exports = function(e, t) { if (!i(e)) return e; var n, o; if (t && "function" == typeof(n = e.toString) && !i(o = n.call(e))) return o; if ("function" == typeof(n = e.valueOf) && !i(o = n.call(e))) return o; if (!t && "function" == typeof(n = e.toString) && !i(o = n.call(e))) return o; throw TypeError("Can't convert object to primitive value") } }, function(e, t) { e.exports = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, function(e, t, n) { e.exports = n(20) }, function(e, t) { var n = {}.hasOwnProperty;
    e.exports = function(e, t) { return n.call(e, t) } }, function(e, t) { e.exports = {} }, function(e, t, n) { "use strict"; var i = n(34),
        o = n(29),
        r = n(49),
        a = {};
    n(20)(a, n(50)("iterator"), function() { return this }), e.exports = function(e, t, n) { e.prototype = i(a, { next: o(1, n) }), r(e, t + " Iterator") } }, function(e, t, n) { var i = n(22),
        o = n(35),
        r = n(47),
        a = n(44)("IE_PROTO"),
        s = function() {},
        l = "prototype",
        c = function() { var e, t = n(27)("iframe"),
                i = r.length,
                o = "<",
                a = ">"; for (t.style.display = "none", n(48).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(o + "script" + a + "document.F=Object" + o + "/script" + a), e.close(), c = e.F; i--;) delete c[l][r[i]]; return c() };
    e.exports = Object.create || function(e, t) { var n; return null !== e ? (s[l] = i(e), n = new s, s[l] = null, n[a] = e) : n = c(), void 0 === t ? n : o(n, t) } }, function(e, t, n) { var i = n(21),
        o = n(22),
        r = n(36);
    e.exports = n(25) ? Object.defineProperties : function(e, t) { o(e); for (var n, a = r(t), s = a.length, l = 0; s > l;) i.f(e, n = a[l++], t[n]); return e } }, function(e, t, n) { var i = n(37),
        o = n(47);
    e.exports = Object.keys || function(e) { return i(e, o) } }, function(e, t, n) { var i = n(31),
        o = n(38),
        r = n(41)(!1),
        a = n(44)("IE_PROTO");
    e.exports = function(e, t) { var n, s = o(e),
            l = 0,
            c = []; for (n in s) n != a && i(s, n) && c.push(n); for (; t.length > l;) i(s, n = t[l++]) && (~r(c, n) || c.push(n)); return c } }, function(e, t, n) { var i = n(39),
        o = n(12);
    e.exports = function(e) { return i(o(e)) } }, function(e, t, n) { var i = n(40);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) { return "String" == i(e) ? e.split("") : Object(e) } }, function(e, t) { var n = {}.toString;
    e.exports = function(e) { return n.call(e).slice(8, -1) } }, function(e, t, n) { var i = n(38),
        o = n(42),
        r = n(43);
    e.exports = function(e) { return function(t, n, a) { var s, l = i(t),
                c = o(l.length),
                u = r(a, c); if (e && n != n) { for (; c > u;)
                    if (s = l[u++], s != s) return !0 } else
                for (; c > u; u++)
                    if ((e || u in l) && l[u] === n) return e || u || 0; return !e && -1 } } }, function(e, t, n) { var i = n(11),
        o = Math.min;
    e.exports = function(e) { return e > 0 ? o(i(e), 9007199254740991) : 0 } }, function(e, t, n) { var i = n(11),
        o = Math.max,
        r = Math.min;
    e.exports = function(e, t) { return e = i(e), e < 0 ? o(e + t, 0) : r(e, t) } }, function(e, t, n) { var i = n(45)("keys"),
        o = n(46);
    e.exports = function(e) { return i[e] || (i[e] = o(e)) } }, function(e, t, n) { var i = n(16),
        o = "__core-js_shared__",
        r = i[o] || (i[o] = {});
    e.exports = function(e) { return r[e] || (r[e] = {}) } }, function(e, t) { var n = 0,
        i = Math.random();
    e.exports = function(e) { return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36)) } }, function(e, t) { e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(e, t, n) { var i = n(16).document;
    e.exports = i && i.documentElement }, function(e, t, n) { var i = n(21).f,
        o = n(31),
        r = n(50)("toStringTag");
    e.exports = function(e, t, n) { e && !o(e = n ? e : e.prototype, r) && i(e, r, { configurable: !0, value: t }) } }, function(e, t, n) { var i = n(45)("wks"),
        o = n(46),
        r = n(16).Symbol,
        a = "function" == typeof r,
        s = e.exports = function(e) { return i[e] || (i[e] = a && r[e] || (a ? r : o)("Symbol." + e)) };
    s.store = i }, function(e, t, n) { var i = n(31),
        o = n(52),
        r = n(44)("IE_PROTO"),
        a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) { return e = o(e), i(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null } }, function(e, t, n) { var i = n(12);
    e.exports = function(e) { return Object(i(e)) } }, function(e, t, n) { "use strict"; var i = n(18),
        o = n(15),
        r = n(52),
        a = n(54),
        s = n(55),
        l = n(42),
        c = n(56),
        u = n(57);
    o(o.S + o.F * !n(59)(function(e) { Array.from(e) }), "Array", { from: function(e) { var t, n, o, h, d = r(e),
                f = "function" == typeof this ? this : Array,
                p = arguments.length,
                A = p > 1 ? arguments[1] : void 0,
                m = void 0 !== A,
                g = 0,
                v = u(d); if (m && (A = i(A, p > 2 ? arguments[2] : void 0, 2)), void 0 == v || f == Array && s(v))
                for (t = l(d.length), n = new f(t); t > g; g++) c(n, g, m ? A(d[g], g) : d[g]);
            else
                for (h = v.call(d), n = new f; !(o = h.next()).done; g++) c(n, g, m ? a(h, A, [o.value, g], !0) : o.value); return n.length = g, n } }) }, function(e, t, n) { var i = n(22);
    e.exports = function(e, t, n, o) { try { return o ? t(i(n)[0], n[1]) : t(n) } catch (t) { var r = e.return; throw void 0 !== r && i(r.call(e)), t } } }, function(e, t, n) { var i = n(32),
        o = n(50)("iterator"),
        r = Array.prototype;
    e.exports = function(e) { return void 0 !== e && (i.Array === e || r[o] === e) } }, function(e, t, n) { "use strict"; var i = n(21),
        o = n(29);
    e.exports = function(e, t, n) { t in e ? i.f(e, t, o(0, n)) : e[t] = n } }, function(e, t, n) { var i = n(58),
        o = n(50)("iterator"),
        r = n(32);
    e.exports = n(17).getIteratorMethod = function(e) { if (void 0 != e) return e[o] || e["@@iterator"] || r[i(e)] } }, function(e, t, n) { var i = n(40),
        o = n(50)("toStringTag"),
        r = "Arguments" == i(function() { return arguments }()),
        a = function(e, t) { try { return e[t] } catch (e) {} };
    e.exports = function(e) { var t, n, s; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = a(t = Object(e), o)) ? n : r ? i(t) : "Object" == (s = i(t)) && "function" == typeof t.callee ? "Arguments" : s } }, function(e, t, n) { var i = n(50)("iterator"),
        o = !1; try { var r = [7][i]();
        r.return = function() { o = !0 }, Array.from(r, function() { throw 2 }) } catch (e) {} e.exports = function(e, t) { if (!t && !o) return !1; var n = !1; try { var r = [7],
                a = r[i]();
            a.next = function() { return { done: n = !0 } }, r[i] = function() { return a }, e(r) } catch (e) {} return n } }, function(e, t) { "use strict";
    t.__esModule = !0, t.default = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { default: e } } t.__esModule = !0; var o = n(62),
        r = i(o);
    t.default = function() {
        function e(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(e, i.key, i) } } return function(t, n, i) { return n && e(t.prototype, n), i && e(t, i), t } }() }, function(e, t, n) { e.exports = { default: n(63), __esModule: !0 } }, function(e, t, n) { n(64); var i = n(17).Object;
    e.exports = function(e, t, n) { return i.defineProperty(e, t, n) } }, function(e, t, n) { var i = n(15);
    i(i.S + i.F * !n(25), "Object", { defineProperty: n(21).f }) }, function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.checkForMutationObserver = function() { var e = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver; return e }, t.validateCallback = function(e) { if ("function" == typeof e) return e; var t = "Darwin must receive a callback function, or there is nothing to run when mutations occur."; throw new Error(t) } }, function(e, t) { Y.namespace("Template").Gallery = Class.create({ initialize: function(e) { return this.slides = e.slides, this.wrapper = e.wrapper, this.slides ? this.wrapper ? !(!Y.one(this.wrapper) || !Y.one(this.slides)) && (this.getTweaks(), this.bindUI(), void this.syncUI()) : (console.error("index-gallery.js: You have to define the wrapper selector."), !1) : (console.error("index-gallery.js: You have to define the slides selector."), !1) }, bindUI: function() { if ("grid" == this.tweak.design) this.loadGridImages(), this.lightboxSet = [], Y.one(this.wrapper).all(this.slides).each(function(e) { var t = e.one(".sqs-video-wrapper"),
                    n = t ? e.one(".sqs-video-wrapper") : e.one("img"),
                    i = t ? null : e.one(".slide-meta-content") && e.one(".slide-meta-content").getHTML();
                this.lightboxSet.push({ content: n, meta: i }), e.on("click", function(t) { t.halt(), e.one(".clickthrough-link") ? (t.stopPropagation(), window.location = e.one(".clickthrough-link").getAttribute("href")) : (this.gallery && this.gallery.destroy(), this.gallery = new Y.Squarespace.Lightbox2({ controls: { previous: !0, next: !0 }, currentSetIndex: Y.one(this.wrapper).all(this.slides).indexOf(e), set: this.lightboxSet }), this.gallery.render()) }, this) }, this);
            else { var e = !1; "auto" == this.tweak.aspect && (e = !0); var t = !1;
                this.tweak.autoplay === !0 && (t = !0), "fullscreen" == this.tweak.aspect && "slideshow" == this.tweak.design && this.fullscreen(), this.wrapper.generateID(), this.nodeID = "#" + this.wrapper.get("id"), this.galleryManager = [], this.gallery = new Y.Squarespace.Gallery2({ container: this.wrapper, design: "stacked", autoplay: t, designOptions: { autoHeight: e, clickBehavior: "auto", transition: this.tweak.transition }, elements: { controls: this.nodeID + " ~ .circles", next: this.nodeID + " ~ .next-slide", previous: this.nodeID + " ~ .previous-slide" }, historyHash: !1, keyboard: !1, lazyLoad: !0, loaderOptions: { mode: "fill" }, loop: "true", refreshOnResize: !0, slides: this.slides }), Y.one(this.wrapper).delegate("click", function(e) { e.halt(), e.currentTarget.ancestor(this.slides).toggleClass("hide-meta") }, ".hide-meta-toggle"), this.galleryManager.push(this.gallery), this.keyboardControls() } }, syncUI: function() { Y.Template.helper.on("resizeend", function() { "grid" == this.tweak.design && this.loadGridImages(), Y.UA.touchEnabled || "fullscreen" != this.tweak.aspect || "slideshow" != this.tweak.design || this.fullscreen() }, this), Y.Global.on("tweak:reset", this.refresh, this), Y.Global.on("tweak:change", function(e) { var t = e.getName(); "grid-aspect-ratio" != t && "slideshow-aspect-ratio" != t && "design" != t && "gallery-controls" != t && "slideshow-transition" != t && "slideshow-autoplay" != t || this.refresh(), "grid-aspect-ratio" != t && "slideshow-aspect-ratio" != t && "design" != t && "grid-max-columns" != t || Y.one(window).simulate("resize") }, this) }, getTweaks: function() { this.tweak = { aspect: this.getTweakValue("slideshow-aspect-ratio"), design: this.getTweakValue("design"), nav: this.getTweakValue("gallery-controls"), transition: this.getTweakValue("slideshow-transition"), autoplay: this.getTweakValue("slideshow-autoplay") } }, getTweakValue: function(e) { var t = Y.Squarespace.Template.getTweakValue(e); return Y.Lang.isString(t) && (t = t.toLowerCase()), "true" === t ? t = !0 : "false" === t && (t = !1), t }, keyboardControls: function() { Y.one(window).on("keyup", function(e) { Y.all(this.wrapper).each(function(t, n) { if (t.inViewportRegion() && (37 == e.keyCode || 39 == e.keyCode)) { var i = 1;
                        37 == e.keyCode && (i = -1), this.galleryManager[n].set("currentIndex", this.galleryManager[n].get("currentIndex") + i) } }, this) }, this) }, fullscreen: function() { "none" == Y.one("#header .mobile-nav-toggle-label").getComputedStyle("display") ? this.mobileNavShowing = !1 : this.mobileNavShowing = !0, Y.all(this.wrapper).each(function(e) { this.mobileNavShowing ? e.setStyle("height", Y.config.win.innerHeight) : Y.one("#siteWrapper #content .index-section.gallery:first-child") && Y.one("#showOnScrollWrapper #mainNavWrapper") ? (e.setStyle("height", Y.config.win.innerHeight - Y.one("#showOnScrollWrapper #mainNavWrapper").get("clientHeight")), Y.one("#siteWrapper #content .index-section.gallery:first-child .gallery-wrapper").setStyle("height", Y.config.win.innerHeight)) : Y.one("#showOnScrollWrapper #mainNavWrapper") ? e.setStyle("height", Y.config.win.innerHeight - Y.one("#showOnScrollWrapper #mainNavWrapper").get("clientHeight")) : e.setStyle("height", Y.config.win.innerHeight) }, this) }, loadGridImages: function() { Y.one(this.wrapper).all(this.slides).each(function(e) { e.one(".sqs-video-wrapper") ? e.one(".sqs-video-wrapper").plug(Y.Squarespace.VideoLoader, { mode: "fill" }) : ImageLoader.load(e.one("img"), { load: !0, mode: "fill" }) }, this) }, destroy: function() { Y.all(this.wrapper).each(function(e) { e.detachAll(), e.removeAttribute("style") }, this), Y.all(this.slides).each(function(e) { e.detachAll(), e.removeAttribute("style") }, this), this.gallery && this.gallery.destroy() }, refresh: function() { this.destroy(), this.getTweaks(), this.bindUI() } }) }, function(e, t, n) { var i = n(68);
    Y.use("node", "event-custom", function() { Y.namespace("Template").helper = Singleton.create({ ready: function() { Y.on("domready", function() { this.bindUI() }, this), Y.augment(this, Y.EventTarget, !0, null, { emitFacade: !0 }) }, bindUI: function() { this.dataToggleBody(), this.dataToggleEl(), this.dataLightbox(), "android" === Y.UA.os && (Y.UA.android < 5 || "ffos" === Y.UA.mobile) ? window.matchMedia("(orientation: portrait)").addListener(function() { this.imgLoad(), this.fire("resizeend") }) : Y.one(window).on(["resize", "orientationchange"], function() { this._resize && this._resize.cancel(), this._resize = Y.later(150, this, function() { this.imgLoad(), this.fire("resizeend") }) }, this), this.imgLoad() }, radioCheckboxes: function(e, t, n) { return e ? Y.one(e) ? (t = t || '[type="checkbox"]', n = n || "label[for]", void(Y.one(e).all(t).size() > 1 && Y.one(e).delegate("click", function(n) { n.preventDefault(); var i = Y.one("#" + n.currentTarget.getAttribute("for"));
                    i.get("checked") === !1 ? (Y.one(e).all(t).each(function(e) { e.set("checked", !1) }), i.set("checked", !0)) : i.set("checked", !1) }, n))) : void console.warn("radioCheckboxes: No wrapper found on page.") : void console.warn("radioCheckboxes: Must define a wrapper.") }, folderRedirect: function(e, t) { e = e || "label[for]", t = t || "body", Y.one(e) && !Y.one(".touch-styles") && Y.one(t).delegate("click", function(e) { e.preventDefault(); var t = e.currentTarget.getData("href");
                    t ? window.location = t : console.warn("folderRedirect: You must add a data-href attribute to the label.") }, e) }, dataLightbox: function() { var e = {};
                Y.all("[data-lightbox]").each(function(t) { var n = t.getAttribute("data-lightbox");
                    e[n] = e[n] || new Array, e[n].push({ content: t, meta: t.getAttribute("alt") }), t.on("click", function(i) { i.halt(), new Y.Squarespace.Lightbox2({ set: e[n], currentSetIndex: Y.all("[data-lightbox]").indexOf(t), controls: { previous: !0, next: !0 } }).render() }) }) }, dataToggleBody: function() { Y.one("body").delegate("click", function(e) { Y.one("body").toggleClass(e.currentTarget.getData("toggle-body")) }, "[data-toggle-body]") }, dataToggleEl: function() { Y.one("body").delegate("click", function(e) { var t = e.currentTarget;
                    t.toggleClass(t.getData("toggle")) }, "[data-toggle]") }, imgLoad: function(e) { e = e || "img[data-src]", Y.all(e).each(function(e) { ImageLoader.load(e) }) }, scrollAnchors: function() { if (!history.pushState) return !1; var e = 'a[href*="#"]';
                Y.one("body").delegate("click", function(e) { var t = e.currentTarget.get("href"),
                        n = this._getSamePageHash(t);
                    n && Y.one(n) && (e.halt(), Y.Template.Site.mobileNav && Y.one("#mobileNavToggle").set("checked", !1).simulate("change"), this.smoothScrollTo(Y.one(n).getY()), history.pushState({}, n, n)) }, e, this) }, _getSamePageHash: function(e) { var e = new i(e),
                    t = new i(window.location.href); return e.host !== t.host || e.pathname !== t.pathname || "" === e.hash ? null : e.hash }, smoothScrollTo: function(e) { if (NaN == parseInt(e)) return console.warn("helpers.js: smoothScrollTo must have a scroll point passed to it."), !1; if (!Y.Lang.isNumber(e)) try { e = parseInt(e) } catch (e) { return console.warn("helpers.js: scrollTo was passed an invalid argument."), !1 }
                if (Y.UA.mobile) window.scroll(0, e);
                else { var t = Y.UA.gecko || Y.UA.ie || navigator.userAgent.match(/Trident.*rv.11\./) ? "html" : "body",
                        n = new Y.Anim({ node: Y.one(document.scrollingElement || t), to: { scrollTop: e }, duration: .4, easing: "easeOut" });
                    n.run(), n.on("end", function() { n.destroy() }) } }, disableScroll: function(e) { if (!Y.Lang.isString(e)) return console.warn("helpers.js: disableScroll arg must be a string."), !1; var t = Y.config.win.scrollY;
                Y.one(window).on("scroll", function() { Y.one("body").hasClass(e) ? window.scrollTo(0, t) : t = Y.config.win.scrollY }, this) }, centerMapPin: function(e, t) { var n = e._node.__map; if (!n) return console.error("helpers.js: Invalid argument passed to centerMapPin method."), !1; var i = n.getCenter();
                i.d = t.location.mapLat, i.e = t.location.mapLng, google.maps.event.trigger(n, "resize"), n.setCenter(i) } }) }) }, function(e, t, n) {
    (function(t) {
        "use strict";

        function i(e) { e = e || t.location || {}; var n, i = {},
                o = typeof e; if ("blob:" === e.protocol) i = new a(unescape(e.pathname), {});
            else if ("string" === o) { i = new a(e, {}); for (n in p) delete i[n] } else if ("object" === o) { for (n in e) n in p || (i[n] = e[n]);
                void 0 === i.slashes && (i.slashes = d.test(e.href)) } return i }

        function o(e) { var t = h.exec(e); return { protocol: t[1] ? t[1].toLowerCase() : "", slashes: !!t[2], rest: t[3] } }

        function r(e, t) { for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), i = n.length, o = n[i - 1], r = !1, a = 0; i--;) "." === n[i] ? n.splice(i, 1) : ".." === n[i] ? (n.splice(i, 1), a++) : a && (0 === i && (r = !0), n.splice(i, 1), a--); return r && n.unshift(""), "." !== o && ".." !== o || n.push(""), n.join("/") }

        function a(e, t, n) { if (!(this instanceof a)) return new a(e, t, n); var s, l, h, d, p, A, m = f.slice(),
                g = typeof t,
                v = this,
                y = 0; for ("object" !== g && "string" !== g && (n = t, t = null), n && "function" != typeof n && (n = u.parse), t = i(t), l = o(e || ""), s = !l.protocol && !l.slashes, v.slashes = l.slashes || s && t.slashes, v.protocol = l.protocol || t.protocol || "", e = l.rest, l.slashes || (m[2] = [/(.*)/, "pathname"]); y < m.length; y++) d = m[y], h = d[0], A = d[1], h !== h ? v[A] = e : "string" == typeof h ? ~(p = e.indexOf(h)) && ("number" == typeof d[2] ? (v[A] = e.slice(0, p), e = e.slice(p + d[2])) : (v[A] = e.slice(p), e = e.slice(0, p))) : (p = h.exec(e)) && (v[A] = p[1], e = e.slice(0, p.index)), v[A] = v[A] || (s && d[3] ? t[A] || "" : ""), d[4] && (v[A] = v[A].toLowerCase());
            n && (v.query = n(v.query)), s && t.slashes && "/" !== v.pathname.charAt(0) && ("" !== v.pathname || "" !== t.pathname) && (v.pathname = r(v.pathname, t.pathname)), c(v.port, v.protocol) || (v.host = v.hostname, v.port = ""), v.username = v.password = "", v.auth && (d = v.auth.split(":"), v.username = d[0] || "", v.password = d[1] || ""), v.origin = v.protocol && v.host && "file:" !== v.protocol ? v.protocol + "//" + v.host : "null", v.href = v.toString() }

        function s(e, t, n) { var i = this; switch (e) {
                case "query":
                    "string" == typeof t && t.length && (t = (n || u.parse)(t)), i[e] = t; break;
                case "port":
                    i[e] = t, c(t, i.protocol) ? t && (i.host = i.hostname + ":" + t) : (i.host = i.hostname, i[e] = ""); break;
                case "hostname":
                    i[e] = t, i.port && (t += ":" + i.port), i.host = t; break;
                case "host":
                    i[e] = t, /:\d+$/.test(t) ? (t = t.split(":"), i.port = t.pop(), i.hostname = t.join(":")) : (i.hostname = t, i.port = ""); break;
                case "protocol":
                    i.protocol = t.toLowerCase(), i.slashes = !n; break;
                case "pathname":
                    i.pathname = t.length && "/" !== t.charAt(0) ? "/" + t : t; break;
                default:
                    i[e] = t } for (var o = 0; o < f.length; o++) { var r = f[o];
                r[4] && (i[r[1]] = i[r[1]].toLowerCase()) } return i.origin = i.protocol && i.host && "file:" !== i.protocol ? i.protocol + "//" + i.host : "null", i.href = i.toString(), i }

        function l(e) { e && "function" == typeof e || (e = u.stringify); var t, n = this,
                i = n.protocol;
            i && ":" !== i.charAt(i.length - 1) && (i += ":"); var o = i + (n.slashes ? "//" : ""); return n.username && (o += n.username, n.password && (o += ":" + n.password), o += "@"), o += n.host + n.pathname, t = "object" == typeof n.query ? e(n.query) : n.query, t && (o += "?" !== t.charAt(0) ? "?" + t : t), n.hash && (o += n.hash), o }
        var c = n(69),
            u = n(70),
            h = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
            d = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            f = [
                ["#", "hash"],
                ["?", "query"],
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d+)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            p = {
                hash: 1,
                query: 1
            };
        a.prototype = { set: s, toString: l }, a.extractProtocol = o, a.location = i, a.qs = u, e.exports = a
    }).call(t, function() { return this }())
}, function(e, t) { "use strict";
    e.exports = function(e, t) { if (t = t.split(":")[0], e = +e, !e) return !1; switch (t) {
            case "http":
            case "ws":
                return 80 !== e;
            case "https":
            case "wss":
                return 443 !== e;
            case "ftp":
                return 21 !== e;
            case "gopher":
                return 70 !== e;
            case "file":
                return !1 } return 0 !== e } }, function(e, t) { "use strict";

    function n(e) { return decodeURIComponent(e.replace(/\+/g, " ")) }

    function i(e) { for (var t, i = /([^=?&]+)=?([^&]*)/g, o = {}; t = i.exec(e); o[n(t[1])] = n(t[2])); return o }

    function o(e, t) { t = t || ""; var n = []; "string" != typeof t && (t = "?"); for (var i in e) r.call(e, i) && n.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i])); return n.length ? t + n.join("&") : "" } var r = Object.prototype.hasOwnProperty;
    t.stringify = o, t.parse = i }, function(e, t, n) { var i = n(72).VideoBackground,
        o = n(72).getVideoProps,
        r = n(127);
    Y.use("node", function(e) { e.namespace("Template").Site = Singleton.create({ ready: function() { this.regularHeaderForGridGallery(), e.on("domready", function() { this.init() }, this) }, init: function() { this.cartState(), e.one(".index-section .index-section-image") && this.fadeInFirstIndexSectionImageOnLoad(), this.transparentHeaderPadding(), this.textShrink("#siteTitle a", "#siteTitle"), this.textShrink(".index-gallery .slide-meta-content .title", ".index-gallery .slide-meta-content"), this.textShrink(".index-section-wrapper.has-main-media .sqs-block-content h1", ".index-section-wrapper.has-main-media .sqs-block-content"), this.textShrink(".banner-thumbnail-wrapper .desc-wrapper h1", ".banner-thumbnail-wrapper .desc-wrapper"), this.textShrink(".quote-block figure", ".sqs-block.quote-block"), this.textShrink(".page-description p", ".page-description"), this.getVariables(), this.wrapper = e.Node.create('<div class="show-on-scroll-wrapper" id="showOnScrollWrapper"></div>'), this.injectScrollNavContent(), this.syncUI(), this.bindUI(), e.one(".always-use-overlay-nav") || e.config.win.innerWidth <= 768 ? (e.Template.helper.radioCheckboxes("#mainNavigation"), e.Template.helper.radioCheckboxes("#mobileNavigation")) : (e.Template.helper.folderRedirect("#headerNav .folder-toggle-label"), e.Template.helper.folderRedirect("#showOnScrollWrapper .folder-toggle-label"), e.Template.helper.folderRedirect("#footer .folder-toggle-label")); var t = Array.prototype.slice.call(document.body.querySelectorAll("div.sqs-video-background"));
                t.map(function(e) { return new i(o(e)) }) }, fadeInFirstIndexSectionImageOnLoad: function() { if (e.one(".index-section-image img")) { var t = e.one(".index-section-image img"),
                        n = t.getAttribute("src"); if (n) { var i = new Image;
                        i.onload = function() { this.addClass("loaded") }.bind(t), i.src = n } else ImageLoader.load(t.removeAttribute("data-load")), t.addClass("loaded") } }, mutationObserver: function(t, n, i) { var o = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver; if (o) { var r = new o(i);
                    r.observe(t, n); var a = e.later(15e3, this, function() { r.disconnect(), a.cancel() }) } else i(null, null) }, bindUI: function() { this.mutationObserver(e.one("#siteWrapper").getDOMNode(), { childList: !0, subtree: !0 }, this.mutationCallback), e.one(window).on("resize", function() { this.getVariables(), this.syncUI(), e.Template.noYUI.vCenterTopSectionContent() }, this), e.Squarespace.Singletons.ShoppingCart.on("change", e.Template.Site.cartState), this.disableScroll(), e.Template.helper.on("resizeend", function() { e.all(".map-block[data-block-json]").each(function(t) { e.Template.helper.centerMapPin(t.one(".page-map"), JSON.parse(t.getData("block-json"))) }) }), e.one("#mobileNavToggle").on("change", function(t) { t.target.get("checked") === !1 && e.all("#overlayNav input.folder-toggle-box").set("checked", !1).each(function(e) { e.simulate("change") }) }), e.one(".collection-type-index") && (e.all(".index-gallery").each(function(t) { new e.Template.Gallery({ wrapper: t.one(".gallery-wrapper"), slides: ".slide-wrapper" }) }), e.one(".collection-type-index.homepage") && new e.Template.RevealOnScroll({ el: "#showOnScrollWrapper", offsetEl: ".index-section-wrapper", behavior: "bottom" })), e.one(".index-section-image img") && e.all(".index-section-image img").length >= 2 ? this.lazyload ? this.lazyload.refresh() : this.lazyload = new e.Template.Lazyload({ el: ".index-section-image img", mobile: !1, loadEvent: "throttle" }) : e.all(".index-section-image img").each(function(e) { ImageLoader.load(e.removeAttribute("data-load")) }), this.scrollNav(), this.altSections(e.all(".index-section.no-main-image")), e.Template.helper.scrollAnchors() }, syncUI: function() { this.runCenterNav(), this.overlayNavPadding(), this.folderEdgeDetection(), e.Template.helper.on("resizeend", this.scrollNav, this), e.Template.helper.on("resizeend", this.injectScrollNavContent(), this), e.one(".collection-type-index.homepage") ? (this.scrollNavHeight = e.one("#showOnScrollWrapper #mainNavWrapper") ? e.one("#showOnScrollWrapper #mainNavWrapper").get("clientHeight") : 0, e.all(this.navLinks).each(function(t) { t.on("click", function(n) { window.location.hash && history.pushState("", document.title, window.location.pathname), n.halt(); var i, o = t.getAttribute("href"); "/" === o.charAt(0) && (o = o.substr(2)), document.getElementById(o) && (i = this.mobileNav ? document.getElementById(o).getBoundingClientRect().top + window.scrollY + 1 : document.getElementById(o).getBoundingClientRect().top + window.scrollY - this.scrollNavHeight + 1, this.mobileNav ? (e.one("#mobileNavToggle").set("checked", !1).simulate("change"), e.later(400, this, function() { e.Template.helper.smoothScrollTo(i) })) : e.Template.helper.smoothScrollTo(i)) }, this) }, this)) : this.mobileNav && e.all(this.navLinks).each(function(t) { t.on("click", function(t) { e.one("#mobileNavToggle").set("checked", !1).simulate("change") }, this) }, this) }, mutationCallback: function(t, n) { if (t)
                    for (var i = 0; i < t.length; i++) { var o = Array.prototype.slice.call(t[i].addedNodes);
                        o.unshift(t[i].target); for (var r = 0; r < o.length; r++) { var a = e.Node(o[r]); if (a.ancestor(".index-section-wrapper.has-main-media")) { var s = a.ancestor(".index-section-wrapper").one(".index-section-image img");
                                s && ImageLoader.load(s) } if (window.location.hash) { var l = window.location.hash; "/" === l.charAt(0) && (l = l.substr(1)), e.one(l) && e.one(window).set("scrollTop", e.one(l).getY() + 1) } } } else e.on("io:end", function(t) { var n = e.later(1200, this, function() { e.all(".index-section-image img").each(function(e) { ImageLoader.load(e) }), n.cancel() }) }) }, getVariables: function() { this.headerHeight = e.one("#header").get("offsetHeight"), this.mobileNav = e.one(".always-use-overlay-nav") || e.config.win.innerWidth <= 768, this.navLinks = ".nav-wrapper .index.home a", "none" == e.one("#header .mobile-nav-toggle-label").getComputedStyle("display") ? this.mobileNavShowing = !1 : this.mobileNavShowing = !0 }, scrollNav: function() { if (e.one(".collection-type-index.homepage") && e.one("#header #mainNavWrapper") && e.one(".index.home")) { var t = e.all(".index-section:not(.gallery)"),
                        n = this.mobileNavShowing ? e.all("#mobileNavWrapper .index.home") : e.all("#showOnScrollWrapper #mainNavigation .index.home"),
                        i = 0,
                        o = 0,
                        a = this.mobileNavShowing ? 0 : e.one("#showOnScrollWrapper #mainNavWrapper").get("clientHeight") + 1,
                        s = e.bind(function() { t.each(function(t, n) { n = n++, t.getY() < e.config.win.scrollY + a && (i = n) }, this), e.config.win.scrollY + e.config.win.innerHeight >= e.one("body").get("clientHeight") ? (n.item(n.size() - 1).addClass("active"), i = n.size() - 1) : n.item(i).addClass("active"), i != o && (n.item(o).removeClass("active"), o = i) }, this),
                        l = e.throttle(s, 200);
                    e.one(window).on("scroll", l), e.one(window).on("scroll", function() { r(s, e.Template.Site, 200) }) } }, cartState: function() { var t = e.Squarespace.Singletons.ShoppingCart.get("totalQuantity"),
                    n = e.one(".custom-cart");
                n && (t && t > 0 ? n.removeClass("empty") : n.hasClass("empty") || n.addClass("empty")) }, disableScroll: function() { var t = e.one("#mobileNavToggle");
                t.on("change", function() { t.get("checked") === !0 ? e.one("body").addClass("disable-scroll") : e.one("body").removeClass("disable-scroll") }), e.Template.helper.disableScroll("disable-scroll") }, textShrink: function(t, n) { e.one(t) && e.one(t).ancestor(n) && e.all(t).each(function(t) { t.plug(e.Squarespace.TextShrink, { parentEl: t.ancestor(n) }) }) }, regularHeaderForGridGallery: function() { e.one(".collection-type-index.design-grid.has-banner-image") && e.one("#page #content .index-section:first-child .index-section-wrapper .gallery-content") ? e.one("body").removeClass("has-banner-image") : e.one(".collection-type-index.design-slideshow:not(.has-banner-image)") && e.one("#page #content .index-section:first-child .index-section-wrapper .gallery-content") && e.one("body").addClass("has-banner-image") }, fadeIn: function(t) { e.one(t) && e.one(t).hasClass("tmpl-loading") && e.all(t).each(function(e) { e.removeClass("tmpl-loading").addClass("tmpl-loaded") }) }, runCenterNav: function() { if (e.one("body:not(.always-use-overlay-nav)")) { var t = "#header #mainNavigation > div";
                    e.one(".index.home") && (t = "#header #mainNavigation > div:not(.home)", e.one(".expand-homepage-index-links") && (t = "#header #mainNavigation > div:not(.base)")), new e.Template.CenterNav({ navItems: t, centerEl: "#header .title-logo-wrapper h1", wrapper: "#header", innerWrapper: "#header #headerNav" }) } }, overlayNavPadding: function() { e.config.win.innerWidth > 640 && e.one("#overlayNav #mainNavWrapper") && e.one("#overlayNav #mobileNavWrapper").setStyles({ paddingTop: this.headerHeight, paddingBottom: this.headerHeight }) }, folderEdgeDetection: function() { e.all(".subnav").each(function(t) { var n = e.config.win.innerWidth;
                    n - t.getX() <= t.get("offsetWidth") && t.addClass("right-align") }) }, transparentHeaderPadding: function() { var t = e.one("#header").getComputedStyle("position"),
                    n = (e.one("#header .header-inner h1").get("offsetHeight") + parseInt(e.one("#header .header-inner").getComputedStyle("paddingTop"), 10)) / 2; if ("absolute" == t && e.one(".main-content .index-section:first-child .index-section-wrapper.has-main-media"));
                else if ("absolute" == t && e.one("body.has-banner-image")) { e.one(".banner-thumbnail-wrapper .desc-wrapper") && e.one(".banner-thumbnail-wrapper .desc-wrapper").setStyle("paddingTop", n); var i = setInterval(function() { document.querySelector("#thumbnail img") && document.querySelector("#thumbnail img").clientHeight != document.querySelector("#thumbnail").clientHeight ? e.all('.banner-thumbnail-wrapper img[data-load="false"]').each(function(e) { ImageLoader.load(e.removeAttribute("data-load")) }) : clearInterval(i) }, 100) } else e.all('.banner-thumbnail-wrapper img[data-load="false"]').each(function(e) { ImageLoader.load(e.removeAttribute("data-load")) }) }, injectScrollNavContent: function() { e.one(".collection-type-index.homepage") && e.one("#header #mainNavWrapper") && (e.one("#showOnScrollWrapper") && e.one("#showOnScrollWrapper").empty(), this.fixedEl = this.mobileNav ? ".show-on-scroll-mobile" : ".show-on-scroll", e.one("#mobileNavToggle").insert(this.wrapper.setHTML(e.one(this.fixedEl).get("outerHTML")), "after"), ".show-on-scroll" == this.fixedEl && e.all("#showOnScrollWrapper #mainNavWrapper nav div").removeAttribute("style")) }, altSections: function(e) { e.each(function(e) { e.get("nextElementSibling") && e.get("nextElementSibling").hasClass("index-section.no-main-image") && !e.hasClass("alt-section") && e.get("nextElementSibling").addClass("alt-section") }) } }) }) }, function(e, t, n) { var i = n(73).VideoBackground,
        o = n(126);
    e.exports = { VideoBackground: i, getVideoProps: o } }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.videoAutoplayTest = t.VideoFilterPropertyValues = t.VideoBackground = void 0, n(74); var i = n(75);
    t.VideoBackground = i.VideoBackground, t.VideoFilterPropertyValues = i.VideoFilterPropertyValues, t.videoAutoplayTest = i.videoAutoplayTest }, function(e, t) {! function() {
        function e(e, t) { t = t || { bubbles: !1, cancelable: !1, detail: void 0 }; var n = document.createEvent("CustomEvent"); return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n } return "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, void(window.CustomEvent = e)) }() }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }), t.videoAutoplayTest = t.VideoFilterPropertyValues = t.VideoBackground = void 0; var o = n(76),
        r = i(o),
        a = n(125),
        s = n(107),
        l = i(s);
    t.VideoBackground = r.default, t.VideoFilterPropertyValues = a.filterProperties, t.videoAutoplayTest = l.default }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 }); var o = n(77),
        r = i(o),
        a = n(101),
        s = i(a),
        l = n(103),
        c = i(l),
        u = n(60),
        h = i(u),
        d = n(61),
        f = i(d),
        p = n(68),
        A = i(p),
        m = n(107),
        g = i(m),
        v = !1,
        y = { container: ".background-wrapper", url: "https://youtu.be/xkEmYQvJ_68", fitMode: "fill", maxLoops: "", scaleFactor: 1, playbackSpeed: 1, filter: 1, filterStrength: 50, timeCode: { start: 0, end: null }, useCustomFallbackImage: !1 },
        w = n(125).filterOptions,
        b = n(125).filterProperties,
        S = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]{11}).*/,
        x = /^.*(vimeo\.com\/)([0-9]{7,}(#t\=.*s)?)/,
        T = function() {
            function e(t) { var n = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                (0, h.default)(this, e), this.windowContext = i, this.events = [], this.initializeProperties(t), (0, g.default)().then(function(e) { n.canAutoPlay = !0 }, function(e) { n.canAutoPlay = !1, n.container.classList.add("mobile"), n.logger("added mobile") }).then(function(e) { n.setDisplayEffects(), n.setFallbackImage(), n.callVideoAPI(), n.bindUI(), v === !0 && (window.vdbg = n, n.debugInterval = setInterval(function() { n.player.getCurrentTime && n.logger((n.player.getCurrentTime() / n.player.getDuration()).toFixed(2)) }, 900)) }) } return (0, f.default)(e, [{ key: "destroy", value: function() { this.events && this.events.forEach(function(e) { return e.target.removeEventListener(e.type, e.handler, !0) }), this.events = null, this.player && "function" == typeof this.player.destroy && (this.player.iframe.classList.remove("ready"), clearTimeout(this.player.playTimeout), this.player.playTimeout = null, this.player.destroy(), this.player = {}), "number" == typeof this.timer && (clearTimeout(this.timer), this.timer = null), "number" == typeof this.debugInterval && (clearInterval(this.debugInterval), this.debugInterval = null) } }, { key: "bindUI", value: function() { var e = this,
                        t = "undefined" == typeof window.orientation ? "resize" : "orientationchange",
                        n = function() { if ("resize" === t && e.player.iframe) e.windowContext.requestAnimationFrame(function() { e.scaleVideo() });
                            else if (e.useCustomFallbackImage && e.windowContext.ImageLoader) { var n = e.container.querySelector("img[data-src]");
                                e.windowContext.ImageLoader.load(n, !0) } };
                    this.events.push({ target: this.windowContext, type: "resize", handler: n }), this.windowContext.addEventListener(t, n, !0) } }, { key: "initializeProperties", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; if (e = (0, c.default)({}, y, e), 1 === e.container.nodeType) this.container = e.container;
                    else { if ("string" != typeof e.container) return console.error("Container " + e.container + " not found"), !1;
                        this.container = document.querySelector(e.container) } this.videoId = this.getVideoID(e.url), this.filter = e.filter, this.filterStrength = e.filterStrength, this.useCustomFallbackImage = e.useCustomFallbackImage, this.fitMode = e.fitMode, this.maxLoops = parseInt(e.maxLoops, 10) || null, this.scaleFactor = e.scaleFactor, this.playbackSpeed = 0 === parseFloat(e.playbackSpeed) ? 1 : parseFloat(e.playbackSpeed), this.timeCode = { start: this._getStartTime(e.url) || e.timeCode.start, end: e.timeCode.end }, this.player = {}, this.currentLoop = 0 } }, { key: "getVideoID", value: function(e) { e || (e = y.url); var t = e.match(S); return t && t[2].length ? (this.videoSource = "youtube", t[2]) : (t = e.match(x), t && t[2].length ? (this.videoSource = "vimeo", t[2]) : "") } }, { key: "setFallbackImage", value: function() { if (this.useCustomFallbackImage) { var e = this.container.querySelector(".custom-fallback-image"),
                            t = document.createElement("img");
                        t.src = e.src, t.addEventListener("load", function() { e.classList.add("loaded") }) } } }, { key: "callVideoAPI", value: function() { "youtube" === this.videoSource && this.initializeYouTubeAPI(), "vimeo" === this.videoSource && this.initializeVimeoAPI() } }, { key: "initializeYouTubeAPI", value: function() { var e = this; if (this.canAutoPlay) { if (this.windowContext.document.documentElement.querySelector('script[src*="www.youtube.com/iframe_api"].loaded')) return void this.setVideoPlayer();
                        this.player.ready = !1; var t = this.windowContext.document.createElement("script");
                        t.src = "https://www.youtube.com/iframe_api"; var n = this.windowContext.document.getElementsByTagName("script")[0];
                        n.parentNode.insertBefore(t, n), t.addEventListener("load", function(t) { t.currentTarget.classList.add("loaded"), e.setVideoPlayer() }, !0) } } }, { key: "initializeVimeoAPI", value: function() { this.canAutoPlay && this.setVideoPlayer() } }, { key: "setVideoPlayer", value: function() { if (this.player.ready) try { this.player.destroy(), this.player.ready = !1 } catch (e) {}
                    "youtube" === this.videoSource ? this.initializeYouTubePlayer() : "vimeo" === this.videoSource && this.initializeVimeoPlayer() } }, { key: "initializeYouTubePlayer", value: function() { var e = this,
                        t = null; if (1 !== this.windowContext.YT.loaded) return setTimeout(this.setVideoPlayer.bind(this), 100), !1; var n = function(t) { var n = e.player;
                            n.iframe = n.getIframe(), n.iframe.classList.add("background-video"), e.syncPlayer(), n.mute(); var i = new CustomEvent("ready");
                            e.container.dispatchEvent(i), document.body.classList.add("ready"), n.ready = !0, e.canAutoPlay && (e.timeCode.start >= n.getDuration() && (e.timeCode.start = 0), n.seekTo(e.timeCode.start), n.playVideo(), e.logger("playing")) },
                        i = function(n) { var i = e.player,
                                o = i.getIframe(),
                                r = (i.getDuration() - e.timeCode.start) / e.playbackSpeed,
                                a = function n() { if (null === t) { if (i.getCurrentTime() + .1 >= i.getDuration()) { if (e.maxLoops && (e.currentLoop++, e.currentLoop > e.maxLoops)) return i.pauseVideo(), void(e.currentLoop = 0);
                                            t = i.getCurrentTime(), i.pauseVideo(), i.seekTo(e.timeCode.start) } } else i.getCurrentTime() < t && (t = null, i.playVideo());
                                    requestAnimationFrame(n.bind(e)) };
                            n.data === e.windowContext.YT.PlayerState.BUFFERING && 1 !== i.getVideoLoadedFraction() && (0 === i.getCurrentTime() || i.getCurrentTime() > r - -.1) ? (e.logger("BUFFERING"), e.autoPlayTestTimeout()) : n.data === e.windowContext.YT.PlayerState.PLAYING ? (null !== e.player.playTimeout && (clearTimeout(e.player.playTimeout), e.player.playTimeout = null), e.canAutoPlay || (e.canAutoPlay = !0, e.container.classList.remove("mobile")), e.logger("PLAYING"), o.classList.add("ready"), requestAnimationFrame(a.bind(e))) : n.data === e.windowContext.YT.PlayerState.ENDED && i.playVideo() },
                        o = this.container.querySelector("#player");
                    o || (o = document.createElement("div"), o.id = "player", this.container.appendChild(o)), this.player = new this.windowContext.YT.Player(o, { height: "315", width: "560", videoId: this.videoId, playerVars: { autohide: 1, autoplay: 0, controls: 0, enablejsapi: 1, iv_load_policy: 3, loop: 0, modestbranding: 1, playsinline: 1, rel: 0, showinfo: 0, wmode: "opaque" }, events: { onReady: function(e) { n(e) }, onStateChange: function(e) { i(e) } } }) } }, { key: "initializeVimeoPlayer", value: function() { var e = this,
                        t = this.windowContext.document.createElement("iframe");
                    t.id = "vimeoplayer", t.classList.add("background-video"); var n = "&background=1";
                    t.src = "//player.vimeo.com/video/" + this.videoId + "?api=1" + n, this.container.appendChild(t), this.player.iframe = t; var i = this.player,
                        o = "*",
                        r = function(t, n) { var i = { method: t };
                            n && (i.value = n); var r = (0, s.default)(i);
                            e.windowContext.eval("(function(ctx){ ctx.player.iframe.contentWindow.postMessage(" + r + ", " + (0, s.default)(o) + "); })")(e) };
                    i.postMessageManager = r; var a = function() { if (i.dimensions.width && i.dimensions.height && i.duration) { e.syncPlayer(); var t = new CustomEvent("ready");
                                e.container.dispatchEvent(t), document.body.classList.add("ready"), r("setVolume", "0"), r("setLoop", "true"), r("seekTo", e.timeCode.start), r("play"), r("addEventListener", "playProgress") } },
                        l = function() { i.dimensions = {}, r("getDuration"), r("getVideoHeight"), r("getVideoWidth") },
                        c = function() { clearTimeout(i.playTimeout), i.playTimeout = null, i.ready = !0, i.iframe.classList.add("ready"), e.canAutoPlay || (e.canAutoPlay = !0, e.container.classList.remove("mobile")) },
                        u = function(t) { if (!/^https?:\/\/player.vimeo.com/.test(t.origin)) return !1;
                            o = t.origin; var n = t.data; switch ("string" == typeof n && (n = JSON.parse(n)), e.logger(n), n.event) {
                                case "ready":
                                    l(); break;
                                case "playProgress":
                                case "timeupdate":
                                    r("setVolume", "0"), null !== i.playTimeout && c(), n.data.percent >= .98 && e.timeCode.start > 0 && r("seekTo", e.timeCode.start) } switch (n.method) {
                                case "getVideoHeight":
                                    i.dimensions.height = n.value, a(); break;
                                case "getVideoWidth":
                                    i.dimensions.width = n.value, a(); break;
                                case "getDuration":
                                    i.duration = n.value, e.timeCode.start >= i.duration && (e.timeCode.start = 0), a() } },
                        h = function(e) { u(e) };
                    this.windowContext.addEventListener("message", h, !1), this.autoPlayTestTimeout(), i.destroy = function() { e.windowContext.removeEventListener("message", h), i.iframe.parentElement && i.iframe.parentElement.removeChild(i.iframe) } } }, { key: "scaleVideo", value: function(e) { var t = e || this.scaleFactor,
                        n = this.player.iframe,
                        i = this._findPlayerDimensions(); if ("fill" !== this.fitMode) return n.style.width = "", n.style.height = "", !1; var o = n.parentNode.clientWidth,
                        r = n.parentNode.clientHeight,
                        a = o / r,
                        s = i.width / i.height,
                        l = 0,
                        c = 0;
                    a > s ? (l = o * t, c = o * t / s, n.style.width = l + "px", n.style.height = c + "px") : s > a ? (l = r * t * s, c = r * t, n.style.width = l + "px", n.style.height = c + "px") : (l = o * t, c = r * t, n.style.width = l + "px", n.style.height = c + "px"), n.style.left = 0 - (l - o) / 2 + "px", n.style.top = 0 - (c - r) / 2 + "px" } }, { key: "setSpeed", value: function(e) { this.playbackSpeed = parseFloat(this.playbackSpeed), this.player.setPlaybackRate(this.playbackSpeed) } }, { key: "setDisplayEffects", value: function() { this.setFilter() } }, { key: "setFilter", value: function() { var e = this.container.style,
                        t = w[this.filter - 1],
                        n = ""; "none" !== t && (n = this.getFilterStyle(t, this.filterStrength)), "blur" === t ? (e.webkitFilter = "", e.filter = "", this.container.classList.add("filter-blur"), Array.prototype.slice.call(this.container.children).forEach(function(e) { e.style.webkitFilter = n, e.style.filter = n })) : (e.webkitFilter = n, e.filter = n, this.container.classList.remove("filter-blur"), Array.prototype.slice.call(this.container.children).forEach(function(e) { e.style.webkitFilter = "", e.style.filter = "" })) } }, { key: "getFilterStyle", value: function(e, t) { return e + "(" + (b[e].modifier(t) + b[e].unit) + ")" } }, { key: "_findPlayerDimensions", value: function() { var e = void 0,
                        t = void 0,
                        n = this.player; if ("youtube" === this.videoSource && n)
                        for (var i in n) { var o = n[i]; if ("object" === ("undefined" == typeof o ? "undefined" : (0, r.default)(o)) && o.width && o.height) { e = o.width, t = o.height; break } } else "vimeo" === this.videoSource && n && (n.dimensions ? (e = n.dimensions.width, t = n.dimensions.height) : n.iframe && (e = n.iframe.clientWidth, t = n.iframe.clientHeight)); return e && t || (e = this.container.clientWidth, t = this.container.clientHeight, console.warn("Video player dimensions not found.")), { width: e, height: t } } }, { key: "_getStartTime", value: function(e) { var t = new A.default(e, !0),
                        n = this._getTimeParameter(t); if (!n) return !1; var i = /[hms]/,
                        o = /[#t=s]/,
                        r = void 0; switch (this.videoSource) {
                        case "youtube":
                            r = n.split(i).filter(Boolean); break;
                        case "vimeo":
                            r = n.split(o).filter(Boolean) } var a = parseInt(r.pop(), 10) || 0,
                        s = 60 * parseInt(r.pop(), 10) || 0,
                        l = 3600 * parseInt(r.pop(), 10) || 0; return l + s + a } }, { key: "_getTimeParameter", value: function(e) { if ("youtube" === this.videoSource && (!e.query || !e.query.t) || "vimeo" === this.videoSource && !e.hash) return !1; var t = void 0; return "youtube" === this.videoSource ? t = e.query.t : "vimeo" === this.videoSource && (t = e.hash), t } }, { key: "autoPlayTestTimeout", value: function() { var e = this;
                    this.player.playTimeout = setTimeout(function() { e.canAutoPlay = !1, e.container.classList.add("mobile"), e.logger("added mobile") }, 2500) } }, { key: "syncPlayer", value: function() { this.setDisplayEffects(), "youtube" === this.videoSource && this.setSpeed(), this.scaleVideo() } }, { key: "logger", value: function(e) { v && console.log(e) } }]), e }();
    t.default = T }, function(e, t, n) { "use strict";

    function i(e) { return e && e.__esModule ? e : { default: e } } t.__esModule = !0; var o = n(78),
        r = i(o),
        a = n(85),
        s = i(a),
        l = "function" == typeof s.default && "symbol" == typeof r.default ? function(e) { return typeof e } : function(e) { return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : typeof e };
    t.default = "function" == typeof s.default && "symbol" === l(r.default) ? function(e) { return "undefined" == typeof e ? "undefined" : l(e) } : function(e) { return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : l(e) } }, function(e, t, n) { e.exports = { default: n(79), __esModule: !0 } }, function(e, t, n) { n(9), n(80), e.exports = n(84).f("iterator") }, function(e, t, n) { n(81); for (var i = n(16), o = n(20), r = n(32), a = n(50)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) { var c = s[l],
            u = i[c],
            h = u && u.prototype;
        h && !h[a] && o(h, a, c), r[c] = r.Array } }, function(e, t, n) { "use strict"; var i = n(82),
        o = n(83),
        r = n(32),
        a = n(38);
    e.exports = n(13)(Array, "Array", function(e, t) { this._t = a(e), this._i = 0, this._k = t }, function() { var e = this._t,
            t = this._k,
            n = this._i++; return !e || n >= e.length ? (this._t = void 0, o(1)) : "keys" == t ? o(0, n) : "values" == t ? o(0, e[n]) : o(0, [n, e[n]]) }, "values"), r.Arguments = r.Array, i("keys"), i("values"), i("entries") }, function(e, t) { e.exports = function() {} }, function(e, t) { e.exports = function(e, t) { return { value: t, done: !!e } } }, function(e, t, n) { t.f = n(50) }, function(e, t, n) { e.exports = { default: n(86), __esModule: !0 } }, function(e, t, n) { n(87), n(98), n(99), n(100), e.exports = n(17).Symbol }, function(e, t, n) { "use strict"; var i = n(16),
        o = n(31),
        r = n(25),
        a = n(15),
        s = n(30),
        l = n(88).KEY,
        c = n(26),
        u = n(45),
        h = n(49),
        d = n(46),
        f = n(50),
        p = n(84),
        A = n(89),
        m = n(90),
        g = n(91),
        v = n(94),
        y = n(22),
        w = n(38),
        b = n(28),
        S = n(29),
        x = n(34),
        T = n(95),
        k = n(97),
        Y = n(21),
        I = n(36),
        C = k.f,
        E = Y.f,
        P = T.f,
        L = i.Symbol,
        M = i.JSON,
        N = M && M.stringify,
        F = "prototype",
        O = f("_hidden"),
        V = f("toPrimitive"),
        R = {}.propertyIsEnumerable,
        j = u("symbol-registry"),
        W = u("symbols"),
        G = u("op-symbols"),
        B = Object[F],
        H = "function" == typeof L,
        U = i.QObject,
        _ = !U || !U[F] || !U[F].findChild,
        D = r && c(function() { return 7 != x(E({}, "a", { get: function() { return E(this, "a", { value: 7 }).a } })).a }) ? function(e, t, n) { var i = C(B, t);
            i && delete B[t], E(e, t, n), i && e !== B && E(B, t, i) } : E,
        Q = function(e) { var t = W[e] = x(L[F]); return t._k = e, t },
        Z = H && "symbol" == typeof L.iterator ? function(e) { return "symbol" == typeof e } : function(e) { return e instanceof L },
        z = function(e, t, n) { return e === B && z(G, t, n), y(e), t = b(t, !0), y(n), o(W, t) ? (n.enumerable ? (o(e, O) && e[O][t] && (e[O][t] = !1), n = x(n, { enumerable: S(0, !1) })) : (o(e, O) || E(e, O, S(1, {})), e[O][t] = !0), D(e, t, n)) : E(e, t, n) },
        q = function(e, t) { y(e); for (var n, i = g(t = w(t)), o = 0, r = i.length; r > o;) z(e, n = i[o++], t[n]); return e },
        J = function(e, t) { return void 0 === t ? x(e) : q(x(e), t) },
        X = function(e) { var t = R.call(this, e = b(e, !0)); return !(this === B && o(W, e) && !o(G, e)) && (!(t || !o(this, e) || !o(W, e) || o(this, O) && this[O][e]) || t) },
        K = function(e, t) { if (e = w(e), t = b(t, !0), e !== B || !o(W, t) || o(G, t)) { var n = C(e, t); return !n || !o(W, t) || o(e, O) && e[O][t] || (n.enumerable = !0), n } },
        $ = function(e) { for (var t, n = P(w(e)), i = [], r = 0; n.length > r;) o(W, t = n[r++]) || t == O || t == l || i.push(t); return i },
        ee = function(e) { for (var t, n = e === B, i = P(n ? G : w(e)), r = [], a = 0; i.length > a;) !o(W, t = i[a++]) || n && !o(B, t) || r.push(W[t]); return r };
    H || (L = function() { if (this instanceof L) throw TypeError("Symbol is not a constructor!"); var e = d(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) { this === B && t.call(G, n), o(this, O) && o(this[O], e) && (this[O][e] = !1), D(this, e, S(1, n)) }; return r && _ && D(B, e, { configurable: !0, set: t }), Q(e) }, s(L[F], "toString", function() { return this._k }), k.f = K, Y.f = z, n(96).f = T.f = $, n(93).f = X, n(92).f = ee, r && !n(14) && s(B, "propertyIsEnumerable", X, !0), p.f = function(e) { return Q(f(e)) }), a(a.G + a.W + a.F * !H, { Symbol: L }); for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) f(te[ne++]); for (var ie = I(f.store), oe = 0; ie.length > oe;) A(ie[oe++]);
    a(a.S + a.F * !H, "Symbol", { for: function(e) { return o(j, e += "") ? j[e] : j[e] = L(e) }, keyFor: function(e) { if (Z(e)) return m(j, e); throw TypeError(e + " is not a symbol!") }, useSetter: function() { _ = !0 }, useSimple: function() { _ = !1 } }), a(a.S + a.F * !H, "Object", { create: J, defineProperty: z, defineProperties: q, getOwnPropertyDescriptor: K, getOwnPropertyNames: $, getOwnPropertySymbols: ee }), M && a(a.S + a.F * (!H || c(function() { var e = L(); return "[null]" != N([e]) || "{}" != N({ a: e }) || "{}" != N(Object(e)) })), "JSON", { stringify: function(e) { if (void 0 !== e && !Z(e)) { for (var t, n, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]); return t = i[1], "function" == typeof t && (n = t), !n && v(t) || (t = function(e, t) { if (n && (t = n.call(this, e, t)), !Z(t)) return t }), i[1] = t, N.apply(M, i) } } }), L[F][V] || n(20)(L[F], V, L[F].valueOf), h(L, "Symbol"), h(Math, "Math", !0), h(i.JSON, "JSON", !0) }, function(e, t, n) { var i = n(46)("meta"),
        o = n(23),
        r = n(31),
        a = n(21).f,
        s = 0,
        l = Object.isExtensible || function() { return !0 },
        c = !n(26)(function() { return l(Object.preventExtensions({})) }),
        u = function(e) { a(e, i, { value: { i: "O" + ++s, w: {} } }) },
        h = function(e, t) { if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e; if (!r(e, i)) { if (!l(e)) return "F"; if (!t) return "E";
                u(e) } return e[i].i },
        d = function(e, t) { if (!r(e, i)) { if (!l(e)) return !0; if (!t) return !1;
                u(e) } return e[i].w },
        f = function(e) { return c && p.NEED && l(e) && !r(e, i) && u(e), e },
        p = e.exports = { KEY: i, NEED: !1, fastKey: h, getWeak: d, onFreeze: f } }, function(e, t, n) { var i = n(16),
        o = n(17),
        r = n(14),
        a = n(84),
        s = n(21).f;
    e.exports = function(e) { var t = o.Symbol || (o.Symbol = r ? {} : i.Symbol || {}); "_" == e.charAt(0) || e in t || s(t, e, { value: a.f(e) }) } }, function(e, t, n) { var i = n(36),
        o = n(38);
    e.exports = function(e, t) { for (var n, r = o(e), a = i(r), s = a.length, l = 0; s > l;)
            if (r[n = a[l++]] === t) return n } }, function(e, t, n) { var i = n(36),
        o = n(92),
        r = n(93);
    e.exports = function(e) { var t = i(e),
            n = o.f; if (n)
            for (var a, s = n(e), l = r.f, c = 0; s.length > c;) l.call(e, a = s[c++]) && t.push(a); return t } }, function(e, t) { t.f = Object.getOwnPropertySymbols }, function(e, t) { t.f = {}.propertyIsEnumerable }, function(e, t, n) { var i = n(40);
    e.exports = Array.isArray || function(e) { return "Array" == i(e) } }, function(e, t, n) { var i = n(38),
        o = n(96).f,
        r = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        s = function(e) { try { return o(e) } catch (e) { return a.slice() } };
    e.exports.f = function(e) { return a && "[object Window]" == r.call(e) ? s(e) : o(i(e)) } }, function(e, t, n) { var i = n(37),
        o = n(47).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) { return i(e, o) } }, function(e, t, n) { var i = n(93),
        o = n(29),
        r = n(38),
        a = n(28),
        s = n(31),
        l = n(24),
        c = Object.getOwnPropertyDescriptor;
    t.f = n(25) ? c : function(e, t) { if (e = r(e), t = a(t, !0), l) try { return c(e, t) } catch (e) {}
        if (s(e, t)) return o(!i.f.call(e, t), e[t]) } }, function(e, t) {}, function(e, t, n) { n(89)("asyncIterator") }, function(e, t, n) { n(89)("observable") }, function(e, t, n) { e.exports = { default: n(102), __esModule: !0 } }, function(e, t, n) { var i = n(17),
        o = i.JSON || (i.JSON = { stringify: JSON.stringify });
    e.exports = function(e) { return o.stringify.apply(o, arguments) } }, function(e, t, n) { e.exports = { default: n(104), __esModule: !0 } }, function(e, t, n) { n(105), e.exports = n(17).Object.assign }, function(e, t, n) { var i = n(15);
    i(i.S + i.F, "Object", { assign: n(106) }) }, function(e, t, n) { "use strict"; var i = n(36),
        o = n(92),
        r = n(93),
        a = n(52),
        s = n(39),
        l = Object.assign;
    e.exports = !l || n(26)(function() { var e = {},
            t = {},
            n = Symbol(),
            i = "abcdefghijklmnopqrst"; return e[n] = 7, i.split("").forEach(function(e) { t[e] = e }), 7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != i }) ? function(e, t) { for (var n = a(e), l = arguments.length, c = 1, u = o.f, h = r.f; l > c;)
            for (var d, f = s(arguments[c++]), p = u ? i(f).concat(u(f)) : i(f), A = p.length, m = 0; A > m;) h.call(f, d = p[m++]) && (n[d] = f[d]); return n } : l }, function(e, t, n) {
    "use strict";

    function i(e) { return e && e.__esModule ? e : { default: e } } Object.defineProperty(t, "__esModule", { value: !0 });
    var o = n(108),
        r = i(o),
        a = !1,
        s = 5,
        l = 200,
        c = n(124),
        u = c.OggVideo,
        h = c.Mp4Video,
        d = function() {
            return new r.default(function(e, t) {
                if ("resolve" === a) return void e(!0);
                if ("reject" === a) return void t("rejected for debugging");
                var n = document.createElement("video"),
                    i = n.style,
                    o = 0,
                    r = void 0,
                    c = function i(a) { o++, clearTimeout(r); var c = a && "playing" === a.type || 0 !== n.currentTime; return !c && o < s ? void(r = setTimeout(i, l)) : (n.removeEventListener("playing", i, !1), c ? e(c) : t("no autoplay: browser does not support autoplay"), void n.parentNode.removeChild(n)) };
                if (!("autoplay" in n)) return void t("no autoplay: browser does not support autoplay attribute");
                i.cssText = "position: absolute; height: 0; width: 0; overflow: hidden; visibility: hidden; z-index: -100";
                try {
                    if (n.canPlayType('video/ogg; codecs="theora"').match(/^(probably)|(maybe)/)) n.src = u;
                    else { if (!n.canPlayType('video/mp4; codecs="avc1.42E01E"').match(/^(probably)|(maybe)/)) return void t("no autoplay: element does not support mp4 or ogg format");
                        n.src = h }
                } catch (e) { return void t("no autoplay: " + e) } n.setAttribute("autoplay", ""), n.setAttribute("muted", "true"), n.style.cssText = "display:none", document.body.appendChild(n), setTimeout(function() { n.addEventListener("playing", c, !1), r = setTimeout(c, l) }, 0)
            })
        };
    t.default = d
}, function(e, t, n) { e.exports = { default: n(109), __esModule: !0 } }, function(e, t, n) { n(98), n(9), n(80), n(110), n(122), n(123), e.exports = n(17).Promise }, function(e, t, n) { "use strict"; var i, o, r, a, s = n(14),
        l = n(16),
        c = n(18),
        u = n(58),
        h = n(15),
        d = n(23),
        f = n(19),
        p = n(111),
        A = n(112),
        m = n(113),
        g = n(114).set,
        v = n(116)(),
        y = n(117),
        w = n(118),
        b = n(119),
        S = "Promise",
        x = l.TypeError,
        T = l.process,
        k = l[S],
        Y = "process" == u(T),
        I = function() {},
        C = o = y.f,
        E = !! function() { try { var e = k.resolve(1),
                    t = (e.constructor = {})[n(50)("species")] = function(e) { e(I, I) }; return (Y || "function" == typeof PromiseRejectionEvent) && e.then(I) instanceof t } catch (e) {} }(),
        P = s ? function(e, t) { return e === t || e === k && t === a } : function(e, t) { return e === t },
        L = function(e) { var t; return !(!d(e) || "function" != typeof(t = e.then)) && t },
        M = function(e, t) { if (!e._n) { e._n = !0; var n = e._c;
                v(function() { for (var i = e._v, o = 1 == e._s, r = 0, a = function(t) { var n, r, a = o ? t.ok : t.fail,
                                s = t.resolve,
                                l = t.reject,
                                c = t.domain; try { a ? (o || (2 == e._h && O(e), e._h = 1), a === !0 ? n = i : (c && c.enter(), n = a(i), c && c.exit()), n === t.promise ? l(x("Promise-chain cycle")) : (r = L(n)) ? r.call(n, s, l) : s(n)) : l(i) } catch (e) { l(e) } }; n.length > r;) a(n[r++]);
                    e._c = [], e._n = !1, t && !e._h && N(e) }) } },
        N = function(e) { g.call(l, function() { var t, n, i, o = e._v,
                    r = F(e); if (r && (t = w(function() { Y ? T.emit("unhandledRejection", o, e) : (n = l.onunhandledrejection) ? n({ promise: e, reason: o }) : (i = l.console) && i.error && i.error("Unhandled promise rejection", o) }), e._h = Y || F(e) ? 2 : 1), e._a = void 0, r && t.e) throw t.v }) },
        F = function(e) { if (1 == e._h) return !1; for (var t, n = e._a || e._c, i = 0; n.length > i;)
                if (t = n[i++], t.fail || !F(t.promise)) return !1; return !0 },
        O = function(e) { g.call(l, function() { var t;
                Y ? T.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({ promise: e, reason: e._v }) }) },
        V = function(e) { var t = this;
            t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), M(t, !0)) },
        R = function(e) { var t, n = this; if (!n._d) { n._d = !0, n = n._w || n; try { if (n === e) throw x("Promise can't be resolved itself");
                    (t = L(e)) ? v(function() { var i = { _w: n, _d: !1 }; try { t.call(e, c(R, i, 1), c(V, i, 1)) } catch (e) { V.call(i, e) } }): (n._v = e, n._s = 1, M(n, !1)) } catch (e) { V.call({ _w: n, _d: !1 }, e) } } };
    E || (k = function(e) { p(this, k, S, "_h"), f(e), i.call(this); try { e(c(R, this, 1), c(V, this, 1)) } catch (e) { V.call(this, e) } }, i = function(e) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1 }, i.prototype = n(120)(k.prototype, { then: function(e, t) { var n = C(m(this, k)); return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = Y ? T.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && M(this, !1), n.promise }, catch: function(e) { return this.then(void 0, e) } }), r = function() { var e = new i;
        this.promise = e, this.resolve = c(R, e, 1), this.reject = c(V, e, 1) }, y.f = C = function(e) { return P(k, e) ? new r(e) : o(e) }), h(h.G + h.W + h.F * !E, { Promise: k }), n(49)(k, S), n(121)(S), a = n(17)[S], h(h.S + h.F * !E, S, { reject: function(e) { var t = C(this),
                n = t.reject; return n(e), t.promise } }), h(h.S + h.F * (s || !E), S, { resolve: function(e) { return e instanceof k && P(e.constructor, this) ? e : b(this, e) } }), h(h.S + h.F * !(E && n(59)(function(e) { k.all(e).catch(I) })), S, { all: function(e) { var t = this,
                n = C(t),
                i = n.resolve,
                o = n.reject,
                r = w(function() { var n = [],
                        r = 0,
                        a = 1;
                    A(e, !1, function(e) { var s = r++,
                            l = !1;
                        n.push(void 0), a++, t.resolve(e).then(function(e) { l || (l = !0, n[s] = e, --a || i(n)) }, o) }), --a || i(n) }); return r.e && o(r.v), n.promise }, race: function(e) { var t = this,
                n = C(t),
                i = n.reject,
                o = w(function() { A(e, !1, function(e) { t.resolve(e).then(n.resolve, i) }) }); return o.e && i(o.v), n.promise } }) }, function(e, t) { e.exports = function(e, t, n, i) { if (!(e instanceof t) || void 0 !== i && i in e) throw TypeError(n + ": incorrect invocation!"); return e } }, function(e, t, n) { var i = n(18),
        o = n(54),
        r = n(55),
        a = n(22),
        s = n(42),
        l = n(57),
        c = {},
        u = {},
        t = e.exports = function(e, t, n, h, d) { var f, p, A, m, g = d ? function() { return e } : l(e),
                v = i(n, h, t ? 2 : 1),
                y = 0; if ("function" != typeof g) throw TypeError(e + " is not iterable!"); if (r(g)) { for (f = s(e.length); f > y; y++)
                    if (m = t ? v(a(p = e[y])[0], p[1]) : v(e[y]), m === c || m === u) return m } else
                for (A = g.call(e); !(p = A.next()).done;)
                    if (m = o(A, v, p.value, t), m === c || m === u) return m };
    t.BREAK = c, t.RETURN = u }, function(e, t, n) { var i = n(22),
        o = n(19),
        r = n(50)("species");
    e.exports = function(e, t) { var n, a = i(e).constructor; return void 0 === a || void 0 == (n = i(a)[r]) ? t : o(n) } }, function(e, t, n) { var i, o, r, a = n(18),
        s = n(115),
        l = n(48),
        c = n(27),
        u = n(16),
        h = u.process,
        d = u.setImmediate,
        f = u.clearImmediate,
        p = u.MessageChannel,
        A = u.Dispatch,
        m = 0,
        g = {},
        v = "onreadystatechange",
        y = function() { var e = +this; if (g.hasOwnProperty(e)) { var t = g[e];
                delete g[e], t() } },
        w = function(e) { y.call(e.data) };
    d && f || (d = function(e) { for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]); return g[++m] = function() { s("function" == typeof e ? e : Function(e), t) }, i(m), m }, f = function(e) { delete g[e] }, "process" == n(40)(h) ? i = function(e) { h.nextTick(a(y, e, 1)) } : A && A.now ? i = function(e) { A.now(a(y, e, 1)) } : p ? (o = new p, r = o.port2, o.port1.onmessage = w, i = a(r.postMessage, r, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (i = function(e) { u.postMessage(e + "", "*") }, u.addEventListener("message", w, !1)) : i = v in c("script") ? function(e) { l.appendChild(c("script"))[v] = function() { l.removeChild(this), y.call(e) } } : function(e) { setTimeout(a(y, e, 1), 0) }), e.exports = { set: d, clear: f } }, function(e, t) { e.exports = function(e, t, n) { var i = void 0 === n; switch (t.length) {
            case 0:
                return i ? e() : e.call(n);
            case 1:
                return i ? e(t[0]) : e.call(n, t[0]);
            case 2:
                return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
            case 3:
                return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
            case 4:
                return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]) } return e.apply(n, t) } }, function(e, t, n) { var i = n(16),
        o = n(114).set,
        r = i.MutationObserver || i.WebKitMutationObserver,
        a = i.process,
        s = i.Promise,
        l = "process" == n(40)(a);
    e.exports = function() { var e, t, n, c = function() { var i, o; for (l && (i = a.domain) && i.exit(); e;) { o = e.fn, e = e.next; try { o() } catch (i) { throw e ? n() : t = void 0, i } } t = void 0, i && i.enter() }; if (l) n = function() { a.nextTick(c) };
        else if (r) { var u = !0,
                h = document.createTextNode("");
            new r(c).observe(h, { characterData: !0 }), n = function() { h.data = u = !u } } else if (s && s.resolve) { var d = s.resolve();
            n = function() { d.then(c) } } else n = function() { o.call(i, c) }; return function(i) { var o = { fn: i, next: void 0 };
            t && (t.next = o), e || (e = o, n()), t = o } } }, function(e, t, n) { "use strict";

    function i(e) { var t, n;
        this.promise = new e(function(e, i) { if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
            t = e, n = i }), this.resolve = o(t), this.reject = o(n) } var o = n(19);
    e.exports.f = function(e) { return new i(e) } }, function(e, t) { e.exports = function(e) { try { return { e: !1, v: e() } } catch (e) { return { e: !0, v: e } } } }, function(e, t, n) { var i = n(117);
    e.exports = function(e, t) { var n = i.f(e),
            o = n.resolve; return o(t), n.promise } }, function(e, t, n) { var i = n(20);
    e.exports = function(e, t, n) { for (var o in t) n && e[o] ? e[o] = t[o] : i(e, o, t[o]); return e } }, function(e, t, n) { "use strict"; var i = n(16),
        o = n(17),
        r = n(21),
        a = n(25),
        s = n(50)("species");
    e.exports = function(e) { var t = "function" == typeof o[e] ? o[e] : i[e];
        a && t && !t[s] && r.f(t, s, { configurable: !0, get: function() { return this } }) } }, function(e, t, n) { "use strict"; var i = n(15),
        o = n(17),
        r = n(16),
        a = n(113),
        s = n(119);
    i(i.P + i.R, "Promise", { finally: function(e) { var t = a(this, o.Promise || r.Promise),
                n = "function" == typeof e; return this.then(n ? function(n) { return s(t, e()).then(function() { return n }) } : e, n ? function(n) { return s(t, e()).then(function() { throw n }) } : e) } }) }, function(e, t, n) { "use strict"; var i = n(15),
        o = n(117),
        r = n(118);
    i(i.S, "Promise", { try: function(e) { var t = o.f(this),
                n = r(e); return (n.e ? t.reject : t.resolve)(n.v), t.promise } }) }, function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var n = "data:video/ogg;base64,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",
        i = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ==";
    t.OggVideo = n, t.Mp4Video = i }, function(e, t) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var n = ["none", "blur", "brightness", "contrast", "invert", "opacity", "saturate", "sepia", "drop-shadow", "grayscale", "hue-rotate"],
        i = { blur: { modifier: function(e) { return .3 * e }, unit: "px" }, brightness: { modifier: function(e) { return .009 * e + .1 }, unit: "" }, contrast: { modifier: function(e) { return .4 * e + 80 }, unit: "%" }, grayscale: { modifier: function(e) { return e }, unit: "%" }, "hue-rotate": { modifier: function(e) { return 3.6 * e }, unit: "deg" }, invert: { modifier: function(e) { return 1 }, unit: "" }, opacity: { modifier: function(e) { return e }, unit: "%" }, saturate: { modifier: function(e) { return 2 * e }, unit: "%" }, sepia: { modifier: function(e) { return e }, unit: "%" } };
    t.filterOptions = n, t.filterProperties = i }, function(e, t) { var n = function(e) { var t = { container: e }; return e.getAttribute("data-config-url") && (t.url = e.getAttribute("data-config-url")), e.getAttribute("data-config-playback-speed") && (t.playbackSpeed = e.getAttribute("data-config-playback-speed")), e.getAttribute("data-config-filter") && (t.filter = e.getAttribute("data-config-filter")), e.getAttribute("data-config-filter-strength") && (t.filterStrength = e.getAttribute("data-config-filter-strength")), t };
    e.exports = n }, function(e, t) { var n = function(e, t, n) { t = t || 100, n = n || Y.Template.Site, e && (this._timeout && this._timeout.cancel(), this._timeout = Y.later(t, n, e)) };
    e.exports = n }, function(e, t, n) { var i = n(127);
    Y.use("node", function(e) { e.namespace("Template").Authenticated = Singleton.create({ ready: function() { this.bindUI() }, bindUI: function() { var t = e.one("body.transparent-header");
                t && (t = t.getDOMNode(), ["sqs-stacked-items-dom-deleted", "sqs-stacked-items-dom-reorder"].forEach(function(n) { e.config.win.addEventListener(n, function(e) { document.querySelector("#content > div").classList.contains("no-main-image") ? t.classList.remove("has-banner-image") : t.classList.add("has-banner-image") }.bind(this)) }.bind(this))), e.Global.on("tweak:beforeopen", function(t) { setTimeout(function() { e.one(window).simulate("resize") }, 500) }), e.Global.on(["tweak:save", "tweak:discard", "tweak:beforeopen"], function(t) { e.one(".always-use-overlay-nav") && e.one("#mobileNavToggle").set("checked", !1).simulate("change") }), e.Global.on("tweak:discard", function(e) {}), e.Global.on("tweak:close", function(t) { setTimeout(function() { e.one(window).simulate("resize") }, 500), e.one("#header.tweaking") && e.one("#header.tweaking").removeClass("tweaking") }), e.Global.on("tweak:aftershow", function(t) { e.Template.noYUI.vCenterTopSectionContent(), e.Template.Site.runCenterNav() }, this), e.Global.on("tweak:change", function(t) { var n = t.getName(),
                        o = t.getValue(); "string" == typeof o && (o = o.toLowerCase(), o = o.replace(" ", "-")), "siteTitleContainerWidth" != n && "logoWidth" != n || (e.one("#header").addClass("tweaking"), i(function() { e.one("#header").removeClass("tweaking") }, 500)), "design" == n && e.Template.Site.regularHeaderForGridGallery(), e.one(".always-use-overlay-nav") && ("nav-font" != n && "navColor" != n && "navActiveColor" != n && "expand-homepage-index-links" != n || e.one("#mobileNavToggle").set("checked", !0).simulate("change")), "always-use-overlay-nav" == n && (e.Template.Site.injectScrollNavContent(), e.Template.noYUI.vCenterTopSectionContent(), e.Template.Site.runCenterNav()), "siteTitleContainerWidth" != n && "logoWidth" != n && "nav-font" != n && "expand-homepage-index-links" != n || e.later(140, this, function() { e.Template.noYUI.vCenterTopSectionContent(), e.Template.Site.runCenterNav() }), "transparent-header" == n && i(function() { e.Template.helper.imgLoad() }) }) } }) }) }]);