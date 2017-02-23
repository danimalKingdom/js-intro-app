//make a counter
var colors = ["pink", "red", "green", "purple", "yellow"];
var counter = 0;
function jackhammer() {

  document.getElementById('jackhammer').style["background-color"] = colors[counter];

  counter ++;

  if (counter >= 5) {
    alert("You Win");
  }
}
