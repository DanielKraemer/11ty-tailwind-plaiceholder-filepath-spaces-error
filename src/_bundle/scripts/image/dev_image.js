function developmentImage(options = {src, alt, blurCoverImage, classString, style, height, width, plaiceholderPadding, plaiceholderSrc}) {
    const { src="", alt = "", classString = "", style = "", height = "", width = "", blurCoverImage = false } = options;

    let imgTag = `
    <img 
        alt="${alt}"
        src="${src}"  
        class="${classString} z-2" 
        style="${style} position: absolute; top:0; left:0; bottom:0; right:0; box-sizing:border-box; padding:0; border:none; margin:auto; display:block; width:0; height:0; min-width:100%; max-width:100%; min-height:100%; max-height:100%;" 
        loading="lazy",
        decoding="async"
        height="${height}" 
        width="${width}"
    />
    `;
    if(blurCoverImage){
        imgTag = `<img 
            src="${src}" 
            alt="${alt}"
            class="object-cover w-full h-full mb-2 blur-sm" 
            loading="lazy",
            decoding="async"
            height="${height}" 
            width="${width}"
            style="${style} position: absolute; top:0; left:0; bottom:0; right:0; box-sizing:border-box; padding:0; border:none; margin:auto; display:block; width:0; height:0; min-width:100%; max-width:100%; min-height:100%; max-height:100%;" 
        />` + imgTag;
    }

    return imgTag;
}

module.exports = {
    developmentImage
}