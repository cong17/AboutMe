document.addEventListener("DOMContentLoaded", function () {
    var totop = document.querySelector(".back")
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            totop.style.display = "block";
        } else {
            totop.style.display = "none";
        }
    }
    totop.addEventListener("click", function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })

})