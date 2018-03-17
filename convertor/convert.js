/*jslint plusplus: true */
/*global console*/

//arrays
var length = ["meter", "cm", "mm", "inch", "feet", "kilometer", "yard", "mile", "hand"],
    weight = ["kilogram", "gram", "ton", "pound"],
    time = ["minute", "second", "hour", "day", "week", "year"],
    area = ["mm2", "cm2", "m2", "in2", "ft2", "yd2", "hectare", "acre", "sq km", "sq mile"],
    coolingload = ["Ton refrigeration", "BTU/h"],
    velocity = ["mm/sec", "mm/min", "mm/hour", "cm/sec", "cm/min", "cm/hour", "m/sec", "m/min", "m/hour", "km/sec", "km/min", "km/hour", "in/sec", "in/min", "in/hour", "ft/sec", "ft/min", "ft/hour", "mile/sec", "mile/min", "mile/hour" ],
    one = 1,
    m;



for (m = 0; m <= length.length - 1; m++) {
    document.getElementById("selectFrom").innerHTML += "<option>" + length[m] + "</option>";
    document.getElementById("selectTo").innerHTML += "<option>" + length[m] + "</option>";
}

//expanding the arrays in select
function mainConvert() {
    "use strict";
    var x = document.getElementById("main").value,
        i;
    
    if (x === "length") {
        document.getElementById("selectFrom").innerHTML = "";
        document.getElementById("selectTo").innerHTML = "";
        for (i = 0; i <= length.length - 1; i++) {
            document.getElementById("selectFrom").innerHTML += "<option>" + length[i] + "</option>";
            document.getElementById("selectTo").innerHTML += "<option>" + length[i] + "</option>";
        }
    } else if (x === "weight") {
        document.getElementById("selectFrom").innerHTML = "";
        document.getElementById("selectTo").innerHTML = "";
        for (i = 0; i <= weight.length - 1; i++) {
            document.getElementById("selectFrom").innerHTML += "<option>" + weight[i] + "</option>";
            document.getElementById("selectTo").innerHTML += "<option>" + weight[i] + "</option>";
        }
    } else if (x === "time") {
        document.getElementById("selectFrom").innerHTML = "";
        document.getElementById("selectTo").innerHTML = "";
        for (i = 0; i <= time.length - 1; i++) {
            document.getElementById("selectFrom").innerHTML += "<option>" + time[i] + "</option>";
            document.getElementById("selectTo").innerHTML += "<option>" + time[i] + "</option>";
        }
    
           
    } else if (x === "area") {
        document.getElementById("selectFrom").innerHTML = "";
        document.getElementById("selectTo").innerHTML = "";
        for (i = 0; i <= area.length - 1; i++) {
            document.getElementById("selectFrom").innerHTML += "<option>" + area[i] + "</option>";
            document.getElementById("selectTo").innerHTML += "<option>" + area[i] + "</option>";
        }
    
           
    } else if (x === "velocity") {
        document.getElementById("selectFrom").innerHTML = "";
        document.getElementById("selectTo").innerHTML = "";
        for (i = 0; i <= velocity.length - 1; i++) {
            document.getElementById("selectFrom").innerHTML += "<option>" + velocity[i] + "</option>";
            document.getElementById("selectTo").innerHTML += "<option>" + velocity[i] + "</option>";
        }
    
           
    } else if (x === "coolingload") {
        document.getElementById("selectFrom").innerHTML = "";
        document.getElementById("selectTo").innerHTML = "";
        for (i = 0; i <= coolingload.length - 1; i++) {
            document.getElementById("selectFrom").innerHTML += "<option>" + coolingload[i] + "</option>";
            document.getElementById("selectTo").innerHTML += "<option>" + coolingload[i] + "</option>";
        }
    
           
    }
}


