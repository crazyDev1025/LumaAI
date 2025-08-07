"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7166],
  {
    47166: function (e, a, t) {
      t.r(a),
        t.d(a, {
          apiPageHeaderClass: function () {
            return x;
          },
          default: function () {
            return h;
          },
        });
      var s = t(20209),
        i = t(45313),
        r = t(46066),
        n = t(83112),
        l = t(41013),
        o = t(77781),
        c = t(95211),
        m = t(35928),
        d = t(10653);
      let p = (e) => {
          let { videoRef: a, containerRef: t } = e,
            s = (0, m.R)(t);
          ((0, n.useRef)(s).current = s),
            (0, n.useEffect)(() => {
              if (s) {
                var e;
                null === (e = a.current) || void 0 === e || e.play();
              }
            }, [s]);
        },
        x =
          "text-[64px] max-sm:text-[35px] max-sm:tracking-[-1.75px] leading-[115%] tracking-[-3.2px] text-balance";
      function h() {
        let [e, a] = (0, n.useState)(!1),
          t = (0, n.useRef)(null),
          m = (0, n.useRef)(null);
        return (
          p({ videoRef: m, containerRef: t }),
          (0, s.jsxs)("div", {
            className: "mx-auto box-content max-w-7xl px-6 pt-8 md:px-8",
            children: [
              (0, s.jsx)("h1", {
                className: (0, l.m6)(
                  x,
                  "mx-auto mb-[30px] max-w-[800px] text-center"
                ),
                children:
                  "Creative Intelligence platform for magical AI products",
              }),
              (0, s.jsx)("div", {
                className: "mx-auto max-w-[600px]",
                children: (0, s.jsxs)("p", {
                  className: "text-center text-[22px]",
                  children: [
                    "Build and scale creative products with the world's most popular and intuitive ",
                    (0, s.jsx)("b", { children: "Video" }),
                    " and ",
                    (0, s.jsx)("b", { children: "Image" }),
                    " generation models with Dream API",
                  ],
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "flex flex-col items-center justify-center gap-[24px] py-[74px]",
                children: (0, s.jsx)(d.BlackButton, {
                  href: c.Z.apiDashboard,
                  className:
                    "text-[32px] max-sm:px-[24px] max-sm:py-[12px] max-sm:text-[24px]",
                  children: "Start Building",
                }),
              }),
              (0, s.jsx)("div", {
                className:
                  "mb-[-3px] flex flex-col items-center max-sm:mb-[-2px]",
                children: (0, s.jsx)("div", {
                  style: {
                    maxWidth: 706,
                    width: "80%",
                    aspectRatio: 1360 / 752,
                  },
                  children: (0, s.jsx)(o.d, {
                    src: "https://storage.cdn-luma.com/public/dream-machine/api-page/api-hero.mp4",
                    poster:
                      "https://storage.cdn-luma.com/public/dream-machine/api-page/api-hero.png",
                    className: "h-full w-full",
                  }),
                }),
              }),
              (0, s.jsx)(d.Hr, {
                className: "relative z-10 mb-[170px] max-sm:mb-[200px]",
              }),
              (0, s.jsx)("h2", {
                className: (0, l.m6)(
                  x,
                  "mb-[90px] text-center max-sm:mb-[60px]"
                ),
                children: "Find a plan that fits you",
              }),
              (0, s.jsxs)("div", {
                className:
                  "mx-auto flex justify-center gap-[20px] max-lg:flex-col max-lg:items-center",
                children: [
                  (0, s.jsxs)(d._b, {
                    className: "",
                    video:
                      "https://storage.cdn-luma.com/public/dream-machine/api-page/small-flower.mp4",
                    poster:
                      "https://storage.cdn-luma.com/public/dream-machine/api-page/small-flower.jpg",
                    children: [
                      (0, s.jsx)("h3", {
                        className:
                          "mb-[28px] text-[48px] max-sm:mb-[16px] max-sm:text-[28px]",
                        children: "Build",
                      }),
                      (0, s.jsx)("p", {
                        className: "max-sm:text-[18px]",
                        children:
                          "Access state of the art image and and video generative features with easy to use end point. Build and iterate video generation for your business, start plans includes:",
                      }),
                      (0, s.jsx)(d.Hr, {
                        className: "my-[40px] max-sm:my-[22px]",
                      }),
                      (0, s.jsx)("div", {
                        className: "max-w-[300px]",
                        children: (0, s.jsxs)("ul", {
                          className: "list-disc pl-[1em] max-sm:text-[18px]",
                          children: [
                            (0, s.jsx)("li", {
                              children: "Intelligent instruction system",
                            }),
                            (0, s.jsx)("li", {
                              children: "Text to video, Image to Video",
                            }),
                            (0, s.jsx)("li", {
                              children: "Camera Control, Extend, Loop",
                            }),
                            (0, s.jsx)("li", {
                              children: "Billed via usage credits",
                            }),
                            (0, s.jsx)("li", {
                              children: "Hyperfast generation time",
                            }),
                            (0, s.jsx)("li", {
                              children: "You own your inputs and outputs",
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: "flex-grow max-sm:min-h-[190px]",
                      }),
                      (0, s.jsx)(d.BlackButton, {
                        href: c.Z.apiDashboard,
                        children: "Start Building",
                      }),
                    ],
                  }),
                  (0, s.jsxs)(d._b, {
                    video:
                      "https://storage.cdn-luma.com/public/dream-machine/api-page/2-flower-rotate.mp4",
                    className: "bg-[#E3E3E1] lg:mt-[194px]",
                    children: [
                      (0, s.jsx)("h3", {
                        className:
                          "mb-[28px] text-[48px] max-sm:mb-[16px] max-sm:text-[28px]",
                        children: "Scale",
                      }),
                      (0, s.jsx)("p", {
                        className: "max-sm:text-[18px]",
                        children:
                          "Scale your creative AI products with higher rate limits and hands-on support from the Dream team.",
                      }),
                      (0, s.jsx)(d.Hr, {
                        className: "my-[40px] max-sm:my-[22px]",
                      }),
                      (0, s.jsx)("div", {
                        className: "max-w-[300px]",
                        children: (0, s.jsxs)("ul", {
                          className: "list-disc pl-[1em] max-sm:text-[18px]",
                          children: [
                            (0, s.jsx)("li", {
                              children: "All Build tier capabilities",
                            }),
                            (0, s.jsx)("li", {
                              children: "Higher rate limits",
                            }),
                            (0, s.jsx)("li", {
                              children: "Hyperfast generation time",
                            }),
                            (0, s.jsx)("li", {
                              children: "Onboarding support",
                            }),
                            (0, s.jsx)("li", {
                              children: "Ongoing engineering support",
                            }),
                            (0, s.jsx)("li", {
                              children: "Billed via monthly invoices",
                            }),
                            (0, s.jsx)("li", {
                              children: "You own your inputs and outputs",
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: "flex-grow max-sm:min-h-[190px]",
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                          (0, s.jsx)(d.BlackButton, {
                            href: c.Z.enterprise,
                            transparent: !0,
                            className: "bg-[#e3e3e1]",
                            children: "Learn More",
                          }),
                          (0, s.jsx)(d.BlackButton, {
                            href: c.Z.apiTalkToUs,
                            children: "Talk to us",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(d.Hr, { className: "mb-[90px] mt-[140px]" }),
              (0, s.jsxs)("h2", {
                className: (0, l.m6)(
                  x,
                  "mb-[40px] text-center max-sm:mb-[20px]"
                ),
                children: [
                  "Dream Ray2",
                  (0, s.jsx)("br", {}),
                  "Video Model Capabilities",
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "mb-[40px] flex justify-center gap-4 max-sm:mb-[20px]",
                children: [
                  (0, s.jsx)(d.BlackButton, {
                    href: "https://lumalabs.ai/ray",
                    transparent: !0,
                    className: "border-none bg-[#e3e3e1]",
                    children: "Learn more",
                  }),
                  (0, s.jsx)(d.BlackButton, {
                    href: "https://docs.lumalabs.ai/reference/creategeneration",
                    children: "Build with Ray",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "mb-[40px] flex w-full items-center justify-center max-sm:mb-[20px]",
                children: [
                  (0, s.jsx)("video", {
                    src: "/static.cdn-luma.com/files/site/api/ray2/RAY2%20API%20Launch_smaller.mp4",
                    className:
                      "hidden h-auto w-full overflow-hidden rounded-md sm:block sm:w-[100%]",
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                  }),
                  (0, s.jsx)("video", {
                    src: "/static.cdn-luma.com/files/site/api/ray2/RAY2%20API%20Launch%20Twitter_smaller.mp4",
                    className:
                      "h-auto w-full overflow-hidden rounded-md sm:hidden sm:w-[100%]",
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "mb-[40px] flex flex-col items-start justify-between p-4 max-sm:mb-[20px] sm:flex-row",
                children: [
                  (0, s.jsxs)("p", {
                    className: "text-3xl font-thin text-gray-800",
                    children: [
                      "Production Ready ",
                      (0, s.jsx)("br", {}),
                      " Frontier text to Video Model",
                    ],
                  }),
                  (0, s.jsx)("p", {
                    className: "max-w-md text-base text-gray-600",
                    children:
                      "Ray2 marks the beginning of a new generation of video models capable of producing fast coherent motion, ultra-realistic details, and logical event sequences. This increases the success rate of usable generations and makes videos generated by Ray2 substantially more production-ready.",
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "capabilities flex flex-col gap-[20px]",
                children: (0, s.jsxs)("div", {
                  className:
                    "mb-[100px] flex gap-[20px] max-md:mb-[20px] max-md:flex-col max-md:items-center max-md:gap-[120px]",
                  children: [
                    (0, s.jsx)(d.Td, {
                      aspect: "".concat(748 / 540),
                      title: "Natural Motion",
                      description:
                        "Generate action-packed shots from simple text. From high-speed car chases to dynamic human action, Ray2 brings a whole new level of motion fidelity. Smooth, cinematic, and jaw-dropping—transform your vision into reality.",
                      video:
                        "/static.cdn-luma.com/files/site/api/ray2/motion.mp4",
                    }),
                    (0, s.jsx)(d.Td, {
                      aspect: "".concat(748 / 540),
                      title: "Storytelling",
                      description:
                        "Tell your story with stunning, cinematic visuals. Ray2 lets you craft breathtaking scenes with precise camera movements—sweeping panoramas, intimate close-ups, and dynamic tracking shots—all from text.",
                      video:
                        "/static.cdn-luma.com/files/site/api/ray2/Cinematic.mp4",
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("div", {
                className: "capabilities flex flex-col gap-[20px]",
                children: (0, s.jsxs)("div", {
                  className:
                    "mb-[100px] flex gap-[20px] max-md:mb-[20px] max-md:flex-col max-md:items-center max-md:gap-[120px]",
                  children: [
                    (0, s.jsx)(d.Td, {
                      aspect: "".concat(748 / 540),
                      title: "Content Creation",
                      description:
                        "Elevate your content creation toolkit with Ray2. Whether for product promos, service showcases, or storytelling, generate high-quality video clips in seconds. Engage audiences, boost brand appeal, and create with ease.",
                      video:
                        "/static.cdn-luma.com/files/site/api/ray2/Content.mp4",
                    }),
                    (0, s.jsx)(d.Td, {
                      aspect: "".concat(748 / 540),
                      title: "Visual Effects",
                      description:
                        "Incorporate visual effects with efficiency. Ray2 helps generate pre-visualizations, realistic backgrounds, and initial VFX sequences—all without extensive location shoots. Cut costs, keep quality.",
                      video:
                        "/static.cdn-luma.com/files/site/api/ray2/visual%20effect.mp4",
                    }),
                  ],
                }),
              }),
              (0, s.jsx)(d.Hr, { className: "mb-[90px] mt-[140px]" }),
              (0, s.jsxs)("h2", {
                className: (0, l.m6)(
                  x,
                  "mb-[40px] text-center max-sm:mb-[20px]"
                ),
                children: [
                  "Dream Photon",
                  (0, s.jsx)("br", {}),
                  "Image Model Capabilities",
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "mb-[40px] flex justify-center gap-4 max-sm:mb-[20px]",
                children: [
                  (0, s.jsx)(d.BlackButton, {
                    href: "https://lumalabs.ai/photon",
                    transparent: !0,
                    className: "border-none bg-[#e3e3e1]",
                    children: "Learn more",
                  }),
                  (0, s.jsx)(d.BlackButton, {
                    href: "https://docs.lumalabs.ai/reference/generateimage",
                    children: "Build with Photon",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "capabilities flex flex-col gap-[20px]",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "mb-[100px] flex gap-[20px] max-md:mb-[20px] max-md:flex-col max-md:items-center max-md:gap-[120px]",
                    children: [
                      (0, s.jsx)(d.Td, {
                        aspect: "".concat(1220 / 880),
                        title:
                          "State of the art creative output from realism to stylistic",
                        poster:
                          "/static.cdn-luma.com/files/api-landing/creative_output_poster.jpg",
                        description:
                          "Dream Photon delivers industry-specific visual excellence, crafting images that align perfectly with professional standards - not just generic AI art. From marketing to creative design, each generation is purposefully tailored to your industry's unique requirements. Learn more",
                        video:
                          "/static.cdn-luma.com/files/api-landing/creative_output_v_comp.mp4",
                      }),
                      (0, s.jsx)(d.Td, {
                        aspect: "".concat(1220 / 880),
                        title:
                          "State of the art prompt following and text generation",
                        poster:
                          "/static.cdn-luma.com/files/api-landing/prompt_following_poster.jpg",
                        description:
                          "Dream Photon sets a new standard in visual precision. Its remarkable understanding of your prompts ensures every element - colors, compositions, and even text - is generated with unprecedented accuracy, exactly as you envision.",
                        video:
                          "/static.cdn-luma.com/files/api-landing/prompt_following_comp.mp4",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "mb-[100px] flex flex-col items-center",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "w-fit min-w-full overflow-hidden rounded-[12px] border border-black max-md:scale-[0.8] max-sm:scale-[0.56]",
                        children: (0, s.jsxs)("table", {
                          className: "w-full",
                          children: [
                            (0, s.jsx)("thead", {
                              children: (0, s.jsxs)("tr", {
                                children: [
                                  (0, s.jsx)("th", {
                                    className:
                                      "border border-[#595959] p-4 text-left font-normal md:p-2",
                                    children: "Resolution/Model",
                                  }),
                                  (0, s.jsx)("th", {
                                    className:
                                      "border border-[#595959] p-4 text-left font-normal md:p-2",
                                    children: "Stable Diffusion 3.5",
                                  }),
                                  (0, s.jsx)("th", {
                                    className:
                                      "border border-[#595959] p-4 text-left font-normal md:p-2",
                                    children: "Ideogram",
                                  }),
                                  (0, s.jsx)("th", {
                                    className:
                                      "border border-[#595959] p-4 text-left font-normal md:p-2",
                                    children: "Midjourney",
                                  }),
                                  (0, s.jsx)("th", {
                                    className:
                                      "border border-[#595959] p-4 text-left font-normal md:p-2",
                                    children: "Flux 1.1",
                                  }),
                                  (0, s.jsx)("th", {
                                    className:
                                      "border border-[#595959] p-4 text-left font-bold md:p-2",
                                    children: "Dream Photon",
                                  }),
                                ],
                              }),
                            }),
                            (0, s.jsxs)("tbody", {
                              children: [
                                (0, s.jsxs)("tr", {
                                  children: [
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "1080p",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "N/A",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "\xa2 6.0",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "\xa2 5.0",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "\xa2 6.0",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "\xa2 1.6",
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("tr", {
                                  children: [
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "1080p fast",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "N/A",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "N/A",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "N/A",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "N/A",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "\xa2 0.4",
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("tr", {
                                  children: [
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "720p (coming soon)",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "\xa2 6.5",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "N/A",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "N/A",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "\xa2 5.0",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "\xa2 0.8",
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("tr", {
                                  children: [
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "720p fast (coming soon)",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "\xa2 4.0",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "N/A",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "N/A",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "\xa2 2.5",
                                    }),
                                    (0, s.jsx)("td", {
                                      className:
                                        "border border-[#595959] p-4 md:p-2",
                                      children: "\xa2 0.2",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "mt-[68px] flex w-full flex-row justify-between gap-16 max-md:mt-[20px] max-md:max-w-[500px]",
                        children: [
                          (0, s.jsxs)("h3", {
                            className: "text-[36px] max-md:text-[24px]",
                            children: [
                              "800%",
                              (0, s.jsx)("br", {}),
                              "Faster & Cheaper",
                            ],
                          }),
                          (0, s.jsxs)("p", {
                            className: "text-[16px]",
                            children: [
                              "Dream Image Model is built on our unique universal fusion model",
                              (0, s.jsx)("br", {}),
                              "architecture (same as our video model) and brings",
                              (0, s.jsx)("br", {}),
                              "groundbreaking efficiency through our research, without ever",
                              (0, s.jsx)("br", {}),
                              "compromising quality.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "mb-[100px] flex items-center gap-[20px] max-md:flex-col max-md:items-center max-md:gap-[120px]",
                    children: [
                      (0, s.jsx)(d.Td, {
                        aspect: "".concat(1220 / 880),
                        title: "Character reference",
                        poster:
                          "/static.cdn-luma.com/files/api-landing/character_poster.jpg",
                        description:
                          "Generate consistent character variations from a single reference photo. Dream Photon maintains precise facial features and identity across different poses, expressions, and scenarios.",
                        video:
                          "/static.cdn-luma.com/files/api-landing/character_comp.mp4",
                      }),
                      (0, s.jsx)(d.Td, {
                        aspect: "".concat(1220 / 880),
                        title: "Visual reference",
                        poster:
                          "/static.cdn-luma.com/files/api-landing/reference_poster.jpg",
                        description:
                          "Apply and blend style references with exact control. Dream Photon captures the essence of each reference image, letting you combine distinct visual elements while maintaining professional quality.",
                        video:
                          "/static.cdn-luma.com/files/api-landing/reference_comp.mp4",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(d.Hr, { className: "mb-[90px] mt-[140px]" }),
              (0, s.jsxs)("h2", {
                className: (0, l.m6)(
                  x,
                  "mb-[40px] text-center max-sm:mb-[20px]"
                ),
                children: [
                  "Dream Ray1.6 ",
                  (0, s.jsx)("br", {}),
                  " Video Model Capabilities",
                ],
              }),
              (0, s.jsx)("div", {
                className:
                  "mb-[40px] flex justify-center gap-4 max-sm:mb-[20px]",
                children: (0, s.jsx)(d.BlackButton, {
                  href: "https://lumalabs.ai/ray",
                  children: "Build with Ray",
                }),
              }),
              (0, s.jsxs)("div", {
                className: "capabilities flex flex-col gap-[20px]",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "mb-[100px] flex gap-[20px] max-md:flex-col max-md:items-center max-md:gap-[120px]",
                    children: [
                      (0, s.jsx)(d.Td, {
                        aspect: "".concat(1220 / 880),
                        title: "Text to Video",
                        poster:
                          "https://storage.cdn-luma.com/public/dream-machine/api-page/text-to-video.jpg",
                        description:
                          "Ray and Photon's intuitive text instruction means users do not need to learn prompt-engineering. This means you can build generative products that reach new markets.",
                        video:
                          "https://storage.cdn-luma.com/public/dream-machine/api-page/text-to-video.mp4",
                      }),
                      (0, s.jsx)(d.Td, {
                        aspect: "".concat(1220 / 880),
                        title: "Image to Video",
                        poster:
                          "https://storage.cdn-luma.com/public/dream-machine/api-page/image-to-video.jpg",
                        description:
                          "Build workflows that take static images and instantly create magical high quality animations. Instruct Ray in natural language to create narratives.",
                        video:
                          "https://storage.cdn-luma.com/public/dream-machine/api-page/image-to-video.mp4",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "mb-[100px] flex gap-[20px] max-md:flex-col max-md:items-center max-md:gap-[120px]",
                    children: [
                      (0, s.jsx)(d.Td, {
                        aspect: "".concat(800 / 888),
                        title: "Keyframe",
                        poster:
                          "https://storage.cdn-luma.com/public/dream-machine/api-page/keyframe.jpg",
                        description:
                          "Control the narrative that Ray generates with start and end image keyframes…",
                        video:
                          "https://storage.cdn-luma.com/public/dream-machine/api-page/keyframe.mp4",
                      }),
                      (0, s.jsx)(d.Td, {
                        aspect: "".concat(800 / 888),
                        title: "Extend",
                        poster:
                          "https://storage.cdn-luma.com/public/dream-machine/api-page/extend.jpg",
                        description:
                          "…and extend these narratives into stories. All without any pixel editing complexity in your apps.",
                        video:
                          "https://storage.cdn-luma.com/public/dream-machine/api-page/extend.mp4",
                      }),
                      (0, s.jsx)(d.Td, {
                        aspect: "".concat(800 / 888),
                        title: "Loop",
                        poster:
                          "https://storage.cdn-luma.com/public/dream-machine/api-page/loop.jpg",
                        description:
                          "Create seamless loops for engaging UIs, product marketing, and backgrounds.",
                        video:
                          "https://storage.cdn-luma.com/public/dream-machine/api-page/loop.mp4",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "mb-[100px] flex gap-[20px] max-md:flex-col max-md:items-center max-md:gap-[120px]",
                    children: [
                      (0, s.jsx)(d.Td, {
                        aspect: "".concat(1220 / 880),
                        title: "Camera Control",
                        poster:
                          "https://storage.cdn-luma.com/public/dream-machine/api-page/camera.jpg",
                        description:
                          "Ground-breaking generative camera allows even your most inexperienced users to get videos looking just right with simple text instructions.",
                        video:
                          "https://storage.cdn-luma.com/public/dream-machine/api-page/camera.mp4",
                      }),
                      (0, s.jsx)(d.Td, {
                        aspect: "".concat(1220 / 880),
                        title: "Variable Aspect Ratio",
                        poster:
                          "https://storage.cdn-luma.com/public/dream-machine/api-page/aspect.jpg",
                        description:
                          "Your app can now produce content perfect for various platforms without complex video and image editing UIs.",
                        video:
                          "https://storage.cdn-luma.com/public/dream-machine/api-page/aspect.mp4",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "mb-[114px] border-y border-y-black/40",
                children: (0, s.jsx)(d.e_, {}),
              }),
              (0, s.jsxs)("section", {
                className: (0, l.m6)(
                  "relative flex justify-between gap-[20px]",
                  "max-md:flex-col"
                ),
                children: [
                  (0, s.jsxs)("div", {
                    className: "md:max-w-[534px]",
                    children: [
                      (0, s.jsx)("h2", {
                        className:
                          "text-[48px] leading-[120%] tracking-[-2.4px] max-md:text-center max-sm:text-[24px] max-sm:tracking-[-1.2px]",
                        children:
                          "A new creative intelligence to partner with people and help them make better things",
                      }),
                      (0, s.jsx)(d.BlackButton, {
                        href: "#why-post",
                        onClick: (t) => {
                          e && t.preventDefault(), a(!e);
                        },
                        transparent: !0,
                        className: (0, l.m6)(
                          "mt-[50px] bg-[#f1f1f1] max-md:hidden",
                          e ? "opacity-60" : "opacity-100"
                        ),
                        children: "Read why we are building this platform →",
                      }),
                      (0, s.jsx)(o.d, {
                        src: "https://storage.cdn-luma.com/public/dream-machine/api-page/angle-shimmer.mp4",
                        poster:
                          "https://storage.cdn-luma.com/public/dream-machine/api-page/angle-shimmer.jpg",
                        width: 119,
                        height: (1024 / 898) * 119,
                        className:
                          "mt-[50px] w-[119px] max-md:mx-auto max-md:mb-[40px]",
                      }),
                    ],
                  }),
                  (0, s.jsxs)(i.E.div, {
                    className: (0, l.m6)(
                      "relative flex h-[500px] w-[600px] min-w-[400px] flex-col gap-[20px] overflow-hidden",
                      "mx-auto max-md:w-full max-md:max-w-[500px]",
                      "max-sm:w-full max-sm:min-w-0 max-sm:text-[16px]"
                    ),
                    animate: { height: e ? "100%" : "500px" },
                    children: [
                      (0, s.jsx)("div", {
                        id: "why-post",
                        className:
                          "pointer-events-none absolute top-[-120px] size-[20px]",
                      }),
                      (0, s.jsxs)("p", {
                        children: [
                          (0, s.jsx)("i", {
                            children:
                              "Video is the carrier of culture, ideas, and connections around the world. Video is a universal language.",
                          }),
                          " ",
                          "Unlike text, creating video is a physical process and editing high dimensional video data is very difficult. This has meant that those few with the means of production create and most of us just passively consume.",
                          (0, s.jsx)("i", {
                            children:
                              "They tell the stories and we all just listen.",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("p", {
                        children: [
                          "Video can be the most effective medium of visual storytelling.",
                          (0, s.jsx)("br", {}),
                          "Video — if made as universally manipulable as text — can be the most effective medium of thought.",
                        ],
                      }),
                      (0, s.jsxs)("p", {
                        children: [
                          "To make this happen we have been training Ray, a family of generative AI models capable of producing and manipulating video. We have seen explosive adoption of the Ray v1, far more than we ever anticipated and in ways we never expected. This means",
                          " ",
                          (0, s.jsx)("i", { children: "we should go faster" }),
                          ".",
                        ],
                      }),
                      (0, s.jsx)("h2", {
                        className: "balance text-[24px]",
                        children: "The Dream API",
                      }),
                      (0, s.jsx)("p", {
                        children:
                          "We are launching the Dream API in beta today with the latest family of Ray v1.6 models. It includes high quality text-to-video, image-to-video, video extension, loop creation, as well as Dream's groundbreaking camera control capabilities.",
                      }),
                      (0, s.jsx)("p", {
                        children:
                          "Through Dream's research and engineering we aim to bring about the age of abundance in visual exploration and creation so more ideas can be tried, better narratives can be built, and diverse stories can be told by those who never could before. We are pricing the API for such a future at mere cents per video and will work to build even better efficiencies. This is just the start.",
                      }),
                      (0, s.jsxs)("p", {
                        children: [
                          "You start by buying credits that are consumed as you use the API. For higher tiers of usage or for enterprises,",
                          " ",
                          (0, s.jsx)(r.default, {
                            href: c.Z.apiTalkToUs,
                            className: "underline",
                            children: "please reach out to us",
                          }),
                          " ",
                          "so we can scale the service to fit your needs. Inputs you provide and the outputs you generate are not used in training unless you explicitly ask us to do so.",
                        ],
                      }),
                      (0, s.jsx)("h2", {
                        className: "balance text-[24px]",
                        children: "Creative intelligence in your products",
                      }),
                      (0, s.jsx)("p", {
                        children:
                          "To build intelligence that can keep pace with humans, we are working on models that fuse video, images, audio, 3d and language in pre-training. Basically, similar to how the human brain learns and works. With such rich context these models exhibit understanding of causality and follow user intent like intelligent partners.",
                      }),
                      (0, s.jsx)("p", {
                        children:
                          "Building with the Dream API gives you access to this creative intelligence and helps you bring value to markets by accomplishing previously impossible things.",
                      }),
                      (0, s.jsx)("p", {
                        children: "We are excited to learn and grow with you!",
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "pointer-events-none absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-b from-[#f1f1f1]/0 to-[#f1f1f1] transition-opacity duration-150",
                        style: { opacity: e ? 0 : 1 },
                      }),
                    ],
                  }),
                  (0, s.jsx)(d.BlackButton, {
                    href: "#why-post",
                    onClick: (t) => {
                      e && t.preventDefault(), a(!e);
                    },
                    transparent: !0,
                    className: (0, l.m6)(
                      "mx-auto mt-[20px] bg-[#f1f1f1] text-center md:hidden",
                      e ? "opacity-60" : "opacity-100"
                    ),
                    children: "Read why we are making our API",
                  }),
                ],
              }),
              (0, s.jsx)(d.Hr, { className: "relative z-[6] mt-[90px]" }),
              (0, s.jsx)("section", {
                className: (0, l.m6)(
                  "relative flex items-center",
                  "py-[90px] max-md:py-[65px]"
                ),
                children: (0, s.jsxs)("div", {
                  className: (0, l.m6)(),
                  children: [
                    (0, s.jsxs)("div", {
                      className: (0, l.m6)(
                        "relative z-[5] w-full max-w-[60%]",
                        "max-sm:max-w-[100%] max-sm:pt-[200px]"
                      ),
                      children: [
                        (0, s.jsx)("h2", {
                          className: (0, l.m6)(
                            "mb-[24px]",
                            x,
                            "max-sm:text-[24px]"
                          ),
                          children: "Moderation Controls and Responsible Use",
                        }),
                        (0, s.jsx)("p", {
                          className: "text-[#3F3F3F] max-sm:text-[16px]",
                          children:
                            "Video is a powerful and persuasive medium, and to prevent misuse, we have developed a multi-layered moderation system that combines AI filters with human oversight. Our API allows you to tailor this system to match the preferences of your market and users. With ongoing feedback and learning, we continuously refine our approach to ensure our models and products comply with legal standards and are used constructively.",
                        }),
                        (0, s.jsx)(r.default, {
                          className:
                            "mt-[24px] inline-block text-[#3F3F3F] underline hover:text-[#202020]",
                          href: c.Z.businessTerms,
                          children: "Enterprise Terms of Service",
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      ref: t,
                      className: (0, l.m6)(
                        "absolute bottom-0 right-0 top-0 aspect-square max-sm:w-full"
                      ),
                      children: (0, s.jsx)("video", {
                        className: (0, l.m6)(
                          "sm:h-full sm:rotate-90",
                          "rotate-none translate-x-[28%] max-md:translate-x-[20%] max-sm:translate-x-0 lg:translate-x-[0%]",
                          "max-sm:ml-[-24px] max-sm:mt-[30px] max-sm:w-[calc(100%+48px)] max-sm:max-w-none"
                        ),
                        ref: m,
                        src: "https://storage.cdn-luma.com/public/dream-machine/api-page/crystal-hand.mp4",
                        muted: !0,
                        poster:
                          "https://storage.cdn-luma.com/public/dream-machine/api-page/crystal-hand.jpg",
                        loop: !1,
                        playsInline: !0,
                        autoPlay: !1,
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
  },
]);
