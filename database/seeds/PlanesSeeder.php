<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Planes;

class PlanesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Planes::insert([
            'nombre' => 'Básico',
            'costo' => 100,
            'caracteristicas' => "[\"Instalación sencilla\", \"Uso de contraseña\",\"Un router\",\"Inscripción $400 MXN\",\"Campañas simples\"]",
            'descripcion' => 'Plan básico para nuevas startups y nuevos emprendedores, ofreciendo un paquete económico y de provecho para sus empresas',
            'imagen' => 'basic.jpg',
            'slug' => 'basico'
        ]);

        Planes::insert([
            'nombre' => 'Plus',
            'costo' => 300,
            'caracteristicas' => "[\"Instalación\", \"Cambio de contraseña\",
                \"Banners\",\"Videos\",\"Uso de conexión con facebook\",\"Cookies personalizadas\",\"Captación de leads a través de email\",\"Tienda adicional $200 MXN\"]",
            'descripcion' => 'El plan plus ofrece un mayor control dentro de sus campañas y le permite tener un mejor manejo de su contenido',
            'imagen' => 'plus.jpg',
            'slug' => 'plus'
        ]);

        Planes::insert([
            'nombre' => 'Negocios',
            'costo' => 600,
            'caracteristicas' => "[\"Paquete Plus + Dashboard de campañas\",\"Administrable para 3 tiendas\",\"Cookies personalizadas\",\"Control de anuncios\",\"Analíticas disponibles con Google y Facebook\",\"Login con redes sociales Facebook & Gmail para pixel y re-marketing\"]",
            'descripcion' => 'Diseñado para empresas grandes este plan oferta la mejor calidad en las campañas',
            'imagen' => 'business.jpg',
            'slug' => 'negocios'
        ]);
    }
}
