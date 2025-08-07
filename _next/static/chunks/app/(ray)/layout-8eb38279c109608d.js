(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6757],
  {
    1415: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 27738, 23)),
        Promise.resolve().then(n.bind(n, 74165)),
        Promise.resolve().then(n.bind(n, 30432)),
        Promise.resolve().then(n.bind(n, 39817)),
        Promise.resolve().then(n.bind(n, 27286)),
        Promise.resolve().then(n.bind(n, 54094)),
        Promise.resolve().then(n.bind(n, 2565)),
        Promise.resolve().then(n.bind(n, 69437)),
        Promise.resolve().then(n.t.bind(n, 86746, 23)),
        Promise.resolve().then(n.t.bind(n, 53093, 23));
    },
    39817: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e) {
          let {
            html: t,
            height: n = null,
            width: r = null,
            children: i,
            dataNtpc: c = "",
          } = e;
          return (
            (0, o.useEffect)(() => {
              c &&
                performance.mark("mark_feature_usage", {
                  detail: { feature: "next-third-parties-".concat(c) },
                });
            }, [c]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                i,
                t
                  ? (0, a.jsx)("div", {
                      style: {
                        height: null != n ? "".concat(n, "px") : "auto",
                        width: null != r ? "".concat(r, "px") : "auto",
                      },
                      "data-ntpc": c,
                      dangerouslySetInnerHTML: { __html: t },
                    })
                  : null,
              ],
            })
          );
        });
      let a = n(20209),
        o = n(83112);
    },
    74165: function (e, t, n) {
      "use strict";
      var a;
      let o;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleAnalytics = function (e) {
          let {
            gaId: t,
            debugMode: n,
            dataLayerName: a = "dataLayer",
            nonce: d,
          } = e;
          return (
            void 0 === o && (o = a),
            (0, i.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-ga" },
              });
            }, []),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(c.default, {
                  id: "_next-ga-init",
                  dangerouslySetInnerHTML: {
                    __html: "\n          window['"
                      .concat(a, "'] = window['")
                      .concat(
                        a,
                        "'] || [];\n          function gtag(){window['"
                      )
                      .concat(
                        a,
                        "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '"
                      )
                      .concat(t, "' ")
                      .concat(n ? ",{ 'debug_mode': true }" : "", ");"),
                  },
                  nonce: d,
                }),
                (0, r.jsx)(c.default, {
                  id: "_next-ga",
                  src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
                  nonce: d,
                }),
              ],
            })
          );
        }),
        (t.sendGAEvent = function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          if (void 0 === o) {
            console.warn("@next/third-parties: GA has not been initialized");
            return;
          }
          window[o]
            ? window[o].push(arguments)
            : console.warn(
                "@next/third-parties: GA dataLayer ".concat(
                  o,
                  " does not exist"
                )
              );
        });
      let r = n(20209),
        i = n(83112),
        c = (a = n(58627)) && a.__esModule ? a : { default: a };
    },
    30432: function (e, t, n) {
      "use strict";
      var a;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGTMEvent = void 0),
        (t.GoogleTagManager = function (e) {
          let {
            gtmId: t,
            gtmScriptUrl: n = "https://www.googletagmanager.com/gtm.js",
            dataLayerName: a = "dataLayer",
            auth: d,
            preview: s,
            dataLayer: u,
            nonce: l,
          } = e;
          c = a;
          let f = "dataLayer" !== a ? "&l=".concat(a) : "";
          return (
            (0, r.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-gtm" },
              });
            }, []),
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(i.default, {
                  id: "_next-gtm-init",
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        "
                        .concat(
                          u ? "w[l].push(".concat(JSON.stringify(u), ")") : "",
                          "\n      })(window,'"
                        )
                        .concat(a, "');"),
                  },
                  nonce: l,
                }),
                (0, o.jsx)(i.default, {
                  id: "_next-gtm",
                  "data-ntpc": "GTM",
                  src: ""
                    .concat(n, "?id=")
                    .concat(t)
                    .concat(f)
                    .concat(d ? "&gtm_auth=".concat(d) : "")
                    .concat(
                      s ? "&gtm_preview=".concat(s, "&gtm_cookies_win=x") : ""
                    ),
                  nonce: l,
                }),
              ],
            })
          );
        });
      let o = n(20209),
        r = n(83112),
        i = (a = n(58627)) && a.__esModule ? a : { default: a },
        c = "dataLayer";
      t.sendGTMEvent = (e, t) => {
        let n = t || c;
        (window[n] = window[n] || []), window[n].push(e);
      };
    },
    58627: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return o.a;
          },
        });
      var a = n(53093),
        o = n.n(a),
        r = {};
      for (var i in a)
        "default" !== i &&
          (r[i] = function (e) {
            return a[e];
          }.bind(0, i));
      n.d(t, r);
    },
    27738: function () {},
    2565: function (e, t, n) {
      "use strict";
      n.d(t, {
        Analytics: function () {
          return s;
        },
      });
      var a = n(83112),
        o = n(28070),
        r = () => {
          window.va ||
            (window.va = function () {
              for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
              (window.vaq = window.vaq || []).push(t);
            });
        };
      function i() {
        return "undefined" != typeof window;
      }
      function c() {
        return "production";
      }
      function d() {
        return "development" === ((i() ? window.vam : c()) || "production");
      }
      function s(e) {
        return (
          (0, a.useEffect)(() => {
            var t;
            e.beforeSend &&
              (null == (t = window.va) ||
                t.call(window, "beforeSend", e.beforeSend));
          }, [e.beforeSend]),
          (0, a.useEffect)(() => {
            var t;
            !(function () {
              var e;
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { debug: !0 };
              if (!i()) return;
              (function () {
                let e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : "auto";
                if ("auto" === e) {
                  window.vam = c();
                  return;
                }
                window.vam = e;
              })(t.mode),
                r(),
                t.beforeSend &&
                  (null == (e = window.va) ||
                    e.call(window, "beforeSend", t.beforeSend));
              let n = t.scriptSrc
                ? t.scriptSrc
                : d()
                ? "https://va.vercel-scripts.com/v1/script.debug.js"
                : t.basePath
                ? "".concat(t.basePath, "/insights/script.js")
                : "/_vercel/insights/script.js";
              if (document.head.querySelector('script[src*="'.concat(n, '"]')))
                return;
              let a = document.createElement("script");
              (a.src = n),
                (a.defer = !0),
                (a.dataset.sdkn =
                  "@vercel/analytics" +
                  (t.framework ? "/".concat(t.framework) : "")),
                (a.dataset.sdkv = "1.5.0"),
                t.disableAutoTrack && (a.dataset.disableAutoTrack = "1"),
                t.endpoint
                  ? (a.dataset.endpoint = t.endpoint)
                  : t.basePath &&
                    (a.dataset.endpoint = "".concat(t.basePath, "/insights")),
                t.dsn && (a.dataset.dsn = t.dsn),
                (a.onerror = () => {
                  let e = d()
                    ? "Please check if any ad blockers are enabled and try again."
                    : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                  console.log(
                    "[Vercel Web Analytics] Failed to load script from "
                      .concat(n, ". ")
                      .concat(e)
                  );
                }),
                d() && !1 === t.debug && (a.dataset.debug = "false"),
                document.head.appendChild(a);
            })({
              framework: e.framework || "react",
              basePath:
                null !== (t = e.basePath) && void 0 !== t
                  ? t
                  : (function () {
                      if (void 0 !== o && void 0 !== o.env)
                        return o.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
                    })(),
              ...(void 0 !== e.route && { disableAutoTrack: !0 }),
              ...e,
            });
          }, []),
          (0, a.useEffect)(() => {
            e.route &&
              e.path &&
              (function (e) {
                var t;
                let { route: n, path: a } = e;
                null == (t = window.va) ||
                  t.call(window, "pageview", { route: n, path: a });
              })({ route: e.route, path: e.path });
          }, [e.route, e.path]),
          null
        );
      }
    },
  },
  function (e) {
    e.O(0, [9887, 3414, 6746, 4137, 2573, 3093, 8296, 1124, 1744], function () {
      return e((e.s = 1415));
    }),
      (_N_E = e.O());
  },
]);
