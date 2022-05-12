var brandColor;
var defaultColor = "#eb7925";

//load functions
window.addEventListener("load", startup, false);

function startup() {
  //Grab the color picker
  brandColorPick = document.querySelector("#brandColorPick");
  brandColorPick.value = defaultColor;
  brandColorPick.addEventListener("input", updateFirst, false);
  brandColorPick.addEventListener("change", updateAll, false);
  brandColorPick.select();
  //Grab the color code box
  brandColorTxt = document.querySelector("#brandColorTxt");
  brandColorTxt.value = defaultColor;
  brandColorTxt.addEventListener("input", updateFirst, false);
  brandColorTxt.addEventListener("change", updateAll, false);
  brandColorTxt.select();
}

//Update the main swatch
function updateFirst(event) {
  var swatches = document.getElementsByClassName("swatch");

  if (swatches) {
    swatches[2].style.backgroundColor = event.target.value;
  }

  brandColorPick.value = event.target.value;
  brandColorTxt.value = event.target.value;
}

//update the whole palette
function updateAll(event) {
  var swatches = document.querySelectorAll(".swatch");

  swatches.forEach(function (swatch) {
    swatch.style.backgroundColor = event.target.value;
  });

  brandColorPick.value = event.target.value;
  brandColorTxt.value = event.target.value;
}
