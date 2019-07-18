function redirTo() {
    var city = document.getElementById("city").value;
    var duration = document.getElementById("duration").value;

    if (city == "toronto") {
        if (duration == "4") {
            location.assign("/fourAll.html");
        } else if (duration == "8") {
            location.assign("/eightAll.html");
        } else if (duration == "12") {
            location.assign("/twelveAll.html");
        } else {
            location.assign("allToronto.html");
        }
    } else {
        location.assign("/noMatch.html");
    }
}
