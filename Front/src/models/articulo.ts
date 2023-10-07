export default interface Articulo {
  id: number;
  titulo: string;
  rentaDia: number;
  diasRenta: number;
  entregaTardia: number;
  isActive: boolean;
  tipoArticuloId: number;
}
