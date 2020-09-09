<template>
  <ul class="list">
    <li v-for="(value, name) in props.details">
      <span>
        <h4 class="textCap">{{name}}</h4>
      </span>
      <span>{{value}}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DetailsList",
  props: {
    details: Object
  },
  setup(props) {
    return {
      props
    };
  }
});
</script>