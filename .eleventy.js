const _ = require('lodash');
const { plaiceholderImage } = require('./src/_bundle/scripts/image/image.js');
const markdownIt = require("markdown-it");
const markdownItLinkAttributes = require("markdown-it-link-attributes");

module.exports = config => {

  let mdOptions = {
    html: true,
    breaks: true,
    linkify: false
  };

  const markdownLib = markdownIt(mdOptions).disable('code').use(markdownItLinkAttributes, {
    matcher: (href) => {
      return !href.match(/^(\/|(http(s)?:\/\/)?(localhost|.*blog\.spedion\.(de|biz)))/gi);
    },
    attrs: {
      target: "_blank",
      rel: "noopener",
    },
  })
  
  config.setLibrary("md", markdownLib);

  config.addShortcode("image", function(options = {}) {
    return plaiceholderImage(options);
  });

  config.addPassthroughCopy({ "public/assets": "assets" });

  config.addNunjucksFilter("consoleLog", function(data) {
    console.log(data);
    return data;
  });

  config.setTemplateFormats([
    "jpg",
    "jpeg",
    "ico",
    "svg",
    "webmanifest",
    "11ty.js",
    "png",
    "webp",
    "md",
    "gif",
    "njk",
    "html",
    "m4v",
    "pdf",
    "htaccess"
  ]);

  config.setBrowserSyncConfig({
    files: ["dist/**/*"],
    open: true,
  });

  return {
    dir: {
      input: './src',
      output: './dist',
      includes: "_includes",
      layout: "_includes/layouts"
    },
  }
}