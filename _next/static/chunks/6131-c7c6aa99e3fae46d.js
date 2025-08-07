"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6131],
  {
    41918: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(83112),
        o = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
      let u = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        i = (e, t) => {
          let n = (0, r.forwardRef)((n, i) => {
            let {
              color: a = "currentColor",
              size: c = 24,
              strokeWidth: l = 2,
              absoluteStrokeWidth: s,
              children: d,
              ...f
            } = n;
            return (0, r.createElement)(
              "svg",
              {
                ref: i,
                ...o,
                width: c,
                height: c,
                stroke: a,
                strokeWidth: s ? (24 * Number(l)) / Number(c) : l,
                className: "lucide lucide-".concat(u(e)),
                ...f,
              },
              [
                ...t.map((e) => {
                  let [t, n] = e;
                  return (0, r.createElement)(t, n);
                }),
                ...((Array.isArray(d) ? d : [d]) || []),
              ]
            );
          });
          return (n.displayName = "".concat(e)), n;
        };
    },
    66996: function (e, t, n) {
      n.d(t, {
        Av: function () {
          return i;
        },
        pF: function () {
          return r;
        },
        xv: function () {
          return u;
        },
        zi: function () {
          return o;
        },
      });
      var r = "right-scroll-bar-position",
        o = "width-before-scroll-bar",
        u = "with-scroll-bars-hidden",
        i = "--removed-body-scroll-bar-size";
    },
    81088: function (e, t, n) {
      n.d(t, {
        jp: function () {
          return p;
        },
      });
      var r = n(83112),
        o = n(63057),
        u = n(66996),
        i = { left: 0, top: 0, right: 0, gap: 0 },
        a = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        c = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [a(n), a(r), a(o)];
        },
        l = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return i;
          var t = c(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        s = (0, o.Ws)(),
        d = "data-scroll-locked",
        f = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            a = e.right,
            c = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat(u.xv, " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(d, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        a,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(c, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(c, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(u.pF, " {\n    right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(u.zi, " {\n    margin-right: ")
              .concat(c, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(u.pF, " .")
              .concat(u.pF, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(u.zi, " .")
              .concat(u.zi, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(d, "] {\n    ")
              .concat(u.Av, ": ")
              .concat(c, "px;\n  }\n")
          );
        },
        v = function () {
          var e = parseInt(document.body.getAttribute(d) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        m = function () {
          r.useEffect(function () {
            return (
              document.body.setAttribute(d, (v() + 1).toString()),
              function () {
                var e = v() - 1;
                e <= 0
                  ? document.body.removeAttribute(d)
                  : document.body.setAttribute(d, e.toString());
              }
            );
          }, []);
        },
        p = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            o = e.gapMode,
            u = void 0 === o ? "margin" : o;
          m();
          var i = r.useMemo(
            function () {
              return l(u);
            },
            [u]
          );
          return r.createElement(s, {
            styles: f(i, !t, u, n ? "" : "!important"),
          });
        };
    },
    62526: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var r = n(5594),
        o = n(83112),
        u = n(66996),
        i = n(74578),
        a = (0, n(38928)._)(),
        c = function () {},
        l = o.forwardRef(function (e, t) {
          var n = o.useRef(null),
            u = o.useState({
              onScrollCapture: c,
              onWheelCapture: c,
              onTouchMoveCapture: c,
            }),
            l = u[0],
            s = u[1],
            d = e.forwardProps,
            f = e.children,
            v = e.className,
            m = e.removeScrollBar,
            p = e.enabled,
            h = e.shards,
            g = e.sideCar,
            y = e.noIsolation,
            E = e.inert,
            b = e.allowPinchZoom,
            w = e.as,
            N = e.gapMode,
            C = (0, r._T)(e, [
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
            S = (0, i.q)([n, t]),
            L = (0, r.pi)((0, r.pi)({}, C), l);
          return o.createElement(
            o.Fragment,
            null,
            p &&
              o.createElement(g, {
                sideCar: a,
                removeScrollBar: m,
                shards: h,
                noIsolation: y,
                inert: E,
                setCallbacks: s,
                allowPinchZoom: !!b,
                lockRef: n,
                gapMode: N,
              }),
            d
              ? o.cloneElement(
                  o.Children.only(f),
                  (0, r.pi)((0, r.pi)({}, L), { ref: S })
                )
              : o.createElement(
                  void 0 === w ? "div" : w,
                  (0, r.pi)({}, L, { className: v, ref: S }),
                  f
                )
          );
        });
      (l.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (l.classNames = { fullWidth: u.zi, zeroRight: u.pF });
      var s = n(2847),
        d = n(81088),
        f = n(87078),
        v = !1;
      if ("undefined" != typeof window)
        try {
          var m = Object.defineProperty({}, "passive", {
            get: function () {
              return (v = !0), !0;
            },
          });
          window.addEventListener("test", m, m),
            window.removeEventListener("test", m, m);
        } catch (e) {
          v = !1;
        }
      var p = !!v && { passive: !1 },
        h = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        g = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              y(e, r))
            ) {
              var o = E(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        y = function (e, t) {
          return "v" === e ? h(t, "overflowY") : h(t, "overflowX");
        },
        E = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        b = function (e, t, n, r, o) {
          var u,
            i =
              ((u = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === u ? -1 : 1),
            a = i * r,
            c = n.target,
            l = t.contains(c),
            s = !1,
            d = a > 0,
            f = 0,
            v = 0;
          do {
            var m = E(e, c),
              p = m[0],
              h = m[1] - m[2] - i * p;
            (p || h) && y(e, c) && ((f += h), (v += p)),
              c instanceof ShadowRoot ? (c = c.host) : (c = c.parentNode);
          } while (
            (!l && c !== document.body) ||
            (l && (t.contains(c) || t === c))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && a > f))
              ? (s = !0)
              : !d && ((o && 1 > Math.abs(v)) || (!o && -a > v)) && (s = !0),
            s
          );
        },
        w = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        N = function (e) {
          return [e.deltaX, e.deltaY];
        },
        C = function (e) {
          return e && "current" in e ? e.current : e;
        },
        S = 0,
        L = [],
        T = (0, s.L)(a, function (e) {
          var t = o.useRef([]),
            n = o.useRef([0, 0]),
            u = o.useRef(),
            i = o.useState(S++)[0],
            a = o.useState(f.Ws)[0],
            c = o.useRef(e);
          o.useEffect(
            function () {
              c.current = e;
            },
            [e]
          ),
            o.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(i));
                  var t = (0, r.ev)(
                    [e.lockRef.current],
                    (e.shards || []).map(C),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(i));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(i)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(i)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var l = o.useCallback(function (e, t) {
              if ("touches" in e && 2 === e.touches.length)
                return !c.current.allowPinchZoom;
              var r,
                o = w(e),
                i = n.current,
                a = "deltaX" in e ? e.deltaX : i[0] - o[0],
                l = "deltaY" in e ? e.deltaY : i[1] - o[1],
                s = e.target,
                d = Math.abs(a) > Math.abs(l) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === s.type) return !1;
              var f = g(d, s);
              if (!f) return !0;
              if (
                (f ? (r = d) : ((r = "v" === d ? "h" : "v"), (f = g(d, s))), !f)
              )
                return !1;
              if (
                (!u.current &&
                  "changedTouches" in e &&
                  (a || l) &&
                  (u.current = r),
                !r)
              )
                return !0;
              var v = u.current || r;
              return b(v, t, e, "h" === v ? a : l, !0);
            }, []),
            s = o.useCallback(function (e) {
              if (L.length && L[L.length - 1] === a) {
                var n = "deltaY" in e ? N(e) : w(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (c.current.shards || [])
                    .map(C)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? l(e, o[0]) : !c.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            v = o.useCallback(function (e, n, r, o) {
              var u = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(u),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== u;
                  });
                }, 1);
            }, []),
            m = o.useCallback(function (e) {
              (n.current = w(e)), (u.current = void 0);
            }, []),
            h = o.useCallback(function (t) {
              v(t.type, N(t), t.target, l(t, e.lockRef.current));
            }, []),
            y = o.useCallback(function (t) {
              v(t.type, w(t), t.target, l(t, e.lockRef.current));
            }, []);
          o.useEffect(function () {
            return (
              L.push(a),
              e.setCallbacks({
                onScrollCapture: h,
                onWheelCapture: h,
                onTouchMoveCapture: y,
              }),
              document.addEventListener("wheel", s, p),
              document.addEventListener("touchmove", s, p),
              document.addEventListener("touchstart", m, p),
              function () {
                (L = L.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener("wheel", s, p),
                  document.removeEventListener("touchmove", s, p),
                  document.removeEventListener("touchstart", m, p);
              }
            );
          }, []);
          var E = e.removeScrollBar,
            T = e.inert;
          return o.createElement(
            o.Fragment,
            null,
            T
              ? o.createElement(a, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      i,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(i, " {pointer-events: all;}\n"),
                })
              : null,
            E ? o.createElement(d.jp, { gapMode: e.gapMode }) : null
          );
        }),
        R = o.forwardRef(function (e, t) {
          return o.createElement(l, (0, r.pi)({}, e, { ref: t, sideCar: T }));
        });
      R.classNames = l.classNames;
      var x = R;
    },
    87078: function (e, t, n) {
      n.d(t, {
        Ws: function () {
          return a;
        },
      });
      var r = n(83112),
        o = n(33451),
        u = function () {
          var e = 0,
            t = null;
          return {
            add: function (n) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = (0, o.V)();
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var r, u;
                (r = t).styleSheet
                  ? (r.styleSheet.cssText = n)
                  : r.appendChild(document.createTextNode(n)),
                  (u = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(u);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        i = function () {
          var e = u();
          return function (t, n) {
            r.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        a = function () {
          var e = i();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        };
    },
    74578: function (e, t, n) {
      n.d(t, {
        q: function () {
          return a;
        },
      });
      var r = n(83112);
      function o(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var u = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        i = new WeakMap();
      function a(e, t) {
        var n,
          a,
          c,
          l =
            ((n = t || null),
            (a = function (t) {
              return e.forEach(function (e) {
                return o(e, t);
              });
            }),
            ((c = (0, r.useState)(function () {
              return {
                value: n,
                callback: a,
                facade: {
                  get current() {
                    return c.value;
                  },
                  set current(value) {
                    var e = c.value;
                    e !== value && ((c.value = value), c.callback(value, e));
                  },
                },
              };
            })[0]).callback = a),
            c.facade);
        return (
          u(
            function () {
              var t = i.get(l);
              if (t) {
                var n = new Set(t),
                  r = new Set(e),
                  u = l.current;
                n.forEach(function (e) {
                  r.has(e) || o(e, null);
                }),
                  r.forEach(function (e) {
                    n.has(e) || o(e, u);
                  });
              }
              i.set(l, e);
            },
            [e]
          ),
          l
        );
      }
    },
    2847: function (e, t, n) {
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(5594),
        o = n(83112),
        u = function (e) {
          var t = e.sideCar,
            n = (0, r._T)(e, ["sideCar"]);
          if (!t)
            throw Error(
              "Sidecar: please provide `sideCar` property to import the right car"
            );
          var u = t.read();
          if (!u) throw Error("Sidecar medium not found");
          return o.createElement(u, (0, r.pi)({}, n));
        };
      function i(e, t) {
        return e.useMedium(t), u;
      }
      u.isSideCarExport = !0;
    },
    38928: function (e, t, n) {
      n.d(t, {
        _: function () {
          return u;
        },
      });
      var r = n(5594);
      function o(e) {
        return e;
      }
      function u(e) {
        void 0 === e && (e = {});
        var t,
          n,
          u,
          i =
            (void 0 === t && (t = o),
            (n = []),
            (u = !1),
            {
              read: function () {
                if (u)
                  throw Error(
                    "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                  );
                return n.length ? n[n.length - 1] : null;
              },
              useMedium: function (e) {
                var r = t(e, u);
                return (
                  n.push(r),
                  function () {
                    n = n.filter(function (e) {
                      return e !== r;
                    });
                  }
                );
              },
              assignSyncMedium: function (e) {
                for (u = !0; n.length; ) {
                  var t = n;
                  (n = []), t.forEach(e);
                }
                n = {
                  push: function (t) {
                    return e(t);
                  },
                  filter: function () {
                    return n;
                  },
                };
              },
              assignMedium: function (e) {
                u = !0;
                var t = [];
                if (n.length) {
                  var r = n;
                  (n = []), r.forEach(e), (t = n);
                }
                var o = function () {
                    var n = t;
                    (t = []), n.forEach(e);
                  },
                  i = function () {
                    return Promise.resolve().then(o);
                  };
                i(),
                  (n = {
                    push: function (e) {
                      t.push(e), i();
                    },
                    filter: function (e) {
                      return (t = t.filter(e)), n;
                    },
                  });
              },
            });
        return (i.options = (0, r.pi)({ async: !0, ssr: !1 }, e)), i;
      }
    },
    12469: function (e, t, n) {
      n.d(t, {
        M: function () {
          return r;
        },
      });
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
    },
    63896: function (e, t, n) {
      n.d(t, {
        F: function () {
          return o;
        },
        e: function () {
          return u;
        },
      });
      var r = n(83112);
      function o(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function u(...e) {
        return r.useCallback(o(...e), e);
      }
    },
    4307: function (e, t, n) {
      n.d(t, {
        b: function () {
          return i;
        },
        k: function () {
          return u;
        },
      });
      var r = n(83112),
        o = n(20209);
      function u(e, t) {
        let n = r.createContext(t);
        function u(e) {
          let { children: t, ...u } = e,
            i = r.useMemo(() => u, Object.values(u));
          return (0, o.jsx)(n.Provider, { value: i, children: t });
        }
        return (
          (u.displayName = e + "Provider"),
          [
            u,
            function (o) {
              let u = r.useContext(n);
              if (u) return u;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function i(e, t = []) {
        let n = [],
          u = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let o = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o]
              );
            };
          };
        return (
          (u.scopeName = e),
          [
            function (t, u) {
              let i = r.createContext(u),
                a = n.length;
              function c(t) {
                let { scope: n, children: u, ...c } = t,
                  l = n?.[e][a] || i,
                  s = r.useMemo(() => c, Object.values(c));
                return (0, o.jsx)(l.Provider, { value: s, children: u });
              }
              return (
                (n = [...n, u]),
                (c.displayName = t + "Provider"),
                [
                  c,
                  function (n, o) {
                    let c = o?.[e][a] || i,
                      l = r.useContext(c);
                    if (l) return l;
                    if (void 0 !== u) return u;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(u, ...t),
          ]
        );
      }
    },
    46603: function (e, t, n) {
      n.d(t, {
        XB: function () {
          return v;
        },
      });
      var r,
        o = n(83112),
        u = n(12469),
        i = n(6178),
        a = n(63896),
        c = n(12945),
        l = n(51486),
        s = n(20209),
        d = "dismissableLayer.update",
        f = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        v = o.forwardRef((e, t) => {
          var n, v;
          let {
              disableOutsidePointerEvents: h = !1,
              onEscapeKeyDown: g,
              onPointerDownOutside: y,
              onFocusOutside: E,
              onInteractOutside: b,
              onDismiss: w,
              ...N
            } = e,
            C = o.useContext(f),
            [S, L] = o.useState(null),
            T =
              null !== (v = null == S ? void 0 : S.ownerDocument) &&
              void 0 !== v
                ? v
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, R] = o.useState({}),
            x = (0, a.e)(t, (e) => L(e)),
            M = Array.from(C.layers),
            [P] = [...C.layersWithOutsidePointerEventsDisabled].slice(-1),
            k = M.indexOf(P),
            W = S ? M.indexOf(S) : -1,
            O = C.layersWithOutsidePointerEventsDisabled.size > 0,
            A = W >= k,
            j = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, c.W)(e),
                u = o.useRef(!1),
                i = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !u.current) {
                        let t = function () {
                            p("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", i.current),
                            (i.current = t),
                            n.addEventListener("click", i.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", i.current);
                      u.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", i.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (u.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...C.branches].some((e) => e.contains(t));
              !A ||
                n ||
                (null == y || y(e),
                null == b || b(e),
                e.defaultPrevented || null == w || w());
            }, T),
            D = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, c.W)(e),
                u = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !u.current &&
                      p(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (u.current = !0),
                  onBlurCapture: () => (u.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...C.branches].some((e) => e.contains(t)) ||
                (null == E || E(e),
                null == b || b(e),
                e.defaultPrevented || null == w || w());
            }, T);
          return (
            (0, l.e)((e) => {
              W !== C.layers.size - 1 ||
                (null == g || g(e),
                !e.defaultPrevented && w && (e.preventDefault(), w()));
            }, T),
            o.useEffect(() => {
              if (S)
                return (
                  h &&
                    (0 === C.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = T.body.style.pointerEvents),
                      (T.body.style.pointerEvents = "none")),
                    C.layersWithOutsidePointerEventsDisabled.add(S)),
                  C.layers.add(S),
                  m(),
                  () => {
                    h &&
                      1 === C.layersWithOutsidePointerEventsDisabled.size &&
                      (T.body.style.pointerEvents = r);
                  }
                );
            }, [S, T, h, C]),
            o.useEffect(
              () => () => {
                S &&
                  (C.layers.delete(S),
                  C.layersWithOutsidePointerEventsDisabled.delete(S),
                  m());
              },
              [S, C]
            ),
            o.useEffect(() => {
              let e = () => R({});
              return (
                document.addEventListener(d, e),
                () => document.removeEventListener(d, e)
              );
            }, []),
            (0, s.jsx)(i.WV.div, {
              ...N,
              ref: x,
              style: {
                pointerEvents: O ? (A ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, u.M)(e.onFocusCapture, D.onFocusCapture),
              onBlurCapture: (0, u.M)(e.onBlurCapture, D.onBlurCapture),
              onPointerDownCapture: (0, u.M)(
                e.onPointerDownCapture,
                j.onPointerDownCapture
              ),
            })
          );
        });
      function m() {
        let e = new CustomEvent(d);
        document.dispatchEvent(e);
      }
      function p(e, t, n, r) {
        let { discrete: o } = r,
          u = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && u.addEventListener(e, t, { once: !0 }),
          o ? (0, i.jH)(u, a) : u.dispatchEvent(a);
      }
      (v.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(f),
            r = o.useRef(null),
            u = (0, a.e)(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, s.jsx)(i.WV.div, { ...e, ref: u })
          );
        }).displayName = "DismissableLayerBranch");
    },
    60074: function (e, t, n) {
      n.d(t, {
        EW: function () {
          return u;
        },
      });
      var r = n(83112),
        o = 0;
      function u() {
        r.useEffect(() => {
          var e, t;
          let n = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null !== (e = n[0]) && void 0 !== e ? e : i()
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null !== (t = n[1]) && void 0 !== t ? t : i()
            ),
            o++,
            () => {
              1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--;
            }
          );
        }, []);
      }
      function i() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.cssText =
            "outline: none; opacity: 0; position: fixed; pointer-events: none"),
          e
        );
      }
    },
    90106: function (e, t, n) {
      let r;
      n.d(t, {
        M: function () {
          return f;
        },
      });
      var o = n(83112),
        u = n(63896),
        i = n(6178),
        a = n(12945),
        c = n(20209),
        l = "focusScope.autoFocusOnMount",
        s = "focusScope.autoFocusOnUnmount",
        d = { bubbles: !1, cancelable: !0 },
        f = o.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: f,
              onUnmountAutoFocus: g,
              ...y
            } = e,
            [E, b] = o.useState(null),
            w = (0, a.W)(f),
            N = (0, a.W)(g),
            C = o.useRef(null),
            S = (0, u.e)(t, (e) => b(e)),
            L = o.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          o.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (L.paused || !E) return;
                  let t = e.target;
                  E.contains(t)
                    ? (C.current = t)
                    : p(C.current, { select: !0 });
                },
                t = function (e) {
                  if (L.paused || !E) return;
                  let t = e.relatedTarget;
                  null === t || E.contains(t) || p(C.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && p(E);
              });
              return (
                E && n.observe(E, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, E, L.paused]),
            o.useEffect(() => {
              if (E) {
                h.add(L);
                let e = document.activeElement;
                if (!E.contains(e)) {
                  let t = new CustomEvent(l, d);
                  E.addEventListener(l, w),
                    E.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (p(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        v(E).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && p(E));
                }
                return () => {
                  E.removeEventListener(l, w),
                    setTimeout(() => {
                      let t = new CustomEvent(s, d);
                      E.addEventListener(s, N),
                        E.dispatchEvent(t),
                        t.defaultPrevented ||
                          p(null != e ? e : document.body, { select: !0 }),
                        E.removeEventListener(s, N),
                        h.remove(L);
                    }, 0);
                };
              }
            }, [E, w, N, L]);
          let T = o.useCallback(
            (e) => {
              if ((!n && !r) || L.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, u] = (function (e) {
                    let t = v(e);
                    return [m(t, e), m(t.reverse(), e)];
                  })(t);
                r && u
                  ? e.shiftKey || o !== u
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && p(u, { select: !0 }))
                    : (e.preventDefault(), n && p(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, L.paused]
          );
          return (0, c.jsx)(i.WV.div, {
            tabIndex: -1,
            ...y,
            ref: S,
            onKeyDown: T,
          });
        });
      function v(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function m(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function p(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      f.displayName = "FocusScope";
      var h =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = g(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = g(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function g(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    11447: function (e, t, n) {
      n.d(t, {
        M: function () {
          return c;
        },
      });
      var r,
        o = n(83112),
        u = n(91917),
        i = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
        a = 0;
      function c(e) {
        let [t, n] = o.useState(i());
        return (
          (0, u.b)(() => {
            e || n((e) => e ?? String(a++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    98051: function (e, t, n) {
      n.d(t, {
        h: function () {
          return c;
        },
      });
      var r = n(83112),
        o = n(32017),
        u = n(6178),
        i = n(91917),
        a = n(20209),
        c = r.forwardRef((e, t) => {
          var n, c;
          let { container: l, ...s } = e,
            [d, f] = r.useState(!1);
          (0, i.b)(() => f(!0), []);
          let v =
            l ||
            (d &&
              (null === (c = globalThis) || void 0 === c
                ? void 0
                : null === (n = c.document) || void 0 === n
                ? void 0
                : n.body));
          return v
            ? o.createPortal((0, a.jsx)(u.WV.div, { ...s, ref: t }), v)
            : null;
        });
      c.displayName = "Portal";
    },
    65932: function (e, t, n) {
      n.d(t, {
        z: function () {
          return a;
        },
      });
      var r = n(83112),
        o = n(32017),
        u = n(63896),
        i = n(91917),
        a = (e) => {
          var t, n;
          let a, l;
          let { present: s, children: d } = e,
            f = (function (e) {
              var t, n;
              let [u, a] = r.useState(),
                l = r.useRef({}),
                s = r.useRef(e),
                d = r.useRef("none"),
                [f, v] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  r.useReducer((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                r.useEffect(() => {
                  let e = c(l.current);
                  d.current = "mounted" === f ? e : "none";
                }, [f]),
                (0, i.b)(() => {
                  let t = l.current,
                    n = s.current;
                  if (n !== e) {
                    let r = d.current,
                      o = c(t);
                    e
                      ? v("MOUNT")
                      : "none" === o ||
                        (null == t ? void 0 : t.display) === "none"
                      ? v("UNMOUNT")
                      : n && r !== o
                      ? v("ANIMATION_OUT")
                      : v("UNMOUNT"),
                      (s.current = e);
                  }
                }, [e, v]),
                (0, i.b)(() => {
                  if (u) {
                    let e = (e) => {
                        let t = c(l.current).includes(e.animationName);
                        e.target === u &&
                          t &&
                          o.flushSync(() => v("ANIMATION_END"));
                      },
                      t = (e) => {
                        e.target === u && (d.current = c(l.current));
                      };
                    return (
                      u.addEventListener("animationstart", t),
                      u.addEventListener("animationcancel", e),
                      u.addEventListener("animationend", e),
                      () => {
                        u.removeEventListener("animationstart", t),
                          u.removeEventListener("animationcancel", e),
                          u.removeEventListener("animationend", e);
                      }
                    );
                  }
                  v("ANIMATION_END");
                }, [u, v]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(f),
                  ref: r.useCallback((e) => {
                    e && (l.current = getComputedStyle(e)), a(e);
                  }, []),
                }
              );
            })(s),
            v =
              "function" == typeof d
                ? d({ present: f.isPresent })
                : r.Children.only(d),
            m = (0, u.e)(
              f.ref,
              (a =
                null ===
                  (t = Object.getOwnPropertyDescriptor(v.props, "ref")) ||
                void 0 === t
                  ? void 0
                  : t.get) &&
                "isReactWarning" in a &&
                a.isReactWarning
                ? v.ref
                : (a =
                    null === (n = Object.getOwnPropertyDescriptor(v, "ref")) ||
                    void 0 === n
                      ? void 0
                      : n.get) &&
                  "isReactWarning" in a &&
                  a.isReactWarning
                ? v.props.ref
                : v.props.ref || v.ref
            );
          return "function" == typeof d || f.isPresent
            ? r.cloneElement(v, { ref: m })
            : null;
        };
      function c(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      a.displayName = "Presence";
    },
    6178: function (e, t, n) {
      n.d(t, {
        WV: function () {
          return a;
        },
        jH: function () {
          return c;
        },
      });
      var r = n(83112),
        o = n(32017),
        u = n(55369),
        i = n(20209),
        a = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = r.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              a = r ? u.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, i.jsx)(a, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function c(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    55369: function (e, t, n) {
      n.d(t, {
        A4: function () {
          return c;
        },
        g7: function () {
          return i;
        },
      });
      var r = n(83112),
        o = n(63896),
        u = n(20209),
        i = r.forwardRef((e, t) => {
          let { children: n, ...o } = e,
            i = r.Children.toArray(n),
            c = i.find(l);
          if (c) {
            let e = c.props.children,
              n = i.map((t) =>
                t !== c
                  ? t
                  : r.Children.count(e) > 1
                  ? r.Children.only(null)
                  : r.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, u.jsx)(a, {
              ...o,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, u.jsx)(a, { ...o, ref: t, children: n });
        });
      i.displayName = "Slot";
      var a = r.forwardRef((e, t) => {
        let { children: n, ...u } = e;
        if (r.isValidElement(n)) {
          let e, i;
          let a =
            (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? n.ref
              : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? n.props.ref
              : n.props.ref || n.ref;
          return r.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  u = t[r];
                /^on[A-Z]/.test(r)
                  ? o && u
                    ? (n[r] = (...e) => {
                        u(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : "style" === r
                  ? (n[r] = { ...o, ...u })
                  : "className" === r &&
                    (n[r] = [o, u].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(u, n.props),
            ref: t ? (0, o.F)(t, a) : a,
          });
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      a.displayName = "SlotClone";
      var c = ({ children: e }) => (0, u.jsx)(u.Fragment, { children: e });
      function l(e) {
        return r.isValidElement(e) && e.type === c;
      }
    },
    12945: function (e, t, n) {
      n.d(t, {
        W: function () {
          return o;
        },
      });
      var r = n(83112);
      function o(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    25841: function (e, t, n) {
      n.d(t, {
        T: function () {
          return u;
        },
      });
      var r = n(83112),
        o = n(12945);
      function u({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [u, i] = (function ({ defaultProp: e, onChange: t }) {
            let n = r.useState(e),
              [u] = n,
              i = r.useRef(u),
              a = (0, o.W)(t);
            return (
              r.useEffect(() => {
                i.current !== u && (a(u), (i.current = u));
              }, [u, i, a]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          a = void 0 !== e,
          c = a ? e : u,
          l = (0, o.W)(n);
        return [
          c,
          r.useCallback(
            (t) => {
              if (a) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && l(n);
              } else i(t);
            },
            [a, e, i, l]
          ),
        ];
      }
    },
    51486: function (e, t, n) {
      n.d(t, {
        e: function () {
          return u;
        },
      });
      var r = n(83112),
        o = n(12945);
      function u(e, t = globalThis?.document) {
        let n = (0, o.W)(e);
        r.useEffect(() => {
          let e = (e) => {
            "Escape" === e.key && n(e);
          };
          return (
            t.addEventListener("keydown", e, { capture: !0 }),
            () => t.removeEventListener("keydown", e, { capture: !0 })
          );
        }, [n, t]);
      }
    },
    91917: function (e, t, n) {
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var r = n(83112),
        o = globalThis?.document ? r.useLayoutEffect : () => {};
    },
    90345: function (e, t, n) {
      n.d(t, {
        j: function () {
          return u;
        },
        cx: function () {
          return o;
        },
      });
      let r = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        o = function () {
          for (var e, t, n = 0, r = ""; n < arguments.length; )
            (e = arguments[n++]) &&
              (t = (function e(t) {
                var n,
                  r,
                  o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (n = 0; n < t.length; n++)
                      t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                  else for (n in t) t[n] && (o && (o += " "), (o += n));
                }
                return o;
              })(e)) &&
              (r && (r += " "), (r += t));
          return r;
        },
        u = (e, t) => (n) => {
          var u;
          if ((null == t ? void 0 : t.variants) == null)
            return o(
              e,
              null == n ? void 0 : n.class,
              null == n ? void 0 : n.className
            );
          let { variants: i, defaultVariants: a } = t,
            c = Object.keys(i).map((e) => {
              let t = null == n ? void 0 : n[e],
                o = null == a ? void 0 : a[e];
              if (null === t) return null;
              let u = r(t) || r(o);
              return i[e][u];
            }),
            l =
              n &&
              Object.entries(n).reduce((e, t) => {
                let [n, r] = t;
                return void 0 === r || (e[n] = r), e;
              }, {});
          return o(
            e,
            c,
            null == t
              ? void 0
              : null === (u = t.compoundVariants) || void 0 === u
              ? void 0
              : u.reduce((e, t) => {
                  let { class: n, className: r, ...o } = t;
                  return Object.entries(o).every((e) => {
                    let [t, n] = e;
                    return Array.isArray(n)
                      ? n.includes({ ...a, ...l }[t])
                      : { ...a, ...l }[t] === n;
                  })
                    ? [...e, n, r]
                    : e;
                }, []),
            null == n ? void 0 : n.class,
            null == n ? void 0 : n.className
          );
        };
    },
    61237: function (e, t, n) {
      function r() {
        for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var u = t.length;
                  for (n = 0; n < u; n++)
                    t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                } else for (r in t) t[r] && (o && (o += " "), (o += r));
              }
              return o;
            })(e)) &&
            (r && (r += " "), (r += t));
        return r;
      }
      n.d(t, {
        W: function () {
          return r;
        },
      }),
        (t.Z = r);
    },
  },
]);
