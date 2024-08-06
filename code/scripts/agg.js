
import { db, addDoc, collection,auth, setDoc,doc } from "./conexion.js";
// Almacenamiento de forma local para la información del usuario
document.addEventListener('DOMContentLoaded', (event) => {
  const storedCredentials = localStorage.getItem('authCredentials');

  if (storedCredentials) {
      const credentials = JSON.parse(storedCredentials);
      console.log(credentials);

      async function guardar(event) {
        event.preventDefault();  // Previene la recarga de la página
      
        // Obtén los valores de los campos del formulario
        const correo = credentials.user.email;
        const contra = document.getElementById('contra').value;
        const direccion = document.getElementById('direccion').value;
        const ciudad = document.getElementById('ciudad').value;
        const inpais = document.getElementById('inpais').value;
        const postal = document.getElementById('postal').value;
        const uid = credentials.user.uid;  // Obtén el UID del usuario
      
        try {
            // Utiliza setDoc con el UID del usuario
            const userRef = doc(db, "users", uid);
            await setDoc(userRef, {
                correo: correo,
                contra: contra,
                direccion: direccion,
                ciudad: ciudad,
                inpais: inpais,
                postal: postal
            });
            console.log("Document written with ID: ", uid);
            
            
        } catch (e) {
            console.error("Error adding document: ", e);
        }
      }
      
      document.getElementById('enviar').addEventListener('click', guardar);

      // Ahora puedes usar las credenciales recuperadas
  } else {
      console.log('No se encontraron credenciales almacenadas.');
  }
});





