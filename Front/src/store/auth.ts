import { defineStore } from 'pinia';
import axios from 'axios'; // Asegúrate de tener Axios instalado

export const useAuthStore = defineStore({
  id: 'authStore',
  state: () => ({
    user: {}, // Aquí puedes almacenar los datos del usuario autenticado
    error: {}, // Para manejar errores de autenticación
  }),

  actions: {
    async login(username: string, password: string) {
      try {
       
        if (username === 'user' && password === 'password') {
          this.user = { username: 'user' }; // Asigna los datos del usuario autenticado
          return true; // Autenticación exitosa
        } else {
          this.error = 'Credenciales inválidas';
          return false; // Autenticación fallida
        }
      } catch (error: any) {
        this.error = error.message || 'Error de autenticación';
        return false; // Autenticación fallida
      }
    },
    // Agrega acciones para el cierre de sesión u otras operaciones de autenticación si es necesario.
  },
});