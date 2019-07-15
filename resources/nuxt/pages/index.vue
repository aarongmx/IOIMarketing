<template>
  <fragment>
    <div class="container-fluid">
      <div class="row hero">
        <div class="col-12 d-flex flex-column align-items-center justify-content-center">
          <div class="d-flex flex-column justify-content-center align-items-center">
            <img src="@/assets/img/logo_ioi.svg" class="hero__logo" />
            <h1 class="text-center hero__title"><Brand/></h1>
          </div>
          <h2 class="text-center hero__subtitle">Ayudando a emprendedores a crecer todos los días</h2>
          <button class="btn btn-primary rounded-pill mt-4 d-flex align-items-center">
            <i class="fas fa-play mr-2"></i>
            Ver Video
          </button>
        </div>
      </div>

      <div class="row" id="quienes-somos">
        <div class="col-11 col-md-10 col-lg-8 p-3 p-lg-5 bg-primary" style="border-radius: 0 0.8em 0.8em 0">
          <h2 class="text-white">¿Quiénes Somos?</h2>
          <p class="text-white">Sabemos que al trabajar con pequeñas y medianas empresas estamos trabajando con los sueños de las personas, por lo que nos enfocamos en dar un servicio de máxima calidad en cada uno de nuestros desarrollos.</p>
          <nuxt-link to="/quienesSomos" class="btn border border-light mt-4 text-white">Saber más</nuxt-link>
        </div>
      </div>
      <div class="row py-4 mx-lg-5" id="servicios">
        <div class="col-12">
          <h2>Servicios</h2>
        </div>
        <div
          class="col-12 col-md-6 col-lg-4 my-2"
          v-for="(paquete, index) in paquetes"
          :key="index"
        >
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">{{ paquete.title }}</h3>
              <h4 class="price">
                ${{ paquete.price }}
                <span class="price__currency">mxn</span>
              </h4>
              <ul>
                <li v-for="(item, index) in paquete.description" :key="index">
                  <p>{{ item }}</p>
                </li>
              </ul>
              <nuxt-link :to="`/services/${paquete.slug}`" class="btn rounded-pill btn-secondary">Detalles</nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="row py-4 mx-lg-5" id="preguntas-frecuentes">
        <div class="col-12">
          <h2>Preguntas Frecuentes</h2>
        </div>
        <div
          class="col-12 col-md-6 col-lg-4 my-2"
          v-for="(pregunta, index) in preguntas"
          :key="index"
        >
          <div class="card">
            <div class="card-body">
              <p class="card-title">{{ pregunta }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row py-5 px-lg-5 d-flex align-items-center justify-content-center" id="contacto">
        <div class="col-12 col-md-8 col-lg-4 ">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Contacto</h2>
              <form @submit.prevent="handleForm()">
                <div class="form-group">
                  <label for="nombre">Nombre Completo</label>
                  <input type="text" class="form-control" v-model="nombre" />
                </div>
                <div class="form-group">
                  <label for="correo">Correo</label>
                  <input type="email" name="correo" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="empresa">Empresa</label>
                  <input type="text" name="empresa" class="form-control" />
                </div>
                <div class="form-group">
                  <label for="mensaje">Mensaje</label>
                  <textarea name="mensaje" id="mensaje" cols="30" rows="6" class="form-control"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import Brand from '../components/Brand'
export default {
  layout: 'page',
  data: () => {
    return {
      paquetes: [
        {
          title: "Básico",
          slug: "basico",
          price: 100,
          description: [
            "Instalación Sencilla",
            "Uso de contraseña",
            "Campañas Simples"
          ]
        },
        {
          title: "Plus",
            slug: "plus",
          price: 300,
          description: [
            "Instalación Sencilla",
            "Cambio de contraseña",
            "Banners",
            "Videos",
            "Uso de conexión con Facebook",
            "Cookies Personalizadas",
            "Captación de leads a través de email"
          ]
        },
        {
          title: "Negocios",
          slug: "negocios",
          price: 600,
          description: [
            "Paquete Plus",
            "Dashboard de campañas",

            "Administrable para 3 tiendas",
            "Control de anuncios",
            "Analíticas disponibles con Google y Facebook",
            "Login con redes sociales Facebook, Gmail para pixel y remarketing"
          ]
        }
      ],
      preguntas: [
        "¿Cuál es el número de campañas permitidas?",
        "¿Cuántos perfiles puedo crear?",
        "¿Cuántos videos se pueden subir?",
        "¿Puedo actualizar mi plan?",
        "¿Es posible actualizar mis campañas actuales?"
      ],
      nombre: ""
    };
  },
    components: {
        Brand
    }
};
</script>

