<template>
  <article class="card mt-24">
    <header class="content withActions">
      <h2>List</h2>
      <span>
        <input @input="search" type="text" placeholder="search" />
        <router-link to="/resources/edit/new" class="btn rounded">
          <span class="material-icons">add</span>
        </router-link>
      </span>
    </header>
    <DataList url="/resources/" :data="resources" @remove="remove" />
  </article>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted, inject } from "vue";
import DataList from "../../components/DataList.vue";
import { Subject, Subscription } from "rxjs";
import { Resource } from "../../../../models/resource";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap
} from "rxjs/operators";

export default defineComponent({
  name: "ResourcesList",
  components: {
    DataList
  },
  setup() {
    let sub: Subscription;
    const store: any = inject("Store");
    const resources = ref<Resource[]>([]);
    const $querySubject: Subject<string> = new Subject();

    onMounted(() => {
      sub = store.$select(["data"]).subscribe((state: Resource[]) => {
        resources.value = state;
      });

      sub = $querySubject
        .pipe(
          filter((query: string) => query.length > 3 || query === ""),
          debounceTime(600),
          distinctUntilChanged(),
          switchMap((query: string) =>
            query === "" ? store.$load() : store.$search(query)
          )
        )
        .subscribe();
    });

    onUnmounted(() => {
      sub.closed || sub.unsubscribe();
    });

    const remove = (id: string) => {
      sub = store.$remove(id).subscribe();
    };

    const search = (event: InputEvent) => {
      const query: string = (event.target as HTMLInputElement).value;
      $querySubject.next(query);
    };

    return {
      resources,
      remove,
      search
    };
  }
});
</script>
