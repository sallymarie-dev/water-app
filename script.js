setProperty("waterAppHeader", "color", "green");

onEvent("english", "click", translatingToEnglish);

onEvent("spanish", "click", translatingToSpanish);


function translatingToEnglish() {
  setText("waterAppHeader", "Water Conservation Tips");
  setText("spanish", "Español");
  setText(
    "subtext",
    "It's important that we all do our part to use less water. Click through this app for tips on conservation ideas."
  );
}
function translatingToSpanish() {
  setText("waterAppHeader", "Consejos para ahorrar Agua");
  setText("english", "English");
  setText(
    "subtext",
    "Es importante que todos contribuyamos a usar menos agua. Haz clic en esta aplicación para obtener consejos sobre conservación."
  );}