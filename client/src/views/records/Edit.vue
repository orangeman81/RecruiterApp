<template>
  <main class="container">
    <header class="mb-56">
      <h1>Create</h1>
      <hr />
    </header>
    <form @submit.prevent="submit()">
      <div class="grid col-2">
        <span>
          <label>Name</label>
          <input type="text" v-model="formData.name" required />
        </span>
        <span>
          <label>Value</label>
          <input type="number" v-model="formData.value" required />
        </span>
        <span>
          <label>Type</label>
          <input type="text" v-model="formData.type" required />
        </span>
        <span>
          <label>Code</label>
          <input type="text" v-model="formData.code" required />
        </span>
        <span>
          <label>Description</label>
          <textarea v-model="formData.description" required />
        </span>
      </div>
      <div class="actions mt-56">
        <button type="submit" class="rounded">
          <span class="material-icons">save</span>
        </button>
      </div>
    </form>
  </main>
</template>

<script lang="ts">
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import { defineComponent, inject, onMounted, onUnmounted, ref } from "vue";
import { Record, RecordDTO } from "../../../../models/record";
import router from "../../router";

export default defineComponent({
  name: "EditRecord",
  props: {
    id: { type: String }
  },
  setup(props) {
    const store: any = inject("Store");
    const formData = ref<Record>(new Record());
    let sub: Subscription = new Subscription();

    onMounted(() => {
      if (props.id != "new") {
        sub = store.$find(props.id).subscribe((res: RecordDTO) => {
          formData.value = res;
        });
      }
    });
    onUnmounted(() => {
      sub.closed || sub.unsubscribe();
    });

    const submit = () => {
      if (props.id === "new") {
        sub = store
          .$add(formData.value)
          .pipe(finalize(() => router.push("/records")))
          .subscribe();
      } else {
        sub = store
          .$update(props.id, formData.value)
          .pipe(finalize(() => router.push("/records")))
          .subscribe();
      }
    };

    return {
      formData,
      submit
    };
  }
});
</script>
