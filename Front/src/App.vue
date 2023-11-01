<!-- <template>
  <Default />
</template>

<script lang="ts" setup>
import  Default  from '@/layouts/default/Default.vue'; -->

</script>
<template>
  <div id="app">
    <login />
  </div>
</template>

<script lang="ts">
import Login from '@/components/login/Login.vue';

export default {
  name: 'App',
  components: {
    Login,
  },
};
</script>