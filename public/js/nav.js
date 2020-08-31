document.addEventListener("DOMContentLoaded", function () {
    var nut = document.getElementById("openMenuRes");
    var header = document.getElementById("site_header");
    nut.addEventListener("click", function () {
        header.classList.remove("mobile-menu-hide")
    })
    var meunu = document.querySelectorAll("#nav > li");
    meunu.forEach(ele => ele.addEventListener("click", function () {
        header.classList.add("mobile-menu-hide")
    }))
})