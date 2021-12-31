fetch("../../html/reusable/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  });

fetch("./html/reusable/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footerindex").innerHTML = data;
  });
