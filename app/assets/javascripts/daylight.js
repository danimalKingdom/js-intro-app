function changeBackground(daytime) {
  if(daytime == "Morning") {
    document.body.style.backgroundColor = "yellow";
  } else if (daytime == "Afternoon") {
    document.body.style.backgroundColor = "orange";
  } else {
    document.body.style.backgroundColor = "black";
  }

  document.getElementById('lastClicked').innerHTML = daytime;
}