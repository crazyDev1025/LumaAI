"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3667],
  {
    71417: function (e, r, t) {
      t.d(r, {
        gm: function () {
          return a;
        },
      });
      var n = t(83112);
      t(20209);
      var o = n.createContext(void 0);
      function a(e) {
        let r = n.useContext(o);
        return e || r || "ltr";
      }
    },
    93667: function (e, r, t) {
      t.d(r, {
        oC: function () {
          return rH;
        },
        VY: function () {
          return rz;
        },
        ZA: function () {
          return rG;
        },
        ck: function () {
          return rU;
        },
        wU: function () {
          return rZ;
        },
        __: function () {
          return rB;
        },
        Uv: function () {
          return rV;
        },
        Ee: function () {
          return rX;
        },
        Rk: function () {
          return rY;
        },
        fC: function () {
          return rK;
        },
        Z0: function () {
          return r$;
        },
        Tr: function () {
          return rq;
        },
        tu: function () {
          return rQ;
        },
        fF: function () {
          return rJ;
        },
        xz: function () {
          return rW;
        },
      });
      var n = t(83112),
        o = t(12469),
        a = t(63896),
        i = t(4307),
        l = t(25841),
        u = t(6178),
        d = t(55369),
        s = t(20209);
      function c(e) {
        let r = e + "CollectionProvider",
          [t, o] = (0, i.b)(r),
          [l, u] = t(r, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          c = (e) => {
            let { scope: r, children: t } = e,
              o = n.useRef(null),
              a = n.useRef(new Map()).current;
            return (0, s.jsx)(l, {
              scope: r,
              itemMap: a,
              collectionRef: o,
              children: t,
            });
          };
        c.displayName = r;
        let f = e + "CollectionSlot",
          p = n.forwardRef((e, r) => {
            let { scope: t, children: n } = e,
              o = u(f, t),
              i = (0, a.e)(r, o.collectionRef);
            return (0, s.jsx)(d.g7, { ref: i, children: n });
          });
        p.displayName = f;
        let v = e + "CollectionItemSlot",
          h = "data-radix-collection-item",
          m = n.forwardRef((e, r) => {
            let { scope: t, children: o, ...i } = e,
              l = n.useRef(null),
              c = (0, a.e)(r, l),
              f = u(v, t);
            return (
              n.useEffect(
                () => (
                  f.itemMap.set(l, { ref: l, ...i }),
                  () => void f.itemMap.delete(l)
                )
              ),
              (0, s.jsx)(d.g7, { [h]: "", ref: c, children: o })
            );
          });
        return (
          (m.displayName = v),
          [
            { Provider: c, Slot: p, ItemSlot: m },
            function (r) {
              let t = u(e + "CollectionConsumer", r);
              return n.useCallback(() => {
                let e = t.collectionRef.current;
                if (!e) return [];
                let r = Array.from(e.querySelectorAll("[".concat(h, "]")));
                return Array.from(t.itemMap.values()).sort(
                  (e, t) => r.indexOf(e.ref.current) - r.indexOf(t.ref.current)
                );
              }, [t.collectionRef, t.itemMap]);
            },
            o,
          ]
        );
      }
      var f = t(71417),
        p = t(46603),
        v = t(60074),
        h = t(90106),
        m = t(11447),
        g = t(12823),
        w = t(32017),
        x = "undefined" != typeof document ? n.useLayoutEffect : n.useEffect;
      function y(e, r) {
        let t, n, o;
        if (e === r) return !0;
        if (typeof e != typeof r) return !1;
        if ("function" == typeof e && e.toString() === r.toString()) return !0;
        if (e && r && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((t = e.length) !== r.length) return !1;
            for (n = t; 0 != n--; ) if (!y(e[n], r[n])) return !1;
            return !0;
          }
          if ((t = (o = Object.keys(e)).length) !== Object.keys(r).length)
            return !1;
          for (n = t; 0 != n--; )
            if (!{}.hasOwnProperty.call(r, o[n])) return !1;
          for (n = t; 0 != n--; ) {
            let t = o[n];
            if (("_owner" !== t || !e.$$typeof) && !y(e[t], r[t])) return !1;
          }
          return !0;
        }
        return e != e && r != r;
      }
      function b(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function M(e, r) {
        let t = b(e);
        return Math.round(r * t) / t;
      }
      function R(e) {
        let r = n.useRef(e);
        return (
          x(() => {
            r.current = e;
          }),
          r
        );
      }
      let C = (e) => ({
          name: "arrow",
          options: e,
          fn(r) {
            let { element: t, padding: n } = "function" == typeof e ? e(r) : e;
            return t && {}.hasOwnProperty.call(t, "current")
              ? null != t.current
                ? (0, g.x7)({ element: t.current, padding: n }).fn(r)
                : {}
              : t
              ? (0, g.x7)({ element: t, padding: n }).fn(r)
              : {};
          },
        }),
        j = (e, r) => ({ ...(0, g.cv)(e), options: [e, r] }),
        D = (e, r) => ({ ...(0, g.uY)(e), options: [e, r] }),
        P = (e, r) => ({ ...(0, g.dr)(e), options: [e, r] }),
        k = (e, r) => ({ ...(0, g.RR)(e), options: [e, r] }),
        S = (e, r) => ({ ...(0, g.dp)(e), options: [e, r] }),
        _ = (e, r) => ({ ...(0, g.Cp)(e), options: [e, r] }),
        A = (e, r) => ({ ...C(e), options: [e, r] });
      var I = n.forwardRef((e, r) => {
        let { children: t, width: n = 10, height: o = 5, ...a } = e;
        return (0, s.jsx)(u.WV.svg, {
          ...a,
          ref: r,
          width: n,
          height: o,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild
            ? t
            : (0, s.jsx)("polygon", { points: "0,0 30,0 15,10" }),
        });
      });
      I.displayName = "Arrow";
      var E = t(12945),
        T = t(91917),
        O = t(54527),
        N = "Popper",
        [F, L] = (0, i.b)(N),
        [K, W] = F(N),
        V = (e) => {
          let { __scopePopper: r, children: t } = e,
            [o, a] = n.useState(null);
          return (0, s.jsx)(K, {
            scope: r,
            anchor: o,
            onAnchorChange: a,
            children: t,
          });
        };
      V.displayName = N;
      var z = "PopperAnchor",
        G = n.forwardRef((e, r) => {
          let { __scopePopper: t, virtualRef: o, ...i } = e,
            l = W(z, t),
            d = n.useRef(null),
            c = (0, a.e)(r, d);
          return (
            n.useEffect(() => {
              l.onAnchorChange((null == o ? void 0 : o.current) || d.current);
            }),
            o ? null : (0, s.jsx)(u.WV.div, { ...i, ref: c })
          );
        });
      G.displayName = z;
      var B = "PopperContent",
        [U, H] = F(B),
        X = n.forwardRef((e, r) => {
          var t, o, i, l, d, c, f, p;
          let {
              __scopePopper: v,
              side: h = "bottom",
              sideOffset: m = 0,
              align: C = "center",
              alignOffset: I = 0,
              arrowPadding: N = 0,
              avoidCollisions: F = !0,
              collisionBoundary: L = [],
              collisionPadding: K = 0,
              sticky: V = "partial",
              hideWhenDetached: z = !1,
              updatePositionStrategy: G = "optimized",
              onPlaced: H,
              ...X
            } = e,
            Y = W(B, v),
            [Z, $] = n.useState(null),
            ee = (0, a.e)(r, (e) => $(e)),
            [er, et] = n.useState(null),
            en = (0, O.t)(er),
            eo =
              null !== (f = null == en ? void 0 : en.width) && void 0 !== f
                ? f
                : 0,
            ea =
              null !== (p = null == en ? void 0 : en.height) && void 0 !== p
                ? p
                : 0,
            ei =
              "number" == typeof K
                ? K
                : { top: 0, right: 0, bottom: 0, left: 0, ...K },
            el = Array.isArray(L) ? L : [L],
            eu = el.length > 0,
            ed = { padding: ei, boundary: el.filter(q), altBoundary: eu },
            {
              refs: es,
              floatingStyles: ec,
              placement: ef,
              isPositioned: ep,
              middlewareData: ev,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: r = "bottom",
                  strategy: t = "absolute",
                  middleware: o = [],
                  platform: a,
                  elements: { reference: i, floating: l } = {},
                  transform: u = !0,
                  whileElementsMounted: d,
                  open: s,
                } = e,
                [c, f] = n.useState({
                  x: 0,
                  y: 0,
                  strategy: t,
                  placement: r,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, v] = n.useState(o);
              y(p, o) || v(o);
              let [h, m] = n.useState(null),
                [C, j] = n.useState(null),
                D = n.useCallback((e) => {
                  e !== _.current && ((_.current = e), m(e));
                }, []),
                P = n.useCallback((e) => {
                  e !== A.current && ((A.current = e), j(e));
                }, []),
                k = i || h,
                S = l || C,
                _ = n.useRef(null),
                A = n.useRef(null),
                I = n.useRef(c),
                E = null != d,
                T = R(d),
                O = R(a),
                N = n.useCallback(() => {
                  if (!_.current || !A.current) return;
                  let e = { placement: r, strategy: t, middleware: p };
                  O.current && (e.platform = O.current),
                    (0, g.oo)(_.current, A.current, e).then((e) => {
                      let r = { ...e, isPositioned: !0 };
                      F.current &&
                        !y(I.current, r) &&
                        ((I.current = r),
                        w.flushSync(() => {
                          f(r);
                        }));
                    });
                }, [p, r, t, O]);
              x(() => {
                !1 === s &&
                  I.current.isPositioned &&
                  ((I.current.isPositioned = !1),
                  f((e) => ({ ...e, isPositioned: !1 })));
              }, [s]);
              let F = n.useRef(!1);
              x(
                () => (
                  (F.current = !0),
                  () => {
                    F.current = !1;
                  }
                ),
                []
              ),
                x(() => {
                  if ((k && (_.current = k), S && (A.current = S), k && S)) {
                    if (T.current) return T.current(k, S, N);
                    N();
                  }
                }, [k, S, N, T, E]);
              let L = n.useMemo(
                  () => ({
                    reference: _,
                    floating: A,
                    setReference: D,
                    setFloating: P,
                  }),
                  [D, P]
                ),
                K = n.useMemo(() => ({ reference: k, floating: S }), [k, S]),
                W = n.useMemo(() => {
                  let e = { position: t, left: 0, top: 0 };
                  if (!K.floating) return e;
                  let r = M(K.floating, c.x),
                    n = M(K.floating, c.y);
                  return u
                    ? {
                        ...e,
                        transform: "translate(" + r + "px, " + n + "px)",
                        ...(b(K.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: t, left: r, top: n };
                }, [t, u, K.floating, c.x, c.y]);
              return n.useMemo(
                () => ({
                  ...c,
                  update: N,
                  refs: L,
                  elements: K,
                  floatingStyles: W,
                }),
                [c, N, L, K, W]
              );
            })({
              strategy: "fixed",
              placement: h + ("center" !== C ? "-" + C : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, r = Array(e), t = 0; t < e; t++)
                  r[t] = arguments[t];
                return (0, g.Me)(...r, { animationFrame: "always" === G });
              },
              elements: { reference: Y.anchor },
              middleware: [
                j({ mainAxis: m + ea, alignmentAxis: I }),
                F &&
                  D({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === V ? P() : void 0,
                    ...ed,
                  }),
                F && k({ ...ed }),
                S({
                  ...ed,
                  apply: (e) => {
                    let {
                        elements: r,
                        rects: t,
                        availableWidth: n,
                        availableHeight: o,
                      } = e,
                      { width: a, height: i } = t.reference,
                      l = r.floating.style;
                    l.setProperty(
                      "--radix-popper-available-width",
                      "".concat(n, "px")
                    ),
                      l.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px")
                      ),
                      l.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(a, "px")
                      ),
                      l.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(i, "px")
                      );
                  },
                }),
                er && A({ element: er, padding: N }),
                J({ arrowWidth: eo, arrowHeight: ea }),
                z && _({ strategy: "referenceHidden", ...ed }),
              ],
            }),
            [eh, em] = Q(ef),
            eg = (0, E.W)(H);
          (0, T.b)(() => {
            ep && (null == eg || eg());
          }, [ep, eg]);
          let ew = null === (t = ev.arrow) || void 0 === t ? void 0 : t.x,
            ex = null === (o = ev.arrow) || void 0 === o ? void 0 : o.y,
            ey =
              (null === (i = ev.arrow) || void 0 === i
                ? void 0
                : i.centerOffset) !== 0,
            [eb, eM] = n.useState();
          return (
            (0, T.b)(() => {
              Z && eM(window.getComputedStyle(Z).zIndex);
            }, [Z]),
            (0, s.jsx)("div", {
              ref: es.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...ec,
                transform: ep ? ec.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: eb,
                "--radix-popper-transform-origin": [
                  null === (l = ev.transformOrigin) || void 0 === l
                    ? void 0
                    : l.x,
                  null === (d = ev.transformOrigin) || void 0 === d
                    ? void 0
                    : d.y,
                ].join(" "),
                ...((null === (c = ev.hide) || void 0 === c
                  ? void 0
                  : c.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, s.jsx)(U, {
                scope: v,
                placedSide: eh,
                onArrowChange: et,
                arrowX: ew,
                arrowY: ex,
                shouldHideArrow: ey,
                children: (0, s.jsx)(u.WV.div, {
                  "data-side": eh,
                  "data-align": em,
                  ...X,
                  ref: ee,
                  style: { ...X.style, animation: ep ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      X.displayName = B;
      var Y = "PopperArrow",
        Z = { top: "bottom", right: "left", bottom: "top", left: "right" },
        $ = n.forwardRef(function (e, r) {
          let { __scopePopper: t, ...n } = e,
            o = H(Y, t),
            a = Z[o.placedSide];
          return (0,
          s.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [a]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, s.jsx)(I, { ...n, ref: r, style: { ...n.style, display: "block" } }) });
        });
      function q(e) {
        return null !== e;
      }
      $.displayName = Y;
      var J = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(r) {
          var t, n, o, a, i;
          let { placement: l, rects: u, middlewareData: d } = r,
            s =
              (null === (t = d.arrow) || void 0 === t
                ? void 0
                : t.centerOffset) !== 0,
            c = s ? 0 : e.arrowWidth,
            f = s ? 0 : e.arrowHeight,
            [p, v] = Q(l),
            h = { start: "0%", center: "50%", end: "100%" }[v],
            m =
              (null !==
                (a = null === (n = d.arrow) || void 0 === n ? void 0 : n.x) &&
              void 0 !== a
                ? a
                : 0) +
              c / 2,
            g =
              (null !==
                (i = null === (o = d.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== i
                ? i
                : 0) +
              f / 2,
            w = "",
            x = "";
          return (
            "bottom" === p
              ? ((w = s ? h : "".concat(m, "px")), (x = "".concat(-f, "px")))
              : "top" === p
              ? ((w = s ? h : "".concat(m, "px")),
                (x = "".concat(u.floating.height + f, "px")))
              : "right" === p
              ? ((w = "".concat(-f, "px")), (x = s ? h : "".concat(g, "px")))
              : "left" === p &&
                ((w = "".concat(u.floating.width + f, "px")),
                (x = s ? h : "".concat(g, "px"))),
            { data: { x: w, y: x } }
          );
        },
      });
      function Q(e) {
        let [r, t = "center"] = e.split("-");
        return [r, t];
      }
      var ee = t(98051),
        er = t(65932),
        et = "rovingFocusGroup.onEntryFocus",
        en = { bubbles: !1, cancelable: !0 },
        eo = "RovingFocusGroup",
        [ea, ei, el] = c(eo),
        [eu, ed] = (0, i.b)(eo, [el]),
        [es, ec] = eu(eo),
        ef = n.forwardRef((e, r) =>
          (0, s.jsx)(ea.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, s.jsx)(ea.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, s.jsx)(ep, { ...e, ref: r }),
            }),
          })
        );
      ef.displayName = eo;
      var ep = n.forwardRef((e, r) => {
          let {
              __scopeRovingFocusGroup: t,
              orientation: i,
              loop: d = !1,
              dir: c,
              currentTabStopId: p,
              defaultCurrentTabStopId: v,
              onCurrentTabStopIdChange: h,
              onEntryFocus: m,
              preventScrollOnEntryFocus: g = !1,
              ...w
            } = e,
            x = n.useRef(null),
            y = (0, a.e)(r, x),
            b = (0, f.gm)(c),
            [M = null, R] = (0, l.T)({ prop: p, defaultProp: v, onChange: h }),
            [C, j] = n.useState(!1),
            D = (0, E.W)(m),
            P = ei(t),
            k = n.useRef(!1),
            [S, _] = n.useState(0);
          return (
            n.useEffect(() => {
              let e = x.current;
              if (e)
                return (
                  e.addEventListener(et, D), () => e.removeEventListener(et, D)
                );
            }, [D]),
            (0, s.jsx)(es, {
              scope: t,
              orientation: i,
              dir: b,
              loop: d,
              currentTabStopId: M,
              onItemFocus: n.useCallback((e) => R(e), [R]),
              onItemShiftTab: n.useCallback(() => j(!0), []),
              onFocusableItemAdd: n.useCallback(() => _((e) => e + 1), []),
              onFocusableItemRemove: n.useCallback(() => _((e) => e - 1), []),
              children: (0, s.jsx)(u.WV.div, {
                tabIndex: C || 0 === S ? -1 : 0,
                "data-orientation": i,
                ...w,
                ref: y,
                style: { outline: "none", ...e.style },
                onMouseDown: (0, o.M)(e.onMouseDown, () => {
                  k.current = !0;
                }),
                onFocus: (0, o.M)(e.onFocus, (e) => {
                  let r = !k.current;
                  if (e.target === e.currentTarget && r && !C) {
                    let r = new CustomEvent(et, en);
                    if (
                      (e.currentTarget.dispatchEvent(r), !r.defaultPrevented)
                    ) {
                      let e = P().filter((e) => e.focusable);
                      eg(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === M),
                          ...e,
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        g
                      );
                    }
                  }
                  k.current = !1;
                }),
                onBlur: (0, o.M)(e.onBlur, () => j(!1)),
              }),
            })
          );
        }),
        ev = "RovingFocusGroupItem",
        eh = n.forwardRef((e, r) => {
          let {
              __scopeRovingFocusGroup: t,
              focusable: a = !0,
              active: i = !1,
              tabStopId: l,
              ...d
            } = e,
            c = (0, m.M)(),
            f = l || c,
            p = ec(ev, t),
            v = p.currentTabStopId === f,
            h = ei(t),
            { onFocusableItemAdd: g, onFocusableItemRemove: w } = p;
          return (
            n.useEffect(() => {
              if (a) return g(), () => w();
            }, [a, g, w]),
            (0, s.jsx)(ea.ItemSlot, {
              scope: t,
              id: f,
              focusable: a,
              active: i,
              children: (0, s.jsx)(u.WV.span, {
                tabIndex: v ? 0 : -1,
                "data-orientation": p.orientation,
                ...d,
                ref: r,
                onMouseDown: (0, o.M)(e.onMouseDown, (e) => {
                  a ? p.onItemFocus(f) : e.preventDefault();
                }),
                onFocus: (0, o.M)(e.onFocus, () => p.onItemFocus(f)),
                onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                  if ("Tab" === e.key && e.shiftKey) {
                    p.onItemShiftTab();
                    return;
                  }
                  if (e.target !== e.currentTarget) return;
                  let r = (function (e, r, t) {
                    var n;
                    let o =
                      ((n = e.key),
                      "rtl" !== t
                        ? n
                        : "ArrowLeft" === n
                        ? "ArrowRight"
                        : "ArrowRight" === n
                        ? "ArrowLeft"
                        : n);
                    if (
                      !(
                        "vertical" === r &&
                        ["ArrowLeft", "ArrowRight"].includes(o)
                      ) &&
                      !(
                        "horizontal" === r &&
                        ["ArrowUp", "ArrowDown"].includes(o)
                      )
                    )
                      return em[o];
                  })(e, p.orientation, p.dir);
                  if (void 0 !== r) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let o = h()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ("last" === r) o.reverse();
                    else if ("prev" === r || "next" === r) {
                      var t, n;
                      "prev" === r && o.reverse();
                      let a = o.indexOf(e.currentTarget);
                      o = p.loop
                        ? ((t = o),
                          (n = a + 1),
                          t.map((e, r) => t[(n + r) % t.length]))
                        : o.slice(a + 1);
                    }
                    setTimeout(() => eg(o));
                  }
                }),
              }),
            })
          );
        });
      eh.displayName = ev;
      var em = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function eg(e) {
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = document.activeElement;
        for (let n of e)
          if (
            n === t ||
            (n.focus({ preventScroll: r }), document.activeElement !== t)
          )
            return;
      }
      var ew = t(81333),
        ex = t(62526),
        ey = ["Enter", " "],
        eb = ["ArrowUp", "PageDown", "End"],
        eM = ["ArrowDown", "PageUp", "Home", ...eb],
        eR = { ltr: [...ey, "ArrowRight"], rtl: [...ey, "ArrowLeft"] },
        eC = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
        ej = "Menu",
        [eD, eP, ek] = c(ej),
        [eS, e_] = (0, i.b)(ej, [ek, L, ed]),
        eA = L(),
        eI = ed(),
        [eE, eT] = eS(ej),
        [eO, eN] = eS(ej),
        eF = (e) => {
          let {
              __scopeMenu: r,
              open: t = !1,
              children: o,
              dir: a,
              onOpenChange: i,
              modal: l = !0,
            } = e,
            u = eA(r),
            [d, c] = n.useState(null),
            p = n.useRef(!1),
            v = (0, E.W)(i),
            h = (0, f.gm)(a);
          return (
            n.useEffect(() => {
              let e = () => {
                  (p.current = !0),
                    document.addEventListener("pointerdown", r, {
                      capture: !0,
                      once: !0,
                    }),
                    document.addEventListener("pointermove", r, {
                      capture: !0,
                      once: !0,
                    });
                },
                r = () => (p.current = !1);
              return (
                document.addEventListener("keydown", e, { capture: !0 }),
                () => {
                  document.removeEventListener("keydown", e, { capture: !0 }),
                    document.removeEventListener("pointerdown", r, {
                      capture: !0,
                    }),
                    document.removeEventListener("pointermove", r, {
                      capture: !0,
                    });
                }
              );
            }, []),
            (0, s.jsx)(V, {
              ...u,
              children: (0, s.jsx)(eE, {
                scope: r,
                open: t,
                onOpenChange: v,
                content: d,
                onContentChange: c,
                children: (0, s.jsx)(eO, {
                  scope: r,
                  onClose: n.useCallback(() => v(!1), [v]),
                  isUsingKeyboardRef: p,
                  dir: h,
                  modal: l,
                  children: o,
                }),
              }),
            })
          );
        };
      eF.displayName = ej;
      var eL = n.forwardRef((e, r) => {
        let { __scopeMenu: t, ...n } = e,
          o = eA(t);
        return (0, s.jsx)(G, { ...o, ...n, ref: r });
      });
      eL.displayName = "MenuAnchor";
      var eK = "MenuPortal",
        [eW, eV] = eS(eK, { forceMount: void 0 }),
        ez = (e) => {
          let { __scopeMenu: r, forceMount: t, children: n, container: o } = e,
            a = eT(eK, r);
          return (0, s.jsx)(eW, {
            scope: r,
            forceMount: t,
            children: (0, s.jsx)(er.z, {
              present: t || a.open,
              children: (0, s.jsx)(ee.h, {
                asChild: !0,
                container: o,
                children: n,
              }),
            }),
          });
        };
      ez.displayName = eK;
      var eG = "MenuContent",
        [eB, eU] = eS(eG),
        eH = n.forwardRef((e, r) => {
          let t = eV(eG, e.__scopeMenu),
            { forceMount: n = t.forceMount, ...o } = e,
            a = eT(eG, e.__scopeMenu),
            i = eN(eG, e.__scopeMenu);
          return (0, s.jsx)(eD.Provider, {
            scope: e.__scopeMenu,
            children: (0, s.jsx)(er.z, {
              present: n || a.open,
              children: (0, s.jsx)(eD.Slot, {
                scope: e.__scopeMenu,
                children: i.modal
                  ? (0, s.jsx)(eX, { ...o, ref: r })
                  : (0, s.jsx)(eY, { ...o, ref: r }),
              }),
            }),
          });
        }),
        eX = n.forwardRef((e, r) => {
          let t = eT(eG, e.__scopeMenu),
            i = n.useRef(null),
            l = (0, a.e)(r, i);
          return (
            n.useEffect(() => {
              let e = i.current;
              if (e) return (0, ew.Ry)(e);
            }, []),
            (0, s.jsx)(eZ, {
              ...e,
              ref: l,
              trapFocus: t.open,
              disableOutsidePointerEvents: t.open,
              disableOutsideScroll: !0,
              onFocusOutside: (0, o.M)(
                e.onFocusOutside,
                (e) => e.preventDefault(),
                { checkForDefaultPrevented: !1 }
              ),
              onDismiss: () => t.onOpenChange(!1),
            })
          );
        }),
        eY = n.forwardRef((e, r) => {
          let t = eT(eG, e.__scopeMenu);
          return (0, s.jsx)(eZ, {
            ...e,
            ref: r,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => t.onOpenChange(!1),
          });
        }),
        eZ = n.forwardRef((e, r) => {
          let {
              __scopeMenu: t,
              loop: i = !1,
              trapFocus: l,
              onOpenAutoFocus: u,
              onCloseAutoFocus: c,
              disableOutsidePointerEvents: f,
              onEntryFocus: m,
              onEscapeKeyDown: g,
              onPointerDownOutside: w,
              onFocusOutside: x,
              onInteractOutside: y,
              onDismiss: b,
              disableOutsideScroll: M,
              ...R
            } = e,
            C = eT(eG, t),
            j = eN(eG, t),
            D = eA(t),
            P = eI(t),
            k = eP(t),
            [S, _] = n.useState(null),
            A = n.useRef(null),
            I = (0, a.e)(r, A, C.onContentChange),
            E = n.useRef(0),
            T = n.useRef(""),
            O = n.useRef(0),
            N = n.useRef(null),
            F = n.useRef("right"),
            L = n.useRef(0),
            K = M ? ex.Z : n.Fragment,
            W = M ? { as: d.g7, allowPinchZoom: !0 } : void 0,
            V = (e) => {
              var r, t;
              let n = T.current + e,
                o = k().filter((e) => !e.disabled),
                a = document.activeElement,
                i =
                  null === (r = o.find((e) => e.ref.current === a)) ||
                  void 0 === r
                    ? void 0
                    : r.textValue,
                l = (function (e, r, t) {
                  var n;
                  let o =
                      r.length > 1 && Array.from(r).every((e) => e === r[0])
                        ? r[0]
                        : r,
                    a =
                      ((n = Math.max(t ? e.indexOf(t) : -1, 0)),
                      e.map((r, t) => e[(n + t) % e.length]));
                  1 === o.length && (a = a.filter((e) => e !== t));
                  let i = a.find((e) =>
                    e.toLowerCase().startsWith(o.toLowerCase())
                  );
                  return i !== t ? i : void 0;
                })(
                  o.map((e) => e.textValue),
                  n,
                  i
                ),
                u =
                  null === (t = o.find((e) => e.textValue === l)) ||
                  void 0 === t
                    ? void 0
                    : t.ref.current;
              !(function e(r) {
                (T.current = r),
                  window.clearTimeout(E.current),
                  "" !== r && (E.current = window.setTimeout(() => e(""), 1e3));
              })(n),
                u && setTimeout(() => u.focus());
            };
          n.useEffect(() => () => window.clearTimeout(E.current), []),
            (0, v.EW)();
          let z = n.useCallback((e) => {
            var r, t, n;
            return (
              F.current ===
                (null === (r = N.current) || void 0 === r ? void 0 : r.side) &&
              !!(n =
                null === (t = N.current) || void 0 === t ? void 0 : t.area) &&
              (function (e, r) {
                let { x: t, y: n } = e,
                  o = !1;
                for (let e = 0, a = r.length - 1; e < r.length; a = e++) {
                  let i = r[e].x,
                    l = r[e].y,
                    u = r[a].x,
                    d = r[a].y;
                  l > n != d > n &&
                    t < ((u - i) * (n - l)) / (d - l) + i &&
                    (o = !o);
                }
                return o;
              })({ x: e.clientX, y: e.clientY }, n)
            );
          }, []);
          return (0, s.jsx)(eB, {
            scope: t,
            searchRef: T,
            onItemEnter: n.useCallback(
              (e) => {
                z(e) && e.preventDefault();
              },
              [z]
            ),
            onItemLeave: n.useCallback(
              (e) => {
                var r;
                z(e) ||
                  (null === (r = A.current) || void 0 === r || r.focus(),
                  _(null));
              },
              [z]
            ),
            onTriggerLeave: n.useCallback(
              (e) => {
                z(e) && e.preventDefault();
              },
              [z]
            ),
            pointerGraceTimerRef: O,
            onPointerGraceIntentChange: n.useCallback((e) => {
              N.current = e;
            }, []),
            children: (0, s.jsx)(K, {
              ...W,
              children: (0, s.jsx)(h.M, {
                asChild: !0,
                trapped: l,
                onMountAutoFocus: (0, o.M)(u, (e) => {
                  var r;
                  e.preventDefault(),
                    null === (r = A.current) ||
                      void 0 === r ||
                      r.focus({ preventScroll: !0 });
                }),
                onUnmountAutoFocus: c,
                children: (0, s.jsx)(p.XB, {
                  asChild: !0,
                  disableOutsidePointerEvents: f,
                  onEscapeKeyDown: g,
                  onPointerDownOutside: w,
                  onFocusOutside: x,
                  onInteractOutside: y,
                  onDismiss: b,
                  children: (0, s.jsx)(ef, {
                    asChild: !0,
                    ...P,
                    dir: j.dir,
                    orientation: "vertical",
                    loop: i,
                    currentTabStopId: S,
                    onCurrentTabStopIdChange: _,
                    onEntryFocus: (0, o.M)(m, (e) => {
                      j.isUsingKeyboardRef.current || e.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: (0, s.jsx)(X, {
                      role: "menu",
                      "aria-orientation": "vertical",
                      "data-state": rp(C.open),
                      "data-radix-menu-content": "",
                      dir: j.dir,
                      ...D,
                      ...R,
                      ref: I,
                      style: { outline: "none", ...R.style },
                      onKeyDown: (0, o.M)(R.onKeyDown, (e) => {
                        let r =
                            e.target.closest("[data-radix-menu-content]") ===
                            e.currentTarget,
                          t = e.ctrlKey || e.altKey || e.metaKey,
                          n = 1 === e.key.length;
                        r &&
                          ("Tab" === e.key && e.preventDefault(),
                          !t && n && V(e.key));
                        let o = A.current;
                        if (e.target !== o || !eM.includes(e.key)) return;
                        e.preventDefault();
                        let a = k()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        eb.includes(e.key) && a.reverse(),
                          (function (e) {
                            let r = document.activeElement;
                            for (let t of e)
                              if (
                                t === r ||
                                (t.focus(), document.activeElement !== r)
                              )
                                return;
                          })(a);
                      }),
                      onBlur: (0, o.M)(e.onBlur, (e) => {
                        e.currentTarget.contains(e.target) ||
                          (window.clearTimeout(E.current), (T.current = ""));
                      }),
                      onPointerMove: (0, o.M)(
                        e.onPointerMove,
                        rm((e) => {
                          let r = e.target,
                            t = L.current !== e.clientX;
                          if (e.currentTarget.contains(r) && t) {
                            let r = e.clientX > L.current ? "right" : "left";
                            (F.current = r), (L.current = e.clientX);
                          }
                        })
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      eH.displayName = eG;
      var e$ = n.forwardRef((e, r) => {
        let { __scopeMenu: t, ...n } = e;
        return (0, s.jsx)(u.WV.div, { role: "group", ...n, ref: r });
      });
      e$.displayName = "MenuGroup";
      var eq = n.forwardRef((e, r) => {
        let { __scopeMenu: t, ...n } = e;
        return (0, s.jsx)(u.WV.div, { ...n, ref: r });
      });
      eq.displayName = "MenuLabel";
      var eJ = "MenuItem",
        eQ = "menu.itemSelect",
        e0 = n.forwardRef((e, r) => {
          let { disabled: t = !1, onSelect: i, ...l } = e,
            d = n.useRef(null),
            c = eN(eJ, e.__scopeMenu),
            f = eU(eJ, e.__scopeMenu),
            p = (0, a.e)(r, d),
            v = n.useRef(!1);
          return (0, s.jsx)(e1, {
            ...l,
            ref: p,
            disabled: t,
            onClick: (0, o.M)(e.onClick, () => {
              let e = d.current;
              if (!t && e) {
                let r = new CustomEvent(eQ, { bubbles: !0, cancelable: !0 });
                e.addEventListener(eQ, (e) => (null == i ? void 0 : i(e)), {
                  once: !0,
                }),
                  (0, u.jH)(e, r),
                  r.defaultPrevented ? (v.current = !1) : c.onClose();
              }
            }),
            onPointerDown: (r) => {
              var t;
              null === (t = e.onPointerDown) || void 0 === t || t.call(e, r),
                (v.current = !0);
            },
            onPointerUp: (0, o.M)(e.onPointerUp, (e) => {
              var r;
              v.current ||
                null === (r = e.currentTarget) ||
                void 0 === r ||
                r.click();
            }),
            onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
              let r = "" !== f.searchRef.current;
              !t &&
                (!r || " " !== e.key) &&
                ey.includes(e.key) &&
                (e.currentTarget.click(), e.preventDefault());
            }),
          });
        });
      e0.displayName = eJ;
      var e1 = n.forwardRef((e, r) => {
          let { __scopeMenu: t, disabled: i = !1, textValue: l, ...d } = e,
            c = eU(eJ, t),
            f = eI(t),
            p = n.useRef(null),
            v = (0, a.e)(r, p),
            [h, m] = n.useState(!1),
            [g, w] = n.useState("");
          return (
            n.useEffect(() => {
              let e = p.current;
              if (e) {
                var r;
                w(
                  (null !== (r = e.textContent) && void 0 !== r ? r : "").trim()
                );
              }
            }, [d.children]),
            (0, s.jsx)(eD.ItemSlot, {
              scope: t,
              disabled: i,
              textValue: null != l ? l : g,
              children: (0, s.jsx)(eh, {
                asChild: !0,
                ...f,
                focusable: !i,
                children: (0, s.jsx)(u.WV.div, {
                  role: "menuitem",
                  "data-highlighted": h ? "" : void 0,
                  "aria-disabled": i || void 0,
                  "data-disabled": i ? "" : void 0,
                  ...d,
                  ref: v,
                  onPointerMove: (0, o.M)(
                    e.onPointerMove,
                    rm((e) => {
                      i
                        ? c.onItemLeave(e)
                        : (c.onItemEnter(e),
                          e.defaultPrevented ||
                            e.currentTarget.focus({ preventScroll: !0 }));
                    })
                  ),
                  onPointerLeave: (0, o.M)(
                    e.onPointerLeave,
                    rm((e) => c.onItemLeave(e))
                  ),
                  onFocus: (0, o.M)(e.onFocus, () => m(!0)),
                  onBlur: (0, o.M)(e.onBlur, () => m(!1)),
                }),
              }),
            })
          );
        }),
        e2 = n.forwardRef((e, r) => {
          let { checked: t = !1, onCheckedChange: n, ...a } = e;
          return (0, s.jsx)(re, {
            scope: e.__scopeMenu,
            checked: t,
            children: (0, s.jsx)(e0, {
              role: "menuitemcheckbox",
              "aria-checked": rv(t) ? "mixed" : t,
              ...a,
              ref: r,
              "data-state": rh(t),
              onSelect: (0, o.M)(
                a.onSelect,
                () => (null == n ? void 0 : n(!!rv(t) || !t)),
                { checkForDefaultPrevented: !1 }
              ),
            }),
          });
        });
      e2.displayName = "MenuCheckboxItem";
      var e5 = "MenuRadioGroup",
        [e7, e3] = eS(e5, { value: void 0, onValueChange: () => {} }),
        e6 = n.forwardRef((e, r) => {
          let { value: t, onValueChange: n, ...o } = e,
            a = (0, E.W)(n);
          return (0, s.jsx)(e7, {
            scope: e.__scopeMenu,
            value: t,
            onValueChange: a,
            children: (0, s.jsx)(e$, { ...o, ref: r }),
          });
        });
      e6.displayName = e5;
      var e9 = "MenuRadioItem",
        e4 = n.forwardRef((e, r) => {
          let { value: t, ...n } = e,
            a = e3(e9, e.__scopeMenu),
            i = t === a.value;
          return (0, s.jsx)(re, {
            scope: e.__scopeMenu,
            checked: i,
            children: (0, s.jsx)(e0, {
              role: "menuitemradio",
              "aria-checked": i,
              ...n,
              ref: r,
              "data-state": rh(i),
              onSelect: (0, o.M)(
                n.onSelect,
                () => {
                  var e;
                  return null === (e = a.onValueChange) || void 0 === e
                    ? void 0
                    : e.call(a, t);
                },
                { checkForDefaultPrevented: !1 }
              ),
            }),
          });
        });
      e4.displayName = e9;
      var e8 = "MenuItemIndicator",
        [re, rr] = eS(e8, { checked: !1 }),
        rt = n.forwardRef((e, r) => {
          let { __scopeMenu: t, forceMount: n, ...o } = e,
            a = rr(e8, t);
          return (0, s.jsx)(er.z, {
            present: n || rv(a.checked) || !0 === a.checked,
            children: (0, s.jsx)(u.WV.span, {
              ...o,
              ref: r,
              "data-state": rh(a.checked),
            }),
          });
        });
      rt.displayName = e8;
      var rn = n.forwardRef((e, r) => {
        let { __scopeMenu: t, ...n } = e;
        return (0, s.jsx)(u.WV.div, {
          role: "separator",
          "aria-orientation": "horizontal",
          ...n,
          ref: r,
        });
      });
      rn.displayName = "MenuSeparator";
      var ro = n.forwardRef((e, r) => {
        let { __scopeMenu: t, ...n } = e,
          o = eA(t);
        return (0, s.jsx)($, { ...o, ...n, ref: r });
      });
      ro.displayName = "MenuArrow";
      var ra = "MenuSub",
        [ri, rl] = eS(ra),
        ru = (e) => {
          let {
              __scopeMenu: r,
              children: t,
              open: o = !1,
              onOpenChange: a,
            } = e,
            i = eT(ra, r),
            l = eA(r),
            [u, d] = n.useState(null),
            [c, f] = n.useState(null),
            p = (0, E.W)(a);
          return (
            n.useEffect(
              () => (!1 === i.open && p(!1), () => p(!1)),
              [i.open, p]
            ),
            (0, s.jsx)(V, {
              ...l,
              children: (0, s.jsx)(eE, {
                scope: r,
                open: o,
                onOpenChange: p,
                content: c,
                onContentChange: f,
                children: (0, s.jsx)(ri, {
                  scope: r,
                  contentId: (0, m.M)(),
                  triggerId: (0, m.M)(),
                  trigger: u,
                  onTriggerChange: d,
                  children: t,
                }),
              }),
            })
          );
        };
      ru.displayName = ra;
      var rd = "MenuSubTrigger",
        rs = n.forwardRef((e, r) => {
          let t = eT(rd, e.__scopeMenu),
            i = eN(rd, e.__scopeMenu),
            l = rl(rd, e.__scopeMenu),
            u = eU(rd, e.__scopeMenu),
            d = n.useRef(null),
            { pointerGraceTimerRef: c, onPointerGraceIntentChange: f } = u,
            p = { __scopeMenu: e.__scopeMenu },
            v = n.useCallback(() => {
              d.current && window.clearTimeout(d.current), (d.current = null);
            }, []);
          return (
            n.useEffect(() => v, [v]),
            n.useEffect(() => {
              let e = c.current;
              return () => {
                window.clearTimeout(e), f(null);
              };
            }, [c, f]),
            (0, s.jsx)(eL, {
              asChild: !0,
              ...p,
              children: (0, s.jsx)(e1, {
                id: l.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": t.open,
                "aria-controls": l.contentId,
                "data-state": rp(t.open),
                ...e,
                ref: (0, a.F)(r, l.onTriggerChange),
                onClick: (r) => {
                  var n;
                  null === (n = e.onClick) || void 0 === n || n.call(e, r),
                    e.disabled ||
                      r.defaultPrevented ||
                      (r.currentTarget.focus(), t.open || t.onOpenChange(!0));
                },
                onPointerMove: (0, o.M)(
                  e.onPointerMove,
                  rm((r) => {
                    u.onItemEnter(r),
                      r.defaultPrevented ||
                        e.disabled ||
                        t.open ||
                        d.current ||
                        (u.onPointerGraceIntentChange(null),
                        (d.current = window.setTimeout(() => {
                          t.onOpenChange(!0), v();
                        }, 100)));
                  })
                ),
                onPointerLeave: (0, o.M)(
                  e.onPointerLeave,
                  rm((e) => {
                    var r, n;
                    v();
                    let o =
                      null === (r = t.content) || void 0 === r
                        ? void 0
                        : r.getBoundingClientRect();
                    if (o) {
                      let r =
                          null === (n = t.content) || void 0 === n
                            ? void 0
                            : n.dataset.side,
                        a = "right" === r,
                        i = o[a ? "left" : "right"],
                        l = o[a ? "right" : "left"];
                      u.onPointerGraceIntentChange({
                        area: [
                          { x: e.clientX + (a ? -5 : 5), y: e.clientY },
                          { x: i, y: o.top },
                          { x: l, y: o.top },
                          { x: l, y: o.bottom },
                          { x: i, y: o.bottom },
                        ],
                        side: r,
                      }),
                        window.clearTimeout(c.current),
                        (c.current = window.setTimeout(
                          () => u.onPointerGraceIntentChange(null),
                          300
                        ));
                    } else {
                      if ((u.onTriggerLeave(e), e.defaultPrevented)) return;
                      u.onPointerGraceIntentChange(null);
                    }
                  })
                ),
                onKeyDown: (0, o.M)(e.onKeyDown, (r) => {
                  let n = "" !== u.searchRef.current;
                  if (
                    !e.disabled &&
                    (!n || " " !== r.key) &&
                    eR[i.dir].includes(r.key)
                  ) {
                    var o;
                    t.onOpenChange(!0),
                      null === (o = t.content) || void 0 === o || o.focus(),
                      r.preventDefault();
                  }
                }),
              }),
            })
          );
        });
      rs.displayName = rd;
      var rc = "MenuSubContent",
        rf = n.forwardRef((e, r) => {
          let t = eV(eG, e.__scopeMenu),
            { forceMount: i = t.forceMount, ...l } = e,
            u = eT(eG, e.__scopeMenu),
            d = eN(eG, e.__scopeMenu),
            c = rl(rc, e.__scopeMenu),
            f = n.useRef(null),
            p = (0, a.e)(r, f);
          return (0, s.jsx)(eD.Provider, {
            scope: e.__scopeMenu,
            children: (0, s.jsx)(er.z, {
              present: i || u.open,
              children: (0, s.jsx)(eD.Slot, {
                scope: e.__scopeMenu,
                children: (0, s.jsx)(eZ, {
                  id: c.contentId,
                  "aria-labelledby": c.triggerId,
                  ...l,
                  ref: p,
                  align: "start",
                  side: "rtl" === d.dir ? "left" : "right",
                  disableOutsidePointerEvents: !1,
                  disableOutsideScroll: !1,
                  trapFocus: !1,
                  onOpenAutoFocus: (e) => {
                    var r;
                    d.isUsingKeyboardRef.current &&
                      (null === (r = f.current) || void 0 === r || r.focus()),
                      e.preventDefault();
                  },
                  onCloseAutoFocus: (e) => e.preventDefault(),
                  onFocusOutside: (0, o.M)(e.onFocusOutside, (e) => {
                    e.target !== c.trigger && u.onOpenChange(!1);
                  }),
                  onEscapeKeyDown: (0, o.M)(e.onEscapeKeyDown, (e) => {
                    d.onClose(), e.preventDefault();
                  }),
                  onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                    let r = e.currentTarget.contains(e.target),
                      t = eC[d.dir].includes(e.key);
                    if (r && t) {
                      var n;
                      u.onOpenChange(!1),
                        null === (n = c.trigger) || void 0 === n || n.focus(),
                        e.preventDefault();
                    }
                  }),
                }),
              }),
            }),
          });
        });
      function rp(e) {
        return e ? "open" : "closed";
      }
      function rv(e) {
        return "indeterminate" === e;
      }
      function rh(e) {
        return rv(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      function rm(e) {
        return (r) => ("mouse" === r.pointerType ? e(r) : void 0);
      }
      rf.displayName = rc;
      var rg = "DropdownMenu",
        [rw, rx] = (0, i.b)(rg, [e_]),
        ry = e_(),
        [rb, rM] = rw(rg),
        rR = (e) => {
          let {
              __scopeDropdownMenu: r,
              children: t,
              dir: o,
              open: a,
              defaultOpen: i,
              onOpenChange: u,
              modal: d = !0,
            } = e,
            c = ry(r),
            f = n.useRef(null),
            [p = !1, v] = (0, l.T)({ prop: a, defaultProp: i, onChange: u });
          return (0, s.jsx)(rb, {
            scope: r,
            triggerId: (0, m.M)(),
            triggerRef: f,
            contentId: (0, m.M)(),
            open: p,
            onOpenChange: v,
            onOpenToggle: n.useCallback(() => v((e) => !e), [v]),
            modal: d,
            children: (0, s.jsx)(eF, {
              ...c,
              open: p,
              onOpenChange: v,
              dir: o,
              modal: d,
              children: t,
            }),
          });
        };
      rR.displayName = rg;
      var rC = "DropdownMenuTrigger",
        rj = n.forwardRef((e, r) => {
          let { __scopeDropdownMenu: t, disabled: n = !1, ...i } = e,
            l = rM(rC, t),
            d = ry(t);
          return (0, s.jsx)(eL, {
            asChild: !0,
            ...d,
            children: (0, s.jsx)(u.WV.button, {
              type: "button",
              id: l.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": l.open,
              "aria-controls": l.open ? l.contentId : void 0,
              "data-state": l.open ? "open" : "closed",
              "data-disabled": n ? "" : void 0,
              disabled: n,
              ...i,
              ref: (0, a.F)(r, l.triggerRef),
              onPointerDown: (0, o.M)(e.onPointerDown, (e) => {
                n ||
                  0 !== e.button ||
                  !1 !== e.ctrlKey ||
                  (l.onOpenToggle(), l.open || e.preventDefault());
              }),
              onKeyDown: (0, o.M)(e.onKeyDown, (e) => {
                !n &&
                  (["Enter", " "].includes(e.key) && l.onOpenToggle(),
                  "ArrowDown" === e.key && l.onOpenChange(!0),
                  ["Enter", " ", "ArrowDown"].includes(e.key) &&
                    e.preventDefault());
              }),
            }),
          });
        });
      rj.displayName = rC;
      var rD = (e) => {
        let { __scopeDropdownMenu: r, ...t } = e,
          n = ry(r);
        return (0, s.jsx)(ez, { ...n, ...t });
      };
      rD.displayName = "DropdownMenuPortal";
      var rP = "DropdownMenuContent",
        rk = n.forwardRef((e, r) => {
          let { __scopeDropdownMenu: t, ...a } = e,
            i = rM(rP, t),
            l = ry(t),
            u = n.useRef(!1);
          return (0, s.jsx)(eH, {
            id: i.contentId,
            "aria-labelledby": i.triggerId,
            ...l,
            ...a,
            ref: r,
            onCloseAutoFocus: (0, o.M)(e.onCloseAutoFocus, (e) => {
              var r;
              u.current ||
                null === (r = i.triggerRef.current) ||
                void 0 === r ||
                r.focus(),
                (u.current = !1),
                e.preventDefault();
            }),
            onInteractOutside: (0, o.M)(e.onInteractOutside, (e) => {
              let r = e.detail.originalEvent,
                t = 0 === r.button && !0 === r.ctrlKey,
                n = 2 === r.button || t;
              (!i.modal || n) && (u.current = !0);
            }),
            style: {
              ...e.style,
              "--radix-dropdown-menu-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-dropdown-menu-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-dropdown-menu-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-dropdown-menu-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-dropdown-menu-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          });
        });
      rk.displayName = rP;
      var rS = n.forwardRef((e, r) => {
        let { __scopeDropdownMenu: t, ...n } = e,
          o = ry(t);
        return (0, s.jsx)(e$, { ...o, ...n, ref: r });
      });
      rS.displayName = "DropdownMenuGroup";
      var r_ = n.forwardRef((e, r) => {
        let { __scopeDropdownMenu: t, ...n } = e,
          o = ry(t);
        return (0, s.jsx)(eq, { ...o, ...n, ref: r });
      });
      r_.displayName = "DropdownMenuLabel";
      var rA = n.forwardRef((e, r) => {
        let { __scopeDropdownMenu: t, ...n } = e,
          o = ry(t);
        return (0, s.jsx)(e0, { ...o, ...n, ref: r });
      });
      rA.displayName = "DropdownMenuItem";
      var rI = n.forwardRef((e, r) => {
        let { __scopeDropdownMenu: t, ...n } = e,
          o = ry(t);
        return (0, s.jsx)(e2, { ...o, ...n, ref: r });
      });
      rI.displayName = "DropdownMenuCheckboxItem";
      var rE = n.forwardRef((e, r) => {
        let { __scopeDropdownMenu: t, ...n } = e,
          o = ry(t);
        return (0, s.jsx)(e6, { ...o, ...n, ref: r });
      });
      rE.displayName = "DropdownMenuRadioGroup";
      var rT = n.forwardRef((e, r) => {
        let { __scopeDropdownMenu: t, ...n } = e,
          o = ry(t);
        return (0, s.jsx)(e4, { ...o, ...n, ref: r });
      });
      rT.displayName = "DropdownMenuRadioItem";
      var rO = n.forwardRef((e, r) => {
        let { __scopeDropdownMenu: t, ...n } = e,
          o = ry(t);
        return (0, s.jsx)(rt, { ...o, ...n, ref: r });
      });
      rO.displayName = "DropdownMenuItemIndicator";
      var rN = n.forwardRef((e, r) => {
        let { __scopeDropdownMenu: t, ...n } = e,
          o = ry(t);
        return (0, s.jsx)(rn, { ...o, ...n, ref: r });
      });
      (rN.displayName = "DropdownMenuSeparator"),
        (n.forwardRef((e, r) => {
          let { __scopeDropdownMenu: t, ...n } = e,
            o = ry(t);
          return (0, s.jsx)(ro, { ...o, ...n, ref: r });
        }).displayName = "DropdownMenuArrow");
      var rF = n.forwardRef((e, r) => {
        let { __scopeDropdownMenu: t, ...n } = e,
          o = ry(t);
        return (0, s.jsx)(rs, { ...o, ...n, ref: r });
      });
      rF.displayName = "DropdownMenuSubTrigger";
      var rL = n.forwardRef((e, r) => {
        let { __scopeDropdownMenu: t, ...n } = e,
          o = ry(t);
        return (0, s.jsx)(rf, {
          ...o,
          ...n,
          ref: r,
          style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width":
              "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      rL.displayName = "DropdownMenuSubContent";
      var rK = rR,
        rW = rj,
        rV = rD,
        rz = rk,
        rG = rS,
        rB = r_,
        rU = rA,
        rH = rI,
        rX = rE,
        rY = rT,
        rZ = rO,
        r$ = rN,
        rq = (e) => {
          let {
              __scopeDropdownMenu: r,
              children: t,
              open: n,
              onOpenChange: o,
              defaultOpen: a,
            } = e,
            i = ry(r),
            [u = !1, d] = (0, l.T)({ prop: n, defaultProp: a, onChange: o });
          return (0, s.jsx)(ru, {
            ...i,
            open: u,
            onOpenChange: d,
            children: t,
          });
        },
        rJ = rF,
        rQ = rL;
    },
    54527: function (e, r, t) {
      t.d(r, {
        t: function () {
          return a;
        },
      });
      var n = t(83112),
        o = t(91917);
      function a(e) {
        let [r, t] = n.useState(void 0);
        return (
          (0, o.b)(() => {
            if (e) {
              t({ width: e.offsetWidth, height: e.offsetHeight });
              let r = new ResizeObserver((r) => {
                let n, o;
                if (!Array.isArray(r) || !r.length) return;
                let a = r[0];
                if ("borderBoxSize" in a) {
                  let e = a.borderBoxSize,
                    r = Array.isArray(e) ? e[0] : e;
                  (n = r.inlineSize), (o = r.blockSize);
                } else (n = e.offsetWidth), (o = e.offsetHeight);
                t({ width: n, height: o });
              });
              return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
            }
            t(void 0);
          }, [e]),
          r
        );
      }
    },
  },
]);
