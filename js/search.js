function redirTo() {
    var city = document.getElementById("city").value;
    var duration = document.getElementById("duration").value;

    if(city=="none" || duration=="0"){
        alert("please select from the dropdown menu");
    } else if (city == "toronto") {
        if (duration == "4") {
            location.assign("fourAll.html");
        } else if (duration == "8") {
            location.assign("eightAll.html");
        } else if (duration == "12") {
            location.assign("twelveAll.html");
        }
    } else {
        location.assign("noMatch.html");
    }
}
