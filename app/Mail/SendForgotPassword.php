<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\User;

class SendForgotPassword extends Mailable
{
    use Queueable, SerializesModels;

    private $user;
    private $url;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user, String $token)
    {
        $this->user = $user;
        $this->url = 'http://127.0.0.1:8000/recovery-password/' . $token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.forgot-password')->with([
            'user' => $this->user,
            'url' => $this->url
        ]);
    }
}
