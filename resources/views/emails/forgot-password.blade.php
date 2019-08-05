@component('mail::message')
# Recuperar Contraseña
Estimado usuario {{ $user->nombre }} {{ $user->apellido_paterno }} {{ $user->apellido_materno }},
por favor de click en el siguiente enlace para recuperar su contraseña:

@component('mail::button', ['url' => $url])
Reestablecer Contraseña
@endcomponent

Atentamente: Equipo de IOI Marketing,<br>
{{ config('app.name') }}
@endcomponent
