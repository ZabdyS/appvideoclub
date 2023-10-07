// turnosStore.ts
import { defineStore } from 'pinia';
import axiosClient from '@/api/axiosClient';
import Generic from '@/models/generic';

type State = {
  turnos: Generic[];
  error: string | null;
};

const endPointName = 'turnos';

export const useTurnosStore = defineStore({
  id: 'turnosStore',
  state: (): State => ({
    turnos: [],
    error: null
  }),
  actions: {
    async fetchAll() {
      try {
        const response = await axiosClient.get<Generic[]>(endPointName);
        this.turnos = response.data;
      } catch (error: any) {
        this.error = error.message || 'Error cargando los Elementos';
      }
    },
    async createEntity(newEntity: Omit<Generic, 'id'>) {
      try {
        const response = await axiosClient.post<Generic>(endPointName, newEntity);
        this.turnos.push(response.data);
      } catch (error: any) {
        this.error = error.message || 'Error Creando elemento';
      }
    },
    async updateEntity(updatedEntity: Generic) {
      try {
        await axiosClient.put(`${endPointName}/${updatedEntity.id}`, updatedEntity);
        const index = this.turnos.findIndex(g => g.id === updatedEntity.id);
        if (index !== -1) this.turnos[index] = updatedEntity;
      } catch (error: any) {
        this.error = error.message || 'Error Actualizando elemento';
      }
    },
    async deleteEntity(id: number) {
      try {
        await axiosClient.delete(`${endPointName}/${id}`);
        this.turnos = this.turnos.filter(g => g.id !== id);
      } catch (error: any) {
        this.error = error.message || 'Error eliminando elemento';
      }
    }
  }
});
