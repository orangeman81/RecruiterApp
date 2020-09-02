<template>
  <nav id="mainNavbar">
    <div class="desktop">
      <a href="./">
        <img width="56" src="../assets/logo.png" alt />
      </a>
      <ul>
        <li v-for="route in routes" :key="route.name">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="mobile">
      <a href="./">
        <img width="56" src="../assets/logo.png" alt />
      </a>
      <ul>
        <li v-for="route in routes" :key="route.name">
          <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import routes from "../router/routes";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    return {
      routes
    };
  }
});
</script>
