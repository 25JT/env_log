import { signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from './conexion.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM cargado");
    const logout = document.querySelector('#cerrar');

    if (logout) {
        console.log("Botón de cerrar sesión encontrado");
        logout.addEventListener('click', async () => {
            console.log("Botón de cerrar sesión clicado");
            try {
                await signOut(auth);
                console.log("salio");
                window.location.href = "index.html";
            } catch (error) {
                console.error("Error al cerrar sesión:", error);
            }
        });
    } else {
        console.error("El botón de cerrar sesión no se encontró.");
    }
});
