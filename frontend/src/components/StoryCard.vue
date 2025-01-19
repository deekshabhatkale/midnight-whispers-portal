<template>
    <div class="story-card" @click="navigateToStory">
         <img :src="story.image" alt="Story Cover" class="cover-image"/>
          <div class="card-content">
              <h3 class="title">{{story.title}}</h3>
              <p class="excerpt">{{ story.disc }}...</p>
          </div>
    </div>
  </template> 
  
  <script>
  import {useRouter} from 'vue-router';
  export default {
    name: 'StoryCard',
    props: {
      story: {
        type: Object,
        required: true
      }
    },
    computed: {
         storyExcerpt() {
             const words = this.story.content.split(' ');
             return words.slice(0, 100).join(' ');
         }
    },
      setup(props) {
           const router = useRouter();
           const navigateToStory = () => {
             router.push(`/story/${props.story._id}`)
           };
          return {
              navigateToStory
          };
      }
  }
  </script>
  <style scoped>
  .story-card {
      border: 1px solid black;
      border-radius: 8px;
      padding: 25px;
      margin-bottom: 20px;
      background-color: black;
      display: flex;
      cursor: pointer;
      align-items: flex-start; /* Align items to the start */
  }
  
  .cover-image {
    width: 100px;
    height: 133px; /* Maintaining a 3:4 aspect ratio */
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .card-content {
     flex: 1;
  }
  .title {
    font-size: 18px;
      color: #ff4d4d; /* Red title */
      text-align: center;
  }
  
  .excerpt {
    color: #ddd;
  }
  
  .story-card:hover {
    background-color: #444;
  }
  
  @media (max-width: 768px) {
    .story-card{
        flex-direction: column;
    }
     .cover-image {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
  </style>