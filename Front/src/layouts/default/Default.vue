<template>
  <v-app>
    <default-bar />
    <side-bar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer color="primary" app>&copy; {{ currentYear }}</v-footer>
  </v-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import DefaultBar from './AppBar.vue';
  import SideBar from './SideBar.vue';

  const currentYear = ref(new Date().getFullYear());
</script>
