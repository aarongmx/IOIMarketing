<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendContactForm extends Mailable
{
    use Queueable, SerializesModels;

    private $nombre;
    private $correo;
    private $empresa;
    private $mensaje;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(String $nombre, String $correo, String $empresa, String $mensaje)
    {
        $this->nombre = $nombre ;
        $this->correo = $correo ;
        $this->empresa = $empresa ;
        $this->mensaje = $mensaje ;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.contact')->with([
            'nombre' => $this->nombre,
            'correo' => $this->correo,
            'empresa' => $this->empresa,
            'mensaje' => $this->mensaje
        ]);
    }
}
