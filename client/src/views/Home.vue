<template>
  <header>
    <h1>Records</h1>
    <hr />
  </header>
  <RecordsProvider>
    <Records />
  </RecordsProvider>
</template>

<script lang="ts">
import Records from "../components/Records.vue";
import RecordsProvider from "../components/providers/RecordsProvider.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    RecordsProvider,
    Records
  }
});
</script>
