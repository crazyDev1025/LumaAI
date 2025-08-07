"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2823],
  {
    12823: function (t, e, n) {
      n.d(e, {
        x7: function () {
          return ta;
        },
        Me: function () {
          return ti;
        },
        oo: function () {
          return td;
        },
        US: function () {
          return to;
        },
        RR: function () {
          return tf;
        },
        Cp: function () {
          return tu;
        },
        dr: function () {
          return ts;
        },
        cv: function () {
          return tr;
        },
        uY: function () {
          return tl;
        },
        dp: function () {
          return tc;
        },
      });
      let i = ["top", "right", "bottom", "left"],
        o = Math.min,
        r = Math.max,
        l = Math.round,
        f = Math.floor,
        c = (t) => ({ x: t, y: t }),
        u = { left: "right", right: "left", bottom: "top", top: "bottom" },
        a = { start: "end", end: "start" };
      function s(t, e) {
        return "function" == typeof t ? t(e) : t;
      }
      function d(t) {
        return t.split("-")[0];
      }
      function h(t) {
        return t.split("-")[1];
      }
      function p(t) {
        return "x" === t ? "y" : "x";
      }
      function m(t) {
        return "y" === t ? "height" : "width";
      }
      function g(t) {
        return ["top", "bottom"].includes(d(t)) ? "y" : "x";
      }
      function w(t) {
        return t.replace(/start|end/g, (t) => a[t]);
      }
      function y(t) {
        return t.replace(/left|right|bottom|top/g, (t) => u[t]);
      }
      function x(t) {
        return "number" != typeof t
          ? { top: 0, right: 0, bottom: 0, left: 0, ...t }
          : { top: t, right: t, bottom: t, left: t };
      }
      function v(t) {
        let { x: e, y: n, width: i, height: o } = t;
        return {
          width: i,
          height: o,
          top: n,
          left: e,
          right: e + i,
          bottom: n + o,
          x: e,
          y: n,
        };
      }
      function b(t, e, n) {
        let i,
          { reference: o, floating: r } = t,
          l = g(e),
          f = p(g(e)),
          c = m(f),
          u = d(e),
          a = "y" === l,
          s = o.x + o.width / 2 - r.width / 2,
          w = o.y + o.height / 2 - r.height / 2,
          y = o[c] / 2 - r[c] / 2;
        switch (u) {
          case "top":
            i = { x: s, y: o.y - r.height };
            break;
          case "bottom":
            i = { x: s, y: o.y + o.height };
            break;
          case "right":
            i = { x: o.x + o.width, y: w };
            break;
          case "left":
            i = { x: o.x - r.width, y: w };
            break;
          default:
            i = { x: o.x, y: o.y };
        }
        switch (h(e)) {
          case "start":
            i[f] -= y * (n && a ? -1 : 1);
            break;
          case "end":
            i[f] += y * (n && a ? -1 : 1);
        }
        return i;
      }
      let R = async (t, e, n) => {
        let {
            placement: i = "bottom",
            strategy: o = "absolute",
            middleware: r = [],
            platform: l,
          } = n,
          f = r.filter(Boolean),
          c = await (null == l.isRTL ? void 0 : l.isRTL(e)),
          u = await l.getElementRects({
            reference: t,
            floating: e,
            strategy: o,
          }),
          { x: a, y: s } = b(u, i, c),
          d = i,
          h = {},
          p = 0;
        for (let n = 0; n < f.length; n++) {
          let { name: r, fn: m } = f[n],
            {
              x: g,
              y: w,
              data: y,
              reset: x,
            } = await m({
              x: a,
              y: s,
              initialPlacement: i,
              placement: d,
              strategy: o,
              middlewareData: h,
              rects: u,
              platform: l,
              elements: { reference: t, floating: e },
            });
          (a = null != g ? g : a),
            (s = null != w ? w : s),
            (h = { ...h, [r]: { ...h[r], ...y } }),
            x &&
              p <= 50 &&
              (p++,
              "object" == typeof x &&
                (x.placement && (d = x.placement),
                x.rects &&
                  (u =
                    !0 === x.rects
                      ? await l.getElementRects({
                          reference: t,
                          floating: e,
                          strategy: o,
                        })
                      : x.rects),
                ({ x: a, y: s } = b(u, d, c))),
              (n = -1));
        }
        return { x: a, y: s, placement: d, strategy: o, middlewareData: h };
      };
      async function T(t, e) {
        var n;
        void 0 === e && (e = {});
        let { x: i, y: o, platform: r, rects: l, elements: f, strategy: c } = t,
          {
            boundary: u = "clippingAncestors",
            rootBoundary: a = "viewport",
            elementContext: d = "floating",
            altBoundary: h = !1,
            padding: p = 0,
          } = s(e, t),
          m = x(p),
          g = f[h ? ("floating" === d ? "reference" : "floating") : d],
          w = v(
            await r.getClippingRect({
              element:
                null ==
                  (n = await (null == r.isElement ? void 0 : r.isElement(g))) ||
                n
                  ? g
                  : g.contextElement ||
                    (await (null == r.getDocumentElement
                      ? void 0
                      : r.getDocumentElement(f.floating))),
              boundary: u,
              rootBoundary: a,
              strategy: c,
            })
          ),
          y =
            "floating" === d
              ? {
                  x: i,
                  y: o,
                  width: l.floating.width,
                  height: l.floating.height,
                }
              : l.reference,
          b = await (null == r.getOffsetParent
            ? void 0
            : r.getOffsetParent(f.floating)),
          R = ((await (null == r.isElement ? void 0 : r.isElement(b))) &&
            (await (null == r.getScale ? void 0 : r.getScale(b)))) || {
            x: 1,
            y: 1,
          },
          T = v(
            r.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: f,
                  rect: y,
                  offsetParent: b,
                  strategy: c,
                })
              : y
          );
        return {
          top: (w.top - T.top + m.top) / R.y,
          bottom: (T.bottom - w.bottom + m.bottom) / R.y,
          left: (w.left - T.left + m.left) / R.x,
          right: (T.right - w.right + m.right) / R.x,
        };
      }
      function L(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width,
        };
      }
      function E(t) {
        return i.some((e) => t[e] >= 0);
      }
      async function A(t, e) {
        let { placement: n, platform: i, elements: o } = t,
          r = await (null == i.isRTL ? void 0 : i.isRTL(o.floating)),
          l = d(n),
          f = h(n),
          c = "y" === g(n),
          u = ["left", "top"].includes(l) ? -1 : 1,
          a = r && c ? -1 : 1,
          p = s(e, t),
          {
            mainAxis: m,
            crossAxis: w,
            alignmentAxis: y,
          } = "number" == typeof p
            ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...p };
        return (
          f && "number" == typeof y && (w = "end" === f ? -1 * y : y),
          c ? { x: w * a, y: m * u } : { x: m * u, y: w * a }
        );
      }
      function O(t) {
        return D(t) ? (t.nodeName || "").toLowerCase() : "#document";
      }
      function C(t) {
        var e;
        return (
          (null == t || null == (e = t.ownerDocument)
            ? void 0
            : e.defaultView) || window
        );
      }
      function k(t) {
        var e;
        return null ==
          (e = (D(t) ? t.ownerDocument : t.document) || window.document)
          ? void 0
          : e.documentElement;
      }
      function D(t) {
        return t instanceof Node || t instanceof C(t).Node;
      }
      function H(t) {
        return t instanceof Element || t instanceof C(t).Element;
      }
      function F(t) {
        return t instanceof HTMLElement || t instanceof C(t).HTMLElement;
      }
      function S(t) {
        return (
          "undefined" != typeof ShadowRoot &&
          (t instanceof ShadowRoot || t instanceof C(t).ShadowRoot)
        );
      }
      function P(t) {
        let { overflow: e, overflowX: n, overflowY: i, display: o } = N(t);
        return (
          /auto|scroll|overlay|hidden|clip/.test(e + i + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function W(t) {
        let e = M(),
          n = N(t);
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!e && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!e && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((t) =>
            (n.willChange || "").includes(t)
          ) ||
          ["paint", "layout", "strict", "content"].some((t) =>
            (n.contain || "").includes(t)
          )
        );
      }
      function M() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function V(t) {
        return ["html", "body", "#document"].includes(O(t));
      }
      function N(t) {
        return C(t).getComputedStyle(t);
      }
      function B(t) {
        return H(t)
          ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop }
          : { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function _(t) {
        if ("html" === O(t)) return t;
        let e = t.assignedSlot || t.parentNode || (S(t) && t.host) || k(t);
        return S(e) ? e.host : e;
      }
      function z(t, e, n) {
        var i;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        let o = (function t(e) {
            let n = _(e);
            return V(n)
              ? e.ownerDocument
                ? e.ownerDocument.body
                : e.body
              : F(n) && P(n)
              ? n
              : t(n);
          })(t),
          r = o === (null == (i = t.ownerDocument) ? void 0 : i.body),
          l = C(o);
        return r
          ? e.concat(
              l,
              l.visualViewport || [],
              P(o) ? o : [],
              l.frameElement && n ? z(l.frameElement) : []
            )
          : e.concat(o, z(o, [], n));
      }
      function I(t) {
        let e = N(t),
          n = parseFloat(e.width) || 0,
          i = parseFloat(e.height) || 0,
          o = F(t),
          r = o ? t.offsetWidth : n,
          f = o ? t.offsetHeight : i,
          c = l(n) !== r || l(i) !== f;
        return c && ((n = r), (i = f)), { width: n, height: i, $: c };
      }
      function q(t) {
        return H(t) ? t : t.contextElement;
      }
      function Y(t) {
        let e = q(t);
        if (!F(e)) return c(1);
        let n = e.getBoundingClientRect(),
          { width: i, height: o, $: r } = I(e),
          f = (r ? l(n.width) : n.width) / i,
          u = (r ? l(n.height) : n.height) / o;
        return (
          (f && Number.isFinite(f)) || (f = 1),
          (u && Number.isFinite(u)) || (u = 1),
          { x: f, y: u }
        );
      }
      let j = c(0);
      function U(t) {
        let e = C(t);
        return M() && e.visualViewport
          ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop }
          : j;
      }
      function X(t, e, n, i) {
        var o;
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        let r = t.getBoundingClientRect(),
          l = q(t),
          f = c(1);
        e && (i ? H(i) && (f = Y(i)) : (f = Y(t)));
        let u = (void 0 === (o = n) && (o = !1), i && (!o || i === C(l)) && o)
            ? U(l)
            : c(0),
          a = (r.left + u.x) / f.x,
          s = (r.top + u.y) / f.y,
          d = r.width / f.x,
          h = r.height / f.y;
        if (l) {
          let t = C(l),
            e = i && H(i) ? C(i) : i,
            n = t,
            o = n.frameElement;
          for (; o && i && e !== n; ) {
            let t = Y(o),
              e = o.getBoundingClientRect(),
              i = N(o),
              r = e.left + (o.clientLeft + parseFloat(i.paddingLeft)) * t.x,
              l = e.top + (o.clientTop + parseFloat(i.paddingTop)) * t.y;
            (a *= t.x),
              (s *= t.y),
              (d *= t.x),
              (h *= t.y),
              (a += r),
              (s += l),
              (o = (n = C(o)).frameElement);
          }
        }
        return v({ width: d, height: h, x: a, y: s });
      }
      let $ = [":popover-open", ":modal"];
      function G(t) {
        return $.some((e) => {
          try {
            return t.matches(e);
          } catch (t) {
            return !1;
          }
        });
      }
      function J(t) {
        return X(k(t)).left + B(t).scrollLeft;
      }
      function K(t, e, n) {
        let i;
        if ("viewport" === e)
          i = (function (t, e) {
            let n = C(t),
              i = k(t),
              o = n.visualViewport,
              r = i.clientWidth,
              l = i.clientHeight,
              f = 0,
              c = 0;
            if (o) {
              (r = o.width), (l = o.height);
              let t = M();
              (!t || (t && "fixed" === e)) &&
                ((f = o.offsetLeft), (c = o.offsetTop));
            }
            return { width: r, height: l, x: f, y: c };
          })(t, n);
        else if ("document" === e)
          i = (function (t) {
            let e = k(t),
              n = B(t),
              i = t.ownerDocument.body,
              o = r(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth),
              l = r(
                e.scrollHeight,
                e.clientHeight,
                i.scrollHeight,
                i.clientHeight
              ),
              f = -n.scrollLeft + J(t),
              c = -n.scrollTop;
            return (
              "rtl" === N(i).direction &&
                (f += r(e.clientWidth, i.clientWidth) - o),
              { width: o, height: l, x: f, y: c }
            );
          })(k(t));
        else if (H(e))
          i = (function (t, e) {
            let n = X(t, !0, "fixed" === e),
              i = n.top + t.clientTop,
              o = n.left + t.clientLeft,
              r = F(t) ? Y(t) : c(1),
              l = t.clientWidth * r.x;
            return {
              width: l,
              height: t.clientHeight * r.y,
              x: o * r.x,
              y: i * r.y,
            };
          })(e, n);
        else {
          let n = U(t);
          i = { ...e, x: e.x - n.x, y: e.y - n.y };
        }
        return v(i);
      }
      function Q(t) {
        return "static" === N(t).position;
      }
      function Z(t, e) {
        return F(t) && "fixed" !== N(t).position
          ? e
            ? e(t)
            : t.offsetParent
          : null;
      }
      function tt(t, e) {
        let n = C(t);
        if (G(t)) return n;
        if (!F(t)) {
          let e = _(t);
          for (; e && !V(e); ) {
            if (H(e) && !Q(e)) return e;
            e = _(e);
          }
          return n;
        }
        let i = Z(t, e);
        for (; i && ["table", "td", "th"].includes(O(i)) && Q(i); ) i = Z(i, e);
        return i && V(i) && Q(i) && !W(i)
          ? n
          : i ||
              (function (t) {
                let e = _(t);
                for (; F(e) && !V(e); ) {
                  if (W(e)) return e;
                  e = _(e);
                }
                return null;
              })(t) ||
              n;
      }
      let te = async function (t) {
          let e = this.getOffsetParent || tt,
            n = this.getDimensions,
            i = await n(t.floating);
          return {
            reference: (function (t, e, n) {
              let i = F(e),
                o = k(e),
                r = "fixed" === n,
                l = X(t, !0, r, e),
                f = { scrollLeft: 0, scrollTop: 0 },
                u = c(0);
              if (i || (!i && !r)) {
                if ((("body" !== O(e) || P(o)) && (f = B(e)), i)) {
                  let t = X(e, !0, r, e);
                  (u.x = t.x + e.clientLeft), (u.y = t.y + e.clientTop);
                } else o && (u.x = J(o));
              }
              return {
                x: l.left + f.scrollLeft - u.x,
                y: l.top + f.scrollTop - u.y,
                width: l.width,
                height: l.height,
              };
            })(t.reference, await e(t.floating), t.strategy),
            floating: { x: 0, y: 0, width: i.width, height: i.height },
          };
        },
        tn = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (t) {
            let { elements: e, rect: n, offsetParent: i, strategy: o } = t,
              r = "fixed" === o,
              l = k(i),
              f = !!e && G(e.floating);
            if (i === l || (f && r)) return n;
            let u = { scrollLeft: 0, scrollTop: 0 },
              a = c(1),
              s = c(0),
              d = F(i);
            if (
              (d || (!d && !r)) &&
              (("body" !== O(i) || P(l)) && (u = B(i)), F(i))
            ) {
              let t = X(i);
              (a = Y(i)), (s.x = t.x + i.clientLeft), (s.y = t.y + i.clientTop);
            }
            return {
              width: n.width * a.x,
              height: n.height * a.y,
              x: n.x * a.x - u.scrollLeft * a.x + s.x,
              y: n.y * a.y - u.scrollTop * a.y + s.y,
            };
          },
          getDocumentElement: k,
          getClippingRect: function (t) {
            let { element: e, boundary: n, rootBoundary: i, strategy: l } = t,
              f = [
                ...("clippingAncestors" === n
                  ? G(e)
                    ? []
                    : (function (t, e) {
                        let n = e.get(t);
                        if (n) return n;
                        let i = z(t, [], !1).filter(
                            (t) => H(t) && "body" !== O(t)
                          ),
                          o = null,
                          r = "fixed" === N(t).position,
                          l = r ? _(t) : t;
                        for (; H(l) && !V(l); ) {
                          let e = N(l),
                            n = W(l);
                          n || "fixed" !== e.position || (o = null),
                            (
                              r
                                ? !n && !o
                                : (!n &&
                                    "static" === e.position &&
                                    !!o &&
                                    ["absolute", "fixed"].includes(
                                      o.position
                                    )) ||
                                  (P(l) &&
                                    !n &&
                                    (function t(e, n) {
                                      let i = _(e);
                                      return (
                                        !(i === n || !H(i) || V(i)) &&
                                        ("fixed" === N(i).position || t(i, n))
                                      );
                                    })(t, l))
                            )
                              ? (i = i.filter((t) => t !== l))
                              : (o = e),
                            (l = _(l));
                        }
                        return e.set(t, i), i;
                      })(e, this._c)
                  : [].concat(n)),
                i,
              ],
              c = f[0],
              u = f.reduce((t, n) => {
                let i = K(e, n, l);
                return (
                  (t.top = r(i.top, t.top)),
                  (t.right = o(i.right, t.right)),
                  (t.bottom = o(i.bottom, t.bottom)),
                  (t.left = r(i.left, t.left)),
                  t
                );
              }, K(e, c, l));
            return {
              width: u.right - u.left,
              height: u.bottom - u.top,
              x: u.left,
              y: u.top,
            };
          },
          getOffsetParent: tt,
          getElementRects: te,
          getClientRects: function (t) {
            return Array.from(t.getClientRects());
          },
          getDimensions: function (t) {
            let { width: e, height: n } = I(t);
            return { width: e, height: n };
          },
          getScale: Y,
          isElement: H,
          isRTL: function (t) {
            return "rtl" === N(t).direction;
          },
        };
      function ti(t, e, n, i) {
        let l;
        void 0 === i && (i = {});
        let {
            ancestorScroll: c = !0,
            ancestorResize: u = !0,
            elementResize: a = "function" == typeof ResizeObserver,
            layoutShift: s = "function" == typeof IntersectionObserver,
            animationFrame: d = !1,
          } = i,
          h = q(t),
          p = c || u ? [...(h ? z(h) : []), ...z(e)] : [];
        p.forEach((t) => {
          c && t.addEventListener("scroll", n, { passive: !0 }),
            u && t.addEventListener("resize", n);
        });
        let m =
            h && s
              ? (function (t, e) {
                  let n,
                    i = null,
                    l = k(t);
                  function c() {
                    var t;
                    clearTimeout(n),
                      null == (t = i) || t.disconnect(),
                      (i = null);
                  }
                  return (
                    !(function u(a, s) {
                      void 0 === a && (a = !1), void 0 === s && (s = 1), c();
                      let {
                        left: d,
                        top: h,
                        width: p,
                        height: m,
                      } = t.getBoundingClientRect();
                      if ((a || e(), !p || !m)) return;
                      let g = f(h),
                        w = f(l.clientWidth - (d + p)),
                        y = {
                          rootMargin:
                            -g +
                            "px " +
                            -w +
                            "px " +
                            -f(l.clientHeight - (h + m)) +
                            "px " +
                            -f(d) +
                            "px",
                          threshold: r(0, o(1, s)) || 1,
                        },
                        x = !0;
                      function v(t) {
                        let e = t[0].intersectionRatio;
                        if (e !== s) {
                          if (!x) return u();
                          e
                            ? u(!1, e)
                            : (n = setTimeout(() => {
                                u(!1, 1e-7);
                              }, 1e3));
                        }
                        x = !1;
                      }
                      try {
                        i = new IntersectionObserver(v, {
                          ...y,
                          root: l.ownerDocument,
                        });
                      } catch (t) {
                        i = new IntersectionObserver(v, y);
                      }
                      i.observe(t);
                    })(!0),
                    c
                  );
                })(h, n)
              : null,
          g = -1,
          w = null;
        a &&
          ((w = new ResizeObserver((t) => {
            let [i] = t;
            i &&
              i.target === h &&
              w &&
              (w.unobserve(e),
              cancelAnimationFrame(g),
              (g = requestAnimationFrame(() => {
                var t;
                null == (t = w) || t.observe(e);
              }))),
              n();
          })),
          h && !d && w.observe(h),
          w.observe(e));
        let y = d ? X(t) : null;
        return (
          d &&
            (function e() {
              let i = X(t);
              y &&
                (i.x !== y.x ||
                  i.y !== y.y ||
                  i.width !== y.width ||
                  i.height !== y.height) &&
                n(),
                (y = i),
                (l = requestAnimationFrame(e));
            })(),
          n(),
          () => {
            var t;
            p.forEach((t) => {
              c && t.removeEventListener("scroll", n),
                u && t.removeEventListener("resize", n);
            }),
              null == m || m(),
              null == (t = w) || t.disconnect(),
              (w = null),
              d && cancelAnimationFrame(l);
          }
        );
      }
      let to = T,
        tr = function (t) {
          return (
            void 0 === t && (t = 0),
            {
              name: "offset",
              options: t,
              async fn(e) {
                var n, i;
                let { x: o, y: r, placement: l, middlewareData: f } = e,
                  c = await A(e, t);
                return l === (null == (n = f.offset) ? void 0 : n.placement) &&
                  null != (i = f.arrow) &&
                  i.alignmentOffset
                  ? {}
                  : { x: o + c.x, y: r + c.y, data: { ...c, placement: l } };
              },
            }
          );
        },
        tl = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "shift",
              options: t,
              async fn(e) {
                let { x: n, y: i, placement: l } = e,
                  {
                    mainAxis: f = !0,
                    crossAxis: c = !1,
                    limiter: u = {
                      fn: (t) => {
                        let { x: e, y: n } = t;
                        return { x: e, y: n };
                      },
                    },
                    ...a
                  } = s(t, e),
                  h = { x: n, y: i },
                  m = await T(e, a),
                  w = g(d(l)),
                  y = p(w),
                  x = h[y],
                  v = h[w];
                if (f) {
                  let t = "y" === y ? "top" : "left",
                    e = "y" === y ? "bottom" : "right",
                    n = x + m[t],
                    i = x - m[e];
                  x = r(n, o(x, i));
                }
                if (c) {
                  let t = "y" === w ? "top" : "left",
                    e = "y" === w ? "bottom" : "right",
                    n = v + m[t],
                    i = v - m[e];
                  v = r(n, o(v, i));
                }
                let b = u.fn({ ...e, [y]: x, [w]: v });
                return { ...b, data: { x: b.x - n, y: b.y - i } };
              },
            }
          );
        },
        tf = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "flip",
              options: t,
              async fn(e) {
                var n, i, o, r, l;
                let {
                    placement: f,
                    middlewareData: c,
                    rects: u,
                    initialPlacement: a,
                    platform: x,
                    elements: v,
                  } = e,
                  {
                    mainAxis: b = !0,
                    crossAxis: R = !0,
                    fallbackPlacements: L,
                    fallbackStrategy: E = "bestFit",
                    fallbackAxisSideDirection: A = "none",
                    flipAlignment: O = !0,
                    ...C
                  } = s(t, e);
                if (null != (n = c.arrow) && n.alignmentOffset) return {};
                let k = d(f),
                  D = d(a) === a,
                  H = await (null == x.isRTL ? void 0 : x.isRTL(v.floating)),
                  F =
                    L ||
                    (D || !O
                      ? [y(a)]
                      : (function (t) {
                          let e = y(t);
                          return [w(t), e, w(e)];
                        })(a));
                L ||
                  "none" === A ||
                  F.push(
                    ...(function (t, e, n, i) {
                      let o = h(t),
                        r = (function (t, e, n) {
                          let i = ["left", "right"],
                            o = ["right", "left"];
                          switch (t) {
                            case "top":
                            case "bottom":
                              if (n) return e ? o : i;
                              return e ? i : o;
                            case "left":
                            case "right":
                              return e ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                              return [];
                          }
                        })(d(t), "start" === n, i);
                      return (
                        o &&
                          ((r = r.map((t) => t + "-" + o)),
                          e && (r = r.concat(r.map(w)))),
                        r
                      );
                    })(a, O, A, H)
                  );
                let S = [a, ...F],
                  P = await T(e, C),
                  W = [],
                  M = (null == (i = c.flip) ? void 0 : i.overflows) || [];
                if ((b && W.push(P[k]), R)) {
                  let t = (function (t, e, n) {
                    void 0 === n && (n = !1);
                    let i = h(t),
                      o = p(g(t)),
                      r = m(o),
                      l =
                        "x" === o
                          ? i === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === i
                          ? "bottom"
                          : "top";
                    return (
                      e.reference[r] > e.floating[r] && (l = y(l)), [l, y(l)]
                    );
                  })(f, u, H);
                  W.push(P[t[0]], P[t[1]]);
                }
                if (
                  ((M = [...M, { placement: f, overflows: W }]),
                  !W.every((t) => t <= 0))
                ) {
                  let t = ((null == (o = c.flip) ? void 0 : o.index) || 0) + 1,
                    e = S[t];
                  if (e)
                    return {
                      data: { index: t, overflows: M },
                      reset: { placement: e },
                    };
                  let n =
                    null ==
                    (r = M.filter((t) => t.overflows[0] <= 0).sort(
                      (t, e) => t.overflows[1] - e.overflows[1]
                    )[0])
                      ? void 0
                      : r.placement;
                  if (!n)
                    switch (E) {
                      case "bestFit": {
                        let t =
                          null ==
                          (l = M.map((t) => [
                            t.placement,
                            t.overflows
                              .filter((t) => t > 0)
                              .reduce((t, e) => t + e, 0),
                          ]).sort((t, e) => t[1] - e[1])[0])
                            ? void 0
                            : l[0];
                        t && (n = t);
                        break;
                      }
                      case "initialPlacement":
                        n = a;
                    }
                  if (f !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        },
        tc = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "size",
              options: t,
              async fn(e) {
                let n, i;
                let { placement: l, rects: f, platform: c, elements: u } = e,
                  { apply: a = () => {}, ...p } = s(t, e),
                  m = await T(e, p),
                  w = d(l),
                  y = h(l),
                  x = "y" === g(l),
                  { width: v, height: b } = f.floating;
                "top" === w || "bottom" === w
                  ? ((n = w),
                    (i =
                      y ===
                      ((await (null == c.isRTL ? void 0 : c.isRTL(u.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((i = w), (n = "end" === y ? "top" : "bottom"));
                let R = b - m.top - m.bottom,
                  L = v - m.left - m.right,
                  E = o(b - m[n], R),
                  A = o(v - m[i], L),
                  O = !e.middlewareData.shift,
                  C = E,
                  k = A;
                if (
                  (x ? (k = y || O ? o(A, L) : L) : (C = y || O ? o(E, R) : R),
                  O && !y)
                ) {
                  let t = r(m.left, 0),
                    e = r(m.right, 0),
                    n = r(m.top, 0),
                    i = r(m.bottom, 0);
                  x
                    ? (k =
                        v -
                        2 * (0 !== t || 0 !== e ? t + e : r(m.left, m.right)))
                    : (C =
                        b -
                        2 * (0 !== n || 0 !== i ? n + i : r(m.top, m.bottom)));
                }
                await a({ ...e, availableWidth: k, availableHeight: C });
                let D = await c.getDimensions(u.floating);
                return v !== D.width || b !== D.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        },
        tu = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              name: "hide",
              options: t,
              async fn(e) {
                let { rects: n } = e,
                  { strategy: i = "referenceHidden", ...o } = s(t, e);
                switch (i) {
                  case "referenceHidden": {
                    let t = L(
                      await T(e, { ...o, elementContext: "reference" }),
                      n.reference
                    );
                    return {
                      data: {
                        referenceHiddenOffsets: t,
                        referenceHidden: E(t),
                      },
                    };
                  }
                  case "escaped": {
                    let t = L(
                      await T(e, { ...o, altBoundary: !0 }),
                      n.floating
                    );
                    return { data: { escapedOffsets: t, escaped: E(t) } };
                  }
                  default:
                    return {};
                }
              },
            }
          );
        },
        ta = (t) => ({
          name: "arrow",
          options: t,
          async fn(e) {
            let {
                x: n,
                y: i,
                placement: l,
                rects: f,
                platform: c,
                elements: u,
                middlewareData: a,
              } = e,
              { element: d, padding: w = 0 } = s(t, e) || {};
            if (null == d) return {};
            let y = x(w),
              v = { x: n, y: i },
              b = p(g(l)),
              R = m(b),
              T = await c.getDimensions(d),
              L = "y" === b,
              E = L ? "clientHeight" : "clientWidth",
              A = f.reference[R] + f.reference[b] - v[b] - f.floating[R],
              O = v[b] - f.reference[b],
              C = await (null == c.getOffsetParent
                ? void 0
                : c.getOffsetParent(d)),
              k = C ? C[E] : 0;
            (k && (await (null == c.isElement ? void 0 : c.isElement(C)))) ||
              (k = u.floating[E] || f.floating[R]);
            let D = k / 2 - T[R] / 2 - 1,
              H = o(y[L ? "top" : "left"], D),
              F = o(y[L ? "bottom" : "right"], D),
              S = k - T[R] - F,
              P = k / 2 - T[R] / 2 + (A / 2 - O / 2),
              W = r(H, o(P, S)),
              M =
                !a.arrow &&
                null != h(l) &&
                P !== W &&
                f.reference[R] / 2 - (P < H ? H : F) - T[R] / 2 < 0,
              V = M ? (P < H ? P - H : P - S) : 0;
            return {
              [b]: v[b] + V,
              data: {
                [b]: W,
                centerOffset: P - W - V,
                ...(M && { alignmentOffset: V }),
              },
              reset: M,
            };
          },
        }),
        ts = function (t) {
          return (
            void 0 === t && (t = {}),
            {
              options: t,
              fn(e) {
                let {
                    x: n,
                    y: i,
                    placement: o,
                    rects: r,
                    middlewareData: l,
                  } = e,
                  {
                    offset: f = 0,
                    mainAxis: c = !0,
                    crossAxis: u = !0,
                  } = s(t, e),
                  a = { x: n, y: i },
                  h = g(o),
                  m = p(h),
                  w = a[m],
                  y = a[h],
                  x = s(f, e),
                  v =
                    "number" == typeof x
                      ? { mainAxis: x, crossAxis: 0 }
                      : { mainAxis: 0, crossAxis: 0, ...x };
                if (c) {
                  let t = "y" === m ? "height" : "width",
                    e = r.reference[m] - r.floating[t] + v.mainAxis,
                    n = r.reference[m] + r.reference[t] - v.mainAxis;
                  w < e ? (w = e) : w > n && (w = n);
                }
                if (u) {
                  var b, R;
                  let t = "y" === m ? "width" : "height",
                    e = ["top", "left"].includes(d(o)),
                    n =
                      r.reference[h] -
                      r.floating[t] +
                      ((e && (null == (b = l.offset) ? void 0 : b[h])) || 0) +
                      (e ? 0 : v.crossAxis),
                    i =
                      r.reference[h] +
                      r.reference[t] +
                      (e ? 0 : (null == (R = l.offset) ? void 0 : R[h]) || 0) -
                      (e ? v.crossAxis : 0);
                  y < n ? (y = n) : y > i && (y = i);
                }
                return { [m]: w, [h]: y };
              },
            }
          );
        },
        td = (t, e, n) => {
          let i = new Map(),
            o = { platform: tn, ...n },
            r = { ...o.platform, _c: i };
          return R(t, e, { ...o, platform: r });
        };
    },
  },
]);
