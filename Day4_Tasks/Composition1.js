function compose() {
  var argsList = arguments;
  return function (value) {
    for(var i = argsList .length - 1; i >= 0; i--) {
      value = argsList[i](value);
    }
    return value;
  }
}