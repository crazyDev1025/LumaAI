(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5814],
  {
    70714: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 20212)),
        Promise.resolve().then(n.t.bind(n, 23113, 23)),
        Promise.resolve().then(n.t.bind(n, 53093, 23));
    },
    20212: function (e, t, n) {
      "use strict";
      var r = n(20209),
        a = n(96156),
        o = n(2565),
        i = n(58627),
        c = n(83112),
        s = n(2344),
        l = n(88728),
        u = n(98869),
        d = n(80517),
        p = n(95834),
        h = n(2585);
      let w = async (e) => {
        e && (await window.clarity("identify", e));
      };
      t.default = () => {
        let { loggedIn: e, user: t } = (0, s.R)(u.Mz),
          [n, g] = (0, c.useState)(!1),
          f = async (e) => {
            w(e);
          },
          v = async () => {
            f(t.uuid);
          },
          y = async () => {
            try {
              var e;
              let t = (0, p.ej)("user");
              if ((t && (u.Mz.user = JSON.parse(t)), !(await (0, d.hP)())))
                return;
              let n = await (0, h.PR)();
              u.Mz.user = n;
              let r = new Date(Date.now());
              r.setDate(r.getDate() + 7),
                (0, p.d8)("user", JSON.stringify(n), {
                  expires: r,
                  secure: !0,
                  path: "/",
                }),
                f(
                  null !== (e = null == n ? void 0 : n.uuid) && void 0 !== e
                    ? e
                    : void 0
                );
            } catch (e) {}
          };
        return (
          (0, c.useEffect)(() => {
            n || (e ? v() : y(), g(!0));
          }, [e, n]),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(l.Z, {}),
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(a.GoogleTagManager, { gtmId: "GTM-NRN8VZGM" }),
                  (0, r.jsx)(o.Analytics, {}),
                  (0, r.jsx)(i.default, {
                    id: "microsoft-clarity",
                    dangerouslySetInnerHTML: {
                      __html:
                        '\n(function(c,l,a,r,i,t,y){\n    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};\n    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;\n    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);\n})(window, document, "clarity", "script", "hg61ecjlky");\n',
                    },
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    2585: function (e, t, n) {
      "use strict";
      n.d(t, {
        CI: function () {
          return y;
        },
        F7: function () {
          return w;
        },
        LJ: function () {
          return d;
        },
        PR: function () {
          return u;
        },
        V3: function () {
          return E;
        },
        V5: function () {
          return m;
        },
        Vp: function () {
          return f;
        },
        XH: function () {
          return p;
        },
        bE: function () {
          return S;
        },
        hh: function () {
          return v;
        },
        mE: function () {
          return g;
        },
        me: function () {
          return h;
        },
        oX: function () {
          return P;
        },
        pQ: function () {
          return k;
        },
        sk: function () {
          return b;
        },
      });
      var r,
        a,
        o = n(98869),
        i = n(80517),
        c = n(40660),
        s = n(7922);
      let l = "https://webapp.engineeringlumalabs.com",
        u = async () => {
          try {
            let e = await (0, i.hP)(),
              t = await fetch("".concat(l, "/api/v3/users/info"), {
                headers: { Authorization: e },
              }),
              n = await t.json(),
              r = n.reason;
            if (r) throw r;
            return n.response;
          } catch (e) {
            throw (
              (console.error("Error getting user"),
              console.error(e),
              "Error getting user")
            );
          }
        },
        d = async (e) => {
          let {
            text: t,
            linkedCreations: n,
            seed: r,
            negativePrompt: a,
            previousSeeds: o,
            abortController: u,
          } = e;
          try {
            let e = null == u ? void 0 : u.signal,
              c = await (0, i.hP)(),
              d = s.AI.geniePreview,
              p = {
                input: {
                  text: t,
                  type: d,
                  jobParams:
                    r || a || o
                      ? { seed: r, negativePrompt: a, previousSeeds: o }
                      : void 0,
                },
                linkedCreations: n,
                client: s.uD.web,
              },
              h = new Headers();
            h.append("Content-Type", "application/json"),
              h.append("Authorization", c);
            let w = await fetch("".concat(l, "/api/v3/creations"), {
                method: "POST",
                headers: h,
                body: JSON.stringify(p),
                signal: e,
              }),
              g = await w.json(),
              f = g.response,
              v = g.reason;
            if (v) throw v;
            return f;
          } catch (e) {
            throw (
              (console.error("Error creating text to 3d creations"),
              console.error(e),
              (0, c.wY)(e))
            );
          }
        },
        p = async (e) => {
          let { uuid: t, text: n, seed: r, negativePrompt: a } = e;
          try {
            let e;
            if ((r && (e = { seed: r }), a)) {
              var o;
              e = {
                ...(null !== (o = null == e ? void 0 : e.seed) && void 0 !== o
                  ? o
                  : {}),
                negativePrompt: a,
              };
            }
            let c = {
                input: {
                  uuid: t,
                  text: n,
                  type: s.AI.genieRefine,
                  jobParams: e,
                },
                client: s.uD.web,
              },
              u = await (0, i.hP)(),
              d = new Headers();
            d.append("Content-Type", "application/json"),
              d.append("Authorization", u);
            let p = await fetch("".concat(l, "/api/v3/creations"), {
                method: "POST",
                headers: d,
                body: JSON.stringify(c),
              }),
              h = await p.json(),
              w = h.response,
              g = h.reason;
            if (g) throw g;
            return w;
          } catch (e) {
            throw (
              (console.error("Error creating preview to refine 3d creation"),
              console.error(e),
              (0, c.wY)(e))
            );
          }
        },
        h = async (e) => {
          let { uuid: t, abortController: n } = e;
          try {
            let e = null == n ? void 0 : n.signal,
              r = await fetch(
                "".concat(l, "/api/v3/creations/uuid/").concat(t),
                { signal: e }
              );
            return (await r.json()).response;
          } catch (e) {
            throw (
              (console.error("Error getting creation"),
              console.error(e),
              (0, c.wY)(e))
            );
          }
        },
        w = async (e) => {
          try {
            var t;
            let {
                skip: n,
                take: r,
                uuid: a,
                order: c,
                type: s,
                sort: u,
                status: d,
              } = null != e ? e : {},
              p =
                null == e
                  ? void 0
                  : null === (t = e.abortController) || void 0 === t
                  ? void 0
                  : t.signal;
            if (!o.Mz.loggedIn) throw "Not logged in";
            let h = await (0, i.hP)(),
              w = new URL("".concat(l, "/api/v3/my/creations")),
              g = new URLSearchParams();
            n && g.append("skip", n.toString()),
              r && g.append("take", r.toString()),
              a && g.append("uuid", a),
              c && g.append("sort_order", c),
              s && g.append("type", s),
              u && g.append("sort_by", u),
              d && g.append("status", d),
              (w.search = g.toString());
            let f = await fetch(w.toString(), {
              headers: { Authorization: h },
              signal: p,
            });
            return await f.json();
          } catch (e) {
            throw (
              (console.error("Error getting creations"),
              console.error(e),
              (0, c.wY)(e))
            );
          }
        },
        g = () => Math.round(1073741823 * Math.random()),
        f = async (e) => {
          let { uuid: t, convert: n } = e;
          try {
            var r,
              a,
              o,
              i = new Headers();
            i.append("Content-Type", "application/json");
            let e = await fetch(
                "".concat(
                  "https://webapp.engineeringlumalabs.com",
                  "/api/v3/creations/convert"
                ),
                {
                  method: "POST",
                  body: JSON.stringify({
                    input: { uuid: t, type: "blender_convert", convert: n },
                    linkedCreations: [],
                  }),
                  headers: i,
                  redirect: "follow",
                }
              ),
              c = await e.json();
            if (null == c ? void 0 : c.reason) throw c.reason;
            return null == c
              ? void 0
              : null === (o = c.response) || void 0 === o
              ? void 0
              : null === (a = o.uploaded_files) || void 0 === a
              ? void 0
              : null === (r = a[0]) || void 0 === r
              ? void 0
              : r.file_url;
          } catch (e) {
            throw "Error converting 3d model";
          }
        },
        v = async (e) => {
          try {
            var t;
            let { skip: n, take: r } = null != e ? e : {},
              a =
                null == e
                  ? void 0
                  : null === (t = e.abortController) || void 0 === t
                  ? void 0
                  : t.signal,
              o = new URL("".concat(l, "/api/v3/creations/featured")),
              i = new URLSearchParams();
            n && i.append("skip", n.toString()),
              i.append("take", "100"),
              i.append("type", s.AI.genieRefine),
              (o.search = i.toString());
            let c = await fetch(o.toString(), { signal: a });
            return await c.json();
          } catch (e) {
            throw (
              (console.error("Error getting featured creations"),
              console.error(e),
              (0, c.wY)(e))
            );
          }
        },
        y = async (e, t) => {
          try {
            if (o.Mz.loggedIn) {
              let n = await (0, i.hP)();
              await fetch(
                ""
                  .concat(
                    "https://webapp.engineeringlumalabs.com",
                    "/api/v3/creations/action?uuid="
                  )
                  .concat(e, "&action=")
                  .concat(t ? s.lS.like : s.lS.dislike),
                { method: "POST", headers: { Authorization: n } }
              );
            } else
              await fetch(
                ""
                  .concat(
                    "https://webapp.engineeringlumalabs.com",
                    "/api/v3/creations/like?uuid="
                  )
                  .concat(e, "&add=")
                  .concat(t ? "true" : "false"),
                { method: "POST" }
              );
            localStorage.setItem(
              "LUMA_GENIE_LIKE_DISLIKE_ALREADY_ADDED_".concat(e),
              "true"
            );
          } catch (e) {
            console.log(
              "Error "
                .concat(t ? "liking" : "disliking", " creation: ")
                .concat(e)
            );
          }
        },
        m = (e) => {
          var t;
          return (
            "true" ===
            (null !==
              (t = localStorage.getItem(
                "LUMA_GENIE_LIKE_DISLIKE_ALREADY_ADDED_".concat(e)
              )) && void 0 !== t
              ? t
              : "false")
          );
        },
        b = async (e) => {
          try {
            await fetch(
              ""
                .concat(
                  "https://webapp.engineeringlumalabs.com",
                  "/api/v3/creations/view?uuid="
                )
                .concat(e),
              { method: "POST" }
            );
          } catch (e) {
            console.log("Error adding view for creation: ".concat(e));
          }
        },
        E = async (e) => {
          let { name: t } = e;
          return new Promise((e, n) => {
            navigator.locks.request(
              "createToken",
              { mode: "exclusive" },
              async () => {
                try {
                  let n = await (0, i.hP)(),
                    r = await fetch(
                      "".concat(
                        "https://webapp.engineeringlumalabs.com",
                        "/api/v3/apiDashboard"
                      ),
                      {
                        method: "POST",
                        headers: {
                          Authorization: n,
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ name: t }),
                      }
                    ),
                    a = await r.json();
                  if (null == a ? void 0 : a.reason) throw a.reason;
                  e(null == a ? void 0 : a.response);
                } catch (e) {
                  return (0, c.wY)(e);
                }
              }
            );
          });
        },
        S = async (e) => {
          let { take: t, skip: n } = e;
          return new Promise((e, r) => {
            navigator.locks.request(
              "viewTokens",
              { mode: "exclusive" },
              async () => {
                try {
                  let r = await (0, i.hP)(),
                    a = await fetch(
                      ""
                        .concat(
                          "https://webapp.engineeringlumalabs.com",
                          "/api/v3/apiDashboard?take="
                        )
                        .concat(t, "&skip=")
                        .concat(n),
                      {
                        method: "GET",
                        headers: {
                          Authorization: r,
                          "Content-Type": "application/json",
                        },
                      }
                    ),
                    o = await a.json();
                  if (null == o ? void 0 : o.reason) throw o.reason;
                  e({
                    response: null == o ? void 0 : o.response,
                    isMoreAvailable: null == o ? void 0 : o.isMoreAvailable,
                  });
                } catch (e) {
                  r((0, c.wY)(e));
                }
              }
            );
          });
        },
        k = async (e) => {
          let { uuid: t } = e;
          return new Promise((e, n) => {
            navigator.locks.request(
              "deleteToken",
              { mode: "exclusive" },
              async () => {
                try {
                  let n = await (0, i.hP)(),
                    r = await fetch(
                      ""
                        .concat(
                          "https://webapp.engineeringlumalabs.com",
                          "/api/v3/apiDashboard/"
                        )
                        .concat(t),
                      {
                        method: "DELETE",
                        headers: {
                          Authorization: n,
                          "Content-Type": "application/json",
                        },
                      }
                    ),
                    a = await r.json();
                  if (null == a ? void 0 : a.reason) throw a.reason;
                  e(!0);
                } catch (e) {
                  return (0, c.wY)(e);
                }
              }
            );
          });
        };
      ((r = a || (a = {})).usage = "usage"),
        (r.invoices = "invoices"),
        (r.credits = "credits");
      let P = async () => {
        try {
          let e = await (0, i.hP)();
          if (!e) return !1;
          let t = await fetch(
              "".concat(
                "https://webapp.engineeringlumalabs.com",
                "/api/v3/apiDashboard/checkAccess"
              ),
              {
                method: "POST",
                headers: {
                  Authorization: e,
                  "Content-Type": "application/json",
                },
              }
            ),
            n = await t.json();
          if (null == n ? void 0 : n.reason) throw n.reason;
          return !0;
        } catch (e) {
          return !1;
        }
      };
    },
    7922: function (e, t, n) {
      "use strict";
      var r, a, o, i, c, s, l, u, d, p, h, w, g, f, v, y, m, b;
      n.d(t, {
        AI: function () {
          return a;
        },
        Bx: function () {
          return s;
        },
        hS: function () {
          return i;
        },
        lS: function () {
          return u;
        },
        q5: function () {
          return l;
        },
        uD: function () {
          return d;
        },
      }),
        ((p = r || (r = {})).ASCENDING = "ASC"),
        (p.DESCENDING = "DESC"),
        ((h = a || (a = {})).geniePreview = "imagine_3d_one"),
        (h.genieRefine = "imagine_refine_3d1"),
        (h.blenderConvert3D = "blender_convert"),
        ((w = o || (o = {})).likes = "likes"),
        (w.views = "views"),
        (w.shares = "shares"),
        (w.downloads = "downloads"),
        (w.createdAt = "createdAt"),
        (w.updatedAt = "updatedAt"),
        ((g = i || (i = {})).created = "created"),
        (g.queued = "queued"),
        (g.running = "running"),
        (g.completed = "completed"),
        (g.failed = "failed"),
        (g.terminated = "terminated"),
        (g.zombie = "zombie"),
        ((f = c || (c = {})).success = "success"),
        (f.error = "error"),
        ((v = s || (s = {})).fbx = "fbx"),
        (v.gltf = "gltf"),
        (v.usdz = "usdz"),
        (v.blend = "blend"),
        (v.stl = "stl"),
        (v.obj = "obj"),
        ((y = l || (l = {})).low = "low"),
        (y.med = "med"),
        (y.high = "high"),
        ((m = u || (u = {})).like = "like"),
        (m.dislike = "dislike"),
        (m.view = "view"),
        (m.share = "share"),
        (m.download = "download"),
        ((b = d || (d = {})).discord = "discord"),
        (b.ios = "ios"),
        (b.web = "web"),
        (b.android = "android"),
        (b.api = "api");
    },
    23113: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        2311, 5062, 6545, 4674, 6448, 3414, 6746, 7269, 9956, 8720, 3093, 5645,
        4786, 2940, 4613, 3699, 8296, 1124, 1744,
      ],
      function () {
        return e((e.s = 70714));
      }
    ),
      (_N_E = e.O());
  },
]);
