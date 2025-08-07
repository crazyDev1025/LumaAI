"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5246],
  {
    7643: function (e, t, n) {
      n.d(t, {
        ApiNav: function () {
          return H;
        },
      });
      var r,
        i,
        s = n(20209),
        a = n(45313),
        l = n(46066),
        o = n(39777),
        u = { left: "right", right: "left", top: "bottom", bottom: "top" };
      function d({
        strength: e = 64,
        steps: t = 8,
        falloffPercentage: n = 100,
        tint: r = "transparent",
        side: i = "top",
        ...a
      }) {
        let l = Math.max(1, t),
          o = n / l,
          d = Math.pow(e / 0.5, 1 / (l - 1)),
          c = 100 - n,
          p = (e) => `blur(${0.5 * d ** (l - e - 1)}px)`;
        return (0, s.jsx)("div", {
          ...a,
          style: { pointerEvents: "none", transformOrigin: i, ...a.style },
          children: (0, s.jsxs)("div", {
            style: {
              position: "relative",
              zIndex: 0,
              width: "100%",
              height: "100%",
              background: `linear-gradient(
            to ${u[i]},
            rgb(from ${r} r g b / alpha) 0%,
            rgb(from ${r} r g b / 0%) 100%
          )`,
            },
            children: [
              (0, s.jsx)("div", {
                style: {
                  position: "absolute",
                  zIndex: 1,
                  inset: 0,
                  mask: `linear-gradient(
                  to ${u[i]},
                  rgba(0, 0, 0, 1) ${c}%,
                  rgba(0, 0, 0, 0) ${c + o}%
                )`,
                  backdropFilter: p(0),
                  WebkitBackdropFilter: p(0),
                },
              }),
              l > 1 &&
                (0, s.jsx)("div", {
                  style: {
                    position: "absolute",
                    zIndex: 2,
                    inset: 0,
                    mask: `linear-gradient(
                to ${u[i]},
                  rgba(0, 0, 0, 1) ${c}%,
                  rgba(0, 0, 0, 1) ${c + o}%,
                  rgba(0, 0, 0, 0) ${c + 2 * o}%
                )`,
                    backdropFilter: p(1),
                    WebkitBackdropFilter: p(1),
                  },
                }),
              l > 2 &&
                Array.from({ length: l - 2 }).map((e, t) =>
                  (0, s.jsx)(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        zIndex: t + 2,
                        inset: 0,
                        mask: `linear-gradient(
                    to ${u[i]},
                    rgba(0, 0, 0, 0) ${c + t * o}%,
                    rgba(0, 0, 0, 1) ${c + (t + 1) * o}%,
                    rgba(0, 0, 0, 1) ${c + (t + 2) * o}%,
                    rgba(0, 0, 0, 0) ${c + (t + 3) * o}%
                  )`,
                        backdropFilter: p(t + 2),
                        WebkitBackdropFilter: p(t + 2),
                      },
                    },
                    t
                  )
                ),
            ],
          }),
        });
      }
      var c = n(83112),
        p = n(41013);
      let h = (0, n(41918).Z)("LogOut", [
        [
          "path",
          { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" },
        ],
        ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
        ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
      ]);
      var g = n(65156),
        f = n(7022),
        m = n(95211),
        x = n(45669),
        w = n(4307),
        b = n(12945),
        y = n(91917),
        j = n(6178),
        k = "Avatar",
        [N, S] = (0, w.b)(k),
        [L, F] = N(k),
        E = c.forwardRef((e, t) => {
          let { __scopeAvatar: n, ...r } = e,
            [i, a] = c.useState("idle");
          return (0, s.jsx)(L, {
            scope: n,
            imageLoadingStatus: i,
            onImageLoadingStatusChange: a,
            children: (0, s.jsx)(j.WV.span, { ...r, ref: t }),
          });
        });
      E.displayName = k;
      var A = "AvatarImage",
        M = c.forwardRef((e, t) => {
          let {
              __scopeAvatar: n,
              src: r,
              onLoadingStatusChange: i = () => {},
              ...a
            } = e,
            l = F(A, n),
            o = (function (e) {
              let [t, n] = c.useState("idle");
              return (
                (0, y.b)(() => {
                  if (!e) {
                    n("error");
                    return;
                  }
                  let t = !0,
                    r = new window.Image(),
                    i = (e) => () => {
                      t && n(e);
                    };
                  return (
                    n("loading"),
                    (r.onload = i("loaded")),
                    (r.onerror = i("error")),
                    (r.src = e),
                    () => {
                      t = !1;
                    }
                  );
                }, [e]),
                t
              );
            })(r),
            u = (0, b.W)((e) => {
              i(e), l.onImageLoadingStatusChange(e);
            });
          return (
            (0, y.b)(() => {
              "idle" !== o && u(o);
            }, [o, u]),
            "loaded" === o
              ? (0, s.jsx)(j.WV.img, { ...a, ref: t, src: r })
              : null
          );
        });
      M.displayName = A;
      var I = "AvatarFallback",
        P = c.forwardRef((e, t) => {
          let { __scopeAvatar: n, delayMs: r, ...i } = e,
            a = F(I, n),
            [l, o] = c.useState(void 0 === r);
          return (
            c.useEffect(() => {
              if (void 0 !== r) {
                let e = window.setTimeout(() => o(!0), r);
                return () => window.clearTimeout(e);
              }
            }, [r]),
            l && "loaded" !== a.imageLoadingStatus
              ? (0, s.jsx)(j.WV.span, { ...i, ref: t })
              : null
          );
        });
      P.displayName = I;
      var _ = n(63268);
      let W = c.forwardRef((e, t) => {
        let { className: n, ...r } = e;
        return (0, s.jsx)(E, {
          ref: t,
          className: (0, _.cn)(
            "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
            n
          ),
          ...r,
        });
      });
      (W.displayName = E.displayName),
        (c.forwardRef((e, t) => {
          let { className: n, ...r } = e;
          return (0, s.jsx)(M, {
            ref: t,
            className: (0, _.cn)("aspect-square h-full w-full", n),
            ...r,
          });
        }).displayName = M.displayName);
      let $ = c.forwardRef((e, t) => {
        let { className: n, ...r } = e;
        return (0, s.jsx)(P, {
          ref: t,
          className: (0, _.cn)(
            "flex h-full w-full items-center justify-center rounded-full bg-muted",
            n
          ),
          ...r,
        });
      });
      $.displayName = P.displayName;
      var Z = n(47952),
        z = n(16543);
      function C() {
        var e;
        let t = (0, x.bT)().data,
          n = (0, g.useMutation)({
            mutationFn: f.L5.signOut,
            onSettled: () => {
              document.location.href = m.Z.landing;
            },
          });
        return t
          ? (0, s.jsxs)(z.h_, {
              children: [
                (0, s.jsx)(z.$F, {
                  className: "pointer-events-auto",
                  children: (0, s.jsx)(W, {
                    className: "h-[38px] w-[38px] cursor-pointer bg-primary",
                    children: (0, s.jsx)($, {
                      className: "bg-primary text-primary-foreground",
                      children:
                        null == t
                          ? void 0
                          : null === (e = t.username) || void 0 === e
                          ? void 0
                          : e.slice(0, 2),
                    }),
                  }),
                }),
                (0, s.jsxs)(z.AW, {
                  align: "end",
                  className: "pointer-events-auto",
                  children: [
                    (0, s.jsx)("div", {
                      className: "flex items-center justify-start gap-4 p-2",
                      children: (0, s.jsxs)("div", {
                        className: "flex flex-col space-y-1 leading-none",
                        children: [
                          t.username &&
                            (0, s.jsx)("p", {
                              className: "font-medium",
                              children: t.username,
                            }),
                          t.email &&
                            (0, s.jsx)("p", {
                              className:
                                "w-[200px] truncate text-sm text-zinc-700",
                              children: t.email,
                            }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(z.VD, {}),
                    (0, s.jsx)(z.Xi, {
                      asChild: !0,
                      className: "pointer-events-auto",
                      children: (0, s.jsxs)(Z.z, {
                        variant: "outline",
                        className: "w-full cursor-pointer",
                        onClick: () => {
                          n.mutate();
                        },
                        children: [
                          (0, s.jsx)(h, {
                            className: "mr-2 h-4 w-4",
                            "aria-hidden": "true",
                          }),
                          "Log Out",
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          : null;
      }
      class D {
        addListener(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = {
              priority: t,
              listener: e,
              remove: () => this.removeListener(e),
            };
          return null !== e && this.listeners.push(n), n;
        }
        on(e, t) {
          return this.addListener(e, t);
        }
        removeListener(e) {
          let t = 0;
          for (
            ;
            t < this.listeners.length && this.listeners[t].listener !== e;
            t++
          );
          this.listeners.splice(t, 1);
        }
        once(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = (t) => {
              e(t), this.removeListener(n);
            };
          return this.addListener(n, t);
        }
        dispatch(e, t) {
          if (0 !== this.listeners.length)
            return this.dispatchWithExistingEvent(e, t);
        }
        dispatchWithExistingEvent(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1 / 0;
          if (0 === this.listeners.length) return;
          let n = this.patchPayload(e);
          this.sortPriorityDescending();
          for (let e = 0; e < this.listeners.length; e++)
            if (
              !(this.listeners[e].priority > t) &&
              (this.listeners[e].listener(n),
              "object" == typeof n && n.propagationStopped)
            )
              return;
        }
        hasListeners() {
          return this.listeners.length > 0;
        }
        sortPriorityDescending() {
          this.listeners.sort((e, t) => t.priority - e.priority);
        }
        patchPayload(e) {
          return (
            e instanceof Event &&
              void 0 === e.propagationStopped &&
              ((e.propagationStopped = !1),
              (e._stopPropagation = e.stopPropagation),
              (e.stopPropagation = O)),
            e
          );
        }
        constructor() {
          this.listeners = [];
        }
      }
      function O() {
        (this.propagationStopped = !0), this._stopPropagation();
      }
      ((r = i || (i = {})).Exponential = function (e) {
        let t = 3.356694 / e;
        return { damping: t, strength: (t * t) / 4 };
      }),
        (r.Underdamped = function (e, t) {
          let n = (2 * Math.log(2)) / e;
          return { damping: n, strength: n * n + t };
        }),
        (r.stepSpring = function (e, t, n) {
          let r = n.strength,
            i = n.damping,
            s = t.v,
            a = t.x - t.targetX;
          if ((0 === a && 0 === s) || 0 === e) return;
          let l = 4 * r - i * i;
          if (l > 0) {
            let n = 0.5 * Math.sqrt(l),
              r = (i * a * 0.5 + s) / n,
              o = Math.exp(-(0.5 * i) * e),
              u = Math.cos(n * e),
              d = Math.sin(n * e);
            (t.v =
              o * ((r * n - 0.5 * a * i) * u + (-a * n - 0.5 * i * r) * d)),
              (t.x = o * (a * u + r * d) + t.targetX);
          } else if (l < 0) {
            let n = 0.5 * Math.sqrt(-l),
              r = -0.5 * i + n,
              o = -0.5 * i - n,
              u = -(o * a - s) / (2 * n),
              d = a - u,
              c = Math.exp(r * e),
              p = Math.exp(o * e);
            (t.v = d * o * p + u * r * c), (t.x = d * p + u * c + t.targetX);
          } else {
            let n = Math.sqrt(r),
              i = s + n * a,
              l = Math.exp(-n * e);
            (t.v = (i - n * (a + i * e)) * l),
              (t.x = (a + i * e) * l + t.targetX);
          }
          return 0.5 * r * t.x * t.x;
        });
      class R {
        springTo(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : i.Exponential(0.5);
          if (null != r) {
            let i = this.getSpringOrCreate(e, t);
            (i.target = n), (i.params = r);
          } else this.setTo(e, t, n);
        }
        setTo(e, t, n) {
          this.remove(e, t), (e[t] = n);
        }
        step(e) {
          this.onBeforeStep.hasListeners() &&
            this.onBeforeStep.dispatch({ dt_s: e });
          let t = this._springState;
          this.springs.forEach((n, r) => {
            n.forEach((s, a) => {
              (t.x = r[a]),
                (t.targetX = s.target),
                (t.v = s.velocity),
                null != s.params
                  ? i.stepSpring(e, t, s.params)
                  : ((t.x = t.targetX), (t.v = 0)),
                (r[a] = t.x),
                (s.velocity = t.v),
                1e-4 > Math.abs(t.x - t.targetX) &&
                  1e-4 > Math.abs(t.v) &&
                  ((r[a] = s.target), n.delete(a));
            }),
              0 == n.size && this.springs.delete(r);
          }),
            this.onAfterStep.hasListeners() &&
              this.onAfterStep.dispatch({ dt_s: e });
        }
        tick() {
          let e = performance.now() / 1e3,
            t = this.t_last >= 0 ? e - this.t_last : 1 / 60;
          return (this.t_last = e), this.step(t), t;
        }
        startAnimationFrameLoop() {
          let e = -1,
            t = () => {
              this.tick(), (e = window.requestAnimationFrame(t));
            };
          return (
            t(),
            {
              stop: () => {
                window.cancelAnimationFrame(e);
              },
              start: () => {
                t();
              },
            }
          );
        }
        startIntervalLoop() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 1e3 / 240,
            t = -1,
            n = () => {
              this.tick(), (t = window.setTimeout(n, e));
            };
          return (
            n(),
            {
              stop: () => {
                window.clearTimeout(t);
              },
              start: () => {
                n();
              },
            }
          );
        }
        remove(e, t) {
          let n = this.springs.get(e);
          null != n && n.delete(t),
            null != n && 0 == n.size && this.springs.delete(e);
        }
        removeObject(e) {
          this.springs.delete(e);
        }
        removeAll() {
          this.springs.clear();
        }
        getVelocity(e, t) {
          var n;
          let r = this.getObjectSprings(e).get(t);
          return null !== (n = null == r ? void 0 : r.velocity) && void 0 !== n
            ? n
            : 0;
        }
        getObjectSprings(e) {
          let t = this.springs.get(e);
          return null == t && ((t = new Map()), this.springs.set(e, t)), t;
        }
        getSpringOrCreate(e, t) {
          let n = this.getObjectSprings(e),
            r = n.get(t);
          return (
            null == r &&
              ((r = { target: 0, params: null, velocity: 0 }), n.set(t, r)),
            r
          );
        }
        constructor(e, t) {
          (this.onBeforeStep = new D()),
            (this.onAfterStep = new D()),
            (this.springs = new Map()),
            (this._springState = { x: 0, targetX: 0, v: 0 }),
            (this.t_last = -1),
            e && this.onBeforeStep.addListener((t) => e(t.dt_s)),
            t && this.onAfterStep.addListener((e) => t(e.dt_s));
        }
      }
      let T = i.Exponential(0.1);
      var B = n(28952);
      function X(e) {
        let {
          items: t,
          style: n,
          spacing: r = 20,
          animationValue: i = 1,
          selected: a,
          standardLinkClassName: o,
          theme: u = "dark",
          ...d
        } = e;
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)("nav", {
            className: (0, p.m6)(
              "flex w-full items-center justify-end gap-6 sm:gap-8",
              "light" === u
                ? "text-black text-opacity-60"
                : "text-white text-opacity-60"
            ),
            children: t.map((e) => {
              let [t, n, r] = e,
                d = Array.isArray(t) ? t[0] : t,
                c = Array.isArray(t) ? t[1] : t,
                h = a === d;
              return (0, s.jsxs)(
                l.default,
                {
                  href: null != n ? n : "#",
                  className: (0, p.m6)(
                    "whitespace-nowrap",
                    h &&
                      ("light" === u
                        ? "text-black/90 hover:text-black"
                        : "text-white/90 hover:text-white") + " cursor-default",
                    "pill" === r
                      ? "rounded-full ".concat(
                          "light" === u
                            ? "bg-black text-white"
                            : "bg-white text-black",
                          " px-4 py-2 transition-colors hover:bg-opacity-90"
                        )
                      : "hover:".concat(
                          "light" === u ? "text-black" : "text-white",
                          " transition-colors"
                        ),
                    "pill" !== r && o
                  ),
                  style: {
                    pointerEvents: "auto",
                    opacity: "pill" === r ? 1 : i,
                  },
                  children: [
                    (0, s.jsx)("span", {
                      className: "hidden sm:block",
                      children: d,
                    }),
                    (0, s.jsx)("span", { className: "sm:hidden", children: c }),
                  ],
                },
                d
              );
            }),
          }),
        });
      }
      function q(e) {
        let {
            theme: t = "dark",
            gradientColorOverrideRgb: n = null,
            revealOnScroll: r = !1,
            bannerMessage: i = null,
            menuItems: u = [],
            blurScrollDistance: h = null,
            standardLinkClassName: g,
            userProfileDropdown: f = !1,
          } = e,
          m = (0, o.usePathname)(),
          [x, w] = (0, c.useState)(0),
          b = (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "animationFrame",
              t = (0, c.useRef)(null);
            function n() {
              var e;
              return (t.current =
                null !== (e = t.current) && void 0 !== e ? e : new R());
            }
            return (
              (0, c.useEffect)(
                () =>
                  null === e
                    ? void 0
                    : "animationFrame" === e
                    ? n().startAnimationFrameLoop().stop
                    : n().startIntervalLoop(e).stop,
                [e]
              ),
              n()
            );
          })(),
          y = (function (e) {
            let [t, n] = (0, c.useState)(0),
              r = (0, c.useRef)(0);
            return (0, c.useRef)({
              get value() {
                return r.current;
              },
              set value(v) {
                (r.current = v), n(v);
              },
            }).current;
          })(0);
        (0, c.useEffect)(() => {
          function e() {
            let e = null != h ? h : window.innerHeight,
              t = window.scrollY / e;
            w(Math.floor(t));
            let n = (function (e, t, n) {
              if (n <= 0.4) return 0;
              if (n >= 0.6) return 1;
              let r = (n - 0.4) / 0.19999999999999996;
              return r * r * (3 - 2 * r);
            })(0.4, 0, t);
            b.springTo(y, "value", n, T);
          }
          return (
            window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
          );
        }, []);
        let [j, k] = (0, c.useState)(!0);
        (0, c.useLayoutEffect)(() => {
          k(window.scrollY < 30);
          let e = (e) => {
            window.scrollY < 30 ? k(!0) : k(!1);
          };
          return (
            window.addEventListener("scroll", e),
            () => {
              window.removeEventListener("scroll", e);
            }
          );
        }, []);
        let N = u.find((e) => {
            let [t, n] = e;
            return n === m;
          }),
          S = null == N ? null : Array.isArray(N[0]) ? N[0][0] : N[0],
          L = null != n ? n : "dark" === t ? [0, 0, 0] : [255, 255, 255];
        return (
          n && (L = n),
          (0, s.jsxs)("div", {
            className:
              "pointer-events-none fixed left-0 right-0 top-0 z-[1000]",
            style: {
              backgroundImage: "linear-gradient(0deg, rgba("
                .concat(
                  "dark" === t ? "0, 0, 0" : "255, 255, 255",
                  ", 0), rgba("
                )
                .concat("dark" === t ? "0, 0, 0" : "255, 255, 255", ", ")
                .concat(y.value, "))"),
            },
            children: [
              null != i &&
                (0, s.jsx)(a.E.div, {
                  className: "pointer-events-auto overflow-hidden bg-white/10",
                  animate: {
                    transition: { ease: "easeOut", duration: 0.15 },
                    height: j ? "fit-content" : 0,
                    opacity: j ? 1 : 0,
                  },
                  children: (0, s.jsx)("div", {
                    className:
                      "relative z-10 mx-auto flex h-fit w-full items-center justify-center gap-2 px-8 py-4 text-white/80",
                    children: (0, s.jsx)("div", {
                      className:
                        "mx-auto contents max-w-3xl text-[14px] sm:text-[17px]",
                      children: i,
                    }),
                  }),
                }),
              (0, s.jsxs)("div", {
                className: "flex justify-between p-[32px]",
                children: [
                  (0, s.jsx)(d, {
                    className: "linear-blur",
                    style: {
                      display: y.value > 0 ? "block" : "none",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "120%",
                      zIndex: -1,
                      backgroundImage: "linear-gradient(0deg, rgba("
                        .concat(L[0], ", ")
                        .concat(L[1], ", ")
                        .concat(L[2], ", 0), rgba(")
                        .concat(L[0], ", ")
                        .concat(L[1], ", ")
                        .concat(L[2], ", ")
                        .concat(y.value, "))"),
                    },
                    falloffPercentage: 100,
                    strength: 64 * y.value,
                    steps: 8,
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "pointer-events-none relative z-[100] flex w-full items-center justify-between gap-8 font-medium",
                    children: [
                      (0, s.jsx)(l.default, {
                        className: (0, p.m6)(
                          "pointer-events-auto h-[29px] font-medium text-white text-opacity-50 hover:text-opacity-100"
                        ),
                        href: "/",
                        children: (0, s.jsx)(B.u, { theme: t }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex gap-6",
                        children: [
                          (0, s.jsx)(X, {
                            className: "pointer-events-auto",
                            standardLinkClassName: g,
                            animationValue: r ? y.value : 1,
                            items: u,
                            selected: S,
                            theme: t,
                          }),
                          f && (0, s.jsx)(C, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      let V = (e, t) => {
        let { section: n } = e,
          r = (0, x.o_)("creator_program"),
          i = [];
        return ("dm-landing" === n &&
          (i.push(["Join Us", "https://lumalabs.ai/join", null]),
          i.push(["API", m.Z.apiLanding, null]),
          i.push(["Try Now", m.Z.creations, "pill"])),
        "dm-app" === n &&
          ("authenticated" === t &&
            (i.push(["Create", m.Z.creations, null]),
            i.push(["API", m.Z.apiLanding, null]),
            !0 === r && i.push(["Rate", m.Z.rate, null])),
          ("authenticated" === t || "waitlist" === t) &&
            i.push(["Account", m.Z.account, null])),
        "auth-page" === n)
          ? []
          : ("api-landing" === n &&
              (i.push(["Info", m.Z.apiLanding, null]),
              i.push(["Pricing", m.Z.apiPricing, null]),
              i.push(["Docs", m.Z.apiDocs, null]),
              i.push(["Login", m.Z.apiDashboard, "pill"])),
            "api-app" === n &&
              (i.push(["Pricing", m.Z.apiPricing, null]),
              i.push([["Docs", "Docs"], m.Z.apiDocs, null]),
              i.push(["Status", m.Z.status, null])),
            i);
      };
      function H(e) {
        let { section: t } = e,
          n = V({ section: t });
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsx)(q, {
            gradientColorOverrideRgb: [241, 241, 241],
            blurScrollDistance: 100,
            menuItems: n,
            theme: "light",
            userProfileDropdown: "api-app" === t,
          }),
        });
      }
    },
    96535: function (e, t, n) {
      n.d(t, {
        default: function () {
          return o;
        },
      });
      var r = n(20209),
        i = n(58627),
        s = n(83112),
        a = n(45669),
        l = n(10653);
      function o(e) {
        let { className: t, userEmail: n, userName: i } = e,
          o = (0, a.bT)().data,
          d = n || (null == o ? void 0 : o.email),
          [c, p] = (0, s.useState)(null);
        return (
          (0, s.useEffect)(() => {
            if (null == window.FreshworksWidget) return;
            let e = {};
            d && d.trim().length > 0 && ((e.email = d), (e.name = i)),
              window.FreshworksWidget("identify", "ticketForm", e, {
                formId: 151000005248,
              });
          }, [d, i]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(u, {}),
              (0, r.jsx)("div", {
                className: t,
                children: (0, r.jsx)(l.BlackButton, {
                  href: "#",
                  transparent: !0,
                  className:
                    "letter-spacing-[-0.1px] block bg-[#F1F1F1] px-[12px] py-[8px] text-[16px]",
                  onClick: (e) => {
                    e.preventDefault(),
                      null != window.FreshworksWidget &&
                        window.FreshworksWidget("open");
                  },
                  children: "Get Help",
                }),
              }),
            ],
          })
        );
      }
      let u = () =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(i.default, {
              id: "freshdesk-widget",
              children:
                "\n        window.fwSettings = {\n          widget_id: 151000005248,\n        }\n        !(function () {\n          if ('function' != typeof window.FreshworksWidget) {\n            var n = function () {\n              n.q.push(arguments)\n            }\n            ;(n.q = []), (window.FreshworksWidget = n)\n          }\n        })()\n        window.FreshworksWidget('hide', 'launcher')\n      ",
            }),
            (0, r.jsx)(i.default, {
              type: "text/javascript",
              src: "https://widget.freshworks.com/widgets/151000005248.js",
              async: !0,
              defer: !0,
            }),
          ],
        });
    },
    58627: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return i.a;
          },
        });
      var r = n(53093),
        i = n.n(r),
        s = {};
      for (var a in r)
        "default" !== a &&
          (s[a] = function (e) {
            return r[e];
          }.bind(0, a));
      n.d(t, s);
    },
  },
]);
