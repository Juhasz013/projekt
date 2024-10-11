<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <table class="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Név</th>
              <th scope="col">VRMMORPG</th>
              <th scope="col">Nickname</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="character in filteredKarakter"
              :key="character.id"
              @click="selectCharacter(character)"
            >
              <td>{{ character.jatekos }}</td>
              <td>{{ character.vrmmorpg }}</td>
              <td>{{ character.nickname }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4" v-if="selectedCharacter">
        <div class="character-details">
          <h2>{{ selectedCharacter.jatekos }}</h2>
          <img
            :src="'/public/' + selectedCharacter.images[selectedImageIndex]"
            alt="Character Image"
            class="character-image"
          />
          <div class="image-navigation">
            <button @click="prevImage" :disabled="selectedImageIndex === 0">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button
              @click="nextImage"
              :disabled="
                selectedImageIndex === selectedCharacter.images.length - 1
              "
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
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
</template>



<script>
export default {
  inject: ["keresoSzo"],
  data() {
    return {
      karakterek: [
        {
          id: 1,
          jatekos: "Kirito",
          vrmmorpg: "Aincrad | Alfheim |GGO | Alicization",
          nickname: "Black Swordman | Beater",
          images: [
            "kirito.png",
            "kirito_alo.png",
            "kirito_ggo.png",
            "kirito_alicization.png",
          ],
        },
        {
          id: 2,
          jatekos: "Asuna",
          vrmmorpg: "Aincrad | Alfheim |GGO | Alicization",
          nickname: "Lightning | Berserk Healer",
          images: [
            "asuna.png",
            "asuna_alo.png",
            "asuna_ggo.png",
            "asuna_alicization.png",
          ],
        },
        {
          id: 3,
          jatekos: "Klein",
          vrmmorpg: "Aincrad | Alfheim | GGO | Alicization",
          nickname: "BallDeep69 | Fuurinkazan Leader",
          images: [
            "klein.png",
            "klein_alo.png",
            "klein_ggo.png",
            "klein_alicization.png",
          ],
        },
        {
          id: 4,
          jatekos: "Agil",
          vrmmorpg: "Aincrad | Alfheim | Alicization",
          nickname: "Blacksmith",
          images: ["agil.png", "agil_alo.png", "agil_alicization.png"],
        },
        {
          id: 5,
          jatekos: "Heatcliff",
          vrmmorpg: "Aincrad",
          nickname: "Creator Of Aincrad | Leader",
          images: ["heatcliff.png"],
        },
        {
          id: 6,
          jatekos: "Leafa",
          vrmmorpg: "Alfheim | Alicization",
          nickname: "Speedaholic",
          images: ["leafa.png", "leafa_alicization.png"],
        },
        {
          id: 7,
          jatekos: "Yuuki",
          vrmmorpg: "Alfheim",
          nickname: "Zekken",
          images: ["yuuki.png"],
        },
        {
          id: 8,
          jatekos: "Sinon",
          vrmmorpg: "GGO | Alfheim | Alicization",
          nickname: "The Sniper",
          images: ["sinon.png", "sinon_alo.png", "sinon_alicization.png"],
        },
        {
          id: 9,
          jatekos: "Eugeo",
          vrmmorpg: "Alicization",
          nickname: "Blue Rose",
          images: ["eugeo.png"],
        },
        {
          id: 10,
          jatekos: "Alice",
          vrmmorpg: "Alicization",
          nickname: "Fluctlight",
          images: ["alice.png"],
        },
        {
          id: 11,
          jatekos: "Quinella",
          vrmmorpg: "Alicization",
          nickname: "Administrator",
          images: ["quinella.png"],
        },
        {
          id: 12,
          jatekos: "Yui",
          vrmmorpg: "Aincrad | Alfheim ",
          nickname: "Mental Health and Counselling Program",
          images: ["yui.png", "yui_alo.png"],
        },
      ],
      selectedCharacter: null,
      selectedImageIndex: 0,
      imageStyle: {
      width: '100%',
      maxWidth: '300px',
      borderRadius: '10px',
      boxShadow: '0 0 15px rgba(0, 191, 255, 0.5)',
      border: '5px solid #00bfff' // Például egy keret hozzáadása
      },
    };
    
  },
  computed: {
    filteredKarakter() {
      const keresendo = this.keresoSzo ? this.keresoSzo.toLowerCase() : "";
      return this.karakterek.filter((karakter) => {
        return (
          karakter.jatekos.toLowerCase().includes(keresendo) ||
          karakter.vrmmorpg.toLowerCase().includes(keresendo) ||
          karakter.nickname.toLowerCase().includes(keresendo)
        );
      });
    },
  },
  methods: {
    selectCharacter(character) {
      this.selectedCharacter = character;
      this.selectedImageIndex = 0;
    },
    nextImage() {
      if (this.selectedImageIndex < this.selectedCharacter.images.length - 1) {
        this.selectedImageIndex++;
      }
    },
    prevImage() {
      if (this.selectedImageIndex > 0) {
        this.selectedImageIndex--;
      }
    },
    changeImageStyle(newStyle) {
    this.imageStyle = newStyle;
  },
  },
};
</script>



<style scoped>
.sao-healthbar {
  position: fixed; /* Changed to fixed to make it stay visible on scroll */
  top: 84px; /* Adjust according to your navigation bar height */
  left: 12px; /* Adjust left margin */
  width: 350px;
  height: 50px;
  display: flex;
  z-index: 1000; /* Ensures it stays on top of other elements */

}
.main-container {
  height: 50px;
  width: 350px;
  background: rgba(0, 0, 0, 0.6);
  clip-path: polygon(350px 0, 330px 36.5px, 187px 36.5px, 187px 51px, 0 51px, 0 0);
  display: flex;
  align-items: center;
}

.character-name {
  width: 60px;
  color: #FFF;
  text-align: center;
}

.health-bar--outline {
  width: 274px;
  height: 34px;
  background: #FFF;
  clip-path: polygon(262px 20.55px, 122.5px 20.55px, 113.5px 35px, 0 35px, 0 0, 274px 0);
  display: flex;
  justify-content: center;
  align-items: center;
}

.health-bar--border {
  width: 272px;
  height: 32px;
  background: rgba(0, 0, 0, 0.6);
  clip-path: polygon(260px 18px, 120px 18px, 110px 35px, 0 35px, 0 0, 271px 0);
  display: flex;
  justify-content: center;
  align-items: center;
}

.health-bar--background {
  width: 268px;
  height: 28px;
  background: #FFF;
  clip-path: polygon(256px 14px, 116.5px 14px, 103.5px 35px, 0 35px, 0 0, 265px 0);
}

.health-bar--health {
  --health: 1;
  --max-health: 1;
  width: calc(var(--health) / var(--max-health) * 100%);
  height: 28px;
  background: linear-gradient(to bottom, #71af1b 0%, #94c94f 100%);
  clip-path: polygon(100% 0, 0 0, 0 102%, calc(100% - 18px) 102%);
}

.health-indicator {
  --health: '0';
  --max-health: '0';
  width: 90px;
  height: 26px;
  margin: 38px 0 0 189px;
  padding-right: 10px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 3px 0 0 3px;
  color: #FFF;
  font-size: 0.8em;
  line-height: 26px;
  text-align: right;
  position: absolute;
}

.health-indicator:before {
  content: var(--health);
  margin-right: 5px;
}

.health-indicator:after {
  content: var(--max-health);
  margin-left: 5px;
}

.character-level {
  --level: '1';
  width: 40px;
  height: 26px;
  margin: 38px 0 0 291px;
  padding-left: 10px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 0 3px 3px 0;
  color: #FFF;
  font-size: 0.8em;
  line-height: 26px;
  position: absolute;
}

.character-level:after {
  content: var(--level);
  margin-left: 5px;
}

.container-fluid {
  margin-top: 80px;
  padding: 20px;
  background-image: url("https://example.com/sao_background.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
  border: 2px solid #00bfff;
  backdrop-filter: blur(10px);
  margin-left: 40px;
}

.character-details {
  text-align: center;
  margin-top: 20px;
}

.character-details h2 {
  color: #00bfff;
  font-family: "Orbitron", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.character-image { /* kezeli tudom */
  width: 100%;
  max-width: 300px; 
  border-radius: 20px; 
  box-shadow: 0 0 25px rgba(0, 191, 255, 0.7); 
  transition: transform 0.3s ease;
  border: 5px solid #00bfff; 
}

.character-image:hover { /* kezeli tudom */
  filter: grayscale(0%); /* Szürkeárnyalat eltüntetése hover esetén */
  transform: scale(1.05);
}

.image-navigation {
  margin-top: 10px;
}

.image-navigation button {
  background-color: #00bfff;
  border: none;
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  font-family: "Orbitron", sans-serif;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.image-navigation button:hover {
  background-color: #005f99;
}

.image-navigation button:disabled {
  background-color: #333;
  cursor: not-allowed;
}
</style>

