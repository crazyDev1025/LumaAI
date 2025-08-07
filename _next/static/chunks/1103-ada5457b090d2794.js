(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1103],
  {
    29864: function (t, e, r) {
      "use strict";
      r.d(e, {
        V: function () {
          return u;
        },
      });
      var n = r(83112),
        i = r(54638);
      /*!
       * @gsap/react 2.1.1
       * https://gsap.com
       *
       * Copyright 2008-2024, GreenSock. All rights reserved.
       * Subject to the terms at https://gsap.com/standard-license or for
       * Club GSAP members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ let s =
          "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
        o = (t) => t && !Array.isArray(t) && "object" == typeof t,
        a = [],
        l = {},
        c = i.ZP,
        u = (t, e = a) => {
          let r = l;
          o(t)
            ? ((r = t),
              (t = null),
              (e = "dependencies" in r ? r.dependencies : a))
            : o(e) && (e = "dependencies" in (r = e) ? r.dependencies : a),
            t &&
              "function" != typeof t &&
              console.warn(
                "First parameter must be a function or config object"
              );
          let { scope: i, revertOnUpdate: u } = r,
            h = (0, n.useRef)(!1),
            p = (0, n.useRef)(c.context(() => {}, i)),
            f = (0, n.useRef)((t) => p.current.add(null, t)),
            d = e && e.length && !u;
          return (
            s(() => {
              if ((t && p.current.add(t, i), !d || !h.current))
                return () => p.current.revert();
            }, e),
            d && s(() => ((h.current = !0), () => p.current.revert()), a),
            { context: p.current, contextSafe: f.current }
          );
        };
      (u.register = (t) => {
        c = t;
      }),
        (u.headless = !0);
    },
    33293: function (t, e) {
      var r, n, i, s, o, a, l, c, u, h, p, f, d, g, v, m, y, x, w;
      (r = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi),
        (n = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi),
        (i = Math.PI / 180),
        (s = Math.sin),
        (o = Math.cos),
        (a = Math.abs),
        (l = Math.sqrt),
        (c = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        }),
        (p = function () {
          return (
            u ||
            ("undefined" != typeof window &&
              (u = window.gsap) &&
              u.registerPlugin &&
              u)
          );
        }),
        (f = function () {
          (u = p())
            ? (u.registerEase("_CE", w.create), (h = 1))
            : console.warn("Please gsap.registerPlugin(CustomEase)");
        }),
        (d = function (t) {
          return ~~(1e3 * t + (t < 0 ? -0.5 : 0.5)) / 1e3;
        }),
        (g = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi),
        (v = /[cLlsSaAhHvVtTqQ]/g),
        (m = function (t) {
          var e,
            r = t.length,
            n = 1e20;
          for (e = 1; e < r; e += 6) +t[e] < n && (n = +t[e]);
          return n;
        }),
        (y = function (t, e, r) {
          r || 0 === r || (r = Math.max(+t[t.length - 1], +t[1]));
          var n,
            i = -1 * +t[0],
            s = -r,
            o = t.length,
            a = 1 / (+t[o - 2] + i),
            l =
              -e ||
              (Math.abs(+t[o - 1] - +t[1]) < 0.01 * (+t[o - 2] - +t[0])
                ? m(t) + s
                : +t[o - 1] + s);
          for (n = 0, l = l ? 1 / l : -a; n < o; n += 2)
            (t[n] = (+t[n] + i) * a), (t[n + 1] = (+t[n + 1] + s) * l);
        }),
        (x = function t(e, r, n, i, s, o, a, l, c, u, h) {
          var p,
            f = (e + n) / 2,
            d = (r + i) / 2,
            g = (n + s) / 2,
            v = (i + o) / 2,
            m = (s + a) / 2,
            y = (o + l) / 2,
            x = (f + g) / 2,
            w = (d + v) / 2,
            b = (g + m) / 2,
            S = (v + y) / 2,
            _ = (x + b) / 2,
            M = (w + S) / 2,
            E = a - e,
            T = l - r,
            O = Math.abs((n - a) * T - (i - l) * E),
            P = Math.abs((s - a) * T - (o - l) * E);
          return (
            u ||
              ((u = [
                { x: e, y: r },
                { x: a, y: l },
              ]),
              (h = 1)),
            u.splice(h || u.length - 1, 0, { x: _, y: M }),
            (O + P) * (O + P) > c * (E * E + T * T) &&
              ((p = u.length),
              t(e, r, f, d, x, w, _, M, c, u, h),
              t(_, M, b, S, m, y, a, l, c, u, h + 1 + (u.length - p))),
            u
          );
        }),
        (w = (function () {
          function t(t, e, r) {
            h || f(), (this.id = t), this.setData(e, r);
          }
          var e = t.prototype;
          return (
            (e.setData = function (t, e) {
              e = e || {};
              var c,
                h,
                p,
                f,
                d,
                m,
                w,
                b,
                S,
                _ = (t = t || "0,0,1,1").match(g),
                M = 1,
                E = [],
                T = [],
                O = e.precision || 1,
                P = O <= 1;
              if (
                ((this.data = t),
                (v.test(t) || (~t.indexOf("M") && 0 > t.indexOf("C"))) &&
                  (_ = (function (t) {
                    var e,
                      c,
                      u,
                      h,
                      p,
                      f,
                      d,
                      g,
                      v,
                      m,
                      y,
                      x,
                      w,
                      b,
                      S,
                      _ =
                        (t + "")
                          .replace(n, function (t) {
                            var e = +t;
                            return e < 1e-4 && e > -0.0001 ? 0 : e;
                          })
                          .match(r) || [],
                      M = [],
                      E = 0,
                      T = 0,
                      O = 2 / 3,
                      P = _.length,
                      C = 0,
                      k = "ERROR: malformed path: " + t,
                      z = function (t, e, r, n) {
                        (m = (r - t) / 3),
                          (y = (n - e) / 3),
                          d.push(t + m, e + y, r - m, n - y, r, n);
                      };
                    if (!t || !isNaN(_[0]) || isNaN(_[1]))
                      return console.log(k), M;
                    for (e = 0; e < P; e++)
                      if (
                        ((w = p),
                        isNaN(_[e])
                          ? (f = (p = _[e].toUpperCase()) !== _[e])
                          : e--,
                        (u = +_[e + 1]),
                        (h = +_[e + 2]),
                        f && ((u += E), (h += T)),
                        e || ((g = u), (v = h)),
                        "M" === p)
                      )
                        d && (d.length < 8 ? (M.length -= 1) : (C += d.length)),
                          (E = g = u),
                          (T = v = h),
                          (d = [u, h]),
                          M.push(d),
                          (e += 2),
                          (p = "L");
                      else if ("C" === p)
                        d || (d = [0, 0]),
                          f || (E = T = 0),
                          d.push(
                            u,
                            h,
                            E + 1 * _[e + 3],
                            T + 1 * _[e + 4],
                            (E += 1 * _[e + 5]),
                            (T += 1 * _[e + 6])
                          ),
                          (e += 6);
                      else if ("S" === p)
                        (m = E),
                          (y = T),
                          ("C" === w || "S" === w) &&
                            ((m += E - d[d.length - 4]),
                            (y += T - d[d.length - 3])),
                          f || (E = T = 0),
                          d.push(
                            m,
                            y,
                            u,
                            h,
                            (E += 1 * _[e + 3]),
                            (T += 1 * _[e + 4])
                          ),
                          (e += 4);
                      else if ("Q" === p)
                        (m = E + (u - E) * O),
                          (y = T + (h - T) * O),
                          f || (E = T = 0),
                          (E += 1 * _[e + 3]),
                          (T += 1 * _[e + 4]),
                          d.push(m, y, E + (u - E) * O, T + (h - T) * O, E, T),
                          (e += 4);
                      else if ("T" === p)
                        (m = E - d[d.length - 4]),
                          (y = T - d[d.length - 3]),
                          d.push(
                            E + m,
                            T + y,
                            u + (E + 1.5 * m - u) * O,
                            h + (T + 1.5 * y - h) * O,
                            (E = u),
                            (T = h)
                          ),
                          (e += 2);
                      else if ("H" === p) z(E, T, (E = u), T), (e += 1);
                      else if ("V" === p)
                        z(E, T, E, (T = u + (f ? T - E : 0))), (e += 1);
                      else if ("L" === p || "Z" === p)
                        "Z" === p && ((u = g), (h = v), (d.closed = !0)),
                          ("L" === p || a(E - u) > 0.5 || a(T - h) > 0.5) &&
                            (z(E, T, u, h), "L" === p && (e += 2)),
                          (E = u),
                          (T = h);
                      else if ("A" === p) {
                        if (
                          ((b = _[e + 4]),
                          (S = _[e + 5]),
                          (m = _[e + 6]),
                          (y = _[e + 7]),
                          (c = 7),
                          b.length > 1 &&
                            (b.length < 3
                              ? ((y = m), (m = S), c--)
                              : ((y = S), (m = b.substr(2)), (c -= 2)),
                            (S = b.charAt(1)),
                            (b = b.charAt(0))),
                          (x = (function (t, e, r, n, c, u, h, p, f) {
                            if (t !== p || e !== f) {
                              (r = a(r)), (n = a(n));
                              var d = (c % 360) * i,
                                g = o(d),
                                v = s(d),
                                m = Math.PI,
                                y = 2 * m,
                                x = (t - p) / 2,
                                w = (e - f) / 2,
                                b = g * x + v * w,
                                S = -v * x + g * w,
                                _ = b * b,
                                M = S * S,
                                E = _ / (r * r) + M / (n * n);
                              E > 1 && ((r = l(E) * r), (n = l(E) * n));
                              var T = r * r,
                                O = n * n,
                                P = (T * O - T * M - O * _) / (T * M + O * _);
                              P < 0 && (P = 0);
                              var C = (u === h ? -1 : 1) * l(P),
                                k = ((r * S) / n) * C,
                                z = -(((n * b) / r) * C),
                                A = (t + p) / 2 + (g * k - v * z),
                                R = (e + f) / 2 + (v * k + g * z),
                                N = (b - k) / r,
                                D = (S - z) / n,
                                F = (-b - k) / r,
                                L = (-S - z) / n,
                                Y = N * N + D * D,
                                W = (D < 0 ? -1 : 1) * Math.acos(N / l(Y)),
                                B =
                                  (N * L - D * F < 0 ? -1 : 1) *
                                  Math.acos(
                                    (N * F + D * L) / l(Y * (F * F + L * L))
                                  );
                              isNaN(B) && (B = m),
                                !h && B > 0 ? (B -= y) : h && B < 0 && (B += y),
                                (W %= y);
                              var X,
                                I = Math.ceil(a((B %= y)) / (y / 4)),
                                H = [],
                                V = B / I,
                                q = ((4 / 3) * s(V / 2)) / (1 + o(V / 2)),
                                U = g * r,
                                G = v * r,
                                j = -(v * n),
                                Z = g * n;
                              for (X = 0; X < I; X++)
                                (b = o((c = W + X * V))),
                                  (S = s(c)),
                                  (N = o((c += V))),
                                  (D = s(c)),
                                  H.push(
                                    b - q * S,
                                    S + q * b,
                                    N + q * D,
                                    D - q * N,
                                    N,
                                    D
                                  );
                              for (X = 0; X < H.length; X += 2)
                                (b = H[X]),
                                  (S = H[X + 1]),
                                  (H[X] = b * U + S * j + A),
                                  (H[X + 1] = b * G + S * Z + R);
                              return (H[X - 2] = p), (H[X - 1] = f), H;
                            }
                          })(
                            E,
                            T,
                            +_[e + 1],
                            +_[e + 2],
                            +_[e + 3],
                            +b,
                            +S,
                            (f ? E : 0) + 1 * m,
                            (f ? T : 0) + 1 * y
                          )),
                          (e += c),
                          x)
                        )
                          for (c = 0; c < x.length; c++) d.push(x[c]);
                        (E = d[d.length - 2]), (T = d[d.length - 1]);
                      } else console.log(k);
                    return (
                      (e = d.length) < 6
                        ? (M.pop(), (e = 0))
                        : d[0] === d[e - 2] &&
                          d[1] === d[e - 1] &&
                          (d.closed = !0),
                      (M.totalPoints = C + e),
                      M
                    );
                  })(t)[0]),
                4 === (c = _.length))
              )
                _.unshift(0, 0), _.push(1, 1), (c = 8);
              else if ((c - 2) % 6) throw "Invalid CustomEase";
              for (
                (0 != +_[0] || 1 != +_[c - 2]) && y(_, e.height, e.originY),
                  this.segment = _,
                  f = 2;
                f < c;
                f += 6
              )
                (h = { x: +_[f - 2], y: +_[f - 1] }),
                  (p = { x: +_[f + 4], y: +_[f + 5] }),
                  E.push(h, p),
                  x(
                    h.x,
                    h.y,
                    +_[f],
                    +_[f + 1],
                    +_[f + 2],
                    +_[f + 3],
                    p.x,
                    p.y,
                    1 / (2e5 * O),
                    E,
                    E.length - 1
                  );
              for (f = 0, c = E.length; f < c; f++)
                (w = E[f]),
                  (b = E[f - 1] || w),
                  (w.x > b.x || (b.y !== w.y && b.x === w.x) || w === b) &&
                  w.x <= 1
                    ? ((b.cx = w.x - b.x),
                      (b.cy = w.y - b.y),
                      (b.n = w),
                      (b.nx = w.x),
                      P &&
                        f > 1 &&
                        Math.abs(b.cy / b.cx - E[f - 2].cy / E[f - 2].cx) > 2 &&
                        (P = 0),
                      b.cx < M &&
                        (b.cx
                          ? (M = b.cx)
                          : ((b.cx = 0.001),
                            f === c - 1 &&
                              ((b.x -= 0.001),
                              (M = Math.min(M, 0.001)),
                              (P = 0)))))
                    : (E.splice(f--, 1), c--);
              if (((d = 1 / (c = (1 / M + 1) | 0)), (m = 0), (w = E[0]), P)) {
                for (f = 0; f < c; f++)
                  (S = f * d),
                    w.nx < S && (w = E[++m]),
                    (h = w.y + ((S - w.x) / w.cx) * w.cy),
                    (T[f] = { x: S, cx: d, y: h, cy: 0, nx: 9 }),
                    f && (T[f - 1].cy = h - T[f - 1].y);
                T[c - 1].cy = E[E.length - 1].y - h;
              } else {
                for (f = 0; f < c; f++)
                  w.nx < f * d && (w = E[++m]), (T[f] = w);
                m < E.length - 1 && (T[f - 1] = E[E.length - 2]);
              }
              return (
                (this.ease = function (t) {
                  var e = T[(t * c) | 0] || T[c - 1];
                  return e.nx < t && (e = e.n), e.y + ((t - e.x) / e.cx) * e.cy;
                }),
                (this.ease.custom = this),
                this.id && u && u.registerEase(this.id, this.ease),
                this
              );
            }),
            (e.getSVGData = function (e) {
              return t.getSVGData(this, e);
            }),
            (t.create = function (e, r, n) {
              return new t(e, r, n).ease;
            }),
            (t.register = function (t) {
              (u = t), f();
            }),
            (t.get = function (t) {
              return u.parseEase(t);
            }),
            (t.getSVGData = function (e, r) {
              var n,
                i,
                s,
                o,
                a,
                l,
                h,
                p,
                f,
                g,
                v = (r = r || {}).width || 100,
                m = r.height || 100,
                y = r.x || 0,
                x = (r.y || 0) + m,
                w = u.utils.toArray(r.path)[0];
              if (
                (r.invert && ((m = -m), (x = 0)),
                "string" == typeof e && (e = u.parseEase(e)),
                e.custom && (e = e.custom),
                e instanceof t)
              )
                n = (function (t) {
                  "number" == typeof t[0] && (t = [t]);
                  var e,
                    r,
                    n,
                    i,
                    s = "",
                    o = t.length;
                  for (r = 0; r < o; r++) {
                    for (
                      s += "M" + c((i = t[r])[0]) + "," + c(i[1]) + " C",
                        e = i.length,
                        n = 2;
                      n < e;
                      n++
                    )
                      s +=
                        c(i[n++]) +
                        "," +
                        c(i[n++]) +
                        " " +
                        c(i[n++]) +
                        "," +
                        c(i[n++]) +
                        " " +
                        c(i[n++]) +
                        "," +
                        c(i[n]) +
                        " ";
                    i.closed && (s += "z");
                  }
                  return s;
                })(
                  (function (t, e, r, n, i, s, o) {
                    for (var a, l, c, u, h, p = t.length; --p > -1; )
                      for (c = 0, l = (a = t[p]).length; c < l; c += 2)
                        (u = a[c]),
                          (h = a[c + 1]),
                          (a[c] = u * e + 0 * h + s),
                          (a[c + 1] = 0 * u + h * i + o);
                    return (t._dirty = 1), t;
                  })([e.segment], v, 0, 0, -m, y, x)
                );
              else {
                for (
                  n = [y, x],
                    o = 1 / (h = Math.max(5, 200 * (r.precision || 1))),
                    h += 2,
                    p = 5 / h,
                    f = d(y + o * v),
                    i = ((g = d(x + -(e(o) * m))) - x) / (f - y),
                    s = 2;
                  s < h;
                  s++
                )
                  (a = d(y + s * o * v)),
                    (Math.abs(
                      ((l = d(x + -(e(s * o) * m))) - g) / (a - f) - i
                    ) > p ||
                      s === h - 1) &&
                      (n.push(f, g), (i = (l - g) / (a - f))),
                    (f = a),
                    (g = l);
                n = "M" + n.join(",");
              }
              return w && w.setAttribute("d", n), n;
            }),
            t
          );
        })()),
        p() && u.registerPlugin(w),
        (w.version = "3.12.5"),
        (e.CustomEase = w),
        (e.default = w),
        Object.defineProperty(e, "__esModule", { value: !0 });
    },
    79157: function (t, e) {
      var r,
        n,
        i,
        s,
        o,
        a,
        l,
        c,
        u,
        h,
        p,
        f,
        d,
        g,
        v,
        m,
        y,
        x,
        w,
        b,
        S,
        _,
        M,
        E,
        T,
        O,
        P,
        C,
        k,
        z,
        A,
        R,
        N,
        D,
        F,
        L,
        Y,
        W,
        B,
        X,
        I,
        H,
        V,
        q,
        U,
        G,
        j,
        Z,
        $,
        K,
        Q,
        J,
        tt,
        te,
        tr,
        tn,
        ti,
        ts,
        to,
        ta,
        tl,
        tc,
        tu,
        th,
        tp,
        tf,
        td,
        tg,
        tv,
        tm,
        ty,
        tx,
        tw,
        tb,
        tS,
        t_,
        tM,
        tE,
        tT,
        tO,
        tP,
        tC,
        tk,
        tz,
        tA,
        tR,
        tN,
        tD,
        tF,
        tL,
        tY,
        tW,
        tB,
        tX,
        tI,
        tH,
        tV,
        tq,
        tU,
        tG,
        tj,
        tZ,
        t$,
        tK,
        tQ,
        tJ,
        t0,
        t1,
        t2,
        t3,
        t5,
        t4,
        t6,
        t8,
        t9,
        t7,
        et,
        ee,
        er,
        en,
        ei,
        es,
        eo,
        ea,
        el,
        ec,
        eu,
        eh,
        ep,
        ef,
        ed,
        eg,
        ev,
        em,
        ey,
        ex,
        ew,
        eb,
        eS,
        e_,
        eM,
        eE,
        eT,
        eO,
        eP,
        eC,
        ek,
        ez,
        eA,
        eR,
        eN,
        eD,
        eF,
        eL,
        eY,
        eW,
        eB,
        eX,
        eI,
        eH,
        eV,
        eq,
        eU,
        eG,
        ej,
        eZ,
        e$,
        eK,
        eQ,
        eJ,
        e0,
        e1,
        e2,
        e3,
        e5,
        e4,
        e6,
        e8,
        e9;
      (g = function () {
        return (
          r ||
          ("undefined" != typeof window &&
            (r = window.gsap) &&
            r.registerPlugin &&
            r)
        );
      }),
        (v = 1),
        (m = []),
        (y = []),
        (x = []),
        (w = Date.now),
        (b = function (t, e) {
          return e;
        }),
        (S = function () {
          var t = u.core,
            e = t.bridge || {},
            r = t._scrollers,
            n = t._proxies;
          r.push.apply(r, y),
            n.push.apply(n, x),
            (y = r),
            (x = n),
            (b = function (t, r) {
              return e[t](r);
            });
        }),
        (_ = function (t, e) {
          return ~x.indexOf(t) && x[x.indexOf(t) + 1][e];
        }),
        (M = function (t) {
          return !!~h.indexOf(t);
        }),
        (E = function (t, e, r, n, i) {
          return t.addEventListener(e, r, { passive: !1 !== n, capture: !!i });
        }),
        (T = function (t, e, r, n) {
          return t.removeEventListener(e, r, !!n);
        }),
        (O = "scrollLeft"),
        (P = "scrollTop"),
        (C = function () {
          return (p && p.isPressed) || y.cache++;
        }),
        (A = {
          s: P,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: (z = {
            s: O,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: (k = function (t, e) {
              var r = function r(n) {
                if (n || 0 === n) {
                  v && (i.history.scrollRestoration = "manual");
                  var s = p && p.isPressed;
                  t((n = r.v = Math.round(n) || (p && p.iOS ? 1 : 0))),
                    (r.cacheID = y.cache),
                    s && b("ss", n);
                } else
                  (e || y.cache !== r.cacheID || b("ref")) &&
                    ((r.cacheID = y.cache), (r.v = t()));
                return r.v + r.offset;
              };
              return (r.offset = 0), t && r;
            })(function (t) {
              return arguments.length
                ? i.scrollTo(t, A.sc())
                : i.pageXOffset || s[O] || o[O] || a[O] || 0;
            }),
          }),
          sc: k(function (t) {
            return arguments.length
              ? i.scrollTo(z.sc(), t)
              : i.pageYOffset || s[P] || o[P] || a[P] || 0;
          }),
        }),
        (R = function (t, e) {
          return (
            ((e && e._ctx && e._ctx.selector) || r.utils.toArray)(t)[0] ||
            ("string" == typeof t && !1 !== r.config().nullTargetWarn
              ? console.warn("Element not found:", t)
              : null)
          );
        }),
        (N = function (t, e) {
          var n = e.s,
            i = e.sc;
          M(t) && (t = s.scrollingElement || o);
          var a = y.indexOf(t),
            l = i === A.sc ? 1 : 2;
          ~a || (a = y.push(t) - 1), y[a + l] || E(t, "scroll", C);
          var c = y[a + l],
            u =
              c ||
              (y[a + l] =
                k(_(t, n), !0) ||
                (M(t)
                  ? i
                  : k(function (e) {
                      return arguments.length ? (t[n] = e) : t[n];
                    })));
          return (
            (u.target = t),
            c || (u.smooth = "smooth" === r.getProperty(t, "scrollBehavior")),
            u
          );
        }),
        (D = function (t, e, r) {
          var n = t,
            i = t,
            s = w(),
            o = s,
            a = e || 50,
            l = Math.max(500, 3 * a),
            c = function (t, e) {
              var l = w();
              e || l - s > a
                ? ((i = n), (n = t), (o = s), (s = l))
                : r
                ? (n += t)
                : (n = i + ((t - i) / (l - o)) * (s - o));
            };
          return {
            update: c,
            reset: function () {
              (i = n = r ? 0 : n), (o = s = 0);
            },
            getVelocity: function (t) {
              var e = o,
                a = i,
                u = w();
              return (
                (t || 0 === t) && t !== n && c(t),
                s === o || u - o > l
                  ? 0
                  : ((n + (r ? a : -a)) / ((r ? u : s) - e)) * 1e3
              );
            },
          };
        }),
        (F = function (t, e) {
          return (
            e && !t._gsapAllow && t.preventDefault(),
            t.changedTouches ? t.changedTouches[0] : t
          );
        }),
        (L = function (t) {
          var e = Math.max.apply(Math, t),
            r = Math.min.apply(Math, t);
          return Math.abs(e) >= Math.abs(r) ? e : r;
        }),
        (Y = function () {
          (u = r.core.globals().ScrollTrigger) && u.core && S();
        }),
        (W = function (t) {
          return (
            (r = t || g()),
            !n &&
              r &&
              "undefined" != typeof document &&
              document.body &&
              ((i = window),
              (o = (s = document).documentElement),
              (a = s.body),
              (h = [i, s, o, a]),
              r.utils.clamp,
              (d = r.core.context || function () {}),
              (c = "onpointerenter" in a ? "pointer" : "mouse"),
              (l = B.isTouch =
                i.matchMedia &&
                i.matchMedia("(hover: none), (pointer: coarse)").matches
                  ? 1
                  : "ontouchstart" in i ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0
                  ? 2
                  : 0),
              (f = B.eventTypes =
                (
                  "ontouchstart" in o
                    ? "touchstart,touchmove,touchcancel,touchend"
                    : "onpointerdown" in o
                    ? "pointerdown,pointermove,pointercancel,pointerup"
                    : "mousedown,mousemove,mouseup,mouseup"
                ).split(",")),
              setTimeout(function () {
                return (v = 0);
              }, 500),
              Y(),
              (n = 1)),
            n
          );
        }),
        (z.op = A),
        (y.cache = 0),
        ((B = (function () {
          function t(t) {
            this.init(t);
          }
          return (
            (t.prototype.init = function (t) {
              n || W(r) || console.warn("Please gsap.registerPlugin(Observer)"),
                u || Y();
              var e = t.tolerance,
                h = t.dragMinimum,
                g = t.type,
                v = t.target,
                y = t.lineHeight,
                x = t.debounce,
                b = t.preventDefault,
                S = t.onStop,
                _ = t.onStopDelay,
                O = t.ignore,
                P = t.wheelSpeed,
                k = t.event,
                B = t.onDragStart,
                X = t.onDragEnd,
                I = t.onDrag,
                H = t.onPress,
                V = t.onRelease,
                q = t.onRight,
                U = t.onLeft,
                G = t.onUp,
                j = t.onDown,
                Z = t.onChangeX,
                $ = t.onChangeY,
                K = t.onChange,
                Q = t.onToggleX,
                J = t.onToggleY,
                tt = t.onHover,
                te = t.onHoverEnd,
                tr = t.onMove,
                tn = t.ignoreCheck,
                ti = t.isNormalizer,
                ts = t.onGestureStart,
                to = t.onGestureEnd,
                ta = t.onWheel,
                tl = t.onEnable,
                tc = t.onDisable,
                tu = t.onClick,
                th = t.scrollSpeed,
                tp = t.capture,
                tf = t.allowClicks,
                td = t.lockAxis,
                tg = t.onLockAxis;
              (this.target = v = R(v) || o),
                (this.vars = t),
                O && (O = r.utils.toArray(O)),
                (e = e || 1e-9),
                (h = h || 0),
                (P = P || 1),
                (th = th || 1),
                (g = g || "wheel,touch,pointer"),
                (x = !1 !== x),
                y || (y = parseFloat(i.getComputedStyle(a).lineHeight) || 22);
              var tv,
                tm,
                ty,
                tx,
                tw,
                tb,
                tS,
                t_ = this,
                tM = 0,
                tE = 0,
                tT = t.passive || !b,
                tO = N(v, z),
                tP = N(v, A),
                tC = tO(),
                tk = tP(),
                tz =
                  ~g.indexOf("touch") &&
                  !~g.indexOf("pointer") &&
                  "pointerdown" === f[0],
                tA = M(v),
                tR = v.ownerDocument || s,
                tN = [0, 0, 0],
                tD = [0, 0, 0],
                tF = 0,
                tL = function () {
                  return (tF = w());
                },
                tY = function (t, e) {
                  return (
                    ((t_.event = t) && O && ~O.indexOf(t.target)) ||
                    (e && tz && "touch" !== t.pointerType) ||
                    (tn && tn(t, e))
                  );
                },
                tW = function () {
                  var t = (t_.deltaX = L(tN)),
                    r = (t_.deltaY = L(tD)),
                    n = Math.abs(t) >= e,
                    i = Math.abs(r) >= e;
                  K && (n || i) && K(t_, t, r, tN, tD),
                    n &&
                      (q && t_.deltaX > 0 && q(t_),
                      U && t_.deltaX < 0 && U(t_),
                      Z && Z(t_),
                      Q && t_.deltaX < 0 != tM < 0 && Q(t_),
                      (tM = t_.deltaX),
                      (tN[0] = tN[1] = tN[2] = 0)),
                    i &&
                      (j && t_.deltaY > 0 && j(t_),
                      G && t_.deltaY < 0 && G(t_),
                      $ && $(t_),
                      J && t_.deltaY < 0 != tE < 0 && J(t_),
                      (tE = t_.deltaY),
                      (tD[0] = tD[1] = tD[2] = 0)),
                    (tx || ty) &&
                      (tr && tr(t_), ty && (I(t_), (ty = !1)), (tx = !1)),
                    tb && ((tb = !1), 1) && tg && tg(t_),
                    tw && (ta(t_), (tw = !1)),
                    (tv = 0);
                },
                tB = function (t, e, r) {
                  (tN[r] += t),
                    (tD[r] += e),
                    t_._vx.update(t),
                    t_._vy.update(e),
                    x ? tv || (tv = requestAnimationFrame(tW)) : tW();
                },
                tX = function (t, e) {
                  td &&
                    !tS &&
                    ((t_.axis = tS = Math.abs(t) > Math.abs(e) ? "x" : "y"),
                    (tb = !0)),
                    "y" !== tS && ((tN[2] += t), t_._vx.update(t, !0)),
                    "x" !== tS && ((tD[2] += e), t_._vy.update(e, !0)),
                    x ? tv || (tv = requestAnimationFrame(tW)) : tW();
                },
                tI = function (t) {
                  if (!tY(t, 1)) {
                    var e = (t = F(t, b)).clientX,
                      r = t.clientY,
                      n = e - t_.x,
                      i = r - t_.y,
                      s = t_.isDragging;
                    (t_.x = e),
                      (t_.y = r),
                      (s ||
                        Math.abs(t_.startX - e) >= h ||
                        Math.abs(t_.startY - r) >= h) &&
                        (I && (ty = !0),
                        s || (t_.isDragging = !0),
                        tX(n, i),
                        s || (B && B(t_)));
                  }
                },
                tH = (t_.onPress = function (t) {
                  tY(t, 1) ||
                    (t && t.button) ||
                    ((t_.axis = tS = null),
                    tm.pause(),
                    (t_.isPressed = !0),
                    (t = F(t)),
                    (tM = tE = 0),
                    (t_.startX = t_.x = t.clientX),
                    (t_.startY = t_.y = t.clientY),
                    t_._vx.reset(),
                    t_._vy.reset(),
                    E(ti ? v : tR, f[1], tI, tT, !0),
                    (t_.deltaX = t_.deltaY = 0),
                    H && H(t_));
                }),
                tV = (t_.onRelease = function (t) {
                  if (!tY(t, 1)) {
                    T(ti ? v : tR, f[1], tI, !0);
                    var e = !isNaN(t_.y - t_.startY),
                      n = t_.isDragging,
                      s =
                        n &&
                        (Math.abs(t_.x - t_.startX) > 3 ||
                          Math.abs(t_.y - t_.startY) > 3),
                      o = F(t);
                    !s &&
                      e &&
                      (t_._vx.reset(),
                      t_._vy.reset(),
                      b &&
                        tf &&
                        r.delayedCall(0.08, function () {
                          if (w() - tF > 300 && !t.defaultPrevented) {
                            if (t.target.click) t.target.click();
                            else if (tR.createEvent) {
                              var e = tR.createEvent("MouseEvents");
                              e.initMouseEvent(
                                "click",
                                !0,
                                !0,
                                i,
                                1,
                                o.screenX,
                                o.screenY,
                                o.clientX,
                                o.clientY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null
                              ),
                                t.target.dispatchEvent(e);
                            }
                          }
                        })),
                      (t_.isDragging = t_.isGesturing = t_.isPressed = !1),
                      S && n && !ti && tm.restart(!0),
                      X && n && X(t_),
                      V && V(t_, s);
                  }
                }),
                tq = function (t) {
                  return (
                    t.touches &&
                    t.touches.length > 1 &&
                    (t_.isGesturing = !0) &&
                    ts(t, t_.isDragging)
                  );
                },
                tU = function () {
                  return (t_.isGesturing = !1), to(t_);
                },
                tG = function (t) {
                  if (!tY(t)) {
                    var e = tO(),
                      r = tP();
                    tB((e - tC) * th, (r - tk) * th, 1),
                      (tC = e),
                      (tk = r),
                      S && tm.restart(!0);
                  }
                },
                tj = function (t) {
                  if (!tY(t)) {
                    (t = F(t, b)), ta && (tw = !0);
                    var e =
                      (1 === t.deltaMode
                        ? y
                        : 2 === t.deltaMode
                        ? i.innerHeight
                        : 1) * P;
                    tB(t.deltaX * e, t.deltaY * e, 0),
                      S && !ti && tm.restart(!0);
                  }
                },
                tZ = function (t) {
                  if (!tY(t)) {
                    var e = t.clientX,
                      r = t.clientY,
                      n = e - t_.x,
                      i = r - t_.y;
                    (t_.x = e),
                      (t_.y = r),
                      (tx = !0),
                      S && tm.restart(!0),
                      (n || i) && tX(n, i);
                  }
                },
                t$ = function (t) {
                  (t_.event = t), tt(t_);
                },
                tK = function (t) {
                  (t_.event = t), te(t_);
                },
                tQ = function (t) {
                  return tY(t) || (F(t, b) && tu(t_));
                };
              (tm = t_._dc =
                r
                  .delayedCall(_ || 0.25, function () {
                    t_._vx.reset(), t_._vy.reset(), tm.pause(), S && S(t_);
                  })
                  .pause()),
                (t_.deltaX = t_.deltaY = 0),
                (t_._vx = D(0, 50, !0)),
                (t_._vy = D(0, 50, !0)),
                (t_.scrollX = tO),
                (t_.scrollY = tP),
                (t_.isDragging = t_.isGesturing = t_.isPressed = !1),
                d(this),
                (t_.enable = function (t) {
                  return (
                    !t_.isEnabled &&
                      (E(tA ? tR : v, "scroll", C),
                      g.indexOf("scroll") >= 0 &&
                        E(tA ? tR : v, "scroll", tG, tT, tp),
                      g.indexOf("wheel") >= 0 && E(v, "wheel", tj, tT, tp),
                      ((g.indexOf("touch") >= 0 && l) ||
                        g.indexOf("pointer") >= 0) &&
                        (E(v, f[0], tH, tT, tp),
                        E(tR, f[2], tV),
                        E(tR, f[3], tV),
                        tf && E(v, "click", tL, !0, !0),
                        tu && E(v, "click", tQ),
                        ts && E(tR, "gesturestart", tq),
                        to && E(tR, "gestureend", tU),
                        tt && E(v, c + "enter", t$),
                        te && E(v, c + "leave", tK),
                        tr && E(v, c + "move", tZ)),
                      (t_.isEnabled = !0),
                      t && t.type && tH(t),
                      tl && tl(t_)),
                    t_
                  );
                }),
                (t_.disable = function () {
                  t_.isEnabled &&
                    (m.filter(function (t) {
                      return t !== t_ && M(t.target);
                    }).length || T(tA ? tR : v, "scroll", C),
                    t_.isPressed &&
                      (t_._vx.reset(),
                      t_._vy.reset(),
                      T(ti ? v : tR, f[1], tI, !0)),
                    T(tA ? tR : v, "scroll", tG, tp),
                    T(v, "wheel", tj, tp),
                    T(v, f[0], tH, tp),
                    T(tR, f[2], tV),
                    T(tR, f[3], tV),
                    T(v, "click", tL, !0),
                    T(v, "click", tQ),
                    T(tR, "gesturestart", tq),
                    T(tR, "gestureend", tU),
                    T(v, c + "enter", t$),
                    T(v, c + "leave", tK),
                    T(v, c + "move", tZ),
                    (t_.isEnabled = t_.isPressed = t_.isDragging = !1),
                    tc && tc(t_));
                }),
                (t_.kill = t_.revert =
                  function () {
                    t_.disable();
                    var t = m.indexOf(t_);
                    t >= 0 && m.splice(t, 1), p === t_ && (p = 0);
                  }),
                m.push(t_),
                ti && M(v) && (p = t_),
                t_.enable(k);
            }),
            (function (t, e) {
              for (var r = 0; r < e.length; r++) {
                var n = e[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(t, n.key, n);
              }
            })(t.prototype, [
              {
                key: "velocityX",
                get: function () {
                  return this._vx.getVelocity();
                },
              },
              {
                key: "velocityY",
                get: function () {
                  return this._vy.getVelocity();
                },
              },
            ]),
            t
          );
        })()).version = "3.12.5"),
        (B.create = function (t) {
          return new B(t);
        }),
        (B.register = W),
        (B.getAll = function () {
          return m.slice();
        }),
        (B.getById = function (t) {
          return m.filter(function (e) {
            return e.vars.id === t;
          })[0];
        }),
        g() && r.registerPlugin(B),
        (tE = 1),
        (tO = (tT = Date.now)()),
        (tP = 0),
        (tC = 0),
        (tk = function (t, e, r) {
          var n =
            tV(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
          return (r["_" + e + "Clamp"] = n), n ? t.substr(6, t.length - 7) : t;
        }),
        (tz = function (t, e) {
          return e && (!tV(t) || "clamp(" !== t.substr(0, 6))
            ? "clamp(" + t + ")"
            : t;
        }),
        (tA = function () {
          return (tt = 1);
        }),
        (tR = function () {
          return (tt = 0);
        }),
        (tN = function (t) {
          return t;
        }),
        (tD = function (t) {
          return Math.round(1e5 * t) / 1e5 || 0;
        }),
        (tF = function () {
          return "undefined" != typeof window;
        }),
        (tL = function () {
          return X || (tF() && (X = window.gsap) && X.registerPlugin && X);
        }),
        (tY = function (t) {
          return !!~G.indexOf(t);
        }),
        (tW = function (t) {
          return (
            ("Height" === t ? tm : H["inner" + t]) ||
            q["client" + t] ||
            U["client" + t]
          );
        }),
        (tB = function (t) {
          return (
            _(t, "getBoundingClientRect") ||
            (tY(t)
              ? function () {
                  return (eU.width = H.innerWidth), (eU.height = tm), eU;
                }
              : function () {
                  return er(t);
                })
          );
        }),
        (tX = function (t, e, r) {
          var n = r.d,
            i = r.d2,
            s = r.a;
          return (s = _(t, "getBoundingClientRect"))
            ? function () {
                return s()[n];
              }
            : function () {
                return (e ? tW(i) : t["client" + i]) || 0;
              };
        }),
        (tI = function (t, e) {
          var r = e.s,
            n = e.d2,
            i = e.d,
            s = e.a;
          return Math.max(
            0,
            (s = _(t, (r = "scroll" + n)))
              ? s() - tB(t)()[i]
              : tY(t)
              ? (q[r] || U[r]) - tW(n)
              : t[r] - t["offset" + n]
          );
        }),
        (tH = function (t, e) {
          for (var r = 0; r < ts.length; r += 3)
            (!e || ~e.indexOf(ts[r + 1])) && t(ts[r], ts[r + 1], ts[r + 2]);
        }),
        (tV = function (t) {
          return "string" == typeof t;
        }),
        (tq = function (t) {
          return "function" == typeof t;
        }),
        (tU = function (t) {
          return "number" == typeof t;
        }),
        (tG = function (t) {
          return "object" == typeof t;
        }),
        (tj = function (t, e, r) {
          return t && t.progress(e ? 0 : 1) && r && t.pause();
        }),
        (tZ = function (t, e) {
          if (t.enabled) {
            var r = t._ctx
              ? t._ctx.add(function () {
                  return e(t);
                })
              : e(t);
            r && r.totalTime && (t.callbackAnimation = r);
          }
        }),
        (t$ = Math.abs),
        (tK = "left"),
        (tQ = "right"),
        (tJ = "bottom"),
        (t0 = "width"),
        (t1 = "height"),
        (t2 = "Right"),
        (t3 = "Left"),
        (t5 = "Bottom"),
        (t4 = "padding"),
        (t6 = "margin"),
        (t8 = "Width"),
        (t9 = "Height"),
        (t7 = function (t) {
          return H.getComputedStyle(t);
        }),
        (et = function (t) {
          var e = t7(t).position;
          t.style.position = "absolute" === e || "fixed" === e ? e : "relative";
        }),
        (ee = function (t, e) {
          for (var r in e) r in t || (t[r] = e[r]);
          return t;
        }),
        (er = function (t, e) {
          var r =
              e &&
              "matrix(1, 0, 0, 1, 0, 0)" !== t7(t)[te] &&
              X.to(t, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              }).progress(1),
            n = t.getBoundingClientRect();
          return r && r.progress(0).kill(), n;
        }),
        (en = function (t, e) {
          var r = e.d2;
          return t["offset" + r] || t["client" + r] || 0;
        }),
        (ei = function (t) {
          var e,
            r = [],
            n = t.labels,
            i = t.duration();
          for (e in n) r.push(n[e] / i);
          return r;
        }),
        (es = function (t) {
          var e = X.utils.snap(t),
            r =
              Array.isArray(t) &&
              t.slice(0).sort(function (t, e) {
                return t - e;
              });
          return r
            ? function (t, n, i) {
                var s;
                if ((void 0 === i && (i = 0.001), !n)) return e(t);
                if (n > 0) {
                  for (t -= i, s = 0; s < r.length; s++)
                    if (r[s] >= t) return r[s];
                  return r[s - 1];
                }
                for (s = r.length, t += i; s--; ) if (r[s] <= t) return r[s];
                return r[0];
              }
            : function (r, n, i) {
                void 0 === i && (i = 0.001);
                var s = e(r);
                return !n || Math.abs(s - r) < i || s - r < 0 == n < 0
                  ? s
                  : e(n < 0 ? r - t : r + t);
              };
        }),
        (eo = function (t, e, r, n) {
          return r.split(",").forEach(function (r) {
            return t(e, r, n);
          });
        }),
        (ea = function (t, e, r, n, i) {
          return t.addEventListener(e, r, { passive: !n, capture: !!i });
        }),
        (el = function (t, e, r, n) {
          return t.removeEventListener(e, r, !!n);
        }),
        (ec = function (t, e, r) {
          (r = r && r.wheelHandler) && (t(e, "wheel", r), t(e, "touchmove", r));
        }),
        (eu = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal",
        }),
        (eh = { toggleActions: "play", anticipatePin: 0 }),
        (ep = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 }),
        (ef = function (t, e) {
          if (tV(t)) {
            var r = t.indexOf("="),
              n = ~r ? +(t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
            ~r &&
              (t.indexOf("%") > r && (n *= e / 100), (t = t.substr(0, r - 1))),
              (t =
                n +
                (t in ep
                  ? ep[t] * e
                  : ~t.indexOf("%")
                  ? (parseFloat(t) * e) / 100
                  : parseFloat(t) || 0));
          }
          return t;
        }),
        (ed = function (t, e, r, n, i, s, o, a) {
          var l = i.startColor,
            c = i.endColor,
            u = i.fontSize,
            h = i.indent,
            p = i.fontWeight,
            f = V.createElement("div"),
            d = tY(r) || "fixed" === _(r, "pinType"),
            g = -1 !== t.indexOf("scroller"),
            v = d ? U : r,
            m = -1 !== t.indexOf("start"),
            y = m ? l : c,
            x =
              "border-color:" +
              y +
              ";font-size:" +
              u +
              ";color:" +
              y +
              ";font-weight:" +
              p +
              ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return (
            (x += "position:" + ((g || a) && d ? "fixed;" : "absolute;")),
            (g || a || !d) &&
              (x += (n === A ? tQ : tJ) + ":" + (s + parseFloat(h)) + "px;"),
            o &&
              (x +=
                "box-sizing:border-box;text-align:left;width:" +
                o.offsetWidth +
                "px;"),
            (f._isStart = m),
            f.setAttribute(
              "class",
              "gsap-marker-" + t + (e ? " marker-" + e : "")
            ),
            (f.style.cssText = x),
            (f.innerText = e || 0 === e ? t + "-" + e : t),
            v.children[0] ? v.insertBefore(f, v.children[0]) : v.appendChild(f),
            (f._offset = f["offset" + n.op.d2]),
            eg(f, 0, n, m),
            f
          );
        }),
        (eg = function (t, e, r, n) {
          var i = { display: "block" },
            s = r[n ? "os2" : "p2"],
            o = r[n ? "p2" : "os2"];
          (t._isFlipped = n),
            (i[r.a + "Percent"] = n ? -100 : 0),
            (i[r.a] = n ? "1px" : 0),
            (i["border" + s + t8] = 1),
            (i["border" + o + t8] = 0),
            (i[r.p] = e + "px"),
            X.set(t, i);
        }),
        (ev = []),
        (em = {}),
        (ey = function () {
          return tT() - tP > 34 && (tb || (tb = requestAnimationFrame(eL)));
        }),
        (ex = function () {
          (tc && tc.isPressed && !(tc.startX > U.clientWidth)) ||
            (y.cache++,
            tc ? tb || (tb = requestAnimationFrame(eL)) : eL(),
            tP || eE("scrollStart"),
            (tP = tT()));
        }),
        (ew = function () {
          (tp = H.innerWidth), (th = H.innerHeight);
        }),
        (eb = function () {
          y.cache++,
            !(
              !J &&
              !tl &&
              !V.fullscreenElement &&
              !V.webkitFullscreenElement &&
              (!tu ||
                tp !== H.innerWidth ||
                Math.abs(H.innerHeight - th) > 0.25 * H.innerHeight)
            ) || j.restart(!0);
        }),
        (eS = {}),
        (e_ = []),
        (eM = function t() {
          return el(eJ, "scrollEnd", t) || eN(!0);
        }),
        (eE = function (t) {
          return (
            (eS[t] &&
              eS[t].map(function (t) {
                return t();
              })) ||
            e_
          );
        }),
        (eT = []),
        (eO = function (t) {
          for (var e = 0; e < eT.length; e += 5)
            (!t || (eT[e + 4] && eT[e + 4].query === t)) &&
              ((eT[e].style.cssText = eT[e + 1]),
              eT[e].getBBox && eT[e].setAttribute("transform", eT[e + 2] || ""),
              (eT[e + 3].uncache = 1));
        }),
        (eP = function (t, e) {
          var r;
          for (tr = 0; tr < ev.length; tr++)
            (r = ev[tr]) &&
              (!e || r._ctx === e) &&
              (t ? r.kill(1) : r.revert(!0, !0));
          (ty = !0), e && eO(e), e || eE("revert");
        }),
        (eC = function (t, e) {
          y.cache++,
            (e || !tS) &&
              y.forEach(function (t) {
                return tq(t) && t.cacheID++ && (t.rec = 0);
              }),
            tV(t) && (H.history.scrollRestoration = tg = t);
        }),
        (ek = 0),
        (ez = function () {
          if (t_ !== ek) {
            var t = (t_ = ek);
            requestAnimationFrame(function () {
              return t === ek && eN(!0);
            });
          }
        }),
        (eA = function () {
          U.appendChild(tv),
            (tm = (!tc && tv.offsetHeight) || H.innerHeight),
            U.removeChild(tv);
        }),
        (eR = function (t) {
          return Z(
            ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
          ).forEach(function (e) {
            return (e.style.display = t ? "none" : "block");
          });
        }),
        (eN = function (t, e) {
          if (tP && !t && !ty) {
            ea(eJ, "scrollEnd", eM);
            return;
          }
          eA(),
            (tS = eJ.isRefreshing = !0),
            y.forEach(function (t) {
              return tq(t) && ++t.cacheID && (t.rec = t());
            });
          var r = eE("refreshInit");
          to && eJ.sort(),
            e || eP(),
            y.forEach(function (t) {
              tq(t) &&
                (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0));
            }),
            ev.slice(0).forEach(function (t) {
              return t.refresh();
            }),
            (ty = !1),
            ev.forEach(function (t) {
              if (t._subPinOffset && t.pin) {
                var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  r = t.pin[e];
                t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - r), t.refresh();
              }
            }),
            (tx = 1),
            eR(!0),
            ev.forEach(function (t) {
              var e = tI(t.scroller, t._dir),
                r = "max" === t.vars.end || (t._endClamp && t.end > e),
                n = t._startClamp && t.start >= e;
              (r || n) &&
                t.setPositions(
                  n ? e - 1 : t.start,
                  r ? Math.max(n ? e : t.start + 1, e) : t.end,
                  !0
                );
            }),
            eR(!1),
            (tx = 0),
            r.forEach(function (t) {
              return t && t.render && t.render(-1);
            }),
            y.forEach(function (t) {
              tq(t) &&
                (t.smooth &&
                  requestAnimationFrame(function () {
                    return (t.target.style.scrollBehavior = "smooth");
                  }),
                t.rec && t(t.rec));
            }),
            eC(tg, 1),
            j.pause(),
            ek++,
            (tS = 2),
            eL(2),
            ev.forEach(function (t) {
              return tq(t.vars.onRefresh) && t.vars.onRefresh(t);
            }),
            (tS = eJ.isRefreshing = !1),
            eE("refresh");
        }),
        (eD = 0),
        (eF = 1),
        (eL = function (t) {
          if (2 === t || (!tS && !ty)) {
            (eJ.isUpdating = !0), tM && tM.update(0);
            var e = ev.length,
              r = tT(),
              n = r - tO >= 50,
              i = e && ev[0].scroll();
            if (
              ((eF = eD > i ? -1 : 1),
              tS || (eD = i),
              n &&
                (tP && !tt && r - tP > 200 && ((tP = 0), eE("scrollEnd")),
                (K = tO),
                (tO = r)),
              eF < 0)
            ) {
              for (tr = e; tr-- > 0; ) ev[tr] && ev[tr].update(0, n);
              eF = 1;
            } else for (tr = 0; tr < e; tr++) ev[tr] && ev[tr].update(0, n);
            eJ.isUpdating = !1;
          }
          tb = 0;
        }),
        (eW = (eY = [
          tK,
          "top",
          tJ,
          tQ,
          t6 + t5,
          t6 + t2,
          t6 + "Top",
          t6 + t3,
          "display",
          "flexShrink",
          "float",
          "zIndex",
          "gridColumnStart",
          "gridColumnEnd",
          "gridRowStart",
          "gridRowEnd",
          "gridArea",
          "justifySelf",
          "alignSelf",
          "placeSelf",
          "order",
        ]).concat([
          t0,
          t1,
          "boxSizing",
          "max" + t8,
          "max" + t9,
          "position",
          t6,
          t4,
          t4 + "Top",
          t4 + t2,
          t4 + t5,
          t4 + t3,
        ])),
        (eB = function (t, e, r) {
          eH(r);
          var n = t._gsap;
          if (n.spacerIsNative) eH(n.spacerState);
          else if (t._gsap.swappedIn) {
            var i = e.parentNode;
            i && (i.insertBefore(t, e), i.removeChild(e));
          }
          t._gsap.swappedIn = !1;
        }),
        (eX = function (t, e, r, n) {
          if (!t._gsap.swappedIn) {
            for (var i, s = eY.length, o = e.style, a = t.style; s--; )
              o[(i = eY[s])] = r[i];
            (o.position = "absolute" === r.position ? "absolute" : "relative"),
              "inline" === r.display && (o.display = "inline-block"),
              (a[tJ] = a[tQ] = "auto"),
              (o.flexBasis = r.flexBasis || "auto"),
              (o.overflow = "visible"),
              (o.boxSizing = "border-box"),
              (o[t0] = en(t, z) + "px"),
              (o[t1] = en(t, A) + "px"),
              (o[t4] = a[t6] = a.top = a[tK] = "0"),
              eH(n),
              (a[t0] = a["max" + t8] = r[t0]),
              (a[t1] = a["max" + t9] = r[t1]),
              (a[t4] = r[t4]),
              t.parentNode !== e &&
                (t.parentNode.insertBefore(e, t), e.appendChild(t)),
              (t._gsap.swappedIn = !0);
          }
        }),
        (eI = /([A-Z])/g),
        (eH = function (t) {
          if (t) {
            var e,
              r,
              n = t.t.style,
              i = t.length,
              s = 0;
            for ((t.t._gsap || X.core.getCache(t.t)).uncache = 1; s < i; s += 2)
              (r = t[s + 1]),
                (e = t[s]),
                r
                  ? (n[e] = r)
                  : n[e] &&
                    n.removeProperty(e.replace(eI, "-$1").toLowerCase());
          }
        }),
        (eV = function (t) {
          for (var e = eW.length, r = t.style, n = [], i = 0; i < e; i++)
            n.push(eW[i], r[eW[i]]);
          return (n.t = t), n;
        }),
        (eq = function (t, e, r) {
          for (var n, i = [], s = t.length, o = r ? 8 : 0; o < s; o += 2)
            (n = t[o]), i.push(n, n in e ? e[n] : t[o + 1]);
          return (i.t = t.t), i;
        }),
        (eU = { left: 0, top: 0 }),
        (eG = function (t, e, r, n, i, s, o, a, l, c, u, h, p, f) {
          tq(t) && (t = t(a)),
            tV(t) &&
              "max" === t.substr(0, 3) &&
              (t = h + ("=" === t.charAt(4) ? ef("0" + t.substr(3), r) : 0));
          var d,
            g,
            v,
            m = p ? p.time() : 0;
          if ((p && p.seek(0), isNaN(t) || (t = +t), tU(t)))
            p &&
              (t = X.utils.mapRange(
                p.scrollTrigger.start,
                p.scrollTrigger.end,
                0,
                h,
                t
              )),
              o && eg(o, r, n, !0);
          else {
            tq(e) && (e = e(a));
            var y,
              x,
              w,
              b,
              S = (t || "0").split(" ");
            (y = er((v = R(e, a) || U)) || {}).left ||
              y.top ||
              "none" !== t7(v).display ||
              ((b = v.style.display),
              (v.style.display = "block"),
              (y = er(v)),
              b ? (v.style.display = b) : v.style.removeProperty("display")),
              (x = ef(S[0], y[n.d])),
              (w = ef(S[1] || "0", r)),
              (t = y[n.p] - l[n.p] - c + x + i - w),
              o && eg(o, w, n, r - w < 20 || (o._isStart && w > 20)),
              (r -= r - w);
          }
          if ((f && ((a[f] = t || -0.001), t < 0 && (t = 0)), s)) {
            var _ = t + r,
              M = s._isStart;
            (d = "scroll" + n.d2),
              eg(
                s,
                _,
                n,
                (M && _ > 20) ||
                  (!M && (u ? Math.max(U[d], q[d]) : s.parentNode[d]) <= _ + 1)
              ),
              u &&
                ((l = er(o)),
                u && (s.style[n.op.p] = l[n.op.p] - n.op.m - s._offset + "px"));
          }
          return (
            p &&
              v &&
              ((d = er(v)),
              p.seek(h),
              (g = er(v)),
              (p._caScrollDist = d[n.p] - g[n.p]),
              (t = (t / p._caScrollDist) * h)),
            p && p.seek(m),
            p ? t : Math.round(t)
          );
        }),
        (ej = /(webkit|moz|length|cssText|inset)/i),
        (eZ = function (t, e, r, n) {
          if (t.parentNode !== e) {
            var i,
              s,
              o = t.style;
            if (e === U) {
              for (i in ((t._stOrig = o.cssText), (s = t7(t))))
                +i ||
                  ej.test(i) ||
                  !s[i] ||
                  "string" != typeof o[i] ||
                  "0" === i ||
                  (o[i] = s[i]);
              (o.top = r), (o.left = n);
            } else o.cssText = t._stOrig;
            (X.core.getCache(t).uncache = 1), e.appendChild(t);
          }
        }),
        (e$ = function (t, e, r) {
          var n = e,
            i = n;
          return function (e) {
            var s = Math.round(t());
            return (
              s !== n &&
                s !== i &&
                Math.abs(s - n) > 3 &&
                Math.abs(s - i) > 3 &&
                ((e = s), r && r()),
              (i = n),
              (n = e),
              e
            );
          };
        }),
        (eK = function (t, e, r) {
          var n = {};
          (n[e.p] = "+=" + r), X.set(t, n);
        }),
        (eQ = function (t, e) {
          var r = N(t, e),
            n = "_scroll" + e.p2,
            i = function e(i, s, o, a, l) {
              var c = e.tween,
                u = s.onComplete,
                h = {};
              o = o || r();
              var p = e$(r, o, function () {
                c.kill(), (e.tween = 0);
              });
              return (
                (l = (a && l) || 0),
                (a = a || i - o),
                c && c.kill(),
                (s[n] = i),
                (s.inherit = !1),
                (s.modifiers = h),
                (h[n] = function () {
                  return p(o + a * c.ratio + l * c.ratio * c.ratio);
                }),
                (s.onUpdate = function () {
                  y.cache++, e.tween && eL();
                }),
                (s.onComplete = function () {
                  (e.tween = 0), u && u.call(c);
                }),
                (c = e.tween = X.to(t, s))
              );
            };
          return (
            (t[n] = r),
            (r.wheelHandler = function () {
              return i.tween && i.tween.kill() && (i.tween = 0);
            }),
            ea(t, "wheel", r.wheelHandler),
            eJ.isTouch && ea(t, "touchmove", r.wheelHandler),
            i
          );
        }),
        ((eJ = (function () {
          function t(e, r) {
            I ||
              t.register(X) ||
              console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
              td(this),
              this.init(e, r);
          }
          return (
            (t.prototype.init = function (e, r) {
              if (
                ((this.progress = this.start = 0),
                this.vars && this.kill(!0, !0),
                !tC)
              ) {
                this.update = this.refresh = this.kill = tN;
                return;
              }
              var n,
                i,
                s,
                o,
                a,
                l,
                c,
                u,
                h,
                p,
                f,
                d,
                g,
                v,
                m,
                w,
                b,
                S,
                M,
                E,
                T,
                O,
                P,
                C,
                k,
                D,
                F,
                L,
                Y,
                W,
                B,
                I,
                G,
                j,
                Q,
                te,
                tn,
                ti,
                ts,
                tl,
                tc,
                tu = (e = ee(
                  tV(e) || tU(e) || e.nodeType ? { trigger: e } : e,
                  eh
                )),
                th = tu.onUpdate,
                tp = tu.toggleClass,
                tf = tu.id,
                td = tu.onToggle,
                tg = tu.onRefresh,
                tv = tu.scrub,
                tm = tu.trigger,
                ty = tu.pin,
                tb = tu.pinSpacing,
                t_ = tu.invalidateOnRefresh,
                tO = tu.anticipatePin,
                tA = tu.onScrubComplete,
                tR = tu.onSnapComplete,
                tF = tu.once,
                tL = tu.snap,
                tW = tu.pinReparent,
                tH = tu.pinSpacer,
                tK = tu.containerAnimation,
                tQ = tu.fastScrollEnd,
                tJ = tu.preventOverlaps,
                eo =
                  e.horizontal || (e.containerAnimation && !1 !== e.horizontal)
                    ? z
                    : A,
                ec = !tv && 0 !== tv,
                ep = R(e.scroller || H),
                eg = X.core.getCache(ep),
                ey = tY(ep),
                ew =
                  ("pinType" in e
                    ? e.pinType
                    : _(ep, "pinType") || (ey && "fixed")) === "fixed",
                eS = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                e_ = ec && e.toggleActions.split(" "),
                eE = "markers" in e ? e.markers : eh.markers,
                eT = ey ? 0 : parseFloat(t7(ep)["border" + eo.p2 + t8]) || 0,
                eO = this,
                eP =
                  e.onRefreshInit &&
                  function () {
                    return e.onRefreshInit(eO);
                  },
                eC = tX(ep, ey, eo),
                ek =
                  !ey || ~x.indexOf(ep)
                    ? tB(ep)
                    : function () {
                        return eU;
                      },
                eA = 0,
                eR = 0,
                eN = 0,
                eD = N(ep, eo);
              if (
                ((eO._startClamp = eO._endClamp = !1),
                (eO._dir = eo),
                (tO *= 45),
                (eO.scroller = ep),
                (eO.scroll = tK ? tK.time.bind(tK) : eD),
                (l = eD()),
                (eO.vars = e),
                (r = r || e.animation),
                "refreshPriority" in e &&
                  ((to = 1), -9999 === e.refreshPriority && (tM = eO)),
                (eg.tweenScroll = eg.tweenScroll || {
                  top: eQ(ep, A),
                  left: eQ(ep, z),
                }),
                (eO.tweenTo = s = eg.tweenScroll[eo.p]),
                (eO.scrubDuration = function (t) {
                  (Q = tU(t) && t)
                    ? j
                      ? j.duration(t)
                      : (j = X.to(r, {
                          ease: "expo",
                          totalProgress: "+=0",
                          inherit: !1,
                          duration: Q,
                          paused: !0,
                          onComplete: function () {
                            return tA && tA(eO);
                          },
                        }))
                    : (j && j.progress(1).kill(), (j = 0));
                }),
                r &&
                  ((r.vars.lazy = !1),
                  (r._initted && !eO.isReverted) ||
                    (!1 !== r.vars.immediateRender &&
                      !1 !== e.immediateRender &&
                      r.duration() &&
                      r.render(0, !0, !0)),
                  (eO.animation = r.pause()),
                  (r.scrollTrigger = eO),
                  eO.scrubDuration(tv),
                  (I = 0),
                  tf || (tf = r.vars.id)),
                tL &&
                  ((!tG(tL) || tL.push) && (tL = { snapTo: tL }),
                  "scrollBehavior" in U.style &&
                    X.set(ey ? [U, q] : ep, { scrollBehavior: "auto" }),
                  y.forEach(function (t) {
                    return (
                      tq(t) &&
                      t.target === (ey ? V.scrollingElement || q : ep) &&
                      (t.smooth = !1)
                    );
                  }),
                  (a = tq(tL.snapTo)
                    ? tL.snapTo
                    : "labels" === tL.snapTo
                    ? ((n = r),
                      function (t) {
                        return X.utils.snap(ei(n), t);
                      })
                    : "labelsDirectional" === tL.snapTo
                    ? ((i = r),
                      function (t, e) {
                        return es(ei(i))(t, e.direction);
                      })
                    : !1 !== tL.directional
                    ? function (t, e) {
                        return es(tL.snapTo)(
                          t,
                          tT() - eR < 500 ? 0 : e.direction
                        );
                      }
                    : X.utils.snap(tL.snapTo)),
                  (te = tG((te = tL.duration || { min: 0.1, max: 2 }))
                    ? $(te.min, te.max)
                    : $(te, te)),
                  (tn = X.delayedCall(tL.delay || Q / 2 || 0.1, function () {
                    var t = eD(),
                      e = tT() - eR < 500,
                      n = s.tween;
                    if (
                      (e || 10 > Math.abs(eO.getVelocity())) &&
                      !n &&
                      !tt &&
                      eA !== t
                    ) {
                      var i,
                        o,
                        l = (t - u) / w,
                        c = r && !ec ? r.totalProgress() : l,
                        p = e ? 0 : ((c - G) / (tT() - K)) * 1e3 || 0,
                        f = X.utils.clamp(-l, 1 - l, (t$(p / 2) * p) / 0.185),
                        d = l + (!1 === tL.inertia ? 0 : f),
                        g = tL,
                        v = g.onStart,
                        m = g.onInterrupt,
                        y = g.onComplete;
                      if (
                        (tU((i = a(d, eO))) || (i = d),
                        (o = Math.round(u + i * w)),
                        t <= h && t >= u && o !== t)
                      ) {
                        if (n && !n._initted && n.data <= t$(o - t)) return;
                        !1 === tL.inertia && (f = i - l),
                          s(
                            o,
                            {
                              duration: te(
                                t$(
                                  (0.185 * Math.max(t$(d - c), t$(i - c))) /
                                    p /
                                    0.05 || 0
                                )
                              ),
                              ease: tL.ease || "power3",
                              data: t$(o - t),
                              onInterrupt: function () {
                                return tn.restart(!0) && m && m(eO);
                              },
                              onComplete: function () {
                                eO.update(),
                                  (eA = eD()),
                                  r &&
                                    (j
                                      ? j.resetTo(
                                          "totalProgress",
                                          i,
                                          r._tTime / r._tDur
                                        )
                                      : r.progress(i)),
                                  (I = G =
                                    r && !ec ? r.totalProgress() : eO.progress),
                                  tR && tR(eO),
                                  y && y(eO);
                              },
                            },
                            t,
                            f * w,
                            o - t - f * w
                          ),
                          v && v(eO, s.tween);
                      }
                    } else eO.isActive && eA !== t && tn.restart(!0);
                  }).pause())),
                tf && (em[tf] = eO),
                (tc =
                  (tm = eO.trigger = R(tm || (!0 !== ty && ty))) &&
                  tm._gsap &&
                  tm._gsap.stRevert) && (tc = tc(eO)),
                (ty = !0 === ty ? tm : R(ty)),
                tV(tp) && (tp = { targets: tm, className: tp }),
                ty &&
                  (!1 === tb ||
                    tb === t6 ||
                    (tb =
                      (!!tb ||
                        !ty.parentNode ||
                        !ty.parentNode.style ||
                        "flex" !== t7(ty.parentNode).display) &&
                      t4),
                  (eO.pin = ty),
                  (o = X.core.getCache(ty)).spacer
                    ? (b = o.pinState)
                    : (tH &&
                        ((tH = R(tH)) &&
                          !tH.nodeType &&
                          (tH = tH.current || tH.nativeElement),
                        (o.spacerIsNative = !!tH),
                        tH && (o.spacerState = eV(tH))),
                      (o.spacer = E = tH || V.createElement("div")),
                      E.classList.add("pin-spacer"),
                      tf && E.classList.add("pin-spacer-" + tf),
                      (o.pinState = b = eV(ty))),
                  !1 !== e.force3D && X.set(ty, { force3D: !0 }),
                  (eO.spacer = E = o.spacer),
                  (D = (B = t7(ty))[tb + eo.os2]),
                  (O = X.getProperty(ty)),
                  (P = X.quickSetter(ty, eo.a, "px")),
                  eX(ty, E, B),
                  (M = eV(ty))),
                eE)
              ) {
                (v = tG(eE) ? ee(eE, eu) : eu),
                  (d = ed("scroller-start", tf, ep, eo, v, 0)),
                  (g = ed("scroller-end", tf, ep, eo, v, 0, d)),
                  (T = d["offset" + eo.op.d2]);
                var eL = R(_(ep, "content") || ep);
                (p = this.markerStart = ed("start", tf, eL, eo, v, T, 0, tK)),
                  (f = this.markerEnd = ed("end", tf, eL, eo, v, T, 0, tK)),
                  tK && (tl = X.quickSetter([p, f], eo.a, "px")),
                  ew ||
                    (x.length && !0 === _(ep, "fixedMarkers")) ||
                    (et(ey ? U : ep),
                    X.set([d, g], { force3D: !0 }),
                    (L = X.quickSetter(d, eo.a, "px")),
                    (W = X.quickSetter(g, eo.a, "px")));
              }
              if (tK) {
                var eY = tK.vars.onUpdate,
                  eW = tK.vars.onUpdateParams;
                tK.eventCallback("onUpdate", function () {
                  eO.update(0, 0, 1), eY && eY.apply(tK, eW || []);
                });
              }
              if (
                ((eO.previous = function () {
                  return ev[ev.indexOf(eO) - 1];
                }),
                (eO.next = function () {
                  return ev[ev.indexOf(eO) + 1];
                }),
                (eO.revert = function (t, e) {
                  if (!e) return eO.kill(!0);
                  var n = !1 !== t || !eO.enabled,
                    i = J;
                  n !== eO.isReverted &&
                    (n &&
                      ((ti = Math.max(eD(), eO.scroll.rec || 0)),
                      (eN = eO.progress),
                      (ts = r && r.progress())),
                    p &&
                      [p, f, d, g].forEach(function (t) {
                        return (t.style.display = n ? "none" : "block");
                      }),
                    n && ((J = eO), eO.update(n)),
                    !ty ||
                      (tW && eO.isActive) ||
                      (n ? eB(ty, E, b) : eX(ty, E, t7(ty), F)),
                    n || eO.update(n),
                    (J = i),
                    (eO.isReverted = n));
                }),
                (eO.refresh = function (n, i, o, a) {
                  if ((!J && eO.enabled) || i) {
                    if (ty && n && tP) {
                      ea(t, "scrollEnd", eM);
                      return;
                    }
                    !tS && eP && eP(eO),
                      (J = eO),
                      s.tween && !o && (s.tween.kill(), (s.tween = 0)),
                      j && j.pause(),
                      t_ && r && r.revert({ kill: !1 }).invalidate(),
                      eO.isReverted || eO.revert(!0, !0),
                      (eO._subPinOffset = !1);
                    var v,
                      y,
                      x,
                      _,
                      T,
                      P,
                      D,
                      L,
                      W,
                      B,
                      I,
                      H,
                      G,
                      Z = eC(),
                      $ = ek(),
                      K = tK ? tK.duration() : tI(ep, eo),
                      Q = w <= 0.01,
                      tt = 0,
                      te = a || 0,
                      tr = tG(o) ? o.end : e.end,
                      to = e.endTrigger || tm,
                      tl = tG(o)
                        ? o.start
                        : e.start ||
                          (0 !== e.start && tm ? (ty ? "0 0" : "0 100%") : 0),
                      tc = (eO.pinnedContainer =
                        e.pinnedContainer && R(e.pinnedContainer, eO)),
                      tu = (tm && Math.max(0, ev.indexOf(eO))) || 0,
                      th = tu;
                    for (
                      eE &&
                      tG(o) &&
                      ((H = X.getProperty(d, eo.p)),
                      (G = X.getProperty(g, eo.p)));
                      th--;

                    )
                      (P = ev[th]).end || P.refresh(0, 1) || (J = eO),
                        (D = P.pin) &&
                          (D === tm || D === ty || D === tc) &&
                          !P.isReverted &&
                          (B || (B = []), B.unshift(P), P.revert(!0, !0)),
                        P !== ev[th] && (tu--, th--);
                    for (
                      tq(tl) && (tl = tl(eO)),
                        u =
                          eG(
                            (tl = tk(tl, "start", eO)),
                            tm,
                            Z,
                            eo,
                            eD(),
                            p,
                            d,
                            eO,
                            $,
                            eT,
                            ew,
                            K,
                            tK,
                            eO._startClamp && "_startClamp"
                          ) || (ty ? -0.001 : 0),
                        tq(tr) && (tr = tr(eO)),
                        tV(tr) &&
                          !tr.indexOf("+=") &&
                          (~tr.indexOf(" ")
                            ? (tr = (tV(tl) ? tl.split(" ")[0] : "") + tr)
                            : ((tt = ef(tr.substr(2), Z)),
                              (tr = tV(tl)
                                ? tl
                                : (tK
                                    ? X.utils.mapRange(
                                        0,
                                        tK.duration(),
                                        tK.scrollTrigger.start,
                                        tK.scrollTrigger.end,
                                        u
                                      )
                                    : u) + tt),
                              (to = tm))),
                        tr = tk(tr, "end", eO),
                        h =
                          Math.max(
                            u,
                            eG(
                              tr || (to ? "100% 0" : K),
                              to,
                              Z,
                              eo,
                              eD() + tt,
                              f,
                              g,
                              eO,
                              $,
                              eT,
                              ew,
                              K,
                              tK,
                              eO._endClamp && "_endClamp"
                            )
                          ) || -0.001,
                        tt = 0,
                        th = tu;
                      th--;

                    )
                      (D = (P = ev[th]).pin) &&
                        P.start - P._pinPush <= u &&
                        !tK &&
                        P.end > 0 &&
                        ((v =
                          P.end -
                          (eO._startClamp ? Math.max(0, P.start) : P.start)),
                        ((D === tm && P.start - P._pinPush < u) || D === tc) &&
                          isNaN(tl) &&
                          (tt += v * (1 - P.progress)),
                        D === ty && (te += v));
                    if (
                      ((u += tt),
                      (h += tt),
                      eO._startClamp && (eO._startClamp += tt),
                      eO._endClamp &&
                        !tS &&
                        ((eO._endClamp = h || -0.001),
                        (h = Math.min(h, tI(ep, eo)))),
                      (w = h - u || ((u -= 0.01) && 0.001)),
                      Q &&
                        (eN = X.utils.clamp(0, 1, X.utils.normalize(u, h, ti))),
                      (eO._pinPush = te),
                      p &&
                        tt &&
                        (((v = {})[eo.a] = "+=" + tt),
                        tc && (v[eo.p] = "-=" + eD()),
                        X.set([p, f], v)),
                      ty && !(tx && eO.end >= tI(ep, eo)))
                    )
                      (v = t7(ty)),
                        (_ = eo === A),
                        (x = eD()),
                        (C = parseFloat(O(eo.a)) + te),
                        !K &&
                          h > 1 &&
                          ((I = {
                            style: (I = (ey ? V.scrollingElement || q : ep)
                              .style),
                            value: I["overflow" + eo.a.toUpperCase()],
                          }),
                          ey &&
                            "scroll" !==
                              t7(U)["overflow" + eo.a.toUpperCase()] &&
                            (I.style["overflow" + eo.a.toUpperCase()] =
                              "scroll")),
                        eX(ty, E, v),
                        (M = eV(ty)),
                        (y = er(ty, !0)),
                        (L = ew && N(ep, _ ? z : A)()),
                        tb
                          ? (((F = [tb + eo.os2, w + te + "px"]).t = E),
                            (th = tb === t4 ? en(ty, eo) + w + te : 0) &&
                              (F.push(eo.d, th + "px"),
                              "auto" !== E.style.flexBasis &&
                                (E.style.flexBasis = th + "px")),
                            eH(F),
                            tc &&
                              ev.forEach(function (t) {
                                t.pin === tc &&
                                  !1 !== t.vars.pinSpacing &&
                                  (t._subPinOffset = !0);
                              }),
                            ew && eD(ti))
                          : (th = en(ty, eo)) &&
                            "auto" !== E.style.flexBasis &&
                            (E.style.flexBasis = th + "px"),
                        ew &&
                          (((T = {
                            top: y.top + (_ ? x - u : L) + "px",
                            left: y.left + (_ ? L : x - u) + "px",
                            boxSizing: "border-box",
                            position: "fixed",
                          })[t0] = T["max" + t8] =
                            Math.ceil(y.width) + "px"),
                          (T[t1] = T["max" + t9] = Math.ceil(y.height) + "px"),
                          (T[t6] =
                            T[t6 + "Top"] =
                            T[t6 + t2] =
                            T[t6 + t5] =
                            T[t6 + t3] =
                              "0"),
                          (T[t4] = v[t4]),
                          (T[t4 + "Top"] = v[t4 + "Top"]),
                          (T[t4 + t2] = v[t4 + t2]),
                          (T[t4 + t5] = v[t4 + t5]),
                          (T[t4 + t3] = v[t4 + t3]),
                          (S = eq(b, T, tW)),
                          tS && eD(0)),
                        r
                          ? ((W = r._initted),
                            ta(1),
                            r.render(r.duration(), !0, !0),
                            (k = O(eo.a) - C + w + te),
                            (Y = Math.abs(w - k) > 1),
                            ew && Y && S.splice(S.length - 2, 2),
                            r.render(0, !0, !0),
                            W || r.invalidate(!0),
                            r.parent || r.totalTime(r.totalTime()),
                            ta(0))
                          : (k = w),
                        I &&
                          (I.value
                            ? (I.style["overflow" + eo.a.toUpperCase()] =
                                I.value)
                            : I.style.removeProperty("overflow-" + eo.a));
                    else if (tm && eD() && !tK)
                      for (y = tm.parentNode; y && y !== U; )
                        y._pinOffset &&
                          ((u -= y._pinOffset), (h -= y._pinOffset)),
                          (y = y.parentNode);
                    B &&
                      B.forEach(function (t) {
                        return t.revert(!1, !0);
                      }),
                      (eO.start = u),
                      (eO.end = h),
                      (l = c = tS ? ti : eD()),
                      tK || tS || (l < ti && eD(ti), (eO.scroll.rec = 0)),
                      eO.revert(!1, !0),
                      (eR = tT()),
                      tn && ((eA = -1), tn.restart(!0)),
                      (J = 0),
                      r &&
                        ec &&
                        (r._initted || ts) &&
                        r.progress() !== ts &&
                        r.progress(ts || 0, !0).render(r.time(), !0, !0),
                      (Q || eN !== eO.progress || tK || t_) &&
                        (r &&
                          !ec &&
                          r.totalProgress(
                            tK && u < -0.001 && !eN
                              ? X.utils.normalize(u, h, 0)
                              : eN,
                            !0
                          ),
                        (eO.progress = Q || (l - u) / w === eN ? 0 : eN)),
                      ty && tb && (E._pinOffset = Math.round(eO.progress * k)),
                      j && j.invalidate(),
                      isNaN(H) ||
                        ((H -= X.getProperty(d, eo.p)),
                        (G -= X.getProperty(g, eo.p)),
                        eK(d, eo, H),
                        eK(p, eo, H - (a || 0)),
                        eK(g, eo, G),
                        eK(f, eo, G - (a || 0))),
                      Q && !tS && eO.update(),
                      !tg || tS || m || ((m = !0), tg(eO), (m = !1));
                  }
                }),
                (eO.getVelocity = function () {
                  return ((eD() - c) / (tT() - K)) * 1e3 || 0;
                }),
                (eO.endAnimation = function () {
                  tj(eO.callbackAnimation),
                    r &&
                      (j
                        ? j.progress(1)
                        : r.paused()
                        ? ec || tj(r, eO.direction < 0, 1)
                        : tj(r, r.reversed()));
                }),
                (eO.labelToScroll = function (t) {
                  return (
                    (r &&
                      r.labels &&
                      (u || eO.refresh() || u) +
                        (r.labels[t] / r.duration()) * w) ||
                    0
                  );
                }),
                (eO.getTrailing = function (t) {
                  var e = ev.indexOf(eO),
                    r =
                      eO.direction > 0
                        ? ev.slice(0, e).reverse()
                        : ev.slice(e + 1);
                  return (
                    tV(t)
                      ? r.filter(function (e) {
                          return e.vars.preventOverlaps === t;
                        })
                      : r
                  ).filter(function (t) {
                    return eO.direction > 0 ? t.end <= u : t.start >= h;
                  });
                }),
                (eO.update = function (t, e, n) {
                  if (!tK || n || t) {
                    var i,
                      o,
                      a,
                      p,
                      f,
                      g,
                      v,
                      m = !0 === tS ? ti : eO.scroll(),
                      y = t ? 0 : (m - u) / w,
                      x = y < 0 ? 0 : y > 1 ? 1 : y || 0,
                      b = eO.progress;
                    if (
                      (e &&
                        ((c = l),
                        (l = tK ? eD() : m),
                        tL &&
                          ((G = I), (I = r && !ec ? r.totalProgress() : x))),
                      tO &&
                        ty &&
                        !J &&
                        !tE &&
                        tP &&
                        (!x && u < m + ((m - c) / (tT() - K)) * tO
                          ? (x = 1e-4)
                          : 1 === x &&
                            h > m + ((m - c) / (tT() - K)) * tO &&
                            (x = 0.9999)),
                      x !== b && eO.enabled)
                    ) {
                      if (
                        ((p =
                          (f =
                            (i = eO.isActive = !!x && x < 1) !=
                            (!!b && b < 1)) || !!x != !!b),
                        (eO.direction = x > b ? 1 : -1),
                        (eO.progress = x),
                        p &&
                          !J &&
                          ((o = x && !b ? 0 : 1 === x ? 1 : 1 === b ? 2 : 3),
                          ec &&
                            ((a =
                              (!f && "none" !== e_[o + 1] && e_[o + 1]) ||
                              e_[o]),
                            (v =
                              r &&
                              ("complete" === a || "reset" === a || a in r)))),
                        tJ &&
                          (f || v) &&
                          (v || tv || !r) &&
                          (tq(tJ)
                            ? tJ(eO)
                            : eO.getTrailing(tJ).forEach(function (t) {
                                return t.endAnimation();
                              })),
                        !ec &&
                          (!j || J || tE
                            ? r && r.totalProgress(x, !!(J && (eR || t)))
                            : (j._dp._time - j._start !== j._time &&
                                j.render(j._dp._time - j._start),
                              j.resetTo
                                ? j.resetTo(
                                    "totalProgress",
                                    x,
                                    r._tTime / r._tDur
                                  )
                                : ((j.vars.totalProgress = x),
                                  j.invalidate().restart()))),
                        ty)
                      ) {
                        if ((t && tb && (E.style[tb + eo.os2] = D), ew)) {
                          if (p) {
                            if (
                              ((g =
                                !t &&
                                x > b &&
                                h + 1 > m &&
                                m + 1 >= tI(ep, eo)),
                              tW)
                            ) {
                              if (!t && (i || g)) {
                                var _ = er(ty, !0),
                                  T = m - u;
                                eZ(
                                  ty,
                                  U,
                                  _.top + (eo === A ? T : 0) + "px",
                                  _.left + (eo === A ? 0 : T) + "px"
                                );
                              } else eZ(ty, E);
                            }
                            eH(i || g ? S : M),
                              (Y && x < 1 && i) ||
                                P(C + (1 !== x || g ? 0 : k));
                          }
                        } else P(tD(C + k * x));
                      }
                      !tL || s.tween || J || tE || tn.restart(!0),
                        tp &&
                          (f || (tF && x && (x < 1 || !tw))) &&
                          Z(tp.targets).forEach(function (t) {
                            return t.classList[i || tF ? "add" : "remove"](
                              tp.className
                            );
                          }),
                        !th || ec || t || th(eO),
                        p && !J
                          ? (ec &&
                              (v &&
                                ("complete" === a
                                  ? r.pause().totalProgress(1)
                                  : "reset" === a
                                  ? r.restart(!0).pause()
                                  : "restart" === a
                                  ? r.restart(!0)
                                  : r[a]()),
                              th && th(eO)),
                            (f || !tw) &&
                              (td && f && tZ(eO, td),
                              eS[o] && tZ(eO, eS[o]),
                              tF && (1 === x ? eO.kill(!1, 1) : (eS[o] = 0)),
                              !f && eS[(o = 1 === x ? 1 : 3)] && tZ(eO, eS[o])),
                            tQ &&
                              !i &&
                              Math.abs(eO.getVelocity()) >
                                (tU(tQ) ? tQ : 2500) &&
                              (tj(eO.callbackAnimation),
                              j
                                ? j.progress(1)
                                : tj(r, "reverse" === a ? 1 : !x, 1)))
                          : ec && th && !J && th(eO);
                    }
                    if (W) {
                      var O = tK
                        ? (m / tK.duration()) * (tK._caScrollDist || 0)
                        : m;
                      L(O + (d._isFlipped ? 1 : 0)), W(O);
                    }
                    tl && tl((-m / tK.duration()) * (tK._caScrollDist || 0));
                  }
                }),
                (eO.enable = function (e, r) {
                  eO.enabled ||
                    ((eO.enabled = !0),
                    ea(ep, "resize", eb),
                    ey || ea(ep, "scroll", ex),
                    eP && ea(t, "refreshInit", eP),
                    !1 !== e && ((eO.progress = eN = 0), (l = c = eA = eD())),
                    !1 !== r && eO.refresh());
                }),
                (eO.getTween = function (t) {
                  return t && s ? s.tween : j;
                }),
                (eO.setPositions = function (t, e, r, n) {
                  if (tK) {
                    var i = tK.scrollTrigger,
                      s = tK.duration(),
                      o = i.end - i.start;
                    (t = i.start + (o * t) / s), (e = i.start + (o * e) / s);
                  }
                  eO.refresh(
                    !1,
                    !1,
                    {
                      start: tz(t, r && !!eO._startClamp),
                      end: tz(e, r && !!eO._endClamp),
                    },
                    n
                  ),
                    eO.update();
                }),
                (eO.adjustPinSpacing = function (t) {
                  if (F && t) {
                    var e = F.indexOf(eo.d) + 1;
                    (F[e] = parseFloat(F[e]) + t + "px"),
                      (F[1] = parseFloat(F[1]) + t + "px"),
                      eH(F);
                  }
                }),
                (eO.disable = function (e, r) {
                  if (
                    eO.enabled &&
                    (!1 !== e && eO.revert(!0, !0),
                    (eO.enabled = eO.isActive = !1),
                    r || (j && j.pause()),
                    (ti = 0),
                    o && (o.uncache = 1),
                    eP && el(t, "refreshInit", eP),
                    tn &&
                      (tn.pause(), s.tween && s.tween.kill() && (s.tween = 0)),
                    !ey)
                  ) {
                    for (var n = ev.length; n--; )
                      if (ev[n].scroller === ep && ev[n] !== eO) return;
                    el(ep, "resize", eb), ey || el(ep, "scroll", ex);
                  }
                }),
                (eO.kill = function (t, n) {
                  eO.disable(t, n), j && !n && j.kill(), tf && delete em[tf];
                  var i = ev.indexOf(eO);
                  i >= 0 && ev.splice(i, 1),
                    i === tr && eF > 0 && tr--,
                    (i = 0),
                    ev.forEach(function (t) {
                      return t.scroller === eO.scroller && (i = 1);
                    }),
                    i || tS || (eO.scroll.rec = 0),
                    r &&
                      ((r.scrollTrigger = null),
                      t && r.revert({ kill: !1 }),
                      n || r.kill()),
                    p &&
                      [p, f, d, g].forEach(function (t) {
                        return t.parentNode && t.parentNode.removeChild(t);
                      }),
                    tM === eO && (tM = 0),
                    ty &&
                      (o && (o.uncache = 1),
                      (i = 0),
                      ev.forEach(function (t) {
                        return t.pin === ty && i++;
                      }),
                      i || (o.spacer = 0)),
                    e.onKill && e.onKill(eO);
                }),
                ev.push(eO),
                eO.enable(!1, !1),
                tc && tc(eO),
                r && r.add && !w)
              ) {
                var eI = eO.update;
                (eO.update = function () {
                  (eO.update = eI), u || h || eO.refresh();
                }),
                  X.delayedCall(0.01, eO.update),
                  (w = 0.01),
                  (u = h = 0);
              } else eO.refresh();
              ty && ez();
            }),
            (t.register = function (e) {
              return (
                I ||
                  ((X = e || tL()),
                  tF() && window.document && t.enable(),
                  (I = tC)),
                I
              );
            }),
            (t.defaults = function (t) {
              if (t) for (var e in t) eh[e] = t[e];
              return eh;
            }),
            (t.disable = function (t, e) {
              (tC = 0),
                ev.forEach(function (r) {
                  return r[e ? "kill" : "disable"](t);
                }),
                el(H, "wheel", ex),
                el(V, "scroll", ex),
                clearInterval(Q),
                el(V, "touchcancel", tN),
                el(U, "touchstart", tN),
                eo(el, V, "pointerdown,touchstart,mousedown", tA),
                eo(el, V, "pointerup,touchend,mouseup", tR),
                j.kill(),
                tH(el);
              for (var r = 0; r < y.length; r += 3)
                ec(el, y[r], y[r + 1]), ec(el, y[r], y[r + 2]);
            }),
            (t.enable = function () {
              if (
                ((H = window),
                (q = (V = document).documentElement),
                (U = V.body),
                X &&
                  ((Z = X.utils.toArray),
                  ($ = X.utils.clamp),
                  (td = X.core.context || tN),
                  (ta = X.core.suppressOverwrites || tN),
                  (tg = H.history.scrollRestoration || "auto"),
                  (eD = H.pageYOffset),
                  X.core.globals("ScrollTrigger", t),
                  U))
              ) {
                (tC = 1),
                  ((tv = document.createElement("div")).style.height = "100vh"),
                  (tv.style.position = "absolute"),
                  eA(),
                  (function t() {
                    return tC && requestAnimationFrame(t);
                  })(),
                  B.register(X),
                  (t.isTouch = B.isTouch),
                  (tf =
                    B.isTouch &&
                    /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                  (tu = 1 === B.isTouch),
                  ea(H, "wheel", ex),
                  (G = [H, V, q, U]),
                  X.matchMedia
                    ? ((t.matchMedia = function (t) {
                        var e,
                          r = X.matchMedia();
                        for (e in t) r.add(e, t[e]);
                        return r;
                      }),
                      X.addEventListener("matchMediaInit", function () {
                        return eP();
                      }),
                      X.addEventListener("matchMediaRevert", function () {
                        return eO();
                      }),
                      X.addEventListener("matchMedia", function () {
                        eN(0, 1), eE("matchMedia");
                      }),
                      X.matchMedia("(orientation: portrait)", function () {
                        return ew(), ew;
                      }))
                    : console.warn("Requires GSAP 3.11.0 or later"),
                  ew(),
                  ea(V, "scroll", ex);
                var e,
                  r,
                  n = U.style,
                  i = n.borderTopStyle,
                  s = X.core.Animation.prototype;
                for (
                  s.revert ||
                    Object.defineProperty(s, "revert", {
                      value: function () {
                        return this.time(-0.01, !0);
                      },
                    }),
                    n.borderTopStyle = "solid",
                    e = er(U),
                    A.m = Math.round(e.top + A.sc()) || 0,
                    z.m = Math.round(e.left + z.sc()) || 0,
                    i
                      ? (n.borderTopStyle = i)
                      : n.removeProperty("border-top-style"),
                    Q = setInterval(ey, 250),
                    X.delayedCall(0.5, function () {
                      return (tE = 0);
                    }),
                    ea(V, "touchcancel", tN),
                    ea(U, "touchstart", tN),
                    eo(ea, V, "pointerdown,touchstart,mousedown", tA),
                    eo(ea, V, "pointerup,touchend,mouseup", tR),
                    te = X.utils.checkPrefix("transform"),
                    eW.push(te),
                    I = tT(),
                    j = X.delayedCall(0.2, eN).pause(),
                    ts = [
                      V,
                      "visibilitychange",
                      function () {
                        var t = H.innerWidth,
                          e = H.innerHeight;
                        V.hidden
                          ? ((tn = t), (ti = e))
                          : (tn !== t || ti !== e) && eb();
                      },
                      V,
                      "DOMContentLoaded",
                      eN,
                      H,
                      "load",
                      eN,
                      H,
                      "resize",
                      eb,
                    ],
                    tH(ea),
                    ev.forEach(function (t) {
                      return t.enable(0, 1);
                    }),
                    r = 0;
                  r < y.length;
                  r += 3
                )
                  ec(el, y[r], y[r + 1]), ec(el, y[r], y[r + 2]);
              }
            }),
            (t.config = function (e) {
              "limitCallbacks" in e && (tw = !!e.limitCallbacks);
              var r = e.syncInterval;
              (r && clearInterval(Q)) || ((Q = r) && setInterval(ey, r)),
                "ignoreMobileResize" in e &&
                  (tu = 1 === t.isTouch && e.ignoreMobileResize),
                "autoRefreshEvents" in e &&
                  (tH(el) || tH(ea, e.autoRefreshEvents || "none"),
                  (tl = -1 === (e.autoRefreshEvents + "").indexOf("resize")));
            }),
            (t.scrollerProxy = function (t, e) {
              var r = R(t),
                n = y.indexOf(r),
                i = tY(r);
              ~n && y.splice(n, i ? 6 : 2),
                e && (i ? x.unshift(H, e, U, e, q, e) : x.unshift(r, e));
            }),
            (t.clearMatchMedia = function (t) {
              ev.forEach(function (e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
              });
            }),
            (t.isInViewport = function (t, e, r) {
              var n = (tV(t) ? R(t) : t).getBoundingClientRect(),
                i = n[r ? t0 : t1] * e || 0;
              return r
                ? n.right - i > 0 && n.left + i < H.innerWidth
                : n.bottom - i > 0 && n.top + i < H.innerHeight;
            }),
            (t.positionInViewport = function (t, e, r) {
              tV(t) && (t = R(t));
              var n = t.getBoundingClientRect(),
                i = n[r ? t0 : t1],
                s =
                  null == e
                    ? i / 2
                    : e in ep
                    ? ep[e] * i
                    : ~e.indexOf("%")
                    ? (parseFloat(e) * i) / 100
                    : parseFloat(e) || 0;
              return r
                ? (n.left + s) / H.innerWidth
                : (n.top + s) / H.innerHeight;
            }),
            (t.killAll = function (t) {
              if (
                (ev.slice(0).forEach(function (t) {
                  return "ScrollSmoother" !== t.vars.id && t.kill();
                }),
                !0 !== t)
              ) {
                var e = eS.killAll || [];
                (eS = {}),
                  e.forEach(function (t) {
                    return t();
                  });
              }
            }),
            t
          );
        })()).version = "3.12.5"),
        (eJ.saveStyles = function (t) {
          return t
            ? Z(t).forEach(function (t) {
                if (t && t.style) {
                  var e = eT.indexOf(t);
                  e >= 0 && eT.splice(e, 5),
                    eT.push(
                      t,
                      t.style.cssText,
                      t.getBBox && t.getAttribute("transform"),
                      X.core.getCache(t),
                      td()
                    );
                }
              })
            : eT;
        }),
        (eJ.revert = function (t, e) {
          return eP(!t, e);
        }),
        (eJ.create = function (t, e) {
          return new eJ(t, e);
        }),
        (eJ.refresh = function (t) {
          return t ? eb() : (I || eJ.register()) && eN(!0);
        }),
        (eJ.update = function (t) {
          return ++y.cache && eL(!0 === t ? 2 : 0);
        }),
        (eJ.clearScrollMemory = eC),
        (eJ.maxScroll = function (t, e) {
          return tI(t, e ? z : A);
        }),
        (eJ.getScrollFunc = function (t, e) {
          return N(R(t), e ? z : A);
        }),
        (eJ.getById = function (t) {
          return em[t];
        }),
        (eJ.getAll = function () {
          return ev.filter(function (t) {
            return "ScrollSmoother" !== t.vars.id;
          });
        }),
        (eJ.isScrolling = function () {
          return !!tP;
        }),
        (eJ.snapDirectional = es),
        (eJ.addEventListener = function (t, e) {
          var r = eS[t] || (eS[t] = []);
          ~r.indexOf(e) || r.push(e);
        }),
        (eJ.removeEventListener = function (t, e) {
          var r = eS[t],
            n = r && r.indexOf(e);
          n >= 0 && r.splice(n, 1);
        }),
        (eJ.batch = function (t, e) {
          var r,
            n = [],
            i = {},
            s = e.interval || 0.016,
            o = e.batchMax || 1e9,
            a = function (t, e) {
              var r = [],
                n = [],
                i = X.delayedCall(s, function () {
                  e(r, n), (r = []), (n = []);
                }).pause();
              return function (t) {
                r.length || i.restart(!0),
                  r.push(t.trigger),
                  n.push(t),
                  o <= r.length && i.progress(1);
              };
            };
          for (r in e)
            i[r] =
              "on" === r.substr(0, 2) && tq(e[r]) && "onRefreshInit" !== r
                ? a(r, e[r])
                : e[r];
          return (
            tq(o) &&
              ((o = o()),
              ea(eJ, "refresh", function () {
                return (o = e.batchMax());
              })),
            Z(t).forEach(function (t) {
              var e = {};
              for (r in i) e[r] = i[r];
              (e.trigger = t), n.push(eJ.create(e));
            }),
            n
          );
        }),
        (e1 = function (t, e, r, n) {
          return (
            e > n ? t(n) : e < 0 && t(0),
            r > n ? (n - e) / (r - e) : r < 0 ? e / (e - r) : 1
          );
        }),
        (e2 = function t(e, r) {
          !0 === r
            ? e.style.removeProperty("touch-action")
            : (e.style.touchAction =
                !0 === r
                  ? "auto"
                  : r
                  ? "pan-" + r + (B.isTouch ? " pinch-zoom" : "")
                  : "none"),
            e === q && t(U, r);
        }),
        (e3 = { auto: 1, scroll: 1 }),
        (e5 = function (t) {
          var e,
            r = t.event,
            n = t.target,
            i = t.axis,
            s = (r.changedTouches ? r.changedTouches[0] : r).target,
            o = s._gsap || X.core.getCache(s),
            a = tT();
          if (!o._isScrollT || a - o._isScrollT > 2e3) {
            for (
              ;
              s &&
              s !== U &&
              ((s.scrollHeight <= s.clientHeight &&
                s.scrollWidth <= s.clientWidth) ||
                !(e3[(e = t7(s)).overflowY] || e3[e.overflowX]));

            )
              s = s.parentNode;
            (o._isScroll =
              s &&
              s !== n &&
              !tY(s) &&
              (e3[(e = t7(s)).overflowY] || e3[e.overflowX])),
              (o._isScrollT = a);
          }
          (o._isScroll || "x" === i) &&
            (r.stopPropagation(), (r._gsapAllow = !0));
        }),
        (e4 = function (t, e, r, n) {
          return B.create({
            target: t,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: e,
            onWheel: (n = n && e5),
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function () {
              return r && ea(V, B.eventTypes[0], e8, !1, !0);
            },
            onDisable: function () {
              return el(V, B.eventTypes[0], e8, !0);
            },
          });
        }),
        (e6 = /(input|label|select|textarea)/i),
        (e8 = function (t) {
          var e = e6.test(t.target.tagName);
          (e || e0) && ((t._gsapAllow = !0), (e0 = e));
        }),
        (e9 = function (t) {
          tG(t) || (t = {}),
            (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
            t.type || (t.type = "wheel,touch"),
            (t.debounce = !!t.debounce),
            (t.id = t.id || "normalizer");
          var e,
            r,
            n,
            i,
            s,
            o,
            a,
            l,
            c = t,
            u = c.normalizeScrollX,
            h = c.momentum,
            p = c.allowNestedScroll,
            f = c.onRelease,
            d = R(t.target) || q,
            g = X.core.globals().ScrollSmoother,
            v = g && g.get(),
            m =
              tf &&
              ((t.content && R(t.content)) ||
                (v && !1 !== t.content && !v.smooth() && v.content())),
            x = N(d, A),
            w = N(d, z),
            b = 1,
            S =
              (B.isTouch && H.visualViewport
                ? H.visualViewport.scale * H.visualViewport.width
                : H.outerWidth) / H.innerWidth,
            _ = 0,
            M = tq(h)
              ? function () {
                  return h(e);
                }
              : function () {
                  return h || 2.8;
                },
            E = e4(d, t.type, !0, p),
            T = function () {
              return (i = !1);
            },
            O = tN,
            P = tN,
            C = function () {
              (r = tI(d, A)),
                (P = $(tf ? 1 : 0, r)),
                u && (O = $(0, tI(d, z))),
                (n = ek);
            },
            k = function () {
              (m._gsap.y = tD(parseFloat(m._gsap.y) + x.offset) + "px"),
                (m.style.transform =
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                  parseFloat(m._gsap.y) +
                  ", 0, 1)"),
                (x.offset = x.cacheID = 0);
            },
            D = function () {
              if (i) {
                requestAnimationFrame(T);
                var t = tD(e.deltaY / 2),
                  r = P(x.v - t);
                if (m && r !== x.v + x.offset) {
                  x.offset = r - x.v;
                  var n = tD((parseFloat(m && m._gsap.y) || 0) - x.offset);
                  (m.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    n +
                    ", 0, 1)"),
                    (m._gsap.y = n + "px"),
                    (x.cacheID = y.cache),
                    eL();
                }
                return !0;
              }
              x.offset && k(), (i = !0);
            },
            F = function () {
              C(),
                s.isActive() &&
                  s.vars.scrollY > r &&
                  (x() > r ? s.progress(1) && x(r) : s.resetTo("scrollY", r));
            };
          return (
            m && X.set(m, { y: "+=0" }),
            (t.ignoreCheck = function (t) {
              return (
                (tf && "touchmove" === t.type && D()) ||
                (b > 1.05 && "touchstart" !== t.type) ||
                e.isGesturing ||
                (t.touches && t.touches.length > 1)
              );
            }),
            (t.onPress = function () {
              i = !1;
              var t = b;
              (b = tD(((H.visualViewport && H.visualViewport.scale) || 1) / S)),
                s.pause(),
                t !== b && e2(d, b > 1.01 || (!u && "x")),
                (o = w()),
                (a = x()),
                C(),
                (n = ek);
            }),
            (t.onRelease = t.onGestureStart =
              function (t, e) {
                if ((x.offset && k(), e)) {
                  y.cache++;
                  var n,
                    i,
                    o = M();
                  u &&
                    ((i = (n = w()) + -(0.05 * o * t.velocityX) / 0.227),
                    (o *= e1(w, n, i, tI(d, z))),
                    (s.vars.scrollX = O(i))),
                    (i = (n = x()) + -(0.05 * o * t.velocityY) / 0.227),
                    (o *= e1(x, n, i, tI(d, A))),
                    (s.vars.scrollY = P(i)),
                    s.invalidate().duration(o).play(0.01),
                    ((tf && s.vars.scrollY >= r) || n >= r - 1) &&
                      X.to({}, { onUpdate: F, duration: o });
                } else l.restart(!0);
                f && f(t);
              }),
            (t.onWheel = function () {
              s._ts && s.pause(), tT() - _ > 1e3 && ((n = 0), (_ = tT()));
            }),
            (t.onChange = function (t, e, r, i, s) {
              if (
                (ek !== n && C(),
                e &&
                  u &&
                  w(O(i[2] === e ? o + (t.startX - t.x) : w() + e - i[1])),
                r)
              ) {
                x.offset && k();
                var l = s[2] === r,
                  c = l ? a + t.startY - t.y : x() + r - s[1],
                  h = P(c);
                l && c !== h && (a += h - c), x(h);
              }
              (r || e) && eL();
            }),
            (t.onEnable = function () {
              e2(d, !u && "x"),
                eJ.addEventListener("refresh", F),
                ea(H, "resize", F),
                x.smooth &&
                  ((x.target.style.scrollBehavior = "auto"),
                  (x.smooth = w.smooth = !1)),
                E.enable();
            }),
            (t.onDisable = function () {
              e2(d, !0),
                el(H, "resize", F),
                eJ.removeEventListener("refresh", F),
                E.kill();
            }),
            (t.lockAxis = !1 !== t.lockAxis),
            ((e = new B(t)).iOS = tf),
            tf && !x() && x(1),
            tf && X.ticker.add(tN),
            (l = e._dc),
            (s = X.to(e, {
              ease: "power4",
              paused: !0,
              inherit: !1,
              scrollX: u ? "+=0.1" : "+=0",
              scrollY: "+=0.1",
              modifiers: {
                scrollY: e$(x, x(), function () {
                  return s.pause();
                }),
              },
              onUpdate: eL,
              onComplete: l.vars.onComplete,
            })),
            e
          );
        }),
        (eJ.sort = function (t) {
          return ev.sort(
            t ||
              function (t, e) {
                return (
                  -1e6 * (t.vars.refreshPriority || 0) +
                  t.start -
                  (e.start + -1e6 * (e.vars.refreshPriority || 0))
                );
              }
          );
        }),
        (eJ.observe = function (t) {
          return new B(t);
        }),
        (eJ.normalizeScroll = function (t) {
          if (void 0 === t) return tc;
          if (!0 === t && tc) return tc.enable();
          if (!1 === t) {
            tc && tc.kill(), (tc = t);
            return;
          }
          var e = t instanceof B ? t : e9(t);
          return (
            tc && tc.target === e.target && tc.kill(),
            tY(e.target) && (tc = e),
            e
          );
        }),
        (eJ.core = {
          _getVelocityProp: D,
          _inputObserver: e4,
          _scrollers: y,
          _proxies: x,
          bridge: {
            ss: function () {
              tP || eE("scrollStart"), (tP = tT());
            },
            ref: function () {
              return J;
            },
          },
        }),
        tL() && X.registerPlugin(eJ),
        (e.ScrollTrigger = eJ),
        (e.default = eJ),
        "undefined" == typeof window || window !== e
          ? Object.defineProperty(e, "__esModule", { value: !0 })
          : delete window.default;
    },
    54638: function (t, e, r) {
      "use strict";
      r.d(e, {
        ZP: function () {
          return tM;
        },
      });
      var n,
        i,
        s,
        o,
        a,
        l,
        c,
        u,
        h,
        p,
        f,
        d = r(21272),
        g = {},
        v = 180 / Math.PI,
        m = Math.PI / 180,
        y = Math.atan2,
        x = /([A-Z])/g,
        w = /(left|right|width|margin|padding|x)/i,
        b = /[\s,\(]\S/,
        S = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        _ = function (t, e) {
          return e.set(
            e.t,
            e.p,
            Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
            e
          );
        },
        M = function (t, e) {
          return e.set(
            e.t,
            e.p,
            1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
            e
          );
        },
        E = function (t, e) {
          return e.set(
            e.t,
            e.p,
            t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
            e
          );
        },
        T = function (t, e) {
          var r = e.s + e.c * t;
          e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
        },
        O = function (t, e) {
          return e.set(e.t, e.p, t ? e.e : e.b, e);
        },
        P = function (t, e) {
          return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
        },
        C = function (t, e, r) {
          return (t.style[e] = r);
        },
        k = function (t, e, r) {
          return t.style.setProperty(e, r);
        },
        z = function (t, e, r) {
          return (t._gsap[e] = r);
        },
        A = function (t, e, r) {
          return (t._gsap.scaleX = t._gsap.scaleY = r);
        },
        R = function (t, e, r, n, i) {
          var s = t._gsap;
          (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
        },
        N = function (t, e, r, n, i) {
          var s = t._gsap;
          (s[e] = r), s.renderTransform(i, s);
        },
        D = "transform",
        F = D + "Origin",
        L = function t(e, r) {
          var n = this,
            i = this.target,
            s = i.style,
            o = i._gsap;
          if (e in g && s) {
            if (((this.tfm = this.tfm || {}), "transform" === e))
              return S.transform.split(",").forEach(function (e) {
                return t.call(n, e, r);
              });
            if (
              (~(e = S[e] || e).indexOf(",")
                ? e.split(",").forEach(function (t) {
                    return (n.tfm[t] = te(i, t));
                  })
                : (this.tfm[e] = o.x ? o[e] : te(i, e)),
              e === F && (this.tfm.zOrigin = o.zOrigin),
              this.props.indexOf(D) >= 0)
            )
              return;
            o.svg &&
              ((this.svgo = i.getAttribute("data-svg-origin")),
              this.props.push(F, r, "")),
              (e = D);
          }
          (s || r) && this.props.push(e, r, s[e]);
        },
        Y = function (t) {
          t.translate &&
            (t.removeProperty("translate"),
            t.removeProperty("scale"),
            t.removeProperty("rotate"));
        },
        W = function () {
          var t,
            e,
            r = this.props,
            n = this.target,
            i = n.style,
            s = n._gsap;
          for (t = 0; t < r.length; t += 3)
            r[t + 1]
              ? (n[r[t]] = r[t + 2])
              : r[t + 2]
              ? (i[r[t]] = r[t + 2])
              : i.removeProperty(
                  "--" === r[t].substr(0, 2)
                    ? r[t]
                    : r[t].replace(x, "-$1").toLowerCase()
                );
          if (this.tfm) {
            for (e in this.tfm) s[e] = this.tfm[e];
            s.svg &&
              (s.renderTransform(),
              n.setAttribute("data-svg-origin", this.svgo || "")),
              ((t = p()) && t.isStart) ||
                i[D] ||
                (Y(i),
                s.zOrigin &&
                  i[F] &&
                  ((i[F] += " " + s.zOrigin + "px"),
                  (s.zOrigin = 0),
                  s.renderTransform()),
                (s.uncache = 1));
          }
        },
        B = function (t, e) {
          var r = { target: t, props: [], revert: W, save: L };
          return (
            t._gsap || d.p8.core.getCache(t),
            e &&
              e.split(",").forEach(function (t) {
                return r.save(t);
              }),
            r
          );
        },
        X = function (t, e) {
          var r = a.createElementNS
            ? a.createElementNS(
                (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                t
              )
            : a.createElement(t);
          return r && r.style ? r : a.createElement(t);
        },
        I = function t(e, r, n) {
          var i = getComputedStyle(e);
          return (
            i[r] ||
            i.getPropertyValue(r.replace(x, "-$1").toLowerCase()) ||
            i.getPropertyValue(r) ||
            (!n && t(e, V(r) || r, 1)) ||
            ""
          );
        },
        H = "O,Moz,ms,Ms,Webkit".split(","),
        V = function (t, e, r) {
          var n = (e || u).style,
            i = 5;
          if (t in n && !r) return t;
          for (
            t = t.charAt(0).toUpperCase() + t.substr(1);
            i-- && !(H[i] + t in n);

          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? H[i] : "") + t;
        },
        q = function () {
          "undefined" != typeof window &&
            window.document &&
            ((l = (a = window.document).documentElement),
            (u = X("div") || { style: {} }),
            X("div"),
            (F = (D = V(D)) + "Origin"),
            (u.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (f = !!V("perspective")),
            (p = d.p8.core.reverting),
            (c = 1));
        },
        U = function t(e) {
          var r,
            n = X(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            i = this.parentNode,
            s = this.nextSibling,
            o = this.style.cssText;
          if (
            (l.appendChild(n),
            n.appendChild(this),
            (this.style.display = "block"),
            e)
          )
            try {
              (r = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = t);
            } catch (t) {}
          else this._gsapBBox && (r = this._gsapBBox());
          return (
            i && (s ? i.insertBefore(this, s) : i.appendChild(this)),
            l.removeChild(n),
            (this.style.cssText = o),
            r
          );
        },
        G = function (t, e) {
          for (var r = e.length; r--; )
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
        },
        j = function (t) {
          var e;
          try {
            e = t.getBBox();
          } catch (r) {
            e = U.call(t, !0);
          }
          return (
            (e && (e.width || e.height)) ||
              t.getBBox === U ||
              (e = U.call(t, !0)),
            !e || e.width || e.x || e.y
              ? e
              : {
                  x: +G(t, ["x", "cx", "x1"]) || 0,
                  y: +G(t, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        Z = function (t) {
          return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && j(t));
        },
        $ = function (t, e) {
          if (e) {
            var r,
              n = t.style;
            e in g && e !== F && (e = D),
              n.removeProperty
                ? (("ms" === (r = e.substr(0, 2)) ||
                    "webkit" === e.substr(0, 6)) &&
                    (e = "-" + e),
                  n.removeProperty(
                    "--" === r ? e : e.replace(x, "-$1").toLowerCase()
                  ))
                : n.removeAttribute(e);
          }
        },
        K = function (t, e, r, n, i, s) {
          var o = new d.Fo(t._pt, e, r, 0, 1, s ? P : O);
          return (t._pt = o), (o.b = n), (o.e = i), t._props.push(r), o;
        },
        Q = { deg: 1, rad: 1, turn: 1 },
        J = { grid: 1, flex: 1 },
        tt = function t(e, r, n, i) {
          var s,
            o,
            l,
            c,
            h = parseFloat(n) || 0,
            p = (n + "").trim().substr((h + "").length) || "px",
            f = u.style,
            v = w.test(r),
            m = "svg" === e.tagName.toLowerCase(),
            y = (m ? "client" : "offset") + (v ? "Width" : "Height"),
            x = "px" === i,
            b = "%" === i;
          if (i === p || !h || Q[i] || Q[p]) return h;
          if (
            ("px" === p || x || (h = t(e, r, n, "px")),
            (c = e.getCTM && Z(e)),
            (b || "%" === p) && (g[r] || ~r.indexOf("adius")))
          )
            return (
              (s = c ? e.getBBox()[v ? "width" : "height"] : e[y]),
              (0, d.Pr)(b ? (h / s) * 100 : (h / 100) * s)
            );
          if (
            ((f[v ? "width" : "height"] = 100 + (x ? p : i)),
            (o =
              ~r.indexOf("adius") || ("em" === i && e.appendChild && !m)
                ? e
                : e.parentNode),
            c && (o = (e.ownerSVGElement || {}).parentNode),
            (o && o !== a && o.appendChild) || (o = a.body),
            (l = o._gsap) &&
              b &&
              l.width &&
              v &&
              l.time === d.xr.time &&
              !l.uncache)
          )
            return (0, d.Pr)((h / l.width) * 100);
          if (b && ("height" === r || "width" === r)) {
            var S = e.style[r];
            (e.style[r] = 100 + i), (s = e[y]), S ? (e.style[r] = S) : $(e, r);
          } else
            (b || "%" === p) &&
              !J[I(o, "display")] &&
              (f.position = I(e, "position")),
              o === e && (f.position = "static"),
              o.appendChild(u),
              (s = u[y]),
              o.removeChild(u),
              (f.position = "absolute");
          return (
            v && b && (((l = (0, d.DY)(o)).time = d.xr.time), (l.width = o[y])),
            (0, d.Pr)(x ? (s * h) / 100 : s && h ? (100 / s) * h : 0)
          );
        },
        te = function (t, e, r, n) {
          var i;
          return (
            c || q(),
            e in S &&
              "transform" !== e &&
              ~(e = S[e]).indexOf(",") &&
              (e = e.split(",")[0]),
            g[e] && "transform" !== e
              ? ((i = tf(t, n)),
                (i =
                  "transformOrigin" !== e
                    ? i[e]
                    : i.svg
                    ? i.origin
                    : td(I(t, F)) + " " + i.zOrigin + "px"))
              : (!(i = t.style[e]) ||
                  "auto" === i ||
                  n ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (to[e] && to[e](t, e, r)) ||
                  I(t, e) ||
                  (0, d.Ok)(t, e) ||
                  ("opacity" === e ? 1 : 0)),
            r && !~(i + "").trim().indexOf(" ") ? tt(t, e, i, r) + r : i
          );
        },
        tr = function (t, e, r, n) {
          if (!r || "none" === r) {
            var i = V(e, t, 1),
              s = i && I(t, i, 1);
            s && s !== r
              ? ((e = i), (r = s))
              : "borderColor" === e && (r = I(t, "borderTopColor"));
          }
          var o,
            a,
            l,
            c,
            u,
            h,
            p,
            f,
            g,
            v,
            m,
            y = new d.Fo(this._pt, t.style, e, 0, 1, d.Ks),
            x = 0,
            w = 0;
          if (
            ((y.b = r),
            (y.e = n),
            (r += ""),
            "auto" == (n += "") &&
              ((h = t.style[e]),
              (t.style[e] = n),
              (n = I(t, e) || n),
              h ? (t.style[e] = h) : $(t, e)),
            (o = [r, n]),
            (0, d.kr)(o),
            (r = o[0]),
            (n = o[1]),
            (l = r.match(d.d4) || []),
            (n.match(d.d4) || []).length)
          ) {
            for (; (a = d.d4.exec(n)); )
              (p = a[0]),
                (g = n.substring(x, a.index)),
                u
                  ? (u = (u + 1) % 5)
                  : ("rgba(" === g.substr(-5) || "hsla(" === g.substr(-5)) &&
                    (u = 1),
                p !== (h = l[w++] || "") &&
                  ((c = parseFloat(h) || 0),
                  (m = h.substr((c + "").length)),
                  "=" === p.charAt(1) && (p = (0, d.cy)(c, p) + m),
                  (f = parseFloat(p)),
                  (v = p.substr((f + "").length)),
                  (x = d.d4.lastIndex - v.length),
                  v ||
                    ((v = v || d.Fc.units[e] || m),
                    x !== n.length || ((n += v), (y.e += v))),
                  m !== v && (c = tt(t, e, h, v) || 0),
                  (y._pt = {
                    _next: y._pt,
                    p: g || 1 === w ? g : ",",
                    s: c,
                    c: f - c,
                    m: (u && u < 4) || "zIndex" === e ? Math.round : 0,
                  }));
            y.c = x < n.length ? n.substring(x, n.length) : "";
          } else y.r = "display" === e && "none" === n ? P : O;
          return d.bQ.test(n) && (y.e = 0), (this._pt = y), y;
        },
        tn = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        ti = function (t) {
          var e = t.split(" "),
            r = e[0],
            n = e[1] || "50%";
          return (
            ("top" === r || "bottom" === r || "left" === n || "right" === n) &&
              ((t = r), (r = n), (n = t)),
            (e[0] = tn[r] || r),
            (e[1] = tn[n] || n),
            e.join(" ")
          );
        },
        ts = function (t, e) {
          if (e.tween && e.tween._time === e.tween._dur) {
            var r,
              n,
              i,
              s = e.t,
              o = s.style,
              a = e.u,
              l = s._gsap;
            if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
            else
              for (i = (a = a.split(",")).length; --i > -1; )
                g[(r = a[i])] &&
                  ((n = 1), (r = "transformOrigin" === r ? F : D)),
                  $(s, r);
            n &&
              ($(s, D),
              l &&
                (l.svg && s.removeAttribute("transform"),
                tf(s, 1),
                (l.uncache = 1),
                Y(o)));
          }
        },
        to = {
          clearProps: function (t, e, r, n, i) {
            if ("isFromStart" !== i.data) {
              var s = (t._pt = new d.Fo(t._pt, e, r, 0, 0, ts));
              return (
                (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1
              );
            }
          },
        },
        ta = [1, 0, 0, 1, 0, 0],
        tl = {},
        tc = function (t) {
          return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
        },
        tu = function (t) {
          var e = I(t, D);
          return tc(e) ? ta : e.substr(7).match(d.SI).map(d.Pr);
        },
        th = function (t, e) {
          var r,
            n,
            i,
            s,
            o = t._gsap || (0, d.DY)(t),
            a = t.style,
            c = tu(t);
          return o.svg && t.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (c = [
                (i = t.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(",")
              ? ta
              : c
            : (c !== ta ||
                t.offsetParent ||
                t === l ||
                o.svg ||
                ((i = a.display),
                (a.display = "block"),
                ((r = t.parentNode) && t.offsetParent) ||
                  ((s = 1), (n = t.nextElementSibling), l.appendChild(t)),
                (c = tu(t)),
                i ? (a.display = i) : $(t, "display"),
                s &&
                  (n
                    ? r.insertBefore(t, n)
                    : r
                    ? r.appendChild(t)
                    : l.removeChild(t))),
              e && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
        },
        tp = function (t, e, r, n, i, s) {
          var o,
            a,
            l,
            c,
            u = t._gsap,
            h = i || th(t, !0),
            p = u.xOrigin || 0,
            f = u.yOrigin || 0,
            d = u.xOffset || 0,
            g = u.yOffset || 0,
            v = h[0],
            m = h[1],
            y = h[2],
            x = h[3],
            w = h[4],
            b = h[5],
            S = e.split(" "),
            _ = parseFloat(S[0]) || 0,
            M = parseFloat(S[1]) || 0;
          r
            ? h !== ta &&
              (a = v * x - m * y) &&
              ((l = (x / a) * _ + (-y / a) * M + (y * b - x * w) / a),
              (c = (-m / a) * _ + (v / a) * M - (v * b - m * w) / a),
              (_ = l),
              (M = c))
            : ((_ =
                (o = j(t)).x + (~S[0].indexOf("%") ? (_ / 100) * o.width : _)),
              (M =
                o.y +
                (~(S[1] || S[0]).indexOf("%") ? (M / 100) * o.height : M))),
            n || (!1 !== n && u.smooth)
              ? ((w = _ - p),
                (b = M - f),
                (u.xOffset = d + (w * v + b * y) - w),
                (u.yOffset = g + (w * m + b * x) - b))
              : (u.xOffset = u.yOffset = 0),
            (u.xOrigin = _),
            (u.yOrigin = M),
            (u.smooth = !!n),
            (u.origin = e),
            (u.originIsAbsolute = !!r),
            (t.style[F] = "0px 0px"),
            s &&
              (K(s, u, "xOrigin", p, _),
              K(s, u, "yOrigin", f, M),
              K(s, u, "xOffset", d, u.xOffset),
              K(s, u, "yOffset", g, u.yOffset)),
            t.setAttribute("data-svg-origin", _ + " " + M);
        },
        tf = function (t, e) {
          var r = t._gsap || new d.l1(t);
          if ("x" in r && !e && !r.uncache) return r;
          var n,
            i,
            s,
            o,
            a,
            l,
            c,
            u,
            h,
            p,
            g,
            x,
            w,
            b,
            S,
            _,
            M,
            E,
            T,
            O,
            P,
            C,
            k,
            z,
            A,
            R,
            N,
            L,
            Y,
            W,
            B,
            X,
            H = t.style,
            V = r.scaleX < 0,
            q = getComputedStyle(t),
            U = I(t, F) || "0";
          return (
            (n = i = s = l = c = u = h = p = g = 0),
            (o = a = 1),
            (r.svg = !!(t.getCTM && Z(t))),
            q.translate &&
              (("none" !== q.translate ||
                "none" !== q.scale ||
                "none" !== q.rotate) &&
                (H[D] =
                  ("none" !== q.translate
                    ? "translate3d(" +
                      (q.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== q.rotate ? "rotate(" + q.rotate + ") " : "") +
                  ("none" !== q.scale
                    ? "scale(" + q.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== q[D] ? q[D] : "")),
              (H.scale = H.rotate = H.translate = "none")),
            (b = th(t, r.svg)),
            r.svg &&
              (r.uncache
                ? ((A = t.getBBox()),
                  (U = r.xOrigin - A.x + "px " + (r.yOrigin - A.y) + "px"),
                  (z = ""))
                : (z = !e && t.getAttribute("data-svg-origin")),
              tp(t, z || U, !!z || r.originIsAbsolute, !1 !== r.smooth, b)),
            (x = r.xOrigin || 0),
            (w = r.yOrigin || 0),
            b !== ta &&
              ((E = b[0]),
              (T = b[1]),
              (O = b[2]),
              (P = b[3]),
              (n = C = b[4]),
              (i = k = b[5]),
              6 === b.length
                ? ((o = Math.sqrt(E * E + T * T)),
                  (a = Math.sqrt(P * P + O * O)),
                  (l = E || T ? y(T, E) * v : 0),
                  (h = O || P ? y(O, P) * v + l : 0) &&
                    (a *= Math.abs(Math.cos(h * m))),
                  r.svg &&
                    ((n -= x - (x * E + w * O)), (i -= w - (x * T + w * P))))
                : ((X = b[6]),
                  (W = b[7]),
                  (N = b[8]),
                  (L = b[9]),
                  (Y = b[10]),
                  (B = b[11]),
                  (n = b[12]),
                  (i = b[13]),
                  (s = b[14]),
                  (c = (S = y(X, Y)) * v),
                  S &&
                    ((z = C * (_ = Math.cos(-S)) + N * (M = Math.sin(-S))),
                    (A = k * _ + L * M),
                    (R = X * _ + Y * M),
                    (N = -(C * M) + N * _),
                    (L = -(k * M) + L * _),
                    (Y = -(X * M) + Y * _),
                    (B = -(W * M) + B * _),
                    (C = z),
                    (k = A),
                    (X = R)),
                  (u = (S = y(-O, Y)) * v),
                  S &&
                    ((z = E * (_ = Math.cos(-S)) - N * (M = Math.sin(-S))),
                    (A = T * _ - L * M),
                    (R = O * _ - Y * M),
                    (B = P * M + B * _),
                    (E = z),
                    (T = A),
                    (O = R)),
                  (l = (S = y(T, E)) * v),
                  S &&
                    ((z = E * (_ = Math.cos(S)) + T * (M = Math.sin(S))),
                    (A = C * _ + k * M),
                    (T = T * _ - E * M),
                    (k = k * _ - C * M),
                    (E = z),
                    (C = A)),
                  c &&
                    Math.abs(c) + Math.abs(l) > 359.9 &&
                    ((c = l = 0), (u = 180 - u)),
                  (o = (0, d.Pr)(Math.sqrt(E * E + T * T + O * O))),
                  (a = (0, d.Pr)(Math.sqrt(k * k + X * X))),
                  (h = Math.abs((S = y(C, k))) > 2e-4 ? S * v : 0),
                  (g = B ? 1 / (B < 0 ? -B : B) : 0)),
              r.svg &&
                ((z = t.getAttribute("transform")),
                (r.forceCSS = t.setAttribute("transform", "") || !tc(I(t, D))),
                z && t.setAttribute("transform", z))),
            Math.abs(h) > 90 &&
              270 > Math.abs(h) &&
              (V
                ? ((o *= -1),
                  (h += l <= 0 ? 180 : -180),
                  (l += l <= 0 ? 180 : -180))
                : ((a *= -1), (h += h <= 0 ? 180 : -180))),
            (e = e || r.uncache),
            (r.x =
              n -
              ((r.xPercent =
                n &&
                ((!e && r.xPercent) ||
                  (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                ? (t.offsetWidth * r.xPercent) / 100
                : 0) +
              "px"),
            (r.y =
              i -
              ((r.yPercent =
                i &&
                ((!e && r.yPercent) ||
                  (Math.round(t.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (t.offsetHeight * r.yPercent) / 100
                : 0) +
              "px"),
            (r.z = s + "px"),
            (r.scaleX = (0, d.Pr)(o)),
            (r.scaleY = (0, d.Pr)(a)),
            (r.rotation = (0, d.Pr)(l) + "deg"),
            (r.rotationX = (0, d.Pr)(c) + "deg"),
            (r.rotationY = (0, d.Pr)(u) + "deg"),
            (r.skewX = h + "deg"),
            (r.skewY = p + "deg"),
            (r.transformPerspective = g + "px"),
            (r.zOrigin =
              parseFloat(U.split(" ")[2]) || (!e && r.zOrigin) || 0) &&
              (H[F] = td(U)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = d.Fc.force3D),
            (r.renderTransform = r.svg ? tx : f ? ty : tv),
            (r.uncache = 0),
            r
          );
        },
        td = function (t) {
          return (t = t.split(" "))[0] + " " + t[1];
        },
        tg = function (t, e, r) {
          var n = (0, d.Wy)(e);
          return (
            (0, d.Pr)(parseFloat(e) + parseFloat(tt(t, "x", r + "px", n))) + n
          );
        },
        tv = function (t, e) {
          (e.z = "0px"),
            (e.rotationY = e.rotationX = "0deg"),
            (e.force3D = 0),
            ty(t, e);
        },
        tm = "0deg",
        ty = function (t, e) {
          var r = e || this,
            n = r.xPercent,
            i = r.yPercent,
            s = r.x,
            o = r.y,
            a = r.z,
            l = r.rotation,
            c = r.rotationY,
            u = r.rotationX,
            h = r.skewX,
            p = r.skewY,
            f = r.scaleX,
            d = r.scaleY,
            g = r.transformPerspective,
            v = r.force3D,
            y = r.target,
            x = r.zOrigin,
            w = "",
            b = ("auto" === v && t && 1 !== t) || !0 === v;
          if (x && (u !== tm || c !== tm)) {
            var S,
              _ = parseFloat(c) * m,
              M = Math.sin(_),
              E = Math.cos(_);
            (s = tg(y, s, -(M * (S = Math.cos((_ = parseFloat(u) * m))) * x))),
              (o = tg(y, o, -(-Math.sin(_) * x))),
              (a = tg(y, a, -(E * S * x) + x));
          }
          "0px" !== g && (w += "perspective(" + g + ") "),
            (n || i) && (w += "translate(" + n + "%, " + i + "%) "),
            (b || "0px" !== s || "0px" !== o || "0px" !== a) &&
              (w +=
                "0px" !== a || b
                  ? "translate3d(" + s + ", " + o + ", " + a + ") "
                  : "translate(" + s + ", " + o + ") "),
            l !== tm && (w += "rotate(" + l + ") "),
            c !== tm && (w += "rotateY(" + c + ") "),
            u !== tm && (w += "rotateX(" + u + ") "),
            (h !== tm || p !== tm) && (w += "skew(" + h + ", " + p + ") "),
            (1 !== f || 1 !== d) && (w += "scale(" + f + ", " + d + ") "),
            (y.style[D] = w || "translate(0, 0)");
        },
        tx = function (t, e) {
          var r,
            n,
            i,
            s,
            o,
            a = e || this,
            l = a.xPercent,
            c = a.yPercent,
            u = a.x,
            h = a.y,
            p = a.rotation,
            f = a.skewX,
            g = a.skewY,
            v = a.scaleX,
            y = a.scaleY,
            x = a.target,
            w = a.xOrigin,
            b = a.yOrigin,
            S = a.xOffset,
            _ = a.yOffset,
            M = a.forceCSS,
            E = parseFloat(u),
            T = parseFloat(h);
          (p = parseFloat(p)),
            (f = parseFloat(f)),
            (g = parseFloat(g)) && ((f += g = parseFloat(g)), (p += g)),
            p || f
              ? ((p *= m),
                (f *= m),
                (r = Math.cos(p) * v),
                (n = Math.sin(p) * v),
                (i = -(Math.sin(p - f) * y)),
                (s = Math.cos(p - f) * y),
                f &&
                  ((g *= m),
                  (i *= o = Math.sqrt(1 + (o = Math.tan(f - g)) * o)),
                  (s *= o),
                  g &&
                    ((r *= o = Math.sqrt(1 + (o = Math.tan(g)) * o)),
                    (n *= o))),
                (r = (0, d.Pr)(r)),
                (n = (0, d.Pr)(n)),
                (i = (0, d.Pr)(i)),
                (s = (0, d.Pr)(s)))
              : ((r = v), (s = y), (n = i = 0)),
            ((E && !~(u + "").indexOf("px")) ||
              (T && !~(h + "").indexOf("px"))) &&
              ((E = tt(x, "x", u, "px")), (T = tt(x, "y", h, "px"))),
            (w || b || S || _) &&
              ((E = (0, d.Pr)(E + w - (w * r + b * i) + S)),
              (T = (0, d.Pr)(T + b - (w * n + b * s) + _))),
            (l || c) &&
              ((o = x.getBBox()),
              (E = (0, d.Pr)(E + (l / 100) * o.width)),
              (T = (0, d.Pr)(T + (c / 100) * o.height))),
            (o =
              "matrix(" +
              r +
              "," +
              n +
              "," +
              i +
              "," +
              s +
              "," +
              E +
              "," +
              T +
              ")"),
            x.setAttribute("transform", o),
            M && (x.style[D] = o);
        },
        tw = function (t, e, r, n, i) {
          var s,
            o,
            a = (0, d.r9)(i),
            l = parseFloat(i) * (a && ~i.indexOf("rad") ? v : 1) - n,
            c = n + l + "deg";
          return (
            a &&
              ("short" === (s = i.split("_")[1]) &&
                (l %= 360) != l % 180 &&
                (l += l < 0 ? 360 : -360),
              "cw" === s && l < 0
                ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
                : "ccw" === s &&
                  l > 0 &&
                  (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
            (t._pt = o = new d.Fo(t._pt, e, r, n, l, M)),
            (o.e = c),
            (o.u = "deg"),
            t._props.push(r),
            o
          );
        },
        tb = function (t, e) {
          for (var r in e) t[r] = e[r];
          return t;
        },
        tS = function (t, e, r) {
          var n,
            i,
            s,
            o,
            a,
            l,
            c,
            u = tb({}, r._gsap),
            h = r.style;
          for (i in (u.svg
            ? ((s = r.getAttribute("transform")),
              r.setAttribute("transform", ""),
              (h[D] = e),
              (n = tf(r, 1)),
              $(r, D),
              r.setAttribute("transform", s))
            : ((s = getComputedStyle(r)[D]),
              (h[D] = e),
              (n = tf(r, 1)),
              (h[D] = s)),
          g))
            (s = u[i]) !== (o = n[i]) &&
              0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) &&
              ((a =
                (0, d.Wy)(s) !== (c = (0, d.Wy)(o))
                  ? tt(r, i, s, c)
                  : parseFloat(s)),
              (l = parseFloat(o)),
              (t._pt = new d.Fo(t._pt, n, i, a, l - a, _)),
              (t._pt.u = c || 0),
              t._props.push(i));
          tb(n, u);
        };
      (0, d.fS)("padding,margin,Width,Radius", function (t, e) {
        var r = "Right",
          n = "Bottom",
          i = "Left",
          s = (
            e < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]
          ).map(function (r) {
            return e < 2 ? t + r : "border" + r + t;
          });
        to[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
          var o, a;
          if (arguments.length < 4)
            return 5 ===
              (a = (o = s.map(function (e) {
                return te(t, e, r);
              })).join(" ")).split(o[0]).length
              ? o[0]
              : a;
          (o = (n + "").split(" ")),
            (a = {}),
            s.forEach(function (t, e) {
              return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
            }),
            t.init(e, a, i);
        };
      });
      var t_ = {
        name: "css",
        register: q,
        targetTest: function (t) {
          return t.style && t.nodeType;
        },
        init: function (t, e, r, n, i) {
          var s,
            o,
            a,
            l,
            u,
            h,
            p,
            f,
            v,
            m,
            y,
            x,
            w,
            M,
            O,
            P,
            C = this._props,
            k = t.style,
            z = r.vars.startAt;
          for (p in (c || q(),
          (this.styles = this.styles || B(t)),
          (P = this.styles.props),
          (this.tween = r),
          e))
            if (
              "autoRound" !== p &&
              ((o = e[p]), !(d.$i[p] && (0, d.if)(p, e, r, n, t, i)))
            ) {
              if (
                ((u = typeof o),
                (h = to[p]),
                "function" === u && (u = typeof (o = o.call(r, n, t, i))),
                "string" === u && ~o.indexOf("random(") && (o = (0, d.UI)(o)),
                h)
              )
                h(this, t, p, o, r) && (O = 1);
              else if ("--" === p.substr(0, 2))
                (s = (getComputedStyle(t).getPropertyValue(p) + "").trim()),
                  (o += ""),
                  (d.GN.lastIndex = 0),
                  d.GN.test(s) || ((f = (0, d.Wy)(s)), (v = (0, d.Wy)(o))),
                  v ? f !== v && (s = tt(t, p, s, v) + v) : f && (o += f),
                  this.add(k, "setProperty", s, o, n, i, 0, 0, p),
                  C.push(p),
                  P.push(p, 0, k[p]);
              else if ("undefined" !== u) {
                if (
                  (z && p in z
                    ? ((s =
                        "function" == typeof z[p]
                          ? z[p].call(r, n, t, i)
                          : z[p]),
                      (0, d.r9)(s) &&
                        ~s.indexOf("random(") &&
                        (s = (0, d.UI)(s)),
                      (0, d.Wy)(s + "") ||
                        "auto" === s ||
                        (s += d.Fc.units[p] || (0, d.Wy)(te(t, p)) || ""),
                      "=" === (s + "").charAt(1) && (s = te(t, p)))
                    : (s = te(t, p)),
                  (l = parseFloat(s)),
                  (m =
                    "string" === u && "=" === o.charAt(1) && o.substr(0, 2)) &&
                    (o = o.substr(2)),
                  (a = parseFloat(o)),
                  p in S &&
                    ("autoAlpha" === p &&
                      (1 === l &&
                        "hidden" === te(t, "visibility") &&
                        a &&
                        (l = 0),
                      P.push("visibility", 0, k.visibility),
                      K(
                        this,
                        k,
                        "visibility",
                        l ? "inherit" : "hidden",
                        a ? "inherit" : "hidden",
                        !a
                      )),
                    "scale" !== p &&
                      "transform" !== p &&
                      ~(p = S[p]).indexOf(",") &&
                      (p = p.split(",")[0])),
                  (y = p in g))
                ) {
                  if (
                    (this.styles.save(p),
                    x ||
                      (((w = t._gsap).renderTransform && !e.parseTransform) ||
                        tf(t, e.parseTransform),
                      (M = !1 !== e.smoothOrigin && w.smooth),
                      ((x = this._pt =
                        new d.Fo(
                          this._pt,
                          k,
                          D,
                          0,
                          1,
                          w.renderTransform,
                          w,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === p)
                  )
                    (this._pt = new d.Fo(
                      this._pt,
                      w,
                      "scaleY",
                      w.scaleY,
                      (m ? (0, d.cy)(w.scaleY, m + a) : a) - w.scaleY || 0,
                      _
                    )),
                      (this._pt.u = 0),
                      C.push("scaleY", p),
                      (p += "X");
                  else if ("transformOrigin" === p) {
                    P.push(F, 0, k[F]),
                      (o = ti(o)),
                      w.svg
                        ? tp(t, o, 0, M, 0, this)
                        : ((v = parseFloat(o.split(" ")[2]) || 0) !==
                            w.zOrigin && K(this, w, "zOrigin", w.zOrigin, v),
                          K(this, k, p, td(s), td(o)));
                    continue;
                  } else if ("svgOrigin" === p) {
                    tp(t, o, 1, M, 0, this);
                    continue;
                  } else if (p in tl) {
                    tw(this, w, p, l, m ? (0, d.cy)(l, m + o) : o);
                    continue;
                  } else if ("smoothOrigin" === p) {
                    K(this, w, "smooth", w.smooth, o);
                    continue;
                  } else if ("force3D" === p) {
                    w[p] = o;
                    continue;
                  } else if ("transform" === p) {
                    tS(this, o, t);
                    continue;
                  }
                } else p in k || (p = V(p) || p);
                if (
                  y ||
                  ((a || 0 === a) && (l || 0 === l) && !b.test(o) && p in k)
                )
                  (f = (s + "").substr((l + "").length)),
                    a || (a = 0),
                    (v = (0, d.Wy)(o) || (p in d.Fc.units ? d.Fc.units[p] : f)),
                    f !== v && (l = tt(t, p, s, v)),
                    (this._pt = new d.Fo(
                      this._pt,
                      y ? w : k,
                      p,
                      l,
                      (m ? (0, d.cy)(l, m + a) : a) - l,
                      y || ("px" !== v && "zIndex" !== p) || !1 === e.autoRound
                        ? _
                        : T
                    )),
                    (this._pt.u = v || 0),
                    f !== v &&
                      "%" !== v &&
                      ((this._pt.b = s), (this._pt.r = E));
                else if (p in k) tr.call(this, t, p, s, m ? m + o : o);
                else if (p in t) this.add(t, p, s || t[p], m ? m + o : o, n, i);
                else if ("parseTransform" !== p) {
                  (0, d.lC)(p, o);
                  continue;
                }
                y || (p in k ? P.push(p, 0, k[p]) : P.push(p, 1, s || t[p])),
                  C.push(p);
              }
            }
          O && (0, d.JV)(this);
        },
        render: function (t, e) {
          if (e.tween._time || !p())
            for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
          else e.styles.revert();
        },
        get: te,
        aliases: S,
        getSetter: function (t, e, r) {
          var n = S[e];
          return (
            n && 0 > n.indexOf(",") && (e = n),
            e in g && e !== F && (t._gsap.x || te(t, "x"))
              ? r && h === r
                ? "scale" === e
                  ? A
                  : z
                : ((h = r || {}), "scale" === e ? R : N)
              : t.style && !(0, d.m2)(t.style[e])
              ? C
              : ~e.indexOf("-")
              ? k
              : (0, d.S5)(t, e)
          );
        },
        core: { _removeProperty: $, _getMatrix: th },
      };
      (d.p8.utils.checkPrefix = V),
        (d.p8.core.getStyleSaver = B),
        (n = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent"),
        (i = "rotation,rotationX,rotationY,skewX,skewY"),
        (s =
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),
        (o = (0, d.fS)(
          n +
            "," +
            i +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (t) {
            g[t] = 1;
          }
        )),
        (0, d.fS)(i, function (t) {
          (d.Fc.units[t] = "deg"), (tl[t] = 1);
        }),
        (S[o[13]] = n + "," + i),
        (0, d.fS)(s, function (t) {
          var e = t.split(":");
          S[e[1]] = o[e[0]];
        }),
        (0, d.fS)(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (t) {
            d.Fc.units[t] = "px";
          }
        ),
        d.p8.registerPlugin(t_);
      var tM = d.p8.registerPlugin(t_) || d.p8;
      tM.core.Tween;
    },
    61237: function (t, e, r) {
      "use strict";
      function n() {
        for (var t, e, r = 0, n = "", i = arguments.length; r < i; r++)
          (t = arguments[r]) &&
            (e = (function t(e) {
              var r,
                n,
                i = "";
              if ("string" == typeof e || "number" == typeof e) i += e;
              else if ("object" == typeof e) {
                if (Array.isArray(e)) {
                  var s = e.length;
                  for (r = 0; r < s; r++)
                    e[r] && (n = t(e[r])) && (i && (i += " "), (i += n));
                } else for (n in e) e[n] && (i && (i += " "), (i += n));
              }
              return i;
            })(t)) &&
            (n && (n += " "), (n += e));
        return n;
      }
      r.d(e, {
        W: function () {
          return n;
        },
      }),
        (e.Z = n);
    },
    72267: function (t, e, r) {
      "use strict";
      function n(t, e, r) {
        return Math.max(t, Math.min(e, r));
      }
      r.d(e, {
        Z: function () {
          return u;
        },
      });
      var i = class {
          isRunning = !1;
          value = 0;
          from = 0;
          to = 0;
          currentTime = 0;
          lerp;
          duration;
          easing;
          onUpdate;
          advance(t) {
            if (!this.isRunning) return;
            let e = !1;
            if (this.duration && this.easing) {
              this.currentTime += t;
              let r = n(0, this.currentTime / this.duration, 1),
                i = (e = r >= 1) ? 1 : this.easing(r);
              this.value = this.from + (this.to - this.from) * i;
            } else if (this.lerp) {
              var r, i, s;
              (this.value =
                ((r = this.value),
                (i = this.to),
                (1 - (s = 1 - Math.exp(-(60 * this.lerp) * t))) * r + s * i)),
                Math.round(this.value) === this.to &&
                  ((this.value = this.to), (e = !0));
            } else (this.value = this.to), (e = !0);
            e && this.stop(), this.onUpdate?.(this.value, e);
          }
          stop() {
            this.isRunning = !1;
          }
          fromTo(
            t,
            e,
            { lerp: r, duration: n, easing: i, onStart: s, onUpdate: o }
          ) {
            (this.from = this.value = t),
              (this.to = e),
              (this.lerp = r),
              (this.duration = n),
              (this.easing = i),
              (this.currentTime = 0),
              (this.isRunning = !0),
              s?.(),
              (this.onUpdate = o);
          }
        },
        s = class {
          constructor(t, e, { autoResize: r = !0, debounce: n = 250 } = {}) {
            if (((this.wrapper = t), (this.content = e), r)) {
              var i;
              let t;
              (this.debouncedResize =
                ((i = this.resize),
                function (...e) {
                  let r = this;
                  clearTimeout(t),
                    (t = setTimeout(() => {
                      (t = void 0), i.apply(r, e);
                    }, n));
                })),
                this.wrapper instanceof Window
                  ? window.addEventListener("resize", this.debouncedResize, !1)
                  : ((this.wrapperResizeObserver = new ResizeObserver(
                      this.debouncedResize
                    )),
                    this.wrapperResizeObserver.observe(this.wrapper)),
                (this.contentResizeObserver = new ResizeObserver(
                  this.debouncedResize
                )),
                this.contentResizeObserver.observe(this.content);
            }
            this.resize();
          }
          width = 0;
          height = 0;
          scrollHeight = 0;
          scrollWidth = 0;
          debouncedResize;
          wrapperResizeObserver;
          contentResizeObserver;
          destroy() {
            this.wrapperResizeObserver?.disconnect(),
              this.contentResizeObserver?.disconnect(),
              this.wrapper === window &&
                this.debouncedResize &&
                window.removeEventListener("resize", this.debouncedResize, !1);
          }
          resize = () => {
            this.onWrapperResize(), this.onContentResize();
          };
          onWrapperResize = () => {
            this.wrapper instanceof Window
              ? ((this.width = window.innerWidth),
                (this.height = window.innerHeight))
              : ((this.width = this.wrapper.clientWidth),
                (this.height = this.wrapper.clientHeight));
          };
          onContentResize = () => {
            this.wrapper instanceof Window
              ? ((this.scrollHeight = this.content.scrollHeight),
                (this.scrollWidth = this.content.scrollWidth))
              : ((this.scrollHeight = this.wrapper.scrollHeight),
                (this.scrollWidth = this.wrapper.scrollWidth));
          };
          get limit() {
            return {
              x: this.scrollWidth - this.width,
              y: this.scrollHeight - this.height,
            };
          }
        },
        o = class {
          events = {};
          emit(t, ...e) {
            let r = this.events[t] || [];
            for (let t = 0, n = r.length; t < n; t++) r[t]?.(...e);
          }
          on(t, e) {
            return (
              this.events[t]?.push(e) || (this.events[t] = [e]),
              () => {
                this.events[t] = this.events[t]?.filter((t) => e !== t);
              }
            );
          }
          off(t, e) {
            this.events[t] = this.events[t]?.filter((t) => e !== t);
          }
          destroy() {
            this.events = {};
          }
        },
        a = 100 / 6,
        l = { passive: !1 },
        c = class {
          constructor(t, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
            (this.element = t),
              (this.options = e),
              window.addEventListener("resize", this.onWindowResize, !1),
              this.onWindowResize(),
              this.element.addEventListener("wheel", this.onWheel, l),
              this.element.addEventListener("touchstart", this.onTouchStart, l),
              this.element.addEventListener("touchmove", this.onTouchMove, l),
              this.element.addEventListener("touchend", this.onTouchEnd, l);
          }
          touchStart = { x: 0, y: 0 };
          lastDelta = { x: 0, y: 0 };
          window = { width: 0, height: 0 };
          emitter = new o();
          on(t, e) {
            return this.emitter.on(t, e);
          }
          destroy() {
            this.emitter.destroy(),
              window.removeEventListener("resize", this.onWindowResize, !1),
              this.element.removeEventListener("wheel", this.onWheel, l),
              this.element.removeEventListener(
                "touchstart",
                this.onTouchStart,
                l
              ),
              this.element.removeEventListener(
                "touchmove",
                this.onTouchMove,
                l
              ),
              this.element.removeEventListener("touchend", this.onTouchEnd, l);
          }
          onTouchStart = (t) => {
            let { clientX: e, clientY: r } = t.targetTouches
              ? t.targetTouches[0]
              : t;
            (this.touchStart.x = e),
              (this.touchStart.y = r),
              (this.lastDelta = { x: 0, y: 0 }),
              this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t });
          };
          onTouchMove = (t) => {
            let { clientX: e, clientY: r } = t.targetTouches
                ? t.targetTouches[0]
                : t,
              n = -(e - this.touchStart.x) * this.options.touchMultiplier,
              i = -(r - this.touchStart.y) * this.options.touchMultiplier;
            (this.touchStart.x = e),
              (this.touchStart.y = r),
              (this.lastDelta = { x: n, y: i }),
              this.emitter.emit("scroll", { deltaX: n, deltaY: i, event: t });
          };
          onTouchEnd = (t) => {
            this.emitter.emit("scroll", {
              deltaX: this.lastDelta.x,
              deltaY: this.lastDelta.y,
              event: t,
            });
          };
          onWheel = (t) => {
            let { deltaX: e, deltaY: r, deltaMode: n } = t,
              i = 1 === n ? a : 2 === n ? this.window.width : 1,
              s = 1 === n ? a : 2 === n ? this.window.height : 1;
            (e *= i),
              (r *= s),
              (e *= this.options.wheelMultiplier),
              (r *= this.options.wheelMultiplier),
              this.emitter.emit("scroll", { deltaX: e, deltaY: r, event: t });
          };
          onWindowResize = () => {
            this.window = {
              width: window.innerWidth,
              height: window.innerHeight,
            };
          };
        },
        u = class {
          _isScrolling = !1;
          _isStopped = !1;
          _isLocked = !1;
          _preventNextNativeScrollEvent = !1;
          _resetVelocityTimeout = null;
          __rafID = null;
          isTouching;
          time = 0;
          userData = {};
          lastVelocity = 0;
          velocity = 0;
          direction = 0;
          options;
          targetScroll;
          animatedScroll;
          animate = new i();
          emitter = new o();
          dimensions;
          virtualScroll;
          constructor({
            wrapper: t = window,
            content: e = document.documentElement,
            eventsTarget: r = t,
            smoothWheel: n = !0,
            syncTouch: i = !1,
            syncTouchLerp: o = 0.075,
            touchInertiaMultiplier: a = 35,
            duration: l,
            easing: u = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            lerp: h = 0.1,
            infinite: p = !1,
            orientation: f = "vertical",
            gestureOrientation: d = "vertical",
            touchMultiplier: g = 1,
            wheelMultiplier: v = 1,
            autoResize: m = !0,
            prevent: y,
            virtualScroll: x,
            overscroll: w = !0,
            autoRaf: b = !1,
            __experimental__naiveDimensions: S = !1,
          } = {}) {
            (window.lenisVersion = "1.1.16"),
              (t && t !== document.documentElement && t !== document.body) ||
                (t = window),
              (this.options = {
                wrapper: t,
                content: e,
                eventsTarget: r,
                smoothWheel: n,
                syncTouch: i,
                syncTouchLerp: o,
                touchInertiaMultiplier: a,
                duration: l,
                easing: u,
                lerp: h,
                infinite: p,
                gestureOrientation: d,
                orientation: f,
                touchMultiplier: g,
                wheelMultiplier: v,
                autoResize: m,
                prevent: y,
                virtualScroll: x,
                overscroll: w,
                autoRaf: b,
                __experimental__naiveDimensions: S,
              }),
              (this.dimensions = new s(t, e, { autoResize: m })),
              this.updateClassName(),
              (this.targetScroll = this.animatedScroll = this.actualScroll),
              this.options.wrapper.addEventListener(
                "scroll",
                this.onNativeScroll,
                !1
              ),
              this.options.wrapper.addEventListener(
                "pointerdown",
                this.onPointerDown,
                !1
              ),
              (this.virtualScroll = new c(r, {
                touchMultiplier: g,
                wheelMultiplier: v,
              })),
              this.virtualScroll.on("scroll", this.onVirtualScroll),
              this.options.autoRaf &&
                (this.__rafID = requestAnimationFrame(this.raf));
          }
          destroy() {
            this.emitter.destroy(),
              this.options.wrapper.removeEventListener(
                "scroll",
                this.onNativeScroll,
                !1
              ),
              this.options.wrapper.removeEventListener(
                "pointerdown",
                this.onPointerDown,
                !1
              ),
              this.virtualScroll.destroy(),
              this.dimensions.destroy(),
              this.cleanUpClassName(),
              this.__rafID && cancelAnimationFrame(this.__rafID);
          }
          on(t, e) {
            return this.emitter.on(t, e);
          }
          off(t, e) {
            return this.emitter.off(t, e);
          }
          setScroll(t) {
            this.isHorizontal
              ? (this.rootElement.scrollLeft = t)
              : (this.rootElement.scrollTop = t);
          }
          onPointerDown = (t) => {
            1 === t.button && this.reset();
          };
          onVirtualScroll = (t) => {
            if (
              "function" == typeof this.options.virtualScroll &&
              !1 === this.options.virtualScroll(t)
            )
              return;
            let { deltaX: e, deltaY: r, event: n } = t;
            if (
              (this.emitter.emit("virtual-scroll", {
                deltaX: e,
                deltaY: r,
                event: n,
              }),
              n.ctrlKey || n.lenisStopPropagation)
            )
              return;
            let i = n.type.includes("touch"),
              s = n.type.includes("wheel");
            if (
              ((this.isTouching =
                "touchstart" === n.type || "touchmove" === n.type),
              this.options.syncTouch &&
                i &&
                "touchstart" === n.type &&
                !this.isStopped &&
                !this.isLocked)
            ) {
              this.reset();
              return;
            }
            let o = 0 === e && 0 === r,
              a =
                ("vertical" === this.options.gestureOrientation && 0 === r) ||
                ("horizontal" === this.options.gestureOrientation && 0 === e);
            if (o || a) return;
            let l = n.composedPath();
            l = l.slice(0, l.indexOf(this.rootElement));
            let c = this.options.prevent;
            if (
              l.find(
                (t) =>
                  t instanceof HTMLElement &&
                  (("function" == typeof c && c?.(t)) ||
                    t.hasAttribute?.("data-lenis-prevent") ||
                    (i && t.hasAttribute?.("data-lenis-prevent-touch")) ||
                    (s && t.hasAttribute?.("data-lenis-prevent-wheel")))
              )
            )
              return;
            if (this.isStopped || this.isLocked) {
              n.preventDefault();
              return;
            }
            if (
              !(
                (this.options.syncTouch && i) ||
                (this.options.smoothWheel && s)
              )
            ) {
              (this.isScrolling = "native"),
                this.animate.stop(),
                (n.lenisStopPropagation = !0);
              return;
            }
            let u = r;
            "both" === this.options.gestureOrientation
              ? (u = Math.abs(r) > Math.abs(e) ? r : e)
              : "horizontal" === this.options.gestureOrientation && (u = e),
              (!this.options.overscroll ||
                this.options.infinite ||
                (this.options.wrapper !== window &&
                  ((this.animatedScroll > 0 &&
                    this.animatedScroll < this.limit) ||
                    (0 === this.animatedScroll && r > 0) ||
                    (this.animatedScroll === this.limit && r < 0)))) &&
                (n.lenisStopPropagation = !0),
              n.preventDefault();
            let h = i && this.options.syncTouch,
              p = i && "touchend" === n.type && Math.abs(u) > 5;
            p && (u = this.velocity * this.options.touchInertiaMultiplier),
              this.scrollTo(this.targetScroll + u, {
                programmatic: !1,
                ...(h
                  ? { lerp: p ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    }),
              });
          };
          resize() {
            this.dimensions.resize(),
              (this.animatedScroll = this.targetScroll = this.actualScroll),
              this.emit();
          }
          emit() {
            this.emitter.emit("scroll", this);
          }
          onNativeScroll = () => {
            if (
              (null !== this._resetVelocityTimeout &&
                (clearTimeout(this._resetVelocityTimeout),
                (this._resetVelocityTimeout = null)),
              this._preventNextNativeScrollEvent)
            ) {
              this._preventNextNativeScrollEvent = !1;
              return;
            }
            if (!1 === this.isScrolling || "native" === this.isScrolling) {
              let t = this.animatedScroll;
              (this.animatedScroll = this.targetScroll = this.actualScroll),
                (this.lastVelocity = this.velocity),
                (this.velocity = this.animatedScroll - t),
                (this.direction = Math.sign(this.animatedScroll - t)),
                (this.isScrolling = "native"),
                this.emit(),
                0 !== this.velocity &&
                  (this._resetVelocityTimeout = setTimeout(() => {
                    (this.lastVelocity = this.velocity),
                      (this.velocity = 0),
                      (this.isScrolling = !1),
                      this.emit();
                  }, 400));
            }
          };
          reset() {
            (this.isLocked = !1),
              (this.isScrolling = !1),
              (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity = 0),
              this.animate.stop();
          }
          start() {
            this.isStopped && ((this.isStopped = !1), this.reset());
          }
          stop() {
            this.isStopped ||
              ((this.isStopped = !0), this.animate.stop(), this.reset());
          }
          raf = (t) => {
            let e = t - (this.time || t);
            (this.time = t),
              this.animate.advance(0.001 * e),
              this.options.autoRaf &&
                (this.__rafID = requestAnimationFrame(this.raf));
          };
          scrollTo(
            t,
            {
              offset: e = 0,
              immediate: r = !1,
              lock: i = !1,
              duration: s = this.options.duration,
              easing: o = this.options.easing,
              lerp: a = this.options.lerp,
              onStart: l,
              onComplete: c,
              force: u = !1,
              programmatic: h = !0,
              userData: p,
            } = {}
          ) {
            if ((!this.isStopped && !this.isLocked) || u) {
              if ("string" == typeof t && ["top", "left", "start"].includes(t))
                t = 0;
              else if (
                "string" == typeof t &&
                ["bottom", "right", "end"].includes(t)
              )
                t = this.limit;
              else {
                let r;
                if (
                  ("string" == typeof t
                    ? (r = document.querySelector(t))
                    : t instanceof HTMLElement && t?.nodeType && (r = t),
                  r)
                ) {
                  if (this.options.wrapper !== window) {
                    let t = this.rootElement.getBoundingClientRect();
                    e -= this.isHorizontal ? t.left : t.top;
                  }
                  let n = r.getBoundingClientRect();
                  t =
                    (this.isHorizontal ? n.left : n.top) + this.animatedScroll;
                }
              }
              if ("number" == typeof t) {
                if (
                  ((t += e),
                  (t = Math.round(t)),
                  this.options.infinite
                    ? h &&
                      (this.targetScroll = this.animatedScroll = this.scroll)
                    : (t = n(0, t, this.limit)),
                  t === this.targetScroll)
                ) {
                  l?.(this), c?.(this);
                  return;
                }
                if (((this.userData = p ?? {}), r)) {
                  (this.animatedScroll = this.targetScroll = t),
                    this.setScroll(this.scroll),
                    this.reset(),
                    this.preventNextNativeScrollEvent(),
                    this.emit(),
                    c?.(this),
                    (this.userData = {});
                  return;
                }
                h || (this.targetScroll = t),
                  this.animate.fromTo(this.animatedScroll, t, {
                    duration: s,
                    easing: o,
                    lerp: a,
                    onStart: () => {
                      i && (this.isLocked = !0),
                        (this.isScrolling = "smooth"),
                        l?.(this);
                    },
                    onUpdate: (t, e) => {
                      (this.isScrolling = "smooth"),
                        (this.lastVelocity = this.velocity),
                        (this.velocity = t - this.animatedScroll),
                        (this.direction = Math.sign(this.velocity)),
                        (this.animatedScroll = t),
                        this.setScroll(this.scroll),
                        h && (this.targetScroll = t),
                        e || this.emit(),
                        e &&
                          (this.reset(),
                          this.emit(),
                          c?.(this),
                          (this.userData = {}),
                          this.preventNextNativeScrollEvent());
                    },
                  });
              }
            }
          }
          preventNextNativeScrollEvent() {
            (this._preventNextNativeScrollEvent = !0),
              requestAnimationFrame(() => {
                this._preventNextNativeScrollEvent = !1;
              });
          }
          get rootElement() {
            return this.options.wrapper === window
              ? document.documentElement
              : this.options.wrapper;
          }
          get limit() {
            return this.options.__experimental__naiveDimensions
              ? this.isHorizontal
                ? this.rootElement.scrollWidth - this.rootElement.clientWidth
                : this.rootElement.scrollHeight - this.rootElement.clientHeight
              : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
          }
          get isHorizontal() {
            return "horizontal" === this.options.orientation;
          }
          get actualScroll() {
            return this.isHorizontal
              ? this.rootElement.scrollLeft
              : this.rootElement.scrollTop;
          }
          get scroll() {
            var t;
            return this.options.infinite
              ? ((this.animatedScroll % (t = this.limit)) + t) % t
              : this.animatedScroll;
          }
          get progress() {
            return 0 === this.limit ? 1 : this.scroll / this.limit;
          }
          get isScrolling() {
            return this._isScrolling;
          }
          set isScrolling(t) {
            this._isScrolling !== t &&
              ((this._isScrolling = t), this.updateClassName());
          }
          get isStopped() {
            return this._isStopped;
          }
          set isStopped(t) {
            this._isStopped !== t &&
              ((this._isStopped = t), this.updateClassName());
          }
          get isLocked() {
            return this._isLocked;
          }
          set isLocked(t) {
            this._isLocked !== t &&
              ((this._isLocked = t), this.updateClassName());
          }
          get isSmooth() {
            return "smooth" === this.isScrolling;
          }
          get className() {
            let t = "lenis";
            return (
              this.isStopped && (t += " lenis-stopped"),
              this.isLocked && (t += " lenis-locked"),
              this.isScrolling && (t += " lenis-scrolling"),
              "smooth" === this.isScrolling && (t += " lenis-smooth"),
              t
            );
          }
          updateClassName() {
            this.cleanUpClassName(),
              (this.rootElement.className =
                `${this.rootElement.className} ${this.className}`.trim());
          }
          cleanUpClassName() {
            this.rootElement.className = this.rootElement.className
              .replace(/lenis(-\w+)?/g, "")
              .trim();
          }
        };
    },
  },
]);
