function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const paraOne = document.createElement("p");
  paraOne.textContent = "Home of the best Pizza in the country!";

  const paraTwo = document.createElement("p");
  paraTwo.textContent = "Award winning Pizza since 1934.";

  const button = document.createElement("button");
  button.textContent = "Order Now!";

  home.appendChild(paraOne);
  home.appendChild(paraTwo);
  home.appendChild(button);

  return home;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
