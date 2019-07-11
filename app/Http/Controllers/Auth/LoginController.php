<?php

namespace App\Http\Controllers\Auth;

use Socialite;


use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */
    
    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }


    
    public function handleProviderCallback($provider)
    {
        try{
            $socialite = Socialite::driver($provider)->user();
        } catch (\GuzzleHttp\Exception\ClientException $e) {
            return redirect()->to('/');
        }
        $attributes = [
            'provider' => $provider,
            'provider_id' => $socialite->getId(),
            'name' => $socialite->getName(),
            'email' => $socialite->getEmail(),
            'password' => bcrypt(str_random(16)) // creamos contraseña por default 
        ];

        $user = User::where('provider_id', $socialite->getId() )->first();
        if (!$user){
            try{
                if (isset($attributes['email'])) {
                    // Validamos que el correo electronico del usuario no este repetido
                    Validator::make(['email' => $attributes['email']], [
                        'email' => 'unique:users,email'
                    ])->validate();
                }
                // creamos el nuevo usuario
                $user = User::create($attributes);
            }catch (ValidationException $e){
                return redirect()->to('/auth/login');
            }
        }
        $this->guard()->login($user);
        return redirect()->to($this->redirectTo);

    }
    






}
