<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Campanias extends Model
{
    protected $table = 'campanias';
    protected $fillable = [
        'imagen',
        'titulo',
        'descripcion',
    ];

    protected $guarded = [
        'likes',
        'views',
        'slug',
    ];

    protected $hidden = [
        'id',
        'slug',
    ];

    protected $attributes = [
        'likes' => 0,
        'views' => 0,
    ];

    protected $casts = [
        'created_at' => 'date:d-F-Y',
        'updated_at' => 'date:d-F-Y'
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
