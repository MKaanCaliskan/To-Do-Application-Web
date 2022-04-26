function dijitalSaat() {
    var dt = new Date();    
    var hours = dt.getHours();
    var minute = dt.getMinutes();
    var second = dt.getSeconds();

    minute = Tik(minute);
    second = Tik(second);

    document.getElementById('dt').innerHTML = hours + ":" + minute;
    document.getElementById('dt_saniye').innerHTML = second;

    var time
    time = setInterval('dijitalSaat()', 1000);
}

function Tik(tikDegeri) {
    if (tikDegeri < 10) {
        tikDegeri = "0" + tikDegeri;
    }
    return tikDegeri;
}