<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DatosBancarios extends Model
{
    protected $table='datos_bancarios_tabla';
    protected $fillable=['factura','numero_cuenta','correo_electronico','telefono'];
    public function getRouteKeyName()
{
    return 'slug';
}
}
