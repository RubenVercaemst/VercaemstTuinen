var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.backgroundColor = "#1a2530";
  } else {
    document.getElementById("navbar").style.top = "-" + document.getElementById("navbar").offsetHeight + "px";
    // document.getElementById("navbar").style.backgroundColor = "transparent";
  }
  prevScrollpos = currentScrollPos;
}