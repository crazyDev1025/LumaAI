"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [302],
  {
    21808: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(41918).Z)("Check", [
        ["polyline", { points: "20 6 9 17 4 12", key: "10jjfj" }],
      ]);
    },
    31099: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(41918).Z)("ChevronDown", [
        ["polyline", { points: "6 9 12 15 18 9", key: "1do0m2" }],
      ]);
    },
    61879: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(41918).Z)("ChevronUp", [
        ["polyline", { points: "18 15 12 9 6 15", key: "1uugdp" }],
      ]);
    },
    99150: function (e, t, n) {
      n.d(t, {
        Cp: function () {
          return g;
        },
        RR: function () {
          return h;
        },
        YF: function () {
          return c;
        },
        cv: function () {
          return p;
        },
        dp: function () {
          return y;
        },
        dr: function () {
          return m;
        },
        uY: function () {
          return v;
        },
        x7: function () {
          return w;
        },
      });
      var r = n(12823),
        o = n(83112),
        l = n(32017),
        i = "undefined" != typeof document ? o.useLayoutEffect : o.useEffect;
      function a(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!a(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !a(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function u(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function s(e, t) {
        let n = u(e);
        return Math.round(t * n) / n;
      }
      function d(e) {
        let t = o.useRef(e);
        return (
          i(() => {
            t.current = e;
          }),
          t
        );
      }
      function c(e) {
        void 0 === e && (e = {});
        let {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: c = [],
            platform: f,
            elements: { reference: p, floating: v } = {},
            transform: m = !0,
            whileElementsMounted: h,
            open: y,
          } = e,
          [g, w] = o.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [x, b] = o.useState(c);
        a(x, c) || b(c);
        let [C, E] = o.useState(null),
          [S, R] = o.useState(null),
          j = o.useCallback((e) => {
            e !== T.current && ((T.current = e), E(e));
          }, []),
          P = o.useCallback((e) => {
            e !== k.current && ((k.current = e), R(e));
          }, []),
          M = p || C,
          N = v || S,
          T = o.useRef(null),
          k = o.useRef(null),
          D = o.useRef(g),
          L = null != h,
          A = d(h),
          W = d(f),
          I = d(y),
          O = o.useCallback(() => {
            if (!T.current || !k.current) return;
            let e = { placement: t, strategy: n, middleware: x };
            W.current && (e.platform = W.current),
              (0, r.oo)(T.current, k.current, e).then((e) => {
                let t = { ...e, isPositioned: !1 !== I.current };
                V.current &&
                  !a(D.current, t) &&
                  ((D.current = t),
                  l.flushSync(() => {
                    w(t);
                  }));
              });
          }, [x, t, n, W, I]);
        i(() => {
          !1 === y &&
            D.current.isPositioned &&
            ((D.current.isPositioned = !1),
            w((e) => ({ ...e, isPositioned: !1 })));
        }, [y]);
        let V = o.useRef(!1);
        i(
          () => (
            (V.current = !0),
            () => {
              V.current = !1;
            }
          ),
          []
        ),
          i(() => {
            if ((M && (T.current = M), N && (k.current = N), M && N)) {
              if (A.current) return A.current(M, N, O);
              O();
            }
          }, [M, N, O, A, L]);
        let _ = o.useMemo(
            () => ({
              reference: T,
              floating: k,
              setReference: j,
              setFloating: P,
            }),
            [j, P]
          ),
          F = o.useMemo(() => ({ reference: M, floating: N }), [M, N]),
          H = o.useMemo(() => {
            let e = { position: n, left: 0, top: 0 };
            if (!F.floating) return e;
            let t = s(F.floating, g.x),
              r = s(F.floating, g.y);
            return m
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(u(F.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, m, F.floating, g.x, g.y]);
        return o.useMemo(
          () => ({ ...g, update: O, refs: _, elements: F, floatingStyles: H }),
          [g, O, _, F, H]
        );
      }
      let f = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: o } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? (0, r.x7)({ element: n.current, padding: o }).fn(t)
                : {}
              : n
              ? (0, r.x7)({ element: n, padding: o }).fn(t)
              : {};
          },
        }),
        p = (e, t) => ({ ...(0, r.cv)(e), options: [e, t] }),
        v = (e, t) => ({ ...(0, r.uY)(e), options: [e, t] }),
        m = (e, t) => ({ ...(0, r.dr)(e), options: [e, t] }),
        h = (e, t) => ({ ...(0, r.RR)(e), options: [e, t] }),
        y = (e, t) => ({ ...(0, r.dp)(e), options: [e, t] }),
        g = (e, t) => ({ ...(0, r.Cp)(e), options: [e, t] }),
        w = (e, t) => ({ ...f(e), options: [e, t] });
    },
    48636: function (e, t, n) {
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
    81419: function (e, t, n) {
      n.d(t, {
        B: function () {
          return u;
        },
      });
      var r = n(83112),
        o = n(95259),
        l = n(90413),
        i = n(26052),
        a = n(20209);
      function u(e) {
        let t = e + "CollectionProvider",
          [n, u] = (0, o.b)(t),
          [s, d] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          c = (e) => {
            let { scope: t, children: n } = e,
              o = r.useRef(null),
              l = r.useRef(new Map()).current;
            return (0, a.jsx)(s, {
              scope: t,
              itemMap: l,
              collectionRef: o,
              children: n,
            });
          };
        c.displayName = t;
        let f = e + "CollectionSlot",
          p = r.forwardRef((e, t) => {
            let { scope: n, children: r } = e,
              o = d(f, n),
              u = (0, l.e)(t, o.collectionRef);
            return (0, a.jsx)(i.g7, { ref: u, children: r });
          });
        p.displayName = f;
        let v = e + "CollectionItemSlot",
          m = "data-radix-collection-item",
          h = r.forwardRef((e, t) => {
            let { scope: n, children: o, ...u } = e,
              s = r.useRef(null),
              c = (0, l.e)(t, s),
              f = d(v, n);
            return (
              r.useEffect(
                () => (
                  f.itemMap.set(s, { ref: s, ...u }),
                  () => void f.itemMap.delete(s)
                )
              ),
              (0, a.jsx)(i.g7, { [m]: "", ref: c, children: o })
            );
          });
        return (
          (h.displayName = v),
          [
            { Provider: c, Slot: p, ItemSlot: h },
            function (t) {
              let n = d(e + "CollectionConsumer", t);
              return r.useCallback(() => {
                let e = n.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll("[".concat(m, "]")));
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                );
              }, [n.collectionRef, n.itemMap]);
            },
            u,
          ]
        );
      }
    },
    90413: function (e, t, n) {
      n.d(t, {
        F: function () {
          return l;
        },
        e: function () {
          return i;
        },
      });
      var r = n(83112);
      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function l(...e) {
        return (t) => {
          let n = !1,
            r = e.map((e) => {
              let r = o(e, t);
              return n || "function" != typeof r || (n = !0), r;
            });
          if (n)
            return () => {
              for (let t = 0; t < r.length; t++) {
                let n = r[t];
                "function" == typeof n ? n() : o(e[t], null);
              }
            };
        };
      }
      function i(...e) {
        return r.useCallback(l(...e), e);
      }
    },
    95259: function (e, t, n) {
      n.d(t, {
        b: function () {
          return l;
        },
      });
      var r = n(83112),
        o = n(20209);
      function l(e, t = []) {
        let n = [],
          l = () => {
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
          (l.scopeName = e),
          [
            function (t, l) {
              let i = r.createContext(l),
                a = n.length;
              n = [...n, l];
              let u = (t) => {
                let { scope: n, children: l, ...u } = t,
                  s = n?.[e]?.[a] || i,
                  d = r.useMemo(() => u, Object.values(u));
                return (0, o.jsx)(s.Provider, { value: d, children: l });
              };
              return (
                (u.displayName = t + "Provider"),
                [
                  u,
                  function (n, o) {
                    let u = o?.[e]?.[a] || i,
                      s = r.useContext(u);
                    if (s) return s;
                    if (void 0 !== l) return l;
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
            })(l, ...t),
          ]
        );
      }
    },
    15600: function (e, t, n) {
      n.d(t, {
        WV: function () {
          return a;
        },
        jH: function () {
          return u;
        },
      });
      var r = n(83112),
        o = n(32017),
        l = n(26052),
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
              a = r ? l.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, i.jsx)(a, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function u(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    40190: function (e, t, n) {
      let r;
      n.d(t, {
        VY: function () {
          return ta;
        },
        ZA: function () {
          return ts;
        },
        JO: function () {
          return tl;
        },
        ck: function () {
          return tc;
        },
        wU: function () {
          return tp;
        },
        eT: function () {
          return tf;
        },
        __: function () {
          return td;
        },
        h_: function () {
          return ti;
        },
        fC: function () {
          return tn;
        },
        $G: function () {
          return tm;
        },
        u_: function () {
          return tv;
        },
        Z0: function () {
          return th;
        },
        xz: function () {
          return tr;
        },
        B4: function () {
          return to;
        },
        l_: function () {
          return tu;
        },
      });
      var o,
        l = n(83112),
        i = n(32017);
      function a(e, [t, n]) {
        return Math.min(n, Math.max(t, e));
      }
      var u = n(48636),
        s = n(81419),
        d = n(90413),
        c = n(95259),
        f = n(71417),
        p = n(15600),
        v = n(12945),
        m = n(51486),
        h = n(20209),
        y = "dismissableLayer.update",
        g = l.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        w = l.forwardRef((e, t) => {
          var n, r;
          let {
              disableOutsidePointerEvents: i = !1,
              onEscapeKeyDown: a,
              onPointerDownOutside: s,
              onFocusOutside: c,
              onInteractOutside: f,
              onDismiss: w,
              ...C
            } = e,
            E = l.useContext(g),
            [S, R] = l.useState(null),
            j =
              null !== (r = null == S ? void 0 : S.ownerDocument) &&
              void 0 !== r
                ? r
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, P] = l.useState({}),
            M = (0, d.e)(t, (e) => R(e)),
            N = Array.from(E.layers),
            [T] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1),
            k = N.indexOf(T),
            D = S ? N.indexOf(S) : -1,
            L = E.layersWithOutsidePointerEventsDisabled.size > 0,
            A = D >= k,
            W = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, v.W)(e),
                o = l.useRef(!1),
                i = l.useRef(() => {});
              return (
                l.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !o.current) {
                        let t = function () {
                            b("dismissableLayer.pointerDownOutside", r, o, {
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
                      o.current = !1;
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
                { onPointerDownCapture: () => (o.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...E.branches].some((e) => e.contains(t));
              !A ||
                n ||
                (null == s || s(e),
                null == f || f(e),
                e.defaultPrevented || null == w || w());
            }, j),
            I = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, v.W)(e),
                o = l.useRef(!1);
              return (
                l.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !o.current &&
                      b(
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
                  onFocusCapture: () => (o.current = !0),
                  onBlurCapture: () => (o.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...E.branches].some((e) => e.contains(t)) ||
                (null == c || c(e),
                null == f || f(e),
                e.defaultPrevented || null == w || w());
            }, j);
          return (
            (0, m.e)((e) => {
              D !== E.layers.size - 1 ||
                (null == a || a(e),
                !e.defaultPrevented && w && (e.preventDefault(), w()));
            }, j),
            l.useEffect(() => {
              if (S)
                return (
                  i &&
                    (0 === E.layersWithOutsidePointerEventsDisabled.size &&
                      ((o = j.body.style.pointerEvents),
                      (j.body.style.pointerEvents = "none")),
                    E.layersWithOutsidePointerEventsDisabled.add(S)),
                  E.layers.add(S),
                  x(),
                  () => {
                    i &&
                      1 === E.layersWithOutsidePointerEventsDisabled.size &&
                      (j.body.style.pointerEvents = o);
                  }
                );
            }, [S, j, i, E]),
            l.useEffect(
              () => () => {
                S &&
                  (E.layers.delete(S),
                  E.layersWithOutsidePointerEventsDisabled.delete(S),
                  x());
              },
              [S, E]
            ),
            l.useEffect(() => {
              let e = () => P({});
              return (
                document.addEventListener(y, e),
                () => document.removeEventListener(y, e)
              );
            }, []),
            (0, h.jsx)(p.WV.div, {
              ...C,
              ref: M,
              style: {
                pointerEvents: L ? (A ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, u.M)(e.onFocusCapture, I.onFocusCapture),
              onBlurCapture: (0, u.M)(e.onBlurCapture, I.onBlurCapture),
              onPointerDownCapture: (0, u.M)(
                e.onPointerDownCapture,
                W.onPointerDownCapture
              ),
            })
          );
        });
      function x() {
        let e = new CustomEvent(y);
        document.dispatchEvent(e);
      }
      function b(e, t, n, r) {
        let { discrete: o } = r,
          l = n.originalEvent.target,
          i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && l.addEventListener(e, t, { once: !0 }),
          o ? (0, p.jH)(l, i) : l.dispatchEvent(i);
      }
      (w.displayName = "DismissableLayer"),
        (l.forwardRef((e, t) => {
          let n = l.useContext(g),
            r = l.useRef(null),
            o = (0, d.e)(t, r);
          return (
            l.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, h.jsx)(p.WV.div, { ...e, ref: o })
          );
        }).displayName = "DismissableLayerBranch");
      var C = 0;
      function E() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
      var S = "focusScope.autoFocusOnMount",
        R = "focusScope.autoFocusOnUnmount",
        j = { bubbles: !1, cancelable: !0 },
        P = l.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: i,
              ...a
            } = e,
            [u, s] = l.useState(null),
            c = (0, v.W)(o),
            f = (0, v.W)(i),
            m = l.useRef(null),
            y = (0, d.e)(t, (e) => s(e)),
            g = l.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          l.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (g.paused || !u) return;
                  let t = e.target;
                  u.contains(t)
                    ? (m.current = t)
                    : T(m.current, { select: !0 });
                },
                t = function (e) {
                  if (g.paused || !u) return;
                  let t = e.relatedTarget;
                  null === t || u.contains(t) || T(m.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && T(u);
              });
              return (
                u && n.observe(u, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, u, g.paused]),
            l.useEffect(() => {
              if (u) {
                k.add(g);
                let e = document.activeElement;
                if (!u.contains(e)) {
                  let t = new CustomEvent(S, j);
                  u.addEventListener(S, c),
                    u.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (T(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        M(u).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && T(u));
                }
                return () => {
                  u.removeEventListener(S, c),
                    setTimeout(() => {
                      let t = new CustomEvent(R, j);
                      u.addEventListener(R, f),
                        u.dispatchEvent(t),
                        t.defaultPrevented ||
                          T(null != e ? e : document.body, { select: !0 }),
                        u.removeEventListener(R, f),
                        k.remove(g);
                    }, 0);
                };
              }
            }, [u, c, f, g]);
          let w = l.useCallback(
            (e) => {
              if ((!n && !r) || g.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, l] = (function (e) {
                    let t = M(e);
                    return [N(t, e), N(t.reverse(), e)];
                  })(t);
                r && l
                  ? e.shiftKey || o !== l
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && T(l, { select: !0 }))
                    : (e.preventDefault(), n && T(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, g.paused]
          );
          return (0, h.jsx)(p.WV.div, {
            tabIndex: -1,
            ...a,
            ref: y,
            onKeyDown: w,
          });
        });
      function M(e) {
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
      function N(e, t) {
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
      function T(e) {
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
      P.displayName = "FocusScope";
      var k =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = D(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = D(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function D(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      var L = n(11447),
        A = n(99150),
        W = n(12823),
        I = l.forwardRef((e, t) => {
          let { children: n, width: r = 10, height: o = 5, ...l } = e;
          return (0, h.jsx)(p.WV.svg, {
            ...l,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? n
              : (0, h.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      I.displayName = "Arrow";
      var O = n(91917),
        V = n(54527),
        _ = "Popper",
        [F, H] = (0, c.b)(_),
        [B, K] = F(_),
        z = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, o] = l.useState(null);
          return (0, h.jsx)(B, {
            scope: t,
            anchor: r,
            onAnchorChange: o,
            children: n,
          });
        };
      z.displayName = _;
      var U = "PopperAnchor",
        Y = l.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...o } = e,
            i = K(U, n),
            a = l.useRef(null),
            u = (0, d.e)(t, a);
          return (
            l.useEffect(() => {
              i.onAnchorChange((null == r ? void 0 : r.current) || a.current);
            }),
            r ? null : (0, h.jsx)(p.WV.div, { ...o, ref: u })
          );
        });
      Y.displayName = U;
      var Z = "PopperContent",
        [$, q] = F(Z),
        X = l.forwardRef((e, t) => {
          var n, r, o, i, a, u, s, c;
          let {
              __scopePopper: f,
              side: m = "bottom",
              sideOffset: y = 0,
              align: g = "center",
              alignOffset: w = 0,
              arrowPadding: x = 0,
              avoidCollisions: b = !0,
              collisionBoundary: C = [],
              collisionPadding: E = 0,
              sticky: S = "partial",
              hideWhenDetached: R = !1,
              updatePositionStrategy: j = "optimized",
              onPlaced: P,
              ...M
            } = e,
            N = K(Z, f),
            [T, k] = l.useState(null),
            D = (0, d.e)(t, (e) => k(e)),
            [L, I] = l.useState(null),
            _ = (0, V.t)(L),
            F =
              null !== (s = null == _ ? void 0 : _.width) && void 0 !== s
                ? s
                : 0,
            H =
              null !== (c = null == _ ? void 0 : _.height) && void 0 !== c
                ? c
                : 0,
            B =
              "number" == typeof E
                ? E
                : { top: 0, right: 0, bottom: 0, left: 0, ...E },
            z = Array.isArray(C) ? C : [C],
            U = z.length > 0,
            Y = { padding: B, boundary: z.filter(ee), altBoundary: U },
            {
              refs: q,
              floatingStyles: X,
              placement: G,
              isPositioned: J,
              middlewareData: Q,
            } = (0, A.YF)({
              strategy: "fixed",
              placement: m + ("center" !== g ? "-" + g : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (0, W.Me)(...t, { animationFrame: "always" === j });
              },
              elements: { reference: N.anchor },
              middleware: [
                (0, A.cv)({ mainAxis: y + H, alignmentAxis: w }),
                b &&
                  (0, A.uY)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === S ? (0, A.dr)() : void 0,
                    ...Y,
                  }),
                b && (0, A.RR)({ ...Y }),
                (0, A.dp)({
                  ...Y,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o,
                      } = e,
                      { width: l, height: i } = n.reference,
                      a = t.floating.style;
                    a.setProperty(
                      "--radix-popper-available-width",
                      "".concat(r, "px")
                    ),
                      a.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px")
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(l, "px")
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(i, "px")
                      );
                  },
                }),
                L && (0, A.x7)({ element: L, padding: x }),
                et({ arrowWidth: F, arrowHeight: H }),
                R && (0, A.Cp)({ strategy: "referenceHidden", ...Y }),
              ],
            }),
            [er, eo] = en(G),
            el = (0, v.W)(P);
          (0, O.b)(() => {
            J && (null == el || el());
          }, [J, el]);
          let ei = null === (n = Q.arrow) || void 0 === n ? void 0 : n.x,
            ea = null === (r = Q.arrow) || void 0 === r ? void 0 : r.y,
            eu =
              (null === (o = Q.arrow) || void 0 === o
                ? void 0
                : o.centerOffset) !== 0,
            [es, ed] = l.useState();
          return (
            (0, O.b)(() => {
              T && ed(window.getComputedStyle(T).zIndex);
            }, [T]),
            (0, h.jsx)("div", {
              ref: q.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...X,
                transform: J ? X.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: es,
                "--radix-popper-transform-origin": [
                  null === (i = Q.transformOrigin) || void 0 === i
                    ? void 0
                    : i.x,
                  null === (a = Q.transformOrigin) || void 0 === a
                    ? void 0
                    : a.y,
                ].join(" "),
                ...((null === (u = Q.hide) || void 0 === u
                  ? void 0
                  : u.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, h.jsx)($, {
                scope: f,
                placedSide: er,
                onArrowChange: I,
                arrowX: ei,
                arrowY: ea,
                shouldHideArrow: eu,
                children: (0, h.jsx)(p.WV.div, {
                  "data-side": er,
                  "data-align": eo,
                  ...M,
                  ref: D,
                  style: { ...M.style, animation: J ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      X.displayName = Z;
      var G = "PopperArrow",
        J = { top: "bottom", right: "left", bottom: "top", left: "right" },
        Q = l.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = q(G, n),
            l = J[o.placedSide];
          return (0,
          h.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [l]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, h.jsx)(I, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
        });
      function ee(e) {
        return null !== e;
      }
      Q.displayName = G;
      var et = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, l, i;
          let { placement: a, rects: u, middlewareData: s } = t,
            d =
              (null === (n = s.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            c = d ? 0 : e.arrowWidth,
            f = d ? 0 : e.arrowHeight,
            [p, v] = en(a),
            m = { start: "0%", center: "50%", end: "100%" }[v],
            h =
              (null !==
                (l = null === (r = s.arrow) || void 0 === r ? void 0 : r.x) &&
              void 0 !== l
                ? l
                : 0) +
              c / 2,
            y =
              (null !==
                (i = null === (o = s.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== i
                ? i
                : 0) +
              f / 2,
            g = "",
            w = "";
          return (
            "bottom" === p
              ? ((g = d ? m : "".concat(h, "px")), (w = "".concat(-f, "px")))
              : "top" === p
              ? ((g = d ? m : "".concat(h, "px")),
                (w = "".concat(u.floating.height + f, "px")))
              : "right" === p
              ? ((g = "".concat(-f, "px")), (w = d ? m : "".concat(y, "px")))
              : "left" === p &&
                ((g = "".concat(u.floating.width + f, "px")),
                (w = d ? m : "".concat(y, "px"))),
            { data: { x: g, y: w } }
          );
        },
      });
      function en(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var er = l.forwardRef((e, t) => {
        var n, r;
        let { container: o, ...a } = e,
          [u, s] = l.useState(!1);
        (0, O.b)(() => s(!0), []);
        let d =
          o ||
          (u &&
            (null === (r = globalThis) || void 0 === r
              ? void 0
              : null === (n = r.document) || void 0 === n
              ? void 0
              : n.body));
        return d
          ? i.createPortal((0, h.jsx)(p.WV.div, { ...a, ref: t }), d)
          : null;
      });
      er.displayName = "Portal";
      var eo = n(26052),
        el = n(25841),
        ei = n(53927),
        ea = l.forwardRef((e, t) =>
          (0, h.jsx)(p.WV.span, {
            ...e,
            ref: t,
            style: {
              position: "absolute",
              border: 0,
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              wordWrap: "normal",
              ...e.style,
            },
          })
        );
      ea.displayName = "VisuallyHidden";
      var eu = n(81333),
        es = n(8777),
        ed = [" ", "Enter", "ArrowUp", "ArrowDown"],
        ec = [" ", "Enter"],
        ef = "Select",
        [ep, ev, em] = (0, s.B)(ef),
        [eh, ey] = (0, c.b)(ef, [em, H]),
        eg = H(),
        [ew, ex] = eh(ef),
        [eb, eC] = eh(ef),
        eE = (e) => {
          let {
              __scopeSelect: t,
              children: n,
              open: r,
              defaultOpen: o,
              onOpenChange: i,
              value: a,
              defaultValue: u,
              onValueChange: s,
              dir: d,
              name: c,
              autoComplete: p,
              disabled: v,
              required: m,
              form: y,
            } = e,
            g = eg(t),
            [w, x] = l.useState(null),
            [b, C] = l.useState(null),
            [E, S] = l.useState(!1),
            R = (0, f.gm)(d),
            [j = !1, P] = (0, el.T)({ prop: r, defaultProp: o, onChange: i }),
            [M, N] = (0, el.T)({ prop: a, defaultProp: u, onChange: s }),
            T = l.useRef(null),
            k = !w || y || !!w.closest("form"),
            [D, A] = l.useState(new Set()),
            W = Array.from(D)
              .map((e) => e.props.value)
              .join(";");
          return (0, h.jsx)(z, {
            ...g,
            children: (0, h.jsxs)(ew, {
              required: m,
              scope: t,
              trigger: w,
              onTriggerChange: x,
              valueNode: b,
              onValueNodeChange: C,
              valueNodeHasChildren: E,
              onValueNodeHasChildrenChange: S,
              contentId: (0, L.M)(),
              value: M,
              onValueChange: N,
              open: j,
              onOpenChange: P,
              dir: R,
              triggerPointerDownPosRef: T,
              disabled: v,
              children: [
                (0, h.jsx)(ep.Provider, {
                  scope: t,
                  children: (0, h.jsx)(eb, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: l.useCallback((e) => {
                      A((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: l.useCallback((e) => {
                      A((t) => {
                        let n = new Set(t);
                        return n.delete(e), n;
                      });
                    }, []),
                    children: n,
                  }),
                }),
                k
                  ? (0, h.jsxs)(
                      e6,
                      {
                        "aria-hidden": !0,
                        required: m,
                        tabIndex: -1,
                        name: c,
                        autoComplete: p,
                        value: M,
                        onChange: (e) => N(e.target.value),
                        disabled: v,
                        form: y,
                        children: [
                          void 0 === M
                            ? (0, h.jsx)("option", { value: "" })
                            : null,
                          Array.from(D),
                        ],
                      },
                      W
                    )
                  : null,
              ],
            }),
          });
        };
      eE.displayName = ef;
      var eS = "SelectTrigger",
        eR = l.forwardRef((e, t) => {
          let { __scopeSelect: n, disabled: r = !1, ...o } = e,
            i = eg(n),
            a = ex(eS, n),
            s = a.disabled || r,
            c = (0, d.e)(t, a.onTriggerChange),
            f = ev(n),
            v = l.useRef("touch"),
            [m, y, g] = te((e) => {
              let t = f().filter((e) => !e.disabled),
                n = t.find((e) => e.value === a.value),
                r = tt(t, e, n);
              void 0 !== r && a.onValueChange(r.value);
            }),
            w = (e) => {
              s || (a.onOpenChange(!0), g()),
                e &&
                  (a.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  });
            };
          return (0, h.jsx)(Y, {
            asChild: !0,
            ...i,
            children: (0, h.jsx)(p.WV.button, {
              type: "button",
              role: "combobox",
              "aria-controls": a.contentId,
              "aria-expanded": a.open,
              "aria-required": a.required,
              "aria-autocomplete": "none",
              dir: a.dir,
              "data-state": a.open ? "open" : "closed",
              disabled: s,
              "data-disabled": s ? "" : void 0,
              "data-placeholder": e4(a.value) ? "" : void 0,
              ...o,
              ref: c,
              onClick: (0, u.M)(o.onClick, (e) => {
                e.currentTarget.focus(), "mouse" !== v.current && w(e);
              }),
              onPointerDown: (0, u.M)(o.onPointerDown, (e) => {
                v.current = e.pointerType;
                let t = e.target;
                t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    "mouse" === e.pointerType &&
                    (w(e), e.preventDefault());
              }),
              onKeyDown: (0, u.M)(o.onKeyDown, (e) => {
                let t = "" !== m.current;
                e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  y(e.key),
                  (!t || " " !== e.key) &&
                    ed.includes(e.key) &&
                    (w(), e.preventDefault());
              }),
            }),
          });
        });
      eR.displayName = eS;
      var ej = "SelectValue",
        eP = l.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              className: r,
              style: o,
              children: l,
              placeholder: i = "",
              ...a
            } = e,
            u = ex(ej, n),
            { onValueNodeHasChildrenChange: s } = u,
            c = void 0 !== l,
            f = (0, d.e)(t, u.onValueNodeChange);
          return (
            (0, O.b)(() => {
              s(c);
            }, [s, c]),
            (0, h.jsx)(p.WV.span, {
              ...a,
              ref: f,
              style: { pointerEvents: "none" },
              children: e4(u.value)
                ? (0, h.jsx)(h.Fragment, { children: i })
                : l,
            })
          );
        });
      eP.displayName = ej;
      var eM = l.forwardRef((e, t) => {
        let { __scopeSelect: n, children: r, ...o } = e;
        return (0, h.jsx)(p.WV.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼",
        });
      });
      eM.displayName = "SelectIcon";
      var eN = (e) => (0, h.jsx)(er, { asChild: !0, ...e });
      eN.displayName = "SelectPortal";
      var eT = "SelectContent",
        ek = l.forwardRef((e, t) => {
          let n = ex(eT, e.__scopeSelect),
            [r, o] = l.useState();
          return ((0, O.b)(() => {
            o(new DocumentFragment());
          }, []),
          n.open)
            ? (0, h.jsx)(eA, { ...e, ref: t })
            : r
            ? i.createPortal(
                (0, h.jsx)(eD, {
                  scope: e.__scopeSelect,
                  children: (0, h.jsx)(ep.Slot, {
                    scope: e.__scopeSelect,
                    children: (0, h.jsx)("div", { children: e.children }),
                  }),
                }),
                r
              )
            : null;
        });
      ek.displayName = eT;
      var [eD, eL] = eh(eT),
        eA = l.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              position: r = "item-aligned",
              onCloseAutoFocus: o,
              onEscapeKeyDown: i,
              onPointerDownOutside: a,
              side: s,
              sideOffset: c,
              align: f,
              alignOffset: p,
              arrowPadding: v,
              collisionBoundary: m,
              collisionPadding: y,
              sticky: g,
              hideWhenDetached: x,
              avoidCollisions: b,
              ...S
            } = e,
            R = ex(eT, n),
            [j, M] = l.useState(null),
            [N, T] = l.useState(null),
            k = (0, d.e)(t, (e) => M(e)),
            [D, L] = l.useState(null),
            [A, W] = l.useState(null),
            I = ev(n),
            [O, V] = l.useState(!1),
            _ = l.useRef(!1);
          l.useEffect(() => {
            if (j) return (0, eu.Ry)(j);
          }, [j]),
            l.useEffect(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : E()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : E()
                ),
                C++,
                () => {
                  1 === C &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    C--;
                }
              );
            }, []);
          let F = l.useCallback(
              (e) => {
                let [t, ...n] = I().map((e) => e.ref.current),
                  [r] = n.slice(-1),
                  o = document.activeElement;
                for (let n of e)
                  if (
                    n === o ||
                    (null == n || n.scrollIntoView({ block: "nearest" }),
                    n === t && N && (N.scrollTop = 0),
                    n === r && N && (N.scrollTop = N.scrollHeight),
                    null == n || n.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [I, N]
            ),
            H = l.useCallback(() => F([D, j]), [F, D, j]);
          l.useEffect(() => {
            O && H();
          }, [O, H]);
          let { onOpenChange: B, triggerPointerDownPosRef: K } = R;
          l.useEffect(() => {
            if (j) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var n, r, o, l;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null !==
                          (o =
                            null === (n = K.current) || void 0 === n
                              ? void 0
                              : n.x) && void 0 !== o
                          ? o
                          : 0)
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null !==
                          (l =
                            null === (r = K.current) || void 0 === r
                              ? void 0
                              : r.y) && void 0 !== l
                          ? l
                          : 0)
                    ),
                  };
                },
                n = (n) => {
                  e.x <= 10 && e.y <= 10
                    ? n.preventDefault()
                    : j.contains(n.target) || B(!1),
                    document.removeEventListener("pointermove", t),
                    (K.current = null);
                };
              return (
                null !== K.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", n, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", n, {
                      capture: !0,
                    });
                }
              );
            }
          }, [j, B, K]),
            l.useEffect(() => {
              let e = () => B(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e);
                }
              );
            }, [B]);
          let [z, U] = te((e) => {
              let t = I().filter((e) => !e.disabled),
                n = t.find((e) => e.ref.current === document.activeElement),
                r = tt(t, e, n);
              r && setTimeout(() => r.ref.current.focus());
            }),
            Y = l.useCallback(
              (e, t, n) => {
                let r = !_.current && !n;
                ((void 0 !== R.value && R.value === t) || r) &&
                  (L(e), r && (_.current = !0));
              },
              [R.value]
            ),
            Z = l.useCallback(() => (null == j ? void 0 : j.focus()), [j]),
            $ = l.useCallback(
              (e, t, n) => {
                let r = !_.current && !n;
                ((void 0 !== R.value && R.value === t) || r) && W(e);
              },
              [R.value]
            ),
            q = "popper" === r ? eI : eW,
            X =
              q === eI
                ? {
                    side: s,
                    sideOffset: c,
                    align: f,
                    alignOffset: p,
                    arrowPadding: v,
                    collisionBoundary: m,
                    collisionPadding: y,
                    sticky: g,
                    hideWhenDetached: x,
                    avoidCollisions: b,
                  }
                : {};
          return (0, h.jsx)(eD, {
            scope: n,
            content: j,
            viewport: N,
            onViewportChange: T,
            itemRefCallback: Y,
            selectedItem: D,
            onItemLeave: Z,
            itemTextRefCallback: $,
            focusSelectedItem: H,
            selectedItemText: A,
            position: r,
            isPositioned: O,
            searchRef: z,
            children: (0, h.jsx)(es.Z, {
              as: eo.g7,
              allowPinchZoom: !0,
              children: (0, h.jsx)(P, {
                asChild: !0,
                trapped: R.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: (0, u.M)(o, (e) => {
                  var t;
                  null === (t = R.trigger) ||
                    void 0 === t ||
                    t.focus({ preventScroll: !0 }),
                    e.preventDefault();
                }),
                children: (0, h.jsx)(w, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: a,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => R.onOpenChange(!1),
                  children: (0, h.jsx)(q, {
                    role: "listbox",
                    id: R.contentId,
                    "data-state": R.open ? "open" : "closed",
                    dir: R.dir,
                    onContextMenu: (e) => e.preventDefault(),
                    ...S,
                    ...X,
                    onPlaced: () => V(!0),
                    ref: k,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...S.style,
                    },
                    onKeyDown: (0, u.M)(S.onKeyDown, (e) => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ("Tab" === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || U(e.key),
                        ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                      ) {
                        let t = I()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        if (
                          (["ArrowUp", "End"].includes(e.key) &&
                            (t = t.slice().reverse()),
                          ["ArrowUp", "ArrowDown"].includes(e.key))
                        ) {
                          let n = e.target,
                            r = t.indexOf(n);
                          t = t.slice(r + 1);
                        }
                        setTimeout(() => F(t)), e.preventDefault();
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      eA.displayName = "SelectContentImpl";
      var eW = l.forwardRef((e, t) => {
        let { __scopeSelect: n, onPlaced: r, ...o } = e,
          i = ex(eT, n),
          u = eL(eT, n),
          [s, c] = l.useState(null),
          [f, v] = l.useState(null),
          m = (0, d.e)(t, (e) => v(e)),
          y = ev(n),
          g = l.useRef(!1),
          w = l.useRef(!0),
          {
            viewport: x,
            selectedItem: b,
            selectedItemText: C,
            focusSelectedItem: E,
          } = u,
          S = l.useCallback(() => {
            if (i.trigger && i.valueNode && s && f && x && b && C) {
              let e = i.trigger.getBoundingClientRect(),
                t = f.getBoundingClientRect(),
                n = i.valueNode.getBoundingClientRect(),
                o = C.getBoundingClientRect();
              if ("rtl" !== i.dir) {
                let r = o.left - t.left,
                  l = n.left - r,
                  i = e.left - l,
                  u = e.width + i,
                  d = Math.max(u, t.width),
                  c = a(l, [10, Math.max(10, window.innerWidth - 10 - d)]);
                (s.style.minWidth = u + "px"), (s.style.left = c + "px");
              } else {
                let r = t.right - o.right,
                  l = window.innerWidth - n.right - r,
                  i = window.innerWidth - e.right - l,
                  u = e.width + i,
                  d = Math.max(u, t.width),
                  c = a(l, [10, Math.max(10, window.innerWidth - 10 - d)]);
                (s.style.minWidth = u + "px"), (s.style.right = c + "px");
              }
              let l = y(),
                u = window.innerHeight - 20,
                d = x.scrollHeight,
                c = window.getComputedStyle(f),
                p = parseInt(c.borderTopWidth, 10),
                v = parseInt(c.paddingTop, 10),
                m = parseInt(c.borderBottomWidth, 10),
                h = p + v + d + parseInt(c.paddingBottom, 10) + m,
                w = Math.min(5 * b.offsetHeight, h),
                E = window.getComputedStyle(x),
                S = parseInt(E.paddingTop, 10),
                R = parseInt(E.paddingBottom, 10),
                j = e.top + e.height / 2 - 10,
                P = b.offsetHeight / 2,
                M = p + v + (b.offsetTop + P);
              if (M <= j) {
                let e = l.length > 0 && b === l[l.length - 1].ref.current;
                s.style.bottom = "0px";
                let t = f.clientHeight - x.offsetTop - x.offsetHeight;
                s.style.height =
                  M + Math.max(u - j, P + (e ? R : 0) + t + m) + "px";
              } else {
                let e = l.length > 0 && b === l[0].ref.current;
                s.style.top = "0px";
                let t = Math.max(j, p + x.offsetTop + (e ? S : 0) + P);
                (s.style.height = t + (h - M) + "px"),
                  (x.scrollTop = M - j + x.offsetTop);
              }
              (s.style.margin = "".concat(10, "px 0")),
                (s.style.minHeight = w + "px"),
                (s.style.maxHeight = u + "px"),
                null == r || r(),
                requestAnimationFrame(() => (g.current = !0));
            }
          }, [y, i.trigger, i.valueNode, s, f, x, b, C, i.dir, r]);
        (0, O.b)(() => S(), [S]);
        let [R, j] = l.useState();
        (0, O.b)(() => {
          f && j(window.getComputedStyle(f).zIndex);
        }, [f]);
        let P = l.useCallback(
          (e) => {
            e && !0 === w.current && (S(), null == E || E(), (w.current = !1));
          },
          [S, E]
        );
        return (0, h.jsx)(eO, {
          scope: n,
          contentWrapper: s,
          shouldExpandOnScrollRef: g,
          onScrollButtonChange: P,
          children: (0, h.jsx)("div", {
            ref: c,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: R,
            },
            children: (0, h.jsx)(p.WV.div, {
              ...o,
              ref: m,
              style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
            }),
          }),
        });
      });
      eW.displayName = "SelectItemAlignedPosition";
      var eI = l.forwardRef((e, t) => {
        let {
            __scopeSelect: n,
            align: r = "start",
            collisionPadding: o = 10,
            ...l
          } = e,
          i = eg(n);
        return (0, h.jsx)(X, {
          ...i,
          ...l,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...l.style,
            "--radix-select-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-select-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      eI.displayName = "SelectPopperPosition";
      var [eO, eV] = eh(eT, {}),
        e_ = "SelectViewport",
        eF = l.forwardRef((e, t) => {
          let { __scopeSelect: n, nonce: r, ...o } = e,
            i = eL(e_, n),
            a = eV(e_, n),
            s = (0, d.e)(t, i.onViewportChange),
            c = l.useRef(0);
          return (0, h.jsxs)(h.Fragment, {
            children: [
              (0, h.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: r,
              }),
              (0, h.jsx)(ep.Slot, {
                scope: n,
                children: (0, h.jsx)(p.WV.div, {
                  "data-radix-select-viewport": "",
                  role: "presentation",
                  ...o,
                  ref: s,
                  style: {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...o.style,
                  },
                  onScroll: (0, u.M)(o.onScroll, (e) => {
                    let t = e.currentTarget,
                      { contentWrapper: n, shouldExpandOnScrollRef: r } = a;
                    if ((null == r ? void 0 : r.current) && n) {
                      let e = Math.abs(c.current - t.scrollTop);
                      if (e > 0) {
                        let r = window.innerHeight - 20,
                          o = Math.max(
                            parseFloat(n.style.minHeight),
                            parseFloat(n.style.height)
                          );
                        if (o < r) {
                          let l = o + e,
                            i = Math.min(r, l),
                            a = l - i;
                          (n.style.height = i + "px"),
                            "0px" === n.style.bottom &&
                              ((t.scrollTop = a > 0 ? a : 0),
                              (n.style.justifyContent = "flex-end"));
                        }
                      }
                    }
                    c.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      eF.displayName = e_;
      var eH = "SelectGroup",
        [eB, eK] = eh(eH),
        ez = l.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = (0, L.M)();
          return (0, h.jsx)(eB, {
            scope: n,
            id: o,
            children: (0, h.jsx)(p.WV.div, {
              role: "group",
              "aria-labelledby": o,
              ...r,
              ref: t,
            }),
          });
        });
      ez.displayName = eH;
      var eU = "SelectLabel",
        eY = l.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e,
            o = eK(eU, n);
          return (0, h.jsx)(p.WV.div, { id: o.id, ...r, ref: t });
        });
      eY.displayName = eU;
      var eZ = "SelectItem",
        [e$, eq] = eh(eZ),
        eX = l.forwardRef((e, t) => {
          let {
              __scopeSelect: n,
              value: r,
              disabled: o = !1,
              textValue: i,
              ...a
            } = e,
            s = ex(eZ, n),
            c = eL(eZ, n),
            f = s.value === r,
            [v, m] = l.useState(null != i ? i : ""),
            [y, g] = l.useState(!1),
            w = (0, d.e)(t, (e) => {
              var t;
              return null === (t = c.itemRefCallback) || void 0 === t
                ? void 0
                : t.call(c, e, r, o);
            }),
            x = (0, L.M)(),
            b = l.useRef("touch"),
            C = () => {
              o || (s.onValueChange(r), s.onOpenChange(!1));
            };
          if ("" === r)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
          return (0, h.jsx)(e$, {
            scope: n,
            value: r,
            disabled: o,
            textId: x,
            isSelected: f,
            onItemTextChange: l.useCallback((e) => {
              m((t) => {
                var n;
                return (
                  t ||
                  (null !== (n = null == e ? void 0 : e.textContent) &&
                  void 0 !== n
                    ? n
                    : ""
                  ).trim()
                );
              });
            }, []),
            children: (0, h.jsx)(ep.ItemSlot, {
              scope: n,
              value: r,
              disabled: o,
              textValue: v,
              children: (0, h.jsx)(p.WV.div, {
                role: "option",
                "aria-labelledby": x,
                "data-highlighted": y ? "" : void 0,
                "aria-selected": f && y,
                "data-state": f ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...a,
                ref: w,
                onFocus: (0, u.M)(a.onFocus, () => g(!0)),
                onBlur: (0, u.M)(a.onBlur, () => g(!1)),
                onClick: (0, u.M)(a.onClick, () => {
                  "mouse" !== b.current && C();
                }),
                onPointerUp: (0, u.M)(a.onPointerUp, () => {
                  "mouse" === b.current && C();
                }),
                onPointerDown: (0, u.M)(a.onPointerDown, (e) => {
                  b.current = e.pointerType;
                }),
                onPointerMove: (0, u.M)(a.onPointerMove, (e) => {
                  if (((b.current = e.pointerType), o)) {
                    var t;
                    null === (t = c.onItemLeave) || void 0 === t || t.call(c);
                  } else
                    "mouse" === b.current &&
                      e.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: (0, u.M)(a.onPointerLeave, (e) => {
                  if (e.currentTarget === document.activeElement) {
                    var t;
                    null === (t = c.onItemLeave) || void 0 === t || t.call(c);
                  }
                }),
                onKeyDown: (0, u.M)(a.onKeyDown, (e) => {
                  var t;
                  ((null === (t = c.searchRef) || void 0 === t
                    ? void 0
                    : t.current) !== "" &&
                    " " === e.key) ||
                    (ec.includes(e.key) && C(),
                    " " === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      eX.displayName = eZ;
      var eG = "SelectItemText",
        eJ = l.forwardRef((e, t) => {
          let { __scopeSelect: n, className: r, style: o, ...a } = e,
            u = ex(eG, n),
            s = eL(eG, n),
            c = eq(eG, n),
            f = eC(eG, n),
            [v, m] = l.useState(null),
            y = (0, d.e)(
              t,
              (e) => m(e),
              c.onItemTextChange,
              (e) => {
                var t;
                return null === (t = s.itemTextRefCallback) || void 0 === t
                  ? void 0
                  : t.call(s, e, c.value, c.disabled);
              }
            ),
            g = null == v ? void 0 : v.textContent,
            w = l.useMemo(
              () =>
                (0, h.jsx)(
                  "option",
                  { value: c.value, disabled: c.disabled, children: g },
                  c.value
                ),
              [c.disabled, c.value, g]
            ),
            { onNativeOptionAdd: x, onNativeOptionRemove: b } = f;
          return (
            (0, O.b)(() => (x(w), () => b(w)), [x, b, w]),
            (0, h.jsxs)(h.Fragment, {
              children: [
                (0, h.jsx)(p.WV.span, { id: c.textId, ...a, ref: y }),
                c.isSelected && u.valueNode && !u.valueNodeHasChildren
                  ? i.createPortal(a.children, u.valueNode)
                  : null,
              ],
            })
          );
        });
      eJ.displayName = eG;
      var eQ = "SelectItemIndicator",
        e0 = l.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return eq(eQ, n).isSelected
            ? (0, h.jsx)(p.WV.span, { "aria-hidden": !0, ...r, ref: t })
            : null;
        });
      e0.displayName = eQ;
      var e1 = "SelectScrollUpButton",
        e2 = l.forwardRef((e, t) => {
          let n = eL(e1, e.__scopeSelect),
            r = eV(e1, e.__scopeSelect),
            [o, i] = l.useState(!1),
            a = (0, d.e)(t, r.onScrollButtonChange);
          return (
            (0, O.b)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    i(t.scrollTop > 0);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            o
              ? (0, h.jsx)(e3, {
                  ...e,
                  ref: a,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                  },
                })
              : null
          );
        });
      e2.displayName = e1;
      var e9 = "SelectScrollDownButton",
        e5 = l.forwardRef((e, t) => {
          let n = eL(e9, e.__scopeSelect),
            r = eV(e9, e.__scopeSelect),
            [o, i] = l.useState(!1),
            a = (0, d.e)(t, r.onScrollButtonChange);
          return (
            (0, O.b)(() => {
              if (n.viewport && n.isPositioned) {
                let e = function () {
                    let e = t.scrollHeight - t.clientHeight;
                    i(Math.ceil(t.scrollTop) < e);
                  },
                  t = n.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [n.viewport, n.isPositioned]),
            o
              ? (0, h.jsx)(e3, {
                  ...e,
                  ref: a,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = n;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                  },
                })
              : null
          );
        });
      e5.displayName = e9;
      var e3 = l.forwardRef((e, t) => {
          let { __scopeSelect: n, onAutoScroll: r, ...o } = e,
            i = eL("SelectScrollButton", n),
            a = l.useRef(null),
            s = ev(n),
            d = l.useCallback(() => {
              null !== a.current &&
                (window.clearInterval(a.current), (a.current = null));
            }, []);
          return (
            l.useEffect(() => () => d(), [d]),
            (0, O.b)(() => {
              var e;
              let t = s().find((e) => e.ref.current === document.activeElement);
              null == t ||
                null === (e = t.ref.current) ||
                void 0 === e ||
                e.scrollIntoView({ block: "nearest" });
            }, [s]),
            (0, h.jsx)(p.WV.div, {
              "aria-hidden": !0,
              ...o,
              ref: t,
              style: { flexShrink: 0, ...o.style },
              onPointerDown: (0, u.M)(o.onPointerDown, () => {
                null === a.current && (a.current = window.setInterval(r, 50));
              }),
              onPointerMove: (0, u.M)(o.onPointerMove, () => {
                var e;
                null === (e = i.onItemLeave) || void 0 === e || e.call(i),
                  null === a.current && (a.current = window.setInterval(r, 50));
              }),
              onPointerLeave: (0, u.M)(o.onPointerLeave, () => {
                d();
              }),
            })
          );
        }),
        e8 = l.forwardRef((e, t) => {
          let { __scopeSelect: n, ...r } = e;
          return (0, h.jsx)(p.WV.div, { "aria-hidden": !0, ...r, ref: t });
        });
      e8.displayName = "SelectSeparator";
      var e7 = "SelectArrow";
      function e4(e) {
        return "" === e || void 0 === e;
      }
      l.forwardRef((e, t) => {
        let { __scopeSelect: n, ...r } = e,
          o = eg(n),
          l = ex(e7, n),
          i = eL(e7, n);
        return l.open && "popper" === i.position
          ? (0, h.jsx)(Q, { ...o, ...r, ref: t })
          : null;
      }).displayName = e7;
      var e6 = l.forwardRef((e, t) => {
        let { value: n, ...r } = e,
          o = l.useRef(null),
          i = (0, d.e)(t, o),
          a = (0, ei.D)(n);
        return (
          l.useEffect(() => {
            let e = o.current,
              t = Object.getOwnPropertyDescriptor(
                window.HTMLSelectElement.prototype,
                "value"
              ).set;
            if (a !== n && t) {
              let r = new Event("change", { bubbles: !0 });
              t.call(e, n), e.dispatchEvent(r);
            }
          }, [a, n]),
          (0, h.jsx)(ea, {
            asChild: !0,
            children: (0, h.jsx)("select", { ...r, ref: i, defaultValue: n }),
          })
        );
      });
      function te(e) {
        let t = (0, v.W)(e),
          n = l.useRef(""),
          r = l.useRef(0),
          o = l.useCallback(
            (e) => {
              let o = n.current + e;
              t(o),
                (function e(t) {
                  (n.current = t),
                    window.clearTimeout(r.current),
                    "" !== t &&
                      (r.current = window.setTimeout(() => e(""), 1e3));
                })(o);
            },
            [t]
          ),
          i = l.useCallback(() => {
            (n.current = ""), window.clearTimeout(r.current);
          }, []);
        return (
          l.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i]
        );
      }
      function tt(e, t, n) {
        var r;
        let o =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          l =
            ((r = Math.max(n ? e.indexOf(n) : -1, 0)),
            e.map((t, n) => e[(r + n) % e.length]));
        1 === o.length && (l = l.filter((e) => e !== n));
        let i = l.find((e) =>
          e.textValue.toLowerCase().startsWith(o.toLowerCase())
        );
        return i !== n ? i : void 0;
      }
      e6.displayName = "BubbleSelect";
      var tn = eE,
        tr = eR,
        to = eP,
        tl = eM,
        ti = eN,
        ta = ek,
        tu = eF,
        ts = ez,
        td = eY,
        tc = eX,
        tf = eJ,
        tp = e0,
        tv = e2,
        tm = e5,
        th = e8;
    },
    26052: function (e, t, n) {
      n.d(t, {
        g7: function () {
          return i;
        },
      });
      var r = n(83112),
        o = n(90413),
        l = n(20209),
        i = r.forwardRef((e, t) => {
          let { children: n, ...o } = e,
            i = r.Children.toArray(n),
            u = i.find(s);
          if (u) {
            let e = u.props.children,
              n = i.map((t) =>
                t !== u
                  ? t
                  : r.Children.count(e) > 1
                  ? r.Children.only(null)
                  : r.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, l.jsx)(a, {
              ...o,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, l.jsx)(a, { ...o, ref: t, children: n });
        });
      i.displayName = "Slot";
      var a = r.forwardRef((e, t) => {
        let { children: n, ...l } = e;
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
                : n.props.ref || n.ref,
            u = (function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  l = t[r];
                /^on[A-Z]/.test(r)
                  ? o && l
                    ? (n[r] = (...e) => {
                        l(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : "style" === r
                  ? (n[r] = { ...o, ...l })
                  : "className" === r &&
                    (n[r] = [o, l].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(l, n.props);
          return (
            n.type !== r.Fragment && (u.ref = t ? (0, o.F)(t, a) : a),
            r.cloneElement(n, u)
          );
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      a.displayName = "SlotClone";
      var u = ({ children: e }) => (0, l.jsx)(l.Fragment, { children: e });
      function s(e) {
        return r.isValidElement(e) && e.type === u;
      }
    },
    53927: function (e, t, n) {
      n.d(t, {
        D: function () {
          return o;
        },
      });
      var r = n(83112);
      function o(e) {
        let t = r.useRef({ value: e, previous: e });
        return r.useMemo(
          () => (
            t.current.value !== e &&
              ((t.current.previous = t.current.value), (t.current.value = e)),
            t.current.previous
          ),
          [e]
        );
      }
    },
  },
]);
