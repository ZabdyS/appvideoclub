// generoStore.ts
import { defineStore } from 'pinia';
import axiosClient from '@/api/axiosClient';
import { Genero } from '@/models/genero';

type State = {
  generos: Genero[];
  error: string | null;
};

export const useGeneroStore = defineStore({
  id: 'generoStore',
  state: (): State => ({
    generos: [],
    error: null
  }),
  actions: {
    async fetchGeneros() {
      try {
        const response = await axiosClient.get<Genero[]>('generos');
        this.generos = response.data;
      } catch (error: any) {
        this.error = error.message || 'Error cargando los Generos';
      }
    },
    async createGenero(newGenero: Omit<Genero, 'id'>) {
      try {
        const response = await axiosClient.post<Genero>('generos', newGenero);
        this.generos.push(response.data);
      } catch (error: any) {
        this.error = error.message || 'Error Creando genero';
      }
    },
    async updateGenero(updatedGenero: Genero) {
      try {
        await axiosClient.put(`generos/${updatedGenero.id}`, updatedGenero);
        const index = this.generos.findIndex(g => g.id === updatedGenero.id);
        if (index !== -1) this.generos[index] = updatedGenero;
      } catch (error: any) {
        this.error = error.message || 'Error Actualizando genero';
      }
    },
    async deleteGenero(id: number) {
      try {
        await axiosClient.delete(`generos/${id}`);
        this.generos = this.generos.filter(g => g.id !== id);
      } catch (error: any) {
        this.error = error.message || 'Error eliminando genero';
      }
    }
  }
});
