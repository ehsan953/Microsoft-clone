// (function () {
//   var toggle = document.querySelector(".nav-toggle");

//   toggle.addEventListener("click", function (e) {
//     this.classList.toggle("features");
//   });
// })();

function toggleClass() {
  var divElement = document.getElementById("menuBar");
  if (divElement.classList.contains("left-[-100%]")) {
    divElement.classList.remove("left-[-100%]");
  } else {
    divElement.classList.add("left-[-100%]");
  }
}
function dropdownClass() {
  var divElement = document.getElementById("dropdown");
  if (divElement.classList.contains("hidden")) {
    divElement.classList.remove("hidden");
  } else {
    divElement.classList.add("hidden");
  }
}
function moreClass() {
  var divElement = document.getElementById("more");
  if (divElement.classList.contains("hidden")) {
    divElement.classList.remove("hidden");
  } else {
    divElement.classList.add("hidden");
  }
}
function blackClass() {
  var divElement = document.getElementById("header");
  if (divElement.classList.contains("bg-[#6B0E34]")) {
    divElement.classList.remove("bg-[#6B0E34]");
    divElement.classList.add("bg-black");
  }
}
