<template>

     <div class="container">
            <div class="row">
           <div class="col-12">
               <h1 class="">Datos Bancarios</h1>
       <h5>Factura:</h5>
            <div class="form-group col-md-6">      
                <input type="factura" class="form-control">
       </div>
        <h5>Numero Cuenta:</h5>
            <div class="form-group col-md-6">      
                <input type="numero_cuenta" class="form-control">
       </div>
        <h5>Correo Electrónico:</h5>
            <div class="form-group col-md-6">      
               <input type="correo_electronico" class="form-control">
       </div>
        <h5>Teléfono:</h5>
            <div class="form-group col-md-6">      
                <input type="telefono" class="form-control">
       </div>
       <h5>Forma de Pago:</h5>
       <select name="combo">
    <option value="1">Opción 1</option>
    <option value="2" selected>Opción 2</option> 
    <option value="3">Opción 3</option>
  </select><br><br>
        <div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck1">
  <label class="custom-control-label" for="customCheck1">Aviso de Privacidad (*Importante leer la descripción de abajo.</label>
</div><br>
      <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Protección de Datos Personales
        </button>
      </h2>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
        <p>Estimado Usuario.</p>

      <p>De acuerdo a lo Previsto en la “Ley Federal de Protección de Datos Personales”, declara IOI Marketing.,
ser una empresa legalmente constituida de conformidad con las leyes mexicanas, con domicilio en Liverpool #162.Colonia Juárez. Cuauhtémoc, CP.06600, CDMX.; y
como responsable del tratamiento de sus datos personales, hace de su conocimiento que la información de nuestros
clientes es tratada de forma estrictamente confidencial por lo que al proporcionar sus datos personales, tales como:</p>
<ol>    
    <li>Factura </li>
    <li>Numero de Cuenta </li>
    <li>Correo Electrónico </li>
    <li>Teléfono </li>
</ol>
<p>Estos serán utilizados única y exclusivamente para los siguientes fines: </p>

<ol>    
    <li>Información sobre los resultados de los servicios mas vendidos. </li>
    <li>Realizar un informe estadístico de los servicios.</li>
    <li>Actualización de la Base de Datos. </li>
    <li>"" </li>
    
</ol>
  <P>Para prevenir el acceso no autorizado a sus datos personales y con el fin de asegurar que la información sea utilizada para
los fines establecidos en este aviso de privacidad, hemos establecido diversos procedimientos con la finalidad de evitar el
uso o divulgación no autorizados de sus datos, permitiéndonos tratarlos debidamente.
Así mismo, le informamos que sus datos personales """pueden ser Transmitidos para ser tratados por personas distintas a esta
empresa.
Todos sus datos personales son tratados de acuerdo a la legislación aplicable y vigente en el país, por ello le informamos
que usted tiene en todo momento los derechos (ARCO) de acceder, rectificar, cancelar u oponerse al tratamiento que le
damos a sus datos personales; derecho que podrá hacer valer a través del Área de Privacidad encargada de la seguridad
de datos personales en el Teléfono 01 (55) 51 06 47 03., o por medio de su correo electrónico:
administracion@IOI.mx.
A través de estos canales usted podrá actualizar sus datos y especificar el medio por el cual desea recibir información, ya
que en caso de no contar con esta especificación de su parte, Fervel Asesoría Integral S.C. establecerá libremente el
canal que considere pertinente para enviarle información.
Este aviso de privacidad podrá ser modificado por Fervel Asesoría Integral S.C., dichas modificaciones serán
oportunamente informadas a través de correo electrónico, teléfono, o cualquier otro medio de comunicación que
Fervel Asesoría Integral S.C. determine para tal efecto.</P>
<center><p>ATENTAMENTE <br>Lic. Kaleb Quintero Mora.</P></center>
<p> Si usted esta de acuerdo con el Aviso de Privacidad, porfavor seleccionar el icono de la parte de arriba. </p>
      </div>
      
    </div>
  </div>
      </div>
    </div>
    </div>
    
  <br><button class="btn btn-primary" type="submit">Enviar</button>
    </div>            
         
</template>


