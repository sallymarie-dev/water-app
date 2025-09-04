console.log("hello test");
setProperty("header", "color", "green");

setProperty("waterbottle", "background-color", "red");

onEvent("waterbottle", "click", change);
function change(){
  console.log("hello change")
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
