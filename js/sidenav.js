fetch("/html/sidenav.html")
  .then((res) => res.text())
  .then((text) => {
    let oldelem = document.querySelector("script#replace_with_sidenav");
    let newelem = document.createElement("div");
    newelem.classList.add("sidenav");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem, oldelem);
  });
