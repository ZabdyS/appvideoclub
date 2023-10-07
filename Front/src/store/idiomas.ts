import axiosClient from '@/api/axiosClient';
import Idioma from '@/models/idioma';
import { defineStore } from 'pinia';

export const useIdiomasStore = defineStore({
  id: 'idiomasStore',
  state: () => ({
    idiomas: [] as Idioma[],
    error: null as Error | null,
    loading: false as boolean,
  }),

  actions: {
    async fetchIdiomas() {
      try {
        const response = await axiosClient.get<Idioma[]>('/idiomas');
        this.idiomas = response.data;
      } catch (error: any) {
        this.error = error.message || 'Failed to fetch idiomas';
      }
    },
    async createIdioma(newIdioma: Omit<Idioma, 'id'>) {
      try {
        const response = await axiosClient.post<Idioma>('/idiomas', newIdioma);
        this.idiomas.push(response.data);
      } catch (error: any) {
        this.error = error.message || 'Failed to create idioma';
      }
    },
    async updateIdioma(updatedIdioma: Idioma) {
      try {
        await axiosClient.put(`/idiomas/${updatedIdioma.id}`, updatedIdioma);
        const index = this.idiomas.findIndex(i => i.id === updatedIdioma.id);
        if (index !== -1) this.idiomas[index] = updatedIdioma;
      } catch (error: any) {
        this.error = error.message || 'Failed to update idioma';
      }
    },
    async deleteIdioma(id: number) {
      try {
        await axiosClient.delete(`/idiomas/${id}`);
        this.idiomas = this.idiomas.filter(i => i.id !== id);
      } catch (error: any) {
        this.error = error.message || 'Failed to delete idioma';
      }
    }
  },
});
