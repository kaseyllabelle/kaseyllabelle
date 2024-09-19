import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_G_tXtM7O.mjs';
import { onRequest } from './_noop-middleware.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/info.astro.mjs');
const _page3 = () => import('./pages/projects/project-1.astro.mjs');
const _page4 = () => import('./pages/projects/project-2.astro.mjs');
const _page5 = () => import('./pages/projects/project-3.astro.mjs');
const _page6 = () => import('./pages/projects/project-4.astro.mjs');
const _page7 = () => import('./pages/projects/project-5.astro.mjs');
const _page8 = () => import('./pages/projects/project-6.astro.mjs');
const _page9 = () => import('./pages/projects/project-7.astro.mjs');
const _page10 = () => import('./pages/resume.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/info.astro", _page2],
    ["src/pages/projects/project-1.mdx", _page3],
    ["src/pages/projects/project-2.mdx", _page4],
    ["src/pages/projects/project-3.mdx", _page5],
    ["src/pages/projects/project-4.mdx", _page6],
    ["src/pages/projects/project-5.mdx", _page7],
    ["src/pages/projects/project-6.mdx", _page8],
    ["src/pages/projects/project-7.mdx", _page9],
    ["src/pages/resume.astro", _page10],
    ["src/pages/index.astro", _page11]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "fd11168b-535a-4ba9-bf5e-4f53e77b46ce"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
