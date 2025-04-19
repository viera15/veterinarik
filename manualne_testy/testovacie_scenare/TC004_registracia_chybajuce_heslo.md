# Testovací scenár č. TC004

## Názov
Registrácia používateľa - chýbajúce heslo

## Cieľ
Overiť, že používateľ sa nemôže registrovať bez hesla do aplikácie.

## Predpoklady
- Používateľ nemá vytvorený účet
- Platný email

## Testovacie kroky

| Číslo kroku | Názov kroku                          | Dáta              | Očakávaný výsledok                                              |
|-------------|---------------------------------------|-------------------|-----------------------------------------------------------------|
| 1           | Prejdi na stránku Prihlasovanie       | https://veterinarik.test.aleron.sk/ | Zobrazí sa stránka veterinarik.test.aleron.sk
| 2           | Klikni na položku "Registrovať sa"   |      | Otvorí sa stránka https://veterinarik.test.aleron.sk/#                                       |
| 3           | Do položky "Skutočné meno" vpíš meno  |       | Meno má správny počet znakov XX a je to len reťazec                   |
| 4           | Do položky "Email" vyplň správny email  |    | Email je správne vyplnený |
| 5          | Do položky "Heslo" nevyplň heslo           |    | Heslo je prázdne |
| 6          | Do položky "Potvrď heslo" nevyplň heslo           |  | Heslo je prázdne |
| 7          | Zaškrtni položku "Zobraz heslo"           |   | Položka "Heslo" a "Povrd heslo" zobrazuje heslo vo formáte čitateľnom pre ľudí |
| 8          | Klikni na tlačidlo "Registrovať sa" |    | Používateľ je nie zaregistrovaný, zobrazí sa správa "Slabe heslo([a-z,A-Z,0-9, specials], 8-50 znakov)" |

## Očakávaný výsledok
Používateľ nie je registrovaný a zobrazí sa správa.

## Poznámky
- Tento scenár testuje negatívny prípad.
- Pozitívny prípad je v scenári TC001
- Negatívne prípady budú v scenároch TC002, TC003, TC005.

