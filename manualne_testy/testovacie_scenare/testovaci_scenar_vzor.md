# Testovací scenár č. TC001

## Názov
Prihlásenie používateľa

## Cieľ
Overiť, že používateľ sa môže úspešne prihlásiť s platnými prihlasovacími údajmi.

## Predpoklady
- Používateľ má vytvorený účet
- Známy e-mail a heslo

## Testovacie kroky

| Číslo kroku | Názov kroku                          | Dáta              | Očakávaný výsledok                                              |
|-------------|---------------------------------------|-------------------|-----------------------------------------------------------------|
| 1           | Prejdi na stránku Prihlasovanie       | https://www.veterinarik.sk | Zobrazí sa stránka www.veterinarik.sk                          |
| 2           | Do položky Email vpíš správny email   | test@test.sk      | Email má správny formát                                        |
| 3           | Do položky Heslo vpíš správne heslo   | heslo_12HP        | Heslo má správny počet a typ znakov                            |
| 4           | Stlač tlačidlo Prihlásiť sa           | *(nevyplnené)*    | Používateľ bude presmerovaný na stránku www.veterinarik.sk/home |

## Očakávaný výsledok
Používateľ je úspešne prihlásený a presmerovaný na hlavnú stránku aplikácie.

## Poznámky
- Tento scenár testuje len pozitívny prípad.
- Negatívne prípady budú v scenároch TC002 a TC003.

