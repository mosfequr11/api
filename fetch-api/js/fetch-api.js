
var displayData = document.getElementById("display");

getData(){
fetch("file:///D:/hw/api/fetch-api/demo-data.txt").then(res => res.text());
.then(data => {
  displayData.innerText = data;
})
}