<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Empresas extends Model
{
    protected $table = 'empresas';
    protected $fillable = [
        'direccion',
        'telefono',
        'correo',
        'imagen',
        'nombre_empresa'
    ];

    protected $guarder = [
        'slug'
    ];

    protected $hidden = [
        'id',
        'slug'
    ];


    public function getRouteKeyName()
    {
        return 'slug';
    }
}
