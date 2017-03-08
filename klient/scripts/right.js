function myFunction() {
    var x = document.createElement("STYLE");
    var t = document.createTextNode("body {font: 20px verdana;}");
    x.appendChild(t);
    document.head.appendChild(x);
}