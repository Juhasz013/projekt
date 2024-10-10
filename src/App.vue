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
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <h1 class="navbar-title">SAO Projekt</h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/tablazat" class="nav-link">Tester</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/kartya" class="nav-link">Karakter Táblázat</RouterLink>
            </li>
          </ul>

          <!-- Kereső mező -->
          <form v-if="!isHomePage" class="d-flex align-items-center search-container" role="search">
            <label for="keresoSzo" class="form-label text-nowrap m-0 search-label">Link Start:</label>
            <input id="keresoSzo" class="form-control me-2 ms-2 search-input" type="search" aria-label="Keresés" v-model="keresoSzoInput" />
            <button class="btn btn-outline-danger search-button text-nowrap" type="button" @click="keresoSzo = keresoSzoInput">System Scan</button>
          </form>
        </div>
      </div>
    </nav>
    <RouterView />
  </header>
</template>

<style scoped>
body {
  background-color: #1c1c2b !important;
  font-family: 'Arial', sans-serif;
}
/* Navbar styles */
.navbar {
  background-color: #1a1a2e;
  padding: 1rem;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Title styles */
.navbar-title {
  color: #00bfff;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 2px 2px 8px #0080ff;
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-align: center;
  flex-grow: 1;
}

/* Link styles */
.navbar-nav .nav-link {
  color: #d1d1d1;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #00bfff;
}

/* Search container styles */
.search-container {
  display: flex;
  align-items: center;
}

/* Search label styles */
.search-label {
  color: #00bfff;
  font-family: 'Orbitron', sans-serif;
  text-shadow: 0 0 5px #00bfff, 0 0 10px #0080ff;
}

/* Search button styles */
.search-button {
  background-color: #00bfff;
  border: 1px solid #00bfff;
  color: #1a1a2e;
  font-family: 'Orbitron', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #0080ff;
  color: #fff;
}

/* Media Queries */
@media (max-width: 768px) {
  .navbar-title {
    font-size: 1.2rem; /* Smaller title on smaller screens */
  }

  .navbar-nav .nav-link {
    font-size: 0.9rem; /* Smaller font size for links */
  }

  .search-input {
    width: 100%; /* Full width on smaller screens */
  }
}
</style>
