import { _ as __astro_tag_component__, F as Fragment, i as createVNode } from './astro/server_APiN1zY-.mjs';
import { $ as $$MarkdownProjectLayout } from './MarkdownProjectLayout_Btdq0-Ly.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_BRE1Gnjv.mjs';
import 'html-escaper';
import 'clsx';

const overview = new Proxy({"src":"/_astro/overview.B3Ts-_LA.jpg","width":2100,"height":1400,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/business-cards/overview.jpg";
							}
							
							return target[name];
						}
					});

const configurator = new Proxy({"src":"/_astro/configurator.BRAtgdte.png","width":2880,"height":4022,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/business-cards/configurator.png";
							}
							
							return target[name];
						}
					});

const preview = new Proxy({"src":"/_astro/preview.Dd7_Ywhk.jpg","width":2868,"height":1864,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/business-cards/preview.jpg";
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
  "id": 5,
  "tag": "eCommerce web dev",
  "title": "Business cards",
  "description": "Vistaprint's top UX priority",
  "imageSrc": "/images/vistaprint.svg",
  "imageAlt": "Vistaprint logo",
  "stack": "HTML, Sass, React"
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
    "slug": "product-configuration",
    "text": "Product configuration"
  }, {
    "depth": 2,
    "slug": "product-previews",
    "text": "Product previews"
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
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", createVNode(_components.p, {
      children: "Business cards are Vistaprint’s $300M flagship product category. A four-way test on Vistaprint’s updated business cards category page revealed a significant increase in conversion, but a significant decrease in bookings. Customers were choosing lower priced product options. This shift in behavior had a potential revenue impact of -$8M. We needed to drive the take rate of our premium product options."
    }), "\n", createVNode("p", {
      class: "subtle",
      children: ["Created with: ", frontmatter.stack]
    }), "\n", createVNode("p", {
      class: "subtle",
      children: createVNode("a", {
        href: "https://www.vistaprint.com",
        target: "_blank",
        rel: "noopener noreferrer",
        class: "link",
        children: "View website"
      })
    }), "\n", createVNode($$Image, {
      src: overview,
      class: "image my-4",
      alt: "The new standard business cards product page"
    }), "\n", createVNode(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", createVNode(_components.p, {
      children: "Vistaprint is a global e-commerce company that provides a range of digital and print services. Customers are primarily small businesses."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "6,500 employees worldwide"
      }), "\n", createVNode(_components.li, {
        children: "$1.5 billion annual revenue"
      }), "\n", createVNode(_components.li, {
        children: "17 million customers"
      }), "\n", createVNode(_components.li, {
        children: "22 localized websites with 700,000 daily unique visitors"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "team-and-role",
      children: "Team and role"
    }), "\n", createVNode(_components.p, {
      children: "I reported into the engineering organization and sat on the Site Experience Team of 25 software engineers. We were organized into cross-functional squads. Each squad had two back-end engineers, one front-end engineer (me!), one designer, one product owner, and one analyst."
    }), "\n", createVNode(_components.p, {
      children: "I was also deeply involved in the Vistaprint community: I held leadership roles in multiple employee resource groups, helped establish the front-end development center of excellence, and was invited to join the customer experience design community."
    }), "\n", createVNode(_components.h2, {
      id: "product-configuration",
      children: "Product configuration"
    }), "\n", createVNode(_components.p, {
      children: "We started with a series of micro experiments on the product page. The existing product configurator experience was confusing and frustrating. We identified three UX pain points that we wanted to address:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "The customer had to make too many choices before they could start designing their business card,"
      }), "\n", createVNode(_components.li, {
        children: "The styling of incompatible options made customers feel like they weren’t allowed to interact with them, and"
      }), "\n", createVNode(_components.li, {
        children: "When customers did try to select incompatible options, they encountered confusing and frustrating error messages."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "I was the primary developer for our product page enhancements and worked closely with the designer."
    }), "\n", createVNode(_components.p, {
      children: "Increment one reduced the number of choices customers needed to make before converting, helped customers understand how their choice of paper thickness impacted their options for paper stock, and encouraged customers to select a premium option."
    }), "\n", createVNode(_components.p, {
      children: "Increment two removed incompatible options between paper thickness and paper stock, reducing confusion and frustration around incompatible options and errors during product configuration."
    }), "\n", createVNode(_components.p, {
      children: "Increment three gave customers a more accurate product preview based on their selected options along with more information about the way the paper stock feels to help inform their decision-making process."
    }), "\n", createVNode(_components.p, {
      children: "We redirected 50% of the traffic and conducted A/B testing. After seeing positive results, I contributed our component enhancements back to the UI Library."
    }), "\n", createVNode($$Image, {
      src: configurator,
      class: "image my-4",
      alt: "A side-by-side comparison of the control and the final iteration"
    }), "\n", createVNode(_components.h2, {
      id: "product-previews",
      children: "Product previews"
    }), "\n", createVNode(_components.p, {
      children: "Increment four focused on the post-design phase of the flow. The existing 2D product previews didn’t do justice to premium product options like metallic finishes and premium paper thickness."
    }), "\n", createVNode(_components.p, {
      children: "We integrated homegrown 3D rendering technology into the product review step right before checkout. The rendering gave customers a more realistic preview, allowing them to see how their finished design and selected options came together. They could modify their selected options and see their changes reflected in the product preview. Customers could also flip and rotate the rendering, helping them to better visualize premium options."
    }), "\n", createVNode($$Image, {
      src: preview,
      class: "image my-4",
      alt: "An updated version of the product preview"
    }), "\n", createVNode(_components.h2, {
      id: "impact-and-results",
      children: "Impact and results"
    }), "\n", createVNode(_components.p, {
      children: "Updating the business cards flow was the company’s top UX priority. We launched 4 increments in 1 month and delivered a more profitable flow by improving the user experience, encouraging customers to select premium options, and introducing ways for customers to upgrade throughout the flow."
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

const url = "/projects/project-5";
const file = "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/projects/project-5.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/projects/project-5.mdx";
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
