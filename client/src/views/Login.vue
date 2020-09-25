<template>
  <div class="f-l-center">
    <form @submit.prevent="submit()">
      <div class="grid col-2">
        <span>
          <label>Username</label>
          <input type="text" v-model="formData.username" required />
        </span>
        <span>
          <label>Password</label>
          <input type="password" v-model="formData.password" required />
        </span>
      </div>
      <div class="actions mt-24">
        <button type="submit" class="rounded">
          <span class="material-icons">login</span>
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import { CredentialsDTO } from "../../../models/auth";
import { AuthStore } from "../store/index";

export default defineComponent({
  name: "Login",
  setup() {
    const formData = ref({
      username: "",
      password: ""
    });

    const submit = () => {
      AuthStore.$login(formData["value"]).subscribe();
    };

    return {
      formData,
      submit
    };
  }
});
</script>