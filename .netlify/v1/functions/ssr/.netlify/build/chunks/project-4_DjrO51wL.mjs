import { _ as __astro_tag_component__, F as Fragment, i as createVNode } from './astro/server_APiN1zY-.mjs';
import { $ as $$MarkdownProjectLayout } from './MarkdownProjectLayout_Btdq0-Ly.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_BRE1Gnjv.mjs';
import 'html-escaper';
import 'clsx';

const overview = new Proxy({"src":"/_astro/overview.DOjQhZdV.jpg","width":2880,"height":1920,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/blueprint/overview.jpg";
							}
							
							return target[name];
						}
					});

const loyaltyLegacy = new Proxy({"src":"/_astro/loyalty-legacy.D4oiieHC.jpg","width":2100,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/blueprint/loyalty-legacy.jpg";
							}
							
							return target[name];
						}
					});

const tech = new Proxy({"src":"/_astro/tech.DUFCd1Yt.jpg","width":2870,"height":752,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/blueprint/tech.jpg";
							}
							
							return target[name];
						}
					});

const codeStandards = new Proxy({"src":"/_astro/code-standards.Dsgx5ByY.jpg","width":2100,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/blueprint/code-standards.jpg";
							}
							
							return target[name];
						}
					});

const loyaltyCustomers = new Proxy({"src":"/_astro/loyalty-customers.C8iIlOKG.jpg","width":2100,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/blueprint/loyalty-customers.jpg";
							}
							
							return target[name];
						}
					});

const table = new Proxy({"src":"/_astro/table.DdNcRFkx.jpg","width":2100,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/blueprint/table.jpg";
							}
							
							return target[name];
						}
					});

