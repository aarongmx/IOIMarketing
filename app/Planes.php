<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Planes extends Model
{
    protected $table = 'planes';
    // protected $primaryKey = 'slug';
    protected $fillable = [
        'nombre',
        'costo',
        'caracteristicas',
        'descripcion',
        'imagen',
        'slug'
    ];

    /**
     * Get the route key for the model.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }
}
