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

export default defineComponent({
  name: "Records",
  setup() {
    let sub: Subscription;
    const store: any = inject("RecordsStore");
    const records = ref<Record[]>([]);

    onMounted(() => {
      console.log(store);
      sub = store.$select(["data"]).subscribe((state: Record[]) => {
        records.value = state;
      });
    });

    onUnmounted(() => {
      sub.closed || sub.unsubscribe();
      console.log("subscription closed: ", sub.closed);
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
