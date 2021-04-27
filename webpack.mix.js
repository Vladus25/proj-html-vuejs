let mix = require("laravel-mix");

mix.js("src/script.js", "dist").sass("src/style.scss", "").setPublicPath("dist").options({processCssUrls: false,}).copy('src/index.html', 'dist');
