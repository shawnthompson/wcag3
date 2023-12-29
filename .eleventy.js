const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

// Disabled for now
// const listOutcomes = require('./how-to/build/list-outcomes');

module.exports = function(eleventyConfig) {

	// Ignore a couple things
	eleventyConfig.ignores.add('**/_template/**');

	// Global data not needed right now
	//   eleventyConfig.addGlobalData("layout", "layout.html");
	//   eleventyConfig.addGlobalData("./how-to/outcomes", listOutcomes().outcomes);

	// Make it easy to deploy to gh-pages
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	// Copy files to _site folder
	eleventyConfig.addPassthroughCopy({"./_src/assets" : "assets"});
	eleventyConfig.addPassthroughCopy({"./_src/js" : "js"});
	eleventyConfig.addPassthroughCopy("acknowledgements"); 
	eleventyConfig.addPassthroughCopy({"./_src/css" : "css"}); 

	const dir = {
		input: "./_src",
		output : "_site",
		includes: "_includes" // relative to dir.input
	}
  
	return { 
		dir,
		templateFormats : ["html", "md", "njk", "css"],
		htmlTemplateEngine : "njk",
		markdownTemplate : "njk"
	}
};