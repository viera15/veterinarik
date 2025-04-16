# veterinarik
Testovanie aplikácie Veterinárik<br>
<br>
Na základe kurzu [**Selenium Python - Beginners to Advanced (2023) - Biggest Course** ](https://www.youtube.com/playlist?list=PLsjUcU8CQXGEe8D7ZVJnANklJEHeqjBul) som si začala vytvárať vlastný projekt, kde testujem aplikáciu pre veterinárne ambulancie Veterinárik. <br>
Projekt je písaný v pythone 3.1x s použitím frameworku Selénium 4.x.<br>
Testy sú v adresári `tests`. <br>
V adresári `pages` sa nachádzajú metódy k jednotlivým testom.<br>
V adresári `configurations` je základný konfiguračný súbor.<br>
V adresári `utilities` sú pomocné nástroje k testom, napr. na čítanie konfigurácie, čítanie excel súborov a pod..<br>
Súbor `BasePage.py` obsahuje všeobecné metódy pre testovanie.<br>
Súbor `BaseTest.py` obsahuje pomocné metódy k testom.<br>
Súbor `conftest.py` určuje konfiguráciu adresára-balíka testov a je kroky, ktoré sa spustia pred a po teste/sade testov a pod.. <br>