<template>
  <div class="entry-page">

    <p class="intro-text">Dive into a world of spine-chilling tales and heart-stopping mysteries. Share your own thrilling stories or explore those that send shivers down your spine.</p>
    <p class="intro-text">Upvote your favorite goosebumps-inducing stories or write your own to captivate a community of horror and thriller lovers.</p>
    <p class="intro-text">Are you ready to embrace the darkness?</p>
    <button class="enter-button" @click="enterSite">Let Me In →</button>
  </div>
</template>

<script>
export default {
  name: "Info",
  methods: {
    enterSite() {
      // Navigation to main site or any desired page
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.entry-page {
  background-color: #000; /* Black background */
  color: white; /* Text color */
  text-align: center;
  padding: 50px;
  font-family: 'Courier New', Courier, monospace;
}

.title {
  color: red; /* Red title */
  font-size: 3rem;
  font-weight: bold;
}

.intro-text {
  color: white; /* White text for paragraphs */
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 15px;
}

.enter-button {
  background-color: red; /* Red button */
  color: white; /* White text */
  border: none;
  padding: 15px 30px;
  margin-top: 30px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: 'Courier New', Courier, monospace;
  text-transform: uppercase;
  letter-spacing: 2px;
}
</style>
