<template>
  <div class="card mt-24">
    <header class="content f-l-jsb">
      <h2>Details</h2>
      <router-link to="../" class="btn rounded">
        <span class="material-icons">list</span>
      </router-link>
    </header>
    <ul class="list">
      <li v-for="(value, name) in details">
        <span>
          <h4 class="textCap">{{name}}</h4>
        </span>
        <span>{{value}}</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, inject, onMounted, onUnmounted } from "vue";
import { Record } from "../../../../models/record";
import { Subscription } from "rxjs";
import Logger from "../../utility/logger";

export default defineComponent({
  name: "RecordDetails",
  props: ["id"],
  setup(props) {
    let sub: Subscription;
    const store: any = inject("Store");
    const details = ref<Record>(new Record(""));

    onMounted(() => {
      sub = store.$select(["data"]).subscribe((state: Record[]) => {
        let results: Record = state.find(
          (r: Record) => r._id === props.id
        ) as Record;
        details.value = {
          name: results.name,
          description: results.description,
          value: results.value,
          type: results.type,
          code: results.code
        };
        Logger.info("Details: ", [details.value]);
      });
    });

    onUnmounted(() => {
      sub.closed || sub.unsubscribe();
    });

    return {
      details
    };
  }
});
</script>