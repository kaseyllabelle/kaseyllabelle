import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as createAstro, a as renderComponent } from '../chunks/astro/server_APiN1zY-.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_C1_5dUjR.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { tag, title, url, description, imageSrc, imageAlt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="project-card"> <div class="project-card-content"> <a${addAttribute(url, "href")} class="project-card-name"> ${title} </a> ${description && renderTemplate`<p class="project-card-description">${description}</p>`} </div> <img${addAttribute(`${imageSrc}`, "src")}${addAttribute(imageAlt, "alt")} class="project-card-image"> </div>`;
}, "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/components/ProjectCard.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allProjects = await Astro2.glob(/* #__PURE__ */ Object.assign({"./projects/project-1.mdx": () => import('../chunks/project-1_DN_XzBM3.mjs').then(n => n._),"./projects/project-2.mdx": () => import('../chunks/project-2_-iPml3tg.mjs').then(n => n._),"./projects/project-3.mdx": () => import('../chunks/project-3_CyJx6g6A.mjs').then(n => n._),"./projects/project-4.mdx": () => import('../chunks/project-4_DjrO51wL.mjs').then(n => n._),"./projects/project-5.mdx": () => import('../chunks/project-5_BKMWVfQ_.mjs').then(n => n._),"./projects/project-6.mdx": () => import('../chunks/project-6_PvTJCK09.mjs').then(n => n._),"./projects/project-7.mdx": () => import('../chunks/project-7_itV0mxFc.mjs').then(n => n._)}), () => "../pages/projects/*.mdx");
  const pageTitle = "Work";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="page-content page-content-projects"> <div class="projects"> ${allProjects.map((post) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "url": post.url, "title": post.frontmatter.title, "description": post.frontmatter.description, "imageSrc": post.frontmatter.imageSrc, "imageAlt": post.frontmatter.imageAlt })}`)} </div> </div> ` })}`;
}, "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/index.astro", void 0);

const $$file = "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
