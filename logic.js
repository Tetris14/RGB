var rtext = document.getElementById("Rtext");
var gtext = document.getElementById("Gtext");
var btext = document.getElementById("Btext");
var div = document.getElementById("container");

rtext.addEventListener("mouseenter", function (event) {
    div.style.backgroundColor = "red";
    div.classList.add("shake-animation")
});
gtext.addEventListener("mouseenter", function (event) {
    div.style.backgroundColor = "green";
    div.classList.add("shake-animation")
});
btext.addEventListener("mouseenter", function (event) {
    div.style.backgroundColor = "blue";
    div.classList.add("shake-animation")
});

rtext.addEventListener("mouseleave", function (event) {
    div.style.backgroundColor = "white";
    div.classList.remove("shake-animation")
});
gtext.addEventListener("mouseleave", function (event) {
    div.style.backgroundColor = "white";
    div.classList.remove("shake-animation")
});
btext.addEventListener("mouseleave", function (event) {
    div.style.backgroundColor = "white";
    div.classList.remove("shake-animation")
});
