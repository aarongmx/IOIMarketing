<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendContactForm;

class ContactController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $nombre = $request->nombre;
        $correo = $request->correo;
        $mensaje = $request->mensaje;
        $empresa = $request->empresa;

        Mail::to(env('MAIL_USERNAME'))->send(new SendContactForm($nombre, $correo, $empresa, $mensaje));
        return response()->json([
            'message' => '¡Correo enviado correctamente!'
        ], Response::HTTP_OK);
    }
}
