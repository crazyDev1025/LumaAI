"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8510],
  {
    7022: function (e, t, n) {
      n.d(t, {
        H: function () {
          return c;
        },
        Jj: function () {
          return d;
        },
        L5: function () {
          return r;
        },
        pD: function () {
          return i;
        },
      });
      var a,
        r,
        i,
        o = n(89956),
        s = n(83112);
      let c = "https://api.lumalabs.ai",
        d = (e) => {
          let [t, n] = (0, s.useState)("https://lumalabs.ai/api/keys");
          return (
            (0, s.useEffect)(() => {
              n(window.location.href);
            }, []),
            ""
              .concat(c, "/api/users/v1/login/")
              .concat(e, "?internal_redirect_url=")
              .concat(encodeURIComponent(t))
          );
        };
      !(function (e) {
        async function t() {
          let e = await o.Z.get("".concat(c, "/api/users/v1/me/check"), {
            withCredentials: !0,
          });
          return (null == e ? void 0 : e.data) === !1
            ? null
            : o.Z.get("".concat(c, "/api/users/v1/me"), {
                withCredentials: !0,
              }).then((e) => e.data);
        }
        (e.getDownloadUrl = function (e) {
          return o.Z.get(
            ""
              .concat(c, "/api/photon/v1/generations/")
              .concat(e, "/download_video_url"),
            { withCredentials: !0 }
          );
        }),
          (e.setExperimentPreference = function (e, t, n) {
            return o.Z.put(
              "".concat(c, "/api/photon/v1/batches/").concat(e, "/preference"),
              { gen_id: t, tie: n },
              { withCredentials: !0 }
            );
          }),
          (e.getExperimentPreference = function (e) {
            return o.Z.get(
              "".concat(c, "/api/photon/v1/batches/").concat(e, "/preference"),
              { withCredentials: !0 }
            ).then((e) => e.data);
          }),
          (e.vote = function (e, t) {
            return o.Z.post(
              "".concat(c, "/api/photon/v1/generations/").concat(e, "/vote"),
              { liked: t },
              { withCredentials: !0 }
            );
          }),
          (e.banner = function () {
            return o.Z.get(
              "".concat(c, "/api/config/v1/public/?name=dream_machine_banner"),
              { withCredentials: !0 }
            ).then((e) => e.data);
          }),
          (e.currentUser = t),
          (e.loggedIn = function () {
            return o.Z.get("".concat(c, "/api/users/v1/me/check"), {
              withCredentials: !0,
            }).then((e) => e.data);
          }),
          (e.deleteAccount = function () {
            return o.Z.delete("".concat(c, "/api/users/v1/me"), {
              withCredentials: !0,
            });
          }),
          (e.signOut = function () {
            return o.Z.post(
              "".concat(c, "/api/users/v1/logout"),
              {},
              { withCredentials: !0 }
            );
          }),
          (e.getCurrentUserUsage = function () {
            return o.Z.get("".concat(c, "/api/photon/v1/subscription/usage"), {
              withCredentials: !0,
            }).then((e) => e.data);
          }),
          (e.getSubscriptionPlans = function () {
            return o.Z.get("".concat(c, "/api/photon/v1/subscription/plans"), {
              withCredentials: !0,
            }).then((e) => e.data);
          }),
          (e.getBundles = function () {
            return o.Z.get(
              "".concat(c, "/api/photon/v1/subscription/bundles"),
              { withCredentials: !0 }
            ).then((e) => e.data);
          }),
          (e.deleteGeneration = function (e) {
            return o.Z.delete(
              "".concat(c, "/api/photon/v1/generations/").concat(e),
              { withCredentials: !0 }
            );
          }),
          (e.getStripeUrl = function (e, t, n) {
            return o.Z.get("".concat(c, "/api/photon/v1/subscription/url"), {
              params: {
                tier: e,
                return_url: t,
                timeframe: n ? "yearly" : "monthly",
              },
              withCredentials: !0,
            }).then((e) => e.data);
          }),
          (e.getStripeBundleUrl = function (e, t) {
            return o.Z.get("".concat(c, "/api/photon/v1/subscription/url"), {
              params: { bundle: t, return_url: e },
              withCredentials: !0,
            }).then((e) => e.data);
          }),
          (e.getGenerations = function (e) {
            let { offset: t, limit: n } = e;
            return o.Z.get("".concat(c, "/api/photon/v1/user/generations/"), {
              params: { offset: t, limit: n },
              withCredentials: !0,
            }).then((e) => e.data);
          }),
          (e.generate = function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return o.Z.post(
              "".concat(c, "/api/photon/v1/generations/"),
              {
                experiment: e.experiment,
                user_prompt: e.prompt,
                image_url: e.imageUrl,
                image_end_url: e.endImageUrl,
                expand_prompt: e.expandPrompt,
                loop: e.loop,
                ...(t ? { aspect_ratio: "16:9" } : {}),
              },
              { withCredentials: !0 }
            ).then((e) => e.data);
          }),
          (e.extendGeneration = function (e) {
            return o.Z.post(
              ""
                .concat(c, "/api/photon/v1/generations/")
                .concat(e.id, "/extend"),
              {
                experiment: e.experiment,
                user_prompt: e.prompt,
                expand_prompt: e.expandPrompt,
                image_url: e.imageUrl,
                image_end_url: e.imageUrl,
                loop: e.loop,
              },
              { withCredentials: !0 }
            ).then((e) => e.data);
          }),
          (e.getGenerationState = function (e) {
            return o.Z.get(
              "".concat(c, "/api/photon/v1/generations/").concat(e),
              { withCredentials: !0 }
            ).then((e) => e.data);
          }),
          (e.getSignedUpload = function () {
            return o.Z.post(
              "".concat(c, "/api/photon/v1/generations/file_upload"),
              {},
              {
                withCredentials: !0,
                params: { file_type: "image", filename: "file.jpg" },
              }
            ).then((e) => e.data);
          });
      })(r || (r = {})),
        ((a = i || (i = {})).getApiKeys = function (e) {
          let { limit: t, offset: n } = e;
          return o.Z.get("".concat(c, "/dream-machine/console/keys"), {
            withCredentials: !0,
            params: { limit: t, offset: n },
          });
        }),
        (a.createApiKey = function (e) {
          let { name: t } = e;
          return o.Z.post(
            "".concat(c, "/dream-machine/console/keys"),
            { name: t },
            { withCredentials: !0 }
          );
        }),
        (a.deleteApiKey = function (e) {
          return o.Z.delete(
            "".concat(c, "/dream-machine/console/keys/").concat(e),
            { withCredentials: !0 }
          );
        }),
        (a.updateApiKey = function (e, t) {
          return o.Z.put(
            "".concat(c, "/dream-machine/console/keys/").concat(e),
            { name: t },
            { withCredentials: !0 }
          );
        }),
        (a.activateBilling = function () {
          return o.Z.post(
            "".concat(c, "/api/billing/v1/activate"),
            {},
            { withCredentials: !0 }
          );
        }),
        (a.getBillingDashboardUrl = function (e) {
          return o.Z.post(
            "".concat(c, "/api/billing/v1/dashboard-url"),
            { dashboard: e },
            { withCredentials: !0 }
          );
        }),
        (a.getCreditSettings = function () {
          return o.Z.get("".concat(c, "/api/billing/v1/credit-settings"), {
            withCredentials: !0,
          });
        }),
        (a.initiateCreditGrant = function (e, t, n) {
          return o.Z.post(
            "".concat(c, "/api/billing/v1/initiate-credit-grant"),
            {
              amount_in_cents: e,
              stripe_payment_method_id: t,
              redirect_url: n,
            },
            { withCredentials: !0 }
          );
        }),
        (a.updateRechargeSettings = function (e, t, n, a, r) {
          return o.Z.patch(
            "".concat(c, "/api/billing/v1/credit-settings/recharge-settings"),
            {
              enabled: e,
              recharge_to_amount: t,
              recharge_threshold: n,
              stripe_payment_method_id: a,
              redirect_url: r,
            },
            { withCredentials: !0 }
          );
        }),
        (a.getPaymentMethods = function () {
          return o.Z.get("".concat(c, "/api/billing/v1/payment-methods"), {
            withCredentials: !0,
          });
        }),
        (a.addPaymentMethod = function (e) {
          return o.Z.post(
            "".concat(c, "/api/billing/v1/payment-methods"),
            { payment_method_id: e },
            { withCredentials: !0 }
          );
        }),
        (a.removePaymentMethod = function (e) {
          return o.Z.delete(
            "".concat(c, "/api/billing/v1/payment-methods/").concat(e),
            { withCredentials: !0 }
          );
        }),
        (a.getStripeBillingUrl = function (e) {
          return o.Z.get("".concat(c, "/api/billing/v1/portal-url"), {
            params: { return_url: e },
            withCredentials: !0,
          }).then((e) => e.data);
        }),
        (a.redeemCoupon = function (e) {
          return o.Z.post(
            "".concat(c, "/dream-machine/console/coupons/redeem"),
            { code: e },
            { withCredentials: !0 }
          );
        });
    },
    28952: function (e, t, n) {
      n.d(t, {
        u: function () {
          return r;
        },
      });
      var a = n(20209);
      function r(e) {
        let { theme: t = "dark", ...n } = e,
          r = "dark" === t ? "white" : "black";
        return (0, a.jsxs)("svg", {
          width: "25",
          height: "29",
          viewBox: "0 0 25 29",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...n,
          children: [
            (0, a.jsxs)("g", {
              clipPath: "url(#clip0_1784_519)",
              children: [
                (0, a.jsx)("path", {
                  d: "M12.3891 28.61L0 21.4568L12.3891 14.3037L24.7781 21.4568L12.3891 28.61Z",
                  fill: r,
                  fillOpacity: 0.66,
                }),
                (0, a.jsx)("path", {
                  d: "M0 7.15157L12.3891 0V28.611L0 21.4578V7.15157Z",
                  fill: r,
                  fillOpacity: 0.66,
                }),
              ],
            }),
            (0, a.jsx)("defs", {
              children: (0, a.jsx)("clipPath", {
                id: "clip0_1784_519",
                children: (0, a.jsx)("rect", {
                  width: "25",
                  height: "29",
                  fill: r,
                }),
              }),
            }),
          ],
        });
      }
    },
    45669: function (e, t, n) {
      n.d(t, {
        bT: function () {
          return i;
        },
        o_: function () {
          return o;
        },
      });
      var a = n(65156),
        r = n(7022);
      function i() {
        return (0, a.useQuery)({
          queryKey: ["currentUser"],
          retry: !1,
          queryFn: r.L5.currentUser,
          refetchOnWindowFocus: !1,
        });
      }
      function o(e) {
        let t = i();
        if (t.isLoading) return null;
        if (t.isError || null == t.data) return !1;
        {
          var n;
          let a = t.data,
            r =
              null == a
                ? void 0
                : null === (n = a.feature_flags) || void 0 === n
                ? void 0
                : n.dream_machine_launch;
          return (null == r ? void 0 : r[e]) === !0;
        }
      }
    },
    47952: function (e, t, n) {
      n.d(t, {
        d: function () {
          return c;
        },
        z: function () {
          return d;
        },
      });
      var a = n(20209),
        r = n(55369),
        i = n(90345),
        o = n(83112),
        s = n(63268);
      let c = (0, i.j)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                  "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        d = o.forwardRef((e, t) => {
          let { className: n, variant: i, size: o, asChild: d = !1, ...l } = e,
            u = d ? r.g7 : "button";
          return (0, a.jsx)(u, {
            className: (0, s.cn)(c({ variant: i, size: o, className: n })),
            ref: t,
            ...l,
          });
        });
      d.displayName = "Button";
    },
    16543: function (e, t, n) {
      n.d(t, {
        $F: function () {
          return d;
        },
        AW: function () {
          return l;
        },
        Ju: function () {
          return f;
        },
        VD: function () {
          return m;
        },
        Xi: function () {
          return u;
        },
        bO: function () {
          return p;
        },
        h_: function () {
          return c;
        },
      });
      var a = n(20209),
        r = n(93667),
        i = n(71386),
        o = n(83112),
        s = n(63268);
      let c = r.fC,
        d = r.xz;
      r.ZA,
        r.Uv,
        r.Tr,
        r.Ee,
        (o.forwardRef((e, t) => {
          let { className: n, inset: o, children: c, ...d } = e;
          return (0, a.jsxs)(r.fF, {
            ref: t,
            className: (0, s.cn)(
              "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
              o && "pl-8",
              n
            ),
            ...d,
            children: [c, (0, a.jsx)(i.XCv, { className: "ml-auto h-4 w-4" })],
          });
        }).displayName = r.fF.displayName),
        (o.forwardRef((e, t) => {
          let { className: n, ...i } = e;
          return (0, a.jsx)(r.tu, {
            ref: t,
            className: (0, s.cn)(
              "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              n
            ),
            ...i,
          });
        }).displayName = r.tu.displayName);
      let l = o.forwardRef((e, t) => {
        let { className: n, sideOffset: i = 4, ...o } = e;
        return (0, a.jsx)(r.Uv, {
          children: (0, a.jsx)(r.VY, {
            ref: t,
            sideOffset: i,
            className: (0, s.cn)(
              "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              n
            ),
            ...o,
          }),
        });
      });
      l.displayName = r.VY.displayName;
      let u = o.forwardRef((e, t) => {
        let { className: n, inset: i, ...o } = e;
        return (0, a.jsx)(r.ck, {
          ref: t,
          className: (0, s.cn)(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            i && "pl-8",
            n
          ),
          ...o,
        });
      });
      u.displayName = r.ck.displayName;
      let p = o.forwardRef((e, t) => {
        let { className: n, children: o, checked: c, ...d } = e;
        return (0, a.jsxs)(r.oC, {
          ref: t,
          className: (0, s.cn)(
            "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            n
          ),
          checked: c,
          ...d,
          children: [
            (0, a.jsx)("span", {
              className:
                "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
              children: (0, a.jsx)(r.wU, {
                children: (0, a.jsx)(i.nQG, { className: "h-4 w-4" }),
              }),
            }),
            o,
          ],
        });
      });
      (p.displayName = r.oC.displayName),
        (o.forwardRef((e, t) => {
          let { className: n, children: o, ...c } = e;
          return (0, a.jsxs)(r.Rk, {
            ref: t,
            className: (0, s.cn)(
              "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
              n
            ),
            ...c,
            children: [
              (0, a.jsx)("span", {
                className:
                  "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: (0, a.jsx)(r.wU, {
                  children: (0, a.jsx)(i.jXb, {
                    className: "h-4 w-4 fill-current",
                  }),
                }),
              }),
              o,
            ],
          });
        }).displayName = r.Rk.displayName);
      let f = o.forwardRef((e, t) => {
        let { className: n, inset: i, ...o } = e;
        return (0, a.jsx)(r.__, {
          ref: t,
          className: (0, s.cn)(
            "px-2 py-1.5 text-sm font-semibold",
            i && "pl-8",
            n
          ),
          ...o,
        });
      });
      f.displayName = r.__.displayName;
      let m = o.forwardRef((e, t) => {
        let { className: n, ...i } = e;
        return (0, a.jsx)(r.Z0, {
          ref: t,
          className: (0, s.cn)("-mx-1 my-1 h-px bg-muted", n),
          ...i,
        });
      });
      m.displayName = r.Z0.displayName;
    },
    63268: function (e, t, n) {
      n.d(t, {
        cn: function () {
          return i;
        },
      });
      var a = n(61237),
        r = n(41013);
      function i() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, r.m6)((0, a.W)(t));
      }
    },
  },
]);
