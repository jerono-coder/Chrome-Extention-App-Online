(function(){/*
 Hammer.JS - v2.0.7 - 2016-04-22
 http://hammerjs.github.io/

 Copyright (c) 2016 Jorik Tangelder;
 Licensed under the MIT license */
'use strict';
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(b) {
  var g = 0;
  return function() {
    return g < b.length ? {done:!1, value:b[g++]} : {done:!0};
  };
};
$jscomp.arrayIterator = function(b) {
  return {next:$jscomp.arrayIteratorImpl(b)};
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(b, g, d) {
  b != Array.prototype && b != Object.prototype && (b[g] = d.value);
};
$jscomp.getGlobal = function(b) {
  return "undefined" != typeof window && window === b ? b : "undefined" != typeof global && null != global ? global : b;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
  $jscomp.initSymbol = function() {
  };
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.SymbolClass = function(b, g) {
  this.$jscomp$symbol$id_ = b;
  $jscomp.defineProperty(this, "description", {configurable:!0, writable:!0, value:g});
};
$jscomp.SymbolClass.prototype.toString = function() {
  return this.$jscomp$symbol$id_;
};
$jscomp.Symbol = function() {
  function b(d) {
    if (this instanceof b) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (d || "") + "_" + g++, d);
  }
  var g = 0;
  return b;
}();
$jscomp.initSymbolIterator = function() {
  $jscomp.initSymbol();
  var b = $jscomp.global.Symbol.iterator;
  b || (b = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
  "function" != typeof Array.prototype[b] && $jscomp.defineProperty(Array.prototype, b, {configurable:!0, writable:!0, value:function() {
    return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
  }});
  $jscomp.initSymbolIterator = function() {
  };
};
$jscomp.initSymbolAsyncIterator = function() {
  $jscomp.initSymbol();
  var b = $jscomp.global.Symbol.asyncIterator;
  b || (b = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
  $jscomp.initSymbolAsyncIterator = function() {
  };
};
$jscomp.iteratorPrototype = function(b) {
  $jscomp.initSymbolIterator();
  b = {next:b};
  b[$jscomp.global.Symbol.iterator] = function() {
    return this;
  };
  return b;
};
$jscomp.iteratorFromArray = function(b, g) {
  $jscomp.initSymbolIterator();
  b instanceof String && (b += "");
  var d = 0, l = {next:function() {
    if (d < b.length) {
      var h = d++;
      return {value:g(h, b[h]), done:!1};
    }
    l.next = function() {
      return {done:!0, value:void 0};
    };
    return l.next();
  }};
  l[Symbol.iterator] = function() {
    return l;
  };
  return l;
};
$jscomp.polyfill = function(b, g, d, l) {
  if (g) {
    d = $jscomp.global;
    b = b.split(".");
    for (l = 0; l < b.length - 1; l++) {
      var h = b[l];
      h in d || (d[h] = {});
      d = d[h];
    }
    b = b[b.length - 1];
    l = d[b];
    g = g(l);
    g != l && null != g && $jscomp.defineProperty(d, b, {configurable:!0, writable:!0, value:g});
  }
};
$jscomp.polyfill("Array.prototype.keys", function(b) {
  return b ? b : function() {
    return $jscomp.iteratorFromArray(this, function(b) {
      return b;
    });
  };
}, "es6", "es3");
$jscomp.polyfill("Object.is", function(b) {
  return b ? b : function(b, d) {
    return b === d ? 0 !== b || 1 / b === 1 / d : b !== b && d !== d;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.includes", function(b) {
  return b ? b : function(b, d) {
    var l = this;
    l instanceof String && (l = String(l));
    var h = l.length;
    d = d || 0;
    for (0 > d && (d = Math.max(d + h, 0)); d < h; d++) {
      var g = l[d];
      if (g === b || Object.is(g, b)) {
        return !0;
      }
    }
    return !1;
  };
}, "es7", "es3");
$jscomp.checkStringArgs = function(b, g, d) {
  if (null == b) {
    throw new TypeError("The 'this' value for String.prototype." + d + " must not be null or undefined");
  }
  if (g instanceof RegExp) {
    throw new TypeError("First argument to String.prototype." + d + " must not be a regular expression");
  }
  return b + "";
};
$jscomp.polyfill("String.prototype.includes", function(b) {
  return b ? b : function(b, d) {
    return -1 !== $jscomp.checkStringArgs(this, b, "includes").indexOf(b, d || 0);
  };
}, "es6", "es3");
(function(b) {
  function g(l) {
    if (d[l]) {
      return d[l].exports;
    }
    var h = d[l] = {i:l, l:!1, exports:{}};
    b[l].call(h.exports, h, h.exports, g);
    h.l = !0;
    return h.exports;
  }
  var d = {};
  g.m = b;
  g.c = d;
  g.d = function(b, h, d) {
    g.o(b, h) || Object.defineProperty(b, h, {enumerable:!0, get:d});
  };
  g.r = function(b) {
    $jscomp.initSymbol();
    $jscomp.initSymbol();
    "undefined" !== typeof Symbol && Symbol.toStringTag && ($jscomp.initSymbol(), Object.defineProperty(b, Symbol.toStringTag, {value:"Module"}));
    Object.defineProperty(b, "__esModule", {value:!0});
  };
  g.t = function(b, h) {
    h & 1 && (b = g(b));
    if (h & 8 || h & 4 && "object" === typeof b && b && b.__esModule) {
      return b;
    }
    var d = Object.create(null);
    g.r(d);
    Object.defineProperty(d, "default", {enumerable:!0, value:b});
    if (h & 2 && "string" != typeof b) {
      for (var l in b) {
        g.d(d, l, function(d) {
          return b[d];
        }.bind(null, l));
      }
    }
    return d;
  };
  g.n = function(b) {
    var d = b && b.__esModule ? function() {
      return b["default"];
    } : function() {
      return b;
    };
    g.d(d, "a", d);
    return d;
  };
  g.o = function(b, d) {
    return Object.prototype.hasOwnProperty.call(b, d);
  };
  g.p = "";
  return g(g.s = 1);
})([function(b, g, d) {
  var l;
  (function(d, g, v, q) {
    function h(c, f, e) {
      return setTimeout(J(c, e), f);
    }
    function p(c, f, e) {
      return Array.isArray(c) ? (a(c, e[f], e), !0) : !1;
    }
    function a(c, f, e) {
      var a;
      if (c) {
        if (c.forEach) {
          c.forEach(f, e);
        } else {
          if (c.length !== q) {
            for (a = 0; a < c.length;) {
              f.call(e, c[a], a, c), a++;
            }
          } else {
            for (a in c) {
              c.hasOwnProperty(a) && f.call(e, c[a], a, c);
            }
          }
        }
      }
    }
    function k(c, f, e) {
      var a = "DEPRECATED METHOD: " + f + "\n" + e + " AT \n";
      return function() {
        var f = Error("get-stack-trace");
        f = f && f.stack ? f.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace";
        var e = d.console && (d.console.warn || d.console.log);
        e && e.call(d.console, a, f);
        return c.apply(this, arguments);
      };
    }
    function r(c, f, e) {
      f = f.prototype;
      var a = c.prototype = Object.create(f);
      a.constructor = c;
      a._super = f;
      e && y(a, e);
    }
    function J(c, f) {
      return function() {
        return c.apply(f, arguments);
      };
    }
    function z(c, f) {
      return "function" == typeof c ? c.apply(f ? f[0] || q : q, f) : c;
    }
    function F(c, f, e) {
      a(G(f), function(f) {
        c.addEventListener(f, e, !1);
      });
    }
    function B(c, f, e) {
      a(G(f), function(f) {
        c.removeEventListener(f, e, !1);
      });
    }
    function K(c, f) {
      for (; c;) {
        if (c == f) {
          return !0;
        }
        c = c.parentNode;
      }
      return !1;
    }
    function G(c) {
      return c.trim().split(/\s+/g);
    }
    function t(c, f, e) {
      if (c.indexOf && !e) {
        return c.indexOf(f);
      }
      for (var a = 0; a < c.length;) {
        if (e && c[a][e] == f || !e && c[a] === f) {
          return a;
        }
        a++;
      }
      return -1;
    }
    function H(c) {
      return Array.prototype.slice.call(c, 0);
    }
    function L(c, f, e) {
      for (var a = [], b = [], d = 0; d < c.length;) {
        var k = f ? c[d][f] : c[d];
        0 > t(b, k) && a.push(c[d]);
        b[d] = k;
        d++;
      }
      e && (a = f ? a.sort(function(c, e) {
        return c[f] > e[f];
      }) : a.sort());
      return a;
    }
    function m(c, f) {
      for (var e, a = f[0].toUpperCase() + f.slice(1), b = 0; b < ea.length;) {
        e = (e = ea[b]) ? e + a : f;
        if (e in c) {
          return e;
        }
        b++;
      }
      return q;
    }
    function n(c) {
      c = c.ownerDocument || c;
      return c.defaultView || c.parentWindow || d;
    }
    function u(c, f) {
      var e = this;
      this.manager = c;
      this.callback = f;
      this.element = c.element;
      this.target = c.options.inputTarget;
      this.domHandler = function(f) {
        z(c.options.enable, [c]) && e.handler(f);
      };
      this.init();
    }
    function wa(c) {
      var f = c.options.inputClass;
      return new (f ? f : xa ? U : ya ? M : fa ? V : N)(c, ha);
    }
    function ha(c, f, e) {
      var a = e.pointers.length, b = e.changedPointers.length;
      var d = f & 1 && 0 === a - b;
      e.isFirst = !!d;
      e.isFinal = !!(f & 12 && 0 === a - b);
      d && (c.session = {});
      e.eventType = f;
      f = c.session;
      a = e.pointers;
      b = a.length;
      f.firstInput || (f.firstInput = ia(e));
      1 < b && !f.firstMultiple ? f.firstMultiple = ia(e) : 1 === b && (f.firstMultiple = !1);
      d = f.firstInput;
      var k = (b = f.firstMultiple) ? b.center : d.center;
      var m = e.center = ja(a);
      e.timeStamp = W();
      e.deltaTime = e.timeStamp - d.timeStamp;
      e.angle = X(k, m);
      e.distance = O(k, m);
      d = e.center;
      k = f.offsetDelta || {};
      m = f.prevDelta || {};
      var n = f.prevInput || {};
      if (1 === e.eventType || 4 === n.eventType) {
        m = f.prevDelta = {x:n.deltaX || 0, y:n.deltaY || 0}, k = f.offsetDelta = {x:d.x, y:d.y};
      }
      e.deltaX = m.x + (d.x - k.x);
      e.deltaY = m.y + (d.y - k.y);
      e.offsetDirection = ka(e.deltaX, e.deltaY);
      k = e.deltaTime;
      d = e.deltaX / k || 0;
      k = e.deltaY / k || 0;
      e.overallVelocityX = d;
      e.overallVelocityY = k;
      e.overallVelocity = C(d) > C(k) ? d : k;
      b ? (d = b.pointers, d = O(a[0], a[1], P) / O(d[0], d[1], P)) : d = 1;
      e.scale = d;
      b ? (b = b.pointers, a = X(a[1], a[0], P) + X(b[1], b[0], P)) : a = 0;
      e.rotation = a;
      e.maxPointers = f.prevInput ? e.pointers.length > f.prevInput.maxPointers ? e.pointers.length : f.prevInput.maxPointers : e.pointers.length;
      k = f.lastInterval || e;
      a = e.timeStamp - k.timeStamp;
      8 != e.eventType && (25 < a || k.velocity === q) ? (d = e.deltaX - k.deltaX, k = e.deltaY - k.deltaY, m = d / a || 0, n = k / a || 0, a = m, b = n, m = C(m) > C(n) ? m : n, d = ka(d, k), f.lastInterval = e) : (m = k.velocity, a = k.velocityX, b = k.velocityY, d = k.direction);
      e.velocity = m;
      e.velocityX = a;
      e.velocityY = b;
      e.direction = d;
      f = c.element;
      K(e.srcEvent.target, f) && (f = e.srcEvent.target);
      e.target = f;
      c.emit("hammer.input", e);
      c.recognize(e);
      c.session.prevInput = e;
    }
    function ia(c) {
      for (var f = [], e = 0; e < c.pointers.length;) {
        f[e] = {clientX:I(c.pointers[e].clientX), clientY:I(c.pointers[e].clientY)}, e++;
      }
      return {timeStamp:W(), pointers:f, center:ja(f), deltaX:c.deltaX, deltaY:c.deltaY};
    }
    function ja(c) {
      var f = c.length;
      if (1 === f) {
        return {x:I(c[0].clientX), y:I(c[0].clientY)};
      }
      for (var e = 0, a = 0, b = 0; b < f;) {
        e += c[b].clientX, a += c[b].clientY, b++;
      }
      return {x:I(e / f), y:I(a / f)};
    }
    function ka(c, f) {
      return c === f ? 1 : C(c) >= C(f) ? 0 > c ? 2 : 4 : 0 > f ? 8 : 16;
    }
    function O(c, f, e) {
      e || (e = la);
      var a = f[e[0]] - c[e[0]];
      c = f[e[1]] - c[e[1]];
      return Math.sqrt(a * a + c * c);
    }
    function X(c, f, e) {
      e || (e = la);
      return 180 * Math.atan2(f[e[1]] - c[e[1]], f[e[0]] - c[e[0]]) / Math.PI;
    }
    function N() {
      this.evEl = za;
      this.evWin = Aa;
      this.pressed = !1;
      u.apply(this, arguments);
    }
    function U() {
      this.evEl = ma;
      this.evWin = na;
      u.apply(this, arguments);
      this.store = this.manager.session.pointerEvents = [];
    }
    function oa() {
      this.evTarget = "touchstart";
      this.evWin = "touchstart touchmove touchend touchcancel";
      this.started = !1;
      u.apply(this, arguments);
    }
    function M() {
      this.evTarget = Ba;
      this.targetIds = {};
      u.apply(this, arguments);
    }
    function Ca(c, f) {
      var e = H(c.touches), a = this.targetIds;
      if (f & 3 && 1 === e.length) {
        return a[e[0].identifier] = !0, [e, e];
      }
      c = H(c.changedTouches);
      var b = [], d = this.target;
      var k = e.filter(function(c) {
        return K(c.target, d);
      });
      if (1 === f) {
        for (e = 0; e < k.length;) {
          a[k[e].identifier] = !0, e++;
        }
      }
      for (e = 0; e < c.length;) {
        a[c[e].identifier] && b.push(c[e]), f & 12 && delete a[c[e].identifier], e++;
      }
      if (b.length) {
        return [L(k.concat(b), "identifier", !0), b];
      }
    }
    function V() {
      u.apply(this, arguments);
      var c = J(this.handler, this);
      this.touch = new M(this.manager, c);
      this.mouse = new N(this.manager, c);
      this.primaryTouch = null;
      this.lastTouches = [];
    }
    function pa(c) {
      c = c.changedPointers[0];
      if (c.identifier === this.primaryTouch) {
        var f = {x:c.clientX, y:c.clientY};
        this.lastTouches.push(f);
        var e = this.lastTouches;
        setTimeout(function() {
          var c = e.indexOf(f);
          -1 < c && e.splice(c, 1);
        }, 2500);
      }
    }
    function Y(c, f) {
      this.manager = c;
      this.set(f);
    }
    function Da(c) {
      if (-1 < c.indexOf("none")) {
        return "none";
      }
      var f = -1 < c.indexOf("pan-x"), e = -1 < c.indexOf("pan-y");
      return f && e ? "none" : f || e ? f ? "pan-x" : "pan-y" : -1 < c.indexOf("manipulation") ? "manipulation" : "auto";
    }
    function x(c) {
      this.options = y({}, this.defaults, c || {});
      this.id = Ea++;
      this.manager = null;
      c = this.options.enable;
      this.options.enable = c === q ? !0 : c;
      this.state = 1;
      this.simultaneous = {};
      this.requireFail = [];
    }
    function qa(c) {
      return c & 16 ? "cancel" : c & 8 ? "end" : c & 4 ? "move" : c & 2 ? "start" : "";
    }
    function ra(c) {
      return 16 == c ? "down" : 8 == c ? "up" : 2 == c ? "left" : 4 == c ? "right" : "";
    }
    function Q(c, f) {
      return (f = f.manager) ? f.get(c) : c;
    }
    function w() {
      x.apply(this, arguments);
    }
    function R() {
      w.apply(this, arguments);
      this.pY = this.pX = null;
    }
    function Z() {
      w.apply(this, arguments);
    }
    function aa() {
      x.apply(this, arguments);
      this._input = this._timer = null;
    }
    function ba() {
      w.apply(this, arguments);
    }
    function ca() {
      w.apply(this, arguments);
    }
    function S() {
      x.apply(this, arguments);
      this.pCenter = this.pTime = !1;
      this._input = this._timer = null;
      this.count = 0;
    }
    function D(c, f) {
      f = f || {};
      var e = f.recognizers;
      f.recognizers = e === q ? D.defaults.preset : e;
      return new da(c, f);
    }
    function da(c, f) {
      this.options = y({}, D.defaults, f || {});
      this.options.inputTarget = this.options.inputTarget || c;
      this.handlers = {};
      this.session = {};
      this.recognizers = [];
      this.oldCssProps = {};
      this.element = c;
      this.input = wa(this);
      this.touchAction = new Y(this, this.options.touchAction);
      sa(this, !0);
      a(this.options.recognizers, function(c) {
        var f = this.add(new c[0](c[1]));
        c[2] && f.recognizeWith(c[2]);
        c[3] && f.requireFailure(c[3]);
      }, this);
    }
    function sa(c, f) {
      var e = c.element;
      if (e.style) {
        var b;
        a(c.options.cssProps, function(a, d) {
          b = m(e.style, d);
          f ? (c.oldCssProps[b] = e.style[b], e.style[b] = a) : e.style[b] = c.oldCssProps[b] || "";
        });
        f || (c.oldCssProps = {});
      }
    }
    function Fa(c, f) {
      var e = g.createEvent("Event");
      e.initEvent(c, !0, !0);
      e.gesture = f;
      f.target.dispatchEvent(e);
    }
    var ea = " webkit Moz MS ms o".split(" ");
    v = g.createElement("div");
    var I = Math.round, C = Math.abs, W = Date.now;
    var y = "function" !== typeof Object.assign ? function(c) {
      if (c === q || null === c) {
        throw new TypeError("Cannot convert undefined or null to object");
      }
      for (var f = Object(c), e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        if (a !== q && null !== a) {
          for (var b in a) {
            a.hasOwnProperty(b) && (f[b] = a[b]);
          }
        }
      }
      return f;
    } : Object.assign;
    var ta = k(function(c, f, a) {
      for (var e = Object.keys(f), b = 0; b < e.length;) {
        if (!a || a && c[e[b]] === q) {
          c[e[b]] = f[e[b]];
        }
        b++;
      }
      return c;
    }, "extend", "Use `assign`."), Ga = k(function(c, f) {
      return ta(c, f, !0);
    }, "merge", "Use `assign`."), Ea = 1, Ha = /mobile|tablet|ip(ad|hone|od)|android/i, fa = "ontouchstart" in d, xa = m(d, "PointerEvent") !== q, ya = fa && Ha.test(navigator.userAgent), la = ["x", "y"], P = ["clientX", "clientY"];
    u.prototype = {handler:function() {
    }, init:function() {
      this.evEl && F(this.element, this.evEl, this.domHandler);
      this.evTarget && F(this.target, this.evTarget, this.domHandler);
      this.evWin && F(n(this.element), this.evWin, this.domHandler);
    }, destroy:function() {
      this.evEl && B(this.element, this.evEl, this.domHandler);
      this.evTarget && B(this.target, this.evTarget, this.domHandler);
      this.evWin && B(n(this.element), this.evWin, this.domHandler);
    }};
    var Ia = {mousedown:1, mousemove:2, mouseup:4}, za = "mousedown", Aa = "mousemove mouseup";
    r(N, u, {handler:function(c) {
      var f = Ia[c.type];
      f & 1 && 0 === c.button && (this.pressed = !0);
      f & 2 && 1 !== c.which && (f = 4);
      this.pressed && (f & 4 && (this.pressed = !1), this.callback(this.manager, f, {pointers:[c], changedPointers:[c], pointerType:"mouse", srcEvent:c}));
    }});
    var Ja = {pointerdown:1, pointermove:2, pointerup:4, pointercancel:8, pointerout:8}, Ka = {2:"touch", 3:"pen", 4:"mouse", 5:"kinect"}, ma = "pointerdown", na = "pointermove pointerup pointercancel";
    d.MSPointerEvent && !d.PointerEvent && (ma = "MSPointerDown", na = "MSPointerMove MSPointerUp MSPointerCancel");
    r(U, u, {handler:function(c) {
      var f = this.store, a = !1, b = c.type.toLowerCase().replace("ms", "");
      b = Ja[b];
      var d = Ka[c.pointerType] || c.pointerType, k = "touch" == d, m = t(f, c.pointerId, "pointerId");
      b & 1 && (0 === c.button || k) ? 0 > m && (f.push(c), m = f.length - 1) : b & 12 && (a = !0);
      0 > m || (f[m] = c, this.callback(this.manager, b, {pointers:f, changedPointers:[c], pointerType:d, srcEvent:c}), a && f.splice(m, 1));
    }});
    var La = {touchstart:1, touchmove:2, touchend:4, touchcancel:8};
    r(oa, u, {handler:function(c) {
      var f = La[c.type];
      1 === f && (this.started = !0);
      if (this.started) {
        var a = H(c.touches);
        var b = H(c.changedTouches);
        f & 12 && (a = L(a.concat(b), "identifier", !0));
        a = [a, b];
        f & 12 && 0 === a[0].length - a[1].length && (this.started = !1);
        this.callback(this.manager, f, {pointers:a[0], changedPointers:a[1], pointerType:"touch", srcEvent:c});
      }
    }});
    var Ma = {touchstart:1, touchmove:2, touchend:4, touchcancel:8}, Ba = "touchstart touchmove touchend touchcancel";
    r(M, u, {handler:function(c) {
      var f = Ma[c.type], a = Ca.call(this, c, f);
      a && this.callback(this.manager, f, {pointers:a[0], changedPointers:a[1], pointerType:"touch", srcEvent:c});
    }});
    r(V, u, {handler:function(c, f, a) {
      var e = "mouse" == a.pointerType;
      if (!(e && a.sourceCapabilities && a.sourceCapabilities.firesTouchEvents)) {
        if ("touch" == a.pointerType) {
          f & 1 ? (this.primaryTouch = a.changedPointers[0].identifier, pa.call(this, a)) : f & 12 && pa.call(this, a);
        } else {
          if (e) {
            a: {
              e = a.srcEvent.clientX;
              for (var b = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
                var k = this.lastTouches[d], m = Math.abs(b - k.y);
                if (25 >= Math.abs(e - k.x) && 25 >= m) {
                  e = !0;
                  break a;
                }
              }
              e = !1;
            }
          }
          if (e) {
            return;
          }
        }
        this.callback(c, f, a);
      }
    }, destroy:function() {
      this.touch.destroy();
      this.mouse.destroy();
    }});
    var ua = m(v.style, "touchAction"), va = ua !== q, T = function() {
      if (!va) {
        return !1;
      }
      var c = {}, a = d.CSS && d.CSS.supports;
      "auto;manipulation;pan-y;pan-x;pan-x pan-y;none".split(";").forEach(function(f) {
        c[f] = a ? d.CSS.supports("touch-action", f) : !0;
      });
      return c;
    }();
    Y.prototype = {set:function(c) {
      "compute" == c && (c = this.compute());
      va && this.manager.element.style && T[c] && (this.manager.element.style[ua] = c);
      this.actions = c.toLowerCase().trim();
    }, update:function() {
      this.set(this.manager.options.touchAction);
    }, compute:function() {
      var c = [];
      a(this.manager.recognizers, function(a) {
        z(a.options.enable, [a]) && (c = c.concat(a.getTouchAction()));
      });
      return Da(c.join(" "));
    }, preventDefaults:function(c) {
      var a = c.srcEvent, e = c.offsetDirection;
      if (this.manager.session.prevented) {
        a.preventDefault();
      } else {
        var b = this.actions, d = -1 < b.indexOf("none") && !T.none, k = -1 < b.indexOf("pan-y") && !T["pan-y"];
        b = -1 < b.indexOf("pan-x") && !T["pan-x"];
        if (d) {
          var m = 2 > c.distance, n = 250 > c.deltaTime;
          if (1 === c.pointers.length && m && n) {
            return;
          }
        }
        if (!b || !k) {
          if (d || k && e & 6 || b && e & 24) {
            return this.preventSrc(a);
          }
        }
      }
    }, preventSrc:function(c) {
      this.manager.session.prevented = !0;
      c.preventDefault();
    }};
    x.prototype = {defaults:{}, set:function(c) {
      y(this.options, c);
      this.manager && this.manager.touchAction.update();
      return this;
    }, recognizeWith:function(c) {
      if (p(c, "recognizeWith", this)) {
        return this;
      }
      var a = this.simultaneous;
      c = Q(c, this);
      a[c.id] || (a[c.id] = c, c.recognizeWith(this));
      return this;
    }, dropRecognizeWith:function(c) {
      if (p(c, "dropRecognizeWith", this)) {
        return this;
      }
      c = Q(c, this);
      delete this.simultaneous[c.id];
      return this;
    }, requireFailure:function(c) {
      if (p(c, "requireFailure", this)) {
        return this;
      }
      var a = this.requireFail;
      c = Q(c, this);
      -1 === t(a, c) && (a.push(c), c.requireFailure(this));
      return this;
    }, dropRequireFailure:function(c) {
      if (p(c, "dropRequireFailure", this)) {
        return this;
      }
      c = Q(c, this);
      c = t(this.requireFail, c);
      -1 < c && this.requireFail.splice(c, 1);
      return this;
    }, hasRequireFailures:function() {
      return 0 < this.requireFail.length;
    }, canRecognizeWith:function(c) {
      return !!this.simultaneous[c.id];
    }, emit:function(c) {
      function a(a) {
        e.manager.emit(a, c);
      }
      var e = this, b = this.state;
      8 > b && a(e.options.event + qa(b));
      a(e.options.event);
      c.additionalEvent && a(c.additionalEvent);
      8 <= b && a(e.options.event + qa(b));
    }, tryEmit:function(c) {
      if (this.canEmit()) {
        return this.emit(c);
      }
      this.state = 32;
    }, canEmit:function() {
      for (var c = 0; c < this.requireFail.length;) {
        if (!(this.requireFail[c].state & 33)) {
          return !1;
        }
        c++;
      }
      return !0;
    }, recognize:function(c) {
      c = y({}, c);
      z(this.options.enable, [this, c]) ? (this.state & 56 && (this.state = 1), this.state = this.process(c), this.state & 30 && this.tryEmit(c)) : (this.reset(), this.state = 32);
    }, process:function(c) {
    }, getTouchAction:function() {
    }, reset:function() {
    }};
    r(w, x, {defaults:{pointers:1}, attrTest:function(c) {
      var a = this.options.pointers;
      return 0 === a || c.pointers.length === a;
    }, process:function(c) {
      var a = this.state, e = c.eventType, b = a & 6;
      c = this.attrTest(c);
      return b && (e & 8 || !c) ? a | 16 : b || c ? e & 4 ? a | 8 : a & 2 ? a | 4 : 2 : 32;
    }});
    r(R, w, {defaults:{event:"pan", threshold:10, pointers:1, direction:30}, getTouchAction:function() {
      var c = this.options.direction, a = [];
      c & 6 && a.push("pan-y");
      c & 24 && a.push("pan-x");
      return a;
    }, directionTest:function(c) {
      var a = this.options, e = !0, b = c.distance, d = c.direction, k = c.deltaX, m = c.deltaY;
      d & a.direction || (a.direction & 6 ? (d = 0 === k ? 1 : 0 > k ? 2 : 4, e = k != this.pX, b = Math.abs(c.deltaX)) : (d = 0 === m ? 1 : 0 > m ? 8 : 16, e = m != this.pY, b = Math.abs(c.deltaY)));
      c.direction = d;
      return e && b > a.threshold && d & a.direction;
    }, attrTest:function(c) {
      return w.prototype.attrTest.call(this, c) && (this.state & 2 || !(this.state & 2) && this.directionTest(c));
    }, emit:function(c) {
      this.pX = c.deltaX;
      this.pY = c.deltaY;
      var a = ra(c.direction);
      a && (c.additionalEvent = this.options.event + a);
      this._super.emit.call(this, c);
    }});
    r(Z, w, {defaults:{event:"pinch", threshold:0, pointers:2}, getTouchAction:function() {
      return ["none"];
    }, attrTest:function(c) {
      return this._super.attrTest.call(this, c) && (Math.abs(c.scale - 1) > this.options.threshold || this.state & 2);
    }, emit:function(c) {
      1 !== c.scale && (c.additionalEvent = this.options.event + (1 > c.scale ? "in" : "out"));
      this._super.emit.call(this, c);
    }});
    r(aa, x, {defaults:{event:"press", pointers:1, time:251, threshold:9}, getTouchAction:function() {
      return ["auto"];
    }, process:function(c) {
      var a = this.options, e = c.pointers.length === a.pointers, b = c.distance < a.threshold, d = c.deltaTime > a.time;
      this._input = c;
      if (!b || !e || c.eventType & 12 && !d) {
        this.reset();
      } else {
        if (c.eventType & 1) {
          this.reset(), this._timer = h(function() {
            this.state = 8;
            this.tryEmit();
          }, a.time, this);
        } else {
          if (c.eventType & 4) {
            return 8;
          }
        }
      }
      return 32;
    }, reset:function() {
      clearTimeout(this._timer);
    }, emit:function(c) {
      8 === this.state && (c && c.eventType & 4 ? this.manager.emit(this.options.event + "up", c) : (this._input.timeStamp = W(), this.manager.emit(this.options.event, this._input)));
    }});
    r(ba, w, {defaults:{event:"rotate", threshold:0, pointers:2}, getTouchAction:function() {
      return ["none"];
    }, attrTest:function(c) {
      return this._super.attrTest.call(this, c) && (Math.abs(c.rotation) > this.options.threshold || this.state & 2);
    }});
    r(ca, w, {defaults:{event:"swipe", threshold:10, velocity:0.3, direction:30, pointers:1}, getTouchAction:function() {
      return R.prototype.getTouchAction.call(this);
    }, attrTest:function(c) {
      var a = this.options.direction;
      if (a & 30) {
        var e = c.overallVelocity;
      } else {
        a & 6 ? e = c.overallVelocityX : a & 24 && (e = c.overallVelocityY);
      }
      return this._super.attrTest.call(this, c) && a & c.offsetDirection && c.distance > this.options.threshold && c.maxPointers == this.options.pointers && C(e) > this.options.velocity && c.eventType & 4;
    }, emit:function(c) {
      var a = ra(c.offsetDirection);
      a && this.manager.emit(this.options.event + a, c);
      this.manager.emit(this.options.event, c);
    }});
    r(S, x, {defaults:{event:"tap", pointers:1, taps:1, interval:300, time:250, threshold:9, posThreshold:10}, getTouchAction:function() {
      return ["manipulation"];
    }, process:function(c) {
      var a = this.options, e = c.pointers.length === a.pointers, b = c.distance < a.threshold, d = c.deltaTime < a.time;
      this.reset();
      if (c.eventType & 1 && 0 === this.count) {
        return this.failTimeout();
      }
      if (b && d && e) {
        if (4 != c.eventType) {
          return this.failTimeout();
        }
        e = this.pTime ? c.timeStamp - this.pTime < a.interval : !0;
        b = !this.pCenter || O(this.pCenter, c.center) < a.posThreshold;
        this.pTime = c.timeStamp;
        this.pCenter = c.center;
        this.count = b && e ? this.count + 1 : 1;
        this._input = c;
        if (0 === this.count % a.taps) {
          return this.hasRequireFailures() ? (this._timer = h(function() {
            this.state = 8;
            this.tryEmit();
          }, a.interval, this), 2) : 8;
        }
      }
      return 32;
    }, failTimeout:function() {
      this._timer = h(function() {
        this.state = 32;
      }, this.options.interval, this);
      return 32;
    }, reset:function() {
      clearTimeout(this._timer);
    }, emit:function() {
      8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
    }});
    D.VERSION = "2.0.7";
    D.defaults = {domEvents:!1, touchAction:"compute", enable:!0, inputTarget:null, inputClass:null, preset:[[ba, {enable:!1}], [Z, {enable:!1}, ["rotate"]], [ca, {direction:6}], [R, {direction:6}, ["swipe"]], [S], [S, {event:"doubletap", taps:2}, ["tap"]], [aa]], cssProps:{userSelect:"none", touchSelect:"none", touchCallout:"none", contentZooming:"none", userDrag:"none", tapHighlightColor:"rgba(0,0,0,0)"}};
    da.prototype = {set:function(c) {
      y(this.options, c);
      c.touchAction && this.touchAction.update();
      c.inputTarget && (this.input.destroy(), this.input.target = c.inputTarget, this.input.init());
      return this;
    }, stop:function(c) {
      this.session.stopped = c ? 2 : 1;
    }, recognize:function(c) {
      var a = this.session;
      if (!a.stopped) {
        this.touchAction.preventDefaults(c);
        var b = this.recognizers, d = a.curRecognizer;
        if (!d || d && d.state & 8) {
          d = a.curRecognizer = null;
        }
        for (var k = 0; k < b.length;) {
          var m = b[k];
          2 === a.stopped || d && m != d && !m.canRecognizeWith(d) ? m.reset() : m.recognize(c);
          !d && m.state & 14 && (d = a.curRecognizer = m);
          k++;
        }
      }
    }, get:function(c) {
      if (c instanceof x) {
        return c;
      }
      for (var a = this.recognizers, b = 0; b < a.length; b++) {
        if (a[b].options.event == c) {
          return a[b];
        }
      }
      return null;
    }, add:function(c) {
      if (p(c, "add", this)) {
        return this;
      }
      var a = this.get(c.options.event);
      a && this.remove(a);
      this.recognizers.push(c);
      c.manager = this;
      this.touchAction.update();
      return c;
    }, remove:function(c) {
      if (p(c, "remove", this)) {
        return this;
      }
      if (c = this.get(c)) {
        var a = this.recognizers;
        c = t(a, c);
        -1 !== c && (a.splice(c, 1), this.touchAction.update());
      }
      return this;
    }, on:function(c, b) {
      if (c !== q && b !== q) {
        var e = this.handlers;
        a(G(c), function(c) {
          e[c] = e[c] || [];
          e[c].push(b);
        });
        return this;
      }
    }, off:function(c, b) {
      if (c !== q) {
        var e = this.handlers;
        a(G(c), function(c) {
          b ? e[c] && e[c].splice(t(e[c], b), 1) : delete e[c];
        });
        return this;
      }
    }, emit:function(c, a) {
      this.options.domEvents && Fa(c, a);
      var b = this.handlers[c] && this.handlers[c].slice();
      if (b && b.length) {
        for (a.type = c, a.preventDefault = function() {
          a.srcEvent.preventDefault();
        }, c = 0; c < b.length;) {
          b[c](a), c++;
        }
      }
    }, destroy:function() {
      this.element && sa(this, !1);
      this.handlers = {};
      this.session = {};
      this.input.destroy();
      this.element = null;
    }};
    y(D, {INPUT_START:1, INPUT_MOVE:2, INPUT_END:4, INPUT_CANCEL:8, STATE_POSSIBLE:1, STATE_BEGAN:2, STATE_CHANGED:4, STATE_ENDED:8, STATE_RECOGNIZED:8, STATE_CANCELLED:16, STATE_FAILED:32, DIRECTION_NONE:1, DIRECTION_LEFT:2, DIRECTION_RIGHT:4, DIRECTION_UP:8, DIRECTION_DOWN:16, DIRECTION_HORIZONTAL:6, DIRECTION_VERTICAL:24, DIRECTION_ALL:30, Manager:da, Input:u, TouchAction:Y, TouchInput:M, MouseInput:N, PointerEventInput:U, TouchMouseInput:V, SingleTouchInput:oa, Recognizer:x, AttrRecognizer:w, 
    Tap:S, Pan:R, Swipe:ca, Pinch:Z, Rotate:ba, Press:aa, on:F, off:B, each:a, merge:Ga, extend:ta, assign:y, inherit:r, bindFn:J, prefixed:m});
    ("undefined" !== typeof d ? d : "undefined" !== typeof self ? self : {}).Hammer = D;
    !(l = D, l !== q && (b.exports = l));
  })(window, document, "Hammer");
}, function(b, g, d) {
  function l(a, b, d) {
    this.size = a;
    this.inputManager = new b;
    this.actuator = new d;
    this.startTiles = 2;
    this.inputManager.on("move", this.move.bind(this));
    this.inputManager.on("restart", this.restart.bind(this));
    this.setup();
  }
  function h(a) {
    this.size = a;
    this.cells = [];
    this.build();
  }
  function p() {
    this.tileContainer = document.getElementsByClassName("tile-container")[0];
    this.scoreContainer = document.getElementsByClassName("score-container")[0];
    this.highScoreContainer = document.getElementsByClassName("high-score-container")[0];
    this.messageContainer = document.getElementsByClassName("game-message")[0];
    this.score = 0;
  }
  function v() {
    this.events = {};
    this.listen();
  }
  function q(a, b) {
    this.x = a.x;
    this.y = a.y;
    this.value = b || 2;
    this.mergedFrom = this.previousPosition = null;
  }
  d.r(g);
  b = d(2);
  d.n(b);
  b = d(0);
  var A = d.n(b);
  (function() {
    for (var a = document.querySelectorAll("[i18n]"), b = 0; b < a.length; ++b) {
      a[b].textContent = chrome.i18n.getMessage(a[b].getAttribute("i18n"));
    }
    a = document.querySelectorAll("[i18n-alt]");
    for (b = 0; b < a.length; ++b) {
      var d = chrome.i18n.getMessage(a[b].getAttribute("i18n-alt"));
      a[b].alt = d;
      a[b].title = d;
    }
  })();
  var E = document.getElementById("dialog-rate");
  d = Number(localStorage.openTimes);
  b = "true" === localStorage.rateClicked;
  isNaN(d) ? localStorage.openTimes = 1 : localStorage.openTimes = d + 1;
  b || 0 !== d % 2 || (E.style.display = "flex");
  document.getElementById("dialog-yes").addEventListener("click", function() {
    localStorage.rateClicked = "true";
    E.style.display = "none";
    chrome.tabs.query({active:!0, currentWindow:!0}, function(a) {
      var b = navigator.userAgent.includes("Edg") ? "https://microsoftedge.microsoft.com/addons/detail/" + chrome.runtime.id : "https://chrome.google.com/webstore/detail/" + chrome.runtime.id + "/reviews";
      chrome.tabs.create({url:b, index:a[0].index + 1, active:!0, openerTabId:a[0].id});
    });
  });
  document.getElementById("dialog-no").addEventListener("click", function() {
    E.style.display = "none";
  });
  document.addEventListener("DOMContentLoaded", function() {
    window.requestAnimationFrame(function() {
      new l(4, v, p);
    });
  });
  l.prototype.restart = function() {
    this.actuator.restart();
    this.setup();
  };
  l.prototype.setup = function() {
    this.grid = new h(this.size);
    this.score = 0;
    this.won = this.over = !1;
    this.addStartTiles();
    this.actuate();
  };
  l.prototype.addStartTiles = function() {
    for (var a = 0; a < this.startTiles; a++) {
      this.addRandomTile();
    }
  };
  l.prototype.addRandomTile = function() {
    if (this.grid.cellsAvailable()) {
      var a = 0.9 > Math.random() ? 2 : 4;
      a = new q(this.grid.randomAvailableCell(), a);
      this.grid.insertTile(a);
    }
  };
  l.prototype.actuate = function() {
    this.actuator.actuate(this.grid, {score:this.score, over:this.over, won:this.won});
  };
  l.prototype.prepareTiles = function() {
    this.grid.eachCell(function(a, b, d) {
      d && (d.mergedFrom = null, d.savePosition());
    });
  };
  l.prototype.moveTile = function(a, b) {
    this.grid.cells[a.x][a.y] = null;
    this.grid.cells[b.x][b.y] = a;
    a.updatePosition(b);
  };
  l.prototype.move = function(a) {
    var b = this;
    if (!this.over && !this.won) {
      var d, g, l = this.getVector(a), h = this.buildTraversals(l), p = !1;
      this.prepareTiles();
      h.x.forEach(function(a) {
        h.y.forEach(function(k) {
          d = {x:a, y:k};
          if (g = b.grid.cellContent(d)) {
            k = b.findFarthestPosition(d, l);
            var r = b.grid.cellContent(k.next);
            if (r && r.value === g.value && !r.mergedFrom) {
              var h = new q(k.next, 2 * g.value);
              h.mergedFrom = [g, r];
              b.grid.insertTile(h);
              b.grid.removeTile(g);
              g.updatePosition(k.next);
              b.score += h.value;
              2048 === h.value && (b.won = !0);
            } else {
              b.moveTile(g, k.farthest);
            }
            b.positionsEqual(d, g) || (p = !0);
          }
        });
      });
      p && (this.addRandomTile(), this.movesAvailable() || (this.over = !0), this.actuate());
    }
  };
  l.prototype.getVector = function(a) {
    return {0:{x:0, y:-1}, 1:{x:1, y:0}, 2:{x:0, y:1}, 3:{x:-1, y:0}}[a];
  };
  l.prototype.buildTraversals = function(a) {
    for (var b = {x:[], y:[]}, d = 0; d < this.size; d++) {
      b.x.push(d), b.y.push(d);
    }
    1 === a.x && (b.x = b.x.reverse());
    1 === a.y && (b.y = b.y.reverse());
    return b;
  };
  l.prototype.findFarthestPosition = function(a, b) {
    do {
      var d = a;
      a = {x:d.x + b.x, y:d.y + b.y};
    } while (this.grid.withinBounds(a) && this.grid.cellAvailable(a));
    return {farthest:d, next:a};
  };
  l.prototype.movesAvailable = function() {
    return this.grid.cellsAvailable() || this.tileMatchesAvailable();
  };
  l.prototype.tileMatchesAvailable = function() {
    for (var a, b = 0; b < this.size; b++) {
      for (var d = 0; d < this.size; d++) {
        if (a = this.grid.cellContent({x:b, y:d})) {
          for (var g = 0; 4 > g; g++) {
            var h = this.getVector(g);
            if ((h = this.grid.cellContent({x:b + h.x, y:d + h.y})) && h.value === a.value) {
              return !0;
            }
          }
        }
      }
    }
    return !1;
  };
  l.prototype.positionsEqual = function(a, b) {
    return a.x === b.x && a.y === b.y;
  };
  h.prototype.build = function() {
    for (var a = 0; a < this.size; a++) {
      for (var b = this.cells[a] = [], d = 0; d < this.size; d++) {
        b.push(null);
      }
    }
  };
  h.prototype.randomAvailableCell = function() {
    var a = this.availableCells();
    if (a.length) {
      return a[Math.floor(Math.random() * a.length)];
    }
  };
  h.prototype.availableCells = function() {
    var a = [];
    this.eachCell(function(b, d, g) {
      g || a.push({x:b, y:d});
    });
    return a;
  };
  h.prototype.eachCell = function(a) {
    for (var b = 0; b < this.size; b++) {
      for (var d = 0; d < this.size; d++) {
        a(b, d, this.cells[b][d]);
      }
    }
  };
  h.prototype.cellsAvailable = function() {
    return !!this.availableCells().length;
  };
  h.prototype.cellAvailable = function(a) {
    return !this.cellOccupied(a);
  };
  h.prototype.cellOccupied = function(a) {
    return !!this.cellContent(a);
  };
  h.prototype.cellContent = function(a) {
    return this.withinBounds(a) ? this.cells[a.x][a.y] : null;
  };
  h.prototype.insertTile = function(a) {
    this.cells[a.x][a.y] = a;
  };
  h.prototype.removeTile = function(a) {
    this.cells[a.x][a.y] = null;
  };
  h.prototype.withinBounds = function(a) {
    return 0 <= a.x && a.x < this.size && 0 <= a.y && a.y < this.size;
  };
  p.prototype.actuate = function(a, b) {
    var d = this;
    window.requestAnimationFrame(function() {
      d.clearContainer(d.tileContainer);
      a.cells.forEach(function(a) {
        a.forEach(function(a) {
          a && d.addTile(a);
        });
      });
      d.updateScore(b.score);
      b.over && d.message(!1);
      b.won && d.message(!0);
    });
  };
  p.prototype.restart = function() {
    this.clearMessage();
  };
  p.prototype.clearContainer = function(a) {
    for (; a.firstChild;) {
      a.removeChild(a.firstChild);
    }
  };
  p.prototype.addTile = function(a) {
    var b = this, d = document.createElement("div"), g = this.positionClass(a.previousPosition || {x:a.x, y:a.y}), h = ["tile", "tile-" + a.value, g];
    this.applyClasses(d, h);
    d.textContent = a.value;
    a.previousPosition ? window.requestAnimationFrame(function() {
      h[2] = b.positionClass({x:a.x, y:a.y});
      b.applyClasses(d, h);
    }) : a.mergedFrom ? (h.push("tile-merged"), this.applyClasses(d, h), a.mergedFrom.forEach(function(a) {
      b.addTile(a);
    })) : (h.push("tile-new"), this.applyClasses(d, h));
    this.tileContainer.appendChild(d);
  };
  p.prototype.applyClasses = function(a, b) {
    a.setAttribute("class", b.join(" "));
  };
  p.prototype.normalizePosition = function(a) {
    return {x:a.x + 1, y:a.y + 1};
  };
  p.prototype.positionClass = function(a) {
    a = this.normalizePosition(a);
    return "tile-position-" + a.x + "-" + a.y;
  };
  p.prototype.updateScore = function(a) {
    this.clearContainer(this.scoreContainer);
    this.clearContainer(this.highScoreContainer);
    var b = a - this.score;
    this.score = a;
    this.scoreContainer.textContent = this.score;
    (a = localStorage.highScore) ? this.score > Number(a) ? (this.highScoreContainer.textContent = this.score, localStorage.highScore = this.score) : this.highScoreContainer.textContent = a : (localStorage.highScore = 0, this.highScoreContainer.textContent = "0");
    0 < b && (a = document.createElement("div"), a.classList.add("score-addition"), a.textContent = "+" + b, this.scoreContainer.appendChild(a));
  };
  p.prototype.message = function(a) {
    var b = a ? "You win!" : "Game over!";
    this.messageContainer.classList.add(a ? "game-won" : "game-over");
    this.messageContainer.getElementsByTagName("p")[0].textContent = b;
  };
  p.prototype.clearMessage = function() {
    this.messageContainer.classList.remove("game-won", "game-over");
  };
  v.prototype.on = function(a, b) {
    this.events[a] || (this.events[a] = []);
    this.events[a].push(b);
  };
  v.prototype.emit = function(a, b) {
    (a = this.events[a]) && a.forEach(function(a) {
      a(b);
    });
  };
  v.prototype.listen = function() {
    var a = this, b = {38:0, 39:1, 40:2, 37:3, 75:0, 76:1, 74:2, 72:3};
    document.addEventListener("keydown", function(d) {
      var g = b[d.which];
      d.altKey || d.ctrlKey || d.metaKey || d.shiftKey || (void 0 !== g && (d.preventDefault(), a.emit("move", g)), 32 === d.which && a.restart.bind(a)(d));
    });
    document.getElementsByClassName("retry-button")[0].addEventListener("click", this.restart.bind(this));
    var d = [A.a.DIRECTION_UP, A.a.DIRECTION_RIGHT, A.a.DIRECTION_DOWN, A.a.DIRECTION_LEFT], g = document.getElementsByClassName("game-container")[0];
    A()(g, {drag_block_horizontal:!0, drag_block_vertical:!0}).on("swipe", function(b) {
      b.gesture.preventDefault();
      mapped = d.indexOf(b.gesture.direction);
      -1 !== mapped && a.emit("move", mapped);
    });
  };
  v.prototype.restart = function(a) {
    a.preventDefault();
    this.emit("restart");
  };
  q.prototype.savePosition = function() {
    this.previousPosition = {x:this.x, y:this.y};
  };
  q.prototype.updatePosition = function(a) {
    this.x = a.x;
    this.y = a.y;
  };
}, function(b, g, d) {
  g = d(3);
  "string" === typeof g && (g = [[b.i, g, ""]]);
  d(5)(g, {hmr:!0, transform:void 0, insertInto:void 0});
  g.locals && (b.exports = g.locals);
}, function(b, g, d) {
  g = b.exports = d(4)(!1);
  g.push([b.i, "@import url(https://fonts.googleapis.com/css?family=Lato:400,700);", ""]);
  g.push([b.i, 'html {\n    overflow: scroll;\n    overflow-x: hidden;\n}\n\nbody,\nhtml {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n.flex-container {\n    z-index: 9999999;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background: rgba(0, 0, 0, 0.5);\n\n    display: none;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-content: stretch;\n    align-items: flex-start;\n}\n\n.dialog {\n    order: 0;\n    flex: 0 1 auto;\n    align-self: center;\n\n    border-radius: 10px;\n\n    width: 250px;\n\n    background: rgba(220, 220, 220)\n}\n\n.dialog-header {\n    margin: 0;\n    text-align: center;\n    padding: 10px;\n    font-size: 16px;\n    font-family: "Open Sans", sans-serif;\n    font-weight: 700;\n    border-bottom: rgb(180, 180, 180) solid 1px;\n}\n\n.dialog-content {\n    padding: 10px 12px;\n    text-align: center;\n    font-family: "Open Sans", sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n}\n\n.dialog-button a {\n    display: block;\n    text-align: center;\n    text-decoration: none;\n    padding: 10px;\n    font-family: "Open Sans", sans-serif;\n    font-weight: 400;\n    font-size: 16px;\n    color: #2e7cf1;\n    border-top: rgb(180, 180, 180) solid 1px;\n}\n\n.dialog-button a:last-child {\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.dialog-button .cancel {\n    font-weight: 700;\n}\n\n.dialog-button a:hover {\n    background: rgb(180, 180, 180);\n}\n\n.flex-container p {\n    line-height: 22px;\n    margin-bottom: 0;\n}\n\nhtml, body {\n    margin: 0;\n    padding: 0;\n    background: #faf8ef;\n    color: #776E65;\n    font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif;\n    font-size: 18px;\n  }\n  \n  .heading:after {\n    content: "";\n    display: block;\n    clear: both;\n  }\n  \n  h1.title {\n    font-size: 80px;\n    font-weight: bold;\n    margin: 0;\n    display: block;\n    float: left;\n  }\n  \n  @-webkit-keyframes $animation-name {\n    0% {\n      top: 25px;\n      opacity: 1;\n    }\n    100% {\n      top: -50px;\n      opacity: 0;\n    }\n  }\n  @-moz-keyframes $animation-name {\n    0% {\n      top: 25px;\n      opacity: 1;\n    }\n    100% {\n      top: -50px;\n      opacity: 0;\n    }\n  }\n  @keyframes $animation-name {\n    0% {\n      top: 25px;\n      opacity: 1;\n    }\n    100% {\n      top: -50px;\n      opacity: 0;\n    }\n  }\n  .score-container {\n    position: relative;\n    float: right;\n    background: #bbada0;\n    padding: 15px 25px;\n    font-size: 25px;\n    height: 25px;\n    line-height: 47px;\n    font-weight: bold;\n    border-radius: 3px;\n    color: white;\n    margin-top: 8px;\n    margin-right: 15px;\n  }\n  .score-container:after {\n    position: absolute;\n    width: 100%;\n    top: 10px;\n    left: 0;\n    content: "Score";\n    text-transform: uppercase;\n    font-size: 13px;\n    line-height: 13px;\n    text-align: center;\n    color: #eee4da;\n  }\n  .high-score-container {\n    position: relative;\n    float: right;\n    background: #bbada0;\n    padding: 15px 25px;\n    font-size: 25px;\n    height: 25px;\n    line-height: 47px;\n    font-weight: bold;\n    border-radius: 3px;\n    color: white;\n    margin-top: 8px;\n  }\n  .high-score-container:after {\n    position: absolute;\n    width: 100%;\n    top: 10px;\n    left: 0;\n    content: "Best";\n    text-transform: uppercase;\n    font-size: 13px;\n    line-height: 13px;\n    text-align: center;\n    color: #eee4da;\n  }\n  .score-container .score-addition {\n    position: absolute;\n    right: 30px;\n    color: red;\n    font-size: 25px;\n    line-height: 25px;\n    font-weight: bold;\n    color: rgba(119, 110, 101, 0.9);\n    z-index: 100;\n    -webkit-animation: move-up 600ms ease-in;\n    -moz-animation: move-up 600ms ease-in;\n    -webkit-animation-fill-mode: both;\n    -moz-animation-fill-mode: both;\n  }\n  \n  p {\n    margin-top: 0;\n    margin-bottom: 10px;\n    line-height: 1.65;\n  }\n  \n  a {\n    color: #776E65;\n    font-weight: bold;\n    text-decoration: underline;\n    cursor: pointer;\n  }\n  \n  strong.important {\n    text-transform: uppercase;\n  }\n  \n  hr {\n    border: none;\n    border-bottom: 1px solid #d8d4d0;\n    margin-top: 20px;\n    margin-bottom: 30px;\n  }\n  \n  .container {\n    width: 500px;\n    margin: 0 auto;\n  }\n  \n  @-webkit-keyframes $animation-name {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @-moz-keyframes $animation-name {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  @keyframes $animation-name {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  .game-container {\n    margin-top: 20px;\n    position: relative;\n    padding: 15px;\n    cursor: default;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    background: #bbada0;\n    border-radius: 6px;\n    width: 500px;\n    height: 500px;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  .game-container .game-message {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(238, 228, 218, 0.5);\n    z-index: 100;\n    text-align: center;\n    -webkit-animation: fade-in 800ms ease 1200ms;\n    -moz-animation: fade-in 800ms ease 1200ms;\n    -webkit-animation-fill-mode: both;\n    -moz-animation-fill-mode: both;\n  }\n  .game-container .game-message p {\n    font-size: 60px;\n    font-weight: bold;\n    height: 60px;\n    line-height: 60px;\n    margin-top: 222px;\n  }\n  .game-container .game-message .lower {\n    display: block;\n    margin-top: 59px;\n  }\n  .game-container .game-message a {\n    display: inline-block;\n    background: #8f7a66;\n    border-radius: 3px;\n    padding: 0 20px;\n    text-decoration: none;\n    color: #f9f6f2;\n    height: 40px;\n    line-height: 42px;\n    margin-left: 9px;\n  }\n  .game-container .game-message.game-won {\n    background: rgba(237, 194, 46, 0.5);\n    color: #f9f6f2;\n  }\n  .game-container .game-message.game-won, .game-container .game-message.game-over {\n    display: block;\n  }\n  \n  .grid-container {\n    position: absolute;\n    z-index: 1;\n  }\n  \n  .grid-row {\n    margin-bottom: 15px;\n  }\n  .grid-row:last-child {\n    margin-bottom: 0;\n  }\n  .grid-row:after {\n    content: "";\n    display: block;\n    clear: both;\n  }\n  \n  .grid-cell {\n    width: 106.25px;\n    height: 106.25px;\n    margin-right: 15px;\n    float: left;\n    border-radius: 3px;\n    background: rgba(238, 228, 218, 0.35);\n  }\n  .grid-cell:last-child {\n    margin-right: 0;\n  }\n  \n  .tile-container {\n    position: absolute;\n    z-index: 2;\n  }\n  \n  .tile {\n    width: 106.25px;\n    height: 106.25px;\n    line-height: 105px;\n  }\n  .tile.tile-position-1-1 {\n    position: absolute;\n    left: 0px;\n    top: 0px;\n  }\n  .tile.tile-position-1-2 {\n    position: absolute;\n    left: 0px;\n    top: 121px;\n  }\n  .tile.tile-position-1-3 {\n    position: absolute;\n    left: 0px;\n    top: 243px;\n  }\n  .tile.tile-position-1-4 {\n    position: absolute;\n    left: 0px;\n    top: 364px;\n  }\n  .tile.tile-position-2-1 {\n    position: absolute;\n    left: 121px;\n    top: 0px;\n  }\n  .tile.tile-position-2-2 {\n    position: absolute;\n    left: 121px;\n    top: 121px;\n  }\n  .tile.tile-position-2-3 {\n    position: absolute;\n    left: 121px;\n    top: 243px;\n  }\n  .tile.tile-position-2-4 {\n    position: absolute;\n    left: 121px;\n    top: 364px;\n  }\n  .tile.tile-position-3-1 {\n    position: absolute;\n    left: 243px;\n    top: 0px;\n  }\n  .tile.tile-position-3-2 {\n    position: absolute;\n    left: 243px;\n    top: 121px;\n  }\n  .tile.tile-position-3-3 {\n    position: absolute;\n    left: 243px;\n    top: 243px;\n  }\n  .tile.tile-position-3-4 {\n    position: absolute;\n    left: 243px;\n    top: 364px;\n  }\n  .tile.tile-position-4-1 {\n    position: absolute;\n    left: 364px;\n    top: 0px;\n  }\n  .tile.tile-position-4-2 {\n    position: absolute;\n    left: 364px;\n    top: 121px;\n  }\n  .tile.tile-position-4-3 {\n    position: absolute;\n    left: 364px;\n    top: 243px;\n  }\n  .tile.tile-position-4-4 {\n    position: absolute;\n    left: 364px;\n    top: 364px;\n  }\n  \n  .tile {\n    border-radius: 3px;\n    background: #eee4da;\n    text-align: center;\n    font-weight: bold;\n    z-index: 10;\n    font-size: 55px;\n    -webkit-transition: 100ms ease-in-out;\n    -moz-transition: 100ms ease-in-out;\n    -webkit-transition-property: top, left;\n    -moz-transition-property: top, left;\n  }\n  .tile.tile-2 {\n    background: #eee4da;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0);\n  }\n  .tile.tile-4 {\n    background: #eee1c9;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0), inset 0 0 0 1px rgba(255, 255, 255, 0);\n  }\n  .tile.tile-8 {\n    color: #f9f6f2;\n    background: #f3b27a;\n  }\n  .tile.tile-16 {\n    color: #f9f6f2;\n    background: #f69664;\n  }\n  .tile.tile-32 {\n    color: #f9f6f2;\n    background: #f77c5f;\n  }\n  .tile.tile-64 {\n    color: #f9f6f2;\n    background: #f75f3b;\n  }\n  .tile.tile-128 {\n    color: #f9f6f2;\n    background: #edd073;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.2380952381), inset 0 0 0 1px rgba(255, 255, 255, 0.1428571429);\n    font-size: 45px;\n  }\n  @media screen and (max-width: 480px) {\n    .tile.tile-128 {\n      font-size: 25px;\n    }\n  }\n  .tile.tile-256 {\n    color: #f9f6f2;\n    background: #edcc62;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.3174603175), inset 0 0 0 1px rgba(255, 255, 255, 0.1904761905);\n    font-size: 45px;\n  }\n  @media screen and (max-width: 480px) {\n    .tile.tile-256 {\n      font-size: 25px;\n    }\n  }\n  .tile.tile-512 {\n    color: #f9f6f2;\n    background: #edc950;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.3968253968), inset 0 0 0 1px rgba(255, 255, 255, 0.2380952381);\n    font-size: 45px;\n  }\n  @media screen and (max-width: 480px) {\n    .tile.tile-512 {\n      font-size: 25px;\n    }\n  }\n  .tile.tile-1024 {\n    color: #f9f6f2;\n    background: #edc53f;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.4761904762), inset 0 0 0 1px rgba(255, 255, 255, 0.2857142857);\n    font-size: 35px;\n  }\n  @media screen and (max-width: 480px) {\n    .tile.tile-1024 {\n      font-size: 15px;\n    }\n  }\n  .tile.tile-2048 {\n    color: #f9f6f2;\n    background: #edc22e;\n    box-shadow: 0 0 30px 10px rgba(243, 215, 116, 0.5555555556), inset 0 0 0 1px rgba(255, 255, 255, 0.3333333333);\n    font-size: 35px;\n  }\n  @media screen and (max-width: 480px) {\n    .tile.tile-2048 {\n      font-size: 15px;\n    }\n  }\n  \n  @-webkit-keyframes $animation-name {\n    0% {\n      opacity: 0;\n      -webkit-transform: scale(0);\n      -moz-transform: scale(0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: scale(1);\n      -moz-transform: scale(1);\n    }\n  }\n  @-moz-keyframes $animation-name {\n    0% {\n      opacity: 0;\n      -webkit-transform: scale(0);\n      -moz-transform: scale(0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: scale(1);\n      -moz-transform: scale(1);\n    }\n  }\n  @keyframes $animation-name {\n    0% {\n      opacity: 0;\n      -webkit-transform: scale(0);\n      -moz-transform: scale(0);\n    }\n    100% {\n      opacity: 1;\n      -webkit-transform: scale(1);\n      -moz-transform: scale(1);\n    }\n  }\n  .tile-new {\n    -webkit-animation: appear 200ms ease 100ms;\n    -moz-animation: appear 200ms ease 100ms;\n    -webkit-animation-fill-mode: both;\n    -moz-animation-fill-mode: both;\n  }\n  \n  @-webkit-keyframes $animation-name {\n    0% {\n      -webkit-transform: scale(0);\n      -moz-transform: scale(0);\n    }\n    50% {\n      -webkit-transform: scale(1.2);\n      -moz-transform: scale(1.2);\n    }\n    100% {\n      -webkit-transform: scale(1);\n      -moz-transform: scale(1);\n    }\n  }\n  @-moz-keyframes $animation-name {\n    0% {\n      -webkit-transform: scale(0);\n      -moz-transform: scale(0);\n    }\n    50% {\n      -webkit-transform: scale(1.2);\n      -moz-transform: scale(1.2);\n    }\n    100% {\n      -webkit-transform: scale(1);\n      -moz-transform: scale(1);\n    }\n  }\n  @keyframes $animation-name {\n    0% {\n      -webkit-transform: scale(0);\n      -moz-transform: scale(0);\n    }\n    50% {\n      -webkit-transform: scale(1.2);\n      -moz-transform: scale(1.2);\n    }\n    100% {\n      -webkit-transform: scale(1);\n      -moz-transform: scale(1);\n    }\n  }\n  .tile-merged {\n    z-index: 20;\n    -webkit-animation: pop 200ms ease 100ms;\n    -moz-animation: pop 200ms ease 100ms;\n    -webkit-animation-fill-mode: both;\n    -moz-animation-fill-mode: both;\n  }\n  \n  .game-intro {\n    margin-bottom: 0;\n  }\n  \n  .game-explanation {\n    margin-top: 50px;\n  }\n  \n  @media screen and (max-width: 480px) {\n    html, body {\n      font-size: 15px;\n    }\n  \n    body {\n      margin: 20px 0;\n      padding: 0 20px;\n    }\n  \n    h1.title {\n      font-size: 50px;\n    }\n  \n    .container {\n      width: 280px;\n      margin: 0 auto;\n    }\n  \n    .score-container {\n      margin-top: 0;\n    }\n  \n    .heading {\n      margin-bottom: 10px;\n    }\n  \n    .game-container {\n      margin-top: 40px;\n      position: relative;\n      padding: 15px;\n      cursor: default;\n      -webkit-touch-callout: none;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      background: #bbada0;\n      border-radius: 6px;\n      width: 500px;\n      height: 500px;\n      -webkit-box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n    }\n    .game-container .game-message {\n      display: none;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background: rgba(238, 228, 218, 0.5);\n      z-index: 100;\n      text-align: center;\n      -webkit-animation: fade-in 800ms ease 1200ms;\n      -moz-animation: fade-in 800ms ease 1200ms;\n      -webkit-animation-fill-mode: both;\n      -moz-animation-fill-mode: both;\n    }\n    .game-container .game-message p {\n      font-size: 60px;\n      font-weight: bold;\n      height: 60px;\n      line-height: 60px;\n      margin-top: 222px;\n    }\n    .game-container .game-message .lower {\n      display: block;\n      margin-top: 59px;\n    }\n    .game-container .game-message a {\n      display: inline-block;\n      background: #8f7a66;\n      border-radius: 3px;\n      padding: 0 20px;\n      text-decoration: none;\n      color: #f9f6f2;\n      height: 40px;\n      line-height: 42px;\n      margin-left: 9px;\n    }\n    .game-container .game-message.game-won {\n      background: rgba(237, 194, 46, 0.5);\n      color: #f9f6f2;\n    }\n    .game-container .game-message.game-won, .game-container .game-message.game-over {\n      display: block;\n    }\n  \n    .grid-container {\n      position: absolute;\n      z-index: 1;\n    }\n  \n    .grid-row {\n      margin-bottom: 15px;\n    }\n    .grid-row:last-child {\n      margin-bottom: 0;\n    }\n    .grid-row:after {\n      content: "";\n      display: block;\n      clear: both;\n    }\n  \n    .grid-cell {\n      width: 106.25px;\n      height: 106.25px;\n      margin-right: 15px;\n      float: left;\n      border-radius: 3px;\n      background: rgba(238, 228, 218, 0.35);\n    }\n    .grid-cell:last-child {\n      margin-right: 0;\n    }\n  \n    .tile-container {\n      position: absolute;\n      z-index: 2;\n    }\n  \n    .tile {\n      width: 106.25px;\n      height: 106.25px;\n      line-height: 116.25px;\n    }\n    .tile.tile-position-1-1 {\n      position: absolute;\n      left: 0px;\n      top: 0px;\n    }\n    .tile.tile-position-1-2 {\n      position: absolute;\n      left: 0px;\n      top: 121px;\n    }\n    .tile.tile-position-1-3 {\n      position: absolute;\n      left: 0px;\n      top: 243px;\n    }\n    .tile.tile-position-1-4 {\n      position: absolute;\n      left: 0px;\n      top: 364px;\n    }\n    .tile.tile-position-2-1 {\n      position: absolute;\n      left: 121px;\n      top: 0px;\n    }\n    .tile.tile-position-2-2 {\n      position: absolute;\n      left: 121px;\n      top: 121px;\n    }\n    .tile.tile-position-2-3 {\n      position: absolute;\n      left: 121px;\n      top: 243px;\n    }\n    .tile.tile-position-2-4 {\n      position: absolute;\n      left: 121px;\n      top: 364px;\n    }\n    .tile.tile-position-3-1 {\n      position: absolute;\n      left: 243px;\n      top: 0px;\n    }\n    .tile.tile-position-3-2 {\n      position: absolute;\n      left: 243px;\n      top: 121px;\n    }\n    .tile.tile-position-3-3 {\n      position: absolute;\n      left: 243px;\n      top: 243px;\n    }\n    .tile.tile-position-3-4 {\n      position: absolute;\n      left: 243px;\n      top: 364px;\n    }\n    .tile.tile-position-4-1 {\n      position: absolute;\n      left: 364px;\n      top: 0px;\n    }\n    .tile.tile-position-4-2 {\n      position: absolute;\n      left: 364px;\n      top: 121px;\n    }\n    .tile.tile-position-4-3 {\n      position: absolute;\n      left: 364px;\n      top: 243px;\n    }\n    .tile.tile-position-4-4 {\n      position: absolute;\n      left: 364px;\n      top: 364px;\n    }\n  \n    .game-container {\n      margin-top: 20px;\n    }\n  \n    .tile {\n      font-size: 35px;\n    }\n  \n    .game-message p {\n      font-size: 30px !important;\n      height: 30px !important;\n      line-height: 30px !important;\n      margin-top: 90px !important;\n    }\n    .game-message .lower {\n      margin-top: 30px !important;\n    }\n  }\n  ', 
  ""]);
}, function(b, g, d) {
  function l(b, d) {
    var g = b[1] || "", h = b[3];
    return h ? d && "function" === typeof btoa ? (b = "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(h)))) + " */", d = h.sources.map(function(b) {
      return "/*# sourceURL=" + h.sourceRoot + b + " */";
    }), [g].concat(d).concat([b]).join("\n")) : [g].join("\n") : g;
  }
  b.exports = function(b) {
    var d = [];
    d.toString = function() {
      return this.map(function(d) {
        var g = l(d, b);
        return d[2] ? "@media " + d[2] + "{" + g + "}" : g;
      }).join("");
    };
    d.i = function(b, g) {
      "string" === typeof b && (b = [[null, b, ""]]);
      for (var h = {}, l = 0; l < this.length; l++) {
        var a = this[l][0];
        null != a && (h[a] = !0);
      }
      for (l = 0; l < b.length; l++) {
        a = b[l], null != a[0] && h[a[0]] || (g && !a[2] ? a[2] = g : g && (a[2] = "(" + a[2] + ") and (" + g + ")"), d.push(a));
      }
    };
    return d;
  };
}, function(b, g, d) {
  function l(b, d) {
    for (var m = 0; m < b.length; m++) {
      var g = b[m], n = z[g.id];
      if (n) {
        n.refs++;
        for (var h = 0; h < n.parts.length; h++) {
          n.parts[h](g.parts[h]);
        }
        for (; h < g.parts.length; h++) {
          n.parts.push(a(g.parts[h], d));
        }
      } else {
        n = [];
        for (h = 0; h < g.parts.length; h++) {
          n.push(a(g.parts[h], d));
        }
        z[g.id] = {id:g.id, refs:1, parts:n};
      }
    }
  }
  function h(a, b) {
    for (var d = [], m = {}, g = 0; g < a.length; g++) {
      var n = a[g], h = b.base ? n[0] + b.base : n[0];
      n = {css:n[1], media:n[2], sourceMap:n[3]};
      m[h] ? m[h].parts.push(n) : d.push(m[h] = {id:h, parts:[n]});
    }
    return d;
  }
  function p(a, b) {
    var d = B(a.insertInto);
    if (!d) {
      throw Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    }
    var g = t[t.length - 1];
    if ("top" === a.insertAt) {
      g ? g.nextSibling ? d.insertBefore(b, g.nextSibling) : d.appendChild(b) : d.insertBefore(b, d.firstChild), t.push(b);
    } else {
      if ("bottom" === a.insertAt) {
        d.appendChild(b);
      } else {
        if ("object" === typeof a.insertAt && a.insertAt.before) {
          a = B(a.insertAt.before, d), d.insertBefore(b, a);
        } else {
          throw Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
        }
      }
    }
  }
  function v(a) {
    if (null === a.parentNode) {
      return !1;
    }
    a.parentNode.removeChild(a);
    a = t.indexOf(a);
    0 <= a && t.splice(a, 1);
  }
  function q(a) {
    var b = document.createElement("style");
    void 0 === a.attrs.type && (a.attrs.type = "text/css");
    if (void 0 === a.attrs.nonce) {
      var g;
      if (g = d.nc) {
        a.attrs.nonce = g;
      }
    }
    E(b, a.attrs);
    p(a, b);
    return b;
  }
  function A(a) {
    var b = document.createElement("link");
    void 0 === a.attrs.type && (a.attrs.type = "text/css");
    a.attrs.rel = "stylesheet";
    E(b, a.attrs);
    p(a, b);
    return b;
  }
  function E(a, b) {
    Object.keys(b).forEach(function(d) {
      a.setAttribute(d, b[d]);
    });
  }
  function a(a, b) {
    var d;
    if (b.transform && a.css) {
      if (d = "function" === typeof b.transform ? b.transform(a.css) : b.transform.default(a.css)) {
        a.css = d;
      } else {
        return function() {
        };
      }
    }
    if (b.singleton) {
      d = G++;
      var g = K || (K = q(b));
      var h = k.bind(null, g, d, !1);
      var m = k.bind(null, g, d, !0);
    } else {
      a.sourceMap && "function" === typeof URL && "function" === typeof URL.createObjectURL && "function" === typeof URL.revokeObjectURL && "function" === typeof Blob && "function" === typeof btoa ? (g = A(b), h = J.bind(null, g, b), m = function() {
        v(g);
        g.href && URL.revokeObjectURL(g.href);
      }) : (g = q(b), h = r.bind(null, g), m = function() {
        v(g);
      });
    }
    h(a);
    return function(b) {
      b ? (b.css !== a.css || b.media !== a.media || b.sourceMap !== a.sourceMap) && h(a = b) : m();
    };
  }
  function k(a, b, d, g) {
    d = d ? "" : g.css;
    a.styleSheet ? a.styleSheet.cssText = L(b, d) : (d = document.createTextNode(d), g = a.childNodes, g[b] && a.removeChild(g[b]), g.length ? a.insertBefore(d, g[b]) : a.appendChild(d));
  }
  function r(a, b) {
    var d = b.css;
    (b = b.media) && a.setAttribute("media", b);
    if (a.styleSheet) {
      a.styleSheet.cssText = d;
    } else {
      for (; a.firstChild;) {
        a.removeChild(a.firstChild);
      }
      a.appendChild(document.createTextNode(d));
    }
  }
  function J(a, b, d) {
    var g = d.css;
    d = d.sourceMap;
    var h = void 0 === b.convertToAbsoluteUrls && d;
    if (b.convertToAbsoluteUrls || h) {
      g = H(g);
    }
    d && (g += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(d)))) + " */");
    b = new Blob([g], {type:"text/css"});
    g = a.href;
    a.href = URL.createObjectURL(b);
    g && URL.revokeObjectURL(g);
  }
  var z = {}, F = function(a) {
    var b;
    return function() {
      "undefined" === typeof b && (b = a.apply(this, arguments));
      return b;
    };
  }(function() {
    return window && document && document.all && !window.atob;
  }), B = function(a) {
    var b = {};
    return function(a, d) {
      if ("function" === typeof a) {
        return a();
      }
      if ("undefined" === typeof b[a]) {
        d = d ? d.querySelector(a) : document.querySelector(a);
        if (window.HTMLIFrameElement && d instanceof window.HTMLIFrameElement) {
          try {
            d = d.contentDocument.head;
          } catch (ha) {
            d = null;
          }
        }
        b[a] = d;
      }
      return b[a];
    };
  }(), K = null, G = 0, t = [], H = d(6);
  b.exports = function(a, b) {
    if ("undefined" !== typeof DEBUG && DEBUG && "object" !== typeof document) {
      throw Error("The style-loader cannot be used in a non-browser environment");
    }
    b = b || {};
    b.attrs = "object" === typeof b.attrs ? b.attrs : {};
    b.singleton || "boolean" === typeof b.singleton || (b.singleton = F());
    b.insertInto || (b.insertInto = "head");
    b.insertAt || (b.insertAt = "bottom");
    var d = h(a, b);
    l(d, b);
    return function(a) {
      for (var g = [], k = 0; k < d.length; k++) {
        var m = z[d[k].id];
        m.refs--;
        g.push(m);
      }
      a && (k = h(a, b), l(k, b));
      for (k = 0; k < g.length; k++) {
        if (m = g[k], 0 === m.refs) {
          for (a = 0; a < m.parts.length; a++) {
            m.parts[a]();
          }
          delete z[m.id];
        }
      }
    };
  };
  var L = function() {
    var a = [];
    return function(b, d) {
      a[b] = d;
      return a.filter(Boolean).join("\n");
    };
  }();
}, function(b, g) {
  b.exports = function(b) {
    var d = "undefined" !== typeof window && window.location;
    if (!d) {
      throw Error("fixUrls requires window.location");
    }
    if (!b || "string" !== typeof b) {
      return b;
    }
    var g = d.protocol + "//" + d.host, p = g + d.pathname.replace(/\/[^\/]*$/, "/");
    return b.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(b, d) {
      d = d.trim().replace(/^"(.*)"$/, function(b, d) {
        return d;
      }).replace(/^'(.*)'$/, function(b, d) {
        return d;
      });
      if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(d)) {
        return b;
      }
      b = 0 === d.indexOf("//") ? d : 0 === d.indexOf("/") ? g + d : p + d.replace(/^\.\//, "");
      return "url(" + JSON.stringify(b) + ")";
    });
  };
}]);
}).call(this || window)
