# veterinarik
Testovanie aplikácie Veterinárik

Na základe kurzu [**Selenium Python - Beginners to Advanced (2023) - Biggest Course** ](https://www.youtube.com/playlist?list=PLsjUcU8CQXGEe8D7ZVJnANklJEHeqjBul) som si začala vytvárať vlastný projekt, kde testujem aplikáciu pre veterinárne ambulancie Veterinárik.
Projekt je písaný v pythone 3.1x s použitím frameworku Selénium 4.x.
Testy sú v adresári `tests`.
V adresári `pages` sa nachádzajú metódy k jednotlivým testom.
V adresári `configurations` je základný konfiguračný súbor.
V adresári `utilities` sú pomocné nástroje k testom, napr. na čítanie konfigurácie, čítanie excel súborov a pod..
Súbor `BasePage.py` obsahuje všeobecné metódy pre testovanie.
Súbor `BaseTest.py` obsahuje pomocné metódy k testom.
Súbor `conftest.py` určuje konfiguráciu adresára-balíka testov a je kroky, ktoré sa spustia pred a po teste/sade testov a pod.. 