function showPopup() {
    var popup = document.getElementById('popupMessage');
    popup.classList.toggle('active');
    setTimeout(function () {
        popup.classList.toggle('active');
    }, 1300);
}