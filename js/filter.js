filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var roomInfo = document.getElementsByClassName("room-price");
for (var i = 0; i < roomInfo.length; i++) {
  print(roomInfo[i].innerHTML);
}

var data = [
  {
    "id": 1,
    "rooms": 3,
    "tot_rooms": 3,
    "price": 1700,
    "user": "Tony Holland",
    "time_ago": "Sept",
    "duration": 8,
    "bathrooms": 2,
    "area": 700,
    "address": "1963 S Crescent Heights Blvd",
    "city": "Toronto, Canada M4B 1B3"

  },
  {
    "id": 1,
    "rooms": 2,
    "tot_rooms": 5,
    "price": 1000,
    "user": "Gina Wesley",
    "time_ago": "1 day ago",
    "duration": 8,
    "bathrooms": 2,
    "area": 900,
    "address": "305 North Palm Drive",
    "city": "Toronto, Canada M4B 1B7"

  }
]
function sort(data, filters) {
  var source = [];
  var items = [];
  var counter = 0;

  for (i = 0; i < data.length; i++) {
    var item = data[i];
    var rooms = item["rooms"];
    var price = item["price"];
    var duration = item["duration"];
    var bathroom = item["bathroom"];
    var area = item["area"];
    var id = item["id"];
    var tot_rooms = item["tot_rooms"];
    var city = item["city"];
    var address = item["address"];
    var user = item["user"];
    var time_ago = item["time_ago"];

    if (filters[0] >= rooms || filters[1] < price || filters[2] >= duration || filters[3] >= bathroom || filters[4] >= area) {
      source[id] = item;
    }
  }
  return source;
}

function buildPage(div, source) {
  var counter = 0;
  
  for (var i = 0; i < source.length; i++) {
    counter++;

    if (counter == 0) {
      var row = $('<div class="row"></div>');
      var title = $('<div class="feature-pic set-bg" data-setbg="img/feature/7.jpg"><div class="sale-notic">FOR SALE</div></div>');
      title.appendTo(row);
      var feature_text = $('<div class="feature-text"></div>');
      var feat_title = $('<div class="text-center feature-title"><h5>' + source[i]["address"] + '</h5><p><i class="fa fa-map-marker"></i>' + source[i]["city"] + '</p></div>');
      feat_title.appendTo(row);
    }
  }

}

function filter(data, criteria) {
  var source = sort(data, criteria);
  var div = $("<div class='container'></div>");
  div.appendTo("#listings");
  buildPage(div, source);
}


filter(data, [0, 0, 0, 0]);
