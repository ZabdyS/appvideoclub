<script setup lang="ts">
  import { useTurnosStore } from '@/store/turnos';
  import { onMounted, ref, computed, reactive } from 'vue';
  import { useToast } from 'vue-toastification';
  import { commonHeaders } from '@/types/helpers/headers';
  import type { Header, Item } from 'vue3-easy-data-table';
  import { SearchIcon, PlusIcon } from 'vue-tabler-icons';
  import Generic from '@/models/generic';


  const toast = useToast();
  const currentItem = reactive<Generic>({
    id : 0,
    descripcion: '',
    isActive: false
  });

  const headers: Header[] = commonHeaders;
  const store = useTurnosStore();
  const isLoading = ref<boolean>(false);
  const items = computed(() => store.turnos);
  const searchField = ['descripcion'];
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
      await store.fetchAll();
    } finally {
      isLoading.value = false;
    }
  });


  const createItem = async () => {
    try {
      await store.createEntity(currentItem);
      toast.success("Operacion de Registro Completada correctamente");
    } catch (error: any) {
      toast.error(`Se ha producido un error creando el elemento ${error}`);
    }
  };

  const updateItem = async () => {
    try {
      await store.updateEntity(currentItem);
      toast.success("Operacion de Registro Completada correctamente");
    } catch (error: any) {
      toast.error(`Se ha producido un error creando el Item ${error}`);
    }
  };

  const loadItem = (item: Item) => {
    currentItem.id = item.id;
    currentItem.descripcion = item.descripcion;
    currentItem.isActive = item.isActive;

    showFormModal(true);
  }

  const deleteItem = async (id: number) => {
    try {
      await store.deleteEntity(id);
      toast.info("Operacion de Eliminación Completada correctamente");
    } catch (error: any) {
      toast.error(`Se ha producido un error eliminando el Item ${error}`);
    }
  }
  const cancelOperation = () => {
    currentItem.id = 0;
    currentItem.descripcion = '';
    currentItem.isActive = false;
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
        Turnos
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
                      <h4>{{ action }} Elemento</h4>
                      <v-btn icon size="small" class="ml-auto" elevation="0" @click="cancelOperation"><xIcon size="16" /></v-btn>
                    </div>
              </v-col>
              <v-divider></v-divider>
              <v-col lg="12">
                <v-text-field
                  label="descripcion"
                  v-model="currentItem.descripcion"
                  variant="outlined"
                  color="primary"
                  hide-details
                ></v-text-field>
              </v-col>
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

