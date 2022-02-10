"use strict";

let counter = 2;
setInterval(() => {
  document.getElementById(`radio${counter}`).checked = true;
  counter++;
  if (counter > 4) counter = 1;
}, 10000);
