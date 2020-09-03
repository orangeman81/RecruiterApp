<template>
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
        <textarea type="text" v-model="formData.description" required />
      </span>
    </div>
    <div class="actions mt-56">
      <button type="submit" class="rounded">
        <span class="material-icons">save</span>
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted, inject } from "vue";
import { Record } from "../../../models/record";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import router from "../router";

export default defineComponent({
  name: "RecordForm",
  props: {
    data: { type: Record }
  },
  setup(props) {
    const store: any = inject("Store");
    const formData = ref<Record>(new Record());
    let sub: Subscription = new Subscription();

    onMounted(() => {
      if (props.data) {
        formData.value = props.data;
      }
    });
    onUnmounted(() => {
      sub.closed || sub.unsubscribe();
    });

    const submit = () => {
      sub = store
        .$add(formData.value)
        .pipe(finalize(() => router.push("/")))
        .subscribe();
    };

    return {
      formData,
      submit
    };
  }
});
</script>
