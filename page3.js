console.log("hello you");
setProperty("header", "color", "green");

onEvent("english1", "click", translatingToEnglish);

onEvent("spanish1", "click", translatingToSpanish);

function translatingToEnglish() {
  console.log("hello english");
  setText("header", "Water Conservation Tips");
  setText("spanish1", "Español");
  setText(
    "subtext",
    "Another way to conserve water is to take shorter showers. Try setting a timer to five minutes!"
  );
}
function translatingToSpanish() {
  setText("header", "Consejos para ahorrar Agua");
  setText("english1", "English");
  setText(
    "subtext",
    "Otra forma de ahorrar agua es ducharse más corto. ¡Prueba a programar un temporizador de cinco minutos!"
  );
}
