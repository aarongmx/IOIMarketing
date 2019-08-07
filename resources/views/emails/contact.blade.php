@component('mail::message')
# Nuevo Contacto

**Usuario:** {{ $nombre }}

**Mensaje enviado de:** {{ $correo }}

**Empresa:** {{ $empresa }}

**Mensaje:**

{{ $mensaje }}
@endcomponent
