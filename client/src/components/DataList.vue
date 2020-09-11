<template>
  <ul class="list">
    <li v-for="item in props.data" :key="item._id">
      <span>
        <h4>{{ item.name }}</h4>
      </span>
      <span class="actions">
        <router-link :to="props.url + 'details/' + item._id" class="btn rounded">
          <span class="material-icons">info</span>
        </router-link>
        <router-link :to="props.url + 'edit/' + item._id" class="btn rounded">
          <span class="material-icons">update</span>
        </router-link>
        <button @click="$emit('remove', item._id)" class="rounded">
          <span class="material-icons">delete</span>
        </button>
      </span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "DataList",
  emits: ["remove"],
  props: {
    url: String,
    data: Array
  },
  setup(props) {
    return {
      props
    };
  }
});
</script>
