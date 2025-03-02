<template>
  <div class="story-details" v-if="story">
    <h1 class="story-title">{{ story.title }}</h1>
    <img :src="story.cover" alt="Story Cover" class="story-image" />
    <pre class="story-content">{{ story.content }}</pre> <!-- Use <pre> to preserve formatting -->
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchStoryById } from '../services/api';

export default {
  name: 'StoryDetails',
  setup() {
    const route = useRoute();
    const story = ref(null);
    const errorMessage = ref('');

    const getStory = async () => {
      try {
        const storyId = route.params.id;
        story.value = await fetchStoryById(storyId);
      } catch (error) {
        console.error('Error fetching story:', error);
        errorMessage.value = 'Error fetching story';
      }
    };

    onMounted(getStory);

    return {
      story,
      errorMessage,
    };
  },
};
</script>

<style scoped>
.story-details {
  padding: 20px;
  text-align: center;
}

.story-title {
  font-size: 2em;
  margin-bottom: 20px;
}

.story-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 0 auto 20px;
}

.story-content {
  text-align: left;
  white-space: pre-wrap; /* Preserve whitespace and line breaks */
}
</style>