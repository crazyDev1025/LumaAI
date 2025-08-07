(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2029, 125, 5397],
  {
    75509: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 50903)),
        Promise.resolve().then(n.bind(n, 27286)),
        Promise.resolve().then(n.bind(n, 54094)),
        Promise.resolve().then(n.bind(n, 69437)),
        Promise.resolve().then(n.t.bind(n, 86746, 23));
    },
    50903: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return u;
        },
      });
      var r = n(20209),
        i = n(79225),
        o = n(44800),
        l = n(46066),
        a = n(56123);
      function u(e) {
        var t;
        let { data: n } = e;
        return (0, r.jsxs)("div", {
          className:
            "flex cursor-pointer flex-col gap-6 rounded-2xl bg-white/10 p-4 transition-colors hover:bg-white/15",
          onClick: (e) => {
            var t;
            null === (t = e.currentTarget.querySelector("a")) ||
              void 0 === t ||
              t.click();
          },
          role: "button",
          "aria-labelledby": "card-title-".concat(n._id),
          tabIndex: 0,
          children: [
            (0, r.jsx)("div", {
              className: "relative aspect-video overflow-hidden rounded-xl",
              children: (0, r.jsx)(o.default, {
                className: "object-cover",
                src: (0, a.rs)(n.image),
                alt: n.title,
                fill: !0,
              }),
            }),
            (0, r.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [
                (0, r.jsx)("h3", {
                  id: "card-title-".concat(n._id),
                  className: "text-xl font-medium",
                  children: n.title,
                }),
                (0, r.jsx)("div", {
                  className: "text-sm text-white/70",
                  children: (0, r.jsx)(i.Z, { value: n.text }),
                }),
              ],
            }),
            (0, r.jsx)(l.default, {
              className:
                "mt-auto self-start text-sm font-semibold text-white/70 transition-colors hover:text-white",
              href: null !== (t = (0, a.cG)(n)) && void 0 !== t ? t : "",
              tabIndex: -1,
              children: "Read more",
            }),
          ],
        });
      }
    },
    79225: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(20209),
        i = n(39038),
        o = n(46066);
      function l(e) {
        let { className: t, value: n, components: l } = e,
          a = {
            marks: {
              link: (e) => {
                let { value: t, children: n } = e,
                  i = "a",
                  l = !0;
                return (
                  t.url.startsWith("/") && ((i = o.default), (l = !1)),
                  (0, r.jsx)(i, {
                    className: "underline transition hover:opacity-70",
                    href: t.url,
                    target: l || t.blank ? "_blank" : void 0,
                    children: n,
                  })
                );
              },
            },
            list: {
              bullet: (e) => {
                let { children: t } = e;
                return (0, r.jsx)("ul", {
                  className: "list-disc pl-4",
                  children: t,
                });
              },
            },
            ...l,
          };
        return (0, r.jsx)("div", {
          className: t,
          children: (0, r.jsx)(i.YI, { value: n, components: a }),
        });
      }
    },
    56123: function (e, t, n) {
      "use strict";
      n.d(t, {
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
      var r = n(91718),
        i = n.n(r),
        o = n(7790);
      let l = i()({ projectId: o.Sx, dataset: o.gx });
      function a(e) {
        return e ? ("string" == typeof e ? e : l.image(e).url()) : "";
      }
      let u = (e) => {
        var t;
        let { asset: n } = e;
        if (!n) return { id: void 0, width: 0, height: 0, format: void 0 };
        let [, r, i, o] =
            null !== (t = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/.exec(n._ref)) &&
            void 0 !== t
              ? t
              : [],
          [l, a] = i.split("x").map((e) => parseInt(e, 10));
        return { id: r, width: l, height: a, format: o };
      };
      function c(e) {
        var t, n, r, i, o, l, a, u, c, s;
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
                null === (r = e.category) || void 0 === r
                  ? void 0
                  : null === (n = r.slug) || void 0 === n
                  ? void 0
                  : n.current,
                "/"
              )
              .concat(
                null === (i = e.slug) || void 0 === i ? void 0 : i.current
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
    7790: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (void 0 === e) throw Error(t);
        return e;
      }
      n.d(t, {
        Sx: function () {
          return l;
        },
        Z0: function () {
          return a;
        },
        gx: function () {
          return o;
        },
        tW: function () {
          return i;
        },
      });
      let i = r(
          "2025-02-13",
          "Missing environment variable: NEXT_PUBLIC_SANITY_API_VERSION"
        ),
        o = r(
          "production",
          "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
        ),
        l = r(
          "2ylxvaa2",
          "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
        ),
        a = "/lum44157ud10";
    },
    44800: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return i.a;
        },
      });
      var r = n(89259),
        i = n.n(r);
    },
    46066: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return i.a;
        },
      });
      var r = n(86746),
        i = n.n(r);
    },
    89259: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return u;
          },
          getImageProps: function () {
            return a;
          },
        });
      let r = n(62635),
        i = n(67411),
        o = n(97269),
        l = r._(n(43620));
      function a(e) {
        let { props: t } = (0, i.getImgProps)(e, {
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
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let u = o.Image;
    },
  },
  function (e) {
    e.O(
      0,
      [3414, 6746, 4137, 2573, 7269, 1718, 9038, 8296, 1124, 1744],
      function () {
        return e((e.s = 75509));
      }
    ),
      (_N_E = e.O());
  },
]);
