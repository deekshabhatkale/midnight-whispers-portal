<template>
    <div class="story-form" @form.prevent="createStory()">
      <h1>Create Story</h1>
        <div class="form-control">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="title"/>
        </div>
        <div class="form-control">
            <label for="cover">Cover</label>
           <input type="text" id="cover" v-model="cover" placeholder="Paste image url here." />
        </div>
        <div class="form-control">
            <label for="content">Content</label>
            <textarea id="content" v-model="content"></textarea>
        </div>
      <div class="form-control">
            <label for="tags">Tags (Select tags)</label>
            <select  id="tags" v-model="selectedTags" multiple>
                 <option v-for="tag in availableTags" :value="tag" :key="tag">
                      {{ tag }}
                 </option>
            </select>
      </div>
        <button @click="saveStory">Save Story</button>
        <div v-if="errorMessage" class="error-message">{{errorMessage}}</div>
    </div>
</template>
<script>
    import {ref, onMounted} from 'vue';
    // import {fetchStories, useAuth} from '../services/api';
    import {useRouter} from 'vue-router';
    // import {createStory} from '../services/api';

    export default {
        name: 'NewStoryView',
        setup() {
          const title = ref('');
            const cover = ref('');
            const content = ref('');
            const availableTags = ref([
                 'horror', 'thriller', 'creepy', 'crime stories', 'psychological', 'gore'
            ]);
            const selectedTags = ref([]);
            const errorMessage = ref('');
            // const {createStory} = fetchStories();
            // const {getUser} = useAuth();
            const router = useRouter();
            const currentUser = ref(null);




            const saveStory = async () => {
                if(!title.value || !cover.value || !content.value || selectedTags.value.length === 0 )
                {
                    errorMessage.value = 'Please fill in all the details.';
                    return;
                }
                 if(content.value.split(' ').length > 15000) {
                   errorMessage.value = 'Story exceeds the limit of 15,000 words.';
                   return;
                 }
                try {
                    const newStory = await createStory({
                        title: title.value,
                        cover: cover.value,
                        content: content.value,
                        tags: selectedTags.value,
                      });
                    router.push(`/stories/${newStory._id}`)
                }
                catch (err){
                   console.log(err);
                  errorMessage.value = 'Error creating new story.'
                }
            };
            return {
                title,
                cover,
                content,
                availableTags,
                selectedTags,
                errorMessage,
                saveStory
            };
        }
    }
</script>
<style scoped>
  .app-container {
    display: flex;
    min-height: 100vh;
    background-color: #222; 
    color: white; 
    justify-content: center; 
    align-items: center; 
  }

  .story-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px; 
    border-radius: 5px;
    background-color: #333; 
    width: 80%; 
    max-width: 600px; 
    margin: 0 auto; 
  }

  h1 {
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-bottom: 20px; 
  }

  .form-control {
    margin-bottom: 15px;
    width: 80%; 
  }

  .form-control label {
    display: block;
    margin-bottom: 5px;
    color: #ddd;
  }

  .form-control input[type="text"],
  .form-control textarea,
  .form-control select {
    width: 100%; 
    padding: 10px;
    background-color: #444;
    border: 1px solid #555;
    color: white;
    border-radius: 5px;
  }

  .form-control textarea {
    min-height: 200px;
    resize: vertical;
  }

  .form-control select {
    height: 150px;
    overflow-y: scroll;
  }

  button {
    background-color: #ff4d4d;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .error-message {
    color: red;
    margin-top: 10px;
  }

</style>