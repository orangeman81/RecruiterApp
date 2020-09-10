<template>
  <DataList url="/resources/" :data="resources" @remove="remove" />
  <div class="actions mt-56">
    <router-link to="/resources/edit/new" class="btn rounded">
      <span class="material-icons">add</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted, inject } from "vue";
import DataList from "../../components/DataList.vue";
import { Subscription } from "rxjs";
import { Resource } from "../../../../models/resource";

export default defineComponent({
  name: "ResourcesList",
  components: {
    DataList
  },
  setup() {
    let sub: Subscription;
    const store: any = inject("Store");
    const resources = ref<Resource[]>([]);

    onMounted(() => {
      sub = store.$select(["data"]).subscribe((state: Resource[]) => {
        resources.value = state;
      });
    });

    onUnmounted(() => {
      sub.closed || sub.unsubscribe();
    });

    const remove = (id: string) => {
      sub = store.$remove(id).subscribe();
    };

    return {
      resources,
      remove
    };
  }
});
</script>