const loyaltyDashboard = new Proxy({"src":"/_astro/loyalty-dashboard.XrHIyh58.jpg","width":2880,"height":1920,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/blueprint/loyalty-dashboard.jpg";
							}
							
							return target[name];
						}
					});

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$MarkdownProjectLayout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/MarkdownProjectLayout.astro",
  "id": 3,
  "tag": "design system",
  "title": "Blueprint",
  "description": "Epsilon's first design system and component library",
  "imageSrc": "/images/epsilon.jpg",
  "imageAlt": "Epsilon logo",
  "stack": "HTML, CSS, Sass, Less, Angular, TypeScript, React, jQuery, Razor"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "overview",
    "text": "Overview"
  }, {
    "depth": 2,
    "slug": "background",
    "text": "Background"
  }, {
    "depth": 2,
    "slug": "team-and-role",
    "text": "Team and role"
  }, {
    "depth": 2,
    "slug": "redesign",
    "text": "(Re)design"
  }, {
    "depth": 2,
    "slug": "discovery",
    "text": "Discovery"
  }, {
    "depth": 2,
    "slug": "from-concept-to-production-navigating-trade-offs",
    "text": "From concept to production, navigating trade-offs"
  }, {
    "depth": 2,
    "slug": "scaling-the-team",
    "text": "Scaling the team"
  }, {
    "depth": 2,
    "slug": "peoplecloud-product-suite",
    "text": "PeopleCloud product suite"
  }, {
    "depth": 2,
    "slug": "impact-and-results",
    "text": "Impact and results"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", createVNode(_components.p, {
      children: "Blueprint is Epsilon’s first design system and component library. The system needed to create consistency across the PeopleCloud product suite and accelerate delivery for product teams."
    }), "\n", createVNode("p", {
      class: "subtle",
      children: ["Created with: ", frontmatter.stack]
    }), "\n", createVNode("p", {
      class: "subtle",
      children: createVNode("a", {
        href: "http://epsilon-blueprint.netlify.app",
        target: "_blank",
        rel: "noopener noreferrer",
        class: "link",
        children: "View website"
      })
    }), "\n", createVNode($$Image, {
      src: overview,
      class: "image my-4",
      alt: "Ribbon component usage guidelines on the Blueprint documentation site"
    }), "\n", createVNode(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", createVNode(_components.p, {
      children: "Epsilon is a global data-driven advertising and marketing technology company. Clients include the world’s top brands, agencies, and publishers across industries such as auto, retail, hospitality, financial services, and more."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "8,000 employees worldwide"
      }), "\n", createVNode(_components.li, {
        children: "$1.7 billion annual revenue"
      }), "\n", createVNode(_components.li, {
        children: "250 million verified U.S. consumers"
      }), "\n", createVNode(_components.li, {
        children: "6 award-winning products"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "team-and-role",
      children: "Team and role"
    }), "\n", createVNode(_components.p, {
      children: "I was the first developer to join the Product User Experience Team, made up of one UX manager and two UX designers. Over time, the team grew to include another UX developer, two UX developer interns, and one UX design intern."
    }), "\n", createVNode(_components.p, {
      children: "I worked on building the Blueprint component library and its documentation website from the group up. I also worked across the PeopleCloud product suite to bridge the gap between UX and engineering."
    }), "\n", createVNode(_components.h2, {
      id: "redesign",
      children: "(Re)design"
    }), "\n", createVNode(_components.p, {
      children: "When I joined the team, the designers were working on a product suite redesign. We identified components that were inconsistent across products – such as buttons, links, form controls, tables – and began to standardize them. I participated in design reviews, sharing feedback and proposing ideas, and the designers created a style guide in Sketch."
    }), "\n", createVNode(_components.p, {
      children: "It was a great time to join because it gave me visibility into the pain points across the product suite and a voice in the solutions. The products were not responsive or accessible, so I advocated to include addressing those pain points in the scope of the redesign."
    }), "\n", createVNode($$Image, {
      src: loyaltyLegacy,
      class: "image my-4",
      alt: "Legacy Loyalty screen"
    }), "\n", createVNode(_components.h2, {
      id: "discovery",
      children: "Discovery"
    }), "\n", createVNode(_components.p, {
      children: "Blueprint was a “side of desk” project with no official support or buy-in. It was critical that adopting Blueprint would not be disruptive to product teams and that it would help them accelerate delivery. With this in mind, I conducted a tech stack assessment across the product suite. There was a mix of technologies in use, but the majority of the newer products were using Angular. This made Angular the clear choice for our component library and documentation site."
    }), "\n", createVNode(_components.p, {
      children: "Many products also had deprecated dependencies, multiple CSS frameworks, and even multiple versions of the same CSS framework installed. I created a new product setup guide that included a recommended product architecture and outlined what JavaScript framework, CSS preprocessor, linters, and dependencies to install. I met with leadership to share my recommendation, and it became the standard for all new products."
    }), "\n", createVNode($$Image, {
      src: tech,
      class: "image my-4",
      alt: "Diagram of the technologies used across the product suite"
    }), "\n", createVNode(_components.h2, {
      id: "from-concept-to-production-navigating-trade-offs",
      children: "From concept to production, navigating trade-offs"
    }), "\n", createVNode(_components.p, {
      children: "I began building the component library and documentation site, working closely with designers throughout the process. I quickly realized I had limited capacity and needed to deliver a large project. The products were already using third-party libraries, so I decided to continue leveraging third-party libraries for a few of the more complex components like selects and date pickers until we had support, buy-in, and more resources. I ensured the third-party libraries were open source, lightweight, accessible, and built using TypeScript. And I worked with designers to adapt component designs into custom themes for the third-party solutions."
    }), "\n", createVNode(_components.p, {
      children: "In just six months, we built and shipped the first major version of our component library and documentation site using GitHub, npm, and Netlify."
    }), "\n", createVNode(_components.h2, {
      id: "scaling-the-team",
      children: "Scaling the team"
    }), "\n", createVNode(_components.p, {
      children: "As we delivered value and demand increased, we got approval to open roles. I created a hiring process, and used it to interview and assess candidates for my team as well as product teams. My team grew to include a junior developer and two interns, one of whom joined the team as a full-time employee after graduating. I led and mentored three UX developers, and mentored developers across our seven product teams."
    }), "\n", createVNode(_components.p, {
      children: "I wrote code standards, documented our definition of done, established code review practices, and encouraged pair programming. I also curated training resources and hosted a quarterly webinar series to elevate organizational knowledge. This helped us set a high bar for front-end code while reducing demand on our team."
    }), "\n", createVNode($$Image, {
      src: codeStandards,
      class: "image my-4",
      alt: "Code standards on the Blueprint documentation site"
    }), "\n", createVNode(_components.h2, {
      id: "peoplecloud-product-suite",
      children: "PeopleCloud product suite"
    }), "\n", createVNode(_components.p, {
      children: "While my primary responsibility was to build and maintain Blueprint, I also leaned out to support our product teams. I contributed code to, and reviewed code going into, every codebase in our award-winning SaaS product suite. I assisted product teams with implementation of the redesign, installation and adoption of Blueprint, application of best practices, and feature development."
    }), "\n", createVNode(_components.p, {
      children: "When accessibility became a requirement for our Loyalty product, the team reached out to me. I coached our design intern as she conducted an accessibility audit of the product, and flew to Texas to hold accessibility training sessions for the product team. I led the rebuild of the CSR screens. I refactored a legacy CSS file full of hundreds of ambiguously named classes and !important declarations while I was in there and turned 25,000+ lines of unwieldy CSS into 2,400 lines of maintainable CSS. I also developed dashboards for program and customer overviews."
    }), "\n", createVNode($$Image, {
      src: loyaltyCustomers,
      class: "image my-4",
      alt: "Rebuilt Loyalty screen with the option to create a new customer or search for existing customers"
    }), "\n", createVNode(_components.h2, {
      id: "impact-and-results",
      children: "Impact and results"
    }), "\n", createVNode(_components.p, {
      children: "Blueprint was adopted in all of the PeopleCloud products. This resulted in: increased speed of product development, improved code quality, reduction of duplicative work, decreased maintenance costs, and consistent, accessible, responsive products."
    }), "\n", createVNode($$Image, {
      src: table,
      class: "image my-4",
      alt: "Table component on the Blueprint documentation site"
    }), "\n", createVNode($$Image, {
      src: loyaltyDashboard,
      class: "image mt-4",
      alt: "New Loyalty program dashboard with data visualizations for members, enrollments, transactions, points, bonuses, and redemptions"
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/projects/project-4";
const file = "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/projects/project-4.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/projects/project-4.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	__usesAstroImage,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
