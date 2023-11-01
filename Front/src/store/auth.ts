import { defineStore } from 'pinia';
import axios from 'axios'; // Asegúrate de tener Axios instalado

export const useAuthStore = defineStore({
  id: 'authStore',
  state: () => ({
    user: {}, // Aquí puedes almacenar los datos del usuario autenticado
    error: {}, // Para manejar errores de autenticación
<<<<<<< HEAD
    authenticated: false, // Indicador de autenticación
=======
>>>>>>> a1c0674f0523d30d353901f117dba87a2ddd30e6
  }),

  actions: {
    async login(username: string, password: string) {
      try {
<<<<<<< HEAD
        if (username === 'user' && password === 'password') {
          this.user = { username: 'user' }; // Asigna los datos del usuario autenticado
          this.authenticated = true; // Establece la autenticación en true
          return true; // Autenticación exitosa
        } else {
          this.error = 'Credenciales inválidas';
          this.authenticated = false; // Establece la autenticación en false
=======
       
        if (username === 'user' && password === 'password') {
          this.user = { username: 'user' }; // Asigna los datos del usuario autenticado
          return true; // Autenticación exitosa
        } else {
          this.error = 'Credenciales inválidas';
>>>>>>> a1c0674f0523d30d353901f117dba87a2ddd30e6
          return false; // Autenticación fallida
        }
      } catch (error: any) {
        this.error = error.message || 'Error de autenticación';
<<<<<<< HEAD
        this.authenticated = false; // Establece la autenticación en false
        return false; // Autenticación fallida
      }
    },
=======
        return false; // Autenticación fallida
      }
    },
    // Agrega acciones para el cierre de sesión u otras operaciones de autenticación si es necesario.
>>>>>>> a1c0674f0523d30d353901f117dba87a2ddd30e6
  },
});