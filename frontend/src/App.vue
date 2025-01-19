
<template>
    <h1>Midnight Whispers</h1>
  <div class="app-container">
    <Sidebar v-if="$route.path !== '/info'"/> 
    <router-view /> 
  </div>
</template>
<script>

import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    Sidebar,
  },
  setup() {
    const router = useRouter();

    onMounted(() => {
    });

    return {};
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: red;
  font-family: "Courier New", Courier, monospace;
}
.app-container {
  display: flex;
  min-height: 100vh;
  background-color: black; /* Dark background */
  color: white; /* Light text */
}

.main-content {
  flex: 1; /* Takes up remaining space */
  padding: 20px;
}
</style>
