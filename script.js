window.onscroll = function () {
  stickyNavbar();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function displayData() {
  console.log("Function displayData() called"); // Check if function is called
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var displayDiv = document.getElementById("displayInfo");
  displayDiv.innerHTML =
    "<p>Name: " +
    name +
    "</p>" +
    "<p>Email: " +
    email +
    "</p>" +
    "<p>Message: " +
    message +
    "</p>";
}
