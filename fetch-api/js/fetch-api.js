var displayData = document.getElementById("display");

function getData() {
  fetch("http://127.0.0.1:5500/fetch-api/demo-data.txt")
    .then((res) => res.text())
    .then((data) => {
      displayData.innerText = data;
    });
}
