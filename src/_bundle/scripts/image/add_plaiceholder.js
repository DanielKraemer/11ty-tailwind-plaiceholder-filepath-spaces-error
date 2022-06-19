function plaiceholder(content, options = {src, plaiceholderPadding}) {
    const { src, plaiceholderPadding = "53.333333333333336%" } = options;
    
    //TODO: fix plaiceholder
    let plaiceholderString = "plaiceholder-[" + src + "]";
    while(plaiceholderString.includes(` `)){
        plaiceholderString = plaiceholderString.replace(` `, ``);
    }
    return `
    <div style="display:block; overflow:hidden; position:relative; box-sizing:border-box; margin:0">
        <div style="display:block; box-sizing: border-box; padding-top: ${plaiceholderPadding};" class="inset-0 transform scale-100 filter ${plaiceholderString}"></div>
        ${content}
    </div>
    `
}

module.exports = {
    plaiceholder
};