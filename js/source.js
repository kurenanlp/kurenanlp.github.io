get("https://mercatox.com/api/public/v1/orderbook?market_pair=LCC_BTC", function(respuesta) {
  // Transformación de formato JSON a JavaScript
  var orderbook = JSON.parse(respuesta);
  
  // Extracción de información del objeto respuesta
  var nivelDemanda = orderbook.asks[0][0];
  var nivelOferta = orderbook.bids[0][0];
  var ultTiempo = orderbook.timestamp;
  var prediccionHoy = meteo.forecast.txt_forecast.forecastday[0].fcttext_metric;

  // Visualización de los resultados
  var datosIniciales = document.getElementById("InitialReferences");
  datosIniciales.textContent = "1 RNG = 5000 LCC  or  1 LCC = 0.00002000 RNG";
  var datosActuales = document.getElementById("CurrentReferences");
  datosActuales.textContent = "Ask: " + nivelDemanda + " BTC  |  Bid: " + nivelOferta + " BTC";
});
