<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="img-container">
      <img src="" />
    </div>
    <TheWelcome />
  </main>
</template>

<style scoped>
.img-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.img-container img {
  max-width: 100%;
  height: auto;
}
</style>
