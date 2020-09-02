<template>
  <slot />
</template>

<script lang="ts">
import { defineComponent, provide } from "vue";
import { RecordsStore } from "../../store/index";

export default defineComponent({
  name: "RecordsProvider",
  setup() {
    provide("RecordsStore", RecordsStore);
  }
});
</script>