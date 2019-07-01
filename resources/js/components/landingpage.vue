<template>
    <div class="container">
       <div class="row">
           <div class="col-12">
               <img src=""/>
               <h1 class="">IOI Marketing</h1>
               <h2>Ayudando a emprendedores a crecer todos los días</h2>
               <button>Ver Video</button>
           </div>
       </div>
       <div class="row">
           <h2>¿Quiénes Somos?</h2>
           <p>IOI MARKETING S.A de C.V nace en 2018 con la necesidad de apoyar a emprendedores mexicanos que tienen ganas de conocer los parámetros de calidad de marketing a nivel internacional, generando así altas expectativas con sus clientes.
            El director de la empresa es el licenciado David Kaleb Quintero Mora que lo largo de 10 años ha creado tres empresas, alzado desde cero más de 35 proyectos y dictado 63 conferencias entre las que destacan: marketing digital, marketing personal y creación de contenido.
            Ha implementado estrategias de comunicación para la CDMX, el gobierno de Mérida y he trabajado para más de 75 clientes teniendo resultados efectivos y cuantificables.
            El contenido que ha creado cuenta con alcance nacional e internacional impactando a más de 10 millones de personas según analíticas de Facebook. 
            </p>
       </div>
       <div class="row">
           <div class="col-12">
                <h2>Servicios</h2>
           </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title" >Básico</h3>
                        <h4 class="price">$100 mensuales <span class="price__currency">mxn</span></h4>
                        <ul>
                            <li>
                                <p>Instalación sencilla</p>
                            </li>
                            <li>
                                <p>Uso de contraseña</p>
                            </li>
                            <li>
                                <p>Un router</p>
                            </li>
                            <li>
                                <p>Campañas simples </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
           <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Plus</h3>
                        <h4 class="price">$300 mensuales <span class="price__currency">mxn</span></h4>
                        <ul>
                            <li>
                                <p>Instalación sencilla</p>
                            </li>
                            <li>
                                <p>Cambio de contraseña</p>
                            </li>
                            <li>
                                <p>Banners</p>
                            </li>
                            <li>
                                <p>Videos</p>
                            </li>
                            <li>
                                <p>Uso de conexión con Facebook</p>
                            </li>
                            <li>
                                <p>Cookies personalizadas </p>
                            </li>
                            <li>
                                <p>Captación de leads a través de email</p>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Negocios</h3>
                        <h4 class="price">$300 mensuales <span class="price__currency">mxn</span> </h4>
                        <ul>
                            <li>
                                <p>Todo del paquete 2</p>
                            </li>
                            <li>
                                <p>Más dashboard de campañas</p>
                            </li>
                            <li>
                                <p>Administrable para 3 tiendas</p>
                            </li>
                            <li>
                                <p>Cookies personalizadas</p>
                            </li>
                            <li>
                                <p>Control de anuncios</p>
                            </li>
                            <li>
                                <p>Analíticas disponibles con Google y Facebook</p>
                            </li>
                            <li>
                                <p>Login de redes sociales Facebook, Gmail para pixel y remarketing</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
       </div>
       <div class="row">
           <div class="col-12">
               <h2>Preguntas Frecuentes</h2>

           </div>
       </div>
        <div class="row">
           <div class="col-12">
               <h2>Contacto</h2>

           </div>
       </div>
        <h5>Nombre:</h5>
            <div class="form-group col-md-6">      
                <input type="correo" class="form-control">
       </div>
        <h5>Correo Electrónico:</h5>
            <div class="form-group col-md-6">      
               <input type="correo" class="form-control">
       </div>
        <h5>Empresa:</h5>
            <div class="form-group col-md-6">      
                <input type="correo" class="form-control">
       </div>
       <h5>Mensaje:</h5>
            <textarea name="area_de_texto" rows="3" cols="50">  </textarea>
                <br><br>
      <button class="btn btn-primary" type="submit">Enviar</button>
    </div>             
</template>
<style>
.price{
    font-size: 3em;
    color: blueviolet;
}
.price__currency{
font-size: 1rem;
color: brown;
}
</style>
<script>
    export default {
        data(){
            return {
                
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
    }
</script>


