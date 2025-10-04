function _layout($$payload, $$props) {
  let { children } = $$props;
  children($$payload);
  $$payload.out.push(`<!---->`);
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-CIzT1gSW.js.map
