<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Empresas extends Model
{
    protected $table = 'empresas';
    protected $fillable = ['direccion', 'telefono', 'correo', 'imagen', 'nombre_empresa'];
    public function getRouteKeyName()
    {
        return 'slug';
    }
}
