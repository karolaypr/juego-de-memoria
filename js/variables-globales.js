var modoRelax = false;
var movimientos = 0;
var cronometro;
var grupoTarjetas = [
  ["alpaca.png", "gallito.png"],
  ["festejo.png", "carnaval.png"],
  ["selva.png", "marinera.png", "bandera.png", "castillo.png"],
  ["chanchan.png", "costa.png", "huascaran.png", "lima.png"],
  ["machuPicchu.png", "montana.png", "plaza.png", "amazonia.png"]
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
