function openNavbar() {
    document.getElementsByClassName("navbar--items")[0].style.width = "100%";
    document.getElementsByClassName("navbar--open-btn")[0].style.display = "none";
    document.getElementsByClassName("navbar--close-btn")[0].style.display = "block";
}
  
function closeNavbar() {
    document.getElementsByClassName("navbar--items")[0].style.width = "0";
    document.getElementsByClassName("navbar--open-btn")[0].style.display = "block";
    document.getElementsByClassName("navbar--close-btn")[0].style.display = "none";
}