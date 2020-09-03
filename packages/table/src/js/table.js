console.log('Hi!');

var table = document.getElementsByTagName('table');

window.addEventListener('resize', function() {
    var table_hs = table.scrollWidth > table.clientWidth;
    if (table_hs == true) {
        table.style.visibility = "visible";
    } else {
        table.style.visibility = "hidden";
    }
})