import { _ as __astro_tag_component__, F as Fragment, i as createVNode } from './astro/server_APiN1zY-.mjs';
import { $ as $$MarkdownProjectLayout } from './MarkdownProjectLayout_Btdq0-Ly.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_BRE1Gnjv.mjs';
import 'html-escaper';
import 'clsx';

const program = new Proxy({"src":"/_astro/program.aRA4uMsp.png","width":2888,"height":2221,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/accessibility/program.png";
							}
							
							return target[name];
						}
					});

const training = new Proxy({"src":"/_astro/training.DfjomiPO.png","width":2800,"height":1660,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/accessibility/training.png";
							}
							
							return target[name];
						}
					});

const gaad = new Proxy({"src":"/_astro/gaad.ERo1thGL.png","width":2888,"height":3385,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/accessibility/gaad.png";
							}
							
							return target[name];
						}
					});

const shiftingLeft = new Proxy({"src":"/_astro/shifting-left.F8XXLIT_.jpg","width":2880,"height":1562,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/accessibility/shifting-left.jpg";
							}
							
							return target[name];
						}
					});

const testing = new Proxy({"src":"/_astro/testing.Jsq9S6sH.png","width":2888,"height":2818,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/accessibility/testing.png";
							}
							
							return target[name];
						}
					});

const tableau = new Proxy({"src":"/_astro/tableau.BSrabbII.jpg","width":2880,"height":1620,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/accessibility/tableau.jpg";
							}
							
							return target[name];
						}
					});

const progress = new Proxy({"src":"/_astro/scaling-sustaining.9yFixQ8A.png","width":2888,"height":2601,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/accessibility/scaling-sustaining.png";
							}
							
							return target[name];
						}
					});

