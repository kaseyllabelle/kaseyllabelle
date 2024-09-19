import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, b as addAttribute, d as createAstro, e as renderHead, f as renderSlot } from './astro/server_APiN1zY-.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                             */

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="logo" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"> <path d="M135.4342,230l-32.62-44.9016V230H70V88h32.8147v78.4841l32.43-43.5586h40.4874l-44.519,53.73L176.1168,230Z"></path> <polygon points="230 265 35 265 35 0 0 0 0 300 230 300 230 265"></polygon> <polygon points="70 0 70 35 265 35 265 300 300 300 300 0 70 0"></polygon> </svg>`;
}, "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/components/Logo.astro", void 0);

const $$IconMenuExpand = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="icon" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path fill="currentColor" d="M0 64H448v64H0V64zM0 224H448v64H0V224zM448 384v64H0V384H448z"></path> </svg>`;
}, "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/components/Icons/IconMenuExpand.astro", void 0);

const $$ToggleMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="menuToggle" class="menu-toggle" aria-label="Toggle navigation"> ${renderComponent($$result, "IconMenuExpand", $$IconMenuExpand, {})} <!-- <IconMenuCollapse /> --> </button>`;
}, "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/components/ToggleMenu.astro", void 0);

const $$Astro$1 = createAstro();
const $$NavPrimary = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NavPrimary;
  const pathname = Astro2.url.pathname;
  const currentPath = pathname.slice(1);
  return renderTemplate`${maybeRenderHead()}<nav class="nav"> <ul class="nav-list"> <li class="nav-item"> <a href="/"${addAttribute(currentPath === "" ? "link active" : "link", "class")}> Work </a> </li> <li class="nav-item"> <a href="/info"${addAttribute(currentPath === "info" ? "link active" : "link", "class")}>
Info
</a> </li> <li class="nav-item"> <a href="/documents/kaseyllabelle-resume.pdf" target="_blank" rel="noopener noreferrer" class="link">
Resume
</a> </li> <li class="nav-item"> <a href="https://goo.gl/forms/fcvTryc6Pryrxjfj2" target="_blank" rel="noopener noreferrer" class="link">
Contact
</a> </li> </ul> </nav>`;
}, "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/components/NavPrimary.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="app-header"> <a href="/" class="cta-logo" aria-label="KLL home"> ${renderComponent($$result, "Logo", $$Logo, {})} </a> ${renderComponent($$result, "ToggleMenu", $$ToggleMenu, {})} <div class="menu"> ${renderComponent($$result, "NavPrimary", $$NavPrimary, {})} <!-- <ToggleMode /> --> </div> </header>`;
}, "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="app-footer"> <small class="subtle">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Kasey L. Labelle
</small> </footer>`;
}, "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  const pathname = Astro2.url.pathname;
  const currentPath = pathname.slice(1);
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" href="/favicon.png"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"><title>${pageTitle}</title>${renderHead()}</head> <body> <div class="progress-container fixed-top"> <span class="progress-bar"></span> </div> <div class="app-root"> <div class="app-container"> ${renderComponent($$result, "Header", $$Header, {})} <main class="app-main"> <section class="section"${addAttribute(currentPath === "" ? "section-work" : "section", "class")}> <h1 class="page-header">${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </div> </body></html>`;
}, "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
