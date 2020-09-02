<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";

export default defineComponent({
  name: "Provider",
  props: {
    store: Object
  },
  setup(props) {
    provide("Store", props.store);
  }
});
</script>