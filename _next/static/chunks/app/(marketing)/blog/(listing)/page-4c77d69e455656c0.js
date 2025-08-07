(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8210],
  {
    21770: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 18759)),
        Promise.resolve().then(r.bind(r, 1462)),
        Promise.resolve().then(r.bind(r, 27286)),
        Promise.resolve().then(r.bind(r, 54094)),
        Promise.resolve().then(r.bind(r, 69437)),
        Promise.resolve().then(r.t.bind(r, 86746, 23));
    },
    79318: function (e, t, r) {
      "use strict";
      r.d(t, {
        AN: function () {
          return s;
        },
      });
      var n = r(20209),
        l = r(90345),
        o = r(46066),
        i = r(83112);
      let a = (0, l.j)(
          "flex items-center justify-center rounded-full border font-medium tracking-tight transition",
          {
            variants: {
              type: {
                primary:
                  "border-black bg-black text-white hover:bg-black hover:bg-black/70 dark:border-white dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-white/90",
                secondary:
                  "border-black/5 bg-black/5 text-black/80 hover:bg-black/10 dark:border-white/10 dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/15",
                outline:
                  "border-black/5 text-black/80 hover:bg-black/5 dark:border-white/10 dark:text-white/80 dark:hover:bg-white/10",
              },
              size: {
                small: "h-8 px-4 text-sm",
                medium: "h-10 px-6 text-base",
                large: "h-10 px-6 text-base sm:h-12 sm:px-8 sm:text-lg",
              },
            },
            defaultVariants: { type: "primary", size: "medium" },
          }
        ),
        c = (0, i.forwardRef)(function (e, t) {
          let { asChild: r, type: o, size: c, children: s, ...u } = e,
            { className: d, ...f } = u,
            v = (0, l.cx)(a({ type: o, size: c }), d);
          return r && (0, i.isValidElement)(s)
            ? (0, i.cloneElement)(s, { ...s.props, className: v })
            : (0, n.jsx)("button", { ref: t, className: v, ...f, children: s });
        });
      t.ZP = c;
      let s = (0, i.forwardRef)(function (e, t) {
        let {
          type: r,
          size: l,
          className: i,
          target: a,
          children: s,
          ...u
        } = e;
        return (0,
        n.jsx)(c, { asChild: !0, type: r, size: l, className: i, children: (0, n.jsx)(o.default, { ref: t, target: a, ...u, children: s }) });
      });
    },
    79225: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(20209),
        l = r(39038),
        o = r(46066);
      function i(e) {
        let { className: t, value: r, components: i } = e,
          a = {
            marks: {
              link: (e) => {
                let { value: t, children: r } = e,
                  l = "a",
                  i = !0;
                return (
                  t.url.startsWith("/") && ((l = o.default), (i = !1)),
                  (0, n.jsx)(l, {
                    className: "underline transition hover:opacity-70",
                    href: t.url,
                    target: i || t.blank ? "_blank" : void 0,
                    children: r,
                  })
                );
              },
            },
            list: {
              bullet: (e) => {
                let { children: t } = e;
                return (0, n.jsx)("ul", {
                  className: "list-disc pl-4",
                  children: t,
                });
              },
            },
            ...i,
          };
        return (0, n.jsx)("div", {
          className: t,
          children: (0, n.jsx)(l.YI, { value: r, components: a }),
        });
      }
    },
    18759: function (e, t, r) {
      "use strict";
      r.d(t, {
        Item: function () {
          return R;
        },
        Root: function () {
          return E;
        },
      });
      var n = r(20209),
        l = r(79318),
        o = r(83112),
        i = r(95259),
        a = r(15600),
        c = r(81350),
        s = r(48636),
        u = r(25841),
        d = o.forwardRef((e, t) => {
          let {
              pressed: r,
              defaultPressed: l = !1,
              onPressedChange: o,
              ...i
            } = e,
            [c = !1, d] = (0, u.T)({ prop: r, onChange: o, defaultProp: l });
          return (0, n.jsx)(a.WV.button, {
            type: "button",
            "aria-pressed": c,
            "data-state": c ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0,
            ...i,
            ref: t,
            onClick: (0, s.M)(e.onClick, () => {
              e.disabled || d(!c);
            }),
          });
        });
      d.displayName = "Toggle";
      var f = r(71417),
        v = "ToggleGroup",
        [g, b] = (0, i.b)(v, [c.Pc]),
        m = (0, c.Pc)(),
        p = o.forwardRef((e, t) => {
          let { type: r, ...l } = e;
          if ("single" === r) return (0, n.jsx)(k, { ...l, ref: t });
          if ("multiple" === r) return (0, n.jsx)(y, { ...l, ref: t });
          throw Error("Missing prop `type` expected on `".concat(v, "`"));
        });
      p.displayName = v;
      var [h, x] = g(v),
        k = o.forwardRef((e, t) => {
          let {
              value: r,
              defaultValue: l,
              onValueChange: i = () => {},
              ...a
            } = e,
            [c, s] = (0, u.T)({ prop: r, defaultProp: l, onChange: i });
          return (0, n.jsx)(h, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: c ? [c] : [],
            onItemActivate: s,
            onItemDeactivate: o.useCallback(() => s(""), [s]),
            children: (0, n.jsx)(_, { ...a, ref: t }),
          });
        }),
        y = o.forwardRef((e, t) => {
          let {
              value: r,
              defaultValue: l,
              onValueChange: i = () => {},
              ...a
            } = e,
            [c = [], s] = (0, u.T)({ prop: r, defaultProp: l, onChange: i }),
            d = o.useCallback(
              (e) =>
                s(function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  return [...t, e];
                }),
              [s]
            ),
            f = o.useCallback(
              (e) =>
                s(function () {
                  let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : [];
                  return t.filter((t) => t !== e);
                }),
              [s]
            );
          return (0, n.jsx)(h, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: c,
            onItemActivate: d,
            onItemDeactivate: f,
            children: (0, n.jsx)(_, { ...a, ref: t }),
          });
        });
      p.displayName = v;
      var [j, w] = g(v),
        _ = o.forwardRef((e, t) => {
          let {
              __scopeToggleGroup: r,
              disabled: l = !1,
              rovingFocus: o = !0,
              orientation: i,
              dir: s,
              loop: u = !0,
              ...d
            } = e,
            v = m(r),
            g = (0, f.gm)(s),
            b = { role: "group", dir: g, ...d };
          return (0, n.jsx)(j, {
            scope: r,
            rovingFocus: o,
            disabled: l,
            children: o
              ? (0, n.jsx)(c.fC, {
                  asChild: !0,
                  ...v,
                  orientation: i,
                  dir: g,
                  loop: u,
                  children: (0, n.jsx)(a.WV.div, { ...b, ref: t }),
                })
              : (0, n.jsx)(a.WV.div, { ...b, ref: t }),
          });
        }),
        N = "ToggleGroupItem",
        C = o.forwardRef((e, t) => {
          let r = x(N, e.__scopeToggleGroup),
            l = w(N, e.__scopeToggleGroup),
            i = m(e.__scopeToggleGroup),
            a = r.value.includes(e.value),
            s = l.disabled || e.disabled,
            u = { ...e, pressed: a, disabled: s },
            d = o.useRef(null);
          return l.rovingFocus
            ? (0, n.jsx)(c.ck, {
                asChild: !0,
                ...i,
                focusable: !s,
                active: a,
                ref: d,
                children: (0, n.jsx)(I, { ...u, ref: t }),
              })
            : (0, n.jsx)(I, { ...u, ref: t });
        });
      C.displayName = N;
      var I = o.forwardRef((e, t) => {
          let { __scopeToggleGroup: r, value: l, ...o } = e,
            i = x(N, r),
            a = {
              role: "radio",
              "aria-checked": e.pressed,
              "aria-pressed": void 0,
            },
            c = "single" === i.type ? a : void 0;
          return (0, n.jsx)(d, {
            ...c,
            ...o,
            ref: t,
            onPressedChange: (e) => {
              e ? i.onItemActivate(l) : i.onItemDeactivate(l);
            },
          });
        }),
        P = r(90345),
        T = r(46066),
        A = r(56123);
      let S = (0, o.createContext)({ value: "All", setValue: () => {} });
      function E(e) {
        let { data: t, children: r } = e,
          [i, a] = (0, o.useState)("All"),
          c = [
            { id: "All", title: "All", href: void 0 },
            ...t.map((e) => ({
              id: e._id,
              title: e.title,
              href: (0, A.cG)(e),
            })),
          ],
          s = (0, o.useRef)(Array(c.length).fill(null)),
          u = (e) => {
            var t;
            null === (t = s.current[e]) ||
              void 0 === t ||
              t.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
              });
          };
        return (0, n.jsx)(S.Provider, {
          value: { value: i, setValue: a },
          children: (0, n.jsxs)(p, {
            className: "flex flex-col gap-6 md:gap-12",
            type: "single",
            value: i,
            onValueChange: (e) => {
              e && a(e);
            },
            tabIndex: -1,
            children: [
              (0, n.jsx)("div", {
                className: (0, P.cx)(
                  "scrollbar-hide relative -left-6 flex w-[calc(100%+3rem)] gap-3 overflow-x-auto scroll-smooth",
                  'before:content-[" "] before:sticky before:left-0 before:-mr-3 before:ml-auto before:block before:h-8 before:w-6 before:shrink-0 before:bg-gradient-to-r before:from-light1 before:via-light1 before:to-transparent dark:before:from-black dark:before:via-black',
                  'after:content-[" "] after:sticky after:right-0 after:-ml-3 after:mr-auto after:block after:h-8 after:w-6 after:shrink-0 after:bg-gradient-to-l after:from-light1 after:via-light1 after:to-transparent dark:after:from-black dark:after:via-black'
                ),
                children: c.map((e, t) =>
                  (0, n.jsx)(
                    C,
                    {
                      value: e.id,
                      asChild: !0,
                      children: (0, n.jsx)(l.ZP, {
                        ref: (e) => {
                          e && (s.current[t] = e);
                        },
                        size: "small",
                        type: i === e.id ? "primary" : "outline",
                        className: i === e.id ? "pointer-events-none" : "",
                        onClick: () => u(t),
                        tabIndex: 0,
                        children: e.href
                          ? (0, n.jsx)(T.default, {
                              className: "pointer-events-none",
                              href: e.href,
                              onClick: (e) => e.preventDefault(),
                              tabIndex: -1,
                              children: e.title,
                            })
                          : e.title,
                      }),
                    },
                    e.id
                  )
                ),
              }),
              r,
            ],
          }),
        });
      }
      function R(e) {
        let { value: t, children: r } = e,
          { value: n } = (0, o.useContext)(S);
        if ((0, o.isValidElement)(r)) {
          let e = r.props;
          return (0, o.cloneElement)(r, {
            ...e,
            style: { display: "All" === n || n === t ? "" : "none" },
          });
        }
      }
    },
    1462: function (e, t, r) {
      "use strict";
      r.d(t, {
        Card: function () {
          return s;
        },
        Root: function () {
          return c;
        },
      });
      var n = r(20209),
        l = r(79225),
        o = r(44800),
        i = r(46066),
        a = r(56123);
      function c(e) {
        let { children: t } = e;
        return (0, n.jsx)("div", {
          className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
          children: t,
        });
      }
      function s(e) {
        var t, r;
        let { data: c, ...s } = e;
        return (0, n.jsxs)(
          "div",
          {
            className:
              "flex cursor-pointer flex-col gap-6 rounded-2xl bg-black/5 p-6 transition-colors hover:bg-black/10",
            onClick: (e) => {
              var t;
              null === (t = e.currentTarget.querySelector("a")) ||
                void 0 === t ||
                t.click();
            },
            onKeyDown: (e) => {
              if ("Enter" === e.key) {
                var t;
                e.preventDefault(),
                  null === (t = e.currentTarget.querySelector("a")) ||
                    void 0 === t ||
                    t.click();
              }
            },
            role: "button",
            "aria-labelledby": "card-title-".concat(c._id),
            tabIndex: 0,
            ...s,
            children: [
              (0, n.jsx)("div", {
                className: "relative aspect-[4/3] overflow-hidden rounded-xl",
                children: (0, n.jsx)(o.default, {
                  className: "object-cover",
                  style: {
                    objectPosition: "50% ".concat(
                      null !== (t = c.coverVerticalAlignment) && void 0 !== t
                        ? t
                        : "50%"
                    ),
                  },
                  src: (0, a.rs)(c.image),
                  alt: c.title,
                  fill: !0,
                }),
              }),
              (0, n.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [
                  (0, n.jsx)("p", {
                    className: "mb-2 text-sm font-medium",
                    children: new Date(c.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }),
                  }),
                  (0, n.jsx)("h3", {
                    id: "card-title-".concat(c._id),
                    className: "text-xl font-medium",
                    children: c.title,
                  }),
                  (0, n.jsx)("div", {
                    className: "text-sm text-black/70",
                    children: (0, n.jsx)(l.Z, { value: c.intro }),
                  }),
                ],
              }),
              (0, n.jsx)(i.default, {
                className:
                  "mt-auto self-start text-sm font-medium text-black/70 transition-colors hover:text-black",
                href: null !== (r = (0, a.cG)(c)) && void 0 !== r ? r : "",
                tabIndex: -1,
                children: "Read article",
              }),
            ],
          },
          c._id
        );
      }
    },
    56123: function (e, t, r) {
      "use strict";
      r.d(t, {
        cG: function () {
          return s;
        },
        rs: function () {
          return a;
        },
        sw: function () {
          return c;
        },
      });
      var n = r(91718),
        l = r.n(n),
        o = r(7790);
      let i = l()({ projectId: o.Sx, dataset: o.gx });
      function a(e) {
        return e ? ("string" == typeof e ? e : i.image(e).url()) : "";
      }
      let c = (e) => {
        var t;
        let { asset: r } = e;
        if (!r) return { id: void 0, width: 0, height: 0, format: void 0 };
        let [, n, l, o] =
            null !== (t = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/.exec(r._ref)) &&
            void 0 !== t
              ? t
              : [],
          [i, a] = l.split("x").map((e) => parseInt(e, 10));
        return { id: n, width: i, height: a, format: o };
      };
      function s(e) {
        var t, r, n, l, o, i, a, c, s, u;
        switch (e._type) {
          case "blogHomepage":
            return "/blog";
          case "blogCategory":
            return "/blog/".concat(
              null === (t = e.slug) || void 0 === t ? void 0 : t.current
            );
          case "blogPost":
            return "/blog/"
              .concat(
                null === (n = e.category) || void 0 === n
                  ? void 0
                  : null === (r = n.slug) || void 0 === r
                  ? void 0
                  : r.current,
                "/"
              )
              .concat(
                null === (l = e.slug) || void 0 === l ? void 0 : l.current
              );
          case "changelogPost":
            return "/changelog/".concat(
              null === (o = e.slug) || void 0 === o ? void 0 : o.current
            );
          case "contactSales":
            return "/contact-sales";
          case "cpp":
            return "/creative-partner-program";
          case "enterpriseHomepage":
            return "/enterprise";
          case "enterpriseLanding":
            return "/enterprise/".concat(
              null === (i = e.slug) || void 0 === i ? void 0 : i.current
            );
          case "landingCategory":
            return "/".concat(
              null === (a = e.slug) || void 0 === a ? void 0 : a.current
            );
          case "landing":
            return "/"
              .concat(
                null === (s = e.category) || void 0 === s
                  ? void 0
                  : null === (c = s.slug) || void 0 === c
                  ? void 0
                  : c.current,
                "/"
              )
              .concat(
                null === (u = e.slug) || void 0 === u ? void 0 : u.current
              );
          default:
            console.warn("Invalid document type:", e._type);
            return;
        }
      }
    },
    7790: function (e, t, r) {
      "use strict";
      function n(e, t) {
        if (void 0 === e) throw Error(t);
        return e;
      }
      r.d(t, {
        Sx: function () {
          return i;
        },
        Z0: function () {
          return a;
        },
        gx: function () {
          return o;
        },
        tW: function () {
          return l;
        },
      });
      let l = n(
          "2025-02-13",
          "Missing environment variable: NEXT_PUBLIC_SANITY_API_VERSION"
        ),
        o = n(
          "production",
          "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
        ),
        i = n(
          "2ylxvaa2",
          "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
        ),
        a = "/lum44157ud10";
    },
    44800: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return l.a;
        },
      });
      var n = r(89259),
        l = r.n(n);
    },
    89259: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = r(62635),
        l = r(67411),
        o = r(97269),
        i = n._(r(43620));
      function a(e) {
        let { props: t } = (0, l.getImgProps)(e, {
          defaultLoader: i.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let c = o.Image;
    },
    71417: function (e, t, r) {
      "use strict";
      r.d(t, {
        gm: function () {
          return o;
        },
      });
      var n = r(83112);
      r(20209);
      var l = n.createContext(void 0);
      function o(e) {
        let t = n.useContext(l);
        return e || t || "ltr";
      }
    },
    11447: function (e, t, r) {
      "use strict";
      r.d(t, {
        M: function () {
          return c;
        },
      });
      var n,
        l = r(83112),
        o = r(91917),
        i = (n || (n = r.t(l, 2)))["useId".toString()] || (() => void 0),
        a = 0;
      function c(e) {
        let [t, r] = l.useState(i());
        return (
          (0, o.b)(() => {
            e || r((e) => e ?? String(a++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    12945: function (e, t, r) {
      "use strict";
      r.d(t, {
        W: function () {
          return l;
        },
      });
      var n = r(83112);
      function l(e) {
        let t = n.useRef(e);
        return (
          n.useEffect(() => {
            t.current = e;
          }),
          n.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            []
          )
        );
      }
    },
    25841: function (e, t, r) {
      "use strict";
      r.d(t, {
        T: function () {
          return o;
        },
      });
      var n = r(83112),
        l = r(12945);
      function o({ prop: e, defaultProp: t, onChange: r = () => {} }) {
        let [o, i] = (function ({ defaultProp: e, onChange: t }) {
            let r = n.useState(e),
              [o] = r,
              i = n.useRef(o),
              a = (0, l.W)(t);
            return (
              n.useEffect(() => {
                i.current !== o && (a(o), (i.current = o));
              }, [o, i, a]),
              r
            );
          })({ defaultProp: t, onChange: r }),
          a = void 0 !== e,
          c = a ? e : o,
          s = (0, l.W)(r);
        return [
          c,
          n.useCallback(
            (t) => {
              if (a) {
                let r = "function" == typeof t ? t(e) : t;
                r !== e && s(r);
              } else i(t);
            },
            [a, e, i, s]
          ),
        ];
      }
    },
    91917: function (e, t, r) {
      "use strict";
      r.d(t, {
        b: function () {
          return l;
        },
      });
      var n = r(83112),
        l = globalThis?.document ? n.useLayoutEffect : () => {};
    },
    90345: function (e, t, r) {
      "use strict";
      r.d(t, {
        j: function () {
          return o;
        },
        cx: function () {
          return l;
        },
      });
      let n = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        l = function () {
          for (var e, t, r = 0, n = ""; r < arguments.length; )
            (e = arguments[r++]) &&
              (t = (function e(t) {
                var r,
                  n,
                  l = "";
                if ("string" == typeof t || "number" == typeof t) l += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (r = 0; r < t.length; r++)
                      t[r] && (n = e(t[r])) && (l && (l += " "), (l += n));
                  else for (r in t) t[r] && (l && (l += " "), (l += r));
                }
                return l;
              })(e)) &&
              (n && (n += " "), (n += t));
          return n;
        },
        o = (e, t) => (r) => {
          var o;
          if ((null == t ? void 0 : t.variants) == null)
            return l(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className
            );
          let { variants: i, defaultVariants: a } = t,
            c = Object.keys(i).map((e) => {
              let t = null == r ? void 0 : r[e],
                l = null == a ? void 0 : a[e];
              if (null === t) return null;
              let o = n(t) || n(l);
              return i[e][o];
            }),
            s =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e;
              }, {});
          return l(
            e,
            c,
            null == t
              ? void 0
              : null === (o = t.compoundVariants) || void 0 === o
              ? void 0
              : o.reduce((e, t) => {
                  let { class: r, className: n, ...l } = t;
                  return Object.entries(l).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r)
                      ? r.includes({ ...a, ...s }[t])
                      : { ...a, ...s }[t] === r;
                  })
                    ? [...e, r, n]
                    : e;
                }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className
          );
        };
    },
  },
  function (e) {
    e.O(
      0,
      [3414, 6746, 4137, 2573, 7269, 1718, 9038, 3638, 8296, 1124, 1744],
      function () {
        return e((e.s = 21770));
      }
    ),
      (_N_E = e.O());
  },
]);
