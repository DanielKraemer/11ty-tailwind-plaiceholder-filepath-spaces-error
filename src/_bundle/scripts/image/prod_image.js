const Image = require("@11ty/eleventy-img");

function productionImage(options = {src, reserveImage, blurCoverImage, alt, sizes, width, height, style, classString}) {
  let {src, reserveImage, blurCoverImage = false, alt, sizes, width, height, style = "", classString} = options;
  if(!src.includes("public/")){
    src = "public/" + src;
  }
  if(sizes === undefined) {
    sizes = '1200px';
  }
  const imageAtributes = {
    src,
    width,
    style: `${style} position: absolute; top:0; left:0; bottom:0; right:0; box-sizing:border-box; padding:0; border:none; margin:auto; display:block; width:0; height:0; min-width:100%; max-width:100%; min-height:100%; max-height:100%;`,
    height,
    class: classString + "z-2",
    alt,
    sizes,
    layout: "responsive",
    loading: "lazy",
    decoding: "async"
  };
  let pluginSettings;
  if(src.includes(".svg")) {
    pluginSettings = {
      formats: ["svg"],
      outputDir: "./dist/img/",
      sharOptions: {
        raw: true
      },
    }
  }
  else {
    pluginSettings = {
      widths: [200, 500, 1200],
      formats: ["webp", "avif" ],
      outputDir: "./dist/img/"
    }
  }
  
  let metadata; 
  let optimizedImage;
  try {
    metadata = Image.statsSync(src, pluginSettings);
    Image(src, pluginSettings);
    optimizedImage = Image.generateHTML(metadata, imageAtributes);
  } 
  catch(err) {
    console.log("🤕 DIESES BILD IST KAPUTT: " + src );
    src = reserveImage
    imageAtributes.src = reserveImage;
    metadata = Image.statsSync(src, pluginSettings);
    Image(src, pluginSettings);
    optimizedImage = Image.generateHTML(metadata, imageAtributes);
  }

  // Adding blured background-image if needed
  if(blurCoverImage) {
    const bluredImageAtribs = imageAtributes;
    bluredImageAtribs.class = "object-cover w-full h-full mb-2 blur-sm";
    const bluredImgString = Image.generateHTML(metadata, bluredImageAtribs);
    return bluredImgString + optimizedImage;
  }

  return optimizedImage;
}

module.exports = {
  productionImage
}