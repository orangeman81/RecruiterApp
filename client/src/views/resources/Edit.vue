<template>
  <article class="card mt-24">
    <div class="content">
      <header class="mb-24 f-l-jsb">
        <h2>Edit</h2>
        <router-link to="../" class="btn rounded">
          <span class="material-icons">list</span>
        </router-link>
      </header>
      <form @submit.prevent="submit()">
        <div class="grid col-2">
          <span>
            <label>Name</label>
            <input type="text" v-model="formData.name" required />
          </span>
          <span>
            <label>Address</label>
            <input type="text" v-model="formData.address" required />
          </span>
          <span>
            <label>Phone</label>
            <input type="text" v-model="formData.phone" required />
          </span>
          <span>
            <label>Email</label>
            <input type="email" v-model="formData.email" required />
          </span>
          <span>
            <label>Education</label>
            <input type="text" v-model="formData.education" required />
          </span>
          <span>
            <label>Position</label>
            <input type="text" v-model="formData.position" required />
          </span>
          <span>
            <label>Skills</label>
            <input type="text" v-model="formData.skills" required />
          </span>
          <span>
            <label>Hired on</label>
            <input type="date" v-model="formData.hiredOn" required />
          </span>
        </div>
        <div class="actions mt-24">
          <button type="submit" class="rounded">
            <span class="material-icons">save</span>
          </button>
        </div>
      </form>
    </div>
  </article>
</template>

<script lang="ts">
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import { defineComponent, inject, onMounted, onUnmounted, ref } from "vue";
import { ResourceDTO } from "../../../../models/resource";
import router from "../../router";

export default defineComponent({
  name: "EditResource",
  props: {
    id: { type: String }
  },
  setup(props) {
    const store: any = inject("Store");
    const formData = ref<ResourceDTO>(new ResourceDTO());
    let sub: Subscription = new Subscription();

    onMounted(() => {
      if (props.id != "new") {
        sub = store.$find(props.id).subscribe((res: ResourceDTO) => {
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
          .pipe(finalize(() => router.push("/resources")))
          .subscribe();
      } else {
        sub = store
          .$update(props.id, formData.value)
          .pipe(finalize(() => router.push("/resources")))
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
