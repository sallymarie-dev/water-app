console.log("hello test");
setProperty("header", "color", "green");

onEvent("waterbottle", "click", change);
function change() {
  console.log("hello change");
  setProperty("waterbottle", "background-color", "red");
}
onEvent("emptybottle", "click", change2);
function change2() {
  console.log("hello");
  setProperty("emptybottle", "background-color", "green");
}
onEvent("txtcolor", "click", textRed);
function textRed() {
  setProperty("header", "background-color", "red");
  setText("header", "Water Conservation Tips" );
}
onEvent("english1", "click", translatingToEnglish);

onEvent("spanish1", "click", translatingToSpanish);

function translatingToEnglish() {
  console.log("hello english");
  setText("header", "Water Conservation Tips");
  setText("spanish1", "Español");
  setText(
    "subtext",
    "Instead of buying disposable water bottles,use a refillable bottle. One use water bottles fill our landfills and trap valuable water."
  );
}
function translatingToSpanish() {
  setText("header", "Consejos para ahorrar Agua");
  setText("english1", "English");
  setText(
    "subtext",
    "En lugar de comprar botellas de agua desechables, usa una botella rellenable. Las botellas de un solo uso llenan los vertederos y retienen agua valiosa."
  );
}
