function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  const margherita = createMenuItem("Margherita", ["Marinara Sauce", "Tomato", "Mozzarella", "Basil", "Garlic", "Olive Oil"]);
  const pepperoni = createMenuItem("Pepperoni", ["Tomato Sauce", "Pepperoni", "Cheese"]);
  const capricciosa = createMenuItem("Capricciosa", ["Tomato Sauce", "Mozzarella", "Proscuitto", "Artichoke", "Cremini Mushrooms", "Black Olives"]);
  const cheese = createMenuItem("Cheese", ["Tomato Sauce, Mozzarella"]);
  const sicilian = createMenuItem("Sicilian", ["Thick Crust", "Tomato Sauce", "Mozzarella", "Onions", "Anchovies", "Herbs"]);

  menu.appendChild(cheese);
  menu.appendChild(pepperoni);
  menu.appendChild(margherita);
  menu.appendChild(capricciosa);
  menu.appendChild(sicilian);

  return menu;
}

function createMenuItem(itemName, itemToppings) {
  const item = document.createElement("div");
  item.classList.add("menu-item");

  const header = document.createElement("h2");
  header.textContent = itemName;

  const toppings = document.createElement("p");
  toppings.textContent = itemToppings.join(", ");

  item.appendChild(header);
  item.appendChild(toppings);

  return item;
}

function loadMenu() {
  const main = document.getElementById('main');
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;