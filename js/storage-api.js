// The back() method loads the previous URL in the windows.history list.
// It is the same as clicking the "back arrow" in your browser.
function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

//The go() method loads a specific URL from the history list:
function getLocalStorage(key) {
  alert(localStorage.getItem(key));
}


// removeLocalStorage(key){
//   localStorage.removeItem(key);
// }