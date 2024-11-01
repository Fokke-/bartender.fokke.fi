import {
  __publicField
} from "./chunk-V6TY7KAL.js";

// ../vue-bartender.js/node_modules/.pnpm/@fokke-+bartender.js@3.0.0-beta.12/node_modules/@fokke-/bartender.js/dist/bartender.js
var i = class extends Error {
  constructor(e) {
    super(e), this.name = "Bartender error";
  }
};
var l = (n) => Object.entries(n).reduce(
  (e, [r, t]) => (typeof t > "u" || (e[r] = t), e),
  {}
);
var h = (n, e = document) => n instanceof Element ? n : typeof n == "string" ? e.querySelector(n) : null;
var d = (n = 100) => new Promise((e) => n ? setTimeout(e, n) : e());
var o = class {
  /**
   * Create a new bar
   */
  constructor(e, r = {}) {
    /** Enable debug mode? */
    __publicField(this, "debug", false);
    /** Is bar initialized? */
    __publicField(this, "initialized", false);
    /** Bar name */
    __publicField(this, "_name", "");
    /** Bar element */
    __publicField(this, "el");
    /** Bar position */
    __publicField(this, "_position", "left");
    /** Is the bar a modal? */
    __publicField(this, "_modal", true);
    /** Enable overlay? */
    __publicField(this, "_overlay", true);
    /** Enable permanent mode? */
    __publicField(this, "_permanent", false);
    /** Scroll to the top when bar is opened? */
    __publicField(this, "_scrollTop", true);
    /** Is the bar currently open? */
    __publicField(this, "isOpened", false);
    /** Handler for dialog close event */
    __publicField(this, "onCloseHandler");
    /** Handler for dialog click event */
    __publicField(this, "onClickHandler");
    if (!e)
      throw new i("Bar name is required");
    this.name = e;
    const t = h(r.el || null);
    if (!t)
      throw new i(`Element for bar '${this.name}' is required`);
    if (t.tagName !== "DIALOG")
      throw new i(
        `Bar element for '${this.name}' must be a <dialog> element`
      );
    this.el = t, this.el.classList.add("bartender-bar", "bartender-bar--closed"), this.position = r.position ?? this._position, this.modal = r.modal ?? this._modal, this.overlay = r.overlay ?? this._overlay, this.permanent = r.permanent ?? this._permanent, this.scrollTop = r.scrollTop ?? this._scrollTop, this.onCloseHandler = async (s) => {
      this.debug && console.debug("Closing bar", this), this.el.dispatchEvent(
        new CustomEvent("bartender-bar-before-close", {
          bubbles: true,
          detail: { bar: this }
        })
      ), this.el.classList.remove("bartender-bar--open"), this.isOpened = false, await d(this.getTransitionDuration()), this.el.classList.add("bartender-bar--closed"), this.el.dispatchEvent(
        new CustomEvent("bartender-bar-after-close", {
          bubbles: true,
          detail: { bar: this }
        })
      ), this.debug && console.debug("Finished closing bar", this);
    }, this.onClickHandler = (s) => {
      const a = this.el.getBoundingClientRect();
      this.permanent === false && (a.left > s.clientX || a.right < s.clientX || a.top > s.clientY || a.bottom < s.clientY) && (s.stopPropagation(), this.el.dispatchEvent(
        new CustomEvent("bartender-bar-backdrop-click", {
          bubbles: true,
          detail: {
            bar: this
          }
        })
      ));
    }, this.el.addEventListener("close", this.onCloseHandler), this.el.addEventListener("click", this.onClickHandler), this.initialized = true;
  }
  /**
   * Destroy bar instance
   */
  destroy() {
    return this.el.classList.remove(
      "bartender-bar",
      `bartender-bar--position-${this.position}`
    ), this.el.removeEventListener("close", this.onCloseHandler), this.el.removeEventListener("click", this.onClickHandler), this;
  }
  /** Bar name */
  get name() {
    return this._name;
  }
  set name(e) {
    this._name = e, this.initialized !== false && (this.el.dispatchEvent(
      new CustomEvent("bartender-bar-updated", {
        bubbles: true,
        detail: {
          bar: this,
          property: "name",
          value: e
        }
      })
    ), this.debug && console.debug("Updated bar name", this));
  }
  /** Bar position */
  get position() {
    return this._position;
  }
  set position(e) {
    if (!e)
      throw new i(`Position is required for bar '${this.name}'`);
    const r = [
      "left",
      "right",
      "top",
      "bottom"
    ];
    if (!r.includes(e))
      throw new i(
        `Invalid position '${e}' for bar '${this.name}'. Use one of the following: ${r.join(", ")}.`
      );
    this.el.classList.remove(`bartender-bar--position-${this._position}`), this.el.classList.add(`bartender-bar--position-${e}`), this._position = e, this.initialized !== false && (this.el.dispatchEvent(
      new CustomEvent("bartender-bar-updated", {
        bubbles: true,
        detail: {
          bar: this,
          property: "position",
          value: e
        }
      })
    ), this.debug && console.debug("Updated bar position", this));
  }
  /** Is the bar a modal? */
  get modal() {
    return this._modal;
  }
  set modal(e) {
    this._modal = e, this.initialized !== false && (this.el.dispatchEvent(
      new CustomEvent("bartender-bar-updated", {
        bubbles: true,
        detail: {
          bar: this,
          property: "modal",
          value: e
        }
      })
    ), this.debug && console.debug("Updated bar modal setting", this));
  }
  /** Enable overlay? */
  get overlay() {
    return this._overlay;
  }
  set overlay(e) {
    this._overlay = e, e === true ? this.el.classList.add("bartender-bar--has-overlay") : this.el.classList.remove("bartender-bar--has-overlay"), this.initialized !== false && (this.el.dispatchEvent(
      new CustomEvent("bartender-bar-updated", {
        bubbles: true,
        detail: {
          bar: this,
          property: "overlay",
          value: e
        }
      })
    ), this.debug && console.debug("Updated bar overlay", this));
  }
  /** Enable permanent mode? */
  get permanent() {
    return this._permanent;
  }
  set permanent(e) {
    this._permanent = e, this.initialized !== false && (this.el.dispatchEvent(
      new CustomEvent("bartender-bar-updated", {
        bubbles: true,
        detail: {
          bar: this,
          property: "permanent",
          value: e
        }
      })
    ), this.debug && console.debug("Updated bar permanence", this));
  }
  /** Scroll to the top when bar is opened? */
  get scrollTop() {
    return this._scrollTop;
  }
  set scrollTop(e) {
    this._scrollTop = e, this.initialized !== false && (this.el.dispatchEvent(
      new CustomEvent("bartender-bar-updated", {
        bubbles: true,
        detail: {
          bar: this,
          property: "scrollTop",
          value: e
        }
      })
    ), this.debug && console.debug("Updated bar scrollTop", this));
  }
  /**
   * Is bar currently open?
   */
  isOpen() {
    return this.isOpened;
  }
  /**
   * Open bar
   */
  async open() {
    return this.el.dispatchEvent(
      new CustomEvent("bartender-bar-before-open", {
        bubbles: true,
        detail: { bar: this }
      })
    ), this.debug && console.debug("Opening bar", this), this.modal === true ? this.el.showModal() : this.el.show(), this.scrollTop === true && this.scrollToTop(), this.el.classList.remove("bartender-bar--closed"), this.el.classList.add("bartender-bar--open"), this.isOpened = true, await d(this.getTransitionDuration()), this.debug && console.debug("Finished opening bar", this), this.el.dispatchEvent(
      new CustomEvent("bartender-bar-after-open", {
        bubbles: true,
        detail: { bar: this }
      })
    ), this;
  }
  /**
   * Close bar
   */
  async close() {
    return this.el.close(), await d(this.getTransitionDuration()), this;
  }
  /**
   * Scroll bar to the top
   */
  scrollToTop() {
    return this.el.scrollTo(0, 0), this;
  }
  /**
   * Get transition duration in milliseconds
   */
  getTransitionDuration() {
    return parseFloat(window.getComputedStyle(this.el).transitionDuration || "0") * 1e3;
  }
};
var u = class {
  /**
   * Create a new Bartender instance
   */
  constructor(e = {}, r = {}) {
    /** Enable debug mode? */
    __publicField(this, "_debug", false);
    /** Bars added to the instance */
    __publicField(this, "bars", []);
    /** Currently open bars */
    __publicField(this, "openBars", []);
    /** Default options for the bars */
    __publicField(this, "barDefaultOptions", {
      el: null,
      position: "left",
      overlay: true,
      permanent: false,
      scrollTop: true
    });
    /** Handler for keydown events */
    __publicField(this, "onKeydownHandler");
    /** Handler for bartender-bar-before-open events */
    __publicField(this, "onBarBeforeOpenHandler");
    /** Handler for bartender-bar-before-close events */
    __publicField(this, "onBarBeforeCloseHandler");
    /** Handler for bartender-bar-backdrop-click events */
    __publicField(this, "onBarBackdropClickHandler");
    this.debug = e.debug ?? this._debug, this.barDefaultOptions = {
      ...this.barDefaultOptions,
      ...r
    }, this.onKeydownHandler = ((t) => {
      var _a;
      if (t.key === "Escape" && ((_a = this.getOpenBar(true)) == null ? void 0 : _a.permanent) === true) {
        t.preventDefault();
        return;
      }
    }).bind(this), this.onBarBeforeOpenHandler = (t) => {
      this.openBars.push(t.detail.bar), this.openBars.some((s) => s.modal === true) && document.body.classList.add("bartender-disable-scroll"), document.body.classList.add("bartender-open");
    }, this.onBarBeforeCloseHandler = (t) => {
      this.openBars.splice(this.openBars.indexOf(t.detail.bar), 1), this.openBars.length || document.body.classList.remove("bartender-open"), this.openBars.some((s) => s.modal === true) || document.body.classList.remove("bartender-disable-scroll");
    }, this.onBarBackdropClickHandler = (t) => {
      var _a;
      ((_a = this.getOpenBar(true)) == null ? void 0 : _a.name) === t.detail.bar.name && this.close(t.detail.bar.name);
    }, typeof document < "u" && typeof window < "u" && (document.addEventListener(
      "keydown",
      this.onKeydownHandler
    ), document.addEventListener(
      "bartender-bar-before-open",
      this.onBarBeforeOpenHandler
    ), document.addEventListener(
      "bartender-bar-before-close",
      this.onBarBeforeCloseHandler
    ), document.addEventListener(
      "bartender-bar-backdrop-click",
      this.onBarBackdropClickHandler
    ), document.body.classList.add("bartender-ready"), window.dispatchEvent(
      new CustomEvent("bartender-init", {
        detail: { bartender: this }
      })
    ), this.debug && console.debug("Bartender initialized", this));
  }
  /** Enable debug mode? */
  get debug() {
    return this._debug;
  }
  set debug(e) {
    this._debug = e;
    for (const r of this.bars)
      r.debug = e;
  }
  /**
   * Get bar instance by name.
   */
  getBar(e) {
    return this.bars.find((r) => r.name === e) || null;
  }
  /**
   * Get the topmost open bar instance.
   */
  getOpenBar(e = void 0) {
    const r = typeof e == "boolean" ? this.openBars.filter((t) => t.modal === e) : this.openBars;
    return r.length ? r[r.length - 1] : null;
  }
  /**
   * Add a new bar
   */
  addBar(e, r = {}) {
    if (!e)
      throw new i("Bar name is required");
    if (this.getBar(e))
      throw new i(`Bar with name '${e}' is already defined`);
    const t = new o(e, {
      ...this.barDefaultOptions,
      ...l(r)
    });
    if (t.debug = this.debug, this.bars.some((s) => s.el === t.el))
      throw new i(
        `Element of bar '${t.name}' is already being used for another bar`
      );
    return this.bars.push(t), window.dispatchEvent(
      new CustomEvent("bartender-bar-added", {
        detail: { bar: t }
      })
    ), this.debug && console.debug("Added a new bar", t), t;
  }
  /**
   * Remove bar instance by name
   */
  removeBar(e) {
    if (!e)
      throw new i("Bar name is required");
    const r = this.getBar(e);
    if (!r)
      throw new i(`Bar with name '${e}' was not found`);
    return r.isOpen() === true && this.close(e), r.destroy(), this.bars.splice(
      this.bars.findIndex((t) => t.name === e),
      1
    ), window.dispatchEvent(
      new CustomEvent("bartender-bar-removed", {
        detail: { name: e }
      })
    ), this.debug && console.debug(`Removed bar '${e}'`), this;
  }
  /**
   * Open bar
   *
   * Resolves after the bar has opened.
   */
  async open(e, r = false) {
    const t = e instanceof o ? e : typeof e == "string" ? this.getBar(e) : null;
    if (!t)
      throw new i(`Unknown bar '${e}'`);
    return t.isOpen() === true || (r === false && this.closeAll(), await t.open()), t;
  }
  /**
   * Close bar
   *
   * If bar is undefined, the topmost bar will be closed. Resolves after the bar has closed.
   */
  async close(e) {
    const r = e ? e instanceof o ? e : typeof e == "string" ? this.getBar(e) : null : this.getOpenBar();
    return !r || !r.isOpen() ? null : (await r.close(), r);
  }
  /**
   * Close all bars
   *
   * Resolves after all the bars have been closed.
   */
  async closeAll(e = false) {
    const r = this.openBars.reduce((t, s) => (e === false && s.modal === false || t.push(s.name), t), []);
    return await Promise.all(
      r.map((t) => this.close(t))
    ), this;
  }
  /**
   * Toggle bar open/closed state.
   *
   * Resolves after the bar has opened or closed.
   */
  async toggle(e, r = false) {
    const t = e instanceof o ? e : typeof e == "string" ? this.getBar(e) : null;
    if (!t)
      throw new i(`Unknown bar '${e}'`);
    return t.isOpen() === true ? await this.close(t) : await this.open(t, r);
  }
  /**
   * Destroy Bartender instance
   */
  destroy() {
    this.closeAll();
    const e = this.bars.flatMap((r) => r.name);
    for (const r of e)
      this.getBar(r) && this.removeBar(r);
    return document.body.classList.remove("bartender", "bartender-ready"), document.removeEventListener(
      "keydown",
      this.onKeydownHandler
    ), document.removeEventListener(
      "bartender-bar-before-open",
      this.onBarBeforeOpenHandler
    ), document.removeEventListener(
      "bartender-bar-before-close",
      this.onBarBeforeCloseHandler
    ), document.removeEventListener(
      "bartender-bar-backdrop-click",
      this.onBarBackdropClickHandler
    ), window.dispatchEvent(
      new CustomEvent("bartender-destroyed", {
        detail: { bartender: this }
      })
    ), this.debug && console.debug("Bartender destroyed", this), this;
  }
};
export {
  u as Bartender,
  o as BartenderBar
};
//# sourceMappingURL=@fokke-_bartender__js.js.map
