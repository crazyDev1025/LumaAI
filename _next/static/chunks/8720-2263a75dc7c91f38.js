"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8720],
  {
    81333: function (n, e, t) {
      t.d(e, {
        Ry: function () {
          return d;
        },
        cJ: function () {
          return s;
        },
      });
      var r = function (n) {
          return "undefined" == typeof document
            ? null
            : (Array.isArray(n) ? n[0] : n).ownerDocument.body;
        },
        o = new WeakMap(),
        a = new WeakMap(),
        i = {},
        c = 0,
        u = function (n) {
          return n && (n.host || u(n.parentNode));
        },
        l = function (n, e, t, r) {
          var l = (Array.isArray(n) ? n : [n])
            .map(function (n) {
              if (e.contains(n)) return n;
              var t = u(n);
              return t && e.contains(t)
                ? t
                : (console.error(
                    "aria-hidden",
                    n,
                    "in not contained inside",
                    e,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (n) {
              return !!n;
            });
          i[t] || (i[t] = new WeakMap());
          var d = i[t],
            f = [],
            s = new Set(),
            h = new Set(l),
            v = function (n) {
              !n || s.has(n) || (s.add(n), v(n.parentNode));
            };
          l.forEach(v);
          var p = function (n) {
            !n ||
              h.has(n) ||
              Array.prototype.forEach.call(n.children, function (n) {
                if (s.has(n)) p(n);
                else
                  try {
                    var e = n.getAttribute(r),
                      i = null !== e && "false" !== e,
                      c = (o.get(n) || 0) + 1,
                      u = (d.get(n) || 0) + 1;
                    o.set(n, c),
                      d.set(n, u),
                      f.push(n),
                      1 === c && i && a.set(n, !0),
                      1 === u && n.setAttribute(t, "true"),
                      i || n.setAttribute(r, "true");
                  } catch (e) {
                    console.error("aria-hidden: cannot operate on ", n, e);
                  }
              });
          };
          return (
            p(e),
            s.clear(),
            c++,
            function () {
              f.forEach(function (n) {
                var e = o.get(n) - 1,
                  i = d.get(n) - 1;
                o.set(n, e),
                  d.set(n, i),
                  e || (a.has(n) || n.removeAttribute(r), a.delete(n)),
                  i || n.removeAttribute(t);
              }),
                --c ||
                  ((o = new WeakMap()),
                  (o = new WeakMap()),
                  (a = new WeakMap()),
                  (i = {}));
            }
          );
        },
        d = function (n, e, t) {
          void 0 === t && (t = "data-aria-hidden");
          var o = Array.from(Array.isArray(n) ? n : [n]),
            a = e || r(n);
          return a
            ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live]"))),
              l(o, a, t, "aria-hidden"))
            : function () {
                return null;
              };
        },
        f = function (n, e, t) {
          void 0 === t && (t = "data-inert-ed");
          var o = e || r(n);
          return o
            ? l(n, o, t, "inert")
            : function () {
                return null;
              };
        },
        s = function (n, e, t) {
          return (
            void 0 === t && (t = "data-suppressed"),
            ("undefined" != typeof HTMLElement &&
              HTMLElement.prototype.hasOwnProperty("inert")
              ? f
              : d)(n, e, t)
          );
        };
    },
    33451: function (n, e, t) {
      t.d(e, {
        V: function () {
          return o;
        },
      });
      var r,
        o = function () {
          return r || t.nc;
        };
    },
    8777: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return D;
        },
      });
      var r,
        o = t(5594),
        a = t(83112),
        i = "right-scroll-bar-position",
        c = "width-before-scroll-bar",
        u = t(89002),
        l = (0, t(50590)._)(),
        d = function () {},
        f = a.forwardRef(function (n, e) {
          var t = a.useRef(null),
            r = a.useState({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: d,
            }),
            i = r[0],
            c = r[1],
            f = n.forwardProps,
            s = n.children,
            h = n.className,
            v = n.removeScrollBar,
            p = n.enabled,
            m = n.shards,
            g = n.sideCar,
            w = n.noIsolation,
            y = n.inert,
            b = n.allowPinchZoom,
            E = n.as,
            S = n.gapMode,
            k = (0, o._T)(n, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            C = (0, u.q)([t, e]),
            M = (0, o.pi)((0, o.pi)({}, k), i);
          return a.createElement(
            a.Fragment,
            null,
            p &&
              a.createElement(g, {
                sideCar: l,
                removeScrollBar: v,
                shards: m,
                noIsolation: w,
                inert: y,
                setCallbacks: c,
                allowPinchZoom: !!b,
                lockRef: t,
                gapMode: S,
              }),
            f
              ? a.cloneElement(
                  a.Children.only(s),
                  (0, o.pi)((0, o.pi)({}, M), { ref: C })
                )
              : a.createElement(
                  void 0 === E ? "div" : E,
                  (0, o.pi)({}, M, { className: h, ref: C }),
                  s
                )
          );
        });
      (f.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (f.classNames = { fullWidth: c, zeroRight: i });
      var s = function (n) {
        var e = n.sideCar,
          t = (0, o._T)(n, ["sideCar"]);
        if (!e)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car"
          );
        var r = e.read();
        if (!r) throw Error("Sidecar medium not found");
        return a.createElement(r, (0, o.pi)({}, t));
      };
      s.isSideCarExport = !0;
      var h = t(63057),
        v = { left: 0, top: 0, right: 0, gap: 0 },
        p = function (n) {
          return parseInt(n || "", 10) || 0;
        },
        m = function (n) {
          var e = window.getComputedStyle(document.body),
            t = e["padding" === n ? "paddingLeft" : "marginLeft"],
            r = e["padding" === n ? "paddingTop" : "marginTop"],
            o = e["padding" === n ? "paddingRight" : "marginRight"];
          return [p(t), p(r), p(o)];
        },
        g = function (n) {
          if ((void 0 === n && (n = "margin"), "undefined" == typeof window))
            return v;
          var e = m(n),
            t = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: e[0],
            top: e[1],
            right: e[2],
            gap: Math.max(0, r - t + e[2] - e[0]),
          };
        },
        w = (0, h.Ws)(),
        y = "data-scroll-locked",
        b = function (n, e, t, r) {
          var o = n.left,
            a = n.top,
            u = n.right,
            l = n.gap;
          return (
            void 0 === t && (t = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(y, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  e && "position: relative ".concat(r, ";"),
                  "margin" === t &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(
                        u,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(l, "px ")
                      .concat(r, ";\n    "),
                  "padding" === t &&
                    "padding-right: ".concat(l, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(i, " {\n    right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(c, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(i, " .")
              .concat(i, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(c, " .")
              .concat(c, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(y, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        E = function () {
          var n = parseInt(document.body.getAttribute(y) || "0", 10);
          return isFinite(n) ? n : 0;
        },
        S = function () {
          a.useEffect(function () {
            return (
              document.body.setAttribute(y, (E() + 1).toString()),
              function () {
                var n = E() - 1;
                n <= 0
                  ? document.body.removeAttribute(y)
                  : document.body.setAttribute(y, n.toString());
              }
            );
          }, []);
        },
        k = function (n) {
          var e = n.noRelative,
            t = n.noImportant,
            r = n.gapMode,
            o = void 0 === r ? "margin" : r;
          S();
          var i = a.useMemo(
            function () {
              return g(o);
            },
            [o]
          );
          return a.createElement(w, {
            styles: b(i, !e, o, t ? "" : "!important"),
          });
        },
        C = !1;
      if ("undefined" != typeof window)
        try {
          var M = Object.defineProperty({}, "passive", {
            get: function () {
              return (C = !0), !0;
            },
          });
          window.addEventListener("test", M, M),
            window.removeEventListener("test", M, M);
        } catch (n) {
          C = !1;
        }
      var A = !!C && { passive: !1 },
        R = function (n, e) {
          if (!(n instanceof Element)) return !1;
          var t = window.getComputedStyle(n);
          return (
            "hidden" !== t[e] &&
            !(
              t.overflowY === t.overflowX &&
              "TEXTAREA" !== n.tagName &&
              "visible" === t[e]
            )
          );
        },
        T = function (n, e) {
          var t = e.ownerDocument,
            r = e;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              L(n, r))
            ) {
              var o = N(n, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== t.body);
          return !1;
        },
        L = function (n, e) {
          return "v" === n ? R(e, "overflowY") : R(e, "overflowX");
        },
        N = function (n, e) {
          return "v" === n
            ? [e.scrollTop, e.scrollHeight, e.clientHeight]
            : [e.scrollLeft, e.scrollWidth, e.clientWidth];
        },
        W = function (n, e, t, r, o) {
          var a,
            i =
              ((a = window.getComputedStyle(e).direction),
              "h" === n && "rtl" === a ? -1 : 1),
            c = i * r,
            u = t.target,
            l = e.contains(u),
            d = !1,
            f = c > 0,
            s = 0,
            h = 0;
          do {
            var v = N(n, u),
              p = v[0],
              m = v[1] - v[2] - i * p;
            (p || m) && L(n, u) && ((s += m), (h += p)),
              u instanceof ShadowRoot ? (u = u.host) : (u = u.parentNode);
          } while (
            (!l && u !== document.body) ||
            (l && (e.contains(u) || e === u))
          );
          return (
            f && ((o && 1 > Math.abs(s)) || (!o && c > s))
              ? (d = !0)
              : !f && ((o && 1 > Math.abs(h)) || (!o && -c > h)) && (d = !0),
            d
          );
        },
        x = function (n) {
          return "changedTouches" in n
            ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY]
            : [0, 0];
        },
        P = function (n) {
          return [n.deltaX, n.deltaY];
        },
        B = function (n) {
          return n && "current" in n ? n.current : n;
        },
        _ = 0,
        I = [],
        X =
          ((r = function (n) {
            var e = a.useRef([]),
              t = a.useRef([0, 0]),
              r = a.useRef(),
              i = a.useState(_++)[0],
              c = a.useState(h.Ws)[0],
              u = a.useRef(n);
            a.useEffect(
              function () {
                u.current = n;
              },
              [n]
            ),
              a.useEffect(
                function () {
                  if (n.inert) {
                    document.body.classList.add(
                      "block-interactivity-".concat(i)
                    );
                    var e = (0, o.ev)(
                      [n.lockRef.current],
                      (n.shards || []).map(B),
                      !0
                    ).filter(Boolean);
                    return (
                      e.forEach(function (n) {
                        return n.classList.add(
                          "allow-interactivity-".concat(i)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          "block-interactivity-".concat(i)
                        ),
                          e.forEach(function (n) {
                            return n.classList.remove(
                              "allow-interactivity-".concat(i)
                            );
                          });
                      }
                    );
                  }
                },
                [n.inert, n.lockRef.current, n.shards]
              );
            var l = a.useCallback(function (n, e) {
                if (
                  ("touches" in n && 2 === n.touches.length) ||
                  ("wheel" === n.type && n.ctrlKey)
                )
                  return !u.current.allowPinchZoom;
                var o,
                  a = x(n),
                  i = t.current,
                  c = "deltaX" in n ? n.deltaX : i[0] - a[0],
                  l = "deltaY" in n ? n.deltaY : i[1] - a[1],
                  d = n.target,
                  f = Math.abs(c) > Math.abs(l) ? "h" : "v";
                if ("touches" in n && "h" === f && "range" === d.type)
                  return !1;
                var s = T(f, d);
                if (!s) return !0;
                if (
                  (s ? (o = f) : ((o = "v" === f ? "h" : "v"), (s = T(f, d))),
                  !s)
                )
                  return !1;
                if (
                  (!r.current &&
                    "changedTouches" in n &&
                    (c || l) &&
                    (r.current = o),
                  !o)
                )
                  return !0;
                var h = r.current || o;
                return W(h, e, n, "h" === h ? c : l, !0);
              }, []),
              d = a.useCallback(function (n) {
                if (I.length && I[I.length - 1] === c) {
                  var t = "deltaY" in n ? P(n) : x(n),
                    r = e.current.filter(function (e) {
                      var r;
                      return (
                        e.name === n.type &&
                        (e.target === n.target ||
                          n.target === e.shadowParent) &&
                        (r = e.delta)[0] === t[0] &&
                        r[1] === t[1]
                      );
                    })[0];
                  if (r && r.should) {
                    n.cancelable && n.preventDefault();
                    return;
                  }
                  if (!r) {
                    var o = (u.current.shards || [])
                      .map(B)
                      .filter(Boolean)
                      .filter(function (e) {
                        return e.contains(n.target);
                      });
                    (o.length > 0 ? l(n, o[0]) : !u.current.noIsolation) &&
                      n.cancelable &&
                      n.preventDefault();
                  }
                }
              }, []),
              f = a.useCallback(function (n, t, r, o) {
                var a = {
                  name: n,
                  delta: t,
                  target: r,
                  should: o,
                  shadowParent: (function (n) {
                    for (var e = null; null !== n; )
                      n instanceof ShadowRoot && ((e = n.host), (n = n.host)),
                        (n = n.parentNode);
                    return e;
                  })(r),
                };
                e.current.push(a),
                  setTimeout(function () {
                    e.current = e.current.filter(function (n) {
                      return n !== a;
                    });
                  }, 1);
              }, []),
              s = a.useCallback(function (n) {
                (t.current = x(n)), (r.current = void 0);
              }, []),
              v = a.useCallback(function (e) {
                f(e.type, P(e), e.target, l(e, n.lockRef.current));
              }, []),
              p = a.useCallback(function (e) {
                f(e.type, x(e), e.target, l(e, n.lockRef.current));
              }, []);
            a.useEffect(function () {
              return (
                I.push(c),
                n.setCallbacks({
                  onScrollCapture: v,
                  onWheelCapture: v,
                  onTouchMoveCapture: p,
                }),
                document.addEventListener("wheel", d, A),
                document.addEventListener("touchmove", d, A),
                document.addEventListener("touchstart", s, A),
                function () {
                  (I = I.filter(function (n) {
                    return n !== c;
                  })),
                    document.removeEventListener("wheel", d, A),
                    document.removeEventListener("touchmove", d, A),
                    document.removeEventListener("touchstart", s, A);
                }
              );
            }, []);
            var m = n.removeScrollBar,
              g = n.inert;
            return a.createElement(
              a.Fragment,
              null,
              g
                ? a.createElement(c, {
                    styles: "\n  .block-interactivity-"
                      .concat(
                        i,
                        " {pointer-events: none;}\n  .allow-interactivity-"
                      )
                      .concat(i, " {pointer-events: all;}\n"),
                  })
                : null,
              m ? a.createElement(k, { gapMode: n.gapMode }) : null
            );
          }),
          l.useMedium(r),
          s),
        Y = a.forwardRef(function (n, e) {
          return a.createElement(f, (0, o.pi)({}, n, { ref: e, sideCar: X }));
        });
      Y.classNames = f.classNames;
      var D = Y;
    },
    63057: function (n, e, t) {
      t.d(e, {
        Ws: function () {
          return c;
        },
      });
      var r = t(83112),
        o = t(33451),
        a = function () {
          var n = 0,
            e = null;
          return {
            add: function (t) {
              if (
                0 == n &&
                (e = (function () {
                  if (!document) return null;
                  var n = document.createElement("style");
                  n.type = "text/css";
                  var e = (0, o.V)();
                  return e && n.setAttribute("nonce", e), n;
                })())
              ) {
                var r, a;
                (r = e).styleSheet
                  ? (r.styleSheet.cssText = t)
                  : r.appendChild(document.createTextNode(t)),
                  (a = e),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(a);
              }
              n++;
            },
            remove: function () {
              --n ||
                !e ||
                (e.parentNode && e.parentNode.removeChild(e), (e = null));
            },
          };
        },
        i = function () {
          var n = a();
          return function (e, t) {
            r.useEffect(
              function () {
                return (
                  n.add(e),
                  function () {
                    n.remove();
                  }
                );
              },
              [e && t]
            );
          };
        },
        c = function () {
          var n = i();
          return function (e) {
            return n(e.styles, e.dynamic), null;
          };
        };
    },
    89002: function (n, e, t) {
      t.d(e, {
        q: function () {
          return c;
        },
      });
      var r = t(83112);
      function o(n, e) {
        return "function" == typeof n ? n(e) : n && (n.current = e), n;
      }
      var a = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        i = new WeakMap();
      function c(n, e) {
        var t,
          c,
          u,
          l =
            ((t = e || null),
            (c = function (e) {
              return n.forEach(function (n) {
                return o(n, e);
              });
            }),
            ((u = (0, r.useState)(function () {
              return {
                value: t,
                callback: c,
                facade: {
                  get current() {
                    return u.value;
                  },
                  set current(value) {
                    var n = u.value;
                    n !== value && ((u.value = value), u.callback(value, n));
                  },
                },
              };
            })[0]).callback = c),
            u.facade);
        return (
          a(
            function () {
              var e = i.get(l);
              if (e) {
                var t = new Set(e),
                  r = new Set(n),
                  a = l.current;
                t.forEach(function (n) {
                  r.has(n) || o(n, null);
                }),
                  r.forEach(function (n) {
                    t.has(n) || o(n, a);
                  });
              }
              i.set(l, n);
            },
            [n]
          ),
          l
        );
      }
    },
    50590: function (n, e, t) {
      t.d(e, {
        _: function () {
          return c;
        },
        s: function () {
          return i;
        },
      });
      var r = t(5594);
      function o(n) {
        return n;
      }
      function a(n, e) {
        void 0 === e && (e = o);
        var t = [],
          r = !1;
        return {
          read: function () {
            if (r)
              throw Error(
                "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
              );
            return t.length ? t[t.length - 1] : n;
          },
          useMedium: function (n) {
            var o = e(n, r);
            return (
              t.push(o),
              function () {
                t = t.filter(function (n) {
                  return n !== o;
                });
              }
            );
          },
          assignSyncMedium: function (n) {
            for (r = !0; t.length; ) {
              var e = t;
              (t = []), e.forEach(n);
            }
            t = {
              push: function (e) {
                return n(e);
              },
              filter: function () {
                return t;
              },
            };
          },
          assignMedium: function (n) {
            r = !0;
            var e = [];
            if (t.length) {
              var o = t;
              (t = []), o.forEach(n), (e = t);
            }
            var a = function () {
                var t = e;
                (e = []), t.forEach(n);
              },
              i = function () {
                return Promise.resolve().then(a);
              };
            i(),
              (t = {
                push: function (n) {
                  e.push(n), i();
                },
                filter: function (n) {
                  return (e = e.filter(n)), t;
                },
              });
          },
        };
      }
      function i(n, e) {
        return void 0 === e && (e = o), a(n, e);
      }
      function c(n) {
        void 0 === n && (n = {});
        var e = a(null);
        return (e.options = (0, r.pi)({ async: !0, ssr: !1 }, n)), e;
      }
    },
  },
]);
