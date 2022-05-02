var jUtils = {
  setTmpCountSession: function () {
    if (typeof Storage != undefined) {
      if (sessionStorage.clickCount) {
        sessionStorage.clickCount = Number(sessionStorage.clickCount) + 1;
      } else {
        sessionStorage.clickCount = 1;
      }
    }
    $("#tmp").html(sessionStorage.clickCount);
  },

  setTmpCountLocal: function () {
    if (typeof Storage != undefined) {
      if (localStorage.clickCount) {
        localStorage.clickCount = Number(localStorage.clickCount) + 1;
      } else {
        localStorage.clickCount = 1;
      }
    }
    $("#global").html(localStorage.clickCount);
  },
};

$(document).ready(function () {
  if (typeof Storage != undefined) {
    $("#global").html(localStorage.clickCount ? localStorage.clickCount : "");
    $("#tmp").html(sessionStorage.clickCount ? sessionStorage.clickCount : "");
  } else {
    $("div")
      .last()
      .append("<p>Su navegador no soporta almacemnamiento web</p>");
  }
});
