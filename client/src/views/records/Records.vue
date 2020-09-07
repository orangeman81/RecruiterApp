<template>
  <header>
    <h1>Records</h1>
  </header>
  <Provider :store="RecordsStore">
    <router-view></router-view>
  </Provider>
</template>

<script lang="ts">
import RecordsList from "./RecordsList.vue";
import Provider from "../../components/Provider.vue";
import { RecordsStore } from "../../store/index";
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
