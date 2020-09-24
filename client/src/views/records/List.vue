<template>
  <article class="card mt-24">
    <header class="content f-l-jsb">
      <h2>List</h2>
      <span class="actions">
        <router-link to="/records/edit/new" class="btn rounded">
          <span class="material-icons">add</span>
        </router-link>
      </span>
    </header>
    <DataList url="/records/" :data="records" @remove="remove" />
  </article>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted, inject } from "vue";
import DataList from "../../components/DataList.vue";
import { Record } from "../../../../models/record";
import { Subscription } from "rxjs";

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
        records.value = state;
      });
    });

    onUnmounted(() => {
      sub.closed || sub.unsubscribe();
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
