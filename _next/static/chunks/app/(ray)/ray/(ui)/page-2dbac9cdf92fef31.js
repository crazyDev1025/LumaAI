(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [353],
  {
    99422: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 96621));
    },
    95211: function (e, t) {
      "use strict";
      t.Z = {
        landing: "/dream-machine",
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
    25876: function (e, t, a) {
      "use strict";
      var r = a(95211);
      let s = {
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
      t.Z = s;
    },
    79362: function (e, t, a) {
      "use strict";
      a.d(t, {
        $: function () {
          return i;
        },
        $$: function () {
          return c;
        },
        E0: function () {
          return r;
        },
        Fv: function () {
          return n;
        },
        Ys: function () {
          return s;
        },
      });
      let r = (e) =>
          (Math.max(window.innerHeight, window.innerWidth) * e) / 100,
        s = function () {
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
            s = parseFloat(getComputedStyle(document.documentElement).fontSize),
            i = window.innerWidth;
          return Math.max(e * s, Math.min(r(t), (a * i) / 100));
        };
      function i(e, t) {
        return (t || document).querySelector(e);
      }
      function c(e, t) {
        return [
          ...(t
            ? "string" == typeof t
              ? document.querySelector(t)
              : t
            : document
          ).querySelectorAll(e),
        ];
      }
      let n = (e, t, a) => Math.max(0, Math.min(1, (e - t) / (a - t)));
    },
    96621: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return h;
          },
        });
      var r = a(20209),
        s = a(44800),
        i = a(46066),
        c = a(83112),
        n = a(95211),
        o = a(79362),
        l = a(25876),
        d = () =>
          (0, r.jsx)("header", {
            className:
              "fixed left-0 right-0 top-0 z-[60] bg-gradient-to-b from-black/80 to-transparent",
            children: (0, r.jsxs)("div", {
              className:
                "mx-auto flex h-[72px] max-w-[2000px] items-center justify-between px-5 md:px-10",
              children: [
                (0, r.jsxs)(i.default, {
                  href: "/",
                  className: "flex items-center gap-5",
                  children: [
                    (0, r.jsx)("span", {
                      className: "relative block h-8 w-7 md:h-6 md:w-5",
                      children: (0, r.jsx)(s.default, {
                        src: "https://static.cdn-luma.com/files/dm-landing/luma.svg",
                        alt: "Dream Ray2 Video Model",
                        fill: !0,
                      }),
                    }),
                    (0, r.jsx)("span", {
                      className:
                        "hidden font-graphikMedium text-base font-medium text-white md:inline",
                      children: "Dream Ray2 Video Model",
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-0 md:gap-6",
                  children: [
                    (0, r.jsx)(i.default, {
                      href: l.Z.enterprise,
                      className:
                        "rounded-full px-4 py-2 font-medium text-white transition-colors hover:text-white/80",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "Explore Enterprise",
                    }),
                    (0, r.jsx)(i.default, {
                      href: "https://dream-machine.lumalabs.ai/",
                      target: "_blank",
                      rel: "noreferrer",
                      className:
                        "rounded-full bg-white px-4 py-2 font-medium text-dark1 transition-colors hover:bg-white/90",
                      children: "Try Now",
                    }),
                  ],
                }),
              ],
            }),
          }),
        m = (e) => {
          let { title: t, badge: a, videos: i } = e,
            [n, o] = (0, c.useState)(null),
            [l, d] = (0, c.useState)(!1),
            m = c.useRef(),
            h = c.useRef(),
            u = async (e, t) => {
              try {
                await navigator.clipboard.writeText(e),
                  m.current && clearTimeout(m.current),
                  h.current && clearTimeout(h.current),
                  d(!1),
                  o(t),
                  (m.current = setTimeout(() => {
                    d(!0),
                      (h.current = setTimeout(() => {
                        o(null);
                      }, 500));
                  }, 2e3));
              } catch (e) {
                console.error("Failed to copy text:", e);
              }
            };
          return (
            (0, c.useEffect)(
              () => () => {
                m.current && clearTimeout(m.current),
                  h.current && clearTimeout(h.current);
              },
              []
            ),
            (0, r.jsxs)("div", {
              className: "relative border-b border-white/30",
              children: [
                (0, r.jsxs)("div", {
                  "data-section-title": !0,
                  className:
                    "sticky top-0 z-50 flex gap-2 bg-black pb-6 pt-16 md:top-[-24px] md:pb-10 md:pt-24",
                  children: [
                    (0, r.jsx)("h3", {
                      className: "text-h2 text-white",
                      children: t,
                    }),
                    a &&
                      (0, r.jsx)("p", {
                        className:
                          "text-md h-fit rounded-full bg-gray-100 px-2 pb-1 pt-0.5 font-bold lowercase leading-5",
                        children: a,
                      }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "grid grid-cols-1 gap-x-5 gap-y-10 pb-10 lg:grid-cols-2",
                  children: i.map((e, t) =>
                    (0, r.jsxs)(
                      "div",
                      {
                        className:
                          "group grid cursor-pointer grid-cols-[auto,1fr] grid-rows-[1fr,auto] items-center gap-2",
                        onClick: () => u(e.desc, t),
                        children: [
                          e.thumbnailSrc &&
                            (0, r.jsx)("span", {
                              className:
                                "peer relative col-start-1 row-start-2 mr-2 mt-[2px] h-9 w-16 shrink-0 origin-bottom-left transition-transform duration-150 ease-in-out [@media(any-hover:hover){&:hover}]:z-10 [@media(any-hover:hover){&:hover}]:translate-x-2 [@media(any-hover:hover){&:hover}]:scale-[7] [@media(any-hover:hover){&:hover}]:shadow-lg",
                              children: (0, r.jsx)(s.default, {
                                src: e.thumbnailSrc,
                                alt: "",
                                fill: !0,
                                className:
                                  "h-full w-full rounded-md object-cover",
                              }),
                            }),
                          (0, r.jsx)("div", {
                            className:
                              "text-body col-start-2 row-start-2 min-w-0 flex-1",
                            children: (0, r.jsxs)("p", {
                              className: "truncate",
                              children: [
                                e.creator &&
                                  (0, r.jsx)("a", {
                                    href: e.creatorLink,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "text-white transition-colors hover:text-white/80",
                                    children: e.creator,
                                  }),
                                e.creator && " | ",
                                (0, r.jsx)("span", {
                                  className: "lowercase text-white/30",
                                  children: e.desc,
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              "ease relative col-span-2 col-start-1 row-start-1 w-full flex-1 bg-white/10 transition-opacity duration-150 peer-hover:opacity-40",
                            title: "Click to copy prompt",
                            children: [
                              (0, r.jsx)(
                                "video",
                                {
                                  muted: !0,
                                  playsInline: !0,
                                  loop: !0,
                                  preload: "none",
                                  "data-src": e.src,
                                  "data-observed-video": !0,
                                  className: "h-full w-full object-cover",
                                },
                                t
                              ),
                              n === t &&
                                (0, r.jsx)("div", {
                                  className:
                                    "absolute bottom-2 left-2 rounded bg-black px-2 py-1 text-sm text-white backdrop-blur-md ".concat(
                                      l
                                        ? "duration-500 animate-out fade-out slide-out-to-bottom-2"
                                        : "duration-300 animate-in fade-in slide-in-from-bottom-2"
                                    ),
                                  children: "Prompt copied",
                                }),
                            ],
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              ],
            })
          );
        },
        h = () => {
          let e = (0, c.useRef)(null),
            t = (0, c.useRef)(new Set());
          return (
            (0, c.useEffect)(() => {
              let a = (0, o.$$)("video[data-observed-video]").map(
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
                        s = parseInt(r.dataset.videoid || "0");
                      e.isIntersecting
                        ? (t.current.add(s),
                          r.src || (r.src = a[s].src),
                          r.play().catch((e) => {
                            console.log("Autoplay prevented for video:", s, e);
                          }))
                        : (t.current.delete(s),
                          r.pause(),
                          (r.currentTime = 0),
                          r.removeAttribute("src"),
                          r.load());
                    });
                  },
                  { root: null, rootMargin: "50px 0px", threshold: 0.1 }
                )),
                (0, o.$$)("video[data-observed-video]").forEach((t) => {
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
            }, []),
            (0, r.jsx)(r.Fragment, {
              children: (0, r.jsxs)("div", {
                className: "w-screen bg-black",
                children: [
                  (0, r.jsx)(d, {}),
                  (0, r.jsxs)("div", {
                    className: "relative z-0 pt-[72px]",
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "pointer-events-none absolute left-0 top-0 h-full w-full",
                        children: [
                          (0, r.jsx)("iframe", {
                            className: "h-full w-full object-center",
                            src: "https://unicorn.studio/embed/ttsO3zzoY4J1GxmZp3I4",
                            width: "600px",
                            height: "320px",
                            loading: "lazy",
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "pointer-events-none absolute bottom-0 h-[50%] w-full",
                            style: {
                              background:
                                "linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)",
                            },
                          }),
                        ],
                      }),
                      (0, r.jsx)("h1", {
                        className:
                          "pointer-events-none relative z-10 py-[5vw] text-center font-graphikWide text-[29vw] font-bold leading-[100%] text-white",
                        children: "RAY2",
                      }),
                      (0, r.jsxs)("p", {
                        className:
                          "relative z-10 px-5 text-2xl leading-[130%] tracking-tight text-white/60 md:px-10 md:text-4xl md:leading-[115.85%] lg:text-[2.75rem]",
                        children: [
                          "Ray2 is a large–scale video generative model capable of creating",
                          " ",
                          (0, r.jsx)("span", {
                            className: "text-white",
                            children: "realistic visuals",
                          }),
                          " with",
                          " ",
                          (0, r.jsx)("span", {
                            className: "text-white",
                            children: "natural, coherent motion",
                          }),
                          ". It has strong understanding of text instructions and can take image and video as input.",
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "relative z-50 mx-auto w-screen max-w-screen-2xl px-5 pb-24 md:px-10",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "mt-14 md:mt-16",
                        children: [
                          (0, r.jsx)("div", {
                            style: { aspectRatio: "1920/1080" },
                            className: "relative w-full bg-white/10",
                            children: (0, r.jsx)("video", {
                              "data-src":
                                "https://static.cdn-luma.com/files/site/ray2/RAY 2 Official Premiere_smaller_cut.mp4",
                              muted: !0,
                              playsInline: !0,
                              loop: !0,
                              preload: "none",
                              "data-observed-video": !0,
                              className: "h-full w-full object-cover",
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className:
                              "grid grid-cols-1 gap-6 border-b border-white/30 py-16 lg:gap-24",
                            children: (0, r.jsxs)("div", {
                              className: "flex flex-col gap-3",
                              children: [
                                (0, r.jsx)("h4", {
                                  className:
                                    "text-base font-semibold leading-[128%] tracking-tight text-white lg:text-2xl",
                                  children: "New Frontier in Video Generation",
                                }),
                                (0, r.jsx)("p", {
                                  className: "text-body text-white/60",
                                  children:
                                    "Ray2 exhibits advanced capabilities as a result of being trained on Luma’s new multi-modal architecture scaled to 10x compute of Ray1. Ray2 marks the beginning of a new generation of video models capable of producing fast coherent motion, ultra-realistic details, and logical event sequences. This increases the success rate of usable generations and makes videos generated by Ray2 substantially more production-ready.",
                                }),
                                (0, r.jsxs)("p", {
                                  className: "text-body text-white/60",
                                  children: [
                                    "Text-to-video generation is available in Ray2 now, with image-to-video, video-to-video and editing capabilities coming soon.",
                                    " ",
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, r.jsx)(m, {
                            title: "Image to Video",
                            badge: "New",
                            videos: [
                              {
                                src: "https://static.cdn-luma.com/files/25b8182464b85037/i2v_01.mp4",
                                desc: "Couple look at each other and kiss",
                                creator: "",
                                creatorLink: "",
                                thumbnailSrc:
                                  "https://static.cdn-luma.com/files/749518746e175dc5/i2v_01_first_frame.jpg",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/25b8182464b85037/i2v_02.mp4",
                                desc: "Astronaut in space",
                                creator: "",
                                creatorLink: "",
                                thumbnailSrc:
                                  "https://static.cdn-luma.com/files/749518746e175dc5/i2v_02_first_frame.jpg",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/25b8182464b85037/4_Memes_smaller.mp4",
                                desc: "Dog stare at the camera",
                                creator: "",
                                creatorLink: "",
                                thumbnailSrc:
                                  "https://static.cdn-luma.com/files/749518746e175dc5/i2v_04_first_frame.jpg",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/25b8182464b85037/i2v_05.mp4",
                                desc: "Putting on sun glasses",
                                creator: "",
                                creatorLink: "",
                                thumbnailSrc:
                                  "https://static.cdn-luma.com/files/749518746e175dc5/i2v_05_first_frame.jpg",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/25b8182464b85037/i2v_06.mp4",
                                desc: "Mindblown animation",
                                creator: "",
                                creatorLink: "",
                                thumbnailSrc:
                                  "https://static.cdn-luma.com/files/749518746e175dc5/i2v_06_first_frame.jpg",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/25b8182464b85037/i2v_07.mp4",
                                desc: "Swirl",
                                creator: "",
                                creatorLink: "",
                                thumbnailSrc:
                                  "https://static.cdn-luma.com/files/749518746e175dc5/i2v_07_first_frame.jpg",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/25b8182464b85037/i2v_08.mp4",
                                desc: "Camera turn with beautiful lighting",
                                creator: "",
                                creatorLink: "",
                                thumbnailSrc:
                                  "https://static.cdn-luma.com/files/749518746e175dc5/i2v_08_first_frame.jpg",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/25b8182464b85037/i2v_09.mp4",
                                desc: "Subtle wind blowing through",
                                creator: "",
                                creatorLink: "",
                                thumbnailSrc:
                                  "https://static.cdn-luma.com/files/749518746e175dc5/i2v_09_first_frame.jpg",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/25b8182464b85037/i2v_10.mp4",
                                desc: "Kick flip",
                                creator: "",
                                creatorLink: "",
                                thumbnailSrc:
                                  "https://static.cdn-luma.com/files/749518746e175dc5/i2v_10_first_frame.jpg",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/25b8182464b85037/i2v_11.mp4",
                                desc: "Dragon breathing fire",
                                creator: "",
                                creatorLink: "",
                                thumbnailSrc:
                                  "https://static.cdn-luma.com/files/749518746e175dc5/i2v_11_first_frame.jpg",
                              },
                            ],
                          }),
                          (0, r.jsx)(m, {
                            title: "Natural Motion",
                            videos: [
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/motion_smaller.mp4",
                                desc: "Wide shot of a man in a fur coat running through the snow antarctic with many explosions around him",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/video0850480116469452788c390e46cd27bad.mp4",
                                desc: "An overhead shot follows a vintage car winding through autumn-painted mountain roads, its polished surface reflecting the fiery canopy above. Fallen leaves swirl in its wake while sunlight filters through branches, creating a dappled dance of light across the hood.",
                                creator: "Ashutosh Shrivastava",
                                creatorLink: "https://x.com/ai_for_success",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/c4a794eb-1a0e-47c0-8ba5-b3d5561a4728.mp4",
                                desc: "Fencing athletes fighting on the court",
                                creator: "Artur Ziguratt",
                                creatorLink: "https://x.com/ziguratt",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/video07c1165bfa75243b9ba8a42af4f41d062.mp4",
                                desc: "Gorilla surfing on a wave",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/horse.mp4",
                                desc: "A herd of wild horses galloping across a dusty desert plain under a blazing midday sun, their manes flying in the wind; filmed in a wide tracking shot with dynamic motion, warm natural lighting, and an epic.",
                                creator: "Guillermo Castellanos",
                                creatorLink: "https://x.com/guicastellanos1",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/de7d9084a9e412a9/Cosmic%20Whale.mp4",
                                desc: "a humpback whale swimming through space particles",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/de7d9084a9e412a9/Cloud%20Racer%20(2).mp4",
                                desc: "a sports car in the clouds in the sky",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/tank.mp4",
                                desc: "Panzerkampfwagen Tiger Ausf. E roars across a shallow river, its massive treads churning up water and mud in thick sprays. The camera captures the hulking machine from a low angle, emphasizing its sheer weight and power as it plunges forward, the water foaming around its armored hull. The crew remains unseen inside the tank, but the barrel of its 88mm gun stays fixed forward, cutting an imposing silhouette against the horizon. The sunlight glints off its steel plating, streaked with dirt and battle scars, as it surges up the opposite riverbank, the ground trembling under its weight.",
                                creator: "StevieMac03",
                                creatorLink: "https://x.com/StevieMac03",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/a3b59f4564d732dc/Avalanche%20(1).mp4",
                                desc: "Avalanche",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/a3b59f4564d732dc/255cb1c1-8d55-4f03-9c87-c8c5f387ae1a.mp4",
                                desc: "insane camera flythrough of a turtle in an aquarium",
                                creator: "",
                                creatorLink: "",
                              },
                            ],
                          }),
                          (0, r.jsx)(m, {
                            title: "Instruction Following",
                            videos: [
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/7ec08eaa-8ec0-42f6-9ef1-e16ebcc57159%20(1).mp4",
                                desc: "A snow leopard crouched on a rocky ledge, staring directly at camera, snowflakes falling around it.",
                                creator: "Ashutosh Shrivastava ",
                                creatorLink: "https://x.com/ai_for_success",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/a3b59f4564d732dc/036fe193-2f25-4fbd-a5fd-aeea5a794742.mp4",
                                desc: "Relaxed woman motor biker in a dark neutral background, natural look",
                                creator: "Artur Ziguratt",
                                creatorLink: "https://x.com/ziguratt",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/de7d9084a9e412a9/2_polar_bears_sun_bathing_on_a_floating_iceberg__they_both_wear_Hawaii_shirts_and_sun_glasses__one_h_89c024.mp4",
                                desc: "Two polar bears sun bathing on a floating iceberg, they both wear Hawaii shirts and sun glasses",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/de7d9084a9e412a9/A%20miniature%20baby%20cat%20is%20walking%20and%20exploring%20on%20the%20surface%20of%20a%20fingertip.mp4",
                                desc: "A miniature baby cat is walking and exploring on the surface of a fingertip",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/cc3d8d104e8053af/underwater%20sloth%20swimming%20sunny.mp4",
                                desc: "Underwater sloth swimming sunny",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/a3b59f4564d732dc/video0b961adad12a44089b6c46410ef2959b9.mp4",
                                desc: "Ship captain smokes a pipe, turns and looks at a looming storm in the distance",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: " https://static.cdn-luma.com/files/9e22abf17fdc9d0e/WhatsApp%20Video%202025-01-14%20at%2007.04.04.mp4",
                                desc: "A pair of hands skillfully slicing a perfectly cooked steak on a wooden cutting board, with faint steam rising from it",
                                creator: "Melanie Petschke",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/9e22abf17fdc9d0e/a_menagerie_of_animals_trapped_in_a_block_of_ice_a10ff0.mp4",
                                desc: "A menagerie of animals trapped in a block of ice",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/de7d9084a9e412a9/Clay%20Visions%20(1).mp4",
                                desc: "closeup of fingertips sculpting clay",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/9e22abf17fdc9d0e/59500176-ce3a-4b8c-bb57-d21e3a8510cb_video01207fa9de3f04cbdabb27f42986799ee.mp4",
                                desc: "cinematic shot of ballerina dancing on ice floe in icy ocean in arctic",
                                creator: "",
                                creatorLink: "",
                              },
                            ],
                          }),
                          (0, r.jsx)(m, {
                            title: "Physics and Simulation",
                            videos: [
                              {
                                src: "https://static.cdn-luma.com/files/cc3d8d104e8053af/Floating%20Water%20Orb%20(4).mp4",
                                desc: "a massive orb of water floating in a backlit forest",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/9e22abf17fdc9d0e/bca91fea-40ea-46a7-89a1-bf4e81ddc528.mp4",
                                desc: "A girl in a red velvet dress floating underwater",
                                creator: "Artur Ziguratt",
                                creatorLink: "https://x.com/ziguratt",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/9e22abf17fdc9d0e/an%20explosion%20camera%20shake.mp4",
                                desc: "An explosion with camera shake",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/cc3d8d104e8053af/Maple%20Pancakes%20(1).mp4",
                                desc: "maple syrup pouring onto pancakes",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/cc3d8d104e8053af/5f753534-b29a-4bf2-ad91-5dd3269a4c26_video0b75553ebd12d443bac59b71aab577b92.mp4",
                                desc: "a truck driving in the mexico jungle as it runs through puddles of water",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/527ece20ff5d4687/Hydration%20Moment.mp4",
                                desc: "drinking a bottle of water",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/9e22abf17fdc9d0e/d0a06639-ed5d-45a2-8704-aa954686e8b7.mp4",
                                desc: "A violinist performing on a rainy street at night, amber streetlights illuminating her and the violin, gentle rain falling around her and she is wet",
                                creator: "Ashutosh Shrivastava",
                                creatorLink: "https://x.com/ai_for_success",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/527ece20ff5d4687/Raindrop%20Elegance%20Dream%20Machine.mp4",
                                desc: "Raindrops in extreme slow motion",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/527ece20ff5d4687/cbeb7da2-dcb4-4698-bed2-4254190120a0_video05d0f460931644b9cbd90b232a69b1147%20(1).mp4",
                                desc: "Mukbang video of a man eating a sand castle",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/cc3d8d104e8053af/a_campfire_3a9b3d.mp4",
                                desc: "a campfire",
                                creator: "",
                                creatorLink: "",
                              },
                            ],
                          }),
                          (0, r.jsx)(m, {
                            title: "Photorealism",
                            videos: [
                              {
                                src: "https://static.cdn-luma.com/files/a3b59f4564d732dc/Seal%20Whiskers%20(4).mp4",
                                desc: "Seal Whiskers",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Artistic%20Brushwork.mp4",
                                desc: "a closeup of a paintbrush on a canvas",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Dewdrops%20on%20Spiderweb%20at%20Sunrise.mp4",
                                desc: "dewdrops glistening on a spiderweb at sunrise",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Clay%20Visions.mp4",
                                desc: "closeup of sculpting clay",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/A%20subway%20car%20arriving%20on%20an%20empty%20platform.mp4",
                                desc: "A subway car arriving on an empty platform",
                                creator: "Jerrod Lew",
                                creatorLink: "https://x.com/jerrod_lew",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/0e7731a8-e50a-446e-83bc-fbd4ecd63dba%20(1).mp4",
                                desc: "Close up of nail polish being applied",
                                creator: "fAIkout",
                                creatorLink: "https://x.com/fAIkout",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Polar%20Bear%20Swim.mp4",
                                desc: "a polar bear swimming underwater",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Balloon%20Flame%20from%20Ray2.mp4",
                                desc: "closeup of hot air balloon flame",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Arachnid%20Encounter.mp4",
                                desc: "a tarantula",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Sound%20Waves%20(1).mp4",
                                desc: "an ultrasound",
                                creator: "",
                                creatorLink: "",
                              },
                            ],
                          }),
                          (0, r.jsx)(m, {
                            title: "Cinematic Scenes",
                            videos: [
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Stormy%20Seas.mp4",
                                desc: "a pirate ship in a raging sea",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/18080c63-13b9-4944-8d9b-9cc78f17caee.mp4",
                                desc: "An artist with curly dark hair and a stained apron, holding a paintbrush and palette, intensely focused on a large. Behind him, shelves are filled with brushes, paints, and canvases, and soft light filters through a large window, illuminating dust particles in the air. Background shows dim. Camera captures a close-up on his focused expression, then pans to his hands mixing colors. Gentle, warm lighting gives the scene a nostalgic.",
                                creator: "Guillermo Castellanos ",
                                creatorLink: "https://x.com/guicastellanos1",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/warrior.mp4",
                                desc: "At sunrise, place the camera at ground level, looking up at a solitary warrior standing on a rugged cliff edge. Their silhouette is framed by a vivid orange sky streaked with dawn clouds. A gust of wind ruffles the warrior’s cloak and hair in slow motion, with dust and pebbles tumbling toward the camera lens. The sun’s rays flare behind the figure, creating a dramatic halo effect. As the scene lingers, subtle echoes of distant thunder roll across the horizon, suggesting a forthcoming storm.",
                                creator: "Guillermo Castellanos",
                                creatorLink: "https://x.com/guicastellanos1",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/explosion_camera_shake_185cff.mp4",
                                desc: "an explosion with camera shake",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/5e4d69166000b04b/8f6ce742-7479-4a69-9277-10a671194f31.mp4",
                                desc: "An African woman, fashion context, red hue backdrop",
                                creator: "Artur Ziguratt",
                                creatorLink: "https://x.com/ziguratt",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/5e4d69166000b04b/82b3a4db-8559-4680-b81d-0044e680e2c6.mp4",
                                desc: "a burning stern viking ship, with a Viking on the water, against background at sea",
                                creator: "Artur Ziguratt",
                                creatorLink: "https://x.com/ziguratt",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/fb40f7b5-62f0-47cd-80eb-ad2f87238e7f.mp4",
                                desc: "closeup on a man sitting in a dark car, 5 oclock shadow, blurry neon signs in the background, slight blur and chromatic aberration at the edges of the frame, lens flare",
                                creator: "Andy Orsow",
                                creatorLink: "https://x.com/andyorsow",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/5e4d69166000b04b/WhatsApp%20Video%202025-01-14%20at%2011.57.32.mp4",
                                desc: "A detective in a dark trench coat and hat, holding a lantern, walks carefully down a narrow, his eyes sharp and focused. Shadows stretch out in front of him as he examines the ground for clues. Background shows cobblestone streets, gas lamps, and looming, old brick buildings. Camera captures a close‑up of his face with the lantern casting dramatic shadows, then pulls back to reveal the alley. Dim, yellowish lighting from the gas lamps creates a suspenseful, mysterious atmosphere.",
                                creator: "Guillermo Castellanos ",
                                creatorLink: "https://x.com/guicastellanos1",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Underwater%20Metropolis.mp4",
                                desc: "an underwater city",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/The%20visuals%20capture%20a%201940s%20detective%20navigating%20a%20shadowy%20alley%20with%20dramatic%20lighting%20enhancing%20t.mp4",
                                desc: "a 1940s detective navigating a shadowy alley with dramatic lighting",
                                creator: "",
                                creatorLink: "",
                              },
                            ],
                          }),
                          (0, r.jsx)(m, {
                            title: "People and Expressions",
                            videos: [
                              {
                                src: "https://static.cdn-luma.com/files/e1663c7fa3d957dc/e9f684a1-ba83-422a-90fb-0cd202d6fef0.mp4",
                                desc: "A man plays saxophone",
                                creator: "Artur Ziguratt",
                                creatorLink: "https://x.com/ziguratt",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/e1663c7fa3d957dc/94ae7fa5-9ed9-42cd-9f5e-3d73137e7555.mp4",
                                desc: "Young guy with huge headphones scrolling through his phone, gen-Z like",
                                creator: "Artur Ziguratt",
                                creatorLink: "https://x.com/ziguratt",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/e1663c7fa3d957dc/40627caa-3f72-45c7-a743-fe5f4768d89c.mp4",
                                desc: "Two elegant older women sitting at an outdoor caf\xe9",
                                creator: "Artur Ziguratt",
                                creatorLink: "https://x.com/ziguratt",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/13ae3bc9-80b1-4009-88b1-d4c8235ebf4b.mp4",
                                desc: "In a dimly lit concert hall, a cellist sits at center stage, their posture perfect and their fingers gliding precisely over the strings with anatomical accuracy—tendons flexing naturally as they shift positions. Each bow stroke causes the horsehair to subtly fray, vibrating with every resonant note. The camera follows in slow motion as the bow sweeps downward, capturing a faint motion blur on the strings as they quiver from the tension.A soft beam of light illuminates floating dust particles around the cello, which bounce and swirl in response to the vibrations from the music. The audience remains still, yet a faint ripple of movement is seen in a nearby curtain reacting to the deep resonance.The camera shifts to an extreme closeup of the cello’s glossy surface, reflecting the soft glow of chandeliers overhead, distorted slightly by lens texture. A gentle anamorphic flare arcs across the frame as the light catches the polished wood. In the background, blurred silhouettes of the orchestra blend into a dreamy bokeh of warm golden hues as the final note hangs in the air, thick with cinematic reverence",
                                creator: "Aymiee",
                                creatorLink: "https://x.com/aymieelis",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/a3b59f4564d732dc/Cozy%20Knitting%20(2).mp4",
                                desc: "grandma knitting a sweater",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/kissfashion.mp4",
                                desc: "A model blowing a kiss into the camera. Pastel tones",
                                creator: "Melanie Petschke",
                                creatorLink:
                                  "https://www.instagram.com/mellis_ai_wonderland/",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/a_woman_filming_an_instagram_live_video_next_to_her_ring_light__2024_26d6e0.mp4",
                                desc: "A woman filming a live video next to her ring light",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/5e4d69166000b04b/343f5937-e63c-4e82-9836-98137b2db0b8%20(1).mp4",
                                desc: "A muscular male influencer working out in a bright modern gym",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/5e4d69166000b04b/Cinematic%20Closeup%20(1).mp4",
                                desc: "a cinematic character intimate closeup",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/flowerface.mp4",
                                desc: "Medium view, A minimal yet surreal woman infused with the mesmerizing allure of neon flower aesthetics, seamlessly blending organic and cybernetic elements into a visually striking composition. The imagery is centric and enveloped in a symphony of neon lights, glowing vividly against a backdrop of hyper-realistic detail. Captured in billion-gigapixel resolution, the frame exudes the grandeur of a cinematic still, inspired by the meticulous visual storytelling of Christopher Nolan, Matt Reeves, and Martin Scorsese. Shot through the lens of cinematic IMAX camera, the scene is brought to life with and the rich textures of Kodak Porta film. Saturated hues and Cinecolor grading create a vivid, dreamlike palette, while Super-Resolution technology enhances every minute detail. The lighting is masterfully natural, casting soft highlights and intricate shadows that enhance the dimensionality of the subject. The composition features an intricately shallow depth of field achieved with a tilt-shift lens, drawing focus to the subject while subtly blurring the surrounding elements. The result is a hyper-maximalist and breathtakingly intricate visual that melds futuristic cybernetic aesthetics with timeless cinematic elegance, delivering an immersive experience that feels both otherworldly and palpably lifelike.",
                                creator: "Guillermo Castellanos",
                                creatorLink: "https://x.com/guicastellanos1",
                              },
                            ],
                          }),
                          (0, r.jsx)(m, {
                            title: "Surrealism",
                            videos: [
                              {
                                src: "https://static.cdn-luma.com/files/a3b59f4564d732dc/The%20Singularity.mp4",
                                desc: "the singularity",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/a3b59f4564d732dc/Alien%20Closeup.mp4",
                                desc: "an intimate closeup of an alien",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Notion%20Video.mp4",
                                desc: "A mesmerizing, award-worthy scene of a man walking through a misted, dreamlike, otherworldly, illusory} forest, the camera darting around him in swift, deliberate movements. On his outstretched hand perches a surreal, glowing creature—a bird-like being with translucent wings that ripple like liquid glass and eyes that shine like miniature galaxies. The creature emits a soft, melodic hum that harmonizes with the distant rustle of the forest. The man’s clothing is minimalist yet striking, his long coat seeming to shift in texture with every step, as if alive. The camera alternates between close-ups of the creature’s intricate details and sweeping wide shots that reveal the man moving toward a faint in the heart of the forest. The scene exudes an ethereal, otherworldly energy, as though the man and the creature are connected in a way beyond comprehension.",
                                creator: "anu aakash",
                                creatorLink: "https://x.com/anukaakash",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Intergalactic%20Dining.mp4",
                                desc: "aliens at a fine dining restaurant",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Giant%20sea%20monster%20attacks%20ship.mp4",
                                desc: "Giant sea monster attacks ship",
                                creator: "Stevie Mac",
                                creatorLink: "https://x.com/StevieMac03",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Microscopic%20Intricacies.mp4",
                                desc: "microscopic closeup of bacteria",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Ray2%20Assets%20Video.mp4",
                                desc: "a tiny chihuahua dressed in post apocalyptic leathers with a WW2 bomber cap and goggles, driving through a wasteland in a tiny lifted and tricked out rig. The style is action movie, and filmed from a dramatic close up angle",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Floating%20Water%20Orb.mp4",
                                desc: "a macro closeup of refracting water orb",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/An_photorealistic_anthropomorphic_banana_man_doing_taxes_1d3a88.mp4",
                                desc: "An photorealistic anthropomorphic banana man doing taxes",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/video0ae03012c218c45b498ce37c8954871e0.MP4",
                                desc: "50mm f/2.3: someone looking at their self‑illuminated arm AR computer around in the misty darkness shining rays from their chest by their personal projector necklaces with crepuscular rays beaming from their chest to their hands, projection mapped UI on their arms",
                                creator: "",
                                creatorLink: "",
                              },
                            ],
                          }),
                          (0, r.jsx)(m, {
                            title: "World Exploration",
                            videos: [
                              {
                                src: "https://static.cdn-luma.com/files/cc3d8d104e8053af/Everest%20Flythrough.mp4",
                                desc: "insane camera flythrough mount everest",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/527ece20ff5d4687/Alien%20Odyssey%20(8).mp4",
                                desc: "insane camera flythrough a colorful realm",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/527ece20ff5d4687/Alien%20Odyssey%20(6).mp4",
                                desc: "insane camera flythrough futuristic city",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/527ece20ff5d4687/Asteroid%20Flythrough.mp4",
                                desc: "insane camera flying through asteroids",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/527ece20ff5d4687/Alien%20Odyssey%20(10).mp4",
                                desc: "insane camera flythrough an alien world",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/527ece20ff5d4687/video00e8d8efa82d44783bb77246b1935e047.mp4",
                                desc: "high speed camera shot flying through a slot in the grand canyon, chaotic during a flood",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/e1663c7fa3d957dc/Asteroid%20Journey%20(2).mp4",
                                desc: "rocket flying through asteroids",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/e1663c7fa3d957dc/Astronaut%20Adventure.mp4",
                                desc: "insane motion shot of an astronaut flying through space",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/e1663c7fa3d957dc/Supermarket%20Flythrough.mp4",
                                desc: "supermarket fly through",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/e1663c7fa3d957dc/Museum%20Flythrough.mp4",
                                desc: "fpv drone footage in a museum",
                                creator: "",
                                creatorLink: "",
                              },
                            ],
                          }),
                          (0, r.jsx)(m, {
                            title: "Visual Effects",
                            videos: [
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Copy%20of%2018mm%20wide%20angle%20action%20shot%202021%20post%20modern%20greco%20iridescent%20bioluminescent%20loquacious%20funneling.mp4",
                                desc: "18mm wide angle action shot 2021 post modern greco iridescent bioluminescent loquacious funneling",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Cosmic%20Catastrophe.mp4",
                                desc: "a planet exploding",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Infrared%20Bigfoot%20(1).mp4",
                                desc: "infrared footage of bigfoot",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Watercolor%20Canvas%20from%20Ray2.mp4",
                                desc: "watercolor oil bleeding on a canvas",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Quantum%20Exploration%20from%20Ray2.mp4",
                                desc: "the quantum realm",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/52785a2a-b5c0-4af5-98b7-fa2dd6c95acd_video0b1eadc6c0dc141f0adf6d5a31d4b2e57.mp4",
                                desc: "A squirrel eating an acorn, green screen background",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Neural%20Connections.mp4",
                                desc: "Neural Connections",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Smoke%20Art%20from%20Ray2.mp4",
                                desc: "cigar smoke",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Infinite%20Realms.mp4",
                                desc: "the multiverse",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/long_exposure_shot_of_cars_driving_by_9c091b.mp4",
                                desc: "Long exposure shot of cars driving by",
                                creator: "",
                                creatorLink: "",
                              },
                            ],
                          }),
                          (0, r.jsx)(m, {
                            title: "Closeup Details",
                            videos: [
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Raindrop%20Closeup.mp4",
                                desc: "macro closeup of raindrops on a leaf",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Close-Up%20Brew%20(2).mp4",
                                desc: "closeup of beer",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Lips%20Closeup.mp4",
                                desc: "closeup of lips",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Cheese%20Grating.mp4",
                                desc: "Grating parmesan cheese",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Flowing%20Fabric%20(1).mp4",
                                desc: "closeup of flowing fabric",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Canine%20Closeup%20(1).mp4",
                                desc: "closeup of a dog’s nose sniffing",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Serpent%20Textures.mp4",
                                desc: "macro closeup of snake skin",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Snow%20Globe%20(1).mp4",
                                desc: "a snowglobe",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/Pollen%20Collector.mp4",
                                desc: "macro closeup of a bee pollinating",
                                creator: "",
                                creatorLink: "",
                              },
                              {
                                src: "https://static.cdn-luma.com/files/site/ray2/an_intimate_closeup_of_a_samurai_s_face_in_the_rain_113e31.mp4",
                                desc: "Intimate closeup of a samurais face in the rain",
                                creator: "",
                                creatorLink: "",
                              },
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "mt-9 flex flex-col gap-6 border-b border-white/30 pb-16 md:mt-24 md:gap-16",
                        children: [
                          (0, r.jsx)("h2", {
                            className: "text-h2 text-white",
                            children: "Available now in Dream Machine.",
                          }),
                          (0, r.jsxs)("div", {
                            className: "grid grid-cols-1 gap-9",
                            children: [
                              (0, r.jsxs)("p", {
                                className: "text-body text-white/60",
                                children: [
                                  "Dream Ray2 is available today in Dream Machine, starting with paid subscribers. You can",
                                  " ",
                                  (0, r.jsx)(i.default, {
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className:
                                      "text-white/90 transition-colors hover:text-white",
                                    href: "https://dream-machine.lumalabs.ai",
                                    children: "try it here",
                                  }),
                                  ". Ray2 will be available in the Dream API soon.",
                                ],
                              }),
                              (0, r.jsx)("div", {
                                className: "flex items-start",
                                children: (0, r.jsx)(i.default, {
                                  href: "https://dream-machine.lumalabs.ai/",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  className:
                                    "rounded-full bg-white px-6 py-3 font-graphikMedium text-xl font-medium text-dark1 transition-colors hover:bg-white/90",
                                  children: (0, r.jsx)("span", {
                                    className: "block -translate-y-[2px]",
                                    children: "Try Now",
                                  }),
                                }),
                              }),
                            ],
                          }),
                          (0, r.jsx)(i.default, {
                            className: "relative mt-9 block md:mt-0",
                            style: { aspectRatio: "2054/960" },
                            href: n.Z.landing,
                            target: "_blank",
                            rel: "noreferrer",
                            children: (0, r.jsx)(s.default, {
                              src: "https://static.cdn-luma.com/cdn-cgi/image/quality=90/files/site/ray2/DreamMachineInterfaceDesktop.jpg",
                              fill: !0,
                              alt: "",
                              className: "w-full object-contain",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
    },
    44800: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return s.a;
        },
      });
      var r = a(89259),
        s = a.n(r);
    },
    46066: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return s.a;
        },
      });
      var r = a(86746),
        s = a.n(r);
    },
    89259: function (e, t, a) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var a in t)
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        })(t, {
          default: function () {
            return o;
          },
          getImageProps: function () {
            return n;
          },
        });
      let r = a(62635),
        s = a(67411),
        i = a(97269),
        c = r._(a(43620));
      function n(e) {
        let { props: t } = (0, s.getImgProps)(e, {
          defaultLoader: c.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, a] of Object.entries(t)) void 0 === a && delete t[e];
        return { props: t };
      }
      let o = i.Image;
    },
  },
  function (e) {
    e.O(0, [6746, 7269, 8296, 1124, 1744], function () {
      return e((e.s = 99422));
    }),
      (_N_E = e.O());
  },
]);
