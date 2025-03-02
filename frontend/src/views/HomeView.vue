<template>
  <div class="home">
    <h1>Recent Stories</h1>
    <div class="story-list">
      <StoryCard class="story-card" v-for="story in stories" :key="story._id" :story="story" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import StoryCard from "../components/StoryCard.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "HomeView",
  components: {
    StoryCard,
    Sidebar,
  },
  setup() {
    const stories = ref([]);
    const errorMessage = ref('');

    const fetchStories = async () => {
      try {
        const response = await fetch('http://localhost:3000/stories/api/stories');
        if (!response.ok) {
          throw new Error('Failed to fetch stories');
        }
        stories.value = await response.json();
      } catch (error) {
        console.error("Error fetching stories:", error);
        errorMessage.value = 'Error fetching stories';
      }
    };

    onMounted(fetchStories);

    return {
      stories,
      errorMessage,
    };
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
}
.story-list {
  margin-top: 20px;
}
</style>