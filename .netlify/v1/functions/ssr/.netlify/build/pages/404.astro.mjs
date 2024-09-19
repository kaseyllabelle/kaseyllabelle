import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_APiN1zY-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C1_5dUjR.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_BRE1Gnjv.mjs';
export { renderers } from '../renderers.mjs';

const rhino = new Proxy({"src":"/_astro/rhino.D-KJaOFL.jpeg","width":3024,"height":3024,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/rhino.jpeg";
							}
							
							return target[name];
						}
					});

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "404 Page Not Found";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-content"> <p class="assertive">Oh, no! The page you're looking for is not here.</p> <p class="paragraph">
Please accept this puppy pic as a token of my apology.
</p> <p class="subtle"> <a href="/" class="link">Go to the home page</a> </p> </div> ${renderComponent($$result2, "Image", $$Image, { "src": rhino, "class": "page-media image-square decorative-treatment", "alt": "Portrait of Rhino, a very cute grey pitbull with a white horn-shaped marking on his face who has brown eyes, a black nose, and a very curious ear. " })} ` })}`;
}, "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/404.astro", void 0);

const $$file = "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
