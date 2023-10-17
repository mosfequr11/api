// The back() method loads the previous URL in the windows.history list.
// It is the same as clicking the "back arrow" in your browser.
function historyBack() {
  window.history.back();
}

//The go() method loads a specific URL from the history list:
function historyGo() {
  window.history.go(-2);
}