//conversion equations
function calc() {
    "use strict";
    var x = document.getElementById("selectFrom").value,
        z = document.getElementById("input").value,
        y = 0,
        b = 0,
        a = document.getElementById("selectTo").value,
        c = document.getElementById("main").value;
    
    document.getElementById("value").innerHTML = "";
    //Length Equations
    if (c === "length") {
        if (x === "meter") {
            y = z * 1000;
        } else if (x === "cm") {
            y = z * 10;
        } else if (x === "mm") {
            y = z * one;
        } else if (x === "inch") {
            y = z * 25.4;
        } else if (x === "feet") {
            y = z * 304.8;
        } else if (x === "kilometer") {
            y = z * 1000000;
        } else if (x === "yard") {
            y = z * 914.4;
        } else if (x === "mile") {
            y = z * 1609344;
        } else if (x === "hand") {
            y = z * 101.6;
        }


        if (a === "meter") {
            b = y / 1000;
        } else if (a === "cm") {
            b = y / 10;
        } else if (a === "mm") {
            b = y / one;
        } else if (a === "inch") {
            b = y / 25.4;
        } else if (a === "feet") {
            b = y / 304.8;
        } else if (a === "kilometer") {
            b = y / 1000000;
        } else if (a === "yard") {
            b = y / 914.4;
        } else if (a === "mile") {
            b = y / 1609344;
        } else if (a === "hand") {
            b = y / 101.6;
        }
    }
    
    
    //Weight Equations
    if (c === "weight") {
        if (x === "kilogram") {
            y = z * 1000;
        } else if (x === "ton") {
            y = z * 1000000;
        } else if (x === "gram") {
            y = z * one;
        } else if (x === "pound") {
            y = z * 453.59237;
        }


        if (a === "kilogram") {
            b = y / 1000;
        } else if (a === "ton") {
            b = y / 1000000;
        } else if (a === "gram") {
            b = y / one;
        } else if (a === "pound") {
            b = y / 453.59237;
        }
    }
    
   
    //Time Equations
    if (c === "time") {
        if (x === "minute") {
            y = z * 60;
        } else if (x === "hour") {
            y = z * 3600;
        } else if (x === "second") {
            y = z * one;
        } else if (x === "day") {
            y = z * 86400;
        } else if (x === "week") {
            y = z * 36288000;
        } else if (x === "year") {
            y = z * 1892160000;
        }


        if (a === "minute") {
            b = y / 60;
        } else if (a === "hour") {
            b = y / 3600;
        } else if (a === "second") {
            b = y / one;
        } else if (a === "day") {
            b = y / 86400;
        } else if (a === "week") {
            b = y / 36288000;
        } else if (a === "year") {
            b = y / 1892160000;
        }
    }
    
    //area Equations
    if (c === "area") {
        if (x === "cm2") {
            y = z * 100;
        } else if (x === "m2") {
            y = z * 1000000;
        } else if (x === "mm2") {
            y = z * one;
        } else if (x === "in2") {
            y = z * 645.16;
        } else if (x === "ft2") {
            y = z * 92903.04;
        } else if (x === "yd2") {
            y = z * 836127.36;
        } else if (x === "hectare") {
            y = z * 10000000000;
        } else if (x === "acre") {
            y = z * 4046856422.4;
        } else if (x === "sq km") {
            y = z * 1000000000000;
        } else if (x === "sq mile") {
            y = z * 2589988110336;
        }


        if (a === "cm2") {
            b = y / 100;
        } else if (a === "m2") {
            b = y / 1000000;
        } else if (a === "mm2") {
            b = y / one;
        } else if (a === "in2") {
            b = y / 645.16;
        } else if (a === "ft2") {
            b = y / 92903.04;
        } else if (a === "yd2") {
            b = y / 836127.36;
        } else if (a === "hectare") {
            b = y / 10000000000;
        } else if (a === "acre") {
            b = y / 4046856422.4;
        } else if (a === "sq km") {
            b = y / 1000000000000;
        } else if (a === "sq mile") {
            b = y / 2589988110336;
        }
    }
    
    //Cooling Load Equations
    if (c === "coolingload") {
        if (x === "Ton refrigeration") {
            y = z * 12000;
        } else if (x === "BTU/h") {
            y = z * one;
        }


        if (a === "Ton refrigeration") {
            b = y / 12000;
        } else if (a === "BTU/h") {
            b = y / one;
        }
    }
    
    //velocity Equations
    if (c === "velocity") {
        if (x === "mm/min") {
            y = z / 60;
        } else if (x === "mm/hour") {
            y = z / 3600;
        } else if (x === "mm/sec") {
            y = z * one;
        } else if (x === "cm/sec") {
            y = z * 10;
        } else if (x === "cm/min") {
            y = z / 6;
        } else if (x === "cm/hour") {
            y = z / 360;
        } else if (x === "m/sec") {
            y = z * 1000;
        } else if (x === "m/min") {
            y = z / 0.06;
        } else if (x === "m/hour") {
            y = z / 3.60;
        } else if (x === "km/sec") {
            y = z * 1000000;
        } else if (x === "km/min") {
            y = z / 0.00006;
        } else if (x === "km/hour") {
            y = z / 0.0036;
        } else if (x === "in/sec") {
            y = z * 25.4;
        } else if (x === "in/min") {
            y = z * 0.4233333333333330;
        } else if (x === "in/hour") {
            y = z / 141.732283464567;
        } else if (x === "ft/sec") {
            y = z * 304.8;
        } else if (x === "ft/min") {
            y = z * 5.08;
        } else if (x === "ft/hour") {
            y = z / 11.8110236220472;
        } else if (x === "mile/sec") {
            y = z * 1609344;
        } else if (x === "mile/min") {
            y = z * 26822.4;
        } else if (x === "mile/hour") {
            y = z * 447.04;
        }


        if (a === "mm/min") {
            b = y * 60;
        } else if (a === "mm/hour") {
            b = y * 3600;
        } else if (a === "mm/sec") {
            b = y / one;
        } else if (a === "cm/sec") {
            b = y / 10;
        } else if (a === "cm/min") {
            b = y * 6;
        } else if (a === "cm/hour") {
            b = y * 360;
        } else if (a === "m/sec") {
            b = y / 1000;
        } else if (a === "m/min") {
            b = y * 0.06;
        } else if (a === "m/hour") {
            b = y * 3.6;
        } else if (a === "km/sec") {
            b = y / 1000000;
        } else if (a === "km/min") {
            b = y * 0.00006;
        } else if (a === "km/hour") {
            b = y * 0.0036;
        } else if (a === "in/sec") {
            b = y / 25.4;
        } else if (a === "in/min") {
            b = y / 0.4233333333333330;
        } else if (a === "in/hour") {
            b = y * 141.732283464567;
        } else if (a === "ft/sec") {
            b = y / 304.8;
        } else if (a === "ft/min") {
            b = y / 5.08;
        } else if (a === "ft/hour") {
            b = y * 11.8110236220472;
        } else if (a === "mile/sec") {
            b = y / 1609344;
        } else if (a === "mile/min") {
            b = y / 26822.4;
        } else if (a === "mile/hour") {
            b = y / 447.04;
        }
    }
    
    if (isNaN(b)) {
        document.getElementById("value").innerHTML = "Please Enter a valiud number";
    } else if (z === "") {
        b = "";
    } else {
        document.getElementById("value").innerHTML = z + " " + x + " equals " + "<mark>" + b.toFixed(4) + "</mark>" + " " + a;
  
    }
}