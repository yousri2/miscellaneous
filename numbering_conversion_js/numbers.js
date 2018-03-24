/*jslint plusplus:true*/
var first,
    
    b2,
    b3,
    b4,
    b5,
    b6,
    b7,
    b8;

    
    

//document.getElementById("out").innerHTML = "Ahmed";


function exec() {
    'use strict';
    document.getElementById("out").innerHTML = "";
    var i,
        j,
        o = "",
        b1 = "",
        data = document.getElementById("data").value;
    data = Math.ceil(data);
    for (i = 0; i <= 12; i++) {
        b1 += data % 2;
        data = Math.floor(data / 2);
    }
    
    for (j = 12; j >= 0; j--) {
        o += b1[j];
        document.getElementById("out").innerHTML = parseInt(o, 10);
    }
}
