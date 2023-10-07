// rolesStore.ts
import { defineStore } from 'pinia';
import axiosClient from '@/api/axiosClient';
import Rol from '@/models/rol';

type State = {
  roles: Rol[];
  error: string | null;
};

const endPointName = 'roles';

export const useRolesStore = defineStore({
  id: 'rolesStore',
  state: (): State => ({
    roles: [],
    error: null
  }),
  actions: {
    async fetchAll() {
      try {
        const response = await axiosClient.get<Rol[]>(endPointName);
        this.roles = response.data;
      } catch (error: any) {
        this.error = error.message || 'Error cargando los Elementos';
      }
    },
    async createEntity(newEntity: Omit<Rol, 'id'>) {
      try {
        const response = await axiosClient.post<Rol>(endPointName, newEntity);
        this.roles.push(response.data);
      } catch (error: any) {
        this.error = error.message || 'Error Creando elemento';
      }
    },
    async updateEntity(updatedEntity: Rol) {
      try {
        await axiosClient.put(`${endPointName}/${updatedEntity.id}`, updatedEntity);
        const index = this.roles.findIndex(g => g.id === updatedEntity.id);
        if (index !== -1) this.roles[index] = updatedEntity;
      } catch (error: any) {
        this.error = error.message || 'Error Actualizando elemento';
      }
    },
    async deleteEntity(id: number) {
      try {
        await axiosClient.delete(`${endPointName}/${id}`);
        this.roles = this.roles.filter(g => g.id !== id);
      } catch (error: any) {
        this.error = error.message || 'Error eliminando elemento';
      }
    }
  }
});
