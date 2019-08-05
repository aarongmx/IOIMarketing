<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendForgotPassword;
use App\PasswordResets;
use Illuminate\Support\Facades\Hash;

class ForgotPasswordController extends Controller
{

    public function sendResetLinkEmail(Request $request)
    {
        $email = $request->_value;
        $user = User::where('email', $email)->first();

        if ($user == null) {
            return response()->json([
                'message' => "¡El correo que ingreso no existe en nuestros registros!"
            ], Response::HTTP_OK);
        }

        // Crear token de cambio de contraseña
        $token = str_random(60);

        $passwdResets = new PasswordResets([
            'email' => $email,
            'token' => $token,
        ]);
        $passwdResets->save();

        Mail::to($email)->send(new SendForgotPassword($user, $token));

        return response()->json([
            'message' => '¡Revise su correo por favor!'
        ], Response::HTTP_OK);
    }

    public function recoverPassword(Request $request)
    {
        $token = $request->token;
        $password = $request->password;

        $passwdResets = PasswordResets::where('token', $token)->where('active', 1)->first();
        $user = User::where('email', $passwdResets->email)->first();

        $user->password = Hash::make($password);
        $user->save();

        $passwdResets->active = 0;
        $passwdResets->save();

        return response()->json([
            'message' => '¡Contraseña actualizada correctamente!'
        ], Response::HTTP_OK);
    }
}
