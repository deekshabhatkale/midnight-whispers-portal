<template>
    <div class="story" v-for="story in stories" :key="story._id">
        <h1>{{story.title}}</h1>
        <img :src="story.cover" alt="story cover" class="story-cover"/>
        <p>{{story.content}}</p>
        <div class="tags">
            <span v-for="tag in story.tags" :key="tag" class="tag">{{tag}}</span>
        </div>
        <div class="author">
            <span>By: {{story.author.username}}</span>
        </div>
 
        <div class="story-list">
             <StoryCard v-for="story in stories" :key="story._id" :story="story"/>
        </div>
    </div>
  </template>
  
  <script>
  import {ref, onMounted} from 'vue';
//   import {fetchStories} from '../services/api';
  import StoryCard from '../components/StoryCard.vue';
    import {stories} from '../../../stories.json'
  
  export default {
      name: 'StoryView',
      components: {
          StoryCard
      },
      data()
      {
        return stories
      },
      setup() {
          const stories = ref([]);
          const {fetchStories} = fetchStories();
  
          onMounted(async () => {
               stories.value = await fetchStories();
          });
          return {
               stories
          };
      }
  }
  </script>
  <style scoped>
      .home {
          padding: 20px;
      }
      .story-list {
          margin-top: 20px;
      }
  </style>