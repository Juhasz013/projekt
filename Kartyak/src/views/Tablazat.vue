<template>
    <div class="container-fluid">
        <div class="row justify-content-center"> 
            <div class="col-md-8">
                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Név</th>
                            <th scope="col">VRMMORPG</th>
                            <th scope="col">Becenév</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="character in filteredKarakter" :key="character.id">
                            <td>{{ character.jatekos }}</td>
                            <td>{{ character.vrmmorpg }}</td>
                            <td>{{ character.nickname }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    inject: ['keresoSzo'],
    data() {
        return {
            karakterek: [
                { id: 1, jatekos: "Kirito", vrmmorpg: "Aincrad | Alfheim |GGO | Alicization", nickname: "Black Swordman" },
                { id: 2,jatekos: "Asuna", vrmmorpg: "Aincrad | Alfheim |GGO | Alicization", nickname: "Flash" },
                { id: 3,jatekos: "Klein", vrmmorpg: "Aincrad | GGO | Alicization", nickname: "BallDeep69" },
                { id: 4, jatekos: "Agil", vrmmorpg: "Aincrad | Alfheim | Alicization", nickname: "Blacksmith" },
                { id: 5, jatekos: "Heatcliff", vrmmorpg: "Aincrad", nickname: "Leader" },
                { id: 6, jatekos: "Leafa", vrmmorpg: "Alfheim | Alicization", nickname: "Speedaholic" },
                { id: 7, jatekos: "Yuuki", vrmmorpg: "Alfheim | Alicization", nickname: "Zekken" },
                { id: 8, jatekos: "Sinon", vrmmorpg: "GGO | Alfheim | Alicization", nickname: "The Sniper" },
                { id: 9, jatekos: "Eugo", vrmmorpg: "Alicization", nickname: "Blue Rose" },
                { id: 10, jatekos: "Alice", vrmmorpg: "Alicization", nickname: "Fluctlight" },
                
            ]
        };
    },
    computed: {
        filteredKarakter() {
            const keresendo = this.keresoSzo ? this.keresoSzo.toLowerCase() : '';
            return this.karakterek.filter(karakter => {
                return (
                    karakter.jatekos.toLowerCase().includes(keresendo) ||
                    karakter.vrmmorpg.toLowerCase().includes(keresendo) ||
                    karakter.nickname.toLowerCase().includes(keresendo)
                );
            });
        }
    }
};
</script>

<style scoped>
/* Sötét háttér és kontrasztos színek */
.container-fluid {
    margin-top: 20px;
    padding: 20px;
    background-color: #1c1c2b; /* Mély sötétkék háttér */
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6); /* Mélység érzet */
}

/* Flexbox a táblázat középre igazításához */
.row {
    display: flex;
    justify-content: center;
}

/* Táblázat általános stílusa */
.table {
    margin-top: 20px;
    border: 2px solid #00bfff; /* Neon kék szegély */
    background-color: #1a1a2e; /* Sötét háttér */
    box-shadow: 0 0 15px rgba(0, 191, 255, 0.5); /* Neon hatású külső fény */
    border-radius: 8px;
}

/* Fejlécek stílusa */
.table thead {
    background-color: #121233; /* Sötétebb háttér a futurisztikus érzetért */
    color: #00bfff; /* Neon kék betűszín */
    font-family: 'Orbitron', sans-serif; /* Futurisztikus betűtípus */
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 1.2rem; /* Fejléc betűméret növelése */
}

/* Táblázat sorainak stílusa */
.table tbody tr {
    background-color: #2c2c4f; /* Sötétkék árnyalatú sorok */
    color: #d1d1d1; /* Halvány szürke betűszín */
    font-family: 'Lora', serif;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* Hover hatás a táblázat soraiban */
.table tbody tr:hover {
    background-color: #3b3b6b; /* Világosabb kék árnyalat hover esetén */
    color: #00bfff; /* Neon kék szöveg hover esetén */
}

/* Cellák közti szegély */
.table td,
.table th {
    border-color: #00bfff; /* Neon kék szegélyek a cellák között */
    padding: 15px;
}

/* Általános stílus az oldalhoz */
body {
    background-color: #0d0d19; /* Mély sötétkék háttér */
    color: #d1d1d1; /* Halvány szürke szöveg */
    font-family: 'Orbitron', sans-serif; /* Futurisztikus betűtípus */
    letter-spacing: 0.5px;
}

/* Hover effekt a táblázat linkjein */
.table tbody tr:hover td {
    color: #00bfff; /* Neon kék szöveg hover esetén */
}

/* A sorok celláinak stílusa */
.table tbody td {
    font-size: 1rem;
}

/* Sötétebb háttér a fejlécnek */
.table thead {
    background-color: #121233;
}

</style>
