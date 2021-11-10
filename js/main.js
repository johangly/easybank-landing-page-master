function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("body-id").classList.add("body-block")
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("body-id").classList.remove("body-block");
}