// =====================
//   Script – Nový testovací scenár
//   plná funkčná verzia (2025‑05‑01)
// =====================

/* --------------------------------------------------
   Konštanty a ID prvkov, na ktorých sa kód spolieha
---------------------------------------------------*/
const BTN_SAVE_ID   = "ulozit";                  // id tlačidla „Uložiť“
const BTN_ADD_ID    = "pridatKrok";              // id tlačidla „Pridať krok“
const BTN_CANCEL_ID = "zrusit";                  // id tlačidla „Zrušiť“
const CONTAINER_ID  = "testovacie-kroky-container"; // kontajner, kam vkladáme dynamické kroky
const MODAL_ID      = "modal";                   // modal po uložení
const LIST_FILE     = "zoznam_scenarov.json";    // súbor so zoznamom scenárov

/* --------------------------------------------------
   Po načítaní DOMu nastavíme event‑listenery
---------------------------------------------------*/
window.addEventListener("DOMContentLoaded", () => {
    // --- ak v HTML kontajner neexistuje, vytvor ho ---
    if (!document.getElementById(CONTAINER_ID)) {
        const div = document.createElement("div");
        div.id = CONTAINER_ID;
        // vložíme hneď za nadpis „Testovacie kroky:“
        const hLabel = document.querySelector("label[for='testovacie-kroky']") || document.querySelector("h2,h3,h4");
        (hLabel?.parentNode || document.body).insertBefore(div, hLabel?.nextSibling || null);
    }

    document.getElementById(BTN_ADD_ID)?.addEventListener("click", () => pridajKrok());
    document.getElementById(BTN_SAVE_ID)?.addEventListener("click", ulozitTest);
    document.getElementById(BTN_CANCEL_ID)?.addEventListener("click", () => location.href = "zoznam_test_scenarov.html");

    // tlačidlá v modal okne (ak modal existuje)
    document.getElementById("novyTest")?.addEventListener("click", novyTest);
    document.getElementById("spravaTestov")?.addEventListener("click", () => location.href = "zoznam_test_scenarov.html");

    // jeden prázdny krok nech je vždy k dispozícii
    pridajKrok();
});

/* --------------------------------------------------
   Vkladanie & odstraňovanie polí pre jeden krok
---------------------------------------------------*/
function pridajKrok(values = {cislo: "", nazov: "", data: "", vysledok: ""}) {
    const container = document.getElementById(CONTAINER_ID);

    const wrapper = document.createElement("div");
    wrapper.className = "krok-formular";

    // helper – vstupné pole
    const input = (placeholder, className, value = "") => {
        const el = document.createElement("input");
        el.type = "text";
        el.placeholder = placeholder;
        el.className = className;
        el.value = value;
        return el;
    };

    wrapper.appendChild(input("#",            "cislo",    values.cislo));
    wrapper.appendChild(input("Názov kroku", "nazov",    values.nazov));
    wrapper.appendChild(input("Dáta",         "data",     values.data));
    wrapper.appendChild(input("Oč. výsledok", "vysledok", values.vysledok));

    // tlačidlo X na zmazanie kroku
    const btnDel = document.createElement("button");
    btnDel.type = "button";
    btnDel.textContent = "✖";
    btnDel.title = "Odstrániť krok";
    btnDel.className = "odstranitKrok";
    btnDel.addEventListener("click", () => wrapper.remove());

    wrapper.appendChild(btnDel);
    container.appendChild(wrapper);
}

/* --------------------------------------------------
   Uloženie scenára – hlavná logika
---------------------------------------------------*/
function ulozitTest() {
    // 1️⃣  Odčítame hodnoty z formulára
    const data = {
        cisloTestu:        document.getElementById("cisloTestu").value.trim(),
        nazov:             document.getElementById("nazov").value.trim(),
        ciel:              document.getElementById("ciel").value.trim(),
        predpoklady:       document.getElementById("predpoklady").value.trim(),
        kroky:             [],
        ocakavanyVysledok: document.getElementById("ocakavanyVysledok").value.trim(),
        zavisleTesty:      document.getElementById("zavisleTesty")?.value.trim() || document.getElementById("zavislost")?.value.trim() || "",
        priorita:          document.getElementById("priorita").value,
        poznamky:          document.getElementById("poznamky").value.trim()
    };

    // minimálna validácia
    if (!data.cisloTestu || !data.nazov) {
        alert("Vyplňte minimálne pole 'Číslo testu' a 'Názov'.");
        return;
    }

    // zozbierame jednotlivé kroky
    document.querySelectorAll(`#${CONTAINER_ID} .krok-formular`).forEach(div => {
        const inputs = div.querySelectorAll("input");
        data.kroky.push({
            cislo:    inputs[0].value.trim(),
            nazov:    inputs[1].value.trim(),
            data:     inputs[2].value.trim(),
            vysledok: inputs[3].value.trim()
        });
    });

    // 2️⃣  Vygenerujeme a stiahneme JSON + MD súbory
    saveFile(JSON.stringify(data, null, 2), `${data.cisloTestu}.json`, "application/json");
    saveFile(genMarkdown(data),              `${data.cisloTestu}.md`,   "text/markdown");

    // 3️⃣  Zapíšeme/aktualizujeme záznam v zozname scenárov
    updateScenarioList(data);

    // 4️⃣  Zobrazíme modal s možnosťou pokračovať
    const modal = document.getElementById(MODAL_ID);
    if (modal) modal.style.display = "block";
}

/* --------------------------------------------------
   Pomocné funkcie – markdown + ukladanie
---------------------------------------------------*/
function genMarkdown(d) {
    let md = `# Číslo testu: ${d.cisloTestu}\n\n`;
    md    += `## Názov:\n${d.nazov}\n\n`;
    md    += `## Cieľ:\n${d.ciel}\n\n`;
    md    += `## Predpoklady:\n${d.predpoklady}\n\n`;
    md    += `## Testovacie kroky:\n\n| Číslo kroku | Názov kroku | Dáta | Očakávaný výsledok |\n|-------------|-------------|------|--------------------|\n`;
    d.kroky.forEach(k => {
        md += `| ${k.cislo} | ${k.nazov} | ${k.data} | ${k.vysledok} |\n`;
    });
    md    += `\n## Očakávaný výsledok (scenára):\n${d.ocakavanyVysledok}\n\n`;
    md    += `## Závislé testy:\n${d.zavisleTesty}\n\n`;
    md    += `## Priorita:\n${d.priorita}\n\n`;
    md    += `## Poznámky:\n${d.poznamky}\n`;
    return md;
}

function saveFile(content, filename, mime) {
    const blob = new Blob([content], {type: mime});
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

/* --------------------------------------------------
   Pridanie/aktualizácia v zozname scenárov
---------------------------------------------------*/
function updateScenarioList(d) {
    fetch(LIST_FILE)
        .then(r => r.ok ? r.json() : [])
        .catch(() => [])
        .then(list => {
            const index = list.findIndex(x => x.cisloTestu === d.cisloTestu);
            const rec   = {
                cisloTestu: d.cisloTestu,
                nazov:      d.nazov,
                subor:      `${d.cisloTestu}.json`,
                priorita:   d.priorita,
                zavislost:  d.zavisleTesty
            };
            if (index !== -1) list[index] = rec; else list.push(rec);
            list.sort((a,b) => a.cisloTestu.localeCompare(b.cisloTestu));
            saveFile(JSON.stringify(list, null, 2), LIST_FILE, "application/json");
        });
}

/* --------------------------------------------------
   Modal – „Nový test" (vymaže formulár) & ďalšie akcie
---------------------------------------------------*/
function novyTest() {
    document.getElementById(MODAL_ID).style.display = "none";
    document.getElementById("formularTestu").reset();
    const cont = document.getElementById(CONTAINER_ID);
    cont.innerHTML = "";
    pridajKrok();
}
