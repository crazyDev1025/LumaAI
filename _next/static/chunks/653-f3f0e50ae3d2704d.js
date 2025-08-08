(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [653],
  {
    10653: function (e, t, a) {
      "use strict";
      a.d(t, {
        BlackButton: function () {
          return p;
        },
        Hr: function () {
          return m;
        },
        Td: function () {
          return f;
        },
        _b: function () {
          return d;
        },
        e_: function () {
          return u;
        },
      });
      var s = a(20209),
        n = a(45313),
        r = a(83112),
        l = a(41013),
        i = a(77781),
        c = a(95211);
      a(43132);
      let o = "easeOut";
      function x() {
        let [e, t] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            let e = window.matchMedia("(hover: hover)");
            t(e.matches);
            let a = (e) => t(e.matches);
            return e.addListener(a), () => e.removeListener(a);
          }, []),
          e
        );
      }
      let u = () =>
          (0, s.jsxs)("section", {
            className: (0, l.m6)(
              "relative flex h-[302px] items-center justify-between py-[73px]",
              "max-lg:h-auto max-lg:flex-col-reverse max-lg:items-center max-lg:gap-[20px] max-lg:pb-0 max-lg:pt-[50px]"
            ),
            children: [
              (0, s.jsx)("div", {
                className: (0, l.m6)(
                  "absolute bottom-0 left-[50%] z-[1] -translate-x-1/2",
                  "max-lg:static max-lg:left-auto max-lg:right-0 max-lg:translate-x-0"
                ),
                children: (0, s.jsx)(i.d, {
                  loop: !1,
                  poster:
                    "https://storage.cdn-luma.com/public/dream-machine/api-page/shiny-crystal.jpg",
                  src: "https://storage.cdn-luma.com/public/dream-machine/api-page/shiny-crystal.mp4",
                  className: (0, l.m6)("size-[300px]"),
                }),
              }),
              (0, s.jsx)(p, {
                transparent: !0,
                href: c.Z.apiDashboard,
                className: (0, l.m6)(
                  "relative z-[2] px-[56px] py-[28px] text-[52px] font-normal",
                  "max-sm:px-[30px] max-sm:py-[17px] max-sm:text-[30px]",
                  "max-lg:mb-[-45px] max-lg:mt-[45px]"
                ),
                children: "Start Building",
              }),
              (0, s.jsx)("h2", {
                className: (0, l.m6)(
                  "text-[52px] leading-[115%] tracking-[-2.6px] max-sm:text-[26px] max-sm:tracking-[-1.3px]",
                  "relative z-[2] w-[450px] max-w-[50%] text-balance text-right",
                  "max-lg:w-full max-lg:text-center max-md:max-w-none"
                ),
                children: "Cutting edge image and video model at your hand",
              }),
            ],
          }),
        m = (e) => {
          let { className: t, ...a } = e;
          return (0, s.jsx)("hr", {
            className: (0, l.m6)("h-[1px] w-full border-none bg-black/40", t),
            ...a,
          });
        },
        p = (e) => {
          let { transparent: t, className: a, ...r } = e;
          return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsx)(n.E.a, {
              whileHover: {
                scale: 1.04,
                transition: { duration: 0.13, ease: o },
              },
              ...r,
              className: (0, l.m6)(
                "inline-block whitespace-nowrap rounded-full bg-[#202020] text-[24px] font-medium tracking-[-0.96px] text-white",
                "px-[24px] py-[12px] pt-[11px]",
                "max-sm:px-[13px] max-sm:py-[8px] max-sm:pt-[7px] max-sm:text-[18px]",
                t && "border border-[#202020] bg-transparent text-[#202020]",
                a
              ),
            }),
          });
        },
        d = (e) => {
          let { poster: t, children: a, video: i, className: c } = e,
            u = (0, r.useRef)(null),
            [m, p] = (0, r.useState)(!1),
            d = x();
          return (0, s.jsxs)(n.E.div, {
            animate: {
              scale: d && m ? 1.05 : 1,
              transition: { duration: 0.19, ease: o },
            },
            className: (0, l.m6)(
              "plan relative flex w-full flex-col items-start rounded-[15px] bg-white px-[45px] py-[40px] text-[20px] sm:h-[650px]",
              "max-w-[650px] overflow-hidden max-sm:px-[26px] max-sm:py-[23px]",
              c
            ),
            onMouseEnter: () => {
              var e;
              p(!0), null === (e = u.current) || void 0 === e || e.play();
            },
            onMouseLeave: () => {
              var e;
              p(!1), null === (e = u.current) || void 0 === e || e.pause();
            },
            children: [
              i &&
                (0, s.jsx)("video", {
                  ref: u,
                  poster: t,
                  autoPlay: !d,
                  className: "absolute bottom-0 right-0 size-[266px]",
                  src: i,
                  playsInline: !0,
                  muted: !0,
                  loop: !0,
                }),
              (0, s.jsx)("div", {
                className: "relative flex h-full flex-col items-start",
                children: a,
              }),
            ],
          });
        };
      function f(e) {
        let {
            poster: t,
            title: a,
            description: c,
            image: o,
            video: u,
            aspect: m = "16/9",
          } = e,
          p = (0, r.useRef)(null),
          [d, f] = (0, r.useState)(!1),
          h = x();
        return (0, s.jsxs)("div", {
          className: "capability flex w-full flex-col max-md:max-w-[500px]",
          onMouseEnter: () => {
            f(!0), p.current && p.current.play();
          },
          onMouseLeave: () => {
            f(!1), p.current && p.current.pause();
          },
          children: [
            u &&
              (0, s.jsx)(n.E.div, {
                animate: {
                  scale: h && d ? 1.05 : 1,
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                },
                children: (0, s.jsx)(i.d, {
                  autoPlay: !h,
                  ref: p,
                  poster: t,
                  className: (0, l.m6)("w-full rounded-[12px]"),
                  style: { aspectRatio: m },
                  src: u,
                }),
              }),
            !u &&
              o &&
              (0, s.jsx)("img", {
                className: (0, l.m6)("w-full rounded-[12px]"),
                style: { aspectRatio: m },
                src: o,
              }),
            (0, s.jsx)("h3", {
              className:
                "my-[24px] text-[36px] tracking-[-1.8px] max-sm:mb-[10px] max-sm:mt-[20px] max-sm:text-[24px]",
              children: a,
            }),
            (0, s.jsx)("p", {
              className: "text-[#3f3f3f] max-sm:text-[16px]",
              children: c,
            }),
          ],
        });
      }
    },
    77781: function (e, t, a) {
      "use strict";
      a.d(t, {
        d: function () {
          return i;
        },
      });
      var s = a(20209),
        n = a(83112),
        r = a(41013),
        l = a(35928);
      let i = (0, n.forwardRef)((e, t) => {
        var a;
        let {
            poster: i,
            src: c,
            title: o,
            loop: x = !0,
            width: u,
            height: m,
            autoPlay: p = !0,
            ...d
          } = e,
          f = (0, n.useRef)(null),
          h = (0, n.useRef)(null),
          g = (0, l.R)(h),
          v = (0, n.useRef)(g);
        v.current = g;
        let [y, b] = (0, n.useState)(!1);
        return (
          (0, n.useEffect)(() => {
            g || b(!1);
          }, [g]),
          (0, n.useEffect)(() => {
            let e = f.current;
            e && g && p && e.play();
          }, [g]),
          (0, s.jsxs)("div", {
            ref: h,
            ...d,
            className: (0, r.m6)(d.className, "relative overflow-hidden"),
            style: { ...d.style, width: u, height: m },
            children: [
              i
                ? (0, s.jsx)("img", {
                    src: i,
                    alt: "",
                    className: "absolute inset-0 size-full object-cover",
                    style: { opacity: y ? 0 : 1 },
                  })
                : (0, s.jsx)("div", { className: "size-full bg-white/50" }),
              g &&
                (0, s.jsx)("video", {
                  ref:
                    ((a = [f, t]),
                    (e) => {
                      a.forEach((t) => {
                        "function" == typeof t
                          ? t(e)
                          : null != t && (t.current = e);
                      });
                    }),
                  muted: !0,
                  loop: x,
                  autoPlay: p,
                  poster: i,
                  className: "absolute inset-0 size-full",
                  style: { objectFit: "cover", opacity: y ? 1 : 0 },
                  src: c,
                  title: o,
                  onLoadedMetadata: () => {
                    v.current && b(!0);
                  },
                  playsInline: !0,
                }),
            ],
          })
        );
      });
      i.displayName = "AutoVideo";
    },
    95211: function (e, t) {
      "use strict";
      t.Z = {
        landing: "https://haven.dreamlabsai.org",
        pricing: "/dream-machine/pricing",
        creations: "/dream-machine/legacy-creations",
        singleCreation: (e) => "/dream-machine/legacy-creations/".concat(e),
        account: "/dream-machine/legacy-account",
        rate: "/dream-machine/rate",
        apiLanding: "#",
        apiKeys: "/api/keys",
        apiPricing: "/api/pricing",
        apiDashboard: "/api/dashboard",
        businessTerms: "/api/terms",
        apiDocs: "https://docs.lumalabs.ai/docs/welcome",
        apiTalkToUs: "/contact-sales",
        status: "https://status.lumalabs.ai/",
        learning: "/learning-hub",
        photon: "/photon",
        ray: "/ray2",
        enterprise: "/enterprise",
      };
    },
    35928: function (e, t, a) {
      "use strict";
      a.d(t, {
        R: function () {
          return n;
        },
      });
      var s = a(83112);
      function n(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "0px 0px 0px 0px",
          n = (0, s.useRef)(null),
          [r, l] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            n.current = new IntersectionObserver(
              (e) => {
                let [t] = e;
                return l(t.isIntersecting);
              },
              { threshold: t, rootMargin: a }
            );
          }, [t]),
          (0, s.useEffect)(() => {
            if (null != e.current) {
              var t;
              null == n ||
                null === (t = n.current) ||
                void 0 === t ||
                t.observe(e.current);
            }
            return () => {
              var e;
              null == n ||
                null === (e = n.current) ||
                void 0 === e ||
                e.disconnect();
            };
          }, [e]),
          r
        );
      }
    },
    43132: function (e) {
      e.exports = {
        AccordionContent: "style_AccordionContent__2BNOD",
        slideDown: "style_slideDown__fcnG8",
        slideUp: "style_slideUp__BjW2e",
      };
    },
  },
]);
