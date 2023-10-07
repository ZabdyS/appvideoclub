const commonHeaders = [
  { text: 'Description', align: 'start', sortable: false, value: 'descripcion' },
  { text: 'Activo', align: 'start', sortable: false, value: 'isActive' },
  { text: 'Actions', value: 'actions'}
];

const articulosHeaders = [
  { text: 'Titulo', align: 'start', sortable: false, value: 'titulo' },
  { text: 'Precio Renta', align: 'start', sortable: false, value: 'rentaDia' },
  { text: 'Renta / Dia', align: 'start', sortable: false, value: 'diasRenta' },
  { text: 'Activo', align: 'start', sortable: false, value: 'isActive' },
  { text: 'Actions', value: 'actions'}
];

const clientesHeaders = [
  { text: 'Nombre', align: 'start', sortable: false, value: 'name' },
  { text: 'Tipo Persona', align: 'start', sortable: false, value: 'tipoPersona' },
  { text: 'Cedula', align: 'start', sortable: false, value: 'cedula' },
  { text: 'Activo', align: 'start', sortable: false, value: 'isActive' },
  { text: 'Actions', value: 'actions'}
];

const empleadoHeaders = [
  { text: 'Nombre', align: 'start', sortable: false, value: 'name' },
  { text: 'Cedula', align: 'start', sortable: false, value: 'cedula' },
  { text: '% Comision', align: 'start', sortable: false, value: 'porcientoComision' },
  { text: 'Fecha Ingreso', align: 'start', sortable: false, value: 'fechaIngreso' },
  { text: 'Activo', align: 'start', sortable: false, value: 'isActive' },
  { text: 'Actions', value: 'actions'}
];


const rolHeaders = [
  { text: 'Nombre', align: 'start', sortable: false, value: 'name' },
  { text: 'Activo', align: 'start', sortable: false, value: 'isActive' },
  { text: 'Actions', value: 'actions'}
];

export {
  commonHeaders,
  rolHeaders,
  articulosHeaders,
  clientesHeaders,
  empleadoHeaders,
};
