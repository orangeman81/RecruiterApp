<template>
  <div class="card mt-24">
    <ul class="list">
      <li v-for="item in data" :key="item._id">
        <span>
          <h4>{{ item.name }}</h4>
        </span>
        <span>
          <button @click="$emit('delete', item._id)" class="rounded">
            <span class="material-icons">delete</span>
          </button>
          <button @click="navigate(item._id)" class="rounded">
            <span class="material-icons">delete</span>
          </button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted, inject } from "vue";
import router from "../router";

export default defineComponent({
  name: "RecordsList",
  emits: ["delete"],
  props: {
    url: String,
    data: Array
  },
  setup(props) {
    const url = props.url;
    const data = props.data;
    const navigate = (id: string) => {
      router.push(`${url}/${id}`);
    };

    return {
      data
    };
  }
});
</script>
