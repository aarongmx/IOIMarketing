<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dashboard extends Model
{
    public function getRouteKeyName()
{
    return 'slug';
}
}
