const scrollTopButton = document.getElementById("scrollTopButton");
const createNewTicketSection = document.getElementById(
  "createNewTicketSection"
);
const personIcon = document.getElementById("personIcon");
const internNav = document.getElementById("internNav");
const gearSection = document.querySelector(".gearSection");
const inputAlias = document.querySelector(".inputAlias");
const titleGears = document.getElementById("username");

/* Función para llevarte al TOP de la página clickeando el icono arrow */

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopButton.style.display = "flex";
  } else {
    scrollTopButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* Función para posicionar al usuario al final de la página */

function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

window.onload = function () {
  scrollToBottom();
};

/* Abrir y Cerrar NUEVO TICKET */

function toggleNewTicketSection() {
  createNewTicketSection.classList.toggle("show");
}

function closeNewTicketSection() {
  createNewTicketSection.classList.remove("show");
}

function toggleGear() {
  gearSection.classList.toggle("show");
}

function closeGear() {
  gearSection.classList.remove("show");
}

/* INTERNAV */

document.addEventListener("DOMContentLoaded", function () {
  personIcon.addEventListener("click", function () {
    internNav.style.display =
      internNav.style.display === "none" ? "flex" : "none";
  });

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest("#internNav") &&
      !event.target.closest("#personIcon")
    ) {
      internNav.style.display = "none";
    }
  });
});

/* Updatea Título en configuraciones */

function updateTitle(event) {
  if (event.key === "Enter") {
    if (inputAlias.value.trim() !== "") {
      titleGears.textContent = "Hola, " + inputAlias.value;
      inputAlias.value = "";
    }
  }
}

/* FETCH  */

function traerPersonas() {
  fetch("http://127.0.0.1:5501/data/people.json")
  .then((res) => res.json())
  .then((data) => {
    ordenarRespuestas(data)
  });
}

function traerTickets() {
  fetch("http://127.0.0.1:5501/data/data.json")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

traerTickets();
traerPersonas();

function ordenarRespuestas(persona) {
  console.log(persona.personas[0].rol)
}

/*  */