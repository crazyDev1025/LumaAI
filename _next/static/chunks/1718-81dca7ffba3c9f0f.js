(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1718],
  {
    91718: function (t) {
      var i;
      (i = function () {
        function t() {
          return (t =
            Object.assign ||
            function (t) {
              for (var i = 1; i < arguments.length; i++) {
                var r = arguments[i];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }).apply(this, arguments);
        }
        function i(t, i) {
          (null == i || i > t.length) && (i = t.length);
          for (var r = 0, n = Array(i); r < i; r++) n[r] = t[r];
          return n;
        }
        var r = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
        function n(t) {
          return ("image-" + t.split("/").slice(-1)[0]).replace(
            /\.([a-z]+)$/,
            "-$1"
          );
        }
        var o = [
            ["width", "w"],
            ["height", "h"],
            ["format", "fm"],
            ["download", "dl"],
            ["blur", "blur"],
            ["sharpen", "sharp"],
            ["invert", "invert"],
            ["orientation", "or"],
            ["minHeight", "min-h"],
            ["maxHeight", "max-h"],
            ["minWidth", "min-w"],
            ["maxWidth", "max-w"],
            ["quality", "q"],
            ["fit", "fit"],
            ["crop", "crop"],
            ["saturation", "sat"],
            ["auto", "auto"],
            ["dpr", "dpr"],
            ["pad", "pad"],
            ["frame", "frame"],
          ],
          e = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
          a = [
            "top",
            "bottom",
            "left",
            "right",
            "center",
            "focalpoint",
            "entropy",
          ],
          h = ["format"],
          s = (function () {
            function s(i, r) {
              (this.options = void 0),
                (this.options = i
                  ? t({}, i.options || {}, r || {})
                  : t({}, r || {}));
            }
            var p = s.prototype;
            return (
              (p.withOptions = function (r) {
                var n = r.baseUrl || this.options.baseUrl,
                  e = { baseUrl: n };
                for (var a in r)
                  r.hasOwnProperty(a) &&
                    (e[
                      (function (t) {
                        for (
                          var r,
                            n = (function (t, r) {
                              var n =
                                ("undefined" != typeof Symbol &&
                                  t[Symbol.iterator]) ||
                                t["@@iterator"];
                              if (n) return (n = n.call(t)).next.bind(n);
                              if (
                                Array.isArray(t) ||
                                (n = (function (t, r) {
                                  if (t) {
                                    if ("string" == typeof t)
                                      return i(t, void 0);
                                    var n = Object.prototype.toString
                                      .call(t)
                                      .slice(8, -1);
                                    if (
                                      ("Object" === n &&
                                        t.constructor &&
                                        (n = t.constructor.name),
                                      "Map" === n || "Set" === n)
                                    )
                                      return Array.from(t);
                                    if (
                                      "Arguments" === n ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                        n
                                      )
                                    )
                                      return i(t, void 0);
                                  }
                                })(t))
                              ) {
                                n && (t = n);
                                var o = 0;
                                return function () {
                                  return o >= t.length
                                    ? { done: !0 }
                                    : { done: !1, value: t[o++] };
                                };
                              }
                              throw TypeError(
                                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                              );
                            })(o);
                          !(r = n()).done;

                        ) {
                          var e = r.value,
                            a = e[0],
                            h = e[1];
                          if (t === a || t === h) return a;
                        }
                        return t;
                      })(a)
                    ] = r[a]);
                return new s(this, t({ baseUrl: n }, e));
              }),
              (p.image = function (t) {
                return this.withOptions({ source: t });
              }),
              (p.dataset = function (t) {
                return this.withOptions({ dataset: t });
              }),
              (p.projectId = function (t) {
                return this.withOptions({ projectId: t });
              }),
              (p.bg = function (t) {
                return this.withOptions({ bg: t });
              }),
              (p.dpr = function (t) {
                return this.withOptions(t && 1 !== t ? { dpr: t } : {});
              }),
              (p.width = function (t) {
                return this.withOptions({ width: t });
              }),
              (p.height = function (t) {
                return this.withOptions({ height: t });
              }),
              (p.focalPoint = function (t, i) {
                return this.withOptions({ focalPoint: { x: t, y: i } });
              }),
              (p.maxWidth = function (t) {
                return this.withOptions({ maxWidth: t });
              }),
              (p.minWidth = function (t) {
                return this.withOptions({ minWidth: t });
              }),
              (p.maxHeight = function (t) {
                return this.withOptions({ maxHeight: t });
              }),
              (p.minHeight = function (t) {
                return this.withOptions({ minHeight: t });
              }),
              (p.size = function (t, i) {
                return this.withOptions({ width: t, height: i });
              }),
              (p.blur = function (t) {
                return this.withOptions({ blur: t });
              }),
              (p.sharpen = function (t) {
                return this.withOptions({ sharpen: t });
              }),
              (p.rect = function (t, i, r, n) {
                return this.withOptions({
                  rect: { left: t, top: i, width: r, height: n },
                });
              }),
              (p.format = function (t) {
                return this.withOptions({ format: t });
              }),
              (p.invert = function (t) {
                return this.withOptions({ invert: t });
              }),
              (p.orientation = function (t) {
                return this.withOptions({ orientation: t });
              }),
              (p.quality = function (t) {
                return this.withOptions({ quality: t });
              }),
              (p.forceDownload = function (t) {
                return this.withOptions({ download: t });
              }),
              (p.flipHorizontal = function () {
                return this.withOptions({ flipHorizontal: !0 });
              }),
              (p.flipVertical = function () {
                return this.withOptions({ flipVertical: !0 });
              }),
              (p.ignoreImageParams = function () {
                return this.withOptions({ ignoreImageParams: !0 });
              }),
              (p.fit = function (t) {
                if (-1 === e.indexOf(t))
                  throw Error('Invalid fit mode "' + t + '"');
                return this.withOptions({ fit: t });
              }),
              (p.crop = function (t) {
                if (-1 === a.indexOf(t))
                  throw Error('Invalid crop mode "' + t + '"');
                return this.withOptions({ crop: t });
              }),
              (p.saturation = function (t) {
                return this.withOptions({ saturation: t });
              }),
              (p.auto = function (t) {
                if (-1 === h.indexOf(t))
                  throw Error('Invalid auto mode "' + t + '"');
                return this.withOptions({ auto: t });
              }),
              (p.pad = function (t) {
                return this.withOptions({ pad: t });
              }),
              (p.vanityName = function (t) {
                return this.withOptions({ vanityName: t });
              }),
              (p.frame = function (t) {
                if (1 !== t) throw Error('Invalid frame value "' + t + '"');
                return this.withOptions({ frame: t });
              }),
              (p.url = function () {
                return (function (i) {
                  var e = t({}, i || {}),
                    a = e.source;
                  delete e.source;
                  var h = (function (i) {
                    var r;
                    if (!i) return null;
                    if ("string" == typeof i && /^https?:\/\//.test("" + i))
                      r = { asset: { _ref: n(i) } };
                    else if ("string" == typeof i) r = { asset: { _ref: i } };
                    else if (i && "string" == typeof i._ref) r = { asset: i };
                    else if (i && "string" == typeof i._id)
                      r = { asset: { _ref: i._id || "" } };
                    else if (i && i.asset && "string" == typeof i.asset.url)
                      r = { asset: { _ref: n(i.asset.url) } };
                    else {
                      if ("object" != typeof i.asset) return null;
                      r = t({}, i);
                    }
                    return (
                      i.crop && (r.crop = i.crop),
                      i.hotspot && (r.hotspot = i.hotspot),
                      (function (i) {
                        if (i.crop && i.hotspot) return i;
                        var r = t({}, i);
                        return (
                          r.crop ||
                            (r.crop = { left: 0, top: 0, bottom: 0, right: 0 }),
                          r.hotspot ||
                            (r.hotspot = {
                              x: 0.5,
                              y: 0.5,
                              height: 1,
                              width: 1,
                            }),
                          r
                        );
                      })(r)
                    );
                  })(a);
                  if (!h)
                    throw Error(
                      "Unable to resolve image URL from source (" +
                        JSON.stringify(a) +
                        ")"
                    );
                  var s = (function (t) {
                      var i = t.split("-"),
                        n = i[1],
                        o = i[2],
                        e = i[3];
                      if (!n || !o || !e)
                        throw Error(
                          "Malformed asset _ref '" +
                            t +
                            "'. Expected an id like \"" +
                            r +
                            '".'
                        );
                      var a = o.split("x"),
                        h = a[0],
                        s = a[1],
                        p = +h,
                        u = +s;
                      if (!(isFinite(p) && isFinite(u)))
                        throw Error(
                          "Malformed asset _ref '" +
                            t +
                            "'. Expected an id like \"" +
                            r +
                            '".'
                        );
                      return { id: n, width: p, height: u, format: e };
                    })(h.asset._ref || h.asset._id || ""),
                    p = Math.round(h.crop.left * s.width),
                    u = Math.round(h.crop.top * s.height),
                    f = {
                      left: p,
                      top: u,
                      width: Math.round(s.width - h.crop.right * s.width - p),
                      height: Math.round(
                        s.height - h.crop.bottom * s.height - u
                      ),
                    },
                    c = (h.hotspot.height * s.height) / 2,
                    l = (h.hotspot.width * s.width) / 2,
                    d = h.hotspot.x * s.width,
                    w = h.hotspot.y * s.height;
                  return (
                    e.rect ||
                      e.focalPoint ||
                      e.ignoreImageParams ||
                      e.crop ||
                      (e = t(
                        {},
                        e,
                        (function (t, i) {
                          var r,
                            n = i.width,
                            o = i.height;
                          if (!(n && o))
                            return { width: n, height: o, rect: t.crop };
                          var e = t.crop,
                            a = t.hotspot,
                            h = n / o;
                          if (e.width / e.height > h) {
                            var s = Math.round(e.height),
                              p = Math.round(s * h),
                              u = Math.max(0, Math.round(e.top)),
                              f = Math.max(
                                0,
                                Math.round(
                                  Math.round((a.right - a.left) / 2 + a.left) -
                                    p / 2
                                )
                              );
                            f < e.left
                              ? (f = e.left)
                              : f + p > e.left + e.width &&
                                (f = e.left + e.width - p),
                              (r = { left: f, top: u, width: p, height: s });
                          } else {
                            var c = e.width,
                              l = Math.round(c / h),
                              d = Math.max(0, Math.round(e.left)),
                              w = Math.max(
                                0,
                                Math.round(
                                  Math.round((a.bottom - a.top) / 2 + a.top) -
                                    l / 2
                                )
                              );
                            w < e.top
                              ? (w = e.top)
                              : w + l > e.top + e.height &&
                                (w = e.top + e.height - l),
                              (r = { left: d, top: w, width: c, height: l });
                          }
                          return { width: n, height: o, rect: r };
                        })(
                          {
                            crop: f,
                            hotspot: {
                              left: d - l,
                              top: w - c,
                              right: d + l,
                              bottom: w + c,
                            },
                          },
                          e
                        )
                      )),
                    (function (t) {
                      var i = (t.baseUrl || "https://cdn.sanity.io").replace(
                          /\/+$/,
                          ""
                        ),
                        r = t.vanityName ? "/" + t.vanityName : "",
                        n =
                          t.asset.id +
                          "-" +
                          t.asset.width +
                          "x" +
                          t.asset.height +
                          "." +
                          t.asset.format +
                          r,
                        e =
                          i +
                          "/images/" +
                          t.projectId +
                          "/" +
                          t.dataset +
                          "/" +
                          n,
                        a = [];
                      if (t.rect) {
                        var h = t.rect,
                          s = h.left,
                          p = h.top,
                          u = h.width,
                          f = h.height;
                        (0 !== s ||
                          0 !== p ||
                          f !== t.asset.height ||
                          u !== t.asset.width) &&
                          a.push("rect=" + s + "," + p + "," + u + "," + f);
                      }
                      t.bg && a.push("bg=" + t.bg),
                        t.focalPoint &&
                          (a.push("fp-x=" + t.focalPoint.x),
                          a.push("fp-y=" + t.focalPoint.y));
                      var c = [t.flipHorizontal && "h", t.flipVertical && "v"]
                        .filter(Boolean)
                        .join("");
                      return (c && a.push("flip=" + c),
                      o.forEach(function (i) {
                        var r = i[0],
                          n = i[1];
                        void 0 !== t[r]
                          ? a.push(n + "=" + encodeURIComponent(t[r]))
                          : void 0 !== t[n] &&
                            a.push(n + "=" + encodeURIComponent(t[n]));
                      }),
                      0 === a.length)
                        ? e
                        : e + "?" + a.join("&");
                    })(t({}, e, { asset: s }))
                  );
                })(this.options);
              }),
              (p.toString = function () {
                return this.url();
              }),
              s
            );
          })();
        return function (t) {
          if (t && "config" in t && "function" == typeof t.config) {
            var i = t.config(),
              r = i.apiHost,
              n = i.projectId,
              o = i.dataset;
            return new s(null, {
              baseUrl: (r || "https://api.sanity.io").replace(
                /^https:\/\/api\./,
                "https://cdn."
              ),
              projectId: n,
              dataset: o,
            });
          }
          if (t && "clientConfig" in t && "object" == typeof t.clientConfig) {
            var e = t.clientConfig,
              a = e.apiHost,
              h = e.projectId,
              p = e.dataset;
            return new s(null, {
              baseUrl: (a || "https://api.sanity.io").replace(
                /^https:\/\/api\./,
                "https://cdn."
              ),
              projectId: h,
              dataset: p,
            });
          }
          return new s(null, t || {});
        };
      }),
        (t.exports = i());
    },
  },
]);
