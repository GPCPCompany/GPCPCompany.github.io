function Dropdown() {
  //* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}

function openNav() {
  Dropdown();
  document.getElementsByClassName("sidenav")[0].style.width = "200px";
  document.getElementsByClassName("main")[0].style.marginLeft = "200px";
}

function closeNav() {
  document.getElementsByClassName("sidenav")[0].style.width = "0px";
  document.getElementsByClassName("main")[0].style.marginLeft = "50px";
  Dropdown();
}
