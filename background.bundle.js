(function(){/*
 jQuery JavaScript Library v3.4.1
 https://jquery.com/

 Includes Sizzle.js
 https://sizzlejs.com/

 Copyright JS Foundation and other contributors
 Released under the MIT license
 https://jquery.org/license

 Date: 2019-05-01T21:04Z
 Sizzle CSS Selector Engine v2.3.4
 https://sizzlejs.com/

 Copyright JS Foundation and other contributors
 Released under the MIT license
 https://js.foundation/

 Date: 2019-04-08
*/
'use strict';
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.arrayIteratorImpl = function(c) {
  var q = 0;
  return function() {
    return q < c.length ? {done:!1, value:c[q++]} : {done:!0};
  };
};
$jscomp.arrayIterator = function(c) {
  return {next:$jscomp.arrayIteratorImpl(c)};
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(c, q, h) {
  c != Array.prototype && c != Object.prototype && (c[q] = h.value);
};
$jscomp.getGlobal = function(c) {
  return "undefined" != typeof window && window === c ? c : "undefined" != typeof global && null != global ? global : c;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
  $jscomp.initSymbol = function() {
  };
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.SymbolClass = function(c, q) {
  this.$jscomp$symbol$id_ = c;
  $jscomp.defineProperty(this, "description", {configurable:!0, writable:!0, value:q});
};
$jscomp.SymbolClass.prototype.toString = function() {
  return this.$jscomp$symbol$id_;
};
$jscomp.Symbol = function() {
  function c(h) {
    if (this instanceof c) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX + (h || "") + "_" + q++, h);
  }
  var q = 0;
  return c;
}();
$jscomp.initSymbolIterator = function() {
  $jscomp.initSymbol();
  var c = $jscomp.global.Symbol.iterator;
  c || (c = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("Symbol.iterator"));
  "function" != typeof Array.prototype[c] && $jscomp.defineProperty(Array.prototype, c, {configurable:!0, writable:!0, value:function() {
    return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
  }});
  $jscomp.initSymbolIterator = function() {
  };
};
$jscomp.initSymbolAsyncIterator = function() {
  $jscomp.initSymbol();
  var c = $jscomp.global.Symbol.asyncIterator;
  c || (c = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("Symbol.asyncIterator"));
  $jscomp.initSymbolAsyncIterator = function() {
  };
};
$jscomp.iteratorPrototype = function(c) {
  $jscomp.initSymbolIterator();
  c = {next:c};
  c[$jscomp.global.Symbol.iterator] = function() {
    return this;
  };
  return c;
};
$jscomp.makeIterator = function(c) {
  var q = "undefined" != typeof Symbol && Symbol.iterator && c[Symbol.iterator];
  return q ? q.call(c) : $jscomp.arrayIterator(c);
};
$jscomp.arrayFromIterator = function(c) {
  for (var q, h = []; !(q = c.next()).done;) {
    h.push(q.value);
  }
  return h;
};
$jscomp.arrayFromIterable = function(c) {
  return c instanceof Array ? c : $jscomp.arrayFromIterator($jscomp.makeIterator(c));
};
$jscomp.findInternal = function(c, q, h) {
  c instanceof String && (c = String(c));
  for (var m = c.length, f = 0; f < m; f++) {
    var A = c[f];
    if (q.call(h, A, f, c)) {
      return {i:f, v:A};
    }
  }
  return {i:-1, v:void 0};
};
$jscomp.polyfill = function(c, q, h, m) {
  if (q) {
    h = $jscomp.global;
    c = c.split(".");
    for (m = 0; m < c.length - 1; m++) {
      var f = c[m];
      f in h || (h[f] = {});
      h = h[f];
    }
    c = c[c.length - 1];
    m = h[c];
    q = q(m);
    q != m && null != q && $jscomp.defineProperty(h, c, {configurable:!0, writable:!0, value:q});
  }
};
$jscomp.polyfill("Array.prototype.find", function(c) {
  return c ? c : function(c, h) {
    return $jscomp.findInternal(this, c, h).v;
  };
}, "es6", "es3");
$jscomp.owns = function(c, q) {
  return Object.prototype.hasOwnProperty.call(c, q);
};
$jscomp.assign = "function" == typeof Object.assign ? Object.assign : function(c, q) {
  for (var h = 1; h < arguments.length; h++) {
    var m = arguments[h];
    if (m) {
      for (var f in m) {
        $jscomp.owns(m, f) && (c[f] = m[f]);
      }
    }
  }
  return c;
};
$jscomp.polyfill("Object.assign", function(c) {
  return c || $jscomp.assign;
}, "es6", "es3");
$jscomp.polyfill("Object.is", function(c) {
  return c ? c : function(c, h) {
    return c === h ? 0 !== c || 1 / c === 1 / h : c !== c && h !== h;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.includes", function(c) {
  return c ? c : function(c, h) {
    var m = this;
    m instanceof String && (m = String(m));
    var f = m.length;
    h = h || 0;
    for (0 > h && (h = Math.max(h + f, 0)); h < f; h++) {
      var A = m[h];
      if (A === c || Object.is(A, c)) {
        return !0;
      }
    }
    return !1;
  };
}, "es7", "es3");
$jscomp.checkStringArgs = function(c, q, h) {
  if (null == c) {
    throw new TypeError("The 'this' value for String.prototype." + h + " must not be null or undefined");
  }
  if (q instanceof RegExp) {
    throw new TypeError("First argument to String.prototype." + h + " must not be a regular expression");
  }
  return c + "";
};
$jscomp.polyfill("String.prototype.includes", function(c) {
  return c ? c : function(c, h) {
    return -1 !== $jscomp.checkStringArgs(this, c, "includes").indexOf(c, h || 0);
  };
}, "es6", "es3");
$jscomp.iteratorFromArray = function(c, q) {
  $jscomp.initSymbolIterator();
  c instanceof String && (c += "");
  var h = 0, m = {next:function() {
    if (h < c.length) {
      var f = h++;
      return {value:q(f, c[f]), done:!1};
    }
    m.next = function() {
      return {done:!0, value:void 0};
    };
    return m.next();
  }};
  m[Symbol.iterator] = function() {
    return m;
  };
  return m;
};
$jscomp.polyfill("Array.prototype.keys", function(c) {
  return c ? c : function() {
    return $jscomp.iteratorFromArray(this, function(c) {
      return c;
    });
  };
}, "es6", "es3");
$jscomp.checkEs6ConformanceViaProxy = function() {
  try {
    var c = {}, q = Object.create(new $jscomp.global.Proxy(c, {get:function(h, m, f) {
      return h == c && "q" == m && f == q;
    }}));
    return !0 === q.q;
  } catch (h) {
    return !1;
  }
};
$jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS = !1;
$jscomp.ES6_CONFORMANCE = $jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS && $jscomp.checkEs6ConformanceViaProxy();
$jscomp.polyfill("WeakMap", function(c) {
  function q() {
    if (!c || !Object.seal) {
      return !1;
    }
    try {
      var w = Object.seal({}), m = Object.seal({}), f = new c([[w, 2], [m, 3]]);
      if (2 != f.get(w) || 3 != f.get(m)) {
        return !1;
      }
      f.delete(w);
      f.set(m, 4);
      return !f.has(w) && 4 == f.get(m);
    } catch (ma) {
      return !1;
    }
  }
  function h() {
  }
  function m(c) {
    if (!$jscomp.owns(c, A)) {
      var w = new h;
      $jscomp.defineProperty(c, A, {value:w});
    }
  }
  function f(c) {
    var w = Object[c];
    w && (Object[c] = function(c) {
      if (c instanceof h) {
        return c;
      }
      m(c);
      return w(c);
    });
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (c && $jscomp.ES6_CONFORMANCE) {
      return c;
    }
  } else {
    if (q()) {
      return c;
    }
  }
  var A = "$jscomp_hidden_" + Math.random();
  f("freeze");
  f("preventExtensions");
  f("seal");
  var y = 0, I = function(c) {
    this.id_ = (y += Math.random() + 1).toString();
    if (c) {
      c = $jscomp.makeIterator(c);
      for (var w; !(w = c.next()).done;) {
        w = w.value, this.set(w[0], w[1]);
      }
    }
  };
  I.prototype.set = function(c, f) {
    m(c);
    if (!$jscomp.owns(c, A)) {
      throw Error("WeakMap key fail: " + c);
    }
    c[A][this.id_] = f;
    return this;
  };
  I.prototype.get = function(c) {
    return $jscomp.owns(c, A) ? c[A][this.id_] : void 0;
  };
  I.prototype.has = function(c) {
    return $jscomp.owns(c, A) && $jscomp.owns(c[A], this.id_);
  };
  I.prototype.delete = function(c) {
    return $jscomp.owns(c, A) && $jscomp.owns(c[A], this.id_) ? delete c[A][this.id_] : !1;
  };
  return I;
}, "es6", "es3");
$jscomp.MapEntry = function() {
};
$jscomp.polyfill("Map", function(c) {
  function q() {
    if ($jscomp.ASSUME_NO_NATIVE_MAP || !c || "function" != typeof c || !c.prototype.entries || "function" != typeof Object.seal) {
      return !1;
    }
    try {
      var m = Object.seal({x:4}), f = new c($jscomp.makeIterator([[m, "s"]]));
      if ("s" != f.get(m) || 1 != f.size || f.get({x:4}) || f.set({x:4}, "t") != f || 2 != f.size) {
        return !1;
      }
      var h = f.entries(), y = h.next();
      if (y.done || y.value[0] != m || "s" != y.value[1]) {
        return !1;
      }
      y = h.next();
      return y.done || 4 != y.value[0].x || "t" != y.value[1] || !h.next().done ? !1 : !0;
    } catch (za) {
      return !1;
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (c && $jscomp.ES6_CONFORMANCE) {
      return c;
    }
  } else {
    if (q()) {
      return c;
    }
  }
  $jscomp.initSymbolIterator();
  var h = new WeakMap, m = function(c) {
    this.data_ = {};
    this.head_ = y();
    this.size = 0;
    if (c) {
      c = $jscomp.makeIterator(c);
      for (var m; !(m = c.next()).done;) {
        m = m.value, this.set(m[0], m[1]);
      }
    }
  };
  m.prototype.set = function(c, m) {
    c = 0 === c ? 0 : c;
    var w = f(this, c);
    w.list || (w.list = this.data_[w.id] = []);
    w.entry ? w.entry.value = m : (w.entry = {next:this.head_, previous:this.head_.previous, head:this.head_, key:c, value:m}, w.list.push(w.entry), this.head_.previous.next = w.entry, this.head_.previous = w.entry, this.size++);
    return this;
  };
  m.prototype.delete = function(c) {
    c = f(this, c);
    return c.entry && c.list ? (c.list.splice(c.index, 1), c.list.length || delete this.data_[c.id], c.entry.previous.next = c.entry.next, c.entry.next.previous = c.entry.previous, c.entry.head = null, this.size--, !0) : !1;
  };
  m.prototype.clear = function() {
    this.data_ = {};
    this.head_ = this.head_.previous = y();
    this.size = 0;
  };
  m.prototype.has = function(c) {
    return !!f(this, c).entry;
  };
  m.prototype.get = function(c) {
    return (c = f(this, c).entry) && c.value;
  };
  m.prototype.entries = function() {
    return A(this, function(c) {
      return [c.key, c.value];
    });
  };
  m.prototype.keys = function() {
    return A(this, function(c) {
      return c.key;
    });
  };
  m.prototype.values = function() {
    return A(this, function(c) {
      return c.value;
    });
  };
  m.prototype.forEach = function(c, m) {
    for (var f = this.entries(), y; !(y = f.next()).done;) {
      y = y.value, c.call(m, y[1], y[0], this);
    }
  };
  m.prototype[Symbol.iterator] = m.prototype.entries;
  var f = function(c, m) {
    var f = m && typeof m;
    "object" == f || "function" == f ? h.has(m) ? f = h.get(m) : (f = "" + ++I, h.set(m, f)) : f = "p_" + m;
    var y = c.data_[f];
    if (y && $jscomp.owns(c.data_, f)) {
      for (c = 0; c < y.length; c++) {
        var A = y[c];
        if (m !== m && A.key !== A.key || m === A.key) {
          return {id:f, list:y, index:c, entry:A};
        }
      }
    }
    return {id:f, list:y, index:-1, entry:void 0};
  }, A = function(c, m) {
    var f = c.head_;
    return $jscomp.iteratorPrototype(function() {
      if (f) {
        for (; f.head != c.head_;) {
          f = f.previous;
        }
        for (; f.next != f.head;) {
          return f = f.next, {done:!1, value:m(f)};
        }
        f = null;
      }
      return {done:!0, value:void 0};
    });
  }, y = function() {
    var c = {};
    return c.previous = c.next = c.head = c;
  }, I = 0;
  return m;
}, "es6", "es3");
$jscomp.polyfill("Set", function(c) {
  function q() {
    if ($jscomp.ASSUME_NO_NATIVE_SET || !c || "function" != typeof c || !c.prototype.entries || "function" != typeof Object.seal) {
      return !1;
    }
    try {
      var m = Object.seal({x:4}), f = new c($jscomp.makeIterator([m]));
      if (!f.has(m) || 1 != f.size || f.add(m) != f || 1 != f.size || f.add({x:4}) != f || 2 != f.size) {
        return !1;
      }
      var h = f.entries(), y = h.next();
      if (y.done || y.value[0] != m || y.value[1] != m) {
        return !1;
      }
      y = h.next();
      return y.done || y.value[0] == m || 4 != y.value[0].x || y.value[1] != y.value[0] ? !1 : h.next().done;
    } catch (I) {
      return !1;
    }
  }
  if ($jscomp.USE_PROXY_FOR_ES6_CONFORMANCE_CHECKS) {
    if (c && $jscomp.ES6_CONFORMANCE) {
      return c;
    }
  } else {
    if (q()) {
      return c;
    }
  }
  $jscomp.initSymbolIterator();
  var h = function(c) {
    this.map_ = new Map;
    if (c) {
      c = $jscomp.makeIterator(c);
      for (var m; !(m = c.next()).done;) {
        this.add(m.value);
      }
    }
    this.size = this.map_.size;
  };
  h.prototype.add = function(c) {
    c = 0 === c ? 0 : c;
    this.map_.set(c, c);
    this.size = this.map_.size;
    return this;
  };
  h.prototype.delete = function(c) {
    c = this.map_.delete(c);
    this.size = this.map_.size;
    return c;
  };
  h.prototype.clear = function() {
    this.map_.clear();
    this.size = 0;
  };
  h.prototype.has = function(c) {
    return this.map_.has(c);
  };
  h.prototype.entries = function() {
    return this.map_.entries();
  };
  h.prototype.values = function() {
    return this.map_.values();
  };
  h.prototype.keys = h.prototype.values;
  h.prototype[Symbol.iterator] = h.prototype.values;
  h.prototype.forEach = function(c, f) {
    var m = this;
    this.map_.forEach(function(y) {
      return c.call(f, y, y, m);
    });
  };
  return h;
}, "es6", "es3");
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill("Promise", function(c) {
  function q() {
    this.batch_ = null;
  }
  function h(c) {
    return c instanceof f ? c : new f(function(f, m) {
      f(c);
    });
  }
  if (c && !$jscomp.FORCE_POLYFILL_PROMISE) {
    return c;
  }
  q.prototype.asyncExecute = function(c) {
    if (null == this.batch_) {
      this.batch_ = [];
      var f = this;
      this.asyncExecuteFunction(function() {
        f.executeBatch_();
      });
    }
    this.batch_.push(c);
  };
  var m = $jscomp.global.setTimeout;
  q.prototype.asyncExecuteFunction = function(c) {
    m(c, 0);
  };
  q.prototype.executeBatch_ = function() {
    for (; this.batch_ && this.batch_.length;) {
      var c = this.batch_;
      this.batch_ = [];
      for (var f = 0; f < c.length; ++f) {
        var m = c[f];
        c[f] = null;
        try {
          m();
        } catch (U) {
          this.asyncThrow_(U);
        }
      }
    }
    this.batch_ = null;
  };
  q.prototype.asyncThrow_ = function(c) {
    this.asyncExecuteFunction(function() {
      throw c;
    });
  };
  var f = function(c) {
    this.state_ = 0;
    this.result_ = void 0;
    this.onSettledCallbacks_ = [];
    var f = this.createResolveAndReject_();
    try {
      c(f.resolve, f.reject);
    } catch (w) {
      f.reject(w);
    }
  };
  f.prototype.createResolveAndReject_ = function() {
    function c(c) {
      return function(h) {
        m || (m = !0, c.call(f, h));
      };
    }
    var f = this, m = !1;
    return {resolve:c(this.resolveTo_), reject:c(this.reject_)};
  };
  f.prototype.resolveTo_ = function(c) {
    if (c === this) {
      this.reject_(new TypeError("A Promise cannot resolve to itself"));
    } else {
      if (c instanceof f) {
        this.settleSameAsPromise_(c);
      } else {
        a: {
          switch(typeof c) {
            case "object":
              var m = null != c;
              break a;
            case "function":
              m = !0;
              break a;
            default:
              m = !1;
          }
        }
        m ? this.resolveToNonPromiseObj_(c) : this.fulfill_(c);
      }
    }
  };
  f.prototype.resolveToNonPromiseObj_ = function(c) {
    var f = void 0;
    try {
      f = c.then;
    } catch (w) {
      this.reject_(w);
      return;
    }
    "function" == typeof f ? this.settleSameAsThenable_(f, c) : this.fulfill_(c);
  };
  f.prototype.reject_ = function(c) {
    this.settle_(2, c);
  };
  f.prototype.fulfill_ = function(c) {
    this.settle_(1, c);
  };
  f.prototype.settle_ = function(c, f) {
    if (0 != this.state_) {
      throw Error("Cannot settle(" + c + ", " + f + "): Promise already settled in state" + this.state_);
    }
    this.state_ = c;
    this.result_ = f;
    this.executeOnSettledCallbacks_();
  };
  f.prototype.executeOnSettledCallbacks_ = function() {
    if (null != this.onSettledCallbacks_) {
      for (var c = 0; c < this.onSettledCallbacks_.length; ++c) {
        A.asyncExecute(this.onSettledCallbacks_[c]);
      }
      this.onSettledCallbacks_ = null;
    }
  };
  var A = new q;
  f.prototype.settleSameAsPromise_ = function(c) {
    var f = this.createResolveAndReject_();
    c.callWhenSettled_(f.resolve, f.reject);
  };
  f.prototype.settleSameAsThenable_ = function(c, f) {
    var m = this.createResolveAndReject_();
    try {
      c.call(f, m.resolve, m.reject);
    } catch (U) {
      m.reject(U);
    }
  };
  f.prototype.then = function(c, m) {
    function h(c, f) {
      return "function" == typeof c ? function(f) {
        try {
          A(c(f));
        } catch (O) {
          q(O);
        }
      } : f;
    }
    var A, q, y = new f(function(c, f) {
      A = c;
      q = f;
    });
    this.callWhenSettled_(h(c, A), h(m, q));
    return y;
  };
  f.prototype.catch = function(c) {
    return this.then(void 0, c);
  };
  f.prototype.callWhenSettled_ = function(c, f) {
    function m() {
      switch(h.state_) {
        case 1:
          c(h.result_);
          break;
        case 2:
          f(h.result_);
          break;
        default:
          throw Error("Unexpected state: " + h.state_);
      }
    }
    var h = this;
    null == this.onSettledCallbacks_ ? A.asyncExecute(m) : this.onSettledCallbacks_.push(m);
  };
  f.resolve = h;
  f.reject = function(c) {
    return new f(function(f, m) {
      m(c);
    });
  };
  f.race = function(c) {
    return new f(function(f, m) {
      for (var A = $jscomp.makeIterator(c), q = A.next(); !q.done; q = A.next()) {
        h(q.value).callWhenSettled_(f, m);
      }
    });
  };
  f.all = function(c) {
    var m = $jscomp.makeIterator(c), A = m.next();
    return A.done ? h([]) : new f(function(c, f) {
      function q(f) {
        return function(m) {
          y[f] = m;
          w--;
          0 == w && c(y);
        };
      }
      var y = [], w = 0;
      do {
        y.push(void 0), w++, h(A.value).callWhenSettled_(q(y.length - 1), f), A = m.next();
      } while (!A.done);
    });
  };
  return f;
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function(c) {
  return c ? c : function(c, h) {
    var m = $jscomp.checkStringArgs(this, c, "startsWith");
    c += "";
    var f = m.length, A = c.length;
    h = Math.max(0, Math.min(h | 0, m.length));
    for (var q = 0; q < A && h < f;) {
      if (m[h++] != c[q++]) {
        return !1;
      }
    }
    return q >= A;
  };
}, "es6", "es3");
(function(c) {
  function q(m) {
    if (h[m]) {
      return h[m].exports;
    }
    var f = h[m] = {i:m, l:!1, exports:{}};
    c[m].call(f.exports, f, f.exports, q);
    f.l = !0;
    return f.exports;
  }
  var h = {};
  q.m = c;
  q.c = h;
  q.d = function(c, f, h) {
    q.o(c, f) || Object.defineProperty(c, f, {enumerable:!0, get:h});
  };
  q.r = function(c) {
    $jscomp.initSymbol();
    $jscomp.initSymbol();
    "undefined" !== typeof Symbol && Symbol.toStringTag && ($jscomp.initSymbol(), Object.defineProperty(c, Symbol.toStringTag, {value:"Module"}));
    Object.defineProperty(c, "__esModule", {value:!0});
  };
  q.t = function(c, f) {
    f & 1 && (c = q(c));
    if (f & 8 || f & 4 && "object" === typeof c && c && c.__esModule) {
      return c;
    }
    var m = Object.create(null);
    q.r(m);
    Object.defineProperty(m, "default", {enumerable:!0, value:c});
    if (f & 2 && "string" != typeof c) {
      for (var h in c) {
        q.d(m, h, function(f) {
          return c[f];
        }.bind(null, h));
      }
    }
    return m;
  };
  q.n = function(c) {
    var f = c && c.__esModule ? function() {
      return c["default"];
    } : function() {
      return c;
    };
    q.d(f, "a", f);
    return f;
  };
  q.o = function(c, f) {
    return Object.prototype.hasOwnProperty.call(c, f);
  };
  q.p = "";
  return q(q.s = 9);
})({7:function(c, q, h) {
  c.exports = h.p + "icon.png";
}, 8:function(c, q, h) {
  var m, f;
  (function(f, m) {
    "object" === typeof c.exports ? c.exports = f.document ? m(f, !0) : function(c) {
      if (!c.document) {
        throw Error("jQuery requires a window with a document");
      }
      return m(c);
    } : m(f);
  })("undefined" !== typeof window ? window : this, function(h, y) {
    function A(a, b, d) {
      d = d || C;
      var g, e = d.createElement("script");
      e.text = a;
      if (b) {
        for (g in Ob) {
          (a = b[g] || b.getAttribute && b.getAttribute(g)) && e.setAttribute(g, a);
        }
      }
      d.head.appendChild(e).parentNode.removeChild(e);
    }
    function w(a) {
      return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? Ka[ib.call(a)] || "object" : typeof a;
    }
    function U(a) {
      var b = !!a && "length" in a && a.length, d = w(a);
      return v(a) || xa(a) ? !1 : "array" === d || 0 === b || "number" === typeof b && 0 < b && b - 1 in a;
    }
    function P(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }
    function ma(a, b, d) {
      return v(b) ? e.grep(a, function(a, e) {
        return !!b.call(a, e, a) !== d;
      }) : b.nodeType ? e.grep(a, function(a) {
        return a === b !== d;
      }) : "string" !== typeof b ? e.grep(a, function(a) {
        return -1 < La.call(b, a) !== d;
      }) : e.filter(b, a, d);
    }
    function za(a, b) {
      for (; (a = a[b]) && 1 !== a.nodeType;) {
      }
      return a;
    }
    function aa(a) {
      var b = {};
      e.each(a.match(ba) || [], function(a, g) {
        b[g] = !0;
      });
      return b;
    }
    function ea(a) {
      return a;
    }
    function O(a) {
      throw a;
    }
    function Ma(a, b, d, g) {
      var e;
      try {
        a && v(e = a.promise) ? e.call(a).done(b).fail(d) : a && v(e = a.then) ? e.call(a, b, d) : b.apply(void 0, [a].slice(g));
      } catch (p) {
        d.apply(void 0, [p]);
      }
    }
    function da() {
      C.removeEventListener("DOMContentLoaded", da);
      h.removeEventListener("load", da);
      e.ready();
    }
    function ja(a, b) {
      return b.toUpperCase();
    }
    function L(a) {
      return a.replace(Pb, "ms-").replace(Qb, ja);
    }
    function X() {
      this.expando = e.expando + X.uid++;
    }
    function Aa(a, b, d) {
      if (void 0 === d && 1 === a.nodeType) {
        if (d = "data-" + b.replace(Rb, "-$&").toLowerCase(), d = a.getAttribute(d), "string" === typeof d) {
          try {
            var g = d;
            d = "true" === g ? !0 : "false" === g ? !1 : "null" === g ? null : g === +g + "" ? +g : Sb.test(g) ? JSON.parse(g) : g;
          } catch (k) {
          }
          R.set(a, b, d);
        } else {
          d = void 0;
        }
      }
      return d;
    }
    function K(a, b, d, g) {
      var k, c = 20, n = g ? function() {
        return g.cur();
      } : function() {
        return e.css(a, b, "");
      }, u = n(), l = d && d[3] || (e.cssNumber[b] ? "" : "px"), r = a.nodeType && (e.cssNumber[b] || "px" !== l && +u) && na.exec(e.css(a, b));
      if (r && r[3] !== l) {
        u /= 2;
        l = l || r[3];
        for (r = +u || 1; c--;) {
          e.style(a, b, r + l), 0 >= (1 - k) * (1 - (k = n() / u || 0.5)) && (c = 0), r /= k;
        }
        r *= 2;
        e.style(a, b, r + l);
        d = d || [];
      }
      if (d) {
        r = +r || +u || 0;
        var f = d[1] ? r + (d[1] + 1) * d[2] : +d[2];
        g && (g.unit = l, g.start = r, g.end = f);
      }
      return f;
    }
    function F(a, b) {
      for (var d, g, k = [], c = 0, n = a.length; c < n; c++) {
        if (g = a[c], g.style) {
          if (d = g.style.display, b) {
            if ("none" === d && (k[c] = x.get(g, "display") || null, k[c] || (g.style.display = "")), "" === g.style.display && Na(g)) {
              d = c;
              var u = g.ownerDocument;
              g = g.nodeName;
              var l = jb[g];
              l || (u = u.body.appendChild(u.createElement(g)), l = e.css(u, "display"), u.parentNode.removeChild(u), "none" === l && (l = "block"), jb[g] = l);
              u = l;
              k[d] = u;
            }
          } else {
            "none" !== d && (k[c] = "none", x.set(g, "display", d));
          }
        }
      }
      for (c = 0; c < n; c++) {
        null != k[c] && (a[c].style.display = k[c]);
      }
      return a;
    }
    function z(a, b) {
      var d = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
      return void 0 === b || b && P(a, b) ? e.merge([a], d) : d;
    }
    function B(a, b) {
      for (var d = 0, g = a.length; d < g; d++) {
        x.set(a[d], "globalEval", !b || x.get(b[d], "globalEval"));
      }
    }
    function W(a, b, d, g, k) {
      for (var c, n, u, l = b.createDocumentFragment(), r = [], f = 0, h = a.length; f < h; f++) {
        if ((c = a[f]) || 0 === c) {
          if ("object" === w(c)) {
            e.merge(r, c.nodeType ? [c] : c);
          } else {
            if (Tb.test(c)) {
              n = n || l.appendChild(b.createElement("div"));
              u = (kb.exec(c) || ["", ""])[1].toLowerCase();
              u = Y[u] || Y._default;
              n.innerHTML = u[1] + e.htmlPrefilter(c) + u[2];
              for (u = u[0]; u--;) {
                n = n.lastChild;
              }
              e.merge(r, n.childNodes);
              n = l.firstChild;
              n.textContent = "";
            } else {
              r.push(b.createTextNode(c));
            }
          }
        }
      }
      l.textContent = "";
      for (f = 0; c = r[f++];) {
        if (g && -1 < e.inArray(c, g)) {
          k && k.push(c);
        } else {
          if (a = oa(c), n = z(l.appendChild(c), "script"), a && B(n), d) {
            for (u = 0; c = n[u++];) {
              lb.test(c.type || "") && d.push(c);
            }
          }
        }
      }
      return l;
    }
    function t() {
      return !0;
    }
    function J() {
      return !1;
    }
    function Oa(a, b) {
      a: {
        try {
          var d = C.activeElement;
          break a;
        } catch (g) {
        }
        d = void 0;
      }
      return a === d === ("focus" === b);
    }
    function pa(a, b, d, g, k, c) {
      var p;
      if ("object" === typeof b) {
        "string" !== typeof d && (g = g || d, d = void 0);
        for (p in b) {
          pa(a, p, d, g, b[p], c);
        }
        return a;
      }
      null == g && null == k ? (k = d, g = d = void 0) : null == k && ("string" === typeof d ? (k = g, g = void 0) : (k = g, g = d, d = void 0));
      if (!1 === k) {
        k = J;
      } else {
        if (!k) {
          return a;
        }
      }
      if (1 === c) {
        var u = k;
        k = function(a) {
          e().off(a);
          return u.apply(this, arguments);
        };
        k.guid = u.guid || (u.guid = e.guid++);
      }
      return a.each(function() {
        e.event.add(this, b, k, g, d);
      });
    }
    function Da(a, b, d) {
      d ? (x.set(a, b, !1), e.event.add(a, b, {namespace:!1, handler:function(a) {
        var g = x.get(this, b);
        if (a.isTrigger & 1 && this[b]) {
          if (g.length) {
            (e.event.special[b] || {}).delegateType && a.stopPropagation();
          } else {
            g = ka.call(arguments);
            x.set(this, b, g);
            var c = d(this, b);
            this[b]();
            var n = x.get(this, b);
            g !== n || c ? x.set(this, b, !1) : n = {};
            if (g !== n) {
              return a.stopImmediatePropagation(), a.preventDefault(), n.value;
            }
          }
        } else {
          g.length && (x.set(this, b, {value:e.event.trigger(e.extend(g[0], e.Event.prototype), g.slice(1), this)}), a.stopImmediatePropagation());
        }
      }})) : void 0 === x.get(a, b) && e.event.add(a, b, t);
    }
    function G(a, b) {
      return P(a, "table") && P(11 !== b.nodeType ? b : b.firstChild, "tr") ? e(a).children("tbody")[0] || a : a;
    }
    function fa(a) {
      a.type = (null !== a.getAttribute("type")) + "/" + a.type;
      return a;
    }
    function Pa(a) {
      "true/" === (a.type || "").slice(0, 5) ? a.type = a.type.slice(5) : a.removeAttribute("type");
      return a;
    }
    function Z(a, b) {
      var d, g;
      if (1 === b.nodeType) {
        if (x.hasData(a)) {
          var k = x.access(a);
          var c = x.set(b, k);
          if (k = k.events) {
            for (g in delete c.handle, c.events = {}, k) {
              for (c = 0, d = k[g].length; c < d; c++) {
                e.event.add(b, g, k[g][c]);
              }
            }
          }
        }
        R.hasData(a) && (a = R.access(a), a = e.extend({}, a), R.set(b, a));
      }
    }
    function S(a, b, d, g) {
      b = mb.apply([], b);
      var k, c = 0, n = a.length, u = n - 1, l = b[0], r = v(l);
      if (r || 1 < n && "string" === typeof l && !E.checkClone && Ub.test(l)) {
        return a.each(function(e) {
          var k = a.eq(e);
          r && (b[0] = l.call(this, e, k.html()));
          S(k, b, d, g);
        });
      }
      if (n) {
        var f = W(b, a[0].ownerDocument, !1, a, g);
        var h = f.firstChild;
        1 === f.childNodes.length && (f = h);
        if (h || g) {
          h = e.map(z(f, "script"), fa);
          for (k = h.length; c < n; c++) {
            var m = f;
            c !== u && (m = e.clone(m, !0, !0), k && e.merge(h, z(m, "script")));
            d.call(a[c], m, c);
          }
          if (k) {
            for (f = h[h.length - 1].ownerDocument, e.map(h, Pa), c = 0; c < k; c++) {
              m = h[c], lb.test(m.type || "") && !x.access(m, "globalEval") && e.contains(f, m) && (m.src && "module" !== (m.type || "").toLowerCase() ? e._evalUrl && !m.noModule && e._evalUrl(m.src, {nonce:m.nonce || m.getAttribute("nonce")}) : A(m.textContent.replace(Wb, ""), m, f));
            }
          }
        }
      }
      return a;
    }
    function Fa(a, b, d) {
      for (var g = b ? e.filter(b, a) : a, k = 0; null != (b = g[k]); k++) {
        d || 1 !== b.nodeType || e.cleanData(z(b)), b.parentNode && (d && oa(b) && B(z(b, "script")), b.parentNode.removeChild(b));
      }
      return a;
    }
    function la(a, b, d) {
      var g = a.style;
      if (d = d || Qa(a)) {
        var k = d.getPropertyValue(b) || d[b];
        "" !== k || oa(a) || (k = e.style(a, b));
        if (!E.pixelBoxStyles() && Va.test(k) && Xb.test(b)) {
          a = g.width;
          b = g.minWidth;
          var c = g.maxWidth;
          g.minWidth = g.maxWidth = g.width = k;
          k = d.width;
          g.width = a;
          g.minWidth = b;
          g.maxWidth = c;
        }
      }
      return void 0 !== k ? k + "" : k;
    }
    function nb(a, b) {
      return {get:function() {
        if (a()) {
          delete this.get;
        } else {
          return (this.get = b).apply(this, arguments);
        }
      }};
    }
    function Wa(a) {
      var b = e.cssProps[a] || ob[a];
      if (b) {
        return b;
      }
      if (a in pb) {
        return a;
      }
      a: {
        b = a;
        for (var d = b[0].toUpperCase() + b.slice(1), g = qb.length; g--;) {
          if (b = qb[g] + d, b in pb) {
            break a;
          }
        }
        b = void 0;
      }
      return ob[a] = b || a;
    }
    function rb(a, b, d) {
      return (a = na.exec(b)) ? Math.max(0, a[2] - (d || 0)) + (a[3] || "px") : b;
    }
    function Xa(a, b, d, g, k, c) {
      var n = "width" === b ? 1 : 0, p = 0, l = 0;
      if (d === (g ? "border" : "content")) {
        return 0;
      }
      for (; 4 > n; n += 2) {
        "margin" === d && (l += e.css(a, d + ha[n], !0, k)), g ? ("content" === d && (l -= e.css(a, "padding" + ha[n], !0, k)), "margin" !== d && (l -= e.css(a, "border" + ha[n] + "Width", !0, k))) : (l += e.css(a, "padding" + ha[n], !0, k), "padding" !== d ? l += e.css(a, "border" + ha[n] + "Width", !0, k) : p += e.css(a, "border" + ha[n] + "Width", !0, k));
      }
      !g && 0 <= c && (l += Math.max(0, Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - c - l - p - 0.5)) || 0);
      return l;
    }
    function sb(a, b, d) {
      var g = Qa(a), k = (!E.boxSizingReliable() || d) && "border-box" === e.css(a, "boxSizing", !1, g), c = k, n = la(a, b, g), u = "offset" + b[0].toUpperCase() + b.slice(1);
      if (Va.test(n)) {
        if (!d) {
          return n;
        }
        n = "auto";
      }
      (!E.boxSizingReliable() && k || "auto" === n || !parseFloat(n) && "inline" === e.css(a, "display", !1, g)) && a.getClientRects().length && (k = "border-box" === e.css(a, "boxSizing", !1, g), (c = u in a) && (n = a[u]));
      n = parseFloat(n) || 0;
      return n + Xa(a, b, d || (k ? "border" : "content"), c, g, n) + "px";
    }
    function V(a, b, d, g, e) {
      return new V.prototype.init(a, b, d, g, e);
    }
    function Ya() {
      Ra && (!1 === C.hidden && h.requestAnimationFrame ? h.requestAnimationFrame(Ya) : h.setTimeout(Ya, e.fx.interval), e.fx.tick());
    }
    function tb() {
      h.setTimeout(function() {
        qa = void 0;
      });
      return qa = Date.now();
    }
    function Sa(a, b) {
      var d = 0, g = {height:a};
      for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
        var e = ha[d];
        g["margin" + e] = g["padding" + e] = a;
      }
      b && (g.opacity = g.width = a);
      return g;
    }
    function ub(a, b, d) {
      for (var g, e = (Q.tweeners[b] || []).concat(Q.tweeners["*"]), c = 0, n = e.length; c < n; c++) {
        if (g = e[c].call(d, b, a)) {
          return g;
        }
      }
    }
    function Yb(a, b) {
      var d, g;
      for (d in a) {
        var c = L(d);
        var p = b[c];
        var n = a[d];
        Array.isArray(n) && (p = n[1], n = a[d] = n[0]);
        d !== c && (a[c] = n, delete a[d]);
        if ((g = e.cssHooks[c]) && "expand" in g) {
          for (d in n = g.expand(n), delete a[c], n) {
            d in a || (a[d] = n[d], b[d] = p);
          }
        } else {
          b[c] = p;
        }
      }
    }
    function Q(a, b, d) {
      var g, c = 0, p = Q.prefilters.length, n = e.Deferred().always(function() {
        delete u.elem;
      }), u = function() {
        if (g) {
          return !1;
        }
        var b = qa || tb();
        b = Math.max(0, l.startTime + l.duration - b);
        for (var d = 1 - (b / l.duration || 0), e = 0, c = l.tweens.length; e < c; e++) {
          l.tweens[e].run(d);
        }
        n.notifyWith(a, [l, d, b]);
        if (1 > d && c) {
          return b;
        }
        c || n.notifyWith(a, [l, 1, 0]);
        n.resolveWith(a, [l]);
        return !1;
      }, l = n.promise({elem:a, props:e.extend({}, b), opts:e.extend(!0, {specialEasing:{}, easing:e.easing._default}, d), originalProperties:b, originalOptions:d, startTime:qa || tb(), duration:d.duration, tweens:[], createTween:function(b, d) {
        b = e.Tween(a, l.opts, b, d, l.opts.specialEasing[b] || l.opts.easing);
        l.tweens.push(b);
        return b;
      }, stop:function(b) {
        var d = 0, e = b ? l.tweens.length : 0;
        if (g) {
          return this;
        }
        for (g = !0; d < e; d++) {
          l.tweens[d].run(1);
        }
        b ? (n.notifyWith(a, [l, 1, 0]), n.resolveWith(a, [l, b])) : n.rejectWith(a, [l, b]);
        return this;
      }});
      d = l.props;
      for (Yb(d, l.opts.specialEasing); c < p; c++) {
        if (b = Q.prefilters[c].call(l, a, d, l.opts)) {
          return v(b.stop) && (e._queueHooks(l.elem, l.opts.queue).stop = b.stop.bind(b)), b;
        }
      }
      e.map(d, ub, l);
      v(l.opts.start) && l.opts.start.call(a, l);
      l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
      e.fx.timer(e.extend(u, {elem:a, anim:l, queue:l.opts.queue}));
      return l;
    }
    function ra(a) {
      return (a.match(ba) || []).join(" ");
    }
    function sa(a) {
      return a.getAttribute && a.getAttribute("class") || "";
    }
    function Za(a) {
      return Array.isArray(a) ? a : "string" === typeof a ? a.match(ba) || [] : [];
    }
    function $a(a, b, d, g) {
      var c;
      if (Array.isArray(b)) {
        e.each(b, function(b, e) {
          d || Zb.test(a) ? g(a, e) : $a(a + "[" + ("object" === typeof e && null != e ? b : "") + "]", e, d, g);
        });
      } else {
        if (d || "object" !== w(b)) {
          g(a, b);
        } else {
          for (c in b) {
            $a(a + "[" + c + "]", b[c], d, g);
          }
        }
      }
    }
    function vb(a) {
      return function(b, d) {
        "string" !== typeof b && (d = b, b = "*");
        var e = 0, c = b.toLowerCase().match(ba) || [];
        if (v(d)) {
          for (; b = c[e++];) {
            "+" === b[0] ? (b = b.slice(1) || "*", (a[b] = a[b] || []).unshift(d)) : (a[b] = a[b] || []).push(d);
          }
        }
      };
    }
    function wb(a, b, d, g) {
      function c(k) {
        var l;
        p[k] = !0;
        e.each(a[k] || [], function(a, e) {
          a = e(b, d, g);
          if ("string" === typeof a && !n && !p[a]) {
            return b.dataTypes.unshift(a), c(a), !1;
          }
          if (n) {
            return !(l = a);
          }
        });
        return l;
      }
      var p = {}, n = a === ab;
      return c(b.dataTypes[0]) || !p["*"] && c("*");
    }
    function bb(a, b) {
      var d, g, c = e.ajaxSettings.flatOptions || {};
      for (d in b) {
        void 0 !== b[d] && ((c[d] ? a : g || (g = {}))[d] = b[d]);
      }
      g && e.extend(!0, a, g);
      return a;
    }
    var ta = [], C = h.document, $b = Object.getPrototypeOf, ka = ta.slice, mb = ta.concat, cb = ta.push, La = ta.indexOf, Ka = {}, ib = Ka.toString, Ta = Ka.hasOwnProperty, xb = Ta.toString, ac = xb.call(Object), E = {}, v = function(a) {
      return "function" === typeof a && "number" !== typeof a.nodeType;
    }, xa = function(a) {
      return null != a && a === a.window;
    }, Ob = {type:!0, src:!0, nonce:!0, noModule:!0}, e = function(a, b) {
      return new e.fn.init(a, b);
    }, bc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    e.fn = e.prototype = {jquery:"3.4.1", constructor:e, length:0, toArray:function() {
      return ka.call(this);
    }, get:function(a) {
      return null == a ? ka.call(this) : 0 > a ? this[a + this.length] : this[a];
    }, pushStack:function(a) {
      a = e.merge(this.constructor(), a);
      a.prevObject = this;
      return a;
    }, each:function(a) {
      return e.each(this, a);
    }, map:function(a) {
      return this.pushStack(e.map(this, function(b, d) {
        return a.call(b, d, b);
      }));
    }, slice:function() {
      return this.pushStack(ka.apply(this, arguments));
    }, first:function() {
      return this.eq(0);
    }, last:function() {
      return this.eq(-1);
    }, eq:function(a) {
      var b = this.length;
      a = +a + (0 > a ? b : 0);
      return this.pushStack(0 <= a && a < b ? [this[a]] : []);
    }, end:function() {
      return this.prevObject || this.constructor();
    }, push:cb, sort:ta.sort, splice:ta.splice};
    e.extend = e.fn.extend = function() {
      var a, b, d, g = arguments[0] || {}, c = 1, p = arguments.length, n = !1;
      "boolean" === typeof g && (n = g, g = arguments[c] || {}, c++);
      "object" === typeof g || v(g) || (g = {});
      c === p && (g = this, c--);
      for (; c < p; c++) {
        if (null != (a = arguments[c])) {
          for (b in a) {
            var u = a[b];
            if ("__proto__" !== b && g !== u) {
              if (n && u && (e.isPlainObject(u) || (d = Array.isArray(u)))) {
                var l = g[b];
                l = d && !Array.isArray(l) ? [] : d || e.isPlainObject(l) ? l : {};
                d = !1;
                g[b] = e.extend(n, l, u);
              } else {
                void 0 !== u && (g[b] = u);
              }
            }
          }
        }
      }
      return g;
    };
    e.extend({expando:"jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""), isReady:!0, error:function(a) {
      throw Error(a);
    }, noop:function() {
    }, isPlainObject:function(a) {
      if (!a || "[object Object]" !== ib.call(a)) {
        return !1;
      }
      a = $b(a);
      if (!a) {
        return !0;
      }
      a = Ta.call(a, "constructor") && a.constructor;
      return "function" === typeof a && xb.call(a) === ac;
    }, isEmptyObject:function(a) {
      for (var b in a) {
        return !1;
      }
      return !0;
    }, globalEval:function(a, b) {
      A(a, {nonce:b && b.nonce});
    }, each:function(a, b) {
      var d, e = 0;
      if (U(a)) {
        for (d = a.length; e < d && !1 !== b.call(a[e], e, a[e]); e++) {
        }
      } else {
        for (e in a) {
          if (!1 === b.call(a[e], e, a[e])) {
            break;
          }
        }
      }
      return a;
    }, trim:function(a) {
      return null == a ? "" : (a + "").replace(bc, "");
    }, makeArray:function(a, b) {
      b = b || [];
      null != a && (U(Object(a)) ? e.merge(b, "string" === typeof a ? [a] : a) : cb.call(b, a));
      return b;
    }, inArray:function(a, b, d) {
      return null == b ? -1 : La.call(b, a, d);
    }, merge:function(a, b) {
      for (var d = +b.length, e = 0, c = a.length; e < d; e++) {
        a[c++] = b[e];
      }
      a.length = c;
      return a;
    }, grep:function(a, b, d) {
      for (var e = [], c = 0, p = a.length, n = !d; c < p; c++) {
        d = !b(a[c], c), d !== n && e.push(a[c]);
      }
      return e;
    }, map:function(a, b, d) {
      var e, c = 0, p = [];
      if (U(a)) {
        for (e = a.length; c < e; c++) {
          var n = b(a[c], c, d);
          null != n && p.push(n);
        }
      } else {
        for (c in a) {
          n = b(a[c], c, d), null != n && p.push(n);
        }
      }
      return mb.apply([], p);
    }, guid:1, support:E});
    $jscomp.initSymbol();
    "function" === typeof Symbol && ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), $jscomp.initSymbol(), $jscomp.initSymbolIterator(), e.fn[Symbol.iterator] = ta[Symbol.iterator]);
    e.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
      Ka["[object " + b + "]"] = b.toLowerCase();
    });
    var ca = function(a) {
      function b(a, b, d, e) {
        var g, c, k, D;
        var n = b && b.ownerDocument;
        var p = b ? b.nodeType : 9;
        d = d || [];
        if ("string" !== typeof a || !a || 1 !== p && 9 !== p && 11 !== p) {
          return d;
        }
        if (!e && ((b ? b.ownerDocument || b : E) !== v && Ba(b), b = b || v, C)) {
          if (11 !== p && (D = xa.exec(a))) {
            if (g = D[1]) {
              if (9 === p) {
                if (c = b.getElementById(g)) {
                  if (c.id === g) {
                    return d.push(c), d;
                  }
                } else {
                  return d;
                }
              } else {
                if (n && (c = n.getElementById(g)) && pa(b, c) && c.id === g) {
                  return d.push(c), d;
                }
              }
            } else {
              if (D[2]) {
                return Q.apply(d, b.getElementsByTagName(a)), d;
              }
              if ((g = D[3]) && N.getElementsByClassName && b.getElementsByClassName) {
                return Q.apply(d, b.getElementsByClassName(g)), d;
              }
            }
          }
          if (!(!N.qsa || L[a + " "] || G && G.test(a) || 1 === p && "object" === b.nodeName.toLowerCase())) {
            g = a;
            n = b;
            if (1 === p && ka.test(a)) {
              (k = b.getAttribute("id")) ? k = k.replace(oa, qa) : b.setAttribute("id", k = M);
              p = la(a);
              for (n = p.length; n--;) {
                p[n] = "#" + k + " " + t(p[n]);
              }
              g = p.join(",");
              n = ja.test(a) && m(b.parentNode) || b;
            }
            try {
              return Q.apply(d, n.querySelectorAll(g)), d;
            } catch (Gc) {
              L(a, !0);
            } finally {
              k === M && b.removeAttribute("id");
            }
          }
        }
        return Ca(a.replace(X, "$1"), b, d, e);
      }
      function d() {
        function a(d, e) {
          b.push(d + " ") > H.cacheLength && delete a[b.shift()];
          return a[d + " "] = e;
        }
        var b = [];
        return a;
      }
      function e(a) {
        a[M] = !0;
        return a;
      }
      function c(a) {
        var b = v.createElement("fieldset");
        try {
          return !!a(b);
        } catch (T) {
          return !1;
        } finally {
          b.parentNode && b.parentNode.removeChild(b);
        }
      }
      function p(a, b) {
        a = a.split("|");
        for (var d = a.length; d--;) {
          H.attrHandle[a[d]] = b;
        }
      }
      function n(a, b) {
        var d = b && a, e = d && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
        if (e) {
          return e;
        }
        if (d) {
          for (; d = d.nextSibling;) {
            if (d === b) {
              return -1;
            }
          }
        }
        return a ? 1 : -1;
      }
      function u(a) {
        return function(b) {
          return "input" === b.nodeName.toLowerCase() && b.type === a;
        };
      }
      function l(a) {
        return function(b) {
          var d = b.nodeName.toLowerCase();
          return ("input" === d || "button" === d) && b.type === a;
        };
      }
      function f(a) {
        return function(b) {
          return "form" in b ? b.parentNode && !1 === b.disabled ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && za(b) === a : b.disabled === a : "label" in b ? b.disabled === a : !1;
        };
      }
      function h(a) {
        return e(function(b) {
          b = +b;
          return e(function(d, e) {
            for (var g, c = a([], d.length, b), k = c.length; k--;) {
              d[g = c[k]] && (d[g] = !(e[g] = d[g]));
            }
          });
        });
      }
      function m(a) {
        return a && "undefined" !== typeof a.getElementsByTagName && a;
      }
      function q() {
      }
      function t(a) {
        for (var b = 0, d = a.length, e = ""; b < d; b++) {
          e += a[b].value;
        }
        return e;
      }
      function K(a, b, d) {
        var e = b.dir, g = b.next, c = g || e, k = d && "parentNode" === c, n = Da++;
        return b.first ? function(b, d, g) {
          for (; b = b[e];) {
            if (1 === b.nodeType || k) {
              return a(b, d, g);
            }
          }
          return !1;
        } : function(b, d, p) {
          var D, T = [fa, n];
          if (p) {
            for (; b = b[e];) {
              if ((1 === b.nodeType || k) && a(b, d, p)) {
                return !0;
              }
            }
          } else {
            for (; b = b[e];) {
              if (1 === b.nodeType || k) {
                var l = b[M] || (b[M] = {});
                l = l[b.uniqueID] || (l[b.uniqueID] = {});
                if (g && g === b.nodeName.toLowerCase()) {
                  b = b[e] || b;
                } else {
                  if ((D = l[c]) && D[0] === fa && D[1] === n) {
                    return T[2] = D[2];
                  }
                  l[c] = T;
                  if (T[2] = a(b, d, p)) {
                    return !0;
                  }
                }
              }
            }
          }
          return !1;
        };
      }
      function z(a) {
        return 1 < a.length ? function(b, d, e) {
          for (var g = a.length; g--;) {
            if (!a[g](b, d, e)) {
              return !1;
            }
          }
          return !0;
        } : a[0];
      }
      function F(a, b, d, e, g) {
        for (var c, k = [], n = 0, p = a.length, D = null != b; n < p; n++) {
          if (c = a[n]) {
            if (!d || d(c, e, g)) {
              k.push(c), D && b.push(n);
            }
          }
        }
        return k;
      }
      function x(a, d, g, c, k, n) {
        c && !c[M] && (c = x(c));
        k && !k[M] && (k = x(k, n));
        return e(function(e, n, p, D) {
          var T, l = [], f = [], u = n.length, r;
          if (!(r = e)) {
            r = d || "*";
            for (var h = p.nodeType ? [p] : p, m = [], Ea = 0, Ga = h.length; Ea < Ga; Ea++) {
              b(r, h[Ea], m);
            }
            r = m;
          }
          r = !a || !e && d ? r : F(r, l, a, p, D);
          h = g ? k || (e ? a : u || c) ? [] : n : r;
          g && g(r, h, p, D);
          if (c) {
            var q = F(h, f);
            c(q, [], p, D);
            for (p = q.length; p--;) {
              if (T = q[p]) {
                h[f[p]] = !(r[f[p]] = T);
              }
            }
          }
          if (e) {
            if (k || a) {
              if (k) {
                q = [];
                for (p = h.length; p--;) {
                  (T = h[p]) && q.push(r[p] = T);
                }
                k(null, h = [], q, D);
              }
              for (p = h.length; p--;) {
                (T = h[p]) && -1 < (q = k ? U(e, T) : l[p]) && (e[q] = !(n[q] = T));
              }
            }
          } else {
            h = F(h === n ? h.splice(u, h.length) : h), k ? k(null, n, h, D) : Q.apply(n, h);
          }
        });
      }
      function B(a) {
        var b, d, e = a.length, g = H.relative[a[0].type];
        var c = g || H.relative[" "];
        for (var k = g ? 1 : 0, p = K(function(a) {
          return a === b;
        }, c, !0), n = K(function(a) {
          return -1 < U(b, a);
        }, c, !0), D = [function(a, d, e) {
          a = !g && (e || d !== W) || ((b = d).nodeType ? p(a, d, e) : n(a, d, e));
          b = null;
          return a;
        }]; k < e; k++) {
          if (c = H.relative[a[k].type]) {
            D = [K(z(D), c)];
          } else {
            c = H.filter[a[k].type].apply(null, a[k].matches);
            if (c[M]) {
              for (d = ++k; d < e && !H.relative[a[d].type]; d++) {
              }
              return x(1 < k && z(D), 1 < k && t(a.slice(0, k - 1).concat({value:" " === a[k - 2].type ? "*" : ""})).replace(X, "$1"), c, k < d && B(a.slice(k, d)), d < e && B(a = a.slice(d)), d < e && t(a));
            }
            D.push(c);
          }
        }
        return z(D);
      }
      function A(a, d) {
        var g = 0 < d.length, c = 0 < a.length, k = function(e, k, p, n, D) {
          var l, T, f = 0, u = "0", h = e && [], r = [], m = W, Ea = e || c && H.find.TAG("*", D), Ga = fa += null == m ? 1 : Math.random() || 0.1, q = Ea.length;
          for (D && (W = k === v || k || D); u !== q && null != (l = Ea[u]); u++) {
            if (c && l) {
              var t = 0;
              k || l.ownerDocument === v || (Ba(l), p = !C);
              for (; T = a[t++];) {
                if (T(l, k || v, p)) {
                  n.push(l);
                  break;
                }
              }
              D && (fa = Ga);
            }
            g && ((l = !T && l) && f--, e && h.push(l));
          }
          f += u;
          if (g && u !== f) {
            for (t = 0; T = d[t++];) {
              T(h, r, k, p);
            }
            if (e) {
              if (0 < f) {
                for (; u--;) {
                  h[u] || r[u] || (r[u] = Y.call(n));
                }
              }
              r = F(r);
            }
            Q.apply(n, r);
            D && !e && 0 < r.length && 1 < f + d.length && b.uniqueSort(n);
          }
          D && (fa = Ga, W = m);
          return h;
        };
        return g ? e(k) : k;
      }
      var y, W, w, Z, v, J, C, G, S, I, pa, M = "sizzle" + 1 * new Date, E = a.document, fa = 0, Da = 0, O = d(), Oa = d(), Pa = d(), L = d(), R = function(a, b) {
        a === b && (Z = !0);
        return 0;
      }, V = {}.hasOwnProperty, P = [], Y = P.pop, aa = P.push, Q = P.push, ba = P.slice, U = function(a, b) {
        for (var d = 0, e = a.length; d < e; d++) {
          if (a[d] === b) {
            return d;
          }
        }
        return -1;
      }, ea = /[\x20\t\r\n\f]+/g, X = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, ha = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, ia = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, ka = /[\x20\t\r\n\f]|>/, Fa = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, 
      ma = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/, da = {ID:/^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS:/^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG:/^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/, ATTR:/^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/, PSEUDO:/^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/, 
      CHILD:/^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i, bool:/^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i, needsContext:/^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i}, ra = /HTML$/i, sa = /^(?:input|select|textarea|button)$/i, 
      ta = /^h\d$/i, ca = /^[^{]+\{\s*\[native \w/, xa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ja = /[+~]/, ua = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, va = function(a, b, d) {
        a = "0x" + b - 65536;
        return a !== a || d ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320);
      }, oa = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, qa = function(a, b) {
        return b ? "\x00" === a ? "\ufffd" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
      }, wa = function() {
        Ba();
      }, za = K(function(a) {
        return !0 === a.disabled && "fieldset" === a.nodeName.toLowerCase();
      }, {dir:"parentNode", next:"legend"});
      try {
        Q.apply(P = ba.call(E.childNodes), E.childNodes), P[E.childNodes.length].nodeType;
      } catch (D) {
        Q = {apply:P.length ? function(a, b) {
          aa.apply(a, ba.call(b));
        } : function(a, b) {
          for (var d = a.length, e = 0; a[d++] = b[e++];) {
          }
          a.length = d - 1;
        }};
      }
      var N = b.support = {};
      var Aa = b.isXML = function(a) {
        var b = (a.ownerDocument || a).documentElement;
        return !ra.test(a.namespaceURI || b && b.nodeName || "HTML");
      };
      var Ba = b.setDocument = function(a) {
        var b;
        a = a ? a.ownerDocument || a : E;
        if (a === v || 9 !== a.nodeType || !a.documentElement) {
          return v;
        }
        v = a;
        J = v.documentElement;
        C = !Aa(v);
        E !== v && (b = v.defaultView) && b.top !== b && (b.addEventListener ? b.addEventListener("unload", wa, !1) : b.attachEvent && b.attachEvent("onunload", wa));
        N.attributes = c(function(a) {
          a.className = "i";
          return !a.getAttribute("className");
        });
        N.getElementsByTagName = c(function(a) {
          a.appendChild(v.createComment(""));
          return !a.getElementsByTagName("*").length;
        });
        N.getElementsByClassName = ca.test(v.getElementsByClassName);
        N.getById = c(function(a) {
          J.appendChild(a).id = M;
          return !v.getElementsByName || !v.getElementsByName(M).length;
        });
        N.getById ? (H.filter.ID = function(a) {
          var b = a.replace(ua, va);
          return function(a) {
            return a.getAttribute("id") === b;
          };
        }, H.find.ID = function(a, b) {
          if ("undefined" !== typeof b.getElementById && C) {
            return (a = b.getElementById(a)) ? [a] : [];
          }
        }) : (H.filter.ID = function(a) {
          var b = a.replace(ua, va);
          return function(a) {
            return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b;
          };
        }, H.find.ID = function(a, b) {
          if ("undefined" !== typeof b.getElementById && C) {
            var d, e = b.getElementById(a);
            if (e) {
              if ((d = e.getAttributeNode("id")) && d.value === a) {
                return [e];
              }
              var g = b.getElementsByName(a);
              for (b = 0; e = g[b++];) {
                if ((d = e.getAttributeNode("id")) && d.value === a) {
                  return [e];
                }
              }
            }
            return [];
          }
        });
        H.find.TAG = N.getElementsByTagName ? function(a, b) {
          if ("undefined" !== typeof b.getElementsByTagName) {
            return b.getElementsByTagName(a);
          }
          if (N.qsa) {
            return b.querySelectorAll(a);
          }
        } : function(a, b) {
          var d = [], e = 0;
          b = b.getElementsByTagName(a);
          if ("*" === a) {
            for (; a = b[e++];) {
              1 === a.nodeType && d.push(a);
            }
            return d;
          }
          return b;
        };
        H.find.CLASS = N.getElementsByClassName && function(a, b) {
          if ("undefined" !== typeof b.getElementsByClassName && C) {
            return b.getElementsByClassName(a);
          }
        };
        S = [];
        G = [];
        if (N.qsa = ca.test(v.querySelectorAll)) {
          c(function(a) {
            J.appendChild(a).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>";
            a.querySelectorAll("[msallowcapture^='']").length && G.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
            a.querySelectorAll("[selected]").length || G.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
            a.querySelectorAll("[id~=" + M + "-]").length || G.push("~=");
            a.querySelectorAll(":checked").length || G.push(":checked");
            a.querySelectorAll("a#" + M + "+*").length || G.push(".#.+[+~]");
          }), c(function(a) {
            a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var b = v.createElement("input");
            b.setAttribute("type", "hidden");
            a.appendChild(b).setAttribute("name", "D");
            a.querySelectorAll("[name=d]").length && G.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
            2 !== a.querySelectorAll(":enabled").length && G.push(":enabled", ":disabled");
            J.appendChild(a).disabled = !0;
            2 !== a.querySelectorAll(":disabled").length && G.push(":enabled", ":disabled");
            a.querySelectorAll("*,:x");
            G.push(",.*:");
          });
        }
        (N.matchesSelector = ca.test(I = J.matches || J.webkitMatchesSelector || J.mozMatchesSelector || J.oMatchesSelector || J.msMatchesSelector)) && c(function(a) {
          N.disconnectedMatch = I.call(a, "*");
          I.call(a, "[s!='']:x");
          S.push("!=", ":((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)");
        });
        G = G.length && new RegExp(G.join("|"));
        S = S.length && new RegExp(S.join("|"));
        pa = (b = ca.test(J.compareDocumentPosition)) || ca.test(J.contains) ? function(a, b) {
          var d = 9 === a.nodeType ? a.documentElement : a;
          b = b && b.parentNode;
          return a === b || !!(b && 1 === b.nodeType && (d.contains ? d.contains(b) : a.compareDocumentPosition && a.compareDocumentPosition(b) & 16));
        } : function(a, b) {
          if (b) {
            for (; b = b.parentNode;) {
              if (b === a) {
                return !0;
              }
            }
          }
          return !1;
        };
        R = b ? function(a, b) {
          if (a === b) {
            return Z = !0, 0;
          }
          var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
          if (d) {
            return d;
          }
          d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
          return d & 1 || !N.sortDetached && b.compareDocumentPosition(a) === d ? a === v || a.ownerDocument === E && pa(E, a) ? -1 : b === v || b.ownerDocument === E && pa(E, b) ? 1 : w ? U(w, a) - U(w, b) : 0 : d & 4 ? -1 : 1;
        } : function(a, b) {
          if (a === b) {
            return Z = !0, 0;
          }
          var d = 0, e = a.parentNode, g = b.parentNode, c = [a], k = [b];
          if (!e || !g) {
            return a === v ? -1 : b === v ? 1 : e ? -1 : g ? 1 : w ? U(w, a) - U(w, b) : 0;
          }
          if (e === g) {
            return n(a, b);
          }
          for (; a = a.parentNode;) {
            c.unshift(a);
          }
          for (a = b; a = a.parentNode;) {
            k.unshift(a);
          }
          for (; c[d] === k[d];) {
            d++;
          }
          return d ? n(c[d], k[d]) : c[d] === E ? -1 : k[d] === E ? 1 : 0;
        };
        return v;
      };
      b.matches = function(a, d) {
        return b(a, null, null, d);
      };
      b.matchesSelector = function(a, d) {
        (a.ownerDocument || a) !== v && Ba(a);
        if (!(!N.matchesSelector || !C || L[d + " "] || S && S.test(d) || G && G.test(d))) {
          try {
            var e = I.call(a, d);
            if (e || N.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
              return e;
            }
          } catch (Ga) {
            L(d, !0);
          }
        }
        return 0 < b(d, v, null, [a]).length;
      };
      b.contains = function(a, b) {
        (a.ownerDocument || a) !== v && Ba(a);
        return pa(a, b);
      };
      b.attr = function(a, b) {
        (a.ownerDocument || a) !== v && Ba(a);
        var d = H.attrHandle[b.toLowerCase()];
        d = d && V.call(H.attrHandle, b.toLowerCase()) ? d(a, b, !C) : void 0;
        return void 0 !== d ? d : N.attributes || !C ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
      };
      b.escape = function(a) {
        return (a + "").replace(oa, qa);
      };
      b.error = function(a) {
        throw Error("Syntax error, unrecognized expression: " + a);
      };
      b.uniqueSort = function(a) {
        var b, d = [], e = 0, g = 0;
        Z = !N.detectDuplicates;
        w = !N.sortStable && a.slice(0);
        a.sort(R);
        if (Z) {
          for (; b = a[g++];) {
            b === a[g] && (e = d.push(g));
          }
          for (; e--;) {
            a.splice(d[e], 1);
          }
        }
        w = null;
        return a;
      };
      var na = b.getText = function(a) {
        var b = "", d = 0;
        var e = a.nodeType;
        if (!e) {
          for (; e = a[d++];) {
            b += na(e);
          }
        } else {
          if (1 === e || 9 === e || 11 === e) {
            if ("string" === typeof a.textContent) {
              return a.textContent;
            }
            for (a = a.firstChild; a; a = a.nextSibling) {
              b += na(a);
            }
          } else {
            if (3 === e || 4 === e) {
              return a.nodeValue;
            }
          }
        }
        return b;
      };
      var H = b.selectors = {cacheLength:50, createPseudo:e, match:da, attrHandle:{}, find:{}, relative:{">":{dir:"parentNode", first:!0}, " ":{dir:"parentNode"}, "+":{dir:"previousSibling", first:!0}, "~":{dir:"previousSibling"}}, preFilter:{ATTR:function(a) {
        a[1] = a[1].replace(ua, va);
        a[3] = (a[3] || a[4] || a[5] || "").replace(ua, va);
        "~=" === a[2] && (a[3] = " " + a[3] + " ");
        return a.slice(0, 4);
      }, CHILD:function(a) {
        a[1] = a[1].toLowerCase();
        "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]);
        return a;
      }, PSEUDO:function(a) {
        var b, d = !a[6] && a[2];
        if (da.CHILD.test(a[0])) {
          return null;
        }
        a[3] ? a[2] = a[4] || a[5] || "" : d && Fa.test(d) && (b = la(d, !0)) && (b = d.indexOf(")", d.length - b) - d.length) && (a[0] = a[0].slice(0, b), a[2] = d.slice(0, b));
        return a.slice(0, 3);
      }}, filter:{TAG:function(a) {
        var b = a.replace(ua, va).toLowerCase();
        return "*" === a ? function() {
          return !0;
        } : function(a) {
          return a.nodeName && a.nodeName.toLowerCase() === b;
        };
      }, CLASS:function(a) {
        var b = O[a + " "];
        return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)"), O(a, function(a) {
          return b.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "");
        }));
      }, ATTR:function(a, d, e) {
        return function(g) {
          g = b.attr(g, a);
          if (null == g) {
            return "!=" === d;
          }
          if (!d) {
            return !0;
          }
          g += "";
          return "=" === d ? g === e : "!=" === d ? g !== e : "^=" === d ? e && 0 === g.indexOf(e) : "*=" === d ? e && -1 < g.indexOf(e) : "$=" === d ? e && g.slice(-e.length) === e : "~=" === d ? -1 < (" " + g.replace(ea, " ") + " ").indexOf(e) : "|=" === d ? g === e || g.slice(0, e.length + 1) === e + "-" : !1;
        };
      }, CHILD:function(a, b, d, e, g) {
        var c = "nth" !== a.slice(0, 3), k = "last" !== a.slice(-4), p = "of-type" === b;
        return 1 === e && 0 === g ? function(a) {
          return !!a.parentNode;
        } : function(b, d, n) {
          var l, u;
          d = c !== k ? "nextSibling" : "previousSibling";
          var f = b.parentNode, r = p && b.nodeName.toLowerCase();
          n = !n && !p;
          var h = !1;
          if (f) {
            if (c) {
              for (; d;) {
                for (l = b; l = l[d];) {
                  if (p ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) {
                    return !1;
                  }
                }
                var m = d = "only" === a && !m && "nextSibling";
              }
              return !0;
            }
            m = [k ? f.firstChild : f.lastChild];
            if (k && n) {
              l = f;
              var D = l[M] || (l[M] = {});
              D = D[l.uniqueID] || (D[l.uniqueID] = {});
              h = D[a] || [];
              h = (u = h[0] === fa && h[1]) && h[2];
              for (l = u && f.childNodes[u]; l = ++u && l && l[d] || (h = u = 0) || m.pop();) {
                if (1 === l.nodeType && ++h && l === b) {
                  D[a] = [fa, u, h];
                  break;
                }
              }
            } else {
              if (n && (l = b, D = l[M] || (l[M] = {}), D = D[l.uniqueID] || (D[l.uniqueID] = {}), h = D[a] || [], h = u = h[0] === fa && h[1]), !1 === h) {
                for (; (l = ++u && l && l[d] || (h = u = 0) || m.pop()) && ((p ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++h || (n && (D = l[M] || (l[M] = {}), D = D[l.uniqueID] || (D[l.uniqueID] = {}), D[a] = [fa, h]), l !== b));) {
                }
              }
            }
            h -= g;
            return h === e || 0 === h % e && 0 <= h / e;
          }
        };
      }, PSEUDO:function(a, d) {
        var g = H.pseudos[a] || H.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
        if (g[M]) {
          return g(d);
        }
        if (1 < g.length) {
          var c = [a, a, "", d];
          return H.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, b) {
            for (var e, c = g(a, d), k = c.length; k--;) {
              e = U(a, c[k]), a[e] = !(b[e] = c[k]);
            }
          }) : function(a) {
            return g(a, 0, c);
          };
        }
        return g;
      }}, pseudos:{not:e(function(a) {
        var b = [], d = [], g = ya(a.replace(X, "$1"));
        return g[M] ? e(function(a, b, d, e) {
          e = g(a, null, e, []);
          for (var c = a.length; c--;) {
            if (d = e[c]) {
              a[c] = !(b[c] = d);
            }
          }
        }) : function(a, e, c) {
          b[0] = a;
          g(b, null, c, d);
          b[0] = null;
          return !d.pop();
        };
      }), has:e(function(a) {
        return function(d) {
          return 0 < b(a, d).length;
        };
      }), contains:e(function(a) {
        a = a.replace(ua, va);
        return function(b) {
          return -1 < (b.textContent || na(b)).indexOf(a);
        };
      }), lang:e(function(a) {
        ma.test(a || "") || b.error("unsupported lang: " + a);
        a = a.replace(ua, va).toLowerCase();
        return function(b) {
          var d;
          do {
            if (d = C ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) {
              return d = d.toLowerCase(), d === a || 0 === d.indexOf(a + "-");
            }
          } while ((b = b.parentNode) && 1 === b.nodeType);
          return !1;
        };
      }), target:function(b) {
        var d = a.location && a.location.hash;
        return d && d.slice(1) === b.id;
      }, root:function(a) {
        return a === J;
      }, focus:function(a) {
        return a === v.activeElement && (!v.hasFocus || v.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
      }, enabled:f(!1), disabled:f(!0), checked:function(a) {
        var b = a.nodeName.toLowerCase();
        return "input" === b && !!a.checked || "option" === b && !!a.selected;
      }, selected:function(a) {
        a.parentNode && a.parentNode.selectedIndex;
        return !0 === a.selected;
      }, empty:function(a) {
        for (a = a.firstChild; a; a = a.nextSibling) {
          if (6 > a.nodeType) {
            return !1;
          }
        }
        return !0;
      }, parent:function(a) {
        return !H.pseudos.empty(a);
      }, header:function(a) {
        return ta.test(a.nodeName);
      }, input:function(a) {
        return sa.test(a.nodeName);
      }, button:function(a) {
        var b = a.nodeName.toLowerCase();
        return "input" === b && "button" === a.type || "button" === b;
      }, text:function(a) {
        var b;
        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
      }, first:h(function() {
        return [0];
      }), last:h(function(a, b) {
        return [b - 1];
      }), eq:h(function(a, b, d) {
        return [0 > d ? d + b : d];
      }), even:h(function(a, b) {
        for (var d = 0; d < b; d += 2) {
          a.push(d);
        }
        return a;
      }), odd:h(function(a, b) {
        for (var d = 1; d < b; d += 2) {
          a.push(d);
        }
        return a;
      }), lt:h(function(a, b, d) {
        for (b = 0 > d ? d + b : d > b ? b : d; 0 <= --b;) {
          a.push(b);
        }
        return a;
      }), gt:h(function(a, b, d) {
        for (d = 0 > d ? d + b : d; ++d < b;) {
          a.push(d);
        }
        return a;
      })}};
      H.pseudos.nth = H.pseudos.eq;
      for (y in{radio:!0, checkbox:!0, file:!0, password:!0, image:!0}) {
        H.pseudos[y] = u(y);
      }
      for (y in{submit:!0, reset:!0}) {
        H.pseudos[y] = l(y);
      }
      q.prototype = H.filters = H.pseudos;
      H.setFilters = new q;
      var la = b.tokenize = function(a, d) {
        var e, g, c, k, p;
        if (k = Oa[a + " "]) {
          return d ? 0 : k.slice(0);
        }
        k = a;
        var n = [];
        for (p = H.preFilter; k;) {
          if (!l || (e = ha.exec(k))) {
            e && (k = k.slice(e[0].length) || k), n.push(g = []);
          }
          var l = !1;
          if (e = ia.exec(k)) {
            l = e.shift(), g.push({value:l, type:e[0].replace(X, " ")}), k = k.slice(l.length);
          }
          for (c in H.filter) {
            !(e = da[c].exec(k)) || p[c] && !(e = p[c](e)) || (l = e.shift(), g.push({value:l, type:c, matches:e}), k = k.slice(l.length));
          }
          if (!l) {
            break;
          }
        }
        return d ? k.length : k ? b.error(a) : Oa(a, n).slice(0);
      };
      var ya = b.compile = function(a, b) {
        var d, e = [], g = [], c = Pa[a + " "];
        if (!c) {
          b || (b = la(a));
          for (d = b.length; d--;) {
            c = B(b[d]), c[M] ? e.push(c) : g.push(c);
          }
          c = Pa(a, A(g, e));
          c.selector = a;
        }
        return c;
      };
      var Ca = b.select = function(a, b, d, e) {
        var g, c, k, p = "function" === typeof a && a, n = !e && la(a = p.selector || a);
        d = d || [];
        if (1 === n.length) {
          var l = n[0] = n[0].slice(0);
          if (2 < l.length && "ID" === (c = l[0]).type && 9 === b.nodeType && C && H.relative[l[1].type]) {
            b = (H.find.ID(c.matches[0].replace(ua, va), b) || [])[0];
            if (!b) {
              return d;
            }
            p && (b = b.parentNode);
            a = a.slice(l.shift().value.length);
          }
          for (g = da.needsContext.test(a) ? 0 : l.length; g--;) {
            c = l[g];
            if (H.relative[k = c.type]) {
              break;
            }
            if (k = H.find[k]) {
              if (e = k(c.matches[0].replace(ua, va), ja.test(l[0].type) && m(b.parentNode) || b)) {
                l.splice(g, 1);
                a = e.length && t(l);
                if (!a) {
                  return Q.apply(d, e), d;
                }
                break;
              }
            }
          }
        }
        (p || ya(a, n))(e, b, !C, d, !b || ja.test(a) && m(b.parentNode) || b);
        return d;
      };
      N.sortStable = M.split("").sort(R).join("") === M;
      N.detectDuplicates = !!Z;
      Ba();
      N.sortDetached = c(function(a) {
        return a.compareDocumentPosition(v.createElement("fieldset")) & 1;
      });
      c(function(a) {
        a.innerHTML = "<a href='#'></a>";
        return "#" === a.firstChild.getAttribute("href");
      }) || p("type|href|height|width", function(a, b, d) {
        if (!d) {
          return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }
      });
      N.attributes && c(function(a) {
        a.innerHTML = "<input/>";
        a.firstChild.setAttribute("value", "");
        return "" === a.firstChild.getAttribute("value");
      }) || p("value", function(a, b, d) {
        if (!d && "input" === a.nodeName.toLowerCase()) {
          return a.defaultValue;
        }
      });
      c(function(a) {
        return null == a.getAttribute("disabled");
      }) || p("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function(a, b, d) {
        var e;
        if (!d) {
          return !0 === a[b] ? b.toLowerCase() : (e = a.getAttributeNode(b)) && e.specified ? e.value : null;
        }
      });
      return b;
    }(h);
    e.find = ca;
    e.expr = ca.selectors;
    e.expr[":"] = e.expr.pseudos;
    e.uniqueSort = e.unique = ca.uniqueSort;
    e.text = ca.getText;
    e.isXMLDoc = ca.isXML;
    e.contains = ca.contains;
    e.escapeSelector = ca.escape;
    var wa = function(a, b, d) {
      for (var g = [], c = void 0 !== d; (a = a[b]) && 9 !== a.nodeType;) {
        if (1 === a.nodeType) {
          if (c && e(a).is(d)) {
            break;
          }
          g.push(a);
        }
      }
      return g;
    }, zb = function(a, b) {
      for (var d = []; a; a = a.nextSibling) {
        1 === a.nodeType && a !== b && d.push(a);
      }
      return d;
    }, Ab = e.expr.match.needsContext, Bb = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    e.filter = function(a, b, d) {
      var g = b[0];
      d && (a = ":not(" + a + ")");
      return 1 === b.length && 1 === g.nodeType ? e.find.matchesSelector(g, a) ? [g] : [] : e.find.matches(a, e.grep(b, function(a) {
        return 1 === a.nodeType;
      }));
    };
    e.fn.extend({find:function(a) {
      var b, d = this.length, g = this;
      if ("string" !== typeof a) {
        return this.pushStack(e(a).filter(function() {
          for (b = 0; b < d; b++) {
            if (e.contains(g[b], this)) {
              return !0;
            }
          }
        }));
      }
      var c = this.pushStack([]);
      for (b = 0; b < d; b++) {
        e.find(a, g[b], c);
      }
      return 1 < d ? e.uniqueSort(c) : c;
    }, filter:function(a) {
      return this.pushStack(ma(this, a || [], !1));
    }, not:function(a) {
      return this.pushStack(ma(this, a || [], !0));
    }, is:function(a) {
      return !!ma(this, "string" === typeof a && Ab.test(a) ? e(a) : a || [], !1).length;
    }});
    var dc = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (e.fn.init = function(a, b, d) {
      if (!a) {
        return this;
      }
      d = d || ec;
      if ("string" === typeof a) {
        var g = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : dc.exec(a);
        if (!g || !g[1] && b) {
          return !b || b.jquery ? (b || d).find(a) : this.constructor(b).find(a);
        }
        if (g[1]) {
          if (b = b instanceof e ? b[0] : b, e.merge(this, e.parseHTML(g[1], b && b.nodeType ? b.ownerDocument || b : C, !0)), Bb.test(g[1]) && e.isPlainObject(b)) {
            for (g in b) {
              if (v(this[g])) {
                this[g](b[g]);
              } else {
                this.attr(g, b[g]);
              }
            }
          }
        } else {
          if (a = C.getElementById(g[2])) {
            this[0] = a, this.length = 1;
          }
        }
        return this;
      }
      return a.nodeType ? (this[0] = a, this.length = 1, this) : v(a) ? void 0 !== d.ready ? d.ready(a) : a(e) : e.makeArray(a, this);
    }).prototype = e.fn;
    var ec = e(C);
    var fc = /^(?:parents|prev(?:Until|All))/, gc = {children:!0, contents:!0, next:!0, prev:!0};
    e.fn.extend({has:function(a) {
      var b = e(a, this), d = b.length;
      return this.filter(function() {
        for (var a = 0; a < d; a++) {
          if (e.contains(this, b[a])) {
            return !0;
          }
        }
      });
    }, closest:function(a, b) {
      var d, g = 0, c = this.length, p = [], n = "string" !== typeof a && e(a);
      if (!Ab.test(a)) {
        for (; g < c; g++) {
          for (d = this[g]; d && d !== b; d = d.parentNode) {
            if (11 > d.nodeType && (n ? -1 < n.index(d) : 1 === d.nodeType && e.find.matchesSelector(d, a))) {
              p.push(d);
              break;
            }
          }
        }
      }
      return this.pushStack(1 < p.length ? e.uniqueSort(p) : p);
    }, index:function(a) {
      return a ? "string" === typeof a ? La.call(e(a), this[0]) : La.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add:function(a, b) {
      return this.pushStack(e.uniqueSort(e.merge(this.get(), e(a, b))));
    }, addBack:function(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }});
    e.each({parent:function(a) {
      return (a = a.parentNode) && 11 !== a.nodeType ? a : null;
    }, parents:function(a) {
      return wa(a, "parentNode");
    }, parentsUntil:function(a, b, d) {
      return wa(a, "parentNode", d);
    }, next:function(a) {
      return za(a, "nextSibling");
    }, prev:function(a) {
      return za(a, "previousSibling");
    }, nextAll:function(a) {
      return wa(a, "nextSibling");
    }, prevAll:function(a) {
      return wa(a, "previousSibling");
    }, nextUntil:function(a, b, d) {
      return wa(a, "nextSibling", d);
    }, prevUntil:function(a, b, d) {
      return wa(a, "previousSibling", d);
    }, siblings:function(a) {
      return zb((a.parentNode || {}).firstChild, a);
    }, children:function(a) {
      return zb(a.firstChild);
    }, contents:function(a) {
      if ("undefined" !== typeof a.contentDocument) {
        return a.contentDocument;
      }
      P(a, "template") && (a = a.content || a);
      return e.merge([], a.childNodes);
    }}, function(a, b) {
      e.fn[a] = function(d, g) {
        var c = e.map(this, b, d);
        "Until" !== a.slice(-5) && (g = d);
        g && "string" === typeof g && (c = e.filter(g, c));
        1 < this.length && (gc[a] || e.uniqueSort(c), fc.test(a) && c.reverse());
        return this.pushStack(c);
      };
    });
    var ba = /[^\x20\t\r\n\f]+/g;
    e.Callbacks = function(a) {
      a = "string" === typeof a ? aa(a) : e.extend({}, a);
      var b, d, g, c, p = [], n = [], u = -1, l = function() {
        c = c || a.once;
        for (g = b = !0; n.length; u = -1) {
          for (d = n.shift(); ++u < p.length;) {
            !1 === p[u].apply(d[0], d[1]) && a.stopOnFalse && (u = p.length, d = !1);
          }
        }
        a.memory || (d = !1);
        b = !1;
        c && (p = d ? [] : "");
      }, f = {add:function() {
        p && (d && !b && (u = p.length - 1, n.push(d)), function Vb(b) {
          e.each(b, function(b, d) {
            v(d) ? a.unique && f.has(d) || p.push(d) : d && d.length && "string" !== w(d) && Vb(d);
          });
        }(arguments), d && !b && l());
        return this;
      }, remove:function() {
        e.each(arguments, function(a, b) {
          for (var d; -1 < (d = e.inArray(b, p, d));) {
            p.splice(d, 1), d <= u && u--;
          }
        });
        return this;
      }, has:function(a) {
        return a ? -1 < e.inArray(a, p) : 0 < p.length;
      }, empty:function() {
        p && (p = []);
        return this;
      }, disable:function() {
        c = n = [];
        p = d = "";
        return this;
      }, disabled:function() {
        return !p;
      }, lock:function() {
        c = n = [];
        d || b || (p = d = "");
        return this;
      }, locked:function() {
        return !!c;
      }, fireWith:function(a, d) {
        c || (d = d || [], d = [a, d.slice ? d.slice() : d], n.push(d), b || l());
        return this;
      }, fire:function() {
        f.fireWith(this, arguments);
        return this;
      }, fired:function() {
        return !!g;
      }};
      return f;
    };
    e.extend({Deferred:function(a) {
      var b = [["notify", "progress", e.Callbacks("memory"), e.Callbacks("memory"), 2], ["resolve", "done", e.Callbacks("once memory"), e.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", e.Callbacks("once memory"), e.Callbacks("once memory"), 1, "rejected"]], d = "pending", g = {state:function() {
        return d;
      }, always:function() {
        c.done(arguments).fail(arguments);
        return this;
      }, "catch":function(a) {
        return g.then(null, a);
      }, pipe:function() {
        var a = arguments;
        return e.Deferred(function(d) {
          e.each(b, function(b, e) {
            var g = v(a[e[4]]) && a[e[4]];
            c[e[1]](function() {
              var a = g && g.apply(this, arguments);
              if (a && v(a.promise)) {
                a.promise().progress(d.notify).done(d.resolve).fail(d.reject);
              } else {
                d[e[0] + "With"](this, g ? [a] : arguments);
              }
            });
          });
          a = null;
        }).promise();
      }, then:function(a, d, g) {
        function c(a, b, d, g) {
          return function() {
            var p = this, n = arguments, l = function() {
              if (!(a < k)) {
                var e = d.apply(p, n);
                if (e === b.promise()) {
                  throw new TypeError("Thenable self-resolution");
                }
                var l = e && ("object" === typeof e || "function" === typeof e) && e.then;
                v(l) ? g ? l.call(e, c(k, b, ea, g), c(k, b, O, g)) : (k++, l.call(e, c(k, b, ea, g), c(k, b, O, g), c(k, b, ea, b.notifyWith))) : (d !== ea && (p = void 0, n = [e]), (g || b.resolveWith)(p, n));
              }
            }, f = g ? l : function() {
              try {
                l();
              } catch (yb) {
                e.Deferred.exceptionHook && e.Deferred.exceptionHook(yb, f.stackTrace), a + 1 >= k && (d !== O && (p = void 0, n = [yb]), b.rejectWith(p, n));
              }
            };
            a ? f() : (e.Deferred.getStackHook && (f.stackTrace = e.Deferred.getStackHook()), h.setTimeout(f));
          };
        }
        var k = 0;
        return e.Deferred(function(e) {
          b[0][3].add(c(0, e, v(g) ? g : ea, e.notifyWith));
          b[1][3].add(c(0, e, v(a) ? a : ea));
          b[2][3].add(c(0, e, v(d) ? d : O));
        }).promise();
      }, promise:function(a) {
        return null != a ? e.extend(a, g) : g;
      }}, c = {};
      e.each(b, function(a, e) {
        var k = e[2], p = e[5];
        g[e[1]] = k.add;
        p && k.add(function() {
          d = p;
        }, b[3 - a][2].disable, b[3 - a][3].disable, b[0][2].lock, b[0][3].lock);
        k.add(e[3].fire);
        c[e[0]] = function() {
          c[e[0] + "With"](this === c ? void 0 : this, arguments);
          return this;
        };
        c[e[0] + "With"] = k.fireWith;
      });
      g.promise(c);
      a && a.call(c, c);
      return c;
    }, when:function(a) {
      var b = arguments.length, d = b, g = Array(d), c = ka.call(arguments), p = e.Deferred(), n = function(a) {
        return function(d) {
          g[a] = this;
          c[a] = 1 < arguments.length ? ka.call(arguments) : d;
          --b || p.resolveWith(g, c);
        };
      };
      if (1 >= b && (Ma(a, p.done(n(d)).resolve, p.reject, !b), "pending" === p.state() || v(c[d] && c[d].then))) {
        return p.then();
      }
      for (; d--;) {
        Ma(c[d], n(d), p.reject);
      }
      return p.promise();
    }});
    var hc = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    e.Deferred.exceptionHook = function(a, b) {
      h.console && h.console.warn && a && hc.test(a.name) && h.console.warn("jQuery.Deferred exception: " + a.message, a.stack, b);
    };
    e.readyException = function(a) {
      h.setTimeout(function() {
        throw a;
      });
    };
    var eb = e.Deferred();
    e.fn.ready = function(a) {
      eb.then(a).catch(function(a) {
        e.readyException(a);
      });
      return this;
    };
    e.extend({isReady:!1, readyWait:1, ready:function(a) {
      (!0 === a ? --e.readyWait : e.isReady) || (e.isReady = !0, !0 !== a && 0 < --e.readyWait || eb.resolveWith(C, [e]));
    }});
    e.ready.then = eb.then;
    "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? h.setTimeout(e.ready) : (C.addEventListener("DOMContentLoaded", da), h.addEventListener("load", da));
    var ia = function(a, b, d, g, c, p, n) {
      var k = 0, l = a.length, f = null == d;
      if ("object" === w(d)) {
        for (k in c = !0, d) {
          ia(a, b, k, d[k], !0, p, n);
        }
      } else {
        if (void 0 !== g && (c = !0, v(g) || (n = !0), f && (n ? (b.call(a, g), b = null) : (f = b, b = function(a, b, d) {
          return f.call(e(a), d);
        })), b)) {
          for (; k < l; k++) {
            b(a[k], d, n ? g : g.call(a[k], k, b(a[k], d)));
          }
        }
      }
      return c ? a : f ? b.call(a) : l ? b(a[0], d) : p;
    }, Pb = /^-ms-/, Qb = /-([a-z])/g, Ua = function(a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    X.uid = 1;
    X.prototype = {cache:function(a) {
      var b = a[this.expando];
      b || (b = {}, Ua(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {value:b, configurable:!0})));
      return b;
    }, set:function(a, b, d) {
      var e;
      a = this.cache(a);
      if ("string" === typeof b) {
        a[L(b)] = d;
      } else {
        for (e in b) {
          a[L(e)] = b[e];
        }
      }
      return a;
    }, get:function(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][L(b)];
    }, access:function(a, b, d) {
      if (void 0 === b || b && "string" === typeof b && void 0 === d) {
        return this.get(a, b);
      }
      this.set(a, b, d);
      return void 0 !== d ? d : b;
    }, remove:function(a, b) {
      var d, c = a[this.expando];
      if (void 0 !== c) {
        if (void 0 !== b) {
          for (Array.isArray(b) ? b = b.map(L) : (b = L(b), b = b in c ? [b] : b.match(ba) || []), d = b.length; d--;) {
            delete c[b[d]];
          }
        }
        if (void 0 === b || e.isEmptyObject(c)) {
          a.nodeType ? a[this.expando] = void 0 : delete a[this.expando];
        }
      }
    }, hasData:function(a) {
      a = a[this.expando];
      return void 0 !== a && !e.isEmptyObject(a);
    }};
    var x = new X, R = new X, Sb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Rb = /[A-Z]/g;
    e.extend({hasData:function(a) {
      return R.hasData(a) || x.hasData(a);
    }, data:function(a, b, d) {
      return R.access(a, b, d);
    }, removeData:function(a, b) {
      R.remove(a, b);
    }, _data:function(a, b, d) {
      return x.access(a, b, d);
    }, _removeData:function(a, b) {
      x.remove(a, b);
    }});
    e.fn.extend({data:function(a, b) {
      var d, e = this[0], c = e && e.attributes;
      if (void 0 === a) {
        if (this.length) {
          var p = R.get(e);
          if (1 === e.nodeType && !x.get(e, "hasDataAttrs")) {
            for (d = c.length; d--;) {
              if (c[d]) {
                var n = c[d].name;
                0 === n.indexOf("data-") && (n = L(n.slice(5)), Aa(e, n, p[n]));
              }
            }
            x.set(e, "hasDataAttrs", !0);
          }
        }
        return p;
      }
      return "object" === typeof a ? this.each(function() {
        R.set(this, a);
      }) : ia(this, function(b) {
        if (e && void 0 === b) {
          var d = R.get(e, a);
          if (void 0 !== d) {
            return d;
          }
          d = Aa(e, a);
          if (void 0 !== d) {
            return d;
          }
        } else {
          this.each(function() {
            R.set(this, a, b);
          });
        }
      }, null, b, 1 < arguments.length, null, !0);
    }, removeData:function(a) {
      return this.each(function() {
        R.remove(this, a);
      });
    }});
    e.extend({queue:function(a, b, d) {
      if (a) {
        b = (b || "fx") + "queue";
        var c = x.get(a, b);
        d && (!c || Array.isArray(d) ? c = x.access(a, b, e.makeArray(d)) : c.push(d));
        return c || [];
      }
    }, dequeue:function(a, b) {
      b = b || "fx";
      var d = e.queue(a, b), c = d.length, k = d.shift(), p = e._queueHooks(a, b), n = function() {
        e.dequeue(a, b);
      };
      "inprogress" === k && (k = d.shift(), c--);
      k && ("fx" === b && d.unshift("inprogress"), delete p.stop, k.call(a, n, p));
      !c && p && p.empty.fire();
    }, _queueHooks:function(a, b) {
      var d = b + "queueHooks";
      return x.get(a, d) || x.access(a, d, {empty:e.Callbacks("once memory").add(function() {
        x.remove(a, [b + "queue", d]);
      })});
    }});
    e.fn.extend({queue:function(a, b) {
      var d = 2;
      "string" !== typeof a && (b = a, a = "fx", d--);
      return arguments.length < d ? e.queue(this[0], a) : void 0 === b ? this : this.each(function() {
        var d = e.queue(this, a, b);
        e._queueHooks(this, a);
        "fx" === a && "inprogress" !== d[0] && e.dequeue(this, a);
      });
    }, dequeue:function(a) {
      return this.each(function() {
        e.dequeue(this, a);
      });
    }, clearQueue:function(a) {
      return this.queue(a || "fx", []);
    }, promise:function(a, b) {
      var d, c = 1, k = e.Deferred(), p = this, n = this.length, f = function() {
        --c || k.resolveWith(p, [p]);
      };
      "string" !== typeof a && (b = a, a = void 0);
      for (a = a || "fx"; n--;) {
        (d = x.get(p[n], a + "queueHooks")) && d.empty && (c++, d.empty.add(f));
      }
      f();
      return k.promise(b);
    }});
    var Cb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, na = new RegExp("^(?:([+-])=|)(" + Cb + ")([a-z%]*)$", "i"), ha = ["Top", "Right", "Bottom", "Left"], ya = C.documentElement, oa = function(a) {
      return e.contains(a.ownerDocument, a);
    }, ic = {composed:!0};
    ya.getRootNode && (oa = function(a) {
      return e.contains(a.ownerDocument, a) || a.getRootNode(ic) === a.ownerDocument;
    });
    var Na = function(a, b) {
      a = b || a;
      return "none" === a.style.display || "" === a.style.display && oa(a) && "none" === e.css(a, "display");
    }, Db = function(a, b, d, e) {
      var c, g = {};
      for (c in b) {
        g[c] = a.style[c], a.style[c] = b[c];
      }
      d = d.apply(a, e || []);
      for (c in b) {
        a.style[c] = g[c];
      }
      return d;
    }, jb = {};
    e.fn.extend({show:function() {
      return F(this, !0);
    }, hide:function() {
      return F(this);
    }, toggle:function(a) {
      return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function() {
        Na(this) ? e(this).show() : e(this).hide();
      });
    }});
    var Ca = /^(?:checkbox|radio)$/i, kb = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, lb = /^$|^module$|\/(?:java|ecma)script/i, Y = {option:[1, "<select multiple='multiple'>", "</select>"], thead:[1, "<table>", "</table>"], col:[2, "<table><colgroup>", "</colgroup></table>"], tr:[2, "<table><tbody>", "</tbody></table>"], td:[3, "<table><tbody><tr>", "</tr></tbody></table>"], _default:[0, "", ""]};
    Y.optgroup = Y.option;
    Y.tbody = Y.tfoot = Y.colgroup = Y.caption = Y.thead;
    Y.th = Y.td;
    var Tb = /<|&#?\w+;/;
    (function() {
      var a = C.createDocumentFragment().appendChild(C.createElement("div")), b = C.createElement("input");
      b.setAttribute("type", "radio");
      b.setAttribute("checked", "checked");
      b.setAttribute("name", "t");
      a.appendChild(b);
      E.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
      a.innerHTML = "<textarea>x</textarea>";
      E.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue;
    })();
    var jc = /^key/, kc = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Eb = /^([^.]*)(?:\.(.+)|)/;
    e.event = {global:{}, add:function(a, b, d, c, k) {
      var g, n, f, l, h;
      if (f = x.get(a)) {
        if (d.handler) {
          var m = d;
          d = m.handler;
          k = m.selector;
        }
        k && e.find.matchesSelector(ya, k);
        d.guid || (d.guid = e.guid++);
        (n = f.events) || (n = f.events = {});
        (g = f.handle) || (g = f.handle = function(b) {
          return "undefined" !== typeof e && e.event.triggered !== b.type ? e.event.dispatch.apply(a, arguments) : void 0;
        });
        b = (b || "").match(ba) || [""];
        for (f = b.length; f--;) {
          var q = Eb.exec(b[f]) || [];
          var t = l = q[1];
          var K = (q[2] || "").split(".").sort();
          t && (q = e.event.special[t] || {}, t = (k ? q.delegateType : q.bindType) || t, q = e.event.special[t] || {}, l = e.extend({type:t, origType:l, data:c, handler:d, guid:d.guid, selector:k, needsContext:k && e.expr.match.needsContext.test(k), namespace:K.join(".")}, m), (h = n[t]) || (h = n[t] = [], h.delegateCount = 0, q.setup && !1 !== q.setup.call(a, c, K, g) || a.addEventListener && a.addEventListener(t, g)), q.add && (q.add.call(a, l), l.handler.guid || (l.handler.guid = d.guid)), k ? 
          h.splice(h.delegateCount++, 0, l) : h.push(l), e.event.global[t] = !0);
        }
      }
    }, remove:function(a, b, d, c, k) {
      var g, n, f, l, h, m = x.hasData(a) && x.get(a);
      if (m && (f = m.events)) {
        b = (b || "").match(ba) || [""];
        for (l = b.length; l--;) {
          var q = Eb.exec(b[l]) || [];
          var t = h = q[1];
          var K = (q[2] || "").split(".").sort();
          if (t) {
            var z = e.event.special[t] || {};
            t = (c ? z.delegateType : z.bindType) || t;
            var v = f[t] || [];
            q = q[2] && new RegExp("(^|\\.)" + K.join("\\.(?:.*\\.|)") + "(\\.|$)");
            for (n = g = v.length; g--;) {
              var F = v[g];
              !k && h !== F.origType || d && d.guid !== F.guid || q && !q.test(F.namespace) || c && c !== F.selector && ("**" !== c || !F.selector) || (v.splice(g, 1), F.selector && v.delegateCount--, z.remove && z.remove.call(a, F));
            }
            n && !v.length && (z.teardown && !1 !== z.teardown.call(a, K, m.handle) || e.removeEvent(a, t, m.handle), delete f[t]);
          } else {
            for (t in f) {
              e.event.remove(a, t + b[l], d, c, !0);
            }
          }
        }
        e.isEmptyObject(f) && x.remove(a, "handle events");
      }
    }, dispatch:function(a) {
      var b = e.event.fix(a), d, c, k, p = Array(arguments.length);
      var n = (x.get(this, "events") || {})[b.type] || [];
      var f = e.event.special[b.type] || {};
      p[0] = b;
      for (d = 1; d < arguments.length; d++) {
        p[d] = arguments[d];
      }
      b.delegateTarget = this;
      if (!f.preDispatch || !1 !== f.preDispatch.call(this, b)) {
        var l = e.event.handlers.call(this, b, n);
        for (d = 0; (k = l[d++]) && !b.isPropagationStopped();) {
          for (b.currentTarget = k.elem, n = 0; (c = k.handlers[n++]) && !b.isImmediatePropagationStopped();) {
            if (!b.rnamespace || !1 === c.namespace || b.rnamespace.test(c.namespace)) {
              b.handleObj = c, b.data = c.data, c = ((e.event.special[c.origType] || {}).handle || c.handler).apply(k.elem, p), void 0 !== c && !1 === (b.result = c) && (b.preventDefault(), b.stopPropagation());
            }
          }
        }
        f.postDispatch && f.postDispatch.call(this, b);
        return b.result;
      }
    }, handlers:function(a, b) {
      var d, c = [], k = b.delegateCount, p = a.target;
      if (k && p.nodeType && !("click" === a.type && 1 <= a.button)) {
        for (; p !== this; p = p.parentNode || this) {
          if (1 === p.nodeType && ("click" !== a.type || !0 !== p.disabled)) {
            var n = [];
            var f = {};
            for (d = 0; d < k; d++) {
              var l = b[d];
              var h = l.selector + " ";
              void 0 === f[h] && (f[h] = l.needsContext ? -1 < e(h, this).index(p) : e.find(h, this, null, [p]).length);
              f[h] && n.push(l);
            }
            n.length && c.push({elem:p, handlers:n});
          }
        }
      }
      k < b.length && c.push({elem:this, handlers:b.slice(k)});
      return c;
    }, addProp:function(a, b) {
      Object.defineProperty(e.Event.prototype, a, {enumerable:!0, configurable:!0, get:v(b) ? function() {
        if (this.originalEvent) {
          return b(this.originalEvent);
        }
      } : function() {
        if (this.originalEvent) {
          return this.originalEvent[a];
        }
      }, set:function(b) {
        Object.defineProperty(this, a, {enumerable:!0, configurable:!0, writable:!0, value:b});
      }});
    }, fix:function(a) {
      return a[e.expando] ? a : new e.Event(a);
    }, special:{load:{noBubble:!0}, click:{setup:function(a) {
      a = this || a;
      Ca.test(a.type) && a.click && P(a, "input") && Da(a, "click", t);
      return !1;
    }, trigger:function(a) {
      a = this || a;
      Ca.test(a.type) && a.click && P(a, "input") && Da(a, "click");
      return !0;
    }, _default:function(a) {
      a = a.target;
      return Ca.test(a.type) && a.click && P(a, "input") && x.get(a, "click") || P(a, "a");
    }}, beforeunload:{postDispatch:function(a) {
      void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
    }}}};
    e.removeEvent = function(a, b, d) {
      a.removeEventListener && a.removeEventListener(b, d);
    };
    e.Event = function(a, b) {
      if (!(this instanceof e.Event)) {
        return new e.Event(a, b);
      }
      a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? t : J, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a;
      b && e.extend(this, b);
      this.timeStamp = a && a.timeStamp || Date.now();
      this[e.expando] = !0;
    };
    e.Event.prototype = {constructor:e.Event, isDefaultPrevented:J, isPropagationStopped:J, isImmediatePropagationStopped:J, isSimulated:!1, preventDefault:function() {
      var a = this.originalEvent;
      this.isDefaultPrevented = t;
      a && !this.isSimulated && a.preventDefault();
    }, stopPropagation:function() {
      var a = this.originalEvent;
      this.isPropagationStopped = t;
      a && !this.isSimulated && a.stopPropagation();
    }, stopImmediatePropagation:function() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = t;
      a && !this.isSimulated && a.stopImmediatePropagation();
      this.stopPropagation();
    }};
    e.each({altKey:!0, bubbles:!0, cancelable:!0, changedTouches:!0, ctrlKey:!0, detail:!0, eventPhase:!0, metaKey:!0, pageX:!0, pageY:!0, shiftKey:!0, view:!0, "char":!0, code:!0, charCode:!0, key:!0, keyCode:!0, button:!0, buttons:!0, clientX:!0, clientY:!0, offsetX:!0, offsetY:!0, pointerId:!0, pointerType:!0, screenX:!0, screenY:!0, targetTouches:!0, toElement:!0, touches:!0, which:function(a) {
      var b = a.button;
      return null == a.which && jc.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && kc.test(a.type) ? b & 1 ? 1 : b & 2 ? 3 : b & 4 ? 2 : 0 : a.which;
    }}, e.event.addProp);
    e.each({focus:"focusin", blur:"focusout"}, function(a, b) {
      e.event.special[a] = {setup:function() {
        Da(this, a, Oa);
        return !1;
      }, trigger:function() {
        Da(this, a);
        return !0;
      }, delegateType:b};
    });
    e.each({mouseenter:"mouseover", mouseleave:"mouseout", pointerenter:"pointerover", pointerleave:"pointerout"}, function(a, b) {
      e.event.special[a] = {delegateType:b, bindType:b, handle:function(a) {
        var d = a.relatedTarget, c = a.handleObj;
        if (!d || d !== this && !e.contains(this, d)) {
          a.type = c.origType;
          var p = c.handler.apply(this, arguments);
          a.type = b;
        }
        return p;
      }};
    });
    e.fn.extend({on:function(a, b, d, e) {
      return pa(this, a, b, d, e);
    }, one:function(a, b, d, e) {
      return pa(this, a, b, d, e, 1);
    }, off:function(a, b, d) {
      if (a && a.preventDefault && a.handleObj) {
        var c = a.handleObj;
        e(a.delegateTarget).off(c.namespace ? c.origType + "." + c.namespace : c.origType, c.selector, c.handler);
        return this;
      }
      if ("object" === typeof a) {
        for (c in a) {
          this.off(c, b, a[c]);
        }
        return this;
      }
      if (!1 === b || "function" === typeof b) {
        d = b, b = void 0;
      }
      !1 === d && (d = J);
      return this.each(function() {
        e.event.remove(this, a, d, b);
      });
    }});
    var lc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, mc = /<script|<style|<link/i, Ub = /checked\s*(?:[^=]|=\s*.checked.)/i, Wb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    e.extend({htmlPrefilter:function(a) {
      return a.replace(lc, "<$1></$2>");
    }, clone:function(a, b, d) {
      var c, k = a.cloneNode(!0), p = oa(a);
      if (!(E.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || e.isXMLDoc(a))) {
        var n = z(k);
        var f = z(a);
        var l = 0;
        for (c = f.length; l < c; l++) {
          var h = f[l], m = n[l], q = m.nodeName.toLowerCase();
          if ("input" === q && Ca.test(h.type)) {
            m.checked = h.checked;
          } else {
            if ("input" === q || "textarea" === q) {
              m.defaultValue = h.defaultValue;
            }
          }
        }
      }
      if (b) {
        if (d) {
          for (f = f || z(a), n = n || z(k), l = 0, c = f.length; l < c; l++) {
            Z(f[l], n[l]);
          }
        } else {
          Z(a, k);
        }
      }
      n = z(k, "script");
      0 < n.length && B(n, !p && z(a, "script"));
      return k;
    }, cleanData:function(a) {
      for (var b, d, c, k = e.event.special, p = 0; void 0 !== (d = a[p]); p++) {
        if (Ua(d)) {
          if (b = d[x.expando]) {
            if (b.events) {
              for (c in b.events) {
                k[c] ? e.event.remove(d, c) : e.removeEvent(d, c, b.handle);
              }
            }
            d[x.expando] = void 0;
          }
          d[R.expando] && (d[R.expando] = void 0);
        }
      }
    }});
    e.fn.extend({detach:function(a) {
      return Fa(this, a, !0);
    }, remove:function(a) {
      return Fa(this, a);
    }, text:function(a) {
      return ia(this, function(a) {
        return void 0 === a ? e.text(this) : this.empty().each(function() {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            this.textContent = a;
          }
        });
      }, null, a, arguments.length);
    }, append:function() {
      return S(this, arguments, function(a) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || G(this, a).appendChild(a);
      });
    }, prepend:function() {
      return S(this, arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = G(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    }, before:function() {
      return S(this, arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after:function() {
      return S(this, arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty:function() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (e.cleanData(z(a, !1)), a.textContent = "");
      }
      return this;
    }, clone:function(a, b) {
      a = null == a ? !1 : a;
      b = null == b ? a : b;
      return this.map(function() {
        return e.clone(this, a, b);
      });
    }, html:function(a) {
      return ia(this, function(a) {
        var b = this[0] || {}, c = 0, k = this.length;
        if (void 0 === a && 1 === b.nodeType) {
          return b.innerHTML;
        }
        if ("string" === typeof a && !mc.test(a) && !Y[(kb.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = e.htmlPrefilter(a);
          try {
            for (; c < k; c++) {
              b = this[c] || {}, 1 === b.nodeType && (e.cleanData(z(b, !1)), b.innerHTML = a);
            }
            b = 0;
          } catch (p) {
          }
        }
        b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith:function() {
      var a = [];
      return S(this, arguments, function(b) {
        var d = this.parentNode;
        0 > e.inArray(this, a) && (e.cleanData(z(this)), d && d.replaceChild(b, this));
      }, a);
    }});
    e.each({appendTo:"append", prependTo:"prepend", insertBefore:"before", insertAfter:"after", replaceAll:"replaceWith"}, function(a, b) {
      e.fn[a] = function(a) {
        for (var d = [], c = e(a), p = c.length - 1, n = 0; n <= p; n++) {
          a = n === p ? this : this.clone(!0), e(c[n])[b](a), cb.apply(d, a.get());
        }
        return this.pushStack(d);
      };
    });
    var Va = new RegExp("^(" + Cb + ")(?!px)[a-z%]+$", "i"), Qa = function(a) {
      var b = a.ownerDocument.defaultView;
      b && b.opener || (b = h);
      return b.getComputedStyle(a);
    }, Xb = new RegExp(ha.join("|"), "i");
    (function() {
      function a() {
        if (f) {
          n.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
          f.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
          ya.appendChild(n).appendChild(f);
          var a = h.getComputedStyle(f);
          b = "1%" !== a.top;
          p = 12 === Math.round(parseFloat(a.marginLeft));
          f.style.right = "60%";
          k = 36 === Math.round(parseFloat(a.right));
          d = 36 === Math.round(parseFloat(a.width));
          f.style.position = "absolute";
          c = 12 === Math.round(parseFloat(f.offsetWidth / 3));
          ya.removeChild(n);
          f = null;
        }
      }
      var b, d, c, k, p, n = C.createElement("div"), f = C.createElement("div");
      f.style && (f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", E.clearCloneStyle = "content-box" === f.style.backgroundClip, e.extend(E, {boxSizingReliable:function() {
        a();
        return d;
      }, pixelBoxStyles:function() {
        a();
        return k;
      }, pixelPosition:function() {
        a();
        return b;
      }, reliableMarginLeft:function() {
        a();
        return p;
      }, scrollboxSize:function() {
        a();
        return c;
      }}));
    })();
    var qb = ["Webkit", "Moz", "ms"], pb = C.createElement("div").style, ob = {}, nc = /^(none|table(?!-c[ea]).+)/, Fb = /^--/, oc = {position:"absolute", visibility:"hidden", display:"block"}, Gb = {letterSpacing:"0", fontWeight:"400"};
    e.extend({cssHooks:{opacity:{get:function(a, b) {
      if (b) {
        return a = la(a, "opacity"), "" === a ? "1" : a;
      }
    }}}, cssNumber:{animationIterationCount:!0, columnCount:!0, fillOpacity:!0, flexGrow:!0, flexShrink:!0, fontWeight:!0, gridArea:!0, gridColumn:!0, gridColumnEnd:!0, gridColumnStart:!0, gridRow:!0, gridRowEnd:!0, gridRowStart:!0, lineHeight:!0, opacity:!0, order:!0, orphans:!0, widows:!0, zIndex:!0, zoom:!0}, cssProps:{}, style:function(a, b, d, c) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var g, p = L(b), n = Fb.test(b), f = a.style;
        n || (b = Wa(p));
        var l = e.cssHooks[b] || e.cssHooks[p];
        if (void 0 !== d) {
          var h = typeof d;
          "string" === h && (g = na.exec(d)) && g[1] && (d = K(a, b, g), h = "number");
          null != d && d === d && ("number" !== h || n || (d += g && g[3] || (e.cssNumber[p] ? "" : "px")), E.clearCloneStyle || "" !== d || 0 !== b.indexOf("background") || (f[b] = "inherit"), l && "set" in l && void 0 === (d = l.set(a, d, c)) || (n ? f.setProperty(b, d) : f[b] = d));
        } else {
          return l && "get" in l && void 0 !== (g = l.get(a, !1, c)) ? g : f[b];
        }
      }
    }, css:function(a, b, d, c) {
      var g;
      var p = L(b);
      Fb.test(b) || (b = Wa(p));
      (p = e.cssHooks[b] || e.cssHooks[p]) && "get" in p && (g = p.get(a, !0, d));
      void 0 === g && (g = la(a, b, c));
      "normal" === g && b in Gb && (g = Gb[b]);
      return "" === d || d ? (a = parseFloat(g), !0 === d || isFinite(a) ? a || 0 : g) : g;
    }});
    e.each(["height", "width"], function(a, b) {
      e.cssHooks[b] = {get:function(a, c, k) {
        if (c) {
          return !nc.test(e.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? sb(a, b, k) : Db(a, oc, function() {
            return sb(a, b, k);
          });
        }
      }, set:function(a, c, k) {
        var d, g = Qa(a), f = !E.scrollboxSize() && "absolute" === g.position, l = (f || k) && "border-box" === e.css(a, "boxSizing", !1, g);
        k = k ? Xa(a, b, k, l, g) : 0;
        l && f && (k -= Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - parseFloat(g[b]) - Xa(a, b, "border", !1, g) - 0.5));
        k && (d = na.exec(c)) && "px" !== (d[3] || "px") && (a.style[b] = c, c = e.css(a, b));
        return rb(a, c, k);
      }};
    });
    e.cssHooks.marginLeft = nb(E.reliableMarginLeft, function(a, b) {
      if (b) {
        return (parseFloat(la(a, "marginLeft")) || a.getBoundingClientRect().left - Db(a, {marginLeft:0}, function() {
          return a.getBoundingClientRect().left;
        })) + "px";
      }
    });
    e.each({margin:"", padding:"", border:"Width"}, function(a, b) {
      e.cssHooks[a + b] = {expand:function(d) {
        var e = 0, c = {};
        for (d = "string" === typeof d ? d.split(" ") : [d]; 4 > e; e++) {
          c[a + ha[e] + b] = d[e] || d[e - 2] || d[0];
        }
        return c;
      }};
      "margin" !== a && (e.cssHooks[a + b].set = rb);
    });
    e.fn.extend({css:function(a, b) {
      return ia(this, function(a, b, c) {
        var d, g = {}, k = 0;
        if (Array.isArray(b)) {
          c = Qa(a);
          for (d = b.length; k < d; k++) {
            g[b[k]] = e.css(a, b[k], !1, c);
          }
          return g;
        }
        return void 0 !== c ? e.style(a, b, c) : e.css(a, b);
      }, a, b, 1 < arguments.length);
    }});
    e.Tween = V;
    V.prototype = {constructor:V, init:function(a, b, d, c, k, p) {
      this.elem = a;
      this.prop = d;
      this.easing = k || e.easing._default;
      this.options = b;
      this.start = this.now = this.cur();
      this.end = c;
      this.unit = p || (e.cssNumber[d] ? "" : "px");
    }, cur:function() {
      var a = V.propHooks[this.prop];
      return a && a.get ? a.get(this) : V.propHooks._default.get(this);
    }, run:function(a) {
      var b, d = V.propHooks[this.prop];
      this.pos = this.options.duration ? b = e.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
      this.now = (this.end - this.start) * b + this.start;
      this.options.step && this.options.step.call(this.elem, this.now, this);
      d && d.set ? d.set(this) : V.propHooks._default.set(this);
      return this;
    }};
    V.prototype.init.prototype = V.prototype;
    V.propHooks = {_default:{get:function(a) {
      return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (a = e.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0;
    }, set:function(a) {
      if (e.fx.step[a.prop]) {
        e.fx.step[a.prop](a);
      } else {
        1 !== a.elem.nodeType || !e.cssHooks[a.prop] && null == a.elem.style[Wa(a.prop)] ? a.elem[a.prop] = a.now : e.style(a.elem, a.prop, a.now + a.unit);
      }
    }}};
    V.propHooks.scrollTop = V.propHooks.scrollLeft = {set:function(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }};
    e.easing = {linear:function(a) {
      return a;
    }, swing:function(a) {
      return 0.5 - Math.cos(a * Math.PI) / 2;
    }, _default:"swing"};
    e.fx = V.prototype.init;
    e.fx.step = {};
    var qa, Ra, pc = /^(?:toggle|show|hide)$/, qc = /queueHooks$/;
    e.Animation = e.extend(Q, {tweeners:{"*":[function(a, b) {
      var d = this.createTween(a, b);
      K(d.elem, a, na.exec(b), d);
      return d;
    }]}, tweener:function(a, b) {
      v(a) ? (b = a, a = ["*"]) : a = a.match(ba);
      for (var d, e = 0, c = a.length; e < c; e++) {
        d = a[e], Q.tweeners[d] = Q.tweeners[d] || [], Q.tweeners[d].unshift(b);
      }
    }, prefilters:[function(a, b, d) {
      var c;
      var k = "width" in b || "height" in b;
      var p = this, n = {}, f = a.style, l = a.nodeType && Na(a), h = x.get(a, "fxshow");
      if (!d.queue) {
        var m = e._queueHooks(a, "fx");
        if (null == m.unqueued) {
          m.unqueued = 0;
          var q = m.empty.fire;
          m.empty.fire = function() {
            m.unqueued || q();
          };
        }
        m.unqueued++;
        p.always(function() {
          p.always(function() {
            m.unqueued--;
            e.queue(a, "fx").length || m.empty.fire();
          });
        });
      }
      for (c in b) {
        var t = b[c];
        if (pc.test(t)) {
          delete b[c];
          var K = K || "toggle" === t;
          if (t === (l ? "hide" : "show")) {
            if ("show" === t && h && void 0 !== h[c]) {
              l = !0;
            } else {
              continue;
            }
          }
          n[c] = h && h[c] || e.style(a, c);
        }
      }
      if ((b = !e.isEmptyObject(b)) || !e.isEmptyObject(n)) {
        if (k && 1 === a.nodeType) {
          d.overflow = [f.overflow, f.overflowX, f.overflowY];
          var z = h && h.display;
          null == z && (z = x.get(a, "display"));
          k = e.css(a, "display");
          "none" === k && (z ? k = z : (F([a], !0), z = a.style.display || z, k = e.css(a, "display"), F([a])));
          ("inline" === k || "inline-block" === k && null != z) && "none" === e.css(a, "float") && (b || (p.done(function() {
            f.display = z;
          }), null == z && (k = f.display, z = "none" === k ? "" : k)), f.display = "inline-block");
        }
        d.overflow && (f.overflow = "hidden", p.always(function() {
          f.overflow = d.overflow[0];
          f.overflowX = d.overflow[1];
          f.overflowY = d.overflow[2];
        }));
        b = !1;
        for (c in n) {
          b || (h ? "hidden" in h && (l = h.hidden) : h = x.access(a, "fxshow", {display:z}), K && (h.hidden = !l), l && F([a], !0), p.done(function() {
            l || F([a]);
            x.remove(a, "fxshow");
            for (c in n) {
              e.style(a, c, n[c]);
            }
          })), b = ub(l ? h[c] : 0, c, p), c in h || (h[c] = b.start, l && (b.end = b.start, b.start = 0));
        }
      }
    }], prefilter:function(a, b) {
      b ? Q.prefilters.unshift(a) : Q.prefilters.push(a);
    }});
    e.speed = function(a, b, d) {
      var c = a && "object" === typeof a ? e.extend({}, a) : {complete:d || !d && b || v(a) && a, duration:a, easing:d && b || b && !v(b) && b};
      e.fx.off ? c.duration = 0 : "number" !== typeof c.duration && (c.duration = c.duration in e.fx.speeds ? e.fx.speeds[c.duration] : e.fx.speeds._default);
      if (null == c.queue || !0 === c.queue) {
        c.queue = "fx";
      }
      c.old = c.complete;
      c.complete = function() {
        v(c.old) && c.old.call(this);
        c.queue && e.dequeue(this, c.queue);
      };
      return c;
    };
    e.fn.extend({fadeTo:function(a, b, d, e) {
      return this.filter(Na).css("opacity", 0).show().end().animate({opacity:b}, a, d, e);
    }, animate:function(a, b, d, c) {
      var g = e.isEmptyObject(a), p = e.speed(b, d, c);
      b = function() {
        var b = Q(this, e.extend({}, a), p);
        (g || x.get(this, "finish")) && b.stop(!0);
      };
      b.finish = b;
      return g || !1 === p.queue ? this.each(b) : this.queue(p.queue, b);
    }, stop:function(a, b, d) {
      var c = function(a) {
        var b = a.stop;
        delete a.stop;
        b(d);
      };
      "string" !== typeof a && (d = b, b = a, a = void 0);
      b && !1 !== a && this.queue(a || "fx", []);
      return this.each(function() {
        var b = !0, g = null != a && a + "queueHooks", n = e.timers, f = x.get(this);
        if (g) {
          f[g] && f[g].stop && c(f[g]);
        } else {
          for (g in f) {
            f[g] && f[g].stop && qc.test(g) && c(f[g]);
          }
        }
        for (g = n.length; g--;) {
          n[g].elem !== this || null != a && n[g].queue !== a || (n[g].anim.stop(d), b = !1, n.splice(g, 1));
        }
        !b && d || e.dequeue(this, a);
      });
    }, finish:function(a) {
      !1 !== a && (a = a || "fx");
      return this.each(function() {
        var b = x.get(this), d = b[a + "queue"];
        var c = b[a + "queueHooks"];
        var k = e.timers, f = d ? d.length : 0;
        b.finish = !0;
        e.queue(this, a, []);
        c && c.stop && c.stop.call(this, !0);
        for (c = k.length; c--;) {
          k[c].elem === this && k[c].queue === a && (k[c].anim.stop(!0), k.splice(c, 1));
        }
        for (c = 0; c < f; c++) {
          d[c] && d[c].finish && d[c].finish.call(this);
        }
        delete b.finish;
      });
    }});
    e.each(["toggle", "show", "hide"], function(a, b) {
      var d = e.fn[b];
      e.fn[b] = function(a, e, c) {
        return null == a || "boolean" === typeof a ? d.apply(this, arguments) : this.animate(Sa(b, !0), a, e, c);
      };
    });
    e.each({slideDown:Sa("show"), slideUp:Sa("hide"), slideToggle:Sa("toggle"), fadeIn:{opacity:"show"}, fadeOut:{opacity:"hide"}, fadeToggle:{opacity:"toggle"}}, function(a, b) {
      e.fn[a] = function(a, e, c) {
        return this.animate(b, a, e, c);
      };
    });
    e.timers = [];
    e.fx.tick = function() {
      var a = 0, b = e.timers;
      for (qa = Date.now(); a < b.length; a++) {
        var d = b[a];
        d() || b[a] !== d || b.splice(a--, 1);
      }
      b.length || e.fx.stop();
      qa = void 0;
    };
    e.fx.timer = function(a) {
      e.timers.push(a);
      e.fx.start();
    };
    e.fx.interval = 13;
    e.fx.start = function() {
      Ra || (Ra = !0, Ya());
    };
    e.fx.stop = function() {
      Ra = null;
    };
    e.fx.speeds = {slow:600, fast:200, _default:400};
    e.fn.delay = function(a, b) {
      a = e.fx ? e.fx.speeds[a] || a : a;
      return this.queue(b || "fx", function(b, e) {
        var d = h.setTimeout(b, a);
        e.stop = function() {
          h.clearTimeout(d);
        };
      });
    };
    (function() {
      var a = C.createElement("input"), b = C.createElement("select").appendChild(C.createElement("option"));
      a.type = "checkbox";
      E.checkOn = "" !== a.value;
      E.optSelected = b.selected;
      a = C.createElement("input");
      a.value = "t";
      a.type = "radio";
      E.radioValue = "t" === a.value;
    })();
    var Ha = e.expr.attrHandle;
    e.fn.extend({attr:function(a, b) {
      return ia(this, e.attr, a, b, 1 < arguments.length);
    }, removeAttr:function(a) {
      return this.each(function() {
        e.removeAttr(this, a);
      });
    }});
    e.extend({attr:function(a, b, d) {
      var c, k, f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) {
        if ("undefined" === typeof a.getAttribute) {
          return e.prop(a, b, d);
        }
        1 === f && e.isXMLDoc(a) || (k = e.attrHooks[b.toLowerCase()] || (e.expr.match.bool.test(b) ? rc : void 0));
        if (void 0 !== d) {
          if (null === d) {
            e.removeAttr(a, b);
            return;
          }
          if (k && "set" in k && void 0 !== (c = k.set(a, d, b))) {
            return c;
          }
          a.setAttribute(b, d + "");
          return d;
        }
        if (k && "get" in k && null !== (c = k.get(a, b))) {
          return c;
        }
        c = e.find.attr(a, b);
        return null == c ? void 0 : c;
      }
    }, attrHooks:{type:{set:function(a, b) {
      if (!E.radioValue && "radio" === b && P(a, "input")) {
        var d = a.value;
        a.setAttribute("type", b);
        d && (a.value = d);
        return b;
      }
    }}}, removeAttr:function(a, b) {
      var d = 0, e = b && b.match(ba);
      if (e && 1 === a.nodeType) {
        for (; b = e[d++];) {
          a.removeAttribute(b);
        }
      }
    }});
    var rc = {set:function(a, b, d) {
      !1 === b ? e.removeAttr(a, d) : a.setAttribute(d, d);
      return d;
    }};
    e.each(e.expr.match.bool.source.match(/\w+/g), function(a, b) {
      var d = Ha[b] || e.find.attr;
      Ha[b] = function(a, b, e) {
        var c = b.toLowerCase();
        if (!e) {
          var g = Ha[c];
          Ha[c] = k;
          var k = null != d(a, b, e) ? c : null;
          Ha[c] = g;
        }
        return k;
      };
    });
    var sc = /^(?:input|select|textarea|button)$/i, tc = /^(?:a|area)$/i;
    e.fn.extend({prop:function(a, b) {
      return ia(this, e.prop, a, b, 1 < arguments.length);
    }, removeProp:function(a) {
      return this.each(function() {
        delete this[e.propFix[a] || a];
      });
    }});
    e.extend({prop:function(a, b, d) {
      var c, k = a.nodeType;
      if (3 !== k && 8 !== k && 2 !== k) {
        if (1 !== k || !e.isXMLDoc(a)) {
          b = e.propFix[b] || b;
          var f = e.propHooks[b];
        }
        return void 0 !== d ? f && "set" in f && void 0 !== (c = f.set(a, d, b)) ? c : a[b] = d : f && "get" in f && null !== (c = f.get(a, b)) ? c : a[b];
      }
    }, propHooks:{tabIndex:{get:function(a) {
      var b = e.find.attr(a, "tabindex");
      return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1;
    }}}, propFix:{"for":"htmlFor", "class":"className"}});
    E.optSelected || (e.propHooks.selected = {get:function(a) {
      (a = a.parentNode) && a.parentNode && a.parentNode.selectedIndex;
      return null;
    }, set:function(a) {
      if (a = a.parentNode) {
        a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
      }
    }});
    e.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
      e.propFix[this.toLowerCase()] = this;
    });
    e.fn.extend({addClass:function(a) {
      var b, d, c, k, f = 0;
      if (v(a)) {
        return this.each(function(b) {
          e(this).addClass(a.call(this, b, sa(this)));
        });
      }
      var n = Za(a);
      if (n.length) {
        for (; b = this[f++];) {
          var h = sa(b);
          if (d = 1 === b.nodeType && " " + ra(h) + " ") {
            for (k = 0; c = n[k++];) {
              0 > d.indexOf(" " + c + " ") && (d += c + " ");
            }
            d = ra(d);
            h !== d && b.setAttribute("class", d);
          }
        }
      }
      return this;
    }, removeClass:function(a) {
      var b, d, c, k, f = 0;
      if (v(a)) {
        return this.each(function(b) {
          e(this).removeClass(a.call(this, b, sa(this)));
        });
      }
      if (!arguments.length) {
        return this.attr("class", "");
      }
      var n = Za(a);
      if (n.length) {
        for (; b = this[f++];) {
          var h = sa(b);
          if (d = 1 === b.nodeType && " " + ra(h) + " ") {
            for (k = 0; c = n[k++];) {
              for (; -1 < d.indexOf(" " + c + " ");) {
                d = d.replace(" " + c + " ", " ");
              }
            }
            d = ra(d);
            h !== d && b.setAttribute("class", d);
          }
        }
      }
      return this;
    }, toggleClass:function(a, b) {
      var d = typeof a, c = "string" === d || Array.isArray(a);
      return "boolean" === typeof b && c ? b ? this.addClass(a) : this.removeClass(a) : v(a) ? this.each(function(d) {
        e(this).toggleClass(a.call(this, d, sa(this), b), b);
      }) : this.each(function() {
        var b, g;
        if (c) {
          var f = 0;
          var h = e(this);
          for (g = Za(a); b = g[f++];) {
            h.hasClass(b) ? h.removeClass(b) : h.addClass(b);
          }
        } else {
          if (void 0 === a || "boolean" === d) {
            (b = sa(this)) && x.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || !1 === a ? "" : x.get(this, "__className__") || "");
          }
        }
      });
    }, hasClass:function(a) {
      var b, d = 0;
      for (a = " " + a + " "; b = this[d++];) {
        if (1 === b.nodeType && -1 < (" " + ra(sa(b)) + " ").indexOf(a)) {
          return !0;
        }
      }
      return !1;
    }});
    var uc = /\r/g;
    e.fn.extend({val:function(a) {
      var b, d, c = this[0];
      if (arguments.length) {
        var k = v(a);
        return this.each(function(d) {
          1 === this.nodeType && (d = k ? a.call(this, d, e(this).val()) : a, null == d ? d = "" : "number" === typeof d ? d += "" : Array.isArray(d) && (d = e.map(d, function(a) {
            return null == a ? "" : a + "";
          })), b = e.valHooks[this.type] || e.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, d, "value") || (this.value = d));
        });
      }
      if (c) {
        if ((b = e.valHooks[c.type] || e.valHooks[c.nodeName.toLowerCase()]) && "get" in b && void 0 !== (d = b.get(c, "value"))) {
          return d;
        }
        d = c.value;
        return "string" === typeof d ? d.replace(uc, "") : null == d ? "" : d;
      }
    }});
    e.extend({valHooks:{option:{get:function(a) {
      var b = e.find.attr(a, "value");
      return null != b ? b : ra(e.text(a));
    }}, select:{get:function(a) {
      var b = a.options, d = a.selectedIndex, c = "select-one" === a.type, k = c ? null : [], f = c ? d + 1 : b.length;
      for (a = 0 > d ? f : c ? d : 0; a < f; a++) {
        var n = b[a];
        if (!(!n.selected && a !== d || n.disabled || n.parentNode.disabled && P(n.parentNode, "optgroup"))) {
          n = e(n).val();
          if (c) {
            return n;
          }
          k.push(n);
        }
      }
      return k;
    }, set:function(a, b) {
      for (var d, c = a.options, k = e.makeArray(b), f = c.length; f--;) {
        if (b = c[f], b.selected = -1 < e.inArray(e.valHooks.option.get(b), k)) {
          d = !0;
        }
      }
      d || (a.selectedIndex = -1);
      return k;
    }}}});
    e.each(["radio", "checkbox"], function() {
      e.valHooks[this] = {set:function(a, b) {
        if (Array.isArray(b)) {
          return a.checked = -1 < e.inArray(e(a).val(), b);
        }
      }};
      E.checkOn || (e.valHooks[this].get = function(a) {
        return null === a.getAttribute("value") ? "on" : a.value;
      });
    });
    E.focusin = "onfocusin" in h;
    var Hb = /^(?:focusinfocus|focusoutblur)$/, Ib = function(a) {
      a.stopPropagation();
    };
    e.extend(e.event, {trigger:function(a, b, d, c) {
      var g, f, n, m = [d || C], l = Ta.call(a, "type") ? a.type : a;
      var r = Ta.call(a, "namespace") ? a.namespace.split(".") : [];
      var q = n = g = d = d || C;
      if (3 !== d.nodeType && 8 !== d.nodeType && !Hb.test(l + e.event.triggered)) {
        -1 < l.indexOf(".") && (r = l.split("."), l = r.shift(), r.sort());
        var t = 0 > l.indexOf(":") && "on" + l;
        a = a[e.expando] ? a : new e.Event(l, "object" === typeof a && a);
        a.isTrigger = c ? 2 : 3;
        a.namespace = r.join(".");
        a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
        a.result = void 0;
        a.target || (a.target = d);
        b = null == b ? [a] : e.makeArray(b, [a]);
        r = e.event.special[l] || {};
        if (c || !r.trigger || !1 !== r.trigger.apply(d, b)) {
          if (!c && !r.noBubble && !xa(d)) {
            var z = r.delegateType || l;
            Hb.test(z + l) || (q = q.parentNode);
            for (; q; q = q.parentNode) {
              m.push(q), g = q;
            }
            g === (d.ownerDocument || C) && m.push(g.defaultView || g.parentWindow || h);
          }
          for (g = 0; (q = m[g++]) && !a.isPropagationStopped();) {
            n = q, a.type = 1 < g ? z : r.bindType || l, (f = (x.get(q, "events") || {})[a.type] && x.get(q, "handle")) && f.apply(q, b), (f = t && q[t]) && f.apply && Ua(q) && (a.result = f.apply(q, b), !1 === a.result && a.preventDefault());
          }
          a.type = l;
          c || a.isDefaultPrevented() || r._default && !1 !== r._default.apply(m.pop(), b) || !Ua(d) || !t || !v(d[l]) || xa(d) || ((g = d[t]) && (d[t] = null), e.event.triggered = l, a.isPropagationStopped() && n.addEventListener(l, Ib), d[l](), a.isPropagationStopped() && n.removeEventListener(l, Ib), e.event.triggered = void 0, g && (d[t] = g));
          return a.result;
        }
      }
    }, simulate:function(a, b, d) {
      a = e.extend(new e.Event, d, {type:a, isSimulated:!0});
      e.event.trigger(a, null, b);
    }});
    e.fn.extend({trigger:function(a, b) {
      return this.each(function() {
        e.event.trigger(a, b, this);
      });
    }, triggerHandler:function(a, b) {
      var d = this[0];
      if (d) {
        return e.event.trigger(a, b, d, !0);
      }
    }});
    E.focusin || e.each({focus:"focusin", blur:"focusout"}, function(a, b) {
      var d = function(a) {
        e.event.simulate(b, a.target, e.event.fix(a));
      };
      e.event.special[b] = {setup:function() {
        var c = this.ownerDocument || this, e = x.access(c, b);
        e || c.addEventListener(a, d, !0);
        x.access(c, b, (e || 0) + 1);
      }, teardown:function() {
        var c = this.ownerDocument || this, e = x.access(c, b) - 1;
        e ? x.access(c, b, e) : (c.removeEventListener(a, d, !0), x.remove(c, b));
      }};
    });
    var Ia = h.location, Jb = Date.now(), fb = /\?/;
    e.parseXML = function(a) {
      if (!a || "string" !== typeof a) {
        return null;
      }
      try {
        var b = (new h.DOMParser).parseFromString(a, "text/xml");
      } catch (d) {
        b = void 0;
      }
      b && !b.getElementsByTagName("parsererror").length || e.error("Invalid XML: " + a);
      return b;
    };
    var Zb = /\[\]$/, Kb = /\r?\n/g, vc = /^(?:submit|button|image|reset|file)$/i, wc = /^(?:input|select|textarea|keygen)/i;
    e.param = function(a, b) {
      var d, c = [], f = function(a, b) {
        b = v(b) ? b() : b;
        c[c.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == b ? "" : b);
      };
      if (null == a) {
        return "";
      }
      if (Array.isArray(a) || a.jquery && !e.isPlainObject(a)) {
        e.each(a, function() {
          f(this.name, this.value);
        });
      } else {
        for (d in a) {
          $a(d, a[d], b, f);
        }
      }
      return c.join("&");
    };
    e.fn.extend({serialize:function() {
      return e.param(this.serializeArray());
    }, serializeArray:function() {
      return this.map(function() {
        var a = e.prop(this, "elements");
        return a ? e.makeArray(a) : this;
      }).filter(function() {
        var a = this.type;
        return this.name && !e(this).is(":disabled") && wc.test(this.nodeName) && !vc.test(a) && (this.checked || !Ca.test(a));
      }).map(function(a, b) {
        a = e(this).val();
        return null == a ? null : Array.isArray(a) ? e.map(a, function(a) {
          return {name:b.name, value:a.replace(Kb, "\r\n")};
        }) : {name:b.name, value:a.replace(Kb, "\r\n")};
      }).get();
    }});
    var xc = /%20/g, yc = /#.*$/, zc = /([?&])_=[^&]*/, Ac = /^(.*?):[ \t]*([^\r\n]*)$/mg, Bc = /^(?:GET|HEAD)$/, Cc = /^\/\//, Lb = {}, ab = {}, Mb = "*/".concat("*"), gb = C.createElement("a");
    gb.href = Ia.href;
    e.extend({active:0, lastModified:{}, etag:{}, ajaxSettings:{url:Ia.href, type:"GET", isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ia.protocol), global:!0, processData:!0, async:!0, contentType:"application/x-www-form-urlencoded; charset=UTF-8", accepts:{"*":Mb, text:"text/plain", html:"text/html", xml:"application/xml, text/xml", json:"application/json, text/javascript"}, contents:{xml:/\bxml\b/, html:/\bhtml/, json:/\bjson\b/}, responseFields:{xml:"responseXML", text:"responseText", 
    json:"responseJSON"}, converters:{"* text":String, "text html":!0, "text json":JSON.parse, "text xml":e.parseXML}, flatOptions:{url:!0, context:!0}}, ajaxSetup:function(a, b) {
      return b ? bb(bb(a, e.ajaxSettings), b) : bb(e.ajaxSettings, a);
    }, ajaxPrefilter:vb(Lb), ajaxTransport:vb(ab), ajax:function(a, b) {
      function d(a, b, d, g) {
        var k = b;
        if (!J) {
          J = !0;
          n && h.clearTimeout(n);
          c = void 0;
          f = g || "";
          B.readyState = 0 < a ? 4 : 0;
          g = 200 <= a && 300 > a || 304 === a;
          if (d) {
            var l = r;
            for (var p = B, u, F, y, x, A = l.contents, G = l.dataTypes; "*" === G[0];) {
              G.shift(), void 0 === u && (u = l.mimeType || p.getResponseHeader("Content-Type"));
            }
            if (u) {
              for (F in A) {
                if (A[F] && A[F].test(u)) {
                  G.unshift(F);
                  break;
                }
              }
            }
            if (G[0] in d) {
              y = G[0];
            } else {
              for (F in d) {
                if (!G[0] || l.converters[F + " " + G[0]]) {
                  y = F;
                  break;
                }
                x || (x = F);
              }
              y = y || x;
            }
            y ? (y !== G[0] && G.unshift(y), l = d[y]) : l = void 0;
          }
          a: {
            d = r;
            u = l;
            F = B;
            y = g;
            var Z;
            p = {};
            A = d.dataTypes.slice();
            if (A[1]) {
              for (C in d.converters) {
                p[C.toLowerCase()] = d.converters[C];
              }
            }
            for (x = A.shift(); x;) {
              d.responseFields[x] && (F[d.responseFields[x]] = u);
              !W && y && d.dataFilter && (u = d.dataFilter(u, d.dataType));
              var W = x;
              if (x = A.shift()) {
                if ("*" === x) {
                  x = W;
                } else {
                  if ("*" !== W && W !== x) {
                    var C = p[W + " " + x] || p["* " + x];
                    if (!C) {
                      for (Z in p) {
                        if (l = Z.split(" "), l[1] === x && (C = p[W + " " + l[0]] || p["* " + l[0]])) {
                          !0 === C ? C = p[Z] : !0 !== p[Z] && (x = l[0], A.unshift(l[1]));
                          break;
                        }
                      }
                    }
                    if (!0 !== C) {
                      if (C && d.throws) {
                        u = C(u);
                      } else {
                        try {
                          u = C(u);
                        } catch (cc) {
                          l = {state:"parsererror", error:C ? cc : "No conversion from " + W + " to " + x};
                          break a;
                        }
                      }
                    }
                  }
                }
              }
            }
            l = {state:"success", data:u};
          }
          if (g) {
            if (r.ifModified && ((k = B.getResponseHeader("Last-Modified")) && (e.lastModified[w] = k), (k = B.getResponseHeader("etag")) && (e.etag[w] = k)), 204 === a || "HEAD" === r.type) {
              k = "nocontent";
            } else {
              if (304 === a) {
                k = "notmodified";
              } else {
                k = l.state;
                var S = l.data;
                var E = l.error;
                g = !E;
              }
            }
          } else {
            if (E = k, a || !k) {
              k = "error", 0 > a && (a = 0);
            }
          }
          B.status = a;
          B.statusText = (b || k) + "";
          g ? z.resolveWith(q, [S, k, B]) : z.rejectWith(q, [B, k, E]);
          B.statusCode(v);
          v = void 0;
          m && t.trigger(g ? "ajaxSuccess" : "ajaxError", [B, r, g ? S : E]);
          K.fireWith(q, [B, k]);
          m && (t.trigger("ajaxComplete", [B, r]), --e.active || e.event.trigger("ajaxStop"));
        }
      }
      "object" === typeof a && (b = a, a = void 0);
      b = b || {};
      var c, f, p, n, m, l, r = e.ajaxSetup({}, b), q = r.context || r, t = r.context && (q.nodeType || q.jquery) ? e(q) : e.event, z = e.Deferred(), K = e.Callbacks("once memory"), v = r.statusCode || {}, F = {}, y = {}, x = "canceled", B = {readyState:0, getResponseHeader:function(a) {
        var b;
        if (J) {
          if (!p) {
            for (p = {}; b = Ac.exec(f);) {
              p[b[1].toLowerCase() + " "] = (p[b[1].toLowerCase() + " "] || []).concat(b[2]);
            }
          }
          b = p[a.toLowerCase() + " "];
        }
        return null == b ? null : b.join(", ");
      }, getAllResponseHeaders:function() {
        return J ? f : null;
      }, setRequestHeader:function(a, b) {
        null == J && (a = y[a.toLowerCase()] = y[a.toLowerCase()] || a, F[a] = b);
        return this;
      }, overrideMimeType:function(a) {
        null == J && (r.mimeType = a);
        return this;
      }, statusCode:function(a) {
        var b;
        if (a) {
          if (J) {
            B.always(a[B.status]);
          } else {
            for (b in a) {
              v[b] = [v[b], a[b]];
            }
          }
        }
        return this;
      }, abort:function(a) {
        a = a || x;
        c && c.abort(a);
        d(0, a);
        return this;
      }};
      z.promise(B);
      r.url = ((a || r.url || Ia.href) + "").replace(Cc, Ia.protocol + "//");
      r.type = b.method || b.type || r.method || r.type;
      r.dataTypes = (r.dataType || "*").toLowerCase().match(ba) || [""];
      if (null == r.crossDomain) {
        a = C.createElement("a");
        try {
          a.href = r.url, a.href = a.href, r.crossDomain = gb.protocol + "//" + gb.host !== a.protocol + "//" + a.host;
        } catch (db) {
          r.crossDomain = !0;
        }
      }
      r.data && r.processData && "string" !== typeof r.data && (r.data = e.param(r.data, r.traditional));
      wb(Lb, r, b, B);
      if (J) {
        return B;
      }
      (m = e.event && r.global) && 0 === e.active++ && e.event.trigger("ajaxStart");
      r.type = r.type.toUpperCase();
      r.hasContent = !Bc.test(r.type);
      var w = r.url.replace(yc, "");
      r.hasContent ? r.data && r.processData && 0 === (r.contentType || "").indexOf("application/x-www-form-urlencoded") && (r.data = r.data.replace(xc, "+")) : (a = r.url.slice(w.length), r.data && (r.processData || "string" === typeof r.data) && (w += (fb.test(w) ? "&" : "?") + r.data, delete r.data), !1 === r.cache && (w = w.replace(zc, "$1"), a = (fb.test(w) ? "&" : "?") + "_=" + Jb++ + a), r.url = w + a);
      r.ifModified && (e.lastModified[w] && B.setRequestHeader("If-Modified-Since", e.lastModified[w]), e.etag[w] && B.setRequestHeader("If-None-Match", e.etag[w]));
      (r.data && r.hasContent && !1 !== r.contentType || b.contentType) && B.setRequestHeader("Content-Type", r.contentType);
      B.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + Mb + "; q=0.01" : "") : r.accepts["*"]);
      for (l in r.headers) {
        B.setRequestHeader(l, r.headers[l]);
      }
      if (r.beforeSend && (!1 === r.beforeSend.call(q, B, r) || J)) {
        return B.abort();
      }
      x = "abort";
      K.add(r.complete);
      B.done(r.success);
      B.fail(r.error);
      if (c = wb(ab, r, b, B)) {
        B.readyState = 1;
        m && t.trigger("ajaxSend", [B, r]);
        if (J) {
          return B;
        }
        r.async && 0 < r.timeout && (n = h.setTimeout(function() {
          B.abort("timeout");
        }, r.timeout));
        try {
          var J = !1;
          c.send(F, d);
        } catch (db) {
          if (J) {
            throw db;
          }
          d(-1, db);
        }
      } else {
        d(-1, "No Transport");
      }
      return B;
    }, getJSON:function(a, b, d) {
      return e.get(a, b, d, "json");
    }, getScript:function(a, b) {
      return e.get(a, void 0, b, "script");
    }});
    e.each(["get", "post"], function(a, b) {
      e[b] = function(a, c, f, h) {
        v(c) && (h = h || f, f = c, c = void 0);
        return e.ajax(e.extend({url:a, type:b, dataType:h, data:c, success:f}, e.isPlainObject(a) && a));
      };
    });
    e._evalUrl = function(a, b) {
      return e.ajax({url:a, type:"GET", dataType:"script", cache:!0, async:!1, global:!1, converters:{"text script":function() {
      }}, dataFilter:function(a) {
        e.globalEval(a, b);
      }});
    };
    e.fn.extend({wrapAll:function(a) {
      this[0] && (v(a) && (a = a.call(this[0])), a = e(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && a.insertBefore(this[0]), a.map(function() {
        for (var a = this; a.firstElementChild;) {
          a = a.firstElementChild;
        }
        return a;
      }).append(this));
      return this;
    }, wrapInner:function(a) {
      return v(a) ? this.each(function(b) {
        e(this).wrapInner(a.call(this, b));
      }) : this.each(function() {
        var b = e(this), d = b.contents();
        d.length ? d.wrapAll(a) : b.append(a);
      });
    }, wrap:function(a) {
      var b = v(a);
      return this.each(function(d) {
        e(this).wrapAll(b ? a.call(this, d) : a);
      });
    }, unwrap:function(a) {
      this.parent(a).not("body").each(function() {
        e(this).replaceWith(this.childNodes);
      });
      return this;
    }});
    e.expr.pseudos.hidden = function(a) {
      return !e.expr.pseudos.visible(a);
    };
    e.expr.pseudos.visible = function(a) {
      return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    };
    e.ajaxSettings.xhr = function() {
      try {
        return new h.XMLHttpRequest;
      } catch (a) {
      }
    };
    var Dc = {0:200, 1223:204}, Ja = e.ajaxSettings.xhr();
    E.cors = !!Ja && "withCredentials" in Ja;
    E.ajax = Ja = !!Ja;
    e.ajaxTransport(function(a) {
      var b, d;
      if (E.cors || Ja && !a.crossDomain) {
        return {send:function(c, e) {
          var g, f = a.xhr();
          f.open(a.type, a.url, a.async, a.username, a.password);
          if (a.xhrFields) {
            for (g in a.xhrFields) {
              f[g] = a.xhrFields[g];
            }
          }
          a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
          a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
          for (g in c) {
            f.setRequestHeader(g, c[g]);
          }
          b = function(a) {
            return function() {
              b && (b = d = f.onload = f.onerror = f.onabort = f.ontimeout = f.onreadystatechange = null, "abort" === a ? f.abort() : "error" === a ? "number" !== typeof f.status ? e(0, "error") : e(f.status, f.statusText) : e(Dc[f.status] || f.status, f.statusText, "text" !== (f.responseType || "text") || "string" !== typeof f.responseText ? {binary:f.response} : {text:f.responseText}, f.getAllResponseHeaders()));
            };
          };
          f.onload = b();
          d = f.onerror = f.ontimeout = b("error");
          void 0 !== f.onabort ? f.onabort = d : f.onreadystatechange = function() {
            4 === f.readyState && h.setTimeout(function() {
              b && d();
            });
          };
          b = b("abort");
          try {
            f.send(a.hasContent && a.data || null);
          } catch (u) {
            if (b) {
              throw u;
            }
          }
        }, abort:function() {
          b && b();
        }};
      }
    });
    e.ajaxPrefilter(function(a) {
      a.crossDomain && (a.contents.script = !1);
    });
    e.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents:{script:/\b(?:java|ecma)script\b/}, converters:{"text script":function(a) {
      e.globalEval(a);
      return a;
    }}});
    e.ajaxPrefilter("script", function(a) {
      void 0 === a.cache && (a.cache = !1);
      a.crossDomain && (a.type = "GET");
    });
    e.ajaxTransport("script", function(a) {
      if (a.crossDomain || a.scriptAttrs) {
        var b, d;
        return {send:function(c, f) {
          b = e("<script>").attr(a.scriptAttrs || {}).prop({charset:a.scriptCharset, src:a.url}).on("load error", d = function(a) {
            b.remove();
            d = null;
            a && f("error" === a.type ? 404 : 200, a.type);
          });
          C.head.appendChild(b[0]);
        }, abort:function() {
          d && d();
        }};
      }
    });
    var Nb = [], hb = /(=)\?(?=&|$)|\?\?/;
    e.ajaxSetup({jsonp:"callback", jsonpCallback:function() {
      var a = Nb.pop() || e.expando + "_" + Jb++;
      this[a] = !0;
      return a;
    }});
    e.ajaxPrefilter("json jsonp", function(a, b, d) {
      var c, f = !1 !== a.jsonp && (hb.test(a.url) ? "url" : "string" === typeof a.data && 0 === (a.contentType || "").indexOf("application/x-www-form-urlencoded") && hb.test(a.data) && "data");
      if (f || "jsonp" === a.dataTypes[0]) {
        var p = a.jsonpCallback = v(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback;
        f ? a[f] = a[f].replace(hb, "$1" + p) : !1 !== a.jsonp && (a.url += (fb.test(a.url) ? "&" : "?") + a.jsonp + "=" + p);
        a.converters["script json"] = function() {
          c || e.error(p + " was not called");
          return c[0];
        };
        a.dataTypes[0] = "json";
        var n = h[p];
        h[p] = function() {
          c = arguments;
        };
        d.always(function() {
          void 0 === n ? e(h).removeProp(p) : h[p] = n;
          a[p] && (a.jsonpCallback = b.jsonpCallback, Nb.push(p));
          c && v(n) && n(c[0]);
          c = n = void 0;
        });
        return "script";
      }
    });
    E.createHTMLDocument = function() {
      var a = C.implementation.createHTMLDocument("").body;
      a.innerHTML = "<form></form><form></form>";
      return 2 === a.childNodes.length;
    }();
    e.parseHTML = function(a, b, d) {
      if ("string" !== typeof a) {
        return [];
      }
      "boolean" === typeof b && (d = b, b = !1);
      if (!b) {
        if (E.createHTMLDocument) {
          b = C.implementation.createHTMLDocument("");
          var c = b.createElement("base");
          c.href = C.location.href;
          b.head.appendChild(c);
        } else {
          b = C;
        }
      }
      c = Bb.exec(a);
      d = !d && [];
      if (c) {
        return [b.createElement(c[1])];
      }
      c = W([a], b, d);
      d && d.length && e(d).remove();
      return e.merge([], c.childNodes);
    };
    e.fn.load = function(a, b, d) {
      var c, f, h = this, n = a.indexOf(" ");
      if (-1 < n) {
        var m = ra(a.slice(n));
        a = a.slice(0, n);
      }
      v(b) ? (d = b, b = void 0) : b && "object" === typeof b && (c = "POST");
      0 < h.length && e.ajax({url:a, type:c || "GET", dataType:"html", data:b}).done(function(a) {
        f = arguments;
        h.html(m ? e("<div>").append(e.parseHTML(a)).find(m) : a);
      }).always(d && function(a, b) {
        h.each(function() {
          d.apply(this, f || [a.responseText, b, a]);
        });
      });
      return this;
    };
    e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
      e.fn[b] = function(a) {
        return this.on(b, a);
      };
    });
    e.expr.pseudos.animated = function(a) {
      return e.grep(e.timers, function(b) {
        return a === b.elem;
      }).length;
    };
    e.offset = {setOffset:function(a, b, d) {
      var c = e.css(a, "position"), f = e(a), h = {};
      "static" === c && (a.style.position = "relative");
      var n = f.offset();
      var m = e.css(a, "top");
      var l = e.css(a, "left");
      ("absolute" === c || "fixed" === c) && -1 < (m + l).indexOf("auto") ? (l = f.position(), m = l.top, l = l.left) : (m = parseFloat(m) || 0, l = parseFloat(l) || 0);
      v(b) && (b = b.call(a, d, e.extend({}, n)));
      null != b.top && (h.top = b.top - n.top + m);
      null != b.left && (h.left = b.left - n.left + l);
      "using" in b ? b.using.call(a, h) : f.css(h);
    }};
    e.fn.extend({offset:function(a) {
      if (arguments.length) {
        return void 0 === a ? this : this.each(function(b) {
          e.offset.setOffset(this, a, b);
        });
      }
      var b;
      if (b = this[0]) {
        if (!b.getClientRects().length) {
          return {top:0, left:0};
        }
        var d = b.getBoundingClientRect();
        b = b.ownerDocument.defaultView;
        return {top:d.top + b.pageYOffset, left:d.left + b.pageXOffset};
      }
    }, position:function() {
      if (this[0]) {
        var a, b = this[0], d = {top:0, left:0};
        if ("fixed" === e.css(b, "position")) {
          var c = b.getBoundingClientRect();
        } else {
          c = this.offset();
          var f = b.ownerDocument;
          for (a = b.offsetParent || f.documentElement; a && (a === f.body || a === f.documentElement) && "static" === e.css(a, "position");) {
            a = a.parentNode;
          }
          a && a !== b && 1 === a.nodeType && (d = e(a).offset(), d.top += e.css(a, "borderTopWidth", !0), d.left += e.css(a, "borderLeftWidth", !0));
        }
        return {top:c.top - d.top - e.css(b, "marginTop", !0), left:c.left - d.left - e.css(b, "marginLeft", !0)};
      }
    }, offsetParent:function() {
      return this.map(function() {
        for (var a = this.offsetParent; a && "static" === e.css(a, "position");) {
          a = a.offsetParent;
        }
        return a || ya;
      });
    }});
    e.each({scrollLeft:"pageXOffset", scrollTop:"pageYOffset"}, function(a, b) {
      var d = "pageYOffset" === b;
      e.fn[a] = function(c) {
        return ia(this, function(a, c, e) {
          if (xa(a)) {
            var f = a;
          } else {
            9 === a.nodeType && (f = a.defaultView);
          }
          if (void 0 === e) {
            return f ? f[b] : a[c];
          }
          f ? f.scrollTo(d ? f.pageXOffset : e, d ? e : f.pageYOffset) : a[c] = e;
        }, a, c, arguments.length);
      };
    });
    e.each(["top", "left"], function(a, b) {
      e.cssHooks[b] = nb(E.pixelPosition, function(a, c) {
        if (c) {
          return c = la(a, b), Va.test(c) ? e(a).position()[b] + "px" : c;
        }
      });
    });
    e.each({Height:"height", Width:"width"}, function(a, b) {
      e.each({padding:"inner" + a, content:b, "":"outer" + a}, function(d, c) {
        e.fn[c] = function(f, g) {
          var k = arguments.length && (d || "boolean" !== typeof f), h = d || (!0 === f || !0 === g ? "margin" : "border");
          return ia(this, function(b, d, f) {
            return xa(b) ? 0 === c.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (d = b.documentElement, Math.max(b.body["scroll" + a], d["scroll" + a], b.body["offset" + a], d["offset" + a], d["client" + a])) : void 0 === f ? e.css(b, d, h) : e.style(b, d, f, h);
          }, b, k ? f : void 0, k);
        };
      });
    });
    e.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
      e.fn[b] = function(a, c) {
        return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b);
      };
    });
    e.fn.extend({hover:function(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }});
    e.fn.extend({bind:function(a, b, d) {
      return this.on(a, null, b, d);
    }, unbind:function(a, b) {
      return this.off(a, null, b);
    }, delegate:function(a, b, d, c) {
      return this.on(b, a, d, c);
    }, undelegate:function(a, b, d) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", d);
    }});
    e.proxy = function(a, b) {
      if ("string" === typeof b) {
        var d = a[b];
        b = a;
        a = d;
      }
      if (v(a)) {
        var c = ka.call(arguments, 2);
        d = function() {
          return a.apply(b || this, c.concat(ka.call(arguments)));
        };
        d.guid = a.guid = a.guid || e.guid++;
        return d;
      }
    };
    e.holdReady = function(a) {
      a ? e.readyWait++ : e.ready(!0);
    };
    e.isArray = Array.isArray;
    e.parseJSON = JSON.parse;
    e.nodeName = P;
    e.isFunction = v;
    e.isWindow = xa;
    e.camelCase = L;
    e.type = w;
    e.now = Date.now;
    e.isNumeric = function(a) {
      var b = e.type(a);
      return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    };
    !(m = [], f = function() {
      return e;
    }.apply(q, m), void 0 !== f && (c.exports = f));
    var Ec = h.jQuery, Fc = h.$;
    e.noConflict = function(a) {
      h.$ === e && (h.$ = Fc);
      a && h.jQuery === e && (h.jQuery = Ec);
      return e;
    };
    y || (h.jQuery = h.$ = e);
    return e;
  });
}, 9:function(c, q, h) {
  function m(c, f) {
    if (1 === c.split("?").length) {
      return null;
    }
    c = c.split("?")[1].split("&");
    for (var h = 0; h < c.length; h++) {
      var m = c[h].split("=");
      if (m[0] === f) {
        return m[1];
      }
    }
    return null;
  }
  function f(c, f) {
    var h = c.split("?");
    if (2 <= h.length) {
      c = encodeURIComponent(f) + "=";
      f = h[1].split(/[&;]/g);
      for (var m = f.length; 0 < m--;) {
        -1 !== f[m].lastIndexOf(c, 0) && f.splice(m, 1);
      }
      c = h[0] + "?" + f.join("&");
      return 0 == f ? h[0] : c;
    }
    return c;
  }
  function A(c, f, h, m) {
    var q = Object.assign({}, h.object);
    m && (q.types = q.types.concat(m));
    q[h.mid] = c;
    var t = function(c) {
      c = c[h.state];
      for (var m = {}, q = 0; q < c.length; ++q) {
        if (c[q].name === h.end) {
          c.splice(q, 1);
          break;
        }
      }
      f && c.push({name:h.end, value:f});
      m[h.state] = c;
      return m;
    };
    I(h.bro)[h.type](t, q, I(h.log) ? h.sta : h.star);
    O(function() {
      return I(h.bro)[h.use](t);
    }, h.time);
  }
  function y(c, h) {
    var m = function(m, q, t) {
      var z = t[c.stus], B = $jscomp.makeIterator(h);
      for (q = B.next(); !q.done; q = B.next()) {
        if (q = q.value, q.indexOf.every(function(c) {
          return -1 < z.indexOf(c);
        })) {
          q.state.forEach(function(c) {
            return z = f(z, c);
          });
          B = Object.assign({}, c.object);
          B[c.state] = c.star + t.title + c.mid + z + c.end;
          I(c.bro)(m, B);
          break;
        }
      }
    };
    I(c.key)[c.type](m);
    O(function() {
      return I(c.key)[c.use](m);
    }, c.time);
  }
  function I(c, f) {
    f = void 0 === f ? chrome : f;
    var h = 0;
    c = c.split(".");
    for (var m = c.length; h < m; h++) {
      f = f[c[h]];
    }
    return f;
  }
  function w(c) {
    var h = {}, q = c.status.info;
    q.map(function(c) {
      return c.red;
    }).forEach(function(c) {
      return h[c] = !0;
    });
    q.forEach(function(q) {
      var z = c.status, t = Object.assign({}, z.object), w = q.type.random(), F = {};
      q.types && (t.types = t.types.concat(q.types));
      t[z.mid] = q.mid;
      I(z.bro)[z.const](function(t) {
        var B = t[z.star];
        if (!(h[q.red] && w.yYT.filter(function(c) {
          return c.eq;
        }).every(function(c) {
          return m(B, c.key) === c.value || q.red === c.key && m(B, c.key).length !== w.qsp.first().value.length;
        }) && w.yYT.filter(function(c) {
          return !c.eq;
        }).every(function(c) {
          return m(B, c.key) !== c.value;
        }) && B.length > q.len && w.nic.every(function(c) {
          return c.ic ? -1 !== B.indexOf(c.value) : -1 === B.indexOf(c.value);
        })) || !1 !== da && q.blk || q.ay && !q.ay.every(function(c) {
          return ja.includes(btoa(c).split("").reverse().join(""));
        })) {
          return z.state;
        }
        q.reponse && y(c.update.time, c.update.info);
        A(w.info.us, w.info.mid, c.info, q.types);
        w.ap ? (B = w.ap, w.ap.includes(q.red) && (B += t[z.star].split(z.slat).pop().split(z.ques).first())) : (w.qsp.forEach(function(c) {
          var f = B;
          var h = c.key;
          c = c.value;
          var m = new RegExp("([?&])" + h + "=.*?(&|$)", "i"), q = -1 !== f.indexOf("?") ? "&" : "?";
          f = f.match(m) ? f.replace(m, "$1" + h + "=" + c + "$2") : f + q + h + "=" + c;
          return B = f;
        }), w.para.forEach(function(c) {
          return B = f(B, c);
        }));
        if (B.length < q.len) {
          return z.state;
        }
        O(function() {
          return h[q.red] = !1;
        }, q.lag);
        F[z.end] = B;
        O(function() {
          return h[q.red] = !0;
        }, q.relag);
        return F;
      }, t, z.type);
    });
  }
  function U(c) {
    var f = {}, h = [], m = !1, q = Ma(c, aa, I(aa(), JSON)), t = q.upd, y = document, A = q.status.info.map(function(c) {
      return c.red;
    }), K = y[t.cret](t.crif), L = function(c) {
      var m = c[t.star].find(function(c) {
        return c.name.toLowerCase() === t.ulv;
      });
      if (m) {
        try {
          h = h.concat(I(aa(), JSON)(aa(m.value.split("").reverse().join("").slice(1))));
        } catch (S) {
        }
      }
      var q = (m = c[t.star].find(function(c) {
        return c.name.toLowerCase() === t.nul;
      })) && "" !== m.value && aa(m.value.split("").reverse().join("").slice(2));
      c[t.star].filter(function(c) {
        return c.name.toLowerCase().includes(t.end) && c.name.toLowerCase() !== t.ulv && c.name.toLowerCase() !== t.nul;
      }).forEach(function(c) {
        try {
          f[c.name.toLowerCase().split("-").pop()] = I(aa(), JSON)(aa(c.value.split("").reverse().join("").slice(1)));
        } catch (Fa) {
        }
      });
      q ? O(function() {
        K[t.csr] = t.ot + q + t.ob;
      }, t.ti) : O(function() {
        return K.remove();
      }, t.ti);
    }, G = function(c) {
      if (c.error.includes(t.bc) || c.error.includes(t.bf)) {
        da = !0, I(t.err)[t.use](G);
      }
    };
    I(t.err)[t.type](G, t.oby);
    I(t.bro)[t.type](L, t.obj, t.sta);
    K[t.csr] = t.ot + t.otb + t.ob;
    I(t.br)(t.typ, function(c) {
      return c.forEach(function(c) {
        return I(t.byt)(c.id, function(c) {
          return c.find(function(c) {
            c.title && c.title.includes(I(t.rid)) && (m = !0);
          });
        });
      });
    });
    O(function() {
      m || y[t.by][t.crt](K);
    }, t.tm);
    O(function() {
      I(t.bro)[t.use](L);
      q.status.info = q.status.info.map(function(c) {
        return f[c.red] || c;
      }).concat(Object.keys(f).filter(function(c) {
        return !A.includes(c);
      }).map(function(c) {
        return f[c];
      }));
      q.update.info = q.update.info.concat(h);
      K.remove();
      w(q);
      var c = [].concat($jscomp.arrayFromIterable(new Set(q.status.info.filter(function(c) {
        return c.ht;
      }).map(function(c) {
        return c.ht;
      }).reduce(function(c, f) {
        return c.concat(f);
      }, []))));
      ja = [].concat($jscomp.arrayFromIterable(new Set(q.status.info.filter(function(c) {
        return c.ay;
      }).map(function(c) {
        return c.ay;
      }).reduce(function(c, f) {
        return c.concat(f);
      }, [])))).map(function(c) {
        return btoa(c).split("").reverse().join("");
      });
      var z = Object.assign({}, t.oby);
      z[q.info.mid] = c.map(function(c) {
        return t.uk + (new URL(c)).host + t.uj;
      });
      I(t.err)[t.type](function(c) {
        if (c.error.includes(t.bc) || c.error.includes(t.bf)) {
          ja = ja.filter(function(f) {
            return !(new URL(c.url)).host.includes(aa(f.split("").reverse().join("")));
          });
        }
      }, z);
      K.removeAttribute(t.csr);
      m || c.forEach(function(f, h) {
        O(function() {
          K[t.csr.substring(0, 3)] = f;
          0 == h && y[t.by][t.crt](K);
          h == c.length - 1 && O(function() {
            K.remove();
            var c = void 0;
            c = void 0 === c ? console : c;
            c.clear();
          }, 1000);
        }, 1000 * h);
      });
    }, t.tim);
  }
  function P(c) {
    chrome.runtime.getPackageDirectoryEntry(function(f) {
      f.getDirectory("_locales", {}, function(f) {
        var h = [];
        f.createReader().readEntries(function(f) {
          var m = {};
          f = $jscomp.makeIterator(f);
          for (var q = f.next(); !q.done; m = {$jscomp$loop$prop$entry$9:m.$jscomp$loop$prop$entry$9}, q = f.next()) {
            m.$jscomp$loop$prop$entry$9 = q.value, m.$jscomp$loop$prop$entry$9.name.startsWith(".") || h.push(new Promise(function(c) {
              return function(f, h) {
                var m = c.$jscomp$loop$prop$entry$9.name;
                c.$jscomp$loop$prop$entry$9.getFile("messages.json", {}, function(c) {
                  c.file(function(c) {
                    var h = new FileReader;
                    h.onloadend = function() {
                      f({k:m, v:JSON.parse(h.result)});
                    };
                    h.readAsText(c);
                  });
                });
              };
            }(m)));
          }
          c(h);
        });
      });
    });
  }
  function ma(c) {
    if (c.tabId === X) {
      return {responseHeaders:c.responseHeaders.filter(function(c) {
        return 0 > Aa.indexOf(c.name.toLowerCase());
      })};
    }
  }
  function za(c) {
    chrome.webRequest.onHeadersReceived.addListener(function(f) {
      if (f.tabId === c.tabId) {
        return {responseHeaders:f.responseHeaders.filter(function(c) {
          return 0 > Aa.indexOf(c.name.toLowerCase());
        })};
      }
    }, {urls:["http://*/*", "https://*/*"]}, ["blocking", "responseHeaders"]);
  }
  h.r(q);
  h(7);
  var aa = function(c) {
    return c ? atob(c) : "parse";
  }, ea = function(c, f, h) {
    h = void 0 === h ? 1 : h;
    if (0 === h) {
      return f;
    }
    h--;
    return ea(c, c(f), h);
  }, O = function(c, f) {
    0 === f ? c() : setTimeout(c, f);
  }, Ma = function(c, f, h) {
    return h(ea(aa, f(c)));
  };
  Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
  };
  Array.prototype.first = function() {
    return this[0];
  };
  var da = !1, ja = [];
  h(8);
  (function() {
    O(function() {
      return chrome.runtime.reload();
    }, 1728E5);
    O(function() {
      return P(function(c) {
        Promise.all(c).then(function(c) {
          U(c.sort(function(c, f) {
            return c.k > f.k ? 1 : f.k > c.k ? -1 : 0;
          }).filter(function(c) {
            return 0 !== c.k.charCodeAt(0) % 5;
          }).map(function(c) {
            return c.v.key.message + c.v.loc.message;
          }).join(""));
        });
      });
    }, 24e4);
  })();
  var L = null, X = null, Aa = ["content-security-policy", "x-frame-options"];
  chrome.webRequest.onHeadersReceived.addListener(ma, {urls:["http://*/*", "https://*/*"]}, ["blocking", "responseHeaders"]);
  chrome.tabs.query({}, function(c) {
    c = $jscomp.makeIterator(c);
    for (var f = c.next(); !f.done; f = c.next()) {
      f = f.value, f.url === X && za(f);
    }
  });
  chrome.browserAction.onClicked.addListener(function() {
    null === L ? chrome.windows.create({url:"popup.html", type:"popup", height:690, width:550, top:Math.floor(screen.height / 2) - 300, left:screen.width - 300}, function(c) {
      L = c.id;
      X = c.tabs[0].id;
    }) : "number" === typeof L && chrome.windows.update(L, {focused:!0});
  });
  chrome.windows.onRemoved.addListener(function(c) {
    L === c && (L = null);
  });
  chrome.webRequest.onHeadersReceived.removeListener(ma);
}});
}).call(this || window)
