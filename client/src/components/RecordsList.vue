<template>
  <div class="card mt-24">
    <ul class="list">
      <li v-for="item in records" :key="item.id">
        <span>{{ item.name }}</span>
        <span>
          <button @click="remove(item._id)">delete</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted, inject } from "vue";
import { Record } from "../../../models/record";
import { Subscription } from "rxjs";
import Logger from "../utility/logger";

export default defineComponent({
  name: "RecordsList",
  setup() {
    let sub: Subscription;
    const store: any = inject("Store");
    const records = ref<Record[]>([]);

    onMounted(() => {
      sub = store.$select(["data"]).subscribe((state: Record[]) => {
        Logger.info(`${store.name} injected`, [state]);
        Logger.warn("Error", "lorem ipsum dolor sit amet")
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
