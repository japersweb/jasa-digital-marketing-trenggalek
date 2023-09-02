// --------------- for All ---------------
document.addEventListener("contextmenu", function(event) {
  event.preventDefault();
});
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "u") {
    event.preventDefault();
    alert("Fungsi CTRL + U telah dinonaktifkan pada halaman ini.");
  }
});
document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// --------------- credit ---------------
let date = new Date().getFullYear();
document.querySelector(".tahun").innerHTML = date;