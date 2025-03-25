import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_yIbkrCIN.mjs';
import 'kleur/colors';
import 'clsx';
import { c as capitalize } from './MainLayout_C5LjYp1N.mjs';

const $$Astro = createAstro();
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-2"> ${tags.map((tag, index) => renderTemplate`<span${addAttribute(index % 2 === 0 ? "px-2 py-1 bg-green-500 text-white rounded-full text-xs hover:opacity-90" : "px-2 py-1 bg-indigo-500 text-white rounded-full text-xs hover:opacity-90", "class")}> <a${addAttribute("/articles/tag/" + tag, "href")}>#${capitalize(tag)}</a></span>`)} </div>`;
}, "/Users/robinmathew/Desktop/code2/astroBlog/src/components/Tags.astro", void 0);

export { $$Tags as $ };
