<template>
  <main class="container">
    <header class="mb-56">
      <h1>Create</h1>
      <hr />
    </header>
    <RecordsProvider>
      <RecordForm />
    </RecordsProvider>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RecordForm from "../components/RecordForm.vue";

export default defineComponent({
  name: "Create",
  components: {
    RecordForm
  }
});
</script>
