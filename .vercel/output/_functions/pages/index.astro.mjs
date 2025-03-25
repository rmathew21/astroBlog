import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_yIbkrCIN.mjs';
import 'kleur/colors';
import { $ as $$SearchForm } from '../chunks/SearchForm_QpMuxpWy.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_COqDc9Ri.mjs';
import 'clsx';
import { f as formatDate, H as HOMEPAGE_ARTICLE_LIMIT, $ as $$MainLayout } from '../chunks/MainLayout_C5LjYp1N.mjs';
import { g as getCollection } from '../chunks/_astro_content_DyyibTSY.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$MostRecentArticle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MostRecentArticle;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative inline-block w-full sm:w-auto cursor-pointer rounded-2xl"> <a${addAttribute("/articles/" + article.slug, "href")}> <img${addAttribute("/images/" + article.data.image, "src")} alt="Article Image" class="w-full h-auto rounded-2xl"> <div class="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-80 hover:opacity-75 transition duration-300 ease-in-out text-white text-center rounded-2xl"> <div> <h2 class="text-2xl font-semibold sm:text-3xl"> ${article.data.title} </h2> <p class="text-xl mt-4"> ${formatDate(article.data.pubDate)} </p> <!-- Tags with rounded border --> <div class="flex mt-4 justify-center"> ${article.data.tags.map((tag) => renderTemplate`<span class="px-2 py-1 border text-white rounded-full text-xs mr-2">${tag}</span>`)} </div> </div> </div> </a> </div>`;
}, "/Users/robinmathew/Desktop/code2/astroBlog/src/components/MostRecentArticle.astro", void 0);

const $$Astro$1 = createAstro();
const $$Welcome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Welcome;
  const { Title = "Articles, Stories & Tutorials for Tech People" } = Astro2.props;
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const mostRecentArticle = allBlogArticles[0];
  const otherArticles = allBlogArticles.slice(1);
  return renderTemplate`<!-- <MainLayout Title={Title}> --><!-- Top Grid -->${maybeRenderHead()}<div class="grid grid-cols-1 gap-5 lg:grid-cols-2"> <div> <h1 class="text-5xl font-bold mt-4 mb-8 leading-tight xl:text-6xl">
Articles, Stories, & Tutorials for Tech People
</h1> ${renderComponent($$result, "SearchForm", $$SearchForm, {})} </div> ${renderComponent($$result, "MostRecentArticle", $$MostRecentArticle, { "article": mostRecentArticle })} </div> <!-- Main Grid --> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${otherArticles.slice(0, HOMEPAGE_ARTICLE_LIMIT).map((article) => renderTemplate`${renderComponent($$result, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> <!-- </MainLayout> -->`;
}, "/Users/robinmathew/Desktop/code2/astroBlog/src/components/Welcome.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Welcome", $$Welcome, {})} ` })}`;
}, "/Users/robinmathew/Desktop/code2/astroBlog/src/pages/index.astro", void 0);

const $$file = "/Users/robinmathew/Desktop/code2/astroBlog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
