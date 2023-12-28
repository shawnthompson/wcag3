const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const listOutcomes = require('./how-to/build/list-outcomes');

module.exports = function(eleventyConfig) {
  // Ignore a couple things
	eleventyConfig.ignores.add('./*.md');
	eleventyConfig.ignores.add('**/readme.md');
	eleventyConfig.ignores.add('_build/**');
	eleventyConfig.ignores.add('**/_template/**');

  // Global data
  eleventyConfig.addGlobalData("layout", "layout.html");
  eleventyConfig.addGlobalData("./how-to/outcomes", listOutcomes().outcomes);

  // Make it easy to deploy to gh-pages
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Copy `assets/` to `_site/assets`
  eleventyConfig.addPassthroughCopy({"guidelines" : "/"});
  eleventyConfig.addPassthroughCopy({"./how-to/assets" : "/assets"});

  const dir = {
    input: "./",
    output : "_site",
    includes: "./how-to/_includes" // relative to dir.input
  }

  return { dir }
};
