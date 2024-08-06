import { signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from './conexion.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM cargado");

    const logoutButton = document.querySelector('#cerrar');

    if (logoutButton) {
        console.log("Botón de cerrar sesión encontrado");

        logoutButton.addEventListener('click', async () => {
            console.log("Botón de cerrar sesión clicado");

            try {
                await signOut(auth);
                console.log("Sesión cerrada exitosamente");
                localStorage.removeItem('authCredentials'); //borrar credenciales
                window.location.href = "index.html"; // Redirige a la página de inicio de sesión
            } catch (error) {
                console.error("Error al cerrar sesión:", error);
            }
        });
    } else {
        console.error("El botón de cerrar sesión no se encontró.");
    }
});
