<template>
  <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-3 my-top-margin ">
    <KarakterKartya
      v-for="karakter in szurtKarakterek"
      :key="karakter.id"
      :id="karakter.id"
      @karaterModalReszletKezeles="reszletModalKezelo"
      class=""
    >
      <template v-slot:kep>
        <img :src="karakter.kep" :alt="karakter.jatekos" class="karakter-kep" />
      </template>
      <template v-slot:jatekos>
        <p v-html="keresJelol(karakter.jatekos)" class="karakter-jatekos"></p>
      </template>
    </KarakterKartya>
  </div>
  <div v-if="szurtKarakterek.length == 0">Nincs találat</div>

  <KartyaInfo :jatekos="keresJelol(kivalasztottKarakter.jatekos)">
    <img
      :src="kivalasztottKarakter.kep"
      :alt="kivalasztottKarakter.jatekos"
      class="float-start col-12 col-sm-6 col-lg-4 me-1 p-2 my-picture"
    />
    <div v-html="keresJelol(szovegFormatum)"></div>
  </KartyaInfo>
</template>
  
  <script>
class Karakter {
  constructor(id = 0, jatekos = null, kep = null, szoveg = null) {
    this.id = id;
    this.jatekos = jatekos;
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
          kep: "kirito.png",
          szoveg: [
            "Kiritót a Sword Art Online zárt bétájának, a NerveGear számára készült első Virtual Reality Massively Multiplayer Online Role-Playing Game ( VRMMORPG ) ezer bétatesztelőjének választották , majd később csatlakozott a játék hivatalos verziójához. Így egyike lett annak a 10 000 játékosnak, akik a Sword Art Online-ban rekedtek, ahol a játék nagy részében szólójátékos maradt , készségesen vállalva a Beater szerepét, hogy csökkentse a többi korábbi bétatesztelővel szembeni diszkriminációt, valamint aktívan. részt vesz a Boss csatákban a Clearerek egyikeként . Kirito ideiglenesen a Moonlit Black Cats tagja lett, miután segített nekik biztonságosan megszökni egy veszélyes börtönből , de visszatért szólójátékossá, amikor egy végzetes hiba a többi céhtag halálát okozta. A játék egy pontján Kirito „Fekete kardforgatóként” (黒の剣士, Kuro no Kenshi ? ) vált ismertté , mivel hajlamos fekete ruhát viselni. A játék végéhez közeledve Kirito csatlakozott a Knights of the Blood csapatához, mert elveszített egy fogadást vezetőjével, Heathcliffel . Kirito végül a végső boss legyőzésével vetett véget a játéknak, így tisztázva a játékot.",
          ],
        },
        {
          id: 2,
          jatekos: "Asuna",
          kep: "asuna.png",
          szoveg: [
            "Yuuki Asuna (結城 明日奈, Yūki Asuna ? ) , Asuna (アスナ, Asuna ? ) néven ismert a « Sword Art Online » (SAO), « ALfheim Online » (ALO), valamint a « Project Alicization »-ben, ahol volt. ideiglenesen a Stacia (ステイシア, Suteishia ? ) fiókot használta , a Sword Art Online sorozat [9] főhősnője , az Aincrad Arc deuteragonistája , valamint az Anya Rosario melléktörténetének főszereplője. A RECT Inc. korábbi vezérigazgatójának lánya . Asuna egyike volt annak a 10 000 játékosnak, akik a „Sword Art Online”-ban rekedtek, ahol a „ Knights of the Blood ” (KoB) céh alvezetője volt . [5] A rapírozási képességei miatt a „The Flash” becenevet kapta (閃光, Senkō ? ). A Sword Art Online törlése után Asuna átadta SAO avatarját az ALfheim Online-nak, és Undine- ként kezdett játszani a játékkal . Mivel hajlamos harcba szállni egy rapírral, annak ellenére, hogy gyógyító, kiérdemelte a „Berserk Healer” becenevet (バーサクヒーラー, Bāsaku Hīrā ? ) . [6] Asuna egy alternatív avatárt is készített, a Sylph « Erikát » (エリカ, Erika ? ) , mivel néha változtatni akart a megjelenésén.",
          ],
        },
        {
          id: 3,
          jatekos: "Klein",
          kep: "klein.png",
          szoveg: [
            "suboi Ryoutarou (壷井遼太郎, Tsuboi Ryōtarō ? ) [3] [4] , Klein (クライン, Kurain ? ) néven ismert a « Sword Art Online » (SAO), « ALfheim » és a Project is » (ALO) egy mellékszereplő az Aincrad Arc -ban és egy visszatérő karakter a Sword Art Online sorozaton keresztül . Egyike volt annak a 10 000 játékosnak, akik a Sword Art Online-ban rekedtek, ahol a « Fuurinkazan » céh vezetője volt , az egyik tisztább céh. [5] Miután a Sword Art Online-t törölték, Salamanderként kezdett játszani az ALfheim Online- on .",
          ],
        },
        {
          id: 4,
          jatekos: "Agil",
          kep: "agil.png",
          szoveg: [
            "Andrew Gilbert Mills (アンドリュー・ギルバート・ミルズ, Andoryū Girubāto Miruzu ? ) , Agil (エギル, Egiruルnéven ismert ) , az online támogatás, a LO-fória és az A.A. heim karakter az Aincradban Ív és egy visszatérő karakter a Sword Art Online sorozatban . Egyike volt annak a 10 000 játékosnak, akik a « Sword Art Online » (SAO) csapdájába estek , ahol veterán fejszeforgató és kereskedő volt, akinek boltja volt Algade -ben, az « Aincrad » 50. emeletén található városban . Miután visszatért a való világba a Sword Art Online incidens után, Andrew Gnomeként kezdett játszani az ALfheim Online-nal (ALO) . A való életben Andrew felesége segítségével irányítja a « Dicey Cafét ».",
          ],
        },
        {
          id: 5,
          jatekos: "Heatcliff",
          kep: "heatcliff.png",
          szoveg: [
            "(ヒースクリフ, Hīsukurifu ? ) ismert a Sword Art Online- ban , az Aincrad Arc fő antagonistája és az Arc . Ő volt a «Sword Art Online» (SAO) fejlesztési igazgatója és játékmestere (GM), valamint a « NerveGear », [3] a Cardinal System , [4] és a « The Seed » tervezője. [4] Avatárja, Heathcliff , Akihiko végül megalapította a Sword Art Online legerősebb céhét , a „ Knights of the Blood ”-t. Ő volt az első « Egyedi Skill » tulajdonosa , a « Szent Kard » [1] , és a játék legerősebb játékosának tartották. [5] A Liberator nevű együttes egykezes kardot és toronypajzsot forgatta . Az 50. emelet főnökét is képes volt egymaga harcba szállni tíz percre, ami kiérdemelte a «Man of Legend» (伝説の男, Densetsu no Otoko ? ) címet . [6] Azt is pletykálták, hogy Heathcliff ütési pontjai (HP) soha nem érték el a sárga zónát.",
          ],
        },
        {
          id: 6,
          jatekos: "Leafa",
          kep: "leafa.png",
          szoveg: [
            "Kirigaya Suguha (桐ヶ谷直葉, Kirigaya Suguha ? ) , Leafa (リーファ, Rīfa ? ) néven ismert az « ALfheim Online »-ban (ALO ) , valamint a « Project Alicization »-ben, ahol ideiglenesen használta a Terraria ,テモ? ) fiókja, a Fairy Dance Arc deuteragonistája , a Girls Ops spinoff egyik főszereplője , és a Sword Art Online sorozatban végig visszatérő karakter . Suguha Kirigaya Kazuto unokatestvére , de vele együtt nővére nőtt fel. Annak érdekében, hogy megvédje Kazutót a nagyapjuk haragjától, amikor az úgy döntött, hogy felhagy a kendóval, Suguha kiváló kendo-gyakorló lett helyette. Míg Kazuto a Sword Art Online csapdájában volt , érdeklődni kezdett az általa szeretett virtuális világ iránt, ezért Nagata Shinichivel folytatott konzultációt követően az ALfheim Online nevű Virtual Reality Massively Multiplayer Online Role-Playing Game-ben ( VRMMORPG ) kezdett játszani Sylph harcosként. (Recon), az osztályában a legtöbb játéktapasztalattal rendelkező személy. A játékban való repülés iránti rögeszméje miatt a „Speedaholic” (スピードホリック, Supīdohorikku ? ) becenevet kapta a Recontól.",
          ],
        },
        {
          id: 7,
          jatekos: "Yuuki",
          kep: "yuuki.png",
          szoveg: [
            "Konno Yuuki (紺野木綿季, Konno Yūki ? ) , Yuuki (ユウキ, Yūki ? ) néven ismert a « Serene Garden », [7] « Asuka Empire », [8] « Insect Site », [9] és az ALfheim Online című filmekben. » (ALO), a Mother's Rosario melléktörténet deuteragonistája , valamint a Nővérek imája melléktörténetének főszereplője volt a Sword Art Online sorozatban . Konno Aiko húga , egyike volt a három alapítójának és a második vezetője az « Alvó Lovagok » céhnek , egy olyan csoportnak, amely gyógyíthatatlan betegek csoportja a Serene Gardenben, a gyógyíthatatlan betegek virtuális hospice-jában találkozott, és különféle zenéket játszott. virtuális valóság játékok, mint a palliatív ellátás egyik formája.",
          ],
        },
        {
          id: 8,
          jatekos: "Sinon",
          kep: "sinon.png",
          szoveg: [
            "Asada Shino (朝田 詩乃, Asada Shino ? ) , Sinon (シノン, Shinon ? ) néven ismert a Gun Gale Online- ban (GGO), ALfheim Online-ban (ALO), valamint a Project Alicization -ban, ahol ideiglenesen használta a Solus (ソルス, Sorusu ? ) fiókja a Fantom Bullet Arc deuteragonistája , és az Alvilág háborújának egyik főszereplője az Alicization Arc -ben . Képzett virtuális valóság -játékos, aki barátja, Shinkawa Kyouji javaslata alapján kezdett el játszani a Gun Gale Online játékkal , hogy megpróbálja leküzdeni fegyverrel kapcsolatos traumáját. A Phantom Bullet Arc eseményei után Cait Sith íjászként kezdett el játszani az «ALfheim Online»-val, aki képes kétszáz méterrel távolabbi célpontokat eltalálni olyan íjjal, amely legfeljebb száz méteres távolságból képes nyílvesszőt lőni pontosan.",
          ],
        },
        {
          id: 9,
          jatekos: "Eugeo",
          kep: "eugeo.png",
          szoveg: [
            "Eugeo (ユージオ, Yūjio ? ) az Alicization Arc első felének deuteragonistája volt . Eugeo az Alvilág Emberi Birodalmának egyik távoli falujában született , ahol azt a szent feladatot kapta, hogy gyerekkori barátjával , Kiritóval együtt döntsön egy óriási fát . Miután egy hegyi kaland során egy szerencsétlenség következtében másik gyerekkori barátját, Alice Zuberget egy Integrity Knight letartóztatta a Tabuindex megszegése miatt, miközben Kiritóval kapcsolatos emlékeit megpecsételték a világ adminisztrátorai, Eugeo a következő hat évet azzal töltötte, hogy összpontosítson. a munkája során, hogy ne gondoljon elveszett barátjára, mígnem Kirito visszatérése az alvilágba oda vezetett, hogy Eugeo elhatározta, hogy útnak indul, hogy maga is Integrity Knight legyen, hogy megmentse Alice-t, valamint elsajátította a Kék Rózsa kard kezeléséhez szükséges készségeket . előkerült a hegyekből, ahol Alice áttörte a Tabuindexet.",
          ],
        },
        {
          id: 10,
          jatekos: "Alice",
          kep: "alice.png",
          szoveg: [
            "Alice Zuberg (アリス・ツーベルク, Arisu Tsūberuku ? ) az Alicization Arc egyik főszereplője és az Unital Ring Arc mellékszereplője . Rulid Village főnökének, Gasupht Zubergnek a lánya , valamint Eugeo és Kirito gyerekkori barátja . Mivel gyermekkorában véletlenül megszegte a Tabuindex egy záradékát, Alice-t a Deusolbert Synthesis Seven elfogta , és a központi katedrálisba vitte, ahol kénytelen volt az Alice Synthesis Thirty névre keresztelt Integrity Knight (アリス・シンセ) lenni . Shinseshisu Sāti ) emlékeivel lezárva. Miután Quinella legfelsőbb pap és Chudelkin főelder meghalt, és Kirito kómás állapotba került a csata után, Alice visszatért Rulid falujába Kiritóval, hogy elkerülje a fiú életének esetleges megtorlását, és újra egyesüljön nővére Selka Zuberg ott. A falu elleni goblintámadást követően, amely során Alice visszanyerte vágyát, hogy megvédje a világukat, Alice a Nagy Keleti Kapuhoz utazott, hogy csatlakozzon az Emberi Őrző Hadsereghez, hogy megvédje az Emberi Birodalmat a Sötét Területi Hadsereg inváziója ellen.",
          ],
        },
        {
          id: 11,
          jatekos: "Quinella",
          kep: "quinella.png",
          szoveg: [
            "Quinella (クィネラ, Kwinera?), más néven önjelölt Adminisztrátor (アドミニストレータ, Adominisutorēta?), az Alicizációs ív első felének fő antagonistája volt. Ő volt az Emberi Birodalom tényleges uralkodója az Alvilágban, mint az Axióma Egyház legmagasabb lelkésze.",
          ],
        },
        {
          id: 12,
          jatekos: "Alice",
          kep: "yui.png",
          szoveg: [
            "Yui (ユイ, Yui?), hivatalos nevén «Yui-MHCP001» (Mental Health Counseling Program 001), egy mellékszereplő a Sword Art Online sorozatban. Ő egy felülről lefelé irányuló mesterséges intelligencia (AI) program, amelyet eredetileg az Argus fejlesztett ki, hogy a játékosok mentális egészségével kapcsolatos problémákat kezelje a Sword Art Online-ban (SAO). Amikor azonban Kayaba Akihiko a Sword Art Online-t egy haláljátékká változtatta, Yui-nak a Cardinal System megtiltotta, hogy bármilyen módon beleavatkozzon a játékosokba, ami összeomlásához vezetett, mert kénytelen volt megfigyelni a játékosok mentális egészségét anélkül, hogy teljesíthette volna feladatait. Asuna és Kirito ebben az összetört állapotban találták az Aincrad úszó kastély 22. emeletének erdei körül, összetévesztették őt egy elveszett gyerekjátékosnak, és a pár örökbe fogadta. Miután felidézte valódi személyazonosságát az 1. emeleten lévő Hidden Dungeonban, Yui figyelmen kívül hagyta a Cardinal System parancsait, és gyakorolta a Játékmesteri jogait, hogy megmentse Asunát és Kiritót a Végzetes kaszától, aminek következtében a rendszer megjelölte törlésre. Mielőtt ez megtörténhetett volna, Yui programfájljait leválasztották a rendszerről, játékon belüli objektummá alakították, és Kirigaya Kazuto (Kirito) NerveGear-jében tárolták. A Sword Art Online törlése után Yui adatait Kirito fiókjával együtt importálták az ALfheim Online-ba, mivel a játék a Sword Art Online szervereiről származó adatokon alapult. Az ALfheim Online-ban Yui-t a játék rendszere Navigációs Pixie-ként kezeli, és hozzáférést biztosít számára a játék adatbázisához. A Fairy Dance Arc után Yui adatai a Kazuto's NerveGear-en kívülre kerültek, így hozzáférést biztosított számára a játékokon kívüli eszközökhöz.",
          ],
        },
      ],
    };
  },
  methods: {
    reszletModalKezelo(id) {
      this.kivalasztottKarakter = this.karakterek.filter(
        (k) => k.id == id.id
      )[0];
      console.log(this.kivalasztottKarakter);
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
      return this.karakterek.filter((k) => {
        return (
          k.jatekos.toLowerCase().includes(this.keresoSzo.toLowerCase()) ||
          k.szoveg.some((k) =>
            k.toLowerCase().includes(this.keresoSzo.toLowerCase())
          )
        );
      });
    },
  },
};
</script>
  
  <style scope>
.my-top-margin{
  margin-top: 73px;
}
/* Elrejti a scrollbar-t */
::-webkit-scrollbar {
  display: none;
}

/* Kártya konténerek stílusa */
.karakter-kartyak {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 15px;
  gap: 20px;
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
.karakter-jatekos {
  margin-top: 10px;
  font-weight: 700;
  font-size: 20px;
  font-family: "Orbitron", sans-serif; /* Futurisztikus betűtípus */
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #00bfff; /* Neon kék szöveg */
  text-align: center;
}

/* Kártyák utáni szöveg stílusa */
.karakter-kartyak + div {
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
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(0, 191, 255, 0.2) 0%,
    rgba(0, 0, 0, 0) 70%
  );
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
  content: "";
  position: absolute;
  bottom: -30px;
  left: 50%;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(0, 191, 255, 0.7); /* Kékes fényhatás */
}
</style>
  