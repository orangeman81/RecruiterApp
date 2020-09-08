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
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default defineComponent({
  components: {
    Navbar,
    Footer
  }
});
</script>
