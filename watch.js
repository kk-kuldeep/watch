
let A = 00;
let B = 00;
let C = 00;
let count = 0;
let d = 0;
let da = 0;
let db = 0;
let dc = 0;
let status = "stopped";
function reset() {
    A = 0;
    B = 0;
    C = 0;

    document.getElementById('second').innerHTML = A + "0";
    document.getElementById('minute').innerHTML = B + "0";
    document.getElementById('hour').innerHTML = C + "0";
    document.getElementById('button1').innerHTML = "Start";
    status = "stopped";
    clearInterval(d);

}
function startkrde() {
    C++;
    if (C == 60) {
        C = 0;
        B++;
        if (B == 60) {
            B = 0;
            A++;
        }
    }
    if (C < 10) {
        dc = "0" + C;
    }
    else {
        dc = C;
    }
    if (B < 10) {
        db = "0" + B;
    }
    else {
        db = B;
    }
    if (A < 10) {
        da = "0" + A;
    }
    else {
        da = A;
    }

    document.getElementById('second').innerHTML = dc;
    document.getElementById('minute').innerHTML = db;
    document.getElementById('hour').innerHTML = da;


}
function start() {

    if (status == "stopped") {

        d = setInterval(startkrde, 1000);
        document.getElementById("button1").innerHTML = "Stop";
        status = "started";
    }
    else {
        clearInterval(d);
        document.getElementById("button1").innerHTML = "Start";
        status = "stopped";
    }
}
