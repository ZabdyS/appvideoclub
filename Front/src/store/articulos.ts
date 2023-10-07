// articulosStore.ts
import { defineStore } from 'pinia';
import axiosClient from '@/api/axiosClient';
import Articulo from '@/models/articulo';

type State = {
  articulos: Articulo[];
  error: string | null;
};

export const useArticulosStore = defineStore({
  id: 'articulosStore',
  state: (): State => ({
    articulos: [],
    error: null
  }),
  actions: {
    async fetchArticulos() {
      try {
        const response = await axiosClient.get<Articulo[]>('articulos');
        this.articulos = response.data;
      } catch (error) {
        this.error = 'Error al obtener los artículos';
      }
    },
    async createArticulo(newArticulo: Omit<Articulo, 'id'>) {
      try {
        const response = await axiosClient.post<Articulo>('articulos', newArticulo);
        this.articulos.push(response.data);
      } catch (error) {
        this.error = 'Error al crear el artículo';
      }
    },
    async updateArticulo(updatedArticulo: Articulo) {
      try {
        await axiosClient.put(`articulos/${updatedArticulo.id}`, updatedArticulo);
      } catch (error) {
        this.error = 'Error al actualizar el artículo';
      }
    },
    async deleteArticulo(id: number) {
      try {
        await axiosClient.delete(`articulos/${id}`);
        this.articulos = this.articulos.filter(a => a.id !== id);
      } catch (error) {
        this.error = 'Error al eliminar el artículo';
      }
    }
  }
});
