// src/index.js
const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host { display: inline-block; font-family: system-ui, Arial, sans-serif; }
    label { display:block; font-size: 12px; margin-bottom: 6px; opacity: .85; }
    select { padding: 8px 10px; border-radius: 10px; border: 1px solid #ccc; min-width: 180px; }
  </style>
  <label part="label"></label>
  <select part="select"></select>
`;

export class Select extends HTMLElement {
  static get observedAttributes() {
    return ["label", "name", "disabled", "value"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.$label = this.shadowRoot.querySelector("label");
    this.$select = this.shadowRoot.querySelector("select");

    this.$select.addEventListener("change", () => {
      // re-emit a nice event
      this.dispatchEvent(
        new CustomEvent("value-change", {
          detail: { value: this.value },
          bubbles: true,
          composed: true,
        }),
      );
    });
  }

  connectedCallback() {
    this.#syncAll();
  }

  attributeChangedCallback() {
    this.#syncAll();
  }

  get value() {
    return this.$select?.value ?? "";
  }

  set value(v) {
    this.setAttribute("value", String(v ?? ""));
  }

  setOptions(options = []) {
    // options: [{ value, label }]
    const current = this.getAttribute("value") ?? "";
    this.$select.innerHTML = "";
    
    // Add default "None" option if options are provided, otherwise empty select
    if (options.length > 0) {
      const noneOption = document.createElement("option");
      noneOption.value = "";
      noneOption.textContent = "None";
      this.$select.appendChild(noneOption);
    }
    
    for (const opt of options) {
      const o = document.createElement("option");
      o.value = String(opt.value);
      o.textContent = String(opt.label);
      this.$select.appendChild(o);
    }
    if (current) this.$select.value = current;
  }

  #syncAll() {
    if (!this.$select) return;

    this.$label.textContent = this.getAttribute("label") ?? "";
    this.$label.style.display = this.$label.textContent ? "block" : "none";

    this.$select.name = this.getAttribute("name") ?? "";
    this.$select.disabled = this.hasAttribute("disabled");

    const v = this.getAttribute("value");
    if (v != null) this.$select.value = v;

    // Allow defining options via a JSON attribute (small + simple)
    // <select-component options='[{"value":"1","label":"One"}]'></select-component>
    const opts = this.getAttribute("options");
    if (opts) {
      try {
        this.setOptions(JSON.parse(opts));
      } catch {
        // ignore invalid JSON
      }
    }
  }
}

if (!customElements.get("select-component")) {
  customElements.define("select-component", Select);
}
