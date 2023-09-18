import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";

function createNav() {
  const nav = document.createElement("div");
  nav.classList.add("nav");

  const header = document.createElement("h1");
  header.textContent = "Pizza Town";

  const links = document.createElement("div");
  links.classList.add("links");

  const homeButton = document.createElement("button");
  homeButton.classList.add("link");
  homeButton.textContent = "Home";
  homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(homeButton);
    Home();
  });

  const menuButton = document.createElement("button");
  menuButton.classList.add("link");
  menuButton.textContent = "Menu";
  menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(menuButton);
    Menu();
  });

  const contactButton = document.createElement("button");
  contactButton.classList.add("link");
  contactButton.textContent = "Contact";
  contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(contactButton);
    Contact();
  });

  links.appendChild(homeButton);
  links.appendChild(menuButton);
  links.appendChild(contactButton);

  nav.appendChild(header);
  nav.appendChild(links);

  return nav;
}

function setActive(button) {
  const buttons = document.querySelectorAll(".link");

  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}

function createMain() {
  const main = document.createElement("div");
  main.classList.add("container");
  main.setAttribute("id", "main");

  return main;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  const para = document.createElement("p");
  para.textContent = "Copyright © CV 2023";

  footer.appendChild(para);

  return footer;
}

function initWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createNav());
  content.appendChild(createMain());
  content.appendChild(createFooter());

  setActive(document.querySelector(".link"));
  Home();
}

export default initWebsite;
