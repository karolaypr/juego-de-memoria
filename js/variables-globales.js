var modoRelax = false;
var movimientos = 0;
var cronometro;
var grupoTarjetas = [
  ["alpaca.jpg", "gallito.jpg"],
  ["festejo.jpg", "carnaval.jpg"],
  ["selva.jpg", "marinera.jpg", "bandera.jpg", "castillo.jpg"],
  ["chanchan.jpg", "costa.jpg", "huascaran.jpg", "lima.jpg"],
  ["machuPicchu.jpg", "montana.jpg", "plaza.jpg", "amazonia.jpg"]
];
var nivelActual = 0;
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 8
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 12
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 25
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    movimientosMax: 60
  }
];