const impact = new Proxy({"src":"/_astro/webaim.D9TMIOw-.jpg","width":2880,"height":1800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/images/accessibility/webaim.jpg";
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
  "id": 2,
  "title": "Accessibility",
  "description": "A program to develop, scale, and sustain a culture of digital accessibility at Boston Scientific",
  "imageSrc": "/images/boston-scientific.jpg",
  "imageAlt": "Boston Scientific logo",
  "stack": "Stack"
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
    "slug": "program-development",
    "text": "Program development"
  }, {
    "depth": 2,
    "slug": "education-and-awareness",
    "text": "Education and awareness"
  }, {
    "depth": 2,
    "slug": "shifting-left",
    "text": "Shifting left"
  }, {
    "depth": 2,
    "slug": "testing",
    "text": "Testing"
  }, {
    "depth": 2,
    "slug": "measuring-progress",
    "text": "Measuring progress"
  }, {
    "depth": 2,
    "slug": "scaling-and-sustaining",
    "text": "Scaling and sustaining"
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
      children: "One of the reasons I joined Boston Scientific was to improve web accessibility for patients and caregivers. I established a program to develop, scale, and sustain a culture of accessibility…with no dedicated team, budget, or policy in place."
    }), "\n", createVNode(_components.h2, {
      id: "background",
      children: "Background"
    }), "\n", createVNode(_components.p, {
      children: "Boston Scientific is a global medical technology company and device manufacturer. Customers include healthcare professionals, patients and caregivers, and investors."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "48,000 employees worldwide, organized into 8 business units"
      }), "\n", createVNode(_components.li, {
        children: "$14.2 billion annual revenue"
      }), "\n", createVNode(_components.li, {
        children: "37 million patients treated annually"
      }), "\n", createVNode(_components.li, {
        children: "15,000 products"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "team-and-role",
      children: "Team and role"
    }), "\n", createVNode(_components.p, {
      children: "Accessibility was technically my “side of desk” project, but I acted as an accessibility specialist, program director, and advocate. I also served as the Leadership Sponsor for the Digital Production team’s accessibility group and the Digital Accessibility Chair for the Leadership Education and Allies for Disabilities (LEAD) employee resource group’s (ERG) global cabinet."
    }), "\n", createVNode(_components.h2, {
      id: "program-development",
      children: "Program development"
    }), "\n", createVNode(_components.p, {
      children: "I analyzed website data, Disability Equality Index questions, legal research, capability maturity models, and roles and responsibilities matrices to shape the program’s strategy. I developed the charter, a 3-year plan, and annual roadmaps. I also organized a bi-weekly meeting series for a grassroots team of accessibility champions, and spun up a Jira project and Confluence space to increase visibility."
    }), "\n", createVNode($$Image, {
      src: program,
      class: "image my-4",
      alt: "Program charter and goal slides"
    }), "\n", createVNode(_components.h2, {
      id: "education-and-awareness",
      children: "Education and awareness"
    }), "\n", createVNode(_components.p, {
      children: "I identified some redundant monitoring tools and reallocated the budget for a pilot training program. Training would establish a shared baseline of accessibility knowledge across roles, and it was a crucial step in our path forward."
    }), "\n", createVNode(_components.p, {
      children: "I initiated a partnership with Level Access to help with the rollout, and managed the business relationship, contracts, and budget. We offered two instructor-led courses to 1,000 people and self-paced online training to 100 people. I selected the instructor-led courses, and defined role-based learning paths for the online training."
    }), "\n", createVNode($$Image, {
      src: training,
      class: "image my-4",
      alt: "Training pitch and cover slides"
    }), "\n", createVNode(_components.p, {
      children: "The pilot training program was complemented by various resources, including code standards, checklists, tools, and articles. We also promoted external events like axe-con and organized audience-specific presentations and internal events to raise awareness and generate enthusiasm."
    }), "\n", createVNode(_components.p, {
      children: "I approached the LEAD and Pride ERGs about co-sponsoring Hayden Kristal’s GaySL workshop and helped organize the event. Attendees learned LGBTQ-related American Sign Language signs and participated in a group discussion about the intersection of Deafness and Queerness."
    }), "\n", createVNode(_components.p, {
      children: "I also organized our first and second annual Global Accessibility Awareness Day (GAAD) celebrations: a digital scavenger hunt that taught participants how to find information about disabilities, assistive technology, Web Content Accessibility Guidelines (WCAG), and more."
    }), "\n", createVNode($$Image, {
      src: gaad,
      class: "image my-4",
      alt: "GAAD SharePoint page and scavenger hunt questions"
    }), "\n", createVNode(_components.h2, {
      id: "shifting-left",
      children: "Shifting left"
    }), "\n", createVNode(_components.p, {
      children: "As Jeanne Spellman, a now-retired Web Accessibility Engineer for W3C and TPG, said, “You do not want to end up with an automated accessibility report with hundreds (or thousands) of bugs and no way forward…That’s how companies fail at digital accessibility …It becomes a big, expensive problem that no one wants to solve.”"
    }), "\n", createVNode(_components.p, {
      children: "We had over 46,000 occurrences of automatically-detectable issues in Siteimprove. With Jeanne’s words of wisdom in mind, I recommended that we focus on incorporating accessibility in new or updated experiences. I identified opportunities to shift left – moving accessibility upstream in our processes – to prevent the introduction of new issues, and encouraged my team to lead by example."
    }), "\n", createVNode($$Image, {
      src: shiftingLeft,
      class: "image my-4",
      alt: "Siteimprove slide with scores for the corporate site, the number of issues detected, and the industry benchmark"
    }), "\n", createVNode(_components.p, {
      children: "I led the cross-functional design system product team. We defined accessibility as one of the foundations of our design system. And we publicly documented our position and approach, along with an accessibility statement and a wealth of resources to support others on their learning journey."
    }), "\n", createVNode("figure", {
      class: "my-4 decorative-treatment",
      children: [createVNode("blockquote", {
        children: createVNode(_components.p, {
          children: "The work your team has done in this space is the most thoughtful and comprehensive guidance I have seen. I’m grateful to have access to it!"
        })
      }), createVNode("figcaption", {
        children: createVNode(_components.p, {
          children: "— Jen Ewing, digital producer"
        })
      })]
    }), "\n", createVNode(_components.p, {
      children: "I also developed a style system on top of AEM Core Components as a stop-gap to improve the accessibility of our corporate website while we established our global design system, established a partnership with 3Play Media to improve video accessibility, and identified opportunities to make small code changes with a big impact – modifying just 10 characters in a global component’s code improved the accessibility scores across 24 sites by an average of 1.79 points."
    }), "\n", createVNode(_components.h2, {
      id: "testing",
      children: "Testing"
    }), "\n", createVNode(_components.p, {
      children: "I learned that, if teams were conducting accessibility testing at all, they were relying on volunteers from the LEAD ERG. Teams were only capturing feedback from one or two people’s perspectives, and people with disabilities were being asked to provide uncompensated labor. I expanded our partnership with Level Access and overhauled our testing practices."
    }), "\n", createVNode(_components.p, {
      children: "The design system team used a mix of automated and manual testing practices to validate our work from design through production. We used contrast checkers, Sketch and Figma plugins, keyboards and screen readers, developer tools, browser extensions, linters, and Siteimprove. We conducted user testing with people with disabilities, prioritized stories to address the findings, and documented our testing practices and preferred tools. We also conducted design reviews, code reviews, and accessibility audits for teams across the company, provided feedback on how teams could improve the accessibility of their product, and shared our testing practices to increase organizational knowledge and promote best practices."
    }), "\n", createVNode($$Image, {
      src: testing,
      class: "image my-4",
      alt: "Siteimprove and AMP dashboards for Anatomy"
    }), "\n", createVNode(_components.h2, {
      id: "measuring-progress",
      children: "Measuring progress"
    }), "\n", createVNode(_components.p, {
      children: "After my team inherited Boston Scientific’s instance of Siteimprove, I realized we weren’t fully leveraging the power of the tool. I initiated a project to operationalize the tool. I developed the project goals and SOW, hired and managed a contractor, developed an SOP, and communicated updates to our internal users. I also partnered with a product owner on our platform team to create a Jira Service Management intake form, leveraging automation to create Jira tickets for Siteimprove-related requests and help determine resourcing needed to maintain the tool."
    }), "\n", createVNode(_components.p, {
      children: "Once our instance of Siteimprove was cleaned up, I partnered with product owners across the organization to document baseline scores. I helped teams and individuals define and achieve accessibility goals, and defined KPIs and OKRs for the accessibility program to measure progress and organizational maturity."
    }), "\n", createVNode(_components.p, {
      children: "I also partnered with the Data and Analytics team to create an accessibility dashboard in Tableau. The dashboard used Siteimprove’s API to calculate an accessibility score for the portfolio, display individual site scores, and track the percent change. It also surfaced WebAIM Million rankings, and the difference in ranking over time, for Boston Scientific and four competitors from 2019 to the present. The dashboard created visibility for the accessibility program during quarterly and annual readouts with senior leadership."
    }), "\n", createVNode($$Image, {
      src: tableau,
      class: "image my-4",
      alt: "Accessibility dashboard in Tableau"
    }), "\n", createVNode(_components.h2, {
      id: "scaling-and-sustaining",
      children: "Scaling and sustaining"
    }), "\n", createVNode(_components.p, {
      children: "While we’ve made significant progress, it’s been difficult to achieve some of our larger goals without a dedicated team and company-wide accessibility policy. I developed the business case for building a dedicated accessibility team to expand internal expertise and increase disability representation. I prepared recommendations for strat plan and AOP, and presented them to senior leadership to request their support in prioritizing accessibility. I also partnered with Level Access to draft a company-wide accessibility policy, and socialized the draft with global stakeholders from HR, Legal, DE&I, IT, Marketing, Quality, Policy Central, and the LEAD ERG."
    }), "\n", createVNode($$Image, {
      src: progress,
      class: "image my-4",
      alt: "Timeline of achievements and requests for support in scaling and sustaining"
    }), "\n", createVNode(_components.h2, {
      id: "impact-and-results",
      children: "Impact and results"
    }), "\n", createVNode(_components.p, {
      children: "Our design system accessibility scores consistently exceeded targets and industry benchmarks, and adoption of our design system improved accessibility in downstream products by an average of 42%. Our WebAIM Million ranking for our corporate website increased by >574k, landing Boston Scientific in the top 25% and surpassing our competitors."
    }), "\n", createVNode($$Image, {
      src: impact,
      class: "image mt-4",
      alt: "WebAIM Million competitive analysis"
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

const url = "/projects/project-2";
const file = "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/projects/project-2.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/kaseyllabelle/Documents/career/KLL website/kaseyllabelle/src/pages/projects/project-2.mdx";
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
