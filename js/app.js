const iconoMenu = document.querySelector("#content-icon");
const a = document.querySelectorAll(".navLink");
const btn_close = document.querySelector(".content-close");
const body = document.querySelector("body");
iconoMenu.addEventListener("click", navegacionResponsive);
a.forEach((enlace) => {
  enlace.addEventListener("click", close);
});
btn_close.addEventListener("click", close);
function navegacionResponsive() {
  const navegacion = document.querySelector("#nav");
  navegacion.classList.toggle("mostrar");
  body.classList.add("content-y-hidden");
}

function close() {
  const navegacion = document.querySelector("#nav");
  navegacion.classList.remove("mostrar");
  body.classList.remove("content-y-hidden");
}
