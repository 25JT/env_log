import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from './conexion.js';
document.addEventListener ('DOMContentLoaded',()=>{
    const googleButton = document.querySelector('#googleLogin');

    googleButton.addEventListener('click', async () => {
        const provider = new GoogleAuthProvider();
    
        try {
            const credentials = await signInWithPopup(auth, provider);
            console.log(credentials);
            window.location.href = "inicio.html";
        } catch (error) {
            console.error(error);
            // Aquí puedes manejar los errores de autenticación.
        }
    });
    
});
