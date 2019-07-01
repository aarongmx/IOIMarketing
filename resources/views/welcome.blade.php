<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
      
        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="{{asset('css/app.css')}}"></link>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
      
    </head>
    <body>
        <div id="app">
          
            <navegacion></navegacion>

           <router-view> </router-view>
          
        </div>
        <script src="{{asset('js/app.js')}}"> </script>
        <script src="https://kit.fontawesome.com/a7df8f4d88.js"></script>
        
    </body>
</html>
