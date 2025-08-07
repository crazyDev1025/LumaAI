"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3638],
  {
    46066: function (e, t, r) {
      r.d(t, {
        default: function () {
          return o.a;
        },
      });
      var n = r(86746),
        o = r.n(n);
    },
    48636: function (e, t, r) {
      r.d(t, {
        M: function () {
          return n;
        },
      });
      function n(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
        return function (n) {
          if ((e?.(n), !1 === r || !n.defaultPrevented)) return t?.(n);
        };
      }
    },
    81419: function (e, t, r) {
      r.d(t, {
        B: function () {
          return c;
        },
      });
      var n = r(83112),
        o = r(95259),
        u = r(90413),
        l = r(26052),
        i = r(20209);
      function c(e) {
        let t = e + "CollectionProvider",
          [r, c] = (0, o.b)(t),
          [a, f] = r(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          s = (e) => {
            let { scope: t, children: r } = e,
              o = n.useRef(null),
              u = n.useRef(new Map()).current;
            return (0, i.jsx)(a, {
              scope: t,
              itemMap: u,
              collectionRef: o,
              children: r,
            });
          };
        s.displayName = t;
        let d = e + "CollectionSlot",
          p = n.forwardRef((e, t) => {
            let { scope: r, children: n } = e,
              o = f(d, r),
              c = (0, u.e)(t, o.collectionRef);
            return (0, i.jsx)(l.g7, { ref: c, children: n });
          });
        p.displayName = d;
        let m = e + "CollectionItemSlot",
          v = "data-radix-collection-item",
          w = n.forwardRef((e, t) => {
            let { scope: r, children: o, ...c } = e,
              a = n.useRef(null),
              s = (0, u.e)(t, a),
              d = f(m, r);
            return (
              n.useEffect(
                () => (
                  d.itemMap.set(a, { ref: a, ...c }),
                  () => void d.itemMap.delete(a)
                )
              ),
              (0, i.jsx)(l.g7, { [v]: "", ref: s, children: o })
            );
          });
        return (
          (w.displayName = m),
          [
            { Provider: s, Slot: p, ItemSlot: w },
            function (t) {
              let r = f(e + "CollectionConsumer", t);
              return n.useCallback(() => {
                let e = r.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll("[".concat(v, "]")));
                return Array.from(r.itemMap.values()).sort(
                  (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)
                );
              }, [r.collectionRef, r.itemMap]);
            },
            c,
          ]
        );
      }
    },
    90413: function (e, t, r) {
      r.d(t, {
        F: function () {
          return u;
        },
        e: function () {
          return l;
        },
      });
      var n = r(83112);
      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t);
      }
      function u(...e) {
        return (t) => {
          let r = !1,
            n = e.map((e) => {
              let n = o(e, t);
              return r || "function" != typeof n || (r = !0), n;
            });
          if (r)
            return () => {
              for (let t = 0; t < n.length; t++) {
                let r = n[t];
                "function" == typeof r ? r() : o(e[t], null);
              }
            };
        };
      }
      function l(...e) {
        return n.useCallback(u(...e), e);
      }
    },
    95259: function (e, t, r) {
      r.d(t, {
        b: function () {
          return u;
        },
      });
      var n = r(83112),
        o = r(20209);
      function u(e, t = []) {
        let r = [],
          u = () => {
            let t = r.map((e) => n.createContext(e));
            return function (r) {
              let o = r?.[e] || t;
              return n.useMemo(
                () => ({ [`__scope${e}`]: { ...r, [e]: o } }),
                [r, o]
              );
            };
          };
        return (
          (u.scopeName = e),
          [
            function (t, u) {
              let l = n.createContext(u),
                i = r.length;
              r = [...r, u];
              let c = (t) => {
                let { scope: r, children: u, ...c } = t,
                  a = r?.[e]?.[i] || l,
                  f = n.useMemo(() => c, Object.values(c));
                return (0, o.jsx)(a.Provider, { value: f, children: u });
              };
              return (
                (c.displayName = t + "Provider"),
                [
                  c,
                  function (r, o) {
                    let c = o?.[e]?.[i] || l,
                      a = n.useContext(c);
                    if (a) return a;
                    if (void 0 !== u) return u;
                    throw Error(`\`${r}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let r = () => {
                let r = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = r.reduce((t, { useScope: r, scopeName: n }) => {
                    let o = r(e)[`__scope${n}`];
                    return { ...t, ...o };
                  }, {});
                  return n.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o]
                  );
                };
              };
              return (r.scopeName = t.scopeName), r;
            })(u, ...t),
          ]
        );
      }
    },
    15600: function (e, t, r) {
      r.d(t, {
        WV: function () {
          return i;
        },
        jH: function () {
          return c;
        },
      });
      var n = r(83112),
        o = r(32017),
        u = r(26052),
        l = r(20209),
        i = [
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
          let r = n.forwardRef((e, r) => {
            let { asChild: n, ...o } = e,
              i = n ? u.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, l.jsx)(i, { ...o, ref: r })
            );
          });
          return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
        }, {});
      function c(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    81350: function (e, t, r) {
      r.d(t, {
        Pc: function () {
          return R;
        },
        ck: function () {
          return I;
        },
        fC: function () {
          return S;
        },
      });
      var n = r(83112),
        o = r(48636),
        u = r(81419),
        l = r(90413),
        i = r(95259),
        c = r(11447),
        a = r(15600),
        f = r(12945),
        s = r(25841),
        d = r(71417),
        p = r(20209),
        m = "rovingFocusGroup.onEntryFocus",
        v = { bubbles: !1, cancelable: !0 },
        w = "RovingFocusGroup",
        [g, y, h] = (0, u.B)(w),
        [b, R] = (0, i.b)(w, [h]),
        [x, C] = b(w),
        M = n.forwardRef((e, t) =>
          (0, p.jsx)(g.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, p.jsx)(g.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, p.jsx)(E, { ...e, ref: t }),
            }),
          })
        );
      M.displayName = w;
      var E = n.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              orientation: u,
              loop: i = !1,
              dir: c,
              currentTabStopId: w,
              defaultCurrentTabStopId: g,
              onCurrentTabStopIdChange: h,
              onEntryFocus: b,
              preventScrollOnEntryFocus: R = !1,
              ...C
            } = e,
            M = n.useRef(null),
            E = (0, l.e)(t, M),
            j = (0, d.gm)(c),
            [F = null, A] = (0, s.T)({ prop: w, defaultProp: g, onChange: h }),
            [S, I] = n.useState(!1),
            P = (0, f.W)(b),
            _ = y(r),
            k = n.useRef(!1),
            [D, T] = n.useState(0);
          return (
            n.useEffect(() => {
              let e = M.current;
              if (e)
                return (
                  e.addEventListener(m, P), () => e.removeEventListener(m, P)
                );
            }, [P]),
            (0, p.jsx)(x, {
              scope: r,
              orientation: u,
              dir: j,
              loop: i,
              currentTabStopId: F,
              onItemFocus: n.useCallback((e) => A(e), [A]),
              onItemShiftTab: n.useCallback(() => I(!0), []),
              onFocusableItemAdd: n.useCallback(() => T((e) => e + 1), []),
              onFocusableItemRemove: n.useCallback(() => T((e) => e - 1), []),
              children: (0, p.jsx)(a.WV.div, {
                tabIndex: S || 0 === D ? -1 : 0,
                "data-orientation": u,
                ...C,
                ref: E,
                style: { outline: "none", ...e.style },
                onMouseDown: (0, o.M)(e.onMouseDown, () => {
                  k.current = !0;
                }),
                onFocus: (0, o.M)(e.onFocus, (e) => {
                  let t = !k.current;
                  if (e.target === e.currentTarget && t && !S) {
                    let t = new CustomEvent(m, v);
                    if (
                      (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                    ) {
                      let e = _().filter((e) => e.focusable);
                      N(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === F),
                          ...e,
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        R
                      );
                    }
                  }
                  k.current = !1;
                }),
                onBlur: (0, o.M)(e.onBlur, () => I(!1)),
              }),
            })
          );
        }),
        j = "RovingFocusGroupItem",
        F = n.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              focusable: u = !0,
              active: l = !1,
              tabStopId: i,
              ...f
            } = e,
            s = (0, c.M)(),
            d = i || s,
            m = C(j, r),
            v = m.currentTabStopId === d,
            w = y(r),
            { onFocusableItemAdd: h, onFocusableItemRemove: b } = m;
          return (
            n.useEffect(() => {
              if (u) return h(), () => b();
            }, [u, h, b]),
            (0, p.jsx)(g.ItemSlot, {
              scope: r,
              id: d,
              focusable: u,
              active: l,
              children: (0, p.jsx)(a.WV.span, {
                tabIndex: v ? 0 : -1,
                "data-orientation": m.orientation,
                ...f,
                ref: t,
                onMouseDown: (0, o.M)(e.onMouseDown, (e) => {
                  u ? m.onItemFocus(d) : e.preventDefault();
                }),
                onFocus: (0, o.M)(e.onFocus, () => m.onItemFocus(d)),
                onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                  if ("Tab" === e.key && e.shiftKey) {
                    m.onItemShiftTab();
                    return;
                  }
                  if (e.target !== e.currentTarget) return;
                  let t = (function (e, t, r) {
                    var n;
                    let o =
                      ((n = e.key),
                      "rtl" !== r
                        ? n
                        : "ArrowLeft" === n
                        ? "ArrowRight"
                        : "ArrowRight" === n
                        ? "ArrowLeft"
                        : n);
                    if (
                      !(
                        "vertical" === t &&
                        ["ArrowLeft", "ArrowRight"].includes(o)
                      ) &&
                      !(
                        "horizontal" === t &&
                        ["ArrowUp", "ArrowDown"].includes(o)
                      )
                    )
                      return A[o];
                  })(e, m.orientation, m.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let o = w()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ("last" === t) o.reverse();
                    else if ("prev" === t || "next" === t) {
                      var r, n;
                      "prev" === t && o.reverse();
                      let u = o.indexOf(e.currentTarget);
                      o = m.loop
                        ? ((r = o),
                          (n = u + 1),
                          r.map((e, t) => r[(n + t) % r.length]))
                        : o.slice(u + 1);
                    }
                    setTimeout(() => N(o));
                  }
                }),
              }),
            })
          );
        });
      F.displayName = j;
      var A = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function N(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = document.activeElement;
        for (let n of e)
          if (
            n === r ||
            (n.focus({ preventScroll: t }), document.activeElement !== r)
          )
            return;
      }
      var S = M,
        I = F;
    },
    26052: function (e, t, r) {
      r.d(t, {
        g7: function () {
          return l;
        },
      });
      var n = r(83112),
        o = r(90413),
        u = r(20209),
        l = n.forwardRef((e, t) => {
          let { children: r, ...o } = e,
            l = n.Children.toArray(r),
            c = l.find(a);
          if (c) {
            let e = c.props.children,
              r = l.map((t) =>
                t !== c
                  ? t
                  : n.Children.count(e) > 1
                  ? n.Children.only(null)
                  : n.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, u.jsx)(i, {
              ...o,
              ref: t,
              children: n.isValidElement(e)
                ? n.cloneElement(e, void 0, r)
                : null,
            });
          }
          return (0, u.jsx)(i, { ...o, ref: t, children: r });
        });
      l.displayName = "Slot";
      var i = n.forwardRef((e, t) => {
        let { children: r, ...u } = e;
        if (n.isValidElement(r)) {
          let e, l;
          let i =
              (e = Object.getOwnPropertyDescriptor(r.props, "ref")?.get) &&
              "isReactWarning" in e &&
              e.isReactWarning
                ? r.ref
                : (e = Object.getOwnPropertyDescriptor(r, "ref")?.get) &&
                  "isReactWarning" in e &&
                  e.isReactWarning
                ? r.props.ref
                : r.props.ref || r.ref,
            c = (function (e, t) {
              let r = { ...t };
              for (let n in t) {
                let o = e[n],
                  u = t[n];
                /^on[A-Z]/.test(n)
                  ? o && u
                    ? (r[n] = (...e) => {
                        u(...e), o(...e);
                      })
                    : o && (r[n] = o)
                  : "style" === n
                  ? (r[n] = { ...o, ...u })
                  : "className" === n &&
                    (r[n] = [o, u].filter(Boolean).join(" "));
              }
              return { ...e, ...r };
            })(u, r.props);
          return (
            r.type !== n.Fragment && (c.ref = t ? (0, o.F)(t, i) : i),
            n.cloneElement(r, c)
          );
        }
        return n.Children.count(r) > 1 ? n.Children.only(null) : null;
      });
      i.displayName = "SlotClone";
      var c = ({ children: e }) => (0, u.jsx)(u.Fragment, { children: e });
      function a(e) {
        return n.isValidElement(e) && e.type === c;
      }
    },
  },
]);
