<template>
  <div class="f-page">
    <header>
      <navbar />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style lang="scss">
@import "./sass/style.scss";
</style>

<script lang="ts">
import { defineComponent, provide } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { AuthStore } from "./store/index";
import { GlobalStore } from "./store/core/GlobalStore";

export default defineComponent({
  components: {
    Navbar,
    Footer
  },
  setup() {
    provide<GlobalStore>("auth", AuthStore);
  }
});
</script>
