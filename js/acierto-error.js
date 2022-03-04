function acierto(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("acertada");
  });
  //document.querySelector("#sonido-acierto").play();

  if(lasTarjetas[1].dataset.valor==="alpaca.png"){
    document.querySelector("#sonido-error").cloneNode().play()}

  if(lasTarjetas[1].dataset.valor==="amazonia.png"){
    document.querySelector("#sonido-error").cloneNode().play()}

  if(lasTarjetas[1].dataset.valor==="bandera.png"){
    document.querySelector("#sonido-error").cloneNode().play()}

  if(lasTarjetas[1].dataset.valor==="carnaval.png"){
    document.querySelector("#sonido-error").cloneNode().play()}

  if(lasTarjetas[1].dataset.valor==="castillo.png"){
    document.querySelector("#sonido-error").cloneNode().play()}

  if(lasTarjetas[1].dataset.valor==="chanchan.png"){
    document.querySelector("#sonido-error").cloneNode().play()}

  if(lasTarjetas[1].dataset.valor==="costa.png"){
    document.querySelector("#sonido-error").cloneNode().play()}

  if(lasTarjetas[1].dataset.valor==="festejo.png"){
    document.querySelector("#sonido-error").cloneNode().play()}

  if(lasTarjetas[1].dataset.valor==="gallito.png"){
    document.querySelector("#sonido-error").cloneNode().play()}

  if(lasTarjetas[1].dataset.valor==="huascaran.png"){
    document.querySelector("#sonido-error").cloneNode().play()}

  if(lasTarjetas[1].dataset.valor==="lima.png"){
    document.querySelector("#sonido-error").cloneNode().play()}

  if(lasTarjetas[1].dataset.valor==="machuPicchu.png"){
    document.querySelector("#sonido-error").cloneNode().play()}

  if(lasTarjetas[1].dataset.valor==="marinera.png"){
    document.querySelector("#sonido-error").cloneNode().play()}

  if(lasTarjetas[1].dataset.valor==="montana.png"){
    document.querySelector("#sonido-error").cloneNode().play()}

  if(lasTarjetas[1].dataset.valor==="plaza.png"){
    document.querySelector("#sonido-error").cloneNode().play()}

  if(lasTarjetas[1].dataset.valor==="selva.png"){
    document.querySelector("#sonido-error").cloneNode().play()}
  }
 //

 function error(lasTarjetas) {
  lasTarjetas.forEach(function(elemento) {
    elemento.classList.add("error");
  });
  document.querySelector("#sonido-error").play();

  setTimeout(function() {
    lasTarjetas.forEach(function(elemento) {
      elemento.classList.remove("descubierta");
      elemento.classList.remove("error");
    });
  }, 1500);
}
