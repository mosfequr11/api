let wk;
function startWorker() {
  if (typeof Worker !== "undefined") {
    // Yes! Web worker support!
    // Some code.....
    if (typeof wk !== "undefined") {
      wk = new Worker("workers.js");
    }
    wk.onmessage = function (event) {
      document.getElementById("demo").innerHTML = event.data;
    };
  } else {
    // Sorry! No Web Worker support..
  }
}
