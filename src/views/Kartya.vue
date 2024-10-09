<template>
    <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 karakter-kartyak">
      <KarakterKartya v-for="karakter in szurtKarakterek" :key="karakter.id" :id="karakter.id"
        @karaterModalReszletKezeles="reszletModalKezelo" class="karakter-kartya">
        <template v-slot:kep>
          <img :src="karakter.kep" :alt="karakter.rang" class="karakter-kep" />
        </template>
        <template v-slot:rang>
          <p v-html="keresJelol(karakter.rang)" class="karakter-rang"></p>
        </template>
      </KarakterKartya>
    </div>
    <div v-if="szurtKarakterek.length == 0">Nincs találat</div>
  
    <KartyaInfo :rang="keresJelol(kivalasztottKarakter.rang)">
      <img :src="kivalasztottKarakter.kep" :alt="kivalasztottKarakter.rang"
        class="float-start col-12 col-sm-6 col-lg-4 me-1 p-2 my-picture" />
      <div v-html="keresJelol(szovegFormatum)"></div>
    </KartyaInfo>
  </template>
  
  <script>
  class Karakter {
    constructor(id = 0, rang = null, kep = null, szoveg = null) {
      this.id = id;
      this.rang = rang;
      this.kep = kep;
      this.szoveg = szoveg;
    }
  }
  import KarakterKartya from "@/components/KarakterKartya.vue";
  import KartyaInfo from "@/components/KartyaInfo.vue";
  export default {
    components: {
      KarakterKartya,
      KartyaInfo,
    },
    inject: ["keresoSzo"],
    data() {
      return {
        kivalasztottKarakter: new Karakter(),
        karakterek: [
          {
            id: 1,
            jatekos: "Kirito",
            kep: "",
            szoveg: [
            ],
          },
          {
            id: 2,
            jatekos: "Asuna",
            kep: "",
            szoveg: [
            ],
          },
          {
            id: 3,
            jatekos: "Klein",
            kep: "ng",
            szoveg: [
            ],
          },
          {
            id: 4,
            jatekos: "Agil",
            kep: "n",
            szoveg: [
            ],
          },
          {
            id: 5,
            jatekos: "Heatcliff",
            kep: "",
            szoveg: [
            ],
          },
          {
            id: 6,
            jatekos: "Leafa",
            kep: "",
            szoveg: [
            ],
          },
          {
            id: 7,
            jatekos: "Yuuki",
            kep: "",
            szoveg: [
            ],
          },
          {
            id: 8,
            jatekos: "Sinon",
            kep: ".",
            szoveg: [
            ],
          },
          {
            jatekos: 9,
            jatekos: "Eugo",
            kep: ".",
            szoveg: [
            ],
          },
          {
            jatekos: 10,
            jatekos: "Alice",
            kep: ".",
            szoveg: [
            ],
          },
        ],
      };
    },
    methods: {
      reszletModalKezelo(id) {
        this.kivalasztottKarakter = this.karakterek.filter((k) => k.id == id.id)[0];
      },
      keresJelol(szoveg) {
        if (this.keresoSzo) {
          let what = new RegExp(this.keresoSzo, "gi");
          if (szoveg) {
            szoveg = szoveg.replace(what, (match) => {
              return `<span class="mark p-0">${match}</span>`;
            });
          }
          return szoveg;
        } else {
          return szoveg;
        }
      },
    },
    computed: {
      szovegFormatum() {
        if (this.kivalasztottKarakter.szoveg == null) {
          return `<p></p>`;
        }
        return this.kivalasztottKarakter.szoveg
          .map((k) => `<p>${k}</p>`)
          .join("");
      },
      szurtKarakterek() {
        if (!this.keresoSzo) {
          return this.karakterek;
        }
        return this.karakterek.filter(k => {
          return k.rang.toLowerCase().includes(this.keresoSzo.toLowerCase()) ||
            k.szoveg.some(k => k.toLowerCase().includes(this.keresoSzo.toLowerCase()))
        });
      },
    },
  };
  </script>
  
  <style scope>
  /* Elrejti a scrollbar-t */
::-webkit-scrollbar {
    display: none;
}

/* Kártya konténerek stílusa */
.karakter-kartyak {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    gap: 15px;
    background-color: #1c1c2b; /* Sötétkék háttér */
}

/* Egyedi kártya stílus */
.karakter-kartya {
    background: #1a1a2e; /* Sötét, futurisztikus háttér */
    border: 1px solid #00bfff; /* Neon kék szegély */
    border-radius: 10px;
    box-shadow: 0px 6px 12px rgba(0, 191, 255, 0.2); /* Kékes fényhatás */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
    width: 20%;
}

/* Hover hatás kártyákon */
.karakter-kartya:hover {
    transform: translateY(-8px);
    box-shadow: 0px 10px 20px rgba(0, 191, 255, 0.5); /* Erősebb fényhatás hover esetén */
    cursor: pointer;
}

/* Képek stílusa */
.karakter-kep {
    width: 100%;
    height: 200px;
    object-fit: cover;
    filter: brightness(0.6);
    border-radius: 8px;
    transition: filter 0.3s;
}

/* Kép hover állapot */
.karakter-kartya:hover .karakter-kep {
    filter: brightness(1);
}

/* Kártyák címeinek stílusa */
.karakter-rang {
    margin-top: 10px;
    font-weight: 700;
    font-size: 20px;
    font-family: 'Orbitron', sans-serif; /* Futurisztikus betűtípus */
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #00bfff; /* Neon kék szöveg */
    text-align: center;
}

/* Kártyák utáni szöveg stílusa */
.karakter-kartyak+div {
    font-size: 16px;
    font-weight: bold;
    color: #00bfff; /* Kék szöveg */
    margin-top: 20px;
}

/* Hozzáadás sötétebb háttér és fényhatás */
span.mark {
    background-color: rgba(0, 191, 255, 0.3); /* Kék háttér */
    color: #fff;
    padding: 2px 4px;
}

/* Fényhatás hozzáadása a kártyához */
.karakter-kartya::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(0, 191, 255, 0.2) 0%, rgba(0, 0, 0, 0) 70%);
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

/* Fényhatás hover állapotban */
.karakter-kartya:hover::after {
    opacity: 1;
}

/* Animált neon hatás kártya alatt */
.karakter-kartya::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 50%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgba(0, 191, 255, 0.7); /* Kékes fényhatás */
    animation: glow 2s infinite alternate; /* Lassan pulzáló fényhatás */
}

@keyframes glow {
    0% {
        transform: scale(1);
        opacity: 0.5;
    }
    100% {
        transform: scale(1.2);
        opacity: 1;
    }
}

  </style>
  