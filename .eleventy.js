module.exports = function(eleventyConfig) {

    const { DateTime } = require("luxon");
    const markdownIt = require("markdown-it");
    
    eleventyConfig.setLibrary("md", markdownIt({
        html: true,
        breaks: true,
        linkify: true,
    }));

    eleventyConfig.addPassthroughCopy("./media");
    eleventyConfig.addPassthroughCopy("./css/styles.css");
    eleventyConfig.addPassthroughCopy("./admin");
    eleventyConfig.addPassthroughCopy("./js");
    eleventyConfig.addPassthroughCopy("./images");
    eleventyConfig.addPassthroughCopy("./_includes");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

  return {
    dir: {
      input: ".",
      output: "public"
    }
  };
};