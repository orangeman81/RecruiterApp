<template>
  <div class="card mt-24">
    <ul class="list">
      <li v-for="item in records" :key="item.id">
        <span>
          <h4>{{ item.name }}</h4>
        </span>
        <span class="actions">
          <router-link :to="'/records/details/' + item._id" class="btn rounded">
            <span class="material-icons">info</span>
          </router-link>
          <router-link to="/records/edit" class="btn rounded">
            <span class="material-icons">update</span>
          </router-link>
          <button @click="remove(item._id)" class="rounded">
            <span class="material-icons">delete</span>
          </button>
        </span>
      </li>
    </ul>
  </div>
  <div class="actions mt-56">
    <router-link to="/records/edit" class="btn rounded">
      <span class="material-icons">add</span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted, inject } from "vue";
import { Record } from "../../../../models/record";
import { Subscription } from "rxjs";
import Logger from "../../utility/logger";

export default defineComponent({
  name: "RecordsList",
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
