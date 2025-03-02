<template>
  <div class="story-card">
    <img :src="story.cover" alt="Story Cover" class="story-image" />
    <div class="story-details">
      <h2>{{ story.title }}</h2>
      <p>{{ story.content.substring(0, 100) }}...</p> <!-- Display an excerpt -->
      <button @click="readStory">Read this story</button>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: "StoryCard",
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();

    const readStory = () => {
      router.push(`/stories/${props.story._id}`);
    };

    return {
      readStory,
    };
  },
};
</script>

<style scoped>
.story-card {
  display: flex;
  border: 1px solid black;
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 20px;
  background-color: black;
  color: white;
}

.story-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 20px;
}

.story-details {
  flex: 1;
}

.story-details h2 {
  margin: 0;
  font-size: 1.5em;
}

.story-details p {
  margin: 10px 0 0;
}

.story-details button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.story-details button:hover {
  background-color: #0056b3;
}
</style>