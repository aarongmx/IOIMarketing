const laravelNuxt = require("laravel-nuxt");

module.exports = laravelNuxt({
    css: [
        '@/assets/sass/app.scss'
    ],
    modules: [
        "@nuxtjs/axios"
    ],
    plugins: [
        '~/plugins/vue-fragments',
    ],
    build: {
        vendor: ["jquery", "bootstrap"],
    },
    head: {
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" }
        ],
        link: [
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Muli:400,600,700|Nunito+Sans:300,400,600,700&display=swap"
            },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/icon?family=Material+Icons" }
        ],
        script: [
            { src: 'https://kit.fontawesome.com/28e7e922cb.js' }
        ]
    }
});
