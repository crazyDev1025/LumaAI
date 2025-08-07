(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2345],
  {
    85046: function (n, e, r) {
      Promise.resolve().then(r.bind(r, 14011));
    },
    14011: function (n, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return s;
          },
        });
      var c = r(20209),
        i = r(86994),
        t = r.n(i),
        u = r(65156);
      function l(n) {
        let { children: e } = n;
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(t(), {
              id: "b8f0900668ca6294",
              children: "body{background:#f1f1f1}",
            }),
            (0, c.jsx)("div", {
              className: "jsx-b8f0900668ca6294 w-full bg-[#F1F1F1]",
              children: (0, c.jsx)("div", {
                className: "jsx-b8f0900668ca6294 mx-auto w-full pt-[120px]",
                children: e,
              }),
            }),
          ],
        });
      }
      function s(n) {
        let { children: e } = n,
          r = new u.QueryClient();
        return (0, c.jsx)(u.QueryClientProvider, {
          client: r,
          children: (0, c.jsx)(l, { children: e }),
        });
      }
    },
  },
  function (n) {
    n.O(0, [5156, 6994, 8296, 1124, 1744], function () {
      return n((n.s = 85046));
    }),
      (_N_E = n.O());
  },
]);
