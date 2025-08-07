(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4137],
  {
    50730: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "$", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
      let r = n(26036);
      function i(t) {
        let { createServerReference: e } = n(15140);
        return e(t, r.callServer);
      }
    },
    95063: function (t, e, n) {
      "use strict";
      n.d(e, {
        E9: function () {
          return a;
        },
        Y$: function () {
          return l;
        },
        ah: function () {
          return v;
        },
        p4: function () {
          return d;
        },
      });
      var r,
        i,
        s = n(75410);
      let o = new WeakMap();
      function a(t) {
        return {
          config: t,
          start: (e, n) => {
            let { self: r, system: i, emit: s } = n,
              a = { receivers: void 0, dispose: void 0 };
            o.set(r, a),
              (a.dispose = t({
                input: e.input,
                system: i,
                self: r,
                sendBack: (t) => {
                  "stopped" !== r.getSnapshot().status &&
                    r._parent &&
                    i._relay(r, r._parent, t);
                },
                receive: (t) => {
                  (a.receivers ??= new Set()), a.receivers.add(t);
                },
                emit: s,
              }));
          },
          transition: (t, e, n) => {
            let r = o.get(n.self);
            return (
              e.type === s.X
                ? ((t = { ...t, status: "stopped", error: void 0 }),
                  r.dispose?.())
                : r.receivers?.forEach((t) => t(e)),
              t
            );
          },
          getInitialSnapshot: (t, e) => ({
            status: "active",
            output: void 0,
            error: void 0,
            input: e,
          }),
          getPersistedSnapshot: (t) => t,
          restoreSnapshot: (t) => t,
        };
      }
      let u = "xstate.observable.error",
        c = "xstate.observable.complete";
      function l(t) {
        return {
          config: t,
          transition: (t, e) => {
            if ("active" !== t.status) return t;
            switch (e.type) {
              case u:
                return {
                  ...t,
                  status: "error",
                  error: e.data,
                  input: void 0,
                  _subscription: void 0,
                };
              case c:
                return {
                  ...t,
                  status: "done",
                  input: void 0,
                  _subscription: void 0,
                };
              case s.X:
                return (
                  t._subscription.unsubscribe(),
                  {
                    ...t,
                    status: "stopped",
                    input: void 0,
                    _subscription: void 0,
                  }
                );
              default:
                return t;
            }
          },
          getInitialSnapshot: (t, e) => ({
            status: "active",
            output: void 0,
            error: void 0,
            context: void 0,
            input: e,
            _subscription: void 0,
          }),
          start: (e, { self: n, system: r, emit: i }) => {
            "done" !== e.status &&
              (e._subscription = t({
                input: e.input,
                system: r,
                self: n,
                emit: i,
              }).subscribe({
                next: (t) => {
                  n._parent && r._relay(n, n._parent, t);
                },
                error: (t) => {
                  r._relay(n, n, { type: u, data: t });
                },
                complete: () => {
                  r._relay(n, n, { type: c });
                },
              }));
          },
          getPersistedSnapshot: ({ _subscription: t, ...e }) => e,
          restoreSnapshot: (t) => ({ ...t, _subscription: void 0 }),
        };
      }
      let f = "xstate.promise.resolve",
        h = "xstate.promise.reject",
        p = new WeakMap();
      function d(t) {
        return {
          config: t,
          transition: (t, e, n) => {
            if ("active" !== t.status) return t;
            switch (e.type) {
              case f: {
                let n = e.data;
                return { ...t, status: "done", output: n, input: void 0 };
              }
              case h:
                return { ...t, status: "error", error: e.data, input: void 0 };
              case s.X:
                return (
                  p.get(n.self)?.abort(),
                  { ...t, status: "stopped", input: void 0 }
                );
              default:
                return t;
            }
          },
          start: (e, { self: n, system: r, emit: i }) => {
            if ("active" !== e.status) return;
            let s = new AbortController();
            p.set(n, s),
              Promise.resolve(
                t({
                  input: e.input,
                  system: r,
                  self: n,
                  signal: s.signal,
                  emit: i,
                })
              ).then(
                (t) => {
                  "active" === n.getSnapshot().status &&
                    (p.delete(n), r._relay(n, n, { type: f, data: t }));
                },
                (t) => {
                  "active" === n.getSnapshot().status &&
                    (p.delete(n), r._relay(n, n, { type: h, data: t }));
                }
              );
          },
          getInitialSnapshot: (t, e) => ({
            status: "active",
            output: void 0,
            error: void 0,
            input: e,
          }),
          getPersistedSnapshot: (t) => t,
          restoreSnapshot: (t) => t,
        };
      }
      let y =
        ((i = void 0),
        {
          config: (r = (t) => void 0),
          transition: (t, e, n) => ({ ...t, context: r(t.context, e, n) }),
          getInitialSnapshot: (t, e) => ({
            status: "active",
            output: void 0,
            error: void 0,
            context: "function" == typeof i ? i({ input: e }) : i,
          }),
          getPersistedSnapshot: (t) => t,
          restoreSnapshot: (t) => t,
        });
      function v() {
        return (0, s.A)(y);
      }
    },
    23789: function (t, e, n) {
      "use strict";
      n.d(e, {
        a: function () {
          return o;
        },
        b: function () {
          return g;
        },
        c: function () {
          return d;
        },
        e: function () {
          return c;
        },
        s: function () {
          return y;
        },
      });
      var r,
        i = n(75410);
      function s(t, e, n, r, { assignment: s }) {
        if (!e.context)
          throw Error(
            "Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config."
          );
        let o = {},
          a = {
            context: e.context,
            event: n.event,
            spawn: (function (t, { machine: e, context: n }, r, s) {
              let o = (o, a) => {
                if ("string" != typeof o)
                  return (0, i.A)(o, {
                    id: a?.id,
                    parent: t.self,
                    syncSnapshot: a?.syncSnapshot,
                    input: a?.input,
                    src: o,
                    systemId: a?.systemId,
                  });
                {
                  let u = (0, i.z)(e, o);
                  if (!u)
                    throw Error(
                      `Actor logic '${o}' not implemented in machine '${e.id}'`
                    );
                  let c = (0, i.A)(u, {
                    id: a?.id,
                    parent: t.self,
                    syncSnapshot: a?.syncSnapshot,
                    input:
                      "function" == typeof a?.input
                        ? a.input({ context: n, event: r, self: t.self })
                        : a?.input,
                    src: o,
                    systemId: a?.systemId,
                  });
                  return (s[c.id] = c), c;
                }
              };
              return (e, n) => {
                let r = o(e, n);
                return (
                  (s[r.id] = r),
                  t.defer(() => {
                    r._processingStatus !== i.T.Stopped && r.start();
                  }),
                  r
                );
              };
            })(t, e, n.event, o),
            self: t.self,
            system: t.system,
          },
          u = {};
        if ("function" == typeof s) u = s(a, r);
        else
          for (let t of Object.keys(s)) {
            let e = s[t];
            u[t] = "function" == typeof e ? e(a, r) : e;
          }
        let c = Object.assign({}, e.context, u);
        return [
          (0, i.U)(e, {
            context: c,
            children: Object.keys(o).length
              ? { ...e.children, ...o }
              : e.children,
          }),
          void 0,
          void 0,
        ];
      }
      function o(t) {
        function e(t, e) {}
        return (
          (e.type = "xstate.assign"), (e.assignment = t), (e.resolve = s), e
        );
      }
      function a(t, e, n, r, { event: i }) {
        return [e, { event: "function" == typeof i ? i(n, r) : i }, void 0];
      }
      function u(t, { event: e }) {
        t.defer(() => t.emit(e));
      }
      function c(t) {
        function e(t, e) {}
        return (
          (e.type = "xstate.emit"),
          (e.event = t),
          (e.resolve = a),
          (e.execute = u),
          e
        );
      }
      let l = (((r = {}).Parent = "#_parent"), (r.Internal = "#_internal"), r);
      function f(t, e, n, r, { to: i, event: s, id: o, delay: a }, u) {
        let c, f;
        let h = e.machine.implementations.delays;
        if ("string" == typeof s)
          throw Error(
            `Only event objects may be used with sendTo; use sendTo({ type: "${s}" }) instead`
          );
        let p = "function" == typeof s ? s(n, r) : s;
        if ("string" == typeof a) {
          let t = h && h[a];
          c = "function" == typeof t ? t(n, r) : t;
        } else c = "function" == typeof a ? a(n, r) : a;
        let d = "function" == typeof i ? i(n, r) : i;
        if ("string" == typeof d) {
          if (
            !(f =
              d === l.Parent
                ? t.self._parent
                : d === l.Internal
                ? t.self
                : d.startsWith("#_")
                ? e.children[d.slice(2)]
                : u.deferredActorIds?.includes(d)
                ? d
                : e.children[d])
          )
            throw Error(
              `Unable to send event to actor '${d}' from machine '${e.machine.id}'.`
            );
        } else f = d || t.self;
        return [
          e,
          {
            to: f,
            targetId: "string" == typeof d ? d : void 0,
            event: p,
            id: o,
            delay: c,
          },
          void 0,
        ];
      }
      function h(t, e, n) {
        "string" == typeof n.to && (n.to = e.children[n.to]);
      }
      function p(t, e) {
        t.defer(() => {
          let { to: n, event: r, delay: s, id: o } = e;
          if ("number" == typeof s) {
            t.system.scheduler.schedule(t.self, n, r, s, o);
            return;
          }
          t.system._relay(
            t.self,
            n,
            r.type === i.V ? (0, i.W)(t.self.id, r.data) : r
          );
        });
      }
      function d(t, e, n) {
        function r(t, e) {}
        return (
          (r.type = "xstate.sendTo"),
          (r.to = t),
          (r.event = e),
          (r.id = n?.id),
          (r.delay = n?.delay),
          (r.resolve = f),
          (r.retryResolve = h),
          (r.execute = p),
          r
        );
      }
      function y(t, e) {
        return d(l.Parent, t, e);
      }
      function v(t, e, n, r, { collect: s }) {
        let a = [],
          u = function (t) {
            a.push(t);
          };
        return (
          (u.assign = (...t) => {
            a.push(o(...t));
          }),
          (u.cancel = (...t) => {
            a.push((0, i.M)(...t));
          }),
          (u.raise = (...t) => {
            a.push((0, i.O)(...t));
          }),
          (u.sendTo = (...t) => {
            a.push(d(...t));
          }),
          (u.sendParent = (...t) => {
            a.push(y(...t));
          }),
          (u.spawnChild = (...t) => {
            a.push((0, i.P)(...t));
          }),
          (u.stopChild = (...t) => {
            a.push((0, i.R)(...t));
          }),
          (u.emit = (...t) => {
            a.push(c(...t));
          }),
          s(
            {
              context: n.context,
              event: n.event,
              enqueue: u,
              check: (t) => (0, i.e)(t, e.context, n.event, e),
              self: t.self,
              system: t.system,
            },
            r
          ),
          [e, void 0, a]
        );
      }
      function g(t) {
        function e(t, e) {}
        return (
          (e.type = "xstate.enqueueActions"),
          (e.collect = t),
          (e.resolve = v),
          e
        );
      }
    },
    75410: function (t, e, n) {
      "use strict";
      var r;
      n.d(e, {
        $: function () {
          return j;
        },
        A: function () {
          return N;
        },
        M: function () {
          return D;
        },
        N: function () {
          return a;
        },
        O: function () {
          return tN;
        },
        P: function () {
          return V;
        },
        R: function () {
          return W;
        },
        S: function () {
          return o;
        },
        T: function () {
          return A;
        },
        U: function () {
          return tj;
        },
        V: function () {
          return c;
        },
        W: function () {
          return h;
        },
        X: function () {
          return l;
        },
        a: function () {
          return x;
        },
        b: function () {
          return te;
        },
        c: function () {
          return E;
        },
        d: function () {
          return tr;
        },
        e: function () {
          return q;
        },
        f: function () {
          return tn;
        },
        g: function () {
          return tt;
        },
        h: function () {
          return Q;
        },
        i: function () {
          return Z;
        },
        j: function () {
          return tl;
        },
        k: function () {
          return tO;
        },
        l: function () {
          return K;
        },
        m: function () {
          return m;
        },
        n: function () {
          return tb;
        },
        o: function () {
          return function t(e, n, r, i) {
            return "string" == typeof n
              ? (function (t, e, n, r) {
                  let i = tu(t, e).next(n, r);
                  return i && i.length ? i : t.next(n, r);
                })(e, n, r, i)
              : 1 === Object.keys(n).length
              ? (function (e, n, r, i) {
                  let s = Object.keys(n),
                    o = t(tu(e, s[0]), n[s[0]], r, i);
                  return o && o.length ? o : e.next(r, i);
                })(e, n, r, i)
              : (function (e, n, r, i) {
                  let s = [];
                  for (let o of Object.keys(n)) {
                    let a = n[o];
                    if (!a) continue;
                    let u = t(tu(e, o), a, r, i);
                    u && s.push(...u);
                  }
                  return s.length ? s : e.next(r, i);
                })(e, n, r, i);
          };
        },
        p: function () {
          return t_;
        },
        q: function () {
          return p;
        },
        r: function () {
          return tw;
        },
        s: function () {
          return tv;
        },
        t: function () {
          return _;
        },
        u: function () {
          return ta;
        },
        v: function () {
          return v;
        },
        w: function () {
          return H;
        },
        x: function () {
          return tc;
        },
        y: function () {
          return tA;
        },
        z: function () {
          return I;
        },
      });
      let i = (t) => {
        if ("undefined" == typeof window) return;
        let e = (function () {
          let t =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : void 0 !== n.g
              ? n.g
              : void 0;
          if (t.__xstate__) return t.__xstate__;
        })();
        e && e.register(t);
      };
      class s {
        constructor(t) {
          (this._process = t),
            (this._active = !1),
            (this._current = null),
            (this._last = null);
        }
        start() {
          (this._active = !0), this.flush();
        }
        clear() {
          this._current &&
            ((this._current.next = null), (this._last = this._current));
        }
        enqueue(t) {
          let e = { value: t, next: null };
          if (this._current) {
            (this._last.next = e), (this._last = e);
            return;
          }
          (this._current = e), (this._last = e), this._active && this.flush();
        }
        flush() {
          for (; this._current; ) {
            let t = this._current;
            this._process(t.value), (this._current = t.next);
          }
          this._last = null;
        }
      }
      let o = ".",
        a = "",
        u = "xstate.init",
        c = "xstate.error",
        l = "xstate.stop";
      function f(t, e) {
        return { type: `xstate.done.state.${t}`, output: e };
      }
      function h(t, e) {
        return { type: `xstate.error.actor.${t}`, error: e, actorId: t };
      }
      function p(t) {
        return { type: u, input: t };
      }
      function d(t) {
        setTimeout(() => {
          throw t;
        });
      }
      let y =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
      function v(t) {
        if (S(t)) return t;
        let e = [],
          n = "";
        for (let r = 0; r < t.length; r++) {
          switch (t.charCodeAt(r)) {
            case 92:
              (n += t[r + 1]), r++;
              continue;
            case 46:
              e.push(n), (n = "");
              continue;
          }
          n += t[r];
        }
        return e.push(n), e;
      }
      function g(t) {
        return t && "object" == typeof t && "machine" in t && "value" in t
          ? t.value
          : "string" != typeof t
          ? t
          : (function (t) {
              if (1 === t.length) return t[0];
              let e = {},
                n = e;
              for (let e = 0; e < t.length - 1; e++)
                if (e === t.length - 2) n[t[e]] = t[e + 1];
                else {
                  let r = n;
                  (n = {}), (r[t[e]] = n);
                }
              return e;
            })(v(t));
      }
      function m(t, e) {
        let n = {},
          r = Object.keys(t);
        for (let i = 0; i < r.length; i++) {
          let s = r[i];
          n[s] = e(t[s], s, t, i);
        }
        return n;
      }
      function _(t) {
        return void 0 === t ? [] : S(t) ? t : [t];
      }
      function b(t, e, n, r) {
        return "function" == typeof t
          ? t({ context: e, event: n, self: r })
          : t;
      }
      function S(t) {
        return Array.isArray(t);
      }
      function x(t) {
        return (S(t) ? t : [t]).map((t) =>
          void 0 === t || "string" == typeof t ? { target: t } : t
        );
      }
      function w(t) {
        if (void 0 !== t && "" !== t) return _(t);
      }
      function k(t, e, n) {
        let r = "object" == typeof t,
          i = r ? t : void 0;
        return {
          next: (r ? t.next : t)?.bind(i),
          error: (r ? t.error : e)?.bind(i),
          complete: (r ? t.complete : n)?.bind(i),
        };
      }
      function E(t, e) {
        return `${e}.${t}`;
      }
      function I(t, e) {
        let n = e.match(/^xstate\.invoke\.(\d+)\.(.*)/);
        if (!n) return t.implementations.actors[e];
        let [, r, i] = n,
          s = t.getStateNodeById(i).config.invoke;
        return (Array.isArray(s) ? s[r] : s).src;
      }
      function $(t, e) {
        return `${t.sessionId}.${e}`;
      }
      let T = 0,
        O = !1,
        j = 1,
        A =
          (((r = {})[(r.NotStarted = 0)] = "NotStarted"),
          (r[(r.Running = 1)] = "Running"),
          (r[(r.Stopped = 2)] = "Stopped"),
          r),
        P = {
          clock: {
            setTimeout: (t, e) => setTimeout(t, e),
            clearTimeout: (t) => clearTimeout(t),
          },
          logger: console.log.bind(console),
          devTools: !1,
        };
      class R {
        constructor(t, e) {
          (this.logic = t),
            (this._snapshot = void 0),
            (this.clock = void 0),
            (this.options = void 0),
            (this.id = void 0),
            (this.mailbox = new s(this._process.bind(this))),
            (this.observers = new Set()),
            (this.eventListeners = new Map()),
            (this.logger = void 0),
            (this._processingStatus = A.NotStarted),
            (this._parent = void 0),
            (this._syncSnapshot = void 0),
            (this.ref = void 0),
            (this._actorScope = void 0),
            (this._systemId = void 0),
            (this.sessionId = void 0),
            (this.system = void 0),
            (this._doneEvent = void 0),
            (this.src = void 0),
            (this._deferred = []);
          let n = { ...P, ...e },
            {
              clock: r,
              logger: i,
              parent: o,
              syncSnapshot: a,
              id: u,
              systemId: c,
              inspect: l,
            } = n;
          (this.system = o
            ? o.system
            : (function (t, e) {
                let n = new Map(),
                  r = new Map(),
                  i = new WeakMap(),
                  s = new Set(),
                  o = {},
                  { clock: a, logger: u } = e,
                  c = {
                    schedule: (
                      t,
                      e,
                      n,
                      r,
                      i = Math.random().toString(36).slice(2)
                    ) => {
                      let s = {
                          source: t,
                          target: e,
                          event: n,
                          delay: r,
                          id: i,
                          startedAt: Date.now(),
                        },
                        u = $(t, i);
                      l._snapshot._scheduledEvents[u] = s;
                      let c = a.setTimeout(() => {
                        delete o[u],
                          delete l._snapshot._scheduledEvents[u],
                          l._relay(t, e, n);
                      }, r);
                      o[u] = c;
                    },
                    cancel: (t, e) => {
                      let n = $(t, e),
                        r = o[n];
                      delete o[n],
                        delete l._snapshot._scheduledEvents[n],
                        void 0 !== r && a.clearTimeout(r);
                    },
                    cancelAll: (t) => {
                      for (let e in l._snapshot._scheduledEvents) {
                        let n = l._snapshot._scheduledEvents[e];
                        n.source === t && c.cancel(t, n.id);
                      }
                    },
                  },
                  l = {
                    _snapshot: {
                      _scheduledEvents:
                        (e?.snapshot && e.snapshot.scheduler) ?? {},
                    },
                    _bookId: () => `x:${T++}`,
                    _register: (t, e) => (n.set(t, e), t),
                    _unregister: (t) => {
                      n.delete(t.sessionId);
                      let e = i.get(t);
                      void 0 !== e && (r.delete(e), i.delete(t));
                    },
                    get: (t) => r.get(t),
                    _set: (t, e) => {
                      let n = r.get(t);
                      if (n && n !== e)
                        throw Error(
                          `Actor with system ID '${t}' already exists.`
                        );
                      r.set(t, e), i.set(e, t);
                    },
                    inspect: (t) => {
                      let e = k(t);
                      return (
                        s.add(e),
                        {
                          unsubscribe() {
                            s.delete(e);
                          },
                        }
                      );
                    },
                    _sendInspectionEvent: (e) => {
                      if (!s.size) return;
                      let n = { ...e, rootId: t.sessionId };
                      s.forEach((t) => t.next?.(n));
                    },
                    _relay: (t, e, n) => {
                      l._sendInspectionEvent({
                        type: "@xstate.event",
                        sourceRef: t,
                        actorRef: e,
                        event: n,
                      }),
                        e._send(n);
                    },
                    scheduler: c,
                    getSnapshot: () => ({
                      _scheduledEvents: { ...l._snapshot._scheduledEvents },
                    }),
                    start: () => {
                      let t = l._snapshot._scheduledEvents;
                      for (let e in ((l._snapshot._scheduledEvents = {}), t)) {
                        let {
                          source: n,
                          target: r,
                          event: i,
                          delay: s,
                          id: o,
                        } = t[e];
                        c.schedule(n, r, i, s, o);
                      }
                    },
                    _clock: a,
                    _logger: u,
                  };
                return l;
              })(this, { clock: r, logger: i })),
            l && !o && this.system.inspect(k(l)),
            (this.sessionId = this.system._bookId()),
            (this.id = u ?? this.sessionId),
            (this.logger = e?.logger ?? this.system._logger),
            (this.clock = e?.clock ?? this.system._clock),
            (this._parent = o),
            (this._syncSnapshot = a),
            (this.options = n),
            (this.src = n.src ?? t),
            (this.ref = this),
            (this._actorScope = {
              self: this,
              id: this.id,
              sessionId: this.sessionId,
              logger: this.logger,
              defer: (t) => {
                this._deferred.push(t);
              },
              system: this.system,
              stopChild: (t) => {
                if (t._parent !== this)
                  throw Error(
                    `Cannot stop child actor ${t.id} of ${this.id} because it is not a child`
                  );
                t._stop();
              },
              emit: (t) => {
                let e = this.eventListeners.get(t.type),
                  n = this.eventListeners.get("*");
                if (e || n)
                  for (let r of [
                    ...(e ? e.values() : []),
                    ...(n ? n.values() : []),
                  ])
                    r(t);
              },
              actionExecutor: (t) => {
                let e = () => {
                  if (
                    (this._actorScope.system._sendInspectionEvent({
                      type: "@xstate.action",
                      actorRef: this,
                      action: { type: t.type, params: t.params },
                    }),
                    !t.exec)
                  )
                    return;
                  let e = O;
                  try {
                    (O = !0), t.exec(t.info, t.params);
                  } finally {
                    O = e;
                  }
                };
                this._processingStatus === A.Running
                  ? e()
                  : this._deferred.push(e);
              },
            }),
            (this.send = this.send.bind(this)),
            this.system._sendInspectionEvent({
              type: "@xstate.actor",
              actorRef: this,
            }),
            c && ((this._systemId = c), this.system._set(c, this)),
            this._initState(e?.snapshot ?? e?.state),
            c &&
              "active" !== this._snapshot.status &&
              this.system._unregister(this);
        }
        _initState(t) {
          try {
            this._snapshot = t
              ? this.logic.restoreSnapshot
                ? this.logic.restoreSnapshot(t, this._actorScope)
                : t
              : this.logic.getInitialSnapshot(
                  this._actorScope,
                  this.options?.input
                );
          } catch (t) {
            this._snapshot = { status: "error", output: void 0, error: t };
          }
        }
        update(t, e) {
          let n;
          for (this._snapshot = t; (n = this._deferred.shift()); )
            try {
              n();
            } catch (e) {
              (this._deferred.length = 0),
                (this._snapshot = { ...t, status: "error", error: e });
            }
          switch (this._snapshot.status) {
            case "active":
              for (let e of this.observers)
                try {
                  e.next?.(t);
                } catch (t) {
                  d(t);
                }
              break;
            case "done":
              var r;
              for (let e of this.observers)
                try {
                  e.next?.(t);
                } catch (t) {
                  d(t);
                }
              this._stopProcedure(),
                this._complete(),
                (this._doneEvent =
                  ((r = this.id),
                  {
                    type: `xstate.done.actor.${r}`,
                    output: this._snapshot.output,
                    actorId: r,
                  })),
                this._parent &&
                  this.system._relay(this, this._parent, this._doneEvent);
              break;
            case "error":
              this._error(this._snapshot.error);
          }
          this.system._sendInspectionEvent({
            type: "@xstate.snapshot",
            actorRef: this,
            event: e,
            snapshot: t,
          });
        }
        subscribe(t, e, n) {
          let r = k(t, e, n);
          if (this._processingStatus !== A.Stopped) this.observers.add(r);
          else
            switch (this._snapshot.status) {
              case "done":
                try {
                  r.complete?.();
                } catch (t) {
                  d(t);
                }
                break;
              case "error": {
                let t = this._snapshot.error;
                if (r.error)
                  try {
                    r.error(t);
                  } catch (t) {
                    d(t);
                  }
                else d(t);
              }
            }
          return {
            unsubscribe: () => {
              this.observers.delete(r);
            },
          };
        }
        on(t, e) {
          let n = this.eventListeners.get(t);
          n || ((n = new Set()), this.eventListeners.set(t, n));
          let r = e.bind(void 0);
          return (
            n.add(r),
            {
              unsubscribe: () => {
                n.delete(r);
              },
            }
          );
        }
        start() {
          if (this._processingStatus === A.Running) return this;
          this._syncSnapshot &&
            this.subscribe({
              next: (t) => {
                "active" === t.status &&
                  this.system._relay(this, this._parent, {
                    type: `xstate.snapshot.${this.id}`,
                    snapshot: t,
                  });
              },
              error: () => {},
            }),
            this.system._register(this.sessionId, this),
            this._systemId && this.system._set(this._systemId, this),
            (this._processingStatus = A.Running);
          let t = p(this.options.input);
          switch (
            (this.system._sendInspectionEvent({
              type: "@xstate.event",
              sourceRef: this._parent,
              actorRef: this,
              event: t,
            }),
            this._snapshot.status)
          ) {
            case "done":
              return this.update(this._snapshot, t), this;
            case "error":
              return this._error(this._snapshot.error), this;
          }
          if ((this._parent || this.system.start(), this.logic.start))
            try {
              this.logic.start(this._snapshot, this._actorScope);
            } catch (t) {
              return (
                (this._snapshot = {
                  ...this._snapshot,
                  status: "error",
                  error: t,
                }),
                this._error(t),
                this
              );
            }
          return (
            this.update(this._snapshot, t),
            this.options.devTools && this.attachDevTools(),
            this.mailbox.start(),
            this
          );
        }
        _process(t) {
          let e, n;
          try {
            e = this.logic.transition(this._snapshot, t, this._actorScope);
          } catch (t) {
            n = { err: t };
          }
          if (n) {
            let { err: t } = n;
            (this._snapshot = { ...this._snapshot, status: "error", error: t }),
              this._error(t);
            return;
          }
          this.update(e, t),
            t.type === l && (this._stopProcedure(), this._complete());
        }
        _stop() {
          return (
            this._processingStatus === A.Stopped ||
              ((this.mailbox.clear(), this._processingStatus === A.NotStarted)
                ? (this._processingStatus = A.Stopped)
                : this.mailbox.enqueue({ type: l })),
            this
          );
        }
        stop() {
          if (this._parent)
            throw Error("A non-root actor cannot be stopped directly.");
          return this._stop();
        }
        _complete() {
          for (let t of this.observers)
            try {
              t.complete?.();
            } catch (t) {
              d(t);
            }
          this.observers.clear();
        }
        _reportError(t) {
          if (!this.observers.size) {
            this._parent || d(t);
            return;
          }
          let e = !1;
          for (let n of this.observers) {
            let r = n.error;
            e ||= !r;
            try {
              r?.(t);
            } catch (t) {
              d(t);
            }
          }
          this.observers.clear(), e && d(t);
        }
        _error(t) {
          this._stopProcedure(),
            this._reportError(t),
            this._parent &&
              this.system._relay(this, this._parent, h(this.id, t));
        }
        _stopProcedure() {
          return (
            this._processingStatus !== A.Running ||
              (this.system.scheduler.cancelAll(this),
              this.mailbox.clear(),
              (this.mailbox = new s(this._process.bind(this))),
              (this._processingStatus = A.Stopped),
              this.system._unregister(this)),
            this
          );
        }
        _send(t) {
          this._processingStatus !== A.Stopped && this.mailbox.enqueue(t);
        }
        send(t) {
          this.system._relay(void 0, this, t);
        }
        attachDevTools() {
          let { devTools: t } = this.options;
          t && ("function" == typeof t ? t : i)(this);
        }
        toJSON() {
          return { xstate$$type: j, id: this.id };
        }
        getPersistedSnapshot(t) {
          return this.logic.getPersistedSnapshot(this._snapshot, t);
        }
        [y]() {
          return this;
        }
        getSnapshot() {
          return this._snapshot;
        }
      }
      function N(t, ...[e]) {
        return new R(t, e);
      }
      function M(t, e, n, r, { sendId: i }) {
        return [e, { sendId: "function" == typeof i ? i(n, r) : i }, void 0];
      }
      function C(t, e) {
        t.defer(() => {
          t.system.scheduler.cancel(t.self, e.sendId);
        });
      }
      function D(t) {
        function e(t, e) {}
        return (
          (e.type = "xstate.cancel"),
          (e.sendId = t),
          (e.resolve = M),
          (e.execute = C),
          e
        );
      }
      function U(
        t,
        e,
        n,
        r,
        { id: i, systemId: s, src: o, input: a, syncSnapshot: u }
      ) {
        let c, l;
        let f = "string" == typeof o ? I(e.machine, o) : o,
          h = "function" == typeof i ? i(n) : i;
        return (
          f &&
            ((l =
              "function" == typeof a
                ? a({ context: e.context, event: n.event, self: t.self })
                : a),
            (c = N(f, {
              id: h,
              src: o,
              parent: t.self,
              syncSnapshot: u,
              systemId: s,
              input: l,
            }))),
          [
            tj(e, { children: { ...e.children, [h]: c } }),
            { id: i, systemId: s, actorRef: c, src: o, input: l },
            void 0,
          ]
        );
      }
      function L(t, { actorRef: e }) {
        e &&
          t.defer(() => {
            e._processingStatus !== A.Stopped && e.start();
          });
      }
      function V(
        ...[t, { id: e, systemId: n, input: r, syncSnapshot: i = !1 } = {}]
      ) {
        function s(t, e) {}
        return (
          (s.type = "xstate.spawnChild"),
          (s.id = e),
          (s.systemId = n),
          (s.src = t),
          (s.input = r),
          (s.syncSnapshot = i),
          (s.resolve = U),
          (s.execute = L),
          s
        );
      }
      function J(t, e, n, r, { actorRef: i }) {
        let s = "function" == typeof i ? i(n, r) : i,
          o = "string" == typeof s ? e.children[s] : s,
          a = e.children;
        return (
          o && ((a = { ...a }), delete a[o.id]),
          [tj(e, { children: a }), o, void 0]
        );
      }
      function z(t, e) {
        if (e) {
          if ((t.system._unregister(e), e._processingStatus !== A.Running)) {
            t.stopChild(e);
            return;
          }
          t.defer(() => {
            t.stopChild(e);
          });
        }
      }
      function W(t) {
        function e(t, e) {}
        return (
          (e.type = "xstate.stopChild"),
          (e.actorRef = t),
          (e.resolve = J),
          (e.execute = z),
          e
        );
      }
      function q(t, e, n, r) {
        let { machine: i } = r,
          s = "function" == typeof t,
          o = s
            ? t
            : i.implementations.guards["string" == typeof t ? t : t.type];
        if (!s && !o)
          throw Error(
            `Guard '${"string" == typeof t ? t : t.type}' is not implemented.'.`
          );
        if ("function" != typeof o) return q(o, e, n, r);
        let a = { context: e, event: n },
          u =
            s || "string" == typeof t
              ? void 0
              : "params" in t
              ? "function" == typeof t.params
                ? t.params({ context: e, event: n })
                : t.params
              : void 0;
        return "check" in o ? o.check(r, a, o) : o(a, u);
      }
      let B = (t) => "atomic" === t.type || "final" === t.type;
      function X(t) {
        return Object.values(t.states).filter((t) => "history" !== t.type);
      }
      function G(t, e) {
        let n = [];
        if (e === t) return n;
        let r = t.parent;
        for (; r && r !== e; ) n.push(r), (r = r.parent);
        return n;
      }
      function Z(t) {
        let e = new Set(t),
          n = Y(e);
        for (let t of e)
          if ("compound" !== t.type || (n.get(t) && n.get(t).length)) {
            if ("parallel" === t.type) {
              for (let n of X(t))
                if ("history" !== n.type && !e.has(n))
                  for (let t of to(n)) e.add(t);
            }
          } else to(t).forEach((t) => e.add(t));
        for (let t of e) {
          let n = t.parent;
          for (; n; ) e.add(n), (n = n.parent);
        }
        return e;
      }
      function Y(t) {
        let e = new Map();
        for (let n of t)
          e.has(n) || e.set(n, []),
            n.parent &&
              (e.has(n.parent) || e.set(n.parent, []), e.get(n.parent).push(n));
        return e;
      }
      function F(t, e) {
        return (function t(e, n) {
          let r = n.get(e);
          if (!r) return {};
          if ("compound" === e.type) {
            let t = r[0];
            if (!t) return {};
            if (B(t)) return t.key;
          }
          let i = {};
          for (let e of r) i[e.key] = t(e, n);
          return i;
        })(t, Y(Z(e)));
      }
      function K(t, e) {
        return "compound" === e.type
          ? X(e).some((e) => "final" === e.type && t.has(e))
          : "parallel" === e.type
          ? X(e).every((e) => K(t, e))
          : "final" === e.type;
      }
      let H = (t) => "#" === t[0];
      function Q(t, e) {
        return (
          t.transitions.get(e) ||
          [...t.transitions.keys()]
            .filter((t) => {
              if ("*" === t) return !0;
              if (!t.endsWith(".*")) return !1;
              let n = t.split("."),
                r = e.split(".");
              for (let t = 0; t < n.length; t++) {
                let e = n[t],
                  i = r[t];
                if ("*" === e) return t === n.length - 1;
                if (e !== i) return !1;
              }
              return !0;
            })
            .sort((t, e) => e.length - t.length)
            .flatMap((e) => t.transitions.get(e))
        );
      }
      function tt(t) {
        let e = t.config.after;
        if (!e) return [];
        let n = (e) => {
          var n;
          let r = ((n = t.id), { type: `xstate.after.${e}.${n}` }),
            i = r.type;
          return t.entry.push(tN(r, { id: i, delay: e })), t.exit.push(D(i)), i;
        };
        return Object.keys(e)
          .flatMap((t) => {
            let r = e[t],
              i = Number.isNaN(+t) ? t : +t,
              s = n(i);
            return _("string" == typeof r ? { target: r } : r).map((t) => ({
              ...t,
              event: s,
              delay: i,
            }));
          })
          .map((e) => {
            let { delay: n } = e;
            return { ...te(t, e.event, e), delay: n };
          });
      }
      function te(t, e, n) {
        let r = w(n.target),
          i = n.reenter ?? !1,
          s = (function (t, e) {
            if (void 0 !== e)
              return e.map((e) => {
                if ("string" != typeof e) return e;
                if (H(e)) return t.machine.getStateNodeById(e);
                let n = e[0] === o;
                if (n && !t.parent) return tc(t, e.slice(1));
                let r = n ? t.key + e : e;
                if (t.parent)
                  try {
                    return tc(t.parent, r);
                  } catch (e) {
                    throw Error(`Invalid transition definition for state node '${t.id}':
${e.message}`);
                  }
                else
                  throw Error(
                    `Invalid target: "${e}" is not a valid target from the root node. Did you mean ".${e}"?`
                  );
              });
          })(t, r),
          a = {
            ...n,
            actions: _(n.actions),
            guard: n.guard,
            target: s,
            source: t,
            reenter: i,
            eventType: e,
            toJSON: () => ({
              ...a,
              source: `#${t.id}`,
              target: s ? s.map((t) => `#${t.id}`) : void 0,
            }),
          };
        return a;
      }
      function tn(t) {
        let e = new Map();
        if (t.config.on)
          for (let n of Object.keys(t.config.on)) {
            if (n === a)
              throw Error(
                'Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.'
              );
            let r = t.config.on[n];
            e.set(
              n,
              x(r).map((e) => te(t, n, e))
            );
          }
        if (t.config.onDone) {
          let n = `xstate.done.state.${t.id}`;
          e.set(
            n,
            x(t.config.onDone).map((e) => te(t, n, e))
          );
        }
        for (let n of t.invoke) {
          if (n.onDone) {
            let r = `xstate.done.actor.${n.id}`;
            e.set(
              r,
              x(n.onDone).map((e) => te(t, r, e))
            );
          }
          if (n.onError) {
            let r = `xstate.error.actor.${n.id}`;
            e.set(
              r,
              x(n.onError).map((e) => te(t, r, e))
            );
          }
          if (n.onSnapshot) {
            let r = `xstate.snapshot.${n.id}`;
            e.set(
              r,
              x(n.onSnapshot).map((e) => te(t, r, e))
            );
          }
        }
        for (let n of t.after) {
          let t = e.get(n.eventType);
          t || ((t = []), e.set(n.eventType, t)), t.push(n);
        }
        return e;
      }
      function tr(t, e) {
        let n =
          "string" == typeof e ? t.states[e] : e ? t.states[e.target] : void 0;
        if (!n && e)
          throw Error(
            `Initial state node "${e}" not found on parent state node #${t.id}`
          );
        let r = {
          source: t,
          actions: e && "string" != typeof e ? _(e.actions) : [],
          eventType: null,
          reenter: !1,
          target: n ? [n] : [],
          toJSON: () => ({
            ...r,
            source: `#${t.id}`,
            target: n ? [`#${n.id}`] : [],
          }),
        };
        return r;
      }
      function ti(t) {
        let e = w(t.config.target);
        return e
          ? {
              target: e.map((e) =>
                "string" == typeof e ? tc(t.parent, e) : e
              ),
            }
          : t.parent.initial;
      }
      function ts(t) {
        return "history" === t.type;
      }
      function to(t) {
        let e = ta(t);
        for (let n of e) for (let r of G(n, t)) e.add(r);
        return e;
      }
      function ta(t) {
        let e = new Set();
        return (
          !(function t(n) {
            if (!e.has(n)) {
              if ((e.add(n), "compound" === n.type)) t(n.initial.target[0]);
              else if ("parallel" === n.type) for (let e of X(n)) t(e);
            }
          })(t),
          e
        );
      }
      function tu(t, e) {
        if (H(e)) return t.machine.getStateNodeById(e);
        if (!t.states)
          throw Error(
            `Unable to retrieve child state '${e}' from '${t.id}'; no child states exist.`
          );
        let n = t.states[e];
        if (!n) throw Error(`Child state '${e}' does not exist on '${t.id}'`);
        return n;
      }
      function tc(t, e) {
        if ("string" == typeof e && H(e))
          try {
            return t.machine.getStateNodeById(e);
          } catch {}
        let n = v(e).slice(),
          r = t;
        for (; n.length; ) {
          let t = n.shift();
          if (!t.length) break;
          r = tu(r, t);
        }
        return r;
      }
      function tl(t, e) {
        if ("string" == typeof e) {
          let n = t.states[e];
          if (!n) throw Error(`State '${e}' does not exist on '${t.id}'`);
          return [t, n];
        }
        let n = Object.keys(e),
          r = n.map((e) => tu(t, e)).filter(Boolean);
        return [t.machine.root, t].concat(
          r,
          n.reduce((n, r) => {
            let i = tu(t, r);
            if (!i) return n;
            let s = tl(i, e[r]);
            return n.concat(s);
          }, [])
        );
      }
      function tf(t, e) {
        let n = t;
        for (; n.parent && n.parent !== e; ) n = n.parent;
        return n.parent === e;
      }
      function th(t, e, n) {
        let r = new Set();
        for (let i of t) {
          let t = !1,
            s = new Set();
          for (let o of r)
            if (
              (function (t, e) {
                let n = new Set(t),
                  r = new Set(e);
                for (let t of n) if (r.has(t)) return !0;
                for (let t of r) if (n.has(t)) return !0;
                return !1;
              })(ty([i], e, n), ty([o], e, n))
            ) {
              if (tf(i.source, o.source)) s.add(o);
              else {
                t = !0;
                break;
              }
            }
          if (!t) {
            for (let t of s) r.delete(t);
            r.add(i);
          }
        }
        return Array.from(r);
      }
      function tp(t, e) {
        if (!t.target) return [];
        let n = new Set();
        for (let r of t.target)
          if (ts(r)) {
            if (e[r.id]) for (let t of e[r.id]) n.add(t);
            else for (let t of tp(ti(r), e)) n.add(t);
          } else n.add(r);
        return [...n];
      }
      function td(t, e) {
        let n = tp(t, e);
        if (!n) return;
        if (!t.reenter && n.every((e) => e === t.source || tf(e, t.source)))
          return t.source;
        let r = (function (t) {
          let [e, ...n] = t;
          for (let t of G(e, void 0)) if (n.every((e) => tf(e, t))) return t;
        })(n.concat(t.source));
        return r || (t.reenter ? void 0 : t.source.machine.root);
      }
      function ty(t, e, n) {
        let r = new Set();
        for (let i of t)
          if (i.target?.length) {
            let t = td(i, n);
            for (let n of (i.reenter && i.source === t && r.add(t), e))
              tf(n, t) && r.add(n);
          }
        return [...r];
      }
      function tv(t, e, n, r, i, s) {
        if (!t.length) return e;
        let o = new Set(e._nodes),
          a = e.historyValue,
          u = th(t, o, a),
          c = e;
        i ||
          ([c, a] = (function (t, e, n, r, i, s, o, a) {
            let u,
              c = t,
              l = ty(r, i, s);
            for (let t of (l.sort((t, e) => e.order - t.order), l))
              for (let e of (function (t) {
                return Object.keys(t.states)
                  .map((e) => t.states[e])
                  .filter((t) => "history" === t.type);
              })(t)) {
                let n;
                (n =
                  "deep" === e.history
                    ? (e) => B(e) && tf(e, t)
                    : (e) => e.parent === t),
                  ((u ??= { ...s })[e.id] = Array.from(i).filter(n));
              }
            for (let t of l)
              (c = t_(
                c,
                e,
                n,
                [...t.exit, ...t.invoke.map((t) => W(t.id))],
                o,
                void 0
              )),
                i.delete(t);
            return [c, u || s];
          })(c, r, n, u, o, a, s, n.actionExecutor)),
          (c = (function (t, e, n, r, i, s, o, a) {
            let u = t,
              c = new Set(),
              l = new Set();
            (function (t, e, n, r) {
              for (let i of t) {
                let t = td(i, e);
                for (let s of i.target || [])
                  !ts(s) &&
                    (i.source !== s || i.source !== t || i.reenter) &&
                    (r.add(s), n.add(s)),
                    tg(s, e, n, r);
                for (let s of tp(i, e)) {
                  let o = G(s, t);
                  t?.type === "parallel" && o.push(t),
                    tm(r, e, n, o, !i.source.parent && i.reenter ? void 0 : t);
                }
              }
            })(r, o, l, c),
              a && l.add(t.machine.root);
            let h = new Set();
            for (let t of [...c].sort((t, e) => t.order - e.order)) {
              i.add(t);
              let r = [];
              for (let e of (r.push(...t.entry), t.invoke))
                r.push(V(e.src, { ...e, syncSnapshot: !!e.onSnapshot }));
              if (l.has(t)) {
                let e = t.initial.actions;
                r.push(...e);
              }
              if (
                ((u = t_(
                  u,
                  e,
                  n,
                  r,
                  s,
                  t.invoke.map((t) => t.id)
                )),
                "final" === t.type)
              ) {
                let r = t.parent,
                  o = r?.type === "parallel" ? r : r?.parent,
                  a = o || t;
                for (
                  r?.type === "compound" &&
                  s.push(
                    f(
                      r.id,
                      void 0 !== t.output
                        ? b(t.output, u.context, e, n.self)
                        : void 0
                    )
                  );
                  o?.type === "parallel" && !h.has(o) && K(i, o);

                )
                  h.add(o), s.push(f(o.id)), (a = o), (o = o.parent);
                if (o) continue;
                u = tj(u, {
                  status: "done",
                  output: (function (t, e, n, r, i) {
                    if (void 0 === r.output) return;
                    let s = f(
                      i.id,
                      void 0 !== i.output && i.parent
                        ? b(i.output, t.context, e, n.self)
                        : void 0
                    );
                    return b(r.output, t.context, s, n.self);
                  })(u, e, n, u.machine.root, a),
                });
              }
            }
            return u;
          })(
            (c = t_(
              c,
              r,
              n,
              u.flatMap((t) => t.actions),
              s,
              void 0
            )),
            r,
            n,
            u,
            o,
            s,
            a,
            i
          ));
        let l = [...o];
        "done" === c.status &&
          (c = t_(
            c,
            r,
            n,
            l.sort((t, e) => e.order - t.order).flatMap((t) => t.exit),
            s,
            void 0
          ));
        try {
          if (
            a === e.historyValue &&
            (function (t, e) {
              if (t.length !== e.size) return !1;
              for (let n of t) if (!e.has(n)) return !1;
              return !0;
            })(e._nodes, o)
          )
            return c;
          return tj(c, { _nodes: l, historyValue: a });
        } catch (t) {
          throw t;
        }
      }
      function tg(t, e, n, r) {
        if (ts(t)) {
          if (e[t.id]) {
            let i = e[t.id];
            for (let t of i) r.add(t), tg(t, e, n, r);
            for (let s of i) tm(r, e, n, G(s, t.parent));
          } else {
            let i = ti(t);
            for (let s of i.target)
              r.add(s),
                i === t.parent?.initial && n.add(t.parent),
                tg(s, e, n, r);
            for (let s of i.target) tm(r, e, n, G(s, t.parent));
          }
        } else if ("compound" === t.type) {
          let [i] = t.initial.target;
          ts(i) || (r.add(i), n.add(i)), tg(i, e, n, r), tm(r, e, n, G(i, t));
        } else if ("parallel" === t.type)
          for (let i of X(t).filter((t) => !ts(t)))
            [...r].some((t) => tf(t, i)) ||
              (ts(i) || (r.add(i), n.add(i)), tg(i, e, n, r));
      }
      function tm(t, e, n, r, i) {
        for (let s of r)
          if (((!i || tf(s, i)) && t.add(s), "parallel" === s.type))
            for (let r of X(s).filter((t) => !ts(t)))
              [...t].some((t) => tf(t, r)) || (t.add(r), tg(r, e, n, t));
      }
      function t_(t, e, n, r, i, s) {
        let o = s ? [] : void 0,
          a = (function t(e, n, r, i, s, o) {
            let { machine: a } = e,
              u = e;
            for (let e of i) {
              var c;
              let i = "function" == typeof e,
                l = i
                  ? e
                  : ((c = "string" == typeof e ? e : e.type),
                    a.implementations.actions[c]),
                f = {
                  context: u.context,
                  event: n,
                  self: r.self,
                  system: r.system,
                },
                h =
                  i || "string" == typeof e
                    ? void 0
                    : "params" in e
                    ? "function" == typeof e.params
                      ? e.params({ context: u.context, event: n })
                      : e.params
                    : void 0;
              if (!l || !("resolve" in l)) {
                r.actionExecutor({
                  type:
                    "string" == typeof e
                      ? e
                      : "object" == typeof e
                      ? e.type
                      : e.name || "(anonymous)",
                  info: f,
                  params: h,
                  exec: l,
                });
                continue;
              }
              let [p, d, y] = l.resolve(r, u, f, h, l, s);
              (u = p),
                "retryResolve" in l && o?.push([l, d]),
                "execute" in l &&
                  r.actionExecutor({
                    type: l.type,
                    info: f,
                    params: d,
                    exec: l.execute.bind(null, r, d),
                  }),
                y && (u = t(u, n, r, y, s, o));
            }
            return u;
          })(t, e, n, r, { internalQueue: i, deferredActorIds: s }, o);
        return (
          o?.forEach(([t, e]) => {
            t.retryResolve(n, a, e);
          }),
          a
        );
      }
      function tb(t, e, n, r) {
        let i = t,
          s = [];
        function o(t, e, r) {
          n.system._sendInspectionEvent({
            type: "@xstate.microstep",
            actorRef: n.self,
            event: e,
            snapshot: t,
            _transitions: r,
          }),
            s.push(t);
        }
        if (e.type === l)
          return (
            o((i = tj(tS(i, e, n), { status: "stopped" })), e, []),
            { snapshot: i, microstates: s }
          );
        let a = e;
        if (a.type !== u) {
          let e = a,
            u = e.type.startsWith("xstate.error.actor"),
            c = tx(e, i);
          if (u && !c.length)
            return (
              o((i = tj(t, { status: "error", error: e.error })), e, []),
              { snapshot: i, microstates: s }
            );
          o((i = tv(c, t, n, a, !1, r)), e, c);
        }
        let c = !0;
        for (; "active" === i.status; ) {
          let t = c
              ? (function (t, e) {
                  let n = new Set();
                  for (let r of t._nodes.filter(B))
                    t: for (let i of [r].concat(G(r, void 0)))
                      if (i.always) {
                        for (let r of i.always)
                          if (
                            void 0 === r.guard ||
                            q(r.guard, t.context, e, t)
                          ) {
                            n.add(r);
                            break t;
                          }
                      }
                  return th(Array.from(n), new Set(t._nodes), t.historyValue);
                })(i, a)
              : [],
            e = t.length ? i : void 0;
          if (!t.length) {
            if (!r.length) break;
            t = tx((a = r.shift()), i);
          }
          (c = (i = tv(t, i, n, a, !1, r)) !== e), o(i, a, t);
        }
        return (
          "active" !== i.status && tS(i, a, n), { snapshot: i, microstates: s }
        );
      }
      function tS(t, e, n) {
        return t_(
          t,
          e,
          n,
          Object.values(t.children).map((t) => W(t)),
          [],
          void 0
        );
      }
      function tx(t, e) {
        return e.machine.getTransitionData(e, t);
      }
      function tw(t, e) {
        let n = Z(tl(t, e));
        return F(t, [...n]);
      }
      let tk = function (t) {
          return (function t(e, n) {
            let r = g(e),
              i = g(n);
            return "string" == typeof i
              ? "string" == typeof r && i === r
              : "string" == typeof r
              ? r in i
              : Object.keys(r).every((e) => e in i && t(r[e], i[e]));
          })(t, this.value);
        },
        tE = function (t) {
          return this.tags.has(t);
        },
        tI = function (t) {
          let e = this.machine.getTransitionData(this, t);
          return (
            !!e?.length &&
            e.some((t) => void 0 !== t.target || t.actions.length)
          );
        },
        t$ = function () {
          let {
            _nodes: t,
            tags: e,
            machine: n,
            getMeta: r,
            toJSON: i,
            can: s,
            hasTag: o,
            matches: a,
            ...u
          } = this;
          return { ...u, tags: Array.from(e) };
        },
        tT = function () {
          return this._nodes.reduce(
            (t, e) => (void 0 !== e.meta && (t[e.id] = e.meta), t),
            {}
          );
        };
      function tO(t, e) {
        return {
          status: t.status,
          output: t.output,
          error: t.error,
          machine: e,
          context: t.context,
          _nodes: t._nodes,
          value: F(e.root, t._nodes),
          tags: new Set(t._nodes.flatMap((t) => t.tags)),
          children: t.children,
          historyValue: t.historyValue || {},
          matches: tk,
          hasTag: tE,
          can: tI,
          getMeta: tT,
          toJSON: t$,
        };
      }
      function tj(t, e = {}) {
        return tO({ ...t, ...e }, t.machine);
      }
      function tA(t, e) {
        let {
            _nodes: n,
            tags: r,
            machine: i,
            children: s,
            context: o,
            can: a,
            hasTag: u,
            matches: c,
            getMeta: l,
            toJSON: f,
            ...h
          } = t,
          p = {};
        for (let t in s) {
          let n = s[t];
          p[t] = {
            snapshot: n.getPersistedSnapshot(e),
            src: n.src,
            systemId: n._systemId,
            syncSnapshot: n._syncSnapshot,
          };
        }
        return {
          ...h,
          context: (function t(e) {
            let n;
            for (let r in e) {
              let i = e[r];
              if (i && "object" == typeof i) {
                if ("sessionId" in i && "send" in i && "ref" in i)
                  (n ??= Array.isArray(e) ? e.slice() : { ...e })[r] = {
                    xstate$$type: j,
                    id: i.id,
                  };
                else {
                  let s = t(i);
                  s !== i &&
                    ((n ??= Array.isArray(e) ? e.slice() : { ...e })[r] = s);
                }
              }
            }
            return n ?? e;
          })(o),
          children: p,
        };
      }
      function tP(
        t,
        e,
        n,
        r,
        { event: i, id: s, delay: o },
        { internalQueue: a }
      ) {
        let u;
        let c = e.machine.implementations.delays;
        if ("string" == typeof i)
          throw Error(
            `Only event objects may be used with raise; use raise({ type: "${i}" }) instead`
          );
        let l = "function" == typeof i ? i(n, r) : i;
        if ("string" == typeof o) {
          let t = c && c[o];
          u = "function" == typeof t ? t(n, r) : t;
        } else u = "function" == typeof o ? o(n, r) : o;
        return (
          "number" != typeof u && a.push(l),
          [e, { event: l, id: s, delay: u }, void 0]
        );
      }
      function tR(t, e) {
        let { event: n, delay: r, id: i } = e;
        if ("number" == typeof r) {
          t.defer(() => {
            let e = t.self;
            t.system.scheduler.schedule(e, e, n, r, i);
          });
          return;
        }
      }
      function tN(t, e) {
        function n(t, e) {}
        return (
          (n.type = "xstate.raise"),
          (n.event = t),
          (n.id = e?.id),
          (n.delay = e?.delay),
          (n.resolve = tP),
          (n.execute = tR),
          n
        );
      }
    },
    77490: function (t, e, n) {
      "use strict";
      n.d(e, {
        ZD: function () {
          return s;
        },
        cY: function () {
          return h;
        },
      }),
        n(95063);
      var r = n(75410),
        i = n(23789);
      function s(t, e) {
        let n = (0, r.t)(e);
        if (!n.includes(t.type)) {
          let e =
            1 === n.length
              ? `type "${n[0]}"`
              : `one of types "${n.join('", "')}"`;
          throw Error(`Expected event ${JSON.stringify(t)} to have ${e}`);
        }
      }
      let o = new WeakMap();
      function a(t, e, n) {
        let r = o.get(t);
        return (
          r ? e in r || (r[e] = n()) : ((r = { [e]: n() }), o.set(t, r)), r[e]
        );
      }
      let u = {},
        c = (t) =>
          "string" == typeof t
            ? { type: t }
            : "function" == typeof t
            ? "resolve" in t
              ? { type: t.type }
              : { type: t.name }
            : t;
      class l {
        constructor(t, e) {
          if (
            ((this.config = t),
            (this.key = void 0),
            (this.id = void 0),
            (this.type = void 0),
            (this.path = void 0),
            (this.states = void 0),
            (this.history = void 0),
            (this.entry = void 0),
            (this.exit = void 0),
            (this.parent = void 0),
            (this.machine = void 0),
            (this.meta = void 0),
            (this.output = void 0),
            (this.order = -1),
            (this.description = void 0),
            (this.tags = []),
            (this.transitions = void 0),
            (this.always = void 0),
            (this.parent = e._parent),
            (this.key = e._key),
            (this.machine = e._machine),
            (this.path = this.parent ? this.parent.path.concat(this.key) : []),
            (this.id =
              this.config.id || [this.machine.id, ...this.path].join(r.S)),
            (this.type =
              this.config.type ||
              (this.config.states && Object.keys(this.config.states).length
                ? "compound"
                : this.config.history
                ? "history"
                : "atomic")),
            (this.description = this.config.description),
            (this.order = this.machine.idMap.size),
            this.machine.idMap.set(this.id, this),
            (this.states = this.config.states
              ? (0, r.m)(
                  this.config.states,
                  (t, e) =>
                    new l(t, { _parent: this, _key: e, _machine: this.machine })
                )
              : u),
            "compound" === this.type && !this.config.initial)
          )
            throw Error(
              `No initial state specified for compound state node "#${
                this.id
              }". Try adding { initial: "${
                Object.keys(this.states)[0]
              }" } to the state config.`
            );
          (this.history =
            !0 === this.config.history ? "shallow" : this.config.history || !1),
            (this.entry = (0, r.t)(this.config.entry).slice()),
            (this.exit = (0, r.t)(this.config.exit).slice()),
            (this.meta = this.config.meta),
            (this.output =
              "final" !== this.type && this.parent
                ? void 0
                : this.config.output),
            (this.tags = (0, r.t)(t.tags).slice());
        }
        _initialize() {
          (this.transitions = (0, r.f)(this)),
            this.config.always &&
              (this.always = (0, r.a)(this.config.always).map((t) =>
                (0, r.b)(this, r.N, t)
              )),
            Object.keys(this.states).forEach((t) => {
              this.states[t]._initialize();
            });
        }
        get definition() {
          return {
            id: this.id,
            key: this.key,
            version: this.machine.version,
            type: this.type,
            initial: this.initial
              ? {
                  target: this.initial.target,
                  source: this,
                  actions: this.initial.actions.map(c),
                  eventType: null,
                  reenter: !1,
                  toJSON: () => ({
                    target: this.initial.target.map((t) => `#${t.id}`),
                    source: `#${this.id}`,
                    actions: this.initial.actions.map(c),
                    eventType: null,
                  }),
                }
              : void 0,
            history: this.history,
            states: (0, r.m)(this.states, (t) => t.definition),
            on: this.on,
            transitions: [...this.transitions.values()]
              .flat()
              .map((t) => ({ ...t, actions: t.actions.map(c) })),
            entry: this.entry.map(c),
            exit: this.exit.map(c),
            meta: this.meta,
            order: this.order || -1,
            output: this.output,
            invoke: this.invoke,
            description: this.description,
            tags: this.tags,
          };
        }
        toJSON() {
          return this.definition;
        }
        get invoke() {
          return a(this, "invoke", () =>
            (0, r.t)(this.config.invoke).map((t, e) => {
              let { src: n, systemId: i } = t,
                s = t.id ?? (0, r.c)(this.id, e),
                o =
                  "string" == typeof n
                    ? n
                    : `xstate.invoke.${(0, r.c)(this.id, e)}`;
              return {
                ...t,
                src: o,
                id: s,
                systemId: i,
                toJSON() {
                  let { onDone: e, onError: n, ...r } = t;
                  return { ...r, type: "xstate.invoke", src: o, id: s };
                },
              };
            })
          );
        }
        get on() {
          return a(this, "on", () =>
            [...this.transitions]
              .flatMap(([t, e]) => e.map((e) => [t, e]))
              .reduce((t, [e, n]) => ((t[e] = t[e] || []), t[e].push(n), t), {})
          );
        }
        get after() {
          return a(this, "delayedTransitions", () => (0, r.g)(this));
        }
        get initial() {
          return a(this, "initial", () => (0, r.d)(this, this.config.initial));
        }
        next(t, e) {
          let n;
          let i = e.type,
            s = [];
          for (let o of a(this, `candidates-${i}`, () => (0, r.h)(this, i))) {
            let { guard: a } = o,
              u = t.context,
              c = !1;
            try {
              c = !a || (0, r.e)(a, u, e, t);
            } catch (e) {
              let t =
                "string" == typeof a
                  ? a
                  : "object" == typeof a
                  ? a.type
                  : void 0;
              throw Error(`Unable to evaluate guard ${
                t ? `'${t}' ` : ""
              }in transition for event '${i}' in state node '${this.id}':
${e.message}`);
            }
            if (c) {
              s.push(...o.actions), (n = o);
              break;
            }
          }
          return n ? [n] : void 0;
        }
        get events() {
          return a(this, "events", () => {
            let { states: t } = this,
              e = new Set(this.ownEvents);
            if (t)
              for (let n of Object.keys(t)) {
                let r = t[n];
                if (r.states) for (let t of r.events) e.add(`${t}`);
              }
            return Array.from(e);
          });
        }
        get ownEvents() {
          return Array.from(
            new Set(
              [...this.transitions.keys()].filter((t) =>
                this.transitions
                  .get(t)
                  .some((t) => !(!t.target && !t.actions.length && !t.reenter))
              )
            )
          );
        }
      }
      class f {
        constructor(t, e) {
          (this.config = t),
            (this.version = void 0),
            (this.schemas = void 0),
            (this.implementations = void 0),
            (this.__xstatenode = !0),
            (this.idMap = new Map()),
            (this.root = void 0),
            (this.id = void 0),
            (this.states = void 0),
            (this.events = void 0),
            (this.id = t.id || "(machine)"),
            (this.implementations = {
              actors: e?.actors ?? {},
              actions: e?.actions ?? {},
              delays: e?.delays ?? {},
              guards: e?.guards ?? {},
            }),
            (this.version = this.config.version),
            (this.schemas = this.config.schemas),
            (this.transition = this.transition.bind(this)),
            (this.getInitialSnapshot = this.getInitialSnapshot.bind(this)),
            (this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this)),
            (this.restoreSnapshot = this.restoreSnapshot.bind(this)),
            (this.start = this.start.bind(this)),
            (this.root = new l(t, { _key: this.id, _machine: this })),
            this.root._initialize(),
            (this.states = this.root.states),
            (this.events = this.root.events);
        }
        provide(t) {
          let {
            actions: e,
            guards: n,
            actors: r,
            delays: i,
          } = this.implementations;
          return new f(this.config, {
            actions: { ...e, ...t.actions },
            guards: { ...n, ...t.guards },
            actors: { ...r, ...t.actors },
            delays: { ...i, ...t.delays },
          });
        }
        resolveState(t) {
          let e = (0, r.r)(this.root, t.value),
            n = (0, r.i)((0, r.j)(this.root, e));
          return (0, r.k)(
            {
              _nodes: [...n],
              context: t.context || {},
              children: {},
              status: (0, r.l)(n, this.root) ? "done" : t.status || "active",
              output: t.output,
              error: t.error,
              historyValue: t.historyValue,
            },
            this
          );
        }
        transition(t, e, n) {
          return (0, r.n)(t, e, n, []).snapshot;
        }
        microstep(t, e, n) {
          return (0, r.n)(t, e, n, []).microstates;
        }
        getTransitionData(t, e) {
          return (0, r.o)(this.root, t.value, t, e) || [];
        }
        getPreInitialState(t, e, n) {
          let { context: s } = this.config,
            o = (0, r.k)(
              {
                context: "function" != typeof s && s ? s : {},
                _nodes: [this.root],
                children: {},
                status: "active",
              },
              this
            );
          return "function" == typeof s
            ? (0, r.p)(
                o,
                e,
                t,
                [
                  (0, i.a)(({ spawn: t, event: e, self: n }) =>
                    s({ spawn: t, input: e.input, self: n })
                  ),
                ],
                n,
                void 0
              )
            : o;
        }
        getInitialSnapshot(t, e) {
          let n = (0, r.q)(e),
            i = [],
            s = this.getPreInitialState(t, n, i),
            o = (0, r.s)(
              [
                {
                  target: [...(0, r.u)(this.root)],
                  source: this.root,
                  reenter: !0,
                  actions: [],
                  eventType: null,
                  toJSON: null,
                },
              ],
              s,
              t,
              n,
              !0,
              i
            ),
            { snapshot: a } = (0, r.n)(o, n, t, i);
          return a;
        }
        start(t) {
          Object.values(t.children).forEach((t) => {
            "active" === t.getSnapshot().status && t.start();
          });
        }
        getStateNodeById(t) {
          let e = (0, r.v)(t),
            n = e.slice(1),
            i = (0, r.w)(e[0]) ? e[0].slice(1) : e[0],
            s = this.idMap.get(i);
          if (!s)
            throw Error(
              `Child state node '#${i}' does not exist on machine '${this.id}'`
            );
          return (0, r.x)(s, n);
        }
        get definition() {
          return this.root.definition;
        }
        toJSON() {
          return this.definition;
        }
        getPersistedSnapshot(t, e) {
          return (0, r.y)(t, e);
        }
        restoreSnapshot(t, e) {
          let n = {},
            i = t.children;
          Object.keys(i).forEach((t) => {
            let s = i[t],
              o = s.snapshot,
              a = s.src,
              u = "string" == typeof a ? (0, r.z)(this, a) : a;
            if (!u) return;
            let c = (0, r.A)(u, {
              id: t,
              parent: e.self,
              syncSnapshot: s.syncSnapshot,
              snapshot: o,
              src: a,
              systemId: s.systemId,
            });
            n[t] = c;
          });
          let s = (0, r.k)(
              {
                ...t,
                children: n,
                _nodes: Array.from((0, r.i)((0, r.j)(this.root, t.value))),
              },
              this
            ),
            o = new Set();
          return (
            !(function t(e, n) {
              if (!o.has(e))
                for (let i in (o.add(e), e)) {
                  let s = e[i];
                  if (s && "object" == typeof s) {
                    if ("xstate$$type" in s && s.xstate$$type === r.$) {
                      e[i] = n[s.id];
                      continue;
                    }
                    t(s, n);
                  }
                }
            })(s.context, n),
            s
          );
        }
      }
      function h({ schemas: t, actors: e, actions: n, guards: r, delays: i }) {
        return {
          createMachine: (s) =>
            new f(
              { ...s, schemas: t },
              { actors: e, actions: n, guards: r, delays: i }
            ),
        };
      }
    },
    28070: function (t) {
      var e,
        n,
        r,
        i = (t.exports = {});
      function s() {
        throw Error("setTimeout has not been defined");
      }
      function o() {
        throw Error("clearTimeout has not been defined");
      }
      function a(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === s || !e) && setTimeout)
          return (e = setTimeout), setTimeout(t, 0);
        try {
          return e(t, 0);
        } catch (n) {
          try {
            return e.call(null, t, 0);
          } catch (n) {
            return e.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          e = "function" == typeof setTimeout ? setTimeout : s;
        } catch (t) {
          e = s;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : o;
        } catch (t) {
          n = o;
        }
      })();
      var u = [],
        c = !1,
        l = -1;
      function f() {
        c &&
          r &&
          ((c = !1), r.length ? (u = r.concat(u)) : (l = -1), u.length && h());
      }
      function h() {
        if (!c) {
          var t = a(f);
          c = !0;
          for (var e = u.length; e; ) {
            for (r = u, u = []; ++l < e; ) r && r[l].run();
            (l = -1), (e = u.length);
          }
          (r = null),
            (c = !1),
            (function (t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === o || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(t);
              try {
                n(t);
              } catch (e) {
                try {
                  return n.call(null, t);
                } catch (e) {
                  return n.call(this, t);
                }
              }
            })(t);
        }
      }
      function p(t, e) {
        (this.fun = t), (this.array = e);
      }
      function d() {}
      (i.nextTick = function (t) {
        var e = Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        u.push(new p(t, e)), 1 !== u.length || c || a(h);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = d),
        (i.addListener = d),
        (i.once = d),
        (i.off = d),
        (i.removeListener = d),
        (i.removeAllListeners = d),
        (i.emit = d),
        (i.prependListener = d),
        (i.prependOnceListener = d),
        (i.listeners = function (t) {
          return [];
        }),
        (i.binding = function (t) {
          throw Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (t) {
          throw Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
    5594: function (t, e, n) {
      "use strict";
      n.d(e, {
        CR: function () {
          return l;
        },
        FC: function () {
          return d;
        },
        Jh: function () {
          return u;
        },
        KL: function () {
          return y;
        },
        XA: function () {
          return c;
        },
        ZT: function () {
          return i;
        },
        _T: function () {
          return o;
        },
        ev: function () {
          return h;
        },
        fl: function () {
          return f;
        },
        mG: function () {
          return a;
        },
        pi: function () {
          return s;
        },
        qq: function () {
          return p;
        },
      });
      var r = function (t, e) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(t, e);
      };
      function i(t, e) {
        if ("function" != typeof e && null !== e)
          throw TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var s = function () {
        return (s =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
      function o(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            0 > e.indexOf(r) &&
            (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(t);
            i < r.length;
            i++
          )
            0 > e.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        return n;
      }
      function a(t, e, n, r) {
        return new (n || (n = Promise))(function (i, s) {
          function o(t) {
            try {
              u(r.next(t));
            } catch (t) {
              s(t);
            }
          }
          function a(t) {
            try {
              u(r.throw(t));
            } catch (t) {
              s(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value) instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })
                ).then(o, a);
          }
          u((r = r.apply(t, e || [])).next());
        });
      }
      function u(t, e) {
        var n,
          r,
          i,
          s,
          o = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (s = { next: a(0), throw: a(1), return: a(2) }),
          "function" == typeof Symbol &&
            (s[Symbol.iterator] = function () {
              return this;
            }),
          s
        );
        function a(a) {
          return function (u) {
            return (function (a) {
              if (n) throw TypeError("Generator is already executing.");
              for (; s && ((s = 0), a[0] && (o = 0)), o; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & a[0]
                          ? r.return
                          : a[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, a[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (a = [2 & a[0], i.value]), a[0])) {
                    case 0:
                    case 1:
                      i = a;
                      break;
                    case 4:
                      return o.label++, { value: a[1], done: !1 };
                    case 5:
                      o.label++, (r = a[1]), (a = [0]);
                      continue;
                    case 7:
                      (a = o.ops.pop()), o.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = o.trys).length > 0 && i[i.length - 1]) &&
                        (6 === a[0] || 2 === a[0])
                      ) {
                        o = 0;
                        continue;
                      }
                      if (3 === a[0] && (!i || (a[1] > i[0] && a[1] < i[3]))) {
                        o.label = a[1];
                        break;
                      }
                      if (6 === a[0] && o.label < i[1]) {
                        (o.label = i[1]), (i = a);
                        break;
                      }
                      if (i && o.label < i[2]) {
                        (o.label = i[2]), o.ops.push(a);
                        break;
                      }
                      i[2] && o.ops.pop(), o.trys.pop();
                      continue;
                  }
                  a = e.call(t, o);
                } catch (t) {
                  (a = [6, t]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & a[0]) throw a[1];
              return { value: a[0] ? a[1] : void 0, done: !0 };
            })([a, u]);
          };
        }
      }
      function c(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function l(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          s = n.call(t),
          o = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = s.next()).done; )
            o.push(r.value);
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            r && !r.done && (n = s.return) && n.call(s);
          } finally {
            if (i) throw i.error;
          }
        }
        return o;
      }
      function f() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(l(arguments[e]));
        return t;
      }
      function h(t, e, n) {
        if (n || 2 == arguments.length)
          for (var r, i = 0, s = e.length; i < s; i++)
            (!r && i in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
        return t.concat(r || Array.prototype.slice.call(e));
      }
      function p(t) {
        return this instanceof p ? ((this.v = t), this) : new p(t);
      }
      function d(t, e, n) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var r,
          i = n.apply(t, e || []),
          s = [];
        return (
          (r = {}),
          o("next"),
          o("throw"),
          o("return", function (t) {
            return function (e) {
              return Promise.resolve(e).then(t, c);
            };
          }),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function o(t, e) {
          i[t] &&
            ((r[t] = function (e) {
              return new Promise(function (n, r) {
                s.push([t, e, n, r]) > 1 || a(t, e);
              });
            }),
            e && (r[t] = e(r[t])));
        }
        function a(t, e) {
          try {
            var n;
            (n = i[t](e)).value instanceof p
              ? Promise.resolve(n.value.v).then(u, c)
              : l(s[0][2], n);
          } catch (t) {
            l(s[0][3], t);
          }
        }
        function u(t) {
          a("next", t);
        }
        function c(t) {
          a("throw", t);
        }
        function l(t, e) {
          t(e), s.shift(), s.length && a(s[0][0], s[0][1]);
        }
      }
      function y(t) {
        if (!Symbol.asyncIterator)
          throw TypeError("Symbol.asyncIterator is not defined.");
        var e,
          n = t[Symbol.asyncIterator];
        return n
          ? n.call(t)
          : ((t = c(t)),
            (e = {}),
            r("next"),
            r("throw"),
            r("return"),
            (e[Symbol.asyncIterator] = function () {
              return this;
            }),
            e);
        function r(n) {
          e[n] =
            t[n] &&
            function (e) {
              return new Promise(function (r, i) {
                !(function (t, e, n, r) {
                  Promise.resolve(r).then(function (e) {
                    t({ value: e, done: n });
                  }, e);
                })(r, i, (e = t[n](e)).done, e.value);
              });
            };
        }
      }
      "function" == typeof SuppressedError && SuppressedError;
    },
    20199: function (t, e, n) {
      "use strict";
      n.d(e, {
        i: function () {
          return i;
        },
      });
      var r = n(83112);
      function i(t) {
        let e = (0, r.useRef)(null);
        return (
          (0, r.useInsertionEffect)(() => {
            e.current = t;
          }, [t]),
          (0, r.useCallback)((...t) => (0, e.current)(...t), [])
        );
      }
    },
    52338: function (t, e, n) {
      "use strict";
      let r;
      n.d(e, {
        Z: function () {
          return a;
        },
      });
      var i = {
        randomUUID:
          "undefined" != typeof crypto &&
          crypto.randomUUID &&
          crypto.randomUUID.bind(crypto),
      };
      let s = new Uint8Array(16),
        o = [];
      for (let t = 0; t < 256; ++t) o.push((t + 256).toString(16).slice(1));
      var a = function (t, e, n) {
        if (i.randomUUID && !e && !t) return i.randomUUID();
        let a =
          (t = t || {}).random ??
          t.rng?.() ??
          (function () {
            if (!r) {
              if ("undefined" == typeof crypto || !crypto.getRandomValues)
                throw Error(
                  "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                );
              r = crypto.getRandomValues.bind(crypto);
            }
            return r(s);
          })();
        if (a.length < 16) throw Error("Random bytes length must be >= 16");
        if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), e)) {
          if ((n = n || 0) < 0 || n + 16 > e.length)
            throw RangeError(
              `UUID byte range ${n}:${n + 15} is out of buffer bounds`
            );
          for (let t = 0; t < 16; ++t) e[n + t] = a[t];
          return e;
        }
        return (function (t, e = 0) {
          return (
            o[t[e + 0]] +
            o[t[e + 1]] +
            o[t[e + 2]] +
            o[t[e + 3]] +
            "-" +
            o[t[e + 4]] +
            o[t[e + 5]] +
            "-" +
            o[t[e + 6]] +
            o[t[e + 7]] +
            "-" +
            o[t[e + 8]] +
            o[t[e + 9]] +
            "-" +
            o[t[e + 10]] +
            o[t[e + 11]] +
            o[t[e + 12]] +
            o[t[e + 13]] +
            o[t[e + 14]] +
            o[t[e + 15]]
          ).toLowerCase();
        })(a);
      };
    },
  },
]);
