(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4817],
  {
    74817: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 86925)),
        Promise.resolve().then(r.bind(r, 86328)),
        Promise.resolve().then(r.bind(r, 92001)),
        Promise.resolve().then(r.bind(r, 27286)),
        Promise.resolve().then(r.bind(r, 54094)),
        Promise.resolve().then(r.bind(r, 69437)),
        Promise.resolve().then(r.t.bind(r, 97269, 23)),
        Promise.resolve().then(r.t.bind(r, 86746, 23));
    },
    86925: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return i;
          },
        });
      var n = r(20209),
        l = r(83112),
        o = r(16059),
        i = (0, l.forwardRef)(function (e, t) {
          let { sources: r, intersectionObserverOptions: i, ...u } = e,
            a = (function () {
              let [e, t] = (0, l.useState)(!1);
              return (
                (0, l.useEffect)(() => {
                  let e = window.matchMedia("(prefers-reduced-motion: reduce)");
                  e.matches && t(!0);
                  let r = (e) => {
                    t(e.matches);
                  };
                  return (
                    e.addEventListener("change", r),
                    () => {
                      e.removeEventListener("change", r);
                    }
                  );
                }, []),
                e
              );
            })(),
            { autoPlay: c, poster: s, controls: d, ...v } = u,
            [f, g] = (0, l.useState)(!1),
            m = (0, l.useRef)(null),
            h = !a && c;
          (0, l.useImperativeHandle)(t, () => m.current),
            (0, l.useEffect)(() => {
              let e;
              let t = m.current;
              if (!h || !t) return;
              let r = new AbortController();
              return (
                t.addEventListener(
                  "seeked",
                  () => {
                    var e;
                    g(
                      t.mozHasAudio ||
                        !!t.webkitAudioDecodedByteCount ||
                        !!(null === (e = t.audioTracks) || void 0 === e
                          ? void 0
                          : e.length)
                    );
                  },
                  { once: !0, signal: r.signal }
                ),
                t.addEventListener(
                  "canplay",
                  () => {
                    t.currentTime = 0.01;
                    let n = (0, o.Z)(
                      t,
                      (r) => {
                        r
                          ? (e = t.play().catch(() => {
                              n();
                            }))
                          : null == e ||
                            e.then(() => {
                              null == t || t.pause();
                            });
                      },
                      { ...i, signal: r.signal }
                    );
                  },
                  { once: !0, signal: r.signal }
                ),
                t.load(),
                () => {
                  r.abort(), t.pause(), (t.currentTime = 0);
                }
              );
            }, [a, h]);
          let p = !1;
          return (
            (p = void 0 !== d ? d : !h || f),
            (0, n.jsx)("video", {
              ref: m,
              poster: h ? void 0 : s,
              preload: h ? "none" : "metadata",
              controls: p,
              ...v,
              children: r.map((e) => {
                let { src: t, type: r } = e;
                return (0, n.jsx)("source", { src: t, type: r }, t);
              }),
            })
          );
        });
    },
    16059: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      let n = !0;
      function l(e, t) {
        let r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (e) {
          if (n) {
            let { signal: n, ...l } = r,
              o = new window.IntersectionObserver((e) => {
                if (e.length) {
                  let { isIntersecting: r } = e[0];
                  t(r);
                }
              }, l);
            o.observe(e);
            let i = () => {
              o.unobserve(e);
            };
            return (
              null == n || n.addEventListener("abort", i),
              () => {
                i(), null == n || n.removeEventListener("abort", i);
              }
            );
          }
          throw Error("IntersectionObserver not supported");
        }
        return () => {};
      }
      n = "IntersectionObserver" in window;
    },
    53381: function (e, t, r) {
      "use strict";
      function n(e, t, r, n, l) {
        var o;
        return (
          r *
            (1 -
              (o = (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1;
                return Math.min(r, Math.max(t, e));
              })((l - e) / (t - e)))) +
          n * o
        );
      }
      function l(e, t, r, n) {
        var l;
        return e * (1 - (l = 1 - Math.exp(-r * n))) + t * l;
      }
      r.d(t, {
        u1: function () {
          return l;
        },
        w6: function () {
          return n;
        },
      });
    },
    86328: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return x;
        },
      });
      var n,
        l,
        o = r(20209),
        i = r(90345),
        u = r(83112),
        a = r(83586),
        c = r(86925),
        s = r(53381);
      function d(e) {
        let t = (0, u.useRef)(!1),
          r = (0, u.useRef)([]);
        return (0, u.useCallback)(
          function () {
            for (var n = arguments.length, l = Array(n), o = 0; o < n; o++)
              l[o] = arguments[o];
            (r.current = l),
              t.current ||
                (requestAnimationFrame(() => {
                  e(...r.current), (t.current = !1);
                }),
                (t.current = !0));
          },
          [e]
        );
      }
      ((n = l || (l = {}))[(n.Idle = 0)] = "Idle"),
        (n[(n.Active = 1)] = "Active");
      let v = { initial: 0, damping: 0.0125, precision: 1e-4 };
      var f = r(44800),
        g = r(56123);
      let m = (0, s.w6)(1, 2, 0, 50, 1.5),
        h = (0, s.w6)(0.5, 2, 0, 115, 1.5);
      var p = (0, u.forwardRef)(function (e, t) {
        let {
            data: r,
            isInteractionActive: n,
            handleMouseEnter: l,
            handleMouseLeave: i,
          } = e,
          a = (0, u.useRef)(null),
          p = (0, u.useRef)(null),
          x = (0, u.useRef)(null),
          w = (0, u.useRef)(null),
          b = (0, u.useRef)(null),
          y = (0, u.useRef)(n);
        y.current = n;
        let j = () => {
            var e, t, r, n;
            null === (e = a.current) ||
              void 0 === e ||
              e.removeAttribute("style"),
              null === (t = p.current) ||
                void 0 === t ||
                t.removeAttribute("style"),
              null === (r = x.current) ||
                void 0 === r ||
                r.removeAttribute("style"),
              null === (n = w.current) ||
                void 0 === n ||
                n.removeAttribute("style");
          },
          E = (function (e, t) {
            let { values: r, onStart: n, onProgress: l, onEnd: o } = e,
              i = (0, u.useRef)(r),
              a = d(() => {
                null == n || n(i.current, r);
              }),
              c = d(() => {
                l(i.current, r);
              }),
              f = d(() => {
                null == o || o(i.current, r);
              }),
              g = (0, u.useMemo)(
                () =>
                  Object.entries(r).reduce((e, r) => {
                    let [n, l] = r;
                    return (
                      (e[n] = (function (e, t) {
                        let r,
                          { onStart: n, onProgress: l, onEnd: o } = e,
                          i = { ...v, ...t },
                          u = 0,
                          a = null,
                          c = null,
                          d = i.initial,
                          f = d,
                          g = d,
                          m = (() => {
                            let e = Math.round(1 / i.precision);
                            return (t) => Math.round(t * e) / e;
                          })(),
                          h = () => {
                            (u = 0), (a = null), (c = null);
                          },
                          p = (e) => {
                            (c = e - (a || e)),
                              (a = e),
                              l(
                                (g = m((d = (0, s.u1)(d, f, i.damping, c)))),
                                f
                              ),
                              1 === u &&
                                (g !== f
                                  ? (r = requestAnimationFrame(p))
                                  : (h(), (d = f), null == o || o(d, f)));
                          },
                          x = () => {
                            h(), cancelAnimationFrame(r);
                          };
                        return {
                          update: (e) => (
                            (f = m(e)),
                            1 !== u &&
                              ((u = 1),
                              null == n || n(d, f),
                              (r = requestAnimationFrame(p))),
                            x
                          ),
                          set: (e) => {
                            x(), (f = d = m(e)), l(d, f);
                          },
                          get: () => d,
                          cancel: x,
                        };
                      })(
                        {
                          onStart: (e) => {
                            (i.current[n] = e), a();
                          },
                          onProgress: (e) => {
                            (i.current[n] = e), c();
                          },
                          onEnd: (e) => {
                            (i.current[n] = e), f();
                          },
                        },
                        { initial: l, ...t }
                      )),
                      e
                    );
                  }, {}),
                [r]
              ),
              m = (e) => {
                Object.entries(e).forEach((e) => {
                  let [t, r] = e;
                  g[t].set(r);
                });
              },
              h = () => {
                Object.values(g).forEach((e) => {
                  e.cancel();
                });
              };
            return (
              (0, u.useEffect)(
                () => () => {
                  h();
                },
                [h]
              ),
              (0, u.useEffect)(() => {
                m(r);
              }, []),
              {
                update: (e) => {
                  Object.entries(e).forEach((e) => {
                    let [t, r] = e;
                    g[t].update(r);
                  });
                },
                set: m,
                cancel: h,
              }
            );
          })(
            {
              values: { expand: 0, translateX: 0, translateY: 0 },
              onProgress: (e) => {
                let { expand: t, translateX: r, translateY: n } = e;
                if (!y.current) {
                  j();
                  return;
                }
                let l = (0, s.w6)(0, 1, 1, 1.5, t);
                a.current &&
                  ((a.current.style.transform = "scale("
                    .concat(l, ") translate(")
                    .concat(r * m, "%) translateY(")
                    .concat(n * h, "%)")),
                  (a.current.style.transformOrigin = ""
                    .concat((0, s.w6)(-1, 1, 50 - m, 50 + m, r), "% ")
                    .concat((0, s.w6)(0, 1, 0, 100, n), "%"))),
                  p.current &&
                    (p.current.style.transform = "scale(".concat(
                      (0, s.w6)(0, 1, 1.25, 1, t),
                      ")"
                    )),
                  x.current &&
                    (x.current.style.transform = "scale(".concat(1 / l, ")")),
                  w.current &&
                    (w.current.style.opacity = "".concat(
                      (0, s.w6)(0.3, 0.7, 0, 1, t)
                    ));
              },
            },
            { damping: 0.009 }
          );
        return (
          (0, u.useImperativeHandle)(t, () => ({
            update: (e) => {
              E.update(e);
            },
            reset: j,
            toggleVideo: (e) => {
              b.current &&
                (e
                  ? b.current.play()
                  : (b.current.pause(), (b.current.currentTime = 0)));
            },
          })),
          (0, o.jsxs)("div", {
            ref: a,
            className: "will-change-transform",
            onMouseEnter: l,
            onMouseLeave: i,
            children: [
              (0, o.jsx)("div", {
                className: "overflow-hidden",
                children: (0, o.jsx)("div", {
                  ref: p,
                  className: "relative aspect-video",
                  children: r.visual.video
                    ? (0, o.jsx)(c.default, {
                        ref: b,
                        className: "h-full w-full object-cover",
                        poster:
                          (0, g.rs)(r.visual.image) || r.visual.video.poster,
                        sources: [
                          {
                            src: r.visual.video.url,
                            type: r.visual.video.type,
                          },
                        ],
                        playsInline: !0,
                        autoPlay: !n,
                        muted: !0,
                        loop: !0,
                        controls: !1,
                      })
                    : (0, o.jsx)(f.default, {
                        src: (0, g.rs)(r.visual.image),
                        alt: r.title,
                        className:
                          "h-full w-full origin-center object-cover will-change-transform lg:scale-125",
                        fill: !0,
                      }),
                }),
              }),
              (0, o.jsxs)("div", {
                ref: x,
                className:
                  "relative origin-top py-2 text-center will-change-transform",
                children: [
                  (0, o.jsx)("div", {
                    className: "text-lg sm:text-xl",
                    children: r.title,
                  }),
                  (0, o.jsx)("div", {
                    ref: w,
                    className:
                      "text-base text-black/70 will-change-transform lg:absolute lg:-left-1/4 lg:top-full lg:w-[150%] lg:opacity-0",
                    children: r.description,
                  }),
                ],
              }),
            ],
          })
        );
      });
      function x(e) {
        let { data: t } = e,
          { items: r } = t,
          n = (0, u.useRef)(Array(r.length).fill(null)),
          l = (0, u.useMemo)(
            () => (r.length % 3 == 0 ? 3 : r.length % 2 == 0 ? 4 : 3),
            [r.length]
          ),
          [c, s] = (0, u.useState)(!1);
        (0, u.useEffect)(() => {
          let e = window.matchMedia("(min-width: ".concat(a.screens.lg, ")")),
            t = () => {
              if ((s(e.matches), !e.matches))
                for (let e = 0; e < r.length; e++) {
                  var t;
                  null === (t = n.current[e]) || void 0 === t || t.reset();
                }
            };
          return (
            e.addEventListener("change", t),
            t(),
            () => {
              e.removeEventListener("change", t);
            }
          );
        }, [r]);
        let [d, v] = (0, u.useMemo)(() => {
          let e = null;
          return [
            (t) => {
              e && (clearTimeout(e), (e = null));
              let o = Math.floor(t / l),
                i = t % l,
                u = 0 === i,
                a = i === l - 1;
              for (let e = 0; e < r.length; e++) {
                var c, s;
                let r = 0,
                  d = 0,
                  v = 0,
                  f = Math.floor(e / l),
                  g = e % l;
                e === t
                  ? ((r = 1), (d = u ? 1 : a ? -1 : 0))
                  : f === o
                  ? g < i
                    ? (d = u ? -2 : a ? -2 : -1)
                    : g > i && (d = u ? 2 : a ? 2 : 1)
                  : f > o && (v = 1),
                  null === (c = n.current[e]) ||
                    void 0 === c ||
                    c.toggleVideo(e === t),
                  null === (s = n.current[e]) ||
                    void 0 === s ||
                    s.update({ expand: r, translateX: d, translateY: v });
              }
            },
            () => {
              e = setTimeout(() => {
                for (let l = 0; l < r.length; l++) {
                  var e, t;
                  null === (e = n.current[l]) ||
                    void 0 === e ||
                    e.toggleVideo(!1),
                    null === (t = n.current[l]) ||
                      void 0 === t ||
                      t.update({ expand: 0, translateX: 0, translateY: 0 });
                }
              }, 150);
            },
          ];
        }, [r, l]);
        return (0, o.jsx)("div", {
          className: "pb-36",
          children: (0, o.jsx)("div", {
            className: (0, i.cx)(
              "grid grid-cols-1 gap-3",
              3 === l && "lg:grid-cols-3",
              4 === l && "lg:grid-cols-4"
            ),
            children: r.map((e, t) =>
              (0, o.jsx)(
                p,
                {
                  ref: (e) => {
                    e && (n.current[t] = e);
                  },
                  data: e,
                  isInteractionActive: c,
                  handleMouseEnter: c ? () => d(t) : void 0,
                  handleMouseLeave: c ? v : void 0,
                },
                t
              )
            ),
          }),
        });
      }
    },
    92001: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return d;
        },
      });
      var n = r(20209),
        l = r(90345),
        o = r(94678),
        i = r(83112),
        u = r(86925),
        a = r(44800),
        c = r(56123);
      function s(e) {
        var t;
        let { data: r, className: o, videoProps: i, imageProps: s } = e,
          d = { width: 0, height: 0 };
        r.video ? (d = r.video) : r.image && (d = (0, c.sw)(r.image));
        let { width: v, height: f } = d,
          g = "".concat(v, "/").concat(f);
        return (0, n.jsx)("div", {
          className: (0, l.cx)(
            "relative h-full w-full self-center overflow-hidden bg-black/5 dark:bg-white/10",
            r.video && "w-full",
            o
          ),
          style: { aspectRatio: g },
          children: r.video
            ? (0, n.jsx)(u.default, {
                className: "h-full w-full object-cover",
                poster: r.video.poster,
                sources: [{ src: r.video.url, type: r.video.type }],
                playsInline: !0,
                autoPlay: !0,
                muted: !0,
                loop: !0,
                ...i,
              })
            : (0, n.jsx)(a.default, {
                className: "h-full w-full object-cover",
                src: (0, c.rs)(r.image),
                alt:
                  (null === (t = r.caption) || void 0 === t
                    ? void 0
                    : t.text) || "",
                width: v,
                height: f,
                ...s,
              }),
        });
      }
      function d(e) {
        let { data: t } = e,
          r = t.items.length > 1,
          [u, a] = (0, o.Z)({ containScroll: !1, align: "center" }),
          [c, d] = (0, i.useState)(0);
        return (
          (0, i.useEffect)(() => {
            a &&
              a.on("select", () => {
                d(a.selectedScrollSnap());
              });
          }, [a]),
          (0, n.jsx)("div", {
            className:
              "relative -left-[50svw] ml-[50%] w-svw overflow-hidden px-6",
            ref: r ? u : null,
            children: (0, n.jsx)("div", {
              className: "flex items-start gap-4",
              children: t.items.map((e, t) => {
                var r;
                return (0, n.jsxs)(
                  "div",
                  {
                    className: (0, l.cx)(
                      "mx-auto flex w-full max-w-[80%] flex-[0_0_auto] flex-col gap-5 min-[1600px]:max-w-7xl",
                      c !== t && "cursor-pointer"
                    ),
                    onClick: () => {
                      null == a || a.scrollTo(t);
                    },
                    children: [
                      (0, n.jsx)(s, {
                        data: e,
                        videoProps: { controls: !1, muted: !0 },
                      }),
                      (0, n.jsx)("p", {
                        className:
                          "mx-auto max-w-2xl text-center text-lg lg:text-2xl",
                        children:
                          null === (r = e.caption) || void 0 === r
                            ? void 0
                            : r.text,
                      }),
                    ],
                  },
                  e._key + t
                );
              }),
            }),
          })
        );
      }
    },
    56123: function (e, t, r) {
      "use strict";
      r.d(t, {
        cG: function () {
          return c;
        },
        rs: function () {
          return u;
        },
        sw: function () {
          return a;
        },
      });
      var n = r(91718),
        l = r.n(n),
        o = r(7790);
      let i = l()({ projectId: o.Sx, dataset: o.gx });
      function u(e) {
        return e ? ("string" == typeof e ? e : i.image(e).url()) : "";
      }
      let a = (e) => {
        var t;
        let { asset: r } = e;
        if (!r) return { id: void 0, width: 0, height: 0, format: void 0 };
        let [, n, l, o] =
            null !== (t = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/.exec(r._ref)) &&
            void 0 !== t
              ? t
              : [],
          [i, u] = l.split("x").map((e) => parseInt(e, 10));
        return { id: n, width: i, height: u, format: o };
      };
      function c(e) {
        var t, r, n, l, o, i, u, a, c, s;
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
              null === (u = e.slug) || void 0 === u ? void 0 : u.current
            );
          case "landing":
            return "/"
              .concat(
                null === (c = e.category) || void 0 === c
                  ? void 0
                  : null === (a = c.slug) || void 0 === a
                  ? void 0
                  : a.current,
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
          return u;
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
        u = "/lum44157ud10";
    },
  },
]);
