import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'devalue';
import 'html-escaper';
import 'clsx';
import { g as decodeKey } from './chunks/astro/server_APiN1zY-.mjs';
import { compile } from 'path-to-regexp';

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/kaseyllabelle/Documents/career/KLL%20website/kaseyllabelle/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/project-1.CBwqFcGt.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/project-1.CBwqFcGt.css"}],"routeData":{"route":"/info","isIndex":false,"type":"page","pattern":"^\\/info\\/?$","segments":[[{"content":"info","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/info.astro","pathname":"/info","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/project-1.CBwqFcGt.css"}],"routeData":{"route":"/projects/project-1","isIndex":false,"type":"page","pattern":"^\\/projects\\/project-1\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"project-1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/project-1.mdx","pathname":"/projects/project-1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/project-1.CBwqFcGt.css"}],"routeData":{"route":"/projects/project-2","isIndex":false,"type":"page","pattern":"^\\/projects\\/project-2\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"project-2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/project-2.mdx","pathname":"/projects/project-2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/project-1.CBwqFcGt.css"}],"routeData":{"route":"/projects/project-3","isIndex":false,"type":"page","pattern":"^\\/projects\\/project-3\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"project-3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/project-3.mdx","pathname":"/projects/project-3","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/project-1.CBwqFcGt.css"}],"routeData":{"route":"/projects/project-4","isIndex":false,"type":"page","pattern":"^\\/projects\\/project-4\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"project-4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/project-4.mdx","pathname":"/projects/project-4","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/project-1.CBwqFcGt.css"}],"routeData":{"route":"/projects/project-5","isIndex":false,"type":"page","pattern":"^\\/projects\\/project-5\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"project-5","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/project-5.mdx","pathname":"/projects/project-5","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/project-1.CBwqFcGt.css"}],"routeData":{"route":"/projects/project-6","isIndex":false,"type":"page","pattern":"^\\/projects\\/project-6\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"project-6","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/project-6.mdx","pathname":"/projects/project-6","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/project-1.CBwqFcGt.css"}],"routeData":{"route":"/projects/project-7","isIndex":false,"type":"page","pattern":"^\\/projects\\/project-7\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"project-7","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/project-7.mdx","pathname":"/projects/project-7","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/project-1.CBwqFcGt.css"}],"routeData":{"route":"/resume","isIndex":false,"type":"page","pattern":"^\\/resume\\/?$","segments":[[{"content":"resume","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resume.astro","pathname":"/resume","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/project-1.CBwqFcGt.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/projects/project-1.mdx",{"propagation":"none","containsHead":true}],["/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/projects/project-2.mdx",{"propagation":"none","containsHead":true}],["/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/projects/project-3.mdx",{"propagation":"none","containsHead":true}],["/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/projects/project-4.mdx",{"propagation":"none","containsHead":true}],["/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/projects/project-5.mdx",{"propagation":"none","containsHead":true}],["/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/projects/project-6.mdx",{"propagation":"none","containsHead":true}],["/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/projects/project-7.mdx",{"propagation":"none","containsHead":true}],["/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/info.astro",{"propagation":"none","containsHead":true}],["/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/resume.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/info@_@astro":"pages/info.astro.mjs","\u0000@astro-page:src/pages/projects/project-1@_@mdx":"pages/projects/project-1.astro.mjs","\u0000@astro-page:src/pages/projects/project-2@_@mdx":"pages/projects/project-2.astro.mjs","\u0000@astro-page:src/pages/projects/project-3@_@mdx":"pages/projects/project-3.astro.mjs","\u0000@astro-page:src/pages/projects/project-4@_@mdx":"pages/projects/project-4.astro.mjs","\u0000@astro-page:src/pages/projects/project-5@_@mdx":"pages/projects/project-5.astro.mjs","\u0000@astro-page:src/pages/projects/project-6@_@mdx":"pages/projects/project-6.astro.mjs","\u0000@astro-page:src/pages/projects/project-7@_@mdx":"pages/projects/project-7.astro.mjs","\u0000@astro-page:src/pages/resume@_@astro":"pages/resume.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_G_tXtM7O.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/overview.B3Ts-_LA.jpg","/_astro/tech.DUFCd1Yt.jpg","/_astro/loyalty-legacy.D4oiieHC.jpg","/_astro/code-standards.Dsgx5ByY.jpg","/_astro/loyalty-customers.C8iIlOKG.jpg","/_astro/table.DdNcRFkx.jpg","/_astro/overview.C3Mv0eE1.jpg","/_astro/flow.DTipN8Fm.jpg","/_astro/preview.Dd7_Ywhk.jpg","/_astro/overview.DOjQhZdV.jpg","/_astro/wcs-logo-wip.Bj_WKzFN.png","/_astro/loyalty-dashboard.XrHIyh58.jpg","/_astro/wcs-logo.CAUAy_56.png","/_astro/r1.CKgdIRfE.png","/_astro/discovery.Dboy1CPV.png","/_astro/r2.D4JhteVP.png","/_astro/overview.B--iYzYs.jpg","/_astro/foundations.7NyPv6iO.png","/_astro/configurator.BRAtgdte.png","/_astro/r3.DrIwqNAt.png","/_astro/aem-cc.DGJvbubm.jpg","/_astro/architecture.ZFGzPyKr.jpg","/_astro/banners.jIyFBw1O.jpg","/_astro/audit.DzDE2Slp.png","/_astro/theming.CLShOHPs.png","/_astro/react.rNygSDuE.jpg","/_astro/intake.DUlkbPvO.jpg","/_astro/brainstorm.A4xGsD9j.jpg","/_astro/01.CXfbkBan.jpg","/_astro/mvp.Cpsp37oT.png","/_astro/03.C74q45L9.jpg","/_astro/value.CIELQfc7.jpg","/_astro/analytics.ChjP2i-7.jpg","/_astro/08.BMLuugO2.jpg","/_astro/05.D9Z-p92C.jpg","/_astro/09.fTfjzirf.jpg","/_astro/04.InmzEvdU.jpeg","/_astro/01.DJ6jDgg8.jpeg","/_astro/03.Cazi84ry.jpg","/_astro/dwc.OmsatmR3.png","/_astro/02.gymvP041.jpg","/_astro/01.kkbDOPwh.jpg","/_astro/02.BfcoZpw-.jpg","/_astro/03.DbDUWxSY.jpg","/_astro/05.DPCtvluY.jpg","/_astro/r4.BJmR7Xxx.png","/_astro/01.Bo3CByAc.jpg","/_astro/02.Bie-Ikrf.jpg","/_astro/01.BuodVVwY.jpg","/_astro/01.BXwtg70U.jpg","/_astro/01.Juq3qrsr.jpg","/_astro/program.aRA4uMsp.png","/_astro/training.DfjomiPO.png","/_astro/01.WePxnwxh.jpg","/_astro/03.wer8fbVo.jpg","/_astro/07.BUBptEQJ.jpg","/_astro/shifting-left.F8XXLIT_.jpg","/_astro/06.D1pA7FuJ.jpg","/_astro/testing.Jsq9S6sH.png","/_astro/webaim.D9TMIOw-.jpg","/_astro/02.CpbtrfsK.jpg","/_astro/gaad.ERo1thGL.png","/_astro/tableau.BSrabbII.jpg","/_astro/01.D12rGCPf.jpg","/_astro/01.1bc3xB14.jpg","/_astro/scaling-sustaining.9yFixQ8A.png","/_astro/01.CYCPDuXT.jpg","/_astro/02.DHS5FQrR.jpg","/_astro/02._bNsMpY4.jpg","/_astro/03.CFjJYQi8.jpg","/_astro/04.BH-XxIKI.jpg","/_astro/06.Ca9Lr6bA.jpg","/_astro/05.BcRQXltC.jpg","/_astro/07.CnNMpAE5.jpg","/_astro/08.BPCsWNsh.jpg","/_astro/01.Yd-z_eDw.jpg","/_astro/06.BSjuP9HG.jpg","/_astro/05.DMWbStjM.jpg","/_astro/07.CtAPr5GB.jpg","/_astro/08.DIzEltRT.jpg","/_astro/09.C0iUh9ya.jpg","/_astro/12.C4QGTmax.jpg","/_astro/11.DS4yUyPU.jpg","/_astro/02.DNJZirHu.jpg","/_astro/03.XGFLplNc.jpg","/_astro/04.DA8UyGOU.jpg","/_astro/05.CuXMd1f-.jpg","/_astro/01.CFFU6IGM.jpg","/_astro/02.4LxPcw_i.jpg","/_astro/06.8uZ94Z8S.jpg","/_astro/03.eu7zdOCn.jpg","/_astro/03.DgT5xknt.jpg","/_astro/02.pqxRDGVT.jpg","/_astro/04.D3eK1FYv.jpg","/_astro/04.DiOVNa7j.jpg","/_astro/01.DBdhKeGS.jpg","/_astro/02.pdg_dKwc.jpg","/_astro/rhino.D-KJaOFL.jpeg","/_astro/kasey.DqPbeQ4b.jpg","/_astro/project-1.CBwqFcGt.css","/favicon.ico","/favicon.png","/favicon.svg","/logo192.png","/logo512.png","/documents/kaseyllabelle-resume.pdf","/documents/wcs-brand-guide.pdf","/images/anatomy.jpg","/images/art.jpg","/images/boston-scientific.jpg","/images/epsilon.jpg","/images/graphic-design.jpg","/images/vistaprint.svg","/images/wellness-check-services.jpg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"i34mvSn2fF+CQfVkrBkVcpusdqn3Fo9NhOkj/CsGxpI=","experimentalEnvGetSecretEnabled":false});

export { manifest };
