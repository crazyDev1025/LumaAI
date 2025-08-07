(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3699],
  {
    96416: function () {},
    95211: function (e, t) {
      "use strict";
      let n = {
        landing: "/dream-machine",
        pricing: "/dream-machine/pricing",
        creations: "/dream-machine/legacy-creations",
        singleCreation: (e) => "/dream-machine/legacy-creations/".concat(e),
        account: "/dream-machine/legacy-account",
        rate: "/dream-machine/rate",
        apiLanding: "#",
        apiKeys: "/api/keys",
        apiPricing: "/api/pricing",
        apiDashboard: "/api/dashboard",
        businessTerms: "/api/terms",
        apiDocs: "https://docs.lumalabs.ai/docs/welcome",
        apiTalkToUs: "/contact-sales",
        status: "https://status.lumalabs.ai/",
        learning: "/learning-hub",
        photon: "/photon",
        ray: "/ray2",
        enterprise: "/enterprise",
      };
      t.Z = n;
    },
    9910: function (e, t, n) {
      "use strict";
      n.d(t, {
        CI: function () {
          return r;
        },
        F8: function () {
          return c;
        },
        G$: function () {
          return o;
        },
        Mn: function () {
          return h;
        },
        V5: function () {
          return i;
        },
        WA: function () {
          return u;
        },
        WN: function () {
          return s;
        },
        hu: function () {
          return p;
        },
        kz: function () {
          return a;
        },
        me: function () {
          return d;
        },
        sk: function () {
          return l;
        },
      });
      let r = async (e, t) => {
          try {
            await fetch(
              ""
                .concat(
                  "https://webapp.engineeringlumalabs.com",
                  "/api/v3/creations/like?uuid="
                )
                .concat(e, "&add=")
                .concat(t ? "true" : "false"),
              { method: "POST" }
            ),
              localStorage.setItem("LUMA_GENIE_".concat(e), "true");
          } catch (e) {
            console.error(
              "Error "
                .concat(t ? "liking" : "disliking", " creation: ")
                .concat(e)
            );
          }
        },
        i = (e) => {
          var t;
          return (
            "true" ===
            (null !== (t = localStorage.getItem("LUMA_GENIE_".concat(e))) &&
            void 0 !== t
              ? t
              : "false")
          );
        },
        a = (e, t) => {
          var n, r, i;
          return null !==
            (i =
              null == e
                ? void 0
                : null === (r = e.output) || void 0 === r
                ? void 0
                : null ===
                    (n = r.find((e) => {
                      var n;
                      return null == e
                        ? void 0
                        : null === (n = e.file_url) || void 0 === n
                        ? void 0
                        : n.endsWith("." + t);
                    })) || void 0 === n
                ? void 0
                : n.file_url) && void 0 !== i
            ? i
            : void 0;
        },
        o = (e) => {
          var t, n;
          return null !==
            (n =
              null == e
                ? void 0
                : null === (t = e.input) || void 0 === t
                ? void 0
                : t.text) && void 0 !== n
            ? n
            : void 0;
        },
        s = (e) => {
          var t, n;
          return null !==
            (n =
              null == e
                ? void 0
                : null === (t = e.username) || void 0 === t
                ? void 0
                : t.replace("_discord", "")) && void 0 !== n
            ? n
            : void 0;
        },
        l = async (e) => {
          await fetch(
            ""
              .concat(
                "https://webapp.engineeringlumalabs.com",
                "/api/v3/creations/view?uuid="
              )
              .concat(e),
            { method: "POST" }
          );
        },
        u = async (e) => {
          await fetch(
            ""
              .concat(
                "https://webapp.engineeringlumalabs.com",
                "/api/v3/creations/download?uuid="
              )
              .concat(e),
            { method: "POST" }
          );
        },
        c = async (e) => {
          await fetch(
            ""
              .concat(
                "https://webapp.engineeringlumalabs.com",
                "/api/v3/creations/share?uuid="
              )
              .concat(e),
            { method: "POST" }
          );
        },
        d = async (e) => {
          let t = await fetch(
            ""
              .concat(
                "https://webapp.engineeringlumalabs.com",
                "/api/v3/creations/uuid/"
              )
              .concat(e)
          );
          return (await t.json()).response;
        },
        h = (e) => {
          let t = parseInt(e.replace("#", ""), 16);
          return (
            "#" +
            (
              (Math.round(0.8 * ((t >> 16) & 255)) << 16) +
              (Math.round(0.8 * ((t >> 8) & 255)) << 8) +
              Math.round(0.8 * (255 & t))
            )
              .toString(16)
              .padStart(6, "0")
          );
        },
        p = [
          { title: ".fbx", config: { export_fbx: !0 } },
          { title: ".obj", config: { export_obj: !0 } },
          { title: ".glb", config: {} },
          { title: ".usdz", config: { export_usdz: !0 } },
          { title: ".blend", config: { export_blend: !0 } },
          { title: ".stl", config: { export_stl: !0 } },
        ];
    },
    82306: function (e, t, n) {
      "use strict";
      var r = n(20209),
        i = n(95004),
        a = n(45313);
      let o = (e) => {
        let {
          children: t,
          className: n,
          style: o,
          show: s = !0,
          exitZeroDur: l = !1,
          ...u
        } = e;
        return (0, r.jsx)(i.M, {
          initial: !1,
          exitBeforeEnter: !1,
          children:
            s &&
            (0, r.jsx)(a.E.div, {
              ...u,
              className: n,
              style: o,
              initial: { scale: 0, opacity: 0 },
              animate: { scale: 1, opacity: 1, transition: { duration: 0.25 } },
              exit: {
                scale: 0,
                opacity: 0,
                transition: { duration: l ? 0 : 0.25 },
              },
              children: t,
            }),
        });
      };
      t.Z = o;
    },
    88728: function (e, t, n) {
      "use strict";
      var r = n(20209),
        i = n(83112),
        a = n(98869),
        o = n(95834),
        s = n(40660);
      let l = () => {
        let e = () => {
          let e = (0, o.jl)();
          (0, s.Cv)("Checking if logged in:", e), (a.Mz.loggedIn = e);
        };
        return (
          (0, i.useEffect)(() => {
            e();
          }),
          (0, i.useEffect)(
            () => (
              window.addEventListener("focus", e),
              window.addEventListener("blur", e),
              document.addEventListener("visibilitychange", e),
              () => {
                window.removeEventListener("focus", e),
                  window.removeEventListener("blur", e),
                  document.removeEventListener("visibilitychange", e);
              }
            ),
            []
          ),
          (0, r.jsx)(r.Fragment, {})
        );
      };
      t.Z = l;
    },
    49975: function (e, t, n) {
      "use strict";
      n(20209);
    },
    93766: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return s;
        },
      });
      var r = n(91344),
        i = n(12586),
        a = n(17912),
        o = n(47717);
      class s extends r.PerspectiveCamera {
        get focalLength() {
          return this.getFocalLength();
        }
        set focalLength(e) {
          this.setFocalLength(e);
        }
        updateCartesianFromOrbit() {
          (0, i.Q6)(this, this.up, this);
        }
        updateOrbitFromCartesian() {
          (0, i.Zy)(this, this.up, this);
        }
        updateMatrix() {
          this.useOrbitTransform
            ? this.updateCartesianFromOrbit()
            : this.updateOrbitFromCartesian(),
            super.updateMatrix();
        }
        clone(e) {
          let t = super.clone(e);
          return t.copy(this), t;
        }
        setFromKeyframe(e) {
          let t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            n = {
              azimuth: e.azimuth,
              elevation: e.elevation,
              radius: e.radius,
              lookAtRelativeQuaternion: e.lookAtRelativeQuaternion,
              focalLength: e.focalLength,
              position: e.position,
              quaternion: e.quaternion,
              target: e.target,
              smoothness: e.smoothness,
              keyframeType: e.keyframeType,
            };
          this.position.copy(n.position),
            this.quaternion.copy(n.quaternion),
            this.target.copy(n.target),
            (this.azimuth = n.azimuth),
            (this.elevation = n.elevation),
            (this.radius = n.radius),
            this.lookAtRelativeQuaternion.copy(n.lookAtRelativeQuaternion),
            t && (this.focalLength = n.focalLength),
            this.animator.removeAll();
        }
        copy(e, t) {
          return (
            super.copy(e, t),
            (this.aspect = e.aspect),
            e instanceof s &&
              ((this.useOrbitTransform = e.useOrbitTransform),
              this.target.copy(e.target),
              (this.azimuth = e.azimuth),
              (this.elevation = e.elevation),
              (this.radius = e.radius),
              this.lookAtRelativeQuaternion.copy(e.lookAtRelativeQuaternion)),
            this.animator.removeAll(),
            this.updateMatrix(),
            this
          );
        }
        isEqual(e) {
          return (
            this.useOrbitTransform === e.useOrbitTransform &&
            this.fov === e.fov &&
            (this.useOrbitTransform
              ? this.target.equals(e.target) &&
                this.azimuth === e.azimuth &&
                this.elevation === e.elevation &&
                this.radius === e.radius &&
                this.lookAtRelativeQuaternion.equals(e.lookAtRelativeQuaternion)
              : this.position.equals(e.position) &&
                this.quaternion.equals(e.quaternion))
          );
        }
        animationTick() {
          this.animator.tick();
        }
        animateTo(e, t) {
          let n =
              null != t
                ? t > 0
                  ? a.A.Exponential(t)
                  : null
                : this.springStyle,
            r = this.animator;
          r.springTo(this, "position", e.position, n),
            r.springTo(this, "target", e.target, n),
            r.springTo(this, "azimuth", e.azimuth, n),
            r.springTo(this, "elevation", e.elevation, n),
            r.springTo(this, "radius", e.radius, n),
            r.springTo(this, "fov", e.fov, n),
            r.springTo(this, "quaternion", e.quaternion, n, o.h.YawPitchRoll),
            r.springTo(
              this,
              "lookAtRelativeQuaternion",
              e.lookAtRelativeQuaternion,
              n,
              o.h.YawPitchRoll
            ),
            (this.useOrbitTransform = e.useOrbitTransform);
        }
        constructor(e, t, n, i) {
          super(e, t, n, i),
            (this.springStyle = a.A.Exponential(0.2)),
            (this.animator = new o.I()),
            (this.useOrbitTransform = !1),
            (this.target = new r.Vector3()),
            (this.azimuth = 0),
            (this.elevation = 0),
            (this.radius = 1),
            (this.lookAtRelativeQuaternion = new r.Quaternion()),
            this.animator.onAfterStep.addListener((e) => {
              this.updateMatrix();
            });
        }
      }
    },
    59076: function (e, t, n) {
      "use strict";
      let r, i, a;
      n.r(t),
        n.d(t, {
          Editor: function () {
            return nD;
          },
          SLFEditMode: function () {
            return m;
          },
          default: function () {
            return nL;
          },
        });
      var o,
        s,
        l,
        u,
        c,
        d,
        h,
        p,
        m,
        f = n(20209),
        g = n(83112),
        v = n(91344),
        y = n(18776),
        x = n(53990),
        w = n(81909),
        b = n(2550),
        C = n(14819),
        M = n(93036);
      class _ extends v.Loader {
        load(e, t, n, r) {
          let i = this,
            a = "" === i.path ? v.LoaderUtils.extractUrlBase(e) : i.path,
            o = new v.FileLoader(this.manager);
          o.setPath(i.path),
            o.setResponseType("arraybuffer"),
            o.setRequestHeader(i.requestHeader),
            o.setWithCredentials(i.withCredentials),
            o.load(
              e,
              function (n) {
                try {
                  t(i.parse(n, a));
                } catch (t) {
                  r ? r(t) : console.error(t), i.manager.itemError(e);
                }
              },
              n,
              r
            );
        }
        parse(e, t) {
          if (I(e)) r = new P().parse(e);
          else {
            let t = U(e);
            if (!T(t)) throw Error("THREE.FBXLoader: Unknown format.");
            if (7e3 > z(t))
              throw Error(
                "THREE.FBXLoader: FBX version not supported, FileVersion: " +
                  z(t)
              );
            r = new E().parse(t);
          }
          return {
            sceneGraph: new S(
              new v.TextureLoader(this.manager)
                .setPath(this.resourcePath || t)
                .setCrossOrigin(this.crossOrigin),
              this.manager
            ).parse(r),
            fbxTree: r,
          };
        }
        constructor(e) {
          super(e);
        }
      }
      class S {
        parse() {
          i = this.parseConnections();
          let e = this.parseImages(),
            t = this.parseTextures(e),
            n = this.parseMaterials(t),
            r = this.parseDeformers(),
            o = new j().parse(r);
          return this.parseScene(r, o, n), a;
        }
        parseConnections() {
          let e = new Map();
          return (
            "Connections" in r &&
              r.Connections.connections.forEach(function (t) {
                let n = t[0],
                  r = t[1],
                  i = t[2];
                e.has(n) || e.set(n, { parents: [], children: [] });
                let a = { ID: r, relationship: i };
                e.get(n).parents.push(a),
                  e.has(r) || e.set(r, { parents: [], children: [] });
                let o = { ID: n, relationship: i };
                e.get(r).children.push(o);
              }),
            e
          );
        }
        parseImages() {
          let e = {},
            t = {};
          if ("Video" in r.Objects) {
            let n = r.Objects.Video;
            for (let r in n) {
              let i = n[r];
              if (
                ((e[parseInt(r)] = i.RelativeFilename || i.Filename),
                "Content" in i)
              ) {
                let e =
                    i.Content instanceof ArrayBuffer &&
                    i.Content.byteLength > 0,
                  a = "string" == typeof i.Content && "" !== i.Content;
                if (e || a) {
                  let e = this.parseImage(n[r]);
                  t[i.RelativeFilename || i.Filename] = e;
                }
              }
            }
          }
          for (let n in e) {
            let r = e[n];
            void 0 !== t[r] ? (e[n] = t[r]) : (e[n] = e[n].split("\\").pop());
          }
          return e;
        }
        parseImage(e) {
          let t;
          let n = e.Content,
            r = e.RelativeFilename || e.Filename,
            i = r.slice(r.lastIndexOf(".") + 1).toLowerCase();
          switch (i) {
            case "bmp":
              t = "image/bmp";
              break;
            case "jpg":
            case "jpeg":
              t = "image/jpeg";
              break;
            case "png":
              t = "image/png";
              break;
            case "tif":
              t = "image/tiff";
              break;
            case "tga":
              null === this.manager.getHandler(".tga") &&
                console.warn("FBXLoader: TGA loader not found, skipping ", r),
                (t = "image/tga");
              break;
            default:
              console.warn(
                'FBXLoader: Image type "' + i + '" is not supported.'
              );
              return;
          }
          if ("string" == typeof n) return "data:" + t + ";base64," + n;
          {
            let e = new Uint8Array(n);
            return window.URL.createObjectURL(new Blob([e], { type: t }));
          }
        }
        parseTextures(e) {
          let t = new Map();
          if ("Texture" in r.Objects) {
            let n = r.Objects.Texture;
            for (let r in n) {
              let i = this.parseTexture(n[r], e);
              t.set(parseInt(r), i);
            }
          }
          return t;
        }
        parseTexture(e, t) {
          let n = this.loadTexture(e, t);
          (n.ID = e.id), (n.name = e.attrName);
          let r = e.WrapModeU,
            i = e.WrapModeV,
            a = void 0 !== r ? r.value : 0,
            o = void 0 !== i ? i.value : 0;
          if (
            ((n.wrapS = 0 === a ? v.RepeatWrapping : v.ClampToEdgeWrapping),
            (n.wrapT = 0 === o ? v.RepeatWrapping : v.ClampToEdgeWrapping),
            "Scaling" in e)
          ) {
            let t = e.Scaling.value;
            (n.repeat.x = t[0]), (n.repeat.y = t[1]);
          }
          if ("Translation" in e) {
            let t = e.Translation.value;
            (n.offset.x = t[0]), (n.offset.y = t[1]);
          }
          return n;
        }
        loadTexture(e, t) {
          let n, r;
          let a = this.textureLoader.path,
            o = i.get(e.id).children;
          void 0 !== o &&
            o.length > 0 &&
            void 0 !== t[o[0].ID] &&
            (0 === (n = t[o[0].ID]).indexOf("blob:") ||
              0 === n.indexOf("data:")) &&
            this.textureLoader.setPath(void 0);
          let s = e.FileName.slice(-3).toLowerCase();
          if ("tga" === s) {
            let t = this.manager.getHandler(".tga");
            null === t
              ? (console.warn(
                  "FBXLoader: TGA loader not found, creating placeholder texture for",
                  e.RelativeFilename
                ),
                (r = new v.Texture()))
              : (t.setPath(this.textureLoader.path), (r = t.load(n)));
          } else
            "psd" === s
              ? (console.warn(
                  "FBXLoader: PSD textures are not supported, creating placeholder texture for",
                  e.RelativeFilename
                ),
                (r = new v.Texture()))
              : (r = this.textureLoader.load(n));
          return this.textureLoader.setPath(a), r;
        }
        parseMaterials(e) {
          let t = new Map();
          if ("Material" in r.Objects) {
            let n = r.Objects.Material;
            for (let r in n) {
              let i = this.parseMaterial(n[r], e);
              null !== i && t.set(parseInt(r), i);
            }
          }
          return t;
        }
        parseMaterial(e, t) {
          let n;
          let r = e.id,
            a = e.attrName,
            o = e.ShadingModel;
          if (("object" == typeof o && (o = o.value), !i.has(r))) return null;
          let s = this.parseParameters(e, t, r);
          switch (o.toLowerCase()) {
            case "phong":
              n = new v.MeshPhongMaterial();
              break;
            case "lambert":
              n = new v.MeshLambertMaterial();
              break;
            default:
              console.warn(
                'THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',
                o
              ),
                (n = new v.MeshPhongMaterial());
          }
          return n.setValues(s), (n.name = a), n;
        }
        parseParameters(e, t, n) {
          let r = {};
          e.BumpFactor && (r.bumpScale = e.BumpFactor.value),
            e.Diffuse
              ? (r.color = new v.Color().fromArray(e.Diffuse.value))
              : e.DiffuseColor &&
                ("Color" === e.DiffuseColor.type ||
                  "ColorRGB" === e.DiffuseColor.type) &&
                (r.color = new v.Color().fromArray(e.DiffuseColor.value)),
            e.DisplacementFactor &&
              (r.displacementScale = e.DisplacementFactor.value),
            e.Emissive
              ? (r.emissive = new v.Color().fromArray(e.Emissive.value))
              : e.EmissiveColor &&
                ("Color" === e.EmissiveColor.type ||
                  "ColorRGB" === e.EmissiveColor.type) &&
                (r.emissive = new v.Color().fromArray(e.EmissiveColor.value)),
            e.EmissiveFactor &&
              (r.emissiveIntensity = parseFloat(e.EmissiveFactor.value)),
            e.Opacity && (r.opacity = parseFloat(e.Opacity.value)),
            r.opacity < 1 && (r.transparent = !0),
            e.ReflectionFactor && (r.reflectivity = e.ReflectionFactor.value),
            e.Shininess && (r.shininess = e.Shininess.value),
            e.Specular
              ? (r.specular = new v.Color().fromArray(e.Specular.value))
              : e.SpecularColor &&
                "Color" === e.SpecularColor.type &&
                (r.specular = new v.Color().fromArray(e.SpecularColor.value));
          let a = this;
          return (
            i.get(n).children.forEach(function (e) {
              let n = e.relationship;
              switch (n) {
                case "Bump":
                  r.bumpMap = a.getTexture(t, e.ID);
                  break;
                case "Maya|TEX_ao_map":
                  r.aoMap = a.getTexture(t, e.ID);
                  break;
                case "DiffuseColor":
                case "Maya|TEX_color_map":
                  (r.map = a.getTexture(t, e.ID)),
                    void 0 !== r.map && (r.map.encoding = v.sRGBEncoding);
                  break;
                case "DisplacementColor":
                  r.displacementMap = a.getTexture(t, e.ID);
                  break;
                case "EmissiveColor":
                  (r.emissiveMap = a.getTexture(t, e.ID)),
                    void 0 !== r.emissiveMap &&
                      (r.emissiveMap.encoding = v.sRGBEncoding);
                  break;
                case "NormalMap":
                case "Maya|TEX_normal_map":
                  r.normalMap = a.getTexture(t, e.ID);
                  break;
                case "ReflectionColor":
                  (r.envMap = a.getTexture(t, e.ID)),
                    void 0 !== r.envMap &&
                      ((r.envMap.mapping = v.EquirectangularReflectionMapping),
                      (r.envMap.encoding = v.sRGBEncoding));
                  break;
                case "SpecularColor":
                  (r.specularMap = a.getTexture(t, e.ID)),
                    void 0 !== r.specularMap &&
                      (r.specularMap.encoding = v.sRGBEncoding);
                  break;
                case "TransparentColor":
                case "TransparencyFactor":
                  (r.alphaMap = a.getTexture(t, e.ID)), (r.transparent = !0);
                  break;
                default:
                  console.warn(
                    "THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",
                    n
                  );
              }
            }),
            r
          );
        }
        getTexture(e, t) {
          return (
            "LayeredTexture" in r.Objects &&
              t in r.Objects.LayeredTexture &&
              (console.warn(
                "THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."
              ),
              (t = i.get(t).children[0].ID)),
            e.get(t)
          );
        }
        parseDeformers() {
          let e = {},
            t = {};
          if ("Deformer" in r.Objects) {
            let n = r.Objects.Deformer;
            for (let r in n) {
              let a = n[r],
                o = i.get(parseInt(r));
              if ("Skin" === a.attrType) {
                let t = this.parseSkeleton(o, n);
                (t.ID = r),
                  o.parents.length > 1 &&
                    console.warn(
                      "THREE.FBXLoader: skeleton attached to more than one geometry is not supported."
                    ),
                  (t.geometryID = o.parents[0].ID),
                  (e[r] = t);
              } else if ("BlendShape" === a.attrType) {
                let e = { id: r };
                (e.rawTargets = this.parseMorphTargets(o, n)),
                  (e.id = r),
                  o.parents.length > 1 &&
                    console.warn(
                      "THREE.FBXLoader: morph target attached to more than one geometry is not supported."
                    ),
                  (t[r] = e);
              }
            }
          }
          return { skeletons: e, morphTargets: t };
        }
        parseSkeleton(e, t) {
          let n = [];
          return (
            e.children.forEach(function (e) {
              let r = t[e.ID];
              if ("Cluster" !== r.attrType) return;
              let i = {
                ID: e.ID,
                indices: [],
                weights: [],
                transformLink: new v.Matrix4().fromArray(r.TransformLink.a),
              };
              "Indexes" in r &&
                ((i.indices = r.Indexes.a), (i.weights = r.Weights.a)),
                n.push(i);
            }),
            { rawBones: n, bones: [] }
          );
        }
        parseMorphTargets(e, t) {
          let n = [];
          for (let r = 0; r < e.children.length; r++) {
            let a = e.children[r],
              o = t[a.ID],
              s = {
                name: o.attrName,
                initialWeight: o.DeformPercent,
                id: o.id,
                fullWeights: o.FullWeights.a,
              };
            if ("BlendShapeChannel" !== o.attrType) return;
            (s.geoID = i.get(parseInt(a.ID)).children.filter(function (e) {
              return void 0 === e.relationship;
            })[0].ID),
              n.push(s);
          }
          return n;
        }
        parseScene(e, t, n) {
          a = new v.Group();
          let o = this.parseModels(e.skeletons, t, n),
            s = r.Objects.Model,
            l = this;
          o.forEach(function (e) {
            let t = s[e.ID];
            l.setLookAtProperties(e, t),
              i.get(e.ID).parents.forEach(function (t) {
                let n = o.get(t.ID);
                void 0 !== n && n.add(e);
              }),
              null === e.parent && a.add(e);
          }),
            this.bindSkeleton(e.skeletons, t, o),
            this.createAmbientLight(),
            a.traverse(function (e) {
              if (e.userData.transformData) {
                e.parent &&
                  ((e.userData.transformData.parentMatrix = e.parent.matrix),
                  (e.userData.transformData.parentMatrixWorld =
                    e.parent.matrixWorld));
                let t = N(e.userData.transformData);
                e.applyMatrix4(t), e.updateWorldMatrix();
              }
            });
          let u = new k().parse();
          1 === a.children.length &&
            a.children[0].isGroup &&
            ((a.children[0].animations = u), (a = a.children[0])),
            (a.animations = u);
        }
        parseModels(e, t, n) {
          let a = new Map(),
            o = r.Objects.Model;
          for (let r in o) {
            let s = parseInt(r),
              l = o[r],
              u = i.get(s),
              c = this.buildSkeleton(u, e, s, l.attrName);
            if (!c) {
              switch (l.attrType) {
                case "Camera":
                  c = this.createCamera(u);
                  break;
                case "Light":
                  c = this.createLight(u);
                  break;
                case "Mesh":
                  c = this.createMesh(u, t, n);
                  break;
                case "NurbsCurve":
                  c = this.createCurve(u, t);
                  break;
                case "LimbNode":
                case "Root":
                  c = new v.Bone();
                  break;
                default:
                  c = new v.Group();
              }
              (c.name = l.attrName
                ? v.PropertyBinding.sanitizeNodeName(l.attrName)
                : ""),
                (c.ID = s);
            }
            this.getTransformData(c, l), a.set(s, c);
          }
          return a;
        }
        buildSkeleton(e, t, n, r) {
          let i = null;
          return (
            e.parents.forEach(function (e) {
              for (let a in t) {
                let o = t[a];
                o.rawBones.forEach(function (t, a) {
                  if (t.ID === e.ID) {
                    let e = i;
                    (i = new v.Bone()).matrixWorld.copy(t.transformLink),
                      (i.name = r ? v.PropertyBinding.sanitizeNodeName(r) : ""),
                      (i.ID = n),
                      (o.bones[a] = i),
                      null !== e && i.add(e);
                  }
                });
              }
            }),
            i
          );
        }
        createCamera(e) {
          let t, n;
          if (
            (e.children.forEach(function (e) {
              let t = r.Objects.NodeAttribute[e.ID];
              void 0 !== t && (n = t);
            }),
            void 0 === n)
          )
            t = new v.Object3D();
          else {
            let e = 0;
            void 0 !== n.CameraProjectionType &&
              1 === n.CameraProjectionType.value &&
              (e = 1);
            let r = 1;
            void 0 !== n.NearPlane && (r = n.NearPlane.value / 1e3);
            let i = 1e3;
            void 0 !== n.FarPlane && (i = n.FarPlane.value / 1e3);
            let a = window.innerWidth,
              o = window.innerHeight;
            void 0 !== n.AspectWidth &&
              void 0 !== n.AspectHeight &&
              ((a = n.AspectWidth.value), (o = n.AspectHeight.value));
            let s = a / o,
              l = 45;
            void 0 !== n.FieldOfView && (l = n.FieldOfView.value);
            let u = n.FocalLength ? n.FocalLength.value : null;
            switch (e) {
              case 0:
                (t = new v.PerspectiveCamera(l, s, r, i)),
                  null !== u && t.setFocalLength(u);
                break;
              case 1:
                t = new v.OrthographicCamera(
                  -a / 2,
                  a / 2,
                  o / 2,
                  -o / 2,
                  r,
                  i
                );
                break;
              default:
                console.warn("THREE.FBXLoader: Unknown camera type " + e + "."),
                  (t = new v.Object3D());
            }
          }
          return t;
        }
        createLight(e) {
          let t, n;
          if (
            (e.children.forEach(function (e) {
              let t = r.Objects.NodeAttribute[e.ID];
              void 0 !== t && (n = t);
            }),
            void 0 === n)
          )
            t = new v.Object3D();
          else {
            let e;
            e = void 0 === n.LightType ? 0 : n.LightType.value;
            let r = 16777215;
            void 0 !== n.Color && (r = new v.Color().fromArray(n.Color.value));
            let i = void 0 === n.Intensity ? 1 : n.Intensity.value / 100;
            void 0 !== n.CastLightOnObject &&
              0 === n.CastLightOnObject.value &&
              (i = 0);
            let a = 0;
            void 0 !== n.FarAttenuationEnd &&
              (a =
                void 0 !== n.EnableFarAttenuation &&
                0 === n.EnableFarAttenuation.value
                  ? 0
                  : n.FarAttenuationEnd.value);
            let o = 1;
            switch (e) {
              case 0:
                t = new v.PointLight(r, i, a, o);
                break;
              case 1:
                t = new v.DirectionalLight(r, i);
                break;
              case 2:
                let s = Math.PI / 3;
                void 0 !== n.InnerAngle &&
                  (s = v.MathUtils.degToRad(n.InnerAngle.value));
                let l = 0;
                void 0 !== n.OuterAngle &&
                  (l = Math.max(
                    (l = v.MathUtils.degToRad(n.OuterAngle.value)),
                    1
                  )),
                  (t = new v.SpotLight(r, i, a, s, l, o));
                break;
              default:
                console.warn(
                  "THREE.FBXLoader: Unknown light type " +
                    n.LightType.value +
                    ", defaulting to a PointLight."
                ),
                  (t = new v.PointLight(r, i));
            }
            void 0 !== n.CastShadows &&
              1 === n.CastShadows.value &&
              (t.castShadow = !0);
          }
          return t;
        }
        createMesh(e, t, n) {
          let r;
          let i = null,
            a = null,
            o = [];
          return (
            e.children.forEach(function (e) {
              t.has(e.ID) && (i = t.get(e.ID)),
                n.has(e.ID) && o.push(n.get(e.ID));
            }),
            o.length > 1
              ? (a = o)
              : o.length > 0
              ? (a = o[0])
              : ((a = new v.MeshPhongMaterial({ color: 13421772 })), o.push(a)),
            "color" in i.attributes &&
              o.forEach(function (e) {
                e.vertexColors = !0;
              }),
            i.FBX_Deformer
              ? (r = new v.SkinnedMesh(i, a)).normalizeSkinWeights()
              : (r = new v.Mesh(i, a)),
            r
          );
        }
        createCurve(e, t) {
          let n = e.children.reduce(function (e, n) {
              return t.has(n.ID) && (e = t.get(n.ID)), e;
            }, null),
            r = new v.LineBasicMaterial({ color: 3342591, linewidth: 1 });
          return new v.Line(n, r);
        }
        getTransformData(e, t) {
          let n = {};
          "InheritType" in t && (n.inheritType = parseInt(t.InheritType.value)),
            "RotationOrder" in t
              ? (n.eulerOrder = B(t.RotationOrder.value))
              : (n.eulerOrder = "ZYX"),
            "Lcl_Translation" in t && (n.translation = t.Lcl_Translation.value),
            "PreRotation" in t && (n.preRotation = t.PreRotation.value),
            "Lcl_Rotation" in t && (n.rotation = t.Lcl_Rotation.value),
            "PostRotation" in t && (n.postRotation = t.PostRotation.value),
            "Lcl_Scaling" in t && (n.scale = t.Lcl_Scaling.value),
            "ScalingOffset" in t && (n.scalingOffset = t.ScalingOffset.value),
            "ScalingPivot" in t && (n.scalingPivot = t.ScalingPivot.value),
            "RotationOffset" in t &&
              (n.rotationOffset = t.RotationOffset.value),
            "RotationPivot" in t && (n.rotationPivot = t.RotationPivot.value),
            (e.userData.transformData = n);
        }
        setLookAtProperties(e, t) {
          "LookAtProperty" in t &&
            i.get(e.ID).children.forEach(function (t) {
              if ("LookAtProperty" === t.relationship) {
                let n = r.Objects.Model[t.ID];
                if ("Lcl_Translation" in n) {
                  let t = n.Lcl_Translation.value;
                  void 0 !== e.target
                    ? (e.target.position.fromArray(t), a.add(e.target))
                    : e.lookAt(new v.Vector3().fromArray(t));
                }
              }
            });
        }
        bindSkeleton(e, t, n) {
          let r = this.parsePoseNodes();
          for (let a in e) {
            let o = e[a];
            i.get(parseInt(o.ID)).parents.forEach(function (e) {
              if (t.has(e.ID)) {
                let t = e.ID;
                i.get(t).parents.forEach(function (e) {
                  n.has(e.ID) &&
                    n.get(e.ID).bind(new v.Skeleton(o.bones), r[e.ID]);
                });
              }
            });
          }
        }
        parsePoseNodes() {
          let e = {};
          if ("Pose" in r.Objects) {
            let t = r.Objects.Pose;
            for (let n in t)
              if ("BindPose" === t[n].attrType && t[n].NbPoseNodes > 0) {
                let r = t[n].PoseNode;
                Array.isArray(r)
                  ? r.forEach(function (t) {
                      e[t.Node] = new v.Matrix4().fromArray(t.Matrix.a);
                    })
                  : (e[r.Node] = new v.Matrix4().fromArray(r.Matrix.a));
              }
          }
          return e;
        }
        createAmbientLight() {
          if ("GlobalSettings" in r && "AmbientColor" in r.GlobalSettings) {
            let e = r.GlobalSettings.AmbientColor.value,
              t = e[0],
              n = e[1],
              i = e[2];
            if (0 !== t || 0 !== n || 0 !== i) {
              let e = new v.Color(t, n, i);
              a.add(new v.AmbientLight(e, 1));
            }
          }
        }
        constructor(e, t) {
          (this.textureLoader = e), (this.manager = t);
        }
      }
      class j {
        parse(e) {
          let t = new Map();
          if ("Geometry" in r.Objects) {
            let n = r.Objects.Geometry;
            for (let r in n) {
              let a = i.get(parseInt(r)),
                o = this.parseGeometry(a, n[r], e);
              t.set(parseInt(r), o);
            }
          }
          return (
            !0 === this.negativeMaterialIndices &&
              console.warn(
                "THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."
              ),
            t
          );
        }
        parseGeometry(e, t, n) {
          switch (t.attrType) {
            case "Mesh":
              return this.parseMeshGeometry(e, t, n);
            case "NurbsCurve":
              return this.parseNurbsGeometry(t);
          }
        }
        parseMeshGeometry(e, t, n) {
          let i = n.skeletons,
            a = [],
            o = e.parents.map(function (e) {
              return r.Objects.Model[e.ID];
            });
          if (0 === o.length) return;
          let s = e.children.reduce(function (e, t) {
            return void 0 !== i[t.ID] && (e = i[t.ID]), e;
          }, null);
          e.children.forEach(function (e) {
            void 0 !== n.morphTargets[e.ID] && a.push(n.morphTargets[e.ID]);
          });
          let l = o[0],
            u = {};
          "RotationOrder" in l && (u.eulerOrder = B(l.RotationOrder.value)),
            "InheritType" in l &&
              (u.inheritType = parseInt(l.InheritType.value)),
            "GeometricTranslation" in l &&
              (u.translation = l.GeometricTranslation.value),
            "GeometricRotation" in l &&
              (u.rotation = l.GeometricRotation.value),
            "GeometricScaling" in l && (u.scale = l.GeometricScaling.value);
          let c = N(u);
          return this.genGeometry(t, s, a, c);
        }
        genGeometry(e, t, n, r) {
          let i = new v.BufferGeometry();
          e.attrName && (i.name = e.attrName);
          let a = this.parseGeoNode(e, t),
            o = this.genBuffers(a),
            s = new v.Float32BufferAttribute(o.vertex, 3);
          if (
            (s.applyMatrix4(r),
            i.setAttribute("position", s),
            o.colors.length > 0 &&
              i.setAttribute(
                "color",
                new v.Float32BufferAttribute(o.colors, 3)
              ),
            t &&
              (i.setAttribute(
                "skinIndex",
                new v.Uint16BufferAttribute(o.weightsIndices, 4)
              ),
              i.setAttribute(
                "skinWeight",
                new v.Float32BufferAttribute(o.vertexWeights, 4)
              ),
              (i.FBX_Deformer = t)),
            o.normal.length > 0)
          ) {
            let e = new v.Matrix3().getNormalMatrix(r),
              t = new v.Float32BufferAttribute(o.normal, 3);
            t.applyNormalMatrix(e), i.setAttribute("normal", t);
          }
          if (
            (o.uvs.forEach(function (e, t) {
              let n = "uv" + (t + 1).toString();
              0 === t && (n = "uv"),
                i.setAttribute(n, new v.Float32BufferAttribute(o.uvs[t], 2));
            }),
            a.material && "AllSame" !== a.material.mappingType)
          ) {
            let e = o.materialIndex[0],
              t = 0;
            if (
              (o.materialIndex.forEach(function (n, r) {
                n !== e && (i.addGroup(t, r - t, e), (e = n), (t = r));
              }),
              i.groups.length > 0)
            ) {
              let t = i.groups[i.groups.length - 1],
                n = t.start + t.count;
              n !== o.materialIndex.length &&
                i.addGroup(n, o.materialIndex.length - n, e);
            }
            0 === i.groups.length &&
              i.addGroup(0, o.materialIndex.length, o.materialIndex[0]);
          }
          return this.addMorphTargets(i, e, n, r), i;
        }
        parseGeoNode(e, t) {
          let n = {};
          if (
            ((n.vertexPositions = void 0 !== e.Vertices ? e.Vertices.a : []),
            (n.vertexIndices =
              void 0 !== e.PolygonVertexIndex ? e.PolygonVertexIndex.a : []),
            e.LayerElementColor &&
              (n.color = this.parseVertexColors(e.LayerElementColor[0])),
            e.LayerElementMaterial &&
              (n.material = this.parseMaterialIndices(
                e.LayerElementMaterial[0]
              )),
            e.LayerElementNormal &&
              (n.normal = this.parseNormals(e.LayerElementNormal[0])),
            e.LayerElementUV)
          ) {
            n.uv = [];
            let t = 0;
            for (; e.LayerElementUV[t]; )
              e.LayerElementUV[t].UV &&
                n.uv.push(this.parseUVs(e.LayerElementUV[t])),
                t++;
          }
          return (
            (n.weightTable = {}),
            null !== t &&
              ((n.skeleton = t),
              t.rawBones.forEach(function (e, t) {
                e.indices.forEach(function (r, i) {
                  void 0 === n.weightTable[r] && (n.weightTable[r] = []),
                    n.weightTable[r].push({ id: t, weight: e.weights[i] });
                });
              })),
            n
          );
        }
        genBuffers(e) {
          let t = {
              vertex: [],
              normal: [],
              colors: [],
              uvs: [],
              materialIndex: [],
              vertexWeights: [],
              weightsIndices: [],
            },
            n = 0,
            r = 0,
            i = !1,
            a = [],
            o = [],
            s = [],
            l = [],
            u = [],
            c = [],
            d = this;
          return (
            e.vertexIndices.forEach(function (h, p) {
              let m;
              let f = !1;
              h < 0 && ((h ^= -1), (f = !0));
              let g = [],
                v = [];
              if ((a.push(3 * h, 3 * h + 1, 3 * h + 2), e.color)) {
                let t = V(p, n, h, e.color);
                s.push(t[0], t[1], t[2]);
              }
              if (e.skeleton) {
                if (
                  (void 0 !== e.weightTable[h] &&
                    e.weightTable[h].forEach(function (e) {
                      v.push(e.weight), g.push(e.id);
                    }),
                  v.length > 4)
                ) {
                  i ||
                    (console.warn(
                      "THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."
                    ),
                    (i = !0));
                  let e = [0, 0, 0, 0],
                    t = [0, 0, 0, 0];
                  v.forEach(function (n, r) {
                    let i = n,
                      a = g[r];
                    t.forEach(function (t, n, r) {
                      if (i > t) {
                        (r[n] = i), (i = t);
                        let o = e[n];
                        (e[n] = a), (a = o);
                      }
                    });
                  }),
                    (g = e),
                    (v = t);
                }
                for (; v.length < 4; ) v.push(0), g.push(0);
                for (let e = 0; e < 4; ++e) u.push(v[e]), c.push(g[e]);
              }
              if (e.normal) {
                let t = V(p, n, h, e.normal);
                o.push(t[0], t[1], t[2]);
              }
              e.material &&
                "AllSame" !== e.material.mappingType &&
                (m = V(p, n, h, e.material)[0]) < 0 &&
                ((d.negativeMaterialIndices = !0), (m = 0)),
                e.uv &&
                  e.uv.forEach(function (e, t) {
                    let r = V(p, n, h, e);
                    void 0 === l[t] && (l[t] = []),
                      l[t].push(r[0]),
                      l[t].push(r[1]);
                  }),
                r++,
                f &&
                  (d.genFace(t, e, a, m, o, s, l, u, c, r),
                  n++,
                  (r = 0),
                  (a = []),
                  (o = []),
                  (s = []),
                  (l = []),
                  (u = []),
                  (c = []));
            }),
            t
          );
        }
        genFace(e, t, n, r, i, a, o, s, l, u) {
          for (let c = 2; c < u; c++)
            e.vertex.push(t.vertexPositions[n[0]]),
              e.vertex.push(t.vertexPositions[n[1]]),
              e.vertex.push(t.vertexPositions[n[2]]),
              e.vertex.push(t.vertexPositions[n[(c - 1) * 3]]),
              e.vertex.push(t.vertexPositions[n[(c - 1) * 3 + 1]]),
              e.vertex.push(t.vertexPositions[n[(c - 1) * 3 + 2]]),
              e.vertex.push(t.vertexPositions[n[3 * c]]),
              e.vertex.push(t.vertexPositions[n[3 * c + 1]]),
              e.vertex.push(t.vertexPositions[n[3 * c + 2]]),
              t.skeleton &&
                (e.vertexWeights.push(s[0]),
                e.vertexWeights.push(s[1]),
                e.vertexWeights.push(s[2]),
                e.vertexWeights.push(s[3]),
                e.vertexWeights.push(s[(c - 1) * 4]),
                e.vertexWeights.push(s[(c - 1) * 4 + 1]),
                e.vertexWeights.push(s[(c - 1) * 4 + 2]),
                e.vertexWeights.push(s[(c - 1) * 4 + 3]),
                e.vertexWeights.push(s[4 * c]),
                e.vertexWeights.push(s[4 * c + 1]),
                e.vertexWeights.push(s[4 * c + 2]),
                e.vertexWeights.push(s[4 * c + 3]),
                e.weightsIndices.push(l[0]),
                e.weightsIndices.push(l[1]),
                e.weightsIndices.push(l[2]),
                e.weightsIndices.push(l[3]),
                e.weightsIndices.push(l[(c - 1) * 4]),
                e.weightsIndices.push(l[(c - 1) * 4 + 1]),
                e.weightsIndices.push(l[(c - 1) * 4 + 2]),
                e.weightsIndices.push(l[(c - 1) * 4 + 3]),
                e.weightsIndices.push(l[4 * c]),
                e.weightsIndices.push(l[4 * c + 1]),
                e.weightsIndices.push(l[4 * c + 2]),
                e.weightsIndices.push(l[4 * c + 3])),
              t.color &&
                (e.colors.push(a[0]),
                e.colors.push(a[1]),
                e.colors.push(a[2]),
                e.colors.push(a[(c - 1) * 3]),
                e.colors.push(a[(c - 1) * 3 + 1]),
                e.colors.push(a[(c - 1) * 3 + 2]),
                e.colors.push(a[3 * c]),
                e.colors.push(a[3 * c + 1]),
                e.colors.push(a[3 * c + 2])),
              t.material &&
                "AllSame" !== t.material.mappingType &&
                (e.materialIndex.push(r),
                e.materialIndex.push(r),
                e.materialIndex.push(r)),
              t.normal &&
                (e.normal.push(i[0]),
                e.normal.push(i[1]),
                e.normal.push(i[2]),
                e.normal.push(i[(c - 1) * 3]),
                e.normal.push(i[(c - 1) * 3 + 1]),
                e.normal.push(i[(c - 1) * 3 + 2]),
                e.normal.push(i[3 * c]),
                e.normal.push(i[3 * c + 1]),
                e.normal.push(i[3 * c + 2])),
              t.uv &&
                t.uv.forEach(function (t, n) {
                  void 0 === e.uvs[n] && (e.uvs[n] = []),
                    e.uvs[n].push(o[n][0]),
                    e.uvs[n].push(o[n][1]),
                    e.uvs[n].push(o[n][(c - 1) * 2]),
                    e.uvs[n].push(o[n][(c - 1) * 2 + 1]),
                    e.uvs[n].push(o[n][2 * c]),
                    e.uvs[n].push(o[n][2 * c + 1]);
                });
        }
        addMorphTargets(e, t, n, i) {
          if (0 === n.length) return;
          (e.morphTargetsRelative = !0), (e.morphAttributes.position = []);
          let a = this;
          n.forEach(function (n) {
            n.rawTargets.forEach(function (n) {
              let o = r.Objects.Geometry[n.geoID];
              void 0 !== o && a.genMorphGeometry(e, t, o, i, n.name);
            });
          });
        }
        genMorphGeometry(e, t, n, r, i) {
          let a = void 0 !== t.PolygonVertexIndex ? t.PolygonVertexIndex.a : [],
            o = void 0 !== n.Vertices ? n.Vertices.a : [],
            s = void 0 !== n.Indexes ? n.Indexes.a : [],
            l = new Float32Array(3 * e.attributes.position.count);
          for (let e = 0; e < s.length; e++) {
            let t = 3 * s[e];
            (l[t] = o[3 * e]),
              (l[t + 1] = o[3 * e + 1]),
              (l[t + 2] = o[3 * e + 2]);
          }
          let u = { vertexIndices: a, vertexPositions: l },
            c = this.genBuffers(u),
            d = new v.Float32BufferAttribute(c.vertex, 3);
          (d.name = i || n.attrName),
            d.applyMatrix4(r),
            e.morphAttributes.position.push(d);
        }
        parseNormals(e) {
          let t = e.MappingInformationType,
            n = e.ReferenceInformationType,
            r = e.Normals.a,
            i = [];
          return (
            "IndexToDirect" === n &&
              ("NormalIndex" in e
                ? (i = e.NormalIndex.a)
                : "NormalsIndex" in e && (i = e.NormalsIndex.a)),
            {
              dataSize: 3,
              buffer: r,
              indices: i,
              mappingType: t,
              referenceType: n,
            }
          );
        }
        parseUVs(e) {
          let t = e.MappingInformationType,
            n = e.ReferenceInformationType,
            r = e.UV.a,
            i = [];
          return (
            "IndexToDirect" === n && (i = e.UVIndex.a),
            {
              dataSize: 2,
              buffer: r,
              indices: i,
              mappingType: t,
              referenceType: n,
            }
          );
        }
        parseVertexColors(e) {
          let t = e.MappingInformationType,
            n = e.ReferenceInformationType,
            r = e.Colors.a,
            i = [];
          return (
            "IndexToDirect" === n && (i = e.ColorIndex.a),
            {
              dataSize: 4,
              buffer: r,
              indices: i,
              mappingType: t,
              referenceType: n,
            }
          );
        }
        parseMaterialIndices(e) {
          let t = e.MappingInformationType,
            n = e.ReferenceInformationType;
          if ("NoMappingInformation" === t)
            return {
              dataSize: 1,
              buffer: [0],
              indices: [0],
              mappingType: "AllSame",
              referenceType: n,
            };
          let r = e.Materials.a,
            i = [];
          for (let e = 0; e < r.length; ++e) i.push(e);
          return {
            dataSize: 1,
            buffer: r,
            indices: i,
            mappingType: t,
            referenceType: n,
          };
        }
        parseNurbsGeometry(e) {
          let t, n;
          if (void 0 === M.e)
            return (
              console.error(
                "THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."
              ),
              new v.BufferGeometry()
            );
          let r = parseInt(e.Order);
          if (isNaN(r))
            return (
              console.error(
                "THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",
                e.Order,
                e.id
              ),
              new v.BufferGeometry()
            );
          let i = r - 1,
            a = e.KnotVector.a,
            o = [],
            s = e.Points.a;
          for (let e = 0, t = s.length; e < t; e += 4)
            o.push(new v.Vector4().fromArray(s, e));
          if ("Closed" === e.Form) o.push(o[0]);
          else if ("Periodic" === e.Form) {
            (t = i), (n = a.length - 1 - t);
            for (let e = 0; e < i; ++e) o.push(o[e]);
          }
          let l = new M.e(i, a, o, t, n).getPoints(12 * o.length);
          return new v.BufferGeometry().setFromPoints(l);
        }
        constructor() {
          this.negativeMaterialIndices = !1;
        }
      }
      class k {
        parse() {
          let e = [],
            t = this.parseClips();
          if (void 0 !== t)
            for (let n in t) {
              let r = t[n],
                i = this.addClip(r);
              e.push(i);
            }
          return e;
        }
        parseClips() {
          if (void 0 === r.Objects.AnimationCurve) return;
          let e = this.parseAnimationCurveNodes();
          this.parseAnimationCurves(e);
          let t = this.parseAnimationLayers(e);
          return this.parseAnimStacks(t);
        }
        parseAnimationCurveNodes() {
          let e = r.Objects.AnimationCurveNode,
            t = new Map();
          for (let n in e) {
            let r = e[n];
            if (null !== r.attrName.match(/S|R|T|DeformPercent|FocalLength/)) {
              let e = { id: r.id, attr: r.attrName, curves: {} };
              t.set(e.id, e);
            }
          }
          return t;
        }
        parseAnimationCurves(e) {
          let t = r.Objects.AnimationCurve;
          for (let n in t) {
            let r = {
                id: t[n].id,
                times: t[n].KeyTime.a.map(R),
                values: t[n].KeyValueFloat.a,
              },
              a = i.get(r.id);
            if (void 0 !== a) {
              let t = a.parents[0].ID,
                n = a.parents[0].relationship;
              n.match(/X/)
                ? (e.get(t).curves.x = r)
                : n.match(/Y/)
                ? (e.get(t).curves.y = r)
                : n.match(/Z/)
                ? (e.get(t).curves.z = r)
                : "d|DeformPercent" == n && e.has(t)
                ? (e.get(t).curves.morph = r)
                : "d|FocalLength" == n && (e.get(t).curves.focalLength = r);
            }
          }
        }
        parseAnimationLayers(e) {
          let t = r.Objects.AnimationLayer,
            n = new Map();
          for (let o in t) {
            let t = [],
              s = i.get(parseInt(o));
            void 0 !== s &&
              (s.children.forEach(function (n, o) {
                if (e.has(n.ID)) {
                  let s = e.get(n.ID);
                  if (
                    void 0 !== s.curves.x ||
                    void 0 !== s.curves.y ||
                    void 0 !== s.curves.z
                  ) {
                    if (void 0 === t[o]) {
                      let e = i.get(n.ID).parents.filter(function (e) {
                        return void 0 !== e.relationship;
                      })[0].ID;
                      if (void 0 !== e) {
                        let i = r.Objects.Model[e.toString()];
                        if (void 0 === i) {
                          console.warn(
                            "THREE.FBXLoader: Encountered a unused curve.",
                            n
                          );
                          return;
                        }
                        let s = {
                          modelName: i.attrName
                            ? v.PropertyBinding.sanitizeNodeName(i.attrName)
                            : "",
                          ID: i.id,
                          initialPosition: [0, 0, 0],
                          initialRotation: [0, 0, 0],
                          initialScale: [1, 1, 1],
                        };
                        a.traverse(function (e) {
                          e.ID === i.id &&
                            ((s.transform = e.matrix),
                            e.userData.transformData &&
                              (s.eulerOrder =
                                e.userData.transformData.eulerOrder));
                        }),
                          s.transform || (s.transform = new v.Matrix4()),
                          "PreRotation" in i &&
                            (s.preRotation = i.PreRotation.value),
                          "PostRotation" in i &&
                            (s.postRotation = i.PostRotation.value),
                          (t[o] = s);
                      }
                    }
                    t[o] && (t[o][s.attr] = s);
                  } else if (void 0 !== s.curves.morph) {
                    if (void 0 === t[o]) {
                      let e = i.get(n.ID).parents.filter(function (e) {
                          return void 0 !== e.relationship;
                        })[0].ID,
                        a = i.get(e).parents[0].ID,
                        s = i.get(a).parents[0].ID,
                        l = i.get(s).parents[0].ID,
                        u = r.Objects.Model[l],
                        c = {
                          modelName: u.attrName
                            ? v.PropertyBinding.sanitizeNodeName(u.attrName)
                            : "",
                          morphName: r.Objects.Deformer[e].attrName,
                        };
                      t[o] = c;
                    }
                    t[o][s.attr] = s;
                  } else if (void 0 !== s.curves.focalLength) {
                    if (void 0 === t[o]) {
                      let e = i.get(n.ID).parents.filter(function (e) {
                          return void 0 !== e.relationship;
                        })[0].ID,
                        a = i.get(e).parents[0].ID;
                      if (void 0 !== e && void 0 !== a) {
                        let i = r.Objects.NodeAttribute[e.toString()],
                          s = r.Objects.Model[a.toString()];
                        if (void 0 === i || void 0 === s) {
                          console.warn(
                            "THREE.FBXLoader: Encountered a unused curve (focal length)",
                            n
                          );
                          return;
                        }
                        let l = {
                          modelName: s.attrName
                            ? v.PropertyBinding.sanitizeNodeName(s.attrName)
                            : "",
                          attributeName: "FocalLength",
                          ID: i.id,
                          value: i.FocalLength.value,
                        };
                        t[o] = l;
                      } else
                        console.warn(
                          "THREE.FBXLoader: Encountered a unused curve (focal length)",
                          n
                        );
                    }
                    t[o] && (t[o][s.attr] = s);
                  }
                }
              }),
              n.set(parseInt(o), t));
          }
          return n;
        }
        parseAnimStacks(e) {
          let t = r.Objects.AnimationStack,
            n = {};
          for (let r in t) {
            let a = i.get(parseInt(r)).children;
            a.length > 1 &&
              console.warn(
                "THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers."
              );
            let o = e.get(a[0].ID);
            n[r] = { name: t[r].attrName, layer: o };
          }
          return n;
        }
        addClip(e) {
          let t = [],
            n = this;
          return (
            e.layer.forEach(function (e) {
              t = t.concat(n.generateTracks(e));
            }),
            new v.AnimationClip(e.name, -1, t)
          );
        }
        generateTracks(e) {
          let t = [],
            n = new v.Vector3(),
            r = new v.Quaternion(),
            i = new v.Vector3();
          if (
            (e.transform && e.transform.decompose(n, r, i),
            (n = n.toArray()),
            (r = new v.Euler().setFromQuaternion(r, e.eulerOrder).toArray()),
            (i = i.toArray()),
            void 0 !== e.T && Object.keys(e.T.curves).length > 0)
          ) {
            let r = this.generateVectorTrack(
              e.modelName,
              e.T.curves,
              n,
              "position"
            );
            void 0 !== r && t.push(r);
          }
          if (void 0 !== e.R && Object.keys(e.R.curves).length > 0) {
            let n = this.generateRotationTrack(
              e.modelName,
              e.R.curves,
              r,
              e.preRotation,
              e.postRotation,
              e.eulerOrder
            );
            void 0 !== n && t.push(n);
          }
          if (void 0 !== e.S && Object.keys(e.S.curves).length > 0) {
            let n = this.generateVectorTrack(
              e.modelName,
              e.S.curves,
              i,
              "scale"
            );
            void 0 !== n && t.push(n);
          }
          if (void 0 !== e.DeformPercent) {
            let n = this.generateMorphTrack(e);
            void 0 !== n && t.push(n);
          }
          if (void 0 !== e.FocalLength) {
            let n = this.generateFocalLengthTrack(e);
            void 0 !== n && t.push(n);
          }
          return t;
        }
        generateVectorTrack(e, t, n, r) {
          let i = this.getTimesForAllAxes(t),
            a = this.getKeyframeTrackValues(i, t, n);
          return new v.VectorKeyframeTrack(e + "." + r, i, a);
        }
        generateRotationTrack(e, t, n, r, i, a) {
          void 0 !== t.x &&
            (this.interpolateRotations(t.x),
            (t.x.values = t.x.values.map(v.MathUtils.degToRad))),
            void 0 !== t.y &&
              (this.interpolateRotations(t.y),
              (t.y.values = t.y.values.map(v.MathUtils.degToRad))),
            void 0 !== t.z &&
              (this.interpolateRotations(t.z),
              (t.z.values = t.z.values.map(v.MathUtils.degToRad)));
          let o = this.getTimesForAllAxes(t),
            s = this.getKeyframeTrackValues(o, t, n);
          void 0 !== r &&
            ((r = r.map(v.MathUtils.degToRad)).push(a),
            (r = new v.Euler().fromArray(r)),
            (r = new v.Quaternion().setFromEuler(r))),
            void 0 !== i &&
              ((i = i.map(v.MathUtils.degToRad)).push(a),
              (i = new v.Euler().fromArray(i)),
              (i = new v.Quaternion().setFromEuler(i).invert()));
          let l = new v.Quaternion(),
            u = new v.Euler(),
            c = [];
          for (let e = 0; e < s.length; e += 3)
            u.set(s[e], s[e + 1], s[e + 2], a),
              l.setFromEuler(u),
              void 0 !== r && l.premultiply(r),
              void 0 !== i && l.multiply(i),
              l.toArray(c, (e / 3) * 4);
          return new v.QuaternionKeyframeTrack(e + ".quaternion", o, c);
        }
        generateMorphTrack(e) {
          let t = e.DeformPercent.curves.morph,
            n = t.values.map(function (e) {
              return e / 100;
            }),
            r = a.getObjectByName(e.modelName).morphTargetDictionary[
              e.morphName
            ];
          return new v.NumberKeyframeTrack(
            e.modelName + ".morphTargetInfluences[" + r + "]",
            t.times,
            n
          );
        }
        generateFocalLengthTrack(e) {
          let t = e.FocalLength.curves.focalLength;
          return new v.NumberKeyframeTrack(
            e.modelName + ".focalLength",
            t.times,
            t.values,
            v.InterpolateSmooth
          );
        }
        getTimesForAllAxes(e) {
          let t = [];
          if (
            (void 0 !== e.x && (t = t.concat(e.x.times)),
            void 0 !== e.y && (t = t.concat(e.y.times)),
            void 0 !== e.z && (t = t.concat(e.z.times)),
            (t = t.sort(function (e, t) {
              return e - t;
            })).length > 1)
          ) {
            let e = 1,
              n = t[0];
            for (let r = 1; r < t.length; r++) {
              let i = t[r];
              i !== n && ((t[e] = i), (n = i), e++);
            }
            t = t.slice(0, e);
          }
          return t;
        }
        getKeyframeTrackValues(e, t, n) {
          let r = n,
            i = [],
            a = -1,
            o = -1,
            s = -1;
          return (
            e.forEach(function (e) {
              if (
                (t.x && (a = t.x.times.indexOf(e)),
                t.y && (o = t.y.times.indexOf(e)),
                t.z && (s = t.z.times.indexOf(e)),
                -1 !== a)
              ) {
                let e = t.x.values[a];
                i.push(e), (r[0] = e);
              } else i.push(r[0]);
              if (-1 !== o) {
                let e = t.y.values[o];
                i.push(e), (r[1] = e);
              } else i.push(r[1]);
              if (-1 !== s) {
                let e = t.z.values[s];
                i.push(e), (r[2] = e);
              } else i.push(r[2]);
            }),
            i
          );
        }
        interpolateRotations(e) {
          for (let t = 1; t < e.values.length; t++) {
            let n = e.values[t - 1],
              r = e.values[t] - n,
              i = Math.abs(r);
            if (i >= 180) {
              let a = i / 180,
                o = r / a,
                s = n + o,
                l = e.times[t - 1],
                u = (e.times[t] - l) / a,
                c = l + u,
                d = [],
                h = [];
              for (; c < e.times[t]; ) d.push(c), (c += u), h.push(s), (s += o);
              (e.times = q(e.times, t, d)), (e.values = q(e.values, t, h));
            }
          }
        }
      }
      class E {
        getPrevNode() {
          return this.nodeStack[this.currentIndent - 2];
        }
        getCurrentNode() {
          return this.nodeStack[this.currentIndent - 1];
        }
        getCurrentProp() {
          return this.currentProp;
        }
        pushStack(e) {
          this.nodeStack.push(e), (this.currentIndent += 1);
        }
        popStack() {
          this.nodeStack.pop(), (this.currentIndent -= 1);
        }
        setCurrentProp(e, t) {
          (this.currentProp = e), (this.currentPropName = t);
        }
        parse(e) {
          (this.currentIndent = 0),
            (this.allNodes = new L()),
            (this.nodeStack = []),
            (this.currentProp = []),
            (this.currentPropName = "");
          let t = this,
            n = e.split(/[\r\n]+/);
          return (
            n.forEach(function (e, r) {
              let i = e.match(/^[\s\t]*;/),
                a = e.match(/^[\s\t]*$/);
              if (i || a) return;
              let o = e.match("^\\t{" + t.currentIndent + "}(\\w+):(.*){", ""),
                s = e.match(
                  "^\\t{" + t.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"
                ),
                l = e.match("^\\t{" + (t.currentIndent - 1) + "}}");
              o
                ? t.parseNodeBegin(e, o)
                : s
                ? t.parseNodeProperty(e, s, n[++r])
                : l
                ? t.popStack()
                : e.match(/^[^\s\t}]/) && t.parseNodePropertyContinued(e);
            }),
            this.allNodes
          );
        }
        parseNodeBegin(e, t) {
          let n = t[1].trim().replace(/^"/, "").replace(/"$/, ""),
            r = t[2].split(",").map(function (e) {
              return e.trim().replace(/^"/, "").replace(/"$/, "");
            }),
            i = { name: n },
            a = this.parseNodeAttr(r),
            o = this.getCurrentNode();
          0 === this.currentIndent
            ? this.allNodes.add(n, i)
            : n in o
            ? ("PoseNode" === n
                ? o.PoseNode.push(i)
                : void 0 !== o[n].id && ((o[n] = {}), (o[n][o[n].id] = o[n])),
              "" !== a.id && (o[n][a.id] = i))
            : "number" == typeof a.id
            ? ((o[n] = {}), (o[n][a.id] = i))
            : "Properties70" !== n &&
              ("PoseNode" === n ? (o[n] = [i]) : (o[n] = i)),
            "number" == typeof a.id && (i.id = a.id),
            "" !== a.name && (i.attrName = a.name),
            "" !== a.type && (i.attrType = a.type),
            this.pushStack(i);
        }
        parseNodeAttr(e) {
          let t = e[0];
          "" !== e[0] && isNaN((t = parseInt(e[0]))) && (t = e[0]);
          let n = "",
            r = "";
          return (
            e.length > 1 && ((n = e[1].replace(/^(\w+)::/, "")), (r = e[2])),
            { id: t, name: n, type: r }
          );
        }
        parseNodeProperty(e, t, n) {
          let r = t[1].replace(/^"/, "").replace(/"$/, "").trim(),
            i = t[2].replace(/^"/, "").replace(/"$/, "").trim();
          "Content" === r &&
            "," === i &&
            (i = n.replace(/"/g, "").replace(/,$/, "").trim());
          let a = this.getCurrentNode();
          if ("Properties70" === a.name) {
            this.parseNodeSpecialProperty(e, r, i);
            return;
          }
          if ("C" === r) {
            let e = i.split(",").slice(1),
              t = parseInt(e[0]),
              n = parseInt(e[1]),
              o = i.split(",").slice(3);
            (o = o.map(function (e) {
              return e.trim().replace(/^"/, "");
            })),
              (r = "connections"),
              G((i = [t, n]), o),
              void 0 === a[r] && (a[r] = []);
          }
          "Node" === r && (a.id = i),
            r in a && Array.isArray(a[r])
              ? a[r].push(i)
              : "a" !== r
              ? (a[r] = i)
              : (a.a = i),
            this.setCurrentProp(a, r),
            "a" === r && "," !== i.slice(-1) && (a.a = H(i));
        }
        parseNodePropertyContinued(e) {
          let t = this.getCurrentNode();
          (t.a += e), "," !== e.slice(-1) && (t.a = H(t.a));
        }
        parseNodeSpecialProperty(e, t, n) {
          let r = n.split('",').map(function (e) {
              return e.trim().replace(/^\"/, "").replace(/\s/, "_");
            }),
            i = r[0],
            a = r[1],
            o = r[2],
            s = r[3],
            l = r[4];
          switch (a) {
            case "int":
            case "enum":
            case "bool":
            case "ULongLong":
            case "double":
            case "Number":
            case "FieldOfView":
              l = parseFloat(l);
              break;
            case "Color":
            case "ColorRGB":
            case "Vector3D":
            case "Lcl_Translation":
            case "Lcl_Rotation":
            case "Lcl_Scaling":
              l = H(l);
          }
          (this.getPrevNode()[i] = { type: a, type2: o, flag: s, value: l }),
            this.setCurrentProp(this.getPrevNode(), i);
        }
      }
      class P {
        parse(e) {
          let t = new D(e);
          t.skip(23);
          let n = t.getUint32();
          if (n < 6400)
            throw Error(
              "THREE.FBXLoader: FBX version not supported, FileVersion: " + n
            );
          let r = new L();
          for (; !this.endOfContent(t); ) {
            let e = this.parseNode(t, n);
            null !== e && r.add(e.name, e);
          }
          return r;
        }
        endOfContent(e) {
          return e.size() % 16 == 0
            ? ((e.getOffset() + 160 + 16) & -16) >= e.size()
            : e.getOffset() + 160 + 16 >= e.size();
        }
        parseNode(e, t) {
          let n = {},
            r = t >= 7500 ? e.getUint64() : e.getUint32(),
            i = t >= 7500 ? e.getUint64() : e.getUint32();
          t >= 7500 ? e.getUint64() : e.getUint32();
          let a = e.getUint8(),
            o = e.getString(a);
          if (0 === r) return null;
          let s = [];
          for (let t = 0; t < i; t++) s.push(this.parseProperty(e));
          let l = s.length > 0 ? s[0] : "",
            u = s.length > 1 ? s[1] : "",
            c = s.length > 2 ? s[2] : "";
          for (
            n.singleProperty = 1 === i && e.getOffset() === r;
            r > e.getOffset();

          ) {
            let r = this.parseNode(e, t);
            null !== r && this.parseSubNode(o, n, r);
          }
          return (
            (n.propertyList = s),
            "number" == typeof l && (n.id = l),
            "" !== u && (n.attrName = u),
            "" !== c && (n.attrType = c),
            "" !== o && (n.name = o),
            n
          );
        }
        parseSubNode(e, t, n) {
          if (!0 === n.singleProperty) {
            let e = n.propertyList[0];
            Array.isArray(e) ? ((t[n.name] = n), (n.a = e)) : (t[n.name] = e);
          } else if ("Connections" === e && "C" === n.name) {
            let e = [];
            n.propertyList.forEach(function (t, n) {
              0 !== n && e.push(t);
            }),
              void 0 === t.connections && (t.connections = []),
              t.connections.push(e);
          } else if ("Properties70" === n.name)
            Object.keys(n).forEach(function (e) {
              t[e] = n[e];
            });
          else if ("Properties70" === e && "P" === n.name) {
            let e,
              r = n.propertyList[0],
              i = n.propertyList[1],
              a = n.propertyList[2],
              o = n.propertyList[3];
            0 === r.indexOf("Lcl ") && (r = r.replace("Lcl ", "Lcl_")),
              0 === i.indexOf("Lcl ") && (i = i.replace("Lcl ", "Lcl_")),
              (e =
                "Color" === i ||
                "ColorRGB" === i ||
                "Vector" === i ||
                "Vector3D" === i ||
                0 === i.indexOf("Lcl_")
                  ? [n.propertyList[4], n.propertyList[5], n.propertyList[6]]
                  : n.propertyList[4]),
              (t[r] = { type: i, type2: a, flag: o, value: e });
          } else
            void 0 === t[n.name]
              ? "number" == typeof n.id
                ? ((t[n.name] = {}), (t[n.name][n.id] = n))
                : (t[n.name] = n)
              : "PoseNode" === n.name
              ? (Array.isArray(t[n.name]) || (t[n.name] = [t[n.name]]),
                t[n.name].push(n))
              : void 0 === t[n.name][n.id] && (t[n.name][n.id] = n);
        }
        parseProperty(e) {
          let t;
          let n = e.getString(1);
          switch (n) {
            case "C":
              return e.getBoolean();
            case "D":
              return e.getFloat64();
            case "F":
              return e.getFloat32();
            case "I":
              return e.getInt32();
            case "L":
              return e.getInt64();
            case "R":
              return (t = e.getUint32()), e.getArrayBuffer(t);
            case "S":
              return (t = e.getUint32()), e.getString(t);
            case "Y":
              return e.getInt16();
            case "b":
            case "c":
            case "d":
            case "f":
            case "i":
            case "l":
              let r = e.getUint32(),
                i = e.getUint32(),
                a = e.getUint32();
              if (0 === i)
                switch (n) {
                  case "b":
                  case "c":
                    return e.getBooleanArray(r);
                  case "d":
                    return e.getFloat64Array(r);
                  case "f":
                    return e.getFloat32Array(r);
                  case "i":
                    return e.getInt32Array(r);
                  case "l":
                    return e.getInt64Array(r);
                }
              void 0 === C &&
                console.error(
                  "THREE.FBXLoader: External library fflate.min.js required."
                );
              let o = new D(
                C.unzlibSync(new Uint8Array(e.getArrayBuffer(a))).buffer
              );
              switch (n) {
                case "b":
                case "c":
                  return o.getBooleanArray(r);
                case "d":
                  return o.getFloat64Array(r);
                case "f":
                  return o.getFloat32Array(r);
                case "i":
                  return o.getInt32Array(r);
                case "l":
                  return o.getInt64Array(r);
              }
              break;
            default:
              throw Error("THREE.FBXLoader: Unknown property type " + n);
          }
        }
      }
      class D {
        getOffset() {
          return this.offset;
        }
        size() {
          return this.dv.buffer.byteLength;
        }
        skip(e) {
          this.offset += e;
        }
        getBoolean() {
          return (1 & this.getUint8()) == 1;
        }
        getBooleanArray(e) {
          let t = [];
          for (let n = 0; n < e; n++) t.push(this.getBoolean());
          return t;
        }
        getUint8() {
          let e = this.dv.getUint8(this.offset);
          return (this.offset += 1), e;
        }
        getInt16() {
          let e = this.dv.getInt16(this.offset, this.littleEndian);
          return (this.offset += 2), e;
        }
        getInt32() {
          let e = this.dv.getInt32(this.offset, this.littleEndian);
          return (this.offset += 4), e;
        }
        getInt32Array(e) {
          let t = [];
          for (let n = 0; n < e; n++) t.push(this.getInt32());
          return t;
        }
        getUint32() {
          let e = this.dv.getUint32(this.offset, this.littleEndian);
          return (this.offset += 4), e;
        }
        getInt64() {
          let e, t;
          return (this.littleEndian
            ? ((e = this.getUint32()), (t = this.getUint32()))
            : ((t = this.getUint32()), (e = this.getUint32())),
          2147483648 & t)
            ? ((t = 4294967295 & ~t),
              4294967295 == (e = 4294967295 & ~e) && (t = (t + 1) & 4294967295),
              -(4294967296 * t + (e = (e + 1) & 4294967295)))
            : 4294967296 * t + e;
        }
        getInt64Array(e) {
          let t = [];
          for (let n = 0; n < e; n++) t.push(this.getInt64());
          return t;
        }
        getUint64() {
          let e, t;
          return (
            this.littleEndian
              ? ((e = this.getUint32()), (t = this.getUint32()))
              : ((t = this.getUint32()), (e = this.getUint32())),
            4294967296 * t + e
          );
        }
        getFloat32() {
          let e = this.dv.getFloat32(this.offset, this.littleEndian);
          return (this.offset += 4), e;
        }
        getFloat32Array(e) {
          let t = [];
          for (let n = 0; n < e; n++) t.push(this.getFloat32());
          return t;
        }
        getFloat64() {
          let e = this.dv.getFloat64(this.offset, this.littleEndian);
          return (this.offset += 8), e;
        }
        getFloat64Array(e) {
          let t = [];
          for (let n = 0; n < e; n++) t.push(this.getFloat64());
          return t;
        }
        getArrayBuffer(e) {
          let t = this.dv.buffer.slice(this.offset, this.offset + e);
          return (this.offset += e), t;
        }
        getString(e) {
          let t = [];
          for (let n = 0; n < e; n++) t[n] = this.getUint8();
          let n = t.indexOf(0);
          return (
            n >= 0 && (t = t.slice(0, n)),
            v.LoaderUtils.decodeText(new Uint8Array(t))
          );
        }
        constructor(e, t) {
          (this.dv = new DataView(e)),
            (this.offset = 0),
            (this.littleEndian = void 0 === t || t);
        }
      }
      class L {
        add(e, t) {
          this[e] = t;
        }
      }
      function I(e) {
        let t = "Kaydara FBX Binary  \0";
        return e.byteLength >= t.length && t === U(e, 0, t.length);
      }
      function T(e) {
        let t = [
            "K",
            "a",
            "y",
            "d",
            "a",
            "r",
            "a",
            "\\",
            "F",
            "B",
            "X",
            "\\",
            "B",
            "i",
            "n",
            "a",
            "r",
            "y",
            "\\",
            "\\",
          ],
          n = 0;
        function r(t) {
          let r = e[t - 1];
          return (e = e.slice(n + t)), n++, r;
        }
        for (let e = 0; e < t.length; ++e) if (r(1) === t[e]) return !1;
        return !0;
      }
      function z(e) {
        let t = /FBXVersion: (\d+)/,
          n = e.match(t);
        if (n) return parseInt(n[1]);
        throw Error(
          "THREE.FBXLoader: Cannot find the version number for the file given."
        );
      }
      function R(e) {
        return e / 46186158e3;
      }
      let A = [];
      function V(e, t, n, r) {
        let i;
        switch (r.mappingType) {
          case "ByPolygonVertex":
            i = e;
            break;
          case "ByPolygon":
            i = t;
            break;
          case "ByVertice":
            i = n;
            break;
          case "AllSame":
            i = r.indices[0];
            break;
          default:
            console.warn(
              "THREE.FBXLoader: unknown attribute mapping type " + r.mappingType
            );
        }
        "IndexToDirect" === r.referenceType && (i = r.indices[i]);
        let a = i * r.dataSize,
          o = a + r.dataSize;
        return W(A, r.buffer, a, o);
      }
      let F = new v.Euler(),
        O = new v.Vector3();
      function N(e) {
        let t = new v.Matrix4(),
          n = new v.Matrix4(),
          r = new v.Matrix4(),
          i = new v.Matrix4(),
          a = new v.Matrix4(),
          o = new v.Matrix4(),
          s = new v.Matrix4(),
          l = new v.Matrix4(),
          u = new v.Matrix4(),
          c = new v.Matrix4(),
          d = new v.Matrix4(),
          h = new v.Matrix4(),
          p = e.inheritType ? e.inheritType : 0;
        if (
          (e.translation && t.setPosition(O.fromArray(e.translation)),
          e.preRotation)
        ) {
          let t = e.preRotation.map(v.MathUtils.degToRad);
          t.push(e.eulerOrder || v.Euler.DefaultOrder),
            n.makeRotationFromEuler(F.fromArray(t));
        }
        if (e.rotation) {
          let t = e.rotation.map(v.MathUtils.degToRad);
          t.push(e.eulerOrder || v.Euler.DefaultOrder),
            r.makeRotationFromEuler(F.fromArray(t));
        }
        if (e.postRotation) {
          let t = e.postRotation.map(v.MathUtils.degToRad);
          t.push(e.eulerOrder || v.Euler.DefaultOrder),
            i.makeRotationFromEuler(F.fromArray(t)),
            i.invert();
        }
        e.scale && a.scale(O.fromArray(e.scale)),
          e.scalingOffset && s.setPosition(O.fromArray(e.scalingOffset)),
          e.scalingPivot && o.setPosition(O.fromArray(e.scalingPivot)),
          e.rotationOffset && l.setPosition(O.fromArray(e.rotationOffset)),
          e.rotationPivot && u.setPosition(O.fromArray(e.rotationPivot)),
          e.parentMatrixWorld &&
            (d.copy(e.parentMatrix), c.copy(e.parentMatrixWorld));
        let m = n.clone().multiply(r).multiply(i),
          f = new v.Matrix4();
        f.extractRotation(c);
        let g = new v.Matrix4();
        g.copyPosition(c);
        let y = g.clone().invert().multiply(c),
          x = f.clone().invert().multiply(y),
          w = a,
          b = new v.Matrix4();
        if (0 === p) b.copy(f).multiply(m).multiply(x).multiply(w);
        else if (1 === p) b.copy(f).multiply(x).multiply(m).multiply(w);
        else {
          let e = new v.Matrix4()
              .scale(new v.Vector3().setFromMatrixScale(d))
              .clone()
              .invert(),
            t = x.clone().multiply(e);
          b.copy(f).multiply(m).multiply(t).multiply(w);
        }
        let C = u.clone().invert(),
          M = o.clone().invert(),
          _ = t
            .clone()
            .multiply(l)
            .multiply(u)
            .multiply(n)
            .multiply(r)
            .multiply(i)
            .multiply(C)
            .multiply(s)
            .multiply(o)
            .multiply(a)
            .multiply(M),
          S = new v.Matrix4().copyPosition(_),
          j = c.clone().multiply(S);
        return (
          h.copyPosition(j),
          (_ = h.clone().multiply(b)).premultiply(c.invert()),
          _
        );
      }
      function B(e) {
        let t = ["ZYX", "YZX", "XZY", "ZXY", "YXZ", "XYZ"];
        return 6 === (e = e || 0)
          ? (console.warn(
              "THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."
            ),
            t[0])
          : t[e];
      }
      function H(e) {
        return e.split(",").map(function (e) {
          return parseFloat(e);
        });
      }
      function U(e, t, n) {
        return (
          void 0 === t && (t = 0),
          void 0 === n && (n = e.byteLength),
          v.LoaderUtils.decodeText(new Uint8Array(e, t, n))
        );
      }
      function G(e, t) {
        for (let n = 0, r = e.length, i = t.length; n < i; n++, r++)
          e[r] = t[n];
      }
      function W(e, t, n, r) {
        for (let i = n, a = 0; i < r; i++, a++) e[a] = t[i];
        return e;
      }
      function q(e, t, n) {
        return e.slice(0, t).concat(n).concat(e.slice(t));
      }
      var K = n(60705),
        X = n.n(K),
        Q = n(11593),
        Z = n.n(Q);
      let Y = (e, t) => ((e % t) + t) % t;
      var J = n(9452),
        $ = n(76493),
        ee = n(93766),
        et = n(85415);
      !(function (e) {
        (e.Freeform = "freeform"), (e.Orbit = "orbit");
      })(o || (o = {})),
        (function (e) {
          (e.Spline = "Spline"),
            (e.Linear = "Linear"),
            (e.TimeCurves = "TimeCurves");
        })(s || (s = {}));
      var en = n(18306);
      !(function (e) {
        let t = 4;
        function n(e, n, r) {
          return {
            schemaVersion: t,
            keyframes: n.map(i),
            settings: e,
            templateState: r,
          };
        }
        function r(e) {
          var n,
            r,
            i,
            l,
            u,
            c,
            d,
            h,
            p,
            m,
            f,
            g,
            v,
            y,
            x,
            w,
            b,
            C,
            M,
            _,
            S,
            j,
            k,
            E,
            P,
            D,
            L,
            I,
            T,
            z,
            R,
            A,
            V,
            F;
          return (
            e.schemaVersion !== t &&
              console.warn(
                "schema version mismatch, expected "
                  .concat(t, " got ")
                  .concat(e.schemaVersion, ", trying to import anyway")
              ),
            {
              keyframes:
                null !==
                  (b =
                    null === (n = e.keyframes) || void 0 === n
                      ? void 0
                      : n.map(a)) && void 0 !== b
                  ? b
                  : [],
              settings: {
                bgColor:
                  null !==
                    (C =
                      null === (r = e.settings) || void 0 === r
                        ? void 0
                        : r.bgColor) && void 0 !== C
                    ? C
                    : { r: 0, g: 0, b: 0, a: 0 },
                fov:
                  null !==
                    (M =
                      null === (i = e.settings) || void 0 === i
                        ? void 0
                        : i.fov) && void 0 !== M
                    ? M
                    : 60,
                fps:
                  null !==
                    (_ =
                      null === (l = e.settings) || void 0 === l
                        ? void 0
                        : l.fps) && void 0 !== _
                    ? _
                    : 30,
                width:
                  null !==
                    (S =
                      null === (u = e.settings) || void 0 === u
                        ? void 0
                        : u.width) && void 0 !== S
                    ? S
                    : 1280,
                height:
                  null !==
                    (j =
                      null === (c = e.settings) || void 0 === c
                        ? void 0
                        : c.height) && void 0 !== j
                    ? j
                    : 720,
                motionMode:
                  null !==
                    (E =
                      null !==
                        (k =
                          null === (d = e.settings) || void 0 === d
                            ? void 0
                            : d.motionMode) && void 0 !== k
                        ? k
                        : null === (h = e.settings) || void 0 === h
                        ? void 0
                        : h.interpolationMode) && void 0 !== E
                    ? E
                    : o.Freeform,
                interpolation:
                  null !==
                    (P =
                      null === (p = e.settings) || void 0 === p
                        ? void 0
                        : p.interpolation) && void 0 !== P
                    ? P
                    : s.Spline,
                tension:
                  null !==
                    (D =
                      null === (m = e.settings) || void 0 === m
                        ? void 0
                        : m.tension) && void 0 !== D
                    ? D
                    : 0,
                loop:
                  null !==
                    (L =
                      null === (f = e.settings) || void 0 === f
                        ? void 0
                        : f.loop) &&
                  void 0 !== L &&
                  L,
                depthMaps:
                  null !==
                    (I =
                      null === (g = e.settings) || void 0 === g
                        ? void 0
                        : g.depthMaps) &&
                  void 0 !== I &&
                  I,
                transparentBackground:
                  null !==
                    (T =
                      null === (v = e.settings) || void 0 === v
                        ? void 0
                        : v.transparentBackground) &&
                  void 0 !== T &&
                  T,
                segmentation:
                  null !==
                    (R =
                      null !==
                        (z =
                          null === (y = e.settings) || void 0 === y
                            ? void 0
                            : y.segmentation) && void 0 !== z
                        ? z
                        : e.lumaOptionSegment) && void 0 !== R
                    ? R
                    : J.A6.getValue(),
                fovXOverride_deg:
                  null !==
                    (A =
                      null === (x = e.settings) || void 0 === x
                        ? void 0
                        : x.fovXOverride_deg) && void 0 !== A
                    ? A
                    : NaN,
                fovXMultiplier:
                  null !==
                    (V =
                      null === (w = e.settings) || void 0 === w
                        ? void 0
                        : w.fovXMultiplier) && void 0 !== V
                    ? V
                    : 1,
              },
              templateState:
                null !== (F = e.templateState) && void 0 !== F ? F : null,
            }
          );
        }
        function i(e) {
          return {
            id: e.id,
            t_s: e.t_s,
            position: e.position.toArray(),
            quaternion: e.quaternion.toArray(),
            target: e.target.toArray(),
            azimuth: e.azimuth,
            elevation: e.elevation,
            radius: e.radius,
            lookAtRelativeQuaternion: e.lookAtRelativeQuaternion.toArray(),
            focalLength: e.focalLength,
            smoothness: e.smoothness,
            keyframeType: e.keyframeType,
          };
        }
        function a(e) {
          var t, n, r, i;
          return new en.Or(
            {
              t_s: e.t_s,
              position: new v.Vector3().fromArray(e.position),
              quaternion: new v.Quaternion().fromArray(
                null !== (t = e.quaternion) && void 0 !== t ? t : e.orientation
              ),
              target: new v.Vector3().fromArray(e.target),
              focalLength:
                null !== (n = e.focalLength) && void 0 !== n
                  ? n
                  : new v.PerspectiveCamera(60, 1).getFocalLength(),
              smoothness: null !== (r = e.smoothness) && void 0 !== r ? r : 1,
            },
            null !== (i = e.keyframeType) && void 0 !== i ? i : en.yX.Normal
          );
        }
        function l(e) {
          let t = null != e ? e : window.location.pathname;
          return "Dream::CurveMode/".concat(t);
        }
        (e.serializeState = n),
          (e.deserializeState = r),
          (e.serializeKeyframe = i),
          (e.deserializeKeyframe = a);
        let u = -1;
        function c(e, t) {
          let n = 50;
          clearInterval(u),
            (u = setTimeout(() => {
              d(e, t);
            }, n));
        }
        function d(e, t) {
          console.log("updating local storage", t),
            localStorage.setItem(l(e), JSON.stringify(t));
        }
        function h(e) {
          let t = l(e),
            n = localStorage.getItem(t);
          return null == n ? null : r(JSON.parse(n));
        }
        function p(e) {
          console.warn("clearing local storage", l(e)),
            localStorage.removeItem(l(e));
        }
        (e.writeLocalStorageDebounce = c),
          (e.writeLocalStorage = d),
          (e.readLocalStorage = h),
          (e.clearLocalStorage = p);
      })(l || (l = {}));
      class er extends v.Interpolant {
        interpolate_(e, t, n, r) {
          let i = e - 1,
            a = (n - t) / (r - t),
            { value: o, time: s } = this.getSample(i - 1, this._pPrev),
            { value: l } = this.getSample(i, this._p0),
            { value: u } = this.getSample(e, this._p1),
            { value: c, time: d } = this.getSample(e + 1, this._pNext),
            h = 1 - this.tension,
            p = ei(this.keyframeSmoothness[i], this.keyframeSmoothness[e], a);
          isFinite(p) && (h *= p);
          let m = this.resultBuffer;
          {
            let n = a * a,
              o = n * a,
              s = 2 * o - 3 * n + 1,
              c = o - 2 * n + a,
              d = -2 * o + 3 * n,
              p = o - n,
              f = r - t,
              g = this.getTangentCatmullRom(i, h, this._v0),
              v = this.getTangentCatmullRom(e, h, this._v1),
              y = this.valueSize;
            for (let e = 0; e < y; e++)
              m[e] = s * l[e] + c * g[e] * f + d * u[e] + p * v[e] * f;
          }
          return m;
        }
        getSample(e, t) {
          let n,
            r = this.parameterPositions;
          if (e < 0) {
            if (this.closed) {
              let e = r[r.length - 1] - r[r.length - 2];
              return (
                (n = r[0] - e),
                this.readValues(r.length - 2, t),
                { time: n, value: t }
              );
            }
            {
              let i = r[1] - r[0];
              return {
                time: (n = r[0] - i * Math.abs(e)),
                value: this.lerp(0, 1, 0 - Math.abs(e), t),
              };
            }
          }
          if (!(e >= r.length))
            return (n = r[e]), this.readValues(e, t), { time: n, value: t };
          if (this.closed) {
            let e = r[1] - r[0];
            return (
              (n = r[r.length - 1] + e),
              this.readValues(1, t),
              { time: n, value: t }
            );
          }
          {
            let i = r.length - 1,
              a = r.length - 2,
              o = r[i] - r[a];
            return {
              time: (n = r[i] + o * (e - i)),
              value: this.lerp(a, i, 1 + (e - i), t),
            };
          }
        }
        readValues(e, t) {
          let n = this.sampleValues,
            r = this.valueSize;
          for (let i = 0; i < r; i++) t[i] = n[e * r + i];
          return t;
        }
        lerp(e, t, n, r) {
          let i = this.sampleValues,
            a = this.valueSize;
          for (let o = 0; o < a; o++) {
            let s = i[e * a + o],
              l = i[t * a + o];
            r[o] = s + (l - s) * n;
          }
          return r;
        }
        getTangentCatmullRom(e, t, n) {
          let { value: r, time: i } = this.getSample(e - 1, this._tPrev),
            { value: a, time: o } = this.getSample(e, this._tCenter),
            { value: s, time: l } = this.getSample(e + 1, this._tNext),
            u = o - i,
            c = l - o,
            d = l - i,
            h = this.valueSize;
          for (let e = 0; e < h; e++) {
            let i = r[e],
              o = a[e],
              l = s[e];
            n[e] = t * ((c * (o - i)) / (u * d) + (u * (l - o)) / (c * d));
          }
          return n;
        }
        constructor(e, t, n, r, i) {
          super(e, t, n, i),
            (this._pPrev = []),
            (this._p0 = []),
            (this._p1 = []),
            (this._pNext = []),
            (this._v0 = []),
            (this._v1 = []),
            (this._tPrev = []),
            (this._tCenter = []),
            (this._tNext = []),
            (this.tension = r.tension),
            (this.closed = r.closed),
            (this.keyframeSmoothness = r.keyframeSmoothness || []);
        }
      }
      function ei(e, t, n) {
        return e + (t - e) * n;
      }
      var ea = n(12586);
      class eo extends v.Interpolant {
        interpolate_(e, t, n, r) {
          let i = new v.Vector3()
              .fromArray(this.rollXZeroCurve.evaluate(n))
              .normalize(),
            a = this.rollCurve.evaluate(n),
            o = new v.Vector3().fromArray(this.zCurve.evaluate(n)).normalize();
          (isFinite(o.x) && isFinite(o.y) && isFinite(o.z)) || o.set(0, 0, 1);
          let s = i.clone().applyAxisAngle(o, -a),
            l = new v.Vector3().crossVectors(o, s).normalize();
          s.crossVectors(l, o);
          let u = this._m;
          return (
            u.makeBasis(s, l, o),
            this._q.setFromRotationMatrix(u),
            (this.resultBuffer[0] = this._q.x),
            (this.resultBuffer[1] = this._q.y),
            (this.resultBuffer[2] = this._q.z),
            (this.resultBuffer[3] = this._q.w),
            this.resultBuffer
          );
        }
        constructor(e, t, n, r) {
          super(e, t, 4, r),
            (this.quaternions = []),
            (this._q = new v.Quaternion()),
            (this._m = new v.Matrix4());
          let i = [],
            a = [],
            o = [],
            s = new v.Matrix4();
          for (let n = 0; n < e.length; n++) {
            let r = new v.Quaternion().fromArray(t, 4 * n);
            (this.quaternions[n] = r), s.makeRotationFromQuaternion(r);
            let l = new v.Vector3(),
              u = new v.Vector3(),
              c = new v.Vector3();
            s.extractBasis(l, u, c);
            let d = e[n];
            a.push(l), o.push(c), i.push(d);
          }
          function l(e, t, r, i) {
            return n.linear
              ? new v.LinearInterpolant(e, t, r)
              : new er(e, t, r, { ...n, closed: i });
          }
          this.zCurve = l(i, es(o), 3, n.closed);
          let u = [],
            c = [],
            d = a[0].clone();
          c.push(d), u.push(i[0]);
          for (let e = 0; e < i.length - 1; e++) {
            let t = i[e],
              n = i[e + 1],
              r = 30,
              a = new v.Vector3()
                .fromArray(this.zCurve.evaluate(t))
                .normalize();
            for (let e = 1; e <= r; e++) {
              let i = t + (e / r) * (n - t),
                o = new v.Vector3()
                  .fromArray(this.zCurve.evaluate(i))
                  .normalize(),
                s = new v.Quaternion().setFromUnitVectors(a, o);
              d.applyQuaternion(s);
              let l = new v.Vector3().crossVectors(o, d).normalize();
              (d = new v.Vector3().crossVectors(l, o).normalize()),
                c.push(d),
                u.push(i),
                (a = o);
            }
          }
          this.rollXZeroCurve = l(u, es(c), 3, !1);
          let h = [];
          for (let e = 0; e < i.length; e++) {
            let t = i[e],
              n = a[e],
              r = o[e],
              s = new v.Vector3()
                .fromArray(this.rollXZeroCurve.evaluate(t))
                .normalize(),
              l =
                el(n, s) * Math.sign(new v.Vector3().crossVectors(n, s).dot(r));
            (l = (0, ea.SI)(l, h.length > 0 ? h[h.length - 1] : l)), h.push(l);
          }
          this.rollCurve = l(i, h, 1, !1);
        }
      }
      function es(e) {
        let t = new Float32Array(3 * e.length);
        for (let n = 0; n < e.length; n++)
          (t[3 * n + 0] = e[n].x),
            (t[3 * n + 1] = e[n].y),
            (t[3 * n + 2] = e[n].z);
        return t;
      }
      function el(e, t) {
        let n = e.dot(t);
        return n > -1 && n < 1 ? Math.acos(e.dot(t)) : n <= -1 ? Math.PI : 0;
      }
      class eu extends v.Object3D {
        updateAnimationFromKeyframes(e, t) {
          var n, r, i;
          let a = this.animationMixer,
            o =
              null !==
                (i =
                  null === (n = e[e.length - 1]) || void 0 === n
                    ? void 0
                    : n.t_s) && void 0 !== i
                ? i
                : 0,
            s = this.animations[0];
          if (
            (null === (r = a.existingAction(s)) || void 0 === r || r.stop(),
            a.uncacheClip(s),
            0 === e.length)
          )
            s.duration = 0;
          else {
            let n = new Float32Array(e.map((e) => e.t_s)),
              r = e.flatMap((e) => e.position.toArray()),
              i = e.flatMap((e) => e.quaternion.toArray()),
              l = e.flatMap((e) => e.target.toArray()),
              u = s.tracks[0],
              c = s.tracks[1],
              d = s.tracks[2],
              h = s.tracks[3],
              p = s.tracks[4],
              m = s.tracks[5],
              f = s.tracks[6],
              g = s.tracks[7];
            (u.times = n),
              (u.values = new Float32Array(r)),
              (c.times = n),
              (c.values = new Float32Array(i)),
              (d.times = n),
              (d.values = new Float32Array(l)),
              (h.times = n),
              (h.values = new Float32Array(e.map((e) => e.azimuth))),
              (p.times = n),
              (p.values = new Float32Array(e.map((e) => e.elevation))),
              (m.times = n),
              (m.values = new Float32Array(e.map((e) => e.radius))),
              (f.times = n),
              (f.values = new Float32Array(
                e.flatMap((e) => e.lookAtRelativeQuaternion.toArray())
              )),
              (g.times = n),
              (g.values = new Float32Array(e.map((e) => e.focalLength)));
            for (let e = 1; e < h.values.length; e++) {
              let t = h.values[e - 1];
              h.values[e] = (0, ea.SI)(h.values[e], t);
            }
            let v = new Float32Array(e.map((e) => e.smoothness)),
              y = t.loop,
              x = t.interpolation;
            (u.createInterpolant = ec(x, u, 3, t.tension, y, v)),
              (d.createInterpolant = ec(x, d, 3, t.tension, y, v)),
              (h.createInterpolant = ec(x, h, 1, t.tension, y, v)),
              (p.createInterpolant = ec(x, p, 1, t.tension, y, v)),
              (m.createInterpolant = ec(x, m, 1, t.tension, y, v)),
              (g.createInterpolant = ec(x, g, 1, t.tension, y, v)),
              (c.createInterpolant = ed(x, c, t.tension, y, v)),
              (f.createInterpolant = ed(x, f, t.tension, y, v)),
              (s.duration = o);
            let w = a.clipAction(s);
            (w._updateTime = (e) => (w.time += e)), w.play();
          }
        }
        constructor() {
          super(),
            (this.animationCamera = new ee.N()),
            (this.animationCamera.useOrbitTransform = !0),
            (this.animationCamera.fov = J.h5.fov),
            (this.animationCamera.name = "Camera"),
            this.add(this.animationCamera),
            (this.animations = [
              new v.AnimationClip("PathAnimation", 0, [
                new v.VectorKeyframeTrack(
                  "Camera.position",
                  [0],
                  [0, 0, 0],
                  v.InterpolateSmooth
                ),
                new v.QuaternionKeyframeTrack(
                  "Camera.quaternion",
                  [0],
                  [0, 0, 0, 1]
                ),
                new v.VectorKeyframeTrack(
                  "Camera.target",
                  [0],
                  [0, 0, 0],
                  v.InterpolateSmooth
                ),
                new v.NumberKeyframeTrack(
                  "Camera.azimuth",
                  [0],
                  [0],
                  v.InterpolateSmooth
                ),
                new v.NumberKeyframeTrack(
                  "Camera.elevation",
                  [0],
                  [0],
                  v.InterpolateSmooth
                ),
                new v.NumberKeyframeTrack(
                  "Camera.radius",
                  [0],
                  [1],
                  v.InterpolateSmooth
                ),
                new v.QuaternionKeyframeTrack(
                  "Camera.lookAtRelativeQuaternion",
                  [0],
                  [0, 0, 0, 1]
                ),
                new v.NumberKeyframeTrack("Camera.focalLength", [0], [0]),
              ]),
            ]),
            (this.animationMixer = new v.AnimationMixer(this));
        }
      }
      function ec(e, t, n, r, i, a) {
        switch (e) {
          case s.Linear:
            return (e) => new v.LinearInterpolant(t.times, t.values, n, e);
          case s.Spline:
          default:
            return (e) =>
              new er(
                t.times,
                t.values,
                n,
                { closed: i, tension: r, keyframeSmoothness: a },
                e
              );
        }
      }
      function ed(e, t, n, r, i) {
        return (a) =>
          new eo(
            t.times,
            t.values,
            {
              closed: r,
              tension: n,
              keyframeSmoothness: i,
              linear: e === s.Linear,
            },
            a
          );
      }
      var eh = n(95946),
        ep = n(17615),
        em = n(80729),
        ef = n(71386),
        eg = n(54062),
        ev = n.n(eg),
        ey = n(40660),
        ex = n(94317),
        ew = n(17708),
        eb = n.n(ew),
        eC = n(85754),
        eM = n(21133),
        e_ = n(17912),
        eS = n(99601),
        ej = n(42098),
        ek = n.n(ej);
      function eE(e) {
        let t = (0, g.useRef)(null),
          n = e.keyframe,
          r = n.position.clone(),
          i = n.target.clone();
        (0, g.useEffect)(() => {
          let e = setInterval(() => {
            (r.equals(n.position) && i.equals(n.target)) ||
              (r.copy(n.position),
              i.copy(n.target),
              t.current &&
                (t.current.style.background = eL(n.position, n.target)));
          }, 1e3 / 120);
          return () => clearInterval(e);
        }, []);
        let a = n.smoothness * e.smoothnessMultiplier,
          o = (0, f.jsx)("div", {
            ref: t,
            "data-id": n.id,
            "data-keyframe": !0,
            className:
              ek().keyframeShape +
              " " +
              (e.selected ? ek().selected : "") +
              " " +
              (e.dragging ? ek().dragging : ""),
            style: {
              background: eL(n.position, n.target),
              borderRadius: 50 * a + "%",
            },
          });
        return (0, f.jsxs)("div", {
          className: ek().keyframe,
          style: {
            width: (0, ea.t7)(16, 19, a) + "px",
            height: (0, ea.t7)(16, 19, a) + "px",
            ...e.style,
          },
          children: [
            o,
            n.keyframeType === en.yX.Loop &&
              (0, f.jsx)("div", {
                className: ek().keyframeIcon,
                children: "∞",
              }),
          ],
        });
      }
      let eP = new v.Color(),
        eD = new v.Vector3();
      function eL(e, t) {
        eD.subVectors(e, t);
        let n = Math.atan2(eD.z, eD.x),
          r = Math.atan2(eD.y, Math.sqrt(eD.x * eD.x + eD.z * eD.z));
        return (
          eP.setHSL((n / Math.PI + 1) / 2, 0.5, (r / Math.PI + 1) / 2),
          "#" + eP.getHexString("srgb")
        );
      }
      let eI = e_.A.Exponential(0.05);
      class eT extends v.Object3D {
        constructor(e) {
          super(),
            (this.options = e),
            (this.lineGeometry = new w.L()),
            (this.lineMaterial = new b.Y({
              worldUnits: !1,
              linewidth: 0.005,
              color: 16777215,
              vertexColors: !0,
              transparent: !1,
              dashed: !1,
              dashScale: 1,
              dashSize: 0.01,
              dashOffset: 0,
              gapSize: 0.01,
            })),
            (this.line = null),
            (this.keyframeMeshes = []),
            (this.showAnimationCameraVisual = !1),
            (this.selectedObject = null),
            (this.onDispose = []),
            (this.dispose = () => {
              for (let e of (this.removeFromParent(),
              this.clear(),
              this.lineGeometry.dispose(),
              this.lineMaterial.dispose(),
              this.onDispose))
                e();
            }),
            (this.clear = () => (
              this.clearLine(), this.clearKeyframes(), this
            )),
            (this.clearLine = () => {
              null != this.line && (this.remove(this.line), (this.line = null)),
                this.lineGeometry.dispose(),
                (this.lineGeometry = new w.L());
            }),
            (this.clearKeyframes = () => {
              for (let e of this.keyframeMeshes) this.remove(e);
              this.keyframeMeshes = [];
            }),
            (this.setSelection = (e, t) => {
              for (let t of ((this.selectedObject = e), this.keyframeMeshes))
                t.selected = !1;
              if ((0, ea.al)(e)) {
                let t;
                null !=
                  (t =
                    e.keyframeType === en.yX.Loop
                      ? this.keyframeMeshes[0]
                      : this.keyframeMeshes.find(
                          (t) => t.keyframeId === e.id
                        )) && (t.selected = !0);
              } else v.Object3D;
            }),
            (this.setEditEnabled = (e) => {
              for (let t of this.keyframeMeshes) t.gizmoEnabled = e;
            }),
            (this.update = (e, t, n) => {
              let r = e.animationCamera;
              (this.animationCameraVisual.matrix = r.matrix),
                this.updateLine(e, t),
                this.updateKeyframes(n ? t : []);
            }),
            (this.updateLine = (e, t) => {
              if ((this.clearLine(), 0 === t.length)) return;
              let n = e.animationCamera,
                r = (0, ea.n2)(e, n),
                i = new v.AnimationMixer(e),
                a = 0;
              for (let t of e.animations) {
                let e = i.clipAction(t);
                (e._updateTime = (t) => (e.time += t)),
                  e.play(),
                  (a = Math.max(a, t.duration));
              }
              let o = [],
                s = [],
                l = new v.Color();
              i.setTime(0);
              let u = Math.floor(30 * a),
                c = a / u;
              for (let e = 0; e <= u; e++) {
                let t = e * c;
                i.setTime(t), r.updateMatrixWorld(!0);
                let n = r.position,
                  a = r.target,
                  u = r.getWorldPosition(new v.Vector3());
                o.push(u.x, u.y, u.z), l.set(eL(n, a)), s.push(l.r, l.g, l.b);
              }
              o.length > 0 &&
                (this.lineGeometry.setPositions(o),
                this.lineGeometry.setColors(s),
                (this.line = new x.w(this.lineGeometry, this.lineMaterial)),
                this.add(this.line)),
                i.stopAllAction(),
                i.uncacheRoot(e),
                i.uncacheClip(e.animations[0]),
                (0, ea.iQ)(e, n, r);
            }),
            (this.updateKeyframes = (e) => {
              for (let e of this.keyframeMeshes) e.userData.touched = !1;
              for (let t of e) {
                if (t.keyframeType === en.yX.Loop) continue;
                let e = this.keyframeMeshes.find((e) => e.keyframeId === t.id);
                if (null != e) e.setKeyframe(t), (e.userData.touched = !0);
                else {
                  let e = new eR({
                    keyframe: t,
                    onClick: this.options.onSelect,
                    onChange: this.options.onKeyframeChange,
                    onChangeEnd: this.options.onKeyframeChangeEnd,
                  });
                  (e.userData.touched = !0),
                    this.add(e),
                    this.keyframeMeshes.push(e);
                }
              }
              for (let e = this.keyframeMeshes.length - 1; e >= 0; e--) {
                let t = this.keyframeMeshes[e];
                t.userData.touched ||
                  (this.remove(t), this.keyframeMeshes.splice(e, 1));
              }
            });
          let t = new v.DirectionalLight(16777215, 1);
          t.position.set(0, 1, 0), t.target.position.set(0, 0, 0), this.add(t);
          let n = new v.HemisphereLight(16777215, 11184810, 1);
          this.add(n), (this.animationCameraVisual = new v.Object3D());
          let r = new v.Mesh(
              ez(0.9),
              new v.MeshLambertMaterial({ color: 16777215, flatShading: !0 })
            ),
            i = new v.Vector3(),
            a = new v.Vector3();
          (r.onBeforeRender = (e, t, n) => {
            i.setFromMatrixPosition(n.matrixWorld),
              a.setFromMatrixPosition(r.matrixWorld);
            let o = i.distanceTo(a),
              s = 0.05 * (o = Math.max(0.01, Math.min(4, o)));
            r.scale.setScalar(s), r.updateMatrixWorld(!0);
          }),
            this.animationCameraVisual.add(r),
            (this.animationCameraVisual.matrixAutoUpdate = !1),
            Object.defineProperty(this.animationCameraVisual, "visible", {
              get: () =>
                this.showAnimationCameraVisual &&
                this.keyframeMeshes.length >= 2,
              set: (e) => {},
            }),
            this.add(this.animationCameraVisual);
        }
      }
      function ez() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return eV("keyframeGeometry-" + e, () => {
          let t = new v.ConeGeometry(1, 2, 4, 1);
          t.rotateX(Math.PI / 2), t.rotateZ(Math.PI / 4);
          let n = new v.ConeGeometry(0.4, 1, 4, 8);
          n.scale(1, 0.4, 0.01), n.translate(0, 1, -1);
          let r = 0.75;
          return (0, eC.n4)([t, n]).scale(e * r, e * r, e * r);
        });
      }
      class eR extends v.Mesh {
        get selected() {
          return this._selected;
        }
        set selected(e) {
          var t, n, r, i;
          e && !this._selected
            ? null === (t = (n = this).onSelectStart) ||
              void 0 === t ||
              t.call(n, this)
            : !e &&
              this._selected &&
              (null === (r = (i = this).onSelectEnd) ||
                void 0 === r ||
                r.call(i, this)),
            (this._selected = e),
            (this.transformGizmo.visible = e);
        }
        setKeyframe(e) {
          (this.keyframeId = e.id),
            (this.keyframe = e),
            this.quaternion.copy(e.quaternion),
            this.position.copy(e.position),
            this.colorBase.set(eL(e.position, e.target)),
            this.colorBase.offsetHSL(0, 0.2, 0.15),
            this.colorHover.copy(this.colorBase).offsetHSL(0, 0.5, 0.25),
            this.colorOutline.copy(this.colorBase).offsetHSL(0, 0, 0.2);
        }
        constructor(e) {
          var t, n, r;
          let i = null !== (t = e.geometry) && void 0 !== t ? t : ez();
          super(i),
            (this.animator = new eM.L()),
            (this.colorLerp = 0),
            (this.hovered = !1),
            (this.defaultOpacity = 0.75),
            (this._selected = !1),
            (this.keyframeId = -1),
            (this.colorBase = new v.Color(65280)),
            (this.colorHover = new v.Color(65535)),
            (this.colorOutline = new v.Color(255)),
            (this.keyframe = e.keyframe),
            this.setKeyframe(e.keyframe),
            (this.onSelectStart = e.onSelectStart),
            (this.onSelectEnd = e.onSelectEnd),
            (this.gizmoEnabled =
              null !== (n = e.gizmoEnabled) && void 0 !== n && n),
            (this.viewIndependentSize =
              null === (r = e.viewIndependentSize) || void 0 === r || r),
            (this.material = new v.MeshLambertMaterial({
              color: this.colorBase,
              emissive: this.colorBase,
              emissiveIntensity: 0.2,
              transparent: this.defaultOpacity < 1,
              opacity: this.defaultOpacity,
              flatShading: !0,
            })),
            (this.renderOrder = 1e3),
            (this.outline = new v.Mesh(
              i,
              new v.MeshBasicMaterial({
                transparent: !0,
                opacity: 0,
                depthTest: !0,
                depthWrite: !1,
                side: v.BackSide,
              })
            )),
            (this.outline.material.color = this.colorOutline),
            this.outline.scale.setScalar(1.2),
            (this.outline.position.z = 0.1),
            this.add(this.outline),
            (0, et.x)(this, {
              cursor: "pointer",
              occludePointerEvents: !0,
              onPointerOver: (e) => (this.hovered = !0),
              onPointerOut: (e) => (this.hovered = !1),
              onPointerUp: (t, n) => {
                var r;
                return n
                  ? null === (r = e.onClick) || void 0 === r
                    ? void 0
                    : r.call(e, this.keyframe)
                  : null;
              },
            }),
            (this.transformGizmo = new eS.Mu(this, {
              ...e.transformOptions,
              translation: !0,
              rotation: !0,
            })),
            this.transformGizmo.scale.setScalar(4);
          let a = () => {
            this.updateWorldMatrix(!0, !1);
            let e = this.keyframe,
              t = en.Or.getKeyframeFromTransform(
                this.matrixWorld,
                e.t_s,
                e.target,
                e.focalLength
              );
            return (t.id = e.id), (this.keyframe = t), t;
          };
          (this.transformGizmo.onChangeStart = (t, n) => {
            var r;
            null === (r = e.onChangeStart) ||
              void 0 === r ||
              r.call(e, a(), this.position, this.quaternion, n);
          }),
            (this.transformGizmo.onChange = (t, n) => {
              e.onChange(a(), this.position, this.quaternion, n);
            }),
            (this.transformGizmo.onChangeEnd = (t, n) => {
              e.onChangeEnd(a(), this.position, this.quaternion, n);
            }),
            (this.transformGizmo.renderOrder = this.renderOrder + 1),
            (this.frustumCulled = !1);
          let o = new v.Vector3(),
            s = new v.Vector3();
          this.onBeforeRender = (e, t, n) => {
            let r = this.hovered ? 1 : 0;
            this.animator.springTo(
              this.outline.material,
              "opacity",
              this.selected ? 1 : 0,
              eI
            ),
              this.animator.springTo(
                this.material,
                "opacity",
                this.selected ? 1 : this.defaultOpacity,
                eI
              ),
              this.animator.springTo(this, "colorLerp", r, eI),
              this.animator.tick(),
              this.material.color.lerpColors(
                this.colorBase,
                this.colorHover,
                this.colorLerp
              );
            let i = this.selected && this.gizmoEnabled;
            if (
              (i && null === this.transformGizmo.parent
                ? this.add(this.transformGizmo)
                : i ||
                  null === this.transformGizmo.parent ||
                  this.remove(this.transformGizmo),
              this.viewIndependentSize)
            ) {
              o.setFromMatrixPosition(n.matrixWorld),
                s.setFromMatrixPosition(this.matrixWorld);
              let e = o.distanceTo(s),
                t = 0.05 * (e = Math.max(0.01, Math.min(4, e)));
              this.scale.setScalar(t), this.updateMatrixWorld(!0);
            }
          };
        }
      }
      let eA = {};
      function eV(e, t) {
        return void 0 === eA[e] && (eA[e] = t()), eA[e];
      }
      var eF = n(40069),
        eO = n.n(eF),
        eN = n(62512),
        eB = n(34297),
        eH = n.n(eB);
      function eU(e) {
        var t, n, r, i, a, o;
        let s = (t) => {
          var n;
          null === (n = e.onChange) ||
            void 0 === n ||
            n.call(e, { x: e.obj.x, y: e.obj.y, z: e.obj.z }, e.obj, t);
        };
        return (0, f.jsxs)(f.Fragment, {
          children: [
            null != e.label &&
              (0, f.jsx)("label", {
                className: eH().inlineLabel,
                title: e.title,
                children: (0, f.jsx)("span", {
                  children: (0, f.jsx)("b", { children: e.label }),
                }),
              }),
            (0, f.jsxs)("div", {
              className: eH().inputXYZ + " InputXYZ",
              style: e.style,
              children: [
                (0, f.jsx)(eN.R, {
                  obj: e.obj,
                  field: "x",
                  type: e.type,
                  min: null === (t = e.min) || void 0 === t ? void 0 : t.x,
                  max: null === (n = e.max) || void 0 === n ? void 0 : n.x,
                  onChange: () => s("x"),
                  units: e.units,
                  changeDelta: e.changeRate,
                }),
                (0, f.jsx)(eN.R, {
                  obj: e.obj,
                  field: "y",
                  type: e.type,
                  min: null === (r = e.min) || void 0 === r ? void 0 : r.y,
                  max: null === (i = e.max) || void 0 === i ? void 0 : i.y,
                  onChange: () => s("x"),
                  units: e.units,
                  changeDelta: e.changeRate,
                }),
                (0, f.jsx)(eN.R, {
                  obj: e.obj,
                  field: "z",
                  type: e.type,
                  min: null === (a = e.min) || void 0 === a ? void 0 : a.z,
                  max: null === (o = e.max) || void 0 === o ? void 0 : o.z,
                  onChange: () => s("x"),
                  units: e.units,
                  changeDelta: e.changeRate,
                }),
              ],
            }),
          ],
        });
      }
      function eG(e) {
        var t, n;
        let r = null !== (t = e.width) && void 0 !== t ? t : 32,
          i = null !== (n = e.height) && void 0 !== n ? n : 32,
          a = e.color;
        return (0, f.jsxs)("svg", {
          width: r,
          height: i,
          style: { fill: null != a ? a : "currentColor" },
          viewBox: "0 0 1000 1000",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, f.jsx)("path", {
              d: "M558.366 510.992C551.299 510.992 545.136 505.757 544.139 498.511C543.043 490.593 548.539 483.278 556.404 482.182C692.796 463.09 774.22 377.966 774.22 254.477C774.22 246.48 780.66 240 788.61 240C796.559 240 803 246.479 803 254.477C803 391.678 710.024 489.911 560.373 510.853C559.699 510.958 559.026 511 558.369 511L558.366 510.992Z",
            }),
            (0, f.jsx)("path", {
              d: "M212.39 760C204.441 760 198 753.545 198 745.577C198 608.899 290.977 511.031 440.629 490.166C448.427 488.947 455.765 494.566 456.861 502.46C457.957 510.348 452.461 517.635 444.595 518.728C308.202 537.749 226.765 622.546 226.765 745.574C226.765 753.536 220.324 759.997 212.38 759.997L212.39 760Z",
            }),
            (0, f.jsx)("path", {
              d: "M240.306 846H182.694C166.873 846 154 833.126 154 817.306V759.694C154 743.873 166.874 731 182.694 731H240.306C256.127 731 269 743.874 269 759.694V817.306C269 833.127 256.126 846 240.306 846ZM240.306 817.249V831.625L240.322 817.249H240.306ZM240.249 759.694L182.694 759.751L182.751 817.306L240.265 817.249L240.249 759.694Z",
            }),
            (0, f.jsx)("path", {
              d: "M817.306 269H759.694C743.873 269 731 256.126 731 240.306V182.694C731 166.873 743.874 154 759.694 154H817.306C833.127 154 846 166.874 846 182.694V240.306C846 256.127 833.126 269 817.306 269ZM817.306 240.249V254.625L817.322 240.249H817.306ZM817.249 182.694L759.694 182.751L759.751 240.306L817.265 240.249L817.249 182.694Z",
            }),
            (0, f.jsx)("path", {
              d: "M558.499 573H442.501C434.491 573 428 566.51 428 558.499V442.501C428 434.491 434.49 428 442.501 428H558.499C566.509 428 573 434.49 573 442.501V558.499C573 566.504 566.505 573 558.499 573ZM456.995 543.999H543.998V456.997H456.995V543.999Z",
            }),
          ],
        });
      }
      function eW(e) {
        var t, n;
        let r = null !== (t = e.width) && void 0 !== t ? t : 32,
          i = null !== (n = e.height) && void 0 !== n ? n : 32,
          a = e.color;
        return (0, f.jsx)("svg", {
          width: r,
          height: i,
          style: {
            fill: null != a ? a : "currentColor",
            stroke: null != a ? a : "currentColor",
          },
          viewBox: "0 0 1000 1000",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, f.jsx)("path", {
            d: "M711 180C697.479 187.799 684.328 195.385 671.5 202.784M711 825L671.5 802.003M671.5 202.784C671.5 202.784 763.701 312.299 763.701 501.799C763.701 691.299 671.5 802.003 671.5 802.003M671.5 202.784C588.628 250.587 519.261 290.599 451 329.973M671.5 802.003L451 673.625M451 329.973C374.949 373.841 300.271 416.917 209.818 469.091C185.192 483.296 185.108 518.82 209.677 533.124L451 673.625M451 329.973C451 329.973 392.5 398 392.5 501.799C392.5 605.598 451 673.625 451 673.625M453.5 329.973C453.5 329.973 512 398 512 501.799C512 605.598 453.5 673.625 453.5 673.625",
            stroke: a,
            strokeWidth: "36",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      }
      var eq = n(52520);
      class eK {
        tick() {
          this.animator.tick();
        }
        select(e) {
          this.editorGizmo.traverse((t) => {
            t.selected = t === e;
          });
        }
        getState() {
          return ev()(this.state);
        }
        setState(e) {
          eX(this.state, e);
        }
        constructor(e, t) {
          (this.animator = new eM.L()),
            (this.events = {
              onChange: new eq.v(),
              onChangeEnd: new eq.v(),
              onBakeToKeyframes: new eq.v(),
            }),
            (this.setEditEnabled = (e) => {
              this.editorGizmo.visible = e;
            }),
            (this.SelectionContextMenuHeader = () => null),
            (this.SelectionContextMenu = () => null),
            (this.type = e),
            (this.state = t),
            (this.editorGizmo = new v.Object3D());
        }
      }
      function eX(e, t) {
        for (let n in e)
          e[n] instanceof Object ? eX(e[n], t[n]) : (e[n] = t[n]);
        return e;
      }
      let eQ = {},
        eZ = [],
        eY = {
          curveSettings: {
            loop: !1,
            motionMode: o.Freeform,
            interpolation: s.Linear,
            tension: 0,
          },
          getKeyframes(e) {
            if (eO()(eQ, e)) return eZ;
            let t = [],
              n = new v.Vector3(
                e.startPosition.x,
                e.startPosition.y,
                e.startPosition.z
              ),
              r = new v.Vector3(e.target.x, e.target.y, e.target.z),
              i = new v.Quaternion(),
              a = new v.Matrix4();
            a.lookAt(n, r, new v.Vector3(0, 1, 0)), i.setFromRotationMatrix(a);
            let o = new en.Or(
                {
                  t_s: 0,
                  focalLength: e.startFocalLength,
                  position: n,
                  smoothness: 1,
                  quaternion: i,
                  target: r,
                },
                en.yX.Normal
              ),
              s = e.startFocalLength * (e.dollyDistance / n.distanceTo(r)),
              l = n
                .clone()
                .sub(r)
                .normalize()
                .multiplyScalar(e.dollyDistance)
                .add(r),
              u = new en.Or(
                {
                  t_s: e.duration,
                  focalLength: s,
                  position: l,
                  smoothness: 1,
                  quaternion: i,
                  target: r,
                },
                en.yX.Normal
              );
            return t.push(o), t.push(u), (eQ = ev()(e)), (eZ = t), t;
          },
          createEditorObject: (e) => new eJ(e),
        };
      class eJ extends eK {
        constructor(e) {
          super(u.Type.DollyZoom, e),
            (this.SelectionContextMenuHeader = () =>
              (0, f.jsxs)(f.Fragment, {
                children: [(0, f.jsx)(eW, {}), " Dolly Template"],
              })),
            (this.SelectionContextMenu = () => {
              let e = () => {
                  this.events.onChange.dispatch(void 0);
                },
                t = () => {
                  this.events.onChangeEnd.dispatch(void 0);
                },
                n = this.state,
                r = { onChange: e, onChangeEnd: t };
              return (0, f.jsxs)(f.Fragment, {
                children: [
                  (0, f.jsx)(eU, {
                    label: "Start",
                    obj: n.startPosition,
                    ...r,
                  }),
                  (0, f.jsx)(eN.R, {
                    label: "Focal Length",
                    obj: n,
                    field: "startFocalLength",
                    units: "mm",
                    ...r,
                  }),
                  (0, f.jsx)(eN.R, {
                    label: "Dolly Distance",
                    obj: n,
                    field: "dollyDistance",
                    units: "m",
                    ...r,
                  }),
                  (0, f.jsx)("hr", {}),
                  (0, f.jsx)(eU, { label: "Target", obj: n.target, ...r }),
                  (0, f.jsx)("hr", {}),
                  (0, f.jsx)(eN.R, {
                    label: "Duration",
                    obj: n,
                    field: "duration",
                    units: "s",
                    min: 1,
                    ...r,
                  }),
                  (0, f.jsx)("hr", {}),
                  (0, f.jsx)("div", {
                    style: { display: "flex", justifyContent: "center" },
                    children: (0, f.jsxs)("button", {
                      onClick: () =>
                        this.events.onBakeToKeyframes.dispatch(void 0),
                      children: [
                        (0, f.jsx)(eG, { width: 24, height: 24 }),
                        " Edit Keyframes",
                      ],
                    }),
                  }),
                ],
              });
            });
        }
      }
      var e$ = n(57503),
        e0 = n(13023);
      let e1 = e_.A.Exponential(0.05);
      class e3 extends e$.w {
        set(e, t) {
          let n = [],
            r = new v.Vector3(t.x - e.x, t.y - e.y, t.z - e.z),
            i = r.length(),
            a = i > 0 ? r.multiplyScalar(1 / i) : new v.Vector3(1, 0, 0),
            o = 0.1,
            s = 0;
          for (let t = 0; t < i; t += o) {
            if (s % 2 == 0) {
              let r = Math.min(t + o, i);
              n.push(e.x + a.x * t, e.y + a.y * t, e.z + a.z * t),
                n.push(e.x + a.x * r, e.y + a.y * r, e.z + a.z * r);
            }
            s += 1;
          }
          let l = new e0.z();
          l.setPositions(n), (this.geometry = l);
        }
        toggleDisplay(e) {
          let t =
              !(arguments.length > 1) ||
              void 0 === arguments[1] ||
              arguments[1],
            n = e ? this.displayShowOpacity : this.displayHideOpacity;
          t
            ? this.animator.springTo(this.material, "opacity", n, e1)
            : this.animator.setTo(this.material, "opacity", n);
        }
        tick() {
          this.animator.tick();
        }
        constructor(e = new v.Vector3(), t = new v.Vector3(), n) {
          super(
            new e0.z(),
            new b.Y({
              color: 16777215,
              worldUnits: !0,
              linewidth: 0.03,
              opacity: 1,
              transparent: !0,
              depthWrite: !1,
              ...n,
            })
          ),
            (this.animator = new eM.L()),
            (this.displayShowOpacity = 0.75),
            (this.displayHideOpacity = 0),
            this.set(e, t),
            this.toggleDisplay(!0, !1);
        }
      }
      function e2(e) {
        var t, n;
        let r = null !== (t = e.width) && void 0 !== t ? t : 32,
          i = null !== (n = e.height) && void 0 !== n ? n : 32,
          a = e.color;
        return (0, f.jsxs)("svg", {
          width: r,
          height: i,
          style: { fill: null != a ? a : "currentColor" },
          viewBox: "0 0 1000 1000",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, f.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M500.019 583.668C392.955 583.668 297.891 563.199 239.019 531.101C205.252 512.669 183.355 491.569 183.355 466.999C183.355 442.435 205.252 421.335 239.019 402.898C297.887 370.799 392.948 350.331 500.019 350.331C607.091 350.331 702.148 370.799 761.019 402.898C794.787 421.329 816.684 442.429 816.684 466.999C816.684 482.435 807.448 496.598 792.381 509.768C765.082 533.668 719.445 553.132 662.917 566.235C653.949 568.3 648.385 577.267 650.45 586.235C652.515 595.202 661.482 600.799 670.45 598.701C733.453 584.137 783.916 561.503 814.35 534.834C837.816 514.299 850.014 491.034 850.014 467C850.014 432.697 824.15 399.366 776.979 373.636C714.479 339.567 613.707 317 500.007 317C386.307 317 285.55 339.567 223.036 373.636C175.87 399.367 150 432.704 150 467C150 501.303 175.864 534.634 223.036 560.364C285.536 594.433 386.307 617 500.007 617C509.209 617 516.676 609.533 516.676 600.331C516.676 591.129 509.209 583.663 500.007 583.663L500.019 583.668Z",
            }),
            (0, f.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M421.548 545.468L476.448 600.333L421.548 655.199C415.047 661.734 415.047 672.263 421.548 678.799C428.083 685.3 438.612 685.3 445.148 678.799L511.817 612.131C518.318 605.596 518.318 595.066 511.817 588.531L445.148 521.862C438.613 515.361 428.084 515.361 421.548 521.862C415.047 528.397 415.047 538.926 421.548 545.462V545.468Z",
            }),
          ],
        });
      }
      class e4 extends v.Object3D {
        get selected() {
          return this._selected;
        }
        set selected(e) {
          var t, n, r, i;
          e && !this._selected
            ? null === (t = (n = this).onSelectStart) ||
              void 0 === t ||
              t.call(n, this)
            : !e &&
              this._selected &&
              (null === (r = (i = this).onSelectEnd) ||
                void 0 === r ||
                r.call(i, this)),
            (this._selected = e),
            (this.transformGizmo.visible = e);
        }
        constructor(e) {
          super(),
            (this._selected = !1),
            (this.onSelectStart = e.onSelectStart),
            (this.onSelectEnd = e.onSelectEnd);
          let t = new v.Mesh(
            new v.SphereGeometry(1, 32, 32),
            new v.MeshLambertMaterial({
              emissive: 16777215,
              emissiveIntensity: 0.1,
            })
          );
          this.add(t);
          let n = new eS.Mu(this, e.transformOptions);
          (this.transformGizmo = n),
            (n.visible = !1),
            n.scale.setScalar(0.75),
            (n.onChangeStart = (t, n) => {
              var r;
              null === (r = e.onChangeStart) ||
                void 0 === r ||
                r.call(e, t.position, t.quaternion, n);
            }),
            (n.onChange = (t, n) => {
              var r;
              null === (r = e.onChange) ||
                void 0 === r ||
                r.call(e, t.position, t.quaternion, n);
            }),
            (n.onChangeEnd = (t, n) => {
              var r;
              null === (r = e.onChangeEnd) ||
                void 0 === r ||
                r.call(e, t.position, t.quaternion, n);
            }),
            this.add(n),
            e5(t, 0.025),
            (0, et.x)(t, {
              cursor: "pointer",
              occludePointerEvents: !0,
              onPointerUp: (t, n) => {
                if (n) {
                  var r;
                  null === (r = e.onClick) || void 0 === r || r.call(e, t);
                }
              },
            });
        }
      }
      function e5(e, t) {
        (e.frustumCulled = !1), (e.renderOrder = -1 / 0);
        let n = new v.Vector3(),
          r = new v.Vector3(),
          i = e.onBeforeRender;
        return (
          (e.onBeforeRender = (a, o, s, l, u, c) => {
            n.setFromMatrixPosition(s.matrixWorld),
              r.setFromMatrixPosition(e.matrixWorld);
            let d = n.distanceTo(r);
            e.scale.setScalar(t * d),
              e.updateWorldMatrix(!1, !0),
              null == i || i(a, o, s, l, u, c);
          }),
          {
            remove: () => {
              e.onBeforeRender = i;
            },
          }
        );
      }
      function e6(e) {
        var t, n;
        let r = Array.isArray(e.options)
            ? e.options.map((e) => ({ key: e, value: e }))
            : Object.entries(e.options).map((e) => {
                let [t, n] = e;
                return { key: t, value: n };
              }),
          i =
            (null === (t = e.showLabel) || void 0 === t || t) &&
            null != e.label;
        return (0, f.jsxs)("div", {
          style: {
            display: "flex",
            gap: "12px",
            ...(null !== (n = e.style) && void 0 !== n ? n : {}),
          },
          children: [
            (0, f.jsx)("label", {
              className: eH().inlineLabel + " ",
              title: e.title,
              style: { display: i ? "" : "none", cursor: "e-resize" },
              onClick: () => {
                let t = r.findIndex((t) => t.value === e.value);
                (t = -1 === t ? 0 : (t + 1) % r.length), e.onChange(r[t].value);
              },
              children: (0, f.jsx)("b", { children: e.label }),
            }),
            (0, f.jsx)("div", {
              id: e.id,
              className: eH().inputRadio,
              children: r.map((t) =>
                (0, f.jsxs)(
                  "div",
                  {
                    onClick: () => e.onChange(t.value),
                    className: e.value === t.value ? eH().selected : "",
                    children: [" ", t.key + "", " "],
                  },
                  t.key + ""
                )
              ),
            }),
          ],
        });
      }
      let e9 = new v.Matrix4(),
        e8 = {},
        e7 = [],
        te = {
          curveSettings: {
            loop: !1,
            motionMode: o.Orbit,
            interpolation: s.Spline,
            tension: 0,
          },
          getKeyframes(e) {
            if (eO()(e8, e)) return e7;
            let t = [];
            for (let n = 0; n < 5; n++) {
              let r =
                  e.rotation_radians + (e.direction * (2 * Math.PI) * n) / 4,
                i = new v.Vector3(
                  e.target.x + Math.cos(r) * e.radius,
                  e.target.y + e.height,
                  e.target.z + Math.sin(r) * e.radius
                ),
                a = new v.Quaternion(),
                o = new v.Vector3(e.target.x, e.target.y, e.target.z);
              e9.lookAt(i, o, v.Object3D.DEFAULT_UP).decompose(
                new v.Vector3(),
                a,
                new v.Vector3()
              );
              let s = new en.Or(
                {
                  t_s: (n * e.duration) / 4,
                  focalLength: e.focalLength,
                  position: i,
                  quaternion: a,
                  target: o,
                  smoothness: 1,
                },
                en.yX.Normal
              );
              t.push(s);
            }
            return (e8 = ev()(e)), (e7 = t), t;
          },
          createEditorObject: (e) => new tn(e),
        },
        tt = 0.05;
      class tn extends eK {
        setState(e) {
          super.setState(e),
            this.targetHandle.position.set(e.target.x, e.target.y, e.target.z),
            this.radiusHandle.position.set(
              e.target.x + Math.cos(e.rotation_radians) * e.radius,
              e.target.y + e.height,
              e.target.z + Math.sin(e.rotation_radians) * e.radius
            );
          let t = this.radiusHandle.position
            .clone()
            .sub(this.targetHandle.position);
          {
            let e = new v.Vector3(t.x, t.y, t.z).clone().normalize(),
              n = new v.Vector3(0, 1, 0).cross(e).normalize(),
              r = e.clone().cross(n).normalize(),
              i = new v.Matrix4();
            i.set(
              n.x,
              r.x,
              e.x,
              0,
              n.y,
              r.y,
              e.y,
              0,
              n.z,
              r.z,
              e.z,
              0,
              0,
              0,
              0,
              1
            ),
              this.radiusHandle.quaternion.setFromRotationMatrix(i);
          }
          {
            let e = new v.Vector3(t.x, 0, t.z).clone().normalize(),
              n = new v.Vector3(0, 1, 0).cross(e).normalize(),
              r = e.clone().cross(n).normalize(),
              i = new v.Matrix4();
            i.set(
              n.x,
              r.x,
              e.x,
              0,
              n.y,
              r.y,
              e.y,
              0,
              n.z,
              r.z,
              e.z,
              0,
              0,
              0,
              0,
              1
            );
            let a = new v.Quaternion().setFromRotationMatrix(i);
            this.radiusHandle.transformGizmo.quaternion
              .copy(this.radiusHandle.quaternion)
              .invert(),
              this.radiusHandle.transformGizmo.quaternion.multiply(a);
          }
          {
            let t = new v.Vector3(
                e.target.x,
                e.target.y + e.height,
                e.target.z
              ),
              n = this.radiusHandle.position;
            this.radiusVisual.set(t, n);
          }
          {
            let t = new v.Vector3(e.target.x, e.target.y, e.target.z),
              n = new v.Vector3(e.target.x, e.target.y + e.height, e.target.z);
            this.heightVisual.set(t, n);
          }
        }
        constructor(e) {
          super(u.Type.Orbit, e),
            (this.radiusVisual = new e3()),
            (this.heightVisual = new e3()),
            (this.SelectionContextMenuHeader = () =>
              (0, f.jsxs)(f.Fragment, {
                children: [(0, f.jsx)(e2, {}), " Orbit Template"],
              })),
            (this.SelectionContextMenu = () => {
              let [e, t] = (0, g.useState)(this.state.direction),
                n = (e, t, n) => {
                  this.events.onChange.dispatch(void 0),
                    "radius" == n &&
                      (this.select(this.radiusHandle),
                      this.radiusVisual.toggleDisplay(!0)),
                    "height" == n &&
                      (this.select(this.radiusHandle),
                      this.heightVisual.toggleDisplay(!0)),
                    t == this.state.target && this.select(this.targetHandle);
                },
                r = (e, t, n) => {
                  this.events.onChangeEnd.dispatch(void 0),
                    "radius" == n && this.radiusVisual.toggleDisplay(!1),
                    "height" == n && this.heightVisual.toggleDisplay(!1);
                },
                i = this.state,
                a = { onChange: n, onChangeEnd: r };
              return (0, f.jsxs)(f.Fragment, {
                children: [
                  (0, f.jsx)(eN.R, {
                    ...a,
                    label: "Radius",
                    obj: i,
                    field: "radius",
                    min: tt,
                    onFocus: () => this.select(this.radiusHandle),
                    onHoverStart: () => this.radiusVisual.toggleDisplay(!0),
                    onHoverEnd: () => this.radiusVisual.toggleDisplay(!1),
                  }),
                  (0, f.jsx)(eN.R, {
                    ...a,
                    label: "Height",
                    obj: i,
                    field: "height",
                    onFocus: () => this.select(this.radiusHandle),
                    onHoverStart: () => this.heightVisual.toggleDisplay(!0),
                    onHoverEnd: () => this.heightVisual.toggleDisplay(!1),
                  }),
                  (0, f.jsx)(eN.R, {
                    ...a,
                    label: "Rotation",
                    obj: i,
                    field: "rotation_radians",
                    units: "\xb0",
                    onFocus: () => this.select(this.radiusHandle),
                    changeDelta: 30,
                    conversion: {
                      toDisplay: v.MathUtils.radToDeg,
                      fromDisplay: v.MathUtils.degToRad,
                    },
                  }),
                  (0, f.jsx)(eN.R, {
                    label: "Focal Length",
                    obj: i,
                    field: "focalLength",
                    ...a,
                  }),
                  (0, f.jsx)(e6, {
                    label: "Direction",
                    value: e,
                    options: { "<": 1, ">": -1 },
                    onChange: (e) => {
                      (this.state.direction = e),
                        t(this.state.direction),
                        n(e, this.state, "direction");
                    },
                  }),
                  (0, f.jsx)(eN.R, {
                    label: "Duration",
                    obj: i,
                    field: "duration",
                    units: "s",
                    min: 1,
                    ...a,
                  }),
                  (0, f.jsx)("hr", {}),
                  (0, f.jsx)(eU, { label: "Target", obj: i.target, ...a }),
                  (0, f.jsx)("hr", {}),
                  (0, f.jsx)("div", {
                    style: { display: "flex", justifyContent: "center" },
                    children: (0, f.jsxs)("button", {
                      onClick: () =>
                        this.events.onBakeToKeyframes.dispatch(void 0),
                      children: [
                        (0, f.jsx)(eG, { width: 24, height: 24 }),
                        " Edit Keyframes",
                      ],
                    }),
                  }),
                ],
              });
            });
          let t = 0,
            n = e.rotation_radians;
          this.targetHandle = new e4({
            transformOptions: {
              translationX: !0,
              translationY: !0,
              translationZ: !0,
              rotationX: !1,
              rotationY: !0,
              rotationZ: !1,
            },
            onChangeStart: (e, r) => {
              let i = new v.Vector3(1, 0, 0).applyQuaternion(r);
              (t = Math.atan2(i.z, i.x)), (n = this.state.rotation_radians);
            },
            onChange: (e, r) => {
              (this.state.target.x = e.x),
                (this.state.target.y = e.y),
                (this.state.target.z = e.z);
              let i = new v.Vector3(1, 0, 0).applyQuaternion(r),
                a = Math.atan2(i.z, i.x) - t;
              (this.state.rotation_radians = n + a),
                this.events.onChange.dispatch(void 0);
            },
            onChangeEnd: (e, t) => {
              this.events.onChangeEnd.dispatch(void 0);
            },
            onClick: () => {
              this.select(this.targetHandle);
            },
          });
          let r = new v.Vector2();
          (this.radiusHandle = new eR({
            gizmoEnabled: !0,
            keyframe: new en.Or(
              {
                t_s: 0,
                focalLength: 0,
                position: new v.Vector3(0, 0, 0),
                quaternion: new v.Quaternion(),
                target: new v.Vector3(0, 0, 0),
                smoothness: 1,
              },
              en.yX.Normal
            ),
            transformOptions: {
              translationX: !1,
              translationY: !0,
              translationZ: !0,
              rotationX: !1,
              rotationY: !1,
              rotationZ: !1,
            },
            onChangeStart: (e, t, n, i) => {
              r.set(t.x - this.state.target.x, t.z - this.state.target.z),
                "translateZ" == i.name && this.radiusVisual.toggleDisplay(!0),
                "translateY" == i.name && this.heightVisual.toggleDisplay(!0);
            },
            onChange: (e, t, n, i) => {
              let a = new v.Vector2(
                  t.x - this.state.target.x,
                  t.z - this.state.target.z
                ),
                o = a.length() * Math.sign(a.dot(r));
              o < tt &&
                (o > 0 ? a.multiplyScalar(tt / o) : a.set(tt, 0),
                (o = tt),
                (t.x = this.state.target.x + a.x),
                (t.z = this.state.target.z + a.y)),
                (this.state.radius = a.length()),
                (this.state.height = t.y - this.state.target.y),
                this.events.onChange.dispatch(void 0),
                "translateZ" == i.name && this.radiusVisual.toggleDisplay(!0),
                "translateY" == i.name && this.heightVisual.toggleDisplay(!0);
            },
            onChangeEnd: (e, t, n, r) => {
              this.events.onChangeEnd.dispatch(void 0),
                "translateZ" == r.name && this.radiusVisual.toggleDisplay(!1),
                "translateY" == r.name && this.heightVisual.toggleDisplay(!1);
            },
            onSelectEnd: () => {
              this.radiusVisual.toggleDisplay(!1),
                this.heightVisual.toggleDisplay(!1);
            },
            onClick: () => {
              this.select(this.radiusHandle);
            },
          })),
            this.radiusHandle.transformGizmo.zAxis.events.onHoverStart.addListener(
              () => {
                this.radiusVisual.toggleDisplay(!0);
              }
            ),
            this.radiusHandle.transformGizmo.zAxis.events.onHoverEnd.addListener(
              () => {
                this.radiusVisual.toggleDisplay(!1);
              }
            ),
            this.radiusHandle.transformGizmo.yAxis.events.onHoverStart.addListener(
              () => {
                this.heightVisual.toggleDisplay(!0);
              }
            ),
            this.radiusHandle.transformGizmo.yAxis.events.onHoverEnd.addListener(
              () => {
                this.heightVisual.toggleDisplay(!1);
              }
            ),
            this.editorGizmo.add(this.targetHandle),
            this.editorGizmo.add(this.radiusHandle),
            this.editorGizmo.add(this.radiusVisual),
            this.editorGizmo.add(this.heightVisual),
            this.radiusVisual.toggleDisplay(!1, !1),
            this.heightVisual.toggleDisplay(!1, !1),
            this.animator.onAfterStep.addListener((e) => {
              this.radiusVisual.tick(), this.heightVisual.tick();
            }),
            this.setState(e);
        }
      }
      function tr(e) {
        var t, n;
        let r = null !== (t = e.width) && void 0 !== t ? t : 32,
          i = null !== (n = e.height) && void 0 !== n ? n : 32,
          a = e.color;
        return (0, f.jsx)("svg", {
          width: r,
          height: i,
          style: { fill: null != a ? a : "currentColor" },
          viewBox: "0 0 1000 1000",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, f.jsx)("path", {
            d: "M865.991 514.043C865.991 615.64 782.961 700.299 679.605 700.299C677.909 700.299 515.237 698.604 477.969 519.123C444.081 359.949 322.083 363.346 322.083 363.346C237.361 363.346 169.581 431.079 169.581 515.741C169.581 600.403 237.361 668.136 322.083 668.136C367.833 668.136 410.197 647.817 439.001 612.258C445.781 605.483 455.947 603.794 462.721 610.563C469.501 617.338 471.192 627.498 464.418 634.267C428.834 676.601 376.304 702 320.386 702C218.718 702 134 619.027 134 515.744C134 412.452 217.031 329.488 320.386 329.488C320.386 329.488 471.189 324.408 510.171 512.362C542.368 664.757 672.84 668.139 679.622 668.139C762.653 668.139 832.124 600.406 832.124 515.744C832.124 431.082 764.344 363.349 679.622 363.349C644.039 363.349 610.151 376.893 581.342 398.907L637.259 407.372C645.729 409.067 652.509 417.532 652.509 425.996C650.813 434.461 644.039 441.236 635.562 441.236H633.866L542.365 429.381C537.282 429.381 532.198 425.996 528.811 420.916C525.424 415.836 523.728 410.757 525.424 403.982L537.287 314.24C538.984 305.775 547.454 299 555.925 299C564.395 300.695 571.175 309.16 571.175 317.624L564.395 370.118C596.592 343.023 637.259 329.479 681.313 329.479C782.981 327.784 866 412.452 866 514.052L865.991 514.043Z",
          }),
        });
      }
      let ti = {},
        ta = [],
        to = {
          curveSettings: {
            loop: !0,
            motionMode: o.Orbit,
            interpolation: s.Spline,
            tension: 0,
          },
          getKeyframes(e) {
            if (eO()(ti, e)) return ta;
            let t = e.viewPosition,
              n = [
                {
                  radius: t.radius,
                  elevation: t.elevation,
                  azimuth: t.azimuth,
                },
                {
                  radius: t.radius,
                  elevation: t.elevation + e.amplitudeElevation,
                  azimuth: t.azimuth - e.amplitudeAzimuth,
                },
                {
                  radius: t.radius,
                  elevation: t.elevation - e.amplitudeElevation,
                  azimuth: t.azimuth - e.amplitudeAzimuth,
                },
                {
                  radius: t.radius,
                  elevation: t.elevation,
                  azimuth: t.azimuth,
                },
                {
                  radius: t.radius,
                  elevation: t.elevation + e.amplitudeElevation,
                  azimuth: t.azimuth + e.amplitudeAzimuth,
                },
                {
                  radius: t.radius,
                  elevation: t.elevation - e.amplitudeElevation,
                  azimuth: t.azimuth + e.amplitudeAzimuth,
                },
              ],
              r = n.map((t, r) => {
                let i = new v.Vector3(e.target.x, e.target.y, e.target.z),
                  a = (0, ea.pg)(t),
                  o = new v.Vector3(i.x + a.x, i.y + a.y, i.z + a.z),
                  s = new v.Quaternion(),
                  l = new v.Matrix4();
                return (
                  l.lookAt(o, i, new v.Vector3(0, 1, 0)),
                  s.setFromRotationMatrix(l),
                  new en.Or(
                    {
                      t_s: (r * e.duration) / (n.length - 1),
                      position: o,
                      focalLength: e.focalLength,
                      smoothness: 1,
                      target: i,
                      quaternion: s,
                    },
                    en.yX.Normal
                  )
                );
              });
            return (ti = ev()(e)), (ta = r), r;
          },
          createEditorObject: (e) => new tl(e),
        },
        ts = 0.05;
      class tl extends eK {
        setState(e) {
          super.setState(e),
            this.targetHandle.position.set(e.target.x, e.target.y, e.target.z);
          let t = (0, ea.pg)(e.viewPosition);
          this.viewPositionHandle.position.set(
            e.target.x + t.x,
            e.target.y + t.y,
            e.target.z + t.z
          );
          {
            let e = new v.Vector3(t.x, t.y, t.z).clone().normalize(),
              n = new v.Vector3(0, 1, 0).cross(e).normalize(),
              r = e.clone().cross(n).normalize(),
              i = new v.Matrix4();
            i.set(
              n.x,
              r.x,
              e.x,
              0,
              n.y,
              r.y,
              e.y,
              0,
              n.z,
              r.z,
              e.z,
              0,
              0,
              0,
              0,
              1
            ),
              this.viewPositionHandle.quaternion.setFromRotationMatrix(i);
          }
          this.radiusVisual.set(e.target, this.viewPositionHandle.position);
        }
        constructor(e) {
          super(u.Type.Oscillate, e),
            (this.radiusVisual = new e3()),
            (this.SelectionContextMenuHeader = () =>
              (0, f.jsxs)(f.Fragment, {
                children: [(0, f.jsx)(tr, {}), " Oscillate Template"],
              })),
            (this.SelectionContextMenu = () => {
              let e = (e, t, r) => {
                  this.events.onChange.dispatch(void 0),
                    t === n.viewPosition && this.radiusVisual.toggleDisplay(!0);
                },
                t = (e, t, r) => {
                  this.events.onChangeEnd.dispatch(void 0),
                    t === n.viewPosition && this.radiusVisual.toggleDisplay(!1);
                },
                n = this.state,
                r = { onChange: e, onChangeEnd: t };
              return (0, f.jsxs)(f.Fragment, {
                children: [
                  (0, f.jsx)(eN.R, {
                    label: "Stretch X",
                    obj: n,
                    field: "amplitudeAzimuth",
                    units: "\xb0",
                    conversion: "radiansToDegrees",
                    changeDelta: 30,
                    min: 0,
                    max: 160,
                    ...r,
                  }),
                  (0, f.jsx)(eN.R, {
                    label: "Stretch Y",
                    obj: n,
                    field: "amplitudeElevation",
                    units: "\xb0",
                    conversion: "radiansToDegrees",
                    changeDelta: 15,
                    min: 0,
                    max: 80,
                    ...r,
                  }),
                  (0, f.jsx)(eN.R, {
                    label: "Focal Length",
                    obj: n,
                    field: "focalLength",
                    units: "mm",
                    min: 0,
                    ...r,
                  }),
                  (0, f.jsx)("hr", {}),
                  (0, f.jsx)(eN.R, {
                    label: "Azimuth",
                    obj: n.viewPosition,
                    field: "azimuth",
                    units: "\xb0",
                    conversion: "radiansToDegrees",
                    changeDelta: 60,
                    ...r,
                    onHoverStart: () => this.radiusVisual.toggleDisplay(!0),
                    onHoverEnd: () => this.radiusVisual.toggleDisplay(!1),
                  }),
                  (0, f.jsx)(eN.R, {
                    label: "Elevation",
                    obj: n.viewPosition,
                    field: "elevation",
                    units: "\xb0",
                    conversion: "radiansToDegrees",
                    changeDelta: 30,
                    ...r,
                    onHoverStart: () => this.radiusVisual.toggleDisplay(!0),
                    onHoverEnd: () => this.radiusVisual.toggleDisplay(!1),
                  }),
                  (0, f.jsx)(eN.R, {
                    label: "Distance",
                    obj: n.viewPosition,
                    field: "radius",
                    min: ts,
                    ...r,
                  }),
                  (0, f.jsx)(eU, { label: "Target", obj: n.target, ...r }),
                  (0, f.jsx)("hr", {}),
                  (0, f.jsx)(eN.R, {
                    label: "Duration",
                    obj: n,
                    field: "duration",
                    units: "s",
                    min: 1,
                    ...r,
                  }),
                  (0, f.jsx)("hr", {}),
                  (0, f.jsx)("div", {
                    style: { display: "flex", justifyContent: "center" },
                    children: (0, f.jsxs)("button", {
                      onClick: () =>
                        this.events.onBakeToKeyframes.dispatch(void 0),
                      children: [
                        (0, f.jsx)(eG, { width: 24, height: 24 }),
                        " Edit Keyframes",
                      ],
                    }),
                  }),
                ],
              });
            }),
            (this.targetHandle = new e4({
              transformOptions: {
                translationX: !0,
                translationY: !0,
                translationZ: !0,
                rotationX: !1,
                rotationY: !1,
                rotationZ: !1,
              },
              onChange: (e, t) => {
                (this.state.target.x = e.x),
                  (this.state.target.y = e.y),
                  (this.state.target.z = e.z);
                let n = new v.Vector3(1, 0, 0).applyQuaternion(t);
                n.z, n.x, this.events.onChange.dispatch(void 0);
              },
              onChangeEnd: (e, t) => {
                this.events.onChangeEnd.dispatch(void 0);
              },
              onClick: () => {
                this.select(this.targetHandle);
              },
            }));
          let t = new v.Vector3();
          (this.viewPositionHandle = new eR({
            keyframe: new en.Or(
              {
                t_s: 0,
                focalLength: 0,
                position: new v.Vector3(0, 0, 0),
                quaternion: new v.Quaternion(),
                target: new v.Vector3(0, 0, 0),
                smoothness: 1,
              },
              en.yX.Normal
            ),
            gizmoEnabled: !0,
            transformOptions: {
              translationX: !1,
              translationY: !1,
              translationZ: !0,
              rotationX: !1,
              rotationY: !1,
              rotationZ: !1,
            },
            onChangeStart: (e, n, r, i) => {
              t.copy(n),
                "translateZ" == i.name && this.radiusVisual.toggleDisplay(!0);
            },
            onChange: (e, n, r, i) => {
              let a = new v.Vector3(
                  this.state.target.x,
                  this.state.target.y,
                  this.state.target.z
                ),
                o = new v.Vector3(n.x, n.y, n.z).sub(a),
                s = t.clone().sub(a).normalize().clone().multiplyScalar(ts);
              0 > o.dot(s) && (o.copy(s), n.copy(a).add(o)),
                (this.state.viewPosition.radius = o.length()),
                "translateZ" == i.name && this.radiusVisual.toggleDisplay(!0),
                this.events.onChange.dispatch(void 0);
            },
            onChangeEnd: (e, t, n, r) => {
              this.events.onChangeEnd.dispatch(void 0),
                "translateZ" == r.name && this.radiusVisual.toggleDisplay(!1);
            },
            onSelectEnd: () => {
              this.radiusVisual.toggleDisplay(!1);
            },
            onClick: () => {
              this.select(this.viewPositionHandle);
            },
          })),
            (this.radiusVisual.displayShowOpacity = 0.75),
            (this.radiusVisual.displayHideOpacity = 0.2),
            this.editorGizmo.add(this.targetHandle),
            this.editorGizmo.add(this.viewPositionHandle),
            this.editorGizmo.add(this.radiusVisual),
            this.radiusVisual.toggleDisplay(!1, !1),
            this.viewPositionHandle.transformGizmo.zAxis.events.onHoverStart.addListener(
              () => {
                this.radiusVisual.toggleDisplay(!0);
              }
            ),
            this.viewPositionHandle.transformGizmo.zAxis.events.onHoverEnd.addListener(
              () => {
                this.radiusVisual.toggleDisplay(!1);
              }
            ),
            this.animator.onAfterStep.addListener((e) => {
              this.radiusVisual.tick();
            }),
            this.setState(e);
        }
      }
      !(function (e) {
        let t;
        !(function (e) {
          (e.Orbit = "orbit"),
            (e.Oscillate = "oscillate"),
            (e.DollyZoom = "dollyZoom");
        })((t = e.Type || (e.Type = {})));
        let n = { orbit: te, dollyZoom: eY, oscillate: to };
        function r(e) {
          return (
            n[e.type] ||
            (console.error("unknown template type ".concat(e.type)), null)
          );
        }
        function i(e) {
          var t, n;
          return null !==
            (n =
              null === (t = r(e)) || void 0 === t ? void 0 : t.curveSettings) &&
            void 0 !== n
            ? n
            : {};
        }
        function a(e) {
          var t, n;
          return null !==
            (n =
              null === (t = r(e)) || void 0 === t
                ? void 0
                : t.getKeyframes(e)) && void 0 !== n
            ? n
            : [];
        }
        function o(e) {
          var t, n;
          return null !==
            (n =
              null === (t = r(e)) || void 0 === t
                ? void 0
                : t.createEditorObject(e)) && void 0 !== n
            ? n
            : null;
        }
        (e.getCurveSettings = i),
          (e.getKeyframes = a),
          (e.createEditorObject = o);
      })(u || (u = {}));
      var tu = n(59165),
        tc = n.n(tu);
      function td(e) {
        var t, n, r, i;
        let a = (0, g.useRef)(null),
          o =
            null !==
              (r =
                null === (t = a.current) || void 0 === t
                  ? void 0
                  : t.clientWidth) && void 0 !== r
              ? r
              : 0,
          s =
            null !==
              (i =
                null === (n = a.current) || void 0 === n
                  ? void 0
                  : n.clientHeight) && void 0 !== i
              ? i
              : 0,
          l = o / s,
          u = e.videoWidth / e.videoHeight,
          c = s * u,
          d = o / u,
          h = u > l;
        return (0, f.jsxs)("div", {
          id: "frameGuide",
          ref: a,
          className: tc().frameGuideContainer,
          children: [
            (0, f.jsx)("div", {
              className: tc().frameGuide,
              style: {
                bottom: h ? (1 - (1 - d / s) * 0.5) * 100 + "%" : "-1px",
                right: h ? "-1px" : (1 - (1 - c / o) * 0.5) * 100 + "%",
                left: "-1px",
                top: "-1px",
              },
            }),
            (0, f.jsx)("div", {
              className: tc().frameGuide,
              style: {
                top: h ? (1 - (1 - d / s) * 0.5) * 100 + "%" : "-1px",
                left: h ? "-1px" : (1 - (1 - c / o) * 0.5) * 100 + "%",
                bottom: "-1px",
                right: "-1px",
              },
            }),
          ],
        });
      }
      function th(e) {
        var t;
        let n = (0, g.useRef)(null);
        return (0, f.jsxs)("button", {
          onClick: () => {
            var e;
            return null === (e = n.current) || void 0 === e
              ? void 0
              : e.click();
          },
          style: e.style,
          children: [
            (0, f.jsx)(ef.aAW, {}),
            " ",
            (0, f.jsx)("span", {
              children:
                null !== (t = e.label) && void 0 !== t ? t : "Import File",
            }),
            (0, f.jsx)("input", {
              ref: n,
              type: "file",
              accept: ".fbx,.json",
              hidden: !0,
              onChange: (t) => {
                if (null == t.target.files || 0 == t.target.files.length) {
                  console.warn("No files selected");
                  return;
                }
                e.onImportFile(t.target.files[0]), (t.target.value = "");
              },
            }),
          ],
        });
      }
      var tp = n(11859),
        tm = n.n(tp);
      let tf = (e) =>
        (0, f.jsx)("div", {
          className: tm().clearMenu,
          ...e,
          children: e.children,
        });
      tf.Section = (e) => {
        var t, n, r;
        let i;
        let { collapsed: a, onCollapseChange: o, header: s, ...l } = e,
          [u, c] = (0, g.useState)(
            null !== (n = e.collapsed) && void 0 !== n && n
          ),
          d = (0, g.useRef)(u);
        d.current = u;
        let h = (0, g.useRef)(null),
          p = (0, g.useRef)(null);
        (0, g.useEffect)(() => {
          var t;
          return c(null !== (t = e.collapsed) && void 0 !== t ? t : u);
        }, [e.collapsed]);
        let [, m] = (0, g.useReducer)((e) => e + 1, 0);
        function v() {
          d.current && (c(!1), null == o || o(!1));
        }
        (0, g.useEffect)(m, []);
        let y = (0, g.useRef)([]);
        tg(h, () => {
          var e;
          m(),
            y.current.forEach((e) => e.remove()),
            (y.current = []),
            null === (e = h.current) ||
              void 0 === e ||
              e.querySelectorAll("input, [contenteditable]").forEach((e) => {
                e.addEventListener("focus", v),
                  y.current.push({
                    remove: () => e.removeEventListener("focus", v),
                  });
              });
        }),
          (0, g.useEffect)(() => {
            let e = setInterval(m, 100);
            return () => clearInterval(e);
          }, []);
        let x =
          null !==
            (r =
              null === (t = h.current) || void 0 === t
                ? void 0
                : t.clientHeight) && void 0 !== r
            ? r
            : 0;
        return (
          (i = (u ? 0 : x) + "px"),
          (0, f.jsxs)("section", {
            className: u ? tm().collapsed : "",
            ...l,
            style: { ...l.style },
            children: [
              (0, f.jsxs)("header", {
                ref: p,
                onClick: () => {
                  c(!u), null == o || o(!u);
                },
                children: [
                  u ? (0, f.jsx)(ef.XCv, {}) : (0, f.jsx)(ef.v4q, {}),
                  (0, f.jsx)("span", { children: s }),
                ],
              }),
              (0, f.jsx)("div", {
                style: {
                  maxHeight: i,
                  transition: "max-height 0.1s ease-in-out",
                },
                children: (0, f.jsx)("div", {
                  ref: h,
                  className: tm().sectionContent,
                  children: e.children,
                }),
              }),
            ],
          })
        );
      };
      let tg = function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : {
                  attributes: !0,
                  characterData: !0,
                  childList: !0,
                  subtree: !0,
                };
          g.useEffect(() => {
            if (e.current) {
              let r = new MutationObserver(t);
              return r.observe(e.current, n), () => r.disconnect();
            }
          }, [t, n]);
        },
        tv = (e) =>
          (0, f.jsx)("div", {
            className: tm().menu,
            ...e,
            children: e.children,
          });
      function ty(e) {
        let t = (0, g.useRef)({ ...e.settings });
        function n() {
          e.onSettingsChange({ ...t.current });
        }
        (0, g.useEffect)(() => {
          Object.assign(t.current, e.settings);
        }, [e.settings]);
        let r = (0, g.useRef)(e.duration);
        (0, g.useEffect)(() => {
          r.current = e.duration;
        }, [e.duration]);
        let i = (0, g.useMemo)(
          () => ({
            get smoothness() {
              return 1 - t.current.tension;
            },
            set smoothness(value) {
              t.current.tension = 1 - value;
            },
          }),
          []
        );
        return (0, f.jsxs)(tf.Section, {
          header: "Motion",
          collapsed: e.collapsed,
          onCollapseChange: e.onCollapseChange,
          children: [
            (0, f.jsx)(tv.Row, {
              children: (0, f.jsx)(e6, {
                options: [o.Freeform, o.Orbit],
                value: e.settings.motionMode,
                onChange: (e) => {
                  (t.current.motionMode = e), n();
                },
                style: { width: "100%", justifyContent: "center" },
              }),
            }),
            (0, f.jsx)(tv.Row, {
              children: (0, f.jsx)(eN.R, {
                style: { width: "100%" },
                obj: r,
                field: "current",
                label: "duration",
                type: "float",
                units: "s",
                min: 1,
                max: e.durationMax,
                onChange: e.onDurationChange,
                onChangeEnd: e.onDurationChangeEnd,
              }),
            }),
            (0, f.jsx)(tv.Row, {
              children: (0, f.jsx)(eN.R, {
                label: "smoothness",
                style: { width: "100%" },
                obj: i,
                field: "smoothness",
                type: "float",
                min: 0,
                max: 1,
                onChange: n,
              }),
            }),
            (0, f.jsx)(tv.Row, {
              children: (0, f.jsx)(e6, {
                label: "loop",
                options: ["off", "on"],
                value: e.settings.loop ? "on" : "off",
                onChange: (e) => {
                  (t.current.loop = "on" === e), n();
                },
                style: { justifyContent: "flex-end", width: "100%" },
              }),
            }),
          ],
        });
      }
      (tv.Row = (e) =>
        (0, f.jsx)("div", {
          className: tm().inputRow,
          ...e,
          children: e.children,
        })),
        (tv.Section = (e) => {
          var t;
          let [n, r] = (0, g.useState)(
              null !== (t = e.collapsed) && void 0 !== t && t
            ),
            i = (0, g.useRef)(null),
            [a, o] = (0, g.useState)(null);
          return (
            (0, g.useEffect)(() => {
              var e, t;
              o(
                null !==
                  (t =
                    null === (e = i.current) || void 0 === e
                      ? void 0
                      : e.clientHeight) && void 0 !== t
                  ? t
                  : 0
              );
            }, []),
            (0, f.jsxs)("section", {
              className: n ? tm().collapsed : "",
              ...e,
              children: [
                (0, f.jsx)("header", {
                  onClick: () => r(!n),
                  children: e.title,
                }),
                (0, f.jsx)("div", {
                  className: tm().sectionContent,
                  style: { maxHeight: null != a ? (n ? 0 : a) + "px" : void 0 },
                  children: (0, f.jsx)("div", { ref: i, children: e.children }),
                }),
              ],
            })
          );
        });
      var tx = n(71164);
      function tw(e) {
        let { label: t, children: n, ...r } = e;
        return (0, f.jsxs)("div", {
          className: eH().iconButton + " " + (e.selected ? eH().selected : ""),
          ...r,
          children: [
            (0, f.jsx)("div", { className: eH().icon, children: n }),
            (0, f.jsx)("div", { className: eH().label, children: t }),
          ],
        });
      }
      function tb(e) {
        let { label: t, children: n, ...r } = e;
        return (0, f.jsx)("div", {
          className: eH().iconButtons,
          ...r,
          children: n,
        });
      }
      var tC = n(7055),
        tM = n(45252),
        t_ = n.n(tM),
        tS = n(98869);
      let tj = {
        render: "Render",
        renderUploading: "Uploading",
        renderFailed: "Failed",
      };
      function tk(e) {
        var t, n, r, i, a, o;
        let s, l;
        let u = null === (r = e.enablePreview) || void 0 === r || r,
          c = null !== (i = e.disableRender) && void 0 !== i && i,
          [d, h] = (0, g.useState)(
            null !== (a = e.settings.bgColor) && void 0 !== a
              ? a
              : { r: 0, g: 0, b: 0, a: 0 }
          ),
          p = (0, g.useContext)($.pn),
          m = e.animationScene.animationCamera,
          y = (0, g.useRef)({ ...e.settings });
        (d = null != d ? d : { r: 0, g: 0, b: 0, a: 0 }),
          (0, g.useEffect)(() => {
            Object.assign(y.current, e.settings),
              (y.current.bgColor = { ...e.settings.bgColor }),
              h(e.settings.bgColor);
          }, [e.settings]);
        let [x, w] = (0, g.useState)(tj.render),
          [b, C] = (0, g.useState)(0),
          [M, _] = (0, g.useState)(!1);
        function S(t) {
          var n;
          if (M || null == m) return;
          let r = (0, ea.Ft)(
              e.animationScene,
              m,
              t.width / t.height,
              null !== (n = e.durationTrim) && void 0 !== n ? n : 1 / 0,
              t.fps
            ),
            i = r.c2w,
            a = {
              width: t.width,
              height: t.height,
              fov: [t.fov],
              fps: t.fps,
              segment: J.A6.getValue(),
              bg_color: [d.r || 1e-5, d.g || 1e-5, d.b || 1e-5],
              c2w: i,
              no_logo: P,
              with_depth: P && t.depthMaps,
              with_alpha: P && t.transparentBackground,
              ...(0, ea.HY)(),
            };
          if (r.fovVertical.length > 0) {
            let e = r.fovVertical.map(
              (e) =>
                ((2 *
                  Math.atan(
                    (Math.tan((e * Math.PI) / 360) * t.width) / t.height
                  ) *
                  180) /
                  Math.PI) *
                t.fovXMultiplier
            );
            a.fov = e;
          }
          if (t.fovXOverride_deg && isFinite(t.fovXOverride_deg)) {
            let e = t.fovXOverride_deg;
            a.fov = [e];
          }
          let o = a.c2w.length / t.fps;
          async function s() {
            w(tj.renderUploading), _(!0);
            let { uuid: t } = p,
              n = {
                fps: a.fps,
                width: a.width,
                height: a.height,
                bgColor: {
                  r: a.bg_color[0],
                  g: a.bg_color[1],
                  b: a.bg_color[2],
                  a: 1,
                },
                transparentBackground: a.with_alpha,
                duration: o,
                no_logo: a.no_logo,
                with_depth: a.with_depth,
              },
              r = {
                capture: { uuid: t },
                trajectory: {
                  schemaVersion: 4,
                  settings: { segmentation: J.A6.getValue(), videoExport: n },
                  keyframes: [],
                },
              };
            await (0, tC.an)(r, a),
              w(tj.render),
              C(b + 1),
              _(!1),
              e.onJobQueued();
          }
          e.onQueueJob(t),
            s()
              .then(() => {
                try {
                  (0, tC.Qc)();
                } catch (e) {
                  console.error(e);
                }
              })
              .catch((e) => {
                throw (
                  (w(tj.renderFailed), setTimeout(() => w(tj.render), 2e3), e)
                );
              });
        }
        function j() {
          e.onSettingsChange({ ...y.current });
        }
        (0, g.useEffect)(() => {
          let e = d;
          window.luma.options.background_color = [e.r, e.g, e.b, 1];
        }, [d]);
        let [k, E] = (0, g.useState)(""),
          [P, D] = (0, g.useState)(!1),
          [L, I] = (0, g.useState)(!1),
          T = async () => {
            if (!t_()(tS.store.userLimits)) {
              let e = new Date().toLocaleString("default", { month: "short" }),
                { render: t } = tS.store.userLimits,
                { left: n, used: r, pro: i } = t,
                a = n > 0 ? " of ".concat(r + n) : "";
              E("".concat(r).concat(a, " renders in ").concat(e)),
                D(i),
                I(0 === n);
            }
          };
        (0, g.useEffect)(() => {
          T();
        }, [
          null === (t = tS.store.userLimits) || void 0 === t
            ? void 0
            : t.render,
        ]);
        let z = (0, g.useRef)(e.duration);
        (0, g.useEffect)(() => {
          z.current = e.duration;
        }, [e.duration]);
        let R = [
            { w: 9, h: 16, heights: [640, 1280, 1920, 3840] },
            { w: 1, h: 1, heights: [640, 1080, 1440, 2160] },
            { w: 5, h: 4, heights: [900, 1440] },
            { w: 4, h: 3, heights: [480, 720, 1080] },
            { w: 16, h: 9, heights: [720, 1080, 2160] },
          ],
          [A, V] = (0, g.useState)(y.current.width / y.current.height),
          [F, O] = (0, g.useState)(R.every((e) => A != e.w / e.h)),
          N = (
            (null === (n = R.find((e) => e.w / e.h == A)) || void 0 === n
              ? void 0
              : n.heights) || []
          ).map((e, t) => ({ w: Math.round(A * e), h: e, key: t })),
          B = { maxDim: 3840, maxRes: 8294400 },
          H = { maxDim: 1920, maxRes: 2073600 };
        if (!F) {
          let e = N.reduce((e, t) =>
            Math.abs(t.w - y.current.width) < Math.abs(e.w - y.current.width)
              ? t
              : e
          );
          e.h * e.w > (P ? B.maxRes : H.maxRes) &&
            e.key >= 1 &&
            (e = N.find((t) => t.key == e.key - 1));
          let t = y.current.width != e.w || y.current.height != e.h;
          (y.current.width = e.w),
            (y.current.height = e.h),
            t && setTimeout(j, 0);
        }
        function U(e) {
          let { w: t, h: n } = e;
          return (0, f.jsx)(tw, {
            label: "".concat(t, ":").concat(n),
            selected: !F && A == t / n,
            onClick: () => {
              O(!1), V(t / n);
            },
            children: (0, f.jsx)(tE, { aspectRatio: t / n }),
          });
        }
        return (
          P
            ? ((s = Math.min(
                B.maxDim,
                Math.floor(B.maxRes / y.current.height)
              )),
              (l = Math.min(B.maxDim, Math.floor(B.maxRes / y.current.width))))
            : ((s = Math.min(
                H.maxDim,
                Math.floor(H.maxRes / y.current.height)
              )),
              (l = Math.min(H.maxDim, Math.floor(H.maxRes / y.current.width)))),
          (0, f.jsxs)(tf.Section, {
            header: "Render Video",
            collapsed: e.collapsed,
            onCollapseChange: e.onCollapseChange,
            children: [
              (0, f.jsx)(tv.Row, {
                style: { marginBottom: 10 },
                children: (0, f.jsxs)(tb, {
                  label: "Aspect Ratio",
                  children: [
                    R.map((e, t) => (0, f.jsx)(U, { w: e.w, h: e.h }, t)),
                    (0, f.jsx)(tw, {
                      label: "custom",
                      selected: F,
                      onClick: () => {
                        O(!0);
                      },
                      children: (0, f.jsx)(tE, {
                        aspectRatio: 1,
                        style: { border: "1px dotted white" },
                      }),
                    }),
                  ],
                }),
              }),
              !F &&
                (0, f.jsx)(tv.Row, {
                  children: (0, f.jsxs)("div", {
                    style: {
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      gap: 10,
                    },
                    children: [
                      (0, f.jsx)("label", {
                        htmlFor: "resolution-select",
                        style: { flexGrow: 1, width: "100%" },
                        children: (0, f.jsx)("b", { children: "resolution" }),
                      }),
                      (0, f.jsx)(tx.P, {
                        id: "resolution-select",
                        value: ""
                          .concat(y.current.width, "x")
                          .concat(y.current.height),
                        onChange: (e) => {
                          let [t, n] = e.target.value
                            .split("x")
                            .map((e) => parseInt(e));
                          (y.current.width = t), (y.current.height = n), j();
                        },
                        style: { textAlign: "right", width: "auto" },
                        children: N.map((e, t) => {
                          let n =
                              !P &&
                              (e.w * e.h > H.maxRes ||
                                e.w > H.maxDim ||
                                e.h > H.maxDim),
                            r =
                              P &&
                              (e.w * e.h > B.maxRes ||
                                e.w > B.maxDim ||
                                e.h > B.maxDim);
                          return (0, f.jsxs)(
                            "option",
                            {
                              value: "".concat(e.w, "x").concat(e.h),
                              disabled: n || r,
                              children: [e.w, "x", e.h, " ", n && "(Pro)"],
                            },
                            t
                          );
                        }),
                      }),
                    ],
                  }),
                }),
              F &&
                (0, f.jsxs)(f.Fragment, {
                  children: [
                    (0, f.jsx)(tv.Row, {
                      children: (0, f.jsx)(eN.R, {
                        style: { width: "100%" },
                        obj: y.current,
                        field: "width",
                        type: "int",
                        min: 1,
                        max: s,
                        units: "px",
                        onChange: j,
                      }),
                    }),
                    (0, f.jsx)(tv.Row, {
                      children: (0, f.jsx)(eN.R, {
                        style: { width: "100%" },
                        obj: y.current,
                        field: "height",
                        type: "int",
                        min: 1,
                        max: l,
                        units: "px",
                        onChange: j,
                      }),
                    }),
                  ],
                }),
              (0, f.jsx)("hr", {}),
              (0, f.jsx)(tv.Row, {
                children: (0, f.jsx)(eN.R, {
                  style: { width: "100%" },
                  obj: y.current,
                  field: "fps",
                  type: "int",
                  min: 24,
                  max: 60,
                  onChange: j,
                }),
              }),
              (null === (o = e.showDuration) || void 0 === o || o) &&
                (0, f.jsx)(tv.Row, {
                  children: (0, f.jsx)(eN.R, {
                    style: { width: "100%" },
                    obj: z,
                    field: "current",
                    label: "duration",
                    type: "float",
                    min: 1,
                    max: e.durationMax,
                    units: "s",
                    disabled: e.durationDisableEdit,
                    onChange: e.onDurationChange,
                  }),
                }),
              (0, f.jsxs)(tv.Row, {
                children: [
                  (0, f.jsx)("label", {
                    htmlFor: "background",
                    children: (0, f.jsx)("b", { children: "background" }),
                  }),
                  (0, f.jsx)("input", {
                    id: "background",
                    type: "color",
                    value: "#" + new v.Color(d.r, d.g, d.b).getHexString(),
                    onChange: (e) => {
                      let t = new v.Color(e.target.value);
                      (y.current.bgColor.r = t.r),
                        (y.current.bgColor.g = t.g),
                        (y.current.bgColor.b = t.b),
                        h({ r: t.r, g: t.g, b: t.b, a: d.a }),
                        j();
                    },
                  }),
                ],
              }),
              P &&
                (0, f.jsx)(tv.Row, {
                  children: (0, f.jsx)(e6, {
                    label: "depth maps",
                    options: ["off", "on"],
                    value: e.settings.depthMaps ? "on" : "off",
                    onChange: (e) => {
                      (y.current.depthMaps = "on" === e), j();
                    },
                    style: { justifyContent: "flex-end", width: "100%" },
                  }),
                }),
              u
                ? (0, f.jsx)(tv.Row, {
                    style: { marginTop: "20px" },
                    children: (0, f.jsx)("button", {
                      onClick: e.onPreview,
                      children: "Preview",
                    }),
                  })
                : null,
              (0, f.jsx)(tv.Row, {
                style: { marginTop: "20px" },
                children: (0, f.jsx)("button", {
                  onClick: () => S(y.current),
                  disabled: L || c,
                  children: L ? "Render limit has been reached" : x,
                }),
              }),
              (0, f.jsx)(tv.Row, {
                style: {
                  textAlign: "center",
                  fontSize: 10,
                  marginTop: 10,
                  opacity: 0.5,
                },
                children: (0, f.jsx)("label", { children: k }),
              }),
              (0, f.jsx)(tv.Row, {
                style: {
                  textAlign: "center",
                  fontSize: 10,
                  marginTop: 4,
                  marginBottom: 8,
                  opacity: 0.5,
                },
                children: (0, f.jsx)("label", {
                  children: P ? "Pro: no logo, 4k renders, depth" : "",
                }),
              }),
            ],
          })
        );
      }
      function tE(e) {
        let t = "20px";
        return (0, f.jsx)("div", {
          style: {
            width: e.aspectRatio < 1 ? "auto" : t,
            height: e.aspectRatio < 1 ? t : "auto",
            maxWidth: 38,
            maxHeight: 38,
            border: "1px solid white",
            aspectRatio: e.aspectRatio,
            ...e.style,
          },
        });
      }
      var tP = n(86620),
        tD = n(55074),
        tL = n.n(tD);
      function tI(e) {
        var t, n, r, i, a, o, s, l;
        let u, c;
        let [d, h] = (0, g.useState)(
          null !== (t = e.firstPersonCamera.useOrbitTransform) &&
            void 0 !== t &&
            t
        );
        (0, g.useEffect)(() => {
          let t = setInterval(() => {
            var t;
            return h(
              null !== (t = e.firstPersonCamera.useOrbitTransform) &&
                void 0 !== t &&
                t
            );
          }, 1e3 / 60);
          return () => clearInterval(t);
        }, [e.firstPersonCamera]);
        let p = e.object;
        (0, ea.xG)(p)
          ? ((c = (0, f.jsxs)(f.Fragment, {
              children: [
                (0, f.jsx)(ef.xmR, {}),
                (0, f.jsx)("div", { children: p.name }),
              ],
            })),
            (u = (0, f.jsx)(tT, {
              object: p,
              useOrbitTransform: d,
              locked: e.locked,
              onUnlock: e.onUnlock,
              onKeyframeChange: e.onKeyframeChange,
              onKeyframeChangeEnd: e.onKeyframeChangeEnd,
            })))
          : (0, ea.al)(p)
          ? ((c = (0, f.jsxs)(f.Fragment, {
              children: [
                (0, f.jsx)(eE, {
                  keyframe: p,
                  dragging: !1,
                  selected: !0,
                  smoothnessMultiplier: 1 - e.settings.tension,
                  style: {
                    position: "unset",
                    display: "block",
                    margin: 0,
                    transform: "rotate(45deg) scale(0.6)",
                    cursor: "pointer",
                  },
                  pollForPositionChange: !0,
                }),
                (0, f.jsx)("div", { children: "Keyframe" }),
              ],
            })),
            (u = (0, f.jsx)(tT, {
              object: p,
              useOrbitTransform: d,
              locked: e.locked,
              onUnlock: e.onUnlock,
              onKeyframeChange: e.onKeyframeChange,
              onKeyframeChangeEnd: e.onKeyframeChangeEnd,
            })))
          : null != p.SelectionContextMenu &&
            "function" == typeof p.SelectionContextMenu
          ? ((c =
              null !== (a = (0, f.jsx)(p.SelectionContextMenuHeader, {})) &&
              void 0 !== a
                ? a
                : "".concat(
                    null !==
                      (i =
                        null !==
                          (r =
                            null !== (n = p.name) && void 0 !== n
                              ? n
                              : p.type) && void 0 !== r
                          ? r
                          : p.constructor.name) && void 0 !== i
                      ? i
                      : p
                  )),
            (u = (0, f.jsx)(p.SelectionContextMenu, {})))
          : ((c = "Unknown object: ".concat(
              null !==
                (l =
                  null !==
                    (s = null !== (o = p.name) && void 0 !== o ? o : p.type) &&
                  void 0 !== s
                    ? s
                    : p.constructor.name) && void 0 !== l
                ? l
                : p
            )),
            (u = null));
        let m = (0, f.jsx)("div", {
          style: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            gap: "10px",
            height: "16px",
          },
          children: c,
        });
        return (0, f.jsx)(tf.Section, {
          header: m,
          collapsed: e.collapsed,
          children: u,
        });
      }
      function tT(e) {
        let t = (0, g.useMemo)(
            () => e.object.clone(),
            [e.object.id, (0, ea.al)(e.object)]
          ),
          n = (0, ea.al)(e.object) ? t.copy(e.object) : e.object,
          r = (0, g.useMemo)(
            () => ({
              get azimuth() {
                return (0, tP.ZY)(n.azimuth);
              },
              set azimuth(value) {
                (n.azimuth = (0, tP.Id)(value)), n.updateCartesianFromOrbit();
              },
              get elevation() {
                return (0, tP.ZY)(n.elevation);
              },
              set elevation(value) {
                (n.elevation = (0, tP.Id)(value)), n.updateCartesianFromOrbit();
              },
              get radius() {
                return n.radius;
              },
              set radius(value) {
                (n.radius = value), n.updateCartesianFromOrbit();
              },
              get roll() {
                return (0, tP.ZY)((0, ea.tr)(n.quaternion));
              },
              set roll(value) {
                let e = (0, ea.tr)(n.quaternion),
                  t = (0, tP.Id)(value) - e,
                  r = new v.Vector3(0, 0, -1).applyQuaternion(n.quaternion),
                  i = new v.Quaternion().setFromAxisAngle(r, t);
                n.quaternion.premultiply(i), n.updateOrbitFromCartesian();
              },
              get pitch() {
                return (0, tP.ZY)((0, ea.Es)(n.quaternion));
              },
              set pitch(value) {
                let e = (0, ea.Es)(n.quaternion),
                  t = (0, tP.Id)(value) - e,
                  r = new v.Vector3(1, 0, 0).applyQuaternion(n.quaternion),
                  i = new v.Quaternion().setFromAxisAngle(r, t);
                n.quaternion.premultiply(i), n.updateOrbitFromCartesian();
              },
              get yaw() {
                return (0, tP.ZY)((0, ea.tE)(n.quaternion));
              },
              set yaw(value) {
                let e = (0, ea.tE)(n.quaternion),
                  t = (0, tP.Id)(value) - e,
                  r = new v.Vector3(0, 1, 0).applyQuaternion(n.quaternion),
                  i = new v.Quaternion().setFromAxisAngle(r, t);
                n.quaternion.premultiply(i), n.updateOrbitFromCartesian();
              },
            }),
            [n]
          );
        function i() {
          (0, ea.al)(n) && e.onKeyframeChange(n);
        }
        function a() {
          (0, ea.al)(n) && e.onKeyframeChangeEnd(n);
        }
        return (0, f.jsxs)("div", {
          children: [
            e.locked &&
              (0, f.jsx)(ef.khe, {
                style: {
                  position: "absolute",
                  top: "35px",
                  left: "50%",
                  transform: "translateX(-50%)",
                },
              }),
            e.locked &&
              (0, f.jsx)("div", {
                className: tL().lockOverlay,
                children: (0, f.jsxs)("button", {
                  onClick: () => {
                    var t;
                    return null === (t = e.onUnlock) || void 0 === t
                      ? void 0
                      : t.call(e, e.object);
                  },
                  children: [(0, f.jsx)(ef.Jot, {}), " Edit"],
                }),
              }),
            (0, f.jsx)(eN.R, {
              obj: n,
              field: "focalLength",
              label: "focal length",
              min: 0,
              units: "mm",
              onChange: i,
              onChangeEnd: a,
            }),
            (0, f.jsx)("hr", {}),
            e.useOrbitTransform &&
              (0, f.jsxs)(f.Fragment, {
                children: [
                  (0, f.jsx)(eN.R, {
                    obj: r,
                    field: "radius",
                    label: "distance",
                    onChange: i,
                    onChangeEnd: a,
                  }),
                  (0, f.jsx)("hr", {}),
                  (0, f.jsx)(eN.R, {
                    obj: r,
                    field: "azimuth",
                    units: "\xb0",
                    changeDelta: 50,
                    onChange: i,
                    onChangeEnd: a,
                  }),
                  (0, f.jsx)(eN.R, {
                    obj: r,
                    field: "elevation",
                    units: "\xb0",
                    changeDelta: 50,
                    onChange: i,
                    onChangeEnd: a,
                  }),
                ],
              }),
            !e.useOrbitTransform &&
              (0, f.jsxs)(f.Fragment, {
                children: [
                  (0, f.jsx)(eN.R, {
                    obj: n.position,
                    field: "x",
                    changeDelta: 1,
                    onChange: i,
                    onChangeEnd: a,
                  }),
                  (0, f.jsx)(eN.R, {
                    obj: n.position,
                    field: "y",
                    changeDelta: 1,
                    onChange: i,
                    onChangeEnd: a,
                  }),
                  (0, f.jsx)(eN.R, {
                    obj: n.position,
                    field: "z",
                    changeDelta: 1,
                    onChange: i,
                    onChangeEnd: a,
                  }),
                ],
              }),
            (0, f.jsx)("hr", {}),
            (0, f.jsx)(eN.R, {
              obj: r,
              field: "roll",
              label: "roll",
              units: "\xb0",
              changeDelta: 30,
              onChange: i,
              onChangeEnd: a,
            }),
            (0, f.jsx)(eN.R, {
              obj: r,
              field: "pitch",
              label: "pitch",
              units: "\xb0",
              changeDelta: 30,
              onChange: i,
              onChangeEnd: a,
            }),
            (0, f.jsx)(eN.R, {
              obj: r,
              field: "yaw",
              label: "yaw",
              units: "\xb0",
              changeDelta: 30,
              onChange: i,
              onChangeEnd: a,
            }),
            (0, ea.al)(n) &&
              (0, f.jsxs)(f.Fragment, {
                children: [
                  (0, f.jsx)("hr", {}),
                  (0, f.jsx)(eN.R, {
                    obj: n,
                    field: "smoothness",
                    min: 0,
                    max: 1,
                    onChange: i,
                    onChangeEnd: a,
                  }),
                ],
              }),
          ],
        });
      }
      function tz(e) {
        let { menuPosition: t, ...n } = e;
        return (0, f.jsx)(tf, {
          ...n,
          style: {
            position: "absolute",
            top: "100px",
            right: "right" === t ? "20px" : "unset",
            left: "left" === t ? "20px" : "unset",
            overflowY: "visible",
            ...e.style,
          },
        });
      }
      function tR(e) {
        let t = (0, g.useContext)($.pn);
        return (0, f.jsx)(tf.Section, {
          header: "Trajectories",
          collapsed: e.collapsed,
          onCollapseChange: e.onCollapseChange,
          children: (0, f.jsxs)(tb, {
            children: [
              (0, f.jsx)(tw, {
                label: "Orbit",
                selected: e.currentTemplateType === u.Type.Orbit,
                onClick: () => {
                  var n;
                  let r = new v.Vector3(2, 1, 0);
                  null === (n = t.initialPose) ||
                    void 0 === n ||
                    n.decompose(r, new v.Quaternion(), new v.Vector3());
                  let i = (0, ea.aL)(r),
                    a = new v.Vector2(r.x, r.z).length(),
                    o = {
                      type: u.Type.Orbit,
                      radius: a,
                      height: r.y,
                      rotation_radians: i.azimuth,
                      target: { x: 0, y: 0, z: 0 },
                      duration: 10,
                      focalLength: 20,
                      direction: -1,
                    };
                  e.onCreateTemplate(o);
                },
                children: (0, f.jsx)(e2, { width: "100%", height: "100%" }),
              }),
              (0, f.jsx)(tw, {
                label: "Oscillate",
                selected: e.currentTemplateType === u.Type.Oscillate,
                onClick: () => {
                  var n;
                  let r = new v.Vector3(2, 1, 0);
                  null === (n = t.initialPose) ||
                    void 0 === n ||
                    n.decompose(r, new v.Quaternion(), new v.Vector3());
                  let i = (0, ea.aL)(r),
                    a = {
                      type: u.Type.Oscillate,
                      duration: 10,
                      focalLength: 20,
                      amplitudeAzimuth: 0.12 * Math.PI,
                      amplitudeElevation: 0.04 * Math.PI,
                      viewPosition: i,
                      target: { x: 0, y: 0, z: 0 },
                    };
                  e.onCreateTemplate(a);
                },
                children: (0, f.jsx)(tr, { width: "100%", height: "100%" }),
              }),
              (0, f.jsx)(tw, {
                label: "Custom",
                selected: null == e.currentTemplateType,
                onClick: () => {
                  e.onCreateTemplate(null);
                },
                children: (0, f.jsx)(eG, { width: "100%", height: "100%" }),
              }),
            ],
          }),
        });
      }
      var tA = n(97277),
        tV = n(8690),
        tF = n.n(tV);
      let tO = (0, g.forwardRef)((e, t) => {
        var n, r;
        let [i, a] = (0, g.useState)(!1),
          [o, s] = (0, g.useState)(0),
          [l, u] = (0, g.useState)(-1),
          c = (0, g.useRef)(null),
          d = (0, g.useRef)(null),
          h = (0, g.useRef)(null),
          [p, m] = (0, g.useState)(0),
          v = (0, g.useRef)(o);
        (v.current = o),
          (0, g.useImperativeHandle)(
            t,
            () => ({ isScrubbing: i, setPosition: s, selectKeyframe: M }),
            [i, s]
          );
        let y = (0, g.useRef)(null),
          x = (0, g.useRef)(null),
          w = (0, g.useRef)(null),
          b = (0, g.useRef)(null),
          C = (0, g.useRef)(-1);
        function M(t, n) {
          if (t !== C.current) {
            var r;
            (C.current = t),
              u(t),
              null === (r = e.onSelectKeyframe) ||
                void 0 === r ||
                r.call(e, t, null != n && n);
          }
        }
        function _() {
          let t = v.current;
          if (null != e.keyframes && isFinite(t)) {
            for (let n of e.keyframes)
              if (0.01 > Math.abs(tB(n, e.duration_s) - t)) {
                M(n.id);
                return;
              }
            M(-1);
          }
        }
        function S(t) {
          var n;
          null != e.keyframes &&
            (null === (n = e.onKeyframesChange) ||
              void 0 === n ||
              n.call(
                e,
                e.keyframes.filter((e) => e.id !== t)
              ),
            M(-1));
        }
        return (
          (0, g.useEffect)(() => _(), [o, e.keyframes]),
          (0, g.useEffect)(() => {
            if (!1 === e.interactive) return;
            let t = new tA.Z(c.current, {
              disableDefaultBehavior: !0,
              autoCapturePointer: !1,
            });
            function n(e) {
              (y.current = e.pointerId),
                a(!0),
                r(e),
                e.target.setPointerCapture(e.pointerId);
            }
            function r(t) {
              let n =
                Math.min(
                  Math.max(
                    (t.clientX - c.current.getBoundingClientRect().left) /
                      c.current.clientWidth,
                    0
                  ),
                  1
                ) || 0;
              s(n), e.onScrub(n);
            }
            function i(e) {
              let t = e.target,
                n = parseInt(t.dataset.id);
              t.setPointerCapture(e.pointerId),
                (b.current = e.clientX),
                (x.current = e.pointerId),
                (w.current = n),
                M(n, !0),
                m(0);
            }
            function o(t) {
              var n;
              if (null == w.current || null == x.current) return;
              let r = (t.clientX - b.current) / c.current.clientWidth || 0;
              m(
                (r = u(
                  null === (n = e.keyframes) || void 0 === n
                    ? void 0
                    : n.find((e) => e.id === w.current),
                  r
                ))
              );
            }
            function l(t) {
              if (null == w || null == x.current || null == e.keyframes) return;
              let n = (t.clientX - b.current) / c.current.clientWidth || 0,
                r = e.keyframes.find((e) => e.id === w.current);
              n = u(r, n);
              let i = tB(r, e.duration_s) + n || 0,
                a = e.keyframes.map((t) => {
                  if (t.id !== w.current) return t;
                  {
                    let n = t.clone(!0);
                    return (n.t_s = i * e.duration_s), n;
                  }
                });
              if (0 !== n) {
                var o;
                null === (o = e.onKeyframesChange) ||
                  void 0 === o ||
                  o.call(e, a);
              }
              (x.current = null),
                (w.current = null),
                (b.current = null),
                m(0),
                s(i),
                e.onScrub(i);
            }
            function u(t, n) {
              if (null != t && t.keyframeType == en.yX.Loop) {
                let r =
                    tB(e.keyframes[e.keyframes.length - 2], e.duration_s) +
                    0.01,
                  i = tB(t, e.duration_s) + n;
                i < r && (n += r - i);
              } else {
                let r = e.keyframes[e.keyframes.length - 1];
                if (
                  r.keyframeType == en.yX.Loop &&
                  null != t &&
                  t.id !== r.id
                ) {
                  let r = 0.99,
                    i = tB(t, e.duration_s) + n;
                  i > r && (n -= i - r);
                }
              }
              return n;
            }
            function p(e) {
              return e instanceof HTMLElement && !!e.dataset.keyframe;
            }
            function f(t) {
              var n, r;
              if (t.target instanceof HTMLInputElement) return;
              let i = !1;
              ("Delete" === t.key ||
                ("Backspace" === t.key && -1 !== C.current)) &&
                (S(C.current), (i = !0)),
                "i" === t.key &&
                  (null === (n = e.onInsertKeyframe) ||
                    void 0 === n ||
                    n.call(e, v.current),
                  (i = !0)),
                "e" === t.key &&
                  -1 !== C.current &&
                  (null === (r = e.onEditKeyframe) ||
                    void 0 === r ||
                    r.call(e, C.current),
                  (i = !0)),
                i && (t.preventDefault(), t.stopPropagation());
            }
            return (
              t.attachEventListeners(),
              t.events.pointerDown.addListener((e) => {
                let t =
                  e.target === c.current ||
                  e.target === d.current ||
                  e.target === h.current;
                e.isPrimary && null == y.current && t
                  ? n(e)
                  : e.isPrimary && p(e.target) && i(e);
              }),
              t.events.pointerMove.addListener((e) => {
                e.pointerId === y.current
                  ? r(e)
                  : e.pointerId === x.current && o(e);
              }),
              t.events.globalPointerUp.addListener((e) => {
                e.pointerId === y.current
                  ? ((y.current = null), r(e), a(!1))
                  : e.pointerId === x.current && l(e),
                  (p(e.target) &&
                    parseInt(e.target.dataset.id) === C.current) ||
                    _();
              }),
              window.addEventListener("keydown", f),
              () => {
                t.removeEventListeners(),
                  window.removeEventListener("keydown", f);
              }
            );
          }, [e.keyframes, e.interactive, e.duration_s]),
          (0, f.jsxs)("div", {
            ref: c,
            className: tF().bar,
            style: e.style,
            children: [
              (0, f.jsx)("div", {
                ref: d,
                className: tF().barFill,
                style: { width: "".concat(100 * o, "%") },
              }),
              null === (n = e.keyframes) || void 0 === n
                ? void 0
                : n.map((t, n) => {
                    let r = tB(t, e.duration_s) + (t.id === w.current ? p : 0);
                    return (0, f.jsx)(
                      eE,
                      {
                        keyframe: t,
                        smoothnessMultiplier: e.smoothnessMultiplier,
                        style: { left: "".concat(100 * r, "%") },
                        dragging: w.current === t.id,
                        selected: l === t.id,
                      },
                      t.id
                    );
                  }),
              (null == e.keyframes || 0 === e.keyframes.length) &&
                (0, f.jsx)("div", {
                  ref: h,
                  className:
                    tF().handle +
                    " " +
                    (null != e.keyframes ? tF().thin : "") +
                    " " +
                    (i ? tF().dragging : ""),
                  style: {
                    display:
                      null != e.keyframes && e.keyframes.length < 1
                        ? "none"
                        : "",
                    left: "".concat(100 * o, "%"),
                  },
                }),
              null != e.keyframes && e.keyframes.length > 0
                ? (0, f.jsx)(tN, {
                    selectedKeyframeId: l,
                    keyframes: e.keyframes,
                    duration_s: e.duration_s,
                    keyframeDragDelta: p,
                    keyframeDragId: w.current,
                    position: o,
                    showButtons:
                      null === (r = e.showKeyframeButtons) || void 0 === r || r,
                    onDeleteKeyframe: S,
                    onInsertKeyframe: (t) => {
                      var n;
                      return null === (n = e.onInsertKeyframe) || void 0 === n
                        ? void 0
                        : n.call(e, t);
                    },
                    onEditKeyframe: (t) => {
                      var n;
                      return null === (n = e.onEditKeyframe) || void 0 === n
                        ? void 0
                        : n.call(e, t);
                    },
                  })
                : null,
              e.children,
            ],
          })
        );
      });
      function tN(e) {
        let t,
          n = e.selectedKeyframeId,
          r = e.keyframes.find((t) => t.id === e.selectedKeyframeId),
          i = e.keyframeDragDelta,
          a = e.keyframeDragId;
        return (
          null != r
            ? ((t = tB(r, e.duration_s)), a === n && (t += i))
            : (t = e.position),
          (0, f.jsxs)("div", {
            className: tF().keyframeUI,
            children: [
              (0, f.jsxs)("div", {
                className: tF().keyframeButtons,
                style: {
                  left: "".concat(100 * t, "%"),
                  opacity: -1 !== n && e.showButtons ? 1 : 0,
                  pointerEvents: -1 !== n && e.showButtons ? "all" : "none",
                },
                children: [
                  (0, f.jsxs)("div", {
                    onClick: () => e.onEditKeyframe(n),
                    title: "Edit keyframe (e)",
                    children: [
                      "Edit",
                      (0, f.jsx)("span", {
                        className: tF().keyboardShortcut,
                        children: "e",
                      }),
                    ],
                  }),
                  (0, f.jsxs)("div", {
                    onClick: () => e.onDeleteKeyframe(n),
                    title: "Delete keyframe (backspace)",
                    children: [
                      "Delete",
                      (0, f.jsx)("span", {
                        className: tF().keyboardShortcut,
                        children: "⌫",
                      }),
                    ],
                  }),
                ],
              }),
              (0, f.jsx)("div", {
                className: tF().keyframeButtons,
                style: {
                  left: "".concat(100 * t, "%"),
                  opacity: -1 === n && e.showButtons ? 1 : 0,
                  pointerEvents: -1 === n && e.showButtons ? "all" : "none",
                },
                onClick: () => e.onInsertKeyframe(e.position),
                title: "Insert keyframe (i)",
                children: (0, f.jsxs)("div", {
                  children: [
                    "Insert",
                    (0, f.jsx)("span", {
                      className: tF().keyboardShortcut,
                      children: "i",
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      function tB(e, t) {
        return e.t_s / t || 0;
      }
      var tH = n(82284),
        tU = n.n(tH),
        tG = (e) => {
          let { className: t, ...n } = e,
            r = "".concat(tU().pageTabs, " ").concat(t || "");
          return (0, f.jsx)("div", { className: r, ...n });
        },
        tW = n(84553),
        tq = n.n(tW),
        tK = (e) => {
          let { className: t, ...n } = e,
            r = "".concat(tq().focusButtons, " ").concat(t || "");
          return (0, f.jsx)("div", { className: r, ...n });
        },
        tX = n(35255),
        tQ = n.n(tX),
        tZ = (e) => {
          let { className: t, ...n } = e,
            r = "".concat(tQ().iconButton, " ").concat(t || "");
          return (0, f.jsx)("div", { className: r, ...n });
        };
      !(function (e) {
        (e[(e.Overview = 0)] = "Overview"),
          (e[(e.FirstPerson = 1)] = "FirstPerson");
      })(c || (c = {})),
        (function (e) {
          (e[(e.ReplaceHistory = 0)] = "ReplaceHistory"),
            (e[(e.AppendHistory = 1)] = "AppendHistory");
        })(d || (d = {}));
      let tY = (0, g.forwardRef)((e, t) => {
        var n, r, i, a, c, d, h, p, m;
        let y, x;
        let w = e.animationScene.animationMixer,
          [b, C] = (0, g.useState)(!1),
          M = (0, g.useRef)(b);
        M.current = b;
        let [_, S] = (0, g.useState)(1),
          j = (0, g.useRef)(_);
        j.current = _;
        let [k, E] = (0, g.useState)(!1),
          [P, D] = (0, g.useState)(-1),
          [L, I] = (0, g.useState)(null),
          [T, z] = (0, g.useState)(-1);
        (0, g.useImperativeHandle)(
          t,
          () => ({
            setInitialState: (e, t) => {
              et(e.settings, e.keyframes, e.templateState, t), q();
            },
          }),
          []
        );
        {
          let t = (0, g.useRef)(null);
          (y = (0, g.useMemo)(
            () => (
              null != t.current && t.current.dispose(),
              new eT({
                onSelect: (e) => {
                  I(e), (0, ea.al)(e) && (w.setTime(e.t_s), C(!1));
                },
                onKeyframeChange: (t) => {
                  e.onKeyframesChange(
                    B.current.map((e) => (e.id === t.id ? t : e))
                  );
                },
                onKeyframeChangeEnd(e) {
                  er(B.current.map((t) => (t.id === e.id ? e : t)));
                },
              })
            ),
            []
          )),
            (t.current = y),
            (0, g.useEffect)(
              () => () => {
                var e;
                return null === (e = t.current) || void 0 === e
                  ? void 0
                  : e.dispose();
              },
              []
            );
        }
        (0, g.useEffect)(() => y.dispose, []);
        let [R, A] = (0, g.useState)(null),
          V = (0, g.useRef)(R);
        V.current = R;
        let F = (e) => {
          (V.current = e), A(e);
        };
        {
          let t = (0, g.useRef)(null),
            n = (0, g.useRef)(null);
          (x = (0, g.useMemo)(() => {
            var r, i;
            if (
              (null === (r = n.current) || void 0 === r || r.removeFromParent(),
              null == R)
            )
              return null;
            {
              let r = t.current;
              return (
                (null == r ? void 0 : r.type) !== R.type || null == r
                  ? (null == (r = u.createEditorObject(R)) ||
                      r.events.onChange.addListener(() => {
                        F(r.getState());
                      }),
                    null == r ||
                      r.events.onChangeEnd.addListener(() => {
                        el(r.getState());
                      }),
                    null == r ||
                      r.events.onBakeToKeyframes.addListener(() => {
                        et(N.current, u.getKeyframes(r.getState()), null);
                      }),
                    (n.current =
                      null !== (i = null == r ? void 0 : r.editorGizmo) &&
                      void 0 !== i
                        ? i
                        : null))
                  : r.setState(R),
                null != n.current && e.animationScene.add(n.current),
                r
              );
            }
          }, [R])),
            (0, g.useEffect)(
              () => () => {
                var e;
                null === (e = n.current) ||
                  void 0 === e ||
                  e.removeFromParent();
              },
              []
            ),
            (t.current = x),
            null != t.current && t.current.setEditEnabled(0 === _);
        }
        null != R && (L = x);
        let O = (0, g.useMemo)(
            () =>
              null == R
                ? e.settings
                : { ...e.settings, ...u.getCurveSettings(R) },
            [e.settings, null == R ? void 0 : R.type]
          ),
          N = (0, g.useRef)(O);
        (N.current = O),
          (e.animationScene.animationCamera.useOrbitTransform =
            O.motionMode === o.Orbit),
          J.A6.getValue() !== O.segmentation && J.A6.setValue(O.segmentation),
          (0, g.useEffect)(
            () =>
              J.A6.watch(
                (e) => {
                  e !== N.current.segmentation &&
                    es({ ...N.current, segmentation: e });
                },
                ex.j.OnUserChange,
                !1
              ).unwatch,
            []
          ),
          (e.animationPlayingRef.current = b),
          (y.visible = !b || 0 === _),
          y.setEditEnabled(!b && 0 === _),
          (y.showAnimationCameraVisual = 0 === _),
          (0, g.useMemo)(() => y.setSelection(L, b), [L, b]);
        let B = (0, g.useRef)([]),
          H = (0, g.useRef)([]),
          U = (0, g.useRef)({}),
          G = (0, g.useMemo)(() => {
            var t;
            let n = null != R ? u.getKeyframes(R) : null,
              r = H.current;
            e.keyframes;
            let i = en.Or.processKeyframes(
              null !== (t = null != n ? n : e.keyframes) && void 0 !== t
                ? t
                : [],
              O.loop
            );
            if (
              (e.animationScene.updateAnimationFromKeyframes(i, O),
              0 === i.length)
            ) {
              let t = en.Or.getKeyframeFromLumaCamera(
                0,
                e.firstPersonCamera.focalLength
              );
              e.firstPersonCamera.setFromKeyframe(t);
            } else 1 === i.length && e.firstPersonCamera.setFromKeyframe(i[0]);
            if (
              (y.update(e.animationScene, i, null == R),
              e.animationScene.add(y),
              r.length === i.length)
            ) {
              let e = t0(r),
                t = t0(i);
              if (e !== t) {
                let n = t / e;
                w.setTime(w.time * n);
              }
            }
            return i;
          }, [e.keyframes, R, O]);
        (B.current = G),
          (H.current = G),
          (U.current = { ...O }),
          G.length <= 1 && b && C(!1);
        let W = t0(G);
        function q(t) {
          let n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : new v.Vector3(),
            r = new v.Box3();
          for (let e of B.current) r.expandByPoint(e.position);
          let i = e.editorCamera,
            a = i.clone(),
            o = e.editorCamera.position.clone(),
            s = o.length(),
            l = Math.max(
              1.5 * r.clampPoint(null != t ? t : o, new v.Vector3()).length(),
              0.5
            );
          s < l &&
            isFinite(l) &&
            (a.position.copy((null != t ? t : o).clone().setLength(l)),
            a.lookAt(n),
            a.target.copy(n)),
            i.animateTo(a);
        }
        function K(t) {
          var n;
          let r = t1(G, _, O, e.animationScene, e.firstPersonCamera, t),
            i = G.find((e) => e.keyframeType === en.yX.Loop);
          if (null != i && r.t_s > i.t_s) {
            let e = i.t_s;
            (i.t_s = r.t_s), (r.t_s = e);
          }
          console.log("added keyframe", r.id, r.t_s, r),
            er([...G, r]),
            w.setTime(r.t_s),
            null === (n = e.scrubBarRef.current) ||
              void 0 === n ||
              n.selectKeyframe(r.id);
        }
        function X() {
          let e = window.confirm(
            "You are about to clear ".concat(
              G.length,
              " keyframes, please make sure to download the camera path keyframes if needed for future use."
            )
          );
          return e && er([]), e;
        }
        function Q(e, t) {
          (t.id = e.id), er(G.map((n) => (n === e ? t : n)));
        }
        (e.beforeRenderRef.current = () => {
          null == x || x.tick();
        }),
          (0, g.useEffect)(() => {
            let t = e.interactionManager.events.keyDown.addListener((e) => {
              let t = !1;
              "Space" !== e.code || k
                ? "z" === e.key && (e.ctrlKey || e.metaKey) && !e.shiftKey
                  ? (ec(), (t = !0))
                  : (("y" === e.key &&
                      (e.ctrlKey || e.metaKey) &&
                      !e.shiftKey) ||
                      ("z" === e.key &&
                        (e.ctrlKey || e.metaKey) &&
                        e.shiftKey)) &&
                    (ed(), (t = !0))
                : (C(!M.current && B.current.length > 1), (t = !0)),
                t && (e.preventDefault(), e.stopPropagation());
            }, e.eventPriority);
            return () => t.remove();
          }, [k, e.eventPriority]),
          (0, g.useEffect)(() => {
            function t() {
              if (1 === j.current && !M.current) {
                let t = en.Or.getKeyframeFromLumaCamera(0, 0);
                e.firstPersonCamera.setFromKeyframe(t, !1);
              }
            }
            return (
              window.addEventListener("lumaCameraChange", t),
              () => window.removeEventListener("lumaCameraChange", t)
            );
          }, []),
          (0, g.useEffect)(() => {
            let t = 0 === _ ? null : e.firstPersonCamera;
            if (-1 === T) I(t);
            else {
              let e = G.find((e) => e.id === T);
              e ? I(e) : I(t);
            }
          }, [T, G, _]),
          (0, g.useMemo)(() => {
            0 === _
              ? ((e.overrideCameraRef.current = null), q(), E(!1))
              : ((e.overrideCameraRef.current = e.firstPersonCamera),
                (window.luma.camera.origin = [0, 0, 0]));
            let t = w.time;
            w.setTime(0), w.setTime(1), w.setTime(t);
          }, [_]);
        let Z = () => {
            var t, n;
            (0, ey.Hy)(
              l.serializeState(O, G, R),
              "luma-".concat(
                null !==
                  (n =
                    null === (t = e.captureName) || void 0 === t
                      ? void 0
                      : t.trim()) && void 0 !== n
                  ? n
                  : "capture",
                "-camera-path"
              )
            );
          },
          Y = (0, g.useRef)([]),
          ee = (0, g.useRef)(1);
        function et(t, n, r) {
          let i =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          0 === i
            ? ((Y.current = [
                {
                  settings: ev()(t),
                  keyframes: [...n],
                  templateState: null != r ? ev()(r) : null,
                },
              ]),
              (ee.current = 0))
            : ((Y.current = Y.current.slice(0, ee.current + 1)),
              Y.current.push({
                settings: ev()(t),
                keyframes: [...n],
                templateState: null != r ? ev()(r) : null,
              }),
              (ee.current = Y.current.length - 1)),
            e.onKeyframesChange(n),
            e.onSettingsChange(t),
            F(r),
            (N.current = t),
            (B.current = n);
        }
        function er(e, t) {
          return et(N.current, e, V.current, t);
        }
        let ei = (0, g.useRef)();
        function eo(t, n) {
          e.onSettingsChange(t),
            null != ei.current && clearTimeout(ei.current),
            (ei.current = window.setTimeout(() => {
              et(t, B.current, V.current, n);
            }, 100));
        }
        function es(e, t) {
          et(e, B.current, V.current, t);
        }
        function el(e, t) {
          et(N.current, B.current, e, t);
        }
        function eu(t) {
          e.onKeyframesChange(t.keyframes),
            e.onSettingsChange(t.settings),
            F(t.templateState);
        }
        function ec() {
          let e = ee.current - 1,
            t = Y.current[e];
          null != t && (ee.current--, eu(t));
        }
        function ed() {
          let e = ee.current + 1,
            t = Y.current[e];
          null != t && (ee.current++, eu(t));
        }
        let ep = (0, g.useContext)($.pn);
        function em(e) {
          let t = B.current,
            n = t.find((t) => t.id === e);
          (null == n ? void 0 : n.keyframeType) === en.yX.Loop && (e = t[0].id),
            D(e),
            E(!0),
            S(1);
        }
        (0, g.useEffect)(() => {
          var e, t;
          l.writeLocalStorageDebounce(
            null !==
              (t = null !== (e = ep.slug) && void 0 !== e ? e : ep.uuid) &&
              void 0 !== t
              ? t
              : null,
            l.serializeState(O, G, R)
          );
        }, [R, G, O]);
        let [eg, ew] = (0, g.useState)("template"),
          eC = null != L && (!b || null != R),
          eM = k || !e.showUI || (0 === _ && null != R),
          e_ = !0;
        return (0, f.jsxs)(f.Fragment, {
          children: [
            1 === _ &&
              (0, f.jsx)(td, { videoWidth: O.width, videoHeight: O.height }),
            eC &&
              (0, f.jsx)(tz, {
                menuPosition: "left",
                style: { display: e.showUI ? "" : "none" },
                children: (0, f.jsx)(tI, {
                  object: k ? e.firstPersonCamera : L,
                  firstPersonCamera: e.firstPersonCamera,
                  locked: !1,
                  onUnlock: (e) => {
                    (0, ea.al)(e) && em(e.id);
                  },
                  onKeyframeChange: (t) => {
                    e.onKeyframesChange(
                      B.current.map((e) => (e.id === t.id ? t : e))
                    );
                  },
                  onKeyframeChangeEnd: (e) => {
                    er(B.current.map((t) => (t.id === e.id ? e : t)));
                  },
                  settings: O,
                }),
              }),
            (0, f.jsxs)(tz, {
              menuPosition: "right",
              style: { display: e.showUI && !k ? "" : "none" },
              children: [
                (0, f.jsxs)("div", {
                  style: {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "10px",
                  },
                  children: [
                    (0, f.jsx)(th, {
                      label: "Import Path",
                      onImportFile: e.onImportFile,
                      style: { flexGrow: 0 === G.length ? 1 : 0 },
                    }),
                    G.length > 0 &&
                      (0, f.jsxs)("button", {
                        onClick: Z,
                        children: [
                          (0, f.jsx)(ef._8t, {}),
                          " ",
                          (0, f.jsx)("span", { children: "Save Path" }),
                        ],
                      }),
                  ],
                }),
                (0, f.jsx)(tR, {
                  currentTemplateType:
                    null !== (d = null == R ? void 0 : R.type) && void 0 !== d
                      ? d
                      : null,
                  onCreateTemplate: (e) => {
                    if (null != R || !(G.length > 0) || X()) {
                      if (null == e) {
                        let e = {
                          interpolation: s.Spline,
                          tension: 0,
                          loop: !1,
                          motionMode: o.Freeform,
                        };
                        et({ ...O, ...e }, [], null, 1), S(1);
                      } else if ((el(e), 0 === _)) {
                        if (null != ep.initialPose) {
                          var t, n, r, i;
                          let a = new v.Vector3();
                          null === (t = ep.initialPose) ||
                            void 0 === t ||
                            t.decompose(a, new v.Quaternion(), new v.Vector3());
                          let o = new v.Vector3();
                          null != e.target &&
                            ((o.x =
                              null !== (n = e.target.x) && void 0 !== n
                                ? n
                                : 0),
                            (o.y =
                              null !== (r = e.target.y) && void 0 !== r
                                ? r
                                : 0),
                            (o.z =
                              null !== (i = e.target.z) && void 0 !== i
                                ? i
                                : 0)),
                            q(a, o);
                        } else q();
                      }
                    }
                  },
                  collapsed: "template" !== eg,
                  onCollapseChange: () => ew("template"),
                }),
                null == R &&
                  G.length > 0 &&
                  (0, f.jsx)(ty, {
                    collapsed: "motion" !== eg,
                    onCollapseChange: () => ew("motion"),
                    settings: O,
                    onSettingsChange: (e) => {
                      eo(e);
                    },
                    duration: W,
                    durationMax:
                      null !==
                        (h =
                          null === (r = tS.store.userLimits) || void 0 === r
                            ? void 0
                            : null === (n = r.render) || void 0 === n
                            ? void 0
                            : n.maxDuration) && void 0 !== h
                        ? h
                        : 240,
                    onDurationChange: (t) => {
                      if (t !== W) {
                        let n = t / W;
                        n = isFinite(n) ? n : 1;
                        let r = G.map((e) => {
                          let t = e.clone(!0);
                          return (t.t_s = e.t_s * n), t;
                        });
                        e.onKeyframesChange(r);
                      }
                    },
                    onDurationChangeEnd: (e) => {
                      er(G);
                    },
                  }),
                G.length > 0 &&
                  (0, f.jsx)(tk, {
                    animationScene: e.animationScene,
                    onJobQueued: e.onJobQueued,
                    onQueueJob: e.onQueueJob,
                    settings: O,
                    onSettingsChange: (e) => {
                      eo(e);
                    },
                    showDuration: !1,
                    duration: W,
                    durationMax:
                      null !==
                        (p =
                          null === (a = tS.store.userLimits) || void 0 === a
                            ? void 0
                            : null === (i = a.render) || void 0 === i
                            ? void 0
                            : i.maxDuration) && void 0 !== p
                        ? p
                        : 240,
                    onDurationChange: (e) => {},
                    enablePreview: !1,
                    disableRender: 0 === G.length,
                    collapsed: "render" !== eg,
                    onCollapseChange: () => ew("render"),
                  }),
              ],
            }),
            (0, f.jsxs)(tG, {
              children: [
                e_ &&
                  (0, f.jsx)("div", {
                    className: 0 === _ ? eb().active : "",
                    onClick: () => S(0),
                    children: "Overview",
                  }),
                (0, f.jsx)("div", {
                  className: 1 === _ ? eb().active : "",
                  onClick: () => S(1),
                  children: "First Person",
                }),
              ],
            }),
            (0, f.jsxs)("div", {
              className: eb().timelineContainer,
              style: { display: eM ? "none" : "" },
              children: [
                (0, f.jsx)(tO, {
                  ref: e.scrubBarRef,
                  style: {
                    position: "relative",
                    top: "unset",
                    left: "unset",
                    right: "unset",
                    bottom: "unset",
                    flexGrow: G.length > 1 ? 1 : 0,
                    display: G.length > 0 ? "" : "none",
                    transition: "flex-grow 0.25s ease-out",
                  },
                  duration_s: t0(G),
                  interactive: !k && e.showUI,
                  onScrub: (e) => {
                    w.setTime(e * t0(G));
                  },
                  keyframes: null != R ? void 0 : G,
                  smoothnessMultiplier:
                    1 -
                    (null !==
                      (m =
                        null === (c = N.current) || void 0 === c
                          ? void 0
                          : c.tension) && void 0 !== m
                      ? m
                      : 0),
                  onKeyframesChange: (e) => {
                    N.current.loop &&
                      null == e.find((e) => e.keyframeType === en.yX.Loop) &&
                      es({ ...N.current, loop: !1 }),
                      er(e);
                  },
                  onSelectKeyframe: (0, g.useCallback)(
                    (e, t) => {
                      let n = G.find((t) => t.id === e);
                      null != n && t && (w.setTime(n.t_s), C(!1)), z(e);
                    },
                    [G]
                  ),
                  onInsertKeyframe: (t) => {
                    if (G.length < 2) K();
                    else {
                      let n = t0(G),
                        r = t * n,
                        i = G.find((e) => e.t_s === r);
                      i
                        ? 1 === _
                          ? Q(
                              i,
                              en.Or.getKeyframeFromLumaCamera(
                                r,
                                e.firstPersonCamera.focalLength
                              )
                            )
                          : Q(i, t$(e.animationScene, r))
                        : K(t * n);
                    }
                  },
                  onEditKeyframe: (e) => {
                    em(e);
                  },
                  showKeyframeButtons: !b,
                  children:
                    G.length >= 2 &&
                    (0, f.jsxs)("div", {
                      className: eb().timelineAxis,
                      children: [
                        (0, f.jsx)("div", {
                          className: eb().axisTick,
                          style: { left: "0%" },
                          children: "0 s",
                        }),
                        (0, f.jsxs)("div", {
                          className: eb().axisTick,
                          style: { left: "50%" },
                          children: [(0.5 * W).toFixed(1), " s"],
                        }),
                        (0, f.jsxs)("div", {
                          className: eb().axisTick,
                          style: { left: "100%" },
                          children: [W.toFixed(1), " s"],
                        }),
                      ],
                    }),
                }),
                (0, f.jsxs)("div", {
                  style: {
                    marginLeft: "30px",
                    display: "flex",
                    flexDirection: "row",
                  },
                  children: [
                    1 === _ &&
                      null == R &&
                      (0, f.jsxs)("button", {
                        onClick: () => K(),
                        title:
                          "Add keyframe to the end of the animation using the current camera position",
                        children: [
                          (0, f.jsx)(ef.pOD, {}),
                          (0, f.jsx)("span", { children: "Add Keyframe" }),
                        ],
                      }),
                    G.length > 0 &&
                      null == R &&
                      (0, f.jsxs)("button", {
                        onClick: X,
                        style: {
                          padding: 10,
                          paddingLeft: 20,
                          paddingRight: 20,
                          marginLeft: 10,
                        },
                        title: "Clear all keyframes",
                        children: [
                          (0, f.jsx)(eh.p, { style: { marginRight: 2.5 } }),
                          (0, f.jsx)("span", { children: "Clear" }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            (0, f.jsx)(tK, {
              style: { display: eM ? "none" : "" },
              children: (0, f.jsx)(tZ, {
                className: "play_pause",
                onClick: () => C(!b),
                style: { display: G.length > 1 ? "" : "none" },
                title: "Play/Pause (space bar)",
                children: b
                  ? (0, f.jsx)(ef.fpf, { width: 24, height: 24 })
                  : (0, f.jsx)(ef.o1U, { width: 24, height: 24 }),
              }),
            }),
            k && e.showUI
              ? (0, f.jsx)(tJ, {
                  interactionManager: e.interactionManager,
                  eventPriority: e.eventPriority + 1,
                  onCancel: () => E(!1),
                  onSave: () => {
                    let t = G.find((e) => e.id === P);
                    if (null != t) {
                      let n = en.Or.getKeyframeFromLumaCamera(
                        t.t_s,
                        e.firstPersonCamera.focalLength
                      );
                      (n.smoothness = t.smoothness), Q(t, n);
                    }
                    E(!1);
                  },
                  firstPersonCamera: e.firstPersonCamera,
                  keyframe: G.find((e) => e.id === P),
                  settings: O,
                })
              : null,
          ],
        });
      });
      function tJ(e) {
        if (null == e.keyframe) return e.onCancel(), null;
        (0, g.useEffect)(() => {
          let t = e.interactionManager.events.keyDown.addListener((t) => {
            let n = !1;
            "Escape" === t.key
              ? (e.onCancel(), (n = !0))
              : "Enter" === t.key && (e.onSave(), (n = !0)),
              n && (t.preventDefault(), t.stopPropagation());
          }, e.eventPriority);
          return () => t.remove();
        }, []);
        let t = 1 - e.settings.tension;
        return (0, f.jsxs)(tK, {
          children: [
            (0, f.jsx)(eE, {
              keyframe: {
                position: e.firstPersonCamera.position,
                target: e.firstPersonCamera.target,
                id: e.keyframe.id,
                keyframeType: e.keyframe.keyframeType,
                smoothness: e.keyframe.smoothness,
              },
              pollForPositionChange: !0,
              selected: !0,
              smoothnessMultiplier: t,
              dragging: !1,
              style: {
                margin: 0,
                top: "-50px",
                width: "30px",
                height: "30px",
                left: "50%",
              },
            }),
            (0, f.jsx)(tZ, {
              className: "cancel",
              onClick: e.onCancel,
              title: "Cancel (esc)",
              children: (0, f.jsx)(ep.T, {}),
            }),
            (0, f.jsx)(tZ, {
              className: "save",
              onClick: e.onSave,
              title: "Save (enter)",
              children: (0, f.jsx)(em.n, {}),
            }),
          ],
        });
      }
      function t$(e, t) {
        let n;
        let r = e.animationCamera,
          i = r.parent;
        r.removeFromParent();
        let a = r.clone();
        (a.name = r.name), i.add(a);
        {
          let r = new v.AnimationMixer(e),
            i = e.animations,
            o = r.clipAction(i[0]);
          (o._updateTime = (e) => (o.time += e)),
            o.play(),
            r.setTime(t),
            a.updateMatrixWorld(!0);
          let s = a.getWorldPosition(new v.Vector3()),
            l = a.getWorldQuaternion(new v.Quaternion());
          n = en.Or.createKeyframe(t, s, l, a.target, a.getFocalLength());
        }
        return i.remove(a), i.add(r), n;
      }
      function t0(e) {
        var t, n;
        return null !==
          (n =
            null === (t = e[e.length - 1]) || void 0 === t ? void 0 : t.t_s) &&
          void 0 !== n
          ? n
          : 0;
      }
      function t1() {
        let e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n = arguments.length > 1 ? arguments[1] : void 0,
          r = arguments.length > 2 ? arguments[2] : void 0,
          i = arguments.length > 3 ? arguments[3] : void 0,
          a = arguments.length > 4 ? arguments[4] : void 0,
          o = arguments.length > 5 ? arguments[5] : void 0;
        if (null == o) {
          var s, l;
          let e = en.Or.averageDt(t) || 2;
          o =
            (null !==
              (l =
                null === (s = t[t.length - 1]) || void 0 === s
                  ? void 0
                  : s.t_s) && void 0 !== l
              ? l
              : 0) + (t.length > 0 ? e : 0);
        }
        if (1 === n) e = en.Or.getKeyframeFromLumaCamera(o, a.focalLength);
        else {
          let n = -1;
          for (let e = 0; e < t.length && ((n = e), !(o <= t[e].t_s)); e++);
          let a = t[n - 1],
            s = t[n];
          if (null != a) e = t$(i, o);
          else if (null != s) {
            let t = s.position.clone().add(new v.Vector3(1, 1, 1)),
              n = s.quaternion.clone();
            e = en.Or.createKeyframe(o, t, n, s.target.clone(), s.focalLength);
          } else {
            let t = new v.Vector3(1, 1, 1),
              n = new v.Vector3(0, 0, 0),
              i = new v.Quaternion().setFromUnitVectors(
                new v.Vector3(0, 0, -1),
                n.clone().sub(t).normalize()
              ),
              a = new v.PerspectiveCamera(r.fov, r.width / r.height);
            e = en.Or.createKeyframe(o, t, i, n, a.getFocalLength());
          }
        }
        return e;
      }
      function t3(e) {
        let t = {
            set scale(value) {
              e.root.scale.set(value, value, value);
            },
            get scale() {
              return e.root.scale.x;
            },
          },
          n = {
            get x() {
              return (0, tP.ZY)(e.root.rotation.x);
            },
            set x(value) {
              e.root.rotation.x = (0, tP.Id)(value);
            },
            get y() {
              return (0, tP.ZY)(e.root.rotation.y);
            },
            set y(value) {
              e.root.rotation.y = (0, tP.Id)(value);
            },
            get z() {
              return (0, tP.ZY)(e.root.rotation.z);
            },
            set z(value) {
              e.root.rotation.z = (0, tP.Id)(value);
            },
          };
        return (0, f.jsxs)(tf.Section, {
          header: "Transform Path",
          collapsed: e.collapsed,
          children: [
            (0, f.jsxs)("div", {
              style: {
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                gap: "10px",
              },
              children: [
                (0, f.jsxs)("button", {
                  onClick: () => e.onSelectTransformMode("translate"),
                  children: [(0, f.jsx)("b", { children: "[G]" }), " Move"],
                }),
                (0, f.jsxs)("button", {
                  onClick: () => e.onSelectTransformMode("scale"),
                  children: [(0, f.jsx)("b", { children: "[E]" }), " Scale"],
                }),
                (0, f.jsxs)("button", {
                  onClick: () => e.onSelectTransformMode("rotate"),
                  children: [(0, f.jsx)("b", { children: "[R]" }), " Rotate"],
                }),
              ],
            }),
            (0, f.jsxs)("div", {
              children: [
                (0, f.jsx)("header", { children: "position" }),
                (0, f.jsx)(eU, { obj: e.root.position }),
              ],
            }),
            (0, f.jsxs)("div", {
              children: [
                (0, f.jsx)("header", { children: "rotation" }),
                (0, f.jsx)(eU, { obj: n, units: "\xb0", changeRate: 10 }),
              ],
            }),
            (0, f.jsxs)("div", {
              style: { textAlign: "right" },
              children: [
                (0, f.jsx)("header", { children: "scale" }),
                (0, f.jsx)(eN.R, {
                  obj: t,
                  field: "scale",
                  min: 1e-6,
                  showLabel: !1,
                  style: { display: "inline-flex" },
                  showDot: !0,
                }),
              ],
            }),
          ],
        });
      }
      function t2(e) {
        return (0, f.jsxs)(tz, {
          menuPosition: "right",
          style: { display: e.showUI ? "" : "none" },
          children: [
            (0, f.jsx)(th, { onImportFile: e.onImportFile }),
            (0, f.jsx)(t3, { ...e }),
            (0, f.jsx)(tk, { ...e }),
          ],
        });
      }
      var t4 = n(82651),
        t5 = n(11923),
        t6 = n(38859),
        t9 = n(15353),
        t8 = n(95387),
        t7 = n(49618),
        ne = n.n(t7),
        nt = n(44914),
        nn = n(44800),
        nr = n(95004),
        ni = n(45313),
        na = (e) => {
          let {
            children: t,
            className: n,
            style: r,
            show: i = !0,
            exitZeroDur: a = !1,
            loaded: o,
            ...s
          } = e;
          return (0, f.jsx)(nr.M, {
            initial: !1,
            exitBeforeEnter: !1,
            children:
              (i || o) &&
              (0, f.jsx)(ni.E.div, {
                ...s,
                className: n,
                style: r,
                initial: { opacity: 0 },
                animate: {
                  opacity: i && o ? 1 : 0,
                  transition: { duration: 0.5 },
                },
                exit: {
                  opacity: i && o ? 1 : 0,
                  transition: { duration: a ? 0 : 0.5 },
                },
                children: t,
              }),
          });
        },
        no = n(78643),
        ns = n.n(no),
        nl = (e) => {
          let { src: t, videoShouldPlay: n, videoLoaded: r, className: i } = e,
            [a, o] = (0, g.useState)(!1);
          return (0, f.jsx)(na, {
            show: n,
            loaded: a,
            className: i,
            exitZeroDur: !0,
            children: (0, f.jsx)("video", {
              className: ns().video,
              autoPlay: !0,
              loop: !0,
              muted: !0,
              playsInline: !0,
              disablePictureInPicture: !0,
              onLoadedData: () => {
                o(!0), null == r || r();
              },
              children: (0, f.jsx)("source", { src: t, type: "video/mp4" }),
            }),
          });
        },
        nu = n(2291),
        nc = n.n(nu);
      function nd(e) {
        let { image: t, setCurrentVideo: n } = e,
          r = null == t.video && "finished" == t.status,
          [i, a] = (0, g.useState)(!1),
          o = () => {
            i && a(!1);
          },
          s = () => {
            i || a(!0);
          },
          [l, u] = (0, g.useState)(!0),
          [c, d] = (0, g.useState)(!1),
          h = (0, g.useRef)(null);
        function p(e) {
          l || !h.current || document.body.clientWidth < 700 || (s(), d(!0));
        }
        function m(e) {
          l || !h.current || document.body.clientWidth < 700 || (o(), d(!1));
        }
        let [v, y] = (0, g.useState)(!1),
          x = !c || v;
        return (0, f.jsx)("div", {
          className: nc().masterContainer,
          style: { overflow: "visible" },
          onClick: () => n(t.href),
          children: (0, f.jsxs)("div", {
            className: nc().imageContainer,
            style: { overflow: "visible" },
            ref: h,
            onMouseEnter: p,
            onMouseLeave: m,
            children: [
              null == t.imageSrc
                ? (0, f.jsx)(nn.default, {
                    className: nc().image,
                    alt: "processing",
                    fill: !0,
                    src: "https://cdn-luma.com/public/captures.lumalabs.ai/images/processing.gif",
                  })
                : (0, f.jsx)(nn.default, {
                    className:
                      nc().image + "".concat(x ? "" : " " + nc().imageAnime),
                    alt: t.name,
                    src: t.imageSrc,
                    fill: !0,
                    onLoadingComplete: () => u(!1),
                  }),
              null != t.video
                ? (0, f.jsx)(nl, {
                    src: t.video,
                    videoShouldPlay: i,
                    className: nc().videoContainer,
                    videoLoaded: () => {
                      y(!0);
                    },
                  })
                : (0, f.jsx)(f.Fragment, {}),
              (0, f.jsxs)("p", {
                className: nc().download,
                onClick: () => {
                  t.href && (0, ey.Sv)(t.href);
                },
                children: [
                  (0, f.jsx)("span", {}),
                  null == t.video
                    ? r
                      ? "failed"
                      : t.status
                    : (0, f.jsx)(nt._, {}),
                ],
              }),
            ],
          }),
        });
      }
      var nh = n(43174),
        np = n(16257),
        nm = n(30773),
        nf = n(88860);
      let ng = (0, g.forwardRef)((e, t) => {
        let n;
        let [r, i] = (0, g.useState)(null),
          [a, o] = (0, g.useState)(!1),
          [s, l] = (0, g.useState)(e.collapsed),
          [u, c] = (0, g.useState)(0);
        (0, g.useImperativeHandle)(t, () => ({
          collapse: () => l(!0),
          expand: () => {
            l(!1);
          },
        }));
        let { uuid: d } = e,
          [h, p] = (0, g.useState)(!1),
          m = async () => {
            if (d) {
              var e;
              let { response: t, isMoreAvailable: n } = await (0, tC.q$)(d);
              o(n);
              let r =
                null === (e = tS.store.capture) || void 0 === e
                  ? void 0
                  : e.artifacts;
              if (r) {
                let e = (0, ey.gk)("with_background", r),
                  n = (0, ey.gk)("with_background_preview", r);
                e &&
                  n &&
                  (t = [
                    ...t,
                    {
                      uuid: (0, nf.Z)(),
                      type: t8.KM.video,
                      status: t8.CA.finished,
                      date: "",
                      capture: { uuid: "" },
                      user: { uuid: "", username: "" },
                      artifacts: [
                        { type: "video", url: e },
                        { type: "video_preview", url: n },
                      ],
                    },
                  ]);
              }
              i(t), p(!1);
            }
          };
        (0, g.useEffect)(() => {
          s || h || m();
        }, [s]),
          (0, g.useEffect)(() => {
            let e = (null != r ? r : []).some(
              (e) => e.status === t8.CA.dispatched || e.status === t8.CA.new
            );
            if ((n && clearInterval(n), e))
              return (
                (n = setInterval(() => {
                  m();
                }, 15e3)),
                () => clearInterval(n)
              );
          }, [r]);
        let [v, y] = (0, g.useState)();
        (0, g.useEffect)(() => {
          s && y(void 0), s || c(0);
        }, [s]);
        let x = (0, g.useRef)(null);
        (0, g.useEffect)(() => {
          if (s && null != x.current && null != r) {
            let e = x.current;
            c(
              u +
                r.filter((t) => {
                  if ("finished" !== t.status) return !1;
                  {
                    let n = e.find((e) => e.uuid === t.uuid);
                    return null == n || "finished" !== n.status;
                  }
                }).length
            );
          }
          x.current = r;
        }, [r, s, u]);
        let [w, b] = (0, g.useState)(!1);
        (0, g.useEffect)(() => {
          b(
            (null != r ? r : []).some(
              (e) => "finished" !== e.status && "failed" !== e.status
            )
          );
        }, [r]);
        let C = async () => {
          let { response: e, isMoreAvailable: t } = await (0, tC.q$)(d, {
            skip: r.length,
          });
          o(t), i([...r, ...e]);
        };
        return (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)(nh.DownloadVideoModal, {
              isOpen: !!v,
              onClose: () => y(void 0),
              isCentered: !0,
              videoSrc: null == v ? void 0 : v.videoSrc,
              color: "white",
              bgColor: np.O9.bg,
              depthImagesSrc: null == v ? void 0 : v.depthImagesSrc,
            }),
            (0, f.jsxs)("div", {
              className: ne().rendersMenu + " " + (s ? ne().collapsed : ""),
              style: { display: e.display ? "" : "none" },
              children: [
                (0, f.jsxs)("div", {
                  className: ne().rendersMenuHeader,
                  onClick: () => l(!s),
                  children: [
                    s
                      ? (0, f.jsx)(t4.g, { boxSize: 25 })
                      : (0, f.jsx)(t5.v, { boxSize: 25 }),
                    " ",
                    "Renders",
                    w
                      ? (0, f.jsx)(t6.$, {
                          style: { width: "12px", height: "12px" },
                        })
                      : null,
                  ],
                }),
                (0, f.jsxs)("div", {
                  className: ne().rendersList,
                  children: [
                    (null != r ? r : []).map((e) =>
                      (0, f.jsx)(nv, { item: e, setCurrentRender: y }, e.uuid)
                    ),
                    a &&
                      (0, f.jsx)(t9.M, {
                        width: "100px",
                        height: "100px",
                        children: (0, f.jsx)(nm.Z, {
                          onClick: C,
                          children: "more",
                        }),
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      function nv(e) {
        var t, n, r, i, a, o;
        let s =
            null === (n = e.item.artifacts) || void 0 === n
              ? void 0
              : null === (t = n.find((e) => "video_preview" == e.type)) ||
                void 0 === t
              ? void 0
              : t.url,
          l =
            null === (i = e.item.artifacts) || void 0 === i
              ? void 0
              : null === (r = i.find((e) => "video" == e.type)) || void 0 === r
              ? void 0
              : r.url,
          u =
            null === (o = e.item.artifacts) || void 0 === o
              ? void 0
              : null === (a = o.find((e) => "video_depth_images" === e.type)) ||
                void 0 === a
              ? void 0
              : a.url;
        return (0, f.jsx)(f.Fragment, {
          children: (0, f.jsx)(nd, {
            setCurrentVideo: () =>
              e.setCurrentRender({
                videoSrc: l,
                videoPreviewSrc: s,
                depthImagesSrc: u,
              }),
            image: {
              href: l,
              imageSrc: s,
              name: e.item.status,
              video: l,
              status: e.item.status,
            },
          }),
        });
      }
      function ny(e) {
        let [t, n] = (0, g.useState)(e.playing);
        return (
          (0, g.useEffect)(() => e.onPlayChange(t), [t]),
          (0, g.useEffect)(() => {
            let r = (r) => {
              " " === r.key
                ? (r.preventDefault(), r.stopPropagation(), n(!t))
                : "Escape" === r.key &&
                  (r.preventDefault(), r.stopPropagation(), e.onExit());
            };
            return (
              window.addEventListener("keydown", r),
              () => window.removeEventListener("keydown", r)
            );
          }, [t]),
          (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsxs)(tK, {
                children: [
                  (0, f.jsx)(tZ, {
                    className: "play_pause",
                    onClick: () => n(!t),
                    children: t
                      ? (0, f.jsx)(ef.fpf, { width: 24, height: 24 })
                      : (0, f.jsx)(ef.o1U, { width: 24, height: 24 }),
                  }),
                  (0, f.jsx)(tZ, {
                    className: "cancel",
                    onClick: e.onExit,
                    children: (0, f.jsx)(ep.T, {}),
                  }),
                ],
              }),
              (0, f.jsx)(tO, {
                ref: e.scrubBarRef,
                onScrub: e.onScrub,
                smoothnessMultiplier: 1,
                duration_s: -1,
              }),
            ],
          })
        );
      }
      ng.displayName = "RendersMenu";
      var nx = n(82306),
        nw = n(70231);
      !(function (e) {
        (e[(e.Start = 0)] = "Start"),
          (e[(e.PerFrameMode = 1)] = "PerFrameMode"),
          (e[(e.CurveMode = 2)] = "CurveMode");
      })(h || (h = {}));
      let nb = (0, g.forwardRef)((e, t) => {
        let n = (0, g.useRef)(null),
          [r, i] = (0, g.useState)(2),
          a = (0, g.useRef)((0, g.useMemo)(() => new eu(), [])),
          u = (0, g.useRef)(a.current.animationMixer),
          c = (0, g.useRef)(
            (0, g.useMemo)(() => {
              let t = new ee.N(),
                n = en.Or.getKeyframeFromLumaCamera(0, 20);
              return (
                t.setFromKeyframe(n),
                (t.fov = e.camera.fov),
                t.updateMatrix(),
                t
              );
            }, [])
          ),
          h = (0, g.useRef)(null),
          p = (0, g.useRef)(!0),
          m = (0, g.useRef)((0, g.useMemo)(() => new v.Object3D(), [])).current,
          C = (0, g.useRef)((0, g.useMemo)(() => new v.Object3D(), [])).current,
          M = (0, g.useRef)(!1),
          S = (0, g.useRef)(() => {}),
          j = (0, g.useRef)(() => {}),
          [k, E] = (0, g.useState)(!1),
          P = (0, g.useRef)(null),
          D = (0, g.useRef)(null),
          L = (0, g.useRef)(null),
          I = (0, g.useRef)(null),
          [T, z] = (0, g.useState)({
            fps: 30,
            width: 1280,
            height: 720,
            fov: 60,
            bgColor: {
              r: window.luma.options.background_color[0],
              g: window.luma.options.background_color[1],
              b: window.luma.options.background_color[2],
              a: window.luma.options.background_color[3],
            },
            motionMode: o.Freeform,
            interpolation: s.Spline,
            tension: 0,
            loop: !1,
            transparentBackground: !1,
            depthMaps: !1,
            segmentation: J.A6.getValue(),
            fovXOverride_deg: NaN,
            fovXMultiplier: 1,
          }),
          R = e.camera;
        (0, g.useMemo)(() => m.add(a.current), []),
          (0, g.useMemo)(() => {
            let e = en.Or.getKeyframeFromLumaCamera(0, 0);
            R.setFromKeyframe(e, !1);
          }, []),
          (0, g.useEffect)(() => {
            let e = (0, J.FO)().then((e) => ({
              rgba0: {
                r: window.luma.options.background_color[0],
                g: window.luma.options.background_color[1],
                b: window.luma.options.background_color[2],
                a: window.luma.options.background_color[3],
              },
              luma: e,
            }));
            return () => {
              e.then((e) => {
                e.luma.options.background_color = [
                  e.rgba0.r,
                  e.rgba0.g,
                  e.rgba0.b,
                  e.rgba0.a,
                ];
              });
            };
          }, []),
          (0, g.useEffect)(() => {
            let e = (0, J.FO)().then((e) => {
              let t = e.options.enable_momentum;
              return (
                (e.options.enable_momentum = !1),
                { luma: e, previous_enable_momentum: t }
              );
            });
            return () => {
              e.then(
                (e) =>
                  (e.luma.options.enable_momentum = e.previous_enable_momentum)
              );
            };
          }, []),
          (0, g.useEffect)(
            () => () => {
              window.luma.camera.up_world_aligned = !0;
            },
            []
          );
        let A = (0, g.useRef)(r);
        (0, g.useEffect)(() => {
          A.current = r;
        }, [r]);
        let V = (0, g.useRef)(T);
        (0, g.useEffect)(() => {
          V.current = T;
        }, [T]);
        let [F, O] = (0, g.useState)(-1),
          [N, B] = (0, g.useState)(-1);
        (0, g.useImperativeHandle)(
          t,
          () => ({
            beforeFrame: () => S.current(),
            renderFrame: () => j.current(),
          }),
          []
        );
        let H = e.interactionManager,
          U = 1;
        function G() {
          for (let e of (m.scale.setScalar(1),
          m.position.set(0, 0, 0),
          m.rotation.set(0, 0, 0),
          m.remove(...m.children),
          C.children))
            e instanceof y.Ys && (e.dispose(), C.remove(e)),
              e instanceof v.CameraHelper && (e.dispose(), C.remove(e));
        }
        function W(e, t) {
          let n, r;
          G(), (h.current = null), e.traverse((e) => (e.visible = !1));
          let i = (function (e) {
            let t = [];
            return (
              e.traverse((e) => {
                e instanceof v.Camera && t.push(e);
              }),
              t
            );
          })(e)
            .filter((e) => e instanceof v.PerspectiveCamera)
            .map((e) => {
              var t, n;
              let r = new ee.N().copy(e);
              return (
                (r.name = e.name),
                null === (t = e.parent) || void 0 === t || t.add(r),
                null === (n = e.parent) || void 0 === n || n.remove(e),
                (r.far = 10),
                r.updateProjectionMatrix(),
                (r.visible = !0),
                r
              );
            });
          for (let t of ((e.visible = !0), e.animations)) {
            let e = 1 / 0;
            for (let n of t.tracks) e = Math.min(e, n.times[0]);
            if (0 !== e)
              for (let n of t.tracks)
                for (let t = 0; t < n.times.length; t++) n.times[t] -= e;
          }
          for (let t of e.animations) {
            let e = -1 / 0;
            for (let n of t.tracks)
              e = Math.max(e, n.times[n.times.length - 1]);
            t.duration = e;
          }
          if (
            (null == t && (t = !window.confirm("Import raw rotations?")), t)
          ) {
            for (let t of e.animations)
              for (let e of t.tracks)
                if (e.name.endsWith(".quaternion"))
                  for (let t = 0; t < e.values.length; t += 4) {
                    let n = new v.Quaternion(
                        e.values[t],
                        e.values[t + 1],
                        e.values[t + 2],
                        e.values[t + 3]
                      ),
                      r = new v.Matrix4().makeRotationFromQuaternion(n);
                    (0, ea.nU)(r, r),
                      n.setFromRotationMatrix(r),
                      (e.values[t] = n.x),
                      (e.values[t + 1] = n.y),
                      (e.values[t + 2] = n.z),
                      (e.values[t + 3] = n.w);
                  }
          }
          let l = e.animations,
            d = new v.AnimationMixer(e);
          for (let e of ((u.current = d), l)) {
            let t = d.clipAction(e);
            (t._updateTime = (e) => (t.time += e)), t.play();
          }
          for (let e of i) {
            let t = new v.CameraHelper(e);
            C.add(t);
          }
          let p = new v.AnimationMixer(e),
            f = 0,
            g = new v.Box3(),
            _ = 1 / 60;
          for (let e of l)
            p.clipAction(e).play(), (f = Math.max(f, e.duration));
          for (let t of i) {
            let n = [],
              r = [],
              i = new v.Color(),
              a = new v.Color(11352595),
              o = new v.Color(15261342);
            p.setTime(0);
            for (let e = 0; e < f - _; e += _) {
              let s = e / f;
              p.setTime(e), t.updateMatrixWorld(!0);
              let l = t.getWorldPosition(new v.Vector3());
              n.push(l.x, l.y, l.z),
                i.lerpColors(a, o, s),
                r.push(i.r, i.g, i.b),
                g.expandByPoint(l);
            }
            let s = new w.L();
            s.setPositions(n), s.setColors(r);
            let l = new b.Y({
                color: 16777215,
                worldUnits: !0,
                linewidth: 0.002,
                vertexColors: !0,
                dashed: !1,
              }),
              u = new x.w(s, l);
            e.add(u), p.setTime(0);
            let c = Math.min(1, f / 10);
            for (let n = 0; n <= f - c; n += c) {
              p.setTime(n), t.updateMatrixWorld(!0);
              let r = t.clone();
              r.remove(),
                (r.matrixAutoUpdate = !1),
                (r.matrixWorldNeedsUpdate = !1),
                (r.matrixWorld = t.matrixWorld.clone());
              let i = new v.CameraHelper(r);
              (i.material.transparent = !0),
                (i.material.opacity = 0.4),
                e.add(i);
            }
          }
          m.add(e), g.getSize(new v.Vector3()), g.getCenter(new v.Vector3());
          let S = new y.Ys(R, H.el);
          S.attach(m),
            S.addEventListener("dragging-changed", function (e) {
              let t = e.value;
              M.current = t;
            }),
            C.add(S),
            (c.current = i[0]);
          let j = c.current.aspect,
            k = J.h5.fov;
          j > 1
            ? (r = Math.round((n = 1920) / j))
            : (n = Math.round((r = 1920) * j));
          let E = f;
          z({
            fov: Math.round(10 * k) / 10,
            fps: 30,
            width: n,
            height: r,
            bgColor: { r: 0, g: 0, b: 0, a: 0 },
            motionMode: o.Freeform,
            interpolation: s.Linear,
            tension: 0,
            loop: !1,
            depthMaps: !1,
            transparentBackground: !1,
            segmentation: J.A6.getValue(),
            fovXOverride_deg: NaN,
            fovXMultiplier: 1,
          }),
            O(E),
            B(E),
            (a.current = e),
            (a.current.animationCamera = i[0]),
            (a.current.animationMixer = d);
        }
        function q(t) {
          null == t && (0, J.sv)(e.camera), (h.current = null != t ? t : null);
        }
        function K(e) {
          q(e),
            u.current.setTime(0),
            E(null != h.current),
            null != e && (p.current = !0);
        }
        (0, g.useEffect)(() => {
          let t = new v.WebGLRenderer({
            canvas: n.current,
            alpha: !0,
            antialias: !0,
            powerPreference: "high-performance",
            precision: "lowp",
          });
          (t.toneMapping = v.NoToneMapping), (t.toneMappingExposure = 1);
          let r = new v.Scene(),
            i = new et.Z(H, r, R, U);
          r.add(m), r.add(C);
          let o = new v.AxesHelper();
          o.scale.setScalar(0.25), C.add(o);
          let s = new ee.N(),
            l = NaN;
          (S.current = () => {
            var e, r, i;
            let o = performance.now() / 1e3,
              d = isFinite(l) ? o - l : 1 / 60;
            l = o;
            let m = c.current,
              f = u.current,
              g = a.current.animationCamera,
              v = n.current,
              y = window.devicePixelRatio || 1,
              x = Math.round(v.clientWidth * y),
              w = Math.round(v.clientHeight * y);
            (v.width !== x || v.height !== w) && t.setSize(x, w, !1);
            let b = V.current.width / V.current.height;
            (g.aspect = b), null != m && (m.aspect = b);
            {
              let e =
                  null !==
                    (i =
                      null === (r = D.current) || void 0 === r
                        ? void 0
                        : r.isScrubbing) &&
                  void 0 !== i &&
                  i,
                t = 0;
              for (let e of a.current.animations) t = Math.max(t, e.duration);
              let n = t;
              if (!e && p.current) {
                let e = f.time;
                (e = isFinite((e = Y(e + d, n))) ? e : 0), f.setTime(e);
              }
              let o = Math.max(Math.min(f.time, n), 0);
              f.setTime(o),
                null == D.current ||
                  e ||
                  D.current.setPosition(f.time / n || 0),
                !g.isEqual(s) && n > 0 && (m.copy(g), s.copy(g)),
                m.animationTick();
            }
            let M = R.fov;
            if (null != h.current) {
              h.current.updateWorldMatrix(!0, !1),
                R.matrix.copy(h.current.matrixWorld),
                R.matrix.decompose(R.position, R.quaternion, R.scale);
              let e = h.current.aspect > R.aspect,
                t = h.current.fov * V.current.fovXMultiplier;
              if (e) {
                let e =
                  (2 *
                    Math.atan(
                      Math.tan(
                        (((2 *
                          Math.atan(
                            Math.tan((t * Math.PI) / 360) * h.current.aspect
                          ) *
                          180) /
                          Math.PI) *
                          Math.PI) /
                          360
                      ) / R.aspect
                    ) *
                    180) /
                  Math.PI;
                R.fov = e;
              } else R.fov = t;
              if (
                V.current.fovXOverride_deg &&
                isFinite(V.current.fovXOverride_deg)
              ) {
                let e =
                  (2 *
                    Math.atan(
                      Math.tan((V.current.fovXOverride_deg * Math.PI) / 360) /
                        R.aspect
                    ) *
                    180) /
                  Math.PI;
                R.fov = e;
              }
              R.animator.removeAll(), (R.matrixWorldNeedsUpdate = !0);
            } else (0, J.Uw)(window.luma.camera, "world_up", [0, -1, 0]);
            M !== R.fov && R.updateProjectionMatrix(),
              (C.visible = null == h.current),
              (0, J.Uw)(
                window.luma.camera,
                "up_world_aligned",
                null == h.current
              ),
              null === (e = L.current) || void 0 === e || e.call(L);
          }),
            (j.current = () => {
              t.render(r, R);
            });
          let d = [
            H.events.pointerDown.addListener((e) => {
              (M.current || (p.current && null != h.current)) &&
                (e.stopPropagation(), e.preventDefault());
            }, U + 1),
            H.events.pointerMove.addListener((e) => {
              (M.current || (p.current && null != h.current)) &&
                (e.stopPropagation(), e.preventDefault());
            }, U + 1),
            H.events.keyUp.addListener((t) => {
              if (
                ("Escape" === t.key &&
                  (e.onCancel(), t.preventDefault(), t.stopPropagation()),
                null == h.current)
              ) {
                if ("g" === t.key)
                  for (let e of C.children)
                    e instanceof y.Ys && e.setMode("translate");
                if ("r" === t.key)
                  for (let e of C.children)
                    e instanceof y.Ys && e.setMode("rotate");
                if ("e" === t.key)
                  for (let e of C.children)
                    e instanceof y.Ys && e.setMode("scale");
              }
            }, U),
          ];
          return () => {
            for (let e of (t.dispose(), i.dispose(), d)) e.remove();
          };
        }, []),
          (0, g.useEffect)(() => {
            let e = {
              azimuth_bounds_max: window.luma.camera.azimuth_bounds_max,
              azimuth_bounds_min: window.luma.camera.azimuth_bounds_min,
              radius_bounds_max: window.luma.camera.radius_bounds_max,
              radius_bounds_min: window.luma.camera.radius_bounds_min,
              elevation_bounds_max: window.luma.camera.elevation_bounds_max,
              elevation_bounds_min: window.luma.camera.elevation_bounds_min,
            };
            return (
              (window.luma.camera.azimuth_bounds_max = 1 / 0),
              (window.luma.camera.azimuth_bounds_min = -1 / 0),
              (window.luma.camera.radius_bounds_max = 1 / 0),
              (window.luma.camera.radius_bounds_min = -1 / 0),
              (window.luma.camera.elevation_bounds_max = 1 / 0),
              (window.luma.camera.elevation_bounds_min = -1 / 0),
              () => {
                (window.luma.camera.azimuth_bounds_max = e.azimuth_bounds_max),
                  (window.luma.camera.azimuth_bounds_min =
                    e.azimuth_bounds_min),
                  (window.luma.camera.radius_bounds_max = e.radius_bounds_max),
                  (window.luma.camera.radius_bounds_min = e.radius_bounds_min),
                  (window.luma.camera.elevation_bounds_max =
                    e.elevation_bounds_max),
                  (window.luma.camera.elevation_bounds_min =
                    e.elevation_bounds_min);
              }
            );
          }, []);
        let [Q, er] = (0, g.useState)([]),
          ei = (0, g.useContext)($.pn),
          eo = (0, g.useMemo)(() => {
            var e;
            return l.readLocalStorage(
              null !== (e = ei.slug) && void 0 !== e ? e : null
            );
          }, []);
        async function es(e) {
          if ("application/json" === e.type) {
            var t,
              n,
              r,
              a,
              o = new FileReader();
            (o.onload = function (e) {
              {
                var t;
                let n = l.deserializeState(JSON.parse(e.target.result));
                null === (t = I.current) ||
                  void 0 === t ||
                  t.setInitialState(n, d.AppendHistory),
                  i(2);
              }
            }),
              o.readAsText(e);
          } else {
            let o,
              s = await e.arrayBuffer(),
              l = new _().parse(s, ""),
              u = !1,
              c = !1,
              d =
                null === (a = l.fbxTree) || void 0 === a
                  ? void 0
                  : null === (r = a.FBXHeaderExtension) || void 0 === r
                  ? void 0
                  : null === (n = r.SceneInfo) || void 0 === n
                  ? void 0
                  : null === (t = n["Original|ApplicationName"]) || void 0 === t
                  ? void 0
                  : t.value;
            console.log("Importing FBX"),
              console.log("fbxTree", l.fbxTree),
              console.log("originalApplicationName", d),
              (null == d ? void 0 : d.toLowerCase().startsWith("unreal")) &&
                ((o = !0), (u = !0), (c = !0)),
              (null == d ? void 0 : d.toLowerCase().startsWith("blender")) &&
                ((c = !0), (o = !0)),
              W(l.sceneGraph, o),
              u && ((m.rotation.x = -Math.PI / 2), (m.rotation.z = Math.PI)),
              c && m.scale.setScalar(0.01),
              i(1);
          }
        }
        function el(e) {
          let t = C.children.find((e) => e instanceof y.Ys);
          null == t || t.setMode(e);
        }
        return (
          (0, g.useEffect)(() => {
            var e, t;
            try {
              null != eo
                ? (console.log(
                    "restoring state from local storage",
                    eo,
                    I.current
                  ),
                  null === (e = I.current) ||
                    void 0 === e ||
                    e.setInitialState(eo, d.ReplaceHistory))
                : console.log("no state to restore from local storage");
            } catch (e) {
              console.error("error restoring state from local storage", e),
                l.clearLocalStorage(
                  null !== (t = ei.slug) && void 0 !== t ? t : null
                );
            }
          }, []),
          (0, g.useEffect)(() => {
            function e() {
              var e;
              null === (e = P.current) || void 0 === e || e.collapse();
            }
            return (
              window.addEventListener("lumaCameraChange", e),
              () => window.removeEventListener("lumaCameraChange", e)
            );
          }, []),
          (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)("div", {
                className: Z().topLeft,
                children: (0, f.jsx)(nx.Z, {
                  className: Z().icon,
                  children: (0, f.jsx)(nw.Z, {
                    onClick: () => {
                      e.onCancel();
                    },
                  }),
                }),
              }),
              (0, f.jsx)("canvas", {
                ref: n,
                className: X().slfEditorCanvas,
                onContextMenu: (e) => e.preventDefault(),
                style: {
                  pointerEvents: "none",
                  userSelect: "none",
                  touchAction: "none",
                },
              }),
              1 === r
                ? (0, f.jsx)(t2, {
                    showUI: !k,
                    onImportFile: es,
                    root: m,
                    onSelectTransformMode: el,
                    animationScene: a.current,
                    settings: T,
                    onSettingsChange: z,
                    onPreview: () => K(a.current.animationCamera),
                    onQueueJob: () => {
                      var e;
                      return null === (e = P.current) || void 0 === e
                        ? void 0
                        : e.expand();
                    },
                    onJobQueued: () => {
                      var e;
                      return null === (e = P.current) || void 0 === e
                        ? void 0
                        : e.expand();
                    },
                    duration: N,
                    durationMax: F,
                    durationTrim: N,
                    onDurationChange: B,
                    durationDisableEdit: !0,
                  })
                : null,
              2 === r
                ? (0, f.jsx)(tY, {
                    ref: I,
                    interactionManager: H,
                    eventPriority: U + 1,
                    keyframes: Q,
                    onKeyframesChange: (e) => {
                      er(e);
                    },
                    settings: T,
                    onSettingsChange: z,
                    captureName: e.capturedName,
                    onImportFile: es,
                    animationPlayingRef: p,
                    scrubBarRef: D,
                    editorCamera: e.camera,
                    overrideCameraRef: h,
                    showUI: !k,
                    animationScene: a.current,
                    firstPersonCamera: c.current,
                    onQueueJob: () => {},
                    onJobQueued: () => {
                      var e;
                      return null === (e = P.current) || void 0 === e
                        ? void 0
                        : e.expand();
                    },
                    beforeRenderRef: L,
                  })
                : null,
              k
                ? (0, f.jsx)(ny, {
                    scrubBarRef: D,
                    playing: p.current,
                    onPlayChange: (e) => {
                      p.current = e;
                    },
                    onScrub: (e) => {
                      let t = 0;
                      for (let e of a.current.animations)
                        t = Math.max(t, e.duration);
                      let n = Math.min(t, N);
                      u.current.setTime(e * n);
                    },
                    onExit: () => {
                      K(null), (p.current = !0);
                    },
                  })
                : null,
              (0, f.jsx)(ng, {
                ref: P,
                display: !k,
                collapsed: !0,
                uuid: ei.uuid,
              }),
            ],
          })
        );
      });
      var nC = n(28841);
      class nM extends v.Color {
        clone() {
          return new nM(this.darkMode, this.lightMode);
        }
        constructor(e, t) {
          if (
            (super(e),
            (this.darkMode = e),
            (this.lightMode = t),
            window.matchMedia)
          ) {
            let e = window.matchMedia("(prefers-color-scheme: dark)");
            this.set(e.matches ? this.darkMode : this.lightMode),
              e.addEventListener("change", (e) => {
                this.set(e.matches ? this.darkMode : this.lightMode);
              });
          }
        }
      }
      var n_ = n(89358),
        nS = n.n(n_);
      let nj = e_.A.Exponential(0.05);
      !(function (e) {
        (e[(e.ModelDefault = 0)] = "ModelDefault"),
          (e[(e.Front = 1)] = "Front"),
          (e[(e.Top = 2)] = "Top"),
          (e[(e.Left = 3)] = "Left"),
          (e[(e.Free = 4)] = "Free");
      })(p || (p = {}));
      let nk = (0, g.forwardRef)((e, t) => {
        let n = (0, g.useRef)(null),
          [r, i] = (0, g.useState)(0),
          a = (0, g.useRef)(e.box.clone()),
          o = (0, g.useRef)(() => {}),
          s = (0, g.useRef)(() => {});
        (0, g.useImperativeHandle)(
          t,
          () => ({
            beforeFrame: () => o.current(),
            renderFrame: () => s.current(),
          }),
          [r]
        );
        let l = e.interactionManager,
          u = e.camera,
          c = 2;
        (0, g.useEffect)(() => {
          let t = new v.WebGLRenderer({
            canvas: n.current,
            alpha: !0,
            antialias: !0,
            powerPreference: "high-performance",
            precision: "lowp",
          });
          (t.toneMapping = v.NoToneMapping), (t.toneMappingExposure = 1);
          let r = new v.Scene(),
            i = new et.Z(l, r, u, c),
            o = new eM.L(),
            d = new v.Object3D();
          (0, J.Dv)().decompose(d.position, d.quaternion, d.scale);
          let h = new eS.Mu(d, {
            rotation: !0,
            translation: !0,
            viewIndependentSize: 0.3,
          });
          function p(e, t) {
            e.animator.onBeforeStep.addListener(() => {
              e.material.opacity = 1;
              let n = u.position.clone().negate().normalize();
              for (let r of t) {
                let t = Math.min(
                  Math.max(1 - Math.pow(Math.abs(n.dot(r)) + 0.05, 4), 0),
                  1
                );
                e.material.opacity *= t;
              }
              (e.material.transparent = e.material.opacity < 1),
                (e.material.depthWrite = e.material.opacity > 0.1),
                e.material.opacity > 0.1
                  ? e.layers.enable(nC.m.Interactive)
                  : e.layers.disable(nC.m.Interactive);
            });
          }
          (h.onChange = (e) => {
            e.updateMatrix(), (0, J.NQ)(e.matrix);
          }),
            (h.xAxis.userData.sortPriority = 1),
            (h.yAxis.userData.sortPriority = 1),
            (h.zAxis.userData.sortPriority = 1),
            (h.xyArc.userData.sortPriority = 1),
            (h.xzArc.userData.sortPriority = 1),
            (h.yzArc.userData.sortPriority = 1),
            p(h.xAxis, [new v.Vector3(1, 0, 0)]),
            p(h.yAxis, [new v.Vector3(0, 1, 0)]),
            p(h.zAxis, [new v.Vector3(0, 0, 1)]),
            p(h.yzArc, [new v.Vector3(0, 1, 1)]),
            p(h.xzArc, [new v.Vector3(1, 0, 1)]),
            p(h.xyArc, [new v.Vector3(1, 1, 0)]),
            r.add(h);
          let m = a.current;
          (m.min.x = isFinite(m.min.x) ? m.min.x : -1e6),
            (m.min.y = isFinite(m.min.y) ? m.min.y : -1e6),
            (m.min.z = isFinite(m.min.z) ? m.min.z : -1e6),
            (m.max.x = isFinite(m.max.x) ? m.max.x : 1e6),
            (m.max.y = isFinite(m.max.y) ? m.max.y : 1e6),
            (m.max.z = isFinite(m.max.z) ? m.max.z : 1e6);
          let f = new nP(a.current, o, i);
          r.add(f);
          let g = NaN;
          s.current = () => {
            let e = performance.now() / 1e3,
              i = isFinite(g) ? e - g : 1 / 60;
            g = e;
            let a = n.current,
              s = window.devicePixelRatio || 1,
              l = Math.round(a.clientWidth * s),
              c = Math.round(a.clientHeight * s);
            (a.width !== l || a.height !== c) && t.setSize(l, c, !1),
              o.step(i),
              f.update(e),
              t.render(r, u);
          };
          let y = (t) => {
            "Escape" === t.key && e.onCancel();
          };
          return (
            window.addEventListener("keydown", y),
            () => {
              t.dispose(),
                i.dispose(),
                window.removeEventListener("keydown", y);
            }
          );
        }, []),
          (0, g.useEffect)(() => {
            let e = (0, J.FO)().then((e) => {
              let t = e.options.enable_momentum;
              return (
                (e.options.enable_momentum = !1),
                { luma: e, previous_enable_momentum: t }
              );
            });
            return () => {
              e.then(
                (e) =>
                  (e.luma.options.enable_momentum = e.previous_enable_momentum)
              );
            };
          }, []),
          (0, g.useEffect)(
            () => () => {
              (u.userData.panEnabled = !0),
                (u.userData.zoomEnabled = !0),
                (u.userData.rotateEnabled = !0);
            },
            []
          );
        let d = (0, g.useRef)(null);
        function h(e, t) {
          let n, r, a;
          if (!window.luma) return;
          i(e);
          let o = window.luma.camera.center,
            s = Math.sqrt(o[0] * o[0] + o[1] * o[1] + o[2] * o[2]),
            l = 4,
            c = isFinite(s) ? Math.max(s, 0.1) : l;
          switch (e) {
            case 0:
              window.luma.camera.resetToModel(), (n = !0), (r = !0), (a = !0);
            case 4:
              (window.luma.camera.azimuth_bounds_max = 1 / 0),
                (window.luma.camera.azimuth_bounds_min = -1 / 0),
                (window.luma.camera.radius_bounds_max = 1 / 0),
                (window.luma.camera.radius_bounds_min = -1 / 0),
                (window.luma.camera.elevation_bounds_max = 1 / 0),
                (window.luma.camera.elevation_bounds_min = -1 / 0),
                (n = !0),
                (r = !0),
                (a = !0),
                d.current && (window.luma.camera.MV = d.current);
              break;
            case 2:
            case 3:
            case 1: {
              let i = 3 == e ? -c : 0,
                o = 2 == e ? -c : 0,
                s = 1 == e ? -c : 0;
              4 === t && (d.current = window.luma.camera.MV.slice(0)),
                (window.luma.camera.center = [i, o, s]),
                window.luma.camera.lookAt([0, 0, 2 == e ? 0.001 : 0]),
                (0, J.qf)(),
                (n = !0),
                (r = !0),
                (a = !1);
            }
          }
          (u.userData.panEnabled = n),
            (u.userData.zoomEnabled = r),
            (u.userData.rotateEnabled = a),
            window.dispatchEvent(new Event("lumaCameraChange"));
        }
        return (0, f.jsxs)(f.Fragment, {
          children: [
            (0, f.jsx)("canvas", {
              ref: n,
              className: nS().slfEditorCanvas,
              onContextMenu: (e) => e.preventDefault(),
              style: {
                pointerEvents: "none",
                userSelect: "none",
                touchAction: "none",
              },
            }),
            (0, f.jsx)(nE, {
              box: a.current,
              interactionManager: e.interactionManager,
              onSetCameraView: h,
              onCancel: e.onCancel,
              onSave: () => e.onSave(a.current, (0, J.Dv)()),
              onResetCrop: e.onResetCrop,
            }),
          ],
        });
      });
      function nE(e) {
        let [t, n] = (0, g.useState)(0);
        function r(r) {
          e.onSetCameraView(r, t), n(r);
        }
        return (
          (0, g.useEffect)(() => r(4), []),
          (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsxs)(tG, {
                children: [
                  (0, f.jsx)("div", {
                    className: 3 === t ? nS().active : "",
                    onClick: () => r(3),
                    children: "Left",
                  }),
                  (0, f.jsx)("div", {
                    className: 2 === t ? nS().active : "",
                    onClick: () => r(2),
                    children: "Top",
                  }),
                  (0, f.jsx)("div", {
                    className: 1 === t ? nS().active : "",
                    onClick: () => r(1),
                    children: "Front",
                  }),
                  (0, f.jsx)("div", {
                    className: 4 === t ? nS().active : "",
                    onClick: () => r(4),
                    children: "Free",
                  }),
                ],
              }),
              (0, f.jsxs)(tK, {
                children: [
                  (0, f.jsx)(tZ, {
                    className: "cancel",
                    onClick: e.onCancel,
                    children: (0, f.jsx)(ep.T, {}),
                  }),
                  (0, f.jsx)(tZ, {
                    className: "save",
                    onClick: e.onResetCrop,
                    children: (0, f.jsx)(eh.p, {}),
                  }),
                  (0, f.jsx)(tZ, {
                    className: "save",
                    onClick: e.onSave,
                    children: (0, f.jsx)(em.n, {}),
                  }),
                ],
              }),
            ],
          })
        );
      }
      class nP extends v.Object3D {
        update(e) {
          this.box.equals(this._boxLastUpdate) ||
            (this.onBoxChanged(), this._boxLastUpdate.copy(this.box));
        }
        onBoxChanged() {
          let e = this.box,
            t = this.box.getSize(this._boxSize),
            n = this.box.getCenter(this._boxCenter);
          (0, J._y)(e),
            this.cornerHandle_pxpypz.position.copy(e.max),
            this.cornerHandle_nxpypz.position.set(e.min.x, e.max.y, e.max.z),
            this.cornerHandle_pxnypz.position.set(e.max.x, e.min.y, e.max.z),
            this.cornerHandle_pxpynz.position.set(e.max.x, e.max.y, e.min.z),
            this.cornerHandle_nxnypz.position.set(e.min.x, e.min.y, e.max.z),
            this.cornerHandle_pxnynz.position.set(e.max.x, e.min.y, e.min.z),
            this.cornerHandle_nxpynz.position.set(e.min.x, e.max.y, e.min.z),
            this.cornerHandle_nxnynz.position.copy(e.min),
            this.lineSegmentsGeometry.setPositions([
              e.min.x,
              e.min.y,
              e.min.z,
              e.max.x,
              e.min.y,
              e.min.z,
              e.min.x,
              e.min.y,
              e.min.z,
              e.min.x,
              e.max.y,
              e.min.z,
              e.min.x,
              e.min.y,
              e.min.z,
              e.min.x,
              e.min.y,
              e.max.z,
              e.max.x,
              e.max.y,
              e.max.z,
              e.min.x,
              e.max.y,
              e.max.z,
              e.max.x,
              e.max.y,
              e.max.z,
              e.max.x,
              e.min.y,
              e.max.z,
              e.max.x,
              e.max.y,
              e.max.z,
              e.max.x,
              e.max.y,
              e.min.z,
              e.max.x,
              e.min.y,
              e.min.z,
              e.max.x,
              e.max.y,
              e.min.z,
              e.max.x,
              e.max.y,
              e.min.z,
              e.min.x,
              e.max.y,
              e.min.z,
              e.min.x,
              e.min.y,
              e.max.z,
              e.min.x,
              e.max.y,
              e.max.z,
              e.min.x,
              e.max.y,
              e.max.z,
              e.min.x,
              e.max.y,
              e.min.z,
              e.max.x,
              e.min.y,
              e.max.z,
              e.min.x,
              e.min.y,
              e.max.z,
              e.max.x,
              e.min.y,
              e.max.z,
              e.max.x,
              e.min.y,
              e.min.z,
            ]);
          let r = this.planeDelta;
          this.planeHandle_px.obj.position.set(e.max.x + r, n.y, n.z),
            this.planeHandle_nx.obj.position.set(e.min.x - r, n.y, n.z),
            this.planeHandle_py.obj.position.set(n.x, e.max.y + r, n.z),
            this.planeHandle_ny.obj.position.set(n.x, e.min.y - r, n.z),
            this.planeHandle_pz.obj.position.set(n.x, n.y, e.max.z + r),
            this.planeHandle_nz.obj.position.set(n.x, n.y, e.min.z - r);
          let i = this.planeScale;
          this.planeHandle_px.plane.scale.set(t.z * i, t.y * i, 1),
            this.planeHandle_nx.plane.scale.set(t.z * i, t.y * i, 1),
            this.planeHandle_py.plane.scale.set(t.x * i, t.z * i, 1),
            this.planeHandle_ny.plane.scale.set(t.x * i, t.z * i, 1),
            this.planeHandle_pz.plane.scale.set(t.x * i, t.y * i, 1),
            this.planeHandle_nz.plane.scale.set(t.x * i, t.y * i, 1),
            this.innerCube.scale.copy(t),
            this.innerCube.scale.multiplyScalar(0.995),
            this.innerCube.position.copy(n);
        }
        createPlaneHandle(e) {
          let t = { hoverOpacity: 0.5, activeOpacity: 0.7, restOpacity: 0.1 },
            n = 0 > e.dot(new v.Vector3(1, 1, 1)) ? -1 : 1,
            r = n > 0 ? this.box.max : this.box.min,
            i = n > 0 ? this.box.min : this.box.max,
            a = Math.abs(e.x) > 0 ? 0 : Math.abs(e.y) > 0 ? 1 : 2,
            o = () => r.getComponent(a),
            s = (e) => r.setComponent(a, e),
            l = () => i.getComponent(a),
            u = new v.Object3D(),
            c = new v.Mesh(
              this.planeGeometry,
              new v.MeshBasicMaterial({
                opacity: t.restOpacity,
                transparent: !0,
                depthWrite: !1,
                depthTest: !0,
              })
            );
          (c.material.color = this.color.clone()),
            c.layers.enable(nC.m.Interactive);
          let d = (e, t) => {
              let n = e.direction.clone().cross(t.direction),
                r = e.direction.clone().cross(n).normalize(),
                i = t.direction.clone().normalize();
              return e.origin.clone().sub(t.origin).dot(r) / i.dot(r);
            },
            h = NaN,
            p = o(),
            m = { opacity: c.material.opacity },
            f = () => {
              let t = this.box.getCenter(this._boxCenter);
              return (
                this.interaction.camera.getWorldPosition(
                  this._cameraWorldPosition
                ),
                Math.min(
                  Math.max(
                    1 -
                      Math.pow(
                        Math.abs(
                          t
                            .clone()
                            .sub(this._cameraWorldPosition)
                            .normalize()
                            .dot(e)
                        ) + 0.05,
                        4
                      ),
                    0
                  ),
                  1
                )
              );
            };
          c.onBeforeRender = () => {
            let e = f();
            c.material.opacity = e * m.opacity;
            let t = e > 0;
            (c.userData.cursor = t ? (1 == a ? "ns-resize" : "ew-resize") : ""),
              t
                ? c.layers.enable(nC.m.Interactive)
                : c.layers.disable(nC.m.Interactive);
          };
          let g = null;
          c.userData = {
            cursor: 1 == a ? "ns-resize" : "ew-resize",
            onPointerDown: (t) => {
              if (
                1 !== t.buttons ||
                (t.preventDefault(), t.stopPropagation(), null !== g)
              )
                return !1;
              g = t.pointerId;
              let n = this.interaction.prepareRaycastWithPointer(t),
                r = this.box.getCenter(this._boxCenter);
              return (
                (h = d(n.ray, new v.Ray(r, e))),
                (p = o()),
                this.animator.springTo(c.material, "opacity", 0.7, nj),
                !0
              );
            },
            onPointerMove: (r, i) => {
              if (1 === r.buttons && i && r.pointerId === g) {
                r.preventDefault(), r.stopPropagation();
                let i = this.interaction.prepareRaycastWithPointer(r),
                  u = this.box.getCenter(this._boxCenter),
                  c = i.ray,
                  g = new v.Ray(u, e),
                  y = d(c, g),
                  x = y - h;
                if (
                  isFinite(
                    (x *=
                      Math.min(
                        Math.max(
                          1 -
                            Math.pow(
                              Math.abs(c.direction.dot(g.direction)) + 0.001,
                              16
                            ),
                          0
                        ),
                        1
                      ) * f())
                  )
                ) {
                  let t = p + x * e.getComponent(a);
                  s((t = n > 0 ? Math.max(t, l()) : Math.min(t, l()))),
                    (h = y),
                    (p = o());
                }
                this.animator.springTo(m, "opacity", t.activeOpacity, nj);
              }
            },
            onPointerUp: (e, n) => {
              n &&
                e.pointerId === g &&
                (e.preventDefault(), e.stopPropagation(), (g = null)),
                e.pointerId === g && (g = null),
                this.animator.springTo(m, "opacity", t.restOpacity, nj);
            },
            onPointerOver: (e, n) => {
              0 === Object.keys(this.interaction.capturedPointers).length &&
                this.animator.springTo(m, "opacity", t.hoverOpacity, nj);
            },
            onPointerOut: (e, n) => {
              this.animator.springTo(m, "opacity", t.restOpacity, nj);
            },
            capturePointer: !0,
            occludePointerEvents: !1,
          };
          {
            let e = new v.MeshBasicMaterial({
                color: 1044480,
                transparent: !0,
                opacity: 0.7,
              }),
              t = new v.Mesh(new v.ConeGeometry(0.06, 0.1, 10, 1), e);
            (t.position.z = 0.05),
              (t.material.color = c.material.color),
              t.rotateX(Math.PI / 2),
              t.layers.enable(nC.m.Interactive),
              (t.userData = c.userData),
              (t.onBeforeRender = () => {
                let e = f();
                t.material.opacity = e * m.opacity * 7;
                let n = e > 0;
                (t.userData.cursor = n
                  ? 1 == a
                    ? "ns-resize"
                    : "ew-resize"
                  : ""),
                  n
                    ? t.layers.enable(nC.m.Interactive)
                    : t.layers.disable(nC.m.Interactive);
              }),
              u.add(t);
          }
          return u.add(c), u.lookAt(e), this.add(u), { obj: u, plane: c };
        }
        createCornerHandle(e) {
          let t = new v.Mesh(
            this.cornerHandleGeometry,
            new v.MeshBasicMaterial({
              opacity: 0.8,
              transparent: !0,
              depthWrite: !1,
              depthTest: !1,
            })
          );
          t.material.color = this.color.clone();
          let n = new v.Mesh(
            this.cornerGrabGeometry,
            new v.MeshNormalMaterial({ wireframe: !0, visible: !1 })
          );
          t.add(n), n.layers.enable(nC.m.Interactive);
          let r = [
            e.x > 0 ? new v.Vector3(1, 0, 0) : new v.Vector3(-1, 0, 0),
            e.y > 0 ? new v.Vector3(0, 1, 0) : new v.Vector3(0, -1, 0),
            e.z > 0 ? new v.Vector3(0, 0, 1) : new v.Vector3(0, 0, -1),
          ];
          function i(e, t, n) {
            let r = 0;
            for (let i of t)
              r = Math.max(r, Math.pow(Math.max(-e.dot(i), 0), n));
            return r;
          }
          return (
            (t.onBeforeRender = () => {
              let e = this.box.getCenter(this._boxCenter);
              this.interaction.camera.getWorldPosition(
                this._cameraWorldPosition
              );
              let a = Math.max(
                  i(
                    e.clone().sub(this._cameraWorldPosition).normalize(),
                    r,
                    30
                  ) - 0.05,
                  0
                ),
                o = a > 0;
              (t.material.opacity = a),
                o
                  ? n.layers.enable(nC.m.Interactive)
                  : n.layers.disable(nC.m.Interactive);
            }),
            (n.userData = {
              cursor: "move",
              onPointerDown: (e, t) =>
                1 === e.buttons &&
                (e.preventDefault(), e.stopPropagation(), !0),
              onPointerMove: (t, n) => {
                if (n) {
                  t.preventDefault(), t.stopPropagation();
                  let n = this.box.getCenter(this._boxCenter);
                  this.interaction.camera.getWorldPosition(
                    this._cameraWorldPosition
                  );
                  let r = n.clone().sub(this._cameraWorldPosition).normalize(),
                    i = Math.max(Math.abs(r.x), Math.abs(r.y), Math.abs(r.z)),
                    a = new v.Vector3(
                      Math.abs(r.x) == i ? 1 : 0,
                      Math.abs(r.y) == i ? 1 : 0,
                      Math.abs(r.z) == i ? 1 : 0
                    ),
                    o = Math.abs(a.x) > 0 ? 0 : Math.abs(a.y) > 0 ? 1 : 2,
                    s = (
                      e.getComponent(o) > 0 ? this.box.max : this.box.min
                    ).getComponent(o),
                    l = new v.Plane(a, -s),
                    u = this.interaction
                      .prepareRaycastWithPointer(t)
                      .ray.intersectPlane(l, new v.Vector3());
                  u &&
                    (e.getComponent(0) > 0
                      ? (this.box.max.x = Math.max(u.x, this.box.min.x))
                      : (this.box.min.x = Math.min(u.x, this.box.max.x)),
                    e.getComponent(1) > 0
                      ? (this.box.max.y = Math.max(u.y, this.box.min.y))
                      : (this.box.min.y = Math.min(u.y, this.box.max.y)),
                    e.getComponent(2) > 0
                      ? (this.box.max.z = Math.max(u.z, this.box.min.z))
                      : (this.box.min.z = Math.min(u.z, this.box.max.z)));
                }
              },
              onPointerUp: (e, t, n) => {
                t && (e.preventDefault(), e.stopPropagation());
              },
            }),
            this.add(t),
            t
          );
        }
        constructor(e, t, n) {
          super(),
            (this.box = e),
            (this.animator = t),
            (this.interaction = n),
            (this.planeDelta = 0.01),
            (this.planeScale = 0.9),
            (this.color = new nM(16777215, 0)),
            (this.unitBox = new v.BoxGeometry(1, 1, 1)),
            (this._boxSize = new v.Vector3()),
            (this._boxCenter = new v.Vector3()),
            (this._boxLastUpdate = new v.Box3(
              new v.Vector3(NaN, NaN, NaN),
              new v.Vector3(NaN, NaN, NaN)
            )),
            (this._cameraWorldPosition = new v.Vector3()),
            (this.planeGeometry = new v.PlaneGeometry(1, 1)),
            (this.cornerHandleGeometry = new v.SphereGeometry(0.03, 16, 8)),
            (this.cornerGrabGeometry = new v.SphereGeometry(0.09, 16, 8)),
            (this.innerCube = new v.Mesh(
              this.unitBox,
              new v.MeshNormalMaterial({
                side: v.BackSide,
                transparent: !1,
                opacity: 0,
                colorWrite: !1,
              })
            )),
            this.add(this.innerCube),
            (this.cornerHandle_pxpypz = this.createCornerHandle(
              new v.Vector3(1, 1, 1)
            )),
            (this.cornerHandle_nxpypz = this.createCornerHandle(
              new v.Vector3(-1, 1, 1)
            )),
            (this.cornerHandle_pxnypz = this.createCornerHandle(
              new v.Vector3(1, -1, 1)
            )),
            (this.cornerHandle_pxpynz = this.createCornerHandle(
              new v.Vector3(1, 1, -1)
            )),
            (this.cornerHandle_nxnypz = this.createCornerHandle(
              new v.Vector3(-1, -1, 1)
            )),
            (this.cornerHandle_pxnynz = this.createCornerHandle(
              new v.Vector3(1, -1, -1)
            )),
            (this.cornerHandle_nxpynz = this.createCornerHandle(
              new v.Vector3(-1, 1, -1)
            )),
            (this.cornerHandle_nxnynz = this.createCornerHandle(
              new v.Vector3(-1, -1, -1)
            )),
            (this.planeHandle_px = this.createPlaneHandle(
              new v.Vector3(1, 0, 0)
            )),
            (this.planeHandle_nx = this.createPlaneHandle(
              new v.Vector3(-1, 0, 0)
            )),
            (this.planeHandle_py = this.createPlaneHandle(
              new v.Vector3(0, 1, 0)
            )),
            (this.planeHandle_ny = this.createPlaneHandle(
              new v.Vector3(0, -1, 0)
            )),
            (this.planeHandle_pz = this.createPlaneHandle(
              new v.Vector3(0, 0, 1)
            )),
            (this.planeHandle_nz = this.createPlaneHandle(
              new v.Vector3(0, 0, -1)
            )),
            (this.lineMaterial = new b.Y({
              linewidth: 0.003,
              opacity: 0.35,
              worldUnits: !1,
              transparent: !0,
            })),
            (this.lineMaterial.color = this.color.clone()),
            (this.lineSegmentsGeometry = new e0.z());
          let r = new e$.w(this.lineSegmentsGeometry, this.lineMaterial);
          this.add(r);
        }
      }
      !(function (e) {
        (e[(e.View = 0)] = "View"),
          (e[(e.Crop = 1)] = "Crop"),
          (e[(e.CameraPaths = 2)] = "CameraPaths");
      })(m || (m = {}));
      let nD = (0, g.forwardRef)((e, t) => {
        let n = (0, g.useRef)(null);
        switch (
          ((0, g.useImperativeHandle)(t, () => ({
            beforeFrame: () => {
              var e;
              return null === (e = n.current) || void 0 === e
                ? void 0
                : e.beforeFrame();
            },
            renderFrame: () => {
              var e;
              return null === (e = n.current) || void 0 === e
                ? void 0
                : e.renderFrame();
            },
          })),
          e.editMode)
        ) {
          case 0:
            return (0, f.jsx)(f.Fragment, {});
          case 2:
            return (0, f.jsx)(nb, {
              capturedName: e.captureName,
              ref: n,
              interactionManager: e.interactionManager,
              camera: e.camera,
              onCancel: e.onCancel,
            });
          case 1:
            return (0, f.jsx)(nk, {
              ref: n,
              box: e.cropBox,
              onCancel: e.onCropCancel,
              onSave: e.onCropSave,
              onResetCrop: e.onResetCrop,
              camera: e.camera,
              interactionManager: e.interactionManager,
            });
        }
      });
      var nL = nD;
    },
    18306: function (e, t, n) {
      "use strict";
      n.d(t, {
        Or: function () {
          return l;
        },
        yX: function () {
          return r;
        },
      });
      var r,
        i = n(91344),
        a = n(9452),
        o = n(12586);
      let s = 1;
      !(function (e) {
        (e[(e.Normal = 0)] = "Normal"), (e[(e.Loop = 1)] = "Loop");
      })(r || (r = {}));
      class l {
        updateOrbitFromCartesian() {
          (0, o.Zy)(
            { position: this.position, quaternion: this.quaternion },
            i.Object3D.DEFAULT_UP,
            this
          );
        }
        updateCartesianFromOrbit() {
          (0, o.Q6)(this, i.Object3D.DEFAULT_UP, {
            position: this.position,
            quaternion: this.quaternion,
          });
        }
        clone() {
          let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
          return new l(
            {
              t_s: 0,
              focalLength: 0,
              position: new i.Vector3(),
              quaternion: new i.Quaternion(),
              target: new i.Vector3(),
              smoothness: 1,
            },
            this.keyframeType
          ).copy(this, e);
        }
        copy(e) {
          let t =
            !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
          return (
            t && (this.id = e.id),
            (this.t_s = e.t_s),
            (this.focalLength = e.focalLength),
            this.position.copy(e.position),
            this.quaternion.copy(e.quaternion),
            this.target.copy(e.target),
            this.lookAtRelativeQuaternion.copy(e.lookAtRelativeQuaternion),
            (this.azimuth = e.azimuth),
            (this.elevation = e.elevation),
            (this.radius = e.radius),
            (this.smoothness = e.smoothness),
            this
          );
        }
        constructor(e, t) {
          (this.isKeyframe = !0),
            (this.azimuth = 0),
            (this.elevation = 0),
            (this.radius = 0),
            (this.lookAtRelativeQuaternion = new i.Quaternion()),
            (this.smoothness = 1),
            (this.keyframeType = t),
            (this.id = s++),
            (this.t_s = e.t_s),
            (this.position = e.position),
            (this.quaternion = e.quaternion),
            (this.target = e.target),
            (this.focalLength = e.focalLength),
            (this.smoothness = e.smoothness),
            (0, o.Zy)(
              { position: this.position, quaternion: this.quaternion },
              i.Object3D.DEFAULT_UP,
              this
            );
        }
      }
      !(function (e) {
        function t(t, n) {
          var r, a;
          let l = n && t.length > 1,
            u = 0.01,
            c = 0;
          for (let e = 0; e < t.length; e++) {
            let n = t[e];
            1 !== n.keyframeType && (c = Math.max(c, n.t_s));
          }
          let d = null;
          for (let e = t.length - 1; e >= 0; e--) {
            let n = t[e];
            1 === n.keyframeType &&
              (l ? (null != d ? t.splice(e, 1) : (d = n)) : t.splice(e, 1));
          }
          if (
            (null != d && d.t_s < c && (d.t_s = c + 0.2),
            t.sort((e, t) => e.t_s - t.t_s),
            l)
          ) {
            if (null == d) {
              let n = e.averageDt(t);
              (d = new e(
                {
                  t_s: c + (n || 2),
                  focalLength: 1,
                  position: new i.Vector3(),
                  quaternion: new i.Quaternion(),
                  target: new i.Vector3(),
                  smoothness: 1,
                },
                1
              )),
                t.push(d);
            }
            let n = t[0],
              r = t[t.length - 2];
            (d.focalLength = n.focalLength),
              d.position.copy(n.position),
              d.quaternion.copy(n.quaternion),
              d.target.copy(n.target),
              d.lookAtRelativeQuaternion.copy(n.lookAtRelativeQuaternion),
              (d.azimuth = (0, o.SI)(n.azimuth, r.azimuth)),
              (d.elevation = (0, o.SI)(n.elevation, r.elevation)),
              (d.radius = n.radius),
              (d.smoothness = n.smoothness);
          }
          let h = 0;
          for (let e of t) h = Math.max(h, e.id);
          let p = new Set();
          for (let e of t) p.has(e.id) && (e.id = ++h), p.add(e.id);
          s = h + 1;
          let m =
            null !==
              (a = null === (r = t[0]) || void 0 === r ? void 0 : r.t_s) &&
            void 0 !== a
              ? a
              : 0;
          for (let e of t) e.t_s -= m;
          for (;;) {
            let e = !1;
            for (let n = 0; n < t.length - 1; n++) {
              let r = t[n],
                i = t[n + 1];
              Math.abs(i.t_s - r.t_s) < u && ((i.t_s = i.t_s + u), (e = !0));
            }
            if (!e) break;
          }
          return t;
        }
        function n(t, n, r, i, a) {
          return new e(
            {
              t_s: t,
              position: n.clone(),
              quaternion: r.clone(),
              target: i.clone(),
              focalLength: a,
              smoothness: 1,
            },
            0
          );
        }
        function r(e, t) {
          let n = (0, a.i6)(window.luma.camera.origin, d);
          return l((0, a.mG)(c), e, n, t);
        }
        function l(t, n, r, a) {
          let o = new i.Vector3(),
            s = new i.Quaternion();
          t.decompose(o, s, h);
          let l = c.lookAt(o, r, m),
            u = p.setFromRotationMatrix(l);
          return (
            s.clone().premultiply(u.invert()),
            new e(
              {
                t_s: n,
                position: o,
                quaternion: s,
                target: r,
                focalLength: a,
                smoothness: 1,
              },
              0
            )
          );
        }
        function u(e) {
          let t = 0;
          for (let n = 1; n < e.length; n++) t += e[n].t_s - e[n - 1].t_s;
          return t / (e.length - 1);
        }
        (e.processKeyframes = t),
          (e.createKeyframe = n),
          (e.getKeyframeFromLumaCamera = r),
          (e.getKeyframeFromTransform = l),
          (e.averageDt = u);
        let c = new i.Matrix4();
        new i.Vector3();
        let d = new i.Vector3(),
          h = new i.Vector3();
        new i.Quaternion();
        let p = new i.Quaternion();
        new i.Quaternion();
        let m = new i.Vector3(0, 1, 0);
      })(l || (l = {}));
    },
    12586: function (e, t, n) {
      "use strict";
      n.d(t, {
        Es: function () {
          return E;
        },
        Ft: function () {
          return o;
        },
        HY: function () {
          return s;
        },
        Q6: function () {
          return g;
        },
        SI: function () {
          return S;
        },
        Zy: function () {
          return x;
        },
        aL: function () {
          return v;
        },
        al: function () {
          return w;
        },
        iQ: function () {
          return M;
        },
        n2: function () {
          return C;
        },
        nU: function () {
          return l;
        },
        pg: function () {
          return y;
        },
        t7: function () {
          return j;
        },
        tE: function () {
          return P;
        },
        tr: function () {
          return k;
        },
        xG: function () {
          return b;
        },
      });
      var r = n(91344),
        i = n(9452),
        a = n(93766);
      function o(e, t, n, a, o) {
        let s = C(e, t),
          l = (0, i.Dv)().clone().invert();
        s.aspect = n;
        let u = new r.AnimationMixer(e),
          c = 0,
          d = 1 / o;
        for (let t of e.animations) {
          let e = u.clipAction(t);
          (e._updateTime = (t) => (e.time += t)),
            e.play(),
            (c = Math.max(c, t.duration));
        }
        c = Math.min(c, a);
        let p = [],
          m = [],
          f = [];
        for (let e = 0; e < c; e += d) {
          u.setTime(Math.min(e, c)), s.updateMatrixWorld(!0);
          let t = s.matrixWorld.clone().premultiply(l);
          p.push(t), m.push(s.getFocalLength()), f.push(s.fov);
        }
        let g = p.map((e) => {
          let t = (0, i.Mv)(h(e));
          return [
            [t[0], -t[4], t[8], t[12]],
            [t[1], -t[5], t[9], t[13]],
            [t[2], -t[6], t[10], t[14]],
          ];
        });
        return M(e, t, s), { c2w: g, focalLength: m, fovVertical: f };
      }
      function s() {
        let e = (0, i.Dv)().clone().invert(),
          t = (0, i.i6)(window.luma.options.crop_min),
          n = (0, i.i6)(window.luma.options.crop_max),
          a = new r.Vector3(),
          o = new r.Quaternion(),
          s = new r.Vector3();
        e.decompose(a, o, s);
        let l = a.clone().applyQuaternion(o.clone().invert()),
          u = t.clone().multiply(s).add(l),
          c = n.clone().multiply(s).add(l),
          d = (0, i.gr)(u),
          h = (0, i.gr)(c),
          p = [d[0], d[1], d[2], h[0], h[1], h[2]],
          m = new r.Matrix4().makeRotationFromQuaternion(o),
          f = (0, i.Mv)(m),
          g = [f[0], -f[4], f[8], f[1], -f[5], f[9], f[2], -f[6], f[10]],
          v = p.every((e) => isFinite(e) && null != e);
        return { aabb: v ? p : null, aabb_rotation: v ? g : null };
      }
      function l(e, t) {
        let n = e.elements;
        return (
          t.set(
            n[8],
            n[4],
            -n[0],
            n[12],
            n[9],
            n[5],
            -n[1],
            n[13],
            n[10],
            n[6],
            -n[2],
            n[14],
            n[11],
            n[7],
            -n[3],
            n[15]
          ),
          t
        );
      }
      let u = new r.Vector3(),
        c = new r.Vector3(),
        d = new r.Vector3();
      function h(e) {
        return (
          e.extractBasis(u, c, d),
          u.normalize(),
          c.normalize(),
          d.normalize(),
          (e.elements[0] = u.x),
          (e.elements[1] = u.y),
          (e.elements[2] = u.z),
          (e.elements[4] = c.x),
          (e.elements[5] = c.y),
          (e.elements[6] = c.z),
          (e.elements[8] = d.x),
          (e.elements[9] = d.y),
          (e.elements[10] = d.z),
          e
        );
      }
      let p = new r.Matrix4(),
        m = new r.Quaternion(),
        f = new r.Vector3();
      function g(e, t, n) {
        let r = p;
        return (
          r.identity(),
          n.position.set(
            e.radius * Math.cos(e.azimuth) * Math.cos(e.elevation) + e.target.x,
            e.radius * Math.sin(e.elevation) + e.target.y,
            e.radius * Math.sin(e.azimuth) * Math.cos(e.elevation) + e.target.z
          ),
          r.setPosition(n.position),
          r.lookAt(n.position, e.target, t),
          n.quaternion.setFromRotationMatrix(r),
          n.quaternion.multiply(e.lookAtRelativeQuaternion),
          n
        );
      }
      function v(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { azimuth: 0, elevation: 0, radius: 0 },
          n = e;
        return (
          (t.radius = Math.sqrt(n.x * n.x + n.y * n.y + n.z * n.z)),
          (t.azimuth = Math.atan2(n.z, n.x)),
          (t.elevation = Math.atan2(n.y, Math.sqrt(n.x * n.x + n.z * n.z))),
          t
        );
      }
      function y(e, t) {
        return (
          t || (t = { x: 0, y: 0, z: 0 }),
          (t.x = e.radius * Math.cos(e.azimuth) * Math.cos(e.elevation)),
          (t.y = e.radius * Math.sin(e.elevation)),
          (t.z = e.radius * Math.sin(e.azimuth) * Math.cos(e.elevation)),
          t
        );
      }
      function x(e, t, n) {
        let r = f.copy(e.position).sub(n.target);
        (n.azimuth = Math.atan2(r.z, r.x)),
          (n.elevation = Math.atan2(r.y, Math.sqrt(r.x * r.x + r.z * r.z))),
          (n.radius = r.length());
        let i = p.lookAt(e.position, n.target, t),
          a = m.setFromRotationMatrix(i);
        return (
          n.lookAtRelativeQuaternion.copy(e.quaternion).premultiply(a.invert()),
          n
        );
      }
      function w(e) {
        return (null == e ? void 0 : e.isKeyframe) === !0;
      }
      function b(e) {
        return e instanceof a.N;
      }
      function C(e, t) {
        var n;
        let r = null !== (n = t.parent) && void 0 !== n ? n : e;
        t.removeFromParent();
        let i = t.clone();
        return (i.name = t.name), r.add(i), i;
      }
      function M(e, t, n) {
        var r;
        let i = null !== (r = n.parent) && void 0 !== r ? r : e;
        n.removeFromParent(), i.add(t);
      }
      function _(e) {
        return e - Math.floor(e);
      }
      function S(e, t) {
        let n;
        let r = 2 * Math.PI,
          i = e / r + 0.5 - _(t / r + 0.5);
        if (0.5 > Math.abs(i)) n = t + i * r;
        else {
          let e = 1 - Math.abs(i);
          n = t + -Math.sign(i) * e * r;
        }
        return n;
      }
      function j(e, t, n) {
        return e + (t - e) * n;
      }
      function k(e) {
        return D(e, new r.Vector3(0, 1, 0), new r.Vector3(0, 0, -1));
      }
      function E(e) {
        return D(e, new r.Vector3(0, 0, -1), new r.Vector3(1, 0, 0));
      }
      function P(e) {
        return D(e, new r.Vector3(1, 0, 0), new r.Vector3(0, 1, 0));
      }
      function D(e, t, n) {
        let r = t.clone().applyQuaternion(e),
          i = n.clone().applyQuaternion(e),
          a = r.projectOnPlane(i),
          o = t.clone().projectOnPlane(i);
        return o.angleTo(a) * Math.sign(o.cross(a).dot(i));
      }
    },
    62512: function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        R: function () {
          return InputNumber;
        },
      });
      var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(20209),
        _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(71386),
        react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83112),
        _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(34297),
        _Input_module_scss__WEBPACK_IMPORTED_MODULE_2___default =
          __webpack_require__.n(
            _Input_module_scss__WEBPACK_IMPORTED_MODULE_2__
          );
      function InputNumber(props) {
        var _props_type, _props_showLabel, _props_showDot, _props_label;
        let toDisplay, fromDisplay;
        let onChangeRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(
            props.onChange
          ),
          onChangeEndRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(
            props.onChangeEnd
          );
        function setValueFromString(str, userInput) {
          let displayValue;
          try {
            let evaluated = eval(str);
            displayValue =
              "number" == typeof evaluated
                ? "int" === type
                  ? Math.round(evaluated)
                  : evaluated
                : ("int" === type ? parseInt(str) : parseFloat(str)) || 0;
          } catch (e) {
            displayValue =
              ("int" === type ? parseInt(str) : parseFloat(str)) || 0;
          }
          void 0 !== props.min &&
            (displayValue = Math.max(displayValue, props.min)),
            void 0 !== props.max &&
              (displayValue = Math.min(displayValue, props.max));
          let v = fromDisplay(displayValue),
            changed = props.obj[props.field] !== v;
          if (userInput && changed) {
            var _onChangeRef_current;
            (props.obj[props.field] = v),
              null === (_onChangeRef_current = onChangeRef.current) ||
                void 0 === _onChangeRef_current ||
                _onChangeRef_current.call(
                  onChangeRef,
                  v,
                  props.obj,
                  props.field
                );
          }
        }
        function getDisplayValue() {
          let e = props.obj[props.field];
          return null != props.conversion ? toDisplay(e) : e;
        }
        function getObjectValueString() {
          let e = getDisplayValue();
          return "int" === type ? Math.round(e).toString() : e.toFixed(3);
        }
        (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
          (onChangeRef.current = props.onChange),
            (onChangeEndRef.current = props.onChangeEnd);
        }, [props.onChange, props.onChangeEnd]),
          "radiansToDegrees" === props.conversion
            ? ((toDisplay = (e) => (180 * e) / Math.PI),
              (fromDisplay = (e) => (e * Math.PI) / 180))
            : props.conversion
            ? ((toDisplay = props.conversion.toDisplay),
              (fromDisplay = props.conversion.fromDisplay))
            : ((toDisplay = (e) => e), (fromDisplay = (e) => e));
        let id = props.field + "-InputNumber",
          type =
            null !== (_props_type = props.type) && void 0 !== _props_type
              ? _props_type
              : "float",
          showLabel =
            null === (_props_showLabel = props.showLabel) ||
            void 0 === _props_showLabel ||
            _props_showLabel,
          showDot =
            null !== (_props_showDot = props.showDot) &&
            void 0 !== _props_showDot &&
            _props_showDot,
          [objectValueAsStr, setObjectValueAsString] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(getObjectValueString()),
          [editing, setEditing] = (0,
          react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),
          labelRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),
          inputRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
        (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
          let e = setInterval(() => {
            if (editing) return;
            let e = getObjectValueString();
            e !== objectValueAsStr && setObjectValueAsString(e + "");
          }, 1e3 / 60);
          return () => clearInterval(e);
        }, [objectValueAsStr, props.obj, props.field, editing]),
          (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
            let e, t;
            if (props.disabled) return;
            let n = labelRef.current,
              r = (n) => {
                (e = getDisplayValue()),
                  (t = n.clientX),
                  document.addEventListener("mousemove", i),
                  document.addEventListener("mouseup", a);
              },
              i = (n) => {
                var r;
                if (0 === n.buttons) {
                  a(n);
                  return;
                }
                let i = n.clientX - t,
                  o =
                    null !== (r = props.changeDelta) && void 0 !== r
                      ? r
                      : Math.abs(e) + 1,
                  s = e + i * ("int" === type ? 1 : 0.0075 * o);
                void 0 !== props.min && (s = Math.max(s, props.min)),
                  void 0 !== props.max && (s = Math.min(s, props.max)),
                  setObjectValueAsString(s + ""),
                  setValueFromString(s + "", !0);
              },
              a = (e) => {
                var t;
                document.removeEventListener("mousemove", i),
                  document.removeEventListener("mouseup", a),
                  null === (t = onChangeEndRef.current) ||
                    void 0 === t ||
                    t.call(
                      onChangeEndRef,
                      props.obj[props.field],
                      props.obj,
                      props.field
                    );
              };
            return (
              n.addEventListener("mousedown", r),
              () => {
                n.removeEventListener("mousedown", r),
                  document.removeEventListener("mousemove", i),
                  document.removeEventListener("mouseup", a);
              }
            );
          }, [
            props.obj,
            props.field,
            type,
            props.min,
            props.max,
            props.disabled,
            props.changeDelta,
          ]),
          (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
            var e;
            let t = (e) => {
              if ("Enter" === e.key) {
                var t;
                null === (t = inputRef.current) || void 0 === t || t.blur();
              }
              e.stopPropagation();
            };
            return (
              null === (e = inputRef.current) ||
                void 0 === e ||
                e.addEventListener("keydown", t),
              () => {
                var e;
                return null === (e = inputRef.current) || void 0 === e
                  ? void 0
                  : e.removeEventListener("keydown", t);
              }
            );
          }, [props.obj, props.field]);
        let valueFloat = parseFloat(objectValueAsStr),
          valueDisplay =
            "int" === type ? valueFloat.toFixed(0) : valueFloat.toFixed(2);
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className:
            _Input_module_scss__WEBPACK_IMPORTED_MODULE_2___default()
              .inputNumber +
            " " +
            (props.disabled
              ? _Input_module_scss__WEBPACK_IMPORTED_MODULE_2___default()
                  .disabled
              : "") +
            " InputNumber",
          style: props.style,
          onMouseEnter: () => {
            var e;
            return null === (e = props.onHoverStart) || void 0 === e
              ? void 0
              : e.call(props, props.obj, props.field);
          },
          onMouseLeave: () => {
            var e;
            return null === (e = props.onHoverEnd) || void 0 === e
              ? void 0
              : e.call(props, props.obj, props.field);
          },
          children: [
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
              ref: labelRef,
              className:
                _Input_module_scss__WEBPACK_IMPORTED_MODULE_2___default()
                  .inlineLabel + " ",
              htmlFor: id,
              title: props.title,
              style: { cursor: "ew-resize" },
              children: [
                (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                  "span",
                  {
                    style: { display: showLabel ? "" : "none" },
                    children: (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
                      children:
                        null !== (_props_label = props.label) &&
                        void 0 !== _props_label
                          ? _props_label
                          : props.field,
                    }),
                  }
                ),
                showDot &&
                  !props.disabled &&
                  (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
                    _radix_ui_react_icons__WEBPACK_IMPORTED_MODULE_3__.jXb,
                    { style: { verticalAlign: "middle" } }
                  ),
              ],
            }),
            (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
              ref: inputRef,
              contentEditable: !props.disabled,
              suppressContentEditableWarning: !0,
              spellCheck: !1,
              id: id,
              className:
                _Input_module_scss__WEBPACK_IMPORTED_MODULE_2___default()
                  .numberInput,
              onInput: (e) => {
                setValueFromString(e.currentTarget.innerText, !0);
              },
              onFocus: () => {
                var e;
                setEditing(!0),
                  null === (e = props.onFocus) ||
                    void 0 === e ||
                    e.call(props, props.obj, props.field);
              },
              onBlur: () => {
                var e, t;
                setEditing(!1),
                  setObjectValueAsString(getObjectValueString()),
                  null === (e = onChangeEndRef.current) ||
                    void 0 === e ||
                    e.call(
                      onChangeEndRef,
                      props.obj[props.field],
                      props.obj,
                      props.field
                    ),
                  null === (t = props.onBlur) ||
                    void 0 === t ||
                    t.call(props, props.obj, props.field);
              },
              title: props.title,
              children: editing ? objectValueAsStr : valueDisplay,
            }),
            props.units &&
              (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                className:
                  _Input_module_scss__WEBPACK_IMPORTED_MODULE_2___default()
                    .units,
                children: props.units,
              }),
          ],
        });
      }
    },
    52520: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return r;
        },
      });
      class r {
        addListener(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = {
              priority: t,
              listener: e,
              remove: () => this.removeListener(e),
            };
          return null !== e && this.listeners.push(n), n;
        }
        removeListener(e) {
          let t = 0;
          for (
            ;
            t < this.listeners.length && this.listeners[t].listener !== e;
            t++
          );
          this.listeners.splice(t, 1);
        }
        once(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = (t) => {
              e(t), this.removeListener(n);
            };
          return this.addListener(n, t);
        }
        dispatch(e, t) {
          if (0 !== this.listeners.length)
            return this.dispatchWithExistingEvent(e, t);
        }
        dispatchWithExistingEvent(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 1 / 0;
          if (0 === this.listeners.length) return;
          let n = this.patchPayload(e);
          this.sortPriorityDescending();
          for (let e = 0; e < this.listeners.length; e++)
            if (
              !(this.listeners[e].priority > t) &&
              (this.listeners[e].listener(n),
              "object" == typeof n && n.propagationStopped)
            )
              return;
        }
        hasListeners() {
          return this.listeners.length > 0;
        }
        sortPriorityDescending() {
          this.listeners.sort((e, t) => t.priority - e.priority);
        }
        patchPayload(e) {
          return (
            e instanceof Event &&
              void 0 === e.propagationStopped &&
              ((e.propagationStopped = !1),
              (e._stopPropagation = e.stopPropagation),
              (e.stopPropagation = i)),
            e
          );
        }
        constructor() {
          this.listeners = [];
        }
      }
      function i() {
        (this.propagationStopped = !0), this._stopPropagation();
      }
    },
    28841: function (e, t, n) {
      "use strict";
      var r;
      n.d(t, {
        m: function () {
          return r;
        },
      }),
        (function (e) {
          (e[(e.Base = 0)] = "Base"),
            (e[(e.Interactive = 1)] = "Interactive"),
            (e[(e.UserInterface = 2)] = "UserInterface"),
            (e[(e.Developer = 3)] = "Developer");
        })(r || (r = {}));
    },
    21133: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return a;
        },
      });
      var r = n(52520),
        i = n(17912);
      class a {
        springTo(e, t, n) {
          let r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : i.A.Exponential(0.5);
          if (null != r) {
            if (e[t] === n) return;
            let i = this.getSpringOrCreate(e, t);
            (i.target = n), (i.params = r);
          } else this.setTo(e, t, n);
        }
        setTo(e, t, n) {
          this.remove(e, t), (e[t] = n);
        }
        step(e) {
          this.onBeforeStep.hasListeners() &&
            this.onBeforeStep.dispatch({ dt_s: e });
          let t = this._springState;
          this.springs.forEach((n, r) => {
            n.forEach((a, o) => {
              (t.x = r[o]),
                (t.targetX = a.target),
                (t.v = a.velocity),
                null != a.params
                  ? i.A.stepSpring(e, t, a.params)
                  : ((t.x = t.targetX), (t.v = 0)),
                (r[o] = t.x),
                (a.velocity = t.v),
                1e-4 > Math.abs(t.x - t.targetX) &&
                  1e-4 > Math.abs(t.v) &&
                  ((r[o] = a.target), n.delete(o));
            }),
              0 == n.size && this.springs.delete(r);
          }),
            this.onAfterStep.hasListeners() &&
              this.onAfterStep.dispatch({ dt_s: e });
        }
        tick() {
          let e = performance.now() / 1e3,
            t = this.t_last >= 0 ? e - this.t_last : 1 / 60;
          return (this.t_last = e), this.step(t), t;
        }
        remove(e, t) {
          let n = this.springs.get(e);
          null != n && n.delete(t),
            null != n && 0 == n.size && this.springs.delete(e);
        }
        removeObject(e) {
          this.springs.delete(e);
        }
        removeAll() {
          this.springs.clear();
        }
        getVelocity(e, t) {
          var n;
          let r = this.getObjectSprings(e).get(t);
          return null !== (n = null == r ? void 0 : r.velocity) && void 0 !== n
            ? n
            : 0;
        }
        getObjectSprings(e) {
          let t = this.springs.get(e);
          return null == t && ((t = new Map()), this.springs.set(e, t)), t;
        }
        getSpringOrCreate(e, t) {
          let n = this.getObjectSprings(e),
            r = n.get(t);
          return (
            null == r &&
              ((r = { target: 0, params: null, velocity: 0 }), n.set(t, r)),
            r
          );
        }
        constructor(e, t) {
          (this.onBeforeStep = new r.v()),
            (this.onAfterStep = new r.v()),
            (this.springs = new Map()),
            (this._springState = { x: 0, targetX: 0, v: 0 }),
            (this.t_last = -1),
            e && this.onBeforeStep.addListener((t) => e(t.dt_s)),
            t && this.onAfterStep.addListener((e) => t(e.dt_s));
        }
      }
    },
    17912: function (e, t, n) {
      "use strict";
      var r;
      n.d(t, {
        A: function () {
          return r;
        },
      }),
        (function (e) {
          function t(e) {
            let t = 3.356694 / e,
              n = (t * t) / 4;
            return { damping: t, strength: n };
          }
          function n(e, t) {
            let n = (2 * Math.log(2)) / e,
              r = n * n + t;
            return { damping: n, strength: r };
          }
          function r(e, t, n) {
            let r = n.strength,
              i = n.damping,
              a = e,
              o = t.v,
              s = t.x - t.targetX;
            if ((0 === s && 0 === o) || 0 === e) return;
            let l = 4 * r - i * i;
            if (l > 0) {
              let e = 0.5 * Math.sqrt(l),
                n = s,
                r = (i * s * 0.5 + o) / e,
                u = Math.exp(-(0.5 * i) * a),
                c = Math.cos(e * a),
                d = Math.sin(e * a),
                h = u * (n * c + r * d),
                p =
                  u * ((r * e - 0.5 * n * i) * c + (-n * e - 0.5 * i * r) * d);
              (t.v = p), (t.x = h + t.targetX);
            } else if (l < 0) {
              let e = 0.5 * Math.sqrt(-l),
                n = -0.5 * i + e,
                r = -0.5 * i - e,
                u = -(r * s - o) / (2 * e),
                c = s - u,
                d = Math.exp(n * a),
                h = Math.exp(r * a),
                p = c * h + u * d,
                m = c * r * h + u * n * d;
              (t.v = m), (t.x = p + t.targetX);
            } else {
              let e = Math.sqrt(r),
                n = s,
                i = o + e * s,
                l = Math.exp(-e * a),
                u = (n + i * a) * l,
                c = (i - e * (n + i * a)) * l;
              (t.v = c), (t.x = u + t.targetX);
            }
            return 0.5 * r * t.x * t.x;
          }
          (e.Exponential = t), (e.Underdamped = n), (e.stepSpring = r);
        })(r || (r = {}));
    },
    47717: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return s;
        },
        h: function () {
          return r;
        },
      });
      var r,
        i = n(91344),
        a = n(21133),
        o = n(17912);
      !(function (e) {
        (e[(e.DirectionRollCartesian = 0)] = "DirectionRollCartesian"),
          (e[(e.YawPitchRoll = 1)] = "YawPitchRoll");
      })(r || (r = {}));
      class s {
        springTo(e, t, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : o.A.Exponential(0.5),
            a = arguments.length > 4 ? arguments[4] : void 0;
          if (n instanceof i.Vector4) {
            let i = e[t];
            this.animator.springTo(i, "x", n.x, r),
              this.animator.springTo(i, "y", n.y, r),
              this.animator.springTo(i, "z", n.z, r),
              this.animator.springTo(i, "w", n.w, r);
          } else if (n instanceof i.Vector3) {
            let i = e[t];
            this.animator.springTo(i, "x", n.x, r),
              this.animator.springTo(i, "y", n.y, r),
              this.animator.springTo(i, "z", n.z, r);
          } else if (n instanceof i.Vector2) {
            let i = e[t];
            this.animator.springTo(i, "x", n.x, r),
              this.animator.springTo(i, "y", n.y, r);
          } else if (n instanceof i.Quaternion) {
            let i = e[t],
              o = this.getQuaternionSpring(i);
            o.target.copy(n).normalize(),
              (o.params = r),
              (o.mode = null != a ? a : 0);
          } else if (n instanceof i.Euler) {
            let i = e[t];
            this.animator.springTo(i, "x", n.x, r),
              this.animator.springTo(i, "y", n.y, r),
              this.animator.springTo(i, "z", n.z, r),
              (i.order = n.order);
          } else this.animator.springTo(e, t, n, r);
        }
        step(e) {
          this.animator.step(e);
        }
        tick() {
          this.animator.tick();
        }
        removeAll() {
          this.animator.removeAll(), this.quaternionSprings.clear();
        }
        getVelocity(e, t, n) {
          let r = e[t];
          if (r instanceof i.Vector4) {
            let e = null != n ? n : new i.Vector4();
            return (
              (e.x = this.animator.getVelocity(r, "x")),
              (e.y = this.animator.getVelocity(r, "y")),
              (e.z = this.animator.getVelocity(r, "z")),
              (e.w = this.animator.getVelocity(r, "w")),
              e
            );
          }
          if (r instanceof i.Vector3) {
            let e = null != n ? n : new i.Vector3();
            return (
              (e.x = this.animator.getVelocity(r, "x")),
              (e.y = this.animator.getVelocity(r, "y")),
              (e.z = this.animator.getVelocity(r, "z")),
              e
            );
          }
          if (r instanceof i.Vector2) {
            let e = null != n ? n : new i.Vector2();
            return (
              (e.x = this.animator.getVelocity(r, "x")),
              (e.y = this.animator.getVelocity(r, "y")),
              e
            );
          }
          if (r instanceof i.Quaternion) {
            var a, o;
            let e = this.quaternionSprings.get(r);
            return {
              directionVelocity:
                null !== (a = null == e ? void 0 : e.directionVelocity) &&
                void 0 !== a
                  ? a
                  : new i.Vector3(),
              rollVelocity:
                null !== (o = null == e ? void 0 : e.rollVelocity) &&
                void 0 !== o
                  ? o
                  : 0,
            };
          }
          {
            if (!(r instanceof i.Euler)) return this.animator.getVelocity(e, t);
            let a = null != n ? n : new i.Euler();
            return (
              (a.x = this.animator.getVelocity(r, "x")),
              (a.y = this.animator.getVelocity(r, "y")),
              (a.z = this.animator.getVelocity(r, "z")),
              (a.order = r.order),
              a
            );
          }
        }
        stepQuaternionSprings(e) {
          this.quaternionSprings.forEach((t, n) => {
            t.params
              ? 0 === t.mode
                ? m(e, t, t.params)
                : f(e, t, t.params)
              : (n.copy(t.target),
                t.directionVelocity.set(0, 0, 0),
                (t.rollVelocity = 0)),
              Math.abs(n.dot(t.target)) > 0.999 &&
                1e-4 > t.directionVelocity.lengthSq() &&
                1e-4 > Math.abs(t.rollVelocity) &&
                this.quaternionSprings.delete(n);
          });
        }
        getQuaternionSpring(e) {
          let t = this.quaternionSprings.get(e);
          if (!t) {
            l.makeRotationFromQuaternion(e);
            let n = new i.Vector3();
            l.extractBasis(new i.Vector3(), new i.Vector3(), n),
              (t = {
                q: e,
                target: new i.Quaternion(),
                direction: n,
                directionVelocity: new i.Vector3(),
                rollVelocity: 0,
                params: null,
                mode: 0,
              }),
              this.quaternionSprings.set(e, t);
          }
          return t;
        }
        constructor() {
          (this.animator = new a.L(this.stepQuaternionSprings.bind(this))),
            (this.onAfterStep = this.animator.onAfterStep),
            (this.onBeforeStep = this.animator.onBeforeStep),
            (this.quaternionSprings = new Map());
        }
      }
      let l = new i.Matrix4(),
        u = new i.Vector3(),
        c = new i.Vector3(),
        d = new i.Vector3(),
        h = new i.Matrix4(),
        p = { x: 0, v: 0, targetX: 0 };
      function m(e, t, n) {
        let r = new i.Vector3(),
          a = new i.Vector3();
        l.makeRotationFromQuaternion(t.target), l.extractBasis(u, a, r);
        let s = t.direction.clone();
        (p.x = t.direction.x),
          (p.v = t.directionVelocity.x),
          (p.targetX = r.x),
          o.A.stepSpring(e, p, n),
          (t.direction.x = p.x),
          (t.directionVelocity.x = p.v),
          (p.x = t.direction.y),
          (p.v = t.directionVelocity.y),
          (p.targetX = r.y),
          o.A.stepSpring(e, p, n),
          (t.direction.y = p.x),
          (t.directionVelocity.y = p.v),
          (p.x = t.direction.z),
          (p.v = t.directionVelocity.z),
          (p.targetX = r.z),
          o.A.stepSpring(e, p, n),
          (t.direction.z = p.x),
          (t.directionVelocity.z = p.v);
        let m = new i.Quaternion().setFromUnitVectors(
          u.copy(s).normalize(),
          c.copy(t.direction).normalize()
        );
        t.q.premultiply(m), x(t.q, t.direction, h);
        let f = new i.Quaternion().setFromUnitVectors(
          t.direction.clone().normalize(),
          r
        );
        l.makeRotationFromQuaternion(t.q), l.extractBasis(u, c, d);
        let g = c.applyQuaternion(f).clone(),
          v =
            2 *
            Math.acos(
              Math.min(
                1,
                Math.max(-1, new i.Quaternion().setFromUnitVectors(g, a).w)
              )
            );
        (v = -(0 > u.crossVectors(g, a).dot(r) ? -1 : 1) * v),
          (p.x = v),
          (p.v = t.rollVelocity),
          (p.targetX = 0),
          o.A.stepSpring(e, p, n),
          (t.rollVelocity = p.v);
        let y = p.x - v,
          w = new i.Quaternion().setFromAxisAngle(
            t.direction.clone().normalize(),
            y
          );
        t.q.premultiply(w), t.q.normalize();
      }
      function f(e, t, n) {
        let r = t.directionVelocity.x,
          a = t.directionVelocity.y,
          s = g(t.q),
          l = g(t.target);
        (p.x = s.x),
          (p.v = a),
          (p.targetX = w(l.x, s.x)),
          o.A.stepSpring(e, p, n),
          (a = p.v);
        let u = p.x;
        (p.x = s.y),
          (p.v = r),
          (p.targetX = w(l.y, s.y)),
          o.A.stepSpring(e, p, n),
          (r = p.v);
        let c = p.x;
        (t.directionVelocity.x = r), (t.directionVelocity.y = a);
        let d = new i.Vector3(
          Math.cos(c) * Math.cos(u),
          Math.sin(u),
          Math.sin(c) * Math.cos(u)
        ).normalize();
        (p.x = s.z),
          (p.v = t.rollVelocity),
          (p.targetX = w(l.z, s.z)),
          o.A.stepSpring(e, p, n),
          (t.rollVelocity = p.v);
        let m = p.x;
        x(t.q, d, h), v(t.q, m);
      }
      function g(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : new i.Vector3();
        l.makeRotationFromQuaternion(e), l.extractBasis(u, c, d);
        let n = Math.atan2(d.z, d.x),
          r = Math.atan2(d.y, Math.sqrt(d.x * d.x + d.z * d.z)),
          a = C(e);
        return t.set(r, n, a), t;
      }
      function v(e, t) {
        let n = t - C(e),
          r = new i.Vector3(0, 0, -1).applyQuaternion(e),
          a = new i.Quaternion().setFromAxisAngle(r, n);
        e.premultiply(a);
      }
      let y = new i.Vector3();
      function x(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : new i.Matrix4();
        return (
          n.makeRotationFromQuaternion(e),
          n.extractBasis(u, c, d),
          y.copy(t).normalize(),
          u.crossVectors(c, y).normalize(),
          c.crossVectors(y, u).normalize(),
          n.makeBasis(u, c, y),
          e.setFromRotationMatrix(n),
          n
        );
      }
      function w(e, t) {
        let n;
        let r = 2 * Math.PI,
          i = e / r + 0.5 - b(t / r + 0.5);
        if (0.5 > Math.abs(i)) n = t + i * r;
        else {
          let e = 1 - Math.abs(i);
          n = t + -Math.sign(i) * e * r;
        }
        return n;
      }
      function b(e) {
        return e - Math.floor(e);
      }
      function C(e) {
        return M(e, new i.Vector3(0, 1, 0), new i.Vector3(0, 0, -1));
      }
      function M(e, t, n) {
        let r = t.clone().applyQuaternion(e),
          i = n.clone().applyQuaternion(e),
          a = r.projectOnPlane(i),
          o = t.clone().projectOnPlane(i);
        return o.angleTo(a) * Math.sign(o.cross(a).dot(i));
      }
    },
    97277: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(52520);
      class i {
        attachEventListeners() {
          this.attached ||
            (this.el.addEventListener("gesturestart", this.cancelEvent, !1),
            this.el.addEventListener("gesturechange", this.cancelEvent, !1),
            this.el.addEventListener("pointerdown", this.handlePointerDown, {
              passive: !1,
            }),
            this.el.addEventListener("pointermove", this.handlePointerMove, {
              passive: !1,
            }),
            this.el.addEventListener("pointerup", this.handlePointerUp, {
              passive: !1,
            }),
            this.el.addEventListener(
              "pointercancel",
              this.handlePointerCancel,
              { passive: !1 }
            ),
            this.el.addEventListener("wheel", this.handleWheel, {
              passive: !1,
            }),
            this.el.addEventListener("contextmenu", this.handleContextMenu, {
              passive: !1,
            }),
            window.addEventListener("pointerup", this.handleGlobalPointerUp, {
              capture: !0,
            }),
            window.addEventListener(
              "pointercancel",
              this.handleGlobalPointerUp,
              { capture: !0 }
            ),
            window.addEventListener(
              "pointermove",
              this.handleGlobalPointerMove,
              { capture: !0 }
            ),
            window.addEventListener("keydown", this.handleKeyDown, {
              passive: !1,
            }),
            window.addEventListener("keyup", this.handleKeyUp, { passive: !1 }),
            (this.attached = !0));
        }
        removeEventListeners() {
          this.el.removeEventListener("gesturestart", this.cancelEvent, !1),
            this.el.removeEventListener("gesturechange", this.cancelEvent, !1),
            this.el.removeEventListener("pointerdown", this.handlePointerDown),
            this.el.removeEventListener("pointermove", this.handlePointerMove),
            this.el.removeEventListener("pointerup", this.handlePointerUp),
            this.el.removeEventListener(
              "pointercancel",
              this.handlePointerCancel
            ),
            this.el.removeEventListener("wheel", this.handleWheel),
            window.removeEventListener(
              "pointerup",
              this.handleGlobalPointerUp,
              { capture: !0 }
            ),
            window.removeEventListener(
              "pointercancel",
              this.handleGlobalPointerUp,
              { capture: !0 }
            ),
            window.removeEventListener(
              "pointermove",
              this.handleGlobalPointerMove,
              { capture: !0 }
            ),
            window.removeEventListener("keydown", this.handleKeyDown),
            window.removeEventListener("keyup", this.handleKeyUp),
            this.el.removeEventListener("touchstart", this.cancelEvent),
            (this.attached = !1);
        }
        clearDefaultBehavior() {
          (this.el.style.touchAction = ""),
            (this.el.style.userSelect = ""),
            (this.el.style.webkitUserSelect = ""),
            this.el.removeAttribute("touch-action"),
            this.el.removeEventListener("touchstart", this.cancelEvent);
        }
        constructor(e, t = {}) {
          (this.events = {
            pointerDown: new r.v(),
            pointerMove: new r.v(),
            pointerUp: new r.v(),
            pointerCancel: new r.v(),
            globalPointerUp: new r.v(),
            wheel: new r.v(),
            contextMenu: new r.v(),
            keyDown: new r.v(),
            keyUp: new r.v(),
          }),
            (this.attached = !1),
            (this.activePointers = {}),
            (this.activeButtons = {}),
            (this.cancelEvent = (e) => {
              e.preventDefault(), e.stopPropagation();
            }),
            (this.handlePointerDown = (e) => {
              (this.activePointers[e.pointerId] = e),
                (this.activeButtons[e.pointerId] = e.buttons),
                this.events.pointerDown.dispatchWithExistingEvent(e);
            }),
            (this.handlePointerMove = (e) => {
              (this.activePointers[e.pointerId] = e),
                this.events.pointerMove.dispatchWithExistingEvent(e),
                this.autoCapturePointer &&
                  e.buttons > 0 &&
                  !this.el.hasPointerCapture(e.pointerId) &&
                  this.el.setPointerCapture(e.pointerId);
            }),
            (this.commonPointerUp = (e) => {
              0 === e.buttons
                ? (delete this.activePointers[e.pointerId],
                  delete this.activeButtons[e.pointerId])
                : (this.activeButtons[e.pointerId] = e.buttons);
            }),
            (this.handlePointerUp = (e) => {
              this.commonPointerUp(e),
                this.events.pointerUp.dispatchWithExistingEvent(e);
            }),
            (this.handlePointerCancel = (e) => {
              this.commonPointerUp(e),
                this.events.pointerCancel.dispatchWithExistingEvent(e);
            }),
            (this.handleGlobalPointerUp = (e) => {
              this.commonPointerUp(e),
                this.events.globalPointerUp.dispatchWithExistingEvent(e);
            }),
            (this.handleGlobalPointerMove = (e) => {
              let t = this.activeButtons[e.pointerId],
                n = e.buttons,
                r = t & ~n;
              if (r > 0) {
                for (let t = 0; t < 32; t++)
                  if (r & (1 << t)) {
                    let t = new PointerEvent("pointerup", e);
                    this.el.hasPointerCapture(e.pointerId) ||
                    t.target === this.el
                      ? this.events.pointerUp.dispatchWithExistingEvent(t)
                      : this.events.globalPointerUp.dispatchWithExistingEvent(
                          t
                        );
                  }
              }
              this.activeButtons[e.pointerId] = n;
            }),
            (this.handleWheel = (e) => {
              this.events.wheel.dispatchWithExistingEvent(e);
            }),
            (this.handleContextMenu = (e) => {
              this.events.contextMenu.dispatchWithExistingEvent(e);
            }),
            (this.handleKeyDown = (e) => {
              this.events.keyDown.dispatchWithExistingEvent(e);
            }),
            (this.handleKeyUp = (e) => {
              this.events.keyUp.dispatchWithExistingEvent(e);
            });
          let n = { disableDefaultBehavior: !0, autoCapturePointer: !0, ...t };
          (this.el = e),
            (this.pointerEventsSupported = void 0 !== window.PointerEvent),
            this.attachEventListeners(),
            (this.autoCapturePointer = n.autoCapturePointer),
            n.disableDefaultBehavior &&
              ((this.el.style.touchAction = "none"),
              (this.el.style.userSelect = "none"),
              (this.el.style.webkitUserSelect = "none"),
              this.el.setAttribute("touch-action", "none"),
              this.el.addEventListener("touchstart", this.cancelEvent));
        }
      }
    },
    85415: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
        x: function () {
          return o;
        },
      });
      var r = n(91344),
        i = n(28841);
      class a {
        dispose() {
          for (let e of this.listeners) e.remove();
        }
        prepareRaycastWithPointer(e) {
          let t = this.clientToClipSpace(e);
          return (
            this.raycaster.setFromCamera(new r.Vector2(t.x, t.y), this.camera),
            this.raycaster
          );
        }
        intersectSceneClipSpace(e) {
          this.raycaster.setFromCamera(new r.Vector2(e.x, e.y), this.camera);
          let t = this.raycaster.intersectObjects(this.scene.children, !0),
            n = [];
          for (let e of t)
            (!0 === e.object.userData.interactiveWhenInvisible ||
              this.isVisible(e.object)) &&
              n.push(e);
          n.sort((e, t) => {
            var n, r;
            let i =
                null !== (n = e.object.userData.sortPriority) && void 0 !== n
                  ? n
                  : 0,
              a =
                null !== (r = t.object.userData.sortPriority) && void 0 !== r
                  ? r
                  : 0;
            return i !== a ? a - i : e.distance - t.distance;
          });
          for (let e = 0; e < n.length; e++)
            if (!0 === n[e].object.userData.occludePointerEvents) {
              n.splice(e + 1);
              break;
            }
          return n;
        }
        intersectSceneWithPointer(e) {
          return this.intersectSceneClipSpace(this.clientToClipSpace(e));
        }
        clientToClipSpace(e) {
          return {
            x: (e.clientX / this.interactionManager.el.clientWidth) * 2 - 1,
            y: -((e.clientY / this.interactionManager.el.clientHeight) * 2) + 1,
          };
        }
        setCursor(e) {
          this.interactionManager.el.style.cursor = e;
        }
        isVisible(e) {
          let t = !0,
            n = e;
          for (; null != n; ) {
            if (!1 === n.visible) {
              t = !1;
              break;
            }
            n = n.parent;
          }
          return t;
        }
        constructor(e, t, n, a = 1) {
          (this.raycaster = new r.Raycaster()),
            (this.capturedPointers = {}),
            (this.hoveredObjects = {}),
            (this.onPointerDown = (e) => {
              for (let r of this.intersectSceneWithPointer(e)) {
                var t, n;
                let i;
                let a = r.object;
                if (null != a.userData.onPointerDown) {
                  let t = a.userData.onPointerDown(e, this.raycaster, r);
                  null != t && (i = t);
                }
                if (
                  (null === (t = a.userData.capturePointer) ||
                    void 0 === t ||
                    t) &&
                  !1 !== i
                ) {
                  this.interactionManager.el.setPointerCapture(e.pointerId);
                  let t =
                    null !== (n = this.capturedPointers[e.pointerId]) &&
                    void 0 !== n
                      ? n
                      : [];
                  t.push(a), (this.capturedPointers[e.pointerId] = t);
                }
                if (e.propagationStopped) return;
              }
            }),
            (this.onPointerMove = (e) => {
              var t;
              let n = null,
                r = this.capturedPointers[e.pointerId];
              if (null != r)
                for (let t = r.length - 1; t >= 0; t--) {
                  let i = r[t];
                  null != i.userData.onPointerMove &&
                    i.userData.onPointerMove(e, !0, this.raycaster, void 0),
                    (n = i.userData.cursor);
                }
              let i = this.intersectSceneWithPointer(e),
                a =
                  null !== (t = this.hoveredObjects[e.pointerId]) &&
                  void 0 !== t
                    ? t
                    : [];
              for (let t of ((this.hoveredObjects[e.pointerId] = a), a)) {
                let n = !1;
                for (let e of i)
                  if (e.object === t) {
                    n = !0;
                    break;
                  }
                if (!n) {
                  if (null != t.userData.onPointerOut) {
                    let n = (null == r ? void 0 : r.indexOf(t)) !== -1;
                    t.userData.onPointerOut(e, n, this.raycaster);
                  }
                  a.splice(a.indexOf(t), 1);
                }
              }
              for (let t of i) {
                let i = t.object,
                  o = (null == r ? void 0 : r.indexOf(i)) !== -1;
                if (
                  (o ||
                    null == i.userData.onPointerMove ||
                    i.userData.onPointerMove(e, !1, this.raycaster, t),
                  null == n &&
                    null != i.userData.cursor &&
                    (n = i.userData.cursor),
                  -1 === a.indexOf(i) &&
                    (a.push(i),
                    null != i.userData.onPointerOver &&
                      i.userData.onPointerOver(e, o, this.raycaster, t)),
                  e.propagationStopped)
                )
                  return;
              }
              this.setCursor(null != n ? n : "");
            }),
            (this.onPointerUp = (e) => {
              let t = this.capturedPointers[e.pointerId];
              if (
                (delete this.capturedPointers[e.pointerId],
                delete this.hoveredObjects[e.pointerId],
                this.interactionManager.el.releasePointerCapture(e.pointerId),
                null != t)
              )
                for (let n = t.length - 1; n >= 0; n--) {
                  let r = t[n];
                  null != r.userData.onPointerUp &&
                    r.userData.onPointerUp(e, !0, this.raycaster);
                }
              for (let n of this.intersectSceneWithPointer(e)) {
                let r = n.object;
                if (
                  (null == t ? void 0 : t.indexOf(r)) === -1 &&
                  (null != r.userData.onPointerUp &&
                    r.userData.onPointerUp(e, !1, this.raycaster, n),
                  e.propagationStopped)
                )
                  return;
              }
            }),
            (this.interactionManager = e),
            (this.scene = t),
            (this.camera = n),
            this.raycaster.layers.set(i.m.Interactive),
            (this.listeners = [
              e.events.pointerDown.addListener(this.onPointerDown, a),
              e.events.pointerMove.addListener(this.onPointerMove, a),
              e.events.pointerUp.addListener(this.onPointerUp, a),
              e.events.pointerCancel.addListener(this.onPointerUp, a),
            ]);
        }
      }
      function o(e, t) {
        return e.layers.enable(i.m.Interactive), (e.userData = t), e;
      }
    },
    99601: function (e, t, n) {
      "use strict";
      n.d(t, {
        Mu: function () {
          return d;
        },
      });
      var r,
        i = n(91344),
        a = n(85754),
        o = n(21133),
        s = n(52520),
        l = n(17912),
        u = n(85415);
      let c = l.A.Exponential(0.05);
      !(function (e) {
        (e[(e.Translate = 0)] = "Translate"),
          (e[(e.Rotate = 1)] = "Rotate"),
          (e[(e.Scale = 2)] = "Scale");
      })(r || (r = {}));
      class d extends i.Mesh {
        constructor(e, t = {}) {
          super(),
            (this.events = {
              changeStart: new s.v(),
              change: new s.v(),
              changeEnd: new s.v(),
            }),
            (this.onChangeStart = () => {}),
            (this.onChange = () => {}),
            (this.onChangeEnd = () => {});
          let n = { ...d.defaultOptions, ...t };
          (this.xAxis = new p(
            n.xAxisColor,
            new i.Vector3(1, 0, 0),
            "translateX",
            n.interactionPriority
          )),
            (this.yAxis = new p(
              n.yAxisColor,
              new i.Vector3(0, 1, 0),
              "translateY",
              n.interactionPriority
            )),
            (this.zAxis = new p(
              n.zAxisColor,
              new i.Vector3(0, 0, 1),
              "translateZ",
              n.interactionPriority
            )),
            (this.yzArc = new m(
              n.xAxisColor,
              new i.Vector3(1, 0, 0),
              "rotateX",
              n.interactionPriority
            )),
            (this.xzArc = new m(
              n.yAxisColor,
              new i.Vector3(0, 1, 0),
              "rotateY",
              n.interactionPriority
            )),
            (this.xyArc = new m(
              n.zAxisColor,
              new i.Vector3(0, 0, 1),
              "rotateZ",
              n.interactionPriority
            )),
            (this.xAxis.material.depthTest = n.depthTest),
            (this.yAxis.material.depthTest = n.depthTest),
            (this.zAxis.material.depthTest = n.depthTest),
            (this.yzArc.material.depthTest = n.depthTest),
            (this.xzArc.material.depthTest = n.depthTest),
            (this.xyArc.material.depthTest = n.depthTest);
          let { xAxis: r, yAxis: a, zAxis: o } = this,
            { xyArc: l, xzArc: u, yzArc: c } = this;
          u.rotateZ(Math.PI),
            l.rotateZ(-(0.5 * Math.PI)),
            n.translation &&
              (n.translationX && this.add(r),
              n.translationY && this.add(a),
              n.translationZ && this.add(o)),
            n.rotation &&
              (n.rotationX && this.add(c),
              n.rotationY && this.add(u),
              n.rotationZ && this.add(l));
          let h = new i.Vector3();
          (r.onDragStart =
            a.onDragStart =
            o.onDragStart =
              (t) => {
                h.copy(e.position),
                  (r.visible = t === r),
                  (a.visible = t === a),
                  (o.visible = t === o),
                  (l.visible = !1),
                  (u.visible = !1),
                  (c.visible = !1),
                  this.events.changeStart.dispatch({
                    targetObject: e,
                    transform: {
                      name: t.transformName,
                      kind: 0,
                      axisWorldSpace: t.worldSpaceAxisRay.direction,
                      magnitude: 0,
                    },
                  });
              }),
            (r.onDragUpdate =
              a.onDragUpdate =
              o.onDragUpdate =
                (t, n) => {
                  var r;
                  let a;
                  e.position.copy(h);
                  let o =
                    null === (r = e.parent) || void 0 === r
                      ? void 0
                      : r.getWorldQuaternion(new i.Quaternion()).invert();
                  (a = o ? n.clone().applyQuaternion(o) : n),
                    e.position.add(a),
                    e.updateMatrix(),
                    this.events.change.dispatch({
                      targetObject: e,
                      transform: {
                        name: t.transformName,
                        kind: 0,
                        axisWorldSpace: t.worldSpaceAxisRay.direction,
                        magnitude: n.length(),
                      },
                    });
                }),
            (r.onDragEnd =
              a.onDragEnd =
              o.onDragEnd =
                (t, n) => {
                  (r.visible = !0),
                    (a.visible = !0),
                    (o.visible = !0),
                    (l.visible = !0),
                    (u.visible = !0),
                    (c.visible = !0),
                    this.events.changeEnd.dispatch({
                      targetObject: e,
                      transform: {
                        name: t.transformName,
                        kind: 0,
                        axisWorldSpace: t.worldSpaceAxisRay.direction,
                        magnitude: n.length(),
                      },
                    });
                });
          let f = new i.Quaternion();
          (l.onDragStart =
            u.onDragStart =
            c.onDragStart =
              (t) => {
                h.copy(e.position),
                  f.copy(e.quaternion),
                  (l.visible = t === l),
                  (u.visible = t === u),
                  (c.visible = t === c),
                  (r.visible = !1),
                  (a.visible = !1),
                  (o.visible = !1),
                  this.events.changeStart.dispatch({
                    targetObject: e,
                    transform: {
                      name: t.transformName,
                      kind: 1,
                      axisWorldSpace: t.rotationPlaneWorldSpace.normal,
                      magnitude: 0,
                    },
                  });
              }),
            (l.onDragUpdate =
              u.onDragUpdate =
              c.onDragUpdate =
                (t, r) => {
                  if (
                    (e.position.copy(h),
                    e.quaternion.copy(f),
                    n.pivotAroundGizmo)
                  ) {
                    let t = e.getWorldPosition(new i.Vector3()),
                      n = this.getWorldPosition(new i.Vector3()),
                      a = t.clone().sub(n).applyQuaternion(r).add(n);
                    e.parent
                      ? e.position.copy(e.parent.worldToLocal(a))
                      : e.position.copy(a);
                  }
                  if (e.parent) {
                    let t = e
                        .getWorldQuaternion(new i.Quaternion())
                        .clone()
                        .premultiply(r),
                      n = e.parent
                        .getWorldQuaternion(new i.Quaternion())
                        .invert();
                    e.quaternion.copy(t).premultiply(n);
                  } else e.quaternion.premultiply(r);
                  e.updateMatrix(),
                    this.events.change.dispatch({
                      targetObject: e,
                      transform: {
                        name: t.transformName,
                        kind: 1,
                        axisWorldSpace: t.rotationPlaneWorldSpace.normal,
                        magnitude: 2 * Math.acos(r.w),
                      },
                    });
                }),
            (l.onDragEnd =
              u.onDragEnd =
              c.onDragEnd =
                (t, n) => {
                  (l.visible = !0),
                    (u.visible = !0),
                    (c.visible = !0),
                    (r.visible = !0),
                    (a.visible = !0),
                    (o.visible = !0),
                    this.events.changeEnd.dispatch({
                      targetObject: e,
                      transform: {
                        name: t.transformName,
                        kind: 1,
                        axisWorldSpace: t.rotationPlaneWorldSpace.normal,
                        magnitude: 2 * Math.acos(n.w),
                      },
                    });
                }),
            this.events.change.addListener((e) =>
              this.onChange(e.targetObject, e.transform)
            ),
            this.events.changeStart.addListener((e) =>
              this.onChangeStart(e.targetObject, e.transform)
            ),
            this.events.changeEnd.addListener((e) =>
              this.onChangeEnd(e.targetObject, e.transform)
            );
          let g = n.viewIndependentSize;
          if (null != g && !1 !== g) {
            (this.frustumCulled = !1), (this.renderOrder = -1 / 0);
            let e = new i.Vector3(),
              t = new i.Vector3();
            this.onBeforeRender = (n, r, i) => {
              e.setFromMatrixPosition(i.matrixWorld),
                t.setFromMatrixPosition(this.matrixWorld);
              let a = e.distanceTo(t);
              this.scale.setScalar(0.4 * g * a), this.updateWorldMatrix(!1, !0);
            };
          }
        }
      }
      d.defaultOptions = {
        pivotAroundGizmo: !0,
        viewIndependentSize: void 0,
        rotation: !0,
        rotationX: !0,
        rotationY: !0,
        rotationZ: !0,
        translation: !0,
        translationX: !0,
        translationY: !0,
        translationZ: !0,
        xAxisColor: 16719968,
        yAxisColor: 2154368,
        zAxisColor: 2130175,
        depthTest: !0,
        interactionPriority: 10,
      };
      class h extends i.Mesh {
        get selected() {
          return this._selected;
        }
        set selected(e) {
          e && !this._selected
            ? this.events.onSelectStart.dispatch(void 0)
            : !e && this._selected && this.events.onSelectEnd.dispatch(void 0),
            (this._selected = e);
        }
        get hovered() {
          return this._hovered;
        }
        set hovered(e) {
          e && !this._hovered
            ? this.events.onHoverStart.dispatch(void 0)
            : !e && this._hovered && this.events.onHoverEnd.dispatch(void 0),
            (this._hovered = e);
        }
        handleDragStart(e) {}
        handleDragUpdate(e) {}
        handleDragEnd(e) {}
        constructor(e, t, n, r) {
          super(t, new i.MeshBasicMaterial({ color: e })),
            (this.animator = new o.L()),
            (this.baseColor = new i.Color()),
            (this._selected = !1),
            (this._hovered = !1),
            (this.events = {
              onHoverStart: new s.v(),
              onHoverEnd: new s.v(),
              onSelectStart: new s.v(),
              onSelectEnd: new s.v(),
            }),
            (this.selectionLerp = 0),
            (this.onBeforeRender = (e, t, n) => {
              let r = this.hovered || this.selected ? 1 : 0;
              this.animator.springTo(this, "selectionLerp", r, c),
                this.animator.tick(),
                this.material.color.lerpColors(
                  this.baseColor,
                  this.hoverColor,
                  this.selectionLerp
                ),
                (this.outline.material.opacity = this.selectionLerp);
            }),
            (this.outline = new i.Mesh(
              n,
              new i.MeshBasicMaterial({
                color: new i.Color(e).offsetHSL(0, 0, 0),
                transparent: !0,
                opacity: 0,
                depthTest: !0,
                depthWrite: !1,
                side: i.BackSide,
              })
            )),
            this.add(this.outline),
            this.baseColor.set(e),
            (this.hoverColor = new i.Color(e)
              .offsetHSL(0, 0.1, 0.35)
              .multiplyScalar(4)),
            (0, u.x)(this, {
              sortPriority: r,
              cursor: "pointer",
              occludePointerEvents: !0,
              capturePointer: !0,
              onPointerOver: () => (this.hovered = !0),
              onPointerOut: () => (this.hovered = !1),
              onPointerDown: (e, t) =>
                1 === e.buttons &&
                (e.preventDefault(),
                e.stopPropagation(),
                (this.selected = !0),
                this.handleDragStart(t),
                !0),
              onPointerMove: (e, t, n) => {
                t &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  this.handleDragUpdate(n));
              },
              onPointerUp: (e, t, n) => {
                t &&
                  (e.preventDefault(),
                  e.stopPropagation(),
                  (this.selected = !1),
                  this.handleDragEnd(n));
              },
            });
        }
      }
      class p extends h {
        handleDragStart(e) {
          this.updateWorldMatrix(!0, !1),
            this.worldSpaceAxisRay.origin.setFromMatrixPosition(
              this.matrixWorld
            ),
            this.worldSpaceAxisRay.direction.setFromMatrixColumn(
              this.matrixWorld,
              0
            ),
            (this.pDragStart = x(e.ray, this.worldSpaceAxisRay)),
            this.onDragStart(this);
        }
        handleDragUpdate(e) {
          this.onDragUpdate(this, this.getDragDelta(e));
        }
        handleDragEnd(e) {
          this.onDragEnd(this, this.getDragDelta(e));
        }
        getDragDelta(e) {
          let t = x(e.ray, this.worldSpaceAxisRay) - this.pDragStart;
          return this.worldSpaceAxisRay.direction.clone().multiplyScalar(t);
        }
        constructor(e, t = new i.Vector3(1, 0, 0), n, r) {
          let a = 0.035,
            o = 0.07,
            s = 1;
          super(
            e,
            b("arrowGeometry", () => C(a, o, s)),
            b("arrowOutlineGeometry", () => C(a + 0.01, o + 0.01, s + 0.1)),
            r
          ),
            (this.onDragStart = () => {}),
            (this.onDragUpdate = () => {}),
            (this.onDragEnd = () => {}),
            (this.transformKind = 0),
            (this.pDragStart = NaN),
            (this.worldSpaceAxisRay = new i.Ray()),
            (this.transformName = n),
            this.quaternion.setFromUnitVectors(new i.Vector3(1, 0, 0), t);
        }
      }
      class m extends h {
        handleDragStart(e) {
          this.updateWorldMatrix(!0, !1),
            this.inverseWorldMatrixStart.copy(this.matrixWorld).invert(),
            this.worldPosition.setFromMatrixPosition(this.matrixWorld),
            this.rotationPlaneWorldSpace
              .set(new i.Vector3(0, 0, 1), 0)
              .applyMatrix4(this.matrixWorld),
            e.ray.intersectPlane(this.rotationPlaneWorldSpace, this.pDragStart),
            this.pDragStart.sub(this.worldPosition),
            this.pDragStart.normalize(),
            this.onDragStart(this);
        }
        handleDragUpdate(e) {
          this.onDragUpdate(this, this.getDragDelta(e));
        }
        handleDragEnd(e) {
          this.onDragEnd(this, this.getDragDelta(e));
        }
        getDragDelta(e) {
          return (
            e.ray.intersectPlane(this.rotationPlaneWorldSpace, this.pDrag),
            this.pDrag.sub(this.worldPosition),
            this.pDrag.normalize(),
            new i.Quaternion().setFromUnitVectors(this.pDragStart, this.pDrag)
          );
        }
        constructor(e, t = new i.Vector3(1, 0, 0), n, r) {
          let a = 1,
            o = 1.2;
          super(
            e,
            b("arcGeometry", () => {
              let e = new i.TorusGeometry(a, 0.09, 32, 32, 0.5 * Math.PI - o);
              return (
                e.rotateZ(0.5 * o),
                e.rotateZ(0.5 * Math.PI),
                e.scale(1, 1, 0.05),
                e
              );
            }),
            b(
              "arcOutlineGeometry",
              () =>
                new i.TorusGeometry(
                  a,
                  (0.035 + 0.01) * 0.2,
                  32,
                  128,
                  2 * Math.PI
                )
            ),
            r
          ),
            (this.onDragStart = () => {}),
            (this.onDragUpdate = () => {}),
            (this.onDragEnd = () => {}),
            (this.rotationPlaneWorldSpace = new i.Plane()),
            (this.pDragStart = new i.Vector3()),
            (this.worldPosition = new i.Vector3()),
            (this.inverseWorldMatrixStart = new i.Matrix4()),
            (this.pDrag = new i.Vector3()),
            (this.transformName = n),
            (this.axis = t),
            this.quaternion.setFromUnitVectors(new i.Vector3(0, 0, 1), t);
        }
      }
      let f = new i.Vector3(),
        g = new i.Vector3(),
        v = new i.Vector3(),
        y = new i.Vector3(),
        x = (e, t) => {
          let n = f.copy(e.direction).cross(t.direction),
            r = g.copy(e.direction).cross(n).normalize(),
            i = v.copy(t.direction).normalize();
          return y.copy(e.origin).sub(t.origin).dot(r) / i.dot(r);
        },
        w = {};
      function b(e, t) {
        return void 0 === w[e] && (w[e] = t()), w[e];
      }
      function C(e, t, n) {
        let r = 0.15 * n,
          o = new i.CylinderGeometry(e, e, n, 32);
        o.translate(0, 0.5, 0);
        let s = new i.ConeGeometry(t, r, 32);
        s.translate(0, 1 + 0.5 * r, 0);
        let l = (0, a.n4)([o, s]);
        return l.rotateZ(-Math.PI / 2), l;
      }
    },
    81288: function (e, t, n) {
      "use strict";
      var r, i, a;
      n.d(t, {
        IJ: function () {
          return a;
        },
        XG: function () {
          return r;
        },
      }),
        n(83112),
        (function (e) {
          (e.VIDEO = "video"),
            (e.SLF = "slf"),
            (e.LF = "lf"),
            (e.SPLATS = "sparkles");
        })(r || (r = {})),
        (function (e) {
          (e.VIDEO = "video"),
            (e.SLF = "slf"),
            (e.LF = "lf"),
            (e.SLF_BG = "slf-bg"),
            (e.SPLATS = "sparkles");
        })(i || (i = {})),
        (function (e) {
          (e.select = "select"),
            (e.metadata = "metadata"),
            (e.uploading = "uploading"),
            (e.error = "error");
        })(a || (a = {}));
    },
    76493: function (e, t, n) {
      "use strict";
      n.d(t, {
        pn: function () {
          return i;
        },
      }),
        n(20209),
        n(42548),
        n(24728);
      var r = n(83112);
      n(82306),
        n(49975),
        n(93766),
        n(59076),
        n(18306),
        n(81288),
        n(16257),
        n(98869),
        n(80517),
        n(40660),
        n(7055),
        n(30773),
        n(44700),
        n(41155),
        n(74281),
        n(11593),
        n(94317),
        n(9452);
      let i = (0, r.createContext)({ uuid: "" });
    },
    30773: function (e, t, n) {
      "use strict";
      var r = n(20209),
        i = n(65305);
      let a = (e) =>
        (0, r.jsx)(i.z, {
          height: "34px",
          width: "fit-content",
          rounded: "full",
          px: 4,
          py: 2,
          fontSize: "16px",
          fontWeight: "normal",
          ...e,
        });
      t.Z = a;
    },
    43465: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return a;
        },
      }),
        n(20209),
        n(46066),
        n(24728);
      var r = n(95211),
        i = n(16257);
      let a = [
        { url: r.Z.landing, text: "Dream Machine" },
        { url: "/genie", text: "Genie" },
        { url: "/interactive-scenes", text: "Interactive Scenes" },
        { url: "/dashboard/captures", text: "My Captures" },
        { url: i.HU, text: "iOS App" },
        { url: "/flythroughs", text: "Flythroughs" },
        { url: "/team", text: "Meet the team" },
        { url: "/join", text: "Careers" },
        { url: "https://discord.gg/ASbS3EykXm", text: "Discord" },
        { url: "/featured", text: "Featured" },
      ];
    },
    43174: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          DownloadVideoModal: function () {
            return T;
          },
          default: function () {
            return z;
          },
        });
      var r = n(20209),
        i = n(23573),
        a = n(31088),
        o = n(92860),
        s = n(66102),
        l = n(7823),
        u = n(15353),
        c = n(26989),
        d = n(38859),
        h = n(4009),
        p = n(89364),
        m = n(10470),
        f = n(44691),
        g = n(96886),
        v = n(85559),
        y = n(20370),
        x = n(65305),
        w = n(71386),
        b = n(45252),
        C = n.n(b),
        M = n(92493),
        _ = n(46066),
        S = n(83112),
        j = n(88860),
        k = n(16257),
        E = n(95387),
        P = n(40660),
        D = n(7055),
        L = n(30773),
        I = (e) => {
          let { poster: t, video: n, style: i } = e,
            [a, o] = (0, S.useState)(!1),
            s = (0, S.useRef)(null);
          return (
            (0, S.useEffect)(() => {
              !(0, P.G6)() &&
                s.current &&
                (a
                  ? s.current.play()
                  : ((s.current.currentTime = 0), s.current.pause()));
            }, [a, s.current]),
            (0, r.jsx)("video", {
              ref: s,
              loop: !0,
              muted: !0,
              playsInline: !0,
              poster: t,
              src: n,
              style: i,
              height: "auto",
              width: "auto",
              onMouseEnter: () => o(!0),
              onMouseLeave: () => o(!1),
            })
          );
        };
      function T(e) {
        let {
          videoSrc: t,
          depthImagesSrc: n,
          color: a,
          bgColor: o,
          poster: s,
          slug: l,
          ...d
        } = e;
        return (0, r.jsxs)(h.u_, {
          ...d,
          size: "6xl",
          motionPreset: "scale",
          children: [
            (0, r.jsx)(p.Z, {}),
            (0, r.jsxs)(m.h, {
              border: "1px solid rgba(255,255,255,0.2)",
              rounded: "8px",
              color: a,
              bgColor: o,
              children: [
                (0, r.jsx)(f.x, { textAlign: "center", children: "preview" }),
                (0, r.jsx)(g.o, {}),
                (0, r.jsx)(v.f, {
                  children: (0, r.jsx)(u.M, {
                    width: "auto",
                    height: "auto",
                    children: (0, r.jsx)("video", {
                      style: {
                        width: "auto",
                        maxWidth: "100%",
                        height: "auto",
                        maxHeight: "70vh",
                        objectFit: "contain",
                        borderRadius: 8,
                      },
                      src: t,
                      autoPlay: !0,
                      playsInline: !0,
                      loop: !0,
                      muted: !0,
                      controls: !0,
                      poster: s,
                    }),
                  }),
                }),
                (0, r.jsx)(y.m, {
                  justifyContent: "center",
                  children: (0, r.jsxs)(c.U, {
                    children: [
                      (0, r.jsx)(x.z, {
                        leftIcon: (0, r.jsx)(w._8t, {}),
                        rounded: "full",
                        onClick: () => {
                          (0, P.Sv)(t);
                        },
                        children: "video",
                      }),
                      null != n &&
                        (0, r.jsx)(x.z, {
                          leftIcon: (0, r.jsx)(w._8t, {}),
                          rounded: "full",
                          onClick: () => {
                            (0, P.Sv)(n);
                          },
                          children: "depth images",
                        }),
                      !C()(l) &&
                        (0, r.jsx)(_.default, {
                          href: "/editor/".concat(l),
                          target: "_blank",
                          rel: "noreferrer",
                          children: (0, r.jsx)(x.z, {
                            leftIcon: (0, r.jsx)(i.d, {}),
                            rounded: "full",
                            children: "editor",
                          }),
                        }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var z = (e) => {
        let {
            uuid: t,
            onClick: n,
            defaultCinematicVideo: i,
            defaultCinematicVideoPreiview: h,
          } = e,
          [p, m] = (0, S.useState)([]),
          [f, g] = (0, S.useState)(!1),
          [v, y] = (0, S.useState)(!1);
        (0, S.useEffect)(() => {
          try {
            (async () => {
              if ((y(!0), !t)) {
                y(!1);
                return;
              }
              let { response: e, isMoreAvailable: n } = await (0, D.q$)(t);
              if (!e || "boolean" != typeof n)
                throw "Could not get renders for capture ".concat(t);
              i &&
                h &&
                (e = [
                  {
                    uuid: (0, j.Z)(),
                    type: E.KM.video,
                    status: E.CA.finished,
                    date: "",
                    capture: { uuid: "" },
                    user: { uuid: "", username: "" },
                    artifacts: [
                      { type: "video", url: i },
                      { type: "video_preview", url: h },
                    ],
                  },
                  ...e,
                ]),
                m(e),
                g(n),
                y(!1);
            })();
          } catch (e) {
            y(!1), console.error(e);
          }
        }, []);
        let [x, b] = (0, S.useState)(void 0),
          [C, _] = (0, S.useState)(void 0),
          { isOpen: z, onOpen: R, onClose: A } = (0, a.q)(),
          V = p.filter((e) => "dispatched" === e.status),
          F = "white",
          O = "black",
          N = "white",
          B = "black",
          H = !!n;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            !H &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)(o.x, {
                    fontSize: "20px",
                    children: [
                      (0, r.jsx)("b", { children: "Video Renders" }),
                      " ",
                      (0, r.jsx)(o.x, {
                        fontSize: "16px",
                        display: "inline",
                        children:
                          0 !== V.length
                            ? "(".concat(V.length, " in queue)")
                            : "",
                      }),
                    ],
                  }),
                  (0, r.jsx)(s.i, { mt: k.gc / 4 }),
                ],
              }),
            (0, r.jsx)(l.xu, {
              width: "100%",
              overflowX: "scroll",
              whiteSpace: "nowrap",
              py: H ? k.gc / 4 : k.gc / 2,
              children: (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(l.xu, {
                    rounded: "8px",
                    mr: k.gc / 2,
                    display: H ? "none" : "inline-block",
                    width: "140px",
                    height: "200px",
                    background: "linear-gradient(180deg, #AB47BC, #7B1FA2)",
                    position: "relative",
                    transform: "auto",
                    translateY: 0,
                    overflow: "hidden",
                    cursor: "pointer",
                    onClick: () => {
                      window.open(
                        "/capture/".concat(t, "?mode=slf&reshoot=true"),
                        "_blank"
                      );
                    },
                    children: (0, r.jsxs)(u.M, {
                      width: "100%",
                      height: "100%",
                      flexDirection: "column",
                      children: [
                        (0, r.jsx)(M.Z, { size: "28px" }),
                        (0, r.jsx)(o.x, { children: " new render" }),
                      ],
                    }),
                  }),
                  p.map((e, t) => {
                    var i;
                    let a =
                        null !== (i = null == e ? void 0 : e.artifacts) &&
                        void 0 !== i
                          ? i
                          : [],
                      o = (0, P.gk)("video_preview", a),
                      s = (0, P.gk)("video", a),
                      d = (0, P.gk)("video_depth_images", a),
                      h = !!o && !!s;
                    return h
                      ? (0, r.jsx)(
                          l.xu,
                          {
                            rounded: "8px",
                            mr: k.gc / 2,
                            display: "inline-block",
                            width: H ? 150 : "auto",
                            height: H ? 150 : "auto",
                            position: "relative",
                            transform: "auto",
                            translateY: 0,
                            overflow: "hidden",
                            cursor: "zoom-in",
                            onClick: () => {
                              H ? n(s) : (R(), b(s), _(d));
                            },
                            children:
                              h &&
                              (0, r.jsxs)(r.Fragment, {
                                children: [
                                  (0, r.jsx)(
                                    I,
                                    {
                                      poster: o,
                                      video: s,
                                      style: H
                                        ? {
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                          }
                                        : { maxWidth: 250, maxHeight: 200 },
                                    },
                                    String(t + o + s + "video")
                                  ),
                                  !H &&
                                    (0, r.jsxs)(c.U, {
                                      position: "absolute",
                                      left: 2,
                                      bottom: 2,
                                      spacing: 2.5,
                                      children: [
                                        (0, r.jsx)(u.M, {
                                          onClick: (e) => {
                                            e.preventDefault(),
                                              e.stopPropagation(),
                                              (0, P.Sv)(s);
                                          },
                                          cursor: "pointer",
                                          color: F,
                                          bgColor: O,
                                          rounded: "16px",
                                          children: (0, r.jsx)(w.Odl, {
                                            style: {
                                              backdropFilter: "blur(5px)",
                                              margin: "8px",
                                            },
                                          }),
                                        }),
                                        d &&
                                          (0, r.jsx)(u.M, {
                                            onClick: (e) => {
                                              e.preventDefault(),
                                                e.stopPropagation(),
                                                (0, P.Sv)(d);
                                            },
                                            cursor: "pointer",
                                            color: F,
                                            bgColor: O,
                                            rounded: "16px",
                                            children: (0, r.jsx)(w.XBm, {
                                              style: {
                                                backdropFilter: "blur(5px)",
                                                margin: "8px",
                                              },
                                            }),
                                          }),
                                      ],
                                    }),
                                ],
                              }),
                          },
                          String(t + o + s + d)
                        )
                      : (0, r.jsx)(r.Fragment, {});
                  }),
                  0 === p.length &&
                    v &&
                    (0, r.jsx)(l.xu, {
                      rounded: "8px",
                      mr: k.gc / 2,
                      display: H ? "none" : "inline-block",
                      width: "140px",
                      height: "200px",
                      background: "#111111",
                      position: "relative",
                      transform: "auto",
                      translateY: 0,
                      overflow: "hidden",
                      children: (0, r.jsx)(u.M, {
                        width: "100%",
                        height: "100%",
                        flexDirection: "column",
                        children: (0, r.jsx)(d.$, { m: k.gc / 2 }),
                      }),
                    }),
                  f &&
                    (0, r.jsx)(l.xu, {
                      rounded: "8px",
                      mr: k.gc / 2,
                      display: "inline-block",
                      width: H ? 150 : "auto",
                      height: H ? 150 : "auto",
                      position: "relative",
                      transform: "auto",
                      translateY: 0,
                      overflow: "hidden",
                      cursor: "zoom-in",
                      onClick: () => {
                        try {
                          (async () => {
                            if ((y(!0), !t)) {
                              y(!1);
                              return;
                            }
                            let { response: e, isMoreAvailable: n } = await (0,
                            D.q$)(t, { skip: p.length });
                            if (!e || "boolean" != typeof n)
                              throw "Could not get renders for capture ".concat(
                                t
                              );
                            m([...p, ...e]), g(n), y(!1);
                          })();
                        } catch (e) {
                          y(!1), console.error(e);
                        }
                      },
                      children: (0, r.jsxs)(L.Z, {
                        disabled: v,
                        children: [
                          "show more",
                          v && (0, r.jsx)(d.$, { ml: k.gc / 4, size: "sm" }),
                        ],
                      }),
                    }),
                ],
              }),
            }),
            (0, r.jsx)(T, {
              onClose: () => {
                A(), _(void 0), b(void 0);
              },
              isOpen: z && !!x,
              isCentered: !0,
              color: N,
              bgColor: B,
              videoSrc: x,
              depthImagesSrc: C,
            }),
          ],
        });
      };
    },
    56036: function (e, t, n) {
      "use strict";
      var r;
      n(20209),
        n(45252),
        n(24728),
        n(83112),
        n(81288),
        n(16257),
        n(95387),
        n(98869),
        n(40660),
        n(7055),
        n(30773),
        (function (e) {
          (e.bottomLeft = "bottomLeft"),
            (e.bottomRight = "bottomRight"),
            (e.topRight = "topRight"),
            (e.topLeft = "topLeft"),
            (e.center = "center");
        })(r || (r = {})),
        new AbortController();
    },
    16257: function (e, t, n) {
      "use strict";
      n.d(t, {
        $1: function () {
          return v;
        },
        DF: function () {
          return y;
        },
        EK: function () {
          return f;
        },
        FH: function () {
          return r;
        },
        HU: function () {
          return b;
        },
        Jw: function () {
          return x;
        },
        N0: function () {
          return h;
        },
        NE: function () {
          return p;
        },
        O9: function () {
          return i;
        },
        OJ: function () {
          return l;
        },
        U_: function () {
          return u;
        },
        Xs: function () {
          return d;
        },
        fg: function () {
          return g;
        },
        gc: function () {
          return a;
        },
        mQ: function () {
          return o;
        },
        nD: function () {
          return w;
        },
        pS: function () {
          return s;
        },
        uJ: function () {
          return c;
        },
        xz: function () {
          return m;
        },
      });
      let r = "https://lumalabs.ai",
        i = {
          bg: "#0a0a0a",
          text: "white",
          bgHalfWhite: "rgba(255,255,255,0.9)",
          bgHalfBlack: "rgba(0,0,0,0.9)",
          bgFor3d: "lightblue",
        },
        a = 8,
        o = "lumalabsai-internal-user",
        s = "captures.lumalabs.ai-authStore",
        l = "captures.lumalabs.ai-authStore-time-stamp",
        u = "captures.lumalabs.ai-authStore-return-to-url",
        c = "https://webapp.engineeringlumalabs.com",
        d = 1,
        h = "captures.lumalabs.ai-open-tutorial-3d",
        p = 3,
        m = 30,
        f =
          "https://apps.apple.com/us/app/luma-flythroughs/id6450376609?ppid=da350f7c-5f2d-4e96-a41b-b9b05c14f303",
        g = "mailto:hello+flythroughs@lumalabs.ai",
        v = {
          src: "https://cdn-luma.com/public/lumalabs.ai/flythroughs/14-aug/new%20hero.mp4",
          poster:
            "https://cdn-luma.com/public/lumalabs.ai/flythroughs/14-aug/new%20hero%20optimized.png",
        },
        y =
          "https://cdn-luma.com/public/lumalabs.ai/flythroughs/14-aug/dark-plain.png",
        x = { boxShadow: "1px 4px 10px rgba(0, 0, 0, 0.25)" },
        w = "LUMA_AI_GENIE_PROMPT",
        b = "https://apps.apple.com/in/app/luma-ai/id1615849914";
    },
    95387: function (e, t, n) {
      "use strict";
      var r, i, a, o, s, l, u, c, d, h, p, m, f, g, v, y, x;
      n.d(t, {
        CA: function () {
          return y;
        },
        KM: function () {
          return d;
        },
        cB: function () {
          return h;
        },
        mS: function () {
          return i;
        },
      }),
        (function (e) {
          (e.OPENCV = "OPENCV"),
            (e.OPENCV_FISHEYE = "OPENCV_FISHEYE"),
            (e.PINHOLE = "PINHOLE"),
            (e.SIMPLE_PINHOLE = "SIMPLE_PINHOLE"),
            (e.RADIAL = "RADIAL"),
            (e.SIMPLE_RADIAL = "SIMPLE_RADIAL"),
            (e.EQUIRECTANGULAR = "EQUIRECTANGULAR");
        })(r || (r = {})),
        (function (e) {
          (e.Uploaded = "uploaded"),
            (e.GuidedObjectLoop = "GuidedObjectLoop"),
            (e.Freeform = "Freeform"),
            (e.Flythrough = "Flythrough"),
            (e.UploadedMobileiOS = "UploadedMobileiOS"),
            (e.UploadedExternal = "UploadedExternal"),
            (e.Generation = "generation"),
            (e.DataCollectionApp = "DataCollectionApp");
        })(i || (i = {})),
        (function (e) {
          (e.imagine3d = "imagine3d"), (e.captures = "captures");
        })(a || (a = {})),
        (function (e) {
          (e.sfm = "Preprocessing"),
            (e.sfm_done = "Preprocessing Complete"),
            (e.nerf = "Training NeRF"),
            (e.discretize_samples = "Generating"),
            (e.mesh = "Generating Meshes"),
            (e.render = "Rendering Video"),
            (e.failed = "Failed"),
            (e.done = "Done"),
            (e.partial_failure = "Partial Failure");
        })(o || (o = {})),
        (function (e) {
          (e.open = "open"),
            (e.public = "public"),
            (e.unlisted = "unlisted"),
            (e.private = "private");
        })(s || (s = {})),
        (function (e) {
          (e.new = "new"),
            (e.uploadingData = "uploading"),
            (e.complete = "complete");
        })(l || (l = {})),
        (function (e) {
          (e.dispatched = "dispatched"),
            (e.new = "new"),
            (e.failed = "failed"),
            (e.finished = "finished");
        })(u || (u = {})),
        (function (e) {
          (e.ASCENDING = "ASC"), (e.DESCENDING = "DESC");
        })(c || (c = {})),
        (function (e) {
          (e.video = "video"), (e.PhotoStudioSixAxis = "ps-six-axis");
        })(d || (d = {})),
        (function (e) {
          (e.capture = "capture"), (e.render = "render");
        })(h || (h = {})),
        (function (e) {
          (e.success = "success"), (e.error = "error");
        })(p || (p = {})),
        (function (e) {
          (e.uploading = "Uploading"),
            (e.upload_complete = "Upload Complete"),
            (e.upload_failed = "Upload failed"),
            (e.queued = "Queued"),
            (e.sfm = "Preprocessing"),
            (e.sfm_done = "Preprocessing Complete"),
            (e.nerf = "Training NeRF"),
            (e.discretize_samples = "Generating"),
            (e.mesh = "Generating Meshes"),
            (e.render = "Rendering Video"),
            (e.failed = "Failed"),
            (e.done = "Finished"),
            (e.partial_failure = "Partial Failure");
        })(m || (m = {})),
        (function (e) {
          (e.normal = "normal"),
            (e.fisheye = "fisheye"),
            (e.equirectangular = "equirectangular");
        })(f || (f = {})),
        (function (e) {
          (e.OrbitSpline = "OrbitSpline"),
            (e.Spline = "Spline"),
            (e.Linear = "Linear");
        })(g || (g = {})),
        (function (e) {
          (e.Cinematic = "cinematic"),
            (e.Drone = "drone"),
            (e.Handheld = "handheld"),
            (e.Orbit = "orbit"),
            (e.Oscillate = "oscillate"),
            (e.DollyZoom = "dollyZoom"),
            (e.Recorded = "recorded");
        })(v || (v = {})),
        (function (e) {
          (e.dispatched = "dispatched"),
            (e.new = "new"),
            (e.failed = "failed"),
            (e.finished = "finished");
        })(y || (y = {})),
        (function (e) {
          (e.captureDate = "captureDate"), (e.uploadedDate = "creationDate");
        })(x || (x = {}));
    },
    98869: function (e, t, n) {
      "use strict";
      n.d(t, {
        Mz: function () {
          return h;
        },
        d8: function () {
          return c;
        },
        store: function () {
          return u;
        },
      });
      var r = n(66593),
        i = n(81288);
      let a = [
        {
          title: "Create",
          code: "import requests\n\ncapture_title = \"My Capture Title Here\"\nauth_headers = {'Authorization': 'luma-api-key={key}'}\n\nresponse = requests.post(\"https://webapp.engineeringlumalabs.com/api/v2/capture\",\n                         headers=auth_headers,\n                         data={'title': capture_title})\ncapture_data = response.json()\nupload_url = capture_data['signedUrls']['source']\nslug = capture_data['capture']['slug']\n\nprint(capture_data)\nprint(\"Upload URL:\", upload_url)\nprint(\"Capture slug:\", slug)",
          content:
            "The first step is to create a capture. Be sure to pass a title. This will return a slug that you can use to upload your files. It will also return a storage bucket that you can use to upload your files & the capture object.",
        },
        {
          title: "Upload",
          code: "with open(\"my_video_or_zip\", \"rb\") as f:\n    payload = f.read()\n\n# upload_url from step (1)\nresponse = requests.put(upload_url, headers={'Content-Type': 'text/plain'}, data=payload)\n\n# Note: the payload should be bytes containing the file contents (as shown above)!\n# A common pitfall is uploading the file name as the file contents\n\nprint(response.text)",
          content:
            "Once you have created a capture, you can upload your files. You will need to upload the files to the storage bucket that is returned in the create step. You can upload video or images zip. Note: One can upload a max size of 5GB.",
        },
        {
          title: "Trigger",
          code: "# slug from Capture step\n\nauth_headers = {'Authorization': 'luma-api-key={key}'}\nresponse = requests.post(f\"https://webapp.engineeringlumalabs.com/api/v2/capture/{slug}\",\n                         headers=auth_headers)\n\nprint(response.text)",
          content:
            "Once you have uploaded your files, you can trigger the capture to be processed. It will return true if the capture was successfully triggered.",
        },
        {
          title: "Check and Download",
          code: "# slug from Capture step\n\nauth_headers = {'Authorization': 'luma-api-key={key}'}\nresponse = requests.get(f\"https://webapp.engineeringlumalabs.com/api/v2/capture/{slug}\",\n                        headers=auth_headers)\n\nprint(response.text)",
          content:
            "You can check the status of your capture by calling the capture endpoint. You can also download the capture by calling the download endpoint.",
        },
      ];
      var o = n(16257),
        s = n(95387);
      let l = {
          capture: void 0,
          userLimits: void 0,
          featuredCapturesGallery: [],
          featuredCapturesGalleryHasRemaining: !1,
          featuredCapturesGalleryLoading: !1,
          userCapturesGallery: [],
          userCapturesGalleryHasRemaining: !1,
          userCapturesGalleryLoading: !1,
          userSearchCapturesGallery: [],
          userSearchCapturesGalleryHasRemaining: !1,
          searchText: "",
          currentSearchText: "",
          userRendersGallery: [],
          userRendersGalleryHasRemaining: !1,
          userRendersGalleryLoading: !1,
          userSearchRendersGallery: [],
          userSearchRendersGalleryHasRemaining: !1,
          userRendersSearchText: "",
          userRendersSearchTextCurrent: "",
          internalUser: null,
          captures: [],
          capturesRemainging: 0,
          searchCaptures: [],
          searchCapturesRemainging: 0,
          capturesLoading: !1,
          searchCapturesLoading: !1,
          uploads: [],
          uploadProgress: 0,
          authStatus: void 0,
          showWelcomeScreen: void 0,
          current3dModel: void 0,
          current3dModelHovered: void 0,
          generatePrompt: "",
          generatePromptProcessing: !1,
          latestGallery: [],
          featuredGallery: [],
          userGallery: [],
          searchGallery: [],
          isTouchDevice: !1,
          currentTime: new Date(),
          autoCheckRunning: !1,
          userGalleryRemaining: 0,
          featuredGalleryRemaining: 0,
          latestGalleryRemaining: 0,
          searchGalleryRemaining: 0,
          generationLimits: void 0,
          globalCanGenerateFromDB: void 0,
          shareMode: !1,
          shareModalData: void 0,
          shareModalUrl: "",
          initialMode: void 0,
          isOwn: !1,
          thumb: void 0,
          showImagineAuth: !1,
          renderRuns: [],
          renderRunsRemainging: 0,
          renderRunsLoading: !1,
          renderRunsSearch: [],
          renderRunsSearchText: "",
          renderRunsSearchLoading: !1,
          renderRunsSearchRemainging: 0,
          captureGridMode: s.cB.capture,
        },
        u = (0, r.sj)(l),
        c = {
          background: "#ffffff",
          color: "#000000",
          showTitle: !0,
          loadBg: !0,
          logoPosition: "bottom-left",
          infoPosition: "bottom-right",
          showMenu: !1,
        },
        d = { loggedIn: void 0, user: void 0 },
        h = (0, r.sj)(d),
        p = {
          credits: {
            remaining: 0,
            used: 0,
            total: 0,
            singleCreditValueInUSD: o.Xs,
          },
          keys: [],
          remainingKeys: 0,
          purchases: [],
          purchasesRemainging: 0,
          loading: !0,
          error: void 0,
          alpha: !1,
          currentCode: a[0],
        };
      (0, r.sj)(p);
      let m = {
        phase: i.IJ.select,
        error: void 0,
        options: void 0,
        uploadingCaptureUuid: void 0,
        fileBlobUrl: void 0,
        progress: { percentage: 0 },
      };
      (0, r.sj)(m);
      let f = { uuid: void 0, options: void 0 };
      (0, r.sj)(f);
    },
    80517: function (e, t, n) {
      "use strict";
      n.d(t, {
        hP: function () {
          return h;
        },
        w7: function () {
          return d;
        },
        x4: function () {
          return c;
        },
      });
      var r,
        i,
        a = n(89956);
      n(45252), n(41775);
      var o = n(16257),
        s = n(98869),
        l = n(95834),
        u = n(40660);
      (a.Z.defaults.baseURL = o.uJ),
        (function (e) {
          (e.authenticated = "authenticated"),
            (e.waitlisted = "waitlisted"),
            (e.addedToWaitlist = "addedToWaitlist"),
            (e.inviteCodeRequired = "inviteCodeRequired"),
            (e.inviteCodeUsed = "inviteCodeUsed"),
            (e.inviteCodeInvalid = "inviteCodeInvalid"),
            (e.blocked = "blocked"),
            (e.deleted = "deleted"),
            (e.serverError = "serverError");
        })(r || (r = {})),
        (function (e) {
          (e.NotOnWaitlist = "not_on_waitlist"),
            (e.OnWaitlist = "on_waitlist"),
            (e.OnAllowlist = "on_allowlist"),
            (e.ExistingUser = "existing_user"),
            (e.OnDenylist = "on_denylist");
        })(i || (i = {}));
      let c = (e) => {
          (0, u.Cv)("Auth: login");
          let t = window.location.pathname.toString();
          (0, u.pj)(o.U_, t),
            new URL(window.location.href).searchParams.has("startTutorial") &&
              (0, u.pj)(o.N0, !0);
          let n = window.location.origin.includes("lumalabs.art")
            ? "&destination=art"
            : "";
          "apple" === e
            ? window.open(
                "https://webapp.engineeringlumalabs.com" +
                  "/api/v2/auth/apple?client=web".concat(n),
                "_self"
              )
            : "google" === e
            ? window.open(
                "https://webapp.engineeringlumalabs.com" +
                  "/api/v2/auth/google?client=web".concat(n),
                "_self"
              )
            : "discord" === e &&
              window.open(
                "https://webapp.engineeringlumalabs.com" +
                  "/api/v2/auth/discord?client=web".concat(n),
                "_self"
              );
        },
        d = async () => {
          (s.store.internalUser = null),
            (0, u.pj)(o.mQ, void 0),
            (0, u.pj)(o.pS, void 0),
            (0, u.pj)(o.OJ, void 0),
            (0, l.kT)("accessToken"),
            (0, l.kT)("refreshToken");
        },
        h = async (e) =>
          new Promise((t, n) => {
            navigator.locks.request(
              "getAccessToken",
              { mode: "exclusive" },
              async () => {
                try {
                  (0, u.Cv)("Acquiring access token lock");
                  let n = await p(e);
                  (0, u.Cv)("Released access token lock"), t(n);
                } catch (e) {
                  n(e);
                }
              }
            );
          }),
        p = async (e) => {
          try {
            let t = (0, l.ej)("accessToken");
            if (t) return "Bearer ".concat(t);
            {
              let t = (0, l.ej)("refreshToken");
              if (t) {
                let { accessToken: e } = await (0, l.Ov)(t);
                return "Bearer ".concat(e);
              }
              if (!0 !== e) throw (await d(), "Please log in again");
            }
          } catch (e) {
            console.error("Error getting access token");
          }
          if (!0 !== e) throw (await d(), "Please log in again");
          return "";
        };
    },
    95834: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ov: function () {
          return u;
        },
        d8: function () {
          return o;
        },
        ej: function () {
          return s;
        },
        jl: function () {
          return d;
        },
        kT: function () {
          return l;
        },
      });
      var r = n(89956),
        i = n(80517),
        a = n(40660);
      function o(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = ""
            .concat(encodeURIComponent(e), "=")
            .concat(encodeURIComponent(t));
        if (n.expires) {
          let e =
            n.expires instanceof Date ? n.expires.toUTCString() : n.expires;
          r += "; Expires=".concat(e);
        }
        n.path && (r += "; Path=".concat(n.path)),
          n.domain && (r += "; Domain=".concat(n.domain)),
          n.secure && (r += "; Secure"),
          (document.cookie = r);
      }
      function s(e) {
        for (let t of document.cookie.split(";")) {
          let [n, r] = t.trim().split("=");
          if (decodeURIComponent(n) === e) return decodeURIComponent(r);
        }
      }
      function l(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (t.expires = new Date(0).toUTCString()), (t.path = "/"), o(e, "", t);
      }
      let u = async (e) =>
          new Promise((t, n) => {
            navigator.locks.request(
              "exchangeToken",
              { mode: "exclusive" },
              async () => {
                try {
                  (0, a.Cv)("Acquiring token exchange lock");
                  let n = await c(e);
                  (0, a.Cv)("Released token exchange lock"), t(n);
                } catch (e) {
                  n(e);
                }
              }
            );
          }),
        c = async (e) => {
          try {
            let t = (
                await r.Z.post("/api/v2/auth/refresh", { refreshToken: e })
              ).data,
              n = t.accessToken,
              i = t.refreshToken,
              a = t.accessTokenLifetimeDuration,
              s = t.refreshTokenLifetimeDuration,
              l = new Date(Date.now()),
              u = l.getTime() + 1e3 * a - 5e3;
            l.setTime(u),
              o("accessToken", n, {
                expires: l.toUTCString(),
                secure: !0,
                path: "/",
              });
            let c = new Date(Date.now()),
              d = c.getTime() + 1e3 * s;
            return (
              c.setTime(d),
              o("refreshToken", i, {
                expires: c.toUTCString(),
                secure: !0,
                path: "/",
              }),
              { accessToken: n, refreshToken: i }
            );
          } catch (e) {
            throw (
              (console.error("Error refreshing tokens"),
              console.error(e),
              await (0, i.w7)(),
              "Please log in again")
            );
          }
        },
        d = () => {
          let e = s("refreshToken");
          return !!e && "string" == typeof e && "" !== e;
        };
    },
    41155: function (e, t, n) {
      "use strict";
      n.d(t, {
        b6: function () {
          return s;
        },
        pt: function () {
          return o;
        },
      });
      var r = n(89956);
      n(45252), n(40069), n(74714);
      var i = n(16257);
      n(95387), n(98869);
      var a = n(80517);
      n(40660), (r.Z.defaults.baseURL = i.uJ);
      let o = async (e) => {
          try {
            let { isAvaialble: t } = (
              await r.Z.get("/api/v2/users/username/".concat(e), {
                headers: { Authorization: await (0, a.hP)() },
              })
            ).data;
            return t;
          } catch (e) {
            throw e;
          }
        },
        s = async (e) =>
          (
            await r.Z.post(
              "/api/v2/users/username/",
              { username: e },
              { headers: { Authorization: await (0, a.hP)() } }
            )
          ).data;
    },
    40660: function (e, t, n) {
      "use strict";
      n.d(t, {
        Iv: function () {
          return f;
        },
        Cv: function () {
          return g;
        },
        Sv: function () {
          return s;
        },
        ac: function () {
          return b;
        },
        Hy: function () {
          return l;
        },
        gk: function () {
          return w;
        },
        fp: function () {
          return u;
        },
        ad: function () {
          return m;
        },
        G6: function () {
          return h;
        },
        b1: function () {
          return d;
        },
        t: function () {
          return x;
        },
        wY: function () {
          return v;
        },
        pj: function () {
          return c;
        },
        _v: function () {
          return o;
        },
      }),
        n(45252);
      var r = n(9910);
      n(20209),
        n(83265),
        n(24728),
        n(83112),
        n(82306),
        n(88728),
        n(49975),
        n(98869),
        n(59076),
        n(81288),
        n(93176),
        n(19116),
        n(74281),
        n(76493),
        n(41775);
      var i = n(16257);
      n(41155),
        n(43174),
        n(7055),
        n(11593),
        n(82281),
        n(49058),
        n(46066),
        n(30773),
        n(43465),
        n(56036),
        n(80517),
        n(44800),
        i.gc,
        i.gc,
        i.gc,
        n(26560),
        n(95387),
        new Date().toJSON().slice(0, 10);
      var a = n(28070);
      let o = (e) =>
          new Promise((t) => {
            setTimeout(() => {
              t();
            }, e);
          }),
        s = (e) => {
          try {
            window.open(e, "_self");
          } catch (e) {
            throw "Error downloading file";
          }
        };
      function l(e, t) {
        var n =
            "data:text/json;charset=utf-8," +
            encodeURIComponent(JSON.stringify(e)),
          r = document.createElement("a");
        r.setAttribute("href", n),
          r.setAttribute("download", t + ".json"),
          document.body.appendChild(r),
          r.click(),
          r.remove();
      }
      let u = (e) => {
          try {
            let t = localStorage.getItem(e);
            if (t) return JSON.parse(t);
            return;
          } catch (e) {
            return;
          }
        },
        c = (e, t) => {
          try {
            let n = JSON.stringify(t);
            localStorage.setItem(e, n);
          } catch (e) {
            throw "error parsing json";
          }
        },
        d = () => {
          try {
            return (
              window &&
              "ontouchstart" in window &&
              navigator &&
              navigator.maxTouchPoints > 0
            );
          } catch (e) {
            return !1;
          }
        },
        h = () => {
          try {
            return (
              !!navigator.userAgent &&
              /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
            );
          } catch (e) {
            return !1;
          }
        },
        p = () => !!navigator.userAgent && /iPhone/.test(navigator.userAgent),
        m = () => p() || h(),
        f = async (e) => {
          try {
            await navigator.clipboard.writeText(e);
          } catch (e) {
            console.error(e);
          }
        },
        g = (e, t) => {
          "true" === a.env.NEXT_PUBLIC_DEV_LOGS &&
            console.log(
              "%c%s %s",
              "color: white; background: #0A0A0A; padding: 8px; font-size: 12px; border-radius: 4px;",
              "[Dev Log]",
              void 0 !== t ? [e, " " + JSON.stringify(t)] : [e]
            );
        },
        v = (e) => {
          var t, n, r, i, a, o, s, l, u, c, d, h, p;
          return (
            "string" !=
              typeof (e =
                null !==
                  (p =
                    null !==
                      (h =
                        null !==
                          (d =
                            null !==
                              (c =
                                null !==
                                  (u =
                                    null !==
                                      (l =
                                        null !==
                                          (s =
                                            null == e
                                              ? void 0
                                              : null === (n = e.response) ||
                                                void 0 === n
                                              ? void 0
                                              : null === (t = n.data) ||
                                                void 0 === t
                                              ? void 0
                                              : t.error) && void 0 !== s
                                          ? s
                                          : null == e
                                          ? void 0
                                          : null === (i = e.response) ||
                                            void 0 === i
                                          ? void 0
                                          : null === (r = i.data) ||
                                            void 0 === r
                                          ? void 0
                                          : r.reason) && void 0 !== l
                                      ? l
                                      : null == e
                                      ? void 0
                                      : null === (o = e.response) ||
                                        void 0 === o
                                      ? void 0
                                      : null === (a = o.data) || void 0 === a
                                      ? void 0
                                      : a.payload) && void 0 !== u
                                  ? u
                                  : null == e
                                  ? void 0
                                  : e.error) && void 0 !== c
                              ? c
                              : null == e
                              ? void 0
                              : e.reason) && void 0 !== d
                          ? d
                          : null == e
                          ? void 0
                          : e.payload) && void 0 !== h
                      ? h
                      : null == e
                      ? void 0
                      : e.message) && void 0 !== p
                  ? p
                  : e) && (e = JSON.stringify(e)),
            e
          );
        },
        y =
          /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
        x = (e) => y.test(e),
        w = (e, t) => {
          var n;
          return null === (n = t.find((t) => t.type === e)) || void 0 === n
            ? void 0
            : n.url;
        },
        b = async (e, t, n) => {
          if (h()) window.open(e, "_blank");
          else
            try {
              let e = document.querySelector("model-viewer"),
                t = await e.exportScene(),
                r = new File([t], null != n ? n : "model.glb"),
                i = document.createElement("a");
              (i.download = r.name),
                (i.href = URL.createObjectURL(r)),
                (i.style.display = "none"),
                document.body.appendChild(i),
                i.click();
            } catch (t) {
              window.open(e, "_blank");
            }
          (0, r.WA)(t);
        };
    },
    7055: function (e, t, n) {
      "use strict";
      n.d(t, {
        BZ: function () {
          return m;
        },
        Qc: function () {
          return l;
        },
        an: function () {
          return h;
        },
        q$: function () {
          return p;
        },
      });
      var r = n(89956);
      n(74714), n(81288), n(56036);
      var i = n(95387),
        a = n(98869),
        o = n(80517),
        s = n(40660);
      let l = async () => {
          try {
            let e = await (0, o.hP)(),
              t = await r.Z.get("/api/v3/users/limits", {
                headers: { authorization: e },
              }),
              n = t.data.error;
            if (n) throw n;
            let i = t.data.response;
            a.store.userLimits = i;
          } catch (e) {
            throw (
              (console.error(e), (a.store.userLimits = void 0), (0, s.wY)(e))
            );
          }
        },
        u = async (e) => {
          let t = await (0, o.hP)(),
            n = await r.Z.post("/api/v3/renders/trajectory", e, {
              headers: { authorization: t },
            }),
            i = n.data.error;
          if (i) throw i;
          let a = n.data.response;
          if (!a) throw "Error creating trajectory";
          return a;
        },
        c = async (e, t) => {
          let n = JSON.stringify(t),
            i = new File(
              [
                new Blob([new TextEncoder().encode(n)], {
                  type: "application/json;charset=utf-8",
                }),
              ],
              "session.json"
            );
          await r.Z.put(e, i);
        },
        d = async (e) => {
          let t = await (0, o.hP)(),
            n = await r.Z.post("/api/v3/renders", e, {
              headers: { authorization: t },
            }),
            i = n.data.error;
          if (i) throw i;
          let a = n.data.response;
          if (!a) throw "Error creating render";
          return a;
        },
        h = async (e, t) => {
          try {
            let n = await u(e),
              r = n.url;
            await c(r, t);
            let i = { uuid: n.uuid, ...e };
            await d(i);
          } catch (e) {
            throw (0, s.wY)(e);
          }
        },
        p = async (e, t) => {
          try {
            let { skip: n, take: i, isOwner: a, order: s } = null != t ? t : {},
              l = await (0, o.hP)(),
              u = await r.Z.get("/api/v3/captures/".concat(e, "/renders"), {
                params: { skip: n, take: i, isOwner: a, order: s },
                headers: { authorization: l },
              }),
              c = u.data.error;
            if (c) throw c;
            if (!u.data.response) throw "Error getting renders";
            return u.data;
          } catch (e) {
            throw (0, s.wY)(e);
          }
        },
        m = async () => {
          var e;
          let t = await r.Z.get("/api/v3/captures/featured", {
              params: { includes: i.mS.Flythrough },
            }),
            n =
              null == t
                ? void 0
                : null === (e = t.data) || void 0 === e
                ? void 0
                : e.response;
          if (!n) throw "Error getting featured flythroughs";
          return n;
        };
    },
    74281: function (e, t, n) {
      "use strict";
      n.d(t, {
        D: function () {
          return r;
        },
      });
      let r = (e, t) =>
        new Promise((r, i) => {
          let a = new Worker(n.tu(new URL(n.p + n.u(1565), n.b))),
            o = (e) => {
              let n = e.data;
              "string" == typeof n
                ? (a.removeEventListener("message", o), r(n))
                : "number" == typeof n
                ? null == t || t(n)
                : "object" == typeof n && n.error && i(n.error);
            };
          a.addEventListener("message", o), a.postMessage(e);
        });
    },
    94317: function (e, t, n) {
      "use strict";
      var r;
      n.d(t, {
        j: function () {
          return r;
        },
        u: function () {
          return i;
        },
      }),
        (function (e) {
          (e[(e.Always = 0)] = "Always"),
            (e[(e.OnUserChange = 1)] = "OnUserChange");
        })(r || (r = {}));
      class i {
        watch(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2];
          return (
            this.callbacks.push({ callback: e, filter: t }),
            n && e(this._value, this._value),
            { unwatch: () => this.unwatch(e) }
          );
        }
        unwatch(e) {
          let t = 0;
          for (
            ;
            t < this.callbacks.length && this.callbacks[t].callback !== e;
            t++
          );
          this.callbacks.splice(t, 1);
        }
        setValue(e, t) {
          let n = this._value;
          this._value = e;
          for (let r = 0; r < this.callbacks.length; r++)
            (null != t &&
              this.callbacks[r].filter !== t &&
              0 !== this.callbacks[r].filter) ||
              this.callbacks[r].callback(e, n);
        }
        getValue() {
          return this._value;
        }
        constructor(e) {
          (this.callbacks = []), (this._value = e);
        }
      }
    },
    41775: function (e, t, n) {
      "use strict";
      var r = n(78014),
        i = n.n(r);
      class a {
        constructor() {
          (this.initPromise = null),
            (this.ensureInitialized = () => (
              null == this.initPromise &&
                (this.initPromise = new Promise((e, t) => {
                  let n = "5605fd5eb4a607ba5b575d93b8d63527";
                  if ("string" != typeof n) {
                    e();
                    return;
                  }
                  i().init(n, {
                    ignore_dnt: !0,
                    autotrack: !0,
                    api_host: "https://capybara.sandbox.labs.lumalabs.ai/",
                    loaded: () => {
                      e();
                    },
                  });
                })),
              this.initPromise
            )),
            (this.identify = async (e) => {
              await this.ensureInitialized(), i().identify(e);
            }),
            (this.ueName = "Unreal Engine"),
            (this.ueImpression = () => {
              try {
                i().track(this.ueName, { visited: !0 });
              } catch (e) {
                console.error("Error in ueImpression: ", e);
              }
            }),
            (this.uePlugin = () => {
              i().track(this.ueName, { plugin: "download" });
            }),
            (this.ueFieldsFile = (e) => {
              i().track(this.ueName, { fieldFile: e });
            }),
            (this.ueGaussianSplat = (e) => {
              i().track(this.ueName, { splatFile: e });
            }),
            (this.ueFieldsFileReRun = (e) => {
              i().track(this.ueName, { reRun: e });
            }),
            (this.ueLink = (e) => {
              i().track(this.ueName, { slug: e });
            });
        }
      }
      new a();
    },
    9452: function (e, t, n) {
      "use strict";
      n.d(t, {
        A6: function () {
          return s;
        },
        Dv: function () {
          return x;
        },
        FO: function () {
          return u;
        },
        Mv: function () {
          return p;
        },
        NQ: function () {
          return y;
        },
        Uw: function () {
          return b;
        },
        _y: function () {
          return v;
        },
        gr: function () {
          return h;
        },
        h5: function () {
          return o;
        },
        i6: function () {
          return d;
        },
        mG: function () {
          return c;
        },
        qf: function () {
          return g;
        },
        sv: function () {
          return f;
        },
      });
      var r = n(91344),
        i = n(18306),
        a = n(94317);
      let o = { fov: 60, near: 0.01, far: 1e3 },
        s = new a.u(!0),
        l = null,
        u = () =>
          (l =
            null != l
              ? l
              : new Promise((e, t) => {
                  let n = setInterval(() => {
                    var t;
                    (null === (t = window.luma) || void 0 === t
                      ? void 0
                      : t.options) != null &&
                      (clearInterval(n), e(window.luma));
                  }, 5);
                }));
      function c(e) {
        let t = window.luma.camera.center,
          n = window.luma.camera.right,
          r = window.luma.camera.up,
          i = window.luma.camera.forward;
        return (
          e.set(
            n[0],
            r[0],
            -i[0],
            t[0],
            -n[1],
            -r[1],
            i[1],
            -t[1],
            -n[2],
            -r[2],
            i[2],
            -t[2],
            0,
            0,
            0,
            1
          ),
          e
        );
      }
      function d(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : new r.Vector3();
        return t.set(e[0], -e[1], -e[2]), t;
      }
      function h(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return (t[0] = e.x), (t[1] = -e.y), (t[2] = -e.z), t;
      }
      function p(e) {
        let t = e.toArray();
        return (
          (t[1] *= -1),
          (t[2] *= -1),
          (t[5] *= -1),
          (t[6] *= -1),
          (t[8] *= -1),
          (t[13] *= -1),
          (t[14] *= -1),
          t
        );
      }
      function m(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : new r.Matrix4();
        return (
          (e[1] *= -1),
          (e[2] *= -1),
          (e[5] *= -1),
          (e[6] *= -1),
          (e[8] *= -1),
          (e[13] *= -1),
          (e[14] *= -1),
          t.fromArray(e),
          t
        );
      }
      function f(e) {
        (e.fov = o.fov),
          (e.near = o.near),
          (e.far = o.far),
          (e.parent = null),
          e.updateProjectionMatrix(),
          (window.luma.camera.origin = [0, 0, 0]),
          window.luma.camera.resetToModel(),
          g();
        let t = i.Or.getKeyframeFromLumaCamera(0, 0);
        e.setFromKeyframe(t, !1);
      }
      function g() {
        (window.luma.camera.azimuth_bounds_max = 1 / 0),
          (window.luma.camera.azimuth_bounds_min = -1 / 0),
          (window.luma.camera.radius_bounds_max = 1 / 0),
          (window.luma.camera.radius_bounds_min = -1 / 0),
          (window.luma.camera.elevation_bounds_max = 1 / 0),
          (window.luma.camera.elevation_bounds_min = -1 / 0);
      }
      function v(e) {
        null != window.luma &&
          null != window.luma.options &&
          ((e =
            null != e
              ? e
              : new r.Box3(
                  new r.Vector3(-1 / 0, -1 / 0, -1 / 0),
                  new r.Vector3(1 / 0, 1 / 0, 1 / 0)
                )),
          (window.luma.options.crop_min = [e.min.x, -e.max.y, -e.max.z]),
          (window.luma.options.crop_max = [e.max.x, -e.min.y, -e.min.z]));
      }
      function y(e) {
        null != window.luma &&
          null != window.luma.options &&
          (null == e && (e = new r.Matrix4()),
          (window.luma.options.model_transform = p(
            e.clone().scale(new r.Vector3(1, -1, 1))
          )));
      }
      function x() {
        return null == window.luma || null == window.luma.options
          ? new r.Matrix4()
          : m(window.luma.options.model_transform).scale(
              new r.Vector3(1, -1, 1)
            );
      }
      function w(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e-6;
        if (null == e || null == t || e.length !== t.length) return !1;
        for (let r = 0; r < e.length; r++)
          if (Math.abs(e[r] - t[r]) > n) return !1;
        return !0;
      }
      function b(e, t, n) {
        Array.isArray(n) ? w(n, e[t]) || (e[t] = n) : e[t] !== n && (e[t] = n);
      }
    },
    78643: function (e) {
      e.exports = { video: "Video_video__m27h9" };
    },
    89358: function (e) {
      e.exports = {
        active: "Crop_active__fEwx7",
        slfEditorCanvas: "Crop_slfEditorCanvas__gHYiU",
      };
    },
    60705: function (e) {
      e.exports = { slfEditorCanvas: "CameraPaths_slfEditorCanvas__x2ppz" };
    },
    17708: function (e) {
      e.exports = {
        timelineContainer: "CurveMode_timelineContainer__csh5i",
        timelineAxis: "CurveMode_timelineAxis__V7QDG",
        axisTick: "CurveMode_axisTick__We8HB",
        active: "CurveMode_active__OGQas",
      };
    },
    59165: function (e) {
      e.exports = {
        frameGuideContainer: "FrameGuide_frameGuideContainer__b3kXw",
        frameGuide: "FrameGuide_frameGuide__6GsVC",
      };
    },
    42098: function (e) {
      e.exports = {
        keyframe: "KeyframeComponent_keyframe__liFxh",
        keyframeShape: "KeyframeComponent_keyframeShape__Bz8Va",
        selected: "KeyframeComponent_selected__InR95",
        dragging: "KeyframeComponent_dragging__F4_FO",
        keyframeIcon: "KeyframeComponent_keyframeIcon__xoBw8",
      };
    },
    8690: function (e) {
      e.exports = {
        bar: "ScrubBar_bar__OiiEz",
        barFill: "ScrubBar_barFill__j2bGj",
        handle: "ScrubBar_handle__IQndW",
        thin: "ScrubBar_thin__9y4A8",
        dragging: "ScrubBar_dragging__yAsbS",
        keyframeUI: "ScrubBar_keyframeUI__fsnST",
        keyframeButtons: "ScrubBar_keyframeButtons__ISYA3",
        keyframeIcon: "ScrubBar_keyframeIcon__IgYcx",
        keyboardShortcut: "ScrubBar_keyboardShortcut__1WpQz",
      };
    },
    2291: function (e) {
      e.exports = {
        imageContainer: "RenderThumbnail_imageContainer__Z8fhb",
        image: "RenderThumbnail_image__Kaahk",
        imageAnime: "RenderThumbnail_imageAnime__cOaMz",
        opacityAnimation: "RenderThumbnail_opacityAnimation__5_Iwf",
        videoContainer: "RenderThumbnail_videoContainer__H5zZv",
        link: "RenderThumbnail_link__A_i6C",
        masterContainer: "RenderThumbnail_masterContainer__yG7WC",
        text: "RenderThumbnail_text__c_qV8",
        download: "RenderThumbnail_download__uz56m",
      };
    },
    49618: function (e) {
      e.exports = {
        rendersMenu: "RendersMenu_rendersMenu__A9JLV",
        collapsed: "RendersMenu_collapsed__vnnWM",
        rendersMenuHeader: "RendersMenu_rendersMenuHeader__f9GbX",
        rendersList: "RendersMenu_rendersList__kHY5f",
        "render-item": "RendersMenu_render-item__1ui73",
        videoContainer: "RendersMenu_videoContainer__tVkyn",
        videoPreview: "RendersMenu_videoPreview__B71jD",
      };
    },
    55074: function (e) {
      e.exports = { lockOverlay: "SelectionContextMenu_lockOverlay__QQB8r" };
    },
    84553: function (e) {
      e.exports = { focusButtons: "FocusButtons_focusButtons__WJea3" };
    },
    35255: function (e) {
      e.exports = { iconButton: "IconButtonV2_iconButton__ctr3L" };
    },
    34297: function (e) {
      e.exports = {
        inputNumber: "Input_inputNumber__dQOiT",
        numberInput: "Input_numberInput__GXFAx",
        inputXYZ: "Input_inputXYZ__w7OYr",
        inlineLabel: "Input_inlineLabel__78oCn",
        disabled: "Input_disabled___4axx",
        inputRadio: "Input_inputRadio__qVxR8",
        selected: "Input_selected__Q6pmD",
        units: "Input_units__rRE74",
        iconButtons: "Input_iconButtons__EmeFH",
        iconButton: "Input_iconButton__jkp9W",
        icon: "Input_icon__TtEAW",
        label: "Input_label__DHA13",
      };
    },
    11859: function (e) {
      e.exports = {
        menu: "Menu_menu__tsnW2",
        collapsed: "Menu_collapsed__EX7oL",
        sectionContent: "Menu_sectionContent__7TIwz",
        clearMenu: "Menu_clearMenu__qRama",
        inputRow: "Menu_inputRow__SkvVt",
      };
    },
    82284: function (e) {
      e.exports = { pageTabs: "PageTabs_pageTabs__qku1P" };
    },
    82281: function (e) {
      e.exports = { fullWidthHeight: "Video_fullWidthHeight__Jfu64" };
    },
    44700: function (e) {
      e.exports = { button: "GSUpgrade_button__QnebW" };
    },
    26560: function (e) {
      e.exports = {
        button: "ShowingPreview_button__gUj3F",
        modal: "ShowingPreview_modal__Jl_Qc",
        insideModal: "ShowingPreview_insideModal__FpY0h",
      };
    },
    11593: function (e) {
      e.exports = {
        icon: "slug_icon__ggbyr",
        adaptiveWidth: "slug_adaptiveWidth__XcM19",
        selected: "slug_selected__1xmFd",
        noFill: "slug_noFill__UoGkA",
        topRight: "slug_topRight__7s8AW",
        topLeft: "slug_topLeft__A8QzW",
        infoView: "slug_infoView__q3KKH",
        infoViewAlert: "slug_infoViewAlert__NP0wY",
        menu: "slug_menu__tz_t5",
        menuIcon: "slug_menuIcon__uoEHt",
        active: "slug_active__xc1Xl",
        infoIcon: "slug_infoIcon__3VX3D",
        infoModal: "slug_infoModal__sPsTP",
        infoModalFadeIn: "slug_infoModalFadeIn__LyAdt",
      };
    },
  },
]);
