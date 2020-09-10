<template>
  <nav id="mainNavbar" :class="open ? 'open': ''">
    <div class="desktop">
      <a href="./">
        <img width="40" src="../assets/logo_small.svg" alt="logo" />
      </a>
      <ul>
        <li v-for="route in routes" :key="route.name">
          <router-link :to="route.path" active-class="active">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="mobile">
      <a id="menu" @click.prevent="open = !open">
        <span class="material-icons">{{open ? 'close' : 'menu'}}</span>
      </a>
      <img width="40" src="../assets/logo_small.svg" alt="logo" />
      <div class="nav">
        <ul>
          <li @click="open = false" v-for="route in routes" :key="route.name">
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import routes from "../router/routes";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    let open = ref(false);

    return {
      routes,
      open
    };
  }
});
</script>
