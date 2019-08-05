<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserSocial;
use Laravel\Socialite\Facades\Socialite;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Two\InvalidStateException;
use Tymon\JWTAuth\JWTAuth;

class SocialLoginController extends Controller
{
    public function __construct()
    {
        $this->middleware(['social']);
    }

    public function redirect($service)
    {
        echo $service;
        return Socialite::driver($service)->redirect();
    }


    public function callback($service)
    {
        dd($service);
    }

}
