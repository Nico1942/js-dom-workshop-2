/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// Importar la función creada en oreo archivo js
import { registerImage, contarImg, resetImg } from './lazy'


// Función que da un número al azar entre dos valores
const min = 1;
const max = 122;

const randomNum = () => {
  return Math.floor(Math.random() * (max - min) + min);
};

console.log(randomNum(min, max));

const crearImagenNode = () => {
  const image = document.createElement("img");
  image.className = "rounded-lg m-4 bg-indigo-400";
  image.width = "420";
  image.height = "420";
  image.dataset.src =`https://randomfox.ca/images/${randomNum()}.jpg`;

  return image;
}

const contenedor = document.querySelector("#container")
const boton = document.querySelector("#addBtn");
const delBtn = document.querySelector("#delBtn");

function agregarImg() {
  const nuevaImg = crearImagenNode();
  contenedor.appendChild(nuevaImg);
  registerImage(nuevaImg);

  contarImg();

};

function eliminarImgs() {
  contenedor.innerHTML = "";
  resetImg();

}


boton.addEventListener("click", agregarImg);
delBtn.addEventListener("click", eliminarImgs);
