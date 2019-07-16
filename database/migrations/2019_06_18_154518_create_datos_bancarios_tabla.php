<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDatosBancariosTabla extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('datos_bancarios', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('factura');
            $table->integer('numero_cuenta');
            $table->text('correo_electronico');
            $table->text('telefono');
            $table->timestamps();
            $table->text('slug');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('datos_bancarios_tabla');
    }
}
