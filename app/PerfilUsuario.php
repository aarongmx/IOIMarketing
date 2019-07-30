<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PerfilUsuario extends Model
{
    protected $table = 'perfil_usuario';
    protected $fillable = [
        'numero_campania',
        'domicilio',
        'telefono'
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
