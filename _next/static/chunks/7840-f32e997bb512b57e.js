"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7840],
  {
    41918: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = n(83112),
        i = {
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
      let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        u = (e, t) => {
          let n = (0, r.forwardRef)((n, u) => {
            let {
              color: l = "currentColor",
              size: a = 24,
              strokeWidth: s = 2,
              absoluteStrokeWidth: c,
              children: f,
              ...d
            } = n;
            return (0, r.createElement)(
              "svg",
              {
                ref: u,
                ...i,
                width: a,
                height: a,
                stroke: l,
                strokeWidth: c ? (24 * Number(s)) / Number(a) : s,
                className: "lucide lucide-".concat(o(e)),
                ...d,
              },
              [
                ...t.map((e) => {
                  let [t, n] = e;
                  return (0, r.createElement)(t, n);
                }),
                ...((Array.isArray(f) ? f : [f]) || []),
              ]
            );
          });
          return (n.displayName = "".concat(e)), n;
        };
    },
    63056: function (e, t, n) {
      n.d(t, {
        fC: function () {
          return x;
        },
        z$: function () {
          return O;
        },
      });
      var r = n(83112),
        i = n(90413),
        o = n(95259),
        u = n(48636),
        l = n(25841),
        a = n(53927),
        s = n(54527),
        c = n(52502),
        f = n(15600),
        d = n(20209),
        p = "Checkbox",
        [v, m] = (0, o.b)(p),
        [y, h] = v(p),
        b = r.forwardRef((e, t) => {
          let {
              __scopeCheckbox: n,
              name: o,
              checked: a,
              defaultChecked: s,
              required: c,
              disabled: p,
              value: v = "on",
              onCheckedChange: m,
              form: h,
              ...b
            } = e,
            [g, w] = r.useState(null),
            x = (0, i.e)(t, (e) => w(e)),
            O = r.useRef(!1),
            A = !g || h || !!g.closest("form"),
            [C = !1, R] = (0, l.T)({ prop: a, defaultProp: s, onChange: m }),
            j = r.useRef(C);
          return (
            r.useEffect(() => {
              let e = null == g ? void 0 : g.form;
              if (e) {
                let t = () => R(j.current);
                return (
                  e.addEventListener("reset", t),
                  () => e.removeEventListener("reset", t)
                );
              }
            }, [g, R]),
            (0, d.jsxs)(y, {
              scope: n,
              state: C,
              disabled: p,
              children: [
                (0, d.jsx)(f.WV.button, {
                  type: "button",
                  role: "checkbox",
                  "aria-checked": N(C) ? "mixed" : C,
                  "aria-required": c,
                  "data-state": k(C),
                  "data-disabled": p ? "" : void 0,
                  disabled: p,
                  value: v,
                  ...b,
                  ref: x,
                  onKeyDown: (0, u.M)(e.onKeyDown, (e) => {
                    "Enter" === e.key && e.preventDefault();
                  }),
                  onClick: (0, u.M)(e.onClick, (e) => {
                    R((e) => !!N(e) || !e),
                      A &&
                        ((O.current = e.isPropagationStopped()),
                        O.current || e.stopPropagation());
                  }),
                }),
                A &&
                  (0, d.jsx)(E, {
                    control: g,
                    bubbles: !O.current,
                    name: o,
                    value: v,
                    checked: C,
                    required: c,
                    disabled: p,
                    form: h,
                    style: { transform: "translateX(-100%)" },
                    defaultChecked: !N(s) && s,
                  }),
              ],
            })
          );
        });
      b.displayName = p;
      var g = "CheckboxIndicator",
        w = r.forwardRef((e, t) => {
          let { __scopeCheckbox: n, forceMount: r, ...i } = e,
            o = h(g, n);
          return (0, d.jsx)(c.z, {
            present: r || N(o.state) || !0 === o.state,
            children: (0, d.jsx)(f.WV.span, {
              "data-state": k(o.state),
              "data-disabled": o.disabled ? "" : void 0,
              ...i,
              ref: t,
              style: { pointerEvents: "none", ...e.style },
            }),
          });
        });
      w.displayName = g;
      var E = (e) => {
        let {
            control: t,
            checked: n,
            bubbles: i = !0,
            defaultChecked: o,
            ...u
          } = e,
          l = r.useRef(null),
          c = (0, a.D)(n),
          f = (0, s.t)(t);
        r.useEffect(() => {
          let e = l.current,
            t = Object.getOwnPropertyDescriptor(
              window.HTMLInputElement.prototype,
              "checked"
            ).set;
          if (c !== n && t) {
            let r = new Event("click", { bubbles: i });
            (e.indeterminate = N(n)), t.call(e, !N(n) && n), e.dispatchEvent(r);
          }
        }, [c, n, i]);
        let p = r.useRef(!N(n) && n);
        return (0, d.jsx)("input", {
          type: "checkbox",
          "aria-hidden": !0,
          defaultChecked: null != o ? o : p.current,
          ...u,
          tabIndex: -1,
          ref: l,
          style: {
            ...e.style,
            ...f,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
          },
        });
      };
      function N(e) {
        return "indeterminate" === e;
      }
      function k(e) {
        return N(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      var x = b,
        O = w;
    },
    63896: function (e, t, n) {
      n.d(t, {
        F: function () {
          return i;
        },
        e: function () {
          return o;
        },
      });
      var r = n(83112);
      function i(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function o(...e) {
        return r.useCallback(i(...e), e);
      }
    },
    71417: function (e, t, n) {
      n.d(t, {
        gm: function () {
          return o;
        },
      });
      var r = n(83112);
      n(20209);
      var i = r.createContext(void 0);
      function o(e) {
        let t = r.useContext(i);
        return e || t || "ltr";
      }
    },
    11447: function (e, t, n) {
      n.d(t, {
        M: function () {
          return a;
        },
      });
      var r,
        i = n(83112),
        o = n(91917),
        u = (r || (r = n.t(i, 2)))["useId".toString()] || (() => void 0),
        l = 0;
      function a(e) {
        let [t, n] = i.useState(u());
        return (
          (0, o.b)(() => {
            e || n((e) => e ?? String(l++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    52502: function (e, t, n) {
      n.d(t, {
        z: function () {
          return u;
        },
      });
      var r = n(83112),
        i = n(90413),
        o = n(91917),
        u = (e) => {
          var t, n;
          let u, a;
          let { present: s, children: c } = e,
            f = (function (e) {
              var t, n;
              let [i, u] = r.useState(),
                a = r.useRef({}),
                s = r.useRef(e),
                c = r.useRef("none"),
                [f, d] =
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
                  let e = l(a.current);
                  c.current = "mounted" === f ? e : "none";
                }, [f]),
                (0, o.b)(() => {
                  let t = a.current,
                    n = s.current;
                  if (n !== e) {
                    let r = c.current,
                      i = l(t);
                    e
                      ? d("MOUNT")
                      : "none" === i ||
                        (null == t ? void 0 : t.display) === "none"
                      ? d("UNMOUNT")
                      : n && r !== i
                      ? d("ANIMATION_OUT")
                      : d("UNMOUNT"),
                      (s.current = e);
                  }
                }, [e, d]),
                (0, o.b)(() => {
                  if (i) {
                    var e;
                    let t;
                    let n =
                        null !== (e = i.ownerDocument.defaultView) &&
                        void 0 !== e
                          ? e
                          : window,
                      r = (e) => {
                        let r = l(a.current).includes(e.animationName);
                        if (
                          e.target === i &&
                          r &&
                          (d("ANIMATION_END"), !s.current)
                        ) {
                          let e = i.style.animationFillMode;
                          (i.style.animationFillMode = "forwards"),
                            (t = n.setTimeout(() => {
                              "forwards" === i.style.animationFillMode &&
                                (i.style.animationFillMode = e);
                            }));
                        }
                      },
                      o = (e) => {
                        e.target === i && (c.current = l(a.current));
                      };
                    return (
                      i.addEventListener("animationstart", o),
                      i.addEventListener("animationcancel", r),
                      i.addEventListener("animationend", r),
                      () => {
                        n.clearTimeout(t),
                          i.removeEventListener("animationstart", o),
                          i.removeEventListener("animationcancel", r),
                          i.removeEventListener("animationend", r);
                      }
                    );
                  }
                  d("ANIMATION_END");
                }, [i, d]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(f),
                  ref: r.useCallback((e) => {
                    e && (a.current = getComputedStyle(e)), u(e);
                  }, []),
                }
              );
            })(s),
            d =
              "function" == typeof c
                ? c({ present: f.isPresent })
                : r.Children.only(c),
            p = (0, i.e)(
              f.ref,
              (u =
                null ===
                  (t = Object.getOwnPropertyDescriptor(d.props, "ref")) ||
                void 0 === t
                  ? void 0
                  : t.get) &&
                "isReactWarning" in u &&
                u.isReactWarning
                ? d.ref
                : (u =
                    null === (n = Object.getOwnPropertyDescriptor(d, "ref")) ||
                    void 0 === n
                      ? void 0
                      : n.get) &&
                  "isReactWarning" in u &&
                  u.isReactWarning
                ? d.props.ref
                : d.props.ref || d.ref
            );
          return "function" == typeof c || f.isPresent
            ? r.cloneElement(d, { ref: p })
            : null;
        };
      function l(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      u.displayName = "Presence";
    },
    6178: function (e, t, n) {
      n.d(t, {
        WV: function () {
          return l;
        },
        jH: function () {
          return a;
        },
      });
      var r = n(83112),
        i = n(32017),
        o = n(55369),
        u = n(20209),
        l = [
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
            let { asChild: r, ...i } = e,
              l = r ? o.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, u.jsx)(l, { ...i, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function a(e, t) {
        e && i.flushSync(() => e.dispatchEvent(t));
      }
    },
    55369: function (e, t, n) {
      n.d(t, {
        A4: function () {
          return a;
        },
        g7: function () {
          return u;
        },
      });
      var r = n(83112),
        i = n(63896),
        o = n(20209),
        u = r.forwardRef((e, t) => {
          let { children: n, ...i } = e,
            u = r.Children.toArray(n),
            a = u.find(s);
          if (a) {
            let e = a.props.children,
              n = u.map((t) =>
                t !== a
                  ? t
                  : r.Children.count(e) > 1
                  ? r.Children.only(null)
                  : r.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, o.jsx)(l, {
              ...i,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, o.jsx)(l, { ...i, ref: t, children: n });
        });
      u.displayName = "Slot";
      var l = r.forwardRef((e, t) => {
        let { children: n, ...o } = e;
        if (r.isValidElement(n)) {
          let e, u;
          let l =
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
                let i = e[r],
                  o = t[r];
                /^on[A-Z]/.test(r)
                  ? i && o
                    ? (n[r] = (...e) => {
                        o(...e), i(...e);
                      })
                    : i && (n[r] = i)
                  : "style" === r
                  ? (n[r] = { ...i, ...o })
                  : "className" === r &&
                    (n[r] = [i, o].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(o, n.props),
            ref: t ? (0, i.F)(t, l) : l,
          });
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      l.displayName = "SlotClone";
      var a = ({ children: e }) => (0, o.jsx)(o.Fragment, { children: e });
      function s(e) {
        return r.isValidElement(e) && e.type === a;
      }
    },
    12945: function (e, t, n) {
      n.d(t, {
        W: function () {
          return i;
        },
      });
      var r = n(83112);
      function i(e) {
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
          return o;
        },
      });
      var r = n(83112),
        i = n(12945);
      function o({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        let [o, u] = (function ({ defaultProp: e, onChange: t }) {
            let n = r.useState(e),
              [o] = n,
              u = r.useRef(o),
              l = (0, i.W)(t);
            return (
              r.useEffect(() => {
                u.current !== o && (l(o), (u.current = o));
              }, [o, u, l]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          l = void 0 !== e,
          a = l ? e : o,
          s = (0, i.W)(n);
        return [
          a,
          r.useCallback(
            (t) => {
              if (l) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && s(n);
              } else u(t);
            },
            [l, e, u, s]
          ),
        ];
      }
    },
    51486: function (e, t, n) {
      n.d(t, {
        e: function () {
          return o;
        },
      });
      var r = n(83112),
        i = n(12945);
      function o(e, t = globalThis?.document) {
        let n = (0, i.W)(e);
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
          return i;
        },
      });
      var r = n(83112),
        i = globalThis?.document ? r.useLayoutEffect : () => {};
    },
    54527: function (e, t, n) {
      n.d(t, {
        t: function () {
          return o;
        },
      });
      var r = n(83112),
        i = n(91917);
      function o(e) {
        let [t, n] = r.useState(void 0);
        return (
          (0, i.b)(() => {
            if (e) {
              n({ width: e.offsetWidth, height: e.offsetHeight });
              let t = new ResizeObserver((t) => {
                let r, i;
                if (!Array.isArray(t) || !t.length) return;
                let o = t[0];
                if ("borderBoxSize" in o) {
                  let e = o.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e;
                  (r = t.inlineSize), (i = t.blockSize);
                } else (r = e.offsetWidth), (i = e.offsetHeight);
                n({ width: r, height: i });
              });
              return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
            }
            n(void 0);
          }, [e]),
          t
        );
      }
    },
    90345: function (e, t, n) {
      n.d(t, {
        j: function () {
          return o;
        },
        cx: function () {
          return i;
        },
      });
      let r = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        i = function () {
          for (var e, t, n = 0, r = ""; n < arguments.length; )
            (e = arguments[n++]) &&
              (t = (function e(t) {
                var n,
                  r,
                  i = "";
                if ("string" == typeof t || "number" == typeof t) i += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (n = 0; n < t.length; n++)
                      t[n] && (r = e(t[n])) && (i && (i += " "), (i += r));
                  else for (n in t) t[n] && (i && (i += " "), (i += n));
                }
                return i;
              })(e)) &&
              (r && (r += " "), (r += t));
          return r;
        },
        o = (e, t) => (n) => {
          var o;
          if ((null == t ? void 0 : t.variants) == null)
            return i(
              e,
              null == n ? void 0 : n.class,
              null == n ? void 0 : n.className
            );
          let { variants: u, defaultVariants: l } = t,
            a = Object.keys(u).map((e) => {
              let t = null == n ? void 0 : n[e],
                i = null == l ? void 0 : l[e];
              if (null === t) return null;
              let o = r(t) || r(i);
              return u[e][o];
            }),
            s =
              n &&
              Object.entries(n).reduce((e, t) => {
                let [n, r] = t;
                return void 0 === r || (e[n] = r), e;
              }, {});
          return i(
            e,
            a,
            null == t
              ? void 0
              : null === (o = t.compoundVariants) || void 0 === o
              ? void 0
              : o.reduce((e, t) => {
                  let { class: n, className: r, ...i } = t;
                  return Object.entries(i).every((e) => {
                    let [t, n] = e;
                    return Array.isArray(n)
                      ? n.includes({ ...l, ...s }[t])
                      : { ...l, ...s }[t] === n;
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
        for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)
          (e = arguments[n]) &&
            (t = (function e(t) {
              var n,
                r,
                i = "";
              if ("string" == typeof t || "number" == typeof t) i += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var o = t.length;
                  for (n = 0; n < o; n++)
                    t[n] && (r = e(t[n])) && (i && (i += " "), (i += r));
                } else for (r in t) t[r] && (i && (i += " "), (i += r));
              }
              return i;
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
