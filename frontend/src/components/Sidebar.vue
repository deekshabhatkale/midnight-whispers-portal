<template>
  <div class="sidebar">
    <button @click="home" class="nav-item-link">Home</button>
    <button @click="newStory" class="nav-item-link">Add Story</button>
    <button @click="logout" class="nav-item-link">Logout</button>
  </div>
  
</template>
<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";


export default {
  name: "Sidebar",
  setup() {
    const showSidebarMobile = ref(false);
    const router = useRouter();

    const newStory = () => {
      router.push(`/new/draft`);
    };
    const profile = () => {
      router.push(`/profile`);
    };
    const home = () => {
      router.push(`/home`);
    };
    const toggleMobileSidebar = () => {
      showSidebarMobile.value = !showSidebarMobile.value;
    };

    const logout = () => {
      router.push("/info");
    };
    onMounted(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          showSidebarMobile.value = true; // Show on large screens
        } else {
          showSidebarMobile.value = false; // Hide by default on mobile
        }
      };
      handleResize();
      window.addEventListener("resize", handleResize);
    });

    return {
      newStory,
      showSidebarMobile,
      toggleMobileSidebar,
      logout,
      profile,
      home,

    };
  },
};
</script>
<style scoped>
.sidebar {
  width: 200px;
  background-color: black; /* Dark sidebar */
  padding: 20px;
  color: #eee; /* Light text */
  display: flex;
  flex-direction: column;
}
.sidebar-mobile-hidden {
  display: none;
}
.sidebar-mobile-header {
  display: none;
}

.nav-items {
  list-style: none;
  padding: 0;
}
.nav-item-link {
  display: block;
  padding: 10px;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 5px;
}

.nav-item-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
  }
  .sidebar-mobile-header {
    display: block;
    margin-bottom: 10px;
  }
  .hamburger-menu {
    background-color: transparent;
    color: white;
    font-size: 24px;
    border: none;
    cursor: pointer;
  }
}
button
{
  padding: 10px;
  margin: 4px;
  background-color:red;
}
</style>
