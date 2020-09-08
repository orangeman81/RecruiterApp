<template>
  <DataList url="/records/" :data="records" @remove="remove" />
  <div class="actions mt-56">
    <router-link to="/records/edit/new" class="btn rounded">
      <span class="material-icons">add</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted, inject } from "vue";
import DataList from "../../components/DataList.vue";
import { Record } from "../../../../models/record";
import { Subscription } from "rxjs";
import Logger from "../../utility/logger";

export default defineComponent({
  name: "RecordsList",
  components: {
    DataList
  },
  setup() {
    let sub: Subscription;
    const store: any = inject("Store");
    const records = ref<Record[]>([]);

    onMounted(() => {
      sub = store.$select(["data"]).subscribe((state: Record[]) => {
        Logger.info(`${store.name} injected`, [state]);
        records.value = state;
      });
    });

    onUnmounted(() => {
      sub.closed || sub.unsubscribe();
      Logger.log("Subscription closed", sub.closed);
    });

    const remove = (id: string) => {
      sub = store.$remove(id).subscribe();
    };

    return {
      records,
      remove
    };
  }
});
</script>
