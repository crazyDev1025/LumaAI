(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5187],
  {
    11412: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 24610)),
        Promise.resolve().then(t.bind(t, 74850)),
        Promise.resolve().then(t.bind(t, 27286)),
        Promise.resolve().then(t.bind(t, 54094)),
        Promise.resolve().then(t.bind(t, 69437)),
        Promise.resolve().then(t.t.bind(t, 86746, 23));
    },
    74850: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return i;
        },
      });
      var r = t(20209),
        s = t(83112);
      function i(e) {
        let { children: n } = e,
          [t, i] = (0, s.useState)(!0),
          o = (0, s.useRef)(null);
        return (
          (0, s.useEffect)(() => {
            let e = new AbortController(),
              n = () => {
                o.current &&
                  (window.scrollY - o.current.offsetHeight + 56 >= 0
                    ? t || i(!0)
                    : t && i(!1));
              };
            return (
              window.addEventListener("scroll", n, { signal: e.signal }),
              n(),
              () => {
                e.abort();
              }
            );
          }, [t]),
          (0, r.jsx)("div", {
            ref: o,
            className: "dark relative z-20",
            style: t
              ? {
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                  pointerEvents: "none",
                }
              : {},
            children: n,
          })
        );
      }
    },
    46066: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return s.a;
        },
      });
      var r = t(86746),
        s = t.n(r);
    },
  },
  function (e) {
    e.O(
      0,
      [3414, 6746, 4137, 2573, 8720, 9177, 4610, 8296, 1124, 1744],
      function () {
        return e((e.s = 11412));
      }
    ),
      (_N_E = e.O());
  },
]);
