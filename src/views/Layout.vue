<!-- src/components/Layout.vue -->
<template>
    <div>
      <!-- Navigációs sáv -->
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/tester">Tester</router-link>
        <router-link to="/karakter-tablazat">Karakter Táblázat</router-link>
      </nav>
  
      <!-- SAO Health Bar - mindig látható marad -->
      <div class="sao-healthbar">
        <div class="main-container">
          <div class="character-name">Valaki</div>
          <div class="health-bar--outline">
            <div class="health-bar--border">
              <div class="health-bar--background">
                <div class="health-bar--health" style="--health: 200; --max-health: 255"></div>
              </div>
            </div>
          </div>
          <div class="health-indicator" style="--health: '200'; --max-health: '255'">/
          </div>
          <div class="character-level" style="--level: '3'">LV:
          </div>
        </div>
      </div>
  
      <!-- Router outlet - itt jelennek meg az oldalak tartalmai -->
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    name: "Layout"
  }
  </script>
  
  <style scoped>
  /* SAO Health Bar és egyéb stílusok */
  .sao-healthbar {
    position: fixed;
    top: 70px;
    left: 20px;
    width: 350px;
    height: 50px;
    display: flex;
    z-index: 1000;
  }
  
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
  