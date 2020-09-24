<template>
  <header>
    <h1>Resources</h1>
  </header>
  <Provider :store="ResourcesStore">
    <router-view></router-view>
  </Provider>
</template>

<script lang="ts">
import { Subscription } from "rxjs";
import { defineComponent, onMounted, onUnmounted } from "vue";
import { Resource } from "../../../../models/resource";
import Provider from "../../components/Provider.vue";
import { DataStore } from "../../store/core/DataStore";

export default defineComponent({
  name: "Resources",
  components: {
    Provider
  },
  setup() {
    const ResourcesStore: DataStore<Resource> = new DataStore<Resource>(
      {
        data: [],
        loaded: false,
        pagination: {
          page: 0,
          total: 0
        }
      },
      "http://localhost:3000/resources/",
      "Resources Store"
    );

    let sub: Subscription;

    onMounted(() => {
      sub = ResourcesStore.$load().subscribe();
    });

    onUnmounted(() => {
      sub.unsubscribe();
    });

    return {
      ResourcesStore
    };
  }
});
</script>