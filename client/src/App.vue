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
import { defineComponent, onMounted, onUnmounted } from "vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { RecordsStore } from "./store/index";
import { Record } from "../../models/record";
import { Subscription } from "rxjs";

export default defineComponent({
  components: {
    Navbar,
    Footer
  },
  setup() {
    let sub: Subscription;

    onMounted(() => {
      sub = RecordsStore.$load().subscribe();
    });

    onUnmounted(() => {
      sub.unsubscribe();
    });
  }
});
</script>
