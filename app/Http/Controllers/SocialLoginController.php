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
    protected $auth;
    public function __construct(JWTAuth $auth)
    {
        $this->auth = $auth;
        $this->middleware(['social']);
    }

    public function redirect($service)
    {
        return Socialite::driver($service)->stateless()->redirect();
    }


    public function callback($service)
    {
        dd($service);
    }

}
