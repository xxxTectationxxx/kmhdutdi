function toggleNavbar(event) {
  event.preventDefault();
  var x = document.getElementById("myNavbar");
  if (x.className == "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
