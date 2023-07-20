
const TNA = 97;
 
function CalcularMonto (){
    let monto = parseInt(document.getElementById("monto").value)
        if (monto > 5000000 || monto < 1500 ) {
        alert("No es posible el monto Mínimo es de $1.500 y el Máximo de $5.000.000!");
        return false;
        };
    let plazo =parseInt(document.getElementById("plazo").value);
         if (plazo > 365 || plazo < 30 ) {
        alert("No es posible el Mínimo 30 son días y el Máximo de 365 días!");
        return false;
        };
    let calculo =((monto * TNA * plazo) / (100 * 360));
    let Intereses = (calculo + monto);
      document.getElementById("resultado").innerHTML =`<div>
    <table class="table">
 <thead>
    <tr>
      <th scope="col">Canal</th>
      <th scope="col">Sucursal</th>
      <th scope="col">Electronico o Web</th>
    </tr>
 </thead>
 <tbody>
    <tr>
      <td>Plazo</td>
      <td>${plazo} dias</td>
      <td>${plazo} dias</td>
    </tr>
    <tr>
      <td>Capital</td>
      <td>$${monto}</td>
      <td>$${monto}</td>
    </tr>
     <tr>
     <td>Intereses Ganados</td>
     <td>$${calculo.toFixed(2)}</td>
     <td>$${calculo.toFixed(2)}</td>
    </tr>
    <tr>
     <td>Monto Total</td>
     <td>$${Intereses.toFixed(2)}</td>
     <td>$${Intereses.toFixed(2)}</td>
    </tr>
   <tr>
     <td>TNA</td>
     <td>97,00%</td>
     <td>97,00%</td>
   </tr>
 </tbody>
 </table>
 <button type="button" class="btn btn-primary" onclick="borrarResultado()">Volver al simulador</button>
 </div>`; 
};
 
const aceptar =  document.getElementById("aceptar");
 aceptar.onclick = CalcularMonto;
 

function Eliminar(){
     document.getElementById("monto").value = "";
     document.getElementById("plazo").value = "";
}

function borrarResultado (){
  document.getElementById("monto").value = "";
  document.getElementById("plazo").value = "";
  resultado.innerHTML= "";
}
  
const borrar =  document.getElementById("borrar");
 borrar.onclick = Eliminar; 


