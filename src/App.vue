<script>
import { RouterLink, RouterView } from "vue-router";
import { computed } from "vue";

export default {
  provide() {
    return {
      keresoSzo: computed(() => this.keresoSzo),
    };
  },
  watch: {
    searchWordInput(data) {
      if (!data) {
        this.keresoSzo = null;
      }
    }
  },
  data() {
    return {
      keresoSzo: null,
      keresoSzoInput: null,
    };
  },
  computed: {
    isHomePage() {
      return this.$route.path === "/";
    }
  }
};
</script>

<template>
  <header>
    <div class="container-fluid my-border my-container navbar-container">
      <h1 class="navbar-title">Kártya Projekt</h1>

      <nav class="my-border p-4 d-flex justify-content-between align-items-center navbar">
        <div class="navbar-links">
          <RouterLink to="/" class="navbar-link">Home</RouterLink> |
          <RouterLink to="/tablazat" class="navbar-link">Tester</RouterLink> |
          <RouterLink to="/kartya" class="navbar-link">ilyen cigányokból álló táblázat szerű cucc</RouterLink>
        </div>

        <div v-if="!isHomePage" class="d-flex align-items-center search-container" role="search">
          <label for="keresoSzo" class="form-label text-nowrap m-0 search-label">Link Start:</label>
<input id="keresoSzo" class="form-control me-2 ms-2 search-input" type="search" aria-label="Keresés"
       v-model="keresoSzoInput" />
<button class="btn btn-outline-danger search-button" type="submit" @click="keresoSzo = keresoSzoInput">
  System Scan
</button>

        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scope>
body {
  background-color: #1c1c2b !important;
  font-family: 'Arial', sans-serif;
}

/* Alap navbar konténer */
.navbar-container {
  background-color: #1a1a2e;
  border-bottom: 3px solid #00bfff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

/* Cím stílusok */
.navbar-title {
  color: #00bfff;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 2px 2px 8px #0080ff;
  text-align: center;
  padding: 20px 0;
  font-size: 3rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* Navbar stílusok */
.navbar {
  background-color: #1a1a2e;
  padding: 20px;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Linkek stílusai */
.navbar-links .navbar-link {
  color: #d1d1d1;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.2rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s ease;
  position: relative;
}

.navbar-links .navbar-link:hover {
  color: #00bfff;
  cursor: pointer;
}

/* Neon hatású aláhúzás */
.navbar-links .navbar-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  height: 3px;
  width: 100%;
  background-color: #00bfff;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.navbar-links .navbar-link:hover::after {
  transform: scaleX(1);
}

/* Kereső mező stílusok */
.search-container {
  display: flex;
  align-items: center;
}

/* Updated search-label */
.search-label {
  color: #00bfff;
  font-size: 1.1rem;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 0 0 5px #00bfff, 0 0 10px #0080ff;
  letter-spacing: 1px;
}

/* Updated search-button */
.search-button {
  background-color: #00bfff;
  border: 1px solid #00bfff;
  color: #1a1a2e;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: background-color 0.3s ease;
  box-shadow: 0 0 10px #00bfff, 0 0 20px #0080ff, 0 0 30px #004080;
}

.search-button:hover {
  background-color: #0080ff;
  color: #fff;
  box-shadow: 0 0 20px #00bfff, 0 0 40px #0080ff, 0 0 60px #004080;
}


</style>
