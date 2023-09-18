function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phone = document.createElement("p");
  phone.textContent = "Reach us at: 1 (888) 888-8888";

  const address = document.createElement("p");
  address.textContent = "123 Pizza Dr, New York, New York, USA";

  const map = document.createElement("div");
  map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.0914155518437!2d-73.98685621109665!3d40.75800332455095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855a96da09d%3A0x860bf5a5e1a00a68!2sTimes%20Square%2C%20New%20York%2C%20NY%2010036!5e0!3m2!1sen!2sus!4v1695074891757!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  contact.appendChild(phone);
  contact.appendChild(address);
  contact.appendChild(map);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
