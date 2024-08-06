import { db } from "./conexion.js";



async function guardar(event) {
  event.preventDefault();  // Previene la recarga de la página

  // Obtén los valores de los campos del formulario
  const correo = document.getElementById('correo').value;
  const contra = document.getElementById('contra').value;
  const direccion = document.getElementById('direccion').value;
  const ciudad = document.getElementById('ciudad').value;
  const inpais = document.getElementById('inpais').value;
  const postal = document.getElementById('postal').value;

  try {
      const docRef = await db.collection("users").add({
          correo: correo,
          contra: contra,
          direccion: direccion,
          ciudad: ciudad,
          inpais: inpais,
          postal: postal
      });
      console.log("Document written with ID: ", docRef.id);
  } catch (e) {
      console.error("Error adding document: ", e);
  }
}

document.getElementById('enviar').addEventListener('click', guardar);











// document.addEventListener('DOMContentLoaded', () => {
//   console.log("DOM cargado en agg");





// });


