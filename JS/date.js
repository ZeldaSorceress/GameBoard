var d = new Date();
var hours;
var minutes;
var timeOfDay = "AM";
    hours = d.getHours();
    minutes = d.getMinutes();

    if (hours >= 12){
        timeOfDay = "PM";
    }
    else {
        timeOfDay = "AM";
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    var date = "" + hours + ":" + minutes + " " + timeOfDay;
    document.getElementById("date").innerHTML = date;