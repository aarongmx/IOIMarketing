<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class SocialLoginController extends Controller
{
    public function redirect($service) {
        return Socialite::driver($service)->stateless()->redirect();
    }

    public function callback() {

    }
}
