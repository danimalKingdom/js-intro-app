var nextNum = 1;
var lastNum = 10;

function clickNum(num, box) {
  if(num === nextNum) {
    box.style["background-color"] = "green";

    if(num === lastNum) {
      alert('you win!');
    }
  }
  nextNum++;
}
