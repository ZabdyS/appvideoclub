// clienteStore.ts
import { defineStore } from 'pinia';
import axiosClient from '@/api/axiosClient';
import { Cliente } from '@/models/cliente';

type State = {
  clientes: Cliente[];
  error: string | null;
};

export const useClienteStore = defineStore({
  id: 'clienteStore',
  state: (): State => ({
    clientes: [],
    error: null
  }),
  actions: {
    async fetchClientes() {
      try {
        const response = await axiosClient.get<Cliente[]>('clientes');
        this.clientes = response.data;
      } catch (error) {
        this.error = 'Error al obtener los clientes';
      }
    },
    async createCliente(newCliente: Omit<Cliente, 'id'>) {
      try {
        const response = await axiosClient.post<Cliente>('clientes', newCliente);
        this.clientes.push(response.data);
      } catch (error) {
        this.error = 'Error al crear el cliente';
      }
    },
    async updateCliente(updatedCliente: Cliente) {
      try {
        await axiosClient.put(`clientes/${updatedCliente.id}`, updatedCliente);
        const index = this.clientes.findIndex(c => c.id === updatedCliente.id);
        if (index !== -1) this.clientes[index] = updatedCliente;
      } catch (error) {
        this.error = 'Error al actualizar el cliente';
      }
    },
    async deleteCliente(id: number) {
      try {
        await axiosClient.delete(`clientes/${id}`);
        this.clientes = this.clientes.filter(c => c.id !== id);
      } catch (error) {
        this.error = 'Error al eliminar el cliente';
      }
    }
  }
});
