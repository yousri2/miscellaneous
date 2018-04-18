/*jslint plusplus:true*/
function exec() {
    "use strict";
    var uni = document.getElementById("text").value,
        i,
        out,
        filter = "";
         
    for (i = 0; i < uni.length; i++) {
        out = uni.charCodeAt(i) + ","; 
        filter += out;
    }
    

    document.getElementById("test").innerHTML = filter.substring(0,filter.length-1);
    
}
