<template>
  <header>
    <h1>Records</h1>
  </header>
  <Provider :store="RecordsStore">
    <router-view></router-view>
  </Provider>
</template>

<script lang="ts">
import Provider from "../../components/Provider.vue";
import { defineComponent, onMounted, onUnmounted } from "vue";
import { DataStore } from "../../store/core/DataStore";
import { RecordDTO } from "../../../../models/record";
import { Subscription } from "rxjs";

export default defineComponent({
  name: "Records",
  components: {
    Provider
  },
  setup() {
    const RecordsStore: DataStore<RecordDTO> = new DataStore<RecordDTO>(
      {
        data: [],
        loaded: false,
        pagination: {
          page: 0,
          total: 0
        }
      },
      "http://localhost:3000/records/",
      "Records Store"
    );

    let sub: Subscription;

    onMounted(() => {
      sub = RecordsStore.$load().subscribe();
    });

    onUnmounted(() => {
      sub.unsubscribe();
    });

    return {
      RecordsStore
    };
  }
});
</script>
