import { defineStore } from 'pinia';
import axios from 'axios'; // Asegúrate de tener Axios instalado

export const useAuthStore = defineStore({
  id: 'authStore',
  state: () => ({
    user: {}, // Aquí puedes almacenar los datos del usuario autenticado
    error: {}, // Para manejar errores de autenticación
    authenticated: false, // Indicador de autenticación
  }),

  actions: {
    async login(username: string, password: string) {
      try {
        if (username === 'user' && password === 'password') {
          this.user = { username: 'user' }; // Asigna los datos del usuario autenticado
          this.authenticated = true; // Establece la autenticación en true
          return true; // Autenticación exitosa
        } else {
          this.error = 'Credenciales inválidas';
          this.authenticated = false; // Establece la autenticación en false
          return false; // Autenticación fallida
        }
      } catch (error: any) {
        this.error = error.message || 'Error de autenticación';
        this.authenticated = false; // Establece la autenticación en false
        return false; // Autenticación fallida
      }
    },
  },
});