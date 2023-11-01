<script setup lang="ts">
  import { ref } from 'vue';
  import { useAuthStore } from '@/store/auth';
  import { Form, Field } from 'vee-validate';
  import router  from '@/router/index';
  import Vue from 'vue';




  const checkbox = ref(false);
  const valid = ref(false);
  const show1 = ref(false);
  const password = ref('');
  const username = ref('');
  const passwordRules = ref([(v: string) => !!v || 'Password is required']);
  const emailRules = ref([(v: string) => !!v || 'E-mail is required', (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid']);

  async function submit(values: any, { setErrors }: any) {
    const authStore = useAuthStore();
    const logUser = await authStore.login(username.value, password.value);
    console.log(logUser);
    
    if(logUser)
    {
      router.push({name: 'Dashboard'});
    }else{
      setErrors({apiError: logUser})
    }
  }
</script>

<template>
  
  <h5 class="text-h5 text-center my-4 mb-8">Sign in with Email address</h5>
  <Form @submit="submit" class="mt-7 loginForm" v-slot="{ errors, isSubmitting }">
    <v-text-field
      v-model="username"
      :rules="emailRules"
      label="Email Address / Username"
      class="mt-4 mb-8"
      required
      density="comfortable"
      hide-details="auto"
      variant="outlined"
      
      color="primary"
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Password"
      required
      density="comfortable"
      variant="outlined"
      color="primary"
      hide-details="auto"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show1 ? 'text' : 'password'"
      @click:append="show1 = !show1"
      class="pwdInput"
    ></v-text-field>

    <div class="d-sm-flex align-center mt-2 mb-7 mb-sm-0">
      <v-checkbox
        v-model="checkbox"
        :rules="[(v:any) => !!v || 'You must agree to continue!']"
        label="Remember me?"
        required
        color="primary"
        class="ms-n2"
        hide-details
      ></v-checkbox>
      <div class="ml-auto">
        <a href="javascript:void(0)" class="custom-color text-decoration-none" >Forgot password?</a>
      </div>
    </div>
    <v-btn color="#61A7C3" :loading="isSubmitting" block class="mt-2 text-white" variant="flat" size="large" :disabled="valid" type="submit">
      SIGN IN</v-btn
    >
    <div v-if="errors.apiError" class="mt-2">
      <v-alert color="error">{{ errors.apiError }}</v-alert>
    </div>
  </Form>
  <v-divider />
  
</template>
<style lang="scss">

.custom-color {
  color: #61A7C3;
  font-weight: bold;

}
.custom-devider {
  border-color: rgba(0, 0, 0, 0.08) !important;
}
.googleBtn {
  border-color: rgba(0, 0, 0, 0.08);
  margin: 30px 0 20px 0;
}
.outlinedInput .v-field {
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: none;
}
.orbtn {
  padding: 2px 40px;
  border-color: rgba(0, 0, 0, 0.08);
  margin: 20px 15px;
}
.pwdInput {
  position: relative;
  .v-input__append {
    position: absolute;
    right: 10px;
  }
}
.loginForm {
  .v-text-field .v-field--active input {
    font-weight: 500;
  }
}
</style>