<template>
  <main class="container">
    <header class="mb-56">
      <h1>Create</h1>
      <hr />
    </header>
    <Provider :store="RecordsStore">
      <RecordForm />
    </Provider>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Provider from "../components/Provider.vue";
import RecordForm from "../components/RecordForm.vue";
import { RecordsStore } from "../store/index";

export default defineComponent({
  name: "Create",
  components: {
    Provider,
    RecordForm
  },
  data() {
    return {
      RecordsStore
    };
  }
});
</script>
