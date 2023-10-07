<script lang="ts" setup>
  import { Settings2Icon, LanguageIcon,
          DashboardIcon, TargetIcon,
          Clock2Icon, UserIcon, SelectIcon, ArticleIcon, UsersIcon } from "vue-tabler-icons";
</script>

<template>
  <v-container>
        <!-- Navigation Drawer -->
    <v-navigation-drawer app permanent>
      <!-- Your logo or application name can go here -->

      <v-list-item :prepend-icon="DashboardIcon" title="Dashboard" to="/"></v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item
          title="Mantenimientos"
          :prepend-icon="Settings2Icon"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item :prepend-icon="UserIcon" title="Clientes" to="/mantenimientos/clientes"></v-list-item>
        <v-list-item :prepend-icon="UsersIcon" title="Empleados" to="/mantenimientos/empleados"></v-list-item>
        <v-divider></v-divider>
        <v-list-item :prepend-icon="LanguageIcon" title="Idiomas" to="/mantenimientos/idiomas"></v-list-item>
        <v-list-item :prepend-icon="TargetIcon" title="Generos" to="/mantenimientos/generos"></v-list-item>
        <v-list-item :prepend-icon="Clock2Icon" title="Turnos" to="/mantenimientos/turnos"></v-list-item>
        <v-list-item :prepend-icon="SelectIcon" title="Tipos Articulos" to="/mantenimientos/tipos-articulos"></v-list-item>
        <v-list-item :prepend-icon="UserIcon" title="Roles" to="/mantenimientos/roles"></v-list-item>
        <v-list-item :prepend-icon="ArticleIcon" title="Articulos" to="/mantenimientos/articulos"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

