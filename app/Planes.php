<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Planes extends Model
{
    protected $table = 'planes';

    protected $fillable = [
        'nombre',
        'costo',
        'caracteristicas',
        'descripcion',
        'imagen',
    ];

    protected $guarded = [
        'slug'
    ];

    protected $hidden = [
        'id',
        'created_at',
        'updated_at',
        'slug'
    ];


    protected $casts = [
        'caracteristicas' => 'array',
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
