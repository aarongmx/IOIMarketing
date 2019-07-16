<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Campanias extends Model
{
    protected $table = 'campanias';
    protected $fillable = ['likes', 'views', 'imagen', 'slug'];

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
