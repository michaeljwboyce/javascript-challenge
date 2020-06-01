var tableData = data;

var $body = document.querySelector("body");
var $reset = document.querySelector("#reset");
var $search = document.querySelector("#search");
var $dateSearch = document.querySelector("#datetime");

$search.addEventListener("click", searchClick);
$reset.addEventListener("click", resetClick);

function getTable() {
  $body.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    var address = tableData[i];
    console.log(address)
    var fields = Object.keys(address);
    var $row = $body.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function searchClick() {
  var filterDate = $dateSearch.value;
  if (filterDate != "") {
    tableData = data.filter(function (address) {
      var addressDate = address.datetime;
      return addressDate === filterDate;
    });
  }
  else { tableData };

  getTable();
}

function resetClick(){
  getTable();
}

getTable();