const iconoMenu = document.querySelector("#content-icon");
const a = document.querySelectorAll(".navLink");
const btn_close = document.querySelector(".content-close");
iconoMenu.addEventListener("click", navegacionResponsive);
a.forEach((enlace) => {
  enlace.addEventListener("click", close);
});
btn_close.addEventListener("click", close);
function navegacionResponsive() {
  const navegacion = document.querySelector("#nav");
  navegacion.classList.toggle("mostrar");
}

function close() {
  const navegacion = document.querySelector("#nav");
  navegacion.classList.remove("mostrar");
}
