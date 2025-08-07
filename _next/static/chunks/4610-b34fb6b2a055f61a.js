"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4610],
  {
    79318: function (e, t, a) {
      a.d(t, {
        AN: function () {
          return d;
        },
      });
      var r = a(20209),
        n = a(90345),
        l = a(46066),
        o = a(83112);
      let i = (0, n.j)(
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
        s = (0, o.forwardRef)(function (e, t) {
          let { asChild: a, type: l, size: s, children: d, ...c } = e,
            { className: u, ...m } = c,
            C = (0, n.cx)(i({ type: l, size: s }), u);
          return a && (0, o.isValidElement)(d)
            ? (0, o.cloneElement)(d, { ...d.props, className: C })
            : (0, r.jsx)("button", { ref: t, className: C, ...m, children: d });
        });
      t.ZP = s;
      let d = (0, o.forwardRef)(function (e, t) {
        let {
          type: a,
          size: n,
          className: o,
          target: i,
          children: d,
          ...c
        } = e;
        return (0,
        r.jsx)(s, { asChild: !0, type: a, size: n, className: o, children: (0, r.jsx)(l.default, { ref: t, target: i, ...c, children: d }) });
      });
    },
    24610: function (e, t, a) {
      a.d(t, {
        default: function () {
          return N;
        },
      });
      var r,
        n,
        l,
        o,
        i = a(20209);
      function s(e) {
        return (0, i.jsxs)("svg", {
          viewBox: "0 0 141 163",
          fill: "currentColor",
          fillOpacity: 0.3,
          role: "img",
          "aria-labelledby": "luma-logo",
          ...e,
          children: [
            (0, i.jsx)("title", {
              id: "luma-logo",
              children: "Dream AI company logo",
            }),
            (0, i.jsx)("path", {
              d: "M0.625656 40.7328L70.5 0.397942V161.764L0.625656 121.42V40.7328Z",
            }),
            (0, i.jsx)("path", {
              d: "M70.5 161.762L0.625656 121.419L70.5 81.0749L140.374 121.419L70.5 161.762Z",
            }),
            (0, i.jsx)("path", {
              d: "M70.5 161.762L0.625656 121.419L70.5 81.0749L140.374 121.419L70.5 161.762Z",
            }),
            (0, i.jsx)("path", {
              d: "M0.625656 40.7328L70.5 0.397942V161.764L0.625656 121.42V40.7328Z",
            }),
            (0, i.jsx)("path", {
              d: "M70.5 161.762L0.625656 121.419L70.5 81.0749L140.374 121.419L70.5 161.762Z",
            }),
            (0, i.jsx)("path", {
              d: "M0.625656 40.7328L70.5 0.397942V161.764L0.625656 121.42V40.7328Z",
            }),
          ],
        });
      }
      var d = a(79318),
        c = a(81333),
        u = a(83112),
        m = a(90345),
        C = a(46066),
        h = a(39777),
        f = a(8777),
        x = a(83586);
      function p(e) {
        return (0, i.jsx)("svg", {
          viewBox: "0 0 32 32",
          fill: "currentColor",
          ...e,
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM10.0472 7.47896C10.6111 7.25739 11.2561 7.10665 12.2007 7.06209C13.1475 7.01592 13.4494 7.00563 15.8602 7.00101C18.2711 6.99639 18.5753 7.00687 19.5202 7.0477C20.4651 7.08854 21.1104 7.2375 21.6754 7.45606C22.26 7.68119 22.7558 7.9839 23.2497 8.47659C23.7436 8.96928 24.0481 9.46339 24.2763 10.047C24.4977 10.6114 24.648 11.2543 24.6929 12.201C24.7379 13.1476 24.7487 13.4498 24.7533 15.8602C24.7579 18.2705 24.7482 18.5731 24.7068 19.5206C24.6658 20.4648 24.5172 21.1105 24.2984 21.6751C24.0728 22.26 23.7699 22.7553 23.2779 23.2496C22.7859 23.7439 22.2911 24.0482 21.7075 24.2765C21.1433 24.497 20.5018 24.6483 19.555 24.6932C18.6081 24.7382 18.3047 24.7488 15.8947 24.7534C13.4847 24.758 13.1805 24.7485 12.2357 24.7071C11.2908 24.6657 10.645 24.5169 10.0804 24.2987C9.49453 24.0725 8.99989 23.7702 8.50578 23.2778C8.01167 22.7855 7.70682 22.291 7.47903 21.7075C7.25746 21.1434 7.10725 20.4985 7.06216 19.5542C7.01635 18.6072 7.0057 18.305 7.00108 15.8943C6.99646 13.4835 7.0057 13.1798 7.04742 12.2347C7.08914 11.2896 7.23722 10.6441 7.45577 10.0789C7.68161 9.49446 7.98468 8.99946 8.47684 8.50553C8.96899 8.0116 9.46363 7.7064 10.0472 7.47896ZM10.6557 22.8082C10.9689 22.9286 11.4388 23.0724 12.3044 23.1101H12.3045C13.2407 23.1505 13.5204 23.1601 15.891 23.155C18.2615 23.1498 18.5421 23.1406 19.4783 23.0966C20.3427 23.0554 20.8127 22.9098 21.1252 22.7878C21.5396 22.6259 21.8348 22.4338 22.1448 22.122C22.4548 21.8103 22.6474 21.5146 22.8072 21.1001C22.9278 20.7865 23.0712 20.3164 23.1091 19.4509C23.1501 18.5154 23.1584 18.234 23.1542 15.8644C23.1499 13.4949 23.1398 13.2142 23.0952 12.278C23.0544 11.4123 22.9091 10.9431 22.7868 10.6311C22.6249 10.216 22.4326 9.92146 22.1207 9.61111C21.8087 9.30076 21.5135 9.10883 21.0985 8.94904C20.7859 8.82813 20.3152 8.68485 19.4504 8.64721C18.5138 8.60602 18.2326 8.59714 15.8629 8.60229C13.4932 8.60744 13.2127 8.61632 12.2765 8.6607C11.4113 8.7019 10.9419 8.84713 10.629 8.96928C10.2148 9.1312 9.91922 9.3233 9.6094 9.63525C9.29958 9.9472 9.10712 10.2421 8.94733 10.6574C8.82713 10.9704 8.68244 11.4409 8.64551 12.3057C8.60449 13.2416 8.59544 13.5221 8.60059 15.8921C8.60574 18.2622 8.61497 18.5431 8.659 19.4785C8.69948 20.3441 8.84595 20.8135 8.96757 21.1267C9.12949 21.5406 9.32124 21.8371 9.63337 22.1462C9.94549 22.4553 10.2409 22.6484 10.6557 22.8082ZM19.7218 11.7242C19.6045 11.5492 19.5416 11.3434 19.5413 11.1327C19.5408 10.8502 19.6526 10.5791 19.8519 10.379C20.0513 10.1789 20.322 10.0662 20.6044 10.0656C20.8151 10.0652 21.0212 10.1273 21.1967 10.244C21.3721 10.3607 21.509 10.5268 21.59 10.7213C21.671 10.9159 21.6925 11.13 21.6518 11.3368C21.611 11.5435 21.5099 11.7335 21.3612 11.8828C21.2125 12.032 21.0228 12.1338 20.8163 12.1753C20.6097 12.2168 20.3954 12.1961 20.2006 12.1158C20.0058 12.0355 19.8392 11.8992 19.7218 11.7242ZM15.8858 20.4352C13.3687 20.44 11.3241 18.4037 11.3192 15.8861C11.3144 13.3689 13.351 11.3239 15.8684 11.3189C18.3858 11.3139 20.431 13.3507 20.4358 15.8683C20.4406 18.3859 18.4029 20.4304 15.8858 20.4352ZM13.4136 14.2379C13.0894 14.7252 12.917 15.2976 12.9181 15.8829C12.9189 16.2715 12.9961 16.6562 13.1455 17.0149C13.2949 17.3737 13.5136 17.6995 13.7889 17.9737C14.0642 18.248 14.3909 18.4653 14.7502 18.6133C15.1096 18.7613 15.4945 18.837 15.8831 18.8362C16.4684 18.835 17.0402 18.6603 17.5262 18.3342C18.0122 18.0081 18.3905 17.5452 18.6134 17.004C18.8363 16.4629 18.8937 15.8678 18.7784 15.294C18.6631 14.7202 18.3802 14.1935 17.9656 13.7805C17.5509 13.3674 17.0231 13.0867 16.4488 12.9736C15.8746 12.8606 15.2797 12.9204 14.7395 13.1454C14.1992 13.3704 13.7378 13.7506 13.4136 14.2379Z",
          }),
        });
      }
      function b(e) {
        return (0, i.jsxs)("svg", {
          viewBox: "0 0 32 32",
          fill: "currentColor",
          ...e,
          children: [
            (0, i.jsx)("path", {
              d: "M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM23.3995 10.386C24.1918 10.5983 24.8156 11.2241 25.0273 12.0187C25.4121 13.4589 25.4121 16.4638 25.4121 16.4638C25.4121 16.4638 25.4121 19.4687 25.0273 20.9091C24.8156 21.7036 24.1918 22.3293 23.3995 22.5418C21.9637 22.9277 16.2061 22.9277 16.2061 22.9277C16.2061 22.9277 10.4484 22.9277 9.01256 22.5418C8.22039 22.3293 7.59646 21.7036 7.38474 20.9091C7 19.4687 7 16.4638 7 16.4638C7 16.4638 7 13.4589 7.38474 12.0187C7.59646 11.2241 8.22039 10.5983 9.01256 10.386C10.4484 10 16.2061 10 16.2061 10C16.2061 10 21.9637 10 23.3995 10.386Z",
            }),
            (0, i.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M13.4164 20.2199L20.0419 16.4638L13.4164 12.7074V20.2199Z",
            }),
          ],
        });
      }
      function g(e) {
        return (0, i.jsx)("svg", {
          viewBox: "0 0 32 32",
          fill: "currentColor",
          ...e,
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM23.4491 9H20.9402L16.8139 13.7735L13.2157 9H8L14.206 17.1548L8.33011 23.9172H10.8389L15.3944 18.7128L19.3557 23.9172H24.4394L17.9693 15.3315L23.4491 9ZM21.4354 22.3924H20.049L10.938 10.4254H12.4565L21.4354 22.3924Z",
          }),
        });
      }
      function v(e) {
        return (0, i.jsx)("svg", {
          viewBox: "0 0 32 32",
          fill: "currentColor",
          ...e,
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM21.5645 11.4409C21.6728 11.5114 21.7845 11.5764 21.8992 11.6357C22.6458 12.0079 23.3749 12.1212 23.7341 12.0823V14.9806C23.7341 14.9806 22.7091 14.9381 21.9484 14.7363C20.8881 14.4526 20.2085 14.017 20.2085 14.017C20.2085 14.017 19.7368 13.705 19.7014 13.6837V19.6731C19.7014 20.006 19.6132 20.839 19.349 21.5335C19.1174 22.1273 18.7864 22.6774 18.3701 23.1601C18.3701 23.1601 17.7185 23.9679 16.5739 24.5101C15.6198 24.9622 14.7711 24.987 14.434 24.9968C14.4065 24.9976 14.3823 24.9983 14.3619 24.9992C14.3619 24.9992 12.7947 25.0622 11.3813 24.1017L11.3743 24.0947V24.1017C10.8964 23.7683 10.4703 23.3663 10.1096 22.9086C9.6623 22.3381 9.38783 21.6613 9.317 21.463V21.4559C9.20438 21.1191 8.96817 20.3042 9.00358 19.5176C9.05989 18.1318 9.52489 17.278 9.64813 17.0655C9.97199 16.4828 10.3951 15.9611 10.8983 15.5239C11.4726 15.0425 12.1404 14.6853 12.8597 14.4748C13.5789 14.2644 14.334 14.2054 15.0772 14.3014L15.0737 17.2741C14.8289 17.1943 14.573 17.1538 14.3155 17.154C12.9552 17.154 11.8527 18.2632 11.8527 19.6331C11.8527 21.0029 12.9552 22.1121 14.3155 22.1121C14.739 22.1127 15.1553 22.0028 15.5235 21.7934C15.8767 21.5927 16.1752 21.3083 16.3927 20.9652C16.6102 20.6221 16.74 20.2308 16.7708 19.8257V19.8194C16.7725 19.8109 16.7725 19.8024 16.7725 19.7942C16.7729 19.7878 16.7733 19.7816 16.7737 19.7756C16.7746 19.7632 16.7754 19.7514 16.7754 19.739C16.7818 19.5909 16.7818 19.4411 16.7818 19.2896V8H19.7014C19.6968 8 19.6663 8.27978 19.74 8.71219H19.7364C19.8246 9.23315 20.064 9.97721 20.705 10.7107C20.9612 10.9877 21.2498 11.2328 21.5645 11.4409Z",
          }),
        });
      }
      function k(e) {
        return (0, i.jsx)("svg", {
          viewBox: "0 0 32 32",
          fill: "currentColor",
          ...e,
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM21.3 23.5H24.5V16.7465C24.5 13.8889 22.8296 12.5078 20.5664 12.5078C18.304 12.5078 17.3 14.2695 17.3 14.2695V13.1H14.1V23.5H17.3V17.9008C17.3 16.4008 18.0848 15.5078 19.4072 15.5078C20.6224 15.5078 21.3 16.3648 21.3 17.9008V23.5ZM8.5 9.46797C8.5 10.5552 9.3744 11.4367 10.4536 11.4367C11.532 11.4367 12.4072 10.5552 12.4064 9.46797C12.4064 8.38157 11.532 7.5 10.4536 7.5C9.3744 7.5 8.5 8.38157 8.5 9.46797ZM12.5 23.5H8.5V13.1H12.5V23.5Z",
          }),
        });
      }
      function w(e) {
        let { data: t, className: a } = e;
        return (0, i.jsxs)("div", {
          className: (0, m.cx)("flex items-center gap-4", a),
          children: [
            (0, i.jsx)(C.default, {
              href: t.instagram,
              className:
                "transition-opacity will-change-transform hover:opacity-70",
              target: "_blank",
              rel: "nofollow noreferrer",
              children: (0, i.jsx)(p, { className: "h-8 w-8" }),
            }),
            (0, i.jsx)(C.default, {
              href: t.youtube,
              className:
                "transition-opacity will-change-transform hover:opacity-70",
              target: "_blank",
              rel: "nofollow noreferrer",
              children: (0, i.jsx)(b, { className: "h-8 w-8" }),
            }),
            (0, i.jsx)(C.default, {
              href: t.x,
              className:
                "transition-opacity will-change-transform hover:opacity-70",
              target: "_blank",
              rel: "nofollow noreferrer",
              children: (0, i.jsx)(g, { className: "h-8 w-8" }),
            }),
            (0, i.jsx)(C.default, {
              href: t.tiktok,
              className:
                "transition-opacity will-change-transform hover:opacity-70",
              target: "_blank",
              rel: "nofollow noreferrer",
              children: (0, i.jsx)(v, { className: "h-8 w-8" }),
            }),
            (0, i.jsx)(C.default, {
              href: t.linkedin,
              className:
                "transition-opacity will-change-transform hover:opacity-70",
              target: "_blank",
              rel: "nofollow noreferrer",
              children: (0, i.jsx)(k, { className: "h-8 w-8" }),
            }),
          ],
        });
      }
      var j = a(53381);
      let y = {
        smooth: { bounce: 0.05, duration: 1e3 },
        snappy: { bounce: 0.15, duration: 600 },
        bouncy: { bounce: 0.45, duration: 2e3 },
      };
      Object.keys(y),
        ((r = l || (l = {}))[(r.Idle = 0)] = "Idle"),
        (r[(r.Spring = 1)] = "Spring"),
        (r[(r.ExpSmoothing = 2)] = "ExpSmoothing");
      let M = { initial: 0, precision: 1e-5, preset: "smooth" };
      function L(e) {
        let { isMobileOpen: t } = e,
          a = (0, u.useRef)(null),
          r = (0, u.useRef)(null),
          n = (function (e, t) {
            let { onStart: a, onProgress: r, onEnd: n } = e,
              {
                update: l,
                set: o,
                get: i,
                cancel: s,
              } = (0, u.useMemo)(
                () =>
                  (function (e, t) {
                    var a, r;
                    let n,
                      { onStart: l, onProgress: o, onEnd: i } = e,
                      s = { ...M, ...t },
                      d = y[s.preset || "smooth"];
                    s.config &&
                      (d = {
                        ...d,
                        duration:
                          null !== (a = s.config.duration) && void 0 !== a
                            ? a
                            : d.duration,
                        bounce:
                          null !== (r = s.config.bounce) && void 0 !== r
                            ? r
                            : d.bounce,
                      });
                    let c = 0,
                      u = null,
                      m = null,
                      C = null,
                      h = s.initial,
                      f = h,
                      x = f,
                      p = (() => {
                        let e = Math.round(1 / s.precision);
                        return (t) => Math.round(t * e) / e;
                      })(),
                      b = () => {
                        (c = 0), (u = null), (m = null), (C = null);
                      },
                      g = d.duration / 1e3,
                      v = 1 - Math.max(0.001, Math.min(d.bounce, 1)),
                      k = v / Math.sqrt(1 - v ** 2),
                      w = -Math.log(s.precision) / (v * g),
                      L = w * Math.sqrt(1 - v ** 2),
                      N = (e) => {
                        var t;
                        null === m && (m = e),
                          o(
                            (f =
                              h +
                              (x - h) *
                                (1 -
                                  Math.exp(-v * w * (t = C = (e - m) / 1e3)) *
                                    (Math.cos(L * t) + k * Math.sin(L * t)))),
                            x
                          ),
                          1 === c &&
                            (C < g
                              ? (n = requestAnimationFrame(N))
                              : (b(), (f = x), null == i || i(f, x)));
                      },
                      Z = () => {
                        b(), cancelAnimationFrame(n);
                      },
                      V = (e) => {
                        (f = (0, j.u1)(f, x, 0.0125, e - (u || e))),
                          (u = e),
                          o(f, x),
                          2 === c &&
                            (p(f) !== x ? (n = requestAnimationFrame(V)) : b());
                      };
                    return {
                      update: (e) => (
                        (h = f),
                        (x = e),
                        1 !== c
                          ? ((c = 1),
                            null == l || l(f, x),
                            (n = requestAnimationFrame(N)))
                          : (m = null),
                        Z
                      ),
                      set: function (e) {
                        let t =
                          arguments.length > 1 &&
                          void 0 !== arguments[1] &&
                          arguments[1];
                        (h = e),
                          (x = e),
                          t
                            ? 2 !== c &&
                              ((c = 2), (n = requestAnimationFrame(V)))
                            : (Z(), o((f = e), x));
                      },
                      get: () => f,
                      cancel: Z,
                    };
                  })({ onStart: a, onProgress: r, onEnd: n }, t),
                [a, r, n]
              );
            return (
              (0, u.useEffect)(
                () => () => {
                  s();
                },
                [s]
              ),
              (0, u.useEffect)(() => {
                o((null == t ? void 0 : t.initial) || 0);
              }, []),
              { update: l, set: o, get: i, cancel: s }
            );
          })(
            {
              onProgress: (0, u.useCallback)((e) => {
                let t = 1 - 0.2 * Math.sin(e * Math.PI);
                a.current &&
                  (a.current.style.transform = "scale("
                    .concat(t, ") rotateZ(")
                    .concat(135 * e, "deg) translateY(")
                    .concat(3 * e, "px)")),
                  r.current &&
                    (r.current.style.transform = "scale("
                      .concat(t, ") rotateZ(")
                      .concat(225 * e, "deg) translateY(")
                      .concat(-3 * e, "px)"));
              }, []),
            },
            { config: { bounce: 0.28, duration: 1250 } }
          );
        return (
          (0, u.useEffect)(() => {
            let e = t ? 1 : 0;
            n.get() !== e && n.update(e);
          }, [t]),
          (0, i.jsxs)("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: [
              (0, i.jsx)("path", {
                ref: a,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M1 7C1 6.44772 1.44772 6 2 6L18 6C18.5523 6 19 6.44772 19 7C19 7.55228 18.5523 8 18 8L2 8C1.44772 8 1 7.55229 1 7Z",
                style: { transformOrigin: "center" },
              }),
              (0, i.jsx)("path", {
                ref: r,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M19 13C19 13.5523 18.5523 14 18 14L2 14C1.44772 14 1 13.5523 1 13C1 12.4477 1.44772 12 2 12L18 12C18.5523 12 19 12.4477 19 13Z",
                style: { transformOrigin: "center" },
              }),
            ],
          })
        );
      }
      function N(e) {
        let { data: t, transparent: a, overlap: r, customCta: n } = e,
          l = (0, h.usePathname)(),
          [o, p] = (0, u.useState)("loading"),
          b = "mobile-open" === o,
          g = "mobile-closed" === o,
          v = g || b,
          k = b || "desktop" === o,
          j = n || t.cta,
          y = () => {
            g && p("mobile-open");
          },
          M = () => {
            b && p("mobile-closed");
          },
          N = (e) =>
            !!l &&
            !!e &&
            ("/" === e ? e === l : null == l ? void 0 : l.startsWith(e));
        (0, u.useEffect)(() => {
          let e = window.matchMedia("(min-width: ".concat(x.screens.md, ")")),
            t = () => {
              e.matches
                ? p("desktop")
                : (p("loading"),
                  setTimeout(() => {
                    p("mobile-closed");
                  }));
            };
          return (
            e.addEventListener("change", t),
            t(),
            () => {
              e.removeEventListener("change", t);
            }
          );
        }, []);
        let Z = (0, u.useRef)(null);
        (0, u.useEffect)(() => {
          if (b) {
            let e = Z.current;
            if (e) return (0, c.cJ)(e);
          }
        }, [b]),
          (0, u.useEffect)(() => {
            if (b) {
              let e = (e) => {
                "Escape" === e.key && M();
              };
              return (
                window.addEventListener("keydown", e),
                () => {
                  window.removeEventListener("keydown", e);
                }
              );
            }
          }, [b, M]),
          (0, u.useEffect)(M, [l]);
        let V = (0, u.useRef)(null);
        return (
          (0, u.useEffect)(() => {
            V.current && b && (V.current.scrollTop = 0);
          }, [b]),
          (0, u.useEffect)(() => {
            V.current &&
              (k
                ? (V.current.removeAttribute("inert"),
                  V.current.removeAttribute("data-suppressed"))
                : (V.current.setAttribute("inert", "true"),
                  V.current.setAttribute("data-suppressed", "true")));
          }, [k]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(f.Z, {
                ref: Z,
                as: "nav",
                "data-state": o,
                className: (0, m.cx)(
                  "group fixed left-0 top-0 z-10 h-0 w-full text-black dark:text-white",
                  "max-md:transition-[height] max-md:delay-200 max-md:duration-0",
                  "data-[state=mobile-open]:max-md:z-50 data-[state=mobile-open]:max-md:h-full data-[state=mobile-open]:max-md:overflow-y-scroll data-[state=mobile-open]:max-md:delay-0",
                  "data-[state=loading]:max-md:transition-none data-[state=loading]:max-md:delay-0"
                ),
                enabled: b,
                "data-hidden": !1,
                children: (0, i.jsxs)("div", {
                  className:
                    "navigation-bar-height container grid grid-cols-[1fr_auto] gap-6 md:grid-cols-[1fr_auto_auto]",
                  children: [
                    !a &&
                      (0, i.jsx)("div", {
                        className:
                          "navigation-bar-height container pointer-events-none absolute left-0 top-0 w-full bg-light1/80 backdrop-blur-xl dark:bg-black/80",
                        children: (0, i.jsx)("div", {
                          className:
                            "navigation-bar-height border-b border-current opacity-20",
                        }),
                      }),
                    (0, i.jsxs)(C.default, {
                      href: "/",
                      className:
                        "relative z-10 flex items-center gap-3 self-center justify-self-start text-sm font-medium tracking-tight transition-opacity hover:opacity-70",
                      children: [
                        (0, i.jsx)(s, { className: "w-4 lg:w-5" }),
                        "Dream AI",
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      ref: V,
                      className: (0, m.cx)(
                        "relative flex",
                        "md:items-center md:justify-center md:gap-3 lg:gap-4",
                        "max-md:scrollbar-hide max-md:pointer-events-none max-md:absolute max-md:inset-0 max-md:h-full max-md:flex-col max-md:gap-4 max-md:overflow-x-hidden max-md:overflow-y-scroll max-md:bg-light1 max-md:px-6 max-md:pb-12 max-md:pt-24 max-md:opacity-0 max-md:transition-opacity max-md:duration-200 max-md:ease-in-out max-md:dark:bg-black",
                        "group-data-[state=mobile-open]:max-md:pointer-events-auto group-data-[state=mobile-open]:max-md:opacity-100",
                        "group-data-[state=loading]:max-md:max-md:transition-none group-data-[state=loading]:max-md:max-md:duration-0"
                      ),
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "container fixed left-0 top-0 w-full bg-light1/80 backdrop-blur-xl group-data-[state=mobile-open]:overflow-y-scroll dark:bg-black/80 md:hidden",
                          children: (0, i.jsx)("div", {
                            className:
                              "navigation-bar-height border-b border-current opacity-20",
                          }),
                        }),
                        t.links.map((e) =>
                          (0, i.jsx)(
                            C.default,
                            {
                              className: (0, m.cx)(
                                "text-xs font-medium uppercase tracking-normal transition-opacity lg:text-sm",
                                "max-md:text-xl",
                                N(e.url) ? "opacity-50" : "hover:opacity-70"
                              ),
                              href: e.url,
                              target: e.blank ? "_blank" : "_self",
                              rel: e.blank ? "noreferrer nofollow" : void 0,
                              onClick: M,
                              children: e.label,
                            },
                            e._key
                          )
                        ),
                        t.socials &&
                          (0, i.jsx)(w, {
                            className: "mt-auto pt-12 md:hidden",
                            data: t.socials,
                          }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "relative z-10 ml-auto flex items-center gap-3",
                      children: [
                        j &&
                          (0, i.jsx)(d.AN, {
                            type: "primary",
                            size: "small",
                            href: j.url,
                            target: j.blank ? "_blank" : "_self",
                            children: j.label,
                          }),
                        (0, i.jsx)("button", {
                          className: "cursor-pointer md:hidden",
                          type: "button",
                          "aria-label": "Toggle mobile navigation menu",
                          onClick: () => (b ? M() : y()),
                          "aria-hidden": !v,
                          tabIndex: v ? 0 : -1,
                          children: (0, i.jsx)(L, { isMobileOpen: b }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              !r &&
                (0, i.jsx)("div", {
                  className: "navigation-bar-height mb-12 md:mb-24",
                }),
            ],
          })
        );
      }
      ((n = o || (o = {})).Desktop = "desktop"),
        (n.MobileOpen = "mobile-open"),
        (n.MobileClosed = "mobile-closed"),
        (n.Loading = "loading");
    },
    53381: function (e, t, a) {
      function r(e, t, a, r, n) {
        var l;
        return (
          a *
            (1 -
              (l = (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1;
                return Math.min(a, Math.max(t, e));
              })((n - e) / (t - e)))) +
          r * l
        );
      }
      function n(e, t, a, r) {
        var n;
        return e * (1 - (n = 1 - Math.exp(-a * r))) + t * n;
      }
      a.d(t, {
        u1: function () {
          return n;
        },
        w6: function () {
          return r;
        },
      });
    },
  },
]);
