import { c as createComponent, r as renderTemplate, a as renderComponent, d as createAstro, m as maybeRenderHead, f as renderSlot } from './astro/server_APiN1zY-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from './BaseLayout_C1_5dUjR.mjs';

const $$Astro = createAstro();
const $$MarkdownProjectLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownProjectLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-content"> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/layouts/MarkdownProjectLayout.astro", void 0);

export { $$MarkdownProjectLayout as $ };
