<!-- src/components/Layout.vue -->
<template>
    <div>
      <!-- Navigációs sáv -->
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/tester">Tester</router-link>
        <router-link to="/karakter-tablazat">Karakter Táblázat</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "Layout"
  }
  </script>
  
  <style scoped>
  
  .main-container {
    height: 50px;
    width: 350px;
    background: rgba(0, 0, 0, 0.6);
    clip-path: polygon(350px 0, 330px 36.5px, 187px 36.5px, 187px 51px, 0 51px, 0 0);
    display: flex;
    align-items: center;
  }
  
  /* A navigációs sávhoz egyszerű stílus */
  nav {
    background-color: #333;
    padding: 10px;
  }
  
  nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
  
  nav a:hover {
    text-decoration: underline;
  }
  </style>
  