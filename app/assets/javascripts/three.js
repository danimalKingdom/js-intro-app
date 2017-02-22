// var one = 0;
// var two = 0;
// var three = 0;

// function clickOne(num){
//   if (num == 1) {
//     one++;
//   } else if (num == 2) {
//     two++;
//   } else {
//     three++;
//   }

//   if (one > 0 && two >0 && three>0) {
//     alert("You win");
//   }
// }


var numsClicked = [];

function clickOne(num) {
  //if particular number (num) is NOT in my array
  if(numsClicked.indexOf(num) === -1){
    //add it to my array
    numsClicked.push(num);
      }

    if(numsClicked.length === 3){
      alert("You win");
    }
}





















