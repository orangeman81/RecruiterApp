<template>
  <div class="card mt-24">
    <header class="content f-l-jsb">
      <h2>Details</h2>
      <router-link to="../" class="btn rounded">
        <span class="material-icons">list</span>
      </router-link>
    </header>
    <DetailsList :details="details" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, inject, onMounted, onUnmounted } from "vue";
import DetailsList from "../../components/DetailsList.vue";
import { Record, RecordDTO } from "../../../../models/record";
import { Subscription } from "rxjs";
import Logger from "../../utility/logger";
import { map } from "rxjs/operators";

export default defineComponent({
  name: "RecordDetails",
  components: { DetailsList },
  props: ["id"],
  setup(props) {
    let sub: Subscription;
    const store: any = inject("Store");
    const details = ref<Record>(new Record(""));

    onMounted(() => {
      sub = store
        .$find(props.id)
        .pipe(
          map(
            (res: RecordDTO) =>
              new Record(
                res.name,
                res.description,
                res.value,
                res.type,
                res.code
              )
          )
        )
        .subscribe((res: Record) => {
          details.value = res;
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