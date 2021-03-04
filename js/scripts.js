function displayDate()
{
    document.getElementById('info').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

window.onload = function() {
    var arrow = document.getElementById("arrow");
    arrow.onclick = displayDate;
}
