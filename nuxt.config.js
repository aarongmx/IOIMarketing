const laravelNuxt = require("laravel-nuxt");

module.exports = laravelNuxt({
    router: {
        mode: "history"
    },
    css: ["@/assets/sass/app.scss"],
    modules: [
    ],
    plugins: [
        { src: "~/plugins/vue-fragments.js", ssr: false },
        { src: "~/plugins/vue-paypal.js", ssr: false },
        { src: "~/plugins/vue-persisted-state.js", ssr: false },
        { src: "~/plugins/ga.js", ssr: false },
    ],
    build: {
        vendor: ["jquery", "bootstrap"]
    },
    head: {
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" }
        ],
        link: [
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css?family=Muli:400,600,700|Nunito+Sans:300,400,600,700&display=swap"
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/icon?family=Material+Icons"
            }
        ],
        script: [{ src: "https://kit.fontawesome.com/28e7e922cb.js" }]
    }
});
