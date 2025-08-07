"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2573],
  {
    89779: function (e, t, r) {
      r.d(t, {
        default: function () {
          return s.a;
        },
      });
      var n = r(26753),
        s = r.n(n);
    },
    39777: function (e, t, r) {
      var n = r(42611);
      r.o(n, "usePathname") &&
        r.d(t, {
          usePathname: function () {
            return n.usePathname;
          },
        }),
        r.o(n, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        r.o(n, "useSearchParams") &&
          r.d(t, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          }),
        r.o(n, "useServerInsertedHTML") &&
          r.d(t, {
            useServerInsertedHTML: function () {
              return n.useServerInsertedHTML;
            },
          });
    },
    26753: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(62635);
      r(20209), r(83112);
      let s = n._(r(38921));
      function o(e, t) {
        var r;
        let n = {
          loading: (e) => {
            let { error: t, isLoading: r, pastDelay: n } = e;
            return null;
          },
        };
        "function" == typeof e && (n.loader = e);
        let o = { ...n, ...t };
        return (0, s.default)({
          ...o,
          modules: null == (r = o.loadableGenerated) ? void 0 : r.modules,
        });
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    25451: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(71008);
      function s(e) {
        let { reason: t, children: r } = e;
        if ("undefined" == typeof window) throw new n.BailoutToCSRError(t);
        return r;
      }
    },
    38921: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return c;
          },
        });
      let n = r(20209),
        s = r(83112),
        o = r(25451),
        i = r(98925);
      function a(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let u = {
          loader: () => Promise.resolve(a(() => null)),
          loading: null,
          ssr: !0,
        },
        c = function (e) {
          let t = { ...u, ...e },
            r = (0, s.lazy)(() => t.loader().then(a)),
            c = t.loading;
          function l(e) {
            let a = c
                ? (0, n.jsx)(c, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              u = t.ssr
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      "undefined" == typeof window
                        ? (0, n.jsx)(i.PreloadCss, { moduleIds: t.modules })
                        : null,
                      (0, n.jsx)(r, { ...e }),
                    ],
                  })
                : (0, n.jsx)(o.BailoutToCSR, {
                    reason: "next/dynamic",
                    children: (0, n.jsx)(r, { ...e }),
                  });
            return (0, n.jsx)(s.Suspense, { fallback: a, children: u });
          }
          return (l.displayName = "LoadableComponent"), l;
        };
    },
    98925: function (e, t, r) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(20209),
        s = r(86194);
      function o(e) {
        let { moduleIds: t } = e;
        if ("undefined" != typeof window) return null;
        let r = (0, s.getExpectedRequestStore)("next/dynamic css"),
          o = [];
        if (r.reactLoadableManifest && t) {
          let e = r.reactLoadableManifest;
          for (let r of t) {
            if (!e[r]) continue;
            let t = e[r].files.filter((e) => e.endsWith(".css"));
            o.push(...t);
          }
        }
        return 0 === o.length
          ? null
          : (0, n.jsx)(n.Fragment, {
              children: o.map((e) =>
                (0, n.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: r.assetPrefix + "/_next/" + encodeURI(e),
                    as: "style",
                  },
                  e
                )
              ),
            });
      }
    },
    62166: function (e, t, r) {
      r.d(t, {
        y: function () {
          return l;
        },
      });
      var n = r(9083),
        s = r(73016),
        o = r(57093),
        i = r(67297),
        a = r(27374),
        u = r(61716),
        c = r(55669),
        l = (function () {
          function e(e) {
            e && (this._subscribe = e);
          }
          return (
            (e.prototype.lift = function (t) {
              var r = new e();
              return (r.source = this), (r.operator = t), r;
            }),
            (e.prototype.subscribe = function (e, t, r) {
              var o,
                i = this,
                a =
                  ((o = e) && o instanceof n.Lv) ||
                  (o &&
                    (0, u.m)(o.next) &&
                    (0, u.m)(o.error) &&
                    (0, u.m)(o.complete) &&
                    (0, s.Nn)(o))
                    ? e
                    : new n.Hp(e, t, r);
              return (
                (0, c.x)(function () {
                  var e = i.operator,
                    t = i.source;
                  a.add(
                    e ? e.call(a, t) : t ? i._subscribe(a) : i._trySubscribe(a)
                  );
                }),
                a
              );
            }),
            (e.prototype._trySubscribe = function (e) {
              try {
                return this._subscribe(e);
              } catch (t) {
                e.error(t);
              }
            }),
            (e.prototype.forEach = function (e, t) {
              var r = this;
              return new (t = d(t))(function (t, s) {
                var o = new n.Hp({
                  next: function (t) {
                    try {
                      e(t);
                    } catch (e) {
                      s(e), o.unsubscribe();
                    }
                  },
                  error: s,
                  complete: t,
                });
                r.subscribe(o);
              });
            }),
            (e.prototype._subscribe = function (e) {
              var t;
              return null === (t = this.source) || void 0 === t
                ? void 0
                : t.subscribe(e);
            }),
            (e.prototype[o.L] = function () {
              return this;
            }),
            (e.prototype.pipe = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return (0, i.U)(e)(this);
            }),
            (e.prototype.toPromise = function (e) {
              var t = this;
              return new (e = d(e))(function (e, r) {
                var n;
                t.subscribe(
                  function (e) {
                    return (n = e);
                  },
                  function (e) {
                    return r(e);
                  },
                  function () {
                    return e(n);
                  }
                );
              });
            }),
            (e.create = function (t) {
              return new e(t);
            }),
            e
          );
        })();
      function d(e) {
        var t;
        return null !== (t = null != e ? e : a.v.Promise) && void 0 !== t
          ? t
          : Promise;
      }
    },
    51436: function (e, t, r) {
      r.d(t, {
        t: function () {
          return i;
        },
      });
      var n = r(5594),
        s = r(82729),
        o = r(17858),
        i = (function (e) {
          function t(t, r, n) {
            void 0 === t && (t = 1 / 0),
              void 0 === r && (r = 1 / 0),
              void 0 === n && (n = o.l);
            var s = e.call(this) || this;
            return (
              (s._bufferSize = t),
              (s._windowTime = r),
              (s._timestampProvider = n),
              (s._buffer = []),
              (s._infiniteTimeWindow = !0),
              (s._infiniteTimeWindow = r === 1 / 0),
              (s._bufferSize = Math.max(1, t)),
              (s._windowTime = Math.max(1, r)),
              s
            );
          }
          return (
            (0, n.ZT)(t, e),
            (t.prototype.next = function (t) {
              var r = this.isStopped,
                n = this._buffer,
                s = this._infiniteTimeWindow,
                o = this._timestampProvider,
                i = this._windowTime;
              !r && (n.push(t), s || n.push(o.now() + i)),
                this._trimBuffer(),
                e.prototype.next.call(this, t);
            }),
            (t.prototype._subscribe = function (e) {
              this._throwIfClosed(), this._trimBuffer();
              for (
                var t = this._innerSubscribe(e),
                  r = this._infiniteTimeWindow,
                  n = this._buffer.slice(),
                  s = 0;
                s < n.length && !e.closed;
                s += r ? 1 : 2
              )
                e.next(n[s]);
              return this._checkFinalizedStatuses(e), t;
            }),
            (t.prototype._trimBuffer = function () {
              var e = this._bufferSize,
                t = this._timestampProvider,
                r = this._buffer,
                n = this._infiniteTimeWindow,
                s = (n ? 1 : 2) * e;
              if (
                (e < 1 / 0 && s < r.length && r.splice(0, r.length - s), !n)
              ) {
                for (
                  var o = t.now(), i = 0, a = 1;
                  a < r.length && r[a] <= o;
                  a += 2
                )
                  i = a;
                i && r.splice(0, i + 1);
              }
            }),
            t
          );
        })(s.x);
    },
    82729: function (e, t, r) {
      r.d(t, {
        x: function () {
          return c;
        },
      });
      var n = r(5594),
        s = r(62166),
        o = r(73016),
        i = (0, r(34448).d)(function (e) {
          return function () {
            e(this),
              (this.name = "ObjectUnsubscribedError"),
              (this.message = "object unsubscribed");
          };
        }),
        a = r(97816),
        u = r(55669),
        c = (function (e) {
          function t() {
            var t = e.call(this) || this;
            return (
              (t.closed = !1),
              (t.currentObservers = null),
              (t.observers = []),
              (t.isStopped = !1),
              (t.hasError = !1),
              (t.thrownError = null),
              t
            );
          }
          return (
            (0, n.ZT)(t, e),
            (t.prototype.lift = function (e) {
              var t = new l(this, this);
              return (t.operator = e), t;
            }),
            (t.prototype._throwIfClosed = function () {
              if (this.closed) throw new i();
            }),
            (t.prototype.next = function (e) {
              var t = this;
              (0, u.x)(function () {
                var r, s;
                if ((t._throwIfClosed(), !t.isStopped)) {
                  t.currentObservers ||
                    (t.currentObservers = Array.from(t.observers));
                  try {
                    for (
                      var o = (0, n.XA)(t.currentObservers), i = o.next();
                      !i.done;
                      i = o.next()
                    )
                      i.value.next(e);
                  } catch (e) {
                    r = { error: e };
                  } finally {
                    try {
                      i && !i.done && (s = o.return) && s.call(o);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                }
              });
            }),
            (t.prototype.error = function (e) {
              var t = this;
              (0, u.x)(function () {
                if ((t._throwIfClosed(), !t.isStopped)) {
                  (t.hasError = t.isStopped = !0), (t.thrownError = e);
                  for (var r = t.observers; r.length; ) r.shift().error(e);
                }
              });
            }),
            (t.prototype.complete = function () {
              var e = this;
              (0, u.x)(function () {
                if ((e._throwIfClosed(), !e.isStopped)) {
                  e.isStopped = !0;
                  for (var t = e.observers; t.length; ) t.shift().complete();
                }
              });
            }),
            (t.prototype.unsubscribe = function () {
              (this.isStopped = this.closed = !0),
                (this.observers = this.currentObservers = null);
            }),
            Object.defineProperty(t.prototype, "observed", {
              get: function () {
                var e;
                return (
                  (null === (e = this.observers) || void 0 === e
                    ? void 0
                    : e.length) > 0
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype._trySubscribe = function (t) {
              return (
                this._throwIfClosed(), e.prototype._trySubscribe.call(this, t)
              );
            }),
            (t.prototype._subscribe = function (e) {
              return (
                this._throwIfClosed(),
                this._checkFinalizedStatuses(e),
                this._innerSubscribe(e)
              );
            }),
            (t.prototype._innerSubscribe = function (e) {
              var t = this,
                r = this.hasError,
                n = this.isStopped,
                s = this.observers;
              return r || n
                ? o.Lc
                : ((this.currentObservers = null),
                  s.push(e),
                  new o.w0(function () {
                    (t.currentObservers = null), (0, a.P)(s, e);
                  }));
            }),
            (t.prototype._checkFinalizedStatuses = function (e) {
              var t = this.hasError,
                r = this.thrownError,
                n = this.isStopped;
              t ? e.error(r) : n && e.complete();
            }),
            (t.prototype.asObservable = function () {
              var e = new s.y();
              return (e.source = this), e;
            }),
            (t.create = function (e, t) {
              return new l(e, t);
            }),
            t
          );
        })(s.y),
        l = (function (e) {
          function t(t, r) {
            var n = e.call(this) || this;
            return (n.destination = t), (n.source = r), n;
          }
          return (
            (0, n.ZT)(t, e),
            (t.prototype.next = function (e) {
              var t, r;
              null ===
                (r =
                  null === (t = this.destination) || void 0 === t
                    ? void 0
                    : t.next) ||
                void 0 === r ||
                r.call(t, e);
            }),
            (t.prototype.error = function (e) {
              var t, r;
              null ===
                (r =
                  null === (t = this.destination) || void 0 === t
                    ? void 0
                    : t.error) ||
                void 0 === r ||
                r.call(t, e);
            }),
            (t.prototype.complete = function () {
              var e, t;
              null ===
                (t =
                  null === (e = this.destination) || void 0 === e
                    ? void 0
                    : e.complete) ||
                void 0 === t ||
                t.call(e);
            }),
            (t.prototype._subscribe = function (e) {
              var t, r;
              return null !==
                (r =
                  null === (t = this.source) || void 0 === t
                    ? void 0
                    : t.subscribe(e)) && void 0 !== r
                ? r
                : o.Lc;
            }),
            t
          );
        })(c);
    },
    9083: function (e, t, r) {
      r.d(t, {
        Hp: function () {
          return m;
        },
        Lv: function () {
          return h;
        },
      });
      var n = r(5594),
        s = r(61716),
        o = r(73016),
        i = r(27374),
        a = r(35990),
        u = r(6394),
        c = l("C", void 0, void 0);
      function l(e, t, r) {
        return { kind: e, value: t, error: r };
      }
      var d = r(89544),
        f = r(55669),
        h = (function (e) {
          function t(t) {
            var r = e.call(this) || this;
            return (
              (r.isStopped = !1),
              t
                ? ((r.destination = t), (0, o.Nn)(t) && t.add(r))
                : (r.destination = w),
              r
            );
          }
          return (
            (0, n.ZT)(t, e),
            (t.create = function (e, t, r) {
              return new m(e, t, r);
            }),
            (t.prototype.next = function (e) {
              this.isStopped ? b(l("N", e, void 0), this) : this._next(e);
            }),
            (t.prototype.error = function (e) {
              this.isStopped
                ? b(l("E", void 0, e), this)
                : ((this.isStopped = !0), this._error(e));
            }),
            (t.prototype.complete = function () {
              this.isStopped
                ? b(c, this)
                : ((this.isStopped = !0), this._complete());
            }),
            (t.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0),
                e.prototype.unsubscribe.call(this),
                (this.destination = null));
            }),
            (t.prototype._next = function (e) {
              this.destination.next(e);
            }),
            (t.prototype._error = function (e) {
              try {
                this.destination.error(e);
              } finally {
                this.unsubscribe();
              }
            }),
            (t.prototype._complete = function () {
              try {
                this.destination.complete();
              } finally {
                this.unsubscribe();
              }
            }),
            t
          );
        })(o.w0),
        p = Function.prototype.bind;
      function y(e, t) {
        return p.call(e, t);
      }
      var v = (function () {
          function e(e) {
            this.partialObserver = e;
          }
          return (
            (e.prototype.next = function (e) {
              var t = this.partialObserver;
              if (t.next)
                try {
                  t.next(e);
                } catch (e) {
                  g(e);
                }
            }),
            (e.prototype.error = function (e) {
              var t = this.partialObserver;
              if (t.error)
                try {
                  t.error(e);
                } catch (e) {
                  g(e);
                }
              else g(e);
            }),
            (e.prototype.complete = function () {
              var e = this.partialObserver;
              if (e.complete)
                try {
                  e.complete();
                } catch (e) {
                  g(e);
                }
            }),
            e
          );
        })(),
        m = (function (e) {
          function t(t, r, n) {
            var o,
              a,
              u = e.call(this) || this;
            return (
              (0, s.m)(t) || !t
                ? (o = {
                    next: null != t ? t : void 0,
                    error: null != r ? r : void 0,
                    complete: null != n ? n : void 0,
                  })
                : u && i.v.useDeprecatedNextContext
                ? (((a = Object.create(t)).unsubscribe = function () {
                    return u.unsubscribe();
                  }),
                  (o = {
                    next: t.next && y(t.next, a),
                    error: t.error && y(t.error, a),
                    complete: t.complete && y(t.complete, a),
                  }))
                : (o = t),
              (u.destination = new v(o)),
              u
            );
          }
          return (0, n.ZT)(t, e), t;
        })(h);
      function g(e) {
        i.v.useDeprecatedSynchronousErrorHandling ? (0, f.O)(e) : (0, a.h)(e);
      }
      function b(e, t) {
        var r = i.v.onStoppedNotification;
        r &&
          d.z.setTimeout(function () {
            return r(e, t);
          });
      }
      var w = {
        closed: !0,
        next: u.Z,
        error: function (e) {
          throw e;
        },
        complete: u.Z,
      };
    },
    73016: function (e, t, r) {
      r.d(t, {
        Lc: function () {
          return u;
        },
        w0: function () {
          return a;
        },
        Nn: function () {
          return c;
        },
      });
      var n = r(5594),
        s = r(61716),
        o = (0, r(34448).d)(function (e) {
          return function (t) {
            e(this),
              (this.message = t
                ? t.length +
                  " errors occurred during unsubscription:\n" +
                  t
                    .map(function (e, t) {
                      return t + 1 + ") " + e.toString();
                    })
                    .join("\n  ")
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = t);
          };
        }),
        i = r(97816),
        a = (function () {
          var e;
          function t(e) {
            (this.initialTeardown = e),
              (this.closed = !1),
              (this._parentage = null),
              (this._finalizers = null);
          }
          return (
            (t.prototype.unsubscribe = function () {
              if (!this.closed) {
                this.closed = !0;
                var e,
                  t,
                  r,
                  i,
                  a,
                  u = this._parentage;
                if (u) {
                  if (((this._parentage = null), Array.isArray(u)))
                    try {
                      for (
                        var c = (0, n.XA)(u), d = c.next();
                        !d.done;
                        d = c.next()
                      )
                        d.value.remove(this);
                    } catch (t) {
                      e = { error: t };
                    } finally {
                      try {
                        d && !d.done && (t = c.return) && t.call(c);
                      } finally {
                        if (e) throw e.error;
                      }
                    }
                  else u.remove(this);
                }
                var f = this.initialTeardown;
                if ((0, s.m)(f))
                  try {
                    f();
                  } catch (e) {
                    a = e instanceof o ? e.errors : [e];
                  }
                var h = this._finalizers;
                if (h) {
                  this._finalizers = null;
                  try {
                    for (
                      var p = (0, n.XA)(h), y = p.next();
                      !y.done;
                      y = p.next()
                    ) {
                      var v = y.value;
                      try {
                        l(v);
                      } catch (e) {
                        (a = null != a ? a : []),
                          e instanceof o
                            ? (a = (0, n.ev)(
                                (0, n.ev)([], (0, n.CR)(a)),
                                (0, n.CR)(e.errors)
                              ))
                            : a.push(e);
                      }
                    }
                  } catch (e) {
                    r = { error: e };
                  } finally {
                    try {
                      y && !y.done && (i = p.return) && i.call(p);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                }
                if (a) throw new o(a);
              }
            }),
            (t.prototype.add = function (e) {
              var r;
              if (e && e !== this) {
                if (this.closed) l(e);
                else {
                  if (e instanceof t) {
                    if (e.closed || e._hasParent(this)) return;
                    e._addParent(this);
                  }
                  (this._finalizers =
                    null !== (r = this._finalizers) && void 0 !== r
                      ? r
                      : []).push(e);
                }
              }
            }),
            (t.prototype._hasParent = function (e) {
              var t = this._parentage;
              return t === e || (Array.isArray(t) && t.includes(e));
            }),
            (t.prototype._addParent = function (e) {
              var t = this._parentage;
              this._parentage = Array.isArray(t)
                ? (t.push(e), t)
                : t
                ? [t, e]
                : e;
            }),
            (t.prototype._removeParent = function (e) {
              var t = this._parentage;
              t === e
                ? (this._parentage = null)
                : Array.isArray(t) && (0, i.P)(t, e);
            }),
            (t.prototype.remove = function (e) {
              var r = this._finalizers;
              r && (0, i.P)(r, e), e instanceof t && e._removeParent(this);
            }),
            (t.EMPTY = (((e = new t()).closed = !0), e)),
            t
          );
        })(),
        u = a.EMPTY;
      function c(e) {
        return (
          e instanceof a ||
          (e &&
            "closed" in e &&
            (0, s.m)(e.remove) &&
            (0, s.m)(e.add) &&
            (0, s.m)(e.unsubscribe))
        );
      }
      function l(e) {
        (0, s.m)(e) ? e() : e.unsubscribe();
      }
    },
    27374: function (e, t, r) {
      r.d(t, {
        v: function () {
          return n;
        },
      });
      var n = {
        onUnhandledError: null,
        onStoppedNotification: null,
        Promise: void 0,
        useDeprecatedSynchronousErrorHandling: !1,
        useDeprecatedNextContext: !1,
      };
    },
    28546: function (e, t, r) {
      r.d(t, {
        P: function () {
          return o;
        },
      });
      var n = r(62166),
        s = r(95764);
      function o(e) {
        return new n.y(function (t) {
          (0, s.Xf)(e()).subscribe(t);
        });
      }
    },
    32283: function (e, t, r) {
      r.d(t, {
        E: function () {
          return n;
        },
      });
      var n = new (r(62166).y)(function (e) {
        return e.complete();
      });
    },
    30504: function (e, t, r) {
      r.d(t, {
        D: function () {
          return b;
        },
      });
      var n = r(95764),
        s = r(56563),
        o = r(41694);
      function i(e, t) {
        return (
          void 0 === t && (t = 0),
          (0, o.e)(function (r, n) {
            n.add(
              e.schedule(function () {
                return r.subscribe(n);
              }, t)
            );
          })
        );
      }
      var a = r(62166),
        u = r(10040),
        c = r(61716),
        l = r(26564);
      function d(e, t) {
        if (!e) throw Error("Iterable cannot be null");
        return new a.y(function (r) {
          (0, l.f)(r, t, function () {
            var n = e[Symbol.asyncIterator]();
            (0, l.f)(
              r,
              t,
              function () {
                n.next().then(function (e) {
                  e.done ? r.complete() : r.next(e.value);
                });
              },
              0,
              !0
            );
          });
        });
      }
      var f = r(59881),
        h = r(64710),
        p = r(90963),
        y = r(38999),
        v = r(77816),
        m = r(99179),
        g = r(43812);
      function b(e, t) {
        return t
          ? (function (e, t) {
              if (null != e) {
                if ((0, f.c)(e)) return (0, n.Xf)(e).pipe(i(t), (0, s.Q)(t));
                if ((0, p.z)(e))
                  return new a.y(function (r) {
                    var n = 0;
                    return t.schedule(function () {
                      n === e.length
                        ? r.complete()
                        : (r.next(e[n++]), r.closed || this.schedule());
                    });
                  });
                if ((0, h.t)(e)) return (0, n.Xf)(e).pipe(i(t), (0, s.Q)(t));
                if ((0, v.D)(e)) return d(e, t);
                if ((0, y.T)(e))
                  return new a.y(function (r) {
                    var n;
                    return (
                      (0, l.f)(r, t, function () {
                        (n = e[u.h]()),
                          (0, l.f)(
                            r,
                            t,
                            function () {
                              var e, t, s;
                              try {
                                (t = (e = n.next()).value), (s = e.done);
                              } catch (e) {
                                r.error(e);
                                return;
                              }
                              s ? r.complete() : r.next(t);
                            },
                            0,
                            !0
                          );
                      }),
                      function () {
                        return (
                          (0, c.m)(null == n ? void 0 : n.return) && n.return()
                        );
                      }
                    );
                  });
                if ((0, g.L)(e)) return d((0, g.Q)(e), t);
              }
              throw (0, m.z)(e);
            })(e, t)
          : (0, n.Xf)(e);
      }
    },
    95764: function (e, t, r) {
      r.d(t, {
        Xf: function () {
          return y;
        },
      });
      var n = r(5594),
        s = r(90963),
        o = r(64710),
        i = r(62166),
        a = r(59881),
        u = r(77816),
        c = r(99179),
        l = r(38999),
        d = r(43812),
        f = r(61716),
        h = r(35990),
        p = r(57093);
      function y(e) {
        if (e instanceof i.y) return e;
        if (null != e) {
          if ((0, a.c)(e))
            return new i.y(function (t) {
              var r = e[p.L]();
              if ((0, f.m)(r.subscribe)) return r.subscribe(t);
              throw TypeError(
                "Provided object does not correctly implement Symbol.observable"
              );
            });
          if ((0, s.z)(e))
            return new i.y(function (t) {
              for (var r = 0; r < e.length && !t.closed; r++) t.next(e[r]);
              t.complete();
            });
          if ((0, o.t)(e))
            return new i.y(function (t) {
              e.then(
                function (e) {
                  t.closed || (t.next(e), t.complete());
                },
                function (e) {
                  return t.error(e);
                }
              ).then(null, h.h);
            });
          if ((0, u.D)(e)) return v(e);
          if ((0, l.T)(e))
            return new i.y(function (t) {
              var r, s;
              try {
                for (
                  var o = (0, n.XA)(e), i = o.next();
                  !i.done;
                  i = o.next()
                ) {
                  var a = i.value;
                  if ((t.next(a), t.closed)) return;
                }
              } catch (e) {
                r = { error: e };
              } finally {
                try {
                  i && !i.done && (s = o.return) && s.call(o);
                } finally {
                  if (r) throw r.error;
                }
              }
              t.complete();
            });
          if ((0, d.L)(e)) return v((0, d.Q)(e));
        }
        throw (0, c.z)(e);
      }
      function v(e) {
        return new i.y(function (t) {
          (function (e, t) {
            var r, s, o, i;
            return (0, n.mG)(this, void 0, void 0, function () {
              var a;
              return (0, n.Jh)(this, function (u) {
                switch (u.label) {
                  case 0:
                    u.trys.push([0, 5, 6, 11]),
                      (r = (0, n.KL)(e)),
                      (u.label = 1);
                  case 1:
                    return [4, r.next()];
                  case 2:
                    if ((s = u.sent()).done) return [3, 4];
                    if (((a = s.value), t.next(a), t.closed)) return [2];
                    u.label = 3;
                  case 3:
                    return [3, 1];
                  case 4:
                    return [3, 11];
                  case 5:
                    return (o = { error: u.sent() }), [3, 11];
                  case 6:
                    if (
                      (u.trys.push([6, , 9, 10]),
                      !(s && !s.done && (i = r.return)))
                    )
                      return [3, 8];
                    return [4, i.call(r)];
                  case 7:
                    u.sent(), (u.label = 8);
                  case 8:
                    return [3, 10];
                  case 9:
                    if (o) throw o.error;
                    return [7];
                  case 10:
                    return [7];
                  case 11:
                    return t.complete(), [2];
                }
              });
            });
          })(e, t).catch(function (e) {
            return t.error(e);
          });
        });
      }
    },
    15517: function (e, t, r) {
      r.d(t, {
        T: function () {
          return u;
        },
      });
      var n = r(31052),
        s = r(95764),
        o = r(32283),
        i = r(67559),
        a = r(30504);
      function u() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = (0, i.yG)(e),
          u = (0, i._6)(e, 1 / 0);
        return e.length
          ? 1 === e.length
            ? (0, s.Xf)(e[0])
            : (0, n.J)(u)((0, a.D)(e, r))
          : o.E;
      }
    },
    54797: function (e, t, r) {
      r.d(t, {
        x: function () {
          return s;
        },
      });
      var n = r(5594);
      function s(e, t, r, n, s) {
        return new o(e, t, r, n, s);
      }
      var o = (function (e) {
        function t(t, r, n, s, o, i) {
          var a = e.call(this, t) || this;
          return (
            (a.onFinalize = o),
            (a.shouldUnsubscribe = i),
            (a._next = r
              ? function (e) {
                  try {
                    r(e);
                  } catch (e) {
                    t.error(e);
                  }
                }
              : e.prototype._next),
            (a._error = s
              ? function (e) {
                  try {
                    s(e);
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._error),
            (a._complete = n
              ? function () {
                  try {
                    n();
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._complete),
            a
          );
        }
        return (
          (0, n.ZT)(t, e),
          (t.prototype.unsubscribe = function () {
            var t;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
              var r = this.closed;
              e.prototype.unsubscribe.call(this),
                r ||
                  null === (t = this.onFinalize) ||
                  void 0 === t ||
                  t.call(this);
            }
          }),
          t
        );
      })(r(9083).Lv);
    },
    26312: function (e, t, r) {
      r.d(t, {
        h: function () {
          return o;
        },
      });
      var n = r(41694),
        s = r(54797);
      function o(e, t) {
        return (0, n.e)(function (r, n) {
          var o = 0;
          r.subscribe(
            (0, s.x)(n, function (r) {
              return e.call(t, r, o++) && n.next(r);
            })
          );
        });
      }
    },
    18563: function (e, t, r) {
      r.d(t, {
        U: function () {
          return o;
        },
      });
      var n = r(41694),
        s = r(54797);
      function o(e, t) {
        return (0, n.e)(function (r, n) {
          var o = 0;
          r.subscribe(
            (0, s.x)(n, function (r) {
              n.next(e.call(t, r, o++));
            })
          );
        });
      }
    },
    31052: function (e, t, r) {
      r.d(t, {
        J: function () {
          return o;
        },
      });
      var n = r(21368),
        s = r(79485);
      function o(e) {
        return void 0 === e && (e = 1 / 0), (0, n.z)(s.y, e);
      }
    },
    21368: function (e, t, r) {
      r.d(t, {
        z: function () {
          return function e(t, r, u) {
            return (void 0 === u && (u = 1 / 0), (0, a.m)(r))
              ? e(function (e, o) {
                  return (0, n.U)(function (t, n) {
                    return r(e, t, o, n);
                  })((0, s.Xf)(t(e, o)));
                }, u)
              : ("number" == typeof r && (u = r),
                (0, o.e)(function (e, r) {
                  var n, o, a, c, l, d, f, h, p;
                  return (
                    (n = u),
                    (a = []),
                    (c = 0),
                    (l = 0),
                    (d = !1),
                    (f = function () {
                      !d || a.length || c || r.complete();
                    }),
                    (h = function (e) {
                      return c < n ? p(e) : a.push(e);
                    }),
                    (p = function (e) {
                      c++;
                      var u = !1;
                      (0, s.Xf)(t(e, l++)).subscribe(
                        (0, i.x)(
                          r,
                          function (e) {
                            o ? h(e) : r.next(e);
                          },
                          function () {
                            u = !0;
                          },
                          void 0,
                          function () {
                            if (u)
                              try {
                                for (c--; a.length && c < n; )
                                  !(function () {
                                    var e = a.shift();
                                    p(e);
                                  })();
                                f();
                              } catch (e) {
                                r.error(e);
                              }
                          }
                        )
                      );
                    }),
                    e.subscribe(
                      (0, i.x)(r, h, function () {
                        (d = !0), f();
                      })
                    ),
                    function () {}
                  );
                }));
          };
        },
      });
      var n = r(18563),
        s = r(95764),
        o = r(41694),
        i = (r(26564), r(54797)),
        a = r(61716);
    },
    56563: function (e, t, r) {
      r.d(t, {
        Q: function () {
          return i;
        },
      });
      var n = r(26564),
        s = r(41694),
        o = r(54797);
      function i(e, t) {
        return (
          void 0 === t && (t = 0),
          (0, s.e)(function (r, s) {
            r.subscribe(
              (0, o.x)(
                s,
                function (r) {
                  return (0, n.f)(
                    s,
                    e,
                    function () {
                      return s.next(r);
                    },
                    t
                  );
                },
                function () {
                  return (0, n.f)(
                    s,
                    e,
                    function () {
                      return s.complete();
                    },
                    t
                  );
                },
                function (r) {
                  return (0, n.f)(
                    s,
                    e,
                    function () {
                      return s.error(r);
                    },
                    t
                  );
                }
              )
            );
          })
        );
      }
    },
    19869: function (e, t, r) {
      r.d(t, {
        B: function () {
          return u;
        },
      });
      var n = r(5594),
        s = r(95764),
        o = r(82729),
        i = r(9083),
        a = r(41694);
      function u(e) {
        void 0 === e && (e = {});
        var t = e.connector,
          r =
            void 0 === t
              ? function () {
                  return new o.x();
                }
              : t,
          n = e.resetOnError,
          u = void 0 === n || n,
          l = e.resetOnComplete,
          d = void 0 === l || l,
          f = e.resetOnRefCountZero,
          h = void 0 === f || f;
        return function (e) {
          var t,
            n,
            o,
            l = 0,
            f = !1,
            p = !1,
            y = function () {
              null == n || n.unsubscribe(), (n = void 0);
            },
            v = function () {
              y(), (t = o = void 0), (f = p = !1);
            },
            m = function () {
              var e = t;
              v(), null == e || e.unsubscribe();
            };
          return (0, a.e)(function (e, a) {
            l++, p || f || y();
            var g = (o = null != o ? o : r());
            a.add(function () {
              0 != --l || p || f || (n = c(m, h));
            }),
              g.subscribe(a),
              !t &&
                l > 0 &&
                ((t = new i.Hp({
                  next: function (e) {
                    return g.next(e);
                  },
                  error: function (e) {
                    (p = !0), y(), (n = c(v, u, e)), g.error(e);
                  },
                  complete: function () {
                    (f = !0), y(), (n = c(v, d)), g.complete();
                  },
                })),
                (0, s.Xf)(e).subscribe(t));
          })(e);
        };
      }
      function c(e, t) {
        for (var r = [], o = 2; o < arguments.length; o++)
          r[o - 2] = arguments[o];
        if (!0 === t) {
          e();
          return;
        }
        if (!1 !== t) {
          var a = new i.Hp({
            next: function () {
              a.unsubscribe(), e();
            },
          });
          return (0, s.Xf)(
            t.apply(void 0, (0, n.ev)([], (0, n.CR)(r)))
          ).subscribe(a);
        }
      }
    },
    9460: function (e, t, r) {
      r.d(t, {
        d: function () {
          return o;
        },
      });
      var n = r(51436),
        s = r(19869);
      function o(e, t, r) {
        var o,
          i,
          a,
          u,
          c = !1;
        return (
          e && "object" == typeof e
            ? ((u = void 0 === (o = e.bufferSize) ? 1 / 0 : o),
              (t = void 0 === (i = e.windowTime) ? 1 / 0 : i),
              (c = void 0 !== (a = e.refCount) && a),
              (r = e.scheduler))
            : (u = null != e ? e : 1 / 0),
          (0, s.B)({
            connector: function () {
              return new n.t(u, t, r);
            },
            resetOnError: !0,
            resetOnComplete: !1,
            resetOnRefCountZero: c,
          })
        );
      }
    },
    75738: function (e, t, r) {
      r.d(t, {
        o: function () {
          return a;
        },
      });
      var n = r(5594),
        s = (function (e) {
          function t(t, r) {
            return e.call(this) || this;
          }
          return (
            (0, n.ZT)(t, e),
            (t.prototype.schedule = function (e, t) {
              return void 0 === t && (t = 0), this;
            }),
            t
          );
        })(r(73016).w0),
        o = {
          setInterval: function (e, t) {
            for (var r = [], s = 2; s < arguments.length; s++)
              r[s - 2] = arguments[s];
            var i = o.delegate;
            return (null == i ? void 0 : i.setInterval)
              ? i.setInterval.apply(i, (0, n.ev)([e, t], (0, n.CR)(r)))
              : setInterval.apply(void 0, (0, n.ev)([e, t], (0, n.CR)(r)));
          },
          clearInterval: function (e) {
            var t = o.delegate;
            return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e);
          },
          delegate: void 0,
        },
        i = r(97816),
        a = (function (e) {
          function t(t, r) {
            var n = e.call(this, t, r) || this;
            return (n.scheduler = t), (n.work = r), (n.pending = !1), n;
          }
          return (
            (0, n.ZT)(t, e),
            (t.prototype.schedule = function (e, t) {
              if ((void 0 === t && (t = 0), this.closed)) return this;
              this.state = e;
              var r,
                n = this.id,
                s = this.scheduler;
              return (
                null != n && (this.id = this.recycleAsyncId(s, n, t)),
                (this.pending = !0),
                (this.delay = t),
                (this.id =
                  null !== (r = this.id) && void 0 !== r
                    ? r
                    : this.requestAsyncId(s, this.id, t)),
                this
              );
            }),
            (t.prototype.requestAsyncId = function (e, t, r) {
              return (
                void 0 === r && (r = 0), o.setInterval(e.flush.bind(e, this), r)
              );
            }),
            (t.prototype.recycleAsyncId = function (e, t, r) {
              if (
                (void 0 === r && (r = 0),
                null != r && this.delay === r && !1 === this.pending)
              )
                return t;
              null != t && o.clearInterval(t);
            }),
            (t.prototype.execute = function (e, t) {
              if (this.closed) return Error("executing a cancelled action");
              this.pending = !1;
              var r = this._execute(e, t);
              if (r) return r;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (t.prototype._execute = function (e, t) {
              var r,
                n = !1;
              try {
                this.work(e);
              } catch (e) {
                (n = !0),
                  (r = e || Error("Scheduled action threw falsy error"));
              }
              if (n) return this.unsubscribe(), r;
            }),
            (t.prototype.unsubscribe = function () {
              if (!this.closed) {
                var t = this.id,
                  r = this.scheduler,
                  n = r.actions;
                (this.work = this.state = this.scheduler = null),
                  (this.pending = !1),
                  (0, i.P)(n, this),
                  null != t && (this.id = this.recycleAsyncId(r, t, null)),
                  (this.delay = null),
                  e.prototype.unsubscribe.call(this);
              }
            }),
            t
          );
        })(s);
    },
    43073: function (e, t, r) {
      r.d(t, {
        v: function () {
          return i;
        },
      });
      var n = r(5594),
        s = r(17858),
        o = (function () {
          function e(t, r) {
            void 0 === r && (r = e.now),
              (this.schedulerActionCtor = t),
              (this.now = r);
          }
          return (
            (e.prototype.schedule = function (e, t, r) {
              return (
                void 0 === t && (t = 0),
                new this.schedulerActionCtor(this, e).schedule(r, t)
              );
            }),
            (e.now = s.l.now),
            e
          );
        })(),
        i = (function (e) {
          function t(t, r) {
            void 0 === r && (r = o.now);
            var n = e.call(this, t, r) || this;
            return (n.actions = []), (n._active = !1), n;
          }
          return (
            (0, n.ZT)(t, e),
            (t.prototype.flush = function (e) {
              var t,
                r = this.actions;
              if (this._active) {
                r.push(e);
                return;
              }
              this._active = !0;
              do if ((t = e.execute(e.state, e.delay))) break;
              while ((e = r.shift()));
              if (((this._active = !1), t)) {
                for (; (e = r.shift()); ) e.unsubscribe();
                throw t;
              }
            }),
            t
          );
        })(o);
    },
    17858: function (e, t, r) {
      r.d(t, {
        l: function () {
          return n;
        },
      });
      var n = {
        now: function () {
          return (n.delegate || Date).now();
        },
        delegate: void 0,
      };
    },
    89544: function (e, t, r) {
      r.d(t, {
        z: function () {
          return s;
        },
      });
      var n = r(5594),
        s = {
          setTimeout: function (e, t) {
            for (var r = [], o = 2; o < arguments.length; o++)
              r[o - 2] = arguments[o];
            var i = s.delegate;
            return (null == i ? void 0 : i.setTimeout)
              ? i.setTimeout.apply(i, (0, n.ev)([e, t], (0, n.CR)(r)))
              : setTimeout.apply(void 0, (0, n.ev)([e, t], (0, n.CR)(r)));
          },
          clearTimeout: function (e) {
            var t = s.delegate;
            return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
          },
          delegate: void 0,
        };
    },
    10040: function (e, t, r) {
      r.d(t, {
        h: function () {
          return n;
        },
      });
      var n =
        "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
    },
    57093: function (e, t, r) {
      r.d(t, {
        L: function () {
          return n;
        },
      });
      var n =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    },
    67559: function (e, t, r) {
      r.d(t, {
        _6: function () {
          return u;
        },
        jO: function () {
          return i;
        },
        yG: function () {
          return a;
        },
      });
      var n = r(61716),
        s = r(91727);
      function o(e) {
        return e[e.length - 1];
      }
      function i(e) {
        return (0, n.m)(o(e)) ? e.pop() : void 0;
      }
      function a(e) {
        return (0, s.K)(o(e)) ? e.pop() : void 0;
      }
      function u(e, t) {
        return "number" == typeof o(e) ? e.pop() : t;
      }
    },
    97816: function (e, t, r) {
      r.d(t, {
        P: function () {
          return n;
        },
      });
      function n(e, t) {
        if (e) {
          var r = e.indexOf(t);
          0 <= r && e.splice(r, 1);
        }
      }
    },
    34448: function (e, t, r) {
      r.d(t, {
        d: function () {
          return n;
        },
      });
      function n(e) {
        var t = e(function (e) {
          Error.call(e), (e.stack = Error().stack);
        });
        return (
          (t.prototype = Object.create(Error.prototype)),
          (t.prototype.constructor = t),
          t
        );
      }
    },
    55669: function (e, t, r) {
      r.d(t, {
        O: function () {
          return i;
        },
        x: function () {
          return o;
        },
      });
      var n = r(27374),
        s = null;
      function o(e) {
        if (n.v.useDeprecatedSynchronousErrorHandling) {
          var t = !s;
          if ((t && (s = { errorThrown: !1, error: null }), e(), t)) {
            var r = s,
              o = r.errorThrown,
              i = r.error;
            if (((s = null), o)) throw i;
          }
        } else e();
      }
      function i(e) {
        n.v.useDeprecatedSynchronousErrorHandling &&
          s &&
          ((s.errorThrown = !0), (s.error = e));
      }
    },
    26564: function (e, t, r) {
      r.d(t, {
        f: function () {
          return n;
        },
      });
      function n(e, t, r, n, s) {
        void 0 === n && (n = 0), void 0 === s && (s = !1);
        var o = t.schedule(function () {
          r(), s ? e.add(this.schedule(null, n)) : this.unsubscribe();
        }, n);
        if ((e.add(o), !s)) return o;
      }
    },
    79485: function (e, t, r) {
      r.d(t, {
        y: function () {
          return n;
        },
      });
      function n(e) {
        return e;
      }
    },
    90963: function (e, t, r) {
      r.d(t, {
        z: function () {
          return n;
        },
      });
      var n = function (e) {
        return e && "number" == typeof e.length && "function" != typeof e;
      };
    },
    77816: function (e, t, r) {
      r.d(t, {
        D: function () {
          return s;
        },
      });
      var n = r(61716);
      function s(e) {
        return (
          Symbol.asyncIterator &&
          (0, n.m)(null == e ? void 0 : e[Symbol.asyncIterator])
        );
      }
    },
    61716: function (e, t, r) {
      r.d(t, {
        m: function () {
          return n;
        },
      });
      function n(e) {
        return "function" == typeof e;
      }
    },
    59881: function (e, t, r) {
      r.d(t, {
        c: function () {
          return o;
        },
      });
      var n = r(57093),
        s = r(61716);
      function o(e) {
        return (0, s.m)(e[n.L]);
      }
    },
    38999: function (e, t, r) {
      r.d(t, {
        T: function () {
          return o;
        },
      });
      var n = r(10040),
        s = r(61716);
      function o(e) {
        return (0, s.m)(null == e ? void 0 : e[n.h]);
      }
    },
    64710: function (e, t, r) {
      r.d(t, {
        t: function () {
          return s;
        },
      });
      var n = r(61716);
      function s(e) {
        return (0, n.m)(null == e ? void 0 : e.then);
      }
    },
    43812: function (e, t, r) {
      r.d(t, {
        L: function () {
          return i;
        },
        Q: function () {
          return o;
        },
      });
      var n = r(5594),
        s = r(61716);
      function o(e) {
        return (0, n.FC)(this, arguments, function () {
          var t, r, s;
          return (0, n.Jh)(this, function (o) {
            switch (o.label) {
              case 0:
                (t = e.getReader()), (o.label = 1);
              case 1:
                o.trys.push([1, , 9, 10]), (o.label = 2);
              case 2:
                return [4, (0, n.qq)(t.read())];
              case 3:
                if (((s = (r = o.sent()).value), !r.done)) return [3, 5];
                return [4, (0, n.qq)(void 0)];
              case 4:
                return [2, o.sent()];
              case 5:
                return [4, (0, n.qq)(s)];
              case 6:
                return [4, o.sent()];
              case 7:
                return o.sent(), [3, 2];
              case 8:
                return [3, 10];
              case 9:
                return t.releaseLock(), [7];
              case 10:
                return [2];
            }
          });
        });
      }
      function i(e) {
        return (0, s.m)(null == e ? void 0 : e.getReader);
      }
    },
    91727: function (e, t, r) {
      r.d(t, {
        K: function () {
          return s;
        },
      });
      var n = r(61716);
      function s(e) {
        return e && (0, n.m)(e.schedule);
      }
    },
    41694: function (e, t, r) {
      r.d(t, {
        e: function () {
          return s;
        },
      });
      var n = r(61716);
      function s(e) {
        return function (t) {
          if ((0, n.m)(null == t ? void 0 : t.lift))
            return t.lift(function (t) {
              try {
                return e(t, this);
              } catch (e) {
                this.error(e);
              }
            });
          throw TypeError("Unable to lift unknown Observable type");
        };
      }
    },
    68474: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(5594),
        s = r(18563),
        o = Array.isArray;
      function i(e) {
        return (0, s.U)(function (t) {
          return o(t) ? e.apply(void 0, (0, n.ev)([], (0, n.CR)(t))) : e(t);
        });
      }
    },
    6394: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      function n() {}
    },
    67297: function (e, t, r) {
      r.d(t, {
        U: function () {
          return o;
        },
        z: function () {
          return s;
        },
      });
      var n = r(79485);
      function s() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return o(e);
      }
      function o(e) {
        return 0 === e.length
          ? n.y
          : 1 === e.length
          ? e[0]
          : function (t) {
              return e.reduce(function (e, t) {
                return t(e);
              }, t);
            };
      }
    },
    35990: function (e, t, r) {
      r.d(t, {
        h: function () {
          return o;
        },
      });
      var n = r(27374),
        s = r(89544);
      function o(e) {
        s.z.setTimeout(function () {
          var t = n.v.onUnhandledError;
          if (t) t(e);
          else throw e;
        });
      }
    },
    99179: function (e, t, r) {
      r.d(t, {
        z: function () {
          return n;
        },
      });
      function n(e) {
        return TypeError(
          "You provided " +
            (null !== e && "object" == typeof e
              ? "an invalid object"
              : "'" + e + "'") +
            " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable."
        );
      }
    },
    32742: function (e, t, r) {
      r.d(t, {
        C: function () {
          return i;
        },
        N: function () {
          return c;
        },
      });
      var n = {
          0: 8203,
          1: 8204,
          2: 8205,
          3: 8290,
          4: 8291,
          5: 8288,
          6: 65279,
          7: 8289,
          8: 119155,
          9: 119156,
          a: 119157,
          b: 119158,
          c: 119159,
          d: 119160,
          e: 119161,
          f: 119162,
        },
        s = { 0: 8203, 1: 8204, 2: 8205, 3: 65279 },
        o = [, , , ,].fill(String.fromCodePoint(s[0])).join("");
      function i(e, t, r = "auto") {
        let n;
        return !0 === r ||
          ("auto" === r &&
            ((!(
              !Number.isNaN(Number(e)) ||
              (/[a-z]/i.test(e) &&
                !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(
                  e
                ))
            ) &&
              Date.parse(e)) ||
              (function (e) {
                try {
                  new URL(e, e.startsWith("/") ? "https://acme.com" : void 0);
                } catch {
                  return !1;
                }
                return !0;
              })(e)))
          ? e
          : `${e}${
              ((n = JSON.stringify(t)),
              `${o}${Array.from(n)
                .map((e) => {
                  let t = e.charCodeAt(0);
                  if (t > 255)
                    throw Error(
                      `Only ASCII edit info can be encoded. Error attempting to encode ${n} on character ${e} (${t})`
                    );
                  return Array.from(t.toString(4).padStart(4, "0"))
                    .map((e) => String.fromCodePoint(s[e]))
                    .join("");
                })
                .join("")}`)
            }`;
      }
      Object.fromEntries(Object.entries(s).map((e) => e.reverse())),
        Object.fromEntries(Object.entries(n).map((e) => e.reverse()));
      var a = `${Object.values(n)
          .map((e) => `\\u{${e.toString(16)}}`)
          .join("")}`,
        u = RegExp(`[${a}]{4,}`, "gu");
      function c(e) {
        var t, r;
        return (
          e &&
          JSON.parse(
            {
              cleaned: (t = JSON.stringify(e)).replace(u, ""),
              encoded: (null == (r = t.match(u)) ? void 0 : r[0]) || "",
            }.cleaned
          )
        );
      }
    },
    52501: function (e, t, r) {
      r.d(t, {
        yK: function () {
          return $;
        },
        Hq: function () {
          return U;
        },
        ei: function () {
          return L;
        },
        bK: function () {
          return M;
        },
        Ol: function () {
          return z;
        },
        UE: function () {
          return D;
        },
        Ag: function () {
          return F;
        },
        F8: function () {
          return P;
        },
        dS: function () {
          return Z;
        },
        zB: function () {
          return H;
        },
        lB: function () {
          return B;
        },
      });
      var n = r(52338),
        s = r(95063),
        o = r(77490),
        i = r(23789),
        a = r(75410),
        u = r(28546),
        c = r(5594),
        l = r(95764),
        d = r(62166),
        f = r(21368),
        h = r(90963),
        p = r(61716),
        y = r(68474),
        v = ["addListener", "removeListener"],
        m = ["addEventListener", "removeEventListener"],
        g = ["on", "off"];
      function b(e, t, r, n) {
        if (((0, p.m)(r) && ((n = r), (r = void 0)), n))
          return b(e, t, r).pipe((0, y.Z)(n));
        var s = (0, c.CR)(
            (0, p.m)(e.addEventListener) && (0, p.m)(e.removeEventListener)
              ? m.map(function (n) {
                  return function (s) {
                    return e[n](t, s, r);
                  };
                })
              : (0, p.m)(e.addListener) && (0, p.m)(e.removeListener)
              ? v.map(w(e, t))
              : (0, p.m)(e.on) && (0, p.m)(e.off)
              ? g.map(w(e, t))
              : [],
            2
          ),
          o = s[0],
          i = s[1];
        if (!o && (0, h.z)(e))
          return (0, f.z)(function (e) {
            return b(e, t, r);
          })((0, l.Xf)(e));
        if (!o) throw TypeError("Invalid event target");
        return new d.y(function (e) {
          var t = function () {
            for (var t = [], r = 0; r < arguments.length; r++)
              t[r] = arguments[r];
            return e.next(1 < t.length ? t : t[0]);
          };
          return (
            o(t),
            function () {
              return i(t);
            }
          );
        });
      }
      function w(e, t) {
        return function (r) {
          return function (n) {
            return e[r](t, n);
          };
        };
      }
      var C = r(18563),
        x = r(67297),
        E = r(26312),
        q = r(41694),
        R = r(54797),
        T = r(97816),
        O = r(32283);
      function S(e) {
        return e <= 0
          ? function () {
              return O.E;
            }
          : (0, q.e)(function (t, r) {
              var n = 0;
              t.subscribe(
                (0, R.x)(r, function (t) {
                  ++n <= e && (r.next(t), e <= n && r.complete());
                })
              );
            });
      }
      var j = r(6394);
      let I =
          (e) =>
          ({ context: t }) => {
            let {
              count: r,
              include: n,
              exclude: s,
              responseType: o = "message.received",
            } = e;
            return {
              count: r,
              domain: t.domain,
              from: t.connectTo,
              include: n ? (Array.isArray(n) ? n : [n]) : [],
              exclude: s ? (Array.isArray(s) ? s : [s]) : [],
              responseType: o,
              target: t.target,
              to: t.name,
            };
          },
        k = (e) => (t) => {
          let { data: r } = t;
          return (
            (!e.include.length || e.include.includes(r.type)) &&
            (!e.exclude.length || !e.exclude.includes(r.type)) &&
            r.domain === e.domain &&
            r.from === e.from &&
            r.to === e.to &&
            (!e.target || t.source === e.target)
          );
        },
        _ = (e) => (t) => ({ type: e, message: t }),
        A = (0, u.P)(() => b(window, "message")),
        P = (e) =>
          (0, s.Y$)(({ input: t }) => {
            var r, n, s, o;
            return A.pipe(
              e ? (0, C.U)(e) : (0, x.z)(),
              (0, E.h)(k(t)),
              (0, C.U)(_(t.responseType)),
              t.count
                ? (0, x.z)(
                    ((r = t.count),
                    void 0 === n && (n = null),
                    (n = null != n ? n : r),
                    (0, q.e)(function (e, t) {
                      var s = [],
                        o = 0;
                      e.subscribe(
                        (0, R.x)(
                          t,
                          function (e) {
                            var i,
                              a,
                              u,
                              l,
                              d = null;
                            o++ % n == 0 && s.push([]);
                            try {
                              for (
                                var f = (0, c.XA)(s), h = f.next();
                                !h.done;
                                h = f.next()
                              ) {
                                var p = h.value;
                                p.push(e),
                                  r <= p.length &&
                                    (d = null != d ? d : []).push(p);
                              }
                            } catch (e) {
                              i = { error: e };
                            } finally {
                              try {
                                h && !h.done && (a = f.return) && a.call(f);
                              } finally {
                                if (i) throw i.error;
                              }
                            }
                            if (d)
                              try {
                                for (
                                  var y = (0, c.XA)(d), v = y.next();
                                  !v.done;
                                  v = y.next()
                                ) {
                                  var p = v.value;
                                  (0, T.P)(s, p), t.next(p);
                                }
                              } catch (e) {
                                u = { error: e };
                              } finally {
                                try {
                                  v && !v.done && (l = y.return) && l.call(y);
                                } finally {
                                  if (u) throw u.error;
                                }
                              }
                          },
                          function () {
                            var e, r;
                            try {
                              for (
                                var n = (0, c.XA)(s), o = n.next();
                                !o.done;
                                o = n.next()
                              ) {
                                var i = o.value;
                                t.next(i);
                              }
                            } catch (t) {
                              e = { error: t };
                            } finally {
                              try {
                                o && !o.done && (r = n.return) && r.call(n);
                              } finally {
                                if (e) throw e.error;
                              }
                            }
                            t.complete();
                          },
                          void 0,
                          function () {
                            s = null;
                          }
                        )
                      );
                    })),
                    ((s = (e) => e),
                    (0, p.m)(void 0) ? (0, f.z)(s, o, 1) : (0, f.z)(s, 1)),
                    S(t.count)
                  )
                : (0, x.z)()
            );
          }),
        $ = "sanity/comlink",
        F = "comlink/response",
        D = "comlink/heartbeat",
        U = "comlink/disconnect",
        M = "comlink/handshake/syn",
        z = "comlink/handshake/syn-ack",
        L = "comlink/handshake/ack",
        N = (e) => (t) =>
          t.pipe(
            S(1),
            (0, C.U)(() => {
              throw Error(e);
            })
          ),
        B = () =>
          (0, o.cY)({
            types: {},
            actors: {
              listen: (0, s.Y$)(({ input: e }) => {
                let t = e.signal
                  ? b(e.signal, "abort").pipe(
                      N(`Request ${e.requestId} aborted`)
                    )
                  : O.E;
                return b(window, "message").pipe(
                  (0, E.h)(
                    (t) =>
                      t.data?.type === F &&
                      t.data?.responseTo === e.requestId &&
                      !!t.source &&
                      e.sources.has(t.source)
                  ),
                  S(e.sources.size),
                  (0, q.e)(function (e, r) {
                    (0, l.Xf)(t).subscribe(
                      (0, R.x)(
                        r,
                        function () {
                          return r.complete();
                        },
                        j.Z
                      )
                    ),
                      r.closed || e.subscribe(r);
                  })
                );
              }),
            },
            actions: {
              "send message": ({ context: e }, t) => {
                let { sources: r, targetOrigin: n } = e,
                  { message: s } = t;
                r.forEach((e) => {
                  e.postMessage(s, { targetOrigin: n });
                });
              },
              "on success": (0, i.c)(
                ({ context: e }) => e.parentRef,
                ({ context: e, self: t }) => (
                  e.response && e.resolvable?.resolve(e.response),
                  {
                    type: "request.success",
                    requestId: t.id,
                    response: e.response,
                    responseTo: e.responseTo,
                  }
                )
              ),
              "on fail": (0, i.c)(
                ({ context: e }) => e.parentRef,
                ({ context: e, self: t }) => (
                  e.suppressWarnings ||
                    console.warn(
                      `[@sanity/comlink] Received no response to message '${e.type}' on client '${e.from}' (ID: '${e.id}').`
                    ),
                  e.resolvable?.reject(Error("No response received")),
                  { type: "request.failed", requestId: t.id }
                )
              ),
              "on abort": (0, i.c)(
                ({ context: e }) => e.parentRef,
                ({ context: e, self: t }) => (
                  e.resolvable?.reject(Error("Request aborted")),
                  { type: "request.aborted", requestId: t.id }
                )
              ),
            },
            guards: { expectsResponse: ({ context: e }) => e.expectResponse },
            delays: {
              initialTimeout: 0,
              responseTimeout: ({ context: e }) => e.responseTimeout ?? 3e3,
            },
          }).createMachine({
            context: ({ input: e }) => ({
              channelId: e.channelId,
              data: e.data,
              domain: e.domain,
              expectResponse: e.expectResponse ?? !1,
              from: e.from,
              id: `msg-${(0, n.Z)()}`,
              parentRef: e.parentRef,
              resolvable: e.resolvable,
              response: null,
              responseTimeout: e.responseTimeout,
              responseTo: e.responseTo,
              signal: e.signal,
              sources:
                e.sources instanceof Set ? e.sources : new Set([e.sources]),
              suppressWarnings: e.suppressWarnings,
              targetOrigin: e.targetOrigin,
              to: e.to,
              type: e.type,
            }),
            initial: "idle",
            on: { abort: ".aborted" },
            states: {
              idle: { after: { initialTimeout: [{ target: "sending" }] } },
              sending: {
                entry: {
                  type: "send message",
                  params: ({ context: e }) => {
                    let {
                      channelId: t,
                      data: r,
                      domain: n,
                      from: s,
                      id: o,
                      responseTo: i,
                      to: a,
                      type: u,
                    } = e;
                    return {
                      message: {
                        channelId: t,
                        data: r,
                        domain: n,
                        from: s,
                        id: o,
                        to: a,
                        type: u,
                        responseTo: i,
                      },
                    };
                  },
                },
                always: [
                  { guard: "expectsResponse", target: "awaiting" },
                  "success",
                ],
              },
              awaiting: {
                invoke: {
                  id: "listen for response",
                  src: "listen",
                  input: ({ context: e }) => ({
                    requestId: e.id,
                    sources: e.sources,
                    signal: e.signal,
                  }),
                  onError: "aborted",
                },
                after: { responseTimeout: "failed" },
                on: {
                  message: {
                    actions: (0, i.a)({
                      response: ({ event: e }) => e.data.data,
                      responseTo: ({ event: e }) => e.data.responseTo,
                    }),
                    target: "success",
                  },
                },
              },
              failed: { type: "final", entry: "on fail" },
              success: { type: "final", entry: "on success" },
              aborted: { type: "final", entry: "on abort" },
            },
            output: ({ context: e, self: t }) => ({
              requestId: t.id,
              response: e.response,
              responseTo: e.responseTo,
            }),
          }),
        H =
          ((0, s.E9)(({ sendBack: e, input: t }) => {
            let r = () => {
              e(t.event);
            };
            t.immediate && r();
            let n = setInterval(r, t.interval);
            return () => {
              clearInterval(n);
            };
          }),
          () =>
            (0, o.cY)({
              types: {},
              actors: { requestMachine: B(), listen: P() },
              actions: {
                "buffer handshake": (0, i.a)({
                  handshakeBuffer: ({ event: e, context: t }) => (
                    (0, o.ZD)(e, "message.received"), [...t.handshakeBuffer, e]
                  ),
                }),
                "buffer message": (0, i.b)(({ enqueue: e }) => {
                  e.assign({
                    buffer: ({ event: e, context: t }) => (
                      (0, o.ZD)(e, "post"),
                      [
                        ...t.buffer,
                        {
                          data: e.data,
                          resolvable: e.resolvable,
                          options: e.options,
                        },
                      ]
                    ),
                  }),
                    e.emit(
                      ({ event: e }) => (
                        (0, o.ZD)(e, "post"),
                        { type: "buffer.added", message: e.data }
                      )
                    );
                }),
                "create request": (0, i.a)({
                  requests: ({ context: e, event: t, self: r, spawn: s }) => {
                    (0, o.ZD)(t, "request");
                    let i = (Array.isArray(t.data) ? t.data : [t.data]).map(
                      (t) =>
                        s("requestMachine", {
                          id: `req-${(0, n.Z)()}`,
                          input: {
                            channelId: e.channelId,
                            data: t.data,
                            domain: e.domain,
                            expectResponse: t.expectResponse,
                            from: e.name,
                            parentRef: r,
                            resolvable: t.resolvable,
                            responseTimeout: t.options?.responseTimeout,
                            responseTo: t.responseTo,
                            signal: t.options?.signal,
                            sources: e.target,
                            suppressWarnings: t.options?.suppressWarnings,
                            targetOrigin: e.targetOrigin,
                            to: e.connectTo,
                            type: t.type,
                          },
                        })
                    );
                    return [...e.requests, ...i];
                  },
                }),
                "emit heartbeat": (0, i.e)(() => ({ type: "heartbeat" })),
                "emit received message": (0, i.b)(({ enqueue: e }) => {
                  e.emit(
                    ({ event: e }) => (
                      (0, o.ZD)(e, "message.received"),
                      { type: "message", message: e.message.data }
                    )
                  );
                }),
                "emit status": (0, i.e)((e, t) => ({
                  type: "status",
                  status: t.status,
                })),
                "post message": (0, a.O)(
                  ({ event: e }) => (
                    (0, o.ZD)(e, "post"),
                    {
                      type: "request",
                      data: {
                        data: e.data.data,
                        expectResponse: !!e.resolvable,
                        type: e.data.type,
                        resolvable: e.resolvable,
                        options: e.options,
                      },
                    }
                  )
                ),
                "process pending handshakes": (0, i.b)(
                  ({ context: e, enqueue: t }) => {
                    e.handshakeBuffer.forEach((e) => t.raise(e)),
                      t.assign({ handshakeBuffer: [] });
                  }
                ),
                "remove request": (0, i.b)(
                  ({ context: e, enqueue: t, event: r }) => {
                    (0, o.ZD)(r, [
                      "request.success",
                      "request.failed",
                      "request.aborted",
                    ]),
                      (0, a.R)(r.requestId),
                      t.assign({
                        requests: e.requests.filter(
                          ({ id: e }) => e !== r.requestId
                        ),
                      });
                  }
                ),
                "send response": (0, a.O)(
                  ({ event: e }) => (
                    (0, o.ZD)(e, ["message.received", "heartbeat.received"]),
                    {
                      type: "request",
                      data: {
                        type: F,
                        responseTo: e.message.data.id,
                        data: void 0,
                      },
                    }
                  )
                ),
                "send handshake syn ack": (0, a.O)({
                  type: "request",
                  data: { type: z },
                }),
                "send pending messages": (0, i.b)(({ enqueue: e }) => {
                  e.raise(({ context: e }) => ({
                    type: "request",
                    data: e.buffer.map(
                      ({ data: e, resolvable: t, options: r }) => ({
                        data: e.data,
                        type: e.type,
                        expectResponse: !!t,
                        resolvable: t,
                        options: r,
                      })
                    ),
                  })),
                    e.emit(({ context: e }) => ({
                      type: "buffer.flushed",
                      messages: e.buffer.map(({ data: e }) => e),
                    })),
                    e.assign({ buffer: [] });
                }),
                "set connection config": (0, i.a)({
                  channelId: ({ event: e }) => (
                    (0, o.ZD)(e, "handshake.syn"), e.message.data.channelId
                  ),
                  target: ({ event: e }) => (
                    (0, o.ZD)(e, "handshake.syn"), e.message.source || void 0
                  ),
                  targetOrigin: ({ event: e }) => (
                    (0, o.ZD)(e, "handshake.syn"), e.message.origin
                  ),
                }),
              },
              guards: { hasSource: ({ context: e }) => null !== e.target },
            }).createMachine({
              id: "node",
              context: ({ input: e }) => ({
                buffer: [],
                channelId: null,
                connectTo: e.connectTo,
                domain: e.domain ?? $,
                handshakeBuffer: [],
                name: e.name,
                requests: [],
                target: void 0,
                targetOrigin: null,
              }),
              invoke: {
                id: "listen for handshake syn",
                src: "listen",
                input: I({ include: M, responseType: "handshake.syn" }),
              },
              on: {
                "request.success": { actions: "remove request" },
                "request.failed": { actions: "remove request" },
                "request.aborted": { actions: "remove request" },
                "handshake.syn": {
                  actions: "set connection config",
                  target: ".handshaking",
                },
              },
              initial: "idle",
              states: {
                idle: {
                  entry: [{ type: "emit status", params: { status: "idle" } }],
                  on: { post: { actions: "buffer message" } },
                },
                handshaking: {
                  guard: "hasSource",
                  entry: [
                    "send handshake syn ack",
                    { type: "emit status", params: { status: "handshaking" } },
                  ],
                  invoke: [
                    {
                      id: "listen for handshake ack",
                      src: "listen",
                      input: I({
                        include: L,
                        count: 1,
                        responseType: "handshake.complete",
                      }),
                      onDone: "connected",
                    },
                    {
                      id: "listen for disconnect",
                      src: "listen",
                      input: I({
                        include: U,
                        count: 1,
                        responseType: "disconnect",
                      }),
                    },
                    {
                      id: "listen for messages",
                      src: "listen",
                      input: I({ exclude: [U, M, L, D, F] }),
                    },
                  ],
                  on: {
                    request: { actions: "create request" },
                    post: { actions: "buffer message" },
                    "message.received": { actions: "buffer handshake" },
                    disconnect: { target: "idle" },
                  },
                },
                connected: {
                  entry: [
                    "process pending handshakes",
                    "send pending messages",
                    { type: "emit status", params: { status: "connected" } },
                  ],
                  invoke: [
                    {
                      id: "listen for messages",
                      src: "listen",
                      input: I({ exclude: [U, M, L, D, F] }),
                    },
                    {
                      id: "listen for heartbeat",
                      src: "listen",
                      input: I({
                        include: D,
                        responseType: "heartbeat.received",
                      }),
                    },
                    {
                      id: "listen for disconnect",
                      src: "listen",
                      input: I({
                        include: U,
                        count: 1,
                        responseType: "disconnect",
                      }),
                    },
                  ],
                  on: {
                    request: { actions: "create request" },
                    post: { actions: "post message" },
                    disconnect: { target: "idle" },
                    "message.received": {
                      actions: ["send response", "emit received message"],
                    },
                    "heartbeat.received": {
                      actions: ["send response", "emit heartbeat"],
                    },
                  },
                },
              },
            })),
        Z = (e, t = H()) => {
          let r;
          let n = (0, a.A)(t, { input: e }),
            s = new Map(),
            o = new Map();
          n.on("message", ({ message: e }) => {
            let t = s.get(e.type);
            if (t) {
              t.forEach((t) => t(e.data));
              return;
            }
            let r = o.get(e.type);
            r ? r.add(e) : o.set(e.type, new Set([e]));
          });
          let i = () => {
            n.stop();
          };
          return {
            actor: n,
            fetch: (e, t, r) => {
              let {
                  responseTimeout: s = 1e4,
                  signal: o,
                  suppressWarnings: i,
                } = r || {},
                a = Promise.withResolvers();
              return (
                n.send({
                  type: "post",
                  data: { type: e, data: t },
                  resolvable: a,
                  options: {
                    responseTimeout: s,
                    signal: o,
                    suppressWarnings: i,
                  },
                }),
                a.promise
              );
            },
            machine: t,
            on: (e, t, r) => {
              let n = s.get(e) || new Set();
              s.has(e) || s.set(e, n), n.add(t);
              let i = o.get(e);
              if (i) {
                let n = r?.replay ?? 1;
                Array.from(i)
                  .slice(-n)
                  .forEach(({ data: e }) => t(e)),
                  o.delete(e);
              }
              return () => {
                n.delete(t);
              };
            },
            onStatus: (e, t) => {
              let { unsubscribe: s } = n.on("status", (n) => {
                (r = n.status), (t && n.status !== t) || e(n.status);
              });
              return r && e(r), s;
            },
            post: (e, t) => {
              n.send({ type: "post", data: { type: e, data: t } });
            },
            start: () => (n.start(), i),
            stop: i,
          };
        };
    },
    93244: function (e, t, r) {
      r.d(t, {
        Bk: function () {
          return o;
        },
        Uw: function () {
          return a;
        },
        Y5: function () {
          return u;
        },
        id: function () {
          return c;
        },
        re: function () {
          return l;
        },
      });
      let n = new Set(),
        s = "checking";
      function o(e) {
        if (s !== e) for (let t of ((s = e), n)) t();
      }
      let i = new Set();
      function a(e) {
        for (let e of i) e();
      }
      let u = new Set(),
        c = null;
      function l(e) {
        for (let t of ((c = e), u)) t();
      }
    },
    27286: function (e, t, r) {
      r.d(t, {
        default: function () {
          return o;
        },
      });
      var n = r(20209);
      let s = (0, r(89779).default)(() => r.e(3771).then(r.bind(r, 73771)), {
        loadableGenerated: {
          webpack: () => [
            require.resolveWeak("../_chunks-es/SanityLiveStream.js"),
          ],
        },
        ssr: !1,
      });
      function o(e) {
        return (0, n.jsx)(s, { ...e });
      }
    },
    54094: function (e, t, r) {
      r.d(t, {
        default: function () {
          return t8;
        },
      });
      var n,
        s = r(20209);
      let o = !(typeof navigator > "u") && "ReactNative" === navigator.product,
        i = { timeout: o ? 6e4 : 12e4 },
        a = function (e) {
          let t = { ...i, ...("string" == typeof e ? { url: e } : e) };
          if (
            ((t.timeout = (function e(t) {
              if (!1 === t || 0 === t) return !1;
              if (t.connect || t.socket) return t;
              let r = Number(t);
              return isNaN(r) ? e(i.timeout) : { connect: r, socket: r };
            })(t.timeout)),
            t.query)
          ) {
            let { url: e, searchParams: r } = (function (e) {
              let t = e.indexOf("?");
              if (-1 === t)
                return { url: e, searchParams: new URLSearchParams() };
              let r = e.slice(0, t),
                n = e.slice(t + 1);
              if (!o) return { url: r, searchParams: new URLSearchParams(n) };
              if ("function" != typeof decodeURIComponent)
                throw Error(
                  "Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined"
                );
              let s = new URLSearchParams();
              for (let e of n.split("&")) {
                let [t, r] = e.split("=");
                t && s.append(u(t), u(r || ""));
              }
              return { url: r, searchParams: s };
            })(t.url);
            for (let [n, s] of Object.entries(t.query)) {
              if (void 0 !== s) {
                if (Array.isArray(s)) for (let e of s) r.append(n, e);
                else r.append(n, s);
              }
              let o = r.toString();
              o && (t.url = `${e}?${o}`);
            }
          }
          return (
            (t.method =
              t.body && !t.method ? "POST" : (t.method || "GET").toUpperCase()),
            t
          );
        };
      function u(e) {
        return decodeURIComponent(e.replace(/\+/g, " "));
      }
      let c = /^https?:\/\//i,
        l = function (e) {
          if (!c.test(e.url)) throw Error(`"${e.url}" is not a valid URL`);
        },
        d = ["request", "response", "progress", "error", "abort"],
        f = [
          "processOptions",
          "validateOptions",
          "interceptRequest",
          "finalizeOptions",
          "onRequest",
          "onResponse",
          "onError",
          "onReturn",
          "onHeaders",
        ];
      var h,
        p,
        y,
        v =
          (h = (function () {
            if (y) return p;
            y = 1;
            var e = function (e) {
              return e.replace(/^\s+|\s+$/g, "");
            };
            return (p = function (t) {
              if (!t) return {};
              for (
                var r, n = {}, s = e(t).split("\n"), o = 0;
                o < s.length;
                o++
              ) {
                var i = s[o],
                  a = i.indexOf(":"),
                  u = e(i.slice(0, a)).toLowerCase(),
                  c = e(i.slice(a + 1));
                typeof n[u] > "u"
                  ? (n[u] = c)
                  : ((r = n[u]),
                    "[object Array]" === Object.prototype.toString.call(r)
                      ? n[u].push(c)
                      : (n[u] = [n[u], c]));
              }
              return n;
            });
          })()) &&
          h.__esModule &&
          Object.prototype.hasOwnProperty.call(h, "default")
            ? h.default
            : h;
      class m {
        onabort;
        onerror;
        onreadystatechange;
        ontimeout;
        readyState = 0;
        response;
        responseText = "";
        responseType = "";
        status;
        statusText;
        withCredentials;
        #e;
        #t;
        #r;
        #n = {};
        #s;
        #o = {};
        #i;
        open(e, t, r) {
          (this.#e = e),
            (this.#t = t),
            (this.#r = ""),
            (this.readyState = 1),
            this.onreadystatechange?.(),
            (this.#s = void 0);
        }
        abort() {
          this.#s && this.#s.abort();
        }
        getAllResponseHeaders() {
          return this.#r;
        }
        setRequestHeader(e, t) {
          this.#n[e] = t;
        }
        setInit(e, t = !0) {
          (this.#o = e), (this.#i = t);
        }
        send(e) {
          let t = "arraybuffer" !== this.responseType,
            r = { ...this.#o, method: this.#e, headers: this.#n, body: e };
          "function" == typeof AbortController &&
            this.#i &&
            ((this.#s = new AbortController()),
            "u" > typeof EventTarget &&
              this.#s.signal instanceof EventTarget &&
              (r.signal = this.#s.signal)),
            "u" > typeof document &&
              (r.credentials = this.withCredentials ? "include" : "omit"),
            fetch(this.#t, r)
              .then(
                (e) => (
                  e.headers.forEach((e, t) => {
                    this.#r += `${t}: ${e}\r
`;
                  }),
                  (this.status = e.status),
                  (this.statusText = e.statusText),
                  (this.readyState = 3),
                  this.onreadystatechange?.(),
                  t ? e.text() : e.arrayBuffer()
                )
              )
              .then((e) => {
                "string" == typeof e
                  ? (this.responseText = e)
                  : (this.response = e),
                  (this.readyState = 4),
                  this.onreadystatechange?.();
              })
              .catch((e) => {
                "AbortError" !== e.name ? this.onerror?.(e) : this.onabort?.();
              });
        }
      }
      let g = "function" == typeof XMLHttpRequest ? "xhr" : "fetch",
        b = "xhr" === g ? XMLHttpRequest : m,
        w = (e, t) => {
          let r = e.options,
            n = e.applyMiddleware("finalizeOptions", r),
            s = {},
            o = e.applyMiddleware("interceptRequest", void 0, {
              adapter: g,
              context: e,
            });
          if (o) {
            let e = setTimeout(t, 0, null, o);
            return { abort: () => clearTimeout(e) };
          }
          let i = new b();
          i instanceof m &&
            "object" == typeof n.fetch &&
            i.setInit(n.fetch, n.useAbortSignal ?? !0);
          let a = n.headers,
            u = n.timeout,
            c = !1,
            l = !1,
            d = !1;
          if (
            ((i.onerror = (e) => {
              p(
                i instanceof m
                  ? e instanceof Error
                    ? e
                    : Error(
                        `Request error while attempting to reach is ${n.url}`,
                        { cause: e }
                      )
                  : Error(
                      `Request error while attempting to reach is ${n.url}${
                        e.lengthComputable
                          ? `(${e.loaded} of ${e.total} bytes transferred)`
                          : ""
                      }`
                    )
              );
            }),
            (i.ontimeout = (e) => {
              p(
                Error(
                  `Request timeout while attempting to reach ${n.url}${
                    e.lengthComputable
                      ? `(${e.loaded} of ${e.total} bytes transferred)`
                      : ""
                  }`
                )
              );
            }),
            (i.onabort = () => {
              h(!0), (c = !0);
            }),
            (i.onreadystatechange = () => {
              u &&
                (h(),
                (s.socket = setTimeout(() => f("ESOCKETTIMEDOUT"), u.socket))),
                c ||
                  4 !== i.readyState ||
                  0 === i.status ||
                  (function () {
                    if (!(c || l || d)) {
                      if (0 === i.status)
                        return void p(Error("Unknown XHR error"));
                      h(),
                        (l = !0),
                        t(null, {
                          body:
                            i.response ||
                            ("" === i.responseType || "text" === i.responseType
                              ? i.responseText
                              : ""),
                          url: n.url,
                          method: n.method,
                          headers: v(i.getAllResponseHeaders()),
                          statusCode: i.status,
                          statusMessage: i.statusText,
                        });
                    }
                  })();
            }),
            i.open(n.method, n.url, !0),
            (i.withCredentials = !!n.withCredentials),
            a && i.setRequestHeader)
          )
            for (let e in a) a.hasOwnProperty(e) && i.setRequestHeader(e, a[e]);
          return (
            n.rawBody && (i.responseType = "arraybuffer"),
            e.applyMiddleware("onRequest", {
              options: n,
              adapter: g,
              request: i,
              context: e,
            }),
            i.send(n.body || null),
            u && (s.connect = setTimeout(() => f("ETIMEDOUT"), u.connect)),
            {
              abort: function () {
                (c = !0), i && i.abort();
              },
            }
          );
          function f(t) {
            (d = !0), i.abort();
            let r = Error(
              "ESOCKETTIMEDOUT" === t
                ? `Socket timed out on request to ${n.url}`
                : `Connection timed out on request to ${n.url}`
            );
            (r.code = t), e.channels.error.publish(r);
          }
          function h(e) {
            (e || c || (i.readyState >= 2 && s.connect)) &&
              clearTimeout(s.connect),
              s.socket && clearTimeout(s.socket);
          }
          function p(e) {
            if (l) return;
            h(!0), (l = !0), (i = null);
            let r =
              e || Error(`Network error while attempting to reach ${n.url}`);
            (r.isNetworkError = !0), (r.request = n), t(r);
          }
        },
        C = (e = [], t = w) =>
          (function e(t, r) {
            let n = [],
              s = f.reduce((e, t) => ((e[t] = e[t] || []), e), {
                processOptions: [a],
                validateOptions: [l],
              });
            function o(e) {
              let t;
              let n = d.reduce(
                  (e, t) => (
                    (e[t] = (function () {
                      let e = Object.create(null),
                        t = 0;
                      return {
                        publish: function (t) {
                          for (let r in e) e[r](t);
                        },
                        subscribe: function (r) {
                          let n = t++;
                          return (
                            (e[n] = r),
                            function () {
                              delete e[n];
                            }
                          );
                        },
                      };
                    })()),
                    e
                  ),
                  {}
                ),
                o = function (e, t, ...r) {
                  let n = "onError" === e,
                    o = t;
                  for (
                    let t = 0;
                    t < s[e].length && ((o = (0, s[e][t])(o, ...r)), !n || o);
                    t++
                  );
                  return o;
                },
                i = o("processOptions", e);
              o("validateOptions", i);
              let a = { options: i, channels: n, applyMiddleware: o },
                u = n.request.subscribe((e) => {
                  t = r(e, (t, r) =>
                    ((e, t, r) => {
                      let s = e,
                        i = t;
                      if (!s)
                        try {
                          i = o("onResponse", t, r);
                        } catch (e) {
                          (i = null), (s = e);
                        }
                      (s = s && o("onError", s, r))
                        ? n.error.publish(s)
                        : i && n.response.publish(i);
                    })(t, r, e)
                  );
                });
              n.abort.subscribe(() => {
                u(), t && t.abort();
              });
              let c = o("onReturn", n, a);
              return c === n && n.request.publish(a), c;
            }
            return (
              (o.use = function (e) {
                if (!e)
                  throw Error(
                    "Tried to add middleware that resolved to falsey value"
                  );
                if ("function" == typeof e)
                  throw Error(
                    "Tried to add middleware that was a function. It probably expects you to pass options to it."
                  );
                if (e.onReturn && s.onReturn.length > 0)
                  throw Error(
                    "Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event"
                  );
                return (
                  f.forEach((t) => {
                    e[t] && s[t].push(e[t]);
                  }),
                  n.push(e),
                  o
                );
              }),
              (o.clone = () => e(n, r)),
              t.forEach(o.use),
              o
            );
          })(e, t);
      var x,
        E,
        q,
        R,
        T,
        O = r(28070),
        S = r(33414).lW,
        j = { exports: {} };
      T ||
        ((T = 1),
        (function (e, t) {
          let r;
          (t.formatArgs = function (t) {
            if (
              ((t[0] =
                (this.useColors ? "%c" : "") +
                this.namespace +
                (this.useColors ? " %c" : " ") +
                t[0] +
                (this.useColors ? "%c " : " ") +
                "+" +
                e.exports.humanize(this.diff)),
              !this.useColors)
            )
              return;
            let r = "color: " + this.color;
            t.splice(1, 0, r, "color: inherit");
            let n = 0,
              s = 0;
            t[0].replace(/%[a-zA-Z%]/g, (e) => {
              "%%" !== e && (n++, "%c" === e && (s = n));
            }),
              t.splice(s, 0, r);
          }),
            (t.save = function (e) {
              try {
                e
                  ? t.storage.setItem("debug", e)
                  : t.storage.removeItem("debug");
              } catch {}
            }),
            (t.load = function () {
              let e;
              try {
                e = t.storage.getItem("debug");
              } catch {}
              return !e && "u" > typeof O && "env" in O && (e = O.env.DEBUG), e;
            }),
            (t.useColors = function () {
              let e;
              return (
                ("u" > typeof window &&
                  !!window.process &&
                  ("renderer" === window.process.type ||
                    !!window.process.__nwjs)) ||
                (!(
                  "u" > typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent
                    .toLowerCase()
                    .match(/(edge|trident)\/(\d+)/)
                ) &&
                  (("u" > typeof document &&
                    document.documentElement &&
                    document.documentElement.style &&
                    document.documentElement.style.WebkitAppearance) ||
                    ("u" > typeof window &&
                      window.console &&
                      (window.console.firebug ||
                        (window.console.exception && window.console.table))) ||
                    ("u" > typeof navigator &&
                      navigator.userAgent &&
                      (e = navigator.userAgent
                        .toLowerCase()
                        .match(/firefox\/(\d+)/)) &&
                      parseInt(e[1], 10) >= 31) ||
                    ("u" > typeof navigator &&
                      navigator.userAgent &&
                      navigator.userAgent
                        .toLowerCase()
                        .match(/applewebkit\/(\d+)/))))
              );
            }),
            (t.storage = (function () {
              try {
                return localStorage;
              } catch {}
            })()),
            (t.destroy =
              ((r = !1),
              () => {
                r ||
                  ((r = !0),
                  console.warn(
                    "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                  ));
              })),
            (t.colors = [
              "#0000CC",
              "#0000FF",
              "#0033CC",
              "#0033FF",
              "#0066CC",
              "#0066FF",
              "#0099CC",
              "#0099FF",
              "#00CC00",
              "#00CC33",
              "#00CC66",
              "#00CC99",
              "#00CCCC",
              "#00CCFF",
              "#3300CC",
              "#3300FF",
              "#3333CC",
              "#3333FF",
              "#3366CC",
              "#3366FF",
              "#3399CC",
              "#3399FF",
              "#33CC00",
              "#33CC33",
              "#33CC66",
              "#33CC99",
              "#33CCCC",
              "#33CCFF",
              "#6600CC",
              "#6600FF",
              "#6633CC",
              "#6633FF",
              "#66CC00",
              "#66CC33",
              "#9900CC",
              "#9900FF",
              "#9933CC",
              "#9933FF",
              "#99CC00",
              "#99CC33",
              "#CC0000",
              "#CC0033",
              "#CC0066",
              "#CC0099",
              "#CC00CC",
              "#CC00FF",
              "#CC3300",
              "#CC3333",
              "#CC3366",
              "#CC3399",
              "#CC33CC",
              "#CC33FF",
              "#CC6600",
              "#CC6633",
              "#CC9900",
              "#CC9933",
              "#CCCC00",
              "#CCCC33",
              "#FF0000",
              "#FF0033",
              "#FF0066",
              "#FF0099",
              "#FF00CC",
              "#FF00FF",
              "#FF3300",
              "#FF3333",
              "#FF3366",
              "#FF3399",
              "#FF33CC",
              "#FF33FF",
              "#FF6600",
              "#FF6633",
              "#FF9900",
              "#FF9933",
              "#FFCC00",
              "#FFCC33",
            ]),
            (t.log = console.debug || console.log || (() => {})),
            (e.exports = (
              R
                ? q
                : ((R = 1),
                  (q = function (e) {
                    function t(e) {
                      let n,
                        s,
                        o,
                        i = null;
                      function a(...e) {
                        if (!a.enabled) return;
                        let r = Number(new Date()),
                          s = r - (n || r);
                        (a.diff = s),
                          (a.prev = n),
                          (a.curr = r),
                          (n = r),
                          (e[0] = t.coerce(e[0])),
                          "string" != typeof e[0] && e.unshift("%O");
                        let o = 0;
                        (e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, n) => {
                          if ("%%" === r) return "%";
                          o++;
                          let s = t.formatters[n];
                          if ("function" == typeof s) {
                            let t = e[o];
                            (r = s.call(a, t)), e.splice(o, 1), o--;
                          }
                          return r;
                        })),
                          t.formatArgs.call(a, e),
                          (a.log || t.log).apply(a, e);
                      }
                      return (
                        (a.namespace = e),
                        (a.useColors = t.useColors()),
                        (a.color = t.selectColor(e)),
                        (a.extend = r),
                        (a.destroy = t.destroy),
                        Object.defineProperty(a, "enabled", {
                          enumerable: !0,
                          configurable: !1,
                          get: () =>
                            null !== i
                              ? i
                              : (s !== t.namespaces &&
                                  ((s = t.namespaces), (o = t.enabled(e))),
                                o),
                          set: (e) => {
                            i = e;
                          },
                        }),
                        "function" == typeof t.init && t.init(a),
                        a
                      );
                    }
                    function r(e, r) {
                      let n = t(
                        this.namespace + (typeof r > "u" ? ":" : r) + e
                      );
                      return (n.log = this.log), n;
                    }
                    function n(e, t) {
                      let r = 0,
                        n = 0,
                        s = -1,
                        o = 0;
                      for (; r < e.length; )
                        if (n < t.length && (t[n] === e[r] || "*" === t[n]))
                          "*" === t[n] ? ((s = n), (o = r)) : r++, n++;
                        else {
                          if (-1 === s) return !1;
                          (n = s + 1), (r = ++o);
                        }
                      for (; n < t.length && "*" === t[n]; ) n++;
                      return n === t.length;
                    }
                    return (
                      (t.debug = t),
                      (t.default = t),
                      (t.coerce = function (e) {
                        return e instanceof Error ? e.stack || e.message : e;
                      }),
                      (t.disable = function () {
                        let e = [
                          ...t.names,
                          ...t.skips.map((e) => "-" + e),
                        ].join(",");
                        return t.enable(""), e;
                      }),
                      (t.enable = function (e) {
                        for (let r of (t.save(e),
                        (t.namespaces = e),
                        (t.names = []),
                        (t.skips = []),
                        ("string" == typeof e ? e : "")
                          .trim()
                          .replace(" ", ",")
                          .split(",")
                          .filter(Boolean)))
                          "-" === r[0]
                            ? t.skips.push(r.slice(1))
                            : t.names.push(r);
                      }),
                      (t.enabled = function (e) {
                        for (let r of t.skips) if (n(e, r)) return !1;
                        for (let r of t.names) if (n(e, r)) return !0;
                        return !1;
                      }),
                      (t.humanize = (function () {
                        if (E) return x;
                        function e(e, t, r, n) {
                          return (
                            Math.round(e / r) +
                            " " +
                            n +
                            (t >= 1.5 * r ? "s" : "")
                          );
                        }
                        return (
                          (E = 1),
                          (x = function (t, r) {
                            r = r || {};
                            var n,
                              s,
                              o = typeof t;
                            if ("string" === o && t.length > 0)
                              return (function (e) {
                                if (!((e = String(e)).length > 100)) {
                                  var t =
                                    /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                                      e
                                    );
                                  if (t) {
                                    var r = parseFloat(t[1]);
                                    switch ((t[2] || "ms").toLowerCase()) {
                                      case "years":
                                      case "year":
                                      case "yrs":
                                      case "yr":
                                      case "y":
                                        return 315576e5 * r;
                                      case "weeks":
                                      case "week":
                                      case "w":
                                        return 6048e5 * r;
                                      case "days":
                                      case "day":
                                      case "d":
                                        return 864e5 * r;
                                      case "hours":
                                      case "hour":
                                      case "hrs":
                                      case "hr":
                                      case "h":
                                        return 36e5 * r;
                                      case "minutes":
                                      case "minute":
                                      case "mins":
                                      case "min":
                                      case "m":
                                        return 6e4 * r;
                                      case "seconds":
                                      case "second":
                                      case "secs":
                                      case "sec":
                                      case "s":
                                        return 1e3 * r;
                                      case "milliseconds":
                                      case "millisecond":
                                      case "msecs":
                                      case "msec":
                                      case "ms":
                                        return r;
                                      default:
                                        return;
                                    }
                                  }
                                }
                              })(t);
                            if ("number" === o && isFinite(t))
                              return r.long
                                ? (s = Math.abs(t)) >= 864e5
                                  ? e(t, s, 864e5, "day")
                                  : s >= 36e5
                                  ? e(t, s, 36e5, "hour")
                                  : s >= 6e4
                                  ? e(t, s, 6e4, "minute")
                                  : s >= 1e3
                                  ? e(t, s, 1e3, "second")
                                  : t + " ms"
                                : (n = Math.abs(t)) >= 864e5
                                ? Math.round(t / 864e5) + "d"
                                : n >= 36e5
                                ? Math.round(t / 36e5) + "h"
                                : n >= 6e4
                                ? Math.round(t / 6e4) + "m"
                                : n >= 1e3
                                ? Math.round(t / 1e3) + "s"
                                : t + "ms";
                            throw Error(
                              "val is not a non-empty string or a valid number. val=" +
                                JSON.stringify(t)
                            );
                          })
                        );
                      })()),
                      (t.destroy = function () {
                        console.warn(
                          "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                        );
                      }),
                      Object.keys(e).forEach((r) => {
                        t[r] = e[r];
                      }),
                      (t.names = []),
                      (t.skips = []),
                      (t.formatters = {}),
                      (t.selectColor = function (e) {
                        let r = 0;
                        for (let t = 0; t < e.length; t++)
                          r = ((r << 5) - r + e.charCodeAt(t)) | 0;
                        return t.colors[Math.abs(r) % t.colors.length];
                      }),
                      t.enable(t.load()),
                      t
                    );
                  }))
            )(t));
          let { formatters: n } = e.exports;
          n.j = function (e) {
            try {
              return JSON.stringify(e);
            } catch (e) {
              return "[UnexpectedJSONParseError]: " + e.message;
            }
          };
        })(j, j.exports)),
        j.exports,
        Object.prototype.hasOwnProperty;
      let I = typeof S > "u" ? () => !1 : (e) => S.isBuffer(e);
      function k(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      let _ = ["boolean", "string", "number"],
        A = {};
      "u" > typeof globalThis
        ? (A = globalThis)
        : "u" > typeof window
        ? (A = window)
        : "u" > typeof global
        ? (A = global)
        : "u" > typeof self && (A = self);
      var P = A;
      let $ = (e = {}) => {
        let t = e.implementation || Promise;
        if (!t)
          throw Error(
            "`Promise` is not available in global scope, and no implementation was passed"
          );
        return {
          onReturn: (r, n) =>
            new t((t, s) => {
              let o = n.options.cancelToken;
              o &&
                o.promise.then((e) => {
                  r.abort.publish(e), s(e);
                }),
                r.error.subscribe(s),
                r.response.subscribe((r) => {
                  t(e.onlyBody ? r.body : r);
                }),
                setTimeout(() => {
                  try {
                    r.request.publish(n);
                  } catch (e) {
                    s(e);
                  }
                }, 0);
            }),
        };
      };
      class F {
        __CANCEL__ = !0;
        message;
        constructor(e) {
          this.message = e;
        }
        toString() {
          return "Cancel" + (this.message ? `: ${this.message}` : "");
        }
      }
      class D {
        promise;
        reason;
        constructor(e) {
          if ("function" != typeof e)
            throw TypeError("executor must be a function.");
          let t = null;
          (this.promise = new Promise((e) => {
            t = e;
          })),
            e((e) => {
              this.reason || ((this.reason = new F(e)), t(this.reason));
            });
        }
        static source = () => {
          let e;
          return {
            token: new D((t) => {
              e = t;
            }),
            cancel: e,
          };
        };
      }
      ($.Cancel = F),
        ($.CancelToken = D),
        ($.isCancel = (e) => !(!e || !e?.__CANCEL__));
      var U = (e, t, r) =>
        ("GET" === r.method || "HEAD" === r.method) && (e.isNetworkError || !1);
      function M(e) {
        return 100 * Math.pow(2, e) + 100 * Math.random();
      }
      let z = (e = {}) =>
        ((e) => {
          let t = e.maxRetries || 5,
            r = e.retryDelay || M,
            n = e.shouldRetry;
          return {
            onError: (e, s) => {
              var o;
              let i = s.options,
                a = i.maxRetries || t,
                u = i.retryDelay || r,
                c = i.shouldRetry || n,
                l = i.attemptNumber || 0;
              if (
                (null !== (o = i.body) &&
                  "object" == typeof o &&
                  "function" == typeof o.pipe) ||
                !c(e, l, i) ||
                l >= a
              )
                return e;
              let d = Object.assign({}, s, {
                options: Object.assign({}, i, { attemptNumber: l + 1 }),
              });
              return (
                setTimeout(() => s.channels.request.publish(d), u(l)), null
              );
            },
          };
        })({ shouldRetry: U, ...e });
      z.shouldRetry = U;
      var L = r(62166),
        N = r(28546),
        B = r(61716),
        H = r(67559),
        Z = r(30504);
      function X() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = (0, H.yG)(e);
        return (0, Z.D)(e, r);
      }
      var G = r(21368),
        J = (0, r(34448).d)(function (e) {
          return function () {
            e(this),
              (this.name = "EmptyError"),
              (this.message = "no elements in sequence");
          };
        });
      function W(e, t) {
        var r = "object" == typeof t;
        return new Promise(function (n, s) {
          var o,
            i = !1;
          e.subscribe({
            next: function (e) {
              (o = e), (i = !0);
            },
            error: s,
            complete: function () {
              i ? n(o) : r ? n(t.defaultValue) : s(new J());
            },
          });
        });
      }
      var V = r(9460),
        Y = r(95764),
        K = r(54797),
        Q = r(41694);
      function ee(e) {
        return (0, Q.e)(function (t, r) {
          var n,
            s = null,
            o = !1;
          (s = t.subscribe(
            (0, K.x)(r, void 0, void 0, function (i) {
              (n = (0, Y.Xf)(e(i, ee(e)(t)))),
                s ? (s.unsubscribe(), (s = null), n.subscribe(r)) : (o = !0);
            })
          )),
            o && (s.unsubscribe(), (s = null), n.subscribe(r));
        });
      }
      var et = r(31052);
      function er() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return (0, et.J)(1)((0, Z.D)(e, (0, H.yG)(e)));
      }
      var en = r(75738),
        es = new (r(43073).v)(en.o);
      function eo(e, t) {
        var r = (0, B.m)(e)
            ? e
            : function () {
                return e;
              },
          n = function (e) {
            return e.error(r());
          };
        return new L.y(
          t
            ? function (e) {
                return t.schedule(n, 0, e);
              }
            : n
        );
      }
      r(91727);
      var ei = r(79485);
      function ea(e) {
        return (0, Q.e)(function (t, r) {
          try {
            t.subscribe(r);
          } finally {
            r.add(e);
          }
        });
      }
      var eu = r(19869),
        ec = r(15517),
        el = r(32283),
        ed = r(32742),
        ef = r(5594),
        eh = r(26564);
      function ep(e, t, r) {
        e ? (0, eh.f)(r, e, t) : t();
      }
      var ey = Array.isArray,
        ev = r(68474),
        em = r(67297);
      function eg() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = (0, H.jO)(e);
        return r
          ? (0, em.z)(
              eg.apply(void 0, (0, ef.ev)([], (0, ef.CR)(e))),
              (0, ev.Z)(r)
            )
          : (0, Q.e)(function (t, r) {
              var n, s, o;
              ((n = (0, ef.ev)(
                [t],
                (0, ef.CR)(1 === e.length && ey(e[0]) ? e[0] : e)
              )),
              void 0 === o && (o = ei.y),
              function (e) {
                ep(
                  void 0,
                  function () {
                    for (
                      var t = n.length,
                        r = Array(t),
                        i = t,
                        a = t,
                        u = function (t) {
                          ep(
                            s,
                            function () {
                              var u = (0, Z.D)(n[t], s),
                                c = !1;
                              u.subscribe(
                                (0, K.x)(
                                  e,
                                  function (n) {
                                    (r[t] = n),
                                      !c && ((c = !0), a--),
                                      a || e.next(o(r.slice()));
                                  },
                                  function () {
                                    --i || e.complete();
                                  }
                                )
                              );
                            },
                            e
                          );
                        },
                        c = 0;
                      c < t;
                      c++
                    )
                      u(c);
                  },
                  e
                );
              })(r);
            });
      }
      var eb = r(18563),
        ew = r(26312);
      class eC extends Error {
        response;
        statusCode = 400;
        responseBody;
        details;
        constructor(e) {
          let t = eE(e);
          super(t.message), Object.assign(this, t);
        }
      }
      class ex extends Error {
        response;
        statusCode = 500;
        responseBody;
        details;
        constructor(e) {
          let t = eE(e);
          super(t.message), Object.assign(this, t);
        }
      }
      function eE(e) {
        let t = e.body,
          r = {
            response: e,
            statusCode: e.statusCode,
            responseBody:
              -1 !==
              (e.headers["content-type"] || "")
                .toLowerCase()
                .indexOf("application/json")
                ? JSON.stringify(t, null, 2)
                : t,
            message: "",
            details: void 0,
          };
        if (t.error && t.message)
          return (r.message = `${t.error} - ${t.message}`), r;
        if (
          (eq(t) &&
            eq(t.error) &&
            "mutationError" === t.error.type &&
            "string" == typeof t.error.description) ||
          (eq(t) &&
            eq(t.error) &&
            "actionError" === t.error.type &&
            "string" == typeof t.error.description)
        ) {
          let e = t.error.items || [],
            n = e
              .slice(0, 5)
              .map((e) => e.error?.description)
              .filter(Boolean),
            s = n.length
              ? `:
- ${n.join(`
- `)}`
              : "";
          return (
            e.length > 5 &&
              (s += `
...and ${e.length - 5} more`),
            (r.message = `${t.error.description}${s}`),
            (r.details = t.error),
            r
          );
        }
        return (
          t.error && t.error.description
            ? ((r.message = t.error.description), (r.details = t.error))
            : (r.message =
                t.error ||
                t.message ||
                (function (e) {
                  let t = e.statusMessage ? ` ${e.statusMessage}` : "";
                  return `${e.method}-request to ${e.url} resulted in HTTP ${e.statusCode}${t}`;
                })(e)),
          r
        );
      }
      function eq(e) {
        return "object" == typeof e && null !== e && !Array.isArray(e);
      }
      class eR extends Error {
        projectId;
        addOriginUrl;
        constructor({ projectId: e }) {
          super("CorsOriginError"),
            (this.name = "CorsOriginError"),
            (this.projectId = e);
          let t = new URL(`https://sanity.io/manage/project/${e}/api`);
          if ("u" > typeof location) {
            let { origin: e } = location;
            t.searchParams.set("cors", "add"),
              t.searchParams.set("origin", e),
              (this.addOriginUrl = t),
              (this.message = `The current origin is not allowed to connect to the Live Content API. Add it here: ${t}`);
          } else
            this.message = `The current origin is not allowed to connect to the Live Content API. Change your configuration here: ${t}`;
        }
      }
      let eT = {
        onResponse: (e) => {
          if (e.statusCode >= 500) throw new ex(e);
          if (e.statusCode >= 400) throw new eC(e);
          return e;
        },
      };
      function eO(e) {
        return C([
          z({ shouldRetry: eS }),
          ...e,
          (function () {
            let e = {};
            return {
              onResponse: (t) => {
                let r = t.headers["x-sanity-warning"];
                for (let t of Array.isArray(r) ? r : [r])
                  !t || e[t] || ((e[t] = !0), console.warn(t));
                return t;
              },
            };
          })(),
          {
            processOptions: (e) => {
              let t = e.body;
              return !t ||
                "function" == typeof t.pipe ||
                I(t) ||
                (-1 === _.indexOf(typeof t) &&
                  !Array.isArray(t) &&
                  !(function (e) {
                    if (!1 === k(e)) return !1;
                    let t = e.constructor;
                    if (void 0 === t) return !0;
                    let r = t.prototype;
                    return !(
                      !1 === k(r) || !1 === r.hasOwnProperty("isPrototypeOf")
                    );
                  })(t))
                ? e
                : Object.assign({}, e, {
                    body: JSON.stringify(e.body),
                    headers: Object.assign({}, e.headers, {
                      "Content-Type": "application/json",
                    }),
                  });
            },
          },
          {
            onResponse: (e) => {
              let t = e.headers["content-type"] || "",
                r = -1 !== t.indexOf("application/json");
              return e.body && t && r
                ? Object.assign({}, e, {
                    body: (function (e) {
                      try {
                        return JSON.parse(e);
                      } catch (e) {
                        throw (
                          ((e.message = `Failed to parsed response body as JSON: ${e.message}`),
                          e)
                        );
                      }
                    })(e.body),
                  })
                : e;
            },
            processOptions: (e) =>
              Object.assign({}, e, {
                headers: Object.assign(
                  { Accept: "application/json" },
                  e.headers
                ),
              }),
          },
          {
            onRequest: (e) => {
              if ("xhr" !== e.adapter) return;
              let t = e.request,
                r = e.context;
              function n(e) {
                return (t) => {
                  let n = t.lengthComputable ? (t.loaded / t.total) * 100 : -1;
                  r.channels.progress.publish({
                    stage: e,
                    percent: n,
                    total: t.total,
                    loaded: t.loaded,
                    lengthComputable: t.lengthComputable,
                  });
                };
              }
              "upload" in t &&
                "onprogress" in t.upload &&
                (t.upload.onprogress = n("upload")),
                "onprogress" in t && (t.onprogress = n("download"));
            },
          },
          eT,
          (function (e = {}) {
            let t = e.implementation || P.Observable;
            if (!t)
              throw Error(
                "`Observable` is not available in global scope, and no implementation was passed"
              );
            return {
              onReturn: (e, r) =>
                new t(
                  (t) => (
                    e.error.subscribe((e) => t.error(e)),
                    e.progress.subscribe((e) =>
                      t.next(Object.assign({ type: "progress" }, e))
                    ),
                    e.response.subscribe((e) => {
                      t.next(Object.assign({ type: "response" }, e)),
                        t.complete();
                    }),
                    e.request.publish(r),
                    () => e.abort.publish()
                  )
                ),
            };
          })({ implementation: L.y }),
        ]);
      }
      function eS(e, t, r) {
        if (0 === r.maxRetries) return !1;
        let n = "GET" === r.method || "HEAD" === r.method,
          s = (r.uri || r.url).startsWith("/data/query"),
          o =
            e.response &&
            (429 === e.response.statusCode ||
              502 === e.response.statusCode ||
              503 === e.response.statusCode);
        return ((!!n || !!s) && !!o) || z.shouldRetry(e, t, r);
      }
      function ej(e) {
        return "https://www.sanity.io/help/" + e;
      }
      let eI = ["image", "file"],
        ek = ["before", "after", "replace"],
        e_ = (e) => {
          if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(e))
            throw Error(
              "Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters"
            );
        },
        eA = (e) => {
          if (!/^[-a-z0-9]+$/i.test(e))
            throw Error(
              "`projectId` can only contain only a-z, 0-9 and dashes"
            );
        },
        eP = (e) => {
          if (-1 === eI.indexOf(e))
            throw Error(
              `Invalid asset type: ${e}. Must be one of ${eI.join(", ")}`
            );
        },
        e$ = (e, t) => {
          if (null === t || "object" != typeof t || Array.isArray(t))
            throw Error(`${e}() takes an object of properties`);
        },
        eF = (e, t) => {
          if (
            "string" != typeof t ||
            !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(t) ||
            t.includes("..")
          )
            throw Error(`${e}(): "${t}" is not a valid document ID`);
        },
        eD = (e, t) => {
          if (!t._id)
            throw Error(
              `${e}() requires that the document contains an ID ("_id" property)`
            );
          eF(e, t._id);
        },
        eU = (e, t, r) => {
          let n = "insert(at, selector, items)";
          if (-1 === ek.indexOf(e)) {
            let e = ek.map((e) => `"${e}"`).join(", ");
            throw Error(`${n} takes an "at"-argument which is one of: ${e}`);
          }
          if ("string" != typeof t)
            throw Error(
              `${n} takes a "selector"-argument which must be a string`
            );
          if (!Array.isArray(r))
            throw Error(
              `${n} takes an "items"-argument which must be an array`
            );
        },
        eM = (e) => {
          if (!e.dataset)
            throw Error("`dataset` must be provided to perform queries");
          return e.dataset || "";
        },
        ez = (e) => {
          if ("string" != typeof e || !/^[a-z0-9._-]{1,75}$/i.test(e))
            throw Error(
              "Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long."
            );
          return e;
        },
        eL = (e) => {
          var t;
          let r, n;
          return (
            (t = (...t) => console.warn(e.join(" "), ...t)),
            (r = !1),
            (...e) => (r || ((n = t(...e)), (r = !0)), n)
          );
        },
        eN = eL([
          "Because you set `withCredentials` to true, we will override your `useCdn`",
          "setting to be false since (cookie-based) credentials are never set on the CDN",
        ]),
        eB = eL([
          "Since you haven't set a value for `useCdn`, we will deliver content using our",
          "global, edge-cached API-CDN. If you wish to have content delivered faster, set",
          "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API.",
        ]),
        eH = eL([
          "The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.",
          "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning.",
        ]),
        eZ = eL([
          "The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version",
        ]),
        eX = eL([
          "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
          `See ${ej(
            "js-client-browser-token"
          )} for more information and how to hide this warning.`,
        ]),
        eG = eL([
          "Using the Sanity client without specifying an API version is deprecated.",
          `See ${ej("js-client-api-version")}`,
        ]),
        eJ =
          (eL([
            "The default export of @sanity/client has been deprecated. Use the named export `createClient` instead.",
          ]),
          {
            apiHost: "https://api.sanity.io",
            apiVersion: "1",
            useProjectHostname: !0,
            stega: { enabled: !1 },
          }),
        eW = ["localhost", "127.0.0.1", "0.0.0.0"],
        eV = (e) => -1 !== eW.indexOf(e),
        eY = /^[a-z0-9_]+$/i;
      function eK(e) {
        if (Array.isArray(e) && e.includes("raw"))
          throw TypeError(
            'Invalid API perspective value: "raw". The raw-perspective can not be combined with other perspectives'
          );
        let t = (Array.isArray(e) ? e : [e]).filter(
          (e) => "string" != typeof e || !eY.test(e)
        );
        if (t.length > 0) {
          let e = t.map((e) => JSON.stringify(e));
          throw TypeError(
            `Invalid API perspective value${
              1 === t.length ? "" : "s"
            }: ${e.join(
              ", "
            )}, expected \`published\`, \`drafts\`, \`raw\` or a release identifier string`
          );
        }
      }
      let eQ = (e, t) => {
        let r = {
          ...t,
          ...e,
          stega: {
            ...("boolean" == typeof t.stega
              ? { enabled: t.stega }
              : t.stega || eJ.stega),
            ...("boolean" == typeof e.stega
              ? { enabled: e.stega }
              : e.stega || {}),
          },
        };
        r.apiVersion || eG();
        let n = { ...eJ, ...r },
          s = n.useProjectHostname;
        if (typeof Promise > "u") {
          let e = ej("js-client-promise-polyfill");
          throw Error(
            `No native Promise-implementation found, polyfill needed - see ${e}`
          );
        }
        if (s && !n.projectId)
          throw Error("Configuration must contain `projectId`");
        if (
          ("u" > typeof n.perspective && eK(n.perspective),
          "encodeSourceMap" in n)
        )
          throw Error(
            "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?"
          );
        if ("encodeSourceMapAtPath" in n)
          throw Error(
            "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?"
          );
        if ("boolean" != typeof n.stega.enabled)
          throw Error(
            `stega.enabled must be a boolean, received ${n.stega.enabled}`
          );
        if (n.stega.enabled && void 0 === n.stega.studioUrl)
          throw Error(
            "stega.studioUrl must be defined when stega.enabled is true"
          );
        if (
          n.stega.enabled &&
          "string" != typeof n.stega.studioUrl &&
          "function" != typeof n.stega.studioUrl
        )
          throw Error(
            `stega.studioUrl must be a string or a function, received ${n.stega.studioUrl}`
          );
        let o =
            "u" > typeof window && window.location && window.location.hostname,
          i = o && eV(window.location.hostname);
        o && i && n.token && !0 !== n.ignoreBrowserTokenWarning
          ? eX()
          : typeof n.useCdn > "u" && eB(),
          s && eA(n.projectId),
          n.dataset && e_(n.dataset),
          "requestTagPrefix" in n &&
            (n.requestTagPrefix = n.requestTagPrefix
              ? ez(n.requestTagPrefix).replace(/\.+$/, "")
              : void 0),
          (n.apiVersion = `${n.apiVersion}`.replace(/^v/, "")),
          (n.isDefaultApi = n.apiHost === eJ.apiHost),
          !0 === n.useCdn && n.withCredentials && eN(),
          (n.useCdn = !1 !== n.useCdn && !n.withCredentials),
          (function (e) {
            if ("1" === e || "X" === e) return;
            let t = new Date(e);
            if (
              !(
                /^\d{4}-\d{2}-\d{2}$/.test(e) &&
                t instanceof Date &&
                t.getTime() > 0
              )
            )
              throw Error(
                "Invalid API version string, expected `1` or date in format `YYYY-MM-DD`"
              );
          })(n.apiVersion);
        let a = n.apiHost.split("://", 2),
          u = a[0],
          c = a[1],
          l = n.isDefaultApi ? "apicdn.sanity.io" : c;
        return (
          n.useProjectHostname
            ? ((n.url = `${u}://${n.projectId}.${c}/v${n.apiVersion}`),
              (n.cdnUrl = `${u}://${n.projectId}.${l}/v${n.apiVersion}`))
            : ((n.url = `${n.apiHost}/v${n.apiVersion}`), (n.cdnUrl = n.url)),
          n
        );
      };
      class e0 extends Error {
        name = "ConnectionFailedError";
      }
      class e1 extends Error {
        name = "DisconnectError";
        reason;
        constructor(e, t, r = {}) {
          super(e, r), (this.reason = t);
        }
      }
      class e3 extends Error {
        name = "ChannelError";
        data;
        constructor(e, t) {
          super(e), (this.data = t);
        }
      }
      class e6 extends Error {
        name = "MessageError";
        data;
        constructor(e, t, r = {}) {
          super(e, r), (this.data = t);
        }
      }
      class e9 extends Error {
        name = "MessageParseError";
      }
      let e5 = ["channelError", "disconnect"];
      function e4(e, t) {
        return (0, N.P)(() => {
          let t = e();
          return t &&
            (t instanceof L.y || ((0, B.m)(t.lift) && (0, B.m)(t.subscribe)))
            ? t
            : X(t);
        }).pipe(
          (0, G.z)(
            (e) =>
              new L.y((r) => {
                let n = t.includes("open"),
                  s = t.includes("reconnect");
                function o(t) {
                  if ("data" in t) {
                    let [e, n] = e7(t);
                    r.error(
                      e
                        ? new e9("Unable to parse EventSource error message", {
                            cause: n,
                          })
                        : new e6((n?.data).message, n)
                    );
                    return;
                  }
                  e.readyState === e.CLOSED
                    ? r.error(new e0("EventSource connection failed"))
                    : s && r.next({ type: "reconnect" });
                }
                function i() {
                  r.next({ type: "open" });
                }
                function a(e) {
                  let [t, n] = e7(e);
                  if (t) {
                    r.error(
                      new e9("Unable to parse EventSource message", {
                        cause: t,
                      })
                    );
                    return;
                  }
                  if ("channelError" === e.type) {
                    var s;
                    r.error(
                      new e3(
                        (s = n?.data).error
                          ? s.error.description
                            ? s.error.description
                            : "string" == typeof s.error
                            ? s.error
                            : JSON.stringify(s.error, null, 2)
                          : s.message || "Unknown listener error",
                        n.data
                      )
                    );
                    return;
                  }
                  if ("disconnect" === e.type) {
                    r.error(
                      new e1(
                        `Server disconnected client: ${
                          n.data?.reason || "unknown error"
                        }`
                      )
                    );
                    return;
                  }
                  r.next({
                    type: e.type,
                    id: e.lastEventId,
                    ...(n.data ? { data: n.data } : {}),
                  });
                }
                e.addEventListener("error", o),
                  n && e.addEventListener("open", i);
                let u = [...new Set([...e5, ...t])].filter(
                  (e) => "error" !== e && "open" !== e && "reconnect" !== e
                );
                return (
                  u.forEach((t) => e.addEventListener(t, a)),
                  () => {
                    e.removeEventListener("error", o),
                      n && e.removeEventListener("open", i),
                      u.forEach((t) => e.removeEventListener(t, a)),
                      e.close();
                  }
                );
              })
          )
        );
      }
      function e7(e) {
        try {
          let t = "string" == typeof e.data && JSON.parse(e.data);
          return [
            null,
            {
              type: e.type,
              id: e.lastEventId,
              ...(!(function (e) {
                for (let t in e) return !1;
                return !0;
              })(t)
                ? { data: t }
                : {}),
            },
          ];
        } catch (e) {
          return [e, null];
        }
      }
      function e2(e) {
        if ("string" == typeof e) return { id: e };
        if (Array.isArray(e))
          return { query: "*[_id in $ids]", params: { ids: e } };
        if (
          "object" == typeof e &&
          null !== e &&
          "query" in e &&
          "string" == typeof e.query
        )
          return "params" in e &&
            "object" == typeof e.params &&
            null !== e.params
            ? { query: e.query, params: e.params }
            : { query: e.query };
        let t = [
          "* Document ID (<docId>)",
          "* Array of document IDs",
          "* Object containing `query`",
        ].join(`
`);
        throw Error(`Unknown selection - must be one of:

${t}`);
      }
      class e8 {
        selection;
        operations;
        constructor(e, t = {}) {
          (this.selection = e), (this.operations = t);
        }
        set(e) {
          return this._assign("set", e);
        }
        setIfMissing(e) {
          return this._assign("setIfMissing", e);
        }
        diffMatchPatch(e) {
          return e$("diffMatchPatch", e), this._assign("diffMatchPatch", e);
        }
        unset(e) {
          if (!Array.isArray(e))
            throw Error(
              "unset(attrs) takes an array of attributes to unset, non-array given"
            );
          return (
            (this.operations = Object.assign({}, this.operations, {
              unset: e,
            })),
            this
          );
        }
        inc(e) {
          return this._assign("inc", e);
        }
        dec(e) {
          return this._assign("dec", e);
        }
        insert(e, t, r) {
          return eU(e, t, r), this._assign("insert", { [e]: t, items: r });
        }
        append(e, t) {
          return this.insert("after", `${e}[-1]`, t);
        }
        prepend(e, t) {
          return this.insert("before", `${e}[0]`, t);
        }
        splice(e, t, r, n) {
          let s = t < 0 ? t - 1 : t,
            o = typeof r > "u" || -1 === r ? -1 : Math.max(0, t + r),
            i = `${e}[${s}:${s < 0 && o >= 0 ? "" : o}]`;
          return this.insert("replace", i, n || []);
        }
        ifRevisionId(e) {
          return (this.operations.ifRevisionID = e), this;
        }
        serialize() {
          return { ...e2(this.selection), ...this.operations };
        }
        toJSON() {
          return this.serialize();
        }
        reset() {
          return (this.operations = {}), this;
        }
        _assign(e, t, r = !0) {
          return (
            e$(e, t),
            (this.operations = Object.assign({}, this.operations, {
              [e]: Object.assign({}, (r && this.operations[e]) || {}, t),
            })),
            this
          );
        }
        _set(e, t) {
          return this._assign(e, t, !1);
        }
      }
      class te extends e8 {
        #a;
        constructor(e, t, r) {
          super(e, t), (this.#a = r);
        }
        clone() {
          return new te(this.selection, { ...this.operations }, this.#a);
        }
        commit(e) {
          if (!this.#a)
            throw Error(
              "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
            );
          let t = Object.assign(
            {
              returnFirst: "string" == typeof this.selection,
              returnDocuments: !0,
            },
            e
          );
          return this.#a.mutate({ patch: this.serialize() }, t);
        }
      }
      class tt extends e8 {
        #a;
        constructor(e, t, r) {
          super(e, t), (this.#a = r);
        }
        clone() {
          return new tt(this.selection, { ...this.operations }, this.#a);
        }
        commit(e) {
          if (!this.#a)
            throw Error(
              "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
            );
          let t = Object.assign(
            {
              returnFirst: "string" == typeof this.selection,
              returnDocuments: !0,
            },
            e
          );
          return this.#a.mutate({ patch: this.serialize() }, t);
        }
      }
      let tr = { returnDocuments: !1 };
      class tn {
        operations;
        trxId;
        constructor(e = [], t) {
          (this.operations = e), (this.trxId = t);
        }
        create(e) {
          return e$("create", e), this._add({ create: e });
        }
        createIfNotExists(e) {
          let t = "createIfNotExists";
          return e$(t, e), eD(t, e), this._add({ [t]: e });
        }
        createOrReplace(e) {
          let t = "createOrReplace";
          return e$(t, e), eD(t, e), this._add({ [t]: e });
        }
        delete(e) {
          return eF("delete", e), this._add({ delete: { id: e } });
        }
        transactionId(e) {
          return e ? ((this.trxId = e), this) : this.trxId;
        }
        serialize() {
          return [...this.operations];
        }
        toJSON() {
          return this.serialize();
        }
        reset() {
          return (this.operations = []), this;
        }
        _add(e) {
          return this.operations.push(e), this;
        }
      }
      class ts extends tn {
        #a;
        constructor(e, t, r) {
          super(e, r), (this.#a = t);
        }
        clone() {
          return new ts([...this.operations], this.#a, this.trxId);
        }
        commit(e) {
          if (!this.#a)
            throw Error(
              "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
            );
          return this.#a.mutate(
            this.serialize(),
            Object.assign({ transactionId: this.trxId }, tr, e || {})
          );
        }
        patch(e, t) {
          let r = "function" == typeof t,
            n = "string" != typeof e && e instanceof tt,
            s = "object" == typeof e && ("query" in e || "id" in e);
          if (n) return this._add({ patch: e.serialize() });
          if (r) {
            let r = t(new tt(e, {}, this.#a));
            if (!(r instanceof tt))
              throw Error("function passed to `patch()` must return the patch");
            return this._add({ patch: r.serialize() });
          }
          if (s) {
            let r = new tt(e, t || {}, this.#a);
            return this._add({ patch: r.serialize() });
          }
          return this._add({ patch: { id: e, ...t } });
        }
      }
      class to extends tn {
        #a;
        constructor(e, t, r) {
          super(e, r), (this.#a = t);
        }
        clone() {
          return new to([...this.operations], this.#a, this.trxId);
        }
        commit(e) {
          if (!this.#a)
            throw Error(
              "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
            );
          return this.#a.mutate(
            this.serialize(),
            Object.assign({ transactionId: this.trxId }, tr, e || {})
          );
        }
        patch(e, t) {
          let r = "function" == typeof t;
          if ("string" != typeof e && e instanceof te)
            return this._add({ patch: e.serialize() });
          if (r) {
            let r = t(new te(e, {}, this.#a));
            if (!(r instanceof te))
              throw Error("function passed to `patch()` must return the patch");
            return this._add({ patch: r.serialize() });
          }
          return this._add({ patch: { id: e, ...t } });
        }
      }
      let ti = ({ query: e, params: t = {}, options: r = {} }) => {
          let n = new URLSearchParams(),
            { tag: s, includeMutations: o, returnQuery: i, ...a } = r;
          for (let [r, o] of (s && n.append("tag", s),
          n.append("query", e),
          Object.entries(t)))
            n.append(`$${r}`, JSON.stringify(o));
          for (let [e, t] of Object.entries(a)) t && n.append(e, `${t}`);
          return (
            !1 === i && n.append("returnQuery", "false"),
            !1 === o && n.append("includeMutations", "false"),
            `?${n}`
          );
        },
        ta = (e, t) => (!1 === e ? void 0 : typeof e > "u" ? t : e),
        tu = (e = {}) => ({
          dryRun: e.dryRun,
          returnIds: !0,
          returnDocuments: ta(e.returnDocuments, !0),
          visibility: e.visibility || "sync",
          autoGenerateArrayKeys: e.autoGenerateArrayKeys,
          skipCrossDatasetReferenceValidation:
            e.skipCrossDatasetReferenceValidation,
        }),
        tc = (e) => "response" === e.type,
        tl = (e) => e.body,
        td = (e, t) =>
          e.reduce((e, r) => ((e[t(r)] = r), e), Object.create(null));
      function tf(e, t, n, s, o = {}, i = {}) {
        let a =
            "stega" in i
              ? {
                  ...(n || {}),
                  ...("boolean" == typeof i.stega
                    ? { enabled: i.stega }
                    : i.stega || {}),
                }
              : n,
          u = a.enabled ? (0, ed.N)(o) : o,
          c = !1 === i.filterResponse ? (e) => e : (e) => e.result,
          {
            cache: l,
            next: d,
            ...f
          } = {
            useAbortSignal: "u" > typeof i.signal,
            resultSourceMap: a.enabled
              ? "withKeyArraySelector"
              : i.resultSourceMap,
            ...i,
            returnQuery: !1 === i.filterResponse && !1 !== i.returnQuery,
          },
          h = tw(
            e,
            t,
            "query",
            { query: s, params: u },
            "u" > typeof l || "u" > typeof d
              ? { ...f, fetch: { cache: l, next: d } }
              : f
          );
        return a.enabled
          ? h.pipe(
              (function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                return eg.apply(void 0, (0, ef.ev)([], (0, ef.CR)(e)));
              })(
                (0, Z.D)(
                  r
                    .e(2306)
                    .then(r.bind(r, 92306))
                    .then(function (e) {
                      return e.stegaEncodeSourceMap$1;
                    })
                    .then(({ stegaEncodeSourceMap: e }) => e)
                )
              ),
              (0, eb.U)(([e, t]) => {
                let r = t(e.result, e.resultSourceMap, a);
                return c({ ...e, result: r });
              })
            )
          : h.pipe((0, eb.U)(c));
      }
      function th(e, t, r, n = {}) {
        let s = {
          uri: tq(e, "doc", r),
          json: !0,
          tag: n.tag,
          signal: n.signal,
        };
        return tx(e, t, s).pipe(
          (0, ew.h)(tc),
          (0, eb.U)((e) => e.body.documents && e.body.documents[0])
        );
      }
      function tp(e, t, r, n = {}) {
        let s = {
          uri: tq(e, "doc", r.join(",")),
          json: !0,
          tag: n.tag,
          signal: n.signal,
        };
        return tx(e, t, s).pipe(
          (0, ew.h)(tc),
          (0, eb.U)((e) => {
            let t = td(e.body.documents || [], (e) => e._id);
            return r.map((e) => t[e] || null);
          })
        );
      }
      function ty(e, t, r, n) {
        return eD("createIfNotExists", r), tC(e, t, r, "createIfNotExists", n);
      }
      function tv(e, t, r, n) {
        return eD("createOrReplace", r), tC(e, t, r, "createOrReplace", n);
      }
      function tm(e, t, r, n) {
        return tw(e, t, "mutate", { mutations: [{ delete: e2(r) }] }, n);
      }
      function tg(e, t, r, n) {
        let s;
        return tw(
          e,
          t,
          "mutate",
          {
            mutations: Array.isArray(
              (s =
                r instanceof tt || r instanceof te
                  ? { patch: r.serialize() }
                  : r instanceof ts || r instanceof to
                  ? r.serialize()
                  : r)
            )
              ? s
              : [s],
            transactionId: (n && n.transactionId) || void 0,
          },
          n
        );
      }
      function tb(e, t, r, n) {
        let s = Array.isArray(r) ? r : [r];
        return tw(
          e,
          t,
          "actions",
          {
            actions: s,
            transactionId: (n && n.transactionId) || void 0,
            skipCrossDatasetReferenceValidation:
              (n && n.skipCrossDatasetReferenceValidation) || void 0,
            dryRun: (n && n.dryRun) || void 0,
          },
          n
        );
      }
      function tw(e, t, r, n, s = {}) {
        let o = "mutate" === r,
          i = "actions" === r,
          a = o || i ? "" : ti(n),
          u = !o && !i && a.length < 11264,
          c = s.returnFirst,
          {
            timeout: l,
            token: d,
            tag: f,
            headers: h,
            returnQuery: p,
            lastLiveEventId: y,
            cacheMode: v,
          } = s,
          m = tq(e, r, u ? a : "");
        return tx(e, t, {
          method: u ? "GET" : "POST",
          uri: m,
          json: !0,
          body: u ? void 0 : n,
          query: o && tu(s),
          timeout: l,
          headers: h,
          token: d,
          tag: f,
          returnQuery: p,
          perspective: s.perspective,
          resultSourceMap: s.resultSourceMap,
          lastLiveEventId: Array.isArray(y) ? y[0] : y,
          cacheMode: v,
          canUseCdn: "query" === r,
          signal: s.signal,
          fetch: s.fetch,
          useAbortSignal: s.useAbortSignal,
          useCdn: s.useCdn,
        }).pipe(
          (0, ew.h)(tc),
          (0, eb.U)(tl),
          (0, eb.U)((e) => {
            if (!o) return e;
            let t = e.results || [];
            if (s.returnDocuments)
              return c ? t[0] && t[0].document : t.map((e) => e.document);
            let r = c ? t[0] && t[0].id : t.map((e) => e.id);
            return {
              transactionId: e.transactionId,
              results: t,
              [c ? "documentId" : "documentIds"]: r,
            };
          })
        );
      }
      function tC(e, t, r, n, s = {}) {
        return tw(
          e,
          t,
          "mutate",
          { mutations: [{ [n]: r }] },
          Object.assign({ returnFirst: !0, returnDocuments: !0 }, s)
        );
      }
      function tx(e, t, r) {
        var n;
        let s = r.url || r.uri,
          o = e.config(),
          i =
            typeof r.canUseCdn > "u"
              ? ["GET", "HEAD"].indexOf(r.method || "GET") >= 0 &&
                0 === s.indexOf("/data/")
              : r.canUseCdn,
          a = (r.useCdn ?? o.useCdn) && i,
          u =
            r.tag && o.requestTagPrefix
              ? [o.requestTagPrefix, r.tag].join(".")
              : r.tag || o.requestTagPrefix;
        if (
          (u && null !== r.tag && (r.query = { tag: ez(u), ...r.query }),
          ["GET", "HEAD", "POST"].indexOf(r.method || "GET") >= 0 &&
            0 === s.indexOf("/data/query/"))
        ) {
          let e = r.resultSourceMap ?? o.resultSourceMap;
          void 0 !== e &&
            !1 !== e &&
            (r.query = { resultSourceMap: e, ...r.query });
          let t = r.perspective || o.perspective;
          "u" > typeof t &&
            ("previewDrafts" === t && eZ(),
            eK(t),
            (r.query = {
              perspective: Array.isArray(t) ? t.join(",") : t,
              ...r.query,
            }),
            ((Array.isArray(t) && t.length > 0) ||
              "previewDrafts" === t ||
              "drafts" === t) &&
              a &&
              ((a = !1), eH())),
            r.lastLiveEventId &&
              (r.query = { ...r.query, lastLiveEventId: r.lastLiveEventId }),
            !1 === r.returnQuery &&
              (r.query = { returnQuery: "false", ...r.query }),
            a &&
              "noStale" == r.cacheMode &&
              (r.query = { cacheMode: "noStale", ...r.query });
        }
        let c = (function (e, t = {}) {
            let r = {},
              n = t.token || e.token;
            n && (r.Authorization = `Bearer ${n}`),
              t.useGlobalApi ||
                e.useProjectHostname ||
                !e.projectId ||
                (r["X-Sanity-Project-ID"] = e.projectId);
            let s = !!(typeof t.withCredentials > "u"
                ? e.token || e.withCredentials
                : t.withCredentials),
              o = typeof t.timeout > "u" ? e.timeout : t.timeout;
            return Object.assign({}, t, {
              headers: Object.assign({}, r, t.headers || {}),
              timeout: typeof o > "u" ? 3e5 : o,
              proxy: t.proxy || e.proxy,
              json: !0,
              withCredentials: s,
              fetch:
                "object" == typeof t.fetch && "object" == typeof e.fetch
                  ? { ...e.fetch, ...t.fetch }
                  : t.fetch || e.fetch,
            });
          })(o, Object.assign({}, r, { url: tR(e, s, a) })),
          l = new L.y((e) => t(c, o.requester).subscribe(e));
        return r.signal
          ? l.pipe(
              ((n = r.signal),
              (e) =>
                new L.y((t) => {
                  let r = () =>
                    t.error(
                      (function (e) {
                        if (tT)
                          return new DOMException(
                            e?.reason ?? "The operation was aborted.",
                            "AbortError"
                          );
                        let t = Error(
                          e?.reason ?? "The operation was aborted."
                        );
                        return (t.name = "AbortError"), t;
                      })(n)
                    );
                  if (n && n.aborted) {
                    r();
                    return;
                  }
                  let s = e.subscribe(t);
                  return (
                    n.addEventListener("abort", r),
                    () => {
                      n.removeEventListener("abort", r), s.unsubscribe();
                    }
                  );
                }))
            )
          : l;
      }
      function tE(e, t, r) {
        return tx(e, t, r).pipe(
          (0, ew.h)((e) => "response" === e.type),
          (0, eb.U)((e) => e.body)
        );
      }
      function tq(e, t, r) {
        let n = eM(e.config()),
          s = `/${t}/${n}`;
        return `/data${r ? `${s}/${r}` : s}`.replace(/\/($|\?)/, "$1");
      }
      function tR(e, t, r = !1) {
        let { url: n, cdnUrl: s } = e.config();
        return `${r ? s : n}/${t.replace(/^\//, "")}`;
      }
      let tT = !!globalThis.DOMException;
      class tO {
        #a;
        #u;
        constructor(e, t) {
          (this.#a = e), (this.#u = t);
        }
        upload(e, t, r) {
          return tj(this.#a, this.#u, e, t, r);
        }
      }
      class tS {
        #a;
        #u;
        constructor(e, t) {
          (this.#a = e), (this.#u = t);
        }
        upload(e, t, r) {
          return W(
            tj(this.#a, this.#u, e, t, r).pipe(
              (0, ew.h)((e) => "response" === e.type),
              (0, eb.U)((e) => e.body.document)
            )
          );
        }
      }
      function tj(e, t, r, n, s = {}) {
        eP(r);
        let o = s.extract || void 0;
        o && !o.length && (o = ["none"]);
        let i = eM(e.config()),
          a = "image" === r ? "images" : "files",
          u =
            !(typeof File > "u") && n instanceof File
              ? Object.assign(
                  {
                    filename: !1 === s.preserveFilename ? void 0 : n.name,
                    contentType: n.type,
                  },
                  s
                )
              : s,
          {
            tag: c,
            label: l,
            title: d,
            description: f,
            creditLine: h,
            filename: p,
            source: y,
          } = u,
          v = {
            label: l,
            title: d,
            description: f,
            filename: p,
            meta: o,
            creditLine: h,
          };
        return (
          y &&
            ((v.sourceId = y.id),
            (v.sourceName = y.name),
            (v.sourceUrl = y.url)),
          tx(e, t, {
            tag: c,
            method: "POST",
            timeout: u.timeout || 0,
            uri: `/assets/${a}/${i}`,
            headers: u.contentType ? { "Content-Type": u.contentType } : {},
            query: v,
            body: n,
          })
        );
      }
      var tI = (e, t) =>
        Object.keys(t)
          .concat(Object.keys(e))
          .reduce((r, n) => ((r[n] = typeof e[n] > "u" ? t[n] : e[n]), r), {});
      let tk = (e, t) =>
          t.reduce((t, r) => (typeof e[r] > "u" || (t[r] = e[r]), t), {}),
        t_ = (0, N.P)(() => r.e(7383).then(r.t.bind(r, 97383, 19))).pipe(
          (0, eb.U)(({ default: e }) => e),
          (0, V.d)(1)
        );
      function tA() {
        return function (e) {
          return e.pipe(
            ee((e, t) => {
              var r;
              return e instanceof e0
                ? er(
                    X({ type: "reconnect" }),
                    (void 0 === r && (r = es),
                    new L.y(function (e) {
                      var t = 1e3,
                        n = 0;
                      return r.schedule(function () {
                        e.closed || (e.next(n++), e.complete());
                      }, t);
                    })).pipe((0, G.z)(() => t))
                  )
                : eo(() => e);
            })
          );
        };
      }
      let tP = [
          "includePreviousRevision",
          "includeResult",
          "includeMutations",
          "includeAllVersions",
          "visibility",
          "effectFormat",
          "tag",
        ],
        t$ = { includeResult: !0 };
      function tF(e, t, r = {}) {
        let {
            url: n,
            token: s,
            withCredentials: o,
            requestTagPrefix: i,
          } = this.config(),
          a = r.tag && i ? [i, r.tag].join(".") : r.tag,
          u = { ...tI(r, t$), tag: a },
          c = ti({ query: e, params: t, options: { tag: a, ...tk(u, tP) } }),
          l = `${n}${tq(this, "listen", c)}`;
        if (l.length > 14800)
          return eo(() => Error("Query too large for listener"));
        let d = u.events ? u.events : ["mutation"],
          f = {};
        return (
          (s || o) && (f.withCredentials = !0),
          s && (f.headers = { Authorization: `Bearer ${s}` }),
          e4(
            () =>
              (typeof EventSource > "u" || f.headers
                ? t_
                : X(EventSource)
              ).pipe((0, eb.U)((e) => new e(l, f))),
            d
          ).pipe(
            tA(),
            (0, ew.h)((e) => d.includes(e.type)),
            (0, eb.U)((e) => ({ type: e.type, ...("data" in e ? e.data : {}) }))
          )
        );
      }
      let tD = "2021-03-25";
      class tU {
        #a;
        constructor(e) {
          this.#a = e;
        }
        events({ includeDrafts: e = !1, tag: t } = {}) {
          var r, n, s;
          let {
              projectId: o,
              apiVersion: i,
              token: a,
              withCredentials: u,
              requestTagPrefix: c,
            } = this.#a.config(),
            l = i.replace(/^v/, "");
          if ("X" !== l && l < tD)
            throw Error(
              `The live events API requires API version ${tD} or later. The current API version is ${l}. Please update your API version to use this feature.`
            );
          if (e && !a && !u)
            throw Error(
              "The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role."
            );
          let d = tq(this.#a, "live/events"),
            f = new URL(this.#a.getUrl(d, !1)),
            h = t && c ? [c, t].join(".") : t;
          h && f.searchParams.set("tag", h),
            e && f.searchParams.set("includeDrafts", "true");
          let p = {};
          e && a && (p.headers = { Authorization: `Bearer ${a}` }),
            e && u && (p.withCredentials = !0);
          let y = `${f.href}::${JSON.stringify(p)}`,
            v = tM.get(y);
          if (v) return v;
          let m = e4(
              () =>
                (typeof EventSource > "u" || p.headers
                  ? t_
                  : X(EventSource)
                ).pipe((0, eb.U)((e) => new e(f.href, p))),
              ["message", "restart", "welcome", "reconnect"]
            ).pipe(
              tA(),
              (0, eb.U)((e) => {
                if ("message" === e.type) {
                  let { data: t, ...r } = e;
                  return { ...r, tags: t.tags };
                }
                return e;
              })
            ),
            g = er(
              ((n = {
                method: "OPTIONS",
                mode: "cors",
                credentials: p.withCredentials ? "include" : "omit",
                headers: p.headers,
              }),
              new L.y((e) => {
                let t = new AbortController(),
                  r = t.signal;
                return (
                  fetch(f, { ...n, signal: t.signal }).then(
                    (t) => {
                      e.next(t), e.complete();
                    },
                    (t) => {
                      r.aborted || e.error(t);
                    }
                  ),
                  () => t.abort()
                );
              })).pipe(
                (0, G.z)(() => el.E),
                ee(() => {
                  throw new eR({ projectId: o });
                })
              ),
              m
            ).pipe(
              ea(() => tM.delete(y)),
              ((s =
                "function" ==
                typeof (r = { predicate: (e) => "welcome" === e.type })
                  ? { predicate: r }
                  : r),
              (e) => {
                var t, r, n, o;
                let i,
                  a = !1,
                  { predicate: u, ...c } = s,
                  l = e.pipe(
                    ((t = (e) => {
                      s.predicate(e) && ((a = !0), (i = e));
                    }),
                    (o = (0, B.m)(t) ? { next: t, error: r, complete: n } : t)
                      ? (0, Q.e)(function (e, t) {
                          null === (r = o.subscribe) ||
                            void 0 === r ||
                            r.call(o);
                          var r,
                            n = !0;
                          e.subscribe(
                            (0, K.x)(
                              t,
                              function (e) {
                                var r;
                                null === (r = o.next) ||
                                  void 0 === r ||
                                  r.call(o, e),
                                  t.next(e);
                              },
                              function () {
                                var e;
                                (n = !1),
                                  null === (e = o.complete) ||
                                    void 0 === e ||
                                    e.call(o),
                                  t.complete();
                              },
                              function (e) {
                                var r;
                                (n = !1),
                                  null === (r = o.error) ||
                                    void 0 === r ||
                                    r.call(o, e),
                                  t.error(e);
                              },
                              function () {
                                var e, t;
                                n &&
                                  (null === (e = o.unsubscribe) ||
                                    void 0 === e ||
                                    e.call(o)),
                                  null === (t = o.finalize) ||
                                    void 0 === t ||
                                    t.call(o);
                              }
                            )
                          );
                        })
                      : ei.y),
                    ea(() => {
                      (a = !1), (i = void 0);
                    }),
                    (0, eu.B)(c)
                  ),
                  d = new L.y((e) => {
                    a && e.next(i), e.complete();
                  });
                return (0, ec.T)(l, d);
              })
            );
          return tM.set(y, g), g;
        }
      }
      let tM = new Map();
      class tz {
        #a;
        #u;
        constructor(e, t) {
          (this.#a = e), (this.#u = t);
        }
        create(e, t) {
          return tN(this.#a, this.#u, "PUT", e, t);
        }
        edit(e, t) {
          return tN(this.#a, this.#u, "PATCH", e, t);
        }
        delete(e) {
          return tN(this.#a, this.#u, "DELETE", e);
        }
        list() {
          return tE(this.#a, this.#u, { uri: "/datasets", tag: null });
        }
      }
      class tL {
        #a;
        #u;
        constructor(e, t) {
          (this.#a = e), (this.#u = t);
        }
        create(e, t) {
          return W(tN(this.#a, this.#u, "PUT", e, t));
        }
        edit(e, t) {
          return W(tN(this.#a, this.#u, "PATCH", e, t));
        }
        delete(e) {
          return W(tN(this.#a, this.#u, "DELETE", e));
        }
        list() {
          return W(tE(this.#a, this.#u, { uri: "/datasets", tag: null }));
        }
      }
      function tN(e, t, r, n, s) {
        return (
          e_(n),
          tE(e, t, { method: r, uri: `/datasets/${n}`, body: s, tag: null })
        );
      }
      class tB {
        #a;
        #u;
        constructor(e, t) {
          (this.#a = e), (this.#u = t);
        }
        list(e) {
          let t =
            e?.includeMembers === !1
              ? "/projects?includeMembers=false"
              : "/projects";
          return tE(this.#a, this.#u, { uri: t });
        }
        getById(e) {
          return tE(this.#a, this.#u, { uri: `/projects/${e}` });
        }
      }
      class tH {
        #a;
        #u;
        constructor(e, t) {
          (this.#a = e), (this.#u = t);
        }
        list(e) {
          let t =
            e?.includeMembers === !1
              ? "/projects?includeMembers=false"
              : "/projects";
          return W(tE(this.#a, this.#u, { uri: t }));
        }
        getById(e) {
          return W(tE(this.#a, this.#u, { uri: `/projects/${e}` }));
        }
      }
      class tZ {
        #a;
        #u;
        constructor(e, t) {
          (this.#a = e), (this.#u = t);
        }
        getById(e) {
          return tE(this.#a, this.#u, { uri: `/users/${e}` });
        }
      }
      class tX {
        #a;
        #u;
        constructor(e, t) {
          (this.#a = e), (this.#u = t);
        }
        getById(e) {
          return W(tE(this.#a, this.#u, { uri: `/users/${e}` }));
        }
      }
      class tG {
        assets;
        datasets;
        live;
        projects;
        users;
        #c;
        #u;
        listen = tF;
        constructor(e, t = eJ) {
          this.config(t),
            (this.#u = e),
            (this.assets = new tO(this, this.#u)),
            (this.datasets = new tz(this, this.#u)),
            (this.live = new tU(this)),
            (this.projects = new tB(this, this.#u)),
            (this.users = new tZ(this, this.#u));
        }
        clone() {
          return new tG(this.#u, this.config());
        }
        config(e) {
          if (void 0 === e) return { ...this.#c };
          if (this.#c && !1 === this.#c.allowReconfigure)
            throw Error(
              "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
            );
          return (this.#c = eQ(e, this.#c || {})), this;
        }
        withConfig(e) {
          let t = this.config();
          return new tG(this.#u, {
            ...t,
            ...e,
            stega: {
              ...(t.stega || {}),
              ...("boolean" == typeof e?.stega
                ? { enabled: e.stega }
                : e?.stega || {}),
            },
          });
        }
        fetch(e, t, r) {
          return tf(this, this.#u, this.#c.stega, e, t, r);
        }
        getDocument(e, t) {
          return th(this, this.#u, e, t);
        }
        getDocuments(e, t) {
          return tp(this, this.#u, e, t);
        }
        create(e, t) {
          return tC(this, this.#u, e, "create", t);
        }
        createIfNotExists(e, t) {
          return ty(this, this.#u, e, t);
        }
        createOrReplace(e, t) {
          return tv(this, this.#u, e, t);
        }
        delete(e, t) {
          return tm(this, this.#u, e, t);
        }
        mutate(e, t) {
          return tg(this, this.#u, e, t);
        }
        patch(e, t) {
          return new te(e, t, this);
        }
        transaction(e) {
          return new to(e, this);
        }
        action(e, t) {
          return tb(this, this.#u, e, t);
        }
        request(e) {
          return tE(this, this.#u, e);
        }
        getUrl(e, t) {
          return tR(this, e, t);
        }
        getDataUrl(e, t) {
          return tq(this, e, t);
        }
      }
      class tJ {
        assets;
        datasets;
        live;
        projects;
        users;
        observable;
        #c;
        #u;
        listen = tF;
        constructor(e, t = eJ) {
          this.config(t),
            (this.#u = e),
            (this.assets = new tS(this, this.#u)),
            (this.datasets = new tL(this, this.#u)),
            (this.live = new tU(this)),
            (this.projects = new tH(this, this.#u)),
            (this.users = new tX(this, this.#u)),
            (this.observable = new tG(e, t));
        }
        clone() {
          return new tJ(this.#u, this.config());
        }
        config(e) {
          if (void 0 === e) return { ...this.#c };
          if (this.#c && !1 === this.#c.allowReconfigure)
            throw Error(
              "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
            );
          return (
            this.observable && this.observable.config(e),
            (this.#c = eQ(e, this.#c || {})),
            this
          );
        }
        withConfig(e) {
          let t = this.config();
          return new tJ(this.#u, {
            ...t,
            ...e,
            stega: {
              ...(t.stega || {}),
              ...("boolean" == typeof e?.stega
                ? { enabled: e.stega }
                : e?.stega || {}),
            },
          });
        }
        fetch(e, t, r) {
          return W(tf(this, this.#u, this.#c.stega, e, t, r));
        }
        getDocument(e, t) {
          return W(th(this, this.#u, e, t));
        }
        getDocuments(e, t) {
          return W(tp(this, this.#u, e, t));
        }
        create(e, t) {
          return W(tC(this, this.#u, e, "create", t));
        }
        createIfNotExists(e, t) {
          return W(ty(this, this.#u, e, t));
        }
        createOrReplace(e, t) {
          return W(tv(this, this.#u, e, t));
        }
        delete(e, t) {
          return W(tm(this, this.#u, e, t));
        }
        mutate(e, t) {
          return W(tg(this, this.#u, e, t));
        }
        patch(e, t) {
          return new tt(e, t, this);
        }
        transaction(e) {
          return new ts(e, this);
        }
        action(e, t) {
          return W(tb(this, this.#u, e, t));
        }
        request(e) {
          return W(tE(this, this.#u, e));
        }
        dataRequest(e, t, r) {
          return W(tw(this, this.#u, e, t, r));
        }
        getUrl(e, t) {
          return tR(this, e, t);
        }
        getDataUrl(e, t) {
          return tq(this, e, t);
        }
      }
      let tW = {
          requester: eO((n = [])),
          createClient: (e) => {
            let t = eO(n);
            return new tJ(
              (r, n) =>
                (n || t)({
                  maxRedirects: 0,
                  maxRetries: e.maxRetries,
                  retryDelay: e.retryDelay,
                  ...r,
                }),
              e
            );
          },
        },
        tV = (tW.requester, tW.createClient);
      var tY = r(16552),
        tK = r(95609),
        tQ = r(89779),
        t0 = r(39777),
        t1 = r(83112),
        t3 = r(20199),
        t6 = r(93244);
      let t9 = (0, tQ.default)(() => r.e(6375).then(r.bind(r, 56375)), {
          loadableGenerated: {
            webpack: () => [
              require.resolveWeak("../_chunks-es/PresentationComlink.js"),
            ],
          },
          ssr: !1,
        }),
        t5 = (0, tQ.default)(() => r.e(4235).then(r.bind(r, 14235)), {
          loadableGenerated: {
            webpack: () => [
              require.resolveWeak("../_chunks-es/RefreshOnMount.js"),
            ],
          },
          ssr: !1,
        }),
        t4 = (0, tQ.default)(() => r.e(5080).then(r.bind(r, 25080)), {
          loadableGenerated: {
            webpack: () => [
              require.resolveWeak("../_chunks-es/RefreshOnFocus.js"),
            ],
          },
          ssr: !1,
        }),
        t7 = (0, tQ.default)(() => r.e(4910).then(r.bind(r, 84910)), {
          loadableGenerated: {
            webpack: () => [
              require.resolveWeak("../_chunks-es/RefreshOnReconnect.js"),
            ],
          },
          ssr: !1,
        }),
        t2 = (e) => {
          var t;
          e instanceof eR
            ? console.warn(
                "Sanity Live is unable to connect to the Sanity API as the current origin - ".concat(
                  window.origin,
                  " - is not in the list of allowed CORS origins for this Sanity Project."
                ),
                e.addOriginUrl && "Add it here:",
                null === (t = e.addOriginUrl) || void 0 === t
                  ? void 0
                  : t.toString()
              )
            : console.error(e);
        };
      function t8(e) {
        let {
            projectId: t,
            dataset: r,
            apiHost: n,
            apiVersion: o,
            useProjectHostname: i,
            token: a,
            requestTagPrefix: u,
            draftModeEnabled: c,
            draftModePerspective: l,
            refreshOnMount: d = !1,
            refreshOnFocus: f = !c &&
              (typeof window > "u" || window.self === window.top),
            refreshOnReconnect: h = !0,
            requestTag: p = "next-loader.live",
            onError: y = t2,
          } = e,
          v = (0, t1.useMemo)(
            () =>
              tV({
                projectId: t,
                dataset: r,
                apiHost: n,
                apiVersion: o,
                useProjectHostname: i,
                ignoreBrowserTokenWarning: !0,
                token: a,
                useCdn: !1,
                requestTagPrefix: u,
              }),
            [n, o, r, t, u, a, i]
          ),
          m = (0, t0.useRouter)(),
          g = (0, t3.i)((e) => {
            "message" === e.type
              ? (0, tY.n)(e.tags)
              : ("restart" === e.type || "reconnect" === e.type) && m.refresh();
          });
        (0, t1.useEffect)(() => {
          let e = v.live.events({ includeDrafts: !!a, tag: p }).subscribe({
            next: g,
            error: (e) => {
              y(e);
            },
          });
          return () => e.unsubscribe();
        }, [v.live, y, p, a]),
          (0, t1.useEffect)(() => {
            c && l ? (0, t6.Bk)(l) : (0, t6.Bk)("unknown");
          }, [c, l]);
        let [b, w] = (0, t1.useState)(!1);
        (0, t1.useEffect)(() => {
          if (!(0, tK.Ig)()) {
            if (c && a) {
              (0, t6.Uw)("live");
              return;
            }
            if (c) {
              (0, t6.Uw)("static");
              return;
            }
            (0, t6.Uw)("unknown");
          }
        }, [c, a]),
          (0, t1.useEffect)(() => {
            if (!(0, tK.Ig)()) return;
            let e = new AbortController(),
              t = setTimeout(() => (0, t6.Uw)("live"), 3e3);
            return (
              window.addEventListener(
                "message",
                (r) => {
                  let { data: n } = r;
                  n &&
                    "object" == typeof n &&
                    "domain" in n &&
                    "sanity/channels" === n.domain &&
                    "from" in n &&
                    "presentation" === n.from &&
                    (clearTimeout(t),
                    (0, t6.Uw)(
                      (0, tK.Ax)()
                        ? "presentation-window"
                        : "presentation-iframe"
                    ),
                    w(!0),
                    e.abort());
                },
                { signal: e.signal }
              ),
              () => {
                clearTimeout(t), e.abort();
              }
            );
          }, []);
        let C = (0, t1.useRef)(void 0);
        return (
          (0, t1.useEffect)(() => {
            if (c)
              return (
                clearTimeout(C.current),
                () => {
                  C.current = setTimeout(() => {
                    console.warn(
                      "Sanity Live: Draft mode was enabled, but is now being disabled"
                    );
                  });
                }
              );
          }, [c]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              c &&
                b &&
                (0, s.jsx)(t9, {
                  draftModeEnabled: c,
                  draftModePerspective: l,
                }),
              !c && d && (0, s.jsx)(t5, {}),
              !c && f && (0, s.jsx)(t4, {}),
              !c && h && (0, s.jsx)(t7, {}),
            ],
          })
        );
      }
      t8.displayName = "SanityLive";
    },
    16552: function (e, t, r) {
      r.d(t, {
        N: function () {
          return s;
        },
        n: function () {
          return o;
        },
      }),
        r(26036);
      var n = r(50730),
        s = (0, n.$)("aea959f4ef0f9e9b6191ac5aab4c311131e26183"),
        o = (0, n.$)("ece3325ebea751fe11b4d400b395b7339630500a");
    },
    95609: function (e, t, r) {
      r.d(t, {
        Ax: function () {
          return l;
        },
        Ig: function () {
          return d;
        },
        XP: function () {
          return c;
        },
      });
      var n = r(52501);
      let s = {
          "handshake/syn": n.bK,
          "handshake/syn-ack": n.Ol,
          "handshake/ack": n.ei,
          "channel/response": n.Ag,
          "channel/heartbeat": n.UE,
          "channel/disconnect": n.Hq,
          "overlay/focus": "visual-editing/focus",
          "overlay/navigate": "visual-editing/navigate",
          "overlay/toggle": "visual-editing/toggle",
          "presentation/toggleOverlay": "presentation/toggle-overlay",
        },
        o = {
          [n.bK]: "handshake/syn",
          [n.Ol]: "handshake/syn-ack",
          [n.ei]: "handshake/ack",
          [n.Ag]: "channel/response",
          [n.UE]: "channel/heartbeat",
          [n.Hq]: "channel/disconnect",
          "visual-editing/focus": "overlay/focus",
          "visual-editing/navigate": "overlay/navigate",
          "visual-editing/toggle": "overlay/toggle",
          "presentation/toggle-overlay": "presentation/toggleOverlay",
        },
        i = (e) => {
          let { data: t } = e;
          return (
            t &&
              "object" == typeof t &&
              "domain" in t &&
              "type" in t &&
              "from" in t &&
              "to" in t &&
              ("sanity/channels" === t.domain && (t.domain = n.yK),
              "overlays" === t.to && (t.to = "visual-editing"),
              "overlays" === t.from && (t.from = "visual-editing"),
              (t.channelId = t.connectionId),
              delete t.connectionId,
              (t.type = s[t.type] ?? t.type)),
            e
          );
        },
        a = (e) => {
          let { channelId: t, ...r } = e,
            s = { ...r, connectionId: t };
          return (
            s.domain === n.yK && (s.domain = "sanity/channels"),
            "visual-editing" === s.to && (s.to = "overlays"),
            "visual-editing" === s.from && (s.from = "overlays"),
            (s.type = o[s.type] ?? s.type),
            "channel/response" === s.type &&
              s.responseTo &&
              !s.data &&
              (s.data = { responseTo: s.responseTo }),
            ("handshake/syn" === s.type ||
              "handshake/syn-ack" === s.type ||
              "handshake/ack" === s.type) &&
              (s.data = { id: s.connectionId }),
            s
          );
        },
        u = ({ context: e }, t) => {
          let { sources: r, targetOrigin: n } = e,
            s = a(t.message);
          r.forEach((e) => {
            e.postMessage(s, { targetOrigin: n });
          });
        },
        c = () => ({
          listen: (0, n.F8)(i),
          requestMachine: (0, n.lB)().provide({
            actions: { "send message": u },
          }),
        });
      function l() {
        return !!window.opener;
      }
      function d() {
        return window.self !== window.top || l();
      }
    },
    69437: function (e, t, r) {
      r.d(t, {
        default: function () {
          return i;
        },
      });
      var n = r(20209),
        s = r(83112);
      let o = (0, s.lazy)(() =>
        Promise.all([r.e(134), r.e(188), r.e(2823), r.e(5676), r.e(6562)]).then(
          r.bind(r, 90537)
        )
      );
      function i(e) {
        return (0, n.jsx)(s.Suspense, {
          fallback: null,
          children: (0, n.jsx)(o, { ...e }),
        });
      }
    },
  },
]);
