# Testovací scenár č. TC001

## Názov
Registrácia používateľa

## Cieľ
Overiť, že používateľ sa môže úspešne registrovať do aplikácie.

## Predpoklady
- Používateľ nemá vytvorený účet
- Platný email a heslo

## Testovacie kroky

| Číslo kroku | Názov kroku                          | Dáta              | Očakávaný výsledok                                              |
|-------------|---------------------------------------|-------------------|-----------------------------------------------------------------|
| 1           | Prejdi na stránku Prihlasovanie       | https://veterinarik.test.aleron.sk/ | Zobrazí sa stránka veterinarik.test.aleron.sk
| 2           | Klikni na položku "Registrovať sa"   |      | Otvorí sa stránka https://veterinarik.test.aleron.sk/#                                       |
| 3           | Do položky "Skutočné meno" vpíš meno  |       | Meno má správny počet znakov XX a je to len reťazec                   |
| 4           | Do položky "Email" napíš platný email a v správnom formáte           |    | Email je platný, má správny formát |
| 5          | Do položky "Heslo" napíš správne heslo: min. 8 znakov, veľké a malé písmená, špeciálny znak           |  Moje?Heslo/745  | Heslo je správne, má správny formát a zobrazuje sa hashované |
| 6          | Do položky "Potvrď heslo" zopakuj správne heslo           |  | Heslo je správne, má správny formát a zhoduje sa s položkou "Heslo" a je hashované |
| 7          | Zaškrtni položku "Zobraz heslo"           |   | Položka "Heslo" a "Povrd heslo" zobrazuje heslo vo formáte čitateľnom pre ľudí |
| 8          | Klikni na tlačidlo "Registrovať sa" |    | Používateľ je nie zaregistrovaný, zobrazí sa správa "Pouzivatel zaregistrovany ", stránka sa zmení na "https://veterinarik.test.aleron.sk/#" |

## Očakávaný výsledok
Používateľ nie je registrovaný a zobrazí sa správa.

## Poznámky
- Tento scenár testuje negatívny prípad.
- Pozitívny prípad je v scenári TC001
- Negatívne prípady budú v scenároch TC002, TC003, TC004.

