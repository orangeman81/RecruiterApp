<template>
  <header>
    <h1>Records</h1>
    <hr />
  </header>
  <Provider :store="RecordsStore">
    <RecordsList />
  </Provider>
</template>

<script lang="ts">
import RecordsList from "../components/RecordsList.vue";
import Provider from "../components/Provider.vue";
import { RecordsStore } from "../store/index";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Records",
  components: {
    Provider,
    RecordsList
  },
  data() {
    return {
      RecordsStore
    };
  }
});
</script>
