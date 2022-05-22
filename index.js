const express = require('express')

const app = express()

app.get('/', function (req, res) {

  res.send('Hello World hellooooo')

})

app.listen(3000)

function Guardar() {
  $.ajax({
      type: 'POST',
      dataType: "json",
      url: '/MyController/MyView',
      traditional: true,
      data: {
            array: array
      },
      success: function ( data ) {
        if (data.rstProceso === "true") {
          console.log( 'Exito: '+ data.rstMensaje );
        }else if(data.rstProceso === "false"){
          console.log( 'Algo salió mal '+ data.rstMensaje );
        }
      },
      error: function () {
          console.log('algo salió mal');
      }
  });
}

