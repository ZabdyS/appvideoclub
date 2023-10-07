// empleadoStore.ts
import { defineStore } from 'pinia';
import axiosClient from '@/api/axiosClient';
import Empleado from '@/models/empleado';

type State = {
  empleados: Empleado[];
  error: string | null;
};

export const useEmpleadoStore = defineStore({
  id: 'empleadoStore',
  state: (): State => ({
    empleados: [],
    error: null
  }),
  actions: {
    async fetchEmpleados() {
      try {
        const response = await axiosClient.get<Empleado[]>('empleados');
        this.empleados = response.data;
      } catch (error) {
        this.error = 'Error al obtener los empleados';
      }
    },
    async createEmpleado(newEmpleado: Omit<Empleado, 'id'>) {
      try {
        const response = await axiosClient.post<Empleado>('empleados', newEmpleado);
        this.empleados.push(response.data);
      } catch (error) {
        this.error = 'Error al crear el empleado';
      }
    },
    async updateEmpleado(updatedEmpleado: Empleado) {
      try {
        await axiosClient.put(`empleados/${updatedEmpleado.id}`, updatedEmpleado);
        const index = this.empleados.findIndex(e => e.id === updatedEmpleado.id);
        if (index !== -1) this.empleados[index] = updatedEmpleado;
      } catch (error) {
        this.error = 'Error al actualizar el empleado';
      }
    },
    async deleteEmpleado(id: number) {
      try {
        await axiosClient.delete(`empleados/${id}`);
        this.empleados = this.empleados.filter(e => e.id !== id);
      } catch (error) {
        this.error = 'Error al eliminar el empleado';
      }
    }
  }
});
