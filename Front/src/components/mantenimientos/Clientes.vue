<script setup lang="ts">
  import { useClienteStore } from '@/store/clientes';
  import { onMounted, ref, computed, reactive } from 'vue';
  import { useToast } from 'vue-toastification';
  import { clientesHeaders } from '@/types/helpers/headers';
  import type { Header, Item } from 'vue3-easy-data-table';
  import { SearchIcon, PlusIcon, CurrencyDollarIcon, CreditCardIcon } from 'vue-tabler-icons';
  import Cliente from '@/models/cliente';

  const toast = useToast();

  const tiposPersonas = reactive<Array<string>>(['Persona Juridicia', 'Persona Física']);
  const currentItem = reactive<Cliente>({
    id : 0,
    name: '',
    cedula: '',
    tarjetaCredito: 0.00,
    limiteCredito: 0.00,
    tipoPersona: '',
    isActive: true
  });

  const headers: Header[] = clientesHeaders;
  const store = useClienteStore();
  const isLoading = ref<boolean>(false);
  const items = computed(() => store.clientes);
  const searchField = ['title'];
  const searchValue = ref('');
  const formDialog = ref(false);
  const isEditing = ref(false);

  const action = computed(() => (isEditing.value ? 'Editando' : 'Creando'));

  const showFormModal = (editing: boolean) => {
    isEditing.value = editing;
    formDialog.value = true;
  };

  onMounted(async () => {
    try {
      await store.fetchClientes();
    } finally {
      isLoading.value = false;
    }
  });


  const createItem = async () => {
    try {
      await store.createCliente(currentItem);
      toast.success("Operacion de Registro Completada correctamente");
    } catch (error: any) {
      toast.error(`Se ha producido un error creando el elemento ${error}`);
    }
  };

  const updateItem = async () => {
    try {
      await store.updateCliente(currentItem);
      toast.success("Operacion de Registro Completada correctamente");
    } catch (error: any) {
      toast.error(`Se ha producido un error creando el Item ${error}`);
    }
  };

  const loadItem = (item: Item) => {
    currentItem.id = item.id;
    currentItem.name = item.name;
    currentItem.cedula = item.cedula;
    currentItem.tipoPersona = item.tipoPersona;
    currentItem.limiteCredito = item.limiteCredito;
    currentItem.tarjetaCredito = item.tarjetaCredito;
    currentItem.isActive = item.isActive;

    showFormModal(true);
  }

  const deleteItem = async (id: number) => {
    try {
      await store.deleteCliente(id);
      toast.info("Operacion de Eliminación Completada correctamente");
    } catch (error: any) {
      toast.error(`Se ha producido un error eliminando el Item ${error}`);
    }
  }
  const cancelOperation = () => {
    currentItem.id = 0;
    currentItem.name = '';
    currentItem.cedula = '';
    currentItem.tarjetaCredito = 0.00;
    currentItem.limiteCredito = 0.00;
    currentItem.tipoPersona = '';
    currentItem.isActive = true;
    formDialog.value = false;
  };

  const saveElement = () => {
    if (!isEditing.value) {
      createItem();
    } else {
      updateItem();
    }
  };
</script>
<template>
  <v-container>

    <v-card class="ml-5">
      <v-card-title>
        Clientes
      </v-card-title>
      <v-divider></v-divider>
      <v-card-item>
        <v-col lg="12" class="mb-5 pl-0">
        <div class="d-flex align-center">
          <VTextField
            v-model="searchValue"
            label="Buscar Elemento"
            density="compact"
            class="ma-0 pa-0"
            :append-inner-icon="SearchIcon"
            variant="solo"
            hide-details
          />
          <v-btn
            :prepend-icon="PlusIcon"
            class="ml-4"
            elevation="0"
            color="primary"
            size="x-large"
            density="comfortable"
            @click="showFormModal(false)"
          >
            Nuevo
          </v-btn>
        </div>
      </v-col>
      </v-card-item>
    </v-card>
    <v-col justify="center">
      <v-dialog v-model="formDialog" width="720">
        <v-card elevation="0">
          <v-card-text class="pb-4">
            <v-row>
              <v-col lg="12">
                <div class="d-flex align-center">
                  <h4>{{ action }} Cliente</h4>
                  <v-btn icon size="small" class="ml-auto" elevation="0" @click="cancelOperation"><xIcon size="16" /></v-btn>
                </div>
              </v-col>
              <v-divider></v-divider>
              <v-col cols="12">
                <v-text-field
                  label="Name"
                  v-model="currentItem.name"
                  variant="outlined"
                  color="primary"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Cedula"
                  v-model="currentItem.cedula"
                  variant="outlined"
                  color="primary"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                  <v-select
                  label="Seleccionar Tipo Persona"
                  variant="underlined"
                  v-model="currentItem.tipoPersona"
                  :items="tiposPersonas"
                ></v-select>
              </v-col>
              <v-divider></v-divider>
              <v-col cols="6">
                <v-text-field
                  label="Tarjeta Crédito"
                  v-model="currentItem.tarjetaCredito"
                  :prepend-icon="CreditCardIcon"
                  variant="outlined"
                  color="primary"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Limite de Credito"
                  v-model="currentItem.limiteCredito"
                  :prepend-icon="CurrencyDollarIcon"
                  variant="outlined"
                  color="primary"
                  hide-details
                ></v-text-field>
              </v-col>
              <v-divider></v-divider>
              <v-col lg="12">
                <v-checkbox v-model="currentItem.isActive" label="¿Activo?"></v-checkbox>
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-col lg="12">
              <div class="d-flex">
                  <v-btn elevation="0" color="error" @click="cancelOperation">Cancel</v-btn>
                  <v-btn elevation="0" color="primary" class="ml-auto" @click.prevent="saveElement">Save</v-btn>
              </div>
            </v-col>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
    <v-col class="ml-2">
      <EasyDataTable :headers="headers" :search-field="searchField" :search-value="searchValue" :items="items || []">
          <template #item-actions="item">
            <div class="operation-wrapper">
            <v-btn icon color="secondary" variant="text" @click.prevent="loadItem(item)">
              <PencilIcon size="20" />
            </v-btn>
            <v-btn icon color="error" variant="text" @click.prevent="deleteItem(item.id)">
              <TrashIcon size="20" />
            </v-btn>
          </div>
        </template>
      </EasyDataTable>
    </v-col>
  </v-container>
  </template>

