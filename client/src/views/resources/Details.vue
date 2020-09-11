<template>
  <div class="grid aside">
    <aside class="card mt-24">
      <header class="content">
        <h3>Interview</h3>
      </header>
    </aside>
    <article class="card mt-24">
      <header class="content f-l-jsb">
        <h2>Details</h2>
        <router-link to="../" class="btn rounded">
          <span class="material-icons">list</span>
        </router-link>
      </header>
      <DetailsList :details="details" />
    </article>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, inject, onMounted, onUnmounted } from "vue";
import DetailsList from "../../components/DetailsList.vue";
import { Resource, ResourceDTO } from "../../../../models/resource";
import { Subscription } from "rxjs";
import { map } from "rxjs/operators";

export default defineComponent({
  name: "ResourceDetails",
  components: { DetailsList },
  props: ["id"],
  setup(props) {
    let sub: Subscription;
    const store: any = inject("Store");
    const details = ref<Resource>();

    onMounted(() => {
      sub = store
        .$find(props.id)
        .pipe(map((res: ResourceDTO) => new Resource(res)))
        .subscribe((res: Resource) => {
          details.value = res;
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