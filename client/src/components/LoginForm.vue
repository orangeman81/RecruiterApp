<template>
  <form @submit.prevent="$emit('submit', formData)">
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
        <span class="material-icons">Signin</span>
      </button>
    </div>
  </form>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { CredentialsDTO } from "../../../models/auth";
export default defineComponent({
  name: "LoginForm",
  emits: ["submit"],
  setup() {
    const formData = ref<CredentialsDTO>({
      username: "",
      password: ""
    });

    return {
      formData
    };
  }
});
</script>