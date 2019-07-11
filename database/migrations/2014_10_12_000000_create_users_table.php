<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nombre');
            $table->string('apellido_paterno');
            $table->string('apellidos_materno');
            $table->string('correo_electronico')->unique();
            $table->timestamp('verificar_correo_electronico')->nullable();
            $table->string('contrasenia');
            $table->boolean('es_admin');
            $table->string('provider');
            $table->string('provider_id')->unique();
            $table->rememberToken();
            $table->timestamps();
            $table->string('imagen');
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
        Schema::dropIfExists('users');
    }
}
