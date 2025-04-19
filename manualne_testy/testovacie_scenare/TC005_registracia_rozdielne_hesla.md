# Testovací scenár č. TC005

## Názov
Registrácia používateľa - rozdielne Heslo a Potvrd heslo

## Cieľ
Overiť, že používateľ sa nemôže registrovať pri rôznych heslách v položke Heslo a Potvrd heslo do aplikácie.

## Predpoklady
- Používateľ nemá vytvorený účet
- Dve rozdielne heslá

## Testovacie kroky

| Číslo kroku | Názov kroku                          | Dáta              | Očakávaný výsledok                                              |
|-------------|---------------------------------------|-------------------|-----------------------------------------------------------------|
| 1           | Prejdi na stránku Prihlasovanie       | https://veterinarik.test.aleron.sk/ | Zobrazí sa stránka veterinarik.test.aleron.sk
| 2           | Klikni na položku "Registrovať sa"   |      | Otvorí sa stránka https://veterinarik.test.aleron.sk/#                                       |
| 3           | Do položky "Skutočné meno" vpíš meno  |       | Meno má správny počet znakov XX a je to len reťazec                   |
| 4           | Do položky "Email" vyplň správny email  |    | Email je vyplnený |
| 5          | Do položky "Heslo" napíš správne heslo: min. 8 znakov, veľké a malé písmená, špeciálny znak           |    | Heslo je správne, má správny formát a zobrazuje sa hashované |
| 6          | Do položky "Potvrď heslo" zopakuj nesprávne heslo           |  | Heslo je nesprávne, má správny formát a nezhoduje sa s položkou "Heslo" a je hashované |
| 7          | Zaškrtni položku "Zobraz heslo"           |   | Položka "Heslo" a "Povrd heslo" zobrazuje heslo vo formáte čitateľnom pre ľudí |
| 8          | Klikni na tlačidlo "Registrovať sa" |    | Používateľ je nie zaregistrovaný, zobrazí sa správa "Heslá sa nezhodujú" |

## Očakávaný výsledok
Používateľ nie je registrovaný a zobrazí sa správa.

## Poznámky
- Tento scenár testuje negatívny prípad.
- Pozitívny prípad je v scenári TC001
- Negatívne prípady budú v scenároch TC002, TC003, TC004.

