console.log("hello test");
setProperty("waterAppHeader", "color", "green");

setProperty("waterbottle", "background-color", "red");

onEvent("waterbottle", "click", change);

onEvent("english", "click", translatingToEnglish);

onEvent("spanish", "click", translatingToSpanish);

function translatingToEnglish() {
  setText("waterAppHeader", "Water Conservation Tips");
  setText("spanish", "Español");
  setText(
    "subtext",
    "Instead of buying disposable water bottles,use a refillable bottle. One use water bottles fill our landfills and trap valuable water."
  );
}
function translatingToSpanish() {
  setText("waterAppHeader", "Consejos para ahorrar Agua");
  setText("english", "English");
  setText(
    "subtext",
    "En lugar de comprar botellas de agua desechables, usa una botella rellenable. Las botellas de un solo uso llenan los vertederos y retienen agua valiosa."
  );
}
