<template>

     <div class="container">
            <div class="row">
           <div class="col-12">
               <h1 class="">Datos Bancarios</h1>
       <h5>Nombre:</h5>
            <div class="form-group col-md-6">      
                <input type="correo" class="form-control">
       </div>
        <h5>Apellidos:</h5>
            <div class="form-group col-md-6">      
                <input type="apellidos" class="form-control">
       </div>
        <h5>Números Cuenta</h5>
            <div class="form-group col-md-6">      
                <input type="numerocuenta" class="form-control">
       </div>
        <h5>Correo Electrónico:</h5>
            <div class="form-group col-md-6">      
               <input type="correo" class="form-control">
       </div>
        <h5>Direccion:</h5>
            <div class="form-group col-md-6">      
                <input type="direccion" class="form-control">
       </div>
       <h5>Forma de Pago:</h5>
       <select name="combo">
    <option value="1">Opción 1</option>
    <option value="2" selected>Opción 2</option> 
    <option value="3">Opción 3</option>
  </select><br>
  <br><button class="btn btn-primary" type="submit">Enviar</button>
    </div>            
           </div>
      </div>  
</template>