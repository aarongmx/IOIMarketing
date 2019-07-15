<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Campanias extends Model
{
    protected $table = 'campanias_tabla';
    protected $fillable = ['likes', 'views', 'imagen'];
    public function getRouteKeyName()
    {
        return 'slug';
    }
}
