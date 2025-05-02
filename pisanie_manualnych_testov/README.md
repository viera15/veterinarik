# Tvorba a spúšťanie testov
<br>
V tejto časti si pomocou <b>AI a vibe codingu</b> tvorím nástroj na:<br>
- písanie nových všeobecných testovacích scenárov<br>
- administráciu repozitára všeobecných testovacích scenárov<br>
- vytváranie testovacích plánov<br>
- spúšťanie jednotlivých testov v rámci testovacieho plánu aj s výsledkami<br>
- reporty
<br><br>
Učím sa na tom písať podrobné požiadavky. Rozmýšľať o tom, čo to má robiť, ako to má robiť, aké to má obmedzenia, aké parametre, ako to má vyzerať. Formulovať to dostatočne podrobne, aby to AI vedel naprogramovať. Nechala som na ňom v akom jazyku to urobí. Rozhodol sa pre JavaScript, ktorý neovládam, takže musím dostatočne dobre promptovať a dávať spätnú väzbu testera, aby dokázal pokračovať. Takže je to taký môj kolega programátor, ktorý musí všetko dostať ako po lopate. Vymyslela som to tak, že nie je potrebný backend. V podstate na zobrazenie používam html formuláre a údaje sú uložené do markdown súborov (testovacie scenáre) alebo json (zoznamy testovacích scenárov, testovacích plánov a pod.) a výsledky spustených testov sú uložené do csv súboru. Menu je tiež robené pomocou html súborov.
<br><br>
Ako pre testera je to pre mňa cenná skúsenosť, že krok po kroku tvoríme túto miniaplikáciu, že si uvedomujem ako to používa používateľ, čo vidí, ako to chce mať prístupné a neorozmýšľať, čo je za tým a zároveň ako tester musím o tom rozmýšľať. 