import { db, doc, setDoc, getDoc } from "./conexion.js";

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
            const userRef = doc(db, "users", uid);
            const docSnap = await getDoc(userRef);

            if (docSnap.exists()) {
                // El documento ya existe, pregunta al usuario si desea actualizarlo
                const confirmacion = confirm("El usuario ya existe. ¿Deseas actualizar la información?");
                if (confirmacion) {
                    await setDoc(userRef, {
                        correo: correo,
                        contra: contra,
                        direccion: direccion,
                        ciudad: ciudad,
                        inpais: inpais,
                        postal: postal
                    });
                    console.log("Document updated with ID: ", uid);
                } else {
                    console.log("Actualización cancelada.");
                }
            } else {
                // El documento no existe, crea uno nuevo
                await setDoc(userRef, {
                    correo: correo,
                    contra: contra,
                    direccion: direccion,
                    ciudad: ciudad,
                    inpais: inpais,
                    postal: postal
                });
                console.log("Document created with ID: ", uid);
            }
        } catch (e) {
            console.error("Error handling document: ", e);
        }
      }
      
      document.getElementById('enviar').addEventListener('click', guardar);

      // Ahora puedes usar las credenciales recuperadas
  } else {
      console.log('No se encontraron credenciales almacenadas.');
  }
});
