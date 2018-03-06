// for petlja koja proverava koje su vrednosti true a koje su false u JS-u.
var falsy = [false, null, undefined, 0, NaN, "", "false", 1, 7, -1];

for (var i = 0; i < falsy.length; i = i + 1) {
  if (falsy[i]) {
    console.log(falsy[i] + " is True");
  } else {
    console.log(falsy[i] + " is False");
  }
};