const {plaiceholder} = require("./add_plaiceholder");
const {developmentImage} = require("./dev_image.js");
const {productionImage} = require("./prod_image.js");

function plaiceholderImage(options = {}) {
    if(options.src.substring(0) != '/') {
        options.src = '/' + options.src;
    }
    if(options.src.includes('/public/')) {
        options.src = options.src.replace('/public', '');
    }
    if (process.env.ELEVENTY_ENV && process.env.ELEVENTY_ENV === 'development' || options.forceDevMode && options.forceDevMode === true) {
        options.plaiceholderSrc = "/assets/preload.webp";
        return plaiceholder(developmentImage(options), options)
    }
    return plaiceholder( productionImage(options), options);
}

module.exports = { 
    plaiceholderImage
}

