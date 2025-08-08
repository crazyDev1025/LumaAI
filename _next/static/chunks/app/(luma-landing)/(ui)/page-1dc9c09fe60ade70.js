(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1950],
  {
    64660: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 16701)),
        Promise.resolve().then(a.bind(a, 15843)),
        Promise.resolve().then(a.bind(a, 27286)),
        Promise.resolve().then(a.bind(a, 54094)),
        Promise.resolve().then(a.bind(a, 69437)),
        Promise.resolve().then(a.t.bind(a, 53093, 23));
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
        apiLanding: "/api",
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
    32576: function (e, t, a) {
      "use strict";
      var r = a(20209),
        l = a(61237),
        s = a(54638),
        n = a(83112);
      let i = (e, t, a, r) => Math.hypot(e - a, t - r),
        c = (e, t, a) => (1 - a) * e + a * t;
      t.Z = (e) => {
        let {
            triggerFactor: t,
            outlineElement: a,
            className: o,
            onEnter: d,
            onLeave: m,
            children: u,
            ...h
          } = e,
          x = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            let e;
            if (
              !x.current ||
              "ontouchstart" in window ||
              navigator.maxTouchPoints > 0
            )
              return;
            let a = x.current.querySelector(".button__text"),
              r = x.current.querySelector(".button__text-inner"),
              l = x.current.querySelector(".button__deco"),
              n = x.current.querySelector(".button__deco-filler"),
              o = { x: 0, y: 0 },
              u = 0,
              h = () => {
                x.current &&
                  (u =
                    (e = x.current.getBoundingClientRect()).width * (t || 0.5));
              };
            h(), requestAnimationFrame(() => p());
            let v = {
                tx: { previous: 0, current: 0, amt: 0.1 },
                ty: { previous: 0, current: 0, amt: 0.1 },
                scale: { previous: 1, current: 1, amt: 0.2 },
              },
              f = { hover: !1 },
              p = () => {
                var t;
                h();
                let r = i(
                    o.x,
                    o.y,
                    e.left + e.width / 2,
                    e.top - document.body.scrollTop + e.height / 2
                  ),
                  s = 0,
                  n = 0;
                for (let a in ((
                  null === (t = x.current) || void 0 === t
                    ? void 0
                    : t.getAttribute("data-magnetic-canceled")
                )
                  ? b()
                  : r < u
                  ? (f.hover || g(),
                    (s = (o.x - (e.left + e.width / 2)) * 0.3),
                    (n = (o.y - (e.top + e.height / 2)) * 0.3))
                  : f.hover && b(),
                (v.tx.current = s),
                (v.ty.current = n),
                v))
                  v[a].previous = c(v[a].previous, v[a].current, v[a].amt);
                x.current &&
                  a &&
                  l &&
                  ((x.current.style.transform = "translate3d("
                    .concat(v.tx.previous, "px, ")
                    .concat(v.ty.previous, "px, 0)")),
                  (a.style.transform = "translate3d("
                    .concat(-(-1.1 * v.tx.previous), "px, ")
                    .concat(-(-1.1 * v.ty.previous), "px, 0)")),
                  (l.style.transform = "scale(".concat(v.scale.previous, ")")),
                  requestAnimationFrame(() => p()));
              },
              g = () => {
                (f.hover = !0),
                  x.current &&
                    (x.current.classList.add("button--hover"),
                    d && d(x.current),
                    (v.scale.current = 1.3),
                    s.ZP.killTweensOf(n),
                    s.ZP.killTweensOf(r),
                    s.ZP.timeline()
                      .to(
                        n,
                        0.5,
                        {
                          ease: "Power3.easeOut",
                          startAt: { y: "75%" },
                          y: "0%",
                        },
                        0
                      )
                      .to(r, 0.4, { ease: "Expo.easeOut", scale: 0.8 }, 0));
              },
              b = () => {
                (f.hover = !1),
                  x.current &&
                    (x.current.classList.remove("button--hover"),
                    m && m(x.current),
                    (v.scale.current = 1),
                    s.ZP.killTweensOf(document.body),
                    s.ZP.killTweensOf(n),
                    s.ZP.timeline()
                      .to(n, 0.4, { ease: "Power3.easeOut", y: "-75%" }, 0)
                      .to(r, 0.4, { ease: "Expo.easeOut", scale: 1 }, 0));
              };
            window.addEventListener("mousemove", (e) => {
              (o.x = e.clientX), (o.y = e.clientY);
            }),
              window.addEventListener("resize", () => h());
          }, []),
          (0, r.jsxs)("button", {
            ref: x,
            ...h,
            "data-magnetic-button": !0,
            className: (0, l.Z)("relative flex items-center justify-center", o),
            children: [
              (0, r.jsx)("div", {
                className: "button__deco pointer-events-none",
                children: (0, r.jsx)("div", {
                  className: "button__deco-filler",
                }),
              }),
              (0, r.jsx)("span", {
                className: "button__text relative z-10",
                children: (0, r.jsx)("span", {
                  className: (0, l.Z)("button__text-inner"),
                  children: u,
                }),
              }),
              a,
            ],
          })
        );
      };
    },
    25876: function (e, t, a) {
      "use strict";
      var r = a(95211);
      let l = {
        Pricing: r.Z.pricing,
        API: r.Z.apiLanding,
        "Dream Inner Circle": "/dream-machine/inner-circle",
        Blog: "https://blog.lumalabs.ai/",
        Careers: "/join",
        "Discord Community": "https://discord.gg/lumaai",
        Twitter: "https://x.com/LumaLabsAI",
        Genie: "/genie",
        Capture: "/interactive-scenes",
        "Terms of service": "/legal/tos",
        "Enterprise Terms of Service": r.Z.businessTerms,
        "Privacy policy": "/legal/privacy",
        learning: r.Z.learning,
        "contact-us": "mailto:hello@lumalabs.ai",
        ray2: "/ray2",
        enterprise: r.Z.enterprise,
      };
      t.Z = l;
    },
    79362: function (e, t, a) {
      "use strict";
      a.d(t, {
        $: function () {
          return s;
        },
        $$: function () {
          return n;
        },
        E0: function () {
          return r;
        },
        Fv: function () {
          return i;
        },
        Ys: function () {
          return l;
        },
      });
      let r = (e) =>
          (Math.max(window.innerHeight, window.innerWidth) * e) / 100,
        l = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 16,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 22,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 22,
            l = parseFloat(getComputedStyle(document.documentElement).fontSize),
            s = window.innerWidth;
          return Math.max(e * l, Math.min(r(t), (a * s) / 100));
        };
      function s(e, t) {
        return (t || document).querySelector(e);
      }
      function n(e, t) {
        return [
          ...(t
            ? "string" == typeof t
              ? document.querySelector(t)
              : t
            : document
          ).querySelectorAll(e),
        ];
      }
      let i = (e, t, a) => Math.max(0, Math.min(1, (e - t) / (a - t)));
    },
    16701: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return _;
        },
      });
      var r = a(20209),
        l = a(61237),
        s = a(83112),
        n = a(59435),
        i = a(11665),
        c = a(83284),
        o = a(30674),
        d = a(29257),
        m = a(54638),
        u = a(33293),
        h = a(79157),
        x = a(72267),
        v = a(79362);
      let f = () => {
        (0, v.$$)("[data-speed]").forEach((e) => {
          let t = parseFloat(e.getAttribute("data-speed")),
            a = e.getBoundingClientRect(),
            r = a.top,
            l = a.height,
            s = r - l * t,
            n = r + l * (1 + t);
          if (!(s > window.innerHeight || n < 0)) {
            let a = (window.innerHeight - s) / (window.innerHeight + n - s);
            e.style.transform = "translate3d(0, ".concat(
              l * t * (2 * Math.max(0, Math.min(1, a)) - 1),
              "px, 0)"
            );
          }
        });
      };
      m.ZP.registerPlugin(h.ScrollTrigger, u.CustomEase),
        u.CustomEase.create("slowdown", "0.24, 0, 0, 1"),
        u.CustomEase.create("inOut2", ".04,1.06,.83,1");
      var p = (e) => {
          let { children: t, device: a } = e;
          return (
            (0, s.useEffect)(() => {
              h.ScrollTrigger.defaults({ scroller: "#scroll-wrapper" });
              let e = new x.Z({
                wrapper: (0, v.$)("#scroll-wrapper"),
                content: (0, v.$)("#scroll-content"),
                prevent: (e) => "navigation-menu" === e.id,
                lerp: 0.15,
              });
              window && (window.lenis = e);
              let t = !1,
                a = (r) => {
                  e.raf(r),
                    h.ScrollTrigger.update(),
                    t || f(),
                    requestAnimationFrame(a);
                },
                r = () => {
                  (t = !0), f();
                },
                l = () => {
                  f();
                };
              return (
                window.addEventListener("resize", l),
                e.on("scroll", r),
                requestAnimationFrame(a),
                () => {
                  e.off("scroll", r),
                    window.removeEventListener("resize", l),
                    e.destroy();
                }
              );
            }, []),
            (0, r.jsx)("div", {
              id: "scroll-wrapper",
              className: "h-[100dvh] overflow-y-scroll",
              children: (0, r.jsx)("div", {
                id: "scroll-content",
                children: t,
              }),
            })
          );
        },
        g = a(10980),
        b = a.n(g),
        j = () => {
          let e = (0, s.useRef)(null),
            t = (0, s.useRef)(null),
            a = (0, s.useRef)(0),
            l = (0, s.useRef)({ last: 0, current: 0 });
          return (
            (0, s.useEffect)(() => {
              if (!e.current || !t.current) return;
              let r = e.current,
                s = r.getContext("2d");
              if (!s) return;
              let { width: n, height: i } = t.current.getBoundingClientRect();
              (r.width = 2 * n), (r.height = 2 * i);
              let c = 0,
                o = [];
              for (let e = 1; e <= 30; e++) {
                let t =
                    "/static.cdn-luma.com/cdn-cgi/image/height1000,quality100/files/site/home/".concat(
                      e < 10 ? "0" + "".concat(e) : e,
                      "LandingImage.jpg"
                    ),
                  a = new Image();
                o.push(a),
                  (a.onload = () => {
                    30 == ++c && u();
                  }),
                  (a.src = t);
              }
              let d = -1,
                m = (0, v.$)("[data-shuffle-index]"),
                u = () => {
                  if (d === a.current) {
                    requestAnimationFrame(() => u());
                    return;
                  }
                  if (o[(d = a.current)]) {
                    let { naturalWidth: e, naturalHeight: t } = o[d],
                      l = 0.6 * r.height,
                      n = (t / e) * l;
                    s.drawImage(
                      o[d],
                      0.5 * r.width - 0.5 * n,
                      r.height - l,
                      n,
                      l
                    ),
                      (m.textContent =
                        1 === (a.current + 1).toString().length
                          ? "0".concat(a.current + 1)
                          : (a.current + 1).toString());
                  }
                  requestAnimationFrame(() => u());
                },
                h = t.current.getBoundingClientRect().width,
                x = t.current.getBoundingClientRect().left,
                f = b()((e) => {
                  l.current.last = e.clientX;
                  let t = (l.current.last - x) / h;
                  if (l.current.current === l.current.last) {
                    l.current.current = l.current.last;
                    return;
                  }
                  (l.current.current = l.current.last),
                    (a.current = Math.round(t * (o.length - 1)));
                }, 80),
                p = () => {
                  if (!t.current) return;
                  d = -1;
                  let {
                    width: e,
                    height: a,
                    left: l,
                  } = t.current.getBoundingClientRect();
                  (r.width = 2 * e), (r.height = 2 * a), (h = e), (x = l);
                },
                g = (0, v.$)("[data-shuffle-effect]");
              return (
                g.addEventListener("mousemove", f),
                window.addEventListener("resize", p),
                () => {
                  g.removeEventListener("mousemove", f),
                    window.removeEventListener("resize", p);
                }
              );
            }, []),
            (0, r.jsx)("div", {
              className:
                "invisible absolute bottom-0 z-[-1] h-[100%] w-full md:visible",
              ref: t,
              children: (0, r.jsx)("canvas", {
                ref: e,
                className: "h-full w-full",
                id: "shuffle-effect-canvas",
              }),
            })
          );
        },
        w = a(38288),
        y = a(22128);
      let C = () => {
        [
          ...(0, v.$$)("[data-hover-effect]"),
          ...(0, v.$$)("[data-chars-effect]"),
        ].forEach((e) => {
          let t = e.textContent,
            a = document.createElement("span");
          a.setAttribute("data-hover-effect-root", "");
          let r = document.createElement("span");
          r.setAttribute("data-hover-effect-text-wrapper", ""),
            r.setAttribute("data-hover-top-wrapper", ""),
            a.append(r);
          let l = document.createElement("span");
          l.setAttribute("data-hover-effect-text-wrapper", ""),
            l.setAttribute("data-hover-bottom-wrapper", ""),
            a.append(l),
            null == t ||
              t.split("").forEach((e, a) => {
                let s = " " === e ? "\xa0" : e,
                  n = document.createElement("span");
                n.setAttribute("data-char-wrapper", "");
                let i = document.createElement("span");
                i.setAttribute("data-char-wrapper", "");
                let c = document.createElement("span"),
                  o = document.createElement("span");
                (o.textContent = s),
                  (c.textContent = s),
                  c.style.setProperty("--char-index", "".concat(a)),
                  c.style.setProperty("--char-length", "".concat(t.length)),
                  o.style.setProperty("--char-index", "".concat(a)),
                  o.style.setProperty("--char-length", "".concat(t.length)),
                  n.append(c),
                  i.append(o),
                  r.append(n),
                  l.append(i);
              }),
            (e.innerHTML = ""),
            e.append(a);
        });
      };
      var N = a(61386),
        k = a(7546),
        Z = a(69381),
        L = a(91461),
        M = a(42774),
        _ = (e) => {
          let { headerData: t, footerData: a } = e,
            m = (0, s.useRef)(!1);
          return (
            (0, y.Z)(),
            (0, s.useEffect)(() => {
              m.current || (C(), (0, n.u)(), (m.current = !0));
            }, []),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(d.Z, { data: a }),
                (0, r.jsx)(p, {
                  device: "desktop",
                  children: (0, r.jsx)("div", {
                    "data-scrollable-content": !0,
                    children: (0, r.jsxs)("div", {
                      className:
                        "relative z-20 col-start-1 col-end-13 grid grid-cols-12 bg-light1",
                      children: [
                        (0, r.jsx)("div", {
                          className: "col-start-1 col-end-13",
                          id: "news",
                        }),
                        (0, r.jsx)(k.Z, { device: "desktop", data: t }),
                        (0, r.jsx)(w.Z, { device: "desktop", headerData: t }),
                        (0, r.jsxs)("div", {
                          className:
                            "invisible relative z-10 col-start-1 col-end-13 grid grid-cols-12",
                          "data-page-content": !0,
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "sticky top-0 z-[11] col-start-1 col-end-13 h-0 w-full",
                              children: (0, r.jsx)(o.Z, { color: "dark" }),
                            }),
                            (0, r.jsxs)("div", {
                              className:
                                "relative z-20 col-start-1 col-end-13 bg-light1",
                              children: [
                                (0, r.jsx)(c.Z, {}),
                                (0, r.jsx)(o.Z, { absolute: !1 }),
                                (0, r.jsx)("div", {
                                  className: "grid grid-cols-12",
                                  children: (0, r.jsxs)("div", {
                                    className:
                                      "relative z-20 col-start-2 col-end-12",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className: "relative py-[4vmax]",
                                        "data-shuffle-effect": !0,
                                        children: [
                                          (0, r.jsxs)("div", {
                                            className:
                                              "grid grid-cols-10 gap-[max(2rem,4vmax)]",
                                            children: [
                                              (0, r.jsxs)("div", {
                                                className:
                                                  "col-start-1 col-end-11 flex flex-col md:col-end-7",
                                                children: [
                                                  (0, r.jsxs)("h1", {
                                                    className:
                                                      "text-h2 tracking-tight text-black",
                                                    children: [
                                                      "Dream's mission is to build multimodal general intelligence that can generate, understand, and operate in the ",
                                                      (0, r.jsx)("br", {}),
                                                      "physical world",
                                                    ],
                                                  }),
                                                  (0, r.jsx)("div", {
                                                    "data-shuffle-index": !0,
                                                    className:
                                                      "hidden text-[max(6rem,8vmax)] font-light leading-[100%] text-black md:block",
                                                    children: "01",
                                                  }),
                                                ],
                                              }),
                                              (0, r.jsxs)("p", {
                                                className: (0, l.Z)(
                                                  "text-c1 text-black/60",
                                                  "col-start-1 col-end-11 md:col-start-7 lg:col-start-8"
                                                ),
                                                children: [
                                                  "AI for the next billion people will not look like LLMs. Computers won’t be point and click. Tomorrow’s systems will be creative, immersive, and multimodally interactive.",
                                                  (0, r.jsx)("br", {}),
                                                  (0, r.jsx)("br", {}),
                                                  (0, r.jsx)("b", {
                                                    children:
                                                      "Text alone is not enough to get there.",
                                                  }),
                                                  " The current industry approach of scaling LLMs on limited text data has hit a wall. At Dream we are doing foundational research and building systems that can train efficiently on rich multimodal data. This is the path to useful general intelligence.",
                                                  (0, r.jsx)("br", {}),
                                                  (0, r.jsx)("br", {}),
                                                  (0, r.jsx)("b", {
                                                    children:
                                                      "We are training world models that jointly learn from video, audio, and language — similar to how the human brain learns.",
                                                  }),
                                                  " ",
                                                  "This will enable models to see, hear and reason about the world so they can effectively collaborate with us, help us communicate better, entertain us, and one day, operate alongside us in the real world.",
                                                  (0, r.jsx)("br", {}),
                                                  (0, r.jsx)("br", {}),
                                                  "We are a small stellar team of researchers, engineers, and product thinkers dedicated to this singular mission. If that's you, we offer an opportunity to do your life's work and solve one of the most important problems of our time in a collegiate and collaborative environment. Join us.",
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, r.jsx)(j, {}),
                                        ],
                                      }),
                                      (0, r.jsx)("div", {
                                        className:
                                          "absolute bottom-0 left-0 h-[1px] w-full bg-black/30",
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                            (0, r.jsx)(L.Z, {}),
                            (0, r.jsx)(M.Z, { device: "desktop" }),
                            (0, r.jsxs)("div", {
                              className:
                                "relative z-20 col-start-1 col-end-13 grid grid-cols-12",
                              children: [
                                (0, r.jsx)(c.Z, {}),
                                (0, r.jsx)(Z.Z, {
                                  device: "desktop",
                                  socialsData: a.socials,
                                }),
                                (0, r.jsx)(N.Z, { data: a }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        };
    },
    61386: function (e, t, a) {
      "use strict";
      var r = a(20209),
        l = a(61237),
        s = a(46066),
        n = a(64799);
      t.Z = (e) => {
        let { data: t } = e;
        return (0, r.jsxs)("footer", {
          className: (0, l.Z)(
            "col-start-2 col-end-12 grid grid-cols-2 md:grid-cols-10",
            "gap-[clamp(.8rem,1vmax,1vw)] whitespace-nowrap border-t border-black/30 pb-[16vmax] pt-[4vmax] md:gap-0"
          ),
          children: [
            (0, r.jsxs)("div", {
              className:
                "col-start-1 col-end-11 flex flex-col place-items-start justify-start md:col-end-6",
              children: [
                (0, r.jsx)(s.default, {
                  "data-hover-effect": !0,
                  href: "/",
                  className: "text-h5",
                  children: "Dream AI",
                }),
                (0, r.jsx)("div", {
                  className: "mt-[6vmax] hidden md:block",
                  children: (0, r.jsx)(n.Z, { data: t.socials }),
                }),
              ],
            }),
            (0, r.jsx)("ul", {
              className: (0, l.Z)(
                "col-start-1 col-end-11 md:col-start-6 md:col-end-11",
                "text-l2 mt-[2vmax] xs:columns-2 md:mt-0 xl:columns-3"
              ),
              children: t.links.map((e) =>
                (0, r.jsx)(
                  "li",
                  {
                    children: (0, r.jsx)(s.default, {
                      className:
                        "mb-[clamp(.8rem,1vmax,1vw)] block whitespace-nowrap md:mb-[clamp(.35rem,.4vmax,.4vw)]",
                      href: e.url,
                      target: e.blank ? "_blank" : "_self",
                      rel: e.blank ? "noreferrer nofollow" : void 0,
                      "data-hover-effect": !0,
                      children: e.label,
                    }),
                  },
                  e._key
                )
              ),
            }),
          ],
        });
      };
    },
    7546: function (e, t, a) {
      "use strict";
      var r = a(20209),
        l = a(61237),
        s = a(46066),
        n = a(83112),
        i = a(79362),
        c = a(71721);
      t.Z = (0, n.memo)((e) => {
        var t;
        let {
          device: a,
          sticky: n = !0,
          blend: o = !0,
          className: d,
          noBorder: m,
          data: u,
        } = e;
        return (
          console.log(u),
          (0, r.jsx)("header", {
            id: "header",
            className: (0, l.Z)(
              "pointer-events-auto col-start-1 col-end-13 grid grid-cols-12 text-white",
              n && "sticky top-0",
              o && "z-50 mix-blend-difference",
              d
            ),
            children: (0, r.jsx)("div", {
              className: (0, l.Z)(
                "col-start-2 col-end-12 w-full py-[clamp(1rem,1.2vmax,1.2vw)]",
                n && "absolute top-0",
                !m && "border-b border-white/30"
              ),
              children: (0, r.jsxs)("div", {
                className: "text-l3 flex w-full items-center justify-between",
                children: [
                  (0, r.jsxs)(s.default, {
                    href: "/",
                    className: "flex gap-[clamp(.4rem,.5vmax,.5vw)]",
                    children: [
                      (0, r.jsx)("span", {
                        className:
                          "relative block w-[clamp(.9rem,1vmax,1vw)] justify-self-center",
                        style: { aspectRatio: "33/37" },
                        children: (0, r.jsx)(c.Z, {
                          width: "100%",
                          height: "100%",
                          fill: "white",
                        }),
                      }),
                      (0, r.jsx)("span", {
                        className: "text-l2 font-medium normal-case",
                        "data-hover-effect": !0,
                        children: "Dream AI",
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "block md:hidden",
                    children: (0, r.jsx)("button", {
                      className: "hamburger hamburger--spin white",
                      type: "button",
                      id: "header-menu-button",
                      "data-menu-button": !0,
                      onClick: (e) => {
                        var t, a;
                        let r = document.getElementById("navigation-menu");
                        r &&
                          ((0, i.$$)("[data-menu-button]").forEach((e) =>
                            e.classList.toggle("is-active")
                          ),
                          null === (a = (0, i.$)("#menu-close-button")) ||
                            void 0 === a ||
                            null === (t = a.classList) ||
                            void 0 === t ||
                            t.toggle("is-active"),
                          (r.style.opacity = "1"),
                          (r.style.pointerEvents = "all"),
                          r.setAttribute("data-menu-open", "true"));
                      },
                      children: (0, r.jsx)("span", {
                        className: "hamburger-box",
                        children: (0, r.jsx)("span", {
                          className: "hamburger-inner",
                        }),
                      }),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "hidden gap-[clamp(1.2rem,1.7vmax,1.7vw)] md:flex",
                    children:
                      null == u
                        ? void 0
                        : null === (t = u.links) || void 0 === t
                        ? void 0
                        : t.map((e) =>
                            (0, r.jsx)(
                              s.default,
                              {
                                className: "text-inherit",
                                href: e.url,
                                target: e.blank ? "_blank" : "_self",
                                rel: e.blank ? "noreferrer nofollow" : void 0,
                                onClick: (t) => {
                                  e.url.includes("/#") &&
                                    window.lenis &&
                                    (t.preventDefault(),
                                    window.lenis.scrollTo(
                                      (0, i.$)("#".concat(e.url.split("/#")[1]))
                                    ));
                                },
                                "data-hover-effect": !0,
                                children: e.label,
                              },
                              e._key
                            )
                          ),
                  }),
                ],
              }),
            }),
          })
        );
      });
    },
    15843: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return j;
        },
      });
      var r = a(20209),
        l = a(83112),
        s = a(59435),
        n = a(83284),
        i = a(30674),
        c = a(29257),
        o = a(38288),
        d = a(22128),
        m = a(61386),
        u = a(7546),
        h = a(54638),
        x = a(79362),
        v = a(11665),
        f = () => {
          let e = (0, l.useRef)(30),
            t = (0, l.useRef)(Math.round(Math.random() * (e.current - 1)));
          return (
            (0, l.useEffect)(() => {
              let a = 0,
                r = t.current,
                l = [],
                s = [],
                n = (0, x.$)("[data-image-start]"),
                i = (0, x.$)("[data-image-end]");
              for (let t = 1; t <= e.current; t++) {
                let o =
                    "/static.cdn-luma.com/cdn-cgi/image/quality=80/files/site/home/000".concat(
                      t < 10 ? "0" + "".concat(t) : t,
                      "LandingImage.jpg"
                    ),
                  d = new Image();
                l.push(d),
                  (d.onload = () => {
                    if (++a === e.current) {
                      h.ZP.set(n, { opacity: 1 }),
                        h.ZP.set(i, { opacity: 0 }),
                        (i.src = l[r].src);
                      let e = setTimeout(() => {
                        s.push(e), clearTimeout(e), c();
                      }, 1e4);
                    }
                  }),
                  (d.src = o);
              }
              let c = () => {
                let t = h.ZP.timeline(),
                  a = (0, x.$)("[data-image-start]"),
                  n = (0, x.$)("[data-image-end]");
                t.to(a, { opacity: 0, duration: 0.7 }, 0),
                  t.to(n, { opacity: 1, duration: 0.7 }, 0),
                  t.call(() => {
                    (r = (r + 1) % e.current),
                      (a.src = l[r].src),
                      a.removeAttribute("data-image-start"),
                      a.setAttribute("data-image-end", ""),
                      n.removeAttribute("data-image-end"),
                      n.setAttribute("data-image-start", "");
                    let t = setTimeout(() => {
                      s.push(t), clearTimeout(t), c();
                    }, 1e4);
                  });
              };
              return () => {
                s.forEach((e) => clearTimeout(e));
              };
            }, []),
            (0, r.jsxs)("div", {
              className: "col-start-2 col-end-12 mt-[calc(var(--vw)*30)]",
              children: [
                (0, r.jsxs)("div", {
                  className: "relative pb-[14vmax]",
                  children: [
                    (0, r.jsxs)("h1", {
                      className:
                        "relative z-10 flex flex-col items-end font-graphikTight text-[35vw] font-semibold leading-[100%]",
                      children: [
                        (0, r.jsx)("span", {
                          className: "block translate-y-[-20%]",
                          children: "Dream",
                        }),
                        (0, r.jsx)("span", {
                          className: "block translate-y-[-40%] text-black",
                          children: "AI",
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "absolute bottom-0 z-0 h-[65%] w-full translate-x-[-10%]",
                      children: [
                        (0, r.jsx)("img", {
                          className:
                            "absolute bottom-0 left-0 h-full object-contain object-left-bottom",
                          "data-image-start": !0,
                          alt: "",
                          src: "/static.cdn-luma.com/cdn-cgi/image/quality=80/files/site/home/000".concat(
                            t.current + 1 < 10
                              ? "0" + "".concat(t.current + 1)
                              : t.current + 1,
                            "LandingImage.jpg"
                          ),
                          loading: "eager",
                        }),
                        (0, r.jsx)("img", {
                          className:
                            "bottom-0 left-0 h-full object-contain object-left-bottom",
                          "data-image-end": !0,
                          alt: "",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "border-y border-black/30 py-[4vmax]",
                  children: [
                    (0, r.jsxs)("h1", {
                      className: "text-h2 col-start-1 col-end-11 md:col-end-7",
                      children: [
                        "Dream's mission is to build multimodal general intelligence that can generate, understand, and operate in the ",
                        (0, r.jsx)("br", {}),
                        "physical world",
                      ],
                    }),
                    (0, r.jsxs)("p", {
                      className: "text-c1 mt-[4vmax] text-black/60",
                      children: [
                        "AI for the next billion people will not look like LLMs. Computers won’t be point and click. Tomorrow’s systems will be creative, immersive, and multimodally interactive.",
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)("b", {
                          children: "Text alone is not enough to get there.",
                        }),
                        " The current industry approach of scaling LLMs on limited text data has hit a wall. At Dream we are doing foundational research and building systems that can train efficiently on rich multimodal data. This is the path to useful general intelligence.",
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)("b", {
                          children:
                            "We are training world models that jointly learn from video, audio, and language — similar to how the human brain learns.",
                        }),
                        " ",
                        "This will enable models to see, hear and reason about the world so they can effectively collaborate with us, help us communicate better, entertain us, and one day, operate alongside us in the real world.",
                        (0, r.jsx)("br", {}),
                        (0, r.jsx)("br", {}),
                        "We are a small stellar team of researchers, engineers, and product thinkers dedicated to this singular mission. If that's you, we offer an opportunity to do your life's work and solve one of the most important problems of our time in a collegiate and collaborative environment. Join us.",
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        p = a(69381),
        g = a(91461),
        b = a(42774),
        j = (e) => {
          let { headerData: t, footerData: a } = e,
            h = (0, l.useRef)(!1);
          return (
            (0, d.Z)(),
            (0, l.useEffect)(() => {
              h.current || ((0, s.u)(), (h.current = !0));
            }, []),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)(c.Z, { data: a }),
                (0, r.jsx)("div", {
                  className: "h-[100dvh] overflow-y-scroll",
                  children: (0, r.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, r.jsx)(o.Z, { device: "mobile", headerData: t }),
                      (0, r.jsxs)("div", {
                        className:
                          "invisible relative mt-[calc(var(--vw)*40)] grid grid-cols-12 bg-light1",
                        "data-page-content": !0,
                        children: [
                          (0, r.jsx)(u.Z, { device: "mobile", data: t }),
                          (0, r.jsxs)("div", {
                            className:
                              "relative z-20 col-start-1 col-end-13 grid grid-cols-12 bg-light1",
                            children: [
                              (0, r.jsx)(n.Z, {}),
                              (0, r.jsx)("div", {
                                className: "col-start-1 col-end-13",
                                children: (0, r.jsx)(i.Z, {
                                  color: "light",
                                  absolute: !1,
                                }),
                              }),
                              (0, r.jsx)(f, {}),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "sticky top-0 z-[11] col-start-1 col-end-13 h-0 w-full",
                            children: (0, r.jsx)(i.Z, { color: "dark" }),
                          }),
                          (0, r.jsx)(g.Z, {}),
                          (0, r.jsx)(b.Z, { device: "mobile" }),
                          (0, r.jsxs)("div", {
                            className:
                              "relative z-20 col-start-1 col-end-13 grid grid-cols-12",
                            children: [
                              (0, r.jsx)(n.Z, {}),
                              (0, r.jsx)(p.Z, {
                                device: "mobile",
                                socialsData: a.socials,
                              }),
                              (0, r.jsx)(m.Z, { data: a }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        };
    },
    69381: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return h;
        },
      });
      var r = a(20209),
        l = a(61237),
        s = a(46066),
        n = a(25876),
        i = a(83112),
        c = (e) => {
          let { ...t } = e;
          return (0, r.jsx)("svg", {
            ...t,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              d: "M15.2168 11.9004C15.2168 12.2194 15.1094 12.4863 14.8945 12.7012C14.6797 12.916 14.429 13.0234 14.1426 13.0234C13.8496 13.0234 13.6022 12.916 13.4004 12.7012C13.1986 12.4798 13.0977 12.2227 13.0977 11.9297V8.27734L13.2539 4.25391L11.6719 6.03125L2.36523 15.3379C2.13737 15.5592 1.88021 15.6699 1.59375 15.6699C1.39844 15.6699 1.21615 15.6178 1.04688 15.5137C0.884115 15.416 0.750651 15.2826 0.646484 15.1133C0.542318 14.944 0.490234 14.765 0.490234 14.5762C0.490234 14.2962 0.607422 14.0391 0.841797 13.8047L10.1289 4.48828L11.9062 2.92578L7.70703 3.07227H4.23047C3.9375 3.07227 3.68359 2.97135 3.46875 2.76953C3.25391 2.5612 3.14648 2.3138 3.14648 2.02734C3.14648 1.74089 3.25065 1.49023 3.45898 1.27539C3.66732 1.06055 3.93424 0.953125 4.25977 0.953125H14.0645C14.416 0.953125 14.6927 1.06055 14.8945 1.27539C15.1029 1.48372 15.207 1.75716 15.207 2.0957L15.2168 11.9004Z",
              fill: "black",
            }),
          });
        },
        o = (e) => {
          let { label: t, desc: a, url: l } = e,
            n = (0, i.useRef)(null);
          return (0, r.jsxs)("div", {
            className: "mt-[1vmax]",
            children: [
              (0, r.jsxs)(s.default, {
                "data-chars-effect-root": !0,
                ref: n,
                target: "_blank",
                rel: "noreferrer",
                href: l,
                className: "group flex items-center justify-between",
                onMouseEnter: () => {
                  var e;
                  null === (e = n.current) ||
                    void 0 === e ||
                    e.classList.add("active");
                },
                onMouseLeave: () => {
                  var e;
                  null === (e = n.current) ||
                    void 0 === e ||
                    e.classList.remove("active");
                },
                children: [
                  (0, r.jsx)("span", {
                    className: "text-h4 block",
                    "data-chars-effect": !0,
                    children: t,
                  }),
                  (0, r.jsx)("span", {
                    className: "block",
                    children: (0, r.jsx)(c, {
                      height: "clamp(1.2rem,1.4vmax,1.4vw)",
                      className:
                        "transition-transform duration-300 group-hover:rotate-45",
                    }),
                  }),
                ],
              }),
              (0, r.jsx)("p", {
                className: "text-c1 mt-[1vmax] text-black/60",
                children: a,
              }),
            ],
          });
        },
        d = a(44800),
        m = (e) => {
          let {
              src: t,
              width: a,
              height: l,
              color: s = "rgba(0, 0, 0, 0.05)",
              alt: n,
            } = e,
            i = { backgroundColor: s };
          return (
            a && l
              ? (i.aspectRatio = "".concat(a, "/").concat(l))
              : (i.height = "100%"),
            (0, r.jsx)("div", {
              className: "relative w-full",
              style: i,
              children: (0, r.jsx)(d.default, {
                src: t,
                alt: n || "",
                fill: !0,
                style: { opacity: 0 },
                onLoad: (e) => {
                  e.currentTarget.style.opacity = "1";
                },
                className:
                  "h-full w-full object-cover transition-opacity duration-300",
                loading: "lazy",
              }),
            })
          );
        },
        u = a(64799),
        h = (e) => {
          let { device: t, socialsData: a } = e;
          return (0, r.jsx)("div", {
            className:
              "relative z-20 col-start-1 col-end-13 grid grid-cols-12 bg-light1",
            id: "team",
            children: (0, r.jsx)("div", {
              className: "col-start-2 col-end-12",
              style: { containerType: "inline-size" },
              children: (0, r.jsxs)("div", {
                className: "relative py-[8vmax] md:py-[6vmax]",
                children: [
                  (0, r.jsxs)("h2", {
                    className:
                      "md:text-h1 font-graphikTight text-[3rem] font-medium leading-[100%] tracking-tight md:whitespace-nowrap",
                    children: [
                      "Team",
                      (0, r.jsx)("span", {
                        className: "tracking-tighter",
                        children: " ",
                      }),
                      "&",
                      (0, r.jsx)("span", {
                        className: "hidden tracking-tighter md:inline",
                        children: " ",
                      }),
                      "Community",
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "col-start-1 col-end-11 mt-[4vmax] grid grid-cols-10 gap-y-[4vmax] md:gap-y-[2vmax]",
                    children: [
                      (0, r.jsx)("h3", {
                        className:
                          "text-h3 col-start-1 col-end-11 md:col-end-5",
                        children: "Everything we can imagine should be real",
                      }),
                      (0, r.jsxs)("p", {
                        className:
                          "text-c1 col-start-1 col-end-11 text-black/60 md:col-start-7",
                        children: [
                          "We're bringing together pioneering researchers, product thinkers, cracked engineers, and a community of daring creatives to shape the future of world building and multimodal intelligence.",
                          (0, r.jsx)("br", {}),
                          (0, r.jsx)("br", {}),
                          "Join us in shaping this revolution!",
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "col-start-1 col-end-11 mt-[6vmax] flex grid-cols-2 flex-col gap-[6vmax] md:grid md:gap-[2vmax]",
                    children: [
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)(s.default, {
                            href: "https://t.me/DreamAI_eth",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "block h-[50vmax] overflow-hidden",
                            children: (0, r.jsx)("div", {
                              className: (0, l.Z)(
                                "relative",
                                "desktop" === t ? "h-[120%]" : "h-full"
                              ),
                              "data-speed": "0.2",
                              children: (0, r.jsx)(m, {
                                src: "/static.cdn-luma.com/files/site/home/Team1.jpg",
                                alt: "",
                              }),
                            }),
                          }),
                          (0, r.jsx)(o, {
                            url: "https://t.me/DreamAI_eth",
                            label: "Telegram",
                            desc: "We're a small, high-achieving team building multimodal general intelligence \n                  If you share our vision of AI that transcends current boundaries to enable extraordinary\n                  capabilities and human-AI collaboration, we'd love to talk.",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)(s.default, {
                            target: "_blank",
                            rel: "noreferrer",
                            href: "https://x.me",
                            className: "block h-[50vmax] overflow-hidden",
                            children: (0, r.jsx)("div", {
                              className: (0, l.Z)(
                                "relative",
                                "desktop" === t ? "h-[120%]" : "h-full"
                              ),
                              "data-speed": "0.2",
                              children: (0, r.jsx)(m, {
                                src: "/static.cdn-luma.com/files/1d382d14a60e3501/Learning1.png",
                                alt: "",
                              }),
                            }),
                          }),
                          (0, r.jsx)(o, {
                            url: "https://x.com/DreamAI_eth",
                            label: "Twitter",
                            desc: "Explore the possibilities unlocked through world building. Find\n                  tutorials, best practices, and inspiring examples from our\n                  community of millions of creatives. Learn how others are using\n                  Dream Haven, and the Dream API to transform their creative process \n                  across design, film, education, and beyond.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "mt-[6vmax] md:hidden",
                    children: (0, r.jsx)(u.Z, { data: a }),
                  }),
                ],
              }),
            }),
          });
        };
    },
    91461: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return u;
        },
      });
      var r = a(20209),
        l = a(44800),
        s = a(46066),
        n = a(95211),
        i = a(11665),
        c = a(83284),
        o = a(30674),
        d = a(61237), 
        m = (e) => {
          let { heading: t, desc: a, footer: l, media: s, className: n } = e;
          return (0, r.jsxs)("div", {
            className: (0, d.W)(
              "flex grid-cols-10 flex-col-reverse rounded-[clamp(1.3rem,1.5vmax,1.5vw)] bg-light2 xmd:grid",
              n
            ),
            children: [
              (0, r.jsxs)("div", { 
                className: (0, d.W)(
                  "flex flex-col justify-between gap-[4vmax] p-[4vmax] lg:gap-[10vmax] lg:p-[2vmax]",
                  "col-start-1 xl:col-end-4",
                  "col-start-1 col-end-5"
                ),
                children: [
                  (0, r.jsx)("div", { children: t }),
                  (0, r.jsxs)("div", {
                    className:
                      "flex flex-col items-start gap-[4vmax] lg:gap-[3vmax]",
                    children: [
                      (0, r.jsx)("p", {
                        className: "text-c1 text-black/60",
                        children: a,
                      }),
                      l,
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: (0, d.W)(
                  "relative col-start-5 col-end-11 overflow-hidden xl:col-start-4",
                  "rounded-tr-[clamp(1.3rem,1.5vmax,1.5vw)]",
                  "rounded-tl-[clamp(1.3rem,1.5vmax,1.5vw)] xmd:rounded-tl-none",
                  "rounded-br-none xmd:rounded-br-[clamp(1.3rem,1.5vmax,1.5vw)]"
                ),
                children: s,
              }),
            ],
          });
        },
        u = () =>
          (0, r.jsxs)("div", {
            className: "relative z-20 col-start-1 col-end-13 bg-light1",
            id: "product",
            children: [
              (0, r.jsxs)("div", {
                className: "grid grid-cols-12",
                children: [
                  (0, r.jsx)(c.Z, {}),
                  (0, r.jsxs)("div", {
                    className:
                      "relative col-start-2 col-end-12 grid grid-cols-10 pb-[10vmax] pt-[8vmax] md:pb-[8vmax] md:pt-[6vmax]",
                    style: { containerType: "inline-size" },
                    children: [
                      (0, r.jsx)("h2", {
                        className: "text-h1",
                        children: "Platform",
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "col-start-1 col-end-11 mt-[4vmax] grid grid-cols-10 gap-y-[4vmax] md:gap-y-[2vmax]",
                        children: [
                          (0, r.jsx)("h3", {
                            className:
                              "text-h3 col-start-1 col-end-11 md:col-end-5",
                            children:
                              "Foundations for a new era of creativity and human expression",
                          }),
                          (0, r.jsxs)("p", {
                            className:
                              "text-c1 col-start-1 col-end-11 text-black/60 md:col-start-7",
                            children: [
                              (0, r.jsx)("b", {
                                children:
                                  "Worldbuilding is the foundation of storytelling. ",
                              }),
                              "AI that is able to understand context, intent, and imagination, and gives you the power to manipulate anything is the key to unlocking this new era of creative expression.",
                              (0, r.jsx)("br", {}),
                              (0, r.jsx)("br", {}),
                              "We are building powerful and collaborative products for creatives working on video across media, entertainment, marketing, and advertising industries. These products are built in concert with Dream's intelligent multimodal video, audio and reasoning models and make rich and controllable worldbuilding accessible.",
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "col-start-1 col-end-11 mt-[6vmax] flex flex-col gap-[6vmax] md:gap-[2vmax]",
                        children: [
                          (0, r.jsx)(m, {
                            heading: (0, r.jsx)(r.Fragment, {
                              children: (0, r.jsx)("div", {
                                style: { aspectRatio: "148/59" },
                                className:
                                  "relative w-[max(6rem,9vmax)] mix-blend-difference",
                                children: (0, r.jsx)(l.default, {
                                  src: "/static.cdn-luma.com/files/dm-landing/logo.svg",
                                  alt: "",
                                  fill: !0,
                                }),
                              }),
                            }),
                            desc: (0, r.jsxs)(r.Fragment, {
                              children: [
                                "Ideate, visualize, create videos, and share your dreams with the world, using our most powerful image and video AI models. Available now on iOS and the Web.",
                                " ",
                              ],
                            }),
                            footer: (0, r.jsxs)("div", {
                              className: "flex items-center gap-[2vmax]",
                              children: [
                              ],
                            }),
                            media: (0, r.jsx)("div", {
                              className:
                                "relative aspect-[1920/1080] w-full md:h-full",
                              children: (0, r.jsx)(s.default, {
                                href: n.Z.landing,
                                target: "_blank",
                                rel: "noreferrer",
                                className: "relative block h-full w-full",
                                children: (0, r.jsx)("video", {
                                  "data-src":
                                    "/static.cdn-luma.com/files/site/home/Dream-Machine.mp4",
                                  className:
                                    "absolute left-0 top-0 h-full w-full object-cover",
                                  muted: !0,
                                  playsInline: !0,
                                  loop: !0,
                                  preload: "none",
                                  "data-observed-video": !0,
                                }),
                              }),
                            }),
                          }),
                          (0, r.jsx)(m, {
                            heading: (0, r.jsx)(r.Fragment, {
                              children: (0, r.jsxs)("div", {
                                className: "text-heading3 leading-[100%]",
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "font-semibold tracking-tighter",
                                    children: "Dream",
                                  }),
                                  " ",
                                  (0, r.jsx)("span", {
                                    className: "tracking-tighter",
                                    children: "API",
                                  }),
                                ],
                              }),
                            }),
                            desc: (0, r.jsx)(r.Fragment, {
                              children:
                                "Build and scale creative products with the world's most popular and intuitive Video and Image generation models with Dream API.",
                            }),
                            footer: (0, r.jsx)("div", {
                              className: "flex items-center gap-[2vmax]",
                              children: "",
                            }),
                            media: (0, r.jsx)("div", {
                              className:
                                "relative aspect-[1920/1080] w-full md:h-full",
                              children: (0, r.jsx)(s.default, {
                                target: "_blank",
                                rel: "noreferer",
                                href: "https://haven.dreamlabsai.org",
                                className:
                                  "relative block h-full w-full overflow-hidden",
                                children: (0, r.jsx)("video", {
                                  "data-src":
                                    "/static.cdn-luma.com/files/site/api/ray2/RAY2%20API%20Launch%20Twitter_smaller.mp4",
                                  className:
                                    "absolute left-0 top-0 h-full w-full object-cover",
                                  muted: !0,
                                  playsInline: !0,
                                  loop: !0,
                                  preload: "none",
                                  "data-observed-video": !0,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(o.Z, { absolute: !1 }),
            ],
          });
    },
    42774: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return m;
        },
      });
      var r = a(20209),
        l = a(61237),
        s = a(95211),
        n = (e) => {
          let { ...t } = e;
          return (0, r.jsx)("svg", {
            ...t,
            viewBox: "0 0 150 45",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("g", {
              children: (0, r.jsx)("path", {
                d: "M0.97227 43.8477V1.16002H11.3009C19.3608 1.16002 22.8236 4.50339 22.8236 11.5483V15.9664C22.8236 23.0113 19.0623 26.1159 11.3606 26.1159H8.49485V43.8477H0.97227ZM8.49485 20.7426H11.1815C14.1666 20.7426 15.4801 19.3097 15.4801 15.7276V11.7275C15.4801 8.08557 14.1069 6.89151 11.1815 6.89151H8.49485V20.7426ZM24.8931 43.8477V1.16002H32.4157V19.0112H40.6547V1.16002H48.1176V43.8477H40.6547V25.1009H32.4157V43.8477H24.8931ZM63.4393 44.4447C55.9167 44.4447 51.0808 40.3252 51.0808 31.8474V13.2797C51.0808 4.7422 56.1555 0.622697 63.4393 0.622697C70.8425 0.622697 75.7978 4.6228 75.7978 13.22V31.6085C75.7978 40.2058 70.9619 44.4447 63.4393 44.4447ZM63.4393 38.355C66.6036 38.355 68.1558 36.146 68.1558 31.728V13.22C68.1558 8.98111 66.6036 6.593 63.4393 6.593C60.2154 6.593 58.6631 8.80201 58.6631 13.22V31.7877C58.6631 36.2654 60.1556 38.355 63.4393 38.355ZM83.1264 43.8477V7.07062H76.0814V1.16002H97.6939V7.07062H90.6489L90.5892 43.8477H83.1264ZM110.348 44.4447C102.826 44.4447 97.9896 40.3252 97.9896 31.8474V13.2797C97.9896 4.7422 103.064 0.622697 110.348 0.622697C117.751 0.622697 122.707 4.6228 122.707 13.22V31.6085C122.707 40.2058 117.871 44.4447 110.348 44.4447ZM110.348 38.355C113.512 38.355 115.065 36.146 115.065 31.728V13.22C115.065 8.98111 113.512 6.593 110.348 6.593C107.124 6.593 105.572 8.80201 105.572 13.22V31.7877C105.572 36.2654 107.064 38.355 110.348 38.355ZM125.649 43.8477V1.16002H134.007L142.485 27.1308V1.16002H149.052V43.8477H141.769L132.216 14.5932V43.8477H125.649Z",
                fill: "white",
              }),
            }),
          });
        },
        i = (e) => {
          let { ...t } = e;
          return (0, r.jsx)("svg", {
            ...t,
            viewBox: "0 0 173 44",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              d: "M0.688628 43.8477V0.808396H24.4656C37.5278 0.808396 44.9318 5.323 44.9318 14.5328V14.7736C44.9318 21.5756 41.1997 24.8261 35.6618 26.9931L48.4833 43.8477H33.1938L22.9005 30.4844H14.5334V43.8477H0.688628ZM14.5334 21.1542H23.6228C28.4384 21.1542 31.2676 19.4086 31.2676 15.5561V15.3153C31.2676 11.2823 28.2578 9.83761 23.7432 9.83761H14.5334V21.1542ZM42.3476 43.8477L61.309 0.808396H79.3072L98.088 43.8477H83.4005L80.0898 35.7816H58.7206L55.2895 43.8477H42.3476ZM69.4955 10.1988L62.3323 27.2339H76.5383L69.4955 10.1988ZM103.82 43.8477V25.6086L84.8583 0.808396H100.208L111.404 15.4959L122.299 0.808396H135.843L117.785 25.6086V43.8477H103.82ZM129.154 43.8477V41.2593L149.138 25.9698C155.76 20.9134 158.769 18.0241 158.769 14.6532C158.769 11.2221 156.302 9.23566 151.546 9.23566C146.67 9.23566 143.42 11.6435 142.577 17.1212H129.996C130.839 6.40651 139.026 0.206449 152.148 0.206449C165.812 0.206449 172.494 5.80456 172.494 13.8105C172.494 19.7697 167.919 24.2844 161.599 28.799L153.051 34.8786H172.915V43.8477H129.154Z",
              fill: "white",
            }),
          });
        },
        c = a(46066);
      a(83112);
      var o = a(11665),
        d = (e) => {
          let {
            label: t,
            desc: a,
            linkLabel: s,
            videoSrc: n,
            direction: i = "column",
            href: d,
          } = e;
          return (0, r.jsxs)("div", {
            className: (0, l.Z)(
              "overflow-hidden rounded-[clamp(1.3rem,1.5vmax,1.5vw)] bg-dark2",
              "row" === i && "grid grid-cols-1 md:grid-cols-2"
            ),
            children: [
              (0, r.jsx)(c.default, {
                href: d,
                target: "_blank",
                rel: "noreferrer",
                className: (0, l.Z)(
                  "row" === i &&
                    "col-start-1 col-end-3 md:col-start-2 md:row-start-1 md:row-end-2"
                ),
                children: (0, r.jsx)("div", {
                  className: (0, l.Z)(
                    "relative w-full",
                    "row" === i
                      ? "aspect-[1496/1080] md:aspect-auto md:h-full"
                      : "aspect-[1496/1080]"
                  ),
                  children: (0, r.jsx)("video", {
                    "data-src": n,
                    className: "h-full w-full object-cover",
                    muted: !0,
                    playsInline: !0,
                    loop: !0,
                    preload: "none",
                    "data-observed-video": !0,
                  }),
                }),
              }),
              (0, r.jsxs)("div", {
                className: (0, l.Z)(
                  "box-border flex flex-col items-start gap-[clamp(1.7rem,2vmax,2vw)] py-[clamp(1.7rem,2vmax,2vw)] pl-[clamp(1.7rem,2vmax,2vw)] pr-[clamp(1.7rem,2vmax,2vw)]",
                  "row" === i &&
                    "col-start-1 col-end-3 md:col-end-2 md:row-start-1 md:row-end-2",
                  "row" === i && "md:pr-[max(6rem,8vmax)]"
                ),
                children: [
                  t,
                  (0, r.jsx)("p", {
                    className: "text-c1 text-white/60 md:mt-0",
                    children: a,
                  }),
                  (0, r.jsx)(o.Z, {
                    variant: "secondary",
                    href: d,
                    target: "_blank",
                    rel: "noreferrer",
                    size: "md",
                    children: s,
                  }),
                ],
              }),
            ],
          });
        },
        m = (e) => {
          let { device: t } = e;
          return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)("div", {
              className:
                "relative z-10 col-start-1 col-end-13 grid grid-cols-12",
              children: [
                (0, r.jsx)("div", { id: "research" }),
                (0, r.jsx)("div", {
                  className:
                    "relative z-10 col-start-1 col-end-13 grid grid-cols-12 bg-dark1 text-white",
                  "data-speed": "0.4",
                  children: (0, r.jsxs)("div", {
                    className: (0, l.Z)(
                      "relative col-start-2 col-end-12 grid grid-cols-10",
                      "desktop" === t
                        ? "py-[60vmax] md:py-[18vmax]"
                        : "py-[8vmax] md:py-[6vmax]"
                    ),
                    style: { containerType: "inline-size" },
                    children: [
                      (0, r.jsx)("h2", {
                        className: "text-h1",
                        children: "Research",
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "col-start-1 col-end-11 mt-[4vmax] grid grid-cols-10 gap-y-[4vmax] md:gap-y-[2vmax]",
                        children: [
                          (0, r.jsx)("h3", {
                            className:
                              "text-h3 col-start-1 col-end-11 md:col-end-5",
                            children:
                              "We are focused on foundational research and systems engineering to build multimodal general intelligence",
                          }),
                          (0, r.jsxs)("p", {
                            className:
                              "text-c1 col-start-1 col-end-11 text-white/60 md:col-start-7",
                            children: [
                              "We are a team of some of the world's best researchers and engineers from leading universities and AI labs with a track record of inventing foundational technologies like DDIM, the VAE Bottleneck, joint video-image-audio-text generation, Neural Radiance Fields, advanced neural compression, and realtime generation.",
                              (0, r.jsx)("br", {}),
                              (0, r.jsx)("br", {}),
                              "We are building the mathematical foundations and systems necessary for training and scaling multimodal world models with deep understanding of physics, causality, creative thinking, and reasoning abilities.",
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "col-start-1 col-end-11 mt-[6vmax] flex flex-col gap-[calc(var(--vw)*46)] md:gap-[calc(var(--vw)*20)]",
                        children: [
                          (0, r.jsxs)("div", {
                            className:
                              "grid grid-cols-1 gap-[6vmax] md:grid-cols-2 md:gap-[2vmax]",
                            children: [
                              (0, r.jsx)(d, {
                                label: (0, r.jsx)(n, {
                                  height: "max(1.5rem,1.7vmax)",
                                }),
                                linkLabel: "Discover",
                                videoSrc:
                                  "/static.cdn-luma.com/files/site/home/Photon.mp4",
                                desc: "Creative, intelligent and personalizable image generation model that delivers ultra high quality and 10x higher cost efficiency.",
                                href: "https://haven.dreamlabsai.org",
                              }),
                              (0, r.jsx)(d, {
                                label: (0, r.jsx)(i, {
                                  height: "max(1.5rem,1.7vmax)",
                                }),
                                linkLabel: "Discover",
                                videoSrc:
                                  "/static.cdn-luma.com/files/site/home/RAY 2 Official Premiere_smaller_cut.mp4",
                                desc: "A new generation of video model capable of producing fast coherent motion, ultra-realistic details, and logical event sequences.",
                                href: "https://haven.dreamlabsai.org",
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            children: (0, r.jsx)(d, {
                              label: (0, r.jsx)("p", {
                                className: "text-h4 leading-[120%] text-white",
                                children:
                                  "Breaking the Algorithmic Ceiling in Pre-Training with Inductive Moment Matching",
                              }),
                              direction: "row",
                              linkLabel: "Read More",
                              videoSrc:
                                "/static.cdn-luma.com/files/site/home/IMM_HomeSmall.mp4",
                              desc: (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)("span", {
                                    className: "block leading-[135%]",
                                    children: "03/11/2025",
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "block leading-[135%]",
                                    children: "Linqi Zhou, Jiaming Song",
                                  }),
                                ],
                              }),
                              href: "https://docs.dreamlabsai.org",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        };
    },
    64799: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return d;
        },
      });
      var r = a(20209),
        l = a(32576),
        s = (e) => {
          let { ...t } = e;
          return (0, r.jsxs)("svg", {
            ...t,
            viewBox: "0 0 19 19",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsx)("g", {
                clipPath: "url(#clip0_10389_4544)",
                children: (0, r.jsx)("path", {
                  d: "M5.76269 0.468336C4.81815 0.512899 4.17312 0.663636 3.60924 0.885212C3.02565 1.11265 2.531 1.41785 2.03885 1.91178C1.54669 2.40571 1.24362 2.90071 1.01779 3.48519C0.799227 4.05032 0.651154 4.69587 0.609431 5.64094C0.567708 6.58602 0.558475 6.8898 0.563091 9.30051C0.567708 11.7112 0.57836 12.0134 0.624167 12.9604C0.669264 13.9048 0.819467 14.5496 1.04104 15.1137C1.26883 15.6973 1.57368 16.1918 2.06779 16.6841C2.5619 17.1764 3.05654 17.4788 3.64244 17.705C4.20703 17.9232 4.85277 18.072 5.79766 18.1133C6.74256 18.1547 7.0467 18.1643 9.4567 18.1597C11.8667 18.1551 12.1701 18.1444 13.117 18.0995C14.0638 18.0546 14.7053 17.9033 15.2695 17.6828C15.8531 17.4545 16.3479 17.1502 16.8399 16.6559C17.3319 16.1616 17.6348 15.6662 17.8605 15.0814C18.0792 14.5168 18.2278 13.8711 18.2688 12.9269C18.3102 11.9793 18.3199 11.6768 18.3153 9.26642C18.3107 6.85607 18.2999 6.55388 18.255 5.60721C18.21 4.66054 18.0597 4.01765 17.8383 3.45323C17.6101 2.86964 17.3056 2.37553 16.8117 1.88284C16.3178 1.39015 15.8221 1.08744 15.2374 0.862309C14.6724 0.64375 14.0271 0.49479 13.0822 0.453954C12.1373 0.413119 11.8331 0.402644 9.42225 0.40726C7.01136 0.411876 6.70954 0.422174 5.76269 0.468336ZM5.86637 16.5163C5.00084 16.4787 4.53088 16.3349 4.21769 16.2145C3.80294 16.0547 3.5075 15.8615 3.19538 15.5524C2.88326 15.2433 2.69151 14.9468 2.52958 14.533C2.40797 14.2198 2.26149 13.7503 2.22101 12.8848C2.17698 11.9493 2.16775 11.6684 2.1626 9.29838C2.15745 6.92833 2.1665 6.64781 2.20752 5.71196C2.24445 4.84714 2.38915 4.37664 2.50934 4.06363C2.66914 3.64835 2.86159 3.35345 3.17141 3.0415C3.48123 2.72955 3.77684 2.53745 4.19105 2.37553C4.50389 2.25338 4.97332 2.10815 5.8385 2.06695C6.7747 2.02257 7.05522 2.01369 9.42492 2.00854C11.7946 2.00339 12.0758 2.01227 13.0124 2.05346C13.8772 2.0911 14.3479 2.23438 14.6606 2.35529C15.0755 2.51508 15.3707 2.70701 15.6827 3.01736C15.9946 3.32771 16.1869 3.62225 16.3488 4.03735C16.4712 4.3493 16.6164 4.81855 16.6572 5.68427C16.7018 6.62046 16.7119 6.90116 16.7162 9.27068C16.7204 11.6402 16.7121 11.9216 16.6711 12.8571C16.6333 13.7226 16.4898 14.1928 16.3693 14.5063C16.2095 14.9209 16.0168 15.2165 15.7068 15.5283C15.3968 15.84 15.1016 16.0321 14.6872 16.1941C14.3747 16.316 13.9047 16.4616 13.0403 16.5028C12.1041 16.5469 11.8236 16.5561 9.45297 16.5612C7.08238 16.5664 6.80275 16.5568 5.86655 16.5163M13.1033 4.53892C13.1037 4.74963 13.1665 4.95549 13.2838 5.13049C13.4012 5.30549 13.5678 5.44175 13.7626 5.52204C13.9574 5.60233 14.1717 5.62305 14.3783 5.58157C14.5849 5.54009 14.7745 5.43829 14.9232 5.28902C15.0719 5.13976 15.173 4.94974 15.2138 4.74301C15.2545 4.53627 15.233 4.32211 15.152 4.1276C15.071 3.93308 14.9341 3.76696 14.7587 3.65024C14.5832 3.53353 14.3772 3.47145 14.1664 3.47187C13.884 3.47244 13.6133 3.58516 13.4139 3.78526C13.2146 3.98536 13.1028 4.25645 13.1033 4.53892ZM4.88117 9.29235C4.88615 11.8099 6.93076 13.8462 9.44782 13.8414C11.9649 13.8366 14.0026 11.7922 13.9978 9.27459C13.993 6.757 11.9478 4.72019 9.43042 4.72517C6.913 4.73014 4.87638 6.77511 4.88117 9.29235ZM6.48015 9.28915C6.47899 8.70389 6.65141 8.13142 6.9756 7.64415C7.29979 7.15688 7.7612 6.77668 8.30147 6.55164C8.84174 6.3266 9.4366 6.26682 10.0108 6.37987C10.5851 6.49291 11.1129 6.7737 11.5276 7.18672C11.9422 7.59975 12.2251 8.12646 12.3404 8.70025C12.4557 9.27404 12.3983 9.86914 12.1754 10.4103C11.9525 10.9515 11.5742 11.4144 11.0882 11.7405C10.6022 12.0666 10.0304 12.2413 9.44516 12.2424C9.05654 12.2433 8.67157 12.1675 8.31224 12.0195C7.9529 11.8715 7.62624 11.6542 7.3509 11.38C7.07556 11.1057 6.85695 10.7799 6.70755 10.4212C6.55814 10.0624 6.48087 9.67776 6.48015 9.28915Z",
                  fill: "white",
                }),
              }),
              (0, r.jsx)("defs", {
                children: (0, r.jsx)("clipPath", {
                  id: "clip0_10389_4544",
                  children: (0, r.jsx)("rect", {
                    width: "17.7545",
                    height: "17.7545",
                    fill: "white",
                    transform: "translate(0.562012 0.408203)",
                  }),
                }),
              }),
            ],
          });
        },
        n = (e) => {
          let { ...t } = e;
          return (0, r.jsxs)("svg", {
            ...t,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsx)("path", {
                d: "M12.6914 15.8729H15.9973L15.9987 10.09C15.9987 7.2511 15.3809 5.06889 12.0303 5.06889C11.4016 5.04579 10.7783 5.19195 10.2269 5.49181C9.67552 5.79167 9.21657 6.234 8.89896 6.7717H8.85453V5.3311H5.68089V15.8725H8.98678V10.6577C8.98678 9.28261 9.25022 7.95077 10.972 7.95077C12.6694 7.95077 12.6914 9.52435 12.6914 10.7467V15.8729Z",
                fill: "white",
              }),
              (0, r.jsx)("path", {
                d: "M0.88487 3.57022C1.20039 3.77889 1.57133 3.89023 1.95077 3.89016C2.2027 3.89011 2.45215 3.84093 2.68489 3.74543C2.91763 3.64993 3.12911 3.50997 3.30722 3.33355C3.48533 3.15713 3.62659 2.9477 3.72296 2.71722C3.81933 2.48674 3.86891 2.23972 3.86887 1.99027C3.8688 1.61458 3.75621 1.24734 3.54535 0.934996C3.3345 0.622655 3.03483 0.379239 2.68426 0.235529C2.33368 0.0918195 1.94795 0.0542705 1.57582 0.127631C1.20369 0.200992 0.861893 0.381967 0.593642 0.647671C0.325392 0.913375 0.142733 1.25187 0.068776 1.62036C-0.00518065 1.98885 0.0328895 2.37078 0.178155 2.71785C0.32342 3.06492 0.569347 3.36155 0.88487 3.57022Z",
                fill: "white",
              }),
              (0, r.jsx)("path", {
                d: "M0.294385 15.8729H3.6037V5.3311H0.294385V15.8729Z",
                fill: "white",
              }),
            ],
          });
        },
        i = (e) => {
          let { ...t } = e;
          return (0, r.jsx)("svg", {
            ...t,
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              d: "M12.8503 3.36484C11.7258 2.63731 11.0444 1.39914 11.0444 0.067627H8.19152L8.18598 11.3979C8.13613 12.7074 7.02267 13.7314 5.70147 13.6793C4.38028 13.6299 3.34714 12.5262 3.39977 11.2167C3.44963 9.94005 4.50769 8.93249 5.79565 8.93249C6.03662 8.93249 6.27482 8.97093 6.50195 9.04231V6.15416C6.26651 6.12121 6.03108 6.10474 5.79565 6.10199C2.90121 6.10199 0.546875 8.43557 0.546875 11.3045C0.552415 14.1762 2.89844 16.5043 5.79842 16.507C8.69286 16.507 11.0472 14.1734 11.0472 11.3045V5.56115C12.2022 6.38477 13.5899 6.82952 15.0135 6.82678V3.99903C14.2435 4.00177 13.4929 3.77939 12.8503 3.36484Z",
              fill: "white",
            }),
          });
        },
        c = (e) => {
          let { ...t } = e;
          return (0, r.jsxs)("svg", {
            ...t,
            viewBox: "0 0 18 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsx)("g", {
                clipPath: "url(#clip0_10389_4553)",
                children: (0, r.jsx)("path", {
                  d: "M13.7205 0.723633H16.2293L10.7495 7.05517L17.2197 15.6409H12.136L8.1747 10.4364L3.6192 15.6409H1.11038L6.98631 8.87838L0.780273 0.723633H5.99599L9.59417 5.49715L13.7205 0.723633ZM12.8292 14.116H14.2157L5.23674 2.14906H3.71824L12.8292 14.116Z",
                  fill: "white",
                }),
              }),
              (0, r.jsx)("defs", {
                children: (0, r.jsx)("clipPath", {
                  id: "clip0_10389_4553",
                  children: (0, r.jsx)("rect", {
                    width: "16.4394",
                    height: "14.9172",
                    fill: "white",
                    transform: "translate(0.780273 0.7229)",
                  }),
                }),
              }),
            ],
          });
        },
        o = (e) => {
          let { ...t } = e;
          return (0, r.jsxs)("svg", {
            ...t,
            viewBox: "0 0 20 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, r.jsxs)("g", {
                clipPath: "url(#clip0_10389_4547)",
                children: [
                  (0, r.jsx)("path", {
                    d: "M18.9587 2.93772C18.747 2.14308 18.1232 1.51734 17.3309 1.30498C15.8951 0.919023 10.1375 0.919022 10.1375 0.919022C10.1375 0.919022 4.37983 0.919023 2.94396 1.30498C2.15179 1.51734 1.52786 2.14308 1.31614 2.93772C0.931396 4.37793 0.931396 7.38285 0.931396 7.38285C0.931396 7.38285 0.931396 10.3877 1.31614 11.8281C1.52786 12.6226 2.15179 13.2484 2.94396 13.4608C4.37983 13.8467 10.1375 13.8467 10.1375 13.8467C10.1375 13.8467 15.8951 13.8467 17.3309 13.4608C18.1232 13.2484 18.747 12.6226 18.9587 11.8281C19.3435 10.3877 19.3435 7.38285 19.3435 7.38285C19.3435 7.38285 19.3435 4.37793 18.9587 2.93772Z",
                    fill: "white",
                  }),
                  (0, r.jsx)("path", {
                    d: "M7.34766 11.1389L13.9732 7.38284L7.34766 3.62641V11.1389Z",
                    fill: "black",
                  }),
                ],
              }),
              (0, r.jsx)("defs", {
                children: (0, r.jsx)("clipPath", {
                  id: "clip0_10389_4547",
                  children: (0, r.jsx)("rect", {
                    width: "18.4121",
                    height: "12.9277",
                    fill: "white",
                    transform: "translate(0.931396 0.916016)",
                  }),
                }),
              }),
            ],
          });
        },
        d = (e) => {
          let { data: t } = e;
          return (0, r.jsxs)("div", {
            className: "flex gap-[clamp(1.2rem,1.7vmax,1.7vw)]",
            children: [
            ],
          });
        };
    },
    59435: function (e, t, a) {
      "use strict";
      a.d(t, {
        u: function () {
          return s;
        },
      });
      var r = a(54638),
        l = a(79362);
      let s = () => {
        let e = (0, l.$)("[data-news-caroussel-text]"),
          t = (0, l.$)("[data-news-caroussel-header]"),
          a = [
            (0, l.$)("[data-news-caroussel-videos]"),
            e,
            (0, l.$)("[data-page-content]"),
          ];
        t && a.unshift(t),
          r.ZP.set(a, { opacity: 0, autoAlpha: 1 }),
          r.ZP.timeline().to(a, {
            delay: 0.3,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
          });
      };
    },
    11665: function (e, t, a) {
      "use strict";
      var r = a(20209),
        l = a(61237),
        s = a(46066),
        n = a(83112),
        i = a(32576);
      t.Z = (e) => {
        let {
            children: t,
            variant: a = "primary",
            size: c = "lg",
            triggerFactor: o,
            className: d,
            ...m
          } = e,
          u = (0, n.useRef)(null),
          h = (0, n.useRef)(null);
        return (0, r.jsx)(s.default, {
          ...m,
          "data-chars-effect-root": !0,
          ref: h,
          children: (0, r.jsx)(i.Z, {
            className: (0, l.Z)(
              "primary" === a && "bg-black text-white",
              "secondary" === a && "bg-white text-black",
              "outline" === a && "border-2 border-black/20 text-black/40",
              "rounded-full",
              "lg" === c && "px-[max(2rem,2.4vmax)] py-[max(.9rem,1vmax)]",
              "md" === c && "px-[max(1.5rem,1.7vmax)] py-[max(.7rem,.7vmax)]",
              d
            ),
            onEnter: () => {
              var e;
              null === (e = h.current) ||
                void 0 === e ||
                e.classList.add("active");
            },
            onLeave: () => {
              var e;
              null === (e = h.current) ||
                void 0 === e ||
                e.classList.remove("active");
            },
            triggerFactor: o,
            children: (0, r.jsx)("span", {
              "data-chars-effect": !0,
              ref: u,
              className: (0, l.Z)(
                "block translate-y-[-2%] whitespace-nowrap",
                "lg" === c && "text-l1",
                "md" === c && "text-link2 font-medium tracking-tight"
              ),
              children: t,
            }),
          }),
        });
      };
    },
    83284: function (e, t, a) {
      "use strict";
      var r = a(20209),
        l = a(61237),
        s = a(30674);
      t.Z = (e) => {
        let { className: t, color: a = "light", absolute: n, ...i } = e;
        return (0, r.jsx)("div", {
          className: (0, l.Z)("sticky top-0 z-30 col-start-1 col-end-13", t),
          ...i,
          children: (0, r.jsx)(s.Z, { color: a, absolute: n }),
        });
      };
    },
    30674: function (e, t, a) {
      "use strict";
      var r = a(20209),
        l = a(61237);
      t.Z = (e) => {
        let { color: t = "light", absolute: a = !0 } = e;
        return (0, r.jsx)("div", {
          className: (0, l.Z)(
            "text-l3 pointer-events-none grid w-full grid-cols-12 py-[clamp(1rem,1.2vmax,1.2vw)]",
            a && "absolute top-0",
            "dark" === t ? "bg-dark1" : "bg-light1"
          ),
          children: (0, r.jsxs)("div", {
            className:
              "col-start-2 col-end-12 flex justify-center border-b border-[transparent]",
            children: [
              (0, r.jsxs)("div", {
                className: "flex opacity-0",
                children: [
                  (0, r.jsx)("span", {
                    className:
                      "relative block w-[clamp(.9rem,1vmax,1vw)] justify-self-center",
                    style: { aspectRatio: "33/37" },
                  }),
                  (0, r.jsx)("span", {
                    className: "text-l2 font-medium normal-case opacity-0",
                    children: "Dream AI",
                  }),
                ],
              }),
              (0, r.jsx)("span", {
                className: "hamburger hamburger--spin white opacity-0",
                children: (0, r.jsx)("span", {
                  className: "hamburger-box",
                  children: (0, r.jsx)("span", {
                    className: "hamburger-inner",
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
    71721: function (e, t, a) {
      "use strict";
      var r = a(20209);
      t.Z = (e) => {
        let { fill: t = "black", ...a } = e;
        return (0, r.jsxs)("img", {
          src: "/favicon.png"
        });
      };
    },
    29257: function (e, t, a) {
      "use strict";
      var r = a(20209),
        l = a(46066),
        s = a(79362),
        n = a(71721);
      t.Z = (e) => {
        let { data: t } = e;
        return (0, r.jsx)("div", {
          id: "navigation-menu",
          "data-menu-open": !1,
          className:
            "fixed top-0 z-[100] block h-[100dvh] w-full overflow-y-scroll bg-light1 md:hidden",
          style: { opacity: 0, pointerEvents: "none" },
          children: (0, r.jsxs)("div", {
            className: "grid w-full grid-cols-12",
            children: [
              (0, r.jsx)("div", {
                className: "text-l3 relative col-start-2 col-end-12",
                children: (0, r.jsxs)("div", {
                  className:
                    "flex items-center justify-between border-b border-black/30 py-[clamp(1rem,1.2vmax,1.2vw)]",
                  children: [
                    (0, r.jsxs)(l.default, {
                      href: "/",
                      className: "flex gap-[clamp(.4rem,.5vmax,.5vw)]",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "relative block w-[clamp(.9rem,1vmax,1vw)] justify-self-center",
                          style: { aspectRatio: "33/37" },
                          children: (0, r.jsx)(n.Z, {
                            width: "100%",
                            height: "100%",
                            fill: "black",
                          }),
                        }),
                        (0, r.jsx)("span", {
                          className: "text-l2 font-medium normal-case",
                          "data-hover-effect": !0,
                          children: "Dream AI",
                        }),
                      ],
                    }),
                    (0, r.jsx)("button", {
                      className: "hamburger hamburger--spin black",
                      id: "menu-close-button",
                      onClick: (e) => {
                        let t = document.getElementById("navigation-menu");
                        t &&
                          (e.currentTarget.classList.toggle("is-active"),
                          (0, s.$$)("[data-menu-button]").forEach((e) =>
                            e.classList.toggle("is-active")
                          ),
                          (t.style.opacity = "0"),
                          (t.style.pointerEvents = "none"),
                          t.setAttribute("data-menu-open", "false"));
                      },
                      children: (0, r.jsx)("span", {
                        className: "hamburger-box",
                        children: (0, r.jsx)("span", {
                          className: "hamburger-inner",
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, r.jsx)("ul", {
                className:
                  "col-start-2 col-end-12 mt-[4vmax] flex flex-col items-start gap-[clamp(.7rem,1vmax,1vw)] text-link1",
                children: t.links.map((e) =>
                  (0, r.jsx)(
                    "li",
                    {
                      children: (0, r.jsx)(l.default, {
                        href: e.url,
                        target: e.blank ? "_blank" : "_self",
                        rel: e.blank ? "noreferrer nofollow" : void 0,
                        "data-hover-effect": !0,
                        children: e.label,
                      }),
                    },
                    e._key
                  )
                ),
              }),
            ],
          }),
        });
      };
    },
    38288: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return g;
        },
      });
      var r = a(20209),
        l = a(29864),
        s = a(61237),
        n = a(94678),
        i = a(83112),
        c = a(79362),
        o = a(7546),
        d = a(11665),
        m = a(83284),
        u = a(30674);
      let h = (e) => {
          let [t, a] = (0, i.useState)(!0),
            [r, l] = (0, i.useState)(!0),
            s = (0, i.useCallback)(() => {
              e && e.scrollPrev();
            }, [e]),
            n = (0, i.useCallback)(() => {
              e && e.scrollNext();
            }, [e]),
            c = (0, i.useCallback)((e) => {
              a(!e.canScrollPrev()), l(!e.canScrollNext());
            }, []);
          return (
            (0, i.useEffect)(() => {
              e && (c(e), e.on("reInit", c).on("select", c));
            }, [e, c]),
            {
              prevBtnDisabled: t,
              nextBtnDisabled: r,
              onPrevButtonClick: s,
              onNextButtonClick: n,
            }
          );
        },
        x = (e) => {
          let { disabled: t, children: a, ...l } = e;
          return (0, r.jsxs)("button", {
            className: (0, s.Z)(
              "block transition-opacity duration-300",
              t && "opacity-0"
            ),
            type: "button",
            ...l,
            disabled: t,
            children: [
              (0, r.jsx)("svg", {
                viewBox: "0 0 532 532",
                className: "w-[calc(var(--vw)*32)]",
                children: (0, r.jsx)("path", {
                  fill: "currentColor",
                  d: "M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z",
                }),
              }),
              a,
            ],
          });
        },
        v = (e) => {
          let { children: t, ...a } = e;
          return (0, r.jsxs)("button", {
            className: "block transition-opacity duration-300",
            type: "button",
            ...a,
            children: [
              (0, r.jsx)("svg", {
                viewBox: "0 0 532 532",
                className: "w-[calc(var(--vw)*32)]",
                children: (0, r.jsx)("path", {
                  fill: "currentColor",
                  d: "M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z",
                }),
              }),
              t,
            ],
          });
        },
        f = (e) => {
          let [t, a] = (0, i.useState)(0),
            [r, l] = (0, i.useState)([]),
            s = (0, i.useCallback)(
              (t) => {
                e && e.scrollTo(t);
              },
              [e]
            ),
            n = (0, i.useCallback)((e) => {
              l(e.scrollSnapList());
            }, []),
            c = (0, i.useCallback)((e) => {
              a(e.selectedScrollSnap());
            }, []);
          return (
            (0, i.useEffect)(() => {
              e &&
                (n(e), c(e), e.on("reInit", n).on("reInit", c).on("select", c));
            }, [e, n, c]),
            { selectedIndex: t, scrollSnaps: r, onDotButtonClick: s }
          );
        };
      var p = (e) => {
          let { slides: t, device: a, headerData: p } = e,
            [g, b] = (0, n.Z)({ containScroll: !1, loop: !0 }),
            j = i.useRef(null),
            w = i.useRef(0),
            [y, C] = (0, i.useState)(!1),
            [N, k] = (0, i.useState)(0),
            [Z, L] = (0, i.useState)(0),
            M = i.useRef(null);
          (0, i.useEffect)(() => {
            if (!j.current) return;
            let e = (0, c.$$)("video", j.current),
              t = 0,
              a = () => {
                ++t === e.length && C(!0);
              };
            return (
              e.forEach((e) => {
                let t = ["loadedmetadata", "loadeddata", "canplay"],
                  r = () => {
                    e.readyState >= 2 &&
                      (a(), t.forEach((t) => e.removeEventListener(t, r)));
                  };
                e.readyState >= 2
                  ? a()
                  : (t.forEach((t) => e.addEventListener(t, r)), e.load());
              }),
              () => {
                e.forEach((e) => {
                  ["loadedmetadata", "loadeddata", "canplay"].forEach((t) =>
                    e.removeEventListener(t, () => {})
                  );
                });
              }
            );
          }, []);
          let { selectedIndex: _, scrollSnaps: E, onDotButtonClick: T } = f(b),
            {
              prevBtnDisabled: V,
              nextBtnDisabled: H,
              onPrevButtonClick: I,
              onNextButtonClick: A,
            } = h(b);
          return (
            (0, i.useLayoutEffect)(() => {
              if (!j.current || !b || !y) return;
              k(w.current);
              let e = (0, c.$$)("video", j.current),
                t = e[_];
              if (
                (e.forEach((e, t) => {
                  t !== _ && (e.pause(), (e.currentTime = 0));
                }),
                t)
              ) {
                t.play();
                let e = !1,
                  a = setInterval(() => {
                    let a = (t.currentTime / t.duration) * 100;
                    L(a),
                      (w.current = a),
                      a >= 100 && !e && ((e = !0), null == b || b.scrollNext());
                  }, 30);
                return () => {
                  clearInterval(a), t.pause();
                };
              }
            }, [_, b, y]),
            (0, l.V)(() => {
              if ("desktop" !== a || !M.current) return;
              let e = !0,
                t = () => {
                  if (!j.current || !M.current || !e) return;
                  let a = j.current.getBoundingClientRect(),
                    r = a.height,
                    l = Math.max(a.top, 0),
                    s = Math.max(
                      100,
                      100 * Math.max((Math.min(a.bottom, r) - l) / r, 0)
                    );
                  (M.current.style.clipPath = "polygon(0% 0%, 100% 0%, 100% "
                    .concat(s, "%, 0% ")
                    .concat(s, "%)")),
                    requestAnimationFrame(t);
                };
              t();
              let r = new IntersectionObserver(
                (t) => {
                  e = t[0].isIntersecting;
                },
                { threshold: 0 }
              );
              return (
                r.observe(M.current),
                () => {
                  r.disconnect();
                }
              );
            }),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)("section", {
                  className:
                    "embla relative z-[60] col-start-1 col-end-13 w-full bg-dark1",
                  id: "news",
                  children: [
                    "desktop" === a &&
                      (0, r.jsxs)("div", {
                        className:
                          "pointer-events-none invisible absolute top-0 z-[60] w-full",
                        ref: M,
                        "data-news-caroussel-header": !0,
                        children: [
                          (0, r.jsx)(o.Z, {
                            device: a,
                            blend: !1,
                            data: p,
                            noBorder: !0,
                          }),
                          (0, r.jsx)("div", {
                            className: "news-caroussel-height",
                          }),
                        ],
                      }),
                    (0, r.jsxs)("div", {
                      className:
                        "embla__viewport invisible relative isolate z-10",
                      ref: g,
                      "data-news-caroussel-videos": !0,
                      children: [
                        (0, r.jsx)("div", {
                          className: "embla__container relative z-10",
                          ref: j,
                          children: t.map((e, t) =>
                            (0, r.jsx)(
                              "div",
                              {
                                className: "embla__slide",
                                children: (0, r.jsx)("div", {
                                  className:
                                    "news-caroussel-height relative w-full overflow-hidden bg-dark1",
                                  children: (0, r.jsx)("div", {
                                    className: "relative h-full w-full",
                                    children: (0, r.jsx)("video", {
                                      src: e.videoSrc,
                                      muted: !0,
                                      playsInline: !0,
                                      preload: "auto",
                                      className:
                                        "block h-full w-full object-cover object-center",
                                    }),
                                  }),
                                }),
                              },
                              t
                            )
                          ),
                        }),
                        (0, r.jsxs)("div", {
                          className:
                            "news-caroussel-height absolute left-0 right-0 top-0 z-20 flex w-full items-center justify-between px-[calc(var(--vw)*20)] text-white opacity-0 transition-opacity duration-300 hover:opacity-100 md:px-[calc(var(--vw)*30)]",
                          children: [
                            (0, r.jsx)(x, { onClick: I, disabled: V }),
                            (0, r.jsx)(v, { onClick: A, disabled: H }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "absolute bottom-0 z-50 flex w-full flex-col justify-end pb-[calc(var(--vw)*30)]",
                      children: (0, r.jsx)("div", {
                        className:
                          "flex justify-center gap-[calc(var(--vw)*10)]",
                        children: E.map((e, t) =>
                          (0, r.jsx)(
                            "button",
                            {
                              onClick: () => T(t),
                              className: (0, s.Z)(
                                "h-[calc(var(--vw)*5)] overflow-hidden rounded-full bg-white/40 transition-[width] duration-500",
                                t === _
                                  ? "w-[calc(var(--vw)*75)]"
                                  : "w-[calc(var(--vw)*20)]"
                              ),
                              style: { willChange: "width" },
                              children: (0, r.jsx)("div", {
                                className: (0, s.Z)(
                                  "h-full bg-white transition-opacity duration-500",
                                  t !== _ && "opacity-0"
                                ),
                                style: {
                                  width: "".concat(t === _ ? Z : N, "%"),
                                },
                              }),
                            },
                            t
                          )
                        ),
                      }),
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: (0, s.Z)(
                    "invisible relative z-20 col-start-1 col-end-13 grid grid-cols-12",
                    "mobile" === a && "mt-[calc(var(--vw)*30)]"
                  ),
                  "data-news-caroussel-text": !0,
                  children: [
                    "desktop" === a &&
                      (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, r.jsx)(m.Z, { absolute: !1 }),
                          (0, r.jsx)(u.Z, { absolute: !1 }),
                        ],
                      }),
                    (0, r.jsxs)("div", {
                      className:
                        "relative col-start-2 col-end-12 flex flex-col gap-[calc(var(--vw)*22)] lg:flex-row",
                      children: [
                        t.map((e, t) =>
                          (0, r.jsxs)(
                            "div",
                            {
                              className: (0, s.Z)(
                                "absolute left-0 top-0 flex h-full w-full flex-col gap-4 lg:flex-row",
                                t === _
                                  ? "opacity-100"
                                  : "pointer-events-none opacity-0",
                                "transition-opacity duration-500"
                              ),
                              children: [
                                (0, r.jsxs)("div", {
                                  className:
                                    "flex h-full flex-col gap-[calc(var(--vw)*10)] lg:w-[50%]",
                                  children: [
                                    (0, r.jsx)("h3", {
                                      "data-chars-effect": !0,
                                      className: "text-h6",
                                      children: e.title,
                                    }),
                                    (0, r.jsx)("p", {
                                      className:
                                        "text-c1 line-clamp-4 text-black/60",
                                      children: e.description,
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className:
                                    "flex flex-1 items-end gap-2 lg:flex-row-reverse lg:gap-[calc(var(--vw)*15)]",
                                  children: [
                                    (0, r.jsx)(d.Z, {
                                      variant: "primary",
                                      size: "md",
                                      href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                                      children: "Buy $DREAM",
                                    }),
                                    e.learnMoreLink &&
                                      (0, r.jsx)(d.Z, {
                                        variant: "secondary",
                                        size: "md",
                                        href: "https://www.dextools.io/app/en/ether/pair-explorer/0xcomingsoon",
                                        children: "Chart",
                                      }),
                                  ],
                                }),
                              ],
                            },
                            t
                          )
                        ),
                        (0, r.jsxs)("div", {
                          className: (0, s.Z)(
                            "pointer-events-none flex w-full flex-1 flex-col gap-[calc(var(--vw)*10)] opacity-0 lg:w-[50%]"
                          ),
                          children: [
                            (0, r.jsx)("h3", {
                              "data-chars-effect": !0,
                              className: "text-h6",
                              children: "_",
                            }),
                            (0, r.jsxs)("p", {
                              className: "text-c1 line-clamp-4 text-black/60",
                              children: [
                                ".",
                                (0, r.jsx)("br", {}),
                                ".",
                                (0, r.jsx)("br", {}),
                                ".",
                                (0, r.jsx)("br", {}),
                                "..",
                                (0, r.jsx)("br", {}),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className:
                            "pointer-events-none flex flex-1 items-end opacity-0 lg:justify-end",
                          children: (0, r.jsx)(d.Z, {
                            variant: "primary",
                            size: "md",
                            href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon",
                            target: "_blank",
                            rel: "noreferer",
                            children: "Buy $DREAM",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        g = (e) => {
          let { device: t, headerData: a } = e;
          return (0, r.jsx)(p, {
            device: t,
            slides: [
              {
                videoSrc:
                  "/static.cdn-luma.com/files/92837564b1e5305c/modify-video-launch.mp4",
                title: "Introducing Modify Video",
                description:
                  "Reimagine any video. Shoot it in post with director-grade control over style, character, and setting. Restyle expressive performances, swap entire worlds, or redesign the frame to your vision. Shoot once. Shape infinitely.",
                learnMoreLink: "/blog/news/introducing-modify-video",
              },
              {
                videoSrc:
                  "/static.cdn-luma.com/files/7466116c2acb62b3/1920%20Crop.mp4",
                title: "Introducing Camera Motion Concepts",
                description:
                  "Experience our first set of Concepts for Ray2 – Camera Motion Concepts – allowing reliable and composable control over camera motion in video generation",
              },
              {
                videoSrc:
                  "/static.cdn-luma.com/files/site/ray2/RAY 2 Official Premiere_smaller_cut.mp4",
                title: "Introducing Ray2",
                description:
                  "Ray2 is a large–scale video generative model capable of creating realistic visuals with natural, coherent motion. It has strong understanding of text instructions and can take image and video as input",
              },
              {
                videoSrc:
                  "/static.cdn-luma.com/files/1ed98b33d66523e5/Ray2HighRes.mp4",
                title: "Introducing Ray2 Flash",
                description:
                  "Free users can now generate with Ray2’s Text-to-Video and Image-to-Video models at a third of the price and 3x faster. High-quality, efficient, and more accessible than ever",
              },
              {
                videoSrc:
                  "/static.cdn-luma.com/files/site/home/Image2Video_smaller_cut.mp4",
                title: "Image to Video for Ray2",
                description:
                  "Built on the vast scale and capabilities of Ray2, create visually stunning, high-quality results from any image in seconds",
              },
              {
                videoSrc:
                  "/static.cdn-luma.com/files/1ed98b33d66523e5/KeyframeHighres.mp4",
                title: "Keyframe, extend and loop for Ray2",
                description:
                  "Create your visual story with precise frame-by-frame control, seamless transitions, spatial exploration and long-form video durations using Ray 2 Text-to-Video and Image-to-Video models in Dream Haven",
              },
            ],
            headerData: a,
          });
        };
    },
    22128: function (e, t, a) {
      "use strict";
      var r = a(83112),
        l = a(79362);
      t.Z = () => {
        let e = (0, r.useRef)(null),
          t = (0, r.useRef)(new Set());
        (0, r.useEffect)(() => {
          let a = (0, l.$$)("video[data-observed-video]").map(
            (e, t) => (
              (e.dataset.videoid = t.toString()),
              { id: t, src: e.getAttribute("data-src") || "" }
            )
          );
          return (
            (e.current = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  let r = e.target,
                    l = parseInt(r.dataset.videoid || "0");
                  (r.style.transition = "opacity 0.5s"),
                    e.isIntersecting
                      ? (t.current.add(l),
                        r.src || (r.src = a[l].src),
                        r
                          .play()
                          .catch((e) => {
                            console.log("Autoplay prevented for video:", l, e);
                          })
                          .then(() => {
                            r.style.opacity = "1";
                          }))
                      : (t.current.delete(l),
                        (r.style.opacity = "0"),
                        r.pause(),
                        (r.currentTime = 0),
                        r.removeAttribute("src"),
                        r.load());
                });
              },
              { root: null, rootMargin: "100px 0px", threshold: 0 }
            )),
            (0, l.$$)("video[data-observed-video]").forEach((t) => {
              if (t) {
                var a;
                null === (a = e.current) || void 0 === a || a.observe(t);
              }
            }),
            () => {
              var t;
              null === (t = e.current) || void 0 === t || t.disconnect();
            }
          );
        }, []);
      };
    },
    2569: function (e, t, a) {
      var r = a(15448).Symbol;
      e.exports = r;
    },
    25810: function (e, t, a) {
      var r = a(2569),
        l = a(33864),
        s = a(94140),
        n = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : n && n in Object(e)
          ? l(e)
          : s(e);
      };
    },
    42032: function (e, t, a) {
      var r = a(387),
        l = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, r(e) + 1).replace(l, "") : e;
      };
    },
    78185: function (e, t, a) {
      var r = "object" == typeof a.g && a.g && a.g.Object === Object && a.g;
      e.exports = r;
    },
    33864: function (e, t, a) {
      var r = a(2569),
        l = Object.prototype,
        s = l.hasOwnProperty,
        n = l.toString,
        i = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        var t = s.call(e, i),
          a = e[i];
        try {
          e[i] = void 0;
          var r = !0;
        } catch (e) {}
        var l = n.call(e);
        return r && (t ? (e[i] = a) : delete e[i]), l;
      };
    },
    94140: function (e) {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    15448: function (e, t, a) {
      var r = a(78185),
        l = "object" == typeof self && self && self.Object === Object && self,
        s = r || l || Function("return this")();
      e.exports = s;
    },
    387: function (e) {
      var t = /\s/;
      e.exports = function (e) {
        for (var a = e.length; a-- && t.test(e.charAt(a)); );
        return a;
      };
    },
    66117: function (e, t, a) {
      var r = a(21931),
        l = a(61363),
        s = a(86087),
        n = Math.max,
        i = Math.min;
      e.exports = function (e, t, a) {
        var c,
          o,
          d,
          m,
          u,
          h,
          x = 0,
          v = !1,
          f = !1,
          p = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function g(t) {
          var a = c,
            r = o;
          return (c = o = void 0), (x = t), (m = e.apply(r, a));
        }
        function b(e) {
          var a = e - h,
            r = e - x;
          return void 0 === h || a >= t || a < 0 || (f && r >= d);
        }
        function j() {
          var e,
            a,
            r,
            s = l();
          if (b(s)) return w(s);
          u = setTimeout(
            j,
            ((e = s - h), (a = s - x), (r = t - e), f ? i(r, d - a) : r)
          );
        }
        function w(e) {
          return ((u = void 0), p && c) ? g(e) : ((c = o = void 0), m);
        }
        function y() {
          var e,
            a = l(),
            r = b(a);
          if (((c = arguments), (o = this), (h = a), r)) {
            if (void 0 === u)
              return (x = e = h), (u = setTimeout(j, t)), v ? g(e) : m;
            if (f) return clearTimeout(u), (u = setTimeout(j, t)), g(h);
          }
          return void 0 === u && (u = setTimeout(j, t)), m;
        }
        return (
          (t = s(t) || 0),
          r(a) &&
            ((v = !!a.leading),
            (d = (f = "maxWait" in a) ? n(s(a.maxWait) || 0, t) : d),
            (p = "trailing" in a ? !!a.trailing : p)),
          (y.cancel = function () {
            void 0 !== u && clearTimeout(u), (x = 0), (c = h = o = u = void 0);
          }),
          (y.flush = function () {
            return void 0 === u ? m : w(l());
          }),
          y
        );
      };
    },
    21931: function (e) {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    89289: function (e) {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    32199: function (e, t, a) {
      var r = a(25810),
        l = a(89289);
      e.exports = function (e) {
        return "symbol" == typeof e || (l(e) && "[object Symbol]" == r(e));
      };
    },
    61363: function (e, t, a) {
      var r = a(15448);
      e.exports = function () {
        return r.Date.now();
      };
    },
    10980: function (e, t, a) {
      var r = a(66117),
        l = a(21931);
      e.exports = function (e, t, a) {
        var s = !0,
          n = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        return (
          l(a) &&
            ((s = "leading" in a ? !!a.leading : s),
            (n = "trailing" in a ? !!a.trailing : n)),
          r(e, t, { leading: s, maxWait: t, trailing: n })
        );
      };
    },
    86087: function (e, t, a) {
      var r = a(42032),
        l = a(21931),
        s = a(32199),
        n = 0 / 0,
        i = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        o = /^0o[0-7]+$/i,
        d = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (s(e)) return n;
        if (l(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = l(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var a = c.test(e);
        return a || o.test(e) ? d(e.slice(2), a ? 2 : 8) : i.test(e) ? n : +e;
      };
    },
    46066: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return l.a;
        },
      });
      var r = a(86746),
        l = a.n(r);
    },
  },
  function (e) {
    e.O(
      0,
      [6364, 3414, 6746, 4137, 2573, 7269, 3093, 741, 1103, 8296, 1124, 1744],
      function () {
        return e((e.s = 64660));
      }
    ),
      (_N_E = e.O());
  },
]);
