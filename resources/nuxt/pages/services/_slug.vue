<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 col-md-7 p-0">
                <img src="https://images.pexels.com/photos/583846/pexels-photo-583846.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" width="100%">
            </div>
            <div class="col-12 col-md-5 py-4 px-3">
                <h1>{{ servicio }}</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, dolore. Atque, quae aperiam aliquam voluptate fugit quas dolore et, non cupiditate perferendis sequi, reprehenderit praesentium eligendi. Voluptatem rerum ipsam quod?</p>
                <p class="mt-4"><b>Beneficios</b></p>
                <ul>
                    <li>Uno</li>
                </ul>

                <p class="my-4"><b>Costo</b></p>

                <button class="btn btn-primary rounded-pill"><i class="fas fa-shopping-bag"></i> Comprar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'page',
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        console.log(params.slug)
        let servicio = null;
        if(params.slug !== '' || params.slug != null) {
            servicio = params.slug;
        }
        return {servicio};
    },
}
</script>
