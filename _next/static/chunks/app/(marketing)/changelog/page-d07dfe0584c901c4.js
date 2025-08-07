(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4391],
  {
    70605: function (e, r, t) {
      Promise.resolve().then(t.bind(t, 16985)),
        Promise.resolve().then(t.bind(t, 27286)),
        Promise.resolve().then(t.bind(t, 54094)),
        Promise.resolve().then(t.bind(t, 69437));
    },
    79225: function (e, r, t) {
      "use strict";
      t.d(r, {
        Z: function () {
          return l;
        },
      });
      var n = t(20209),
        o = t(39038),
        i = t(46066);
      function l(e) {
        let { className: r, value: t, components: l } = e,
          a = {
            marks: {
              link: (e) => {
                let { value: r, children: t } = e,
                  o = "a",
                  l = !0;
                return (
                  r.url.startsWith("/") && ((o = i.default), (l = !1)),
                  (0, n.jsx)(o, {
                    className: "underline transition hover:opacity-70",
                    href: r.url,
                    target: l || r.blank ? "_blank" : void 0,
                    children: t,
                  })
                );
              },
            },
            list: {
              bullet: (e) => {
                let { children: r } = e;
                return (0, n.jsx)("ul", {
                  className: "list-disc pl-4",
                  children: r,
                });
              },
            },
            ...l,
          };
        return (0, n.jsx)("div", {
          className: r,
          children: (0, n.jsx)(o.YI, { value: t, components: a }),
        });
      }
    },
    16985: function (e, r, t) {
      "use strict";
      t.d(r, {
        default: function () {
          return c;
        },
      });
      var n = t(20209),
        o = t(79225),
        i = t(90345),
        l = t(44800),
        a = t(46066),
        u = t(56123);
      function c(e) {
        var r;
        let { data: t } = e;
        return (0, n.jsx)(a.default, {
          href: null !== (r = (0, u.cG)(t)) && void 0 !== r ? r : "",
          className: (0, i.cx)(
            "group relative block border-l border-white/20 pb-20 pl-10 md:pl-14",
            'before:content-[" "] before:absolute before:-left-1 before:top-0 before:aspect-square before:w-2 before:rounded-full before:border before:border-white/70 before:bg-black before:transition-transform before:duration-300 before:ease-in-out [@media(hover:hover)]:hover:before:scale-150'
          ),
          children: (0, n.jsxs)("div", {
            className: (0, i.cx)(
              "relative grid gap-6 md:grid-cols-2",
              'before:content-[" "] before:absolute before:-inset-7 before:rounded-2xl before:bg-white/70 before:opacity-0 before:transition-opacity before:duration-300 before:ease-in-out [@media(hover:hover)]:group-hover:before:opacity-10'
            ),
            children: [
              (0, n.jsx)("div", {
                className:
                  "relative aspect-video overflow-hidden rounded-xl border border-white/20",
                children: (0, n.jsx)(l.default, {
                  className: "object-cover",
                  src: (0, u.rs)(t.image),
                  alt: t.title,
                  fill: !0,
                }),
              }),
              (0, n.jsxs)("div", {
                className: "relative grid grid-cols-[auto_1fr] gap-2",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "rounded-md border border-indigo-600/80 bg-indigo-600/30 px-3 py-0.5 text-sm text-indigo-300",
                    children: t.category.name,
                  }),
                  (0, n.jsx)("p", {
                    className: "ml-auto self-center text-sm text-white/70",
                    children: new Date(t.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }),
                  }),
                  (0, n.jsx)("h3", {
                    id: "card-title-".concat(t._id),
                    className: "col-span-2 mt-3 text-xl font-medium",
                    children: t.title,
                  }),
                  (0, n.jsx)("div", {
                    className: "col-span-2 text-sm text-white/70",
                    children: (0, n.jsx)(o.Z, { value: t.intro }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    56123: function (e, r, t) {
      "use strict";
      t.d(r, {
        cG: function () {
          return c;
        },
        rs: function () {
          return a;
        },
        sw: function () {
          return u;
        },
      });
      var n = t(91718),
        o = t.n(n),
        i = t(7790);
      let l = o()({ projectId: i.Sx, dataset: i.gx });
      function a(e) {
        return e ? ("string" == typeof e ? e : l.image(e).url()) : "";
      }
      let u = (e) => {
        var r;
        let { asset: t } = e;
        if (!t) return { id: void 0, width: 0, height: 0, format: void 0 };
        let [, n, o, i] =
            null !== (r = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/.exec(t._ref)) &&
            void 0 !== r
              ? r
              : [],
          [l, a] = o.split("x").map((e) => parseInt(e, 10));
        return { id: n, width: l, height: a, format: i };
      };
      function c(e) {
        var r, t, n, o, i, l, a, u, c, s;
        switch (e._type) {
          case "blogHomepage":
            return "/blog";
          case "blogCategory":
            return "/blog/".concat(
              null === (r = e.slug) || void 0 === r ? void 0 : r.current
            );
          case "blogPost":
            return "/blog/"
              .concat(
                null === (n = e.category) || void 0 === n
                  ? void 0
                  : null === (t = n.slug) || void 0 === t
                  ? void 0
                  : t.current,
                "/"
              )
              .concat(
                null === (o = e.slug) || void 0 === o ? void 0 : o.current
              );
          case "changelogPost":
            return "/changelog/".concat(
              null === (i = e.slug) || void 0 === i ? void 0 : i.current
            );
          case "contactSales":
            return "/contact-sales";
          case "cpp":
            return "/creative-partner-program";
          case "enterpriseHomepage":
            return "/enterprise";
          case "enterpriseLanding":
            return "/enterprise/".concat(
              null === (l = e.slug) || void 0 === l ? void 0 : l.current
            );
          case "landingCategory":
            return "/".concat(
              null === (a = e.slug) || void 0 === a ? void 0 : a.current
            );
          case "landing":
            return "/"
              .concat(
                null === (c = e.category) || void 0 === c
                  ? void 0
                  : null === (u = c.slug) || void 0 === u
                  ? void 0
                  : u.current,
                "/"
              )
              .concat(
                null === (s = e.slug) || void 0 === s ? void 0 : s.current
              );
          default:
            console.warn("Invalid document type:", e._type);
            return;
        }
      }
    },
    7790: function (e, r, t) {
      "use strict";
      function n(e, r) {
        if (void 0 === e) throw Error(r);
        return e;
      }
      t.d(r, {
        Sx: function () {
          return l;
        },
        Z0: function () {
          return a;
        },
        gx: function () {
          return i;
        },
        tW: function () {
          return o;
        },
      });
      let o = n(
          "2025-02-13",
          "Missing environment variable: NEXT_PUBLIC_SANITY_API_VERSION"
        ),
        i = n(
          "production",
          "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
        ),
        l = n(
          "2ylxvaa2",
          "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
        ),
        a = "/lum44157ud10";
    },
    44800: function (e, r, t) {
      "use strict";
      t.d(r, {
        default: function () {
          return o.a;
        },
      });
      var n = t(89259),
        o = t.n(n);
    },
    46066: function (e, r, t) {
      "use strict";
      t.d(r, {
        default: function () {
          return o.a;
        },
      });
      var n = t(86746),
        o = t.n(n);
    },
    89259: function (e, r, t) {
      "use strict";
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          default: function () {
            return u;
          },
          getImageProps: function () {
            return a;
          },
        });
      let n = t(62635),
        o = t(67411),
        i = t(97269),
        l = n._(t(43620));
      function a(e) {
        let { props: r } = (0, o.getImgProps)(e, {
          defaultLoader: l.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, t] of Object.entries(r)) void 0 === t && delete r[e];
        return { props: r };
      }
      let u = i.Image;
    },
    90345: function (e, r, t) {
      "use strict";
      t.d(r, {
        j: function () {
          return i;
        },
        cx: function () {
          return o;
        },
      });
      let n = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        o = function () {
          for (var e, r, t = 0, n = ""; t < arguments.length; )
            (e = arguments[t++]) &&
              (r = (function e(r) {
                var t,
                  n,
                  o = "";
                if ("string" == typeof r || "number" == typeof r) o += r;
                else if ("object" == typeof r) {
                  if (Array.isArray(r))
                    for (t = 0; t < r.length; t++)
                      r[t] && (n = e(r[t])) && (o && (o += " "), (o += n));
                  else for (t in r) r[t] && (o && (o += " "), (o += t));
                }
                return o;
              })(e)) &&
              (n && (n += " "), (n += r));
          return n;
        },
        i = (e, r) => (t) => {
          var i;
          if ((null == r ? void 0 : r.variants) == null)
            return o(
              e,
              null == t ? void 0 : t.class,
              null == t ? void 0 : t.className
            );
          let { variants: l, defaultVariants: a } = r,
            u = Object.keys(l).map((e) => {
              let r = null == t ? void 0 : t[e],
                o = null == a ? void 0 : a[e];
              if (null === r) return null;
              let i = n(r) || n(o);
              return l[e][i];
            }),
            c =
              t &&
              Object.entries(t).reduce((e, r) => {
                let [t, n] = r;
                return void 0 === n || (e[t] = n), e;
              }, {});
          return o(
            e,
            u,
            null == r
              ? void 0
              : null === (i = r.compoundVariants) || void 0 === i
              ? void 0
              : i.reduce((e, r) => {
                  let { class: t, className: n, ...o } = r;
                  return Object.entries(o).every((e) => {
                    let [r, t] = e;
                    return Array.isArray(t)
                      ? t.includes({ ...a, ...c }[r])
                      : { ...a, ...c }[r] === t;
                  })
                    ? [...e, t, n]
                    : e;
                }, []),
            null == t ? void 0 : t.class,
            null == t ? void 0 : t.className
          );
        };
    },
  },
  function (e) {
    e.O(
      0,
      [3414, 6746, 4137, 2573, 7269, 1718, 9038, 8296, 1124, 1744],
      function () {
        return e((e.s = 70605));
      }
    ),
      (_N_E = e.O());
  },
]);
