<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Response;

class SocialMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $services = ['facebook', 'google', 'mailchimp'];

        $enableServices = [];

        foreach ($services as $service) {
            if (config('services' . $service)) {
                $enableServices[] = $service;
            }
        }

        if(!in_array(strtolower($request->service), $enableServices)) {
            if($request->expectsJson()) {
                return response()->json([
                    'success' => false,
                    'message' => '¡Red social inválida!'
                ], Response::HTTP_FORBIDDEN);
            } else {
                return redirect()->back();
            }
        }

        return $next($request);
    }
}
