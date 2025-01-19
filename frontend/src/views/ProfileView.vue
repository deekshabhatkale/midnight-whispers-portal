<template>
    <div class="profile">
        <h1>Profile</h1>
        <div class="profile-card">
           <img :src="user.profilePicture" alt="Profile Picture" class="profile-picture"/>
           <h2 class="name">{{user.name}}</h2>
           <p class="email">{{ user.email }}</p>
           <textarea v-model="bio" placeholder="Write your bio here...." class="bio-input"></textarea>
             <button @click="updateUser" class="save-button">Update Profile</button>
            <div v-if="successMessage" class="success-message">{{successMessage}}</div>
           <div v-if="errorMessage" class="error-message">{{errorMessage}}</div>
      </div>
    </div>
    </template>
    <script>
        import { ref, onMounted } from 'vue';
        // import { useAuth, getUser } from '../services/api';
    export default {
        name: 'ProfileView',
        data() {
            return {
                user: {
                    name: 'John Doe',
                    email: 'john.doe@gmail.com',
                    profilePicture: 'https://static.vecteezy.com/system/resources/thumbnails/005/544/708/small/profile-icon-design-free-vector.jpg',

                    }
                  }
                  },
                }
              
         // setup() {
        //     const user = ref(null);
        //     const bio = ref('');
        //     const successMessage = ref('');
        //     const errorMessage = ref('');
        //     const {getUser} = useAuth();
        //     const {updateUser: updateUserDetails} = getUser();
    
        //    onMounted(async () => {
        //      const fetchedUser = await getUser();
        //      if(fetchedUser){
        //          user.value = fetchedUser;
        //          bio.value = user.value.bio;
        //      }
    
        //     });
    
        //     const updateUser = async () => {
        //       if(!user.value){
        //         errorMessage.value = 'User not found.';
        //         return;
        //       }
        //        try{
        //          const updatedUser =  await updateUserDetails(user.value._id, {bio: bio.value});
        //          user.value = updatedUser;
        //          successMessage.value = "Profile Updated Successfully.";
        //           errorMessage.value = '';
    
        //        } catch (err) {
        //         errorMessage.value = 'Error updating Profile';
        //         successMessage.value = '';
        //          console.error(err);
        //        }
        //     };
    
        //     return {
        //       user,
        //       bio,
        //       successMessage,
        //       errorMessage,
        //       updateUser
        //     }
        // }
 
    </script>
    <style scoped>
     .profile{
         padding: 20px;
     }
    .profile-card {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #555;
      border-radius: 8px;
      background-color: #333;
       text-align: center;
    }
    .profile-picture {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 20px;
    }
    .name {
        color: #ff4d4d; /* Red name */
        margin-bottom: 10px;
    }
    .email {
        color: #ddd; /* Light gray email */
        margin-bottom: 20px;
    }
    .bio-input{
      width: calc(100% - 20px);
      padding: 10px;
      margin-bottom: 15px;
      background-color: #444;
      border: 1px solid #555;
      color: white;
      resize: vertical; /* Enable vertical resize */
      min-height: 100px;
    }
      .save-button{
        background-color: #ff4d4d;
        color: white;
        padding: 10px 15px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      .save-button:hover{
         background-color: #e63939;
      }
       .success-message {
          color: green;
          margin-top: 10px;
      }
        .error-message {
           color: red;
           margin-top: 10px;
        }
    </style>