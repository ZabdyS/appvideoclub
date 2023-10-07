// turnosStore.ts
import { defineStore } from 'pinia';
import axiosClient from '@/api/axiosClient';
import Generic from '@/models/generic';

type State = {
  tipos: Generic[];
  error: string | null;
};

const endPointName = 'tiposarticulos';

export const useTiposStore = defineStore({
  id: 'tiposStore',
  state: (): State => ({
    tipos: [],
    error: null
  }),
  actions: {
    async fetchAll() {
      try {
        const response = await axiosClient.get<Generic[]>(endPointName);
        this.tipos = response.data;
      } catch (error: any) {
        this.error = error.message || 'Error cargando los Elementos';
      }
    },
    async createEntity(newEntity: Omit<Generic, 'id'>) {
      try {
        const response = await axiosClient.post<Generic>(endPointName, newEntity);
        this.tipos.push(response.data);
      } catch (error: any) {
        this.error = error.message || 'Error Creando elemento';
      }
    },
    async updateEntity(updatedEntity: Generic) {
      try {
        await axiosClient.put(`${endPointName}/${updatedEntity.id}`, updatedEntity);
        const index = this.tipos.findIndex(g => g.id === updatedEntity.id);
        if (index !== -1) this.tipos[index] = updatedEntity;
      } catch (error: any) {
        this.error = error.message || 'Error Actualizando elemento';
      }
    },
    async deleteEntity(id: number) {
      try {
        await axiosClient.delete(`${endPointName}/${id}`);
        this.tipos = this.tipos.filter(g => g.id !== id);
      } catch (error: any) {
        this.error = error.message || 'Error eliminando elemento';
      }
    }
  }
});
