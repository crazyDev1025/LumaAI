(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2940],
  {
    90076: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return W;
        },
      });
      var r = (function () {
          function e(e) {
            var t = this;
            (this._insertTag = function (e) {
              var n;
              (n =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, n),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag);
            }),
            (t.insert = function (e) {
              if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                var t;
                this._insertTag(
                  ((t = document.createElement("style")).setAttribute(
                    "data-emotion",
                    this.key
                  ),
                  void 0 !== this.nonce && t.setAttribute("nonce", this.nonce),
                  t.appendChild(document.createTextNode("")),
                  t.setAttribute("data-s", ""),
                  t)
                );
              }
              var n = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var r = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t];
                })(n);
                try {
                  r.insertRule(e, r.cssRules.length);
                } catch (e) {}
              } else n.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        i = Math.abs,
        o = String.fromCharCode,
        a = Object.assign;
      function s(e, t, n) {
        return e.replace(t, n);
      }
      function l(e, t) {
        return e.indexOf(t);
      }
      function c(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function u(e, t, n) {
        return e.slice(t, n);
      }
      function d(e) {
        return e.length;
      }
      function f(e, t) {
        return t.push(e), e;
      }
      var h = 1,
        p = 1,
        m = 0,
        v = 0,
        g = 0,
        b = "";
      function y(e, t, n, r, i, o, a) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: i,
          children: o,
          line: h,
          column: p,
          length: a,
          return: "",
        };
      }
      function x(e, t) {
        return a(
          y("", null, null, "", null, null, 0),
          e,
          { length: -e.length },
          t
        );
      }
      function w() {
        return (g = v < m ? c(b, v++) : 0), p++, 10 === g && ((p = 1), h++), g;
      }
      function _() {
        return c(b, v);
      }
      function k(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function S(e) {
        return (h = p = 1), (m = d((b = e))), (v = 0), [];
      }
      function P(e) {
        var t, n;
        return ((t = v - 1),
        (n = (function e(t) {
          for (; w(); )
            switch (g) {
              case t:
                return v;
              case 34:
              case 39:
                34 !== t && 39 !== t && e(g);
                break;
              case 40:
                41 === t && e(t);
                break;
              case 92:
                w();
            }
          return v;
        })(91 === e ? e + 2 : 40 === e ? e + 1 : e)),
        u(b, t, n)).trim();
      }
      var j = "-ms-",
        E = "-moz-",
        A = "-webkit-",
        C = "comm",
        M = "rule",
        z = "decl",
        R = "@keyframes";
      function I(e, t) {
        for (var n = "", r = e.length, i = 0; i < r; i++)
          n += t(e[i], i, e, t) || "";
        return n;
      }
      function T(e, t, n, r) {
        switch (e.type) {
          case "@layer":
            if (e.children.length) break;
          case "@import":
          case z:
            return (e.return = e.return || e.value);
          case C:
            return "";
          case R:
            return (e.return = e.value + "{" + I(e.children, r) + "}");
          case M:
            e.value = e.props.join(",");
        }
        return d((n = I(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function O(e, t, n, r, o, a, l, c, d, f, h) {
        for (
          var p = o - 1,
            m = 0 === o ? a : [""],
            v = m.length,
            g = 0,
            b = 0,
            x = 0;
          g < r;
          ++g
        )
          for (
            var w = 0, _ = u(e, p + 1, (p = i((b = l[g])))), k = e;
            w < v;
            ++w
          )
            (k = (b > 0 ? m[w] + " " + _ : s(_, /&\f/g, m[w])).trim()) &&
              (d[x++] = k);
        return y(e, t, n, 0 === o ? M : c, d, f, h);
      }
      function B(e, t, n, r) {
        return y(e, t, n, z, u(e, 0, r), u(e, r + 1, -1), r);
      }
      var L = function (e, t, n) {
          for (
            var r = 0, i = 0;
            (r = i), (i = _()), 38 === r && 12 === i && (t[n] = 1), !k(i);

          )
            w();
          return u(b, e, v);
        },
        D = function (e, t) {
          var n = -1,
            r = 44;
          do
            switch (k(r)) {
              case 0:
                38 === r && 12 === _() && (t[n] = 1), (e[n] += L(v - 1, t, n));
                break;
              case 2:
                e[n] += P(r);
                break;
              case 4:
                if (44 === r) {
                  (e[++n] = 58 === _() ? "&\f" : ""), (t[n] = e[n].length);
                  break;
                }
              default:
                e[n] += o(r);
            }
          while ((r = w()));
          return e;
        },
        N = function (e, t) {
          var n;
          return (n = D(S(e), t)), (b = ""), n;
        },
        F = new WeakMap(),
        U = function (e) {
          if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value,
                n = e.parent,
                r = e.column === n.column && e.line === n.line;
              "rule" !== n.type;

            )
              if (!(n = n.parent)) return;
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || F.get(n)) &&
              !r
            ) {
              F.set(e, !0);
              for (
                var i = [], o = N(t, i), a = n.props, s = 0, l = 0;
                s < o.length;
                s++
              )
                for (var c = 0; c < a.length; c++, l++)
                  e.props[l] = i[s]
                    ? o[s].replace(/&\f/g, a[c])
                    : a[c] + " " + o[s];
            }
          }
        },
        G = function (e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ""), (e.value = ""));
          }
        },
        q = [
          function (e, t, n, r) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case z:
                  e.return = (function e(t, n) {
                    switch (
                      45 ^ c(t, 0)
                        ? (((((((n << 2) ^ c(t, 0)) << 2) ^ c(t, 1)) << 2) ^
                            c(t, 2)) <<
                            2) ^
                          c(t, 3)
                        : 0
                    ) {
                      case 5103:
                        return A + "print-" + t + t;
                      case 5737:
                      case 4201:
                      case 3177:
                      case 3433:
                      case 1641:
                      case 4457:
                      case 2921:
                      case 5572:
                      case 6356:
                      case 5844:
                      case 3191:
                      case 6645:
                      case 3005:
                      case 6391:
                      case 5879:
                      case 5623:
                      case 6135:
                      case 4599:
                      case 4855:
                      case 4215:
                      case 6389:
                      case 5109:
                      case 5365:
                      case 5621:
                      case 3829:
                        return A + t + t;
                      case 5349:
                      case 4246:
                      case 4810:
                      case 6968:
                      case 2756:
                        return A + t + E + t + j + t + t;
                      case 6828:
                      case 4268:
                        return A + t + j + t + t;
                      case 6165:
                        return A + t + j + "flex-" + t + t;
                      case 5187:
                        return (
                          A +
                          t +
                          s(
                            t,
                            /(\w+).+(:[^]+)/,
                            A + "box-$1$2" + j + "flex-$1$2"
                          ) +
                          t
                        );
                      case 5443:
                        return (
                          A + t + j + "flex-item-" + s(t, /flex-|-self/, "") + t
                        );
                      case 4675:
                        return (
                          A +
                          t +
                          j +
                          "flex-line-pack" +
                          s(t, /align-content|flex-|-self/, "") +
                          t
                        );
                      case 5548:
                        return A + t + j + s(t, "shrink", "negative") + t;
                      case 5292:
                        return A + t + j + s(t, "basis", "preferred-size") + t;
                      case 6060:
                        return (
                          A +
                          "box-" +
                          s(t, "-grow", "") +
                          A +
                          t +
                          j +
                          s(t, "grow", "positive") +
                          t
                        );
                      case 4554:
                        return (
                          A + s(t, /([^-])(transform)/g, "$1" + A + "$2") + t
                        );
                      case 6187:
                        return (
                          s(
                            s(
                              s(t, /(zoom-|grab)/, A + "$1"),
                              /(image-set)/,
                              A + "$1"
                            ),
                            t,
                            ""
                          ) + t
                        );
                      case 5495:
                      case 3959:
                        return s(t, /(image-set\([^]*)/, A + "$1$`$1");
                      case 4968:
                        return (
                          s(
                            s(
                              t,
                              /(.+:)(flex-)?(.*)/,
                              A + "box-pack:$3" + j + "flex-pack:$3"
                            ),
                            /s.+-b[^;]+/,
                            "justify"
                          ) +
                          A +
                          t +
                          t
                        );
                      case 4095:
                      case 3583:
                      case 4068:
                      case 2532:
                        return s(t, /(.+)-inline(.+)/, A + "$1$2") + t;
                      case 8116:
                      case 7059:
                      case 5753:
                      case 5535:
                      case 5445:
                      case 5701:
                      case 4933:
                      case 4677:
                      case 5533:
                      case 5789:
                      case 5021:
                      case 4765:
                        if (d(t) - 1 - n > 6)
                          switch (c(t, n + 1)) {
                            case 109:
                              if (45 !== c(t, n + 4)) break;
                            case 102:
                              return (
                                s(
                                  t,
                                  /(.+:)(.+)-([^]+)/,
                                  "$1" +
                                    A +
                                    "$2-$3$1" +
                                    E +
                                    (108 == c(t, n + 3) ? "$3" : "$2-$3")
                                ) + t
                              );
                            case 115:
                              return ~l(t, "stretch")
                                ? e(s(t, "stretch", "fill-available"), n) + t
                                : t;
                          }
                        break;
                      case 4949:
                        if (115 !== c(t, n + 1)) break;
                      case 6444:
                        switch (c(t, d(t) - 3 - (~l(t, "!important") && 10))) {
                          case 107:
                            return s(t, ":", ":" + A) + t;
                          case 101:
                            return (
                              s(
                                t,
                                /(.+:)([^;!]+)(;|!.+)?/,
                                "$1" +
                                  A +
                                  (45 === c(t, 14) ? "inline-" : "") +
                                  "box$3$1" +
                                  A +
                                  "$2$3$1" +
                                  j +
                                  "$2box$3"
                              ) + t
                            );
                        }
                        break;
                      case 5936:
                        switch (c(t, n + 11)) {
                          case 114:
                            return (
                              A + t + j + s(t, /[svh]\w+-[tblr]{2}/, "tb") + t
                            );
                          case 108:
                            return (
                              A +
                              t +
                              j +
                              s(t, /[svh]\w+-[tblr]{2}/, "tb-rl") +
                              t
                            );
                          case 45:
                            return (
                              A + t + j + s(t, /[svh]\w+-[tblr]{2}/, "lr") + t
                            );
                        }
                        return A + t + j + t + t;
                    }
                    return t;
                  })(e.value, e.length);
                  break;
                case R:
                  return I([x(e, { value: s(e.value, "@", "@" + A) })], r);
                case M:
                  if (e.length) {
                    var i, o;
                    return (
                      (i = e.props),
                      (o = function (t) {
                        var n;
                        switch (
                          ((n = t),
                          (n = /(::plac\w+|:read-\w+)/.exec(n)) ? n[0] : n)
                        ) {
                          case ":read-only":
                          case ":read-write":
                            return I(
                              [
                                x(e, {
                                  props: [s(t, /:(read-\w+)/, ":" + E + "$1")],
                                }),
                              ],
                              r
                            );
                          case "::placeholder":
                            return I(
                              [
                                x(e, {
                                  props: [
                                    s(t, /:(plac\w+)/, ":" + A + "input-$1"),
                                  ],
                                }),
                                x(e, {
                                  props: [s(t, /:(plac\w+)/, ":" + E + "$1")],
                                }),
                                x(e, {
                                  props: [s(t, /:(plac\w+)/, j + "input-$1")],
                                }),
                              ],
                              r
                            );
                        }
                        return "";
                      }),
                      i.map(o).join("")
                    );
                  }
              }
          },
        ],
        W = function (e) {
          var t,
            n,
            i,
            a,
            m,
            x,
            j = e.key;
          if ("css" === j) {
            var E = document.querySelectorAll(
              "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(E, function (e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(e), e.setAttribute("data-s", ""));
            });
          }
          var A = e.stylisPlugins || q,
            M = {},
            z = [];
          (a = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + j + ' "]'),
              function (e) {
                for (
                  var t = e.getAttribute("data-emotion").split(" "), n = 1;
                  n < t.length;
                  n++
                )
                  M[t[n]] = !0;
                z.push(e);
              }
            );
          var R =
              ((n = (t = [U, G].concat(A, [
                T,
                ((i = function (e) {
                  x.insert(e);
                }),
                function (e) {
                  !e.root && (e = e.return) && i(e);
                }),
              ])).length),
              function (e, r, i, o) {
                for (var a = "", s = 0; s < n; s++) a += t[s](e, r, i, o) || "";
                return a;
              }),
            L = function (e) {
              var t, n;
              return I(
                ((n = (function e(t, n, r, i, a, m, x, S, j) {
                  for (
                    var E,
                      A = 0,
                      M = 0,
                      z = x,
                      R = 0,
                      I = 0,
                      T = 0,
                      L = 1,
                      D = 1,
                      N = 1,
                      F = 0,
                      U = "",
                      G = a,
                      q = m,
                      W = i,
                      H = U;
                    D;

                  )
                    switch (((T = F), (F = w()))) {
                      case 40:
                        if (108 != T && 58 == c(H, z - 1)) {
                          -1 != l((H += s(P(F), "&", "&\f")), "&\f") &&
                            (N = -1);
                          break;
                        }
                      case 34:
                      case 39:
                      case 91:
                        H += P(F);
                        break;
                      case 9:
                      case 10:
                      case 13:
                      case 32:
                        H += (function (e) {
                          for (; (g = _()); )
                            if (g < 33) w();
                            else break;
                          return k(e) > 2 || k(g) > 3 ? "" : " ";
                        })(T);
                        break;
                      case 92:
                        H += (function (e, t) {
                          for (
                            var n;
                            --t &&
                            w() &&
                            !(g < 48) &&
                            !(g > 102) &&
                            (!(g > 57) || !(g < 65)) &&
                            (!(g > 70) || !(g < 97));

                          );
                          return (
                            (n = v + (t < 6 && 32 == _() && 32 == w())),
                            u(b, e, n)
                          );
                        })(v - 1, 7);
                        continue;
                      case 47:
                        switch (_()) {
                          case 42:
                          case 47:
                            f(
                              y(
                                (E = (function (e, t) {
                                  for (; w(); )
                                    if (e + g === 57) break;
                                    else if (e + g === 84 && 47 === _()) break;
                                  return (
                                    "/*" +
                                    u(b, t, v - 1) +
                                    "*" +
                                    o(47 === e ? e : w())
                                  );
                                })(w(), v)),
                                n,
                                r,
                                C,
                                o(g),
                                u(E, 2, -2),
                                0
                              ),
                              j
                            );
                            break;
                          default:
                            H += "/";
                        }
                        break;
                      case 123 * L:
                        S[A++] = d(H) * N;
                      case 125 * L:
                      case 59:
                      case 0:
                        switch (F) {
                          case 0:
                          case 125:
                            D = 0;
                          case 59 + M:
                            -1 == N && (H = s(H, /\f/g, "")),
                              I > 0 &&
                                d(H) - z &&
                                f(
                                  I > 32
                                    ? B(H + ";", i, r, z - 1)
                                    : B(s(H, " ", "") + ";", i, r, z - 2),
                                  j
                                );
                            break;
                          case 59:
                            H += ";";
                          default:
                            if (
                              (f(
                                (W = O(
                                  H,
                                  n,
                                  r,
                                  A,
                                  M,
                                  a,
                                  S,
                                  U,
                                  (G = []),
                                  (q = []),
                                  z
                                )),
                                m
                              ),
                              123 === F)
                            ) {
                              if (0 === M) e(H, n, W, W, G, m, z, S, q);
                              else
                                switch (99 === R && 110 === c(H, 3) ? 100 : R) {
                                  case 100:
                                  case 108:
                                  case 109:
                                  case 115:
                                    e(
                                      t,
                                      W,
                                      W,
                                      i &&
                                        f(
                                          O(
                                            t,
                                            W,
                                            W,
                                            0,
                                            0,
                                            a,
                                            S,
                                            U,
                                            a,
                                            (G = []),
                                            z
                                          ),
                                          q
                                        ),
                                      a,
                                      q,
                                      z,
                                      S,
                                      i ? G : q
                                    );
                                    break;
                                  default:
                                    e(H, W, W, W, [""], q, 0, S, q);
                                }
                            }
                        }
                        (A = M = I = 0), (L = N = 1), (U = H = ""), (z = x);
                        break;
                      case 58:
                        (z = 1 + d(H)), (I = T);
                      default:
                        if (L < 1) {
                          if (123 == F) --L;
                          else if (
                            125 == F &&
                            0 == L++ &&
                            125 ==
                              ((g = v > 0 ? c(b, --v) : 0),
                              p--,
                              10 === g && ((p = 1), h--),
                              g)
                          )
                            continue;
                        }
                        switch (((H += o(F)), F * L)) {
                          case 38:
                            N = M > 0 ? 1 : ((H += "\f"), -1);
                            break;
                          case 44:
                            (S[A++] = (d(H) - 1) * N), (N = 1);
                            break;
                          case 64:
                            45 === _() && (H += P(w())),
                              (R = _()),
                              (M = z =
                                d(
                                  (U = H +=
                                    (function (e) {
                                      for (; !k(_()); ) w();
                                      return u(b, e, v);
                                    })(v))
                                )),
                              F++;
                            break;
                          case 45:
                            45 === T && 2 == d(H) && (L = 0);
                        }
                    }
                  return m;
                })("", null, null, null, [""], (t = S((t = e))), 0, [0], t)),
                (b = ""),
                n),
                R
              );
            };
          m = function (e, t, n, r) {
            (x = n),
              L(e ? e + "{" + t.styles + "}" : t.styles),
              r && (D.inserted[t.name] = !0);
          };
          var D = {
            key: j,
            sheet: new r({
              key: j,
              container: a,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint,
            }),
            nonce: e.nonce,
            inserted: M,
            registered: {},
            insert: m,
          };
          return D.sheet.hydrate(z), D;
        };
    },
    32528: function (e, t, n) {
      "use strict";
      function r(e) {
        var t = Object.create(null);
        return function (n) {
          return void 0 === t[n] && (t[n] = e(n)), t[n];
        };
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    3389: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return s;
        },
        w: function () {
          return a;
        },
      });
      var r = n(83112),
        i = n(90076);
      n(85392), n(98559);
      var o = r.createContext(
        "undefined" != typeof HTMLElement ? (0, i.Z)({ key: "css" }) : null
      );
      o.Provider;
      var a = function (e) {
          return (0, r.forwardRef)(function (t, n) {
            return e(t, (0, r.useContext)(o), n);
          });
        },
        s = r.createContext({});
    },
    6729: function (e, t, n) {
      "use strict";
      n.d(t, {
        F4: function () {
          return o;
        },
      }),
        n(83112),
        n(98559);
      var r = n(85392);
      function i() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, r.O)(t);
      }
      n(90076), n(61629);
      var o = function () {
        var e = i.apply(void 0, arguments),
          t = "animation-" + e.name;
        return {
          name: t,
          styles: "@keyframes " + t + "{" + e.styles + "}",
          anim: 1,
          toString: function () {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
          },
        };
      };
    },
    85392: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return p;
        },
      });
      var r,
        i = n(61993),
        o = n(32528),
        a = /[A-Z]|^ms/g,
        s = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        l = function (e) {
          return 45 === e.charCodeAt(1);
        },
        c = function (e) {
          return null != e && "boolean" != typeof e;
        },
        u = (0, o.Z)(function (e) {
          return l(e) ? e : e.replace(a, "-$&").toLowerCase();
        }),
        d = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" == typeof t)
                return t.replace(s, function (e, t, n) {
                  return (r = { name: t, styles: n, next: r }), t;
                });
          }
          return 1 === i.Z[e] || l(e) || "number" != typeof t || 0 === t
            ? t
            : t + "px";
        };
      function f(e, t, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case "boolean":
            return "";
          case "object":
            if (1 === n.anim)
              return (r = { name: n.name, styles: n.styles, next: r }), n.name;
            if (void 0 !== n.styles) {
              var i = n.next;
              if (void 0 !== i)
                for (; void 0 !== i; )
                  (r = { name: i.name, styles: i.styles, next: r }),
                    (i = i.next);
              return n.styles + ";";
            }
            return (function (e, t, n) {
              var r = "";
              if (Array.isArray(n))
                for (var i = 0; i < n.length; i++) r += f(e, t, n[i]) + ";";
              else
                for (var o in n) {
                  var a = n[o];
                  if ("object" != typeof a)
                    null != t && void 0 !== t[a]
                      ? (r += o + "{" + t[a] + "}")
                      : c(a) && (r += u(o) + ":" + d(o, a) + ";");
                  else if (
                    Array.isArray(a) &&
                    "string" == typeof a[0] &&
                    (null == t || void 0 === t[a[0]])
                  )
                    for (var s = 0; s < a.length; s++)
                      c(a[s]) && (r += u(o) + ":" + d(o, a[s]) + ";");
                  else {
                    var l = f(e, t, a);
                    switch (o) {
                      case "animation":
                      case "animationName":
                        r += u(o) + ":" + l + ";";
                        break;
                      default:
                        r += o + "{" + l + "}";
                    }
                  }
                }
              return r;
            })(e, t, n);
          case "function":
            if (void 0 !== e) {
              var o = r,
                a = n(e);
              return (r = o), f(e, t, a);
            }
        }
        if (null == t) return n;
        var s = t[n];
        return void 0 !== s ? s : n;
      }
      var h = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
        p = function (e, t, n) {
          if (
            1 === e.length &&
            "object" == typeof e[0] &&
            null !== e[0] &&
            void 0 !== e[0].styles
          )
            return e[0];
          var i,
            o = !0,
            a = "";
          r = void 0;
          var s = e[0];
          null == s || void 0 === s.raw
            ? ((o = !1), (a += f(n, t, s)))
            : (a += s[0]);
          for (var l = 1; l < e.length; l++)
            (a += f(n, t, e[l])), o && (a += s[l]);
          h.lastIndex = 0;
          for (var c = ""; null !== (i = h.exec(a)); ) c += "-" + i[1];
          return {
            name:
              (function (e) {
                for (var t, n = 0, r = 0, i = e.length; i >= 4; ++r, i -= 4)
                  (t =
                    (65535 &
                      (t =
                        (255 & e.charCodeAt(r)) |
                        ((255 & e.charCodeAt(++r)) << 8) |
                        ((255 & e.charCodeAt(++r)) << 16) |
                        ((255 & e.charCodeAt(++r)) << 24))) *
                      1540483477 +
                    (((t >>> 16) * 59797) << 16)),
                    (t ^= t >>> 24),
                    (n =
                      ((65535 & t) * 1540483477 +
                        (((t >>> 16) * 59797) << 16)) ^
                      ((65535 & n) * 1540483477 +
                        (((n >>> 16) * 59797) << 16)));
                switch (i) {
                  case 3:
                    n ^= (255 & e.charCodeAt(r + 2)) << 16;
                  case 2:
                    n ^= (255 & e.charCodeAt(r + 1)) << 8;
                  case 1:
                    (n ^= 255 & e.charCodeAt(r)),
                      (n =
                        (65535 & n) * 1540483477 +
                        (((n >>> 16) * 59797) << 16));
                }
                return (
                  (n ^= n >>> 13),
                  (
                    ((n =
                      (65535 & n) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
                      (n >>> 15)) >>>
                    0
                  ).toString(36)
                );
              })(a) + c,
            styles: a,
            next: r,
          };
        };
    },
    98559: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return a;
        },
      });
      var r,
        i = n(83112),
        o =
          !!(r || (r = n.t(i, 2))).useInsertionEffect &&
          (r || (r = n.t(i, 2))).useInsertionEffect,
        a =
          o ||
          function (e) {
            return e();
          };
      o || i.useLayoutEffect;
    },
    42548: function (e, t, n) {
      "use strict";
      let r = "undefined" == typeof window;
      (() => {
        if (r) return;
        let { userAgent: e, platform: t, maxTouchPoints: n } = window.navigator;
        return (
          /(iphone|ipod|ipad)/i.test(e),
          "iPad" === t || ("MacIntel" === t && n > 0 && window.MSStream),
          /android/i.test(e),
          /Version\/12.+Safari/.test(e)
        );
      })();
    },
    93176: function (e, t, n) {},
    61629: function (e, t, n) {
      "use strict";
      var r = n(68784),
        i = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function l(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || i;
      }
      (s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[r.Memo] = a);
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (p) {
            var i = h(n);
            i && i !== p && e(t, i, r);
          }
          var a = u(n);
          d && (a = a.concat(d(n)));
          for (var s = l(t), m = l(n), v = 0; v < a.length; ++v) {
            var g = a[v];
            if (!o[g] && !(r && r[g]) && !(m && m[g]) && !(s && s[g])) {
              var b = f(n, g);
              try {
                c(t, g, b);
              } catch (e) {}
            }
          }
        }
        return t;
      };
    },
    21447: function (e, t, n) {
      e = n.nmd(e);
      var r,
        i,
        o,
        a,
        s,
        l,
        c,
        u,
        d,
        f,
        h,
        p = "__lodash_hash_undefined__",
        m = "[object Arguments]",
        v = "[object Function]",
        g = "[object Object]",
        b = /^\[object .+?Constructor\]$/,
        y = /^(?:0|[1-9]\d*)$/,
        x = {};
      (x["[object Float32Array]"] =
        x["[object Float64Array]"] =
        x["[object Int8Array]"] =
        x["[object Int16Array]"] =
        x["[object Int32Array]"] =
        x["[object Uint8Array]"] =
        x["[object Uint8ClampedArray]"] =
        x["[object Uint16Array]"] =
        x["[object Uint32Array]"] =
          !0),
        (x[m] =
          x["[object Array]"] =
          x["[object ArrayBuffer]"] =
          x["[object Boolean]"] =
          x["[object DataView]"] =
          x["[object Date]"] =
          x["[object Error]"] =
          x[v] =
          x["[object Map]"] =
          x["[object Number]"] =
          x[g] =
          x["[object RegExp]"] =
          x["[object Set]"] =
          x["[object String]"] =
          x["[object WeakMap]"] =
            !1);
      var w = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
        _ = "object" == typeof self && self && self.Object === Object && self,
        k = w || _ || Function("return this")(),
        S = t && !t.nodeType && t,
        P = S && e && !e.nodeType && e,
        j = P && P.exports === S,
        E = j && w.process,
        A = (function () {
          try {
            var e = P && P.require && P.require("util").types;
            if (e) return e;
            return E && E.binding && E.binding("util");
          } catch (e) {}
        })(),
        C = A && A.isTypedArray,
        M = Array.prototype,
        z = Function.prototype,
        R = Object.prototype,
        I = k["__core-js_shared__"],
        T = z.toString,
        O = R.hasOwnProperty,
        B = (c = /[^.]+$/.exec((I && I.keys && I.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + c
          : "",
        L = R.toString,
        D = T.call(Object),
        N = RegExp(
          "^" +
            T.call(O)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        F = j ? k.Buffer : void 0,
        U = k.Symbol,
        G = k.Uint8Array,
        q = F ? F.allocUnsafe : void 0,
        W =
          ((u = Object.getPrototypeOf),
          (d = Object),
          function (e) {
            return u(d(e));
          }),
        H = Object.create,
        $ = R.propertyIsEnumerable,
        X = M.splice,
        V = U ? U.toStringTag : void 0,
        Y = (function () {
          try {
            var e = eh(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (e) {}
        })(),
        Z = F ? F.isBuffer : void 0,
        Q = Math.max,
        K = Date.now,
        J = eh(k, "Map"),
        ee = eh(Object, "create"),
        et = (function () {
          function e() {}
          return function (t) {
            if (!eP(t)) return {};
            if (H) return H(t);
            e.prototype = t;
            var n = new e();
            return (e.prototype = void 0), n;
          };
        })();
      function en(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function er(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function ei(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function eo(e) {
        var t = (this.__data__ = new er(e));
        this.size = t.size;
      }
      function ea(e, t, n) {
        ((void 0 === n || eb(e[t], n)) && (void 0 !== n || t in e)) ||
          el(e, t, n);
      }
      function es(e, t) {
        for (var n = e.length; n--; ) if (eb(e[n][0], t)) return n;
        return -1;
      }
      function el(e, t, n) {
        "__proto__" == t && Y
          ? Y(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      }
      (en.prototype.clear = function () {
        (this.__data__ = ee ? ee(null) : {}), (this.size = 0);
      }),
        (en.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        }),
        (en.prototype.get = function (e) {
          var t = this.__data__;
          if (ee) {
            var n = t[e];
            return n === p ? void 0 : n;
          }
          return O.call(t, e) ? t[e] : void 0;
        }),
        (en.prototype.has = function (e) {
          var t = this.__data__;
          return ee ? void 0 !== t[e] : O.call(t, e);
        }),
        (en.prototype.set = function (e, t) {
          var n = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = ee && void 0 === t ? p : t),
            this
          );
        }),
        (er.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (er.prototype.delete = function (e) {
          var t = this.__data__,
            n = es(t, e);
          return (
            !(n < 0) &&
            (n == t.length - 1 ? t.pop() : X.call(t, n, 1), --this.size, !0)
          );
        }),
        (er.prototype.get = function (e) {
          var t = this.__data__,
            n = es(t, e);
          return n < 0 ? void 0 : t[n][1];
        }),
        (er.prototype.has = function (e) {
          return es(this.__data__, e) > -1;
        }),
        (er.prototype.set = function (e, t) {
          var n = this.__data__,
            r = es(n, e);
          return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
        }),
        (ei.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new en(),
              map: new (J || er)(),
              string: new en(),
            });
        }),
        (ei.prototype.delete = function (e) {
          var t = ef(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        }),
        (ei.prototype.get = function (e) {
          return ef(this, e).get(e);
        }),
        (ei.prototype.has = function (e) {
          return ef(this, e).has(e);
        }),
        (ei.prototype.set = function (e, t) {
          var n = ef(this, e),
            r = n.size;
          return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
        }),
        (eo.prototype.clear = function () {
          (this.__data__ = new er()), (this.size = 0);
        }),
        (eo.prototype.delete = function (e) {
          var t = this.__data__,
            n = t.delete(e);
          return (this.size = t.size), n;
        }),
        (eo.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        (eo.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (eo.prototype.set = function (e, t) {
          var n = this.__data__;
          if (n instanceof er) {
            var r = n.__data__;
            if (!J || r.length < 199)
              return r.push([e, t]), (this.size = ++n.size), this;
            n = this.__data__ = new ei(r);
          }
          return n.set(e, t), (this.size = n.size), this;
        });
      var ec = function (e, t, n) {
        for (var r = -1, i = Object(e), o = n(e), a = o.length; a--; ) {
          var s = o[++r];
          if (!1 === t(i[s], s, i)) break;
        }
        return e;
      };
      function eu(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : V && V in Object(e)
          ? (function (e) {
              var t = O.call(e, V),
                n = e[V];
              try {
                e[V] = void 0;
                var r = !0;
              } catch (e) {}
              var i = L.call(e);
              return r && (t ? (e[V] = n) : delete e[V]), i;
            })(e)
          : L.call(e);
      }
      function ed(e) {
        return ej(e) && eu(e) == m;
      }
      function ef(e, t) {
        var n,
          r = e.__data__;
        return (
          "string" == (n = typeof t) ||
          "number" == n ||
          "symbol" == n ||
          "boolean" == n
            ? "__proto__" !== t
            : null === t
        )
          ? r["string" == typeof t ? "string" : "hash"]
          : r.map;
      }
      function eh(e, t) {
        var n = null == e ? void 0 : e[t];
        return !(!eP(n) || (B && B in n)) &&
          (ek(n) ? N : b).test(
            (function (e) {
              if (null != e) {
                try {
                  return T.call(e);
                } catch (e) {}
                try {
                  return e + "";
                } catch (e) {}
              }
              return "";
            })(n)
          )
          ? n
          : void 0;
      }
      function ep(e, t) {
        var n = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ("number" == n || ("symbol" != n && y.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      }
      function em(e) {
        var t = e && e.constructor;
        return e === (("function" == typeof t && t.prototype) || R);
      }
      function ev(e, t) {
        if (
          ("constructor" !== t || "function" != typeof e[t]) &&
          "__proto__" != t
        )
          return e[t];
      }
      var eg =
        ((r = Y
          ? function (e, t) {
              return Y(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: function () {
                  return t;
                },
                writable: !0,
              });
            }
          : eM),
        (i = 0),
        (o = 0),
        function () {
          var e = K(),
            t = 16 - (e - o);
          if (((o = e), t > 0)) {
            if (++i >= 800) return arguments[0];
          } else i = 0;
          return r.apply(void 0, arguments);
        });
      function eb(e, t) {
        return e === t || (e != e && t != t);
      }
      var ey = ed(
          (function () {
            return arguments;
          })()
        )
          ? ed
          : function (e) {
              return ej(e) && O.call(e, "callee") && !$.call(e, "callee");
            },
        ex = Array.isArray;
      function ew(e) {
        return null != e && eS(e.length) && !ek(e);
      }
      var e_ =
        Z ||
        function () {
          return !1;
        };
      function ek(e) {
        if (!eP(e)) return !1;
        var t = eu(e);
        return (
          t == v ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      }
      function eS(e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      }
      function eP(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      function ej(e) {
        return null != e && "object" == typeof e;
      }
      var eE = C
        ? function (e) {
            return C(e);
          }
        : function (e) {
            return ej(e) && eS(e.length) && !!x[eu(e)];
          };
      function eA(e) {
        return ew(e)
          ? (function (e, t) {
              var n = ex(e),
                r = !n && ey(e),
                i = !n && !r && e_(e),
                o = !n && !r && !i && eE(e),
                a = n || r || i || o,
                s = a
                  ? (function (e, t) {
                      for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                      return r;
                    })(e.length, String)
                  : [],
                l = s.length;
              for (var c in e)
                (t || O.call(e, c)) &&
                  !(
                    a &&
                    ("length" == c ||
                      (i && ("offset" == c || "parent" == c)) ||
                      (o &&
                        ("buffer" == c ||
                          "byteLength" == c ||
                          "byteOffset" == c)) ||
                      ep(c, l))
                  ) &&
                  s.push(c);
              return s;
            })(e, !0)
          : (function (e) {
              if (!eP(e))
                return (function (e) {
                  var t = [];
                  if (null != e) for (var n in Object(e)) t.push(n);
                  return t;
                })(e);
              var t = em(e),
                n = [];
              for (var r in e)
                ("constructor" == r && (t || !O.call(e, r))) || n.push(r);
              return n;
            })(e);
      }
      var eC =
        ((f = function (e, t, n, r) {
          !(function e(t, n, r, i, o) {
            t !== n &&
              ec(
                n,
                function (a, s) {
                  if ((o || (o = new eo()), eP(a)))
                    (function (e, t, n, r, i, o, a) {
                      var s = ev(e, n),
                        l = ev(t, n),
                        c = a.get(l);
                      if (c) {
                        ea(e, n, c);
                        return;
                      }
                      var u = o ? o(s, l, n + "", e, t, a) : void 0,
                        d = void 0 === u;
                      if (d) {
                        var f,
                          h,
                          p,
                          m = ex(l),
                          v = !m && e_(l),
                          b = !m && !v && eE(l);
                        (u = l),
                          m || v || b
                            ? ex(s)
                              ? (u = s)
                              : ej(s) && ew(s)
                              ? (u = (function (e, t) {
                                  var n = -1,
                                    r = e.length;
                                  for (t || (t = Array(r)); ++n < r; )
                                    t[n] = e[n];
                                  return t;
                                })(s))
                              : v
                              ? ((d = !1),
                                (u = (function (e, t) {
                                  if (t) return e.slice();
                                  var n = e.length,
                                    r = q ? q(n) : new e.constructor(n);
                                  return e.copy(r), r;
                                })(l, !0)))
                              : b
                              ? ((d = !1),
                                new G(
                                  (h = new (f = l.buffer).constructor(
                                    f.byteLength
                                  ))
                                ).set(new G(f)),
                                (p = h),
                                (u = new l.constructor(
                                  p,
                                  l.byteOffset,
                                  l.length
                                )))
                              : (u = [])
                            : (function (e) {
                                if (!ej(e) || eu(e) != g) return !1;
                                var t = W(e);
                                if (null === t) return !0;
                                var n =
                                  O.call(t, "constructor") && t.constructor;
                                return (
                                  "function" == typeof n &&
                                  n instanceof n &&
                                  T.call(n) == D
                                );
                              })(l) || ey(l)
                            ? ((u = s),
                              ey(s)
                                ? (u = (function (e, t, n, r) {
                                    var i = !n;
                                    n || (n = {});
                                    for (var o = -1, a = t.length; ++o < a; ) {
                                      var s = t[o],
                                        l = void 0;
                                      void 0 === l && (l = e[s]),
                                        i
                                          ? el(n, s, l)
                                          : (function (e, t, n) {
                                              var r = e[t];
                                              (O.call(e, t) &&
                                                eb(r, n) &&
                                                (void 0 !== n || t in e)) ||
                                                el(e, t, n);
                                            })(n, s, l);
                                    }
                                    return n;
                                  })(s, eA(s)))
                                : (!eP(s) || ek(s)) &&
                                  (u =
                                    "function" != typeof l.constructor || em(l)
                                      ? {}
                                      : et(W(l))))
                            : (d = !1);
                      }
                      d && (a.set(l, u), i(u, l, r, o, a), a.delete(l)),
                        ea(e, n, u);
                    })(t, n, s, r, e, i, o);
                  else {
                    var l = i ? i(ev(t, s), a, s + "", t, n, o) : void 0;
                    void 0 === l && (l = a), ea(t, s, l);
                  }
                },
                eA
              );
          })(e, t, n, r);
        }),
        eg(
          ((a = h =
            function (e, t) {
              var n = -1,
                r = t.length,
                i = r > 1 ? t[r - 1] : void 0,
                o = r > 2 ? t[2] : void 0;
              for (
                i = f.length > 3 && "function" == typeof i ? (r--, i) : void 0,
                  o &&
                    (function (e, t, n) {
                      if (!eP(n)) return !1;
                      var r = typeof t;
                      return (
                        ("number" == r
                          ? !!(ew(n) && ep(t, n.length))
                          : "string" == r && (t in n)) && eb(n[t], e)
                      );
                    })(t[0], t[1], o) &&
                    ((i = r < 3 ? void 0 : i), (r = 1)),
                  e = Object(e);
                ++n < r;

              ) {
                var a = t[n];
                a && f(e, a, n, i);
              }
              return e;
            }),
          (s = void 0),
          (l = eM),
          (s = Q(void 0 === s ? a.length - 1 : s, 0)),
          function () {
            for (
              var e = arguments, t = -1, n = Q(e.length - s, 0), r = Array(n);
              ++t < n;

            )
              r[t] = e[s + t];
            t = -1;
            for (var i = Array(s + 1); ++t < s; ) i[t] = e[t];
            return (
              (i[s] = l(r)),
              (function (e, t, n) {
                switch (n.length) {
                  case 0:
                    return e.call(t);
                  case 1:
                    return e.call(t, n[0]);
                  case 2:
                    return e.call(t, n[0], n[1]);
                  case 3:
                    return e.call(t, n[0], n[1], n[2]);
                }
                return e.apply(t, n);
              })(a, this, i)
            );
          }),
          h + ""
        ));
      function eM(e) {
        return e;
      }
      e.exports = eC;
    },
    81403: function (e, t, n) {
      var r = n(20563),
        i = n(98749);
      e.exports = function (e) {
        return i(r(e));
      };
    },
    98959: function (e, t, n) {
      var r = n(98749),
        i = n(41337);
      e.exports = function (e) {
        return r(i(e));
      };
    },
    98749: function (e, t, n) {
      var r = n(21741);
      e.exports = function (e, t) {
        var n = -1,
          i = e.length,
          o = i - 1;
        for (t = void 0 === t ? i : t; ++n < t; ) {
          var a = r(n, o),
            s = e[a];
          (e[a] = e[n]), (e[n] = s);
        }
        return (e.length = t), e;
      };
    },
    83265: function (e, t, n) {
      var r = n(89141)(function (e, t, n) {
        return e + (n ? " " : "") + t.toLowerCase();
      });
      e.exports = r;
    },
    74714: function (e, t, n) {
      var r = n(81403),
        i = n(98959),
        o = n(81628);
      e.exports = function (e) {
        return (o(e) ? r : i)(e);
      };
    },
    41918: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(83112),
        i = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
      let o = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        a = (e, t) => {
          let n = (0, r.forwardRef)((n, a) => {
            let {
              color: s = "currentColor",
              size: l = 24,
              strokeWidth: c = 2,
              absoluteStrokeWidth: u,
              children: d,
              ...f
            } = n;
            return (0, r.createElement)(
              "svg",
              {
                ref: a,
                ...i,
                width: l,
                height: l,
                stroke: s,
                strokeWidth: u ? (24 * Number(c)) / Number(l) : c,
                className: "lucide lucide-".concat(o(e)),
                ...f,
              },
              [
                ...t.map((e) => {
                  let [t, n] = e;
                  return (0, r.createElement)(t, n);
                }),
                ...((Array.isArray(d) ? d : [d]) || []),
              ]
            );
          });
          return (n.displayName = "".concat(e)), n;
        };
    },
    92493: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      let r = (0, n(41918).Z)("Plus", [
        ["line", { x1: "12", x2: "12", y1: "5", y2: "19", key: "pwfkuu" }],
        ["line", { x1: "5", x2: "19", y1: "12", y2: "12", key: "13b5wn" }],
      ]);
    },
    44800: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return i.a;
        },
      });
      var r = n(89259),
        i = n.n(r);
    },
    24728: function (e, t, n) {
      "use strict";
      n(37879);
    },
    49058: function (e, t) {
      "use strict";
      function n() {
        return null;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    19945: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "detectDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    23540: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "removeLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(79419),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    96481: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          createRouteLoader: function () {
            return m;
          },
          getClientBuildManifest: function () {
            return h;
          },
          isAssetError: function () {
            return c;
          },
          markAssetError: function () {
            return l;
          },
        }),
        n(62635),
        n(87313);
      let r = n(35507),
        i = n(20986),
        o = n(10272);
      function a(e, t, n) {
        let r,
          i = t.get(e);
        if (i) return "future" in i ? i.future : Promise.resolve(i);
        let o = new Promise((e) => {
          r = e;
        });
        return (
          t.set(e, (i = { resolve: r, future: o })),
          n
            ? n()
                .then((e) => (r(e), e))
                .catch((n) => {
                  throw (t.delete(e), n);
                })
            : o
        );
      }
      let s = Symbol("ASSET_LOAD_ERROR");
      function l(e) {
        return Object.defineProperty(e, s, {});
      }
      function c(e) {
        return e && s in e;
      }
      let u = (function (e) {
          try {
            return (
              (e = document.createElement("link")),
              (!!window.MSInputMethodContext && !!document.documentMode) ||
                e.relList.supports("prefetch")
            );
          } catch (e) {
            return !1;
          }
        })(),
        d = () => (0, o.getDeploymentIdQueryOrEmptyString)();
      function f(e, t, n) {
        return new Promise((r, o) => {
          let a = !1;
          e
            .then((e) => {
              (a = !0), r(e);
            })
            .catch(o),
            (0, i.requestIdleCallback)(() =>
              setTimeout(() => {
                a || o(n);
              }, t)
            );
        });
      }
      function h() {
        return self.__BUILD_MANIFEST
          ? Promise.resolve(self.__BUILD_MANIFEST)
          : f(
              new Promise((e) => {
                let t = self.__BUILD_MANIFEST_CB;
                self.__BUILD_MANIFEST_CB = () => {
                  e(self.__BUILD_MANIFEST), t && t();
                };
              }),
              3800,
              l(Error("Failed to load client build manifest"))
            );
      }
      function p(e, t) {
        return h().then((n) => {
          if (!(t in n)) throw l(Error("Failed to lookup route: " + t));
          let i = n[t].map((t) => e + "/_next/" + encodeURI(t));
          return {
            scripts: i
              .filter((e) => e.endsWith(".js"))
              .map((e) => (0, r.__unsafeCreateTrustedScriptURL)(e) + d()),
            css: i.filter((e) => e.endsWith(".css")).map((e) => e + d()),
          };
        });
      }
      function m(e) {
        let t = new Map(),
          n = new Map(),
          r = new Map(),
          o = new Map();
        function s(e) {
          {
            var t;
            let r = n.get(e.toString());
            return (
              r ||
              (document.querySelector('script[src^="' + e + '"]')
                ? Promise.resolve()
                : (n.set(
                    e.toString(),
                    (r = new Promise((n, r) => {
                      ((t = document.createElement("script")).onload = n),
                        (t.onerror = () =>
                          r(l(Error("Failed to load script: " + e)))),
                        (t.crossOrigin = void 0),
                        (t.src = e),
                        document.body.appendChild(t);
                    }))
                  ),
                  r))
            );
          }
        }
        function c(e) {
          let t = r.get(e);
          return (
            t ||
              r.set(
                e,
                (t = fetch(e, { credentials: "same-origin" })
                  .then((t) => {
                    if (!t.ok) throw Error("Failed to load stylesheet: " + e);
                    return t.text().then((t) => ({ href: e, content: t }));
                  })
                  .catch((e) => {
                    throw l(e);
                  }))
              ),
            t
          );
        }
        return {
          whenEntrypoint: (e) => a(e, t),
          onEntrypoint(e, n) {
            (n
              ? Promise.resolve()
                  .then(() => n())
                  .then(
                    (e) => ({ component: (e && e.default) || e, exports: e }),
                    (e) => ({ error: e })
                  )
              : Promise.resolve(void 0)
            ).then((n) => {
              let r = t.get(e);
              r && "resolve" in r
                ? n && (t.set(e, n), r.resolve(n))
                : (n ? t.set(e, n) : t.delete(e), o.delete(e));
            });
          },
          loadRoute(n, r) {
            return a(n, o, () => {
              let i;
              return f(
                p(e, n)
                  .then((e) => {
                    let { scripts: r, css: i } = e;
                    return Promise.all([
                      t.has(n) ? [] : Promise.all(r.map(s)),
                      Promise.all(i.map(c)),
                    ]);
                  })
                  .then((e) =>
                    this.whenEntrypoint(n).then((t) => ({
                      entrypoint: t,
                      styles: e[1],
                    }))
                  ),
                3800,
                l(Error("Route did not complete loading: " + n))
              )
                .then((e) => {
                  let { entrypoint: t, styles: n } = e,
                    r = Object.assign({ styles: n }, t);
                  return "error" in t ? t : r;
                })
                .catch((e) => {
                  if (r) throw e;
                  return { error: e };
                })
                .finally(() => (null == i ? void 0 : i()));
            });
          },
          prefetch(t) {
            let n;
            return (n = navigator.connection) &&
              (n.saveData || /2g/.test(n.effectiveType))
              ? Promise.resolve()
              : p(e, t)
                  .then((e) =>
                    Promise.all(
                      u
                        ? e.scripts.map((e) => {
                            var t, n, r;
                            return (
                              (t = e.toString()),
                              (n = "script"),
                              new Promise((e, i) => {
                                if (
                                  document.querySelector(
                                    '\n      link[rel="prefetch"][href^="' +
                                      t +
                                      '"],\n      link[rel="preload"][href^="' +
                                      t +
                                      '"],\n      script[src^="' +
                                      t +
                                      '"]'
                                  )
                                )
                                  return e();
                                (r = document.createElement("link")),
                                  n && (r.as = n),
                                  (r.rel = "prefetch"),
                                  (r.crossOrigin = void 0),
                                  (r.onload = e),
                                  (r.onerror = () =>
                                    i(l(Error("Failed to prefetch: " + t)))),
                                  (r.href = t),
                                  document.head.appendChild(r);
                              })
                            );
                          })
                        : []
                    )
                  )
                  .then(() => {
                    (0, i.requestIdleCallback)(() =>
                      this.loadRoute(t, !0).catch(() => {})
                    );
                  })
                  .catch(() => {});
          },
        };
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    37879: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          Router: function () {
            return o.default;
          },
          createRouter: function () {
            return m;
          },
          default: function () {
            return h;
          },
          makePublicRouterInstance: function () {
            return v;
          },
          useRouter: function () {
            return p;
          },
          withRouter: function () {
            return l.default;
          },
        });
      let r = n(62635),
        i = r._(n(83112)),
        o = r._(n(33985)),
        a = n(38571),
        s = r._(n(4508)),
        l = r._(n(19511)),
        c = {
          router: null,
          readyCallbacks: [],
          ready(e) {
            if (this.router) return e();
            "undefined" != typeof window && this.readyCallbacks.push(e);
          },
        },
        u = [
          "pathname",
          "route",
          "query",
          "asPath",
          "components",
          "isFallback",
          "basePath",
          "locale",
          "locales",
          "defaultLocale",
          "isReady",
          "isPreview",
          "isLocaleDomain",
          "domainLocales",
        ],
        d = ["push", "replace", "reload", "back", "prefetch", "beforePopState"];
      function f() {
        if (!c.router)
          throw Error(
            'No router instance found.\nYou should only use "next/router" on the client side of your app.\n'
          );
        return c.router;
      }
      Object.defineProperty(c, "events", { get: () => o.default.events }),
        u.forEach((e) => {
          Object.defineProperty(c, e, { get: () => f()[e] });
        }),
        d.forEach((e) => {
          c[e] = function () {
            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return f()[e](...n);
          };
        }),
        [
          "routeChangeStart",
          "beforeHistoryChange",
          "routeChangeComplete",
          "routeChangeError",
          "hashChangeStart",
          "hashChangeComplete",
        ].forEach((e) => {
          c.ready(() => {
            o.default.events.on(e, function () {
              for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
                n[r] = arguments[r];
              let i = "on" + e.charAt(0).toUpperCase() + e.substring(1);
              if (c[i])
                try {
                  c[i](...n);
                } catch (e) {
                  console.error("Error when running the Router event: " + i),
                    console.error(
                      (0, s.default)(e) ? e.message + "\n" + e.stack : e + ""
                    );
                }
            });
          });
        });
      let h = c;
      function p() {
        let e = i.default.useContext(a.RouterContext);
        if (!e)
          throw Error(
            "NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted"
          );
        return e;
      }
      function m() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (
          (c.router = new o.default(...t)),
          c.readyCallbacks.forEach((e) => e()),
          (c.readyCallbacks = []),
          c.router
        );
      }
      function v(e) {
        let t = {};
        for (let n of u) {
          if ("object" == typeof e[n]) {
            t[n] = Object.assign(Array.isArray(e[n]) ? [] : {}, e[n]);
            continue;
          }
          t[n] = e[n];
        }
        return (
          (t.events = o.default.events),
          d.forEach((n) => {
            t[n] = function () {
              for (var t = arguments.length, r = Array(t), i = 0; i < t; i++)
                r[i] = arguments[i];
              return e[n](...r);
            };
          }),
          t
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    35507: function (e, t) {
      "use strict";
      let n;
      function r(e) {
        var t;
        return (
          (null ==
          (t = (function () {
            if (void 0 === n && "undefined" != typeof window) {
              var e;
              n =
                (null == (e = window.trustedTypes)
                  ? void 0
                  : e.createPolicy("nextjs", {
                      createHTML: (e) => e,
                      createScript: (e) => e,
                      createScriptURL: (e) => e,
                    })) || null;
            }
            return n;
          })())
            ? void 0
            : t.createScriptURL(e)) || e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "__unsafeCreateTrustedScriptURL", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    19511: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }),
        n(62635);
      let r = n(20209);
      n(83112);
      let i = n(37879);
      function o(e) {
        function t(t) {
          return (0, r.jsx)(e, { router: (0, i.useRouter)(), ...t });
        }
        return (
          (t.getInitialProps = e.getInitialProps),
          (t.origGetInitialProps = e.origGetInitialProps),
          t
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    15474: function (e, t) {
      "use strict";
      function n(e) {
        return "#" === e || !!(null == e ? void 0 : e.startsWith("/api/"));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isAPIRoute", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    4508: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return i;
          },
          getProperError: function () {
            return o;
          },
        });
      let r = n(11788);
      function i(e) {
        return (
          "object" == typeof e && null !== e && "name" in e && "message" in e
        );
      }
      function o(e) {
        return i(e)
          ? e
          : Error((0, r.isPlainObject)(e) ? JSON.stringify(e) : e + "");
      }
    },
    7590: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BloomFilter", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      class n {
        static from(e, t) {
          void 0 === t && (t = 1e-4);
          let r = new n(e.length, t);
          for (let t of e) r.add(t);
          return r;
        }
        export() {
          return {
            numItems: this.numItems,
            errorRate: this.errorRate,
            numBits: this.numBits,
            numHashes: this.numHashes,
            bitArray: this.bitArray,
          };
        }
        import(e) {
          (this.numItems = e.numItems),
            (this.errorRate = e.errorRate),
            (this.numBits = e.numBits),
            (this.numHashes = e.numHashes),
            (this.bitArray = e.bitArray);
        }
        add(e) {
          this.getHashValues(e).forEach((e) => {
            this.bitArray[e] = 1;
          });
        }
        contains(e) {
          return this.getHashValues(e).every((e) => this.bitArray[e]);
        }
        getHashValues(e) {
          let t = [];
          for (let n = 1; n <= this.numHashes; n++) {
            let r =
              (function (e) {
                let t = 0;
                for (let n = 0; n < e.length; n++)
                  (t = Math.imul(t ^ e.charCodeAt(n), 1540483477)),
                    (t ^= t >>> 13),
                    (t = Math.imul(t, 1540483477));
                return t >>> 0;
              })("" + e + n) % this.numBits;
            t.push(r);
          }
          return t;
        }
        constructor(e, t = 1e-4) {
          (this.numItems = e),
            (this.errorRate = t),
            (this.numBits = Math.ceil(
              -(e * Math.log(t)) / (Math.log(2) * Math.log(2))
            )),
            (this.numHashes = Math.ceil((this.numBits / e) * Math.log(2))),
            (this.bitArray = Array(this.numBits).fill(0));
        }
      }
    },
    58839: function (e, t) {
      "use strict";
      function n(e, t) {
        let n;
        let r = e.split("/");
        return (
          (t || []).some(
            (t) =>
              !!r[1] &&
              r[1].toLowerCase() === t.toLowerCase() &&
              ((n = t), r.splice(1, 1), (e = r.join("/") || "/"), !0)
          ),
          { pathname: e, detectedLocale: n }
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeLocalePath", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    89259: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return s;
          },
        });
      let r = n(62635),
        i = n(67411),
        o = n(97269),
        a = r._(n(43620));
      function s(e) {
        let { props: t } = (0, i.getImgProps)(e, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let l = o.Image;
    },
    11788: function (e, t) {
      "use strict";
      function n(e) {
        return Object.prototype.toString.call(e);
      }
      function r(e) {
        if ("[object Object]" !== n(e)) return !1;
        let t = Object.getPrototypeOf(e);
        return null === t || t.hasOwnProperty("isPrototypeOf");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getObjectClassLabel: function () {
            return n;
          },
          isPlainObject: function () {
            return r;
          },
        });
    },
    13014: function (e, t) {
      "use strict";
      function n() {
        let e = Object.create(null);
        return {
          on(t, n) {
            (e[t] || (e[t] = [])).push(n);
          },
          off(t, n) {
            e[t] && e[t].splice(e[t].indexOf(n) >>> 0, 1);
          },
          emit(t) {
            for (
              var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
              i < n;
              i++
            )
              r[i - 1] = arguments[i];
            (e[t] || []).slice().map((e) => {
              e(...r);
            });
          },
        };
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    30314: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "denormalizePagePath", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(2437),
        i = n(95012);
      function o(e) {
        let t = (0, i.normalizePathSep)(e);
        return t.startsWith("/index/") && !(0, r.isDynamicRoute)(t)
          ? t.slice(6)
          : "/index" !== t
          ? t
          : "/";
      }
    },
    95012: function (e, t) {
      "use strict";
      function n(e) {
        return e.replace(/\\/g, "/");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizePathSep", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    33985: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          createKey: function () {
            return q;
          },
          default: function () {
            return $;
          },
          matchesMiddleware: function () {
            return O;
          },
        });
      let r = n(62635),
        i = n(38120),
        o = n(16681),
        a = n(96481),
        s = n(53093),
        l = i._(n(4508)),
        c = n(30314),
        u = n(58839),
        d = r._(n(13014)),
        f = n(54623),
        h = n(3682),
        p = n(52499);
      n(96416);
      let m = n(27927),
        v = n(61106),
        g = n(50057);
      n(19945);
      let b = n(79419),
        y = n(92228),
        x = n(23540),
        w = n(37727),
        _ = n(95133),
        k = n(59525),
        S = n(9874),
        P = n(15474),
        j = n(50984),
        E = n(79932),
        A = n(4417),
        C = n(47321),
        M = n(45098),
        z = n(58551),
        R = n(78100),
        I = n(71092);
      function T() {
        return Object.assign(Error("Route Cancelled"), { cancelled: !0 });
      }
      async function O(e) {
        let t = await Promise.resolve(e.router.pageLoader.getMiddleware());
        if (!t) return !1;
        let { pathname: n } = (0, b.parsePath)(e.asPath),
          r = (0, k.hasBasePath)(n) ? (0, w.removeBasePath)(n) : n,
          i = (0, _.addBasePath)((0, y.addLocale)(r, e.locale));
        return t.some((e) => new RegExp(e.regexp).test(i));
      }
      function B(e) {
        let t = (0, f.getLocationOrigin)();
        return e.startsWith(t) ? e.substring(t.length) : e;
      }
      function L(e, t, n) {
        let [r, i] = (0, S.resolveHref)(e, t, !0),
          o = (0, f.getLocationOrigin)(),
          a = r.startsWith(o),
          s = i && i.startsWith(o);
        (r = B(r)), (i = i ? B(i) : i);
        let l = a ? r : (0, _.addBasePath)(r),
          c = n ? B((0, S.resolveHref)(e, n)) : i || r;
        return { url: l, as: s ? c : (0, _.addBasePath)(c) };
      }
      function D(e, t) {
        let n = (0, o.removeTrailingSlash)((0, c.denormalizePagePath)(e));
        return "/404" === n || "/_error" === n
          ? e
          : (t.includes(n) ||
              t.some((t) => {
                if (
                  (0, h.isDynamicRoute)(t) &&
                  (0, v.getRouteRegex)(t).re.test(n)
                )
                  return (e = t), !0;
              }),
            (0, o.removeTrailingSlash)(e));
      }
      async function N(e) {
        if (!(await O(e)) || !e.fetchData) return null;
        let t = await e.fetchData(),
          n = await (function (e, t, n) {
            let r = {
                basePath: n.router.basePath,
                i18n: { locales: n.router.locales },
                trailingSlash: !1,
              },
              i = t.headers.get("x-nextjs-rewrite"),
              s = i || t.headers.get("x-nextjs-matched-path"),
              l = t.headers.get("x-matched-path");
            if (
              (!l ||
                s ||
                l.includes("__next_data_catchall") ||
                l.includes("/_error") ||
                l.includes("/404") ||
                (s = l),
              s)
            ) {
              if (s.startsWith("/")) {
                let t = (0, p.parseRelativeUrl)(s),
                  l = (0, j.getNextPathnameInfo)(t.pathname, {
                    nextConfig: r,
                    parseData: !0,
                  }),
                  c = (0, o.removeTrailingSlash)(l.pathname);
                return Promise.all([
                  n.router.pageLoader.getPageList(),
                  (0, a.getClientBuildManifest)(),
                ]).then((o) => {
                  let [a, { __rewrites: s }] = o,
                    d = (0, y.addLocale)(l.pathname, l.locale);
                  if (
                    (0, h.isDynamicRoute)(d) ||
                    (!i &&
                      a.includes(
                        (0, u.normalizeLocalePath)(
                          (0, w.removeBasePath)(d),
                          n.router.locales
                        ).pathname
                      ))
                  ) {
                    let n = (0, j.getNextPathnameInfo)(
                      (0, p.parseRelativeUrl)(e).pathname,
                      { nextConfig: r, parseData: !0 }
                    );
                    (d = (0, _.addBasePath)(n.pathname)), (t.pathname = d);
                  }
                  if (!a.includes(c)) {
                    let e = D(c, a);
                    e !== c && (c = e);
                  }
                  let f = a.includes(c)
                    ? c
                    : D(
                        (0, u.normalizeLocalePath)(
                          (0, w.removeBasePath)(t.pathname),
                          n.router.locales
                        ).pathname,
                        a
                      );
                  if ((0, h.isDynamicRoute)(f)) {
                    let e = (0, m.getRouteMatcher)((0, v.getRouteRegex)(f))(d);
                    Object.assign(t.query, e || {});
                  }
                  return { type: "rewrite", parsedAs: t, resolvedHref: f };
                });
              }
              let t = (0, b.parsePath)(e);
              return Promise.resolve({
                type: "redirect-external",
                destination:
                  "" +
                  (0, E.formatNextPathnameInfo)({
                    ...(0, j.getNextPathnameInfo)(t.pathname, {
                      nextConfig: r,
                      parseData: !0,
                    }),
                    defaultLocale: n.router.defaultLocale,
                    buildId: "",
                  }) +
                  t.query +
                  t.hash,
              });
            }
            let c = t.headers.get("x-nextjs-redirect");
            if (c) {
              if (c.startsWith("/")) {
                let e = (0, b.parsePath)(c),
                  t = (0, E.formatNextPathnameInfo)({
                    ...(0, j.getNextPathnameInfo)(e.pathname, {
                      nextConfig: r,
                      parseData: !0,
                    }),
                    defaultLocale: n.router.defaultLocale,
                    buildId: "",
                  });
                return Promise.resolve({
                  type: "redirect-internal",
                  newAs: "" + t + e.query + e.hash,
                  newUrl: "" + t + e.query + e.hash,
                });
              }
              return Promise.resolve({
                type: "redirect-external",
                destination: c,
              });
            }
            return Promise.resolve({ type: "next" });
          })(t.dataHref, t.response, e);
        return {
          dataHref: t.dataHref,
          json: t.json,
          response: t.response,
          text: t.text,
          cacheKey: t.cacheKey,
          effect: n,
        };
      }
      let F = Symbol("SSG_DATA_NOT_FOUND");
      function U(e) {
        try {
          return JSON.parse(e);
        } catch (e) {
          return null;
        }
      }
      function G(e) {
        let {
            dataHref: t,
            inflightCache: n,
            isPrefetch: r,
            hasMiddleware: i,
            isServerRender: o,
            parseJSON: s,
            persistCache: l,
            isBackground: c,
            unstable_skipClientCache: u,
          } = e,
          { href: d } = new URL(t, window.location.href),
          f = (e) => {
            var c;
            return (function e(t, n, r) {
              return fetch(t, {
                credentials: "same-origin",
                method: r.method || "GET",
                headers: Object.assign({}, r.headers, { "x-nextjs-data": "1" }),
              }).then((i) =>
                !i.ok && n > 1 && i.status >= 500 ? e(t, n - 1, r) : i
              );
            })(t, o ? 3 : 1, {
              headers: Object.assign(
                {},
                r ? { purpose: "prefetch" } : {},
                r && i ? { "x-middleware-prefetch": "1" } : {}
              ),
              method: null != (c = null == e ? void 0 : e.method) ? c : "GET",
            })
              .then((n) =>
                n.ok && (null == e ? void 0 : e.method) === "HEAD"
                  ? {
                      dataHref: t,
                      response: n,
                      text: "",
                      json: {},
                      cacheKey: d,
                    }
                  : n.text().then((e) => {
                      if (!n.ok) {
                        if (i && [301, 302, 307, 308].includes(n.status))
                          return {
                            dataHref: t,
                            response: n,
                            text: e,
                            json: {},
                            cacheKey: d,
                          };
                        if (404 === n.status) {
                          var r;
                          if (null == (r = U(e)) ? void 0 : r.notFound)
                            return {
                              dataHref: t,
                              json: { notFound: F },
                              response: n,
                              text: e,
                              cacheKey: d,
                            };
                        }
                        let s = Error("Failed to load static props");
                        throw (o || (0, a.markAssetError)(s), s);
                      }
                      return {
                        dataHref: t,
                        json: s ? U(e) : null,
                        response: n,
                        text: e,
                        cacheKey: d,
                      };
                    })
              )
              .then(
                (e) => (
                  (l &&
                    "no-cache" !==
                      e.response.headers.get("x-middleware-cache")) ||
                    delete n[d],
                  e
                )
              )
              .catch((e) => {
                throw (
                  (u || delete n[d],
                  ("Failed to fetch" === e.message ||
                    "NetworkError when attempting to fetch resource." ===
                      e.message ||
                    "Load failed" === e.message) &&
                    (0, a.markAssetError)(e),
                  e)
                );
              });
          };
        return u && l
          ? f({}).then((e) => ((n[d] = Promise.resolve(e)), e))
          : void 0 !== n[d]
          ? n[d]
          : (n[d] = f(c ? { method: "HEAD" } : {}));
      }
      function q() {
        return Math.random().toString(36).slice(2, 10);
      }
      function W(e) {
        let { url: t, router: n } = e;
        if (t === (0, _.addBasePath)((0, y.addLocale)(n.asPath, n.locale)))
          throw Error(
            "Invariant: attempted to hard navigate to the same URL " +
              t +
              " " +
              location.href
          );
        window.location.href = t;
      }
      let H = (e) => {
        let { route: t, router: n } = e,
          r = !1,
          i = (n.clc = () => {
            r = !0;
          });
        return () => {
          if (r) {
            let e = Error('Abort fetching component for route: "' + t + '"');
            throw ((e.cancelled = !0), e);
          }
          i === n.clc && (n.clc = null);
        };
      };
      class $ {
        reload() {
          window.location.reload();
        }
        back() {
          window.history.back();
        }
        forward() {
          window.history.forward();
        }
        push(e, t, n) {
          return (
            void 0 === n && (n = {}),
            ({ url: e, as: t } = L(this, e, t)),
            this.change("pushState", e, t, n)
          );
        }
        replace(e, t, n) {
          return (
            void 0 === n && (n = {}),
            ({ url: e, as: t } = L(this, e, t)),
            this.change("replaceState", e, t, n)
          );
        }
        async _bfl(e, t, n, r) {
          {
            let l = !1,
              c = !1;
            for (let u of [e, t])
              if (u) {
                let t = (0, o.removeTrailingSlash)(
                    new URL(u, "http://n").pathname
                  ),
                  d = (0, _.addBasePath)((0, y.addLocale)(t, n || this.locale));
                if (
                  t !==
                  (0, o.removeTrailingSlash)(
                    new URL(this.asPath, "http://n").pathname
                  )
                ) {
                  var i, a, s;
                  for (let e of ((l =
                    l ||
                    !!(null == (i = this._bfl_s) ? void 0 : i.contains(t)) ||
                    !!(null == (a = this._bfl_s) ? void 0 : a.contains(d))),
                  [t, d])) {
                    let t = e.split("/");
                    for (let e = 0; !c && e < t.length + 1; e++) {
                      let n = t.slice(0, e).join("/");
                      if (
                        n &&
                        (null == (s = this._bfl_d) ? void 0 : s.contains(n))
                      ) {
                        c = !0;
                        break;
                      }
                    }
                  }
                  if (l || c) {
                    if (r) return !0;
                    return (
                      W({
                        url: (0, _.addBasePath)(
                          (0, y.addLocale)(
                            e,
                            n || this.locale,
                            this.defaultLocale
                          )
                        ),
                        router: this,
                      }),
                      new Promise(() => {})
                    );
                  }
                }
              }
          }
          return !1;
        }
        async change(e, t, n, r, i) {
          var c, u, d, S, P, j, E, M, I;
          let B, N;
          if (!(0, C.isLocalURL)(t)) return W({ url: t, router: this }), !1;
          let U = 1 === r._h;
          U || r.shallow || (await this._bfl(n, void 0, r.locale));
          let G =
              U ||
              r._shouldResolveHref ||
              (0, b.parsePath)(t).pathname === (0, b.parsePath)(n).pathname,
            q = { ...this.state },
            H = !0 !== this.isReady;
          this.isReady = !0;
          let X = this.isSsr;
          if ((U || (this.isSsr = !1), U && this.clc)) return !1;
          let V = q.locale;
          f.ST && performance.mark("routeChange");
          let { shallow: Y = !1, scroll: Z = !0 } = r,
            Q = { shallow: Y };
          this._inFlightRoute &&
            this.clc &&
            (X ||
              $.events.emit("routeChangeError", T(), this._inFlightRoute, Q),
            this.clc(),
            (this.clc = null)),
            (n = (0, _.addBasePath)(
              (0, y.addLocale)(
                (0, k.hasBasePath)(n) ? (0, w.removeBasePath)(n) : n,
                r.locale,
                this.defaultLocale
              )
            ));
          let K = (0, x.removeLocale)(
            (0, k.hasBasePath)(n) ? (0, w.removeBasePath)(n) : n,
            q.locale
          );
          this._inFlightRoute = n;
          let J = V !== q.locale;
          if (!U && this.onlyAHashChange(K) && !J) {
            (q.asPath = K),
              $.events.emit("hashChangeStart", n, Q),
              this.changeState(e, t, n, { ...r, scroll: !1 }),
              Z && this.scrollToHash(K);
            try {
              await this.set(q, this.components[q.route], null);
            } catch (e) {
              throw (
                ((0, l.default)(e) &&
                  e.cancelled &&
                  $.events.emit("routeChangeError", e, K, Q),
                e)
              );
            }
            return $.events.emit("hashChangeComplete", n, Q), !0;
          }
          let ee = (0, p.parseRelativeUrl)(t),
            { pathname: et, query: en } = ee;
          try {
            [B, { __rewrites: N }] = await Promise.all([
              this.pageLoader.getPageList(),
              (0, a.getClientBuildManifest)(),
              this.pageLoader.getMiddleware(),
            ]);
          } catch (e) {
            return W({ url: n, router: this }), !1;
          }
          this.urlIsNew(K) || J || (e = "replaceState");
          let er = n;
          et = et ? (0, o.removeTrailingSlash)((0, w.removeBasePath)(et)) : et;
          let ei = (0, o.removeTrailingSlash)(et),
            eo = n.startsWith("/") && (0, p.parseRelativeUrl)(n).pathname;
          if (null == (c = this.components[et]) ? void 0 : c.__appRouter)
            return W({ url: n, router: this }), new Promise(() => {});
          let ea = !!(
              eo &&
              ei !== eo &&
              (!(0, h.isDynamicRoute)(ei) ||
                !(0, m.getRouteMatcher)((0, v.getRouteRegex)(ei))(eo))
            ),
            es =
              !r.shallow &&
              (await O({ asPath: n, locale: q.locale, router: this }));
          if (
            (U && es && (G = !1),
            G &&
              "/_error" !== et &&
              ((r._shouldResolveHref = !0),
              (ee.pathname = D(et, B)),
              ee.pathname === et ||
                ((et = ee.pathname),
                (ee.pathname = (0, _.addBasePath)(et)),
                es || (t = (0, g.formatWithValidation)(ee)))),
            !(0, C.isLocalURL)(n))
          )
            return W({ url: n, router: this }), !1;
          (er = (0, x.removeLocale)((0, w.removeBasePath)(er), q.locale)),
            (ei = (0, o.removeTrailingSlash)(et));
          let el = !1;
          if ((0, h.isDynamicRoute)(ei)) {
            let e = (0, p.parseRelativeUrl)(er),
              r = e.pathname,
              i = (0, v.getRouteRegex)(ei);
            el = (0, m.getRouteMatcher)(i)(r);
            let o = ei === r,
              a = o ? (0, R.interpolateAs)(ei, r, en) : {};
            if (el && (!o || a.result))
              o
                ? (n = (0, g.formatWithValidation)(
                    Object.assign({}, e, {
                      pathname: a.result,
                      query: (0, z.omit)(en, a.params),
                    })
                  ))
                : Object.assign(en, el);
            else {
              let e = Object.keys(i.groups).filter(
                (e) => !en[e] && !i.groups[e].optional
              );
              if (e.length > 0 && !es)
                throw Error(
                  (o
                    ? "The provided `href` (" +
                      t +
                      ") value is missing query values (" +
                      e.join(", ") +
                      ") to be interpolated properly. "
                    : "The provided `as` value (" +
                      r +
                      ") is incompatible with the `href` value (" +
                      ei +
                      "). ") +
                    "Read more: https://nextjs.org/docs/messages/" +
                    (o ? "href-interpolation-failed" : "incompatible-href-as")
                );
            }
          }
          U || $.events.emit("routeChangeStart", n, Q);
          let ec = "/404" === this.pathname || "/_error" === this.pathname;
          try {
            let o = await this.getRouteInfo({
              route: ei,
              pathname: et,
              query: en,
              as: n,
              resolvedAs: er,
              routeProps: Q,
              locale: q.locale,
              isPreview: q.isPreview,
              hasMiddleware: es,
              unstable_skipClientCache: r.unstable_skipClientCache,
              isQueryUpdating: U && !this.isFallback,
              isMiddlewareRewrite: ea,
            });
            if (
              (U ||
                r.shallow ||
                (await this._bfl(
                  n,
                  "resolvedAs" in o ? o.resolvedAs : void 0,
                  q.locale
                )),
              "route" in o && es)
            ) {
              (ei = et = o.route || ei),
                Q.shallow || (en = Object.assign({}, o.query || {}, en));
              let e = (0, k.hasBasePath)(ee.pathname)
                ? (0, w.removeBasePath)(ee.pathname)
                : ee.pathname;
              if (
                (el &&
                  et !== e &&
                  Object.keys(el).forEach((e) => {
                    el && en[e] === el[e] && delete en[e];
                  }),
                (0, h.isDynamicRoute)(et))
              ) {
                let e =
                  !Q.shallow && o.resolvedAs
                    ? o.resolvedAs
                    : (0, _.addBasePath)(
                        (0, y.addLocale)(
                          new URL(n, location.href).pathname,
                          q.locale
                        ),
                        !0
                      );
                (0, k.hasBasePath)(e) && (e = (0, w.removeBasePath)(e));
                let t = (0, v.getRouteRegex)(et),
                  r = (0, m.getRouteMatcher)(t)(
                    new URL(e, location.href).pathname
                  );
                r && Object.assign(en, r);
              }
            }
            if ("type" in o) {
              if ("redirect-internal" === o.type)
                return this.change(e, o.newUrl, o.newAs, r);
              return (
                W({ url: o.destination, router: this }), new Promise(() => {})
              );
            }
            let a = o.Component;
            if (
              (a &&
                a.unstable_scriptLoader &&
                [].concat(a.unstable_scriptLoader()).forEach((e) => {
                  (0, s.handleClientScriptLoad)(e.props);
                }),
              (o.__N_SSG || o.__N_SSP) && o.props)
            ) {
              if (o.props.pageProps && o.props.pageProps.__N_REDIRECT) {
                r.locale = !1;
                let t = o.props.pageProps.__N_REDIRECT;
                if (
                  t.startsWith("/") &&
                  !1 !== o.props.pageProps.__N_REDIRECT_BASE_PATH
                ) {
                  let n = (0, p.parseRelativeUrl)(t);
                  n.pathname = D(n.pathname, B);
                  let { url: i, as: o } = L(this, t, t);
                  return this.change(e, i, o, r);
                }
                return W({ url: t, router: this }), new Promise(() => {});
              }
              if (
                ((q.isPreview = !!o.props.__N_PREVIEW), o.props.notFound === F)
              ) {
                let e;
                try {
                  await this.fetchComponent("/404"), (e = "/404");
                } catch (t) {
                  e = "/_error";
                }
                if (
                  ((o = await this.getRouteInfo({
                    route: e,
                    pathname: e,
                    query: en,
                    as: n,
                    resolvedAs: er,
                    routeProps: { shallow: !1 },
                    locale: q.locale,
                    isPreview: q.isPreview,
                    isNotFound: !0,
                  })),
                  "type" in o)
                )
                  throw Error("Unexpected middleware effect on /404");
              }
            }
            U &&
              "/_error" === this.pathname &&
              (null == (d = self.__NEXT_DATA__.props)
                ? void 0
                : null == (u = d.pageProps)
                ? void 0
                : u.statusCode) === 500 &&
              (null == (S = o.props) ? void 0 : S.pageProps) &&
              (o.props.pageProps.statusCode = 500);
            let c = r.shallow && q.route === (null != (P = o.route) ? P : ei),
              f = null != (j = r.scroll) ? j : !U && !c,
              g = null != i ? i : f ? { x: 0, y: 0 } : null,
              b = {
                ...q,
                route: ei,
                pathname: et,
                query: en,
                asPath: K,
                isFallback: !1,
              };
            if (U && ec) {
              if (
                ((o = await this.getRouteInfo({
                  route: this.pathname,
                  pathname: this.pathname,
                  query: en,
                  as: n,
                  resolvedAs: er,
                  routeProps: { shallow: !1 },
                  locale: q.locale,
                  isPreview: q.isPreview,
                  isQueryUpdating: U && !this.isFallback,
                })),
                "type" in o)
              )
                throw Error("Unexpected middleware effect on " + this.pathname);
              "/_error" === this.pathname &&
                (null == (M = self.__NEXT_DATA__.props)
                  ? void 0
                  : null == (E = M.pageProps)
                  ? void 0
                  : E.statusCode) === 500 &&
                (null == (I = o.props) ? void 0 : I.pageProps) &&
                (o.props.pageProps.statusCode = 500);
              try {
                await this.set(b, o, g);
              } catch (e) {
                throw (
                  ((0, l.default)(e) &&
                    e.cancelled &&
                    $.events.emit("routeChangeError", e, K, Q),
                  e)
                );
              }
              return !0;
            }
            if (
              ($.events.emit("beforeHistoryChange", n, Q),
              this.changeState(e, t, n, r),
              !(
                U &&
                !g &&
                !H &&
                !J &&
                (0, A.compareRouterStates)(b, this.state)
              ))
            ) {
              try {
                await this.set(b, o, g);
              } catch (e) {
                if (e.cancelled) o.error = o.error || e;
                else throw e;
              }
              if (o.error)
                throw (
                  (U || $.events.emit("routeChangeError", o.error, K, Q),
                  o.error)
                );
              U || $.events.emit("routeChangeComplete", n, Q),
                f && /#.+$/.test(n) && this.scrollToHash(n);
            }
            return !0;
          } catch (e) {
            if ((0, l.default)(e) && e.cancelled) return !1;
            throw e;
          }
        }
        changeState(e, t, n, r) {
          void 0 === r && (r = {}),
            ("pushState" !== e || (0, f.getURL)() !== n) &&
              ((this._shallow = r.shallow),
              window.history[e](
                {
                  url: t,
                  as: n,
                  options: r,
                  __N: !0,
                  key: (this._key = "pushState" !== e ? this._key : q()),
                },
                "",
                n
              ));
        }
        async handleRouteInfoError(e, t, n, r, i, o) {
          if ((console.error(e), e.cancelled)) throw e;
          if ((0, a.isAssetError)(e) || o)
            throw (
              ($.events.emit("routeChangeError", e, r, i),
              W({ url: r, router: this }),
              T())
            );
          try {
            let r;
            let { page: i, styleSheets: o } = await this.fetchComponent(
                "/_error"
              ),
              a = { props: r, Component: i, styleSheets: o, err: e, error: e };
            if (!a.props)
              try {
                a.props = await this.getInitialProps(i, {
                  err: e,
                  pathname: t,
                  query: n,
                });
              } catch (e) {
                console.error("Error in error page `getInitialProps`: ", e),
                  (a.props = {});
              }
            return a;
          } catch (e) {
            return this.handleRouteInfoError(
              (0, l.default)(e) ? e : Error(e + ""),
              t,
              n,
              r,
              i,
              !0
            );
          }
        }
        async getRouteInfo(e) {
          let {
              route: t,
              pathname: n,
              query: r,
              as: i,
              resolvedAs: a,
              routeProps: s,
              locale: c,
              hasMiddleware: d,
              isPreview: f,
              unstable_skipClientCache: h,
              isQueryUpdating: p,
              isMiddlewareRewrite: m,
              isNotFound: v,
            } = e,
            b = t;
          try {
            var y, x, _, k;
            let e = this.components[b];
            if (s.shallow && e && this.route === b) return e;
            let t = H({ route: b, router: this });
            d && (e = void 0);
            let l = !e || "initial" in e ? void 0 : e,
              S = {
                dataHref: this.pageLoader.getDataHref({
                  href: (0, g.formatWithValidation)({ pathname: n, query: r }),
                  skipInterpolation: !0,
                  asPath: v ? "/404" : a,
                  locale: c,
                }),
                hasMiddleware: !0,
                isServerRender: this.isSsr,
                parseJSON: !0,
                inflightCache: p ? this.sbc : this.sdc,
                persistCache: !f,
                isPrefetch: !1,
                unstable_skipClientCache: h,
                isBackground: p,
              },
              j =
                p && !m
                  ? null
                  : await N({
                      fetchData: () => G(S),
                      asPath: v ? "/404" : a,
                      locale: c,
                      router: this,
                    }).catch((e) => {
                      if (p) return null;
                      throw e;
                    });
            if (
              (j && ("/_error" === n || "/404" === n) && (j.effect = void 0),
              p &&
                (j
                  ? (j.json = self.__NEXT_DATA__.props)
                  : (j = { json: self.__NEXT_DATA__.props })),
              t(),
              (null == j
                ? void 0
                : null == (y = j.effect)
                ? void 0
                : y.type) === "redirect-internal" ||
                (null == j
                  ? void 0
                  : null == (x = j.effect)
                  ? void 0
                  : x.type) === "redirect-external")
            )
              return j.effect;
            if (
              (null == j
                ? void 0
                : null == (_ = j.effect)
                ? void 0
                : _.type) === "rewrite"
            ) {
              let t = (0, o.removeTrailingSlash)(j.effect.resolvedHref),
                i = await this.pageLoader.getPageList();
              if (
                (!p || i.includes(t)) &&
                ((b = t),
                (n = j.effect.resolvedHref),
                (r = { ...r, ...j.effect.parsedAs.query }),
                (a = (0, w.removeBasePath)(
                  (0, u.normalizeLocalePath)(
                    j.effect.parsedAs.pathname,
                    this.locales
                  ).pathname
                )),
                (e = this.components[b]),
                s.shallow && e && this.route === b && !d)
              )
                return { ...e, route: b };
            }
            if ((0, P.isAPIRoute)(b))
              return W({ url: i, router: this }), new Promise(() => {});
            let E =
                l ||
                (await this.fetchComponent(b).then((e) => ({
                  Component: e.page,
                  styleSheets: e.styleSheets,
                  __N_SSG: e.mod.__N_SSG,
                  __N_SSP: e.mod.__N_SSP,
                }))),
              A =
                null == j
                  ? void 0
                  : null == (k = j.response)
                  ? void 0
                  : k.headers.get("x-middleware-skip"),
              C = E.__N_SSG || E.__N_SSP;
            A &&
              (null == j ? void 0 : j.dataHref) &&
              delete this.sdc[j.dataHref];
            let { props: M, cacheKey: z } = await this._getData(async () => {
              if (C) {
                if ((null == j ? void 0 : j.json) && !A)
                  return { cacheKey: j.cacheKey, props: j.json };
                let e = (null == j ? void 0 : j.dataHref)
                    ? j.dataHref
                    : this.pageLoader.getDataHref({
                        href: (0, g.formatWithValidation)({
                          pathname: n,
                          query: r,
                        }),
                        asPath: a,
                        locale: c,
                      }),
                  t = await G({
                    dataHref: e,
                    isServerRender: this.isSsr,
                    parseJSON: !0,
                    inflightCache: A ? {} : this.sdc,
                    persistCache: !f,
                    isPrefetch: !1,
                    unstable_skipClientCache: h,
                  });
                return { cacheKey: t.cacheKey, props: t.json || {} };
              }
              return {
                headers: {},
                props: await this.getInitialProps(E.Component, {
                  pathname: n,
                  query: r,
                  asPath: i,
                  locale: c,
                  locales: this.locales,
                  defaultLocale: this.defaultLocale,
                }),
              };
            });
            return (
              E.__N_SSP && S.dataHref && z && delete this.sdc[z],
              this.isPreview ||
                !E.__N_SSG ||
                p ||
                G(
                  Object.assign({}, S, {
                    isBackground: !0,
                    persistCache: !1,
                    inflightCache: this.sbc,
                  })
                ).catch(() => {}),
              (M.pageProps = Object.assign({}, M.pageProps)),
              (E.props = M),
              (E.route = b),
              (E.query = r),
              (E.resolvedAs = a),
              (this.components[b] = E),
              E
            );
          } catch (e) {
            return this.handleRouteInfoError(
              (0, l.getProperError)(e),
              n,
              r,
              i,
              s
            );
          }
        }
        set(e, t, n) {
          return (
            (this.state = e), this.sub(t, this.components["/_app"].Component, n)
          );
        }
        beforePopState(e) {
          this._bps = e;
        }
        onlyAHashChange(e) {
          if (!this.asPath) return !1;
          let [t, n] = this.asPath.split("#", 2),
            [r, i] = e.split("#", 2);
          return (!!i && t === r && n === i) || (t === r && n !== i);
        }
        scrollToHash(e) {
          let [, t = ""] = e.split("#", 2);
          (0, I.handleSmoothScroll)(
            () => {
              if ("" === t || "top" === t) {
                window.scrollTo(0, 0);
                return;
              }
              let e = decodeURIComponent(t),
                n = document.getElementById(e);
              if (n) {
                n.scrollIntoView();
                return;
              }
              let r = document.getElementsByName(e)[0];
              r && r.scrollIntoView();
            },
            { onlyHashChange: this.onlyAHashChange(e) }
          );
        }
        urlIsNew(e) {
          return this.asPath !== e;
        }
        async prefetch(e, t, n) {
          if (
            (void 0 === t && (t = e),
            void 0 === n && (n = {}),
            "undefined" != typeof window &&
              (0, M.isBot)(window.navigator.userAgent))
          )
            return;
          let r = (0, p.parseRelativeUrl)(e),
            i = r.pathname,
            { pathname: a, query: s } = r,
            l = a,
            c = await this.pageLoader.getPageList(),
            u = t,
            d = void 0 !== n.locale ? n.locale || void 0 : this.locale,
            f = await O({ asPath: t, locale: d, router: this });
          (r.pathname = D(r.pathname, c)),
            (0, h.isDynamicRoute)(r.pathname) &&
              ((a = r.pathname),
              (r.pathname = a),
              Object.assign(
                s,
                (0, m.getRouteMatcher)((0, v.getRouteRegex)(r.pathname))(
                  (0, b.parsePath)(t).pathname
                ) || {}
              ),
              f || (e = (0, g.formatWithValidation)(r)));
          let y = await N({
            fetchData: () =>
              G({
                dataHref: this.pageLoader.getDataHref({
                  href: (0, g.formatWithValidation)({ pathname: l, query: s }),
                  skipInterpolation: !0,
                  asPath: u,
                  locale: d,
                }),
                hasMiddleware: !0,
                isServerRender: !1,
                parseJSON: !0,
                inflightCache: this.sdc,
                persistCache: !this.isPreview,
                isPrefetch: !0,
              }),
            asPath: t,
            locale: d,
            router: this,
          });
          if (
            ((null == y ? void 0 : y.effect.type) === "rewrite" &&
              ((r.pathname = y.effect.resolvedHref),
              (a = y.effect.resolvedHref),
              (s = { ...s, ...y.effect.parsedAs.query }),
              (u = y.effect.parsedAs.pathname),
              (e = (0, g.formatWithValidation)(r))),
            (null == y ? void 0 : y.effect.type) === "redirect-external")
          )
            return;
          let x = (0, o.removeTrailingSlash)(a);
          (await this._bfl(t, u, n.locale, !0)) &&
            (this.components[i] = { __appRouter: !0 }),
            await Promise.all([
              this.pageLoader._isSsg(x).then(
                (t) =>
                  !!t &&
                  G({
                    dataHref: (null == y ? void 0 : y.json)
                      ? null == y
                        ? void 0
                        : y.dataHref
                      : this.pageLoader.getDataHref({
                          href: e,
                          asPath: u,
                          locale: d,
                        }),
                    isServerRender: !1,
                    parseJSON: !0,
                    inflightCache: this.sdc,
                    persistCache: !this.isPreview,
                    isPrefetch: !0,
                    unstable_skipClientCache:
                      n.unstable_skipClientCache || (n.priority && !0),
                  })
                    .then(() => !1)
                    .catch(() => !1)
              ),
              this.pageLoader[n.priority ? "loadPage" : "prefetch"](x),
            ]);
        }
        async fetchComponent(e) {
          let t = H({ route: e, router: this });
          try {
            let n = await this.pageLoader.loadPage(e);
            return t(), n;
          } catch (e) {
            throw (t(), e);
          }
        }
        _getData(e) {
          let t = !1,
            n = () => {
              t = !0;
            };
          return (
            (this.clc = n),
            e().then((e) => {
              if ((n === this.clc && (this.clc = null), t)) {
                let e = Error("Loading initial props cancelled");
                throw ((e.cancelled = !0), e);
              }
              return e;
            })
          );
        }
        _getFlightData(e) {
          return G({
            dataHref: e,
            isServerRender: !0,
            parseJSON: !1,
            inflightCache: this.sdc,
            persistCache: !1,
            isPrefetch: !1,
          }).then((e) => {
            let { text: t } = e;
            return { data: t };
          });
        }
        getInitialProps(e, t) {
          let { Component: n } = this.components["/_app"],
            r = this._wrapApp(n);
          return (
            (t.AppTree = r),
            (0, f.loadGetInitialProps)(n, {
              AppTree: r,
              Component: e,
              router: this,
              ctx: t,
            })
          );
        }
        get route() {
          return this.state.route;
        }
        get pathname() {
          return this.state.pathname;
        }
        get query() {
          return this.state.query;
        }
        get asPath() {
          return this.state.asPath;
        }
        get locale() {
          return this.state.locale;
        }
        get isFallback() {
          return this.state.isFallback;
        }
        get isPreview() {
          return this.state.isPreview;
        }
        constructor(
          e,
          t,
          r,
          {
            initialProps: i,
            pageLoader: a,
            App: s,
            wrapApp: l,
            Component: c,
            err: u,
            subscription: d,
            isFallback: m,
            locale: v,
            locales: b,
            defaultLocale: y,
            domainLocales: x,
            isPreview: w,
          }
        ) {
          (this.sdc = {}),
            (this.sbc = {}),
            (this.isFirstPopStateEvent = !0),
            (this._key = q()),
            (this.onPopState = (e) => {
              let t;
              let { isFirstPopStateEvent: n } = this;
              this.isFirstPopStateEvent = !1;
              let r = e.state;
              if (!r) {
                let { pathname: e, query: t } = this;
                this.changeState(
                  "replaceState",
                  (0, g.formatWithValidation)({
                    pathname: (0, _.addBasePath)(e),
                    query: t,
                  }),
                  (0, f.getURL)()
                );
                return;
              }
              if (r.__NA) {
                window.location.reload();
                return;
              }
              if (
                !r.__N ||
                (n && this.locale === r.options.locale && r.as === this.asPath)
              )
                return;
              let { url: i, as: o, options: a, key: s } = r;
              this._key = s;
              let { pathname: l } = (0, p.parseRelativeUrl)(i);
              (!this.isSsr ||
                o !== (0, _.addBasePath)(this.asPath) ||
                l !== (0, _.addBasePath)(this.pathname)) &&
                (!this._bps || this._bps(r)) &&
                this.change(
                  "replaceState",
                  i,
                  o,
                  Object.assign({}, a, {
                    shallow: a.shallow && this._shallow,
                    locale: a.locale || this.defaultLocale,
                    _h: 0,
                  }),
                  t
                );
            });
          let k = (0, o.removeTrailingSlash)(e);
          (this.components = {}),
            "/_error" !== e &&
              (this.components[k] = {
                Component: c,
                initial: !0,
                props: i,
                err: u,
                __N_SSG: i && i.__N_SSG,
                __N_SSP: i && i.__N_SSP,
              }),
            (this.components["/_app"] = { Component: s, styleSheets: [] });
          {
            let { BloomFilter: e } = n(7590),
              t = {
                numItems: 43,
                errorRate: 1e-4,
                numBits: 825,
                numHashes: 14,
                bitArray: [
                  0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1,
                  1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1,
                  1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0,
                  0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1,
                  1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1,
                  0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1,
                  0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
                  1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1,
                  1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0,
                  1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1,
                  1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1,
                  0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0,
                  0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1,
                  0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1,
                  0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0,
                  1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1,
                  0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1,
                  0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1,
                  1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
                  1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1,
                  1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1,
                  1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                  0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
                  0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1,
                  1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0,
                  0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1,
                  0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1,
                  0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0,
                  0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0,
                  1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1,
                  1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1,
                  1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1,
                  0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1,
                  0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1,
                  0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0,
                  1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1,
                  0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1,
                  1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1,
                  1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0,
                  1, 1, 1, 0, 0, 0,
                ],
              },
              r = {
                numItems: 7,
                errorRate: 1e-4,
                numBits: 135,
                numHashes: 14,
                bitArray: [
                  1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1,
                  0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
                  0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1,
                  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1,
                  0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0,
                  1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1,
                  1, 0, 1, 1, 0, 0, 0, 1, 0,
                ],
              };
            (null == t ? void 0 : t.numHashes) &&
              ((this._bfl_s = new e(t.numItems, t.errorRate)),
              this._bfl_s.import(t)),
              (null == r ? void 0 : r.numHashes) &&
                ((this._bfl_d = new e(r.numItems, r.errorRate)),
                this._bfl_d.import(r));
          }
          (this.events = $.events), (this.pageLoader = a);
          let S = (0, h.isDynamicRoute)(e) && self.__NEXT_DATA__.autoExport;
          if (
            ((this.basePath = ""),
            (this.sub = d),
            (this.clc = null),
            (this._wrapApp = l),
            (this.isSsr = !0),
            (this.isLocaleDomain = !1),
            (this.isReady = !!(
              self.__NEXT_DATA__.gssp ||
              self.__NEXT_DATA__.gip ||
              self.__NEXT_DATA__.isExperimentalCompile ||
              (self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp) ||
              (!S && !self.location.search)
            )),
            (this.state = {
              route: k,
              pathname: e,
              query: t,
              asPath: S ? e : r,
              isPreview: !!w,
              locale: void 0,
              isFallback: m,
            }),
            (this._initialMatchesMiddlewarePromise = Promise.resolve(!1)),
            "undefined" != typeof window)
          ) {
            if (!r.startsWith("//")) {
              let n = { locale: v },
                i = (0, f.getURL)();
              this._initialMatchesMiddlewarePromise = O({
                router: this,
                locale: v,
                asPath: i,
              }).then(
                (o) => (
                  (n._shouldResolveHref = r !== e),
                  this.changeState(
                    "replaceState",
                    o
                      ? i
                      : (0, g.formatWithValidation)({
                          pathname: (0, _.addBasePath)(e),
                          query: t,
                        }),
                    i,
                    n
                  ),
                  o
                )
              );
            }
            window.addEventListener("popstate", this.onPopState);
          }
        }
      }
      $.events = (0, d.default)();
    },
    92917: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(13321),
        i = n(41732);
      function o(e, t, n, o) {
        if (!t || t === n) return e;
        let a = e.toLowerCase();
        return !o &&
          ((0, i.pathHasPrefix)(a, "#") ||
            (0, i.pathHasPrefix)(a, "/" + t.toLowerCase()))
          ? e
          : (0, r.addPathPrefix)(e, "/" + t);
      }
    },
    39841: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addPathSuffix", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(79419);
      function i(e, t) {
        if (!e.startsWith("/") || !t) return e;
        let { pathname: n, query: i, hash: o } = (0, r.parsePath)(e);
        return "" + n + t + i + o;
      }
    },
    4417: function (e, t) {
      "use strict";
      function n(e, t) {
        let n = Object.keys(e);
        if (n.length !== Object.keys(t).length) return !1;
        for (let r = n.length; r--; ) {
          let i = n[r];
          if ("query" === i) {
            let n = Object.keys(e.query);
            if (n.length !== Object.keys(t.query).length) return !1;
            for (let r = n.length; r--; ) {
              let i = n[r];
              if (!t.query.hasOwnProperty(i) || e.query[i] !== t.query[i])
                return !1;
            }
          } else if (!t.hasOwnProperty(i) || e[i] !== t[i]) return !1;
        }
        return !0;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "compareRouterStates", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    79932: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "formatNextPathnameInfo", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let r = n(16681),
        i = n(13321),
        o = n(39841),
        a = n(92917);
      function s(e) {
        let t = (0, a.addLocale)(
          e.pathname,
          e.locale,
          e.buildId ? void 0 : e.defaultLocale,
          e.ignorePrefix
        );
        return (
          (e.buildId || !e.trailingSlash) &&
            (t = (0, r.removeTrailingSlash)(t)),
          e.buildId &&
            (t = (0, o.addPathSuffix)(
              (0, i.addPathPrefix)(t, "/_next/data/" + e.buildId),
              "/" === e.pathname ? "index.json" : ".json"
            )),
          (t = (0, i.addPathPrefix)(t, e.basePath)),
          !e.buildId && e.trailingSlash
            ? t.endsWith("/")
              ? t
              : (0, o.addPathSuffix)(t, "/")
            : (0, r.removeTrailingSlash)(t)
        );
      }
    },
    87313: function (e, t) {
      "use strict";
      function n(e, t) {
        return (
          void 0 === t && (t = ""),
          ("/" === e ? "/index" : /^\/index(\/|$)/.test(e) ? "/index" + e : e) +
            t
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    50984: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getNextPathnameInfo", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(58839),
        i = n(59023),
        o = n(41732);
      function a(e, t) {
        var n, a;
        let {
            basePath: s,
            i18n: l,
            trailingSlash: c,
          } = null != (n = t.nextConfig) ? n : {},
          u = { pathname: e, trailingSlash: "/" !== e ? e.endsWith("/") : c };
        s &&
          (0, o.pathHasPrefix)(u.pathname, s) &&
          ((u.pathname = (0, i.removePathPrefix)(u.pathname, s)),
          (u.basePath = s));
        let d = u.pathname;
        if (
          u.pathname.startsWith("/_next/data/") &&
          u.pathname.endsWith(".json")
        ) {
          let e = u.pathname
              .replace(/^\/_next\/data\//, "")
              .replace(/\.json$/, "")
              .split("/"),
            n = e[0];
          (u.buildId = n),
            (d = "index" !== e[1] ? "/" + e.slice(1).join("/") : "/"),
            !0 === t.parseData && (u.pathname = d);
        }
        if (l) {
          let e = t.i18nProvider
            ? t.i18nProvider.analyze(u.pathname)
            : (0, r.normalizeLocalePath)(u.pathname, l.locales);
          (u.locale = e.detectedLocale),
            (u.pathname = null != (a = e.pathname) ? a : u.pathname),
            !e.detectedLocale &&
              u.buildId &&
              (e = t.i18nProvider
                ? t.i18nProvider.analyze(d)
                : (0, r.normalizeLocalePath)(d, l.locales)).detectedLocale &&
              (u.locale = e.detectedLocale);
        }
        return u;
      }
    },
    52499: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "parseRelativeUrl", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(54623),
        i = n(45492);
      function o(e, t) {
        let n = new URL(
            "undefined" == typeof window
              ? "http://n"
              : (0, r.getLocationOrigin)()
          ),
          o = t
            ? new URL(t, n)
            : e.startsWith(".")
            ? new URL(
                "undefined" == typeof window ? "http://n" : window.location.href
              )
            : n,
          {
            pathname: a,
            searchParams: s,
            search: l,
            hash: c,
            href: u,
            origin: d,
          } = new URL(e, o);
        if (d !== n.origin)
          throw Error("invariant: invalid relative URL, router received " + e);
        return {
          pathname: a,
          query: (0, i.searchParamsToUrlQuery)(s),
          search: l,
          hash: c,
          href: u.slice(n.origin.length),
        };
      }
    },
    59023: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "removePathPrefix", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(41732);
      function i(e, t) {
        if (!(0, r.pathHasPrefix)(e, t)) return e;
        let n = e.slice(t.length);
        return n.startsWith("/") ? n : "/" + n;
      }
    },
    20498: function (e, t, n) {
      "use strict";
      n.d(t, {
        DM: function () {
          return f;
        },
        h8: function () {
          return v;
        },
        jc: function () {
          return m;
        },
        ln: function () {
          return h;
        },
        o5: function () {
          return p;
        },
      });
      let r = Symbol(),
        i = Symbol(),
        o = (e, t) => new Proxy(e, t),
        a = Object.getPrototypeOf,
        s = new WeakMap(),
        l = (e) =>
          e &&
          (s.has(e)
            ? s.get(e)
            : a(e) === Object.prototype || a(e) === Array.prototype),
        c = (e) => "object" == typeof e && null !== e,
        u = (e) => {
          if (Array.isArray(e)) return Array.from(e);
          let t = Object.getOwnPropertyDescriptors(e);
          return (
            Object.values(t).forEach((e) => {
              e.configurable = !0;
            }),
            Object.create(a(e), t)
          );
        },
        d = (e) => e[i] || e,
        f = (e, t, n, a) => {
          if (!l(e)) return e;
          let s = a && a.get(e);
          if (!s) {
            let t = d(e);
            (s = Object.values(Object.getOwnPropertyDescriptors(t)).some(
              (e) => !e.configurable && !e.writable
            )
              ? [t, u(t)]
              : [t]),
              null == a || a.set(e, s);
          }
          let [c, h] = s,
            p = n && n.get(c);
          return (
            (p && !!h === p[1].f) ||
              (((p = ((e, t) => {
                let n = { f: t },
                  o = !1,
                  a = (t, r) => {
                    if (!o) {
                      let i = n.a.get(e);
                      if ((i || ((i = {}), n.a.set(e, i)), "w" === t)) i.w = !0;
                      else {
                        let e = i[t];
                        e || ((e = new Set()), (i[t] = e)), e.add(r);
                      }
                    }
                  },
                  s = {
                    get: (t, r) =>
                      r === i
                        ? e
                        : (a("k", r), f(Reflect.get(t, r), n.a, n.c, n.t)),
                    has: (t, i) =>
                      i === r
                        ? ((o = !0), n.a.delete(e), !0)
                        : (a("h", i), Reflect.has(t, i)),
                    getOwnPropertyDescriptor: (e, t) => (
                      a("o", t), Reflect.getOwnPropertyDescriptor(e, t)
                    ),
                    ownKeys: (e) => (a("w"), Reflect.ownKeys(e)),
                  };
                return t && (s.set = s.deleteProperty = () => !1), [s, n];
              })(c, !!h))[1].p = o(h || c, p[0])),
              n && n.set(c, p)),
            (p[1].a = t),
            (p[1].c = n),
            (p[1].t = a),
            p[1].p
          );
        },
        h = (e, t, n, r, i = Object.is) => {
          if (i(e, t)) return !1;
          if (!c(e) || !c(t)) return !0;
          let o = n.get(d(e));
          if (!o) return !0;
          if (r) {
            let n = r.get(e);
            if (n && n.n === t) return n.g;
            r.set(e, { n: t, g: !1 });
          }
          let a = null;
          try {
            for (let n of o.h || [])
              if ((a = Reflect.has(e, n) !== Reflect.has(t, n))) return a;
            if (!0 === o.w) {
              if (
                (a = ((e, t) => {
                  let n = Reflect.ownKeys(e),
                    r = Reflect.ownKeys(t);
                  return n.length !== r.length || n.some((e, t) => e !== r[t]);
                })(e, t))
              )
                return a;
            } else
              for (let n of o.o || [])
                if (
                  (a =
                    !!Reflect.getOwnPropertyDescriptor(e, n) !=
                    !!Reflect.getOwnPropertyDescriptor(t, n))
                )
                  return a;
            for (let s of o.k || []) if ((a = h(e[s], t[s], n, r, i))) return a;
            return null === a && (a = !0), a;
          } finally {
            r && r.set(e, { n: t, g: a });
          }
        },
        p = (e) => (l(e) && e[i]) || null,
        m = (e, t = !0) => {
          s.set(e, t);
        },
        v = (e, t, n) => {
          let r = [],
            i = new WeakSet(),
            o = (e, a) => {
              if (i.has(e)) return;
              c(e) && i.add(e);
              let s = c(e) && t.get(d(e));
              if (s) {
                var l, u, f;
                if (
                  (null == (l = s.h) ||
                    l.forEach((e) => {
                      let t = `:has(${String(e)})`;
                      r.push(a ? [...a, t] : [t]);
                    }),
                  !0 === s.w)
                ) {
                  let e = ":ownKeys";
                  r.push(a ? [...a, e] : [e]);
                } else
                  null == (f = s.o) ||
                    f.forEach((e) => {
                      let t = `:hasOwn(${String(e)})`;
                      r.push(a ? [...a, t] : [t]);
                    });
                null == (u = s.k) ||
                  u.forEach((t) => {
                    (!n ||
                      "value" in
                        (Object.getOwnPropertyDescriptor(e, t) || {})) &&
                      o(e[t], a ? [...a, t] : [t]);
                  });
              } else a && r.push(a);
            };
          return o(e), r;
        };
    },
    62359: function (e, t) {
      "use strict";
      /** @license React v16.13.1
       * react-is.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        i = n ? Symbol.for("react.portal") : 60106,
        o = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        u = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        h = n ? Symbol.for("react.suspense") : 60113,
        p = n ? Symbol.for("react.suspense_list") : 60120,
        m = n ? Symbol.for("react.memo") : 60115,
        v = n ? Symbol.for("react.lazy") : 60116,
        g = n ? Symbol.for("react.block") : 60121,
        b = n ? Symbol.for("react.fundamental") : 60117,
        y = n ? Symbol.for("react.responder") : 60118,
        x = n ? Symbol.for("react.scope") : 60119;
      function w(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case u:
                case d:
                case o:
                case s:
                case a:
                case h:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case f:
                    case v:
                    case m:
                    case l:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function _(e) {
        return w(e) === d;
      }
      (t.AsyncMode = u),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = c),
        (t.ContextProvider = l),
        (t.Element = r),
        (t.ForwardRef = f),
        (t.Fragment = o),
        (t.Lazy = v),
        (t.Memo = m),
        (t.Portal = i),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = h),
        (t.isAsyncMode = function (e) {
          return _(e) || w(e) === u;
        }),
        (t.isConcurrentMode = _),
        (t.isContextConsumer = function (e) {
          return w(e) === c;
        }),
        (t.isContextProvider = function (e) {
          return w(e) === l;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return w(e) === f;
        }),
        (t.isFragment = function (e) {
          return w(e) === o;
        }),
        (t.isLazy = function (e) {
          return w(e) === v;
        }),
        (t.isMemo = function (e) {
          return w(e) === m;
        }),
        (t.isPortal = function (e) {
          return w(e) === i;
        }),
        (t.isProfiler = function (e) {
          return w(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return w(e) === a;
        }),
        (t.isSuspense = function (e) {
          return w(e) === h;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === o ||
            e === d ||
            e === s ||
            e === a ||
            e === h ||
            e === p ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === v ||
                e.$$typeof === m ||
                e.$$typeof === l ||
                e.$$typeof === c ||
                e.$$typeof === f ||
                e.$$typeof === b ||
                e.$$typeof === y ||
                e.$$typeof === x ||
                e.$$typeof === g))
          );
        }),
        (t.typeOf = w);
    },
    68784: function (e, t, n) {
      "use strict";
      e.exports = n(62359);
    },
    65305: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return v;
        },
      });
      var r = n(83112),
        [i, o] = (0, n(84102).k)({ strict: !1, name: "ButtonGroupContext" }),
        a = n(96936),
        s = n(29408),
        l = n(20209);
      function c(e) {
        let { children: t, className: n, ...i } = e,
          o = (0, r.isValidElement)(t)
            ? (0, r.cloneElement)(t, { "aria-hidden": !0, focusable: !1 })
            : t,
          c = (0, s.cx)("chakra-button__icon", n);
        return (0, l.jsx)(a.m.span, {
          display: "inline-flex",
          alignSelf: "center",
          flexShrink: 0,
          ...i,
          className: c,
          children: o,
        });
      }
      c.displayName = "ButtonIcon";
      var u = n(38859);
      function d(e) {
        let {
            label: t,
            placement: n,
            spacing: i = "0.5rem",
            children: o = (0, l.jsx)(u.$, {
              color: "currentColor",
              width: "1em",
              height: "1em",
            }),
            className: c,
            __css: d,
            ...f
          } = e,
          h = (0, s.cx)("chakra-button__spinner", c),
          p = "start" === n ? "marginEnd" : "marginStart",
          m = (0, r.useMemo)(
            () => ({
              display: "flex",
              alignItems: "center",
              position: t ? "relative" : "absolute",
              [p]: t ? i : 0,
              fontSize: "1em",
              lineHeight: "normal",
              ...d,
            }),
            [d, t, p, i]
          );
        return (0, l.jsx)(a.m.div, {
          className: h,
          ...f,
          __css: m,
          children: o,
        });
      }
      d.displayName = "ButtonSpinner";
      var f = n(30735),
        h = n(56354),
        p = n(34152),
        m = n(5175),
        v = (0, h.G)((e, t) => {
          let n = o(),
            i = (0, p.mq)("Button", { ...n, ...e }),
            {
              isDisabled: c = null == n ? void 0 : n.isDisabled,
              isLoading: u,
              isActive: h,
              children: v,
              leftIcon: b,
              rightIcon: y,
              loadingText: x,
              iconSpacing: w = "0.5rem",
              type: _,
              spinner: k,
              spinnerPlacement: S = "start",
              className: P,
              as: j,
              ...E
            } = (0, m.Lr)(e),
            A = (0, r.useMemo)(() => {
              let e = { ...(null == i ? void 0 : i._focus), zIndex: 1 };
              return {
                display: "inline-flex",
                appearance: "none",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none",
                position: "relative",
                whiteSpace: "nowrap",
                verticalAlign: "middle",
                outline: "none",
                ...i,
                ...(!!n && { _focus: e }),
              };
            }, [i, n]),
            { ref: C, type: M } = (function (e) {
              let [t, n] = (0, r.useState)(!e);
              return {
                ref: (0, r.useCallback)((e) => {
                  e && n("BUTTON" === e.tagName);
                }, []),
                type: t ? "button" : void 0,
              };
            })(j),
            z = { rightIcon: y, leftIcon: b, iconSpacing: w, children: v };
          return (0, l.jsxs)(a.m.button, {
            ref: (0, f.qq)(t, C),
            as: j,
            type: null != _ ? _ : M,
            "data-active": (0, s.PB)(h),
            "data-loading": (0, s.PB)(u),
            __css: A,
            className: (0, s.cx)("chakra-button", P),
            ...E,
            disabled: c || u,
            children: [
              u &&
                "start" === S &&
                (0, l.jsx)(d, {
                  className: "chakra-button__spinner--start",
                  label: x,
                  placement: "start",
                  spacing: w,
                  children: k,
                }),
              u
                ? x ||
                  (0, l.jsx)(a.m.span, {
                    opacity: 0,
                    children: (0, l.jsx)(g, { ...z }),
                  })
                : (0, l.jsx)(g, { ...z }),
              u &&
                "end" === S &&
                (0, l.jsx)(d, {
                  className: "chakra-button__spinner--end",
                  label: x,
                  placement: "end",
                  spacing: w,
                  children: k,
                }),
            ],
          });
        });
      function g(e) {
        let { leftIcon: t, rightIcon: n, children: r, iconSpacing: i } = e;
        return (0, l.jsxs)(l.Fragment, {
          children: [
            t && (0, l.jsx)(c, { marginEnd: i, children: t }),
            r,
            n && (0, l.jsx)(c, { marginStart: i, children: n }),
          ],
        });
      }
      v.displayName = "Button";
    },
    20759: function (e, t, n) {
      "use strict";
      n.d(t, {
        If: function () {
          return o;
        },
      });
      var r = n(83112),
        i = (0, r.createContext)({});
      function o() {
        let e = (0, r.useContext)(i);
        if (void 0 === e)
          throw Error("useColorMode must be used within a ColorModeProvider");
        return e;
      }
      i.displayName = "ColorModeContext";
    },
    35950: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return v;
        },
        K: function () {
          return g;
        },
      });
      var r = n(84102),
        i = n(30735),
        o = n(56354),
        a = n(34152),
        s = n(5175),
        l = n(96936),
        c = n(29408),
        u = n(83112),
        d = n(20209),
        [f, h] = (0, r.k)({
          name: "FormControlStylesContext",
          errorMessage:
            "useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" ",
        }),
        [p, m] = (0, r.k)({ strict: !1, name: "FormControlContext" });
      function v(e) {
        let {
          isDisabled: t,
          isInvalid: n,
          isReadOnly: r,
          isRequired: i,
          ...o
        } = g(e);
        return {
          ...o,
          disabled: t,
          readOnly: r,
          required: i,
          "aria-invalid": (0, c.Qm)(n),
          "aria-required": (0, c.Qm)(i),
          "aria-readonly": (0, c.Qm)(r),
        };
      }
      function g(e) {
        var t, n, r;
        let i = m(),
          {
            id: o,
            disabled: a,
            readOnly: s,
            required: l,
            isRequired: u,
            isInvalid: d,
            isReadOnly: f,
            isDisabled: h,
            onFocus: p,
            onBlur: v,
            ...g
          } = e,
          b = e["aria-describedby"] ? [e["aria-describedby"]] : [];
        return (
          (null == i ? void 0 : i.hasFeedbackText) &&
            (null == i ? void 0 : i.isInvalid) &&
            b.push(i.feedbackId),
          (null == i ? void 0 : i.hasHelpText) && b.push(i.helpTextId),
          {
            ...g,
            "aria-describedby": b.join(" ") || void 0,
            id: null != o ? o : null == i ? void 0 : i.id,
            isDisabled:
              null != (t = null != a ? a : h)
                ? t
                : null == i
                ? void 0
                : i.isDisabled,
            isReadOnly:
              null != (n = null != s ? s : f)
                ? n
                : null == i
                ? void 0
                : i.isReadOnly,
            isRequired:
              null != (r = null != l ? l : u)
                ? r
                : null == i
                ? void 0
                : i.isRequired,
            isInvalid: null != d ? d : null == i ? void 0 : i.isInvalid,
            onFocus: (0, c.v0)(null == i ? void 0 : i.onFocus, p),
            onBlur: (0, c.v0)(null == i ? void 0 : i.onBlur, v),
          }
        );
      }
      ((0, o.G)(function (e, t) {
        let n = (0, a.jC)("Form", e),
          {
            getRootProps: r,
            htmlProps: o,
            ...h
          } = (function (e) {
            let {
                id: t,
                isRequired: n,
                isInvalid: r,
                isDisabled: o,
                isReadOnly: a,
                ...s
              } = e,
              l = (0, u.useId)(),
              d = t || "field-".concat(l),
              f = "".concat(d, "-label"),
              h = "".concat(d, "-feedback"),
              p = "".concat(d, "-helptext"),
              [m, v] = (0, u.useState)(!1),
              [g, b] = (0, u.useState)(!1),
              [y, x] = (0, u.useState)(!1),
              w = (0, u.useCallback)(
                function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  return {
                    id: p,
                    ...e,
                    ref: (0, i.lq)(t, (e) => {
                      e && b(!0);
                    }),
                  };
                },
                [p]
              ),
              _ = (0, u.useCallback)(
                function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  return {
                    ...e,
                    ref: t,
                    "data-focus": (0, c.PB)(y),
                    "data-disabled": (0, c.PB)(o),
                    "data-invalid": (0, c.PB)(r),
                    "data-readonly": (0, c.PB)(a),
                    id: void 0 !== e.id ? e.id : f,
                    htmlFor: void 0 !== e.htmlFor ? e.htmlFor : d,
                  };
                },
                [d, o, y, r, a, f]
              ),
              k = (0, u.useCallback)(
                function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  return {
                    id: h,
                    ...e,
                    ref: (0, i.lq)(t, (e) => {
                      e && v(!0);
                    }),
                    "aria-live": "polite",
                  };
                },
                [h]
              ),
              S = (0, u.useCallback)(
                function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null;
                  return {
                    ...e,
                    ...s,
                    ref: t,
                    role: "group",
                    "data-focus": (0, c.PB)(y),
                    "data-disabled": (0, c.PB)(o),
                    "data-invalid": (0, c.PB)(r),
                    "data-readonly": (0, c.PB)(a),
                  };
                },
                [s, o, y, r, a]
              );
            return {
              isRequired: !!n,
              isInvalid: !!r,
              isReadOnly: !!a,
              isDisabled: !!o,
              isFocused: !!y,
              onFocus: () => x(!0),
              onBlur: () => x(!1),
              hasFeedbackText: m,
              setHasFeedbackText: v,
              hasHelpText: g,
              setHasHelpText: b,
              id: d,
              labelId: f,
              feedbackId: h,
              helpTextId: p,
              htmlProps: s,
              getHelpTextProps: w,
              getErrorMessageProps: k,
              getRootProps: S,
              getLabelProps: _,
              getRequiredIndicatorProps: (0, u.useCallback)(function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                return {
                  ...e,
                  ref: t,
                  role: "presentation",
                  "aria-hidden": !0,
                  children: e.children || "*",
                };
              }, []),
            };
          })((0, s.Lr)(e)),
          m = (0, c.cx)("chakra-form-control", e.className);
        return (0,
        d.jsx)(p, { value: h, children: (0, d.jsx)(f, { value: n, children: (0, d.jsx)(l.m.div, { ...r({}, t), className: m, __css: n.container }) }) });
      }).displayName = "FormControl"),
        ((0, o.G)(function (e, t) {
          let n = m(),
            r = h(),
            i = (0, c.cx)("chakra-form__helper-text", e.className);
          return (0,
          d.jsx)(l.m.div, { ...(null == n ? void 0 : n.getHelpTextProps(e, t)), __css: r.helperText, className: i });
        }).displayName = "FormHelperText");
    },
    31088: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return s;
        },
      });
      var r = n(83112),
        i =
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
            ? r.useLayoutEffect
            : r.useEffect;
      function o(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = (0, r.useRef)(e);
        return (
          i(() => {
            n.current = e;
          }),
          (0, r.useCallback)(function () {
            for (var e, t = arguments.length, r = Array(t), i = 0; i < t; i++)
              r[i] = arguments[i];
            return null == (e = n.current) ? void 0 : e.call(n, ...r);
          }, t)
        );
      }
      var a = n(92041);
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { onClose: t, onOpen: n, isOpen: i, id: s } = e,
          l = o(n),
          c = o(t),
          [u, d] = (0, r.useState)(e.defaultIsOpen || !1),
          [f, h] = (function (e, t) {
            let n = void 0 !== e;
            return [n, n && void 0 !== e ? e : t];
          })(i, u),
          p = (function (e, t) {
            let n = (0, r.useId)();
            return (0, r.useMemo)(
              () => e || [t, n].filter(Boolean).join("-"),
              [e, t, n]
            );
          })(s, "disclosure"),
          m = (0, r.useCallback)(() => {
            f || d(!1), null == c || c();
          }, [f, c]),
          v = (0, r.useCallback)(() => {
            f || d(!0), null == l || l();
          }, [f, l]),
          g = (0, r.useCallback)(() => {
            (h ? m : v)();
          }, [h, v, m]);
        return {
          isOpen: !!h,
          onOpen: v,
          onClose: m,
          onToggle: g,
          isControlled: f,
          getButtonProps: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return {
              ...e,
              "aria-expanded": h,
              "aria-controls": p,
              onClick: (0, a.v0)(e.onClick, g),
            };
          },
          getDisclosureProps: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return { ...e, hidden: !h, id: p };
          },
        };
      }
    },
    49558: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return c;
        },
      });
      var r = n(56354),
        i = n(34152),
        o = n(96936),
        a = n(29408),
        s = n(20209),
        l = {
          path: (0, s.jsxs)("g", {
            stroke: "currentColor",
            strokeWidth: "1.5",
            children: [
              (0, s.jsx)("path", {
                strokeLinecap: "round",
                fill: "none",
                d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
              }),
              (0, s.jsx)("path", {
                fill: "currentColor",
                strokeLinecap: "round",
                d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
              }),
              (0, s.jsx)("circle", {
                fill: "none",
                strokeMiterlimit: "10",
                cx: "12",
                cy: "12",
                r: "11.25",
              }),
            ],
          }),
          viewBox: "0 0 24 24",
        },
        c = (0, r.G)((e, t) => {
          let {
              as: n,
              viewBox: r,
              color: c = "currentColor",
              focusable: u = !1,
              children: d,
              className: f,
              __css: h,
              ...p
            } = e,
            m = (0, a.cx)("chakra-icon", f),
            v = (0, i.mq)("Icon", e),
            g = {
              ref: t,
              focusable: u,
              className: m,
              __css: {
                w: "1em",
                h: "1em",
                display: "inline-block",
                lineHeight: "1em",
                flexShrink: 0,
                color: c,
                ...h,
                ...v,
              },
            },
            b = null != r ? r : l.viewBox;
          if (n && "string" != typeof n)
            return (0, s.jsx)(o.m.svg, { as: n, ...g, ...p });
          let y = null != d ? d : l.path;
          return (0, s.jsx)(o.m.svg, {
            verticalAlign: "middle",
            viewBox: b,
            ...g,
            ...p,
            children: y,
          });
        });
      c.displayName = "Icon";
    },
    14259: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return s;
        },
      });
      var r = n(49558),
        i = n(56354),
        o = n(83112),
        a = n(20209);
      function s(e) {
        let {
            viewBox: t = "0 0 24 24",
            d: n,
            displayName: s,
            defaultProps: l = {},
          } = e,
          c = o.Children.toArray(e.path),
          u = (0, i.G)((e, i) =>
            (0, a.jsx)(r.J, {
              ref: i,
              viewBox: t,
              ...l,
              ...e,
              children: c.length
                ? c
                : (0, a.jsx)("path", { fill: "currentColor", d: n }),
            })
          );
        return (u.displayName = s), u;
      }
    },
    95946: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return o;
        },
      });
      var r = n(14259),
        i = n(20209),
        o = (0, r.I)({
          displayName: "DeleteIcon",
          path: (0, i.jsx)("g", {
            fill: "currentColor",
            children: (0, i.jsx)("path", {
              d: "M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z",
            }),
          }),
        });
    },
    44914: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return r;
        },
      });
      var r = (0, n(14259).I)({
        d: "M11.2857,6.05714 L10.08571,4.85714 L7.85714,7.14786 L7.85714,1 L6.14286,1 L6.14286,7.14786 L3.91429,4.85714 L2.71429,6.05714 L7,10.42857 L11.2857,6.05714 Z M1,11.2857 L1,13 L13,13 L13,11.2857 L1,11.2857 Z",
        displayName: "DownloadIcon",
        viewBox: "0 0 14 14",
      });
    },
    82651: function (e, t, n) {
      "use strict";
      n.d(t, {
        g: function () {
          return r;
        },
      });
      var r = (0, n(14259).I)({
        d: "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z",
        displayName: "ChevronUpIcon",
      });
    },
    17615: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return r;
        },
      });
      var r = (0, n(14259).I)({
        displayName: "CloseIcon",
        d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
      });
    },
    23573: function (e, t, n) {
      "use strict";
      n.d(t, {
        d: function () {
          return o;
        },
      });
      var r = n(14259),
        i = n(20209),
        o = (0, r.I)({
          displayName: "EditIcon",
          path: (0, i.jsxs)("g", {
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "2",
            children: [
              (0, i.jsx)("path", {
                d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
              }),
              (0, i.jsx)("path", {
                d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",
              }),
            ],
          }),
        });
    },
    11923: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return r;
        },
      });
      var r = (0, n(14259).I)({
        displayName: "ChevronDownIcon",
        d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
      });
    },
    80729: function (e, t, n) {
      "use strict";
      n.d(t, {
        n: function () {
          return o;
        },
      });
      var r = n(14259),
        i = n(20209),
        o = (0, r.I)({
          viewBox: "0 0 14 14",
          path: (0, i.jsx)("g", {
            fill: "currentColor",
            children: (0, i.jsx)("polygon", {
              points:
                "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039",
            }),
          }),
        });
    },
    92860: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return u;
        },
      });
      var r = n(56354),
        i = n(34152),
        o = n(5175),
        a = n(96936),
        s = n(29408),
        l = n(23643),
        c = n(20209),
        u = (0, r.G)(function (e, t) {
          let n = (0, i.mq)("Text", e),
            {
              className: r,
              align: u,
              decoration: d,
              casing: f,
              ...h
            } = (0, o.Lr)(e),
            p = (0, l.o)({
              textAlign: e.align,
              textDecoration: e.decoration,
              textTransform: e.casing,
            });
          return (0,
          c.jsx)(a.m.p, { ref: t, className: (0, s.cx)("chakra-text", e.className), ...p, ...h, __css: n });
        });
      u.displayName = "Text";
    },
    26989: function (e, t, n) {
      "use strict";
      n.d(t, {
        U: function () {
          return a;
        },
      });
      var r = n(2383),
        i = n(56354),
        o = n(20209),
        a = (0, i.G)((e, t) =>
          (0, o.jsx)(r.K, { align: "center", ...e, direction: "row", ref: t })
        );
      a.displayName = "HStack";
    },
    15353: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return a;
        },
      });
      var r = n(96936),
        i = n(56354),
        o = n(20209),
        a = (0, r.m)("div", {
          baseStyle: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
        });
      a.displayName = "Center";
      var s = {
        horizontal: { insetStart: "50%", transform: "translateX(-50%)" },
        vertical: { top: "50%", transform: "translateY(-50%)" },
        both: {
          insetStart: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        },
      };
      (0, i.G)(function (e, t) {
        let { axis: n = "both", ...i } = e;
        return (0,
        o.jsx)(r.m.div, { ref: t, __css: s[n], ...i, position: "absolute" });
      });
    },
    7823: function (e, t, n) {
      "use strict";
      n.d(t, {
        xu: function () {
          return a;
        },
      });
      var r = n(96936),
        i = n(56354),
        o = n(20209),
        a = (0, r.m)("div");
      a.displayName = "Box";
      var s = (0, i.G)(function (e, t) {
        let { size: n, centerContent: r = !0, ...i } = e;
        return (0,
        o.jsx)(a, { ref: t, boxSize: n, __css: { ...(r ? { display: "flex", alignItems: "center", justifyContent: "center" } : {}), flexShrink: 0, flexGrow: 0 }, ...i });
      });
      (s.displayName = "Square"),
        ((0, i.G)(function (e, t) {
          let { size: n, ...r } = e;
          return (0,
          o.jsx)(s, { size: n, ref: t, borderRadius: "9999px", ...r });
        }).displayName = "Circle");
    },
    66102: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return c;
        },
      });
      var r = n(56354),
        i = n(34152),
        o = n(5175),
        a = n(96936),
        s = n(29408),
        l = n(20209),
        c = (0, r.G)(function (e, t) {
          let {
              borderLeftWidth: n,
              borderBottomWidth: r,
              borderTopWidth: c,
              borderRightWidth: u,
              borderWidth: d,
              borderStyle: f,
              borderColor: h,
              ...p
            } = (0, i.mq)("Divider", e),
            {
              className: m,
              orientation: v = "horizontal",
              __css: g,
              ...b
            } = (0, o.Lr)(e);
          return (0,
          l.jsx)(a.m.hr, { ref: t, "aria-orientation": v, ...b, __css: { ...p, border: "0", borderColor: h, borderStyle: f, ...{ vertical: { borderLeftWidth: n || u || d || "1px", height: "100%" }, horizontal: { borderBottomWidth: r || c || d || "1px", width: "100%" } }[v], ...g }, className: (0, s.cx)("chakra-divider", m) });
        });
      c.displayName = "Divider";
    },
    2383: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return u;
        },
      });
      var r = n(96936),
        i = n(20209),
        o = (e) =>
          (0, i.jsx)(r.m.div, {
            className: "chakra-stack__item",
            ...e,
            __css: {
              display: "inline-block",
              flex: "0 0 auto",
              minWidth: 0,
              ...e.__css,
            },
          });
      o.displayName = "StackItem";
      var a = n(29408);
      Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
      var s = n(21603),
        l = n(56354),
        c = n(83112),
        u = (0, l.G)((e, t) => {
          let {
              isInline: n,
              direction: l,
              align: u,
              justify: d,
              spacing: f = "0.5rem",
              wrap: h,
              children: p,
              divider: m,
              className: v,
              shouldWrapChildren: g,
              ...b
            } = e,
            y = n ? "row" : null != l ? l : "column",
            x = (0, c.useMemo)(
              () =>
                (function (e) {
                  var t;
                  let { spacing: n, direction: r } = e,
                    i = {
                      column: {
                        my: n,
                        mx: 0,
                        borderLeftWidth: 0,
                        borderBottomWidth: "1px",
                      },
                      "column-reverse": {
                        my: n,
                        mx: 0,
                        borderLeftWidth: 0,
                        borderBottomWidth: "1px",
                      },
                      row: {
                        mx: n,
                        my: 0,
                        borderLeftWidth: "1px",
                        borderBottomWidth: 0,
                      },
                      "row-reverse": {
                        mx: n,
                        my: 0,
                        borderLeftWidth: "1px",
                        borderBottomWidth: 0,
                      },
                    };
                  return {
                    "&":
                      ((t = (e) => i[e]),
                      Array.isArray(r)
                        ? r.map((e) => (null === e ? null : t(e)))
                        : (0, a.Kn)(r)
                        ? Object.keys(r).reduce(
                            (e, n) => ((e[n] = t(r[n])), e),
                            {}
                          )
                        : null != r
                        ? t(r)
                        : null),
                  };
                })({ spacing: f, direction: y }),
              [f, y]
            ),
            w = !!m,
            _ = !g && !w,
            k = (0, c.useMemo)(() => {
              let e = (0, s.W)(p);
              return _
                ? e
                : e.map((t, n) => {
                    let r = void 0 !== t.key ? t.key : n,
                      a = n + 1 === e.length,
                      s = (0, i.jsx)(o, { children: t }, r),
                      l = g ? s : t;
                    if (!w) return l;
                    let u = (0, c.cloneElement)(m, { __css: x });
                    return (0, i.jsxs)(
                      c.Fragment,
                      { children: [l, a ? null : u] },
                      r
                    );
                  });
            }, [m, x, w, _, g, p]),
            S = (0, a.cx)("chakra-stack", v);
          return (0, i.jsx)(r.m.div, {
            ref: t,
            display: "flex",
            alignItems: u,
            justifyContent: d,
            flexDirection: y,
            flexWrap: h,
            gap: w ? void 0 : f,
            className: S,
            ...b,
            children: k,
          });
        });
      u.displayName = "Stack";
    },
    96886: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return h;
        },
      });
      var r = n(4009),
        i = n(49558),
        o = n(56354),
        a = n(34152),
        s = n(5175),
        l = n(96936),
        c = n(20209);
      function u(e) {
        return (0, c.jsx)(i.J, {
          focusable: "false",
          "aria-hidden": !0,
          ...e,
          children: (0, c.jsx)("path", {
            fill: "currentColor",
            d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z",
          }),
        });
      }
      var d = (0, o.G)(function (e, t) {
        let n = (0, a.mq)("CloseButton", e),
          { children: r, isDisabled: i, __css: o, ...d } = (0, s.Lr)(e);
        return (0,
        c.jsx)(l.m.button, { type: "button", "aria-label": "Close", ref: t, disabled: i, __css: { outline: 0, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, ...n, ...o }, ...d, children: r || (0, c.jsx)(u, { width: "1em", height: "1em" }) });
      });
      d.displayName = "CloseButton";
      var f = n(29408),
        h = (0, o.G)((e, t) => {
          let { onClick: n, className: i, ...o } = e,
            { onClose: a } = (0, r.vR)(),
            s = (0, f.cx)("chakra-modal__close-btn", i),
            l = (0, r.I_)();
          return (0, c.jsx)(d, {
            ref: t,
            __css: l.closeButton,
            className: s,
            onClick: (0, f.v0)(n, (e) => {
              e.stopPropagation(), a();
            }),
            ...o,
          });
        });
      h.displayName = "ModalCloseButton";
    },
    44691: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return c;
        },
      });
      var r = n(4009),
        i = n(29408),
        o = n(56354),
        a = n(96936),
        s = n(83112),
        l = n(20209),
        c = (0, o.G)((e, t) => {
          let { className: n, ...o } = e,
            { headerId: c, setHeaderMounted: u } = (0, r.vR)();
          (0, s.useEffect)(() => (u(!0), () => u(!1)), [u]);
          let d = (0, i.cx)("chakra-modal__header", n),
            f = { flex: 0, ...(0, r.I_)().header };
          return (0, l.jsx)(a.m.header, {
            ref: t,
            className: d,
            id: c,
            ...o,
            __css: f,
          });
        });
      c.displayName = "ModalHeader";
    },
    31938: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return s;
        },
        $: function () {
          return l;
        },
      });
      var r = Object.defineProperty,
        i = (e, t, n) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        o = (e, t, n) => (i(e, "symbol" != typeof t ? t + "" : t, n), n),
        a = n(83112),
        s = new (class {
          add(e) {
            return this.modals.set(e, this.modals.size + 1), this.modals.size;
          }
          remove(e) {
            this.modals.delete(e);
          }
          isTopModal(e) {
            return !!e && this.modals.get(e) === this.modals.size;
          }
          constructor() {
            o(this, "modals"), (this.modals = new Map());
          }
        })();
      function l(e, t) {
        let [n, r] = (0, a.useState)(0);
        return (
          (0, a.useEffect)(() => {
            let n = e.current;
            if (n)
              return (
                t && r(s.add(n)),
                () => {
                  s.remove(n), r(0);
                }
              );
          }, [t, e]),
          n
        );
      }
    },
    10470: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return tr;
        },
      });
      var r,
        i,
        o,
        a = n(96936),
        s = n(43609),
        l = n(29408),
        c = n(95004),
        u = n(45313),
        d = n(83112),
        f = n(20209),
        h = {
          initial: "initial",
          animate: "enter",
          exit: "exit",
          variants: {
            initial: (e) => {
              var t;
              let {
                offsetX: n,
                offsetY: r,
                transition: i,
                transitionEnd: o,
                delay: a,
              } = e;
              return {
                opacity: 0,
                x: n,
                y: r,
                transition:
                  null != (t = null == i ? void 0 : i.exit)
                    ? t
                    : s.p$.exit(s.Sh.exit, a),
                transitionEnd: null == o ? void 0 : o.exit,
              };
            },
            enter: (e) => {
              var t;
              let { transition: n, transitionEnd: r, delay: i } = e;
              return {
                opacity: 1,
                x: 0,
                y: 0,
                transition:
                  null != (t = null == n ? void 0 : n.enter)
                    ? t
                    : s.p$.enter(s.Sh.enter, i),
                transitionEnd: null == r ? void 0 : r.enter,
              };
            },
            exit: (e) => {
              var t;
              let {
                  offsetY: n,
                  offsetX: r,
                  transition: i,
                  transitionEnd: o,
                  reverse: a,
                  delay: l,
                } = e,
                c = { x: r, y: n };
              return {
                opacity: 0,
                transition:
                  null != (t = null == i ? void 0 : i.exit)
                    ? t
                    : s.p$.exit(s.Sh.exit, l),
                ...(a
                  ? { ...c, transitionEnd: null == o ? void 0 : o.exit }
                  : {
                      transitionEnd: { ...c, ...(null == o ? void 0 : o.exit) },
                    }),
              };
            },
          },
        };
      (0, d.forwardRef)(function (e, t) {
        let {
            unmountOnExit: n,
            in: r,
            reverse: i = !0,
            className: o,
            offsetX: a = 0,
            offsetY: s = 8,
            transition: d,
            transitionEnd: p,
            delay: m,
            ...v
          } = e,
          g = !n || (r && n),
          b = r || n ? "enter" : "exit",
          y = {
            offsetX: a,
            offsetY: s,
            reverse: i,
            transition: d,
            transitionEnd: p,
            delay: m,
          };
        return (0,
        f.jsx)(c.M, { custom: y, children: g && (0, f.jsx)(u.E.div, { ref: t, className: (0, l.cx)("chakra-offset-slide", o), custom: y, ...h, animate: b, ...v }) });
      }).displayName = "SlideFade";
      var p = n(97763),
        m = {
          slideInBottom: { ...h, custom: { offsetY: 16, reverse: !0 } },
          slideInRight: { ...h, custom: { offsetX: 16, reverse: !0 } },
          slideInTop: { ...h, custom: { offsetY: -16, reverse: !0 } },
          slideInLeft: { ...h, custom: { offsetX: -16, reverse: !0 } },
          scale: { ...p.Q, custom: { initialScale: 0.95, reverse: !0 } },
          none: {},
        },
        v = (0, a.m)(u.E.section),
        g = (e) => m[e || "none"],
        b = (0, d.forwardRef)((e, t) => {
          let { preset: n, motionProps: r = g(n), ...i } = e;
          return (0, f.jsx)(v, { ref: t, ...r, ...i });
        });
      b.displayName = "ModalTransition";
      var y = n(4009),
        x = n(31938),
        w = n(14973),
        _ = n(54080),
        k = "data-focus-lock",
        S = "data-focus-lock-disabled",
        P = n(89002),
        j = {
          width: "1px",
          height: "0px",
          padding: 0,
          overflow: "hidden",
          position: "fixed",
          top: "1px",
          left: "1px",
        },
        E = n(50590),
        A = (0, E.s)({}, function (e) {
          return { target: e.target, currentTarget: e.currentTarget };
        }),
        C = (0, E.s)(),
        M = (0, E.s)(),
        z = (0, E._)({ async: !0, ssr: "undefined" != typeof document }),
        R = (0, d.createContext)(void 0),
        I = [],
        T = d.forwardRef(function (e, t) {
          var n,
            r = d.useState(),
            i = r[0],
            o = r[1],
            a = d.useRef(),
            s = d.useRef(!1),
            l = d.useRef(null),
            c = d.useState({})[1],
            u = e.children,
            f = e.disabled,
            h = void 0 !== f && f,
            p = e.noFocusGuards,
            m = void 0 !== p && p,
            v = e.persistentFocus,
            g = e.crossFrame,
            b = e.autoFocus,
            y = (e.allowTextSelection, e.group),
            x = e.className,
            w = e.whiteList,
            E = e.hasPositiveIndices,
            M = e.shards,
            T = void 0 === M ? I : M,
            O = e.as,
            B = e.lockProps,
            L = e.sideCar,
            D = e.returnFocus,
            N = void 0 !== D && D,
            F = e.focusOptions,
            U = e.onActivation,
            G = e.onDeactivation,
            q = d.useState({})[0],
            W = d.useCallback(
              function (e) {
                var t = e.captureFocusRestore;
                if (!l.current) {
                  var n,
                    r = null == (n = document) ? void 0 : n.activeElement;
                  (l.current = r), r !== document.body && (l.current = t(r));
                }
                a.current && U && U(a.current), (s.current = !0), c();
              },
              [U]
            ),
            H = d.useCallback(
              function () {
                (s.current = !1), G && G(a.current), c();
              },
              [G]
            ),
            $ = d.useCallback(
              function (e) {
                var t = l.current;
                if (t) {
                  var n = ("function" == typeof t ? t() : t) || document.body,
                    r = "function" == typeof N ? N(n) : N;
                  if (r) {
                    var i = "object" == typeof r ? r : void 0;
                    (l.current = null),
                      e
                        ? Promise.resolve().then(function () {
                            return n.focus(i);
                          })
                        : n.focus(i);
                  }
                }
              },
              [N]
            ),
            X = d.useCallback(function (e) {
              s.current && A.useMedium(e);
            }, []),
            V = C.useMedium,
            Y = d.useCallback(function (e) {
              a.current !== e && ((a.current = e), o(e));
            }, []),
            Z = (0, _.Z)(
              (((n = {})[S] = h && "disabled"), (n[k] = y), n),
              void 0 === B ? {} : B
            ),
            Q = !0 !== m,
            K = Q && "tail" !== m,
            J = (0, P.q)([t, Y]),
            ee = d.useMemo(
              function () {
                return {
                  observed: a,
                  shards: T,
                  enabled: !h,
                  active: s.current,
                };
              },
              [h, s.current, T, i]
            );
          return d.createElement(
            d.Fragment,
            null,
            Q && [
              d.createElement("div", {
                key: "guard-first",
                "data-focus-guard": !0,
                tabIndex: h ? -1 : 0,
                style: j,
              }),
              E
                ? d.createElement("div", {
                    key: "guard-nearest",
                    "data-focus-guard": !0,
                    tabIndex: h ? -1 : 1,
                    style: j,
                  })
                : null,
            ],
            !h &&
              d.createElement(L, {
                id: q,
                sideCar: z,
                observed: i,
                disabled: h,
                persistentFocus: void 0 !== v && v,
                crossFrame: void 0 === g || g,
                autoFocus: void 0 === b || b,
                whiteList: w,
                shards: T,
                onActivation: W,
                onDeactivation: H,
                returnFocus: $,
                focusOptions: F,
              }),
            d.createElement(
              void 0 === O ? "div" : O,
              (0, _.Z)({ ref: J }, Z, { className: x, onBlur: V, onFocus: X }),
              d.createElement(R.Provider, { value: ee }, u)
            ),
            K &&
              d.createElement("div", {
                "data-focus-guard": !0,
                tabIndex: h ? -1 : 0,
                style: j,
              })
          );
        });
      T.propTypes = {};
      var O = n(81382),
        B = n(88381),
        L = function (e) {
          for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
          return t;
        },
        D = function (e) {
          return Array.isArray(e) ? e : [e];
        },
        N = function (e) {
          return Array.isArray(e) ? e[0] : e;
        },
        F = function (e) {
          if (e.nodeType !== Node.ELEMENT_NODE) return !1;
          var t = window.getComputedStyle(e, null);
          return (
            !!t &&
            !!t.getPropertyValue &&
            ("none" === t.getPropertyValue("display") ||
              "hidden" === t.getPropertyValue("visibility"))
          );
        },
        U = function (e) {
          return e.parentNode &&
            e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
            ? e.parentNode.host
            : e.parentNode;
        },
        G = function (e) {
          return e === document || (e && e.nodeType === Node.DOCUMENT_NODE);
        },
        q = function (e, t) {
          var n,
            r = e.get(t);
          if (void 0 !== r) return r;
          var i =
            ((n = q.bind(void 0, e)),
            !t || G(t) || (!F(t) && !t.hasAttribute("inert") && n(U(t))));
          return e.set(t, i), i;
        },
        W = function (e, t) {
          var n,
            r = e.get(t);
          if (void 0 !== r) return r;
          var i =
            ((n = W.bind(void 0, e)), !t || !!G(t) || (!!V(t) && n(U(t))));
          return e.set(t, i), i;
        },
        H = function (e) {
          return e.dataset;
        },
        $ = function (e) {
          return "INPUT" === e.tagName;
        },
        X = function (e) {
          return $(e) && "radio" === e.type;
        },
        V = function (e) {
          return ![!0, "true", ""].includes(
            e.getAttribute("data-no-autofocus")
          );
        },
        Y = function (e) {
          var t;
          return !!(
            e && (null === (t = H(e)) || void 0 === t ? void 0 : t.focusGuard)
          );
        },
        Z = function (e) {
          return !Y(e);
        },
        Q = function (e) {
          return !!e;
        },
        K = function (e, t) {
          var n = Math.max(0, e.tabIndex),
            r = Math.max(0, t.tabIndex),
            i = n - r,
            o = e.index - t.index;
          if (i) {
            if (!n) return 1;
            if (!r) return -1;
          }
          return i || o;
        },
        J = function (e, t, n) {
          return L(e)
            .map(function (e, t) {
              var r =
                e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
              return {
                node: e,
                index: t,
                tabIndex:
                  n && -1 === r ? ((e.dataset || {}).focusGuard ? 0 : -1) : r,
              };
            })
            .filter(function (e) {
              return !t || e.tabIndex >= 0;
            })
            .sort(K);
        },
        ee =
          "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]",
        et = "".concat(ee, ", [data-focus-guard]"),
        en = function (e, t) {
          return L((e.shadowRoot || e).children).reduce(function (e, n) {
            return e.concat(n.matches(t ? et : ee) ? [n] : [], en(n));
          }, []);
        },
        er = function (e, t) {
          var n;
          return e instanceof HTMLIFrameElement &&
            (null === (n = e.contentDocument) || void 0 === n ? void 0 : n.body)
            ? ei([e.contentDocument.body], t)
            : [e];
        },
        ei = function (e, t) {
          return e.reduce(function (e, n) {
            var r,
              i = en(n, t),
              o = (r = []).concat.apply(
                r,
                i.map(function (e) {
                  return er(e, t);
                })
              );
            return e.concat(
              o,
              n.parentNode
                ? L(n.parentNode.querySelectorAll(ee)).filter(function (e) {
                    return e === n;
                  })
                : []
            );
          }, []);
        },
        eo = function (e, t) {
          return L(e)
            .filter(function (e) {
              return q(t, e);
            })
            .filter(function (e) {
              return !(
                ($(e) || "BUTTON" === e.tagName) &&
                ("hidden" === e.type || e.disabled)
              );
            });
        },
        ea = function (e, t) {
          return (
            void 0 === t && (t = new Map()),
            L(e).filter(function (e) {
              return W(t, e);
            })
          );
        },
        es = function (e, t, n) {
          return J(eo(ei(e, n), t), !0, n);
        },
        el = function (e, t) {
          return J(eo(ei(e), t), !1);
        },
        ec = function (e, t) {
          return e.shadowRoot
            ? ec(e.shadowRoot, t)
            : !!(
                void 0 !== Object.getPrototypeOf(e).contains &&
                Object.getPrototypeOf(e).contains.call(e, t)
              ) ||
                L(e.children).some(function (e) {
                  var n;
                  if (e instanceof HTMLIFrameElement) {
                    var r =
                      null === (n = e.contentDocument) || void 0 === n
                        ? void 0
                        : n.body;
                    return !!r && ec(r, t);
                  }
                  return ec(e, t);
                });
        },
        eu = function (e) {
          try {
            return e();
          } catch (e) {
            return;
          }
        },
        ed = function (e) {
          if ((void 0 === e && (e = document), e && e.activeElement)) {
            var t = e.activeElement;
            return t.shadowRoot
              ? ed(t.shadowRoot)
              : t instanceof HTMLIFrameElement &&
                eu(function () {
                  return t.contentWindow.document;
                })
              ? ed(t.contentWindow.document)
              : t;
          }
        },
        ef = function (e) {
          void 0 === e && (e = document);
          var t = ed(e);
          return (
            !!t &&
            L(e.querySelectorAll("[".concat("data-no-focus-lock", "]"))).some(
              function (e) {
                return ec(e, t);
              }
            )
          );
        },
        eh = function (e) {
          for (var t = new Set(), n = e.length, r = 0; r < n; r += 1)
            for (var i = r + 1; i < n; i += 1) {
              var o = e[r].compareDocumentPosition(e[i]);
              (o & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(i),
                (o & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
            }
          return e.filter(function (e, n) {
            return !t.has(n);
          });
        },
        ep = function (e) {
          return e.parentNode ? ep(e.parentNode) : e;
        },
        em = function (e) {
          return D(e)
            .filter(Boolean)
            .reduce(function (e, t) {
              var n = t.getAttribute(k);
              return (
                e.push.apply(
                  e,
                  n
                    ? eh(
                        L(
                          ep(t).querySelectorAll(
                            "["
                              .concat(k, '="')
                              .concat(n, '"]:not([')
                              .concat(S, '="disabled"])')
                          )
                        )
                      )
                    : [t]
                ),
                e
              );
            }, []);
        },
        ev = function (e, t) {
          return (
            void 0 === t && (t = ed(N(e).ownerDocument)),
            !!t &&
              (!t.dataset || !t.dataset.focusGuard) &&
              em(e).some(function (e) {
                var n;
                return (
                  ec(e, t) ||
                  ((n = t),
                  !!L(e.querySelectorAll("iframe")).some(function (e) {
                    return e === n;
                  }))
                );
              })
          );
        },
        eg = function (e, t) {
          e &&
            ("focus" in e && e.focus(t),
            "contentWindow" in e && e.contentWindow && e.contentWindow.focus());
        },
        eb = function (e, t) {
          return (
            (X(e) &&
              e.name &&
              t
                .filter(X)
                .filter(function (t) {
                  return t.name === e.name;
                })
                .filter(function (e) {
                  return e.checked;
                })[0]) ||
            e
          );
        },
        ey = function (e) {
          var t = new Set();
          return (
            e.forEach(function (n) {
              return t.add(eb(n, e));
            }),
            e.filter(function (e) {
              return t.has(e);
            })
          );
        },
        ex = function (e) {
          return e[0] && e.length > 1 ? eb(e[0], e) : e[0];
        },
        ew = function (e, t) {
          return e.indexOf(eb(t, e));
        },
        e_ = "NEW_FOCUS",
        ek = function (e, t, n, r, i) {
          var o = e.length,
            a = e[0],
            s = e[o - 1],
            l = Y(r);
          if (!(r && e.indexOf(r) >= 0)) {
            var c = void 0 !== r ? n.indexOf(r) : -1,
              u = i ? n.indexOf(i) : c,
              d = i ? e.indexOf(i) : -1;
            if (-1 === c) return -1 !== d ? d : e_;
            if (-1 === d) return e_;
            var f = c - u,
              h = n.indexOf(a),
              p = n.indexOf(s),
              m = ey(n),
              v = (void 0 !== r ? m.indexOf(r) : -1) - (i ? m.indexOf(i) : c);
            if ((!f && d >= 0) || 0 === t.length) return d;
            var g = ew(e, t[0]),
              b = ew(e, t[t.length - 1]);
            if (c <= h && l && Math.abs(f) > 1) return b;
            if (c >= p && l && Math.abs(f) > 1) return g;
            if (f && Math.abs(v) > 1) return d;
            if (c <= h) return b;
            if (c > p) return g;
            if (f) return Math.abs(f) > 1 ? d : (o + d + f) % o;
          }
        },
        eS = function (e, t, n) {
          var r = ea(
            e
              .map(function (e) {
                return e.node;
              })
              .filter(function (e) {
                var t,
                  r =
                    null === (t = H(e)) || void 0 === t ? void 0 : t.autofocus;
                return (
                  e.autofocus ||
                  (void 0 !== r && "false" !== r) ||
                  n.indexOf(e) >= 0
                );
              })
          );
          return r && r.length ? ex(r) : ex(ea(t));
        },
        eP = function (e, t) {
          return (
            void 0 === t && (t = []),
            t.push(e),
            e.parentNode && eP(e.parentNode.host || e.parentNode, t),
            t
          );
        },
        ej = function (e, t) {
          for (var n = eP(e), r = eP(t), i = 0; i < n.length; i += 1) {
            var o = n[i];
            if (r.indexOf(o) >= 0) return o;
          }
          return !1;
        },
        eE = function (e, t, n) {
          var r = D(e),
            i = D(t),
            o = r[0],
            a = !1;
          return (
            i.filter(Boolean).forEach(function (e) {
              (a = ej(a || e, e) || a),
                n.filter(Boolean).forEach(function (e) {
                  var t = ej(o, e);
                  t && (a = !a || ec(t, a) ? t : ej(t, a));
                });
            }),
            a
          );
        },
        eA = function (e, t) {
          return e.reduce(function (e, n) {
            return e.concat(
              eo(
                L(n.querySelectorAll("[".concat("data-autofocus-inside", "]")))
                  .map(function (e) {
                    return ei([e]);
                  })
                  .reduce(function (e, t) {
                    return e.concat(t);
                  }, []),
                t
              )
            );
          }, []);
        },
        eC = function (e, t) {
          var n = new Map();
          return (
            t.forEach(function (e) {
              return n.set(e.node, e);
            }),
            e
              .map(function (e) {
                return n.get(e);
              })
              .filter(Q)
          );
        },
        eM = function (e, t) {
          var n = ed(D(e).length > 0 ? document : N(e).ownerDocument),
            r = em(e).filter(Z),
            i = eE(n || e, e, r),
            o = new Map(),
            a = el(r, o),
            s = a.filter(function (e) {
              return Z(e.node);
            });
          if (s[0]) {
            var l = el([i], o).map(function (e) {
                return e.node;
              }),
              c = eC(l, s),
              u = c.map(function (e) {
                return e.node;
              }),
              d = c
                .filter(function (e) {
                  return e.tabIndex >= 0;
                })
                .map(function (e) {
                  return e.node;
                }),
              f = ek(u, d, l, n, t);
            if (f === e_) {
              var h = eS(a, d, eA(r, o)) || eS(a, u, eA(r, o));
              return h
                ? { node: h }
                : void console.warn(
                    "focus-lock: cannot find any node to move focus into"
                  );
            }
            return void 0 === f ? f : c[f];
          }
        },
        ez = 0,
        eR = !1,
        eI = function (e, t, n) {
          void 0 === n && (n = {});
          var r = eM(e, t);
          if (!eR && r) {
            if (ez > 2) {
              console.error(
                "FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"
              ),
                (eR = !0),
                setTimeout(function () {
                  eR = !1;
                }, 1);
              return;
            }
            ez++, eg(r.node, n.focusOptions), ez--;
          }
        },
        eT = function (e) {
          var t = em(e).filter(Z),
            n = J(ei([eE(e, e, t)], !0), !0, !0),
            r = ei(t, !1);
          return n.map(function (e) {
            var t = e.node;
            return {
              node: t,
              index: e.index,
              lockItem: r.indexOf(t) >= 0,
              guard: Y(t),
            };
          });
        },
        eO = function (e, t, n) {
          if (!e || !t) return console.error("no element or scope given"), {};
          var r = D(t);
          if (
            r.every(function (t) {
              return !ec(t, e);
            })
          )
            return (
              console.error("Active element is not contained in the scope"), {}
            );
          var i = n ? es(r, new Map()) : el(r, new Map()),
            o = i.findIndex(function (t) {
              return t.node === e;
            });
          if (-1 !== o)
            return {
              prev: i[o - 1],
              next: i[o + 1],
              first: i[0],
              last: i[i.length - 1],
            };
        },
        eB = function (e, t) {
          var n = t ? es(D(e), new Map()) : el(D(e), new Map());
          return { first: n[0], last: n[n.length - 1] };
        },
        eL = function (e, t, n) {
          void 0 === t && (t = {});
          var r,
            i =
              ((r = t),
              Object.assign(
                { scope: document.body, cycle: !0, onlyTabbable: !0 },
                r
              )),
            o = eO(e, i.scope, i.onlyTabbable);
          if (o) {
            var a = n(o, i.cycle);
            a && eg(a.node, i.focusOptions);
          }
        },
        eD = function (e, t, n) {
          var r,
            i = eB(e, null === (r = t.onlyTabbable) || void 0 === r || r)[n];
          i && eg(i.node, t.focusOptions);
        };
      function eN(e) {
        if (!e) return null;
        if ("undefined" == typeof WeakRef)
          return function () {
            return e || null;
          };
        var t = e ? new WeakRef(e) : null;
        return function () {
          return (null == t ? void 0 : t.deref()) || null;
        };
      }
      var eF = function (e) {
          if (!e) return null;
          for (var t = [], n = e; n && n !== document.body; )
            t.push({
              current: eN(n),
              parent: eN(n.parentElement),
              left: eN(n.previousElementSibling),
              right: eN(n.nextElementSibling),
            }),
              (n = n.parentElement);
          return { element: eN(e), stack: t, ownerDocument: e.ownerDocument };
        },
        eU = function (e) {
          if (e)
            for (
              var t,
                n,
                r,
                i,
                o,
                a = e.stack,
                s = e.ownerDocument,
                l = new Map(),
                c = 0;
              c < a.length;
              c++
            ) {
              var u = a[c],
                d =
                  null === (t = u.parent) || void 0 === t ? void 0 : t.call(u);
              if (d && s.contains(d)) {
                for (
                  var f =
                      null === (n = u.left) || void 0 === n
                        ? void 0
                        : n.call(u),
                    h = u.current(),
                    p = d.contains(h) ? h : void 0,
                    m =
                      null === (r = u.right) || void 0 === r
                        ? void 0
                        : r.call(u),
                    v = es([d], l),
                    g =
                      null !==
                        (o =
                          null !==
                            (i =
                              null != p
                                ? p
                                : null == f
                                ? void 0
                                : f.nextElementSibling) && void 0 !== i
                            ? i
                            : m) && void 0 !== o
                        ? o
                        : f;
                  g;

                ) {
                  for (var b = 0; b < v.length; b++) {
                    var y = v[b];
                    if (null == g ? void 0 : g.contains(y.node)) return y.node;
                  }
                  g = g.nextElementSibling;
                }
                if (v.length) return v[0].node;
              }
            }
        };
      function eG(e) {
        setTimeout(e, 1);
      }
      var eq = function (e) {
          return e && "current" in e ? e.current : e;
        },
        eW = null,
        eH = null,
        e$ = null,
        eX = !1,
        eV = function (e, t) {
          e$ = { observerNode: e, portaledElement: t };
        };
      function eY(e, t, n, r) {
        var i = null,
          o = e;
        do {
          var a = r[o];
          if (a.guard) a.node.dataset.focusAutoGuard && (i = a);
          else if (a.lockItem) {
            if (o !== e) return;
            i = null;
          } else break;
        } while ((o += n) !== t);
        i && (i.node.tabIndex = 0);
      }
      var eZ = function () {
          var e = !1;
          if (eW) {
            var t = eW,
              n = t.observed,
              r = t.persistentFocus,
              i = t.autoFocus,
              o = t.shards,
              a = t.crossFrame,
              s = t.focusOptions,
              l = n || (e$ && e$.portaledElement),
              c = document && document.activeElement;
            if (l) {
              var u = [l].concat(o.map(eq).filter(Boolean));
              if (
                ((!c ||
                  (
                    eW.whiteList ||
                    function () {
                      return !0;
                    }
                  )(c)) &&
                  (r ||
                    (a ? !!eX : "meanwhile" === eX) ||
                    !(
                      (document && document.activeElement === document.body) ||
                      ef()
                    ) ||
                    (!eH && i)) &&
                  (l &&
                    !(
                      ev(u) ||
                      (c &&
                        u.some(function (e) {
                          return (function e(t, n, r) {
                            return (
                              n &&
                              ((n.host === t &&
                                (!n.activeElement ||
                                  r.contains(n.activeElement))) ||
                                (n.parentNode && e(t, n.parentNode, r)))
                            );
                          })(c, e, e);
                        })) ||
                      (e$ && e$.portaledElement === c)
                    ) &&
                    (document && !eH && c && !i
                      ? (c.blur && c.blur(), document.body.focus())
                      : ((e = eI(u, eH, { focusOptions: s })), (e$ = {}))),
                  (eX = !1),
                  (eH = document && document.activeElement)),
                document &&
                  c !== document.activeElement &&
                  document.querySelector("[data-focus-auto-guard]"))
              ) {
                var d = document && document.activeElement,
                  f = eT(u),
                  h = f
                    .map(function (e) {
                      return e.node;
                    })
                    .indexOf(d);
                h > -1 &&
                  (f
                    .filter(function (e) {
                      var t = e.guard,
                        n = e.node;
                      return t && n.dataset.focusAutoGuard;
                    })
                    .forEach(function (e) {
                      return e.node.removeAttribute("tabIndex");
                    }),
                  eY(h, f.length, 1, f),
                  eY(h, -1, -1, f));
              }
            }
          }
          return e;
        },
        eQ = function (e) {
          eZ() && e && (e.stopPropagation(), e.preventDefault());
        },
        eK = function () {
          return eG(eZ);
        },
        eJ = function () {
          (eX = "just"),
            eG(function () {
              eX = "meanwhile";
            });
        },
        e0 = function () {
          document.addEventListener("focusin", eQ),
            document.addEventListener("focusout", eK),
            window.addEventListener("blur", eJ);
        },
        e1 = function () {
          document.removeEventListener("focusin", eQ),
            document.removeEventListener("focusout", eK),
            window.removeEventListener("blur", eJ);
        },
        e2 = {
          moveFocusInside: eI,
          focusInside: ev,
          focusNextElement: function (e, t) {
            void 0 === t && (t = {}),
              eL(e, t, function (e, t) {
                var n = e.next,
                  r = e.first;
                return n || (t && r);
              });
          },
          focusPrevElement: function (e, t) {
            void 0 === t && (t = {}),
              eL(e, t, function (e, t) {
                var n = e.prev,
                  r = e.last;
                return n || (t && r);
              });
          },
          focusFirstElement: function (e, t) {
            void 0 === t && (t = {}), eD(e, t, "first");
          },
          focusLastElement: function (e, t) {
            void 0 === t && (t = {}), eD(e, t, "last");
          },
          captureFocusRestore: function (e) {
            var t = eF(e);
            return function () {
              return eU(t);
            };
          },
        };
      A.assignSyncMedium(function (e) {
        var t = e.target,
          n = e.currentTarget;
        n.contains(t) || eV(n, t);
      }),
        C.assignMedium(eK),
        M.assignMedium(function (e) {
          return e(e2);
        });
      var e5 = ((r = function (e) {
          return e.filter(function (e) {
            return !e.disabled;
          });
        }),
        (i = function (e) {
          var t = e.slice(-1)[0];
          t && !eW && e0();
          var n = eW,
            r = n && t && t.id === n.id;
          (eW = t),
            !n ||
              r ||
              (n.onDeactivation(),
              e.filter(function (e) {
                return e.id === n.id;
              }).length || n.returnFocus(!t)),
            t
              ? ((eH = null),
                (r && n.observed === t.observed) || t.onActivation(e2),
                eZ(!0),
                eG(eZ))
              : (e1(), (eH = null));
        }),
        function (e) {
          var t,
            n = [];
          function o() {
            i(
              (t = r(
                n.map(function (e) {
                  return e.props;
                })
              ))
            );
          }
          var a = (function (r) {
            function i() {
              return r.apply(this, arguments) || this;
            }
            (0, O.Z)(i, r),
              (i.peek = function () {
                return t;
              });
            var a = i.prototype;
            return (
              (a.componentDidMount = function () {
                n.push(this), o();
              }),
              (a.componentDidUpdate = function () {
                o();
              }),
              (a.componentWillUnmount = function () {
                var e = n.indexOf(this);
                n.splice(e, 1), o();
              }),
              (a.render = function () {
                return d.createElement(e, this.props);
              }),
              i
            );
          })(d.PureComponent);
          return (
            (0, B.Z)(
              a,
              "displayName",
              "SideEffect(" + (e.displayName || e.name || "Component") + ")"
            ),
            a
          );
        })(function () {
          return null;
        }),
        e3 = d.forwardRef(function (e, t) {
          return d.createElement(T, (0, _.Z)({ sideCar: e5, ref: t }, e));
        }),
        e8 = T.propTypes || {};
      e8.sideCar, (0, w.Z)(e8, ["sideCar"]), (e3.propTypes = {});
      var e4 = (e) => e.hasAttribute("tabindex"),
        e9 = (e) => e.offsetWidth > 0 && e.offsetHeight > 0,
        e6 = null != (o = e3.default) ? o : e3,
        e7 = (e) => {
          let {
              initialFocusRef: t,
              finalFocusRef: n,
              contentRef: r,
              restoreFocus: i,
              children: o,
              isDisabled: a,
              autoFocus: s,
              persistentFocus: l,
              lockFocusAcrossFrames: c,
            } = e,
            u = (0, d.useCallback)(() => {
              (null == t ? void 0 : t.current)
                ? t.current.focus()
                : (null == r ? void 0 : r.current) &&
                  0 ===
                    (function (e) {
                      let t = Array.from(
                        e.querySelectorAll(
                          "input:not(:disabled):not([disabled]),select:not(:disabled):not([disabled]),textarea:not(:disabled):not([disabled]),embed,iframe,object,a[href],area[href],button:not(:disabled):not([disabled]),[tabindex],audio[controls],video[controls],*[tabindex]:not([aria-disabled]),*[contenteditable]"
                        )
                      );
                      return (
                        t.unshift(e),
                        t.filter(
                          (e) =>
                            (function (e) {
                              var t;
                              if (
                                !(function (e) {
                                  var t;
                                  if (
                                    !(
                                      null != e &&
                                      "object" == typeof e &&
                                      "nodeType" in e &&
                                      e.nodeType === Node.ELEMENT_NODE
                                    )
                                  )
                                    return !1;
                                  let n =
                                    null != (t = e.ownerDocument.defaultView)
                                      ? t
                                      : window;
                                  return e instanceof n.HTMLElement;
                                })(e) ||
                                (function e(t) {
                                  return (
                                    !!(t.parentElement && e(t.parentElement)) ||
                                    t.hidden
                                  );
                                })(e) ||
                                !0 == !!(t = e).getAttribute("disabled") ||
                                !0 == !!t.getAttribute("aria-disabled")
                              )
                                return !1;
                              let { localName: n } = e;
                              if (
                                [
                                  "input",
                                  "select",
                                  "textarea",
                                  "button",
                                ].indexOf(n) >= 0
                              )
                                return !0;
                              let r = {
                                a: () => e.hasAttribute("href"),
                                audio: () => e.hasAttribute("controls"),
                                video: () => e.hasAttribute("controls"),
                              };
                              return n in r
                                ? r[n]()
                                : !!(function (e) {
                                    let t = e.getAttribute("contenteditable");
                                    return "false" !== t && null != t;
                                  })(e) || e4(e);
                            })(e) && e9(e)
                        )
                      );
                    })(r.current).length &&
                  requestAnimationFrame(() => {
                    var e;
                    null == (e = r.current) || e.focus();
                  });
            }, [t, r]),
            h = (0, d.useCallback)(() => {
              var e;
              null == (e = null == n ? void 0 : n.current) || e.focus();
            }, [n]),
            p = i && !n;
          return (0, f.jsx)(e6, {
            crossFrame: c,
            persistentFocus: l,
            autoFocus: s,
            disabled: a,
            onActivation: u,
            onDeactivation: h,
            returnFocus: p,
            children: o,
          });
        };
      e7.displayName = "FocusLock";
      var te = n(44009),
        tt = n(8777);
      function tn(e) {
        let {
            autoFocus: t,
            trapFocus: n,
            dialogRef: r,
            initialFocusRef: i,
            blockScrollOnMount: o,
            allowPinchZoom: a,
            finalFocusRef: s,
            returnFocusOnClose: l,
            preserveScrollBarGap: c,
            lockFocusAcrossFrames: u,
            isOpen: h,
          } = (0, y.vR)(),
          [p, m] = (0, te.oO)();
        (0, d.useEffect)(() => {
          !p && m && setTimeout(m);
        }, [p, m]);
        let v = (0, x.$)(r, h);
        return (0, f.jsx)(e7, {
          autoFocus: t,
          isDisabled: !n,
          initialFocusRef: i,
          finalFocusRef: s,
          restoreFocus: l,
          contentRef: r,
          lockFocusAcrossFrames: u,
          children: (0, f.jsx)(tt.Z, {
            removeScrollBar: !c,
            allowPinchZoom: a,
            enabled: 1 === v && o,
            forwardProps: !0,
            children: e.children,
          }),
        });
      }
      var tr = (0, n(56354).G)((e, t) => {
        let {
            className: n,
            children: r,
            containerProps: i,
            motionProps: o,
            ...s
          } = e,
          { getDialogProps: c, getDialogContainerProps: u } = (0, y.vR)(),
          d = c(s, t),
          h = u(i),
          p = (0, l.cx)("chakra-modal__content", n),
          m = (0, y.I_)(),
          v = {
            display: "flex",
            flexDirection: "column",
            position: "relative",
            width: "100%",
            outline: 0,
            ...m.dialog,
          },
          g = {
            display: "flex",
            width: "100vw",
            height: "$100vh",
            position: "fixed",
            left: 0,
            top: 0,
            ...m.dialogContainer,
          },
          { motionPreset: x } = (0, y.vR)();
        return (0, f.jsx)(tn, {
          children: (0, f.jsx)(a.m.div, {
            ...h,
            className: "chakra-modal__content-container",
            tabIndex: -1,
            __css: g,
            children: (0, f.jsx)(b, {
              preset: x,
              motionProps: o,
              className: p,
              ...d,
              __css: v,
              children: r,
            }),
          }),
        });
      });
      tr.displayName = "ModalContent";
    },
    89364: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var r = n(4009),
        i = n(29408),
        o = n(96936),
        a = n(56354),
        s = n(43609),
        l = n(95004),
        c = n(45313),
        u = n(83112),
        d = n(20209),
        f = {
          initial: "exit",
          animate: "enter",
          exit: "exit",
          variants: {
            enter: function () {
              var e;
              let {
                transition: t,
                transitionEnd: n,
                delay: r,
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
              return {
                opacity: 1,
                transition:
                  null != (e = null == t ? void 0 : t.enter)
                    ? e
                    : s.p$.enter(s.Sh.enter, r),
                transitionEnd: null == n ? void 0 : n.enter,
              };
            },
            exit: function () {
              var e;
              let {
                transition: t,
                transitionEnd: n,
                delay: r,
              } = arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
              return {
                opacity: 0,
                transition:
                  null != (e = null == t ? void 0 : t.exit)
                    ? e
                    : s.p$.exit(s.Sh.exit, r),
                transitionEnd: null == n ? void 0 : n.exit,
              };
            },
          },
        };
      (0, u.forwardRef)(function (e, t) {
        let {
            unmountOnExit: n,
            in: r,
            className: o,
            transition: a,
            transitionEnd: s,
            delay: u,
            ...h
          } = e,
          p = r || n ? "enter" : "exit",
          m = !n || (r && n),
          v = { transition: a, transitionEnd: s, delay: u };
        return (0,
        d.jsx)(l.M, { custom: v, children: m && (0, d.jsx)(c.E.div, { ref: t, className: (0, i.cx)("chakra-fade", o), custom: v, ...f, animate: p, ...h }) });
      }).displayName = "Fade";
      var h = (0, o.m)(c.E.div),
        p = (0, a.G)((e, t) => {
          let { className: n, transition: o, motionProps: a, ...s } = e,
            l = (0, i.cx)("chakra-modal__overlay", n),
            c = {
              pos: "fixed",
              left: "0",
              top: "0",
              w: "100vw",
              h: "100vh",
              ...(0, r.I_)().overlay,
            },
            { motionPreset: u } = (0, r.vR)(),
            p = "none" === u ? {} : f;
          return (0, d.jsx)(h, {
            ...(a || p),
            __css: c,
            ref: t,
            className: l,
            ...s,
          });
        });
      p.displayName = "ModalOverlay";
    },
    4009: function (e, t, n) {
      "use strict";
      n.d(t, {
        u_: function () {
          return E;
        },
        vR: function () {
          return j;
        },
        I_: function () {
          return S;
        },
      });
      var r = n(31938),
        i = n(29408),
        o = n(30735),
        a = n(81333),
        s = n(83112),
        l = n(84102),
        c = n(20209),
        [u, d] = (0, l.k)({ strict: !1, name: "PortalManagerContext" }),
        f = n(25032),
        h = n(32017),
        [p, m] = (0, l.k)({ strict: !1, name: "PortalContext" }),
        v = "chakra-portal",
        g = (e) =>
          (0, c.jsx)("div", {
            className: "chakra-portal-zIndex",
            style: {
              position: "absolute",
              zIndex: e.zIndex,
              top: 0,
              left: 0,
              right: 0,
            },
            children: e.children,
          }),
        b = (e) => {
          let { appendToParentPortal: t, children: n } = e,
            [r, i] = (0, s.useState)(null),
            o = (0, s.useRef)(null),
            [, a] = (0, s.useState)({});
          (0, s.useEffect)(() => a({}), []);
          let l = m(),
            u = d();
          (0, f.G)(() => {
            if (!r) return;
            let e = r.ownerDocument,
              n = t && null != l ? l : e.body;
            if (!n) return;
            (o.current = e.createElement("div")),
              (o.current.className = v),
              n.appendChild(o.current),
              a({});
            let i = o.current;
            return () => {
              n.contains(i) && n.removeChild(i);
            };
          }, [r]);
          let b = (null == u ? void 0 : u.zIndex)
            ? (0, c.jsx)(g, {
                zIndex: null == u ? void 0 : u.zIndex,
                children: n,
              })
            : n;
          return o.current
            ? (0, h.createPortal)(
                (0, c.jsx)(p, { value: o.current, children: b }),
                o.current
              )
            : (0, c.jsx)("span", {
                ref: (e) => {
                  e && i(e);
                },
              });
        },
        y = (e) => {
          let { children: t, containerRef: n, appendToParentPortal: r } = e,
            i = n.current,
            o =
              null != i
                ? i
                : "undefined" != typeof window
                ? document.body
                : void 0,
            a = (0, s.useMemo)(() => {
              let e = null == i ? void 0 : i.ownerDocument.createElement("div");
              return e && (e.className = v), e;
            }, [i]),
            [, l] = (0, s.useState)({});
          return ((0, f.G)(() => l({}), []),
          (0, f.G)(() => {
            if (a && o)
              return (
                o.appendChild(a),
                () => {
                  o.removeChild(a);
                }
              );
          }, [a, o]),
          o && a)
            ? (0, h.createPortal)(
                (0, c.jsx)(p, { value: r ? a : null, children: t }),
                a
              )
            : null;
        };
      function x(e) {
        let { containerRef: t, ...n } = { appendToParentPortal: !0, ...e };
        return t
          ? (0, c.jsx)(y, { containerRef: t, ...n })
          : (0, c.jsx)(b, { ...n });
      }
      (x.className = v),
        (x.selector = ".chakra-portal"),
        (x.displayName = "Portal");
      var w = n(34152),
        _ = n(95004),
        [k, S] = (0, l.k)({
          name: "ModalStylesContext",
          errorMessage:
            "useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Modal />\" ",
        }),
        [P, j] = (0, l.k)({
          strict: !0,
          name: "ModalContext",
          errorMessage:
            "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`",
        }),
        E = (e) => {
          let t = {
              scrollBehavior: "outside",
              autoFocus: !0,
              trapFocus: !0,
              returnFocusOnClose: !0,
              blockScrollOnMount: !0,
              allowPinchZoom: !1,
              motionPreset: "scale",
              lockFocusAcrossFrames: !0,
              ...e,
            },
            {
              portalProps: n,
              children: l,
              autoFocus: u,
              trapFocus: d,
              initialFocusRef: f,
              finalFocusRef: h,
              returnFocusOnClose: p,
              blockScrollOnMount: m,
              allowPinchZoom: v,
              preserveScrollBarGap: g,
              motionPreset: b,
              lockFocusAcrossFrames: y,
              onCloseComplete: S,
            } = t,
            j = (0, w.jC)("Modal", t),
            E = {
              ...(function (e) {
                let {
                    isOpen: t,
                    onClose: n,
                    id: l,
                    closeOnOverlayClick: c = !0,
                    closeOnEsc: u = !0,
                    useInert: d = !0,
                    onOverlayClick: f,
                    onEsc: h,
                  } = e,
                  p = (0, s.useRef)(null),
                  m = (0, s.useRef)(null),
                  [v, g, b] = (function (e) {
                    for (
                      var t = arguments.length,
                        n = Array(t > 1 ? t - 1 : 0),
                        r = 1;
                      r < t;
                      r++
                    )
                      n[r - 1] = arguments[r];
                    let i = (0, s.useId)(),
                      o = e || i;
                    return (0, s.useMemo)(
                      () => n.map((e) => "".concat(e, "-").concat(o)),
                      [o, n]
                    );
                  })(
                    l,
                    "chakra-modal",
                    "chakra-modal--header",
                    "chakra-modal--body"
                  );
                !(function (e, t) {
                  let n = e.current;
                  (0, s.useEffect)(() => {
                    if (e.current && t) return (0, a.Ry)(e.current);
                  }, [t, e, n]);
                })(p, t && d);
                let y = (0, r.$)(p, t),
                  x = (0, s.useRef)(null),
                  w = (0, s.useCallback)((e) => {
                    x.current = e.target;
                  }, []),
                  _ = (0, s.useCallback)(
                    (e) => {
                      "Escape" === e.key &&
                        (e.stopPropagation(),
                        u && (null == n || n()),
                        null == h || h());
                    },
                    [u, n, h]
                  ),
                  [k, S] = (0, s.useState)(!1),
                  [P, j] = (0, s.useState)(!1),
                  E = (0, s.useCallback)(
                    function () {
                      let e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : null;
                      return {
                        role: "dialog",
                        ...e,
                        ref: (0, o.lq)(t, p),
                        id: v,
                        tabIndex: -1,
                        "aria-modal": !0,
                        "aria-labelledby": k ? g : void 0,
                        "aria-describedby": P ? b : void 0,
                        onClick: (0, i.v0)(e.onClick, (e) =>
                          e.stopPropagation()
                        ),
                      };
                    },
                    [b, P, v, g, k]
                  ),
                  A = (0, s.useCallback)(
                    (e) => {
                      e.stopPropagation(),
                        x.current === e.target &&
                          r.m.isTopModal(p.current) &&
                          (c && (null == n || n()), null == f || f());
                    },
                    [n, c, f]
                  ),
                  C = (0, s.useCallback)(
                    function () {
                      let e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : null;
                      return {
                        ...e,
                        ref: (0, o.lq)(t, m),
                        onClick: (0, i.v0)(e.onClick, A),
                        onKeyDown: (0, i.v0)(e.onKeyDown, _),
                        onMouseDown: (0, i.v0)(e.onMouseDown, w),
                      };
                    },
                    [_, w, A]
                  );
                return {
                  isOpen: t,
                  onClose: n,
                  headerId: g,
                  bodyId: b,
                  setBodyMounted: j,
                  setHeaderMounted: S,
                  dialogRef: p,
                  overlayRef: m,
                  getDialogProps: E,
                  getDialogContainerProps: C,
                  index: y,
                };
              })(t),
              autoFocus: u,
              trapFocus: d,
              initialFocusRef: f,
              finalFocusRef: h,
              returnFocusOnClose: p,
              blockScrollOnMount: m,
              allowPinchZoom: v,
              preserveScrollBarGap: g,
              motionPreset: b,
              lockFocusAcrossFrames: y,
            };
          return (0, c.jsx)(P, {
            value: E,
            children: (0, c.jsx)(k, {
              value: j,
              children: (0, c.jsx)(_.M, {
                onExitComplete: S,
                children: E.isOpen && (0, c.jsx)(x, { ...n, children: l }),
              }),
            }),
          });
        };
      E.displayName = "Modal";
    },
    85559: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return c;
        },
      });
      var r = n(4009),
        i = n(29408),
        o = n(56354),
        a = n(96936),
        s = n(83112),
        l = n(20209),
        c = (0, o.G)((e, t) => {
          let { className: n, ...o } = e,
            { bodyId: c, setBodyMounted: u } = (0, r.vR)();
          (0, s.useEffect)(() => (u(!0), () => u(!1)), [u]);
          let d = (0, i.cx)("chakra-modal__body", n),
            f = (0, r.I_)();
          return (0, l.jsx)(a.m.div, {
            ref: t,
            className: d,
            id: c,
            ...o,
            __css: f.body,
          });
        });
      c.displayName = "ModalBody";
    },
    20370: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return l;
        },
      });
      var r = n(4009),
        i = n(29408),
        o = n(56354),
        a = n(96936),
        s = n(20209),
        l = (0, o.G)((e, t) => {
          let { className: n, ...o } = e,
            l = (0, i.cx)("chakra-modal__footer", n),
            c = {
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              ...(0, r.I_)().footer,
            };
          return (0, s.jsx)(a.m.footer, {
            ref: t,
            ...o,
            __css: c,
            className: l,
          });
        });
      l.displayName = "ModalFooter";
    },
    23643: function (e, t, n) {
      "use strict";
      function r(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      n.d(t, {
        o: function () {
          return r;
        },
      });
    },
    21603: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return i;
        },
      });
      var r = n(83112);
      function i(e) {
        return r.Children.toArray(e).filter((e) => (0, r.isValidElement)(e));
      }
    },
    84102: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return i;
        },
      });
      var r = n(83112);
      function i() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            name: t,
            strict: n = !0,
            hookName: i = "useContext",
            providerName: o = "Provider",
            errorMessage: a,
            defaultValue: s,
          } = e,
          l = (0, r.createContext)(s);
        return (
          (l.displayName = t),
          [
            l.Provider,
            function e() {
              var t;
              let s = (0, r.useContext)(l);
              if (!s && n) {
                let n = Error(
                  null != a
                    ? a
                    : ""
                        .concat(
                          i,
                          " returned `undefined`. Seems you forgot to wrap component within "
                        )
                        .concat(o)
                );
                throw (
                  ((n.name = "ContextError"),
                  null == (t = Error.captureStackTrace) || t.call(Error, n, e),
                  n)
                );
              }
              return s;
            },
            l,
          ]
        );
      }
    },
    30735: function (e, t, n) {
      "use strict";
      n.d(t, {
        lq: function () {
          return i;
        },
        qq: function () {
          return o;
        },
      });
      var r = n(83112);
      function i() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (e) => {
          t.forEach((t) => {
            !(function (e, t) {
              if (null != e) {
                if ("function" == typeof e) {
                  e(t);
                  return;
                }
                try {
                  e.current = t;
                } catch (n) {
                  throw Error(
                    "Cannot assign value '"
                      .concat(t, "' to ref '")
                      .concat(e, "'")
                  );
                }
              }
            })(t, e);
          });
        };
      }
      function o() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, r.useMemo)(() => i(...t), t);
      }
    },
    25032: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return i;
        },
      });
      var r = n(83112),
        i = (null == globalThis ? void 0 : globalThis.document)
          ? r.useLayoutEffect
          : r.useEffect;
    },
    71164: function (e, t, n) {
      "use strict";
      n.d(t, {
        P: function () {
          return f;
        },
      });
      var r = n(29408),
        i = n(56354),
        o = n(96936),
        a = n(20209),
        s = (0, i.G)(function (e, t) {
          let { children: n, placeholder: i, className: s, ...l } = e;
          return (0,
          a.jsxs)(o.m.select, { ...l, ref: t, className: (0, r.cx)("chakra-select", s), children: [i && (0, a.jsx)("option", { value: "", children: i }), n] });
        });
      s.displayName = "SelectField";
      var l = n(35950),
        c = n(34152),
        u = n(5175),
        d = n(83112),
        f = (0, i.G)((e, t) => {
          var n;
          let i = (0, c.jC)("Select", e),
            {
              rootProps: d,
              placeholder: f,
              icon: h,
              color: p,
              height: v,
              h: g,
              minH: b,
              minHeight: y,
              iconColor: x,
              iconSize: w,
              ..._
            } = (0, u.Lr)(e),
            [k, S] = (function (e, t) {
              let n = {},
                r = {};
              for (let [i, o] of Object.entries(e))
                t.includes(i) ? (n[i] = o) : (r[i] = o);
              return [n, r];
            })(_, u.oE),
            P = (0, l.Y)(S),
            j = {
              paddingEnd: "2rem",
              ...i.field,
              _focus: {
                zIndex: "unset",
                ...(null == (n = i.field) ? void 0 : n._focus),
              },
            };
          return (0, a.jsxs)(o.m.div, {
            className: "chakra-select__wrapper",
            __css: {
              width: "100%",
              height: "fit-content",
              position: "relative",
              color: p,
            },
            ...k,
            ...d,
            children: [
              (0, a.jsx)(s, {
                ref: t,
                height: null != g ? g : v,
                minH: null != b ? b : y,
                placeholder: f,
                ...P,
                __css: j,
                children: e.children,
              }),
              (0, a.jsx)(m, {
                "data-disabled": (0, r.PB)(P.disabled),
                ...((x || p) && { color: x || p }),
                __css: i.icon,
                ...(w && { fontSize: w }),
                children: h,
              }),
            ],
          });
        });
      f.displayName = "Select";
      var h = (e) =>
          (0, a.jsx)("svg", {
            viewBox: "0 0 24 24",
            ...e,
            children: (0, a.jsx)("path", {
              fill: "currentColor",
              d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
            }),
          }),
        p = (0, o.m)("div", {
          baseStyle: {
            position: "absolute",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            top: "50%",
            transform: "translateY(-50%)",
          },
        }),
        m = (e) => {
          let { children: t = (0, a.jsx)(h, {}), ...n } = e,
            r = (0, d.cloneElement)(t, {
              role: "presentation",
              className: "chakra-select__icon",
              focusable: !1,
              "aria-hidden": !0,
              style: { width: "1em", height: "1em", color: "currentColor" },
            });
          return (0, a.jsx)(p, {
            ...n,
            className: "chakra-select__icon-wrapper",
            children: (0, d.isValidElement)(t) ? r : null,
          });
        };
      m.displayName = "SelectIcon";
    },
    29408: function (e, t, n) {
      "use strict";
      n.d(t, {
        Kn: function () {
          return i;
        },
        PB: function () {
          return l;
        },
        PP: function () {
          return d;
        },
        Pu: function () {
          return a;
        },
        Qm: function () {
          return c;
        },
        ZK: function () {
          return o;
        },
        cx: function () {
          return r;
        },
        v0: function () {
          return u;
        },
      });
      var r = (...e) => e.filter(Boolean).join(" ");
      function i(e) {
        let t = typeof e;
        return (
          null != e && ("object" === t || "function" === t) && !Array.isArray(e)
        );
      }
      var o = (e) => {
        let { condition: t, message: n } = e;
      };
      function a(e, ...t) {
        return s(e) ? e(...t) : e;
      }
      var s = (e) => "function" == typeof e,
        l = (e) => (e ? "" : void 0),
        c = (e) => !!e || void 0;
      function u(...e) {
        return function (t) {
          e.some(
            (e) => (null == e || e(t), null == t ? void 0 : t.defaultPrevented)
          );
        };
      }
      function d(...e) {
        return function (t) {
          e.forEach((e) => {
            null == e || e(t);
          });
        };
      }
    },
    38859: function (e, t, n) {
      "use strict";
      n.d(t, {
        $: function () {
          return d;
        },
      });
      var r = n(6729),
        i = n(56354),
        o = n(34152),
        a = n(5175),
        s = n(96936),
        l = n(29408),
        c = n(20209),
        u = (0, r.F4)({
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }),
        d = (0, i.G)((e, t) => {
          let n = (0, o.mq)("Spinner", e),
            {
              label: r = "Loading...",
              thickness: i = "2px",
              speed: d = "0.45s",
              emptyColor: f = "transparent",
              className: h,
              ...p
            } = (0, a.Lr)(e),
            m = (0, l.cx)("chakra-spinner", h),
            v = {
              display: "inline-block",
              borderColor: "currentColor",
              borderStyle: "solid",
              borderRadius: "99999px",
              borderWidth: i,
              borderBottomColor: f,
              borderLeftColor: f,
              animation: "".concat(u, " ").concat(d, " linear infinite"),
              ...n,
            };
          return (0, c.jsx)(s.m.div, {
            ref: t,
            __css: v,
            className: m,
            ...p,
            children: r && (0, c.jsx)(s.m.span, { srOnly: !0, children: r }),
          });
        });
      d.displayName = "Spinner";
    },
    5175: function (e, t, n) {
      "use strict";
      n.d(t, {
        Lr: function () {
          return eP;
        },
        Ud: function () {
          return eS;
        },
        ZR: function () {
          return ey;
        },
        cC: function () {
          return eg;
        },
        iv: function () {
          return ek;
        },
        oE: function () {
          return ev;
        },
      });
      var r = n(29408),
        i = n(21447),
        o = (e) => /!(important)?$/.test(e),
        a = (e) =>
          "string" == typeof e ? e.replace(/!(important)?$/, "").trim() : e,
        s = (e, t) => (n) => {
          let i = String(t),
            s = o(i),
            l = a(i),
            c = e ? `${e}.${l}` : l,
            u =
              (0, r.Kn)(n.__cssMap) && c in n.__cssMap
                ? n.__cssMap[c].varRef
                : t;
          return (u = a(u)), s ? `${u} !important` : u;
        };
      function l(e) {
        let { scale: t, transform: n, compose: r } = e;
        return (e, i) => {
          var o;
          let a = s(t, e)(i),
            l = null != (o = null == n ? void 0 : n(a, i)) ? o : a;
          return r && (l = r(l, i)), l;
        };
      }
      var c =
        (...e) =>
        (t) =>
          e.reduce((e, t) => t(e), t);
      function u(e, t) {
        return (n) => {
          let r = { property: n, scale: e };
          return (r.transform = l({ scale: e, transform: t })), r;
        };
      }
      var d =
          ({ rtl: e, ltr: t }) =>
          (n) =>
            "rtl" === n.direction ? e : t,
        f = [
          "rotate(var(--chakra-rotate, 0))",
          "scaleX(var(--chakra-scale-x, 1))",
          "scaleY(var(--chakra-scale-y, 1))",
          "skewX(var(--chakra-skew-x, 0))",
          "skewY(var(--chakra-skew-y, 0))",
        ],
        h = {
          "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
          filter:
            "var(--chakra-blur) var(--chakra-brightness) var(--chakra-contrast) var(--chakra-grayscale) var(--chakra-hue-rotate) var(--chakra-invert) var(--chakra-saturate) var(--chakra-sepia) var(--chakra-drop-shadow)",
        },
        p = {
          backdropFilter:
            "var(--chakra-backdrop-blur) var(--chakra-backdrop-brightness) var(--chakra-backdrop-contrast) var(--chakra-backdrop-grayscale) var(--chakra-backdrop-hue-rotate) var(--chakra-backdrop-invert) var(--chakra-backdrop-opacity) var(--chakra-backdrop-saturate) var(--chakra-backdrop-sepia)",
          "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
        },
        m = {
          "row-reverse": {
            space: "--chakra-space-x-reverse",
            divide: "--chakra-divide-x-reverse",
          },
          "column-reverse": {
            space: "--chakra-space-y-reverse",
            divide: "--chakra-divide-y-reverse",
          },
        },
        v = {
          "to-t": "to top",
          "to-tr": "to top right",
          "to-r": "to right",
          "to-br": "to bottom right",
          "to-b": "to bottom",
          "to-bl": "to bottom left",
          "to-l": "to left",
          "to-tl": "to top left",
        },
        g = new Set(Object.values(v)),
        b = new Set([
          "none",
          "-moz-initial",
          "inherit",
          "initial",
          "revert",
          "unset",
        ]),
        y = (e) => e.trim(),
        x = (e) => "string" == typeof e && e.includes("(") && e.includes(")"),
        w = (e) => {
          let t = parseFloat(e.toString()),
            n = e.toString().replace(String(t), "");
          return { unitless: !n, value: t, unit: n };
        },
        _ = (e) => (t) => `${e}(${t})`,
        k = {
          filter: (e) => ("auto" !== e ? e : h),
          backdropFilter: (e) => ("auto" !== e ? e : p),
          ring: (e) => ({
            "--chakra-ring-offset-shadow":
              "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
            "--chakra-ring-shadow":
              "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
            "--chakra-ring-width": k.px(e),
            boxShadow:
              "var(--chakra-ring-offset-shadow), var(--chakra-ring-shadow), var(--chakra-shadow, 0 0 #0000)",
          }),
          bgClip: (e) =>
            "text" === e
              ? { color: "transparent", backgroundClip: "text" }
              : { backgroundClip: e },
          transform: (e) =>
            "auto" === e
              ? [
                  "translateX(var(--chakra-translate-x, 0))",
                  "translateY(var(--chakra-translate-y, 0))",
                  ...f,
                ].join(" ")
              : "auto-gpu" === e
              ? [
                  "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
                  ...f,
                ].join(" ")
              : e,
          vh: (e) => ("$100vh" === e ? "var(--chakra-vh)" : e),
          px(e) {
            if (null == e) return e;
            let { unitless: t } = w(e);
            return t || "number" == typeof e ? `${e}px` : e;
          },
          fraction: (e) => ("number" != typeof e || e > 1 ? e : `${100 * e}%`),
          float: (e, t) =>
            "rtl" === t.direction ? { left: "right", right: "left" }[e] : e,
          degree(e) {
            if (/^var\(--.+\)$/.test(e) || null == e) return e;
            let t = "string" == typeof e && !e.endsWith("deg");
            return "number" == typeof e || t ? `${e}deg` : e;
          },
          gradient: (e, t) =>
            (function (e, t) {
              if (null == e || b.has(e)) return e;
              if (!(x(e) || b.has(e))) return `url('${e}')`;
              let n = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e),
                r = null == n ? void 0 : n[1],
                i = null == n ? void 0 : n[2];
              if (!r || !i) return e;
              let o = r.includes("-gradient") ? r : `${r}-gradient`,
                [a, ...s] = i.split(",").map(y).filter(Boolean);
              if ((null == s ? void 0 : s.length) === 0) return e;
              let l = a in v ? v[a] : a;
              s.unshift(l);
              let c = s.map((e) => {
                if (g.has(e)) return e;
                let n = e.indexOf(" "),
                  [r, i] = -1 !== n ? [e.substr(0, n), e.substr(n + 1)] : [e],
                  o = x(i) ? i : i && i.split(" "),
                  a = `colors.${r}`,
                  s = a in t.__cssMap ? t.__cssMap[a].varRef : r;
                return o ? [s, ...(Array.isArray(o) ? o : [o])].join(" ") : s;
              });
              return `${o}(${c.join(", ")})`;
            })(e, null != t ? t : {}),
          blur: _("blur"),
          opacity: _("opacity"),
          brightness: _("brightness"),
          contrast: _("contrast"),
          dropShadow: _("drop-shadow"),
          grayscale: _("grayscale"),
          hueRotate: (e) => _("hue-rotate")(k.degree(e)),
          invert: _("invert"),
          saturate: _("saturate"),
          sepia: _("sepia"),
          bgImage: (e) => (null == e ? e : x(e) || b.has(e) ? e : `url(${e})`),
          outline(e) {
            let t = "0" === String(e) || "none" === String(e);
            return null !== e && t
              ? { outline: "2px solid transparent", outlineOffset: "2px" }
              : { outline: e };
          },
          flexDirection(e) {
            var t;
            let { space: n, divide: r } = null != (t = m[e]) ? t : {},
              i = { flexDirection: e };
            return n && (i[n] = 1), r && (i[r] = 1), i;
          },
        },
        S = {
          borderWidths: u("borderWidths"),
          borderStyles: u("borderStyles"),
          colors: u("colors"),
          borders: u("borders"),
          gradients: u("gradients", k.gradient),
          radii: u("radii", k.px),
          space: u("space", c(k.vh, k.px)),
          spaceT: u("space", c(k.vh, k.px)),
          degreeT: (e) => ({ property: e, transform: k.degree }),
          prop: (e, t, n) => ({
            property: e,
            scale: t,
            ...(t && { transform: l({ scale: t, transform: n }) }),
          }),
          propT: (e, t) => ({ property: e, transform: t }),
          sizes: u("sizes", c(k.vh, k.px)),
          sizesT: u("sizes", c(k.vh, k.fraction)),
          shadows: u("shadows"),
          logical: function (e) {
            let { property: t, scale: n, transform: r } = e;
            return {
              scale: n,
              property: d(t),
              transform: n ? l({ scale: n, compose: r }) : r,
            };
          },
          blur: u("blur", k.blur),
        },
        P = {
          background: S.colors("background"),
          backgroundColor: S.colors("backgroundColor"),
          backgroundImage: S.gradients("backgroundImage"),
          backgroundSize: !0,
          backgroundPosition: !0,
          backgroundRepeat: !0,
          backgroundAttachment: !0,
          backgroundClip: { transform: k.bgClip },
          bgSize: S.prop("backgroundSize"),
          bgPosition: S.prop("backgroundPosition"),
          bg: S.colors("background"),
          bgColor: S.colors("backgroundColor"),
          bgPos: S.prop("backgroundPosition"),
          bgRepeat: S.prop("backgroundRepeat"),
          bgAttachment: S.prop("backgroundAttachment"),
          bgGradient: S.gradients("backgroundImage"),
          bgClip: { transform: k.bgClip },
        };
      Object.assign(P, {
        bgImage: P.backgroundImage,
        bgImg: P.backgroundImage,
      });
      var j = {
        border: S.borders("border"),
        borderWidth: S.borderWidths("borderWidth"),
        borderStyle: S.borderStyles("borderStyle"),
        borderColor: S.colors("borderColor"),
        borderRadius: S.radii("borderRadius"),
        borderTop: S.borders("borderTop"),
        borderBlockStart: S.borders("borderBlockStart"),
        borderTopLeftRadius: S.radii("borderTopLeftRadius"),
        borderStartStartRadius: S.logical({
          scale: "radii",
          property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
        }),
        borderEndStartRadius: S.logical({
          scale: "radii",
          property: {
            ltr: "borderBottomLeftRadius",
            rtl: "borderBottomRightRadius",
          },
        }),
        borderTopRightRadius: S.radii("borderTopRightRadius"),
        borderStartEndRadius: S.logical({
          scale: "radii",
          property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
        }),
        borderEndEndRadius: S.logical({
          scale: "radii",
          property: {
            ltr: "borderBottomRightRadius",
            rtl: "borderBottomLeftRadius",
          },
        }),
        borderRight: S.borders("borderRight"),
        borderInlineEnd: S.borders("borderInlineEnd"),
        borderBottom: S.borders("borderBottom"),
        borderBlockEnd: S.borders("borderBlockEnd"),
        borderBottomLeftRadius: S.radii("borderBottomLeftRadius"),
        borderBottomRightRadius: S.radii("borderBottomRightRadius"),
        borderLeft: S.borders("borderLeft"),
        borderInlineStart: { property: "borderInlineStart", scale: "borders" },
        borderInlineStartRadius: S.logical({
          scale: "radii",
          property: {
            ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
            rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
          },
        }),
        borderInlineEndRadius: S.logical({
          scale: "radii",
          property: {
            ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
            rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
          },
        }),
        borderX: S.borders(["borderLeft", "borderRight"]),
        borderInline: S.borders("borderInline"),
        borderY: S.borders(["borderTop", "borderBottom"]),
        borderBlock: S.borders("borderBlock"),
        borderTopWidth: S.borderWidths("borderTopWidth"),
        borderBlockStartWidth: S.borderWidths("borderBlockStartWidth"),
        borderTopColor: S.colors("borderTopColor"),
        borderBlockStartColor: S.colors("borderBlockStartColor"),
        borderTopStyle: S.borderStyles("borderTopStyle"),
        borderBlockStartStyle: S.borderStyles("borderBlockStartStyle"),
        borderBottomWidth: S.borderWidths("borderBottomWidth"),
        borderBlockEndWidth: S.borderWidths("borderBlockEndWidth"),
        borderBottomColor: S.colors("borderBottomColor"),
        borderBlockEndColor: S.colors("borderBlockEndColor"),
        borderBottomStyle: S.borderStyles("borderBottomStyle"),
        borderBlockEndStyle: S.borderStyles("borderBlockEndStyle"),
        borderLeftWidth: S.borderWidths("borderLeftWidth"),
        borderInlineStartWidth: S.borderWidths("borderInlineStartWidth"),
        borderLeftColor: S.colors("borderLeftColor"),
        borderInlineStartColor: S.colors("borderInlineStartColor"),
        borderLeftStyle: S.borderStyles("borderLeftStyle"),
        borderInlineStartStyle: S.borderStyles("borderInlineStartStyle"),
        borderRightWidth: S.borderWidths("borderRightWidth"),
        borderInlineEndWidth: S.borderWidths("borderInlineEndWidth"),
        borderRightColor: S.colors("borderRightColor"),
        borderInlineEndColor: S.colors("borderInlineEndColor"),
        borderRightStyle: S.borderStyles("borderRightStyle"),
        borderInlineEndStyle: S.borderStyles("borderInlineEndStyle"),
        borderTopRadius: S.radii([
          "borderTopLeftRadius",
          "borderTopRightRadius",
        ]),
        borderBottomRadius: S.radii([
          "borderBottomLeftRadius",
          "borderBottomRightRadius",
        ]),
        borderLeftRadius: S.radii([
          "borderTopLeftRadius",
          "borderBottomLeftRadius",
        ]),
        borderRightRadius: S.radii([
          "borderTopRightRadius",
          "borderBottomRightRadius",
        ]),
      };
      Object.assign(j, {
        rounded: j.borderRadius,
        roundedTop: j.borderTopRadius,
        roundedTopLeft: j.borderTopLeftRadius,
        roundedTopRight: j.borderTopRightRadius,
        roundedTopStart: j.borderStartStartRadius,
        roundedTopEnd: j.borderStartEndRadius,
        roundedBottom: j.borderBottomRadius,
        roundedBottomLeft: j.borderBottomLeftRadius,
        roundedBottomRight: j.borderBottomRightRadius,
        roundedBottomStart: j.borderEndStartRadius,
        roundedBottomEnd: j.borderEndEndRadius,
        roundedLeft: j.borderLeftRadius,
        roundedRight: j.borderRightRadius,
        roundedStart: j.borderInlineStartRadius,
        roundedEnd: j.borderInlineEndRadius,
        borderStart: j.borderInlineStart,
        borderEnd: j.borderInlineEnd,
        borderTopStartRadius: j.borderStartStartRadius,
        borderTopEndRadius: j.borderStartEndRadius,
        borderBottomStartRadius: j.borderEndStartRadius,
        borderBottomEndRadius: j.borderEndEndRadius,
        borderStartRadius: j.borderInlineStartRadius,
        borderEndRadius: j.borderInlineEndRadius,
        borderStartWidth: j.borderInlineStartWidth,
        borderEndWidth: j.borderInlineEndWidth,
        borderStartColor: j.borderInlineStartColor,
        borderEndColor: j.borderInlineEndColor,
        borderStartStyle: j.borderInlineStartStyle,
        borderEndStyle: j.borderInlineEndStyle,
      });
      var E = {
          color: S.colors("color"),
          textColor: S.colors("color"),
          fill: S.colors("fill"),
          stroke: S.colors("stroke"),
        },
        A = {
          boxShadow: S.shadows("boxShadow"),
          mixBlendMode: !0,
          blendMode: S.prop("mixBlendMode"),
          backgroundBlendMode: !0,
          bgBlendMode: S.prop("backgroundBlendMode"),
          opacity: !0,
        };
      Object.assign(A, { shadow: A.boxShadow });
      var C = {
          filter: { transform: k.filter },
          blur: S.blur("--chakra-blur"),
          brightness: S.propT("--chakra-brightness", k.brightness),
          contrast: S.propT("--chakra-contrast", k.contrast),
          hueRotate: S.propT("--chakra-hue-rotate", k.hueRotate),
          invert: S.propT("--chakra-invert", k.invert),
          saturate: S.propT("--chakra-saturate", k.saturate),
          dropShadow: S.propT("--chakra-drop-shadow", k.dropShadow),
          backdropFilter: { transform: k.backdropFilter },
          backdropBlur: S.blur("--chakra-backdrop-blur"),
          backdropBrightness: S.propT(
            "--chakra-backdrop-brightness",
            k.brightness
          ),
          backdropContrast: S.propT("--chakra-backdrop-contrast", k.contrast),
          backdropHueRotate: S.propT(
            "--chakra-backdrop-hue-rotate",
            k.hueRotate
          ),
          backdropInvert: S.propT("--chakra-backdrop-invert", k.invert),
          backdropSaturate: S.propT("--chakra-backdrop-saturate", k.saturate),
        },
        M = {
          alignItems: !0,
          alignContent: !0,
          justifyItems: !0,
          justifyContent: !0,
          flexWrap: !0,
          flexDirection: { transform: k.flexDirection },
          flex: !0,
          flexFlow: !0,
          flexGrow: !0,
          flexShrink: !0,
          flexBasis: S.sizes("flexBasis"),
          justifySelf: !0,
          alignSelf: !0,
          order: !0,
          placeItems: !0,
          placeContent: !0,
          placeSelf: !0,
          gap: S.space("gap"),
          rowGap: S.space("rowGap"),
          columnGap: S.space("columnGap"),
        };
      Object.assign(M, { flexDir: M.flexDirection });
      var z = {
          gridGap: S.space("gridGap"),
          gridColumnGap: S.space("gridColumnGap"),
          gridRowGap: S.space("gridRowGap"),
          gridColumn: !0,
          gridRow: !0,
          gridAutoFlow: !0,
          gridAutoColumns: !0,
          gridColumnStart: !0,
          gridColumnEnd: !0,
          gridRowStart: !0,
          gridRowEnd: !0,
          gridAutoRows: !0,
          gridTemplate: !0,
          gridTemplateColumns: !0,
          gridTemplateRows: !0,
          gridTemplateAreas: !0,
          gridArea: !0,
        },
        R = {
          appearance: !0,
          cursor: !0,
          resize: !0,
          userSelect: !0,
          pointerEvents: !0,
          outline: { transform: k.outline },
          outlineOffset: !0,
          outlineColor: S.colors("outlineColor"),
        },
        I = {
          width: S.sizesT("width"),
          inlineSize: S.sizesT("inlineSize"),
          height: S.sizes("height"),
          blockSize: S.sizes("blockSize"),
          boxSize: S.sizes(["width", "height"]),
          minWidth: S.sizes("minWidth"),
          minInlineSize: S.sizes("minInlineSize"),
          minHeight: S.sizes("minHeight"),
          minBlockSize: S.sizes("minBlockSize"),
          maxWidth: S.sizes("maxWidth"),
          maxInlineSize: S.sizes("maxInlineSize"),
          maxHeight: S.sizes("maxHeight"),
          maxBlockSize: S.sizes("maxBlockSize"),
          overflow: !0,
          overflowX: !0,
          overflowY: !0,
          overscrollBehavior: !0,
          overscrollBehaviorX: !0,
          overscrollBehaviorY: !0,
          display: !0,
          aspectRatio: !0,
          hideFrom: {
            scale: "breakpoints",
            transform: (e, t) => {
              var n, r, i;
              let o =
                null !=
                (i =
                  null ==
                  (r = null == (n = t.__breakpoints) ? void 0 : n.get(e))
                    ? void 0
                    : r.minW)
                  ? i
                  : e;
              return {
                [`@media screen and (min-width: ${o})`]: { display: "none" },
              };
            },
          },
          hideBelow: {
            scale: "breakpoints",
            transform: (e, t) => {
              var n, r, i;
              let o =
                null !=
                (i =
                  null ==
                  (r = null == (n = t.__breakpoints) ? void 0 : n.get(e))
                    ? void 0
                    : r._minW)
                  ? i
                  : e;
              return {
                [`@media screen and (max-width: ${o})`]: { display: "none" },
              };
            },
          },
          verticalAlign: !0,
          boxSizing: !0,
          boxDecorationBreak: !0,
          float: S.propT("float", k.float),
          objectFit: !0,
          objectPosition: !0,
          visibility: !0,
          isolation: !0,
        };
      Object.assign(I, {
        w: I.width,
        h: I.height,
        minW: I.minWidth,
        maxW: I.maxWidth,
        minH: I.minHeight,
        maxH: I.maxHeight,
        overscroll: I.overscrollBehavior,
        overscrollX: I.overscrollBehaviorX,
        overscrollY: I.overscrollBehaviorY,
      });
      var T = {
          listStyleType: !0,
          listStylePosition: !0,
          listStylePos: S.prop("listStylePosition"),
          listStyleImage: !0,
          listStyleImg: S.prop("listStyleImage"),
        },
        O = ((e) => {
          let t = new WeakMap();
          return (n, r, i, o) => {
            if (void 0 === n) return e(n, r, i);
            t.has(n) || t.set(n, new Map());
            let a = t.get(n);
            if (a.has(r)) return a.get(r);
            let s = e(n, r, i, o);
            return a.set(r, s), s;
          };
        })(function (e, t, n, r) {
          let i = "string" == typeof t ? t.split(".") : [t];
          for (r = 0; r < i.length && e; r += 1) e = e[i[r]];
          return void 0 === e ? n : e;
        }),
        B = {
          border: "0px",
          clip: "rect(0, 0, 0, 0)",
          width: "1px",
          height: "1px",
          margin: "-1px",
          padding: "0px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "absolute",
        },
        L = {
          position: "static",
          width: "auto",
          height: "auto",
          clip: "auto",
          padding: "0",
          margin: "0",
          overflow: "visible",
          whiteSpace: "normal",
        },
        D = (e, t, n) => {
          let r = {},
            i = O(e, t, {});
          for (let e in i) (e in n && null != n[e]) || (r[e] = i[e]);
          return r;
        },
        N = {
          position: !0,
          pos: S.prop("position"),
          zIndex: S.prop("zIndex", "zIndices"),
          inset: S.spaceT("inset"),
          insetX: S.spaceT(["left", "right"]),
          insetInline: S.spaceT("insetInline"),
          insetY: S.spaceT(["top", "bottom"]),
          insetBlock: S.spaceT("insetBlock"),
          top: S.spaceT("top"),
          insetBlockStart: S.spaceT("insetBlockStart"),
          bottom: S.spaceT("bottom"),
          insetBlockEnd: S.spaceT("insetBlockEnd"),
          left: S.spaceT("left"),
          insetInlineStart: S.logical({
            scale: "space",
            property: { ltr: "left", rtl: "right" },
          }),
          right: S.spaceT("right"),
          insetInlineEnd: S.logical({
            scale: "space",
            property: { ltr: "right", rtl: "left" },
          }),
        };
      Object.assign(N, {
        insetStart: N.insetInlineStart,
        insetEnd: N.insetInlineEnd,
      });
      var F = {
          ring: { transform: k.ring },
          ringColor: S.colors("--chakra-ring-color"),
          ringOffset: S.prop("--chakra-ring-offset-width"),
          ringOffsetColor: S.colors("--chakra-ring-offset-color"),
          ringInset: S.prop("--chakra-ring-inset"),
        },
        U = {
          margin: S.spaceT("margin"),
          marginTop: S.spaceT("marginTop"),
          marginBlockStart: S.spaceT("marginBlockStart"),
          marginRight: S.spaceT("marginRight"),
          marginInlineEnd: S.spaceT("marginInlineEnd"),
          marginBottom: S.spaceT("marginBottom"),
          marginBlockEnd: S.spaceT("marginBlockEnd"),
          marginLeft: S.spaceT("marginLeft"),
          marginInlineStart: S.spaceT("marginInlineStart"),
          marginX: S.spaceT(["marginInlineStart", "marginInlineEnd"]),
          marginInline: S.spaceT("marginInline"),
          marginY: S.spaceT(["marginTop", "marginBottom"]),
          marginBlock: S.spaceT("marginBlock"),
          padding: S.space("padding"),
          paddingTop: S.space("paddingTop"),
          paddingBlockStart: S.space("paddingBlockStart"),
          paddingRight: S.space("paddingRight"),
          paddingBottom: S.space("paddingBottom"),
          paddingBlockEnd: S.space("paddingBlockEnd"),
          paddingLeft: S.space("paddingLeft"),
          paddingInlineStart: S.space("paddingInlineStart"),
          paddingInlineEnd: S.space("paddingInlineEnd"),
          paddingX: S.space(["paddingInlineStart", "paddingInlineEnd"]),
          paddingInline: S.space("paddingInline"),
          paddingY: S.space(["paddingTop", "paddingBottom"]),
          paddingBlock: S.space("paddingBlock"),
        };
      Object.assign(U, {
        m: U.margin,
        mt: U.marginTop,
        mr: U.marginRight,
        me: U.marginInlineEnd,
        marginEnd: U.marginInlineEnd,
        mb: U.marginBottom,
        ml: U.marginLeft,
        ms: U.marginInlineStart,
        marginStart: U.marginInlineStart,
        mx: U.marginX,
        my: U.marginY,
        p: U.padding,
        pt: U.paddingTop,
        py: U.paddingY,
        px: U.paddingX,
        pb: U.paddingBottom,
        pl: U.paddingLeft,
        ps: U.paddingInlineStart,
        paddingStart: U.paddingInlineStart,
        pr: U.paddingRight,
        pe: U.paddingInlineEnd,
        paddingEnd: U.paddingInlineEnd,
      });
      var G = {
          textDecorationColor: S.colors("textDecorationColor"),
          textDecoration: !0,
          textDecor: { property: "textDecoration" },
          textDecorationLine: !0,
          textDecorationStyle: !0,
          textDecorationThickness: !0,
          textUnderlineOffset: !0,
          textShadow: S.shadows("textShadow"),
        },
        q = {
          clipPath: !0,
          transform: S.propT("transform", k.transform),
          transformOrigin: !0,
          translateX: S.spaceT("--chakra-translate-x"),
          translateY: S.spaceT("--chakra-translate-y"),
          skewX: S.degreeT("--chakra-skew-x"),
          skewY: S.degreeT("--chakra-skew-y"),
          scaleX: S.prop("--chakra-scale-x"),
          scaleY: S.prop("--chakra-scale-y"),
          scale: S.prop(["--chakra-scale-x", "--chakra-scale-y"]),
          rotate: S.degreeT("--chakra-rotate"),
        },
        W = {
          transition: !0,
          transitionDelay: !0,
          animation: !0,
          willChange: !0,
          transitionDuration: S.prop(
            "transitionDuration",
            "transition.duration"
          ),
          transitionProperty: S.prop(
            "transitionProperty",
            "transition.property"
          ),
          transitionTimingFunction: S.prop(
            "transitionTimingFunction",
            "transition.easing"
          ),
        },
        H = {
          fontFamily: S.prop("fontFamily", "fonts"),
          fontSize: S.prop("fontSize", "fontSizes", k.px),
          fontWeight: S.prop("fontWeight", "fontWeights"),
          lineHeight: S.prop("lineHeight", "lineHeights"),
          letterSpacing: S.prop("letterSpacing", "letterSpacings"),
          textAlign: !0,
          fontStyle: !0,
          textIndent: !0,
          wordBreak: !0,
          overflowWrap: !0,
          textOverflow: !0,
          textTransform: !0,
          whiteSpace: !0,
          isTruncated: {
            transform(e) {
              if (!0 === e)
                return {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                };
            },
          },
          noOfLines: {
            static: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "var(--chakra-line-clamp)",
            },
            property: "--chakra-line-clamp",
          },
        },
        $ = {
          scrollBehavior: !0,
          scrollSnapAlign: !0,
          scrollSnapStop: !0,
          scrollSnapType: !0,
          scrollMargin: S.spaceT("scrollMargin"),
          scrollMarginTop: S.spaceT("scrollMarginTop"),
          scrollMarginBottom: S.spaceT("scrollMarginBottom"),
          scrollMarginLeft: S.spaceT("scrollMarginLeft"),
          scrollMarginRight: S.spaceT("scrollMarginRight"),
          scrollMarginX: S.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
          scrollMarginY: S.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
          scrollPadding: S.spaceT("scrollPadding"),
          scrollPaddingTop: S.spaceT("scrollPaddingTop"),
          scrollPaddingBottom: S.spaceT("scrollPaddingBottom"),
          scrollPaddingLeft: S.spaceT("scrollPaddingLeft"),
          scrollPaddingRight: S.spaceT("scrollPaddingRight"),
          scrollPaddingX: S.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
          scrollPaddingY: S.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
        };
      function X(e) {
        return (0, r.Kn)(e) && e.reference ? e.reference : String(e);
      }
      var V = (e, ...t) => t.map(X).join(` ${e} `).replace(/calc/g, ""),
        Y = (...e) => `calc(${V("+", ...e)})`,
        Z = (...e) => `calc(${V("-", ...e)})`,
        Q = (...e) => `calc(${V("*", ...e)})`,
        K = (...e) => `calc(${V("/", ...e)})`,
        J = (e) => {
          let t = X(e);
          return null == t || Number.isNaN(parseFloat(t))
            ? Q(t, -1)
            : String(t).startsWith("-")
            ? String(t).slice(1)
            : `-${t}`;
        },
        ee = Object.assign(
          (e) => ({
            add: (...t) => ee(Y(e, ...t)),
            subtract: (...t) => ee(Z(e, ...t)),
            multiply: (...t) => ee(Q(e, ...t)),
            divide: (...t) => ee(K(e, ...t)),
            negate: () => ee(J(e)),
            toString: () => e.toString(),
          }),
          { add: Y, subtract: Z, multiply: Q, divide: K, negate: J }
        );
      function et(e) {
        if (null == e) return e;
        let { unitless: t } = (function (e) {
          let t = parseFloat(e.toString()),
            n = e.toString().replace(String(t), "");
          return { unitless: !n, value: t, unit: n };
        })(e);
        return t || "number" == typeof e ? `${e}px` : e;
      }
      var en = (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
        er = (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
        ei = (e, t) => `${e}:focus-visible ${t}`,
        eo = (e, t) => `${e}:focus-within ${t}`,
        ea = (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
        es = (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
        el = (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
        ec = (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
        eu = (e) =>
          ef((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"),
        ed = (e) => ef((t) => e(t, "~ &"), "[data-peer]", ".peer"),
        ef = (e, ...t) => t.map(e).join(", "),
        eh = {
          _hover: "&:hover, &[data-hover]",
          _active: "&:active, &[data-active]",
          _focus: "&:focus, &[data-focus]",
          _highlighted: "&[data-highlighted]",
          _focusWithin: "&:focus-within",
          _focusVisible: "&:focus-visible, &[data-focus-visible]",
          _disabled:
            "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
          _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
          _before: "&::before",
          _after: "&::after",
          _empty: "&:empty",
          _expanded: "&[aria-expanded=true], &[data-expanded]",
          _checked: "&[aria-checked=true], &[data-checked]",
          _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
          _pressed: "&[aria-pressed=true], &[data-pressed]",
          _invalid: "&[aria-invalid=true], &[data-invalid]",
          _valid: "&[data-valid], &[data-state=valid]",
          _loading: "&[data-loading], &[aria-busy=true]",
          _selected: "&[aria-selected=true], &[data-selected]",
          _hidden: "&[hidden], &[data-hidden]",
          _autofill: "&:-webkit-autofill",
          _even: "&:nth-of-type(even)",
          _odd: "&:nth-of-type(odd)",
          _first: "&:first-of-type",
          _firstLetter: "&::first-letter",
          _last: "&:last-of-type",
          _notFirst: "&:not(:first-of-type)",
          _notLast: "&:not(:last-of-type)",
          _visited: "&:visited",
          _activeLink: "&[aria-current=page]",
          _activeStep: "&[aria-current=step]",
          _indeterminate:
            "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
          _groupHover: eu(en),
          _peerHover: ed(en),
          _groupFocus: eu(er),
          _peerFocus: ed(er),
          _groupFocusVisible: eu(ei),
          _peerFocusVisible: ed(ei),
          _groupActive: eu(ea),
          _peerActive: ed(ea),
          _groupDisabled: eu(es),
          _peerDisabled: ed(es),
          _groupInvalid: eu(el),
          _peerInvalid: ed(el),
          _groupChecked: eu(ec),
          _peerChecked: ed(ec),
          _groupFocusWithin: eu(eo),
          _peerFocusWithin: ed(eo),
          _peerPlaceholderShown: ed((e, t) => `${e}:placeholder-shown ${t}`),
          _placeholder: "&::placeholder",
          _placeholderShown: "&:placeholder-shown",
          _fullScreen: "&:fullscreen",
          _selection: "&::selection",
          _rtl: "[dir=rtl] &, &[dir=rtl]",
          _ltr: "[dir=ltr] &, &[dir=ltr]",
          _mediaDark: "@media (prefers-color-scheme: dark)",
          _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
          _dark:
            ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
          _light:
            ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
          _horizontal: "&[data-orientation=horizontal]",
          _vertical: "&[data-orientation=vertical]",
        },
        ep = Object.keys(eh),
        em = i(
          {},
          P,
          j,
          E,
          M,
          I,
          C,
          F,
          R,
          z,
          {
            srOnly: {
              transform: (e) => (!0 === e ? B : "focusable" === e ? L : {}),
            },
            layerStyle: {
              processResult: !0,
              transform: (e, t, n) => D(t, `layerStyles.${e}`, n),
            },
            textStyle: {
              processResult: !0,
              transform: (e, t, n) => D(t, `textStyles.${e}`, n),
            },
            apply: { processResult: !0, transform: (e, t, n) => D(t, e, n) },
          },
          N,
          A,
          U,
          $,
          H,
          G,
          q,
          T,
          W
        ),
        ev = Object.keys(Object.assign({}, U, I, M, z, N)),
        eg = [...Object.keys(em), ...ep],
        eb = { ...em, ...eh },
        ey = (e) => e in eb,
        ex = (e) => (t) => {
          if (!t.__breakpoints) return e;
          let { isResponsive: n, toArrayValue: i, media: o } = t.__breakpoints,
            a = {};
          for (let s in e) {
            let l = (0, r.Pu)(e[s], t);
            if (null == l) continue;
            if (!Array.isArray((l = (0, r.Kn)(l) && n(l) ? i(l) : l))) {
              a[s] = l;
              continue;
            }
            let c = l.slice(0, o.length).length;
            for (let e = 0; e < c; e += 1) {
              let t = null == o ? void 0 : o[e];
              if (!t) {
                a[s] = l[e];
                continue;
              }
              (a[t] = a[t] || {}), null != l[e] && (a[t][s] = l[e]);
            }
          }
          return a;
        },
        ew = (e, t) =>
          e.startsWith("--") &&
          "string" == typeof t &&
          !/^var\(--.+\)$/.test(t),
        e_ = (e, t) => {
          var n, r;
          if (null == t) return t;
          let i = (t) => {
              var n, r;
              return null == (r = null == (n = e.__cssMap) ? void 0 : n[t])
                ? void 0
                : r.varRef;
            },
            o = (e) => {
              var t;
              return null != (t = i(e)) ? t : e;
            },
            [a, s] = (function (e) {
              let t = [],
                n = "",
                r = !1;
              for (let i = 0; i < e.length; i++) {
                let o = e[i];
                "(" === o
                  ? ((r = !0), (n += o))
                  : ")" === o
                  ? ((r = !1), (n += o))
                  : "," !== o || r
                  ? (n += o)
                  : (t.push(n), (n = ""));
              }
              return (n = n.trim()) && t.push(n), t;
            })(t);
          return (t = null != (r = null != (n = i(a)) ? n : o(s)) ? r : o(t));
        },
        ek = (e) => (t) =>
          (function (e) {
            let { configs: t = {}, pseudos: n = {}, theme: o } = e,
              a = (e, s = !1) => {
                var l, c, u;
                let d = (0, r.Pu)(e, o),
                  f = ex(d)(o),
                  h = {};
                for (let e in f) {
                  let p = f[e],
                    m = (0, r.Pu)(p, o);
                  e in n && (e = n[e]), ew(e, m) && (m = e_(o, m));
                  let v = t[e];
                  if ((!0 === v && (v = { property: e }), (0, r.Kn)(m))) {
                    (h[e] = null != (l = h[e]) ? l : {}),
                      (h[e] = i({}, h[e], a(m, !0)));
                    continue;
                  }
                  let g =
                    null !=
                    (u =
                      null == (c = null == v ? void 0 : v.transform)
                        ? void 0
                        : c.call(v, m, o, d))
                      ? u
                      : m;
                  g = (null == v ? void 0 : v.processResult) ? a(g, !0) : g;
                  let b = (0, r.Pu)(null == v ? void 0 : v.property, o);
                  if (
                    (!s &&
                      (null == v ? void 0 : v.static) &&
                      (h = i({}, h, (0, r.Pu)(v.static, o))),
                    b && Array.isArray(b))
                  ) {
                    for (let e of b) h[e] = g;
                    continue;
                  }
                  if (b) {
                    "&" === b && (0, r.Kn)(g) ? (h = i({}, h, g)) : (h[b] = g);
                    continue;
                  }
                  if ((0, r.Kn)(g)) {
                    h = i({}, h, g);
                    continue;
                  }
                  h[e] = g;
                }
                return h;
              };
            return a;
          })({ theme: t, pseudos: eh, configs: em })(e);
      function eS(e) {
        return (t) => {
          var n;
          let { variant: o, size: a, theme: s } = t,
            l = (function (e) {
              let t = e.__breakpoints;
              return function (e, n, o, a) {
                var s, l, c;
                if (!t) return;
                let u = {},
                  d =
                    ((c = t.toArrayValue),
                    Array.isArray(o)
                      ? o
                      : (0, r.Kn)(o)
                      ? c(o)
                      : null != o
                      ? [o]
                      : void 0);
                if (!d) return u;
                let f = d.length,
                  h = 1 === f,
                  p = !!e.parts;
                for (let o = 0; o < f; o++) {
                  let c = t.details[o],
                    f =
                      t.details[
                        (function (e, t) {
                          for (let n = t + 1; n < e.length; n++)
                            if (null != e[n]) return n;
                          return -1;
                        })(d, o)
                      ],
                    m = (function (e, t) {
                      let n = ["@media screen"];
                      return (
                        e && n.push("and", `(min-width: ${et(e)})`),
                        t && n.push("and", `(max-width: ${et(t)})`),
                        n.join(" ")
                      );
                    })(c.minW, null == f ? void 0 : f._minW),
                    v = (0, r.Pu)(null == (s = e[n]) ? void 0 : s[d[o]], a);
                  if (v) {
                    if (p) {
                      null == (l = e.parts) ||
                        l.forEach((e) => {
                          i(u, { [e]: h ? v[e] : { [m]: v[e] } });
                        });
                      continue;
                    }
                    if (!p) {
                      h ? i(u, v) : (u[m] = v);
                      continue;
                    }
                    u[m] = v;
                  }
                }
                return u;
              };
            })(s);
          return i(
            {},
            (0, r.Pu)(null != (n = e.baseStyle) ? n : {}, t),
            l(e, "sizes", a, t),
            l(e, "variants", o, t)
          );
        };
      }
      function eP(e) {
        return (function (e, t = []) {
          let n = Object.assign({}, e);
          for (let e of t) e in n && delete n[e];
          return n;
        })(e, ["styleConfig", "size", "variant", "colorScheme"]);
      }
    },
    34152: function (e, t, n) {
      "use strict";
      n.d(t, {
        jC: function () {
          return f;
        },
        mq: function () {
          return d;
        },
      });
      var r = n(3389),
        i = n(83112),
        o = n(20759),
        a = n(5175),
        s = n(12919),
        l = n(21447),
        c = n(92495);
      function u(e) {
        var t;
        let n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { styleConfig: u, ...d } = n,
          { theme: f, colorMode: h } = (function () {
            let e = (0, o.If)(),
              t = (function () {
                let e = (0, i.useContext)(r.T);
                if (!e)
                  throw Error(
                    "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
                  );
                return e;
              })();
            return { ...e, theme: t };
          })(),
          p = e ? (0, s.Wf)(f, "components.".concat(e)) : void 0,
          m = u || p,
          v = l(
            { theme: f, colorMode: h },
            null != (t = null == m ? void 0 : m.defaultProps) ? t : {},
            (0, s.YU)((0, s.CE)(d, ["children"]))
          ),
          g = (0, i.useRef)({});
        if (m) {
          let e = (0, a.Ud)(m)(v);
          c(g.current, e) || (g.current = e);
        }
        return g.current;
      }
      function d(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return u(e, t);
      }
      function f(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return u(e, t);
      }
    },
    96936: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return C;
        },
      });
      var r,
        i = n(5175),
        o = new Set([
          ...i.cC,
          "textStyle",
          "layerStyle",
          "apply",
          "noOfLines",
          "focusBorderColor",
          "errorBorderColor",
          "as",
          "__css",
          "css",
          "sx",
        ]),
        a = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
      function s(e) {
        return a.has(e) || !o.has(e);
      }
      var l = n(20759),
        c = n(12919),
        u = n(92041),
        d = n(54080),
        f = n(83112),
        h = n(32528),
        p =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        m = (0, h.Z)(function (e) {
          return (
            p.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              91 > e.charCodeAt(2))
          );
        }),
        v = n(3389),
        g = function (e, t, n) {
          var r = e.key + "-" + t.name;
          !1 === n &&
            void 0 === e.registered[r] &&
            (e.registered[r] = t.styles);
        },
        b = function (e, t, n) {
          g(e, t, n);
          var r = e.key + "-" + t.name;
          if (void 0 === e.inserted[t.name]) {
            var i = t;
            do e.insert(t === i ? "." + r : "", i, e.sheet, !0), (i = i.next);
            while (void 0 !== i);
          }
        },
        y = n(85392),
        x = n(98559),
        w = function (e) {
          return "theme" !== e;
        },
        _ = function (e) {
          return "string" == typeof e && e.charCodeAt(0) > 96 ? m : w;
        },
        k = function (e, t, n) {
          var r;
          if (t) {
            var i = t.shouldForwardProp;
            r =
              e.__emotion_forwardProp && i
                ? function (t) {
                    return e.__emotion_forwardProp(t) && i(t);
                  }
                : i;
          }
          return (
            "function" != typeof r && n && (r = e.__emotion_forwardProp), r
          );
        },
        S = function (e) {
          var t = e.cache,
            n = e.serialized,
            r = e.isStringTag;
          return (
            g(t, n, r),
            (0, x.L)(function () {
              return b(t, n, r);
            }),
            null
          );
        },
        P = function e(t, n) {
          var r,
            i,
            o = t.__emotion_real === t,
            a = (o && t.__emotion_base) || t;
          void 0 !== n && ((r = n.label), (i = n.target));
          var s = k(t, n, o),
            l = s || _(a),
            c = !l("as");
          return function () {
            var u = arguments,
              h =
                o && void 0 !== t.__emotion_styles
                  ? t.__emotion_styles.slice(0)
                  : [];
            if (
              (void 0 !== r && h.push("label:" + r + ";"),
              null == u[0] || void 0 === u[0].raw)
            )
              h.push.apply(h, u);
            else {
              h.push(u[0][0]);
              for (var p = u.length, m = 1; m < p; m++) h.push(u[m], u[0][m]);
            }
            var g = (0, v.w)(function (e, t, n) {
              var r,
                o,
                u,
                d = (c && e.as) || a,
                p = "",
                m = [],
                g = e;
              if (null == e.theme) {
                for (var b in ((g = {}), e)) g[b] = e[b];
                g.theme = f.useContext(v.T);
              }
              "string" == typeof e.className
                ? ((r = t.registered),
                  (o = e.className),
                  (u = ""),
                  o.split(" ").forEach(function (e) {
                    void 0 !== r[e] ? m.push(r[e] + ";") : (u += e + " ");
                  }),
                  (p = u))
                : null != e.className && (p = e.className + " ");
              var x = (0, y.O)(h.concat(m), t.registered, g);
              (p += t.key + "-" + x.name), void 0 !== i && (p += " " + i);
              var w = c && void 0 === s ? _(d) : l,
                k = {};
              for (var P in e) (!c || "as" !== P) && w(P) && (k[P] = e[P]);
              return (
                (k.className = p),
                (k.ref = n),
                f.createElement(
                  f.Fragment,
                  null,
                  f.createElement(S, {
                    cache: t,
                    serialized: x,
                    isStringTag: "string" == typeof d,
                  }),
                  f.createElement(d, k)
                )
              );
            });
            return (
              (g.displayName =
                void 0 !== r
                  ? r
                  : "Styled(" +
                    ("string" == typeof a
                      ? a
                      : a.displayName || a.name || "Component") +
                    ")"),
              (g.defaultProps = t.defaultProps),
              (g.__emotion_real = g),
              (g.__emotion_base = a),
              (g.__emotion_styles = h),
              (g.__emotion_forwardProp = s),
              Object.defineProperty(g, "toString", {
                value: function () {
                  return "." + i;
                },
              }),
              (g.withComponent = function (t, r) {
                return e(
                  t,
                  (0, d.Z)({}, n, r, { shouldForwardProp: k(g, r, !0) })
                ).apply(void 0, h);
              }),
              g
            );
          };
        }.bind();
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
      ].forEach(function (e) {
        P[e] = P(e);
      });
      var j = null != (r = P.default) ? r : P,
        E = (e) => {
          let { baseStyle: t } = e;
          return (e) => {
            let { theme: n, css: r, __css: o, sx: a, ...s } = e,
              l = (0, c.lw)(s, (e, t) => (0, i.ZR)(t)),
              d = (function (e, ...t) {
                if (null == e)
                  throw TypeError("Cannot convert undefined or null to object");
                let n = { ...e };
                for (let e of t)
                  if (null != e)
                    for (let t in e)
                      Object.prototype.hasOwnProperty.call(e, t) &&
                        (t in n && delete n[t], (n[t] = e[t]));
                return n;
              })({}, o, (0, u.Pu)(t, e), (0, c.YU)(l), a),
              f = (0, i.iv)(d)(e.theme);
            return r ? [f, r] : f;
          };
        };
      function A(e, t) {
        let { baseStyle: n, ...r } = null != t ? t : {};
        r.shouldForwardProp || (r.shouldForwardProp = s);
        let i = E({ baseStyle: n }),
          o = j(e, r)(i);
        return f.forwardRef(function (e, t) {
          let { colorMode: n, forced: r } = (0, l.If)();
          return f.createElement(o, {
            ref: t,
            "data-theme": r ? n : void 0,
            ...e,
          });
        });
      }
      var C = (function () {
        let e = new Map();
        return new Proxy(A, {
          apply: (e, t, n) => A(...n),
          get: (t, n) => (e.has(n) || e.set(n, A(n)), e.get(n)),
        });
      })();
    },
    56354: function (e, t, n) {
      "use strict";
      n.d(t, {
        G: function () {
          return i;
        },
      });
      var r = n(83112);
      function i(e) {
        return (0, r.forwardRef)(e);
      }
    },
    43609: function (e, t, n) {
      "use strict";
      n.d(t, {
        Lj: function () {
          return r;
        },
        Sh: function () {
          return i;
        },
        p$: function () {
          return o;
        },
      });
      var r = {
          ease: [0.25, 0.1, 0.25, 1],
          easeIn: [0.4, 0, 1, 1],
          easeOut: [0, 0, 0.2, 1],
          easeInOut: [0.4, 0, 0.2, 1],
        },
        i = {
          enter: { duration: 0.2, ease: r.easeOut },
          exit: { duration: 0.1, ease: r.easeIn },
        },
        o = {
          enter: (e, t) => ({
            ...e,
            delay: "number" == typeof t ? t : null == t ? void 0 : t.enter,
          }),
          exit: (e, t) => ({
            ...e,
            delay: "number" == typeof t ? t : null == t ? void 0 : t.exit,
          }),
        };
    },
    97763: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return u;
        },
        Q: function () {
          return c;
        },
      });
      var r = n(43609),
        i = n(29408),
        o = n(95004),
        a = n(45313),
        s = n(83112),
        l = n(20209),
        c = {
          initial: "exit",
          animate: "enter",
          exit: "exit",
          variants: {
            exit: (e) => {
              var t;
              let {
                reverse: n,
                initialScale: i,
                transition: o,
                transitionEnd: a,
                delay: s,
              } = e;
              return {
                opacity: 0,
                ...(n
                  ? { scale: i, transitionEnd: null == a ? void 0 : a.exit }
                  : {
                      transitionEnd: {
                        scale: i,
                        ...(null == a ? void 0 : a.exit),
                      },
                    }),
                transition:
                  null != (t = null == o ? void 0 : o.exit)
                    ? t
                    : r.p$.exit(r.Sh.exit, s),
              };
            },
            enter: (e) => {
              var t;
              let { transitionEnd: n, transition: i, delay: o } = e;
              return {
                opacity: 1,
                scale: 1,
                transition:
                  null != (t = null == i ? void 0 : i.enter)
                    ? t
                    : r.p$.enter(r.Sh.enter, o),
                transitionEnd: null == n ? void 0 : n.enter,
              };
            },
          },
        },
        u = (0, s.forwardRef)(function (e, t) {
          let {
              unmountOnExit: n,
              in: r,
              reverse: s = !0,
              initialScale: u = 0.95,
              className: d,
              transition: f,
              transitionEnd: h,
              delay: p,
              ...m
            } = e,
            v = !n || (r && n),
            g = r || n ? "enter" : "exit",
            b = {
              initialScale: u,
              reverse: s,
              transition: f,
              transitionEnd: h,
              delay: p,
            };
          return (0,
          l.jsx)(o.M, { custom: b, children: v && (0, l.jsx)(a.E.div, { ref: t, className: (0, i.cx)("chakra-offset-slide", d), ...c, animate: g, custom: b, ...m }) });
        });
      u.displayName = "ScaleFade";
    },
    92041: function (e, t, n) {
      "use strict";
      function r(e, ...t) {
        return "function" == typeof e ? e(...t) : e;
      }
      function i(...e) {
        return function (t) {
          e.some(
            (e) => (null == e || e(t), null == t ? void 0 : t.defaultPrevented)
          );
        };
      }
      n.d(t, {
        v0: function () {
          return i;
        },
        Pu: function () {
          return r;
        },
      });
    },
    12919: function (e, t, n) {
      "use strict";
      function r(e, t) {
        let n = {};
        return (
          Object.keys(e).forEach((r) => {
            t.includes(r) || (n[r] = e[r]);
          }),
          n
        );
      }
      n.d(t, {
        CE: function () {
          return r;
        },
        Wf: function () {
          return i;
        },
        YU: function () {
          return a;
        },
        lw: function () {
          return o;
        },
      }),
        n(21447);
      var i = ((e) => {
        let t = new WeakMap();
        return (n, r, i, o) => {
          if (void 0 === n) return e(n, r, i);
          t.has(n) || t.set(n, new Map());
          let a = t.get(n);
          if (a.has(r)) return a.get(r);
          let s = e(n, r, i, o);
          return a.set(r, s), s;
        };
      })(function (e, t, n, r) {
        let i = "string" == typeof t ? t.split(".") : [t];
        for (r = 0; r < i.length && e; r += 1) e = e[i[r]];
        return void 0 === e ? n : e;
      });
      function o(e, t) {
        let n = {};
        return (
          Object.keys(e).forEach((r) => {
            let i = e[r];
            t(i, r, e) && (n[r] = i);
          }),
          n
        );
      }
      var a = (e) => o(e, (e) => null != e);
    },
    19116: function () {
      "use strict";
      let e;
      function t(e) {
        return n(e.map(([e, t]) => Array(e).fill(t, 0, e)));
      }
      function n(e) {
        return e.reduce((e, t) => e.concat(Array.isArray(t) ? n(t) : t), []);
      }
      let r = [0, 1, 2, 3].concat(
        ...t([
          [2, 4],
          [2, 5],
          [4, 6],
          [4, 7],
          [8, 8],
          [8, 9],
          [16, 10],
          [16, 11],
          [32, 12],
          [32, 13],
          [64, 14],
          [64, 15],
          [2, 0],
          [1, 16],
          [1, 17],
          [2, 18],
          [2, 19],
          [4, 20],
          [4, 21],
          [8, 22],
          [8, 23],
          [16, 24],
          [16, 25],
          [32, 26],
          [32, 27],
          [64, 28],
          [64, 29],
        ])
      );
      function i() {
        let e = this;
        e.build_tree = function (t) {
          let n, r, i;
          let o = e.dyn_tree,
            a = e.stat_desc.static_tree,
            s = e.stat_desc.elems,
            l = -1;
          for (n = 0, t.heap_len = 0, t.heap_max = 573; n < s; n++)
            0 !== o[2 * n]
              ? ((t.heap[++t.heap_len] = l = n), (t.depth[n] = 0))
              : (o[2 * n + 1] = 0);
          for (; t.heap_len < 2; )
            (o[2 * (i = t.heap[++t.heap_len] = l < 2 ? ++l : 0)] = 1),
              (t.depth[i] = 0),
              t.opt_len--,
              a && (t.static_len -= a[2 * i + 1]);
          for (e.max_code = l, n = Math.floor(t.heap_len / 2); n >= 1; n--)
            t.pqdownheap(o, n);
          i = s;
          do
            (n = t.heap[1]),
              (t.heap[1] = t.heap[t.heap_len--]),
              t.pqdownheap(o, 1),
              (r = t.heap[1]),
              (t.heap[--t.heap_max] = n),
              (t.heap[--t.heap_max] = r),
              (o[2 * i] = o[2 * n] + o[2 * r]),
              (t.depth[i] = Math.max(t.depth[n], t.depth[r]) + 1),
              (o[2 * n + 1] = o[2 * r + 1] = i),
              (t.heap[1] = i++),
              t.pqdownheap(o, 1);
          while (t.heap_len >= 2);
          (t.heap[--t.heap_max] = t.heap[1]),
            (function (t) {
              let n, r, i, o, a, s;
              let l = e.dyn_tree,
                c = e.stat_desc.static_tree,
                u = e.stat_desc.extra_bits,
                d = e.stat_desc.extra_base,
                f = e.stat_desc.max_length,
                h = 0;
              for (o = 0; o <= 15; o++) t.bl_count[o] = 0;
              for (
                l[2 * t.heap[t.heap_max] + 1] = 0, n = t.heap_max + 1;
                n < 573;
                n++
              )
                (o = l[2 * l[2 * (r = t.heap[n]) + 1] + 1] + 1) > f &&
                  ((o = f), h++),
                  (l[2 * r + 1] = o),
                  !(r > e.max_code) &&
                    (t.bl_count[o]++,
                    (a = 0),
                    r >= d && (a = u[r - d]),
                    (s = l[2 * r]),
                    (t.opt_len += s * (o + a)),
                    c && (t.static_len += s * (c[2 * r + 1] + a)));
              if (0 !== h) {
                do {
                  for (o = f - 1; 0 === t.bl_count[o]; ) o--;
                  t.bl_count[o]--,
                    (t.bl_count[o + 1] += 2),
                    t.bl_count[f]--,
                    (h -= 2);
                } while (h > 0);
                for (o = f; 0 !== o; o--)
                  for (r = t.bl_count[o]; 0 !== r; )
                    !((i = t.heap[--n]) > e.max_code) &&
                      (l[2 * i + 1] != o &&
                        ((t.opt_len += (o - l[2 * i + 1]) * l[2 * i]),
                        (l[2 * i + 1] = o)),
                      r--);
              }
            })(t),
            (function (e, t, n) {
              let r, i, o;
              let a = [],
                s = 0;
              for (r = 1; r <= 15; r++) a[r] = s = (s + n[r - 1]) << 1;
              for (i = 0; i <= t; i++)
                0 !== (o = e[2 * i + 1]) &&
                  (e[2 * i] = (function (e, t) {
                    let n = 0;
                    do (n |= 1 & e), (e >>>= 1), (n <<= 1);
                    while (--t > 0);
                    return n >>> 1;
                  })(a[o]++, o));
            })(o, e.max_code, t.bl_count);
        };
      }
      function o(e, t, n, r, i) {
        (this.static_tree = e),
          (this.extra_bits = t),
          (this.extra_base = n),
          (this.elems = r),
          (this.max_length = i);
      }
      (i._length_code = [0, 1, 2, 3, 4, 5, 6, 7].concat(
        ...t([
          [2, 8],
          [2, 9],
          [2, 10],
          [2, 11],
          [4, 12],
          [4, 13],
          [4, 14],
          [4, 15],
          [8, 16],
          [8, 17],
          [8, 18],
          [8, 19],
          [16, 20],
          [16, 21],
          [16, 22],
          [16, 23],
          [32, 24],
          [32, 25],
          [32, 26],
          [31, 27],
          [1, 28],
        ])
      )),
        (i.base_length = [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56,
          64, 80, 96, 112, 128, 160, 192, 224, 0,
        ]),
        (i.base_dist = [
          0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384,
          512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384,
          24576,
        ]),
        (i.d_code = function (e) {
          return e < 256 ? r[e] : r[256 + (e >>> 7)];
        }),
        (i.extra_lbits = [
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0,
        ]),
        (i.extra_dbits = [
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13,
        ]),
        (i.extra_blbits = [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7,
        ]),
        (i.bl_order = [
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]);
      let a = t([
        [144, 8],
        [112, 9],
        [24, 7],
        [8, 8],
      ]);
      o.static_ltree = n(
        [
          12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124,
          252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178,
          114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58,
          186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214,
          54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94,
          222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145,
          81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25,
          153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229,
          21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109,
          237, 29, 157, 93, 221, 61, 189, 125, 253, 19, 275, 147, 403, 83, 339,
          211, 467, 51, 307, 179, 435, 115, 371, 243, 499, 11, 267, 139, 395,
          75, 331, 203, 459, 43, 299, 171, 427, 107, 363, 235, 491, 27, 283,
          155, 411, 91, 347, 219, 475, 59, 315, 187, 443, 123, 379, 251, 507, 7,
          263, 135, 391, 71, 327, 199, 455, 39, 295, 167, 423, 103, 359, 231,
          487, 23, 279, 151, 407, 87, 343, 215, 471, 55, 311, 183, 439, 119,
          375, 247, 503, 15, 271, 143, 399, 79, 335, 207, 463, 47, 303, 175,
          431, 111, 367, 239, 495, 31, 287, 159, 415, 95, 351, 223, 479, 63,
          319, 191, 447, 127, 383, 255, 511, 0, 64, 32, 96, 16, 80, 48, 112, 8,
          72, 40, 104, 24, 88, 56, 120, 4, 68, 36, 100, 20, 84, 52, 116, 3, 131,
          67, 195, 35, 163, 99, 227,
        ].map((e, t) => [e, a[t]])
      );
      let s = t([[30, 5]]);
      function l(e, t, n, r, i) {
        (this.good_length = e),
          (this.max_lazy = t),
          (this.nice_length = n),
          (this.max_chain = r),
          (this.func = i);
      }
      (o.static_dtree = n(
        [
          0, 16, 8, 24, 4, 20, 12, 28, 2, 18, 10, 26, 6, 22, 14, 30, 1, 17, 9,
          25, 5, 21, 13, 29, 3, 19, 11, 27, 7, 23,
        ].map((e, t) => [e, s[t]])
      )),
        (o.static_l_desc = new o(o.static_ltree, i.extra_lbits, 257, 286, 15)),
        (o.static_d_desc = new o(o.static_dtree, i.extra_dbits, 0, 30, 15)),
        (o.static_bl_desc = new o(null, i.extra_blbits, 0, 19, 7));
      let c = [
        new l(0, 0, 0, 0, 0),
        new l(4, 4, 8, 4, 1),
        new l(4, 5, 16, 8, 1),
        new l(4, 6, 32, 32, 1),
        new l(4, 4, 16, 16, 2),
        new l(8, 16, 32, 32, 2),
        new l(8, 16, 128, 128, 2),
        new l(8, 32, 128, 256, 2),
        new l(32, 128, 258, 1024, 2),
        new l(32, 258, 258, 4096, 2),
      ];
      function u(e, t, n, r) {
        let i = e[2 * t],
          o = e[2 * n];
        return i < o || (i == o && r[t] <= r[n]);
      }
      function d() {
        let e,
          t,
          n,
          r,
          a,
          s,
          l,
          d,
          f,
          h,
          p,
          m,
          v,
          g,
          b,
          y,
          x,
          w,
          _,
          k,
          S,
          P,
          j,
          E,
          A,
          C,
          M,
          z,
          R,
          I,
          T,
          O,
          B,
          L,
          D,
          N,
          F,
          U,
          G;
        let q = this,
          W = new i(),
          H = new i(),
          $ = new i();
        function X() {
          let e;
          for (e = 0; e < 286; e++) T[2 * e] = 0;
          for (e = 0; e < 30; e++) O[2 * e] = 0;
          for (e = 0; e < 19; e++) B[2 * e] = 0;
          (T[512] = 1), (q.opt_len = q.static_len = 0), (D = N = 0);
        }
        function V(e, t) {
          let n,
            r = -1,
            i = e[1],
            o = 0,
            a = 7,
            s = 4;
          0 === i && ((a = 138), (s = 3)), (e[(t + 1) * 2 + 1] = 65535);
          for (let l = 0; l <= t; l++)
            (n = i),
              (i = e[(l + 1) * 2 + 1]),
              (++o < a && n == i) ||
                (o < s
                  ? (B[2 * n] += o)
                  : 0 !== n
                  ? (n != r && B[2 * n]++, B[32]++)
                  : o <= 10
                  ? B[34]++
                  : B[36]++,
                (o = 0),
                (r = n),
                0 === i
                  ? ((a = 138), (s = 3))
                  : n == i
                  ? ((a = 6), (s = 3))
                  : ((a = 7), (s = 4)));
        }
        function Y(e) {
          q.pending_buf[q.pending++] = e;
        }
        function Z(e) {
          Y(255 & e), Y((e >>> 8) & 255);
        }
        function Q(e, t) {
          G > 16 - t
            ? (Z((U |= (e << G) & 65535)), (U = e >>> (16 - G)), (G += t - 16))
            : ((U |= (e << G) & 65535), (G += t));
        }
        function K(e, t) {
          let n = 2 * e;
          Q(65535 & t[n], 65535 & t[n + 1]);
        }
        function J(e, t) {
          let n, r;
          let i = -1,
            o = e[1],
            a = 0,
            s = 7,
            l = 4;
          for (0 === o && ((s = 138), (l = 3)), n = 0; n <= t; n++)
            if (((r = o), (o = e[(n + 1) * 2 + 1]), !(++a < s) || r != o)) {
              if (a < l)
                do K(r, B);
                while (0 != --a);
              else
                0 !== r
                  ? (r != i && (K(r, B), a--), K(16, B), Q(a - 3, 2))
                  : a <= 10
                  ? (K(17, B), Q(a - 3, 3))
                  : (K(18, B), Q(a - 11, 7));
              (a = 0),
                (i = r),
                0 === o
                  ? ((s = 138), (l = 3))
                  : r == o
                  ? ((s = 6), (l = 3))
                  : ((s = 7), (l = 4));
            }
        }
        function ee() {
          16 == G
            ? (Z(U), (U = 0), (G = 0))
            : G >= 8 && (Y(255 & U), (U >>>= 8), (G -= 8));
        }
        function et(e, t) {
          let n, r, o;
          if (
            ((q.dist_buf[D] = e),
            (q.lc_buf[D] = 255 & t),
            D++,
            0 === e
              ? T[2 * t]++
              : (N++,
                e--,
                T[(i._length_code[t] + 256 + 1) * 2]++,
                O[2 * i.d_code(e)]++),
            (8191 & D) == 0 && M > 2)
          ) {
            for (o = 0, n = 8 * D, r = S - x; o < 30; o++)
              n += O[2 * o] * (5 + i.extra_dbits[o]);
            if (((n >>>= 3), N < Math.floor(D / 2) && n < Math.floor(r / 2)))
              return !0;
          }
          return D == L - 1;
        }
        function en(e, t) {
          let n, r, o, a;
          let s = 0;
          if (0 !== D)
            do
              (n = q.dist_buf[s]),
                (r = q.lc_buf[s]),
                s++,
                0 === n
                  ? K(r, e)
                  : (K((o = i._length_code[r]) + 256 + 1, e),
                    0 !== (a = i.extra_lbits[o]) &&
                      Q((r -= i.base_length[o]), a),
                    n--,
                    K((o = i.d_code(n)), t),
                    0 !== (a = i.extra_dbits[o]) &&
                      Q((n -= i.base_dist[o]), a));
            while (s < D);
          K(256, e), (F = e[513]);
        }
        function er() {
          G > 8 ? Z(U) : G > 0 && Y(255 & U), (U = 0), (G = 0);
        }
        function ei(e, t, n) {
          Q(0 + (n ? 1 : 0), 3),
            er(),
            (F = 8),
            Z(t),
            Z(~t),
            q.pending_buf.set(d.subarray(e, e + t), q.pending),
            (q.pending += t);
        }
        function eo(t) {
          var n, r;
          let a, s, l;
          (n = x >= 0 ? x : -1),
            (r = S - x),
            (l = 0),
            M > 0
              ? (W.build_tree(q),
                H.build_tree(q),
                (l = (function () {
                  let e;
                  for (
                    V(T, W.max_code), V(O, H.max_code), $.build_tree(q), e = 18;
                    e >= 3 && 0 === B[2 * i.bl_order[e] + 1];
                    e--
                  );
                  return (q.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
                })()),
                (a = (q.opt_len + 3 + 7) >>> 3),
                (s = (q.static_len + 3 + 7) >>> 3) <= a && (a = s))
              : (a = s = r + 5),
            r + 4 <= a && -1 != n
              ? ei(n, r, t)
              : s == a
              ? (Q(2 + (t ? 1 : 0), 3), en(o.static_ltree, o.static_dtree))
              : (Q(4 + (t ? 1 : 0), 3),
                (function (e, t, n) {
                  let r;
                  for (
                    Q(e - 257, 5), Q(t - 1, 5), Q(n - 4, 4), r = 0;
                    r < n;
                    r++
                  )
                    Q(B[2 * i.bl_order[r] + 1], 3);
                  J(T, e - 1), J(O, t - 1);
                })(W.max_code + 1, H.max_code + 1, l + 1),
                en(T, O)),
            X(),
            t && er(),
            (x = S),
            e.flush_pending();
        }
        function ea() {
          let t, n, r, i;
          do {
            if (0 == (i = f - j - S) && 0 === S && 0 === j) i = a;
            else if (-1 == i) i--;
            else if (S >= a + a - 262) {
              d.set(d.subarray(a, a + a), 0),
                (P -= a),
                (S -= a),
                (x -= a),
                (r = t = v);
              do (n = 65535 & p[--r]), (p[r] = n >= a ? n - a : 0);
              while (0 != --t);
              r = t = a;
              do (n = 65535 & h[--r]), (h[r] = n >= a ? n - a : 0);
              while (0 != --t);
              i += a;
            }
            if (0 === e.avail_in) return;
            (t = e.read_buf(d, S + j, i)),
              (j += t) >= 3 &&
                (m = (((m = 255 & d[S]) << y) ^ (255 & d[S + 1])) & b);
          } while (j < 262 && 0 !== e.avail_in);
        }
        function es(e) {
          let t,
            n,
            r = A,
            i = S,
            o = E,
            s = S > a - 262 ? S - (a - 262) : 0,
            c = I,
            u = l,
            f = S + 258,
            p = d[i + o - 1],
            m = d[i + o];
          E >= R && (r >>= 2), c > j && (c = j);
          do {
            if (
              d[(t = e) + o] != m ||
              d[t + o - 1] != p ||
              d[t] != d[i] ||
              d[++t] != d[i + 1]
            )
              continue;
            (i += 2), t++;
            do;
            while (
              d[++i] == d[++t] &&
              d[++i] == d[++t] &&
              d[++i] == d[++t] &&
              d[++i] == d[++t] &&
              d[++i] == d[++t] &&
              d[++i] == d[++t] &&
              d[++i] == d[++t] &&
              d[++i] == d[++t] &&
              i < f
            );
            if (((n = 258 - (f - i)), (i = f - 258), n > o)) {
              if (((P = e), (o = n), n >= c)) break;
              (p = d[i + o - 1]), (m = d[i + o]);
            }
          } while ((e = 65535 & h[e & u]) > s && 0 != --r);
          return o <= j ? o : j;
        }
        (q.depth = []),
          (q.bl_count = []),
          (q.heap = []),
          (T = []),
          (O = []),
          (B = []),
          (q.pqdownheap = function (e, t) {
            let n = q.heap,
              r = n[t],
              i = t << 1;
            for (
              ;
              i <= q.heap_len &&
              (i < q.heap_len && u(e, n[i + 1], n[i], q.depth) && i++,
              !u(e, r, n[i], q.depth));

            )
              (n[t] = n[i]), (t = i), (i <<= 1);
            n[t] = r;
          }),
          (q.deflateInit = function (e, i, u, _, P, D) {
            return (_ || (_ = 8),
            P || (P = 8),
            D || (D = 0),
            (e.msg = null),
            -1 == i && (i = 6),
            P < 1 ||
              P > 9 ||
              8 != _ ||
              u < 9 ||
              u > 15 ||
              i < 0 ||
              i > 9 ||
              D < 0 ||
              D > 2)
              ? -2
              : ((e.dstate = q),
                (l = (a = 1 << (s = u)) - 1),
                (b = (v = 1 << (g = P + 7)) - 1),
                (y = Math.floor((g + 3 - 1) / 3)),
                (d = new Uint8Array(2 * a)),
                (h = []),
                (p = []),
                (L = 1 << (P + 6)),
                (q.pending_buf = new Uint8Array(4 * L)),
                (n = 4 * L),
                (q.dist_buf = new Uint16Array(L)),
                (q.lc_buf = new Uint8Array(L)),
                (M = i),
                (z = D),
                (e.total_in = e.total_out = 0),
                (e.msg = null),
                (q.pending = 0),
                (q.pending_out = 0),
                (t = 113),
                (r = 0),
                (W.dyn_tree = T),
                (W.stat_desc = o.static_l_desc),
                (H.dyn_tree = O),
                (H.stat_desc = o.static_d_desc),
                ($.dyn_tree = B),
                ($.stat_desc = o.static_bl_desc),
                (U = 0),
                (G = 0),
                (F = 8),
                X(),
                (function () {
                  (f = 2 * a), (p[v - 1] = 0);
                  for (let e = 0; e < v - 1; e++) p[e] = 0;
                  (C = c[M].max_lazy),
                    (R = c[M].good_length),
                    (I = c[M].nice_length),
                    (A = c[M].max_chain),
                    (S = 0),
                    (x = 0),
                    (j = 0),
                    (w = E = 2),
                    (k = 0),
                    (m = 0);
                })(),
                0);
          }),
          (q.deflateEnd = function () {
            return 42 != t && 113 != t && 666 != t
              ? -2
              : ((q.lc_buf = null),
                (q.dist_buf = null),
                (q.pending_buf = null),
                (p = null),
                (h = null),
                (d = null),
                (q.dstate = null),
                113 == t ? -3 : 0);
          }),
          (q.deflateParams = function (e, t, n) {
            let r = 0;
            return (-1 == t && (t = 6), t < 0 || t > 9 || n < 0 || n > 2)
              ? -2
              : (c[M].func != c[t].func &&
                  0 !== e.total_in &&
                  (r = e.deflate(1)),
                M != t &&
                  ((C = c[(M = t)].max_lazy),
                  (R = c[M].good_length),
                  (I = c[M].nice_length),
                  (A = c[M].max_chain)),
                (z = n),
                r);
          }),
          (q.deflateSetDictionary = function (e, n, r) {
            let i = r,
              o,
              s = 0;
            if (!n || 42 != t) return -2;
            if (i < 3) return 0;
            for (
              i > a - 262 && (s = r - (i = a - 262)),
                d.set(n.subarray(s, s + i), 0),
                S = i,
                x = i,
                m = (((m = 255 & d[0]) << y) ^ (255 & d[1])) & b,
                o = 0;
              o <= i - 3;
              o++
            )
              (m = ((m << y) ^ (255 & d[o + 2])) & b),
                (h[o & l] = p[m]),
                (p[m] = o);
            return 0;
          }),
          (q.deflate = function (i, u) {
            let f, g, A, R, I;
            if (u > 4 || u < 0) return -2;
            if (
              !i.next_out ||
              (!i.next_in && 0 !== i.avail_in) ||
              (666 == t && 4 != u)
            )
              return (i.msg = "stream error"), -2;
            if (0 === i.avail_out) return (i.msg = "buffer error"), -5;
            if (((e = i), (R = r), (r = u), 42 == t)) {
              var T;
              (g = (8 + ((s - 8) << 4)) << 8),
                (A = ((M - 1) & 255) >> 1) > 3 && (A = 3),
                (g |= A << 6),
                0 !== S && (g |= 32),
                (g += 31 - (g % 31)),
                (t = 113),
                Y(((T = g) >> 8) & 255),
                Y(255 & T);
            }
            if (0 !== q.pending) {
              if ((e.flush_pending(), 0 === e.avail_out)) return (r = -1), 0;
            } else if (0 === e.avail_in && u <= R && 4 != u)
              return (e.msg = "buffer error"), -5;
            if (666 == t && 0 !== e.avail_in)
              return (i.msg = "buffer error"), -5;
            if (0 !== e.avail_in || 0 !== j || (0 != u && 666 != t)) {
              switch (((I = -1), c[M].func)) {
                case 0:
                  I = (function (t) {
                    let r,
                      i = 65535;
                    for (65535 > n - 5 && (i = n - 5); ; ) {
                      if (j <= 1) {
                        if ((ea(), 0 === j && 0 == t)) return 0;
                        if (0 === j) break;
                      }
                      if (
                        ((S += j),
                        (j = 0),
                        (r = x + i),
                        ((0 === S || S >= r) &&
                          ((j = S - r), (S = r), eo(!1), 0 === e.avail_out)) ||
                          (S - x >= a - 262 && (eo(!1), 0 === e.avail_out)))
                      )
                        return 0;
                    }
                    return (eo(4 == t), 0 === e.avail_out)
                      ? 4 == t
                        ? 2
                        : 0
                      : 4 == t
                      ? 3
                      : 1;
                  })(u);
                  break;
                case 1:
                  I = (function (t) {
                    let n,
                      r = 0;
                    for (;;) {
                      if (j < 262) {
                        if ((ea(), j < 262 && 0 == t)) return 0;
                        if (0 === j) break;
                      }
                      if (
                        (j >= 3 &&
                          ((r =
                            65535 & p[(m = ((m << y) ^ (255 & d[S + 2])) & b)]),
                          (h[S & l] = p[m]),
                          (p[m] = S)),
                        0 !== r &&
                          ((S - r) & 65535) <= a - 262 &&
                          2 != z &&
                          (w = es(r)),
                        w >= 3)
                      ) {
                        if (
                          ((n = et(S - P, w - 3)), (j -= w), w <= C && j >= 3)
                        ) {
                          w--;
                          do
                            S++,
                              (r =
                                65535 &
                                p[(m = ((m << y) ^ (255 & d[S + 2])) & b)]),
                              (h[S & l] = p[m]),
                              (p[m] = S);
                          while (0 != --w);
                          S++;
                        } else
                          (S += w),
                            (w = 0),
                            (m =
                              (((m = 255 & d[S]) << y) ^ (255 & d[S + 1])) & b);
                      } else (n = et(0, 255 & d[S])), j--, S++;
                      if (n && (eo(!1), 0 === e.avail_out)) return 0;
                    }
                    return (eo(4 == t), 0 === e.avail_out)
                      ? 4 == t
                        ? 2
                        : 0
                      : 4 == t
                      ? 3
                      : 1;
                  })(u);
                  break;
                case 2:
                  I = (function (t) {
                    let n,
                      r,
                      i = 0;
                    for (;;) {
                      if (j < 262) {
                        if ((ea(), j < 262 && 0 == t)) return 0;
                        if (0 === j) break;
                      }
                      if (
                        (j >= 3 &&
                          ((i =
                            65535 & p[(m = ((m << y) ^ (255 & d[S + 2])) & b)]),
                          (h[S & l] = p[m]),
                          (p[m] = S)),
                        (E = w),
                        (_ = P),
                        (w = 2),
                        0 !== i &&
                          E < C &&
                          ((S - i) & 65535) <= a - 262 &&
                          (2 != z && (w = es(i)),
                          w <= 5 &&
                            (1 == z || (3 == w && S - P > 4096)) &&
                            (w = 2)),
                        E >= 3 && w <= E)
                      ) {
                        (r = S + j - 3),
                          (n = et(S - 1 - _, E - 3)),
                          (j -= E - 1),
                          (E -= 2);
                        do
                          ++S <= r &&
                            ((i =
                              65535 &
                              p[(m = ((m << y) ^ (255 & d[S + 2])) & b)]),
                            (h[S & l] = p[m]),
                            (p[m] = S));
                        while (0 != --E);
                        if (
                          ((k = 0),
                          (w = 2),
                          S++,
                          n && (eo(!1), 0 === e.avail_out))
                        )
                          return 0;
                      } else if (0 !== k) {
                        if (
                          ((n = et(0, 255 & d[S - 1])) && eo(!1),
                          S++,
                          j--,
                          0 === e.avail_out)
                        )
                          return 0;
                      } else (k = 1), S++, j--;
                    }
                    return (0 !== k && ((n = et(0, 255 & d[S - 1])), (k = 0)),
                    eo(4 == t),
                    0 === e.avail_out)
                      ? 4 == t
                        ? 2
                        : 0
                      : 4 == t
                      ? 3
                      : 1;
                  })(u);
              }
              if (((2 == I || 3 == I) && (t = 666), 0 == I || 2 == I))
                return 0 === e.avail_out && (r = -1), 0;
              if (1 == I) {
                if (1 == u)
                  Q(2, 3),
                    K(256, o.static_ltree),
                    ee(),
                    1 + F + 10 - G < 9 &&
                      (Q(2, 3), K(256, o.static_ltree), ee()),
                    (F = 7);
                else if ((ei(0, 0, !1), 3 == u))
                  for (f = 0; f < v; f++) p[f] = 0;
                if ((e.flush_pending(), 0 === e.avail_out)) return (r = -1), 0;
              }
            }
            return 4 != u ? 0 : 1;
          });
      }
      function f() {
        (this.next_in_index = 0),
          (this.next_out_index = 0),
          (this.avail_in = 0),
          (this.total_in = 0),
          (this.avail_out = 0),
          (this.total_out = 0);
      }
      f.prototype = {
        deflateInit(e, t) {
          return (
            (this.dstate = new d()),
            t || (t = 15),
            this.dstate.deflateInit(this, e, t)
          );
        },
        deflate(e) {
          return this.dstate ? this.dstate.deflate(this, e) : -2;
        },
        deflateEnd() {
          if (!this.dstate) return -2;
          let e = this.dstate.deflateEnd();
          return (this.dstate = null), e;
        },
        deflateParams(e, t) {
          return this.dstate ? this.dstate.deflateParams(this, e, t) : -2;
        },
        deflateSetDictionary(e, t) {
          return this.dstate
            ? this.dstate.deflateSetDictionary(this, e, t)
            : -2;
        },
        read_buf(e, t, n) {
          let r = this.avail_in;
          return (r > n && (r = n), 0 === r)
            ? 0
            : ((this.avail_in -= r),
              e.set(
                this.next_in.subarray(
                  this.next_in_index,
                  this.next_in_index + r
                ),
                t
              ),
              (this.next_in_index += r),
              (this.total_in += r),
              r);
        },
        flush_pending() {
          let e = this.dstate.pending;
          e > this.avail_out && (e = this.avail_out),
            0 !== e &&
              (this.next_out.set(
                this.dstate.pending_buf.subarray(
                  this.dstate.pending_out,
                  this.dstate.pending_out + e
                ),
                this.next_out_index
              ),
              (this.next_out_index += e),
              (this.dstate.pending_out += e),
              (this.total_out += e),
              (this.avail_out -= e),
              (this.dstate.pending -= e),
              0 === this.dstate.pending && (this.dstate.pending_out = 0));
        },
      };
      let h = [
          0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383,
          32767, 65535,
        ],
        p = [
          96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0,
          8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0,
          0, 8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9,
          144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104,
          0, 8, 40, 0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7,
          4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0,
          9, 200, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132,
          0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7,
          83, 0, 8, 124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0,
          9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82,
          0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81,
          7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0,
          9, 228, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122,
          0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8,
          10, 0, 8, 138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192,
          8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102,
          0, 8, 38, 0, 9, 172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7,
          9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0,
          9, 220, 82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8,
          142, 0, 8, 78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131,
          82, 7, 31, 0, 8, 113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97, 0, 8,
          33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0,
          8, 89, 0, 8, 25, 0, 9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210,
          81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8,
          73, 0, 9, 242, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0,
          8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9,
          170, 0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0,
          8, 29, 0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7,
          23, 0, 8, 109, 0, 8, 45, 0, 9, 186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0,
          9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8,
          115, 0, 8, 51, 0, 9, 198, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 166, 0,
          8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0,
          9, 150, 84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 214, 82, 7, 19, 0, 8,
          107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246,
          80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8,
          55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174, 0, 8, 7, 0,
          8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 158,
          84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8,
          47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 254, 96, 7, 256,
          0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9,
          193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0, 8, 0, 0, 8, 128, 0,
          8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59,
          0, 8, 120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8, 104, 0, 8, 40, 0, 9,
          177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0,
          8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 201, 81, 7,
          13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0,
          9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 153, 84, 7, 83, 0, 8, 124,
          0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8,
          12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0, 8, 82, 0, 8, 18, 85,
          8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8,
          98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 229, 80,
          7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58,
          0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10, 0, 8,
          138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83,
          7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0, 8, 38,
          0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8,
          94, 0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221,
          82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8,
          78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31,
          0, 8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9,
          163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0,
          8, 25, 0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7,
          17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0,
          9, 243, 80, 7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8,
          117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171,
          0, 8, 5, 0, 8, 133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29,
          0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8,
          109, 0, 8, 45, 0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251,
          80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8,
          51, 0, 9, 199, 81, 7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0,
          8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151,
          84, 7, 67, 0, 8, 123, 0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8,
          43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0,
          8, 87, 0, 8, 23, 192, 8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 207,
          81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8,
          71, 0, 9, 239, 80, 7, 9, 0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0,
          8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9,
          191, 0, 8, 15, 0, 8, 143, 0, 8, 79, 0, 9, 255,
        ],
        m = [
          80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025,
          85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193,
          82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5,
          385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5,
          24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90,
          5, 3073, 86, 5, 193, 192, 5, 24577,
        ],
        v = [
          3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
          59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
        ],
        g = [
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 112, 112,
        ],
        b = [
          1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
          513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
          24577,
        ],
        y = [
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13,
        ];
      function x() {
        let e, t, n, r, i, o;
        function a(e, t, a, s, l, c, u, d, f, h, p) {
          let m, v, g, b, y, x, w, _, k, S, P, j, E, A, C;
          (S = 0), (y = a);
          do n[e[t + S]]++, S++, y--;
          while (0 !== y);
          if (n[0] == a) return (u[0] = -1), (d[0] = 0), 0;
          for (x = 1, _ = d[0]; x <= 15 && 0 === n[x]; x++);
          for (w = x, _ < x && (_ = x), y = 15; 0 !== y && 0 === n[y]; y--);
          for (
            g = y, _ > y && (_ = y), d[0] = _, A = 1 << x;
            x < y;
            x++, A <<= 1
          )
            if ((A -= n[x]) < 0) return -3;
          if ((A -= n[y]) < 0) return -3;
          for (n[y] += A, o[1] = x = 0, S = 1, E = 2; 0 != --y; )
            (o[E] = x += n[S]), E++, S++;
          (y = 0), (S = 0);
          do 0 !== (x = e[t + S]) && (p[o[x]++] = y), S++;
          while (++y < a);
          for (
            a = o[g],
              o[0] = y = 0,
              S = 0,
              b = -1,
              j = -_,
              i[0] = 0,
              P = 0,
              C = 0;
            w <= g;
            w++
          )
            for (m = n[w]; 0 != m--; ) {
              for (; w > j + _; ) {
                if (
                  (b++,
                  (j += _),
                  (C = (C = g - j) > _ ? _ : C),
                  (v = 1 << (x = w - j)) > m + 1 &&
                    ((v -= m + 1), (E = w), x < C))
                )
                  for (; ++x < C && !((v <<= 1) <= n[++E]); ) v -= n[E];
                if (((C = 1 << x), h[0] + C > 1440)) return -3;
                (i[b] = P = h[0]),
                  (h[0] += C),
                  0 !== b
                    ? ((o[b] = y),
                      (r[0] = x),
                      (r[1] = _),
                      (x = y >>> (j - _)),
                      (r[2] = P - i[b - 1] - x),
                      f.set(r, (i[b - 1] + x) * 3))
                    : (u[0] = P);
              }
              for (
                r[1] = w - j,
                  S >= a
                    ? (r[0] = 192)
                    : p[S] < s
                    ? ((r[0] = p[S] < 256 ? 0 : 96), (r[2] = p[S++]))
                    : ((r[0] = c[p[S] - s] + 16 + 64), (r[2] = l[p[S++] - s])),
                  v = 1 << (w - j),
                  x = y >>> j;
                x < C;
                x += v
              )
                f.set(r, (P + x) * 3);
              for (x = 1 << (w - 1); (y & x) != 0; x >>>= 1) y ^= x;
              for (y ^= x, k = (1 << j) - 1; (y & k) != o[b]; )
                b--, (j -= _), (k = (1 << j) - 1);
            }
          return 0 !== A && 1 != g ? -5 : 0;
        }
        function s(a) {
          let s;
          for (
            e ||
              ((e = []),
              (t = []),
              (n = new Int32Array(16)),
              (r = []),
              (i = new Int32Array(15)),
              (o = new Int32Array(16))),
              t.length < a && (t = []),
              s = 0;
            s < a;
            s++
          )
            t[s] = 0;
          for (s = 0; s < 16; s++) n[s] = 0;
          for (s = 0; s < 3; s++) r[s] = 0;
          i.set(n.subarray(0, 15), 0), o.set(n.subarray(0, 16), 0);
        }
        (this.inflate_trees_bits = function (n, r, i, o, l) {
          let c;
          return (
            s(19),
            (e[0] = 0),
            -3 == (c = a(n, 0, 19, 19, null, null, i, r, o, e, t))
              ? (l.msg = "oversubscribed dynamic bit lengths tree")
              : (-5 == c || 0 === r[0]) &&
                ((l.msg = "incomplete dynamic bit lengths tree"), (c = -3)),
            c
          );
        }),
          (this.inflate_trees_dynamic = function (n, r, i, o, l, c, u, d, f) {
            let h;
            return (s(288),
            (e[0] = 0),
            0 != (h = a(i, 0, n, 257, v, g, c, o, d, e, t)) || 0 === o[0])
              ? (-3 == h
                  ? (f.msg = "oversubscribed literal/length tree")
                  : -4 != h &&
                    ((f.msg = "incomplete literal/length tree"), (h = -3)),
                h)
              : (s(288),
                0 != (h = a(i, n, r, 0, b, y, u, l, d, e, t)) ||
                  (0 === l[0] && n > 257))
              ? (-3 == h
                  ? (f.msg = "oversubscribed distance tree")
                  : -5 == h
                  ? ((f.msg = "incomplete distance tree"), (h = -3))
                  : -4 != h &&
                    ((f.msg = "empty distance tree with lengths"), (h = -3)),
                h)
              : 0;
          });
      }
      function w() {
        let e, t, n, r;
        let i = 0,
          o = 0,
          a = 0,
          s = 0,
          l = 0,
          c = 0,
          u = 0,
          d = 0,
          f = 0,
          p = 0;
        (this.init = function (i, o, a, s, l, c) {
          (e = 0),
            (u = i),
            (d = o),
            (n = a),
            (f = s),
            (r = l),
            (p = c),
            (t = null);
        }),
          (this.proc = function (m, v, g) {
            let b, y, x, w, _, k, S;
            let P = 0,
              j = 0,
              E = 0;
            for (
              E = v.next_in_index,
                w = v.avail_in,
                P = m.bitb,
                j = m.bitk,
                k = (_ = m.write) < m.read ? m.read - _ - 1 : m.end - _;
              ;

            )
              switch (e) {
                case 0:
                  if (
                    k >= 258 &&
                    w >= 10 &&
                    ((m.bitb = P),
                    (m.bitk = j),
                    (v.avail_in = w),
                    (v.total_in += E - v.next_in_index),
                    (v.next_in_index = E),
                    (m.write = _),
                    (g = (function (e, t, n, r, i, o, a, s) {
                      let l, c, u, d, f, p, m, v, g, b, y, x, w, _, k, S;
                      (m = s.next_in_index),
                        (v = s.avail_in),
                        (f = a.bitb),
                        (p = a.bitk),
                        (b =
                          (g = a.write) < a.read ? a.read - g - 1 : a.end - g),
                        (y = h[e]),
                        (x = h[t]);
                      do {
                        for (; p < 20; )
                          v--, (f |= (255 & s.read_byte(m++)) << p), (p += 8);
                        if (
                          ((l = f & y),
                          0 === (d = (c = n)[(S = ((u = r) + l) * 3)]))
                        ) {
                          (f >>= c[S + 1]),
                            (p -= c[S + 1]),
                            (a.win[g++] = c[S + 2]),
                            b--;
                          continue;
                        }
                        for (;;) {
                          if (
                            ((f >>= c[S + 1]), (p -= c[S + 1]), (16 & d) != 0)
                          ) {
                            for (
                              d &= 15,
                                w = c[S + 2] + (f & h[d]),
                                f >>= d,
                                p -= d;
                              p < 15;

                            )
                              v--,
                                (f |= (255 & s.read_byte(m++)) << p),
                                (p += 8);
                            for (
                              l = f & x, d = (c = i)[(S = ((u = o) + l) * 3)];
                              ;

                            ) {
                              if (
                                ((f >>= c[S + 1]),
                                (p -= c[S + 1]),
                                (16 & d) != 0)
                              ) {
                                for (d &= 15; p < d; )
                                  v--,
                                    (f |= (255 & s.read_byte(m++)) << p),
                                    (p += 8);
                                if (
                                  ((_ = c[S + 2] + (f & h[d])),
                                  (f >>= d),
                                  (p -= d),
                                  (b -= w),
                                  g >= _)
                                )
                                  (k = g - _),
                                    g - k > 0 && 2 > g - k
                                      ? ((a.win[g++] = a.win[k++]),
                                        (a.win[g++] = a.win[k++]))
                                      : (a.win.set(a.win.subarray(k, k + 2), g),
                                        (g += 2),
                                        (k += 2)),
                                    (w -= 2);
                                else {
                                  k = g - _;
                                  do k += a.end;
                                  while (k < 0);
                                  if (w > (d = a.end - k)) {
                                    if (((w -= d), g - k > 0 && d > g - k))
                                      do a.win[g++] = a.win[k++];
                                      while (0 != --d);
                                    else
                                      a.win.set(a.win.subarray(k, k + d), g),
                                        (g += d),
                                        (k += d),
                                        (d = 0);
                                    k = 0;
                                  }
                                }
                                if (g - k > 0 && w > g - k)
                                  do a.win[g++] = a.win[k++];
                                  while (0 != --w);
                                else
                                  a.win.set(a.win.subarray(k, k + w), g),
                                    (g += w),
                                    (k += w),
                                    (w = 0);
                                break;
                              }
                              if ((64 & d) != 0)
                                return (
                                  (s.msg = "invalid distance code"),
                                  (w =
                                    p >> 3 < (w = s.avail_in - v) ? p >> 3 : w),
                                  (v += w),
                                  (m -= w),
                                  (p -= w << 3),
                                  (a.bitb = f),
                                  (a.bitk = p),
                                  (s.avail_in = v),
                                  (s.total_in += m - s.next_in_index),
                                  (s.next_in_index = m),
                                  (a.write = g),
                                  -3
                                );
                              (l += c[S + 2] + (f & h[d])),
                                (d = c[(S = (u + l) * 3)]);
                            }
                            break;
                          }
                          if ((64 & d) == 0) {
                            if (
                              ((l += c[S + 2] + (f & h[d])),
                              0 === (d = c[(S = (u + l) * 3)]))
                            ) {
                              (f >>= c[S + 1]),
                                (p -= c[S + 1]),
                                (a.win[g++] = c[S + 2]),
                                b--;
                              break;
                            }
                          } else if ((32 & d) != 0)
                            return (
                              (w = p >> 3 < (w = s.avail_in - v) ? p >> 3 : w),
                              (v += w),
                              (m -= w),
                              (p -= w << 3),
                              (a.bitb = f),
                              (a.bitk = p),
                              (s.avail_in = v),
                              (s.total_in += m - s.next_in_index),
                              (s.next_in_index = m),
                              (a.write = g),
                              1
                            );
                          else
                            return (
                              (s.msg = "invalid literal/length code"),
                              (w = p >> 3 < (w = s.avail_in - v) ? p >> 3 : w),
                              (v += w),
                              (m -= w),
                              (p -= w << 3),
                              (a.bitb = f),
                              (a.bitk = p),
                              (s.avail_in = v),
                              (s.total_in += m - s.next_in_index),
                              (s.next_in_index = m),
                              (a.write = g),
                              -3
                            );
                        }
                      } while (b >= 258 && v >= 10);
                      return (
                        (w = p >> 3 < (w = s.avail_in - v) ? p >> 3 : w),
                        (v += w),
                        (m -= w),
                        (p -= w << 3),
                        (a.bitb = f),
                        (a.bitk = p),
                        (s.avail_in = v),
                        (s.total_in += m - s.next_in_index),
                        (s.next_in_index = m),
                        (a.write = g),
                        0
                      );
                    })(u, d, n, f, r, p, m, v)),
                    (E = v.next_in_index),
                    (w = v.avail_in),
                    (P = m.bitb),
                    (j = m.bitk),
                    (k = (_ = m.write) < m.read ? m.read - _ - 1 : m.end - _),
                    0 != g)
                  ) {
                    e = 1 == g ? 7 : 9;
                    break;
                  }
                  (a = u), (t = n), (o = f), (e = 1);
                case 1:
                  for (b = a; j < b; ) {
                    if (0 === w)
                      return (
                        (m.bitb = P),
                        (m.bitk = j),
                        (v.avail_in = w),
                        (v.total_in += E - v.next_in_index),
                        (v.next_in_index = E),
                        (m.write = _),
                        m.inflate_flush(v, g)
                      );
                    (g = 0),
                      w--,
                      (P |= (255 & v.read_byte(E++)) << j),
                      (j += 8);
                  }
                  if (
                    ((y = (o + (P & h[b])) * 3),
                    (P >>>= t[y + 1]),
                    (j -= t[y + 1]),
                    0 === (x = t[y]))
                  ) {
                    (s = t[y + 2]), (e = 6);
                    break;
                  }
                  if ((16 & x) != 0) {
                    (l = 15 & x), (i = t[y + 2]), (e = 2);
                    break;
                  }
                  if ((64 & x) == 0) {
                    (a = x), (o = y / 3 + t[y + 2]);
                    break;
                  }
                  if ((32 & x) != 0) {
                    e = 7;
                    break;
                  }
                  return (
                    (e = 9),
                    (v.msg = "invalid literal/length code"),
                    (g = -3),
                    (m.bitb = P),
                    (m.bitk = j),
                    (v.avail_in = w),
                    (v.total_in += E - v.next_in_index),
                    (v.next_in_index = E),
                    (m.write = _),
                    m.inflate_flush(v, g)
                  );
                case 2:
                  for (b = l; j < b; ) {
                    if (0 === w)
                      return (
                        (m.bitb = P),
                        (m.bitk = j),
                        (v.avail_in = w),
                        (v.total_in += E - v.next_in_index),
                        (v.next_in_index = E),
                        (m.write = _),
                        m.inflate_flush(v, g)
                      );
                    (g = 0),
                      w--,
                      (P |= (255 & v.read_byte(E++)) << j),
                      (j += 8);
                  }
                  (i += P & h[b]),
                    (P >>= b),
                    (j -= b),
                    (a = d),
                    (t = r),
                    (o = p),
                    (e = 3);
                case 3:
                  for (b = a; j < b; ) {
                    if (0 === w)
                      return (
                        (m.bitb = P),
                        (m.bitk = j),
                        (v.avail_in = w),
                        (v.total_in += E - v.next_in_index),
                        (v.next_in_index = E),
                        (m.write = _),
                        m.inflate_flush(v, g)
                      );
                    (g = 0),
                      w--,
                      (P |= (255 & v.read_byte(E++)) << j),
                      (j += 8);
                  }
                  if (
                    ((y = (o + (P & h[b])) * 3),
                    (P >>= t[y + 1]),
                    (j -= t[y + 1]),
                    (16 & (x = t[y])) != 0)
                  ) {
                    (l = 15 & x), (c = t[y + 2]), (e = 4);
                    break;
                  }
                  if ((64 & x) == 0) {
                    (a = x), (o = y / 3 + t[y + 2]);
                    break;
                  }
                  return (
                    (e = 9),
                    (v.msg = "invalid distance code"),
                    (g = -3),
                    (m.bitb = P),
                    (m.bitk = j),
                    (v.avail_in = w),
                    (v.total_in += E - v.next_in_index),
                    (v.next_in_index = E),
                    (m.write = _),
                    m.inflate_flush(v, g)
                  );
                case 4:
                  for (b = l; j < b; ) {
                    if (0 === w)
                      return (
                        (m.bitb = P),
                        (m.bitk = j),
                        (v.avail_in = w),
                        (v.total_in += E - v.next_in_index),
                        (v.next_in_index = E),
                        (m.write = _),
                        m.inflate_flush(v, g)
                      );
                    (g = 0),
                      w--,
                      (P |= (255 & v.read_byte(E++)) << j),
                      (j += 8);
                  }
                  (c += P & h[b]), (P >>= b), (j -= b), (e = 5);
                case 5:
                  for (S = _ - c; S < 0; ) S += m.end;
                  for (; 0 !== i; ) {
                    if (
                      0 === k &&
                      (_ == m.end &&
                        0 !== m.read &&
                        (k = (_ = 0) < m.read ? m.read - _ - 1 : m.end - _),
                      0 === k &&
                        ((m.write = _),
                        (g = m.inflate_flush(v, g)),
                        (k =
                          (_ = m.write) < m.read ? m.read - _ - 1 : m.end - _),
                        _ == m.end &&
                          0 !== m.read &&
                          (k = (_ = 0) < m.read ? m.read - _ - 1 : m.end - _),
                        0 === k))
                    )
                      return (
                        (m.bitb = P),
                        (m.bitk = j),
                        (v.avail_in = w),
                        (v.total_in += E - v.next_in_index),
                        (v.next_in_index = E),
                        (m.write = _),
                        m.inflate_flush(v, g)
                      );
                    (m.win[_++] = m.win[S++]), k--, S == m.end && (S = 0), i--;
                  }
                  e = 0;
                  break;
                case 6:
                  if (
                    0 === k &&
                    (_ == m.end &&
                      0 !== m.read &&
                      (k = (_ = 0) < m.read ? m.read - _ - 1 : m.end - _),
                    0 === k &&
                      ((m.write = _),
                      (g = m.inflate_flush(v, g)),
                      (k = (_ = m.write) < m.read ? m.read - _ - 1 : m.end - _),
                      _ == m.end &&
                        0 !== m.read &&
                        (k = (_ = 0) < m.read ? m.read - _ - 1 : m.end - _),
                      0 === k))
                  )
                    return (
                      (m.bitb = P),
                      (m.bitk = j),
                      (v.avail_in = w),
                      (v.total_in += E - v.next_in_index),
                      (v.next_in_index = E),
                      (m.write = _),
                      m.inflate_flush(v, g)
                    );
                  (g = 0), (m.win[_++] = s), k--, (e = 0);
                  break;
                case 7:
                  if (
                    (j > 7 && ((j -= 8), w++, E--),
                    (m.write = _),
                    (g = m.inflate_flush(v, g)),
                    (k = (_ = m.write) < m.read ? m.read - _ - 1 : m.end - _),
                    m.read != m.write)
                  )
                    return (
                      (m.bitb = P),
                      (m.bitk = j),
                      (v.avail_in = w),
                      (v.total_in += E - v.next_in_index),
                      (v.next_in_index = E),
                      (m.write = _),
                      m.inflate_flush(v, g)
                    );
                  e = 8;
                case 8:
                  return (
                    (g = 1),
                    (m.bitb = P),
                    (m.bitk = j),
                    (v.avail_in = w),
                    (v.total_in += E - v.next_in_index),
                    (v.next_in_index = E),
                    (m.write = _),
                    m.inflate_flush(v, g)
                  );
                case 9:
                  return (
                    (g = -3),
                    (m.bitb = P),
                    (m.bitk = j),
                    (v.avail_in = w),
                    (v.total_in += E - v.next_in_index),
                    (v.next_in_index = E),
                    (m.write = _),
                    m.inflate_flush(v, g)
                  );
                default:
                  return (
                    (g = -2),
                    (m.bitb = P),
                    (m.bitk = j),
                    (v.avail_in = w),
                    (v.total_in += E - v.next_in_index),
                    (v.next_in_index = E),
                    (m.write = _),
                    m.inflate_flush(v, g)
                  );
              }
          }),
          (this.free = function () {});
      }
      x.inflate_trees_fixed = function (e, t, n, r) {
        return (e[0] = 9), (t[0] = 5), (n[0] = p), (r[0] = m), 0;
      };
      let _ = [
        16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
      ];
      function k(e, t) {
        let n;
        let r = this,
          i = 0,
          o = 0,
          a = 0,
          s = 0,
          l = [0],
          c = [0],
          u = new w(),
          d = 0,
          f = new Int32Array(4320),
          p = new x();
        (r.bitk = 0),
          (r.bitb = 0),
          (r.win = new Uint8Array(t)),
          (r.end = t),
          (r.read = 0),
          (r.write = 0),
          (r.reset = function (e, t) {
            t && (t[0] = 0),
              6 == i && u.free(e),
              (i = 0),
              (r.bitk = 0),
              (r.bitb = 0),
              (r.read = r.write = 0);
          }),
          r.reset(e, null),
          (r.inflate_flush = function (e, t) {
            let n, i, o;
            return (
              (i = e.next_out_index),
              (n = ((o = r.read) <= r.write ? r.write : r.end) - o) >
                e.avail_out && (n = e.avail_out),
              0 !== n && -5 == t && (t = 0),
              (e.avail_out -= n),
              (e.total_out += n),
              e.next_out.set(r.win.subarray(o, o + n), i),
              (i += n),
              (o += n) == r.end &&
                ((o = 0),
                r.write == r.end && (r.write = 0),
                (n = r.write - o) > e.avail_out && (n = e.avail_out),
                0 !== n && -5 == t && (t = 0),
                (e.avail_out -= n),
                (e.total_out += n),
                e.next_out.set(r.win.subarray(o, o + n), i),
                (i += n),
                (o += n)),
              (e.next_out_index = i),
              (r.read = o),
              t
            );
          }),
          (r.proc = function (e, t) {
            let m, v, g, b, y, w, k, S;
            for (
              b = e.next_in_index,
                y = e.avail_in,
                v = r.bitb,
                g = r.bitk,
                k = (w = r.write) < r.read ? r.read - w - 1 : r.end - w;
              ;

            ) {
              let P, j, E, A, C, M, z, R;
              switch (i) {
                case 0:
                  for (; g < 3; ) {
                    if (0 === y)
                      return (
                        (r.bitb = v),
                        (r.bitk = g),
                        (e.avail_in = y),
                        (e.total_in += b - e.next_in_index),
                        (e.next_in_index = b),
                        (r.write = w),
                        r.inflate_flush(e, t)
                      );
                    (t = 0),
                      y--,
                      (v |= (255 & e.read_byte(b++)) << g),
                      (g += 8);
                  }
                  switch (((d = 1 & (m = 7 & v)), m >>> 1)) {
                    case 0:
                      (v >>>= 3),
                        (g -= 3),
                        (v >>>= m = 7 & g),
                        (g -= m),
                        (i = 1);
                      break;
                    case 1:
                      (P = []),
                        (j = []),
                        (E = [[]]),
                        (A = [[]]),
                        x.inflate_trees_fixed(P, j, E, A),
                        u.init(P[0], j[0], E[0], 0, A[0], 0),
                        (v >>>= 3),
                        (g -= 3),
                        (i = 6);
                      break;
                    case 2:
                      (v >>>= 3), (g -= 3), (i = 3);
                      break;
                    case 3:
                      return (
                        (v >>>= 3),
                        (g -= 3),
                        (i = 9),
                        (e.msg = "invalid block type"),
                        (t = -3),
                        (r.bitb = v),
                        (r.bitk = g),
                        (e.avail_in = y),
                        (e.total_in += b - e.next_in_index),
                        (e.next_in_index = b),
                        (r.write = w),
                        r.inflate_flush(e, t)
                      );
                  }
                  break;
                case 1:
                  for (; g < 32; ) {
                    if (0 === y)
                      return (
                        (r.bitb = v),
                        (r.bitk = g),
                        (e.avail_in = y),
                        (e.total_in += b - e.next_in_index),
                        (e.next_in_index = b),
                        (r.write = w),
                        r.inflate_flush(e, t)
                      );
                    (t = 0),
                      y--,
                      (v |= (255 & e.read_byte(b++)) << g),
                      (g += 8);
                  }
                  if (((~v >>> 16) & 65535) != (65535 & v))
                    return (
                      (i = 9),
                      (e.msg = "invalid stored block lengths"),
                      (t = -3),
                      (r.bitb = v),
                      (r.bitk = g),
                      (e.avail_in = y),
                      (e.total_in += b - e.next_in_index),
                      (e.next_in_index = b),
                      (r.write = w),
                      r.inflate_flush(e, t)
                    );
                  (o = 65535 & v),
                    (v = g = 0),
                    (i = 0 !== o ? 2 : 0 !== d ? 7 : 0);
                  break;
                case 2:
                  if (
                    0 === y ||
                    (0 === k &&
                      (w == r.end &&
                        0 !== r.read &&
                        (k = (w = 0) < r.read ? r.read - w - 1 : r.end - w),
                      0 === k &&
                        ((r.write = w),
                        (t = r.inflate_flush(e, t)),
                        (k =
                          (w = r.write) < r.read ? r.read - w - 1 : r.end - w),
                        w == r.end &&
                          0 !== r.read &&
                          (k = (w = 0) < r.read ? r.read - w - 1 : r.end - w),
                        0 === k)))
                  )
                    return (
                      (r.bitb = v),
                      (r.bitk = g),
                      (e.avail_in = y),
                      (e.total_in += b - e.next_in_index),
                      (e.next_in_index = b),
                      (r.write = w),
                      r.inflate_flush(e, t)
                    );
                  if (
                    ((t = 0),
                    (m = o) > y && (m = y),
                    m > k && (m = k),
                    r.win.set(e.read_buf(b, m), w),
                    (b += m),
                    (y -= m),
                    (w += m),
                    (k -= m),
                    0 != (o -= m))
                  )
                    break;
                  i = 0 !== d ? 7 : 0;
                  break;
                case 3:
                  for (; g < 14; ) {
                    if (0 === y)
                      return (
                        (r.bitb = v),
                        (r.bitk = g),
                        (e.avail_in = y),
                        (e.total_in += b - e.next_in_index),
                        (e.next_in_index = b),
                        (r.write = w),
                        r.inflate_flush(e, t)
                      );
                    (t = 0),
                      y--,
                      (v |= (255 & e.read_byte(b++)) << g),
                      (g += 8);
                  }
                  if (
                    ((a = m = 16383 & v), (31 & m) > 29 || ((m >> 5) & 31) > 29)
                  )
                    return (
                      (i = 9),
                      (e.msg = "too many length or distance symbols"),
                      (t = -3),
                      (r.bitb = v),
                      (r.bitk = g),
                      (e.avail_in = y),
                      (e.total_in += b - e.next_in_index),
                      (e.next_in_index = b),
                      (r.write = w),
                      r.inflate_flush(e, t)
                    );
                  if (
                    ((m = 258 + (31 & m) + ((m >> 5) & 31)), !n || n.length < m)
                  )
                    n = [];
                  else for (S = 0; S < m; S++) n[S] = 0;
                  (v >>>= 14), (g -= 14), (s = 0), (i = 4);
                case 4:
                  for (; s < 4 + (a >>> 10); ) {
                    for (; g < 3; ) {
                      if (0 === y)
                        return (
                          (r.bitb = v),
                          (r.bitk = g),
                          (e.avail_in = y),
                          (e.total_in += b - e.next_in_index),
                          (e.next_in_index = b),
                          (r.write = w),
                          r.inflate_flush(e, t)
                        );
                      (t = 0),
                        y--,
                        (v |= (255 & e.read_byte(b++)) << g),
                        (g += 8);
                    }
                    (n[_[s++]] = 7 & v), (v >>>= 3), (g -= 3);
                  }
                  for (; s < 19; ) n[_[s++]] = 0;
                  if (
                    ((l[0] = 7), 0 != (m = p.inflate_trees_bits(n, l, c, f, e)))
                  )
                    return (
                      -3 == (t = m) && ((n = null), (i = 9)),
                      (r.bitb = v),
                      (r.bitk = g),
                      (e.avail_in = y),
                      (e.total_in += b - e.next_in_index),
                      (e.next_in_index = b),
                      (r.write = w),
                      r.inflate_flush(e, t)
                    );
                  (s = 0), (i = 5);
                case 5:
                  for (;;) {
                    let o, u;
                    if (s >= 258 + (31 & (m = a)) + ((m >> 5) & 31)) break;
                    for (m = l[0]; g < m; ) {
                      if (0 === y)
                        return (
                          (r.bitb = v),
                          (r.bitk = g),
                          (e.avail_in = y),
                          (e.total_in += b - e.next_in_index),
                          (e.next_in_index = b),
                          (r.write = w),
                          r.inflate_flush(e, t)
                        );
                      (t = 0),
                        y--,
                        (v |= (255 & e.read_byte(b++)) << g),
                        (g += 8);
                    }
                    if (
                      ((m = f[(c[0] + (v & h[m])) * 3 + 1]),
                      (u = f[(c[0] + (v & h[m])) * 3 + 2]) < 16)
                    )
                      (v >>>= m), (g -= m), (n[s++] = u);
                    else {
                      for (
                        S = 18 == u ? 7 : u - 14, o = 18 == u ? 11 : 3;
                        g < m + S;

                      ) {
                        if (0 === y)
                          return (
                            (r.bitb = v),
                            (r.bitk = g),
                            (e.avail_in = y),
                            (e.total_in += b - e.next_in_index),
                            (e.next_in_index = b),
                            (r.write = w),
                            r.inflate_flush(e, t)
                          );
                        (t = 0),
                          y--,
                          (v |= (255 & e.read_byte(b++)) << g),
                          (g += 8);
                      }
                      if (
                        ((v >>>= m),
                        (g -= m),
                        (o += v & h[S]),
                        (v >>>= S),
                        (g -= S),
                        (S = s) + o > 258 + (31 & (m = a)) + ((m >> 5) & 31) ||
                          (16 == u && S < 1))
                      )
                        return (
                          (n = null),
                          (i = 9),
                          (e.msg = "invalid bit length repeat"),
                          (t = -3),
                          (r.bitb = v),
                          (r.bitk = g),
                          (e.avail_in = y),
                          (e.total_in += b - e.next_in_index),
                          (e.next_in_index = b),
                          (r.write = w),
                          r.inflate_flush(e, t)
                        );
                      u = 16 == u ? n[S - 1] : 0;
                      do n[S++] = u;
                      while (0 != --o);
                      s = S;
                    }
                  }
                  if (
                    ((c[0] = -1),
                    (M = []),
                    (z = []),
                    (R = []),
                    ((C = [])[0] = 9),
                    (M[0] = 6),
                    (m = a),
                    0 !=
                      (m = p.inflate_trees_dynamic(
                        257 + (31 & m),
                        1 + ((m >> 5) & 31),
                        n,
                        C,
                        M,
                        z,
                        R,
                        f,
                        e
                      )))
                  )
                    return (
                      -3 == m && ((n = null), (i = 9)),
                      (t = m),
                      (r.bitb = v),
                      (r.bitk = g),
                      (e.avail_in = y),
                      (e.total_in += b - e.next_in_index),
                      (e.next_in_index = b),
                      (r.write = w),
                      r.inflate_flush(e, t)
                    );
                  u.init(C[0], M[0], f, z[0], f, R[0]), (i = 6);
                case 6:
                  if (
                    ((r.bitb = v),
                    (r.bitk = g),
                    (e.avail_in = y),
                    (e.total_in += b - e.next_in_index),
                    (e.next_in_index = b),
                    (r.write = w),
                    1 != (t = u.proc(r, e, t)))
                  )
                    return r.inflate_flush(e, t);
                  if (
                    ((t = 0),
                    u.free(e),
                    (b = e.next_in_index),
                    (y = e.avail_in),
                    (v = r.bitb),
                    (g = r.bitk),
                    (k = (w = r.write) < r.read ? r.read - w - 1 : r.end - w),
                    0 === d)
                  ) {
                    i = 0;
                    break;
                  }
                  i = 7;
                case 7:
                  if (
                    ((r.write = w),
                    (t = r.inflate_flush(e, t)),
                    (k = (w = r.write) < r.read ? r.read - w - 1 : r.end - w),
                    r.read != r.write)
                  )
                    return (
                      (r.bitb = v),
                      (r.bitk = g),
                      (e.avail_in = y),
                      (e.total_in += b - e.next_in_index),
                      (e.next_in_index = b),
                      (r.write = w),
                      r.inflate_flush(e, t)
                    );
                  i = 8;
                case 8:
                  return (
                    (t = 1),
                    (r.bitb = v),
                    (r.bitk = g),
                    (e.avail_in = y),
                    (e.total_in += b - e.next_in_index),
                    (e.next_in_index = b),
                    (r.write = w),
                    r.inflate_flush(e, t)
                  );
                case 9:
                  return (
                    (t = -3),
                    (r.bitb = v),
                    (r.bitk = g),
                    (e.avail_in = y),
                    (e.total_in += b - e.next_in_index),
                    (e.next_in_index = b),
                    (r.write = w),
                    r.inflate_flush(e, t)
                  );
                default:
                  return (
                    (t = -2),
                    (r.bitb = v),
                    (r.bitk = g),
                    (e.avail_in = y),
                    (e.total_in += b - e.next_in_index),
                    (e.next_in_index = b),
                    (r.write = w),
                    r.inflate_flush(e, t)
                  );
              }
            }
          }),
          (r.free = function (e) {
            r.reset(e, null), (r.win = null), (f = null);
          }),
          (r.set_dictionary = function (e, t, n) {
            r.win.set(e.subarray(t, t + n), 0), (r.read = r.write = n);
          }),
          (r.sync_point = function () {
            return 1 == i ? 1 : 0;
          });
      }
      let S = [0, 0, 255, 255];
      function P() {
        let e = this;
        function t(e) {
          return e && e.istate
            ? ((e.total_in = e.total_out = 0),
              (e.msg = null),
              (e.istate.mode = 7),
              e.istate.blocks.reset(e, null),
              0)
            : -2;
        }
        (e.mode = 0),
          (e.method = 0),
          (e.was = [0]),
          (e.need = 0),
          (e.marker = 0),
          (e.wbits = 0),
          (e.inflateEnd = function (t) {
            return e.blocks && e.blocks.free(t), (e.blocks = null), 0;
          }),
          (e.inflateInit = function (n, r) {
            return ((n.msg = null), (e.blocks = null), r < 8 || r > 15)
              ? (e.inflateEnd(n), -2)
              : ((e.wbits = r), (n.istate.blocks = new k(n, 1 << r)), t(n), 0);
          }),
          (e.inflate = function (e, t) {
            let n, r;
            if (!e || !e.istate || !e.next_in) return -2;
            let i = e.istate;
            for (t = 4 == t ? -5 : 0, n = -5; ; )
              switch (i.mode) {
                case 0:
                  if (0 === e.avail_in) return n;
                  if (
                    ((n = t),
                    e.avail_in--,
                    e.total_in++,
                    (15 & (i.method = e.read_byte(e.next_in_index++))) != 8)
                  ) {
                    (i.mode = 13),
                      (e.msg = "unknown compression method"),
                      (i.marker = 5);
                    break;
                  }
                  if ((i.method >> 4) + 8 > i.wbits) {
                    (i.mode = 13), (e.msg = "invalid win size"), (i.marker = 5);
                    break;
                  }
                  i.mode = 1;
                case 1:
                  if (0 === e.avail_in) return n;
                  if (
                    ((n = t),
                    e.avail_in--,
                    e.total_in++,
                    (r = 255 & e.read_byte(e.next_in_index++)),
                    ((i.method << 8) + r) % 31 != 0)
                  ) {
                    (i.mode = 13),
                      (e.msg = "incorrect header check"),
                      (i.marker = 5);
                    break;
                  }
                  if ((32 & r) == 0) {
                    i.mode = 7;
                    break;
                  }
                  i.mode = 2;
                case 2:
                  if (0 === e.avail_in) return n;
                  (n = t),
                    e.avail_in--,
                    e.total_in++,
                    (i.need =
                      ((255 & e.read_byte(e.next_in_index++)) << 24) &
                      4278190080),
                    (i.mode = 3);
                case 3:
                  if (0 === e.avail_in) return n;
                  (n = t),
                    e.avail_in--,
                    e.total_in++,
                    (i.need +=
                      ((255 & e.read_byte(e.next_in_index++)) << 16) &
                      16711680),
                    (i.mode = 4);
                case 4:
                  if (0 === e.avail_in) return n;
                  (n = t),
                    e.avail_in--,
                    e.total_in++,
                    (i.need +=
                      ((255 & e.read_byte(e.next_in_index++)) << 8) & 65280),
                    (i.mode = 5);
                case 5:
                  if (0 === e.avail_in) return n;
                  return (
                    (n = t),
                    e.avail_in--,
                    e.total_in++,
                    (i.need += 255 & e.read_byte(e.next_in_index++)),
                    (i.mode = 6),
                    2
                  );
                case 6:
                  return (
                    (i.mode = 13),
                    (e.msg = "need dictionary"),
                    (i.marker = 0),
                    -2
                  );
                case 7:
                  if (-3 == (n = i.blocks.proc(e, n))) {
                    (i.mode = 13), (i.marker = 0);
                    break;
                  }
                  if ((0 == n && (n = t), 1 != n)) return n;
                  (n = t), i.blocks.reset(e, i.was), (i.mode = 12);
                case 12:
                  return (e.avail_in = 0), 1;
                case 13:
                  return -3;
                default:
                  return -2;
              }
          }),
          (e.inflateSetDictionary = function (e, t, n) {
            let r = 0,
              i = n;
            if (!e || !e.istate || 6 != e.istate.mode) return -2;
            let o = e.istate;
            return (
              i >= 1 << o.wbits && (r = n - (i = (1 << o.wbits) - 1)),
              o.blocks.set_dictionary(t, r, i),
              (o.mode = 7),
              0
            );
          }),
          (e.inflateSync = function (e) {
            let n, r, i, o, a;
            if (!e || !e.istate) return -2;
            let s = e.istate;
            if (
              (13 != s.mode && ((s.mode = 13), (s.marker = 0)),
              0 === (n = e.avail_in))
            )
              return -5;
            for (r = e.next_in_index, i = s.marker; 0 !== n && i < 4; )
              e.read_byte(r) == S[i]
                ? i++
                : (i = 0 !== e.read_byte(r) ? 0 : 4 - i),
                r++,
                n--;
            return ((e.total_in += r - e.next_in_index),
            (e.next_in_index = r),
            (e.avail_in = n),
            (s.marker = i),
            4 != i)
              ? -3
              : ((o = e.total_in),
                (a = e.total_out),
                t(e),
                (e.total_in = o),
                (e.total_out = a),
                (s.mode = 7),
                0);
          }),
          (e.inflateSyncPoint = function (e) {
            return e && e.istate && e.istate.blocks
              ? e.istate.blocks.sync_point()
              : -2;
          });
      }
      function j() {}
      j.prototype = {
        inflateInit(e) {
          return (
            (this.istate = new P()),
            e || (e = 15),
            this.istate.inflateInit(this, e)
          );
        },
        inflate(e) {
          return this.istate ? this.istate.inflate(this, e) : -2;
        },
        inflateEnd() {
          if (!this.istate) return -2;
          let e = this.istate.inflateEnd(this);
          return (this.istate = null), e;
        },
        inflateSync() {
          return this.istate ? this.istate.inflateSync(this) : -2;
        },
        inflateSetDictionary(e, t) {
          return this.istate
            ? this.istate.inflateSetDictionary(this, e, t)
            : -2;
        },
        read_byte(e) {
          return this.next_in[e];
        },
        read_buf(e, t) {
          return this.next_in.subarray(e, e + t);
        },
      };
      let E = void 0,
        A = "undefined";
      class C {
        constructor(e) {
          return class extends TransformStream {
            constructor(t, n) {
              let r = new e(n);
              super({
                transform(e, t) {
                  t.enqueue(r.append(e));
                },
                flush(e) {
                  let t = r.flush();
                  t && e.enqueue(t);
                },
              });
            }
          };
        }
      }
      let M = 2;
      try {
        typeof navigator != A &&
          navigator.hardwareConcurrency &&
          (M = navigator.hardwareConcurrency);
      } catch (e) {}
      let z = Object.assign(
        {},
        {
          chunkSize: 524288,
          maxWorkers: M,
          terminateWorkerTimeout: 5e3,
          useWebWorkers: !0,
          useCompressionStream: !0,
          workerScripts: E,
          CompressionStreamNative:
            typeof CompressionStream != A && CompressionStream,
          DecompressionStreamNative:
            typeof DecompressionStream != A && DecompressionStream,
        }
      );
      function R(e) {
        let {
          baseURL: t,
          chunkSize: n,
          maxWorkers: r,
          terminateWorkerTimeout: i,
          useCompressionStream: o,
          useWebWorkers: a,
          Deflate: s,
          Inflate: l,
          CompressionStream: c,
          DecompressionStream: u,
          workerScripts: d,
        } = e;
        if (
          (I("baseURL", t),
          I("chunkSize", n),
          I("maxWorkers", r),
          I("terminateWorkerTimeout", i),
          I("useCompressionStream", o),
          I("useWebWorkers", a),
          s && (z.CompressionStream = new C(s)),
          l && (z.DecompressionStream = new C(l)),
          I("CompressionStream", c),
          I("DecompressionStream", u),
          d !== E)
        ) {
          let { deflate: e, inflate: t } = d;
          if (((e || t) && !z.workerScripts && (z.workerScripts = {}), e)) {
            if (!Array.isArray(e))
              throw Error("workerScripts.deflate must be an array");
            z.workerScripts.deflate = e;
          }
          if (t) {
            if (!Array.isArray(t))
              throw Error("workerScripts.inflate must be an array");
            z.workerScripts.inflate = t;
          }
        }
      }
      function I(e, t) {
        t !== E && (z[e] = t);
      }
      let T = {
        application: {
          "andrew-inset": "ez",
          annodex: "anx",
          "atom+xml": "atom",
          "atomcat+xml": "atomcat",
          "atomserv+xml": "atomsrv",
          bbolin: "lin",
          "cu-seeme": "cu",
          "davmount+xml": "davmount",
          dsptype: "tsp",
          ecmascript: ["es", "ecma"],
          futuresplash: "spl",
          hta: "hta",
          "java-archive": "jar",
          "java-serialized-object": "ser",
          "java-vm": "class",
          m3g: "m3g",
          "mac-binhex40": "hqx",
          mathematica: ["nb", "ma", "mb"],
          msaccess: "mdb",
          msword: ["doc", "dot", "wiz"],
          mxf: "mxf",
          oda: "oda",
          ogg: "ogx",
          pdf: "pdf",
          "pgp-keys": "key",
          "pgp-signature": ["asc", "sig"],
          "pics-rules": "prf",
          postscript: ["ps", "ai", "eps", "epsi", "epsf", "eps2", "eps3"],
          rar: "rar",
          "rdf+xml": "rdf",
          "rss+xml": "rss",
          rtf: "rtf",
          "xhtml+xml": ["xhtml", "xht"],
          xml: ["xml", "xsl", "xsd", "xpdl"],
          "xspf+xml": "xspf",
          zip: "zip",
          "vnd.android.package-archive": "apk",
          "vnd.cinderella": "cdy",
          "vnd.google-earth.kml+xml": "kml",
          "vnd.google-earth.kmz": "kmz",
          "vnd.mozilla.xul+xml": "xul",
          "vnd.ms-excel": ["xls", "xlb", "xlt", "xlm", "xla", "xlc", "xlw"],
          "vnd.ms-pki.seccat": "cat",
          "vnd.ms-pki.stl": "stl",
          "vnd.ms-powerpoint": ["ppt", "pps", "pot", "ppa", "pwz"],
          "vnd.oasis.opendocument.chart": "odc",
          "vnd.oasis.opendocument.database": "odb",
          "vnd.oasis.opendocument.formula": "odf",
          "vnd.oasis.opendocument.graphics": "odg",
          "vnd.oasis.opendocument.graphics-template": "otg",
          "vnd.oasis.opendocument.image": "odi",
          "vnd.oasis.opendocument.presentation": "odp",
          "vnd.oasis.opendocument.presentation-template": "otp",
          "vnd.oasis.opendocument.spreadsheet": "ods",
          "vnd.oasis.opendocument.spreadsheet-template": "ots",
          "vnd.oasis.opendocument.text": "odt",
          "vnd.oasis.opendocument.text-master": ["odm", "otm"],
          "vnd.oasis.opendocument.text-template": "ott",
          "vnd.oasis.opendocument.text-web": "oth",
          "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
          "vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx",
          "vnd.openxmlformats-officedocument.presentationml.presentation":
            "pptx",
          "vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx",
          "vnd.openxmlformats-officedocument.presentationml.template": "potx",
          "vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
          "vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx",
          "vnd.smaf": "mmf",
          "vnd.stardivision.calc": "sdc",
          "vnd.stardivision.chart": "sds",
          "vnd.stardivision.draw": "sda",
          "vnd.stardivision.impress": "sdd",
          "vnd.stardivision.math": ["sdf", "smf"],
          "vnd.stardivision.writer": ["sdw", "vor"],
          "vnd.stardivision.writer-global": "sgl",
          "vnd.sun.xml.calc": "sxc",
          "vnd.sun.xml.calc.template": "stc",
          "vnd.sun.xml.draw": "sxd",
          "vnd.sun.xml.draw.template": "std",
          "vnd.sun.xml.impress": "sxi",
          "vnd.sun.xml.impress.template": "sti",
          "vnd.sun.xml.math": "sxm",
          "vnd.sun.xml.writer": "sxw",
          "vnd.sun.xml.writer.global": "sxg",
          "vnd.sun.xml.writer.template": "stw",
          "vnd.symbian.install": ["sis", "sisx"],
          "vnd.visio": [
            "vsd",
            "vst",
            "vss",
            "vsw",
            "vsdx",
            "vssx",
            "vstx",
            "vssm",
            "vstm",
          ],
          "vnd.wap.wbxml": "wbxml",
          "vnd.wap.wmlc": "wmlc",
          "vnd.wap.wmlscriptc": "wmlsc",
          "vnd.wordperfect": "wpd",
          "vnd.wordperfect5.1": "wp5",
          "x-123": "wk",
          "x-7z-compressed": "7z",
          "x-abiword": "abw",
          "x-apple-diskimage": "dmg",
          "x-bcpio": "bcpio",
          "x-bittorrent": "torrent",
          "x-cbr": ["cbr", "cba", "cbt", "cb7"],
          "x-cbz": "cbz",
          "x-cdf": ["cdf", "cda"],
          "x-cdlink": "vcd",
          "x-chess-pgn": "pgn",
          "x-cpio": "cpio",
          "x-csh": "csh",
          "x-director": [
            "dir",
            "dxr",
            "cst",
            "cct",
            "cxt",
            "w3d",
            "fgd",
            "swa",
          ],
          "x-dms": "dms",
          "x-doom": "wad",
          "x-dvi": "dvi",
          "x-httpd-eruby": "rhtml",
          "x-font": "pcf.Z",
          "x-freemind": "mm",
          "x-gnumeric": "gnumeric",
          "x-go-sgf": "sgf",
          "x-graphing-calculator": "gcf",
          "x-gtar": ["gtar", "taz"],
          "x-hdf": "hdf",
          "x-httpd-php": ["phtml", "pht", "php"],
          "x-httpd-php-source": "phps",
          "x-httpd-php3": "php3",
          "x-httpd-php3-preprocessed": "php3p",
          "x-httpd-php4": "php4",
          "x-httpd-php5": "php5",
          "x-ica": "ica",
          "x-info": "info",
          "x-internet-signup": ["ins", "isp"],
          "x-iphone": "iii",
          "x-iso9660-image": "iso",
          "x-java-jnlp-file": "jnlp",
          "x-jmol": "jmz",
          "x-killustrator": "kil",
          "x-latex": "latex",
          "x-lyx": "lyx",
          "x-lzx": "lzx",
          "x-maker": ["frm", "fb", "fbdoc"],
          "x-ms-wmd": "wmd",
          "x-msdos-program": ["com", "exe", "bat", "dll"],
          "x-netcdf": ["nc"],
          "x-ns-proxy-autoconfig": ["pac", "dat"],
          "x-nwc": "nwc",
          "x-object": "o",
          "x-oz-application": "oza",
          "x-pkcs7-certreqresp": "p7r",
          "x-python-code": ["pyc", "pyo"],
          "x-qgis": ["qgs", "shp", "shx"],
          "x-quicktimeplayer": "qtl",
          "x-redhat-package-manager": ["rpm", "rpa"],
          "x-ruby": "rb",
          "x-sh": "sh",
          "x-shar": "shar",
          "x-shockwave-flash": ["swf", "swfl"],
          "x-silverlight": "scr",
          "x-stuffit": "sit",
          "x-sv4cpio": "sv4cpio",
          "x-sv4crc": "sv4crc",
          "x-tar": "tar",
          "x-tex-gf": "gf",
          "x-tex-pk": "pk",
          "x-texinfo": ["texinfo", "texi"],
          "x-trash": ["~", "%", "bak", "old", "sik"],
          "x-ustar": "ustar",
          "x-wais-source": "src",
          "x-wingz": "wz",
          "x-x509-ca-cert": ["crt", "der", "cer"],
          "x-xcf": "xcf",
          "x-xfig": "fig",
          "x-xpinstall": "xpi",
          applixware: "aw",
          "atomsvc+xml": "atomsvc",
          "ccxml+xml": "ccxml",
          "cdmi-capability": "cdmia",
          "cdmi-container": "cdmic",
          "cdmi-domain": "cdmid",
          "cdmi-object": "cdmio",
          "cdmi-queue": "cdmiq",
          "docbook+xml": "dbk",
          "dssc+der": "dssc",
          "dssc+xml": "xdssc",
          "emma+xml": "emma",
          "epub+zip": "epub",
          exi: "exi",
          "font-tdpfr": "pfr",
          "gml+xml": "gml",
          "gpx+xml": "gpx",
          gxf: "gxf",
          hyperstudio: "stk",
          "inkml+xml": ["ink", "inkml"],
          ipfix: "ipfix",
          "jsonml+json": "jsonml",
          "lost+xml": "lostxml",
          "mads+xml": "mads",
          marc: "mrc",
          "marcxml+xml": "mrcx",
          "mathml+xml": ["mathml", "mml"],
          mbox: "mbox",
          "mediaservercontrol+xml": "mscml",
          "metalink+xml": "metalink",
          "metalink4+xml": "meta4",
          "mets+xml": "mets",
          "mods+xml": "mods",
          mp21: ["m21", "mp21"],
          mp4: "mp4s",
          "oebps-package+xml": "opf",
          "omdoc+xml": "omdoc",
          onenote: ["onetoc", "onetoc2", "onetmp", "onepkg"],
          oxps: "oxps",
          "patch-ops-error+xml": "xer",
          "pgp-encrypted": "pgp",
          pkcs10: "p10",
          "pkcs7-mime": ["p7m", "p7c"],
          "pkcs7-signature": "p7s",
          pkcs8: "p8",
          "pkix-attr-cert": "ac",
          "pkix-crl": "crl",
          "pkix-pkipath": "pkipath",
          pkixcmp: "pki",
          "pls+xml": "pls",
          "prs.cww": "cww",
          "pskc+xml": "pskcxml",
          "reginfo+xml": "rif",
          "relax-ng-compact-syntax": "rnc",
          "resource-lists+xml": "rl",
          "resource-lists-diff+xml": "rld",
          "rls-services+xml": "rs",
          "rpki-ghostbusters": "gbr",
          "rpki-manifest": "mft",
          "rpki-roa": "roa",
          "rsd+xml": "rsd",
          "sbml+xml": "sbml",
          "scvp-cv-request": "scq",
          "scvp-cv-response": "scs",
          "scvp-vp-request": "spq",
          "scvp-vp-response": "spp",
          sdp: "sdp",
          "set-payment-initiation": "setpay",
          "set-registration-initiation": "setreg",
          "shf+xml": "shf",
          "sparql-query": "rq",
          "sparql-results+xml": "srx",
          srgs: "gram",
          "srgs+xml": "grxml",
          "sru+xml": "sru",
          "ssdl+xml": "ssdl",
          "ssml+xml": "ssml",
          "tei+xml": ["tei", "teicorpus"],
          "thraud+xml": "tfi",
          "timestamped-data": "tsd",
          "vnd.3gpp.pic-bw-large": "plb",
          "vnd.3gpp.pic-bw-small": "psb",
          "vnd.3gpp.pic-bw-var": "pvb",
          "vnd.3gpp2.tcap": "tcap",
          "vnd.3m.post-it-notes": "pwn",
          "vnd.accpac.simply.aso": "aso",
          "vnd.accpac.simply.imp": "imp",
          "vnd.acucobol": "acu",
          "vnd.acucorp": ["atc", "acutc"],
          "vnd.adobe.air-application-installer-package+zip": "air",
          "vnd.adobe.formscentral.fcdt": "fcdt",
          "vnd.adobe.fxp": ["fxp", "fxpl"],
          "vnd.adobe.xdp+xml": "xdp",
          "vnd.adobe.xfdf": "xfdf",
          "vnd.ahead.space": "ahead",
          "vnd.airzip.filesecure.azf": "azf",
          "vnd.airzip.filesecure.azs": "azs",
          "vnd.amazon.ebook": "azw",
          "vnd.americandynamics.acc": "acc",
          "vnd.amiga.ami": "ami",
          "vnd.anser-web-certificate-issue-initiation": "cii",
          "vnd.anser-web-funds-transfer-initiation": "fti",
          "vnd.antix.game-component": "atx",
          "vnd.apple.installer+xml": "mpkg",
          "vnd.apple.mpegurl": "m3u8",
          "vnd.aristanetworks.swi": "swi",
          "vnd.astraea-software.iota": "iota",
          "vnd.audiograph": "aep",
          "vnd.blueice.multipass": "mpm",
          "vnd.bmi": "bmi",
          "vnd.businessobjects": "rep",
          "vnd.chemdraw+xml": "cdxml",
          "vnd.chipnuts.karaoke-mmd": "mmd",
          "vnd.claymore": "cla",
          "vnd.cloanto.rp9": "rp9",
          "vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"],
          "vnd.cluetrust.cartomobile-config": "c11amc",
          "vnd.cluetrust.cartomobile-config-pkg": "c11amz",
          "vnd.commonspace": "csp",
          "vnd.contact.cmsg": "cdbcmsg",
          "vnd.cosmocaller": "cmc",
          "vnd.crick.clicker": "clkx",
          "vnd.crick.clicker.keyboard": "clkk",
          "vnd.crick.clicker.palette": "clkp",
          "vnd.crick.clicker.template": "clkt",
          "vnd.crick.clicker.wordbank": "clkw",
          "vnd.criticaltools.wbs+xml": "wbs",
          "vnd.ctc-posml": "pml",
          "vnd.cups-ppd": "ppd",
          "vnd.curl.car": "car",
          "vnd.curl.pcurl": "pcurl",
          "vnd.dart": "dart",
          "vnd.data-vision.rdz": "rdz",
          "vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"],
          "vnd.dece.ttml+xml": ["uvt", "uvvt"],
          "vnd.dece.unspecified": ["uvx", "uvvx"],
          "vnd.dece.zip": ["uvz", "uvvz"],
          "vnd.denovo.fcselayout-link": "fe_launch",
          "vnd.dna": "dna",
          "vnd.dolby.mlp": "mlp",
          "vnd.dpgraph": "dpg",
          "vnd.dreamfactory": "dfac",
          "vnd.ds-keypoint": "kpxx",
          "vnd.dvb.ait": "ait",
          "vnd.dvb.service": "svc",
          "vnd.dynageo": "geo",
          "vnd.ecowin.chart": "mag",
          "vnd.enliven": "nml",
          "vnd.epson.esf": "esf",
          "vnd.epson.msf": "msf",
          "vnd.epson.quickanime": "qam",
          "vnd.epson.salt": "slt",
          "vnd.epson.ssf": "ssf",
          "vnd.eszigno3+xml": ["es3", "et3"],
          "vnd.ezpix-album": "ez2",
          "vnd.ezpix-package": "ez3",
          "vnd.fdf": "fdf",
          "vnd.fdsn.mseed": "mseed",
          "vnd.fdsn.seed": ["seed", "dataless"],
          "vnd.flographit": "gph",
          "vnd.fluxtime.clip": "ftc",
          "vnd.framemaker": ["fm", "frame", "maker", "book"],
          "vnd.frogans.fnc": "fnc",
          "vnd.frogans.ltf": "ltf",
          "vnd.fsc.weblaunch": "fsc",
          "vnd.fujitsu.oasys": "oas",
          "vnd.fujitsu.oasys2": "oa2",
          "vnd.fujitsu.oasys3": "oa3",
          "vnd.fujitsu.oasysgp": "fg5",
          "vnd.fujitsu.oasysprs": "bh2",
          "vnd.fujixerox.ddd": "ddd",
          "vnd.fujixerox.docuworks": "xdw",
          "vnd.fujixerox.docuworks.binder": "xbd",
          "vnd.fuzzysheet": "fzs",
          "vnd.genomatix.tuxedo": "txd",
          "vnd.geogebra.file": "ggb",
          "vnd.geogebra.tool": "ggt",
          "vnd.geometry-explorer": ["gex", "gre"],
          "vnd.geonext": "gxt",
          "vnd.geoplan": "g2w",
          "vnd.geospace": "g3w",
          "vnd.gmx": "gmx",
          "vnd.grafeq": ["gqf", "gqs"],
          "vnd.groove-account": "gac",
          "vnd.groove-help": "ghf",
          "vnd.groove-identity-message": "gim",
          "vnd.groove-injector": "grv",
          "vnd.groove-tool-message": "gtm",
          "vnd.groove-tool-template": "tpl",
          "vnd.groove-vcard": "vcg",
          "vnd.hal+xml": "hal",
          "vnd.handheld-entertainment+xml": "zmm",
          "vnd.hbci": "hbci",
          "vnd.hhe.lesson-player": "les",
          "vnd.hp-hpgl": "hpgl",
          "vnd.hp-hpid": "hpid",
          "vnd.hp-hps": "hps",
          "vnd.hp-jlyt": "jlt",
          "vnd.hp-pcl": "pcl",
          "vnd.hp-pclxl": "pclxl",
          "vnd.hydrostatix.sof-data": "sfd-hdstx",
          "vnd.ibm.minipay": "mpy",
          "vnd.ibm.modcap": ["afp", "listafp", "list3820"],
          "vnd.ibm.rights-management": "irm",
          "vnd.ibm.secure-container": "sc",
          "vnd.iccprofile": ["icc", "icm"],
          "vnd.igloader": "igl",
          "vnd.immervision-ivp": "ivp",
          "vnd.immervision-ivu": "ivu",
          "vnd.insors.igm": "igm",
          "vnd.intercon.formnet": ["xpw", "xpx"],
          "vnd.intergeo": "i2g",
          "vnd.intu.qbo": "qbo",
          "vnd.intu.qfx": "qfx",
          "vnd.ipunplugged.rcprofile": "rcprofile",
          "vnd.irepository.package+xml": "irp",
          "vnd.is-xpr": "xpr",
          "vnd.isac.fcs": "fcs",
          "vnd.jam": "jam",
          "vnd.jcp.javame.midlet-rms": "rms",
          "vnd.jisp": "jisp",
          "vnd.joost.joda-archive": "joda",
          "vnd.kahootz": ["ktz", "ktr"],
          "vnd.kde.karbon": "karbon",
          "vnd.kde.kchart": "chrt",
          "vnd.kde.kformula": "kfo",
          "vnd.kde.kivio": "flw",
          "vnd.kde.kontour": "kon",
          "vnd.kde.kpresenter": ["kpr", "kpt"],
          "vnd.kde.kspread": "ksp",
          "vnd.kde.kword": ["kwd", "kwt"],
          "vnd.kenameaapp": "htke",
          "vnd.kidspiration": "kia",
          "vnd.kinar": ["kne", "knp"],
          "vnd.koan": ["skp", "skd", "skt", "skm"],
          "vnd.kodak-descriptor": "sse",
          "vnd.las.las+xml": "lasxml",
          "vnd.llamagraphics.life-balance.desktop": "lbd",
          "vnd.llamagraphics.life-balance.exchange+xml": "lbe",
          "vnd.lotus-1-2-3": "123",
          "vnd.lotus-approach": "apr",
          "vnd.lotus-freelance": "pre",
          "vnd.lotus-notes": "nsf",
          "vnd.lotus-organizer": "org",
          "vnd.lotus-screencam": "scm",
          "vnd.lotus-wordpro": "lwp",
          "vnd.macports.portpkg": "portpkg",
          "vnd.mcd": "mcd",
          "vnd.medcalcdata": "mc1",
          "vnd.mediastation.cdkey": "cdkey",
          "vnd.mfer": "mwf",
          "vnd.mfmp": "mfm",
          "vnd.micrografx.flo": "flo",
          "vnd.micrografx.igx": "igx",
          "vnd.mif": "mif",
          "vnd.mobius.daf": "daf",
          "vnd.mobius.dis": "dis",
          "vnd.mobius.mbk": "mbk",
          "vnd.mobius.mqy": "mqy",
          "vnd.mobius.msl": "msl",
          "vnd.mobius.plc": "plc",
          "vnd.mobius.txf": "txf",
          "vnd.mophun.application": "mpn",
          "vnd.mophun.certificate": "mpc",
          "vnd.ms-artgalry": "cil",
          "vnd.ms-cab-compressed": "cab",
          "vnd.ms-excel.addin.macroenabled.12": "xlam",
          "vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb",
          "vnd.ms-excel.sheet.macroenabled.12": "xlsm",
          "vnd.ms-excel.template.macroenabled.12": "xltm",
          "vnd.ms-fontobject": "eot",
          "vnd.ms-htmlhelp": "chm",
          "vnd.ms-ims": "ims",
          "vnd.ms-lrm": "lrm",
          "vnd.ms-officetheme": "thmx",
          "vnd.ms-powerpoint.addin.macroenabled.12": "ppam",
          "vnd.ms-powerpoint.presentation.macroenabled.12": "pptm",
          "vnd.ms-powerpoint.slide.macroenabled.12": "sldm",
          "vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm",
          "vnd.ms-powerpoint.template.macroenabled.12": "potm",
          "vnd.ms-project": ["mpp", "mpt"],
          "vnd.ms-word.document.macroenabled.12": "docm",
          "vnd.ms-word.template.macroenabled.12": "dotm",
          "vnd.ms-works": ["wps", "wks", "wcm", "wdb"],
          "vnd.ms-wpl": "wpl",
          "vnd.ms-xpsdocument": "xps",
          "vnd.mseq": "mseq",
          "vnd.musician": "mus",
          "vnd.muvee.style": "msty",
          "vnd.mynfc": "taglet",
          "vnd.neurolanguage.nlu": "nlu",
          "vnd.nitf": ["ntf", "nitf"],
          "vnd.noblenet-directory": "nnd",
          "vnd.noblenet-sealer": "nns",
          "vnd.noblenet-web": "nnw",
          "vnd.nokia.n-gage.data": "ngdat",
          "vnd.nokia.n-gage.symbian.install": "n-gage",
          "vnd.nokia.radio-preset": "rpst",
          "vnd.nokia.radio-presets": "rpss",
          "vnd.novadigm.edm": "edm",
          "vnd.novadigm.edx": "edx",
          "vnd.novadigm.ext": "ext",
          "vnd.oasis.opendocument.chart-template": "otc",
          "vnd.oasis.opendocument.formula-template": "odft",
          "vnd.oasis.opendocument.image-template": "oti",
          "vnd.olpc-sugar": "xo",
          "vnd.oma.dd2+xml": "dd2",
          "vnd.openofficeorg.extension": "oxt",
          "vnd.openxmlformats-officedocument.presentationml.slide": "sldx",
          "vnd.osgeo.mapguide.package": "mgp",
          "vnd.osgi.dp": "dp",
          "vnd.osgi.subsystem": "esa",
          "vnd.palm": ["pdb", "pqa", "oprc"],
          "vnd.pawaafile": "paw",
          "vnd.pg.format": "str",
          "vnd.pg.osasli": "ei6",
          "vnd.picsel": "efif",
          "vnd.pmi.widget": "wg",
          "vnd.pocketlearn": "plf",
          "vnd.powerbuilder6": "pbd",
          "vnd.previewsystems.box": "box",
          "vnd.proteus.magazine": "mgz",
          "vnd.publishare-delta-tree": "qps",
          "vnd.pvi.ptid1": "ptid",
          "vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"],
          "vnd.realvnc.bed": "bed",
          "vnd.recordare.musicxml": "mxl",
          "vnd.recordare.musicxml+xml": "musicxml",
          "vnd.rig.cryptonote": "cryptonote",
          "vnd.rn-realmedia": "rm",
          "vnd.rn-realmedia-vbr": "rmvb",
          "vnd.route66.link66+xml": "link66",
          "vnd.sailingtracker.track": "st",
          "vnd.seemail": "see",
          "vnd.sema": "sema",
          "vnd.semd": "semd",
          "vnd.semf": "semf",
          "vnd.shana.informed.formdata": "ifm",
          "vnd.shana.informed.formtemplate": "itp",
          "vnd.shana.informed.interchange": "iif",
          "vnd.shana.informed.package": "ipk",
          "vnd.simtech-mindmapper": ["twd", "twds"],
          "vnd.smart.teacher": "teacher",
          "vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
          "vnd.spotfire.dxp": "dxp",
          "vnd.spotfire.sfs": "sfs",
          "vnd.stepmania.package": "smzip",
          "vnd.stepmania.stepchart": "sm",
          "vnd.sus-calendar": ["sus", "susp"],
          "vnd.svd": "svd",
          "vnd.syncml+xml": "xsm",
          "vnd.syncml.dm+wbxml": "bdm",
          "vnd.syncml.dm+xml": "xdm",
          "vnd.tao.intent-module-archive": "tao",
          "vnd.tcpdump.pcap": ["pcap", "cap", "dmp"],
          "vnd.tmobile-livetv": "tmo",
          "vnd.trid.tpt": "tpt",
          "vnd.triscape.mxs": "mxs",
          "vnd.trueapp": "tra",
          "vnd.ufdl": ["ufd", "ufdl"],
          "vnd.uiq.theme": "utz",
          "vnd.umajin": "umj",
          "vnd.unity": "unityweb",
          "vnd.uoml+xml": "uoml",
          "vnd.vcx": "vcx",
          "vnd.visionary": "vis",
          "vnd.vsf": "vsf",
          "vnd.webturbo": "wtb",
          "vnd.wolfram.player": "nbp",
          "vnd.wqd": "wqd",
          "vnd.wt.stf": "stf",
          "vnd.xara": "xar",
          "vnd.xfdl": "xfdl",
          "vnd.yamaha.hv-dic": "hvd",
          "vnd.yamaha.hv-script": "hvs",
          "vnd.yamaha.hv-voice": "hvp",
          "vnd.yamaha.openscoreformat": "osf",
          "vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg",
          "vnd.yamaha.smaf-audio": "saf",
          "vnd.yamaha.smaf-phrase": "spf",
          "vnd.yellowriver-custom-menu": "cmp",
          "vnd.zul": ["zir", "zirz"],
          "vnd.zzazz.deck+xml": "zaz",
          "voicexml+xml": "vxml",
          widget: "wgt",
          winhlp: "hlp",
          "wsdl+xml": "wsdl",
          "wspolicy+xml": "wspolicy",
          "x-ace-compressed": "ace",
          "x-authorware-bin": ["aab", "x32", "u32", "vox"],
          "x-authorware-map": "aam",
          "x-authorware-seg": "aas",
          "x-blorb": ["blb", "blorb"],
          "x-bzip": "bz",
          "x-bzip2": ["bz2", "boz"],
          "x-cfs-compressed": "cfs",
          "x-chat": "chat",
          "x-conference": "nsc",
          "x-dgc-compressed": "dgc",
          "x-dtbncx+xml": "ncx",
          "x-dtbook+xml": "dtb",
          "x-dtbresource+xml": "res",
          "x-eva": "eva",
          "x-font-bdf": "bdf",
          "x-font-ghostscript": "gsf",
          "x-font-linux-psf": "psf",
          "x-font-pcf": "pcf",
          "x-font-snf": "snf",
          "x-font-ttf": ["ttf", "ttc"],
          "x-font-type1": ["pfa", "pfb", "pfm", "afm"],
          "x-freearc": "arc",
          "x-gca-compressed": "gca",
          "x-glulx": "ulx",
          "x-gramps-xml": "gramps",
          "x-install-instructions": "install",
          "x-lzh-compressed": ["lzh", "lha"],
          "x-mie": "mie",
          "x-mobipocket-ebook": ["prc", "mobi"],
          "x-ms-application": "application",
          "x-ms-shortcut": "lnk",
          "x-ms-xbap": "xbap",
          "x-msbinder": "obd",
          "x-mscardfile": "crd",
          "x-msclip": "clp",
          "application/x-ms-installer": "msi",
          "x-msmediaview": ["mvb", "m13", "m14"],
          "x-msmetafile": ["wmf", "wmz", "emf", "emz"],
          "x-msmoney": "mny",
          "x-mspublisher": "pub",
          "x-msschedule": "scd",
          "x-msterminal": "trm",
          "x-mswrite": "wri",
          "x-nzb": "nzb",
          "x-pkcs12": ["p12", "pfx"],
          "x-pkcs7-certificates": ["p7b", "spc"],
          "x-research-info-systems": "ris",
          "x-silverlight-app": "xap",
          "x-sql": "sql",
          "x-stuffitx": "sitx",
          "x-subrip": "srt",
          "x-t3vm-image": "t3",
          "x-tex-tfm": "tfm",
          "x-tgif": "obj",
          "x-xliff+xml": "xlf",
          "x-xz": "xz",
          "x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
          "xaml+xml": "xaml",
          "xcap-diff+xml": "xdf",
          "xenc+xml": "xenc",
          "xml-dtd": "dtd",
          "xop+xml": "xop",
          "xproc+xml": "xpl",
          "xslt+xml": "xslt",
          "xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
          yang: "yang",
          "yin+xml": "yin",
          envoy: "evy",
          fractals: "fif",
          "internet-property-stream": "acx",
          olescript: "axs",
          "vnd.ms-outlook": "msg",
          "vnd.ms-pkicertstore": "sst",
          "x-compress": "z",
          "x-perfmon": ["pma", "pmc", "pmr", "pmw"],
          "ynd.ms-pkipko": "pko",
          gzip: ["gz", "tgz"],
          "smil+xml": ["smi", "smil"],
          "vnd.debian.binary-package": ["deb", "udeb"],
          "vnd.hzn-3d-crossword": "x3d",
          "vnd.sqlite3": [
            "db",
            "sqlite",
            "sqlite3",
            "db-wal",
            "sqlite-wal",
            "db-shm",
            "sqlite-shm",
          ],
          "vnd.wap.sic": "sic",
          "vnd.wap.slc": "slc",
          "x-krita": ["kra", "krz"],
          "x-perl": ["pm", "pl"],
          yaml: ["yaml", "yml"],
        },
        audio: {
          amr: "amr",
          "amr-wb": "awb",
          annodex: "axa",
          basic: ["au", "snd"],
          flac: "flac",
          midi: ["mid", "midi", "kar", "rmi"],
          mpeg: ["mpga", "mpega", "mp3", "m4a", "mp2a", "m2a", "m3a"],
          mpegurl: "m3u",
          ogg: ["oga", "ogg", "spx"],
          "prs.sid": "sid",
          "x-aiff": "aifc",
          "x-gsm": "gsm",
          "x-ms-wma": "wma",
          "x-ms-wax": "wax",
          "x-pn-realaudio": "ram",
          "x-realaudio": "ra",
          "x-sd2": "sd2",
          adpcm: "adp",
          mp4: "mp4a",
          s3m: "s3m",
          silk: "sil",
          "vnd.dece.audio": ["uva", "uvva"],
          "vnd.digital-winds": "eol",
          "vnd.dra": "dra",
          "vnd.dts": "dts",
          "vnd.dts.hd": "dtshd",
          "vnd.lucent.voice": "lvp",
          "vnd.ms-playready.media.pya": "pya",
          "vnd.nuera.ecelp4800": "ecelp4800",
          "vnd.nuera.ecelp7470": "ecelp7470",
          "vnd.nuera.ecelp9600": "ecelp9600",
          "vnd.rip": "rip",
          webm: "weba",
          "x-caf": "caf",
          "x-matroska": "mka",
          "x-pn-realaudio-plugin": "rmp",
          xm: "xm",
          aac: "aac",
          aiff: ["aiff", "aif", "aff"],
          opus: "opus",
          wav: "wav",
        },
        chemical: {
          "x-alchemy": "alc",
          "x-cache": ["cac", "cache"],
          "x-cache-csf": "csf",
          "x-cactvs-binary": ["cbin", "cascii", "ctab"],
          "x-cdx": "cdx",
          "x-chem3d": "c3d",
          "x-cif": "cif",
          "x-cmdf": "cmdf",
          "x-cml": "cml",
          "x-compass": "cpa",
          "x-crossfire": "bsd",
          "x-csml": ["csml", "csm"],
          "x-ctx": "ctx",
          "x-cxf": ["cxf", "cef"],
          "x-embl-dl-nucleotide": ["emb", "embl"],
          "x-gamess-input": ["inp", "gam", "gamin"],
          "x-gaussian-checkpoint": ["fch", "fchk"],
          "x-gaussian-cube": "cub",
          "x-gaussian-input": ["gau", "gjc", "gjf"],
          "x-gaussian-log": "gal",
          "x-gcg8-sequence": "gcg",
          "x-genbank": "gen",
          "x-hin": "hin",
          "x-isostar": ["istr", "ist"],
          "x-jcamp-dx": ["jdx", "dx"],
          "x-kinemage": "kin",
          "x-macmolecule": "mcm",
          "x-macromodel-input": "mmod",
          "x-mdl-molfile": "mol",
          "x-mdl-rdfile": "rd",
          "x-mdl-rxnfile": "rxn",
          "x-mdl-sdfile": "sd",
          "x-mdl-tgf": "tgf",
          "x-mmcif": "mcif",
          "x-mol2": "mol2",
          "x-molconn-Z": "b",
          "x-mopac-graph": "gpt",
          "x-mopac-input": ["mop", "mopcrt", "zmt"],
          "x-mopac-out": "moo",
          "x-ncbi-asn1": "asn",
          "x-ncbi-asn1-ascii": ["prt", "ent"],
          "x-ncbi-asn1-binary": "val",
          "x-rosdal": "ros",
          "x-swissprot": "sw",
          "x-vamas-iso14976": "vms",
          "x-vmd": "vmd",
          "x-xtel": "xtel",
          "x-xyz": "xyz",
        },
        font: { otf: "otf", woff: "woff", woff2: "woff2" },
        image: {
          gif: "gif",
          ief: "ief",
          jpeg: ["jpeg", "jpg", "jpe", "jfif", "jfif-tbnl", "jif"],
          pcx: "pcx",
          png: "png",
          "svg+xml": ["svg", "svgz"],
          tiff: ["tiff", "tif"],
          "vnd.djvu": ["djvu", "djv"],
          "vnd.wap.wbmp": "wbmp",
          "x-canon-cr2": "cr2",
          "x-canon-crw": "crw",
          "x-cmu-raster": "ras",
          "x-coreldraw": "cdr",
          "x-coreldrawpattern": "pat",
          "x-coreldrawtemplate": "cdt",
          "x-corelphotopaint": "cpt",
          "x-epson-erf": "erf",
          "x-icon": "ico",
          "x-jg": "art",
          "x-jng": "jng",
          "x-nikon-nef": "nef",
          "x-olympus-orf": "orf",
          "x-portable-anymap": "pnm",
          "x-portable-bitmap": "pbm",
          "x-portable-graymap": "pgm",
          "x-portable-pixmap": "ppm",
          "x-rgb": "rgb",
          "x-xbitmap": "xbm",
          "x-xpixmap": "xpm",
          "x-xwindowdump": "xwd",
          bmp: "bmp",
          cgm: "cgm",
          g3fax: "g3",
          ktx: "ktx",
          "prs.btif": "btif",
          sgi: "sgi",
          "vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"],
          "vnd.dwg": "dwg",
          "vnd.dxf": "dxf",
          "vnd.fastbidsheet": "fbs",
          "vnd.fpx": "fpx",
          "vnd.fst": "fst",
          "vnd.fujixerox.edmics-mmr": "mmr",
          "vnd.fujixerox.edmics-rlc": "rlc",
          "vnd.ms-modi": "mdi",
          "vnd.ms-photo": "wdp",
          "vnd.net-fpx": "npx",
          "vnd.xiff": "xif",
          webp: "webp",
          "x-3ds": "3ds",
          "x-cmx": "cmx",
          "x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"],
          "x-pict": ["pic", "pct"],
          "x-tga": "tga",
          "cis-cod": "cod",
          avif: "avifs",
          heic: ["heif", "heic"],
          pjpeg: ["pjpg"],
          "vnd.adobe.photoshop": "psd",
          "x-adobe-dng": "dng",
          "x-fuji-raf": "raf",
          "x-icns": "icns",
          "x-kodak-dcr": "dcr",
          "x-kodak-k25": "k25",
          "x-kodak-kdc": "kdc",
          "x-minolta-mrw": "mrw",
          "x-panasonic-raw": ["raw", "rw2", "rwl"],
          "x-pentax-pef": ["pef", "ptx"],
          "x-sigma-x3f": "x3f",
          "x-sony-arw": "arw",
          "x-sony-sr2": "sr2",
          "x-sony-srf": "srf",
        },
        message: { rfc822: ["eml", "mime", "mht", "mhtml", "nws"] },
        model: {
          iges: ["igs", "iges"],
          mesh: ["msh", "mesh", "silo"],
          vrml: ["wrl", "vrml"],
          "x3d+vrml": ["x3dv", "x3dvz"],
          "x3d+xml": "x3dz",
          "x3d+binary": ["x3db", "x3dbz"],
          "vnd.collada+xml": "dae",
          "vnd.dwf": "dwf",
          "vnd.gdl": "gdl",
          "vnd.gtw": "gtw",
          "vnd.mts": "mts",
          "vnd.usdz+zip": "usdz",
          "vnd.vtu": "vtu",
        },
        text: {
          "cache-manifest": ["manifest", "appcache"],
          calendar: ["ics", "icz", "ifb"],
          css: "css",
          csv: "csv",
          h323: "323",
          html: ["html", "htm", "shtml", "stm"],
          iuls: "uls",
          plain: [
            "txt",
            "text",
            "brf",
            "conf",
            "def",
            "list",
            "log",
            "in",
            "bas",
            "diff",
            "ksh",
          ],
          richtext: "rtx",
          scriptlet: ["sct", "wsc"],
          texmacs: "tm",
          "tab-separated-values": "tsv",
          "vnd.sun.j2me.app-descriptor": "jad",
          "vnd.wap.wml": "wml",
          "vnd.wap.wmlscript": "wmls",
          "x-bibtex": "bib",
          "x-boo": "boo",
          "x-c++hdr": ["h++", "hpp", "hxx", "hh"],
          "x-c++src": ["c++", "cpp", "cxx", "cc"],
          "x-component": "htc",
          "x-dsrc": "d",
          "x-diff": "patch",
          "x-haskell": "hs",
          "x-java": "java",
          "x-literate-haskell": "lhs",
          "x-moc": "moc",
          "x-pascal": ["p", "pas", "pp", "inc"],
          "x-pcs-gcd": "gcd",
          "x-python": "py",
          "x-scala": "scala",
          "x-setext": "etx",
          "x-tcl": ["tcl", "tk"],
          "x-tex": ["tex", "ltx", "sty", "cls"],
          "x-vcalendar": "vcs",
          "x-vcard": "vcf",
          n3: "n3",
          "prs.lines.tag": "dsc",
          sgml: ["sgml", "sgm"],
          troff: ["t", "tr", "roff", "man", "me", "ms"],
          turtle: "ttl",
          "uri-list": ["uri", "uris", "urls"],
          vcard: "vcard",
          "vnd.curl": "curl",
          "vnd.curl.dcurl": "dcurl",
          "vnd.curl.scurl": "scurl",
          "vnd.curl.mcurl": "mcurl",
          "vnd.dvb.subtitle": "sub",
          "vnd.fly": "fly",
          "vnd.fmi.flexstor": "flx",
          "vnd.graphviz": "gv",
          "vnd.in3d.3dml": "3dml",
          "vnd.in3d.spot": "spot",
          "x-asm": ["s", "asm"],
          "x-c": ["c", "h", "dic"],
          "x-fortran": ["f", "for", "f77", "f90"],
          "x-opml": "opml",
          "x-nfo": "nfo",
          "x-sfv": "sfv",
          "x-uuencode": "uu",
          webviewhtml: "htt",
          javascript: "js",
          json: "json",
          markdown: ["md", "markdown", "mdown", "markdn"],
          "vnd.wap.si": "si",
          "vnd.wap.sl": "sl",
        },
        video: {
          avif: "avif",
          "3gpp": "3gp",
          annodex: "axv",
          dl: "dl",
          dv: ["dif", "dv"],
          fli: "fli",
          gl: "gl",
          mpeg: ["mpeg", "mpg", "mpe", "m1v", "m2v", "mp2", "mpa", "mpv2"],
          mp4: ["mp4", "mp4v", "mpg4"],
          quicktime: ["qt", "mov"],
          ogg: "ogv",
          "vnd.mpegurl": ["mxu", "m4u"],
          "x-flv": "flv",
          "x-la-asf": ["lsf", "lsx"],
          "x-mng": "mng",
          "x-ms-asf": ["asf", "asx", "asr"],
          "x-ms-wm": "wm",
          "x-ms-wmv": "wmv",
          "x-ms-wmx": "wmx",
          "x-ms-wvx": "wvx",
          "x-msvideo": "avi",
          "x-sgi-movie": "movie",
          "x-matroska": ["mpv", "mkv", "mk3d", "mks"],
          "3gpp2": "3g2",
          h261: "h261",
          h263: "h263",
          h264: "h264",
          jpeg: "jpgv",
          jpm: ["jpm", "jpgm"],
          mj2: ["mj2", "mjp2"],
          "vnd.dece.hd": ["uvh", "uvvh"],
          "vnd.dece.mobile": ["uvm", "uvvm"],
          "vnd.dece.pd": ["uvp", "uvvp"],
          "vnd.dece.sd": ["uvs", "uvvs"],
          "vnd.dece.video": ["uvv", "uvvv"],
          "vnd.dvb.file": "dvb",
          "vnd.fvt": "fvt",
          "vnd.ms-playready.media.pyv": "pyv",
          "vnd.uvvu.mp4": ["uvu", "uvvu"],
          "vnd.vivo": "viv",
          webm: "webm",
          "x-f4v": "f4v",
          "x-m4v": "m4v",
          "x-ms-vob": "vob",
          "x-smv": "smv",
          mp2t: "ts",
        },
        "x-conference": { "x-cooltalk": "ice" },
        "x-world": { "x-vrml": ["vrm", "flr", "wrz", "xaf", "xof"] },
      };
      (() => {
        let e = {};
        for (let t of Object.keys(T))
          for (let n of Object.keys(T[t])) {
            let r = T[t][n];
            if ("string" == typeof r) e[r] = t + "/" + n;
            else for (let i = 0; i < r.length; i++) e[r[i]] = t + "/" + n;
          }
      })();
      let O = [];
      for (let e = 0; e < 256; e++) {
        let t = e;
        for (let e = 0; e < 8; e++)
          1 & t ? (t = (t >>> 1) ^ 3988292384) : (t >>>= 1);
        O[e] = t;
      }
      let B = {
          concat(e, t) {
            if (0 === e.length || 0 === t.length) return e.concat(t);
            let n = e[e.length - 1],
              r = B.getPartial(n);
            return 32 === r
              ? e.concat(t)
              : B._shiftRight(t, r, 0 | n, e.slice(0, e.length - 1));
          },
          bitLength(e) {
            let t = e.length;
            if (0 === t) return 0;
            let n = e[t - 1];
            return (t - 1) * 32 + B.getPartial(n);
          },
          clamp(e, t) {
            if (32 * e.length < t) return e;
            let n = (e = e.slice(0, Math.ceil(t / 32))).length;
            return (
              (t &= 31),
              n > 0 &&
                t &&
                (e[n - 1] = B.partial(
                  t,
                  e[n - 1] & (2147483648 >> (t - 1)),
                  1
                )),
              e
            );
          },
          partial: (e, t, n) =>
            32 === e ? t : (n ? 0 | t : t << (32 - e)) + 1099511627776 * e,
          getPartial: (e) => Math.round(e / 1099511627776) || 32,
          _shiftRight(e, t, n, r) {
            for (void 0 === r && (r = []); t >= 32; t -= 32) r.push(n), (n = 0);
            if (0 === t) return r.concat(e);
            for (let i = 0; i < e.length; i++)
              r.push(n | (e[i] >>> t)), (n = e[i] << (32 - t));
            let i = e.length ? e[e.length - 1] : 0,
              o = B.getPartial(i);
            return (
              r.push(B.partial((t + o) & 31, t + o > 32 ? n : r.pop(), 1)), r
            );
          },
        },
        L = {
          bytes: {
            fromBits(e) {
              let t;
              let n = B.bitLength(e) / 8,
                r = new Uint8Array(n);
              for (let i = 0; i < n; i++)
                (3 & i) == 0 && (t = e[i / 4]), (r[i] = t >>> 24), (t <<= 8);
              return r;
            },
            toBits(e) {
              let t;
              let n = [],
                r = 0;
              for (t = 0; t < e.length; t++)
                (r = (r << 8) | e[t]), (3 & t) == 3 && (n.push(r), (r = 0));
              return 3 & t && n.push(B.partial(8 * (3 & t), r)), n;
            },
          },
        },
        D = {};
      D.sha1 = class {
        constructor(e) {
          (this.blockSize = 512),
            (this._init = [
              1732584193, 4023233417, 2562383102, 271733878, 3285377520,
            ]),
            (this._key = [1518500249, 1859775393, 2400959708, 3395469782]),
            e
              ? ((this._h = e._h.slice(0)),
                (this._buffer = e._buffer.slice(0)),
                (this._length = e._length))
              : this.reset();
        }
        reset() {
          return (
            (this._h = this._init.slice(0)),
            (this._buffer = []),
            (this._length = 0),
            this
          );
        }
        update(e) {
          "string" == typeof e && (e = L.utf8String.toBits(e));
          let t = (this._buffer = B.concat(this._buffer, e)),
            n = this._length,
            r = (this._length = n + B.bitLength(e));
          if (r > 9007199254740991)
            throw Error("Cannot hash more than 2^53 - 1 bits");
          let i = new Uint32Array(t),
            o = 0;
          for (
            let e =
              this.blockSize +
              n -
              ((this.blockSize + n) & (this.blockSize - 1));
            e <= r;
            e += this.blockSize
          )
            this._block(i.subarray(16 * o, 16 * (o + 1))), (o += 1);
          return t.splice(0, 16 * o), this;
        }
        finalize() {
          let e = this._buffer,
            t = this._h;
          e = B.concat(e, [B.partial(1, 1)]);
          for (let t = e.length + 2; 15 & t; t++) e.push(0);
          for (
            e.push(Math.floor(this._length / 4294967296)),
              e.push(0 | this._length);
            e.length;

          )
            this._block(e.splice(0, 16));
          return this.reset(), t;
        }
        _f(e, t, n, r) {
          return e <= 19
            ? (t & n) | (~t & r)
            : e <= 39
            ? t ^ n ^ r
            : e <= 59
            ? (t & n) | (t & r) | (n & r)
            : e <= 79
            ? t ^ n ^ r
            : void 0;
        }
        _S(e, t) {
          return (t << e) | (t >>> (32 - e));
        }
        _block(e) {
          let t = this._h,
            n = Array(80);
          for (let t = 0; t < 16; t++) n[t] = e[t];
          let r = t[0],
            i = t[1],
            o = t[2],
            a = t[3],
            s = t[4];
          for (let e = 0; e <= 79; e++) {
            e >= 16 &&
              (n[e] = this._S(1, n[e - 3] ^ n[e - 8] ^ n[e - 14] ^ n[e - 16]));
            let t =
              (this._S(5, r) +
                this._f(e, i, o, a) +
                s +
                n[e] +
                this._key[Math.floor(e / 20)]) |
              0;
            (s = a), (a = o), (o = this._S(30, i)), (i = r), (r = t);
          }
          (t[0] = (t[0] + r) | 0),
            (t[1] = (t[1] + i) | 0),
            (t[2] = (t[2] + o) | 0),
            (t[3] = (t[3] + a) | 0),
            (t[4] = (t[4] + s) | 0);
        }
      };
      let N = {};
      N.aes = class {
        constructor(e) {
          (this._tables = [
            [[], [], [], [], []],
            [[], [], [], [], []],
          ]),
            this._tables[0][0][0] || this._precompute();
          let t = this._tables[0][4],
            n = this._tables[1],
            r = e.length,
            i,
            o,
            a,
            s = 1;
          if (4 !== r && 6 !== r && 8 !== r)
            throw Error("invalid aes key size");
          for (
            this._key = [(o = e.slice(0)), (a = [])], i = r;
            i < 4 * r + 28;
            i++
          ) {
            let e = o[i - 1];
            (i % r == 0 || (8 === r && i % r == 4)) &&
              ((e =
                (t[e >>> 24] << 24) ^
                (t[(e >> 16) & 255] << 16) ^
                (t[(e >> 8) & 255] << 8) ^
                t[255 & e]),
              i % r == 0 &&
                ((e = (e << 8) ^ (e >>> 24) ^ (s << 24)),
                (s = (s << 1) ^ ((s >> 7) * 283)))),
              (o[i] = o[i - r] ^ e);
          }
          for (let e = 0; i; e++, i--) {
            let r = o[3 & e ? i : i - 4];
            i <= 4 || e < 4
              ? (a[e] = r)
              : (a[e] =
                  n[0][t[r >>> 24]] ^
                  n[1][t[(r >> 16) & 255]] ^
                  n[2][t[(r >> 8) & 255]] ^
                  n[3][t[255 & r]]);
          }
        }
        encrypt(e) {
          return this._crypt(e, 0);
        }
        decrypt(e) {
          return this._crypt(e, 1);
        }
        _precompute() {
          let e, t, n;
          let r = this._tables[0],
            i = this._tables[1],
            o = r[4],
            a = i[4],
            s = [],
            l = [];
          for (let e = 0; e < 256; e++)
            l[(s[e] = (e << 1) ^ ((e >> 7) * 283)) ^ e] = e;
          for (let c = (e = 0); !o[c]; c ^= t || 1, e = l[e] || 1) {
            let l = e ^ (e << 1) ^ (e << 2) ^ (e << 3) ^ (e << 4);
            (l = (l >> 8) ^ (255 & l) ^ 99), (o[c] = l), (a[l] = c);
            let u =
                (16843009 * s[(n = s[(t = s[c])])]) ^
                (65537 * n) ^
                (257 * t) ^
                (16843008 * c),
              d = (257 * s[l]) ^ (16843008 * l);
            for (let e = 0; e < 4; e++)
              (r[e][c] = d = (d << 24) ^ (d >>> 8)),
                (i[e][l] = u = (u << 24) ^ (u >>> 8));
          }
          for (let e = 0; e < 5; e++)
            (r[e] = r[e].slice(0)), (i[e] = i[e].slice(0));
        }
        _crypt(e, t) {
          let n, r, i;
          if (4 !== e.length) throw Error("invalid aes block size");
          let o = this._key[t],
            a = o.length / 4 - 2,
            s = [0, 0, 0, 0],
            l = this._tables[t],
            c = l[0],
            u = l[1],
            d = l[2],
            f = l[3],
            h = l[4],
            p = e[0] ^ o[0],
            m = e[t ? 3 : 1] ^ o[1],
            v = e[2] ^ o[2],
            g = e[t ? 1 : 3] ^ o[3],
            b = 4;
          for (let e = 0; e < a; e++)
            (n =
              c[p >>> 24] ^
              u[(m >> 16) & 255] ^
              d[(v >> 8) & 255] ^
              f[255 & g] ^
              o[b]),
              (r =
                c[m >>> 24] ^
                u[(v >> 16) & 255] ^
                d[(g >> 8) & 255] ^
                f[255 & p] ^
                o[b + 1]),
              (i =
                c[v >>> 24] ^
                u[(g >> 16) & 255] ^
                d[(p >> 8) & 255] ^
                f[255 & m] ^
                o[b + 2]),
              (g =
                c[g >>> 24] ^
                u[(p >> 16) & 255] ^
                d[(m >> 8) & 255] ^
                f[255 & v] ^
                o[b + 3]),
              (b += 4),
              (p = n),
              (m = r),
              (v = i);
          for (let e = 0; e < 4; e++)
            (s[t ? 3 & -e : e] =
              (h[p >>> 24] << 24) ^
              (h[(m >> 16) & 255] << 16) ^
              (h[(v >> 8) & 255] << 8) ^
              h[255 & g] ^
              o[b++]),
              (n = p),
              (p = m),
              (m = v),
              (v = g),
              (g = n);
          return s;
        }
      };
      let F = {};
      F.ctrGladman = class {
        constructor(e, t) {
          (this._prf = e), (this._initIv = t), (this._iv = t);
        }
        reset() {
          this._iv = this._initIv;
        }
        update(e) {
          return this.calculate(this._prf, e, this._iv);
        }
        incWord(e) {
          if (((e >> 24) & 255) == 255) {
            let t = (e >> 16) & 255,
              n = (e >> 8) & 255,
              r = 255 & e;
            255 === t
              ? ((t = 0),
                255 === n ? ((n = 0), 255 === r ? (r = 0) : ++r) : ++n)
              : ++t,
              (e = 0 + (t << 16) + (n << 8) + r);
          } else e += 16777216;
          return e;
        }
        incCounter(e) {
          0 === (e[0] = this.incWord(e[0])) && (e[1] = this.incWord(e[1]));
        }
        calculate(e, t, n) {
          let r;
          if (!(r = t.length)) return [];
          let i = B.bitLength(t);
          for (let i = 0; i < r; i += 4) {
            this.incCounter(n);
            let r = e.encrypt(n);
            (t[i] ^= r[0]),
              (t[i + 1] ^= r[1]),
              (t[i + 2] ^= r[2]),
              (t[i + 3] ^= r[3]);
          }
          return B.clamp(t, i);
        }
      };
      let U = {
        importKey: (e) => new U.hmacSha1(L.bytes.toBits(e)),
        pbkdf2(e, t, n, r) {
          let i, o, a, s, l;
          if (((n = n || 1e4), r < 0 || n < 0))
            throw Error("invalid params to pbkdf2");
          let c = ((r >> 5) + 1) << 2,
            u = new ArrayBuffer(c),
            d = new DataView(u),
            f = 0;
          for (l = 1, t = L.bytes.toBits(t); f < (c || 1); l++) {
            for (a = 1, i = o = e.encrypt(B.concat(t, [l])); a < n; a++)
              for (s = 0, o = e.encrypt(o); s < o.length; s++) i[s] ^= o[s];
            for (a = 0; f < (c || 1) && a < i.length; a++)
              d.setInt32(f, i[a]), (f += 4);
          }
          return u.slice(0, r / 8);
        },
      };
      (U.hmacSha1 = class {
        constructor(e) {
          let t = (this._hash = D.sha1),
            n = [[], []];
          this._baseHash = [new t(), new t()];
          let r = this._baseHash[0].blockSize / 32;
          e.length > r && (e = new t().update(e).finalize());
          for (let t = 0; t < r; t++)
            (n[0][t] = 909522486 ^ e[t]), (n[1][t] = 1549556828 ^ e[t]);
          this._baseHash[0].update(n[0]),
            this._baseHash[1].update(n[1]),
            (this._resultHash = new t(this._baseHash[0]));
        }
        reset() {
          (this._resultHash = new this._hash(this._baseHash[0])),
            (this._updated = !1);
        }
        update(e) {
          (this._updated = !0), this._resultHash.update(e);
        }
        digest() {
          let e = this._resultHash.finalize(),
            t = new this._hash(this._baseHash[1]).update(e).finalize();
          return this.reset(), t;
        }
        encrypt(e) {
          if (!this._updated) return this.update(e), this.digest(e);
          throw Error("encrypt on already updated hmac called!");
        }
      }),
        typeof crypto != A && crypto.getRandomValues;
      let G = { name: "PBKDF2" };
      Object.assign({ hash: { name: "HMAC" } }, G),
        Object.assign({ iterations: 1e3, hash: { name: "SHA-1" } }, G);
      let q = typeof crypto != A,
        W = q && crypto.subtle,
        H = q && typeof W != A;
      L.bytes,
        N.aes,
        F.ctrGladman,
        U.hmacSha1,
        q && H && W.importKey,
        q && H && W.deriveBits,
        "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼\xb6\xa7▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂\xc7\xfc\xe9\xe2\xe4\xe0\xe5\xe7\xea\xeb\xe8\xef\xee\xec\xc4\xc5\xc9\xe6\xc6\xf4\xf6\xf2\xfb\xf9\xff\xd6\xdc\xa2\xa3\xa5₧ƒ\xe1\xed\xf3\xfa\xf1\xd1\xaa\xba\xbf⌐\xac\xbd\xbc\xa1\xab\xbb░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀α\xdfΓπΣσ\xb5τΦΘΩδ∞φε∩≡\xb1≥≤⌠⌡\xf7≈\xb0∙\xb7√ⁿ\xb2■ ".split(
          ""
        ).length,
        new Uint8Array([7, 0, 2, 0, 65, 69, 3, 0, 0]);
      try {
        e =
          "file:///vercel/path0/node_modules/.pnpm/@zip.js+zip.js@2.7.45/node_modules/@zip.js/zip.js/lib/zip-fs.js";
      } catch (e) {}
      R({ baseURL: e }),
        (function (e) {
          let t = () =>
            URL.createObjectURL(
              new Blob(
                [
                  'const{Array:e,Object:t,Number:n,Math:r,Error:s,Uint8Array:i,Uint16Array:o,Uint32Array:c,Int32Array:f,Map:a,DataView:l,Promise:u,TextEncoder:w,crypto:h,postMessage:d,TransformStream:p,ReadableStream:y,WritableStream:m,CompressionStream:b,DecompressionStream:g}=self,k=void 0,v="undefined",S="function";class z{constructor(e){return class extends p{constructor(t,n){const r=new e(n);super({transform(e,t){t.enqueue(r.append(e))},flush(e){const t=r.flush();t&&e.enqueue(t)}})}}}}const C=[];for(let e=0;256>e;e++){let t=e;for(let e=0;8>e;e++)1&t?t=t>>>1^3988292384:t>>>=1;C[e]=t}class x{constructor(e){this.t=e||-1}append(e){let t=0|this.t;for(let n=0,r=0|e.length;r>n;n++)t=t>>>8^C[255&(t^e[n])];this.t=t}get(){return~this.t}}class A extends p{constructor(){let e;const t=new x;super({transform(e,n){t.append(e),n.enqueue(e)},flush(){const n=new i(4);new l(n.buffer).setUint32(0,t.get()),e.value=n}}),e=this}}const _={concat(e,t){if(0===e.length||0===t.length)return e.concat(t);const n=e[e.length-1],r=_.i(n);return 32===r?e.concat(t):_.o(t,r,0|n,e.slice(0,e.length-1))},l(e){const t=e.length;if(0===t)return 0;const n=e[t-1];return 32*(t-1)+_.i(n)},u(e,t){if(32*e.length<t)return e;const n=(e=e.slice(0,r.ceil(t/32))).length;return t&=31,n>0&&t&&(e[n-1]=_.h(t,e[n-1]&2147483648>>t-1,1)),e},h:(e,t,n)=>32===e?t:(n?0|t:t<<32-e)+1099511627776*e,i:e=>r.round(e/1099511627776)||32,o(e,t,n,r){for(void 0===r&&(r=[]);t>=32;t-=32)r.push(n),n=0;if(0===t)return r.concat(e);for(let s=0;s<e.length;s++)r.push(n|e[s]>>>t),n=e[s]<<32-t;const s=e.length?e[e.length-1]:0,i=_.i(s);return r.push(_.h(t+i&31,t+i>32?n:r.pop(),1)),r}},I={p:{m(e){const t=_.l(e)/8,n=new i(t);let r;for(let s=0;t>s;s++)3&s||(r=e[s/4]),n[s]=r>>>24,r<<=8;return n},k(e){const t=[];let n,r=0;for(n=0;n<e.length;n++)r=r<<8|e[n],3&~n||(t.push(r),r=0);return 3&n&&t.push(_.h(8*(3&n),r)),t}}},P=class{constructor(e){const t=this;t.blockSize=512,t.v=[1732584193,4023233417,2562383102,271733878,3285377520],t.S=[1518500249,1859775393,2400959708,3395469782],e?(t.C=e.C.slice(0),t.A=e.A.slice(0),t._=e._):t.reset()}reset(){const e=this;return e.C=e.v.slice(0),e.A=[],e._=0,e}update(e){const t=this;"string"==typeof e&&(e=I.I.k(e));const n=t.A=_.concat(t.A,e),r=t._,i=t._=r+_.l(e);if(i>9007199254740991)throw new s("Cannot hash more than 2^53 - 1 bits");const o=new c(n);let f=0;for(let e=t.blockSize+r-(t.blockSize+r&t.blockSize-1);i>=e;e+=t.blockSize)t.P(o.subarray(16*f,16*(f+1))),f+=1;return n.splice(0,16*f),t}D(){const e=this;let t=e.A;const n=e.C;t=_.concat(t,[_.h(1,1)]);for(let e=t.length+2;15&e;e++)t.push(0);for(t.push(r.floor(e._/4294967296)),t.push(0|e._);t.length;)e.P(t.splice(0,16));return e.reset(),n}V(e,t,n,r){return e>19?e>39?e>59?e>79?void 0:t^n^r:t&n|t&r|n&r:t^n^r:t&n|~t&r}R(e,t){return t<<e|t>>>32-e}P(t){const n=this,s=n.C,i=e(80);for(let e=0;16>e;e++)i[e]=t[e];let o=s[0],c=s[1],f=s[2],a=s[3],l=s[4];for(let e=0;79>=e;e++){16>e||(i[e]=n.R(1,i[e-3]^i[e-8]^i[e-14]^i[e-16]));const t=n.R(5,o)+n.V(e,c,f,a)+l+i[e]+n.S[r.floor(e/20)]|0;l=a,a=f,f=n.R(30,c),c=o,o=t}s[0]=s[0]+o|0,s[1]=s[1]+c|0,s[2]=s[2]+f|0,s[3]=s[3]+a|0,s[4]=s[4]+l|0}},D={getRandomValues(e){const t=new c(e.buffer),n=e=>{let t=987654321;const n=4294967295;return()=>(t=36969*(65535&t)+(t>>16)&n,(((t<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n)/4294967296+.5)*(r.random()>.5?1:-1))};for(let s,i=0;i<e.length;i+=4){const e=n(4294967296*(s||r.random()));s=987654071*e(),t[i/4]=4294967296*e()|0}return e}},V={importKey:e=>new V.B(I.p.k(e)),M(e,t,n,r){if(n=n||1e4,0>r||0>n)throw new s("invalid params to pbkdf2");const i=1+(r>>5)<<2;let o,c,f,a,u;const w=new ArrayBuffer(i),h=new l(w);let d=0;const p=_;for(t=I.p.k(t),u=1;(i||1)>d;u++){for(o=c=e.encrypt(p.concat(t,[u])),f=1;n>f;f++)for(c=e.encrypt(c),a=0;a<c.length;a++)o[a]^=c[a];for(f=0;(i||1)>d&&f<o.length;f++)h.setInt32(d,o[f]),d+=4}return w.slice(0,r/8)},B:class{constructor(e){const t=this,n=t.U=P,r=[[],[]];t.K=[new n,new n];const s=t.K[0].blockSize/32;e.length>s&&(e=(new n).update(e).D());for(let t=0;s>t;t++)r[0][t]=909522486^e[t],r[1][t]=1549556828^e[t];t.K[0].update(r[0]),t.K[1].update(r[1]),t.N=new n(t.K[0])}reset(){const e=this;e.N=new e.U(e.K[0]),e.O=!1}update(e){this.O=!0,this.N.update(e)}digest(){const e=this,t=e.N.D(),n=new e.U(e.K[1]).update(t).D();return e.reset(),n}encrypt(e){if(this.O)throw new s("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}}},R=typeof h!=v&&typeof h.getRandomValues==S,B="Invalid password",E="Invalid signature",M="zipjs-abort-check-password";function U(e){return R?h.getRandomValues(e):D.getRandomValues(e)}const K=16,N={name:"PBKDF2"},O=t.assign({hash:{name:"HMAC"}},N),T=t.assign({iterations:1e3,hash:{name:"SHA-1"}},N),W=["deriveBits"],j=[8,12,16],H=[16,24,32],L=10,F=[0,0,0,0],q=typeof h!=v,G=q&&h.subtle,J=q&&typeof G!=v,Q=I.p,X=class{constructor(e){const t=this;t.T=[[[],[],[],[],[]],[[],[],[],[],[]]],t.T[0][0][0]||t.W();const n=t.T[0][4],r=t.T[1],i=e.length;let o,c,f,a=1;if(4!==i&&6!==i&&8!==i)throw new s("invalid aes key size");for(t.S=[c=e.slice(0),f=[]],o=i;4*i+28>o;o++){let e=c[o-1];(o%i==0||8===i&&o%i==4)&&(e=n[e>>>24]<<24^n[e>>16&255]<<16^n[e>>8&255]<<8^n[255&e],o%i==0&&(e=e<<8^e>>>24^a<<24,a=a<<1^283*(a>>7))),c[o]=c[o-i]^e}for(let e=0;o;e++,o--){const t=c[3&e?o:o-4];f[e]=4>=o||4>e?t:r[0][n[t>>>24]]^r[1][n[t>>16&255]]^r[2][n[t>>8&255]]^r[3][n[255&t]]}}encrypt(e){return this.j(e,0)}decrypt(e){return this.j(e,1)}W(){const e=this.T[0],t=this.T[1],n=e[4],r=t[4],s=[],i=[];let o,c,f,a;for(let e=0;256>e;e++)i[(s[e]=e<<1^283*(e>>7))^e]=e;for(let l=o=0;!n[l];l^=c||1,o=i[o]||1){let i=o^o<<1^o<<2^o<<3^o<<4;i=i>>8^255&i^99,n[l]=i,r[i]=l,a=s[f=s[c=s[l]]];let u=16843009*a^65537*f^257*c^16843008*l,w=257*s[i]^16843008*i;for(let n=0;4>n;n++)e[n][l]=w=w<<24^w>>>8,t[n][i]=u=u<<24^u>>>8}for(let n=0;5>n;n++)e[n]=e[n].slice(0),t[n]=t[n].slice(0)}j(e,t){if(4!==e.length)throw new s("invalid aes block size");const n=this.S[t],r=n.length/4-2,i=[0,0,0,0],o=this.T[t],c=o[0],f=o[1],a=o[2],l=o[3],u=o[4];let w,h,d,p=e[0]^n[0],y=e[t?3:1]^n[1],m=e[2]^n[2],b=e[t?1:3]^n[3],g=4;for(let e=0;r>e;e++)w=c[p>>>24]^f[y>>16&255]^a[m>>8&255]^l[255&b]^n[g],h=c[y>>>24]^f[m>>16&255]^a[b>>8&255]^l[255&p]^n[g+1],d=c[m>>>24]^f[b>>16&255]^a[p>>8&255]^l[255&y]^n[g+2],b=c[b>>>24]^f[p>>16&255]^a[y>>8&255]^l[255&m]^n[g+3],g+=4,p=w,y=h,m=d;for(let e=0;4>e;e++)i[t?3&-e:e]=u[p>>>24]<<24^u[y>>16&255]<<16^u[m>>8&255]<<8^u[255&b]^n[g++],w=p,p=y,y=m,m=b,b=w;return i}},Y=class{constructor(e,t){this.H=e,this.L=t,this.F=t}reset(){this.F=this.L}update(e){return this.q(this.H,e,this.F)}G(e){if(255&~(e>>24))e+=1<<24;else{let t=e>>16&255,n=e>>8&255,r=255&e;255===t?(t=0,255===n?(n=0,255===r?r=0:++r):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=r}return e}J(e){0===(e[0]=this.G(e[0]))&&(e[1]=this.G(e[1]))}q(e,t,n){let r;if(!(r=t.length))return[];const s=_.l(t);for(let s=0;r>s;s+=4){this.J(n);const r=e.encrypt(n);t[s]^=r[0],t[s+1]^=r[1],t[s+2]^=r[2],t[s+3]^=r[3]}return _.u(t,s)}},Z=V.B;let $=q&&J&&typeof G.importKey==S,ee=q&&J&&typeof G.deriveBits==S;class te extends p{constructor({password:e,rawPassword:n,signed:r,encryptionStrength:o,checkPasswordOnly:c}){super({start(){t.assign(this,{ready:new u((e=>this.X=e)),password:ie(e,n),signed:r,Y:o-1,pending:new i})},async transform(e,t){const n=this,{password:r,Y:o,X:f,ready:a}=n;r?(await(async(e,t,n,r)=>{const i=await se(e,t,n,ce(r,0,j[t])),o=ce(r,j[t]);if(i[0]!=o[0]||i[1]!=o[1])throw new s(B)})(n,o,r,ce(e,0,j[o]+2)),e=ce(e,j[o]+2),c?t.error(new s(M)):f()):await a;const l=new i(e.length-L-(e.length-L)%K);t.enqueue(re(n,e,l,0,L,!0))},async flush(e){const{signed:t,Z:n,$:r,pending:o,ready:c}=this;if(r&&n){await c;const f=ce(o,0,o.length-L),a=ce(o,o.length-L);let l=new i;if(f.length){const e=ae(Q,f);r.update(e);const t=n.update(e);l=fe(Q,t)}if(t){const e=ce(fe(Q,r.digest()),0,L);for(let t=0;L>t;t++)if(e[t]!=a[t])throw new s(E)}e.enqueue(l)}}})}}class ne extends p{constructor({password:e,rawPassword:n,encryptionStrength:r}){let s;super({start(){t.assign(this,{ready:new u((e=>this.X=e)),password:ie(e,n),Y:r-1,pending:new i})},async transform(e,t){const n=this,{password:r,Y:s,X:o,ready:c}=n;let f=new i;r?(f=await(async(e,t,n)=>{const r=U(new i(j[t]));return oe(r,await se(e,t,n,r))})(n,s,r),o()):await c;const a=new i(f.length+e.length-e.length%K);a.set(f,0),t.enqueue(re(n,e,a,f.length,0))},async flush(e){const{Z:t,$:n,pending:r,ready:o}=this;if(n&&t){await o;let c=new i;if(r.length){const e=t.update(ae(Q,r));n.update(e),c=fe(Q,e)}s.signature=fe(Q,n.digest()).slice(0,L),e.enqueue(oe(c,s.signature))}}}),s=this}}function re(e,t,n,r,s,o){const{Z:c,$:f,pending:a}=e,l=t.length-s;let u;for(a.length&&(t=oe(a,t),n=((e,t)=>{if(t&&t>e.length){const n=e;(e=new i(t)).set(n,0)}return e})(n,l-l%K)),u=0;l-K>=u;u+=K){const e=ae(Q,ce(t,u,u+K));o&&f.update(e);const s=c.update(e);o||f.update(s),n.set(fe(Q,s),u+r)}return e.pending=ce(t,u),n}async function se(n,r,s,o){n.password=null;const c=await(async(e,t,n,r,s)=>{if(!$)return V.importKey(t);try{return await G.importKey("raw",t,n,!1,s)}catch(e){return $=!1,V.importKey(t)}})(0,s,O,0,W),f=await(async(e,t,n)=>{if(!ee)return V.M(t,e.salt,T.iterations,n);try{return await G.deriveBits(e,t,n)}catch(r){return ee=!1,V.M(t,e.salt,T.iterations,n)}})(t.assign({salt:o},T),c,8*(2*H[r]+2)),a=new i(f),l=ae(Q,ce(a,0,H[r])),u=ae(Q,ce(a,H[r],2*H[r])),w=ce(a,2*H[r]);return t.assign(n,{keys:{key:l,ee:u,passwordVerification:w},Z:new Y(new X(l),e.from(F)),$:new Z(u)}),w}function ie(e,t){return t===k?(e=>{if(typeof w==v){const t=new i((e=unescape(encodeURIComponent(e))).length);for(let n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return t}return(new w).encode(e)})(e):t}function oe(e,t){let n=e;return e.length+t.length&&(n=new i(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function ce(e,t,n){return e.subarray(t,n)}function fe(e,t){return e.m(t)}function ae(e,t){return e.k(t)}class le extends p{constructor({password:e,passwordVerification:n,checkPasswordOnly:r}){super({start(){t.assign(this,{password:e,passwordVerification:n}),de(this,e)},transform(e,t){const n=this;if(n.password){const t=we(n,e.subarray(0,12));if(n.password=null,t[11]!=n.passwordVerification)throw new s(B);e=e.subarray(12)}r?t.error(new s(M)):t.enqueue(we(n,e))}})}}class ue extends p{constructor({password:e,passwordVerification:n}){super({start(){t.assign(this,{password:e,passwordVerification:n}),de(this,e)},transform(e,t){const n=this;let r,s;if(n.password){n.password=null;const t=U(new i(12));t[11]=n.passwordVerification,r=new i(e.length+t.length),r.set(he(n,t),0),s=12}else r=new i(e.length),s=0;r.set(he(n,e),s),t.enqueue(r)}})}}function we(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=ye(e)^t[r],pe(e,n[r]);return n}function he(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=ye(e)^t[r],pe(e,t[r]);return n}function de(e,n){const r=[305419896,591751049,878082192];t.assign(e,{keys:r,te:new x(r[0]),ne:new x(r[2])});for(let t=0;t<n.length;t++)pe(e,n.charCodeAt(t))}function pe(e,t){let[n,s,i]=e.keys;e.te.append([t]),n=~e.te.get(),s=be(r.imul(be(s+me(n)),134775813)+1),e.ne.append([s>>>24]),i=~e.ne.get(),e.keys=[n,s,i]}function ye(e){const t=2|e.keys[2];return me(r.imul(t,1^t)>>>8)}function me(e){return 255&e}function be(e){return 4294967295&e}const ge="deflate-raw";class ke extends p{constructor(e,{chunkSize:t,CompressionStream:n,CompressionStreamNative:r}){super({});const{compressed:s,encrypted:i,useCompressionStream:o,zipCrypto:c,signed:f,level:a}=e,u=this;let w,h,d=Se(super.readable);i&&!c||!f||(w=new A,d=xe(d,w)),s&&(d=Ce(d,o,{level:a,chunkSize:t},r,n)),i&&(c?d=xe(d,new ue(e)):(h=new ne(e),d=xe(d,h))),ze(u,d,(()=>{let e;i&&!c&&(e=h.signature),i&&!c||!f||(e=new l(w.value.buffer).getUint32(0)),u.signature=e}))}}class ve extends p{constructor(e,{chunkSize:t,DecompressionStream:n,DecompressionStreamNative:r}){super({});const{zipCrypto:i,encrypted:o,signed:c,signature:f,compressed:a,useCompressionStream:u}=e;let w,h,d=Se(super.readable);o&&(i?d=xe(d,new le(e)):(h=new te(e),d=xe(d,h))),a&&(d=Ce(d,u,{chunkSize:t},r,n)),o&&!i||!c||(w=new A,d=xe(d,w)),ze(this,d,(()=>{if((!o||i)&&c){const e=new l(w.value.buffer);if(f!=e.getUint32(0,!1))throw new s(E)}}))}}function Se(e){return xe(e,new p({transform(e,t){e&&e.length&&t.enqueue(e)}}))}function ze(e,n,r){n=xe(n,new p({flush:r})),t.defineProperty(e,"readable",{get:()=>n})}function Ce(e,t,n,r,s){try{e=xe(e,new(t&&r?r:s)(ge,n))}catch(r){if(!t)return e;try{e=xe(e,new s(ge,n))}catch(t){return e}}return e}function xe(e,t){return e.pipeThrough(t)}const Ae="data",_e="close";class Ie extends p{constructor(e,n){super({});const r=this,{codecType:s}=e;let i;s.startsWith("deflate")?i=ke:s.startsWith("inflate")&&(i=ve);let o=0,c=0;const f=new i(e,n),a=super.readable,l=new p({transform(e,t){e&&e.length&&(c+=e.length,t.enqueue(e))},flush(){t.assign(r,{inputSize:c})}}),u=new p({transform(e,t){e&&e.length&&(o+=e.length,t.enqueue(e))},flush(){const{signature:e}=f;t.assign(r,{signature:e,outputSize:o,inputSize:c})}});t.defineProperty(r,"readable",{get:()=>a.pipeThrough(l).pipeThrough(f).pipeThrough(u)})}}class Pe extends p{constructor(e){let t;super({transform:function n(r,s){if(t){const e=new i(t.length+r.length);e.set(t),e.set(r,t.length),r=e,t=null}r.length>e?(s.enqueue(r.slice(0,e)),n(r.slice(e),s)):t=r},flush(e){t&&t.length&&e.enqueue(t)}})}}const De=new a,Ve=new a;let Re,Be=0,Ee=!0;async function Me(e){try{const{options:t,scripts:r,config:s}=e;if(r&&r.length)try{Ee?importScripts.apply(k,r):await Ue(r)}catch(e){Ee=!1,await Ue(r)}self.initCodec&&self.initCodec(),s.CompressionStreamNative=self.CompressionStream,s.DecompressionStreamNative=self.DecompressionStream,self.Deflate&&(s.CompressionStream=new z(self.Deflate)),self.Inflate&&(s.DecompressionStream=new z(self.Inflate));const i={highWaterMark:1},o=e.readable||new y({async pull(e){const t=new u((e=>De.set(Be,e)));Ke({type:"pull",messageId:Be}),Be=(Be+1)%n.MAX_SAFE_INTEGER;const{value:r,done:s}=await t;e.enqueue(r),s&&e.close()}},i),c=e.writable||new m({async write(e){let t;const r=new u((e=>t=e));Ve.set(Be,t),Ke({type:Ae,value:e,messageId:Be}),Be=(Be+1)%n.MAX_SAFE_INTEGER,await r}},i),f=new Ie(t,s);Re=new AbortController;const{signal:a}=Re;await o.pipeThrough(f).pipeThrough(new Pe(s.chunkSize)).pipeTo(c,{signal:a,preventClose:!0,preventAbort:!0}),await c.getWriter().close();const{signature:l,inputSize:w,outputSize:h}=f;Ke({type:_e,result:{signature:l,inputSize:w,outputSize:h}})}catch(e){Ne(e)}}async function Ue(e){for(const t of e)await import(t)}function Ke(e){let{value:t}=e;if(t)if(t.length)try{t=new i(t),e.value=t.buffer,d(e,[e.value])}catch(t){d(e)}else d(e);else d(e)}function Ne(e=new s("Unknown error")){const{message:t,stack:n,code:r,name:i}=e;d({error:{message:t,stack:n,code:r,name:i}})}addEventListener("message",(({data:e})=>{const{type:t,messageId:n,value:r,done:s}=e;try{if("start"==t&&Me(e),t==Ae){const e=De.get(n);De.delete(n),e({value:new i(r),done:s})}if("ack"==t){const e=Ve.get(n);Ve.delete(n),e()}t==_e&&Re.abort()}catch(e){Ne(e)}}));const Oe=15,Te=573,We=-2;function je(t){return He(t.map((([t,n])=>new e(t).fill(n,0,t))))}function He(t){return t.reduce(((t,n)=>t.concat(e.isArray(n)?He(n):n)),[])}const Le=[0,1,2,3].concat(...je([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function Fe(){const e=this;function t(e,t){let n=0;do{n|=1&e,e>>>=1,n<<=1}while(--t>0);return n>>>1}e.re=n=>{const s=e.se,i=e.oe.ie,o=e.oe.ce;let c,f,a,l=-1;for(n.fe=0,n.ae=Te,c=0;o>c;c++)0!==s[2*c]?(n.le[++n.fe]=l=c,n.ue[c]=0):s[2*c+1]=0;for(;2>n.fe;)a=n.le[++n.fe]=2>l?++l:0,s[2*a]=1,n.ue[a]=0,n.we--,i&&(n.he-=i[2*a+1]);for(e.de=l,c=r.floor(n.fe/2);c>=1;c--)n.pe(s,c);a=o;do{c=n.le[1],n.le[1]=n.le[n.fe--],n.pe(s,1),f=n.le[1],n.le[--n.ae]=c,n.le[--n.ae]=f,s[2*a]=s[2*c]+s[2*f],n.ue[a]=r.max(n.ue[c],n.ue[f])+1,s[2*c+1]=s[2*f+1]=a,n.le[1]=a++,n.pe(s,1)}while(n.fe>=2);n.le[--n.ae]=n.le[1],(t=>{const n=e.se,r=e.oe.ie,s=e.oe.ye,i=e.oe.me,o=e.oe.be;let c,f,a,l,u,w,h=0;for(l=0;Oe>=l;l++)t.ge[l]=0;for(n[2*t.le[t.ae]+1]=0,c=t.ae+1;Te>c;c++)f=t.le[c],l=n[2*n[2*f+1]+1]+1,l>o&&(l=o,h++),n[2*f+1]=l,f>e.de||(t.ge[l]++,u=0,i>f||(u=s[f-i]),w=n[2*f],t.we+=w*(l+u),r&&(t.he+=w*(r[2*f+1]+u)));if(0!==h){do{for(l=o-1;0===t.ge[l];)l--;t.ge[l]--,t.ge[l+1]+=2,t.ge[o]--,h-=2}while(h>0);for(l=o;0!==l;l--)for(f=t.ge[l];0!==f;)a=t.le[--c],a>e.de||(n[2*a+1]!=l&&(t.we+=(l-n[2*a+1])*n[2*a],n[2*a+1]=l),f--)}})(n),((e,n,r)=>{const s=[];let i,o,c,f=0;for(i=1;Oe>=i;i++)s[i]=f=f+r[i-1]<<1;for(o=0;n>=o;o++)c=e[2*o+1],0!==c&&(e[2*o]=t(s[c]++,c))})(s,e.de,n.ge)}}function qe(e,t,n,r,s){const i=this;i.ie=e,i.ye=t,i.me=n,i.ce=r,i.be=s}Fe.ke=[0,1,2,3,4,5,6,7].concat(...je([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]])),Fe.ve=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],Fe.Se=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],Fe.ze=e=>256>e?Le[e]:Le[256+(e>>>7)],Fe.Ce=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Fe.xe=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Fe.Ae=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Fe._e=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];const Ge=je([[144,8],[112,9],[24,7],[8,8]]);qe.Ie=He([12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227].map(((e,t)=>[e,Ge[t]])));const Je=je([[30,5]]);function Qe(e,t,n,r,s){const i=this;i.Pe=e,i.De=t,i.Ve=n,i.Re=r,i.Be=s}qe.Ee=He([0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23].map(((e,t)=>[e,Je[t]]))),qe.Me=new qe(qe.Ie,Fe.Ce,257,286,Oe),qe.Ue=new qe(qe.Ee,Fe.xe,0,30,Oe),qe.Ke=new qe(null,Fe.Ae,0,19,7);const Xe=[new Qe(0,0,0,0,0),new Qe(4,4,8,4,1),new Qe(4,5,16,8,1),new Qe(4,6,32,32,1),new Qe(4,4,16,16,2),new Qe(8,16,32,32,2),new Qe(8,16,128,128,2),new Qe(8,32,128,256,2),new Qe(32,128,258,1024,2),new Qe(32,258,258,4096,2)],Ye=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],Ze=113,$e=666,et=262;function tt(e,t,n,r){const s=e[2*t],i=e[2*n];return i>s||s==i&&r[t]<=r[n]}function nt(){const e=this;let t,n,s,c,f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z,C,x,A,_,I,P,D,V,R,B,E,M,U;const K=new Fe,N=new Fe,O=new Fe;let T,W,j,H,L,F;function q(){let t;for(t=0;286>t;t++)E[2*t]=0;for(t=0;30>t;t++)M[2*t]=0;for(t=0;19>t;t++)U[2*t]=0;E[512]=1,e.we=e.he=0,W=j=0}function G(e,t){let n,r=-1,s=e[1],i=0,o=7,c=4;0===s&&(o=138,c=3),e[2*(t+1)+1]=65535;for(let f=0;t>=f;f++)n=s,s=e[2*(f+1)+1],++i<o&&n==s||(c>i?U[2*n]+=i:0!==n?(n!=r&&U[2*n]++,U[32]++):i>10?U[36]++:U[34]++,i=0,r=n,0===s?(o=138,c=3):n==s?(o=6,c=3):(o=7,c=4))}function J(t){e.Ne[e.pending++]=t}function Q(e){J(255&e),J(e>>>8&255)}function X(e,t){let n;const r=t;F>16-r?(n=e,L|=n<<F&65535,Q(L),L=n>>>16-F,F+=r-16):(L|=e<<F&65535,F+=r)}function Y(e,t){const n=2*e;X(65535&t[n],65535&t[n+1])}function Z(e,t){let n,r,s=-1,i=e[1],o=0,c=7,f=4;for(0===i&&(c=138,f=3),n=0;t>=n;n++)if(r=i,i=e[2*(n+1)+1],++o>=c||r!=i){if(f>o)do{Y(r,U)}while(0!=--o);else 0!==r?(r!=s&&(Y(r,U),o--),Y(16,U),X(o-3,2)):o>10?(Y(18,U),X(o-11,7)):(Y(17,U),X(o-3,3));o=0,s=r,0===i?(c=138,f=3):r==i?(c=6,f=3):(c=7,f=4)}}function $(){16==F?(Q(L),L=0,F=0):8>F||(J(255&L),L>>>=8,F-=8)}function ee(t,n){let s,i,o;if(e.Oe[W]=t,e.Te[W]=255&n,W++,0===t?E[2*n]++:(j++,t--,E[2*(Fe.ke[n]+256+1)]++,M[2*Fe.ze(t)]++),!(8191&W)&&D>2){for(s=8*W,i=C-k,o=0;30>o;o++)s+=M[2*o]*(5+Fe.xe[o]);if(s>>>=3,j<r.floor(W/2)&&s<r.floor(i/2))return!0}return W==T-1}function te(t,n){let r,s,i,o,c=0;if(0!==W)do{r=e.Oe[c],s=e.Te[c],c++,0===r?Y(s,t):(i=Fe.ke[s],Y(i+256+1,t),o=Fe.Ce[i],0!==o&&(s-=Fe.ve[i],X(s,o)),r--,i=Fe.ze(r),Y(i,n),o=Fe.xe[i],0!==o&&(r-=Fe.Se[i],X(r,o)))}while(W>c);Y(256,t),H=t[513]}function ne(){F>8?Q(L):F>0&&J(255&L),L=0,F=0}function re(t,n,r){X(0+(r?1:0),3),((t,n)=>{ne(),H=8,Q(n),Q(~n),e.Ne.set(u.subarray(t,t+n),e.pending),e.pending+=n})(t,n)}function se(n){((t,n,r)=>{let s,i,o=0;D>0?(K.re(e),N.re(e),o=(()=>{let t;for(G(E,K.de),G(M,N.de),O.re(e),t=18;t>=3&&0===U[2*Fe._e[t]+1];t--);return e.we+=14+3*(t+1),t})(),s=e.we+3+7>>>3,i=e.he+3+7>>>3,i>s||(s=i)):s=i=n+5,n+4>s||-1==t?i==s?(X(2+(r?1:0),3),te(qe.Ie,qe.Ee)):(X(4+(r?1:0),3),((e,t,n)=>{let r;for(X(e-257,5),X(t-1,5),X(n-4,4),r=0;n>r;r++)X(U[2*Fe._e[r]+1],3);Z(E,e-1),Z(M,t-1)})(K.de+1,N.de+1,o+1),te(E,M)):re(t,n,r),q(),r&&ne()})(0>k?-1:k,C-k,n),k=C,t.We()}function ie(){let e,n,r,s;do{if(s=w-A-C,0===s&&0===C&&0===A)s=f;else if(-1==s)s--;else if(C>=f+f-et){u.set(u.subarray(f,f+f),0),x-=f,C-=f,k-=f,e=y,r=e;do{n=65535&d[--r],d[r]=f>n?0:n-f}while(0!=--e);e=f,r=e;do{n=65535&h[--r],h[r]=f>n?0:n-f}while(0!=--e);s+=f}if(0===t.je)return;e=t.He(u,C+A,s),A+=e,3>A||(p=255&u[C],p=(p<<g^255&u[C+1])&b)}while(et>A&&0!==t.je)}function oe(e){let t,n,r=I,s=C,i=_;const o=C>f-et?C-(f-et):0;let c=B;const a=l,w=C+258;let d=u[s+i-1],p=u[s+i];R>_||(r>>=2),c>A&&(c=A);do{if(t=e,u[t+i]==p&&u[t+i-1]==d&&u[t]==u[s]&&u[++t]==u[s+1]){s+=2,t++;do{}while(u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&w>s);if(n=258-(w-s),s=w-258,n>i){if(x=e,i=n,n>=c)break;d=u[s+i-1],p=u[s+i]}}}while((e=65535&h[e&a])>o&&0!=--r);return i>A?A:i}e.ue=[],e.ge=[],e.le=[],E=[],M=[],U=[],e.pe=(t,n)=>{const r=e.le,s=r[n];let i=n<<1;for(;i<=e.fe&&(i<e.fe&&tt(t,r[i+1],r[i],e.ue)&&i++,!tt(t,s,r[i],e.ue));)r[n]=r[i],n=i,i<<=1;r[n]=s},e.Le=(t,S,x,W,j,G)=>(W||(W=8),j||(j=8),G||(G=0),t.Fe=null,-1==S&&(S=6),1>j||j>9||8!=W||9>x||x>15||0>S||S>9||0>G||G>2?We:(t.qe=e,a=x,f=1<<a,l=f-1,m=j+7,y=1<<m,b=y-1,g=r.floor((m+3-1)/3),u=new i(2*f),h=[],d=[],T=1<<j+6,e.Ne=new i(4*T),s=4*T,e.Oe=new o(T),e.Te=new i(T),D=S,V=G,(t=>(t.Ge=t.Je=0,t.Fe=null,e.pending=0,e.Qe=0,n=Ze,c=0,K.se=E,K.oe=qe.Me,N.se=M,N.oe=qe.Ue,O.se=U,O.oe=qe.Ke,L=0,F=0,H=8,q(),(()=>{w=2*f,d[y-1]=0;for(let e=0;y-1>e;e++)d[e]=0;P=Xe[D].De,R=Xe[D].Pe,B=Xe[D].Ve,I=Xe[D].Re,C=0,k=0,A=0,v=_=2,z=0,p=0})(),0))(t))),e.Xe=()=>42!=n&&n!=Ze&&n!=$e?We:(e.Te=null,e.Oe=null,e.Ne=null,d=null,h=null,u=null,e.qe=null,n==Ze?-3:0),e.Ye=(e,t,n)=>{let r=0;return-1==t&&(t=6),0>t||t>9||0>n||n>2?We:(Xe[D].Be!=Xe[t].Be&&0!==e.Ge&&(r=e.Ze(1)),D!=t&&(D=t,P=Xe[D].De,R=Xe[D].Pe,B=Xe[D].Ve,I=Xe[D].Re),V=n,r)},e.$e=(e,t,r)=>{let s,i=r,o=0;if(!t||42!=n)return We;if(3>i)return 0;for(i>f-et&&(i=f-et,o=r-i),u.set(t.subarray(o,o+i),0),C=i,k=i,p=255&u[0],p=(p<<g^255&u[1])&b,s=0;i-3>=s;s++)p=(p<<g^255&u[s+2])&b,h[s&l]=d[p],d[p]=s;return 0},e.Ze=(r,i)=>{let o,w,m,I,R;if(i>4||0>i)return We;if(!r.et||!r.tt&&0!==r.je||n==$e&&4!=i)return r.Fe=Ye[4],We;if(0===r.nt)return r.Fe=Ye[7],-5;var B;if(t=r,I=c,c=i,42==n&&(w=8+(a-8<<4)<<8,m=(D-1&255)>>1,m>3&&(m=3),w|=m<<6,0!==C&&(w|=32),w+=31-w%31,n=Ze,J((B=w)>>8&255),J(255&B)),0!==e.pending){if(t.We(),0===t.nt)return c=-1,0}else if(0===t.je&&I>=i&&4!=i)return t.Fe=Ye[7],-5;if(n==$e&&0!==t.je)return r.Fe=Ye[7],-5;if(0!==t.je||0!==A||0!=i&&n!=$e){switch(R=-1,Xe[D].Be){case 0:R=(e=>{let n,r=65535;for(r>s-5&&(r=s-5);;){if(1>=A){if(ie(),0===A&&0==e)return 0;if(0===A)break}if(C+=A,A=0,n=k+r,(0===C||C>=n)&&(A=C-n,C=n,se(!1),0===t.nt))return 0;if(C-k>=f-et&&(se(!1),0===t.nt))return 0}return se(4==e),0===t.nt?4==e?2:0:4==e?3:1})(i);break;case 1:R=(e=>{let n,r=0;for(;;){if(et>A){if(ie(),et>A&&0==e)return 0;if(0===A)break}if(3>A||(p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C),0===r||(C-r&65535)>f-et||2!=V&&(v=oe(r)),3>v)n=ee(0,255&u[C]),A--,C++;else if(n=ee(C-x,v-3),A-=v,v>P||3>A)C+=v,v=0,p=255&u[C],p=(p<<g^255&u[C+1])&b;else{v--;do{C++,p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C}while(0!=--v);C++}if(n&&(se(!1),0===t.nt))return 0}return se(4==e),0===t.nt?4==e?2:0:4==e?3:1})(i);break;case 2:R=(e=>{let n,r,s=0;for(;;){if(et>A){if(ie(),et>A&&0==e)return 0;if(0===A)break}if(3>A||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C),_=v,S=x,v=2,0!==s&&P>_&&f-et>=(C-s&65535)&&(2!=V&&(v=oe(s)),5>=v&&(1==V||3==v&&C-x>4096)&&(v=2)),3>_||v>_)if(0!==z){if(n=ee(0,255&u[C-1]),n&&se(!1),C++,A--,0===t.nt)return 0}else z=1,C++,A--;else{r=C+A-3,n=ee(C-1-S,_-3),A-=_-1,_-=2;do{++C>r||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C)}while(0!=--_);if(z=0,v=2,C++,n&&(se(!1),0===t.nt))return 0}}return 0!==z&&(n=ee(0,255&u[C-1]),z=0),se(4==e),0===t.nt?4==e?2:0:4==e?3:1})(i)}if(2!=R&&3!=R||(n=$e),0==R||2==R)return 0===t.nt&&(c=-1),0;if(1==R){if(1==i)X(2,3),Y(256,qe.Ie),$(),9>1+H+10-F&&(X(2,3),Y(256,qe.Ie),$()),H=7;else if(re(0,0,!1),3==i)for(o=0;y>o;o++)d[o]=0;if(t.We(),0===t.nt)return c=-1,0}}return 4!=i?0:1}}function rt(){const e=this;e.rt=0,e.st=0,e.je=0,e.Ge=0,e.nt=0,e.Je=0}function st(e){const t=new rt,n=(o=e&&e.chunkSize?e.chunkSize:65536)+5*(r.floor(o/16383)+1);var o;const c=new i(n);let f=e?e.level:-1;void 0===f&&(f=-1),t.Le(f),t.et=c,this.append=(e,r)=>{let o,f,a=0,l=0,u=0;const w=[];if(e.length){t.rt=0,t.tt=e,t.je=e.length;do{if(t.st=0,t.nt=n,o=t.Ze(0),0!=o)throw new s("deflating: "+t.Fe);t.st&&(t.st==n?w.push(new i(c)):w.push(c.subarray(0,t.st))),u+=t.st,r&&t.rt>0&&t.rt!=a&&(r(t.rt),a=t.rt)}while(t.je>0||0===t.nt);return w.length>1?(f=new i(u),w.forEach((e=>{f.set(e,l),l+=e.length}))):f=w[0]?new i(w[0]):new i,f}},this.flush=()=>{let e,r,o=0,f=0;const a=[];do{if(t.st=0,t.nt=n,e=t.Ze(4),1!=e&&0!=e)throw new s("deflating: "+t.Fe);n-t.nt>0&&a.push(c.slice(0,t.st)),f+=t.st}while(t.je>0||0===t.nt);return t.Xe(),r=new i(f),a.forEach((e=>{r.set(e,o),o+=e.length})),r}}rt.prototype={Le(e,t){const n=this;return n.qe=new nt,t||(t=Oe),n.qe.Le(n,e,t)},Ze(e){const t=this;return t.qe?t.qe.Ze(t,e):We},Xe(){const e=this;if(!e.qe)return We;const t=e.qe.Xe();return e.qe=null,t},Ye(e,t){const n=this;return n.qe?n.qe.Ye(n,e,t):We},$e(e,t){const n=this;return n.qe?n.qe.$e(n,e,t):We},He(e,t,n){const r=this;let s=r.je;return s>n&&(s=n),0===s?0:(r.je-=s,e.set(r.tt.subarray(r.rt,r.rt+s),t),r.rt+=s,r.Ge+=s,s)},We(){const e=this;let t=e.qe.pending;t>e.nt&&(t=e.nt),0!==t&&(e.et.set(e.qe.Ne.subarray(e.qe.Qe,e.qe.Qe+t),e.st),e.st+=t,e.qe.Qe+=t,e.Je+=t,e.nt-=t,e.qe.pending-=t,0===e.qe.pending&&(e.qe.Qe=0))}};const it=0,ot=1,ct=-2,ft=-3,at=-4,lt=-5,ut=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],wt=1440,ht=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],dt=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],pt=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],yt=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],mt=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],bt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],gt=15;function kt(){let e,t,n,r,s,i;function o(e,t,o,c,f,a,l,u,w,h,d){let p,y,m,b,g,k,v,S,z,C,x,A,_,I,P;C=0,g=o;do{n[e[t+C]]++,C++,g--}while(0!==g);if(n[0]==o)return l[0]=-1,u[0]=0,it;for(S=u[0],k=1;gt>=k&&0===n[k];k++);for(v=k,k>S&&(S=k),g=gt;0!==g&&0===n[g];g--);for(m=g,S>g&&(S=g),u[0]=S,I=1<<k;g>k;k++,I<<=1)if(0>(I-=n[k]))return ft;if(0>(I-=n[g]))return ft;for(n[g]+=I,i[1]=k=0,C=1,_=2;0!=--g;)i[_]=k+=n[C],_++,C++;g=0,C=0;do{0!==(k=e[t+C])&&(d[i[k]++]=g),C++}while(++g<o);for(o=i[m],i[0]=g=0,C=0,b=-1,A=-S,s[0]=0,x=0,P=0;m>=v;v++)for(p=n[v];0!=p--;){for(;v>A+S;){if(b++,A+=S,P=m-A,P=P>S?S:P,(y=1<<(k=v-A))>p+1&&(y-=p+1,_=v,P>k))for(;++k<P&&(y<<=1)>n[++_];)y-=n[_];if(P=1<<k,h[0]+P>wt)return ft;s[b]=x=h[0],h[0]+=P,0!==b?(i[b]=g,r[0]=k,r[1]=S,k=g>>>A-S,r[2]=x-s[b-1]-k,w.set(r,3*(s[b-1]+k))):l[0]=x}for(r[1]=v-A,o>C?d[C]<c?(r[0]=256>d[C]?0:96,r[2]=d[C++]):(r[0]=a[d[C]-c]+16+64,r[2]=f[d[C++]-c]):r[0]=192,y=1<<v-A,k=g>>>A;P>k;k+=y)w.set(r,3*(x+k));for(k=1<<v-1;g&k;k>>>=1)g^=k;for(g^=k,z=(1<<A)-1;(g&z)!=i[b];)b--,A-=S,z=(1<<A)-1}return 0!==I&&1!=m?lt:it}function c(o){let c;for(e||(e=[],t=[],n=new f(gt+1),r=[],s=new f(gt),i=new f(gt+1)),t.length<o&&(t=[]),c=0;o>c;c++)t[c]=0;for(c=0;gt+1>c;c++)n[c]=0;for(c=0;3>c;c++)r[c]=0;s.set(n.subarray(0,gt),0),i.set(n.subarray(0,gt+1),0)}this.it=(n,r,s,i,f)=>{let a;return c(19),e[0]=0,a=o(n,0,19,19,null,null,s,r,i,e,t),a==ft?f.Fe="oversubscribed dynamic bit lengths tree":a!=lt&&0!==r[0]||(f.Fe="incomplete dynamic bit lengths tree",a=ft),a},this.ot=(n,r,s,i,f,a,l,u,w)=>{let h;return c(288),e[0]=0,h=o(s,0,n,257,pt,yt,a,i,u,e,t),h!=it||0===i[0]?(h==ft?w.Fe="oversubscribed literal/length tree":h!=at&&(w.Fe="incomplete literal/length tree",h=ft),h):(c(288),h=o(s,n,r,0,mt,bt,l,f,u,e,t),h!=it||0===f[0]&&n>257?(h==ft?w.Fe="oversubscribed distance tree":h==lt?(w.Fe="incomplete distance tree",h=ft):h!=at&&(w.Fe="empty distance tree with lengths",h=ft),h):it)}}kt.ct=(e,t,n,r)=>(e[0]=9,t[0]=5,n[0]=ht,r[0]=dt,it);const vt=0,St=1,zt=2,Ct=3,xt=4,At=5,_t=6,It=7,Pt=8,Dt=9;function Vt(){const e=this;let t,n,r,s,i=0,o=0,c=0,f=0,a=0,l=0,u=0,w=0,h=0,d=0;function p(e,t,n,r,s,i,o,c){let f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z;d=c.rt,p=c.je,w=o.ft,h=o.lt,y=o.write,m=y<o.read?o.read-y-1:o.end-y,b=ut[e],g=ut[t];do{for(;20>h;)p--,w|=(255&c.ut(d++))<<h,h+=8;if(f=w&b,a=n,l=r,z=3*(l+f),0!==(u=a[z]))for(;;){if(w>>=a[z+1],h-=a[z+1],16&u){for(u&=15,k=a[z+2]+(w&ut[u]),w>>=u,h-=u;15>h;)p--,w|=(255&c.ut(d++))<<h,h+=8;for(f=w&g,a=s,l=i,z=3*(l+f),u=a[z];;){if(w>>=a[z+1],h-=a[z+1],16&u){for(u&=15;u>h;)p--,w|=(255&c.ut(d++))<<h,h+=8;if(v=a[z+2]+(w&ut[u]),w>>=u,h-=u,m-=k,v>y){S=y-v;do{S+=o.end}while(0>S);if(u=o.end-S,k>u){if(k-=u,y-S>0&&u>y-S)do{o.wt[y++]=o.wt[S++]}while(0!=--u);else o.wt.set(o.wt.subarray(S,S+u),y),y+=u,S+=u,u=0;S=0}}else S=y-v,y-S>0&&2>y-S?(o.wt[y++]=o.wt[S++],o.wt[y++]=o.wt[S++],k-=2):(o.wt.set(o.wt.subarray(S,S+2),y),y+=2,S+=2,k-=2);if(y-S>0&&k>y-S)do{o.wt[y++]=o.wt[S++]}while(0!=--k);else o.wt.set(o.wt.subarray(S,S+k),y),y+=k,S+=k,k=0;break}if(64&u)return c.Fe="invalid distance code",k=c.je-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ft=w,o.lt=h,c.je=p,c.Ge+=d-c.rt,c.rt=d,o.write=y,ft;f+=a[z+2],f+=w&ut[u],z=3*(l+f),u=a[z]}break}if(64&u)return 32&u?(k=c.je-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ft=w,o.lt=h,c.je=p,c.Ge+=d-c.rt,c.rt=d,o.write=y,ot):(c.Fe="invalid literal/length code",k=c.je-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ft=w,o.lt=h,c.je=p,c.Ge+=d-c.rt,c.rt=d,o.write=y,ft);if(f+=a[z+2],f+=w&ut[u],z=3*(l+f),0===(u=a[z])){w>>=a[z+1],h-=a[z+1],o.wt[y++]=a[z+2],m--;break}}else w>>=a[z+1],h-=a[z+1],o.wt[y++]=a[z+2],m--}while(m>=258&&p>=10);return k=c.je-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ft=w,o.lt=h,c.je=p,c.Ge+=d-c.rt,c.rt=d,o.write=y,it}e.init=(e,i,o,c,f,a)=>{t=vt,u=e,w=i,r=o,h=c,s=f,d=a,n=null},e.ht=(e,y,m)=>{let b,g,k,v,S,z,C,x=0,A=0,_=0;for(_=y.rt,v=y.je,x=e.ft,A=e.lt,S=e.write,z=S<e.read?e.read-S-1:e.end-S;;)switch(t){case vt:if(z>=258&&v>=10&&(e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,m=p(u,w,r,h,s,d,e,y),_=y.rt,v=y.je,x=e.ft,A=e.lt,S=e.write,z=S<e.read?e.read-S-1:e.end-S,m!=it)){t=m==ot?It:Dt;break}c=u,n=r,o=h,t=St;case St:for(b=c;b>A;){if(0===v)return e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);m=it,v--,x|=(255&y.ut(_++))<<A,A+=8}if(g=3*(o+(x&ut[b])),x>>>=n[g+1],A-=n[g+1],k=n[g],0===k){f=n[g+2],t=_t;break}if(16&k){a=15&k,i=n[g+2],t=zt;break}if(!(64&k)){c=k,o=g/3+n[g+2];break}if(32&k){t=It;break}return t=Dt,y.Fe="invalid literal/length code",m=ft,e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);case zt:for(b=a;b>A;){if(0===v)return e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);m=it,v--,x|=(255&y.ut(_++))<<A,A+=8}i+=x&ut[b],x>>=b,A-=b,c=w,n=s,o=d,t=Ct;case Ct:for(b=c;b>A;){if(0===v)return e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);m=it,v--,x|=(255&y.ut(_++))<<A,A+=8}if(g=3*(o+(x&ut[b])),x>>=n[g+1],A-=n[g+1],k=n[g],16&k){a=15&k,l=n[g+2],t=xt;break}if(!(64&k)){c=k,o=g/3+n[g+2];break}return t=Dt,y.Fe="invalid distance code",m=ft,e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);case xt:for(b=a;b>A;){if(0===v)return e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);m=it,v--,x|=(255&y.ut(_++))<<A,A+=8}l+=x&ut[b],x>>=b,A-=b,t=At;case At:for(C=S-l;0>C;)C+=e.end;for(;0!==i;){if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.dt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);e.wt[S++]=e.wt[C++],z--,C==e.end&&(C=0),i--}t=vt;break;case _t:if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.dt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);m=it,e.wt[S++]=f,z--,t=vt;break;case It:if(A>7&&(A-=8,v++,_--),e.write=S,m=e.dt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,e.read!=e.write)return e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);t=Pt;case Pt:return m=ot,e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);case Dt:return m=ft,e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m);default:return m=ct,e.ft=x,e.lt=A,y.je=v,y.Ge+=_-y.rt,y.rt=_,e.write=S,e.dt(y,m)}},e.yt=()=>{}}const Rt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Bt=0,Et=1,Mt=2,Ut=3,Kt=4,Nt=5,Ot=6,Tt=7,Wt=8,jt=9;function Ht(e,t){const n=this;let r,s=Bt,o=0,c=0,a=0;const l=[0],u=[0],w=new Vt;let h=0,d=new f(3*wt);const p=new kt;n.lt=0,n.ft=0,n.wt=new i(t),n.end=t,n.read=0,n.write=0,n.reset=(e,t)=>{t&&(t[0]=0),s==Ot&&w.yt(e),s=Bt,n.lt=0,n.ft=0,n.read=n.write=0},n.reset(e,null),n.dt=(e,t)=>{let r,s,i;return s=e.st,i=n.read,r=(i>n.write?n.end:n.write)-i,r>e.nt&&(r=e.nt),0!==r&&t==lt&&(t=it),e.nt-=r,e.Je+=r,e.et.set(n.wt.subarray(i,i+r),s),s+=r,i+=r,i==n.end&&(i=0,n.write==n.end&&(n.write=0),r=n.write-i,r>e.nt&&(r=e.nt),0!==r&&t==lt&&(t=it),e.nt-=r,e.Je+=r,e.et.set(n.wt.subarray(i,i+r),s),s+=r,i+=r),e.st=s,n.read=i,t},n.ht=(e,t)=>{let i,f,y,m,b,g,k,v;for(m=e.rt,b=e.je,f=n.ft,y=n.lt,g=n.write,k=g<n.read?n.read-g-1:n.end-g;;){let S,z,C,x,A,_,I,P;switch(s){case Bt:for(;3>y;){if(0===b)return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);t=it,b--,f|=(255&e.ut(m++))<<y,y+=8}switch(i=7&f,h=1&i,i>>>1){case 0:f>>>=3,y-=3,i=7&y,f>>>=i,y-=i,s=Et;break;case 1:S=[],z=[],C=[[]],x=[[]],kt.ct(S,z,C,x),w.init(S[0],z[0],C[0],0,x[0],0),f>>>=3,y-=3,s=Ot;break;case 2:f>>>=3,y-=3,s=Ut;break;case 3:return f>>>=3,y-=3,s=jt,e.Fe="invalid block type",t=ft,n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t)}break;case Et:for(;32>y;){if(0===b)return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);t=it,b--,f|=(255&e.ut(m++))<<y,y+=8}if((~f>>>16&65535)!=(65535&f))return s=jt,e.Fe="invalid stored block lengths",t=ft,n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);o=65535&f,f=y=0,s=0!==o?Mt:0!==h?Tt:Bt;break;case Mt:if(0===b)return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);if(0===k&&(g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k&&(n.write=g,t=n.dt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k)))return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);if(t=it,i=o,i>b&&(i=b),i>k&&(i=k),n.wt.set(e.He(m,i),g),m+=i,b-=i,g+=i,k-=i,0!=(o-=i))break;s=0!==h?Tt:Bt;break;case Ut:for(;14>y;){if(0===b)return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);t=it,b--,f|=(255&e.ut(m++))<<y,y+=8}if(c=i=16383&f,(31&i)>29||(i>>5&31)>29)return s=jt,e.Fe="too many length or distance symbols",t=ft,n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);if(i=258+(31&i)+(i>>5&31),!r||r.length<i)r=[];else for(v=0;i>v;v++)r[v]=0;f>>>=14,y-=14,a=0,s=Kt;case Kt:for(;4+(c>>>10)>a;){for(;3>y;){if(0===b)return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);t=it,b--,f|=(255&e.ut(m++))<<y,y+=8}r[Rt[a++]]=7&f,f>>>=3,y-=3}for(;19>a;)r[Rt[a++]]=0;if(l[0]=7,i=p.it(r,l,u,d,e),i!=it)return(t=i)==ft&&(r=null,s=jt),n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);a=0,s=Nt;case Nt:for(;i=c,258+(31&i)+(i>>5&31)>a;){let o,w;for(i=l[0];i>y;){if(0===b)return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);t=it,b--,f|=(255&e.ut(m++))<<y,y+=8}if(i=d[3*(u[0]+(f&ut[i]))+1],w=d[3*(u[0]+(f&ut[i]))+2],16>w)f>>>=i,y-=i,r[a++]=w;else{for(v=18==w?7:w-14,o=18==w?11:3;i+v>y;){if(0===b)return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);t=it,b--,f|=(255&e.ut(m++))<<y,y+=8}if(f>>>=i,y-=i,o+=f&ut[v],f>>>=v,y-=v,v=a,i=c,v+o>258+(31&i)+(i>>5&31)||16==w&&1>v)return r=null,s=jt,e.Fe="invalid bit length repeat",t=ft,n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);w=16==w?r[v-1]:0;do{r[v++]=w}while(0!=--o);a=v}}if(u[0]=-1,A=[],_=[],I=[],P=[],A[0]=9,_[0]=6,i=c,i=p.ot(257+(31&i),1+(i>>5&31),r,A,_,I,P,d,e),i!=it)return i==ft&&(r=null,s=jt),t=i,n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);w.init(A[0],_[0],d,I[0],d,P[0]),s=Ot;case Ot:if(n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,(t=w.ht(n,e,t))!=ot)return n.dt(e,t);if(t=it,w.yt(e),m=e.rt,b=e.je,f=n.ft,y=n.lt,g=n.write,k=g<n.read?n.read-g-1:n.end-g,0===h){s=Bt;break}s=Tt;case Tt:if(n.write=g,t=n.dt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,n.read!=n.write)return n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);s=Wt;case Wt:return t=ot,n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);case jt:return t=ft,n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t);default:return t=ct,n.ft=f,n.lt=y,e.je=b,e.Ge+=m-e.rt,e.rt=m,n.write=g,n.dt(e,t)}}},n.yt=e=>{n.reset(e,null),n.wt=null,d=null},n.bt=(e,t,r)=>{n.wt.set(e.subarray(t,t+r),0),n.read=n.write=r},n.gt=()=>s==Et?1:0}const Lt=13,Ft=[0,0,255,255];function qt(){const e=this;function t(e){return e&&e.kt?(e.Ge=e.Je=0,e.Fe=null,e.kt.mode=7,e.kt.vt.reset(e,null),it):ct}e.mode=0,e.method=0,e.St=[0],e.zt=0,e.marker=0,e.Ct=0,e.xt=t=>(e.vt&&e.vt.yt(t),e.vt=null,it),e.At=(n,r)=>(n.Fe=null,e.vt=null,8>r||r>15?(e.xt(n),ct):(e.Ct=r,n.kt.vt=new Ht(n,1<<r),t(n),it)),e._t=(e,t)=>{let n,r;if(!e||!e.kt||!e.tt)return ct;const s=e.kt;for(t=4==t?lt:it,n=lt;;)switch(s.mode){case 0:if(0===e.je)return n;if(n=t,e.je--,e.Ge++,8!=(15&(s.method=e.ut(e.rt++)))){s.mode=Lt,e.Fe="unknown compression method",s.marker=5;break}if(8+(s.method>>4)>s.Ct){s.mode=Lt,e.Fe="invalid win size",s.marker=5;break}s.mode=1;case 1:if(0===e.je)return n;if(n=t,e.je--,e.Ge++,r=255&e.ut(e.rt++),((s.method<<8)+r)%31!=0){s.mode=Lt,e.Fe="incorrect header check",s.marker=5;break}if(!(32&r)){s.mode=7;break}s.mode=2;case 2:if(0===e.je)return n;n=t,e.je--,e.Ge++,s.zt=(255&e.ut(e.rt++))<<24&4278190080,s.mode=3;case 3:if(0===e.je)return n;n=t,e.je--,e.Ge++,s.zt+=(255&e.ut(e.rt++))<<16&16711680,s.mode=4;case 4:if(0===e.je)return n;n=t,e.je--,e.Ge++,s.zt+=(255&e.ut(e.rt++))<<8&65280,s.mode=5;case 5:return 0===e.je?n:(n=t,e.je--,e.Ge++,s.zt+=255&e.ut(e.rt++),s.mode=6,2);case 6:return s.mode=Lt,e.Fe="need dictionary",s.marker=0,ct;case 7:if(n=s.vt.ht(e,n),n==ft){s.mode=Lt,s.marker=0;break}if(n==it&&(n=t),n!=ot)return n;n=t,s.vt.reset(e,s.St),s.mode=12;case 12:return e.je=0,ot;case Lt:return ft;default:return ct}},e.It=(e,t,n)=>{let r=0,s=n;if(!e||!e.kt||6!=e.kt.mode)return ct;const i=e.kt;return s<1<<i.Ct||(s=(1<<i.Ct)-1,r=n-s),i.vt.bt(t,r,s),i.mode=7,it},e.Pt=e=>{let n,r,s,i,o;if(!e||!e.kt)return ct;const c=e.kt;if(c.mode!=Lt&&(c.mode=Lt,c.marker=0),0===(n=e.je))return lt;for(r=e.rt,s=c.marker;0!==n&&4>s;)e.ut(r)==Ft[s]?s++:s=0!==e.ut(r)?0:4-s,r++,n--;return e.Ge+=r-e.rt,e.rt=r,e.je=n,c.marker=s,4!=s?ft:(i=e.Ge,o=e.Je,t(e),e.Ge=i,e.Je=o,c.mode=7,it)},e.Dt=e=>e&&e.kt&&e.kt.vt?e.kt.vt.gt():ct}function Gt(){}function Jt(e){const t=new Gt,n=e&&e.chunkSize?r.floor(2*e.chunkSize):131072,o=new i(n);let c=!1;t.At(),t.et=o,this.append=(e,r)=>{const f=[];let a,l,u=0,w=0,h=0;if(0!==e.length){t.rt=0,t.tt=e,t.je=e.length;do{if(t.st=0,t.nt=n,0!==t.je||c||(t.rt=0,c=!0),a=t._t(0),c&&a===lt){if(0!==t.je)throw new s("inflating: bad input")}else if(a!==it&&a!==ot)throw new s("inflating: "+t.Fe);if((c||a===ot)&&t.je===e.length)throw new s("inflating: bad input");t.st&&(t.st===n?f.push(new i(o)):f.push(o.subarray(0,t.st))),h+=t.st,r&&t.rt>0&&t.rt!=u&&(r(t.rt),u=t.rt)}while(t.je>0||0===t.nt);return f.length>1?(l=new i(h),f.forEach((e=>{l.set(e,w),w+=e.length}))):l=f[0]?new i(f[0]):new i,l}},this.flush=()=>{t.xt()}}Gt.prototype={At(e){const t=this;return t.kt=new qt,e||(e=15),t.kt.At(t,e)},_t(e){const t=this;return t.kt?t.kt._t(t,e):ct},xt(){const e=this;if(!e.kt)return ct;const t=e.kt.xt(e);return e.kt=null,t},Pt(){const e=this;return e.kt?e.kt.Pt(e):ct},It(e,t){const n=this;return n.kt?n.kt.It(n,e,t):ct},ut(e){return this.tt[e]},He(e,t){return this.tt.subarray(e,e+t)}},self.initCodec=()=>{self.Deflate=st,self.Inflate=Jt};\n',
                ],
                { type: "text/javascript" }
              )
            );
          e({ workerScripts: { inflate: [t], deflate: [t] } });
        })(R),
        R({
          Deflate: function (e) {
            var t;
            let n = new f(),
              r =
                (t = e && e.chunkSize ? e.chunkSize : 65536) +
                5 * (Math.floor(t / 16383) + 1),
              i = new Uint8Array(r),
              o = e ? e.level : -1;
            void 0 === o && (o = -1),
              n.deflateInit(o),
              (n.next_out = i),
              (this.append = function (e, t) {
                let o,
                  a = 0,
                  s = 0,
                  l = 0,
                  c = [];
                if (e.length) {
                  (n.next_in_index = 0),
                    (n.next_in = e),
                    (n.avail_in = e.length);
                  do {
                    if (
                      ((n.next_out_index = 0),
                      (n.avail_out = r),
                      0 != n.deflate(0))
                    )
                      throw Error("deflating: " + n.msg);
                    n.next_out_index &&
                      (n.next_out_index == r
                        ? c.push(new Uint8Array(i))
                        : c.push(i.subarray(0, n.next_out_index))),
                      (l += n.next_out_index),
                      t &&
                        n.next_in_index > 0 &&
                        n.next_in_index != a &&
                        (t(n.next_in_index), (a = n.next_in_index));
                  } while (n.avail_in > 0 || 0 === n.avail_out);
                  return (
                    c.length > 1
                      ? ((o = new Uint8Array(l)),
                        c.forEach(function (e) {
                          o.set(e, s), (s += e.length);
                        }))
                      : (o = c[0] ? new Uint8Array(c[0]) : new Uint8Array()),
                    o
                  );
                }
              }),
              (this.flush = function () {
                let e,
                  t,
                  o = 0,
                  a = 0,
                  s = [];
                do {
                  if (
                    ((n.next_out_index = 0),
                    (n.avail_out = r),
                    1 != (e = n.deflate(4)) && 0 != e)
                  )
                    throw Error("deflating: " + n.msg);
                  r - n.avail_out > 0 && s.push(i.slice(0, n.next_out_index)),
                    (a += n.next_out_index);
                } while (n.avail_in > 0 || 0 === n.avail_out);
                return (
                  n.deflateEnd(),
                  (t = new Uint8Array(a)),
                  s.forEach(function (e) {
                    t.set(e, o), (o += e.length);
                  }),
                  t
                );
              });
          },
          Inflate: function (e) {
            let t = new j(),
              n = e && e.chunkSize ? Math.floor(2 * e.chunkSize) : 131072,
              r = new Uint8Array(n),
              i = !1;
            t.inflateInit(),
              (t.next_out = r),
              (this.append = function (e, o) {
                let a = [],
                  s,
                  l,
                  c = 0,
                  u = 0,
                  d = 0;
                if (0 !== e.length) {
                  (t.next_in_index = 0),
                    (t.next_in = e),
                    (t.avail_in = e.length);
                  do {
                    if (
                      ((t.next_out_index = 0),
                      (t.avail_out = n),
                      0 !== t.avail_in ||
                        i ||
                        ((t.next_in_index = 0), (i = !0)),
                      (s = t.inflate(0)),
                      i && -5 === s)
                    ) {
                      if (0 !== t.avail_in) throw Error("inflating: bad input");
                    } else if (0 !== s && 1 !== s)
                      throw Error("inflating: " + t.msg);
                    if ((i || 1 === s) && t.avail_in === e.length)
                      throw Error("inflating: bad input");
                    t.next_out_index &&
                      (t.next_out_index === n
                        ? a.push(new Uint8Array(r))
                        : a.push(r.subarray(0, t.next_out_index))),
                      (d += t.next_out_index),
                      o &&
                        t.next_in_index > 0 &&
                        t.next_in_index != c &&
                        (o(t.next_in_index), (c = t.next_in_index));
                  } while (t.avail_in > 0 || 0 === t.avail_out);
                  return (
                    a.length > 1
                      ? ((l = new Uint8Array(d)),
                        a.forEach(function (e) {
                          l.set(e, u), (u += e.length);
                        }))
                      : (l = a[0] ? new Uint8Array(a[0]) : new Uint8Array()),
                    l
                  );
                }
              }),
              (this.flush = function () {
                t.inflateEnd();
              });
          },
        });
    },
    95004: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return g;
        },
      });
      var r = n(83112),
        i = n(67828);
      function o() {
        let e = (0, r.useRef)(!1);
        return (
          (0, i.L)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
      var a = n(67352),
        s = n(80023),
        l = n(28611);
      class c extends r.Component {
        getSnapshotBeforeUpdate(e) {
          let t = this.props.childRef.current;
          if (t && e.isPresent && !this.props.isPresent) {
            let e = this.props.sizeRef.current;
            (e.height = t.offsetHeight || 0),
              (e.width = t.offsetWidth || 0),
              (e.top = t.offsetTop),
              (e.left = t.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function u({ children: e, isPresent: t }) {
        let n = (0, r.useId)(),
          i = (0, r.useRef)(null),
          o = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, r.useInsertionEffect)(() => {
            let { width: e, height: r, top: a, left: s } = o.current;
            if (t || !i.current || !e || !r) return;
            i.current.dataset.motionPopId = n;
            let l = document.createElement("style");
            return (
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${a}px !important;
            left: ${s}px !important;
          }
        `),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [t]),
          r.createElement(
            c,
            { isPresent: t, childRef: i, sizeRef: o },
            r.cloneElement(e, { ref: i })
          )
        );
      }
      let d = ({
        children: e,
        initial: t,
        isPresent: n,
        onExitComplete: i,
        custom: o,
        presenceAffectsLayout: a,
        mode: c,
      }) => {
        let d = (0, l.h)(f),
          h = (0, r.useId)(),
          p = (0, r.useMemo)(
            () => ({
              id: h,
              initial: t,
              isPresent: n,
              custom: o,
              onExitComplete: (e) => {
                for (let t of (d.set(e, !0), d.values())) if (!t) return;
                i && i();
              },
              register: (e) => (d.set(e, !1), () => d.delete(e)),
            }),
            a ? void 0 : [n]
          );
        return (
          (0, r.useMemo)(() => {
            d.forEach((e, t) => d.set(t, !1));
          }, [n]),
          r.useEffect(() => {
            n || d.size || !i || i();
          }, [n]),
          "popLayout" === c && (e = r.createElement(u, { isPresent: n }, e)),
          r.createElement(s.O.Provider, { value: p }, e)
        );
      };
      function f() {
        return new Map();
      }
      var h = n(49914),
        p = n(41346),
        m = n(58726);
      let v = (e) => e.key || "",
        g = ({
          children: e,
          custom: t,
          initial: n = !0,
          onExitComplete: s,
          exitBeforeEnter: l,
          presenceAffectsLayout: c = !0,
          mode: u = "sync",
        }) => {
          (0, m.k)(!l, "Replace exitBeforeEnter with mode='wait'");
          let f =
              (0, r.useContext)(h.p).forceRender ||
              (function () {
                let e = o(),
                  [t, n] = (0, r.useState)(0),
                  i = (0, r.useCallback)(() => {
                    e.current && n(t + 1);
                  }, [t]);
                return [(0, r.useCallback)(() => a.Wi.postRender(i), [i]), t];
              })()[0],
            g = o(),
            b = (function (e) {
              let t = [];
              return (
                r.Children.forEach(e, (e) => {
                  (0, r.isValidElement)(e) && t.push(e);
                }),
                t
              );
            })(e),
            y = b,
            x = (0, r.useRef)(new Map()).current,
            w = (0, r.useRef)(y),
            _ = (0, r.useRef)(new Map()).current,
            k = (0, r.useRef)(!0);
          if (
            ((0, i.L)(() => {
              (k.current = !1),
                (function (e, t) {
                  e.forEach((e) => {
                    let n = v(e);
                    t.set(n, e);
                  });
                })(b, _),
                (w.current = y);
            }),
            (0, p.z)(() => {
              (k.current = !0), _.clear(), x.clear();
            }),
            k.current)
          )
            return r.createElement(
              r.Fragment,
              null,
              y.map((e) =>
                r.createElement(
                  d,
                  {
                    key: v(e),
                    isPresent: !0,
                    initial: !!n && void 0,
                    presenceAffectsLayout: c,
                    mode: u,
                  },
                  e
                )
              )
            );
          y = [...y];
          let S = w.current.map(v),
            P = b.map(v),
            j = S.length;
          for (let e = 0; e < j; e++) {
            let t = S[e];
            -1 !== P.indexOf(t) || x.has(t) || x.set(t, void 0);
          }
          return (
            "wait" === u && x.size && (y = []),
            x.forEach((e, n) => {
              if (-1 !== P.indexOf(n)) return;
              let i = _.get(n);
              if (!i) return;
              let o = S.indexOf(n),
                a = e;
              a ||
                ((a = r.createElement(
                  d,
                  {
                    key: v(i),
                    isPresent: !1,
                    onExitComplete: () => {
                      x.delete(n);
                      let e = Array.from(_.keys()).filter(
                        (e) => !P.includes(e)
                      );
                      if (
                        (e.forEach((e) => _.delete(e)),
                        (w.current = b.filter((t) => {
                          let r = v(t);
                          return r === n || e.includes(r);
                        })),
                        !x.size)
                      ) {
                        if (!1 === g.current) return;
                        f(), s && s();
                      }
                    },
                    custom: t,
                    presenceAffectsLayout: c,
                    mode: u,
                  },
                  i
                )),
                x.set(n, a)),
                y.splice(o, 0, a);
            }),
            (y = y.map((e) => {
              let t = e.key;
              return x.has(t)
                ? e
                : r.createElement(
                    d,
                    {
                      key: v(e),
                      isPresent: !0,
                      presenceAffectsLayout: c,
                      mode: u,
                    },
                    e
                  );
            })),
            r.createElement(
              r.Fragment,
              null,
              x.size ? y : y.map((e) => (0, r.cloneElement)(e))
            )
          );
        };
    },
    41346: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return i;
        },
      });
      var r = n(83112);
      function i(e) {
        return (0, r.useEffect)(() => () => e(), []);
      }
    },
    18776: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ys: function () {
          return h;
        },
      });
      var r = n(91344);
      let i = new r.Raycaster(),
        o = new r.Vector3(),
        a = new r.Vector3(),
        s = new r.Quaternion(),
        l = {
          X: new r.Vector3(1, 0, 0),
          Y: new r.Vector3(0, 1, 0),
          Z: new r.Vector3(0, 0, 1),
        },
        c = { type: "change" },
        u = { type: "mouseDown" },
        d = { type: "mouseUp", mode: null },
        f = { type: "objectChange" };
      class h extends r.Object3D {
        constructor(e, t) {
          super(),
            void 0 === t &&
              (console.warn(
                'THREE.TransformControls: The second parameter "domElement" is now mandatory.'
              ),
              (t = document)),
            (this.isTransformControls = !0),
            (this.visible = !1),
            (this.domElement = t),
            (this.domElement.style.touchAction = "none");
          let n = new T();
          (this._gizmo = n), this.add(n);
          let i = new O();
          (this._plane = i), this.add(i);
          let o = this;
          function a(e, t) {
            let r = t;
            Object.defineProperty(o, e, {
              get: function () {
                return void 0 !== r ? r : t;
              },
              set: function (t) {
                r !== t &&
                  ((r = t),
                  (i[e] = t),
                  (n[e] = t),
                  o.dispatchEvent({ type: e + "-changed", value: t }),
                  o.dispatchEvent(c));
              },
            }),
              (o[e] = t),
              (i[e] = t),
              (n[e] = t);
          }
          a("camera", e),
            a("object", void 0),
            a("enabled", !0),
            a("axis", null),
            a("mode", "translate"),
            a("translationSnap", null),
            a("rotationSnap", null),
            a("scaleSnap", null),
            a("space", "world"),
            a("size", 1),
            a("dragging", !1),
            a("showX", !0),
            a("showY", !0),
            a("showZ", !0);
          let s = new r.Vector3(),
            l = new r.Vector3(),
            u = new r.Quaternion(),
            d = new r.Quaternion(),
            f = new r.Vector3(),
            h = new r.Quaternion(),
            y = new r.Vector3(),
            x = new r.Vector3(),
            w = new r.Vector3(),
            _ = new r.Vector3();
          a("worldPosition", s),
            a("worldPositionStart", l),
            a("worldQuaternion", u),
            a("worldQuaternionStart", d),
            a("cameraPosition", f),
            a("cameraQuaternion", h),
            a("pointStart", y),
            a("pointEnd", x),
            a("rotationAxis", w),
            a("rotationAngle", 0),
            a("eye", _),
            (this._offset = new r.Vector3()),
            (this._startNorm = new r.Vector3()),
            (this._endNorm = new r.Vector3()),
            (this._cameraScale = new r.Vector3()),
            (this._parentPosition = new r.Vector3()),
            (this._parentQuaternion = new r.Quaternion()),
            (this._parentQuaternionInv = new r.Quaternion()),
            (this._parentScale = new r.Vector3()),
            (this._worldScaleStart = new r.Vector3()),
            (this._worldQuaternionInv = new r.Quaternion()),
            (this._worldScale = new r.Vector3()),
            (this._positionStart = new r.Vector3()),
            (this._quaternionStart = new r.Quaternion()),
            (this._scaleStart = new r.Vector3()),
            (this._getPointer = p.bind(this)),
            (this._onPointerDown = v.bind(this)),
            (this._onPointerHover = m.bind(this)),
            (this._onPointerMove = g.bind(this)),
            (this._onPointerUp = b.bind(this)),
            this.domElement.addEventListener(
              "pointerdown",
              this._onPointerDown
            ),
            this.domElement.addEventListener(
              "pointermove",
              this._onPointerHover
            ),
            this.domElement.addEventListener("pointerup", this._onPointerUp);
        }
        updateMatrixWorld() {
          void 0 !== this.object &&
            (this.object.updateMatrixWorld(),
            null === this.object.parent
              ? console.error(
                  "TransformControls: The attached 3D object must be a part of the scene graph."
                )
              : this.object.parent.matrixWorld.decompose(
                  this._parentPosition,
                  this._parentQuaternion,
                  this._parentScale
                ),
            this.object.matrixWorld.decompose(
              this.worldPosition,
              this.worldQuaternion,
              this._worldScale
            ),
            this._parentQuaternionInv.copy(this._parentQuaternion).invert(),
            this._worldQuaternionInv.copy(this.worldQuaternion).invert()),
            this.camera.updateMatrixWorld(),
            this.camera.matrixWorld.decompose(
              this.cameraPosition,
              this.cameraQuaternion,
              this._cameraScale
            ),
            this.camera.isOrthographicCamera
              ? this.camera.getWorldDirection(this.eye).negate()
              : this.eye
                  .copy(this.cameraPosition)
                  .sub(this.worldPosition)
                  .normalize(),
            super.updateMatrixWorld(this);
        }
        pointerHover(e) {
          if (void 0 === this.object || !0 === this.dragging) return;
          i.setFromCamera(e, this.camera);
          let t = y(this._gizmo.picker[this.mode], i);
          t ? (this.axis = t.object.name) : (this.axis = null);
        }
        pointerDown(e) {
          if (
            void 0 !== this.object &&
            !0 !== this.dragging &&
            0 === e.button &&
            null !== this.axis
          ) {
            i.setFromCamera(e, this.camera);
            let t = y(this._plane, i, !0);
            t &&
              (this.object.updateMatrixWorld(),
              this.object.parent.updateMatrixWorld(),
              this._positionStart.copy(this.object.position),
              this._quaternionStart.copy(this.object.quaternion),
              this._scaleStart.copy(this.object.scale),
              this.object.matrixWorld.decompose(
                this.worldPositionStart,
                this.worldQuaternionStart,
                this._worldScaleStart
              ),
              this.pointStart.copy(t.point).sub(this.worldPositionStart)),
              (this.dragging = !0),
              (u.mode = this.mode),
              this.dispatchEvent(u);
          }
        }
        pointerMove(e) {
          let t = this.axis,
            n = this.mode,
            r = this.object,
            u = this.space;
          if (
            ("scale" === n
              ? (u = "local")
              : ("E" === t || "XYZE" === t || "XYZ" === t) && (u = "world"),
            void 0 === r ||
              null === t ||
              !1 === this.dragging ||
              -1 !== e.button)
          )
            return;
          i.setFromCamera(e, this.camera);
          let d = y(this._plane, i, !0);
          if (d) {
            if (
              (this.pointEnd.copy(d.point).sub(this.worldPositionStart),
              "translate" === n)
            )
              this._offset.copy(this.pointEnd).sub(this.pointStart),
                "local" === u &&
                  "XYZ" !== t &&
                  this._offset.applyQuaternion(this._worldQuaternionInv),
                -1 === t.indexOf("X") && (this._offset.x = 0),
                -1 === t.indexOf("Y") && (this._offset.y = 0),
                -1 === t.indexOf("Z") && (this._offset.z = 0),
                "local" === u && "XYZ" !== t
                  ? this._offset
                      .applyQuaternion(this._quaternionStart)
                      .divide(this._parentScale)
                  : this._offset
                      .applyQuaternion(this._parentQuaternionInv)
                      .divide(this._parentScale),
                r.position.copy(this._offset).add(this._positionStart),
                this.translationSnap &&
                  ("local" === u &&
                    (r.position.applyQuaternion(
                      s.copy(this._quaternionStart).invert()
                    ),
                    -1 !== t.search("X") &&
                      (r.position.x =
                        Math.round(r.position.x / this.translationSnap) *
                        this.translationSnap),
                    -1 !== t.search("Y") &&
                      (r.position.y =
                        Math.round(r.position.y / this.translationSnap) *
                        this.translationSnap),
                    -1 !== t.search("Z") &&
                      (r.position.z =
                        Math.round(r.position.z / this.translationSnap) *
                        this.translationSnap),
                    r.position.applyQuaternion(this._quaternionStart)),
                  "world" === u &&
                    (r.parent &&
                      r.position.add(
                        o.setFromMatrixPosition(r.parent.matrixWorld)
                      ),
                    -1 !== t.search("X") &&
                      (r.position.x =
                        Math.round(r.position.x / this.translationSnap) *
                        this.translationSnap),
                    -1 !== t.search("Y") &&
                      (r.position.y =
                        Math.round(r.position.y / this.translationSnap) *
                        this.translationSnap),
                    -1 !== t.search("Z") &&
                      (r.position.z =
                        Math.round(r.position.z / this.translationSnap) *
                        this.translationSnap),
                    r.parent &&
                      r.position.sub(
                        o.setFromMatrixPosition(r.parent.matrixWorld)
                      )));
            else if ("scale" === n) {
              if (-1 !== t.search("XYZ")) {
                let e = this.pointEnd.length() / this.pointStart.length();
                0 > this.pointEnd.dot(this.pointStart) && (e *= -1),
                  a.set(e, e, e);
              } else
                o.copy(this.pointStart),
                  a.copy(this.pointEnd),
                  o.applyQuaternion(this._worldQuaternionInv),
                  a.applyQuaternion(this._worldQuaternionInv),
                  a.divide(o),
                  -1 === t.search("X") && (a.x = 1),
                  -1 === t.search("Y") && (a.y = 1),
                  -1 === t.search("Z") && (a.z = 1);
              r.scale.copy(this._scaleStart).multiply(a),
                this.scaleSnap &&
                  (-1 !== t.search("X") &&
                    (r.scale.x =
                      Math.round(r.scale.x / this.scaleSnap) * this.scaleSnap ||
                      this.scaleSnap),
                  -1 !== t.search("Y") &&
                    (r.scale.y =
                      Math.round(r.scale.y / this.scaleSnap) * this.scaleSnap ||
                      this.scaleSnap),
                  -1 !== t.search("Z") &&
                    (r.scale.z =
                      Math.round(r.scale.z / this.scaleSnap) * this.scaleSnap ||
                      this.scaleSnap));
            } else if ("rotate" === n) {
              this._offset.copy(this.pointEnd).sub(this.pointStart);
              let e =
                20 /
                this.worldPosition.distanceTo(
                  o.setFromMatrixPosition(this.camera.matrixWorld)
                );
              "E" === t
                ? (this.rotationAxis.copy(this.eye),
                  (this.rotationAngle = this.pointEnd.angleTo(this.pointStart)),
                  this._startNorm.copy(this.pointStart).normalize(),
                  this._endNorm.copy(this.pointEnd).normalize(),
                  (this.rotationAngle *=
                    0 > this._endNorm.cross(this._startNorm).dot(this.eye)
                      ? 1
                      : -1))
                : "XYZE" === t
                ? (this.rotationAxis
                    .copy(this._offset)
                    .cross(this.eye)
                    .normalize(),
                  (this.rotationAngle =
                    this._offset.dot(
                      o.copy(this.rotationAxis).cross(this.eye)
                    ) * e))
                : ("X" === t || "Y" === t || "Z" === t) &&
                  (this.rotationAxis.copy(l[t]),
                  o.copy(l[t]),
                  "local" === u && o.applyQuaternion(this.worldQuaternion),
                  (this.rotationAngle =
                    this._offset.dot(o.cross(this.eye).normalize()) * e)),
                this.rotationSnap &&
                  (this.rotationAngle =
                    Math.round(this.rotationAngle / this.rotationSnap) *
                    this.rotationSnap),
                "local" === u && "E" !== t && "XYZE" !== t
                  ? (r.quaternion.copy(this._quaternionStart),
                    r.quaternion
                      .multiply(
                        s.setFromAxisAngle(
                          this.rotationAxis,
                          this.rotationAngle
                        )
                      )
                      .normalize())
                  : (this.rotationAxis.applyQuaternion(
                      this._parentQuaternionInv
                    ),
                    r.quaternion.copy(
                      s.setFromAxisAngle(this.rotationAxis, this.rotationAngle)
                    ),
                    r.quaternion.multiply(this._quaternionStart).normalize());
            }
            this.dispatchEvent(c), this.dispatchEvent(f);
          }
        }
        pointerUp(e) {
          0 === e.button &&
            (this.dragging &&
              null !== this.axis &&
              ((d.mode = this.mode), this.dispatchEvent(d)),
            (this.dragging = !1),
            (this.axis = null));
        }
        dispose() {
          this.domElement.removeEventListener(
            "pointerdown",
            this._onPointerDown
          ),
            this.domElement.removeEventListener(
              "pointermove",
              this._onPointerHover
            ),
            this.domElement.removeEventListener(
              "pointermove",
              this._onPointerMove
            ),
            this.domElement.removeEventListener("pointerup", this._onPointerUp),
            this.traverse(function (e) {
              e.geometry && e.geometry.dispose(),
                e.material && e.material.dispose();
            });
        }
        attach(e) {
          return (this.object = e), (this.visible = !0), this;
        }
        detach() {
          return (
            (this.object = void 0),
            (this.visible = !1),
            (this.axis = null),
            this
          );
        }
        reset() {
          this.enabled &&
            this.dragging &&
            (this.object.position.copy(this._positionStart),
            this.object.quaternion.copy(this._quaternionStart),
            this.object.scale.copy(this._scaleStart),
            this.dispatchEvent(c),
            this.dispatchEvent(f),
            this.pointStart.copy(this.pointEnd));
        }
        getRaycaster() {
          return i;
        }
        getMode() {
          return this.mode;
        }
        setMode(e) {
          this.mode = e;
        }
        setTranslationSnap(e) {
          this.translationSnap = e;
        }
        setRotationSnap(e) {
          this.rotationSnap = e;
        }
        setScaleSnap(e) {
          this.scaleSnap = e;
        }
        setSize(e) {
          this.size = e;
        }
        setSpace(e) {
          this.space = e;
        }
      }
      function p(e) {
        if (this.domElement.ownerDocument.pointerLockElement)
          return { x: 0, y: 0, button: e.button };
        {
          let t = this.domElement.getBoundingClientRect();
          return {
            x: ((e.clientX - t.left) / t.width) * 2 - 1,
            y: (-(e.clientY - t.top) / t.height) * 2 + 1,
            button: e.button,
          };
        }
      }
      function m(e) {
        if (this.enabled)
          switch (e.pointerType) {
            case "mouse":
            case "pen":
              this.pointerHover(this._getPointer(e));
          }
      }
      function v(e) {
        this.enabled &&
          (document.pointerLockElement ||
            this.domElement.setPointerCapture(e.pointerId),
          this.domElement.addEventListener("pointermove", this._onPointerMove),
          this.pointerHover(this._getPointer(e)),
          this.pointerDown(this._getPointer(e)));
      }
      function g(e) {
        this.enabled && this.pointerMove(this._getPointer(e));
      }
      function b(e) {
        this.enabled &&
          (this.domElement.releasePointerCapture(e.pointerId),
          this.domElement.removeEventListener(
            "pointermove",
            this._onPointerMove
          ),
          this.pointerUp(this._getPointer(e)));
      }
      function y(e, t, n) {
        let r = t.intersectObject(e, !0);
        for (let e = 0; e < r.length; e++)
          if (r[e].object.visible || n) return r[e];
        return !1;
      }
      let x = new r.Euler(),
        w = new r.Vector3(0, 1, 0),
        _ = new r.Vector3(0, 0, 0),
        k = new r.Matrix4(),
        S = new r.Quaternion(),
        P = new r.Quaternion(),
        j = new r.Vector3(),
        E = new r.Matrix4(),
        A = new r.Vector3(1, 0, 0),
        C = new r.Vector3(0, 1, 0),
        M = new r.Vector3(0, 0, 1),
        z = new r.Vector3(),
        R = new r.Vector3(),
        I = new r.Vector3();
      class T extends r.Object3D {
        constructor() {
          super(),
            (this.isTransformControlsGizmo = !0),
            (this.type = "TransformControlsGizmo");
          let e = new r.MeshBasicMaterial({
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              toneMapped: !1,
              transparent: !0,
            }),
            t = new r.LineBasicMaterial({
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              toneMapped: !1,
              transparent: !0,
            }),
            n = e.clone();
          n.opacity = 0.15;
          let i = t.clone();
          i.opacity = 0.5;
          let o = e.clone();
          o.color.setHex(16711680);
          let a = e.clone();
          a.color.setHex(65280);
          let s = e.clone();
          s.color.setHex(255);
          let l = e.clone();
          l.color.setHex(16711680), (l.opacity = 0.5);
          let c = e.clone();
          c.color.setHex(65280), (c.opacity = 0.5);
          let u = e.clone();
          u.color.setHex(255), (u.opacity = 0.5);
          let d = e.clone();
          d.opacity = 0.25;
          let f = e.clone();
          f.color.setHex(16776960),
            (f.opacity = 0.25),
            e.clone().color.setHex(16776960);
          let h = e.clone();
          h.color.setHex(7895160);
          let p = new r.CylinderGeometry(0, 0.04, 0.1, 12);
          p.translate(0, 0.05, 0);
          let m = new r.BoxGeometry(0.08, 0.08, 0.08);
          m.translate(0, 0.04, 0);
          let v = new r.BufferGeometry();
          v.setAttribute(
            "position",
            new r.Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3)
          );
          let g = new r.CylinderGeometry(0.0075, 0.0075, 0.5, 3);
          function b(e, t) {
            let n = new r.TorusGeometry(e, 0.0075, 3, 64, t * Math.PI * 2);
            return n.rotateY(Math.PI / 2), n.rotateX(Math.PI / 2), n;
          }
          g.translate(0, 0.25, 0);
          let y = {
              X: [
                [new r.Mesh(p, o), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
                [new r.Mesh(p, o), [-0.5, 0, 0], [0, 0, Math.PI / 2]],
                [new r.Mesh(g, o), [0, 0, 0], [0, 0, -Math.PI / 2]],
              ],
              Y: [
                [new r.Mesh(p, a), [0, 0.5, 0]],
                [new r.Mesh(p, a), [0, -0.5, 0], [Math.PI, 0, 0]],
                [new r.Mesh(g, a)],
              ],
              Z: [
                [new r.Mesh(p, s), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
                [new r.Mesh(p, s), [0, 0, -0.5], [-Math.PI / 2, 0, 0]],
                [new r.Mesh(g, s), null, [Math.PI / 2, 0, 0]],
              ],
              XYZ: [
                [
                  new r.Mesh(new r.OctahedronGeometry(0.1, 0), d.clone()),
                  [0, 0, 0],
                ],
              ],
              XY: [
                [
                  new r.Mesh(new r.BoxGeometry(0.15, 0.15, 0.01), u.clone()),
                  [0.15, 0.15, 0],
                ],
              ],
              YZ: [
                [
                  new r.Mesh(new r.BoxGeometry(0.15, 0.15, 0.01), l.clone()),
                  [0, 0.15, 0.15],
                  [0, Math.PI / 2, 0],
                ],
              ],
              XZ: [
                [
                  new r.Mesh(new r.BoxGeometry(0.15, 0.15, 0.01), c.clone()),
                  [0.15, 0, 0.15],
                  [-Math.PI / 2, 0, 0],
                ],
              ],
            },
            x = {
              X: [
                [
                  new r.Mesh(new r.CylinderGeometry(0.2, 0, 0.6, 4), n),
                  [0.3, 0, 0],
                  [0, 0, -Math.PI / 2],
                ],
                [
                  new r.Mesh(new r.CylinderGeometry(0.2, 0, 0.6, 4), n),
                  [-0.3, 0, 0],
                  [0, 0, Math.PI / 2],
                ],
              ],
              Y: [
                [
                  new r.Mesh(new r.CylinderGeometry(0.2, 0, 0.6, 4), n),
                  [0, 0.3, 0],
                ],
                [
                  new r.Mesh(new r.CylinderGeometry(0.2, 0, 0.6, 4), n),
                  [0, -0.3, 0],
                  [0, 0, Math.PI],
                ],
              ],
              Z: [
                [
                  new r.Mesh(new r.CylinderGeometry(0.2, 0, 0.6, 4), n),
                  [0, 0, 0.3],
                  [Math.PI / 2, 0, 0],
                ],
                [
                  new r.Mesh(new r.CylinderGeometry(0.2, 0, 0.6, 4), n),
                  [0, 0, -0.3],
                  [-Math.PI / 2, 0, 0],
                ],
              ],
              XYZ: [[new r.Mesh(new r.OctahedronGeometry(0.2, 0), n)]],
              XY: [
                [
                  new r.Mesh(new r.BoxGeometry(0.2, 0.2, 0.01), n),
                  [0.15, 0.15, 0],
                ],
              ],
              YZ: [
                [
                  new r.Mesh(new r.BoxGeometry(0.2, 0.2, 0.01), n),
                  [0, 0.15, 0.15],
                  [0, Math.PI / 2, 0],
                ],
              ],
              XZ: [
                [
                  new r.Mesh(new r.BoxGeometry(0.2, 0.2, 0.01), n),
                  [0.15, 0, 0.15],
                  [-Math.PI / 2, 0, 0],
                ],
              ],
            },
            w = {
              START: [
                [
                  new r.Mesh(new r.OctahedronGeometry(0.01, 2), i),
                  null,
                  null,
                  null,
                  "helper",
                ],
              ],
              END: [
                [
                  new r.Mesh(new r.OctahedronGeometry(0.01, 2), i),
                  null,
                  null,
                  null,
                  "helper",
                ],
              ],
              DELTA: [
                [
                  new r.Line(
                    (function () {
                      let e = new r.BufferGeometry();
                      return (
                        e.setAttribute(
                          "position",
                          new r.Float32BufferAttribute([0, 0, 0, 1, 1, 1], 3)
                        ),
                        e
                      );
                    })(),
                    i
                  ),
                  null,
                  null,
                  null,
                  "helper",
                ],
              ],
              X: [
                [
                  new r.Line(v, i.clone()),
                  [-1e3, 0, 0],
                  null,
                  [1e6, 1, 1],
                  "helper",
                ],
              ],
              Y: [
                [
                  new r.Line(v, i.clone()),
                  [0, -1e3, 0],
                  [0, 0, Math.PI / 2],
                  [1e6, 1, 1],
                  "helper",
                ],
              ],
              Z: [
                [
                  new r.Line(v, i.clone()),
                  [0, 0, -1e3],
                  [0, -Math.PI / 2, 0],
                  [1e6, 1, 1],
                  "helper",
                ],
              ],
            },
            _ = {
              XYZE: [[new r.Mesh(b(0.5, 1), h), null, [0, Math.PI / 2, 0]]],
              X: [[new r.Mesh(b(0.5, 0.5), o)]],
              Y: [[new r.Mesh(b(0.5, 0.5), a), null, [0, 0, -Math.PI / 2]]],
              Z: [[new r.Mesh(b(0.5, 0.5), s), null, [0, Math.PI / 2, 0]]],
              E: [[new r.Mesh(b(0.75, 1), f), null, [0, Math.PI / 2, 0]]],
            },
            k = {
              AXIS: [
                [
                  new r.Line(v, i.clone()),
                  [-1e3, 0, 0],
                  null,
                  [1e6, 1, 1],
                  "helper",
                ],
              ],
            },
            S = {
              XYZE: [[new r.Mesh(new r.SphereGeometry(0.25, 10, 8), n)]],
              X: [
                [
                  new r.Mesh(new r.TorusGeometry(0.5, 0.1, 4, 24), n),
                  [0, 0, 0],
                  [0, -Math.PI / 2, -Math.PI / 2],
                ],
              ],
              Y: [
                [
                  new r.Mesh(new r.TorusGeometry(0.5, 0.1, 4, 24), n),
                  [0, 0, 0],
                  [Math.PI / 2, 0, 0],
                ],
              ],
              Z: [
                [
                  new r.Mesh(new r.TorusGeometry(0.5, 0.1, 4, 24), n),
                  [0, 0, 0],
                  [0, 0, -Math.PI / 2],
                ],
              ],
              E: [[new r.Mesh(new r.TorusGeometry(0.75, 0.1, 2, 24), n)]],
            },
            P = {
              X: [
                [new r.Mesh(m, o), [0.5, 0, 0], [0, 0, -Math.PI / 2]],
                [new r.Mesh(g, o), [0, 0, 0], [0, 0, -Math.PI / 2]],
                [new r.Mesh(m, o), [-0.5, 0, 0], [0, 0, Math.PI / 2]],
              ],
              Y: [
                [new r.Mesh(m, a), [0, 0.5, 0]],
                [new r.Mesh(g, a)],
                [new r.Mesh(m, a), [0, -0.5, 0], [0, 0, Math.PI]],
              ],
              Z: [
                [new r.Mesh(m, s), [0, 0, 0.5], [Math.PI / 2, 0, 0]],
                [new r.Mesh(g, s), [0, 0, 0], [Math.PI / 2, 0, 0]],
                [new r.Mesh(m, s), [0, 0, -0.5], [-Math.PI / 2, 0, 0]],
              ],
              XY: [
                [
                  new r.Mesh(new r.BoxGeometry(0.15, 0.15, 0.01), u),
                  [0.15, 0.15, 0],
                ],
              ],
              YZ: [
                [
                  new r.Mesh(new r.BoxGeometry(0.15, 0.15, 0.01), l),
                  [0, 0.15, 0.15],
                  [0, Math.PI / 2, 0],
                ],
              ],
              XZ: [
                [
                  new r.Mesh(new r.BoxGeometry(0.15, 0.15, 0.01), c),
                  [0.15, 0, 0.15],
                  [-Math.PI / 2, 0, 0],
                ],
              ],
              XYZ: [[new r.Mesh(new r.BoxGeometry(0.1, 0.1, 0.1), d.clone())]],
            },
            j = {
              X: [
                [
                  new r.Mesh(new r.CylinderGeometry(0.2, 0, 0.6, 4), n),
                  [0.3, 0, 0],
                  [0, 0, -Math.PI / 2],
                ],
                [
                  new r.Mesh(new r.CylinderGeometry(0.2, 0, 0.6, 4), n),
                  [-0.3, 0, 0],
                  [0, 0, Math.PI / 2],
                ],
              ],
              Y: [
                [
                  new r.Mesh(new r.CylinderGeometry(0.2, 0, 0.6, 4), n),
                  [0, 0.3, 0],
                ],
                [
                  new r.Mesh(new r.CylinderGeometry(0.2, 0, 0.6, 4), n),
                  [0, -0.3, 0],
                  [0, 0, Math.PI],
                ],
              ],
              Z: [
                [
                  new r.Mesh(new r.CylinderGeometry(0.2, 0, 0.6, 4), n),
                  [0, 0, 0.3],
                  [Math.PI / 2, 0, 0],
                ],
                [
                  new r.Mesh(new r.CylinderGeometry(0.2, 0, 0.6, 4), n),
                  [0, 0, -0.3],
                  [-Math.PI / 2, 0, 0],
                ],
              ],
              XY: [
                [
                  new r.Mesh(new r.BoxGeometry(0.2, 0.2, 0.01), n),
                  [0.15, 0.15, 0],
                ],
              ],
              YZ: [
                [
                  new r.Mesh(new r.BoxGeometry(0.2, 0.2, 0.01), n),
                  [0, 0.15, 0.15],
                  [0, Math.PI / 2, 0],
                ],
              ],
              XZ: [
                [
                  new r.Mesh(new r.BoxGeometry(0.2, 0.2, 0.01), n),
                  [0.15, 0, 0.15],
                  [-Math.PI / 2, 0, 0],
                ],
              ],
              XYZ: [
                [new r.Mesh(new r.BoxGeometry(0.2, 0.2, 0.2), n), [0, 0, 0]],
              ],
            },
            E = {
              X: [
                [
                  new r.Line(v, i.clone()),
                  [-1e3, 0, 0],
                  null,
                  [1e6, 1, 1],
                  "helper",
                ],
              ],
              Y: [
                [
                  new r.Line(v, i.clone()),
                  [0, -1e3, 0],
                  [0, 0, Math.PI / 2],
                  [1e6, 1, 1],
                  "helper",
                ],
              ],
              Z: [
                [
                  new r.Line(v, i.clone()),
                  [0, 0, -1e3],
                  [0, -Math.PI / 2, 0],
                  [1e6, 1, 1],
                  "helper",
                ],
              ],
            };
          function A(e) {
            let t = new r.Object3D();
            for (let n in e)
              for (let r = e[n].length; r--; ) {
                let i = e[n][r][0].clone(),
                  o = e[n][r][1],
                  a = e[n][r][2],
                  s = e[n][r][3],
                  l = e[n][r][4];
                (i.name = n),
                  (i.tag = l),
                  o && i.position.set(o[0], o[1], o[2]),
                  a && i.rotation.set(a[0], a[1], a[2]),
                  s && i.scale.set(s[0], s[1], s[2]),
                  i.updateMatrix();
                let c = i.geometry.clone();
                c.applyMatrix4(i.matrix),
                  (i.geometry = c),
                  (i.renderOrder = 1 / 0),
                  i.position.set(0, 0, 0),
                  i.rotation.set(0, 0, 0),
                  i.scale.set(1, 1, 1),
                  t.add(i);
              }
            return t;
          }
          (this.gizmo = {}),
            (this.picker = {}),
            (this.helper = {}),
            this.add((this.gizmo.translate = A(y))),
            this.add((this.gizmo.rotate = A(_))),
            this.add((this.gizmo.scale = A(P))),
            this.add((this.picker.translate = A(x))),
            this.add((this.picker.rotate = A(S))),
            this.add((this.picker.scale = A(j))),
            this.add((this.helper.translate = A(w))),
            this.add((this.helper.rotate = A(k))),
            this.add((this.helper.scale = A(E))),
            (this.picker.translate.visible = !1),
            (this.picker.rotate.visible = !1),
            (this.picker.scale.visible = !1);
        }
        updateMatrixWorld(e) {
          let t =
            "local" === ("scale" === this.mode ? "local" : this.space)
              ? this.worldQuaternion
              : P;
          (this.gizmo.translate.visible = "translate" === this.mode),
            (this.gizmo.rotate.visible = "rotate" === this.mode),
            (this.gizmo.scale.visible = "scale" === this.mode),
            (this.helper.translate.visible = "translate" === this.mode),
            (this.helper.rotate.visible = "rotate" === this.mode),
            (this.helper.scale.visible = "scale" === this.mode);
          let n = [];
          n = (n = (n = n.concat(this.picker[this.mode].children)).concat(
            this.gizmo[this.mode].children
          )).concat(this.helper[this.mode].children);
          for (let e = 0; e < n.length; e++) {
            let r;
            let i = n[e];
            if (
              ((i.visible = !0),
              i.rotation.set(0, 0, 0),
              i.position.copy(this.worldPosition),
              (r = this.camera.isOrthographicCamera
                ? (this.camera.top - this.camera.bottom) / this.camera.zoom
                : this.worldPosition.distanceTo(this.cameraPosition) *
                  Math.min(
                    (1.9 * Math.tan((Math.PI * this.camera.fov) / 360)) /
                      this.camera.zoom,
                    7
                  )),
              i.scale.set(1, 1, 1).multiplyScalar((r * this.size) / 4),
              "helper" === i.tag)
            ) {
              (i.visible = !1),
                "AXIS" === i.name
                  ? ((i.visible = !!this.axis),
                    "X" === this.axis &&
                      (s.setFromEuler(x.set(0, 0, 0)),
                      i.quaternion.copy(t).multiply(s),
                      Math.abs(w.copy(A).applyQuaternion(t).dot(this.eye)) >
                        0.9 && (i.visible = !1)),
                    "Y" === this.axis &&
                      (s.setFromEuler(x.set(0, 0, Math.PI / 2)),
                      i.quaternion.copy(t).multiply(s),
                      Math.abs(w.copy(C).applyQuaternion(t).dot(this.eye)) >
                        0.9 && (i.visible = !1)),
                    "Z" === this.axis &&
                      (s.setFromEuler(x.set(0, Math.PI / 2, 0)),
                      i.quaternion.copy(t).multiply(s),
                      Math.abs(w.copy(M).applyQuaternion(t).dot(this.eye)) >
                        0.9 && (i.visible = !1)),
                    "XYZE" === this.axis &&
                      (s.setFromEuler(x.set(0, Math.PI / 2, 0)),
                      w.copy(this.rotationAxis),
                      i.quaternion.setFromRotationMatrix(k.lookAt(_, w, C)),
                      i.quaternion.multiply(s),
                      (i.visible = this.dragging)),
                    "E" === this.axis && (i.visible = !1))
                  : "START" === i.name
                  ? (i.position.copy(this.worldPositionStart),
                    (i.visible = this.dragging))
                  : "END" === i.name
                  ? (i.position.copy(this.worldPosition),
                    (i.visible = this.dragging))
                  : "DELTA" === i.name
                  ? (i.position.copy(this.worldPositionStart),
                    i.quaternion.copy(this.worldQuaternionStart),
                    o
                      .set(1e-10, 1e-10, 1e-10)
                      .add(this.worldPositionStart)
                      .sub(this.worldPosition)
                      .multiplyScalar(-1),
                    o.applyQuaternion(
                      this.worldQuaternionStart.clone().invert()
                    ),
                    i.scale.copy(o),
                    (i.visible = this.dragging))
                  : (i.quaternion.copy(t),
                    this.dragging
                      ? i.position.copy(this.worldPositionStart)
                      : i.position.copy(this.worldPosition),
                    this.axis && (i.visible = -1 !== this.axis.search(i.name)));
              continue;
            }
            i.quaternion.copy(t),
              "translate" === this.mode || "scale" === this.mode
                ? ("X" === i.name &&
                    Math.abs(w.copy(A).applyQuaternion(t).dot(this.eye)) >
                      0.99 &&
                    (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1)),
                  "Y" === i.name &&
                    Math.abs(w.copy(C).applyQuaternion(t).dot(this.eye)) >
                      0.99 &&
                    (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1)),
                  "Z" === i.name &&
                    Math.abs(w.copy(M).applyQuaternion(t).dot(this.eye)) >
                      0.99 &&
                    (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1)),
                  "XY" === i.name &&
                    0.2 >
                      Math.abs(w.copy(M).applyQuaternion(t).dot(this.eye)) &&
                    (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1)),
                  "YZ" === i.name &&
                    0.2 >
                      Math.abs(w.copy(A).applyQuaternion(t).dot(this.eye)) &&
                    (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1)),
                  "XZ" === i.name &&
                    0.2 >
                      Math.abs(w.copy(C).applyQuaternion(t).dot(this.eye)) &&
                    (i.scale.set(1e-10, 1e-10, 1e-10), (i.visible = !1)))
                : "rotate" === this.mode &&
                  (S.copy(t),
                  w.copy(this.eye).applyQuaternion(s.copy(t).invert()),
                  -1 !== i.name.search("E") &&
                    i.quaternion.setFromRotationMatrix(
                      k.lookAt(this.eye, _, C)
                    ),
                  "X" === i.name &&
                    (s.setFromAxisAngle(A, Math.atan2(-w.y, w.z)),
                    s.multiplyQuaternions(S, s),
                    i.quaternion.copy(s)),
                  "Y" === i.name &&
                    (s.setFromAxisAngle(C, Math.atan2(w.x, w.z)),
                    s.multiplyQuaternions(S, s),
                    i.quaternion.copy(s)),
                  "Z" === i.name &&
                    (s.setFromAxisAngle(M, Math.atan2(w.y, w.x)),
                    s.multiplyQuaternions(S, s),
                    i.quaternion.copy(s))),
              (i.visible =
                i.visible && (-1 === i.name.indexOf("X") || this.showX)),
              (i.visible =
                i.visible && (-1 === i.name.indexOf("Y") || this.showY)),
              (i.visible =
                i.visible && (-1 === i.name.indexOf("Z") || this.showZ)),
              (i.visible =
                i.visible &&
                (-1 === i.name.indexOf("E") ||
                  (this.showX && this.showY && this.showZ))),
              (i.material._color =
                i.material._color || i.material.color.clone()),
              (i.material._opacity = i.material._opacity || i.material.opacity),
              i.material.color.copy(i.material._color),
              (i.material.opacity = i.material._opacity),
              this.enabled &&
                this.axis &&
                (i.name === this.axis
                  ? (i.material.color.setHex(16776960),
                    (i.material.opacity = 1))
                  : this.axis.split("").some(function (e) {
                      return i.name === e;
                    }) &&
                    (i.material.color.setHex(16776960),
                    (i.material.opacity = 1)));
          }
          super.updateMatrixWorld(e);
        }
      }
      class O extends r.Mesh {
        constructor() {
          super(
            new r.PlaneGeometry(1e5, 1e5, 2, 2),
            new r.MeshBasicMaterial({
              visible: !1,
              wireframe: !0,
              side: r.DoubleSide,
              transparent: !0,
              opacity: 0.1,
              toneMapped: !1,
            })
          ),
            (this.isTransformControlsPlane = !0),
            (this.type = "TransformControlsPlane");
        }
        updateMatrixWorld(e) {
          let t = this.space;
          switch (
            (this.position.copy(this.worldPosition),
            "scale" === this.mode && (t = "local"),
            z.copy(A).applyQuaternion("local" === t ? this.worldQuaternion : P),
            R.copy(C).applyQuaternion("local" === t ? this.worldQuaternion : P),
            I.copy(M).applyQuaternion("local" === t ? this.worldQuaternion : P),
            w.copy(R),
            this.mode)
          ) {
            case "translate":
            case "scale":
              switch (this.axis) {
                case "X":
                  w.copy(this.eye).cross(z), j.copy(z).cross(w);
                  break;
                case "Y":
                  w.copy(this.eye).cross(R), j.copy(R).cross(w);
                  break;
                case "Z":
                  w.copy(this.eye).cross(I), j.copy(I).cross(w);
                  break;
                case "XY":
                  j.copy(I);
                  break;
                case "YZ":
                  j.copy(z);
                  break;
                case "XZ":
                  w.copy(I), j.copy(R);
                  break;
                case "XYZ":
                case "E":
                  j.set(0, 0, 0);
              }
              break;
            default:
              j.set(0, 0, 0);
          }
          0 === j.length()
            ? this.quaternion.copy(this.cameraQuaternion)
            : (E.lookAt(o.set(0, 0, 0), j, w),
              this.quaternion.setFromRotationMatrix(E)),
            super.updateMatrixWorld(e);
        }
      }
    },
    93036: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return o;
        },
      });
      var r = n(91344);
      function i(e, t, n) {
        let r = n.length - e - 1;
        if (t >= n[r]) return r - 1;
        if (t <= n[e]) return e;
        let i = e,
          o = r,
          a = Math.floor((i + o) / 2);
        for (; t < n[a] || t >= n[a + 1]; )
          t < n[a] ? (o = a) : (i = a), (a = Math.floor((i + o) / 2));
        return a;
      }
      class o extends r.Curve {
        constructor(e, t, n, i, o) {
          super(),
            (this.degree = e),
            (this.knots = t),
            (this.controlPoints = []),
            (this.startKnot = i || 0),
            (this.endKnot = o || this.knots.length - 1);
          for (let e = 0; e < n.length; ++e) {
            let t = n[e];
            this.controlPoints[e] = new r.Vector4(t.x, t.y, t.z, t.w);
          }
        }
        getPoint(e, t = new r.Vector3()) {
          let n =
              this.knots[this.startKnot] +
              e * (this.knots[this.endKnot] - this.knots[this.startKnot]),
            o = (function (e, t, n, o) {
              let a = i(e, o, t),
                s = (function (e, t, n, r) {
                  let i = [],
                    o = [],
                    a = [];
                  i[0] = 1;
                  for (let s = 1; s <= n; ++s) {
                    (o[s] = t - r[e + 1 - s]), (a[s] = r[e + s] - t);
                    let n = 0;
                    for (let e = 0; e < s; ++e) {
                      let t = a[e + 1],
                        r = o[s - e],
                        l = i[e] / (t + r);
                      (i[e] = n + t * l), (n = r * l);
                    }
                    i[s] = n;
                  }
                  return i;
                })(a, o, e, t),
                l = new r.Vector4(0, 0, 0, 0);
              for (let t = 0; t <= e; ++t) {
                let r = n[a - e + t],
                  i = s[t],
                  o = r.w * i;
                (l.x += r.x * o),
                  (l.y += r.y * o),
                  (l.z += r.z * o),
                  (l.w += r.w * i);
              }
              return l;
            })(this.degree, this.knots, this.controlPoints, n);
          return 1 !== o.w && o.divideScalar(o.w), t.set(o.x, o.y, o.z);
        }
        getTangent(e, t = new r.Vector3()) {
          var n;
          let o =
              this.knots[0] +
              e * (this.knots[this.knots.length - 1] - this.knots[0]),
            a =
              ((n = this.degree),
              (function (e) {
                let t = e.length,
                  n = [],
                  i = [];
                for (let o = 0; o < t; ++o) {
                  let t = e[o];
                  (n[o] = new r.Vector3(t.x, t.y, t.z)), (i[o] = t.w);
                }
                let o = [];
                for (let e = 0; e < t; ++e) {
                  let t = n[e].clone();
                  for (let n = 1; n <= e; ++n)
                    t.sub(
                      o[e - n].clone().multiplyScalar(
                        (function (e, t) {
                          let n = 1;
                          for (let t = 2; t <= e; ++t) n *= t;
                          let r = 1;
                          for (let e = 2; e <= t; ++e) r *= e;
                          for (let n = 2; n <= e - t; ++n) r *= n;
                          return n / r;
                        })(e, n) * i[n]
                      )
                    );
                  o[e] = t.divideScalar(i[0]);
                }
                return o;
              })(
                (function (e, t, n, o, a) {
                  let s = 1 < e ? 1 : e,
                    l = [],
                    c = i(e, o, t),
                    u = (function (e, t, n, r, i) {
                      let o = [];
                      for (let e = 0; e <= n; ++e) o[e] = 0;
                      let a = [];
                      for (let e = 0; e <= r; ++e) a[e] = o.slice(0);
                      let s = [];
                      for (let e = 0; e <= n; ++e) s[e] = o.slice(0);
                      s[0][0] = 1;
                      let l = o.slice(0),
                        c = o.slice(0);
                      for (let r = 1; r <= n; ++r) {
                        (l[r] = t - i[e + 1 - r]), (c[r] = i[e + r] - t);
                        let n = 0;
                        for (let e = 0; e < r; ++e) {
                          let t = c[e + 1],
                            i = l[r - e];
                          s[r][e] = t + i;
                          let o = s[e][r - 1] / s[r][e];
                          (s[e][r] = n + t * o), (n = i * o);
                        }
                        s[r][r] = n;
                      }
                      for (let e = 0; e <= n; ++e) a[0][e] = s[e][n];
                      for (let e = 0; e <= n; ++e) {
                        let t = 0,
                          i = 1,
                          l = [];
                        for (let e = 0; e <= n; ++e) l[e] = o.slice(0);
                        l[0][0] = 1;
                        for (let o = 1; o <= r; ++o) {
                          let r = 0,
                            c = e - o,
                            u = n - o;
                          e >= o &&
                            ((l[i][0] = l[t][0] / s[u + 1][c]),
                            (r = l[i][0] * s[c][u]));
                          let d = c >= -1 ? 1 : -c,
                            f = e - 1 <= u ? o - 1 : n - e;
                          for (let e = d; e <= f; ++e)
                            (l[i][e] =
                              (l[t][e] - l[t][e - 1]) / s[u + 1][c + e]),
                              (r += l[i][e] * s[c + e][u]);
                          e <= u &&
                            ((l[i][o] = -l[t][o - 1] / s[u + 1][e]),
                            (r += l[i][o] * s[e][u])),
                            (a[o][e] = r);
                          let h = t;
                          (t = i), (i = h);
                        }
                      }
                      let u = n;
                      for (let e = 1; e <= r; ++e) {
                        for (let t = 0; t <= n; ++t) a[e][t] *= u;
                        u *= n - e;
                      }
                      return a;
                    })(c, o, e, s, t),
                    d = [];
                  for (let e = 0; e < n.length; ++e) {
                    let t = n[e].clone(),
                      r = t.w;
                    (t.x *= r), (t.y *= r), (t.z *= r), (d[e] = t);
                  }
                  for (let t = 0; t <= s; ++t) {
                    let n = d[c - e].clone().multiplyScalar(u[t][0]);
                    for (let r = 1; r <= e; ++r)
                      n.add(d[c - e + r].clone().multiplyScalar(u[t][r]));
                    l[t] = n;
                  }
                  for (let e = s + 1; e <= a + 1; ++e)
                    l[e] = new r.Vector4(0, 0, 0);
                  return l;
                })(n, this.knots, this.controlPoints, o, 1)
              ));
          return t.copy(a[1]).normalize(), t;
        }
      }
    },
    14819: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AsyncCompress: function () {
            return eI;
          },
          AsyncDecompress: function () {
            return eY;
          },
          AsyncDeflate: function () {
            return eP;
          },
          AsyncGunzip: function () {
            return eL;
          },
          AsyncGzip: function () {
            return eI;
          },
          AsyncInflate: function () {
            return eC;
          },
          AsyncUnzipInflate: function () {
            return tf;
          },
          AsyncUnzlib: function () {
            return eH;
          },
          AsyncZipDeflate: function () {
            return ta;
          },
          AsyncZlib: function () {
            return eU;
          },
          Compress: function () {
            return eR;
          },
          DecodeUTF8: function () {
            return e5;
          },
          Decompress: function () {
            return eV;
          },
          Deflate: function () {
            return eS;
          },
          EncodeUTF8: function () {
            return e3;
          },
          Gunzip: function () {
            return eB;
          },
          Gzip: function () {
            return eR;
          },
          Inflate: function () {
            return eA;
          },
          Unzip: function () {
            return th;
          },
          UnzipInflate: function () {
            return td;
          },
          UnzipPassThrough: function () {
            return tu;
          },
          Unzlib: function () {
            return eW;
          },
          Zip: function () {
            return ts;
          },
          ZipDeflate: function () {
            return to;
          },
          ZipPassThrough: function () {
            return ti;
          },
          Zlib: function () {
            return eF;
          },
          compress: function () {
            return eT;
          },
          compressSync: function () {
            return eO;
          },
          decompress: function () {
            return eZ;
          },
          decompressSync: function () {
            return eQ;
          },
          deflate: function () {
            return ej;
          },
          deflateSync: function () {
            return eE;
          },
          gunzip: function () {
            return eD;
          },
          gunzipSync: function () {
            return eN;
          },
          gzip: function () {
            return eT;
          },
          gzipSync: function () {
            return eO;
          },
          inflate: function () {
            return eM;
          },
          inflateSync: function () {
            return ez;
          },
          strFromU8: function () {
            return e4;
          },
          strToU8: function () {
            return e8;
          },
          unzip: function () {
            return tp;
          },
          unzipSync: function () {
            return tm;
          },
          unzlib: function () {
            return e$;
          },
          unzlibSync: function () {
            return eX;
          },
          zip: function () {
            return tl;
          },
          zipSync: function () {
            return tc;
          },
          zlib: function () {
            return eG;
          },
          zlibSync: function () {
            return eq;
          },
        });
      /*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/ var r = {},
        i = function (e) {
          return URL.createObjectURL(
            new Blob([e], { type: "text/javascript" })
          );
        },
        o = function (e) {
          return new Worker(e);
        };
      try {
        URL.revokeObjectURL(i(""));
      } catch (e) {
        (i = function (e) {
          return "data:application/javascript;charset=UTF-8," + encodeURI(e);
        }),
          (o = function (e) {
            return new Worker(e, { type: "module" });
          });
      }
      var a = function (e, t, n, a, s) {
          var l = o(r[t] || (r[t] = i(e)));
          return (
            (l.onerror = function (e) {
              return s(e.error, null);
            }),
            (l.onmessage = function (e) {
              return s(null, e.data);
            }),
            l.postMessage(n, a),
            l
          );
        },
        s = Uint8Array,
        l = Uint16Array,
        c = Uint32Array,
        u = new s([
          0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
          4, 5, 5, 5, 5, 0, 0, 0, 0,
        ]),
        d = new s([
          0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10,
          10, 11, 11, 12, 12, 13, 13, 0, 0,
        ]),
        f = new s([
          16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
        ]),
        h = function (e, t) {
          for (var n = new l(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
          for (var i = new c(n[30]), r = 1; r < 30; ++r)
            for (var o = n[r]; o < n[r + 1]; ++o) i[o] = ((o - n[r]) << 5) | r;
          return [n, i];
        },
        p = h(u, 2),
        m = p[0],
        v = p[1];
      (m[28] = 258), (v[258] = 28);
      for (
        var g = h(d, 0), b = g[0], y = g[1], x = new l(32768), w = 0;
        w < 32768;
        ++w
      ) {
        var _ = ((43690 & w) >>> 1) | ((21845 & w) << 1);
        (_ =
          ((61680 & (_ = ((52428 & _) >>> 2) | ((13107 & _) << 2))) >>> 4) |
          ((3855 & _) << 4)),
          (x[w] = (((65280 & _) >>> 8) | ((255 & _) << 8)) >>> 1);
      }
      for (
        var k = function (e, t, n) {
            for (var r, i = e.length, o = 0, a = new l(t); o < i; ++o)
              ++a[e[o] - 1];
            var s = new l(t);
            for (o = 0; o < t; ++o) s[o] = (s[o - 1] + a[o - 1]) << 1;
            if (n) {
              r = new l(1 << t);
              var c = 15 - t;
              for (o = 0; o < i; ++o)
                if (e[o])
                  for (
                    var u = (o << 4) | e[o],
                      d = t - e[o],
                      f = s[e[o] - 1]++ << d,
                      h = f | ((1 << d) - 1);
                    f <= h;
                    ++f
                  )
                    r[x[f] >>> c] = u;
            } else
              for (o = 0, r = new l(i); o < i; ++o)
                e[o] && (r[o] = x[s[e[o] - 1]++] >>> (15 - e[o]));
            return r;
          },
          S = new s(288),
          w = 0;
        w < 144;
        ++w
      )
        S[w] = 8;
      for (var w = 144; w < 256; ++w) S[w] = 9;
      for (var w = 256; w < 280; ++w) S[w] = 7;
      for (var w = 280; w < 288; ++w) S[w] = 8;
      for (var P = new s(32), w = 0; w < 32; ++w) P[w] = 5;
      var j = k(S, 9, 0),
        E = k(S, 9, 1),
        A = k(P, 5, 0),
        C = k(P, 5, 1),
        M = function (e) {
          for (var t = e[0], n = 1; n < e.length; ++n) e[n] > t && (t = e[n]);
          return t;
        },
        z = function (e, t, n) {
          var r = (t / 8) | 0;
          return ((e[r] | (e[r + 1] << 8)) >> (7 & t)) & n;
        },
        R = function (e, t) {
          var n = (t / 8) | 0;
          return (e[n] | (e[n + 1] << 8) | (e[n + 2] << 16)) >> (7 & t);
        },
        I = function (e) {
          return ((e / 8) | 0) + (7 & e && 1);
        },
        T = function (e, t, n) {
          (null == t || t < 0) && (t = 0),
            (null == n || n > e.length) && (n = e.length);
          var r = new (e instanceof l ? l : e instanceof c ? c : s)(n - t);
          return r.set(e.subarray(t, n)), r;
        },
        O = function (e, t, n) {
          var r = e.length;
          if (!r || (n && !n.l && r < 5)) return t || new s(0);
          var i = !t || n,
            o = !n || n.i;
          n || (n = {}), t || (t = new s(3 * r));
          var a = function (e) {
              var n = t.length;
              if (e > n) {
                var r = new s(Math.max(2 * n, e));
                r.set(t), (t = r);
              }
            },
            l = n.f || 0,
            c = n.p || 0,
            h = n.b || 0,
            p = n.l,
            v = n.d,
            g = n.m,
            y = n.n,
            x = 8 * r;
          do {
            if (!p) {
              n.f = l = z(e, c, 1);
              var w = z(e, c + 1, 3);
              if (((c += 3), w)) {
                if (1 == w) (p = E), (v = C), (g = 9), (y = 5);
                else if (2 == w) {
                  var _ = z(e, c, 31) + 257,
                    S = z(e, c + 10, 15) + 4,
                    P = _ + z(e, c + 5, 31) + 1;
                  c += 14;
                  for (var j = new s(P), A = new s(19), O = 0; O < S; ++O)
                    A[f[O]] = z(e, c + 3 * O, 7);
                  c += 3 * S;
                  for (
                    var B = M(A), L = (1 << B) - 1, D = k(A, B, 1), O = 0;
                    O < P;

                  ) {
                    var N = D[z(e, c, L)];
                    c += 15 & N;
                    var F = N >>> 4;
                    if (F < 16) j[O++] = F;
                    else {
                      var U = 0,
                        G = 0;
                      for (
                        16 == F
                          ? ((G = 3 + z(e, c, 3)), (c += 2), (U = j[O - 1]))
                          : 17 == F
                          ? ((G = 3 + z(e, c, 7)), (c += 3))
                          : 18 == F && ((G = 11 + z(e, c, 127)), (c += 7));
                        G--;

                      )
                        j[O++] = U;
                    }
                  }
                  var q = j.subarray(0, _),
                    W = j.subarray(_);
                  (g = M(q)), (y = M(W)), (p = k(q, g, 1)), (v = k(W, y, 1));
                } else throw "invalid block type";
              } else {
                var F = I(c) + 4,
                  H = e[F - 4] | (e[F - 3] << 8),
                  $ = F + H;
                if ($ > r) {
                  if (o) throw "unexpected EOF";
                  break;
                }
                i && a(h + H),
                  t.set(e.subarray(F, $), h),
                  (n.b = h += H),
                  (n.p = c = 8 * $);
                continue;
              }
              if (c > x) {
                if (o) throw "unexpected EOF";
                break;
              }
            }
            i && a(h + 131072);
            for (var X = (1 << g) - 1, V = (1 << y) - 1, Y = c; ; Y = c) {
              var U = p[R(e, c) & X],
                Z = U >>> 4;
              if ((c += 15 & U) > x) {
                if (o) throw "unexpected EOF";
                break;
              }
              if (!U) throw "invalid length/literal";
              if (Z < 256) t[h++] = Z;
              else if (256 == Z) {
                (Y = c), (p = null);
                break;
              } else {
                var Q = Z - 254;
                if (Z > 264) {
                  var O = Z - 257,
                    K = u[O];
                  (Q = z(e, c, (1 << K) - 1) + m[O]), (c += K);
                }
                var J = v[R(e, c) & V],
                  ee = J >>> 4;
                if (!J) throw "invalid distance";
                c += 15 & J;
                var W = b[ee];
                if (ee > 3) {
                  var K = d[ee];
                  (W += R(e, c) & ((1 << K) - 1)), (c += K);
                }
                if (c > x) {
                  if (o) throw "unexpected EOF";
                  break;
                }
                i && a(h + 131072);
                for (var et = h + Q; h < et; h += 4)
                  (t[h] = t[h - W]),
                    (t[h + 1] = t[h + 1 - W]),
                    (t[h + 2] = t[h + 2 - W]),
                    (t[h + 3] = t[h + 3 - W]);
                h = et;
              }
            }
            (n.l = p),
              (n.p = Y),
              (n.b = h),
              p && ((l = 1), (n.m = g), (n.d = v), (n.n = y));
          } while (!l);
          return h == t.length ? t : T(t, 0, h);
        },
        B = function (e, t, n) {
          n <<= 7 & t;
          var r = (t / 8) | 0;
          (e[r] |= n), (e[r + 1] |= n >>> 8);
        },
        L = function (e, t, n) {
          n <<= 7 & t;
          var r = (t / 8) | 0;
          (e[r] |= n), (e[r + 1] |= n >>> 8), (e[r + 2] |= n >>> 16);
        },
        D = function (e, t) {
          for (var n = [], r = 0; r < e.length; ++r)
            e[r] && n.push({ s: r, f: e[r] });
          var i = n.length,
            o = n.slice();
          if (!i) return [H, 0];
          if (1 == i) {
            var a = new s(n[0].s + 1);
            return (a[n[0].s] = 1), [a, 1];
          }
          n.sort(function (e, t) {
            return e.f - t.f;
          }),
            n.push({ s: -1, f: 25001 });
          var c = n[0],
            u = n[1],
            d = 0,
            f = 1,
            h = 2;
          for (n[0] = { s: -1, f: c.f + u.f, l: c, r: u }; f != i - 1; )
            (c = n[n[d].f < n[h].f ? d++ : h++]),
              (u = n[d != f && n[d].f < n[h].f ? d++ : h++]),
              (n[f++] = { s: -1, f: c.f + u.f, l: c, r: u });
          for (var p = o[0].s, r = 1; r < i; ++r) o[r].s > p && (p = o[r].s);
          var m = new l(p + 1),
            v = N(n[f - 1], m, 0);
          if (v > t) {
            var r = 0,
              g = 0,
              b = v - t,
              y = 1 << b;
            for (
              o.sort(function (e, t) {
                return m[t.s] - m[e.s] || e.f - t.f;
              });
              r < i;
              ++r
            ) {
              var x = o[r].s;
              if (m[x] > t) (g += y - (1 << (v - m[x]))), (m[x] = t);
              else break;
            }
            for (g >>>= b; g > 0; ) {
              var w = o[r].s;
              m[w] < t ? (g -= 1 << (t - m[w]++ - 1)) : ++r;
            }
            for (; r >= 0 && g; --r) {
              var _ = o[r].s;
              m[_] == t && (--m[_], ++g);
            }
            v = t;
          }
          return [new s(m), v];
        },
        N = function (e, t, n) {
          return -1 == e.s
            ? Math.max(N(e.l, t, n + 1), N(e.r, t, n + 1))
            : (t[e.s] = n);
        },
        F = function (e) {
          for (var t = e.length; t && !e[--t]; );
          for (
            var n = new l(++t),
              r = 0,
              i = e[0],
              o = 1,
              a = function (e) {
                n[r++] = e;
              },
              s = 1;
            s <= t;
            ++s
          )
            if (e[s] == i && s != t) ++o;
            else {
              if (!i && o > 2) {
                for (; o > 138; o -= 138) a(32754);
                o > 2 &&
                  (a(o > 10 ? ((o - 11) << 5) | 28690 : ((o - 3) << 5) | 12305),
                  (o = 0));
              } else if (o > 3) {
                for (a(i), --o; o > 6; o -= 6) a(8304);
                o > 2 && (a(((o - 3) << 5) | 8208), (o = 0));
              }
              for (; o--; ) a(i);
              (o = 1), (i = e[s]);
            }
          return [n.subarray(0, r), t];
        },
        U = function (e, t) {
          for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
          return n;
        },
        G = function (e, t, n) {
          var r = n.length,
            i = I(t + 2);
          (e[i] = 255 & r),
            (e[i + 1] = r >>> 8),
            (e[i + 2] = 255 ^ e[i]),
            (e[i + 3] = 255 ^ e[i + 1]);
          for (var o = 0; o < r; ++o) e[i + o + 4] = n[o];
          return (i + 4 + r) * 8;
        },
        q = function (e, t, n, r, i, o, a, s, c, h, p) {
          B(t, p++, n), ++i[256];
          for (
            var m,
              v,
              g,
              b,
              y = D(i, 15),
              x = y[0],
              w = y[1],
              _ = D(o, 15),
              E = _[0],
              C = _[1],
              M = F(x),
              z = M[0],
              R = M[1],
              I = F(E),
              T = I[0],
              O = I[1],
              N = new l(19),
              q = 0;
            q < z.length;
            ++q
          )
            N[31 & z[q]]++;
          for (var q = 0; q < T.length; ++q) N[31 & T[q]]++;
          for (
            var W = D(N, 7), H = W[0], $ = W[1], X = 19;
            X > 4 && !H[f[X - 1]];
            --X
          );
          var V = (h + 5) << 3,
            Y = U(i, S) + U(o, P) + a,
            Z =
              U(i, x) +
              U(o, E) +
              a +
              14 +
              3 * X +
              U(N, H) +
              (2 * N[16] + 3 * N[17] + 7 * N[18]);
          if (V <= Y && V <= Z) return G(t, p, e.subarray(c, c + h));
          if ((B(t, p, 1 + (Z < Y)), (p += 2), Z < Y)) {
            (m = k(x, w, 0)), (v = x), (g = k(E, C, 0)), (b = E);
            var Q = k(H, $, 0);
            B(t, p, R - 257),
              B(t, p + 5, O - 1),
              B(t, p + 10, X - 4),
              (p += 14);
            for (var q = 0; q < X; ++q) B(t, p + 3 * q, H[f[q]]);
            p += 3 * X;
            for (var K = [z, T], J = 0; J < 2; ++J)
              for (var ee = K[J], q = 0; q < ee.length; ++q) {
                var et = 31 & ee[q];
                B(t, p, Q[et]),
                  (p += H[et]),
                  et > 15 &&
                    (B(t, p, (ee[q] >>> 5) & 127), (p += ee[q] >>> 12));
              }
          } else (m = j), (v = S), (g = A), (b = P);
          for (var q = 0; q < s; ++q)
            if (r[q] > 255) {
              var et = (r[q] >>> 18) & 31;
              L(t, p, m[et + 257]),
                (p += v[et + 257]),
                et > 7 && (B(t, p, (r[q] >>> 23) & 31), (p += u[et]));
              var en = 31 & r[q];
              L(t, p, g[en]),
                (p += b[en]),
                en > 3 && (L(t, p, (r[q] >>> 5) & 8191), (p += d[en]));
            } else L(t, p, m[r[q]]), (p += v[r[q]]);
          return L(t, p, m[256]), p + v[256];
        },
        W = new c([
          65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560,
          2117632,
        ]),
        H = new s(0),
        $ = function (e, t, n, r, i, o) {
          var a = e.length,
            f = new s(r + a + 5 * (1 + Math.ceil(a / 7e3)) + i),
            h = f.subarray(r, f.length - i),
            p = 0;
          if (!t || a < 8)
            for (var m = 0; m <= a; m += 65535) {
              var g = m + 65535;
              g < a
                ? (p = G(h, p, e.subarray(m, g)))
                : ((h[m] = o), (p = G(h, p, e.subarray(m, a))));
            }
          else {
            for (
              var b = W[t - 1],
                x = b >>> 13,
                w = 8191 & b,
                _ = (1 << n) - 1,
                k = new l(32768),
                S = new l(_ + 1),
                P = Math.ceil(n / 3),
                j = 2 * P,
                E = function (t) {
                  return (e[t] ^ (e[t + 1] << P) ^ (e[t + 2] << j)) & _;
                },
                A = new c(25e3),
                C = new l(288),
                M = new l(32),
                z = 0,
                R = 0,
                m = 0,
                O = 0,
                B = 0,
                L = 0;
              m < a;
              ++m
            ) {
              var D = E(m),
                N = 32767 & m,
                F = S[D];
              if (((k[N] = F), (S[D] = N), B <= m)) {
                var U = a - m;
                if ((z > 7e3 || O > 24576) && U > 423) {
                  (p = q(e, h, 0, A, C, M, R, O, L, m - L, p)),
                    (O = z = R = 0),
                    (L = m);
                  for (var $ = 0; $ < 286; ++$) C[$] = 0;
                  for (var $ = 0; $ < 30; ++$) M[$] = 0;
                }
                var X = 2,
                  V = 0,
                  Y = w,
                  Z = (N - F) & 32767;
                if (U > 2 && D == E(m - Z))
                  for (
                    var Q = Math.min(x, U) - 1,
                      K = Math.min(32767, m),
                      J = Math.min(258, U);
                    Z <= K && --Y && N != F;

                  ) {
                    if (e[m + X] == e[m + X - Z]) {
                      for (
                        var ee = 0;
                        ee < J && e[m + ee] == e[m + ee - Z];
                        ++ee
                      );
                      if (ee > X) {
                        if (((X = ee), (V = Z), ee > Q)) break;
                        for (
                          var et = Math.min(Z, ee - 2), en = 0, $ = 0;
                          $ < et;
                          ++$
                        ) {
                          var er = (m - Z + $ + 32768) & 32767,
                            ei = k[er],
                            eo = (er - ei + 32768) & 32767;
                          eo > en && ((en = eo), (F = er));
                        }
                      }
                    }
                    (F = k[(N = F)]), (Z += (N - F + 32768) & 32767);
                  }
                if (V) {
                  A[O++] = 268435456 | (v[X] << 18) | y[V];
                  var ea = 31 & v[X],
                    es = 31 & y[V];
                  (R += u[ea] + d[es]),
                    ++C[257 + ea],
                    ++M[es],
                    (B = m + X),
                    ++z;
                } else (A[O++] = e[m]), ++C[e[m]];
              }
            }
            (p = q(e, h, o, A, C, M, R, O, L, m - L, p)),
              !o && 7 & p && (p = G(h, p + 1, H));
          }
          return T(f, 0, r + I(p) + i);
        },
        X = (function () {
          for (var e = new c(256), t = 0; t < 256; ++t) {
            for (var n = t, r = 9; --r; ) n = (1 & n && 3988292384) ^ (n >>> 1);
            e[t] = n;
          }
          return e;
        })(),
        V = function () {
          var e = -1;
          return {
            p: function (t) {
              for (var n = e, r = 0; r < t.length; ++r)
                n = X[(255 & n) ^ t[r]] ^ (n >>> 8);
              e = n;
            },
            d: function () {
              return ~e;
            },
          };
        },
        Y = function () {
          var e = 1,
            t = 0;
          return {
            p: function (n) {
              for (var r = e, i = t, o = n.length, a = 0; a != o; ) {
                for (var s = Math.min(a + 2655, o); a < s; ++a) i += r += n[a];
                (r = (65535 & r) + 15 * (r >> 16)),
                  (i = (65535 & i) + 15 * (i >> 16));
              }
              (e = r), (t = i);
            },
            d: function () {
              return (
                (e %= 65521),
                (t %= 65521),
                ((255 & e) << 24) |
                  ((e >>> 8) << 16) |
                  ((255 & t) << 8) |
                  (t >>> 8)
              );
            },
          };
        },
        Z = function (e, t, n, r, i) {
          return $(
            e,
            null == t.level ? 6 : t.level,
            null == t.mem
              ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length))))
              : 12 + t.mem,
            n,
            r,
            !i
          );
        },
        Q = function (e, t) {
          var n = {};
          for (var r in e) n[r] = e[r];
          for (var r in t) n[r] = t[r];
          return n;
        },
        K = function (e, t, n) {
          for (
            var r = e(),
              i = e.toString(),
              o = i
                .slice(i.indexOf("[") + 1, i.lastIndexOf("]"))
                .replace(/ /g, "")
                .split(","),
              a = 0;
            a < r.length;
            ++a
          ) {
            var s = r[a],
              l = o[a];
            if ("function" == typeof s) {
              t += ";" + l + "=";
              var c = s.toString();
              if (s.prototype) {
                if (-1 != c.indexOf("[native code]")) {
                  var u = c.indexOf(" ", 8) + 1;
                  t += c.slice(u, c.indexOf("(", u));
                } else
                  for (var d in ((t += c), s.prototype))
                    t +=
                      ";" +
                      l +
                      ".prototype." +
                      d +
                      "=" +
                      s.prototype[d].toString();
              } else t += c;
            } else n[l] = s;
          }
          return [t, n];
        },
        J = [],
        ee = function (e) {
          var t = [];
          for (var n in e)
            (e[n] instanceof s || e[n] instanceof l || e[n] instanceof c) &&
              t.push((e[n] = new e[n].constructor(e[n])).buffer);
          return t;
        },
        et = function (e, t, n, r) {
          if (!J[n]) {
            for (var i, o = "", s = {}, l = e.length - 1, c = 0; c < l; ++c)
              (o = (i = K(e[c], o, s))[0]), (s = i[1]);
            J[n] = K(e[l], o, s);
          }
          var u = Q({}, J[n][1]);
          return a(
            J[n][0] +
              ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" +
              t.toString() +
              "}",
            n,
            u,
            ee(u),
            r
          );
        },
        en = function () {
          return [
            s,
            l,
            c,
            u,
            d,
            f,
            m,
            b,
            E,
            C,
            x,
            k,
            M,
            z,
            R,
            I,
            T,
            O,
            ez,
            el,
            ec,
          ];
        },
        er = function () {
          return [
            s,
            l,
            c,
            u,
            d,
            f,
            v,
            y,
            j,
            S,
            A,
            P,
            x,
            W,
            H,
            k,
            B,
            L,
            D,
            N,
            F,
            U,
            G,
            q,
            I,
            T,
            $,
            Z,
            eE,
            el,
          ];
        },
        ei = function () {
          return [eg, ex, ev, V, X];
        },
        eo = function () {
          return [eb, ey];
        },
        ea = function () {
          return [ew, ev, Y];
        },
        es = function () {
          return [e_];
        },
        el = function (e) {
          return postMessage(e, [e.buffer]);
        },
        ec = function (e) {
          return e && e.size && new s(e.size);
        },
        eu = function (e, t, n, r, i, o) {
          var a = et(n, r, i, function (e, t) {
            a.terminate(), o(e, t);
          });
          return (
            a.postMessage([e, t], t.consume ? [e.buffer] : []),
            function () {
              a.terminate();
            }
          );
        },
        ed = function (e) {
          return (
            (e.ondata = function (e, t) {
              return postMessage([e, t], [e.buffer]);
            }),
            function (t) {
              return e.push(t.data[0], t.data[1]);
            }
          );
        },
        ef = function (e, t, n, r, i) {
          var o,
            a = et(e, r, i, function (e, n) {
              e
                ? (a.terminate(), t.ondata.call(t, e))
                : (n[1] && a.terminate(), t.ondata.call(t, e, n[0], n[1]));
            });
          a.postMessage(n),
            (t.push = function (e, n) {
              if (o) throw "stream finished";
              if (!t.ondata) throw "no stream handler";
              a.postMessage([e, (o = n)], [e.buffer]);
            }),
            (t.terminate = function () {
              a.terminate();
            });
        },
        eh = function (e, t) {
          return e[t] | (e[t + 1] << 8);
        },
        ep = function (e, t) {
          return (
            (e[t] | (e[t + 1] << 8) | (e[t + 2] << 16) | (e[t + 3] << 24)) >>> 0
          );
        },
        em = function (e, t) {
          return ep(e, t) + 4294967296 * ep(e, t + 4);
        },
        ev = function (e, t, n) {
          for (; n; ++t) (e[t] = n), (n >>>= 8);
        },
        eg = function (e, t) {
          var n = t.filename;
          if (
            ((e[0] = 31),
            (e[1] = 139),
            (e[2] = 8),
            (e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0),
            (e[9] = 3),
            0 != t.mtime &&
              ev(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)),
            n)
          ) {
            e[3] = 8;
            for (var r = 0; r <= n.length; ++r) e[r + 10] = n.charCodeAt(r);
          }
        },
        eb = function (e) {
          if (31 != e[0] || 139 != e[1] || 8 != e[2]) throw "invalid gzip data";
          var t = e[3],
            n = 10;
          4 & t && (n += e[10] | ((e[11] << 8) + 2));
          for (var r = ((t >> 3) & 1) + ((t >> 4) & 1); r > 0; r -= !e[n++]);
          return n + (2 & t);
        },
        ey = function (e) {
          var t = e.length;
          return (
            (e[t - 4] |
              (e[t - 3] << 8) |
              (e[t - 2] << 16) |
              (e[t - 1] << 24)) >>>
            0
          );
        },
        ex = function (e) {
          return 10 + ((e.filename && e.filename.length + 1) || 0);
        },
        ew = function (e, t) {
          var n = t.level,
            r = 0 == n ? 0 : n < 6 ? 1 : 9 == n ? 3 : 2;
          (e[0] = 120), (e[1] = (r << 6) | (r ? 32 - 2 * r : 1));
        },
        e_ = function (e) {
          if ((15 & e[0]) != 8 || e[0] >>> 4 > 7 || ((e[0] << 8) | e[1]) % 31)
            throw "invalid zlib data";
          if (32 & e[1])
            throw "invalid zlib data: preset dictionaries not supported";
        };
      function ek(e, t) {
        return (
          t || "function" != typeof e || ((t = e), (e = {})),
          (this.ondata = t),
          e
        );
      }
      var eS = (function () {
          function e(e, t) {
            t || "function" != typeof e || ((t = e), (e = {})),
              (this.ondata = t),
              (this.o = e || {});
          }
          return (
            (e.prototype.p = function (e, t) {
              this.ondata(Z(e, this.o, 0, 0, !t), t);
            }),
            (e.prototype.push = function (e, t) {
              if (this.d) throw "stream finished";
              if (!this.ondata) throw "no stream handler";
              (this.d = t), this.p(e, t || !1);
            }),
            e
          );
        })(),
        eP = function (e, t) {
          ef(
            [
              er,
              function () {
                return [ed, eS];
              },
            ],
            this,
            ek.call(this, e, t),
            function (e) {
              onmessage = ed(new eS(e.data));
            },
            6
          );
        };
      function ej(e, t, n) {
        if ((n || ((n = t), (t = {})), "function" != typeof n))
          throw "no callback";
        return eu(
          e,
          t,
          [er],
          function (e) {
            return el(eE(e.data[0], e.data[1]));
          },
          0,
          n
        );
      }
      function eE(e, t) {
        return Z(e, t || {}, 0, 0);
      }
      var eA = (function () {
          function e(e) {
            (this.s = {}), (this.p = new s(0)), (this.ondata = e);
          }
          return (
            (e.prototype.e = function (e) {
              if (this.d) throw "stream finished";
              if (!this.ondata) throw "no stream handler";
              var t = this.p.length,
                n = new s(t + e.length);
              n.set(this.p), n.set(e, t), (this.p = n);
            }),
            (e.prototype.c = function (e) {
              this.d = this.s.i = e || !1;
              var t = this.s.b,
                n = O(this.p, this.o, this.s);
              this.ondata(T(n, t, this.s.b), this.d),
                (this.o = T(n, this.s.b - 32768)),
                (this.s.b = this.o.length),
                (this.p = T(this.p, (this.s.p / 8) | 0)),
                (this.s.p &= 7);
            }),
            (e.prototype.push = function (e, t) {
              this.e(e), this.c(t);
            }),
            e
          );
        })(),
        eC = function (e) {
          (this.ondata = e),
            ef(
              [
                en,
                function () {
                  return [ed, eA];
                },
              ],
              this,
              0,
              function () {
                onmessage = ed(new eA());
              },
              7
            );
        };
      function eM(e, t, n) {
        if ((n || ((n = t), (t = {})), "function" != typeof n))
          throw "no callback";
        return eu(
          e,
          t,
          [en],
          function (e) {
            return el(O(e.data[0], ec(e.data[1])));
          },
          1,
          n
        );
      }
      function ez(e, t) {
        return O(e, t);
      }
      var eR = (function () {
          function e(e, t) {
            (this.c = V()), (this.l = 0), (this.v = 1), eS.call(this, e, t);
          }
          return (
            (e.prototype.push = function (e, t) {
              eS.prototype.push.call(this, e, t);
            }),
            (e.prototype.p = function (e, t) {
              this.c.p(e), (this.l += e.length);
              var n = Z(e, this.o, this.v && ex(this.o), t && 8, !t);
              this.v && (eg(n, this.o), (this.v = 0)),
                t &&
                  (ev(n, n.length - 8, this.c.d()),
                  ev(n, n.length - 4, this.l)),
                this.ondata(n, t);
            }),
            e
          );
        })(),
        eI = function (e, t) {
          ef(
            [
              er,
              ei,
              function () {
                return [ed, eS, eR];
              },
            ],
            this,
            ek.call(this, e, t),
            function (e) {
              onmessage = ed(new eR(e.data));
            },
            8
          );
        };
      function eT(e, t, n) {
        if ((n || ((n = t), (t = {})), "function" != typeof n))
          throw "no callback";
        return eu(
          e,
          t,
          [
            er,
            ei,
            function () {
              return [eO];
            },
          ],
          function (e) {
            return el(eO(e.data[0], e.data[1]));
          },
          2,
          n
        );
      }
      function eO(e, t) {
        t || (t = {});
        var n = V(),
          r = e.length;
        n.p(e);
        var i = Z(e, t, ex(t), 8),
          o = i.length;
        return eg(i, t), ev(i, o - 8, n.d()), ev(i, o - 4, r), i;
      }
      var eB = (function () {
          function e(e) {
            (this.v = 1), eA.call(this, e);
          }
          return (
            (e.prototype.push = function (e, t) {
              if ((eA.prototype.e.call(this, e), this.v)) {
                var n = this.p.length > 3 ? eb(this.p) : 4;
                if (n >= this.p.length && !t) return;
                (this.p = this.p.subarray(n)), (this.v = 0);
              }
              if (t) {
                if (this.p.length < 8) throw "invalid gzip stream";
                this.p = this.p.subarray(0, -8);
              }
              eA.prototype.c.call(this, t);
            }),
            e
          );
        })(),
        eL = function (e) {
          (this.ondata = e),
            ef(
              [
                en,
                eo,
                function () {
                  return [ed, eA, eB];
                },
              ],
              this,
              0,
              function () {
                onmessage = ed(new eB());
              },
              9
            );
        };
      function eD(e, t, n) {
        if ((n || ((n = t), (t = {})), "function" != typeof n))
          throw "no callback";
        return eu(
          e,
          t,
          [
            en,
            eo,
            function () {
              return [eN];
            },
          ],
          function (e) {
            return el(eN(e.data[0]));
          },
          3,
          n
        );
      }
      function eN(e, t) {
        return O(e.subarray(eb(e), -8), t || new s(ey(e)));
      }
      var eF = (function () {
          function e(e, t) {
            (this.c = Y()), (this.v = 1), eS.call(this, e, t);
          }
          return (
            (e.prototype.push = function (e, t) {
              eS.prototype.push.call(this, e, t);
            }),
            (e.prototype.p = function (e, t) {
              this.c.p(e);
              var n = Z(e, this.o, this.v && 2, t && 4, !t);
              this.v && (ew(n, this.o), (this.v = 0)),
                t && ev(n, n.length - 4, this.c.d()),
                this.ondata(n, t);
            }),
            e
          );
        })(),
        eU = function (e, t) {
          ef(
            [
              er,
              ea,
              function () {
                return [ed, eS, eF];
              },
            ],
            this,
            ek.call(this, e, t),
            function (e) {
              onmessage = ed(new eF(e.data));
            },
            10
          );
        };
      function eG(e, t, n) {
        if ((n || ((n = t), (t = {})), "function" != typeof n))
          throw "no callback";
        return eu(
          e,
          t,
          [
            er,
            ea,
            function () {
              return [eq];
            },
          ],
          function (e) {
            return el(eq(e.data[0], e.data[1]));
          },
          4,
          n
        );
      }
      function eq(e, t) {
        t || (t = {});
        var n = Y();
        n.p(e);
        var r = Z(e, t, 2, 4);
        return ew(r, t), ev(r, r.length - 4, n.d()), r;
      }
      var eW = (function () {
          function e(e) {
            (this.v = 1), eA.call(this, e);
          }
          return (
            (e.prototype.push = function (e, t) {
              if ((eA.prototype.e.call(this, e), this.v)) {
                if (this.p.length < 2 && !t) return;
                (this.p = this.p.subarray(2)), (this.v = 0);
              }
              if (t) {
                if (this.p.length < 4) throw "invalid zlib stream";
                this.p = this.p.subarray(0, -4);
              }
              eA.prototype.c.call(this, t);
            }),
            e
          );
        })(),
        eH = function (e) {
          (this.ondata = e),
            ef(
              [
                en,
                es,
                function () {
                  return [ed, eA, eW];
                },
              ],
              this,
              0,
              function () {
                onmessage = ed(new eW());
              },
              11
            );
        };
      function e$(e, t, n) {
        if ((n || ((n = t), (t = {})), "function" != typeof n))
          throw "no callback";
        return eu(
          e,
          t,
          [
            en,
            es,
            function () {
              return [eX];
            },
          ],
          function (e) {
            return el(eX(e.data[0], ec(e.data[1])));
          },
          5,
          n
        );
      }
      function eX(e, t) {
        return O((e_(e), e.subarray(2, -4)), t);
      }
      var eV = (function () {
          function e(e) {
            (this.G = eB), (this.I = eA), (this.Z = eW), (this.ondata = e);
          }
          return (
            (e.prototype.push = function (e, t) {
              if (!this.ondata) throw "no stream handler";
              if (this.s) this.s.push(e, t);
              else {
                if (this.p && this.p.length) {
                  var n = new s(this.p.length + e.length);
                  n.set(this.p), n.set(e, this.p.length);
                } else this.p = e;
                if (this.p.length > 2) {
                  var r = this,
                    i = function () {
                      r.ondata.apply(r, arguments);
                    };
                  (this.s =
                    31 == this.p[0] && 139 == this.p[1] && 8 == this.p[2]
                      ? new this.G(i)
                      : (15 & this.p[0]) != 8 ||
                        this.p[0] >> 4 > 7 ||
                        ((this.p[0] << 8) | this.p[1]) % 31
                      ? new this.I(i)
                      : new this.Z(i)),
                    this.s.push(this.p, t),
                    (this.p = null);
                }
              }
            }),
            e
          );
        })(),
        eY = (function () {
          function e(e) {
            (this.G = eL), (this.I = eC), (this.Z = eH), (this.ondata = e);
          }
          return (
            (e.prototype.push = function (e, t) {
              eV.prototype.push.call(this, e, t);
            }),
            e
          );
        })();
      function eZ(e, t, n) {
        if ((n || ((n = t), (t = {})), "function" != typeof n))
          throw "no callback";
        return 31 == e[0] && 139 == e[1] && 8 == e[2]
          ? eD(e, t, n)
          : (15 & e[0]) != 8 || e[0] >> 4 > 7 || ((e[0] << 8) | e[1]) % 31
          ? eM(e, t, n)
          : e$(e, t, n);
      }
      function eQ(e, t) {
        return 31 == e[0] && 139 == e[1] && 8 == e[2]
          ? eN(e, t)
          : (15 & e[0]) != 8 || e[0] >> 4 > 7 || ((e[0] << 8) | e[1]) % 31
          ? O(e, t)
          : eX(e, t);
      }
      var eK = function (e, t, n, r) {
          for (var i in e) {
            var o = e[i],
              a = t + i;
            o instanceof s
              ? (n[a] = [o, r])
              : Array.isArray(o)
              ? (n[a] = [o[0], Q(r, o[1])])
              : eK(o, a + "/", n, r);
          }
        },
        eJ = "undefined" != typeof TextEncoder && new TextEncoder(),
        e0 = "undefined" != typeof TextDecoder && new TextDecoder(),
        e1 = 0;
      try {
        e0.decode(H, { stream: !0 }), (e1 = 1);
      } catch (e) {}
      var e2 = function (e) {
          for (var t = "", n = 0; ; ) {
            var r = e[n++],
              i = (r > 127) + (r > 223) + (r > 239);
            if (n + i > e.length) return [t, T(e, n - 1)];
            i
              ? 3 == i
                ? (t += String.fromCharCode(
                    55296 |
                      ((r =
                        (((15 & r) << 18) |
                          ((63 & e[n++]) << 12) |
                          ((63 & e[n++]) << 6) |
                          (63 & e[n++])) -
                        65536) >>
                        10),
                    56320 | (1023 & r)
                  ))
                : 1 & i
                ? (t += String.fromCharCode(((31 & r) << 6) | (63 & e[n++])))
                : (t += String.fromCharCode(
                    ((15 & r) << 12) | ((63 & e[n++]) << 6) | (63 & e[n++])
                  ))
              : (t += String.fromCharCode(r));
          }
        },
        e5 = (function () {
          function e(e) {
            (this.ondata = e), e1 ? (this.t = new TextDecoder()) : (this.p = H);
          }
          return (
            (e.prototype.push = function (e, t) {
              if (!this.ondata) throw "no callback";
              if (((t = !!t), this.t)) {
                if ((this.ondata(this.t.decode(e, { stream: !0 }), t), t)) {
                  if (this.t.decode().length) throw "invalid utf-8 data";
                  this.t = null;
                }
                return;
              }
              if (!this.p) throw "stream finished";
              var n = new s(this.p.length + e.length);
              n.set(this.p), n.set(e, this.p.length);
              var r = e2(n),
                i = r[0],
                o = r[1];
              if (t) {
                if (o.length) throw "invalid utf-8 data";
                this.p = null;
              } else this.p = o;
              this.ondata(i, t);
            }),
            e
          );
        })(),
        e3 = (function () {
          function e(e) {
            this.ondata = e;
          }
          return (
            (e.prototype.push = function (e, t) {
              if (!this.ondata) throw "no callback";
              if (this.d) throw "stream finished";
              this.ondata(e8(e), (this.d = t || !1));
            }),
            e
          );
        })();
      function e8(e, t) {
        if (t) {
          for (var n = new s(e.length), r = 0; r < e.length; ++r)
            n[r] = e.charCodeAt(r);
          return n;
        }
        if (eJ) return eJ.encode(e);
        for (
          var i = e.length,
            o = new s(e.length + (e.length >> 1)),
            a = 0,
            l = function (e) {
              o[a++] = e;
            },
            r = 0;
          r < i;
          ++r
        ) {
          if (a + 5 > o.length) {
            var c = new s(a + 8 + ((i - r) << 1));
            c.set(o), (o = c);
          }
          var u = e.charCodeAt(r);
          u < 128 || t
            ? l(u)
            : (u < 2048
                ? l(192 | (u >> 6))
                : (u > 55295 && u < 57344
                    ? (l(
                        240 |
                          ((u =
                            (65536 + (1047552 & u)) |
                            (1023 & e.charCodeAt(++r))) >>
                            18)
                      ),
                      l(128 | ((u >> 12) & 63)))
                    : l(224 | (u >> 12)),
                  l(128 | ((u >> 6) & 63))),
              l(128 | (63 & u)));
        }
        return T(o, 0, a);
      }
      function e4(e, t) {
        if (t) {
          for (var n = "", r = 0; r < e.length; r += 16384)
            n += String.fromCharCode.apply(null, e.subarray(r, r + 16384));
          return n;
        }
        if (e0) return e0.decode(e);
        var i = e2(e),
          o = i[0];
        if (i[1].length) throw "invalid utf-8 data";
        return o;
      }
      var e9 = function (e) {
          return 1 == e ? 3 : e < 6 ? 2 : 9 == e ? 1 : 0;
        },
        e6 = function (e, t) {
          return t + 30 + eh(e, t + 26) + eh(e, t + 28);
        },
        e7 = function (e, t, n) {
          var r = eh(e, t + 28),
            i = e4(e.subarray(t + 46, t + 46 + r), !(2048 & eh(e, t + 8))),
            o = t + 46 + r,
            a = ep(e, t + 20),
            s =
              n && 4294967295 == a
                ? te(e, o)
                : [a, ep(e, t + 24), ep(e, t + 42)],
            l = s[0],
            c = s[1],
            u = s[2];
          return [eh(e, t + 10), l, c, i, o + eh(e, t + 30) + eh(e, t + 32), u];
        },
        te = function (e, t) {
          for (; 1 != eh(e, t); t += 4 + eh(e, t + 2));
          return [em(e, t + 12), em(e, t + 4), em(e, t + 20)];
        },
        tt = function (e) {
          var t = 0;
          if (e)
            for (var n in e) {
              var r = e[n].length;
              if (r > 65535) throw "extra field too long";
              t += r + 4;
            }
          return t;
        },
        tn = function (e, t, n, r, i, o, a, s) {
          var l = r.length,
            c = n.extra,
            u = s && s.length,
            d = tt(c);
          ev(e, t, null != a ? 33639248 : 67324752),
            (t += 4),
            null != a && ((e[t++] = 20), (e[t++] = n.os)),
            (e[t] = 20),
            (t += 2),
            (e[t++] = (n.flag << 1) | (null == o && 8)),
            (e[t++] = i && 8),
            (e[t++] = 255 & n.compression),
            (e[t++] = n.compression >> 8);
          var f = new Date(null == n.mtime ? Date.now() : n.mtime),
            h = f.getFullYear() - 1980;
          if (h < 0 || h > 119) throw "date not in range 1980-2099";
          if (
            (ev(
              e,
              t,
              (h << 25) |
                ((f.getMonth() + 1) << 21) |
                (f.getDate() << 16) |
                (f.getHours() << 11) |
                (f.getMinutes() << 5) |
                (f.getSeconds() >>> 1)
            ),
            (t += 4),
            null != o &&
              (ev(e, t, n.crc), ev(e, t + 4, o), ev(e, t + 8, n.size)),
            ev(e, t + 12, l),
            ev(e, t + 14, d),
            (t += 16),
            null != a &&
              (ev(e, t, u), ev(e, t + 6, n.attrs), ev(e, t + 10, a), (t += 14)),
            e.set(r, t),
            (t += l),
            d)
          )
            for (var p in c) {
              var m = c[p],
                v = m.length;
              ev(e, t, +p), ev(e, t + 2, v), e.set(m, t + 4), (t += 4 + v);
            }
          return u && (e.set(s, t), (t += u)), t;
        },
        tr = function (e, t, n, r, i) {
          ev(e, t, 101010256),
            ev(e, t + 8, n),
            ev(e, t + 10, n),
            ev(e, t + 12, r),
            ev(e, t + 16, i);
        },
        ti = (function () {
          function e(e) {
            (this.filename = e),
              (this.c = V()),
              (this.size = 0),
              (this.compression = 0);
          }
          return (
            (e.prototype.process = function (e, t) {
              this.ondata(null, e, t);
            }),
            (e.prototype.push = function (e, t) {
              if (!this.ondata)
                throw "no callback - add to ZIP archive before pushing";
              this.c.p(e),
                (this.size += e.length),
                t && (this.crc = this.c.d()),
                this.process(e, t || !1);
            }),
            e
          );
        })(),
        to = (function () {
          function e(e, t) {
            var n = this;
            t || (t = {}),
              ti.call(this, e),
              (this.d = new eS(t, function (e, t) {
                n.ondata(null, e, t);
              })),
              (this.compression = 8),
              (this.flag = e9(t.level));
          }
          return (
            (e.prototype.process = function (e, t) {
              try {
                this.d.push(e, t);
              } catch (e) {
                this.ondata(e, null, t);
              }
            }),
            (e.prototype.push = function (e, t) {
              ti.prototype.push.call(this, e, t);
            }),
            e
          );
        })(),
        ta = (function () {
          function e(e, t) {
            var n = this;
            t || (t = {}),
              ti.call(this, e),
              (this.d = new eP(t, function (e, t, r) {
                n.ondata(e, t, r);
              })),
              (this.compression = 8),
              (this.flag = e9(t.level)),
              (this.terminate = this.d.terminate);
          }
          return (
            (e.prototype.process = function (e, t) {
              this.d.push(e, t);
            }),
            (e.prototype.push = function (e, t) {
              ti.prototype.push.call(this, e, t);
            }),
            e
          );
        })(),
        ts = (function () {
          function e(e) {
            (this.ondata = e), (this.u = []), (this.d = 1);
          }
          return (
            (e.prototype.add = function (e) {
              var t = this;
              if (2 & this.d) throw "stream finished";
              var n = e8(e.filename),
                r = n.length,
                i = e.comment,
                o = i && e8(i),
                a = r != e.filename.length || (o && i.length != o.length),
                l = r + tt(e.extra) + 30;
              if (r > 65535) throw "filename too long";
              var c = new s(l);
              tn(c, 0, e, n, a);
              var u = [c],
                d = function () {
                  for (var e = 0, n = u; e < n.length; e++) {
                    var r = n[e];
                    t.ondata(null, r, !1);
                  }
                  u = [];
                },
                f = this.d;
              this.d = 0;
              var h = this.u.length,
                p = Q(e, {
                  f: n,
                  u: a,
                  o: o,
                  t: function () {
                    e.terminate && e.terminate();
                  },
                  r: function () {
                    if ((d(), f)) {
                      var e = t.u[h + 1];
                      e ? e.r() : (t.d = 1);
                    }
                    f = 1;
                  },
                }),
                m = 0;
              (e.ondata = function (n, r, i) {
                if (n) t.ondata(n, r, i), t.terminate();
                else if (((m += r.length), u.push(r), i)) {
                  var o = new s(16);
                  ev(o, 0, 134695760),
                    ev(o, 4, e.crc),
                    ev(o, 8, m),
                    ev(o, 12, e.size),
                    u.push(o),
                    (p.c = m),
                    (p.b = l + m + 16),
                    (p.crc = e.crc),
                    (p.size = e.size),
                    f && p.r(),
                    (f = 1);
                } else f && d();
              }),
                this.u.push(p);
            }),
            (e.prototype.end = function () {
              var e = this;
              if (2 & this.d) {
                if (1 & this.d) throw "stream finishing";
                throw "stream finished";
              }
              this.d
                ? this.e()
                : this.u.push({
                    r: function () {
                      1 & e.d && (e.u.splice(-1, 1), e.e());
                    },
                    t: function () {},
                  }),
                (this.d = 3);
            }),
            (e.prototype.e = function () {
              for (
                var e = 0, t = 0, n = 0, r = 0, i = this.u;
                r < i.length;
                r++
              ) {
                var o = i[r];
                n += 46 + o.f.length + tt(o.extra) + (o.o ? o.o.length : 0);
              }
              for (
                var a = new s(n + 22), l = 0, c = this.u;
                l < c.length;
                l++
              ) {
                var o = c[l];
                tn(a, e, o, o.f, o.u, o.c, t, o.o),
                  (e += 46 + o.f.length + tt(o.extra) + (o.o ? o.o.length : 0)),
                  (t += o.b);
              }
              tr(a, e, this.u.length, n, t),
                this.ondata(null, a, !0),
                (this.d = 2);
            }),
            (e.prototype.terminate = function () {
              for (var e = 0, t = this.u; e < t.length; e++) t[e].t();
              this.d = 2;
            }),
            e
          );
        })();
      function tl(e, t, n) {
        if ((n || ((n = t), (t = {})), "function" != typeof n))
          throw "no callback";
        var r = {};
        eK(e, "", r, t);
        var i = Object.keys(r),
          o = i.length,
          a = 0,
          l = 0,
          c = o,
          u = Array(o),
          d = [],
          f = function () {
            for (var e = 0; e < d.length; ++e) d[e]();
          },
          h = function () {
            var e = new s(l + 22),
              t = a,
              r = l - a;
            l = 0;
            for (var i = 0; i < c; ++i) {
              var o = u[i];
              try {
                var d = o.c.length;
                tn(e, l, o, o.f, o.u, d);
                var f = 30 + o.f.length + tt(o.extra),
                  h = l + f;
                e.set(o.c, h),
                  tn(e, a, o, o.f, o.u, d, l, o.m),
                  (a += 16 + f + (o.m ? o.m.length : 0)),
                  (l = h + d);
              } catch (e) {
                return n(e, null);
              }
            }
            tr(e, a, u.length, r, t), n(null, e);
          };
        o || h();
        for (
          var p = function (e) {
              var t = i[e],
                s = r[t],
                c = s[0],
                p = s[1],
                m = V(),
                v = c.length;
              m.p(c);
              var g = e8(t),
                b = g.length,
                y = p.comment,
                x = y && e8(y),
                w = x && x.length,
                _ = tt(p.extra),
                k = 0 == p.level ? 0 : 8,
                S = function (r, i) {
                  if (r) f(), n(r, null);
                  else {
                    var s = i.length;
                    (u[e] = Q(p, {
                      size: v,
                      crc: m.d(),
                      c: i,
                      f: g,
                      m: x,
                      u: b != t.length || (x && y.length != w),
                      compression: k,
                    })),
                      (a += 30 + b + _ + s),
                      (l += 76 + 2 * (b + _) + (w || 0) + s),
                      --o || h();
                  }
                };
              if ((b > 65535 && S("filename too long", null), k)) {
                if (v < 16e4)
                  try {
                    S(null, eE(c, p));
                  } catch (e) {
                    S(e, null);
                  }
                else d.push(ej(c, p, S));
              } else S(null, c);
            },
            m = 0;
          m < c;
          ++m
        )
          p(m);
        return f;
      }
      function tc(e, t) {
        t || (t = {});
        var n = {},
          r = [];
        eK(e, "", n, t);
        var i = 0,
          o = 0;
        for (var a in n) {
          var l = n[a],
            c = l[0],
            u = l[1],
            d = 0 == u.level ? 0 : 8,
            f = e8(a),
            h = f.length,
            p = u.comment,
            m = p && e8(p),
            v = m && m.length,
            g = tt(u.extra);
          if (h > 65535) throw "filename too long";
          var b = d ? eE(c, u) : c,
            y = b.length,
            x = V();
          x.p(c),
            r.push(
              Q(u, {
                size: c.length,
                crc: x.d(),
                c: b,
                f: f,
                m: m,
                u: h != a.length || (m && p.length != v),
                o: i,
                compression: d,
              })
            ),
            (i += 30 + h + g + y),
            (o += 76 + 2 * (h + g) + (v || 0) + y);
        }
        for (
          var w = new s(o + 22), _ = i, k = o - i, S = 0;
          S < r.length;
          ++S
        ) {
          var f = r[S];
          tn(w, f.o, f, f.f, f.u, f.c.length);
          var P = 30 + f.f.length + tt(f.extra);
          w.set(f.c, f.o + P),
            tn(w, i, f, f.f, f.u, f.c.length, f.o, f.m),
            (i += 16 + P + (f.m ? f.m.length : 0));
        }
        return tr(w, i, r.length, k, _), w;
      }
      var tu = (function () {
          function e() {}
          return (
            (e.prototype.push = function (e, t) {
              this.ondata(null, e, t);
            }),
            (e.compression = 0),
            e
          );
        })(),
        td = (function () {
          function e() {
            var e = this;
            this.i = new eA(function (t, n) {
              e.ondata(null, t, n);
            });
          }
          return (
            (e.prototype.push = function (e, t) {
              try {
                this.i.push(e, t);
              } catch (n) {
                this.ondata(n, e, t);
              }
            }),
            (e.compression = 8),
            e
          );
        })(),
        tf = (function () {
          function e(e, t) {
            var n = this;
            t < 32e4
              ? (this.i = new eA(function (e, t) {
                  n.ondata(null, e, t);
                }))
              : ((this.i = new eC(function (e, t, r) {
                  n.ondata(e, t, r);
                })),
                (this.terminate = this.i.terminate));
          }
          return (
            (e.prototype.push = function (e, t) {
              this.i.terminate && (e = T(e, 0)), this.i.push(e, t);
            }),
            (e.compression = 8),
            e
          );
        })(),
        th = (function () {
          function e(e) {
            (this.onfile = e),
              (this.k = []),
              (this.o = { 0: tu }),
              (this.p = H);
          }
          return (
            (e.prototype.push = function (e, t) {
              var n = this;
              if (!this.onfile) throw "no callback";
              if (!this.p) throw "stream finished";
              if (this.c > 0) {
                var r = Math.min(this.c, e.length),
                  i = e.subarray(0, r);
                if (
                  ((this.c -= r),
                  this.d ? this.d.push(i, !this.c) : this.k[0].push(i),
                  (e = e.subarray(r)).length)
                )
                  return this.push(e, t);
              } else {
                var o = 0,
                  a = 0,
                  l = void 0,
                  c = void 0;
                this.p.length
                  ? e.length
                    ? ((c = new s(this.p.length + e.length)).set(this.p),
                      c.set(e, this.p.length))
                    : (c = this.p)
                  : (c = e);
                for (
                  var u = c.length, d = this.c, f = d && this.d, h = this;
                  a < u - 4 &&
                  "break" !==
                    (function () {
                      var e = ep(c, a);
                      if (67324752 == e) {
                        (o = 1), (l = a), (h.d = null), (h.c = 0);
                        var t = eh(c, a + 6),
                          r = eh(c, a + 8),
                          i = 8 & t,
                          s = eh(c, a + 26),
                          f = eh(c, a + 28);
                        if (u > a + 30 + s + f) {
                          var p,
                            m,
                            v = [];
                          h.k.unshift(v), (o = 2);
                          var g = ep(c, a + 18),
                            b = ep(c, a + 22),
                            y = e4(
                              c.subarray(a + 30, (a += 30 + s)),
                              !(2048 & t)
                            );
                          4294967295 == g
                            ? ((g = (p = i ? [-2] : te(c, a))[0]), (b = p[1]))
                            : i && (g = -1),
                            (a += f),
                            (h.c = g);
                          var x = {
                            name: y,
                            compression: r,
                            start: function () {
                              if (!x.ondata) throw "no callback";
                              if (g) {
                                var e = n.o[r];
                                if (!e) throw "unknown compression type " + r;
                                (m = g < 0 ? new e(y) : new e(y, g, b)).ondata =
                                  function (e, t, n) {
                                    x.ondata(e, t, n);
                                  };
                                for (var t = 0; t < v.length; t++) {
                                  var i = v[t];
                                  m.push(i, !1);
                                }
                                n.k[0] == v && n.c ? (n.d = m) : m.push(H, !0);
                              } else x.ondata(null, H, !0);
                            },
                            terminate: function () {
                              m && m.terminate && m.terminate();
                            },
                          };
                          g >= 0 && ((x.size = g), (x.originalSize = b)),
                            h.onfile(x);
                        }
                        return "break";
                      }
                      if (d) {
                        if (134695760 == e)
                          return (
                            (l = a += 12 + (-2 == d && 8)),
                            (o = 3),
                            (h.c = 0),
                            "break"
                          );
                        if (33639248 == e)
                          return (l = a -= 4), (o = 3), (h.c = 0), "break";
                      }
                    })();
                  ++a
                );
                if (((this.p = H), d < 0)) {
                  var p = o
                    ? c.subarray(
                        0,
                        l -
                          12 -
                          (-2 == d && 8) -
                          (134695760 == ep(c, l - 16) && 4)
                      )
                    : c.subarray(0, a);
                  f ? f.push(p, !!o) : this.k[+(2 == o)].push(p);
                }
                if (2 & o) return this.push(c.subarray(a), t);
                this.p = c.subarray(a);
              }
              if (t) {
                if (this.c) throw "invalid zip file";
                this.p = null;
              }
            }),
            (e.prototype.register = function (e) {
              this.o[e.compression] = e;
            }),
            e
          );
        })();
      function tp(e, t) {
        if ("function" != typeof t) throw "no callback";
        for (
          var n = [],
            r = function () {
              for (var e = 0; e < n.length; ++e) n[e]();
            },
            i = {},
            o = e.length - 22;
          101010256 != ep(e, o);
          --o
        )
          if (!o || e.length - o > 65558) {
            t("invalid zip file", null);
            return;
          }
        var a = eh(e, o + 8);
        a || t(null, {});
        var l = a,
          c = ep(e, o + 16),
          u = 4294967295 == c;
        if (u) {
          if (((o = ep(e, o - 12)), 101075792 != ep(e, o))) {
            t("invalid zip file", null);
            return;
          }
          (l = a = ep(e, o + 32)), (c = ep(e, o + 48));
        }
        for (var d = 0; d < l; ++d)
          !(function (o) {
            var l = e7(e, c, u),
              d = l[0],
              f = l[1],
              h = l[2],
              p = l[3],
              m = l[4],
              v = e6(e, l[5]);
            c = m;
            var g = function (e, n) {
              e ? (r(), t(e, null)) : ((i[p] = n), --a || t(null, i));
            };
            if (d) {
              if (8 == d) {
                var b,
                  y = e.subarray(v, v + f);
                if (f < 32e4)
                  try {
                    g(null, ((b = new s(h)), O(y, b)));
                  } catch (e) {
                    g(e, null);
                  }
                else n.push(eM(y, { size: h }, g));
              } else g("unknown compression type " + d, null);
            } else g(null, T(e, v, v + f));
          })(0);
        return r;
      }
      function tm(e) {
        for (var t = {}, n = e.length - 22; 101010256 != ep(e, n); --n)
          if (!n || e.length - n > 65558) throw "invalid zip file";
        var r = eh(e, n + 8);
        if (!r) return {};
        var i = ep(e, n + 16),
          o = 4294967295 == i;
        if (o) {
          if (((n = ep(e, n - 12)), 101075792 != ep(e, n)))
            throw "invalid zip file";
          (r = ep(e, n + 32)), (i = ep(e, n + 48));
        }
        for (var a = 0; a < r; ++a) {
          var l = e7(e, i, o),
            c = l[0],
            u = l[1],
            d = l[2],
            f = l[3],
            h = l[4],
            p = e6(e, l[5]);
          if (((i = h), c)) {
            if (8 == c) t[f] = O(e.subarray(p, p + u), new s(d));
            else throw "unknown compression type " + c;
          } else t[f] = T(e, p, p + u);
        }
        return t;
      }
    },
    53990: function (e, t, n) {
      "use strict";
      n.d(t, {
        w: function () {
          return a;
        },
      });
      var r = n(57503),
        i = n(81909),
        o = n(2550);
      class a extends r.w {
        constructor(
          e = new i.L(),
          t = new o.Y({ color: 16777215 * Math.random() })
        ) {
          super(e, t), (this.isLine2 = !0), (this.type = "Line2");
        }
      }
    },
    81909: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var r = n(13023);
      class i extends r.z {
        constructor() {
          super(), (this.isLineGeometry = !0), (this.type = "LineGeometry");
        }
        setPositions(e) {
          let t = e.length - 3,
            n = new Float32Array(2 * t);
          for (let r = 0; r < t; r += 3)
            (n[2 * r] = e[r]),
              (n[2 * r + 1] = e[r + 1]),
              (n[2 * r + 2] = e[r + 2]),
              (n[2 * r + 3] = e[r + 3]),
              (n[2 * r + 4] = e[r + 4]),
              (n[2 * r + 5] = e[r + 5]);
          return super.setPositions(n), this;
        }
        setColors(e) {
          let t = e.length - 3,
            n = new Float32Array(2 * t);
          for (let r = 0; r < t; r += 3)
            (n[2 * r] = e[r]),
              (n[2 * r + 1] = e[r + 1]),
              (n[2 * r + 2] = e[r + 2]),
              (n[2 * r + 3] = e[r + 3]),
              (n[2 * r + 4] = e[r + 4]),
              (n[2 * r + 5] = e[r + 5]);
          return super.setColors(n), this;
        }
        fromLine(e) {
          let t = e.geometry;
          return this.setPositions(t.attributes.position.array), this;
        }
      }
    },
    2550: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return i;
        },
      });
      var r = n(91344);
      (r.UniformsLib.line = {
        worldUnits: { value: 1 },
        linewidth: { value: 1 },
        resolution: { value: new r.Vector2(1, 1) },
        dashOffset: { value: 0 },
        dashScale: { value: 1 },
        dashSize: { value: 1 },
        gapSize: { value: 1 },
      }),
        (r.ShaderLib.line = {
          uniforms: r.UniformsUtils.merge([
            r.UniformsLib.common,
            r.UniformsLib.fog,
            r.UniformsLib.line,
          ]),
          vertexShader: `
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				// get the offset direction as perpendicular to the view vector
				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 offset;
				if ( position.y < 0.5 ) {

					offset = normalize( cross( start.xyz, worldDir ) );

				} else {

					offset = normalize( cross( end.xyz, worldDir ) );

				}

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// extend the line bounds to encompass  endcaps
					start.xyz += - worldDir * linewidth * 0.5;
					end.xyz += worldDir * linewidth * 0.5;

					// shift the position of the quad so it hugs the forward edge of the line
					offset.xy -= dir * forwardOffset;
					offset.z += 0.5;

				#endif

				// endcaps
				if ( position.y > 1.0 || position.y < 0.0 ) {

					offset.xy += dir * 2.0 * forwardOffset;

				}

				// adjust for linewidth
				offset *= linewidth * 0.5;

				// set the world position
				worldPos = ( position.y < 0.5 ) ? start : end;
				worldPos.xyz += offset;

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,
          fragmentShader: `
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`,
        });
      class i extends r.ShaderMaterial {
        constructor(e) {
          super({
            type: "LineMaterial",
            uniforms: r.UniformsUtils.clone(r.ShaderLib.line.uniforms),
            vertexShader: r.ShaderLib.line.vertexShader,
            fragmentShader: r.ShaderLib.line.fragmentShader,
            clipping: !0,
          }),
            (this.isLineMaterial = !0),
            this.setValues(e);
        }
        get color() {
          return this.uniforms.diffuse.value;
        }
        set color(e) {
          this.uniforms.diffuse.value = e;
        }
        get worldUnits() {
          return "WORLD_UNITS" in this.defines;
        }
        set worldUnits(e) {
          !0 === e
            ? (this.defines.WORLD_UNITS = "")
            : delete this.defines.WORLD_UNITS;
        }
        get linewidth() {
          return this.uniforms.linewidth.value;
        }
        set linewidth(e) {
          this.uniforms.linewidth && (this.uniforms.linewidth.value = e);
        }
        get dashed() {
          return "USE_DASH" in this.defines;
        }
        set dashed(e) {
          (!0 === e) !== this.dashed && (this.needsUpdate = !0),
            !0 === e
              ? (this.defines.USE_DASH = "")
              : delete this.defines.USE_DASH;
        }
        get dashScale() {
          return this.uniforms.dashScale.value;
        }
        set dashScale(e) {
          this.uniforms.dashScale.value = e;
        }
        get dashSize() {
          return this.uniforms.dashSize.value;
        }
        set dashSize(e) {
          this.uniforms.dashSize.value = e;
        }
        get dashOffset() {
          return this.uniforms.dashOffset.value;
        }
        set dashOffset(e) {
          this.uniforms.dashOffset.value = e;
        }
        get gapSize() {
          return this.uniforms.gapSize.value;
        }
        set gapSize(e) {
          this.uniforms.gapSize.value = e;
        }
        get opacity() {
          return this.uniforms.opacity.value;
        }
        set opacity(e) {
          this.uniforms && (this.uniforms.opacity.value = e);
        }
        get resolution() {
          return this.uniforms.resolution.value;
        }
        set resolution(e) {
          this.uniforms.resolution.value.copy(e);
        }
        get alphaToCoverage() {
          return "USE_ALPHA_TO_COVERAGE" in this.defines;
        }
        set alphaToCoverage(e) {
          this.defines &&
            ((!0 === e) !== this.alphaToCoverage && (this.needsUpdate = !0),
            !0 === e
              ? ((this.defines.USE_ALPHA_TO_COVERAGE = ""),
                (this.extensions.derivatives = !0))
              : (delete this.defines.USE_ALPHA_TO_COVERAGE,
                (this.extensions.derivatives = !1)));
        }
      }
    },
    57503: function (e, t, n) {
      "use strict";
      let r, i;
      n.d(t, {
        w: function () {
          return w;
        },
      });
      var o = n(91344),
        a = n(13023),
        s = n(2550);
      let l = new o.Vector3(),
        c = new o.Vector3(),
        u = new o.Vector4(),
        d = new o.Vector4(),
        f = new o.Vector4(),
        h = new o.Vector3(),
        p = new o.Matrix4(),
        m = new o.Line3(),
        v = new o.Vector3(),
        g = new o.Box3(),
        b = new o.Sphere(),
        y = new o.Vector4();
      function x(e, t, n) {
        return (
          y.set(0, 0, -t, 1).applyMatrix4(e.projectionMatrix),
          y.multiplyScalar(1 / y.w),
          (y.x = i / n.width),
          (y.y = i / n.height),
          y.applyMatrix4(e.projectionMatrixInverse),
          y.multiplyScalar(1 / y.w),
          Math.abs(Math.max(y.x, y.y))
        );
      }
      class w extends o.Mesh {
        constructor(
          e = new a.z(),
          t = new s.Y({ color: 16777215 * Math.random() })
        ) {
          super(e, t),
            (this.isLineSegments2 = !0),
            (this.type = "LineSegments2");
        }
        computeLineDistances() {
          let e = this.geometry,
            t = e.attributes.instanceStart,
            n = e.attributes.instanceEnd,
            r = new Float32Array(2 * t.count);
          for (let e = 0, i = 0, o = t.count; e < o; e++, i += 2)
            l.fromBufferAttribute(t, e),
              c.fromBufferAttribute(n, e),
              (r[i] = 0 === i ? 0 : r[i - 1]),
              (r[i + 1] = r[i] + l.distanceTo(c));
          let i = new o.InstancedInterleavedBuffer(r, 2, 1);
          return (
            e.setAttribute(
              "instanceDistanceStart",
              new o.InterleavedBufferAttribute(i, 1, 0)
            ),
            e.setAttribute(
              "instanceDistanceEnd",
              new o.InterleavedBufferAttribute(i, 1, 1)
            ),
            this
          );
        }
        raycast(e, t) {
          let n, a;
          let s = this.material.worldUnits,
            l = e.camera;
          null !== l ||
            s ||
            console.error(
              'LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'
            );
          let c = (void 0 !== e.params.Line2 && e.params.Line2.threshold) || 0;
          r = e.ray;
          let y = this.matrixWorld,
            w = this.geometry,
            _ = this.material;
          if (
            ((i = _.linewidth + c),
            null === w.boundingSphere && w.computeBoundingSphere(),
            b.copy(w.boundingSphere).applyMatrix4(y),
            s)
          )
            n = 0.5 * i;
          else {
            let e = Math.max(l.near, b.distanceToPoint(r.origin));
            n = x(l, e, _.resolution);
          }
          if (((b.radius += n), !1 !== r.intersectsSphere(b))) {
            if (
              (null === w.boundingBox && w.computeBoundingBox(),
              g.copy(w.boundingBox).applyMatrix4(y),
              s)
            )
              a = 0.5 * i;
            else {
              let e = Math.max(l.near, g.distanceToPoint(r.origin));
              a = x(l, e, _.resolution);
            }
            g.expandByScalar(a),
              !1 !== r.intersectsBox(g) &&
                (s
                  ? (function (e, t) {
                      let n = e.matrixWorld,
                        a = e.geometry,
                        s = a.attributes.instanceStart,
                        l = a.attributes.instanceEnd,
                        c = Math.min(a.instanceCount, s.count);
                      for (let a = 0; a < c; a++) {
                        m.start.fromBufferAttribute(s, a),
                          m.end.fromBufferAttribute(l, a),
                          m.applyMatrix4(n);
                        let c = new o.Vector3(),
                          u = new o.Vector3();
                        r.distanceSqToSegment(m.start, m.end, u, c),
                          u.distanceTo(c) < 0.5 * i &&
                            t.push({
                              point: u,
                              pointOnLine: c,
                              distance: r.origin.distanceTo(u),
                              object: e,
                              face: null,
                              faceIndex: a,
                              uv: null,
                              uv1: null,
                            });
                      }
                    })(this, t)
                  : (function (e, t, n) {
                      let a = t.projectionMatrix,
                        s = e.material.resolution,
                        l = e.matrixWorld,
                        c = e.geometry,
                        g = c.attributes.instanceStart,
                        b = c.attributes.instanceEnd,
                        y = Math.min(c.instanceCount, g.count),
                        x = -t.near;
                      r.at(1, f),
                        (f.w = 1),
                        f.applyMatrix4(t.matrixWorldInverse),
                        f.applyMatrix4(a),
                        f.multiplyScalar(1 / f.w),
                        (f.x *= s.x / 2),
                        (f.y *= s.y / 2),
                        (f.z = 0),
                        h.copy(f),
                        p.multiplyMatrices(t.matrixWorldInverse, l);
                      for (let t = 0; t < y; t++) {
                        if (
                          (u.fromBufferAttribute(g, t),
                          d.fromBufferAttribute(b, t),
                          (u.w = 1),
                          (d.w = 1),
                          u.applyMatrix4(p),
                          d.applyMatrix4(p),
                          u.z > x && d.z > x)
                        )
                          continue;
                        if (u.z > x) {
                          let e = u.z - d.z,
                            t = (u.z - x) / e;
                          u.lerp(d, t);
                        } else if (d.z > x) {
                          let e = d.z - u.z,
                            t = (d.z - x) / e;
                          d.lerp(u, t);
                        }
                        u.applyMatrix4(a),
                          d.applyMatrix4(a),
                          u.multiplyScalar(1 / u.w),
                          d.multiplyScalar(1 / d.w),
                          (u.x *= s.x / 2),
                          (u.y *= s.y / 2),
                          (d.x *= s.x / 2),
                          (d.y *= s.y / 2),
                          m.start.copy(u),
                          (m.start.z = 0),
                          m.end.copy(d),
                          (m.end.z = 0);
                        let c = m.closestPointToPointParameter(h, !0);
                        m.at(c, v);
                        let f = o.MathUtils.lerp(u.z, d.z, c),
                          y = f >= -1 && f <= 1,
                          w = h.distanceTo(v) < 0.5 * i;
                        if (y && w) {
                          m.start.fromBufferAttribute(g, t),
                            m.end.fromBufferAttribute(b, t),
                            m.start.applyMatrix4(l),
                            m.end.applyMatrix4(l);
                          let i = new o.Vector3(),
                            a = new o.Vector3();
                          r.distanceSqToSegment(m.start, m.end, a, i),
                            n.push({
                              point: a,
                              pointOnLine: i,
                              distance: r.origin.distanceTo(a),
                              object: e,
                              face: null,
                              faceIndex: t,
                              uv: null,
                              uv1: null,
                            });
                        }
                      }
                    })(this, l, t));
          }
        }
      }
    },
    13023: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return a;
        },
      });
      var r = n(91344);
      let i = new r.Box3(),
        o = new r.Vector3();
      class a extends r.InstancedBufferGeometry {
        constructor() {
          super(),
            (this.isLineSegmentsGeometry = !0),
            (this.type = "LineSegmentsGeometry"),
            this.setIndex([
              0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5,
            ]),
            this.setAttribute(
              "position",
              new r.Float32BufferAttribute(
                [
                  -1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1,
                  -1, 0, 1, -1, 0,
                ],
                3
              )
            ),
            this.setAttribute(
              "uv",
              new r.Float32BufferAttribute(
                [-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2],
                2
              )
            );
        }
        applyMatrix4(e) {
          let t = this.attributes.instanceStart,
            n = this.attributes.instanceEnd;
          return (
            void 0 !== t &&
              (t.applyMatrix4(e), n.applyMatrix4(e), (t.needsUpdate = !0)),
            null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this
          );
        }
        setPositions(e) {
          let t;
          e instanceof Float32Array
            ? (t = e)
            : Array.isArray(e) && (t = new Float32Array(e));
          let n = new r.InstancedInterleavedBuffer(t, 6, 1);
          return (
            this.setAttribute(
              "instanceStart",
              new r.InterleavedBufferAttribute(n, 3, 0)
            ),
            this.setAttribute(
              "instanceEnd",
              new r.InterleavedBufferAttribute(n, 3, 3)
            ),
            this.computeBoundingBox(),
            this.computeBoundingSphere(),
            this
          );
        }
        setColors(e) {
          let t;
          e instanceof Float32Array
            ? (t = e)
            : Array.isArray(e) && (t = new Float32Array(e));
          let n = new r.InstancedInterleavedBuffer(t, 6, 1);
          return (
            this.setAttribute(
              "instanceColorStart",
              new r.InterleavedBufferAttribute(n, 3, 0)
            ),
            this.setAttribute(
              "instanceColorEnd",
              new r.InterleavedBufferAttribute(n, 3, 3)
            ),
            this
          );
        }
        fromWireframeGeometry(e) {
          return this.setPositions(e.attributes.position.array), this;
        }
        fromEdgesGeometry(e) {
          return this.setPositions(e.attributes.position.array), this;
        }
        fromMesh(e) {
          return (
            this.fromWireframeGeometry(new r.WireframeGeometry(e.geometry)),
            this
          );
        }
        fromLineSegments(e) {
          let t = e.geometry;
          return this.setPositions(t.attributes.position.array), this;
        }
        computeBoundingBox() {
          null === this.boundingBox && (this.boundingBox = new r.Box3());
          let e = this.attributes.instanceStart,
            t = this.attributes.instanceEnd;
          void 0 !== e &&
            void 0 !== t &&
            (this.boundingBox.setFromBufferAttribute(e),
            i.setFromBufferAttribute(t),
            this.boundingBox.union(i));
        }
        computeBoundingSphere() {
          null === this.boundingSphere &&
            (this.boundingSphere = new r.Sphere()),
            null === this.boundingBox && this.computeBoundingBox();
          let e = this.attributes.instanceStart,
            t = this.attributes.instanceEnd;
          if (void 0 !== e && void 0 !== t) {
            let n = this.boundingSphere.center;
            this.boundingBox.getCenter(n);
            let r = 0;
            for (let i = 0, a = e.count; i < a; i++)
              o.fromBufferAttribute(e, i),
                (r = Math.max(r, n.distanceToSquared(o))),
                o.fromBufferAttribute(t, i),
                (r = Math.max(r, n.distanceToSquared(o)));
            (this.boundingSphere.radius = Math.sqrt(r)),
              isNaN(this.boundingSphere.radius) &&
                console.error(
                  "THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",
                  this
                );
          }
        }
        toJSON() {}
        applyMatrix(e) {
          return (
            console.warn(
              "THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."
            ),
            this.applyMatrix4(e)
          );
        }
      }
    },
    85754: function (e, t, n) {
      "use strict";
      n.d(t, {
        Vs: function () {
          return a;
        },
        n4: function () {
          return i;
        },
      });
      var r = n(91344);
      function i(e, t = !1) {
        let n = null !== e[0].index,
          i = new Set(Object.keys(e[0].attributes)),
          a = new Set(Object.keys(e[0].morphAttributes)),
          s = {},
          l = {},
          c = e[0].morphTargetsRelative,
          u = new r.BufferGeometry(),
          d = 0;
        for (let r = 0; r < e.length; ++r) {
          let o = e[r],
            f = 0;
          if (n !== (null !== o.index))
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
                  r +
                  ". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."
              ),
              null
            );
          for (let e in o.attributes) {
            if (!i.has(e))
              return (
                console.error(
                  "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
                    r +
                    '. All geometries must have compatible attributes; make sure "' +
                    e +
                    '" attribute exists among all geometries, or in none of them.'
                ),
                null
              );
            void 0 === s[e] && (s[e] = []), s[e].push(o.attributes[e]), f++;
          }
          if (f !== i.size)
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
                  r +
                  ". Make sure all geometries have the same number of attributes."
              ),
              null
            );
          if (c !== o.morphTargetsRelative)
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
                  r +
                  ". .morphTargetsRelative must be consistent throughout all geometries."
              ),
              null
            );
          for (let e in o.morphAttributes) {
            if (!a.has(e))
              return (
                console.error(
                  "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
                    r +
                    ".  .morphAttributes must be consistent throughout all geometries."
                ),
                null
              );
            void 0 === l[e] && (l[e] = []), l[e].push(o.morphAttributes[e]);
          }
          if (t) {
            let e;
            if (n) e = o.index.count;
            else {
              if (void 0 === o.attributes.position)
                return (
                  console.error(
                    "THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index " +
                      r +
                      ". The geometry must have either an index or a position attribute"
                  ),
                  null
                );
              e = o.attributes.position.count;
            }
            u.addGroup(d, e, r), (d += e);
          }
        }
        if (n) {
          let t = 0,
            n = [];
          for (let r = 0; r < e.length; ++r) {
            let i = e[r].index;
            for (let e = 0; e < i.count; ++e) n.push(i.getX(e) + t);
            t += e[r].attributes.position.count;
          }
          u.setIndex(n);
        }
        for (let e in s) {
          let t = o(s[e]);
          if (!t)
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " +
                  e +
                  " attribute."
              ),
              null
            );
          u.setAttribute(e, t);
        }
        for (let e in l) {
          let t = l[e][0].length;
          if (0 === t) break;
          (u.morphAttributes = u.morphAttributes || {}),
            (u.morphAttributes[e] = []);
          for (let n = 0; n < t; ++n) {
            let t = [];
            for (let r = 0; r < l[e].length; ++r) t.push(l[e][r][n]);
            let r = o(t);
            if (!r)
              return (
                console.error(
                  "THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the " +
                    e +
                    " morphAttribute."
                ),
                null
              );
            u.morphAttributes[e].push(r);
          }
        }
        return u;
      }
      function o(e) {
        let t, n, i;
        let o = -1,
          a = 0;
        for (let r = 0; r < e.length; ++r) {
          let s = e[r];
          if (s.isInterleavedBufferAttribute)
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."
              ),
              null
            );
          if (
            (void 0 === t && (t = s.array.constructor),
            t !== s.array.constructor)
          )
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."
              ),
              null
            );
          if ((void 0 === n && (n = s.itemSize), n !== s.itemSize))
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."
              ),
              null
            );
          if ((void 0 === i && (i = s.normalized), i !== s.normalized))
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."
              ),
              null
            );
          if ((-1 === o && (o = s.gpuType), o !== s.gpuType))
            return (
              console.error(
                "THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."
              ),
              null
            );
          a += s.array.length;
        }
        let s = new t(a),
          l = 0;
        for (let t = 0; t < e.length; ++t)
          s.set(e[t].array, l), (l += e[t].array.length);
        let c = new r.BufferAttribute(s, n, i);
        return void 0 !== o && (c.gpuType = o), c;
      }
      function a(e, t) {
        if (t === r.TrianglesDrawMode)
          return (
            console.warn(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."
            ),
            e
          );
        if (t !== r.TriangleFanDrawMode && t !== r.TriangleStripDrawMode)
          return (
            console.error(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
              t
            ),
            e
          );
        {
          let n = e.getIndex();
          if (null === n) {
            let t = [],
              r = e.getAttribute("position");
            if (void 0 === r)
              return (
                console.error(
                  "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."
                ),
                e
              );
            for (let e = 0; e < r.count; e++) t.push(e);
            e.setIndex(t), (n = e.getIndex());
          }
          let i = n.count - 2,
            o = [];
          if (t === r.TriangleFanDrawMode)
            for (let e = 1; e <= i; e++)
              o.push(n.getX(0)), o.push(n.getX(e)), o.push(n.getX(e + 1));
          else
            for (let e = 0; e < i; e++)
              e % 2 == 0
                ? (o.push(n.getX(e)),
                  o.push(n.getX(e + 1)),
                  o.push(n.getX(e + 2)))
                : (o.push(n.getX(e + 2)),
                  o.push(n.getX(e + 1)),
                  o.push(n.getX(e)));
          o.length / 3 !== i &&
            console.error(
              "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."
            );
          let a = e.clone();
          return a.setIndex(o), a.clearGroups(), a;
        }
      }
    },
    86620: function (e, t, n) {
      "use strict";
      n.d(t, {
        Id: function () {
          return s;
        },
        ZY: function () {
          return l;
        },
        iB: function () {
          return a;
        },
        t7: function () {
          return o;
        },
      });
      let r = Math.PI / 180,
        i = 180 / Math.PI;
      function o(e, t, n) {
        return (1 - n) * e + n * t;
      }
      function a(e, t, n) {
        return e <= t
          ? 0
          : e >= n
          ? 1
          : (e = (e - t) / (n - t)) * e * e * (e * (6 * e - 15) + 10);
      }
      function s(e) {
        return e * r;
      }
      function l(e) {
        return e * i;
      }
    },
    66593: function (e, t, n) {
      "use strict";
      n.d(t, {
        CO: function () {
          return u;
        },
        Ld: function () {
          return c;
        },
        sj: function () {
          return l;
        },
      });
      var r = n(20498);
      let i = (e) => "object" == typeof e && null !== e,
        o = new WeakMap(),
        a = new WeakSet(),
        [s] = ((
          e = Object.is,
          t = (e, t) => new Proxy(e, t),
          n = (e) =>
            i(e) &&
            !a.has(e) &&
            (Array.isArray(e) || !(Symbol.iterator in e)) &&
            !(e instanceof WeakMap) &&
            !(e instanceof WeakSet) &&
            !(e instanceof Error) &&
            !(e instanceof Number) &&
            !(e instanceof Date) &&
            !(e instanceof String) &&
            !(e instanceof RegExp) &&
            !(e instanceof ArrayBuffer),
          s = (e) => {
            switch (e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
              default:
                throw e;
            }
          },
          l = new WeakMap(),
          c = (e, t, n = s) => {
            let i = l.get(e);
            if ((null == i ? void 0 : i[0]) === t) return i[1];
            let u = Array.isArray(e)
              ? []
              : Object.create(Object.getPrototypeOf(e));
            return (
              (0, r.jc)(u, !0),
              l.set(e, [t, u]),
              Reflect.ownKeys(e).forEach((t) => {
                if (Object.getOwnPropertyDescriptor(u, t)) return;
                let i = Reflect.get(e, t),
                  { enumerable: s } = Reflect.getOwnPropertyDescriptor(e, t),
                  l = { value: i, enumerable: s, configurable: !0 };
                if (a.has(i)) (0, r.jc)(i, !1);
                else if (i instanceof Promise)
                  delete l.value, (l.get = () => n(i));
                else if (o.has(i)) {
                  let [e, t] = o.get(i);
                  l.value = c(e, t(), n);
                }
                Object.defineProperty(u, t, l);
              }),
              Object.preventExtensions(u)
            );
          },
          u = new WeakMap(),
          d = [1, 1],
          f = (s) => {
            if (!i(s)) throw Error("object required");
            let l = u.get(s);
            if (l) return l;
            let h = d[0],
              p = new Set(),
              m = (e, t = ++d[0]) => {
                h !== t && ((h = t), p.forEach((n) => n(e, t)));
              },
              v = d[1],
              g = (e = ++d[1]) => (
                v === e ||
                  p.size ||
                  ((v = e),
                  y.forEach(([t]) => {
                    let n = t[1](e);
                    n > h && (h = n);
                  })),
                h
              ),
              b = (e) => (t, n) => {
                let r = [...t];
                (r[1] = [e, ...r[1]]), m(r, n);
              },
              y = new Map(),
              x = (e, t) => {
                if (y.has(e)) throw Error("prop listener already exists");
                if (p.size) {
                  let n = t[3](b(e));
                  y.set(e, [t, n]);
                } else y.set(e, [t]);
              },
              w = (e) => {
                var t;
                let n = y.get(e);
                n && (y.delete(e), null == (t = n[1]) || t.call(n));
              },
              _ = (e) => {
                p.add(e),
                  1 === p.size &&
                    y.forEach(([e, t], n) => {
                      if (t) throw Error("remove already exists");
                      let r = e[3](b(n));
                      y.set(n, [e, r]);
                    });
                let t = () => {
                  p.delete(e),
                    0 === p.size &&
                      y.forEach(([e, t], n) => {
                        t && (t(), y.set(n, [e]));
                      });
                };
                return t;
              },
              k = Array.isArray(s)
                ? []
                : Object.create(Object.getPrototypeOf(s)),
              S = {
                deleteProperty(e, t) {
                  let n = Reflect.get(e, t);
                  w(t);
                  let r = Reflect.deleteProperty(e, t);
                  return r && m(["delete", [t], n]), r;
                },
                set(t, s, l, c) {
                  let d = Reflect.has(t, s),
                    h = Reflect.get(t, s, c);
                  if (d && (e(h, l) || (u.has(l) && e(h, u.get(l))))) return !0;
                  w(s), i(l) && (l = (0, r.o5)(l) || l);
                  let p = l;
                  if (l instanceof Promise)
                    l.then((e) => {
                      (l.status = "fulfilled"),
                        (l.value = e),
                        m(["resolve", [s], e]);
                    }).catch((e) => {
                      (l.status = "rejected"),
                        (l.reason = e),
                        m(["reject", [s], e]);
                    });
                  else {
                    !o.has(l) && n(l) && (p = f(l));
                    let e = !a.has(p) && o.get(p);
                    e && x(s, e);
                  }
                  return Reflect.set(t, s, p, c), m(["set", [s], l, h]), !0;
                },
              },
              P = t(k, S);
            u.set(s, P);
            let j = [k, g, c, _];
            return (
              o.set(P, j),
              Reflect.ownKeys(s).forEach((e) => {
                let t = Object.getOwnPropertyDescriptor(s, e);
                "value" in t &&
                  ((P[e] = s[e]), delete t.value, delete t.writable),
                  Object.defineProperty(k, e, t);
              }),
              P
            );
          }
        ) => [f, o, a, e, t, n, s, l, c, u, d])();
      function l(e = {}) {
        return s(e);
      }
      function c(e, t, n) {
        let r;
        let i = o.get(e);
        i || console.warn("Please use proxy object");
        let a = [],
          s = i[3],
          l = !1,
          c = s((e) => {
            if ((a.push(e), n)) {
              t(a.splice(0));
              return;
            }
            r ||
              (r = Promise.resolve().then(() => {
                (r = void 0), l && t(a.splice(0));
              }));
          });
        return (
          (l = !0),
          () => {
            (l = !1), c();
          }
        );
      }
      function u(e, t) {
        let n = o.get(e);
        n || console.warn("Please use proxy object");
        let [r, i, a] = n;
        return a(r, i(), t);
      }
    },
  },
]);
