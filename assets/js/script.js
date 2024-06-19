// Function to get URL parameters
function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Get the 'cursor' parameter from the URL
var cursorParam = getUrlParameter("cursor");

// Apply logic based on the 'cursor' parameter
if (cursorParam === "dog") {
  document.body.style.cursor =
    "url('../assets/images/cursors/cursor.png'), auto";

  var elements = document.querySelectorAll("a, button, input, select");
  elements.forEach(function (element) {
    element.style.cursor =
      "url('../assets/images/cursors/cursor-hover.png'), auto";
  });
}
