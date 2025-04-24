# Real World Testing with Cypress - Course App

Toto je ukážková aplikácia pre kurz  
**[Testing your first application](https://learn.cypress.io/testing-your-first-application)**  
na platforme [learn.cypress.io](https://learn.cypress.io/).

- Hlavná vetva tohto repozitára je `start` a slúži ako východiskový bod pre kurz.
- Hotové testy sa nachádzajú vo vetve [`final`](https://github.com/cypress-io/cypress-realworld-testing-course-app/tree/final).

---

## 💻 Príkazy

Nižšie sú uvedené najčastejšie používané príkazy na spúšťanie Cypress testov:

| Príkaz                                                                 | Popis                                                                 |
|------------------------------------------------------------------------|-----------------------------------------------------------------------|
| `npx cypress open`                                                     | Otvorí Cypress GUI pre výber a spustenie testov                       |
| `npx cypress run`                                                      | Spustí všetky testy v termináli (bez GUI)                             |
| `npx cypress run --spec "cypress/e2e/photo.cy.ts" --headed`           | Spustí konkrétny test so zobrazením GUI aj výstupom v konzole         |
| `npx cypress run --spec "cypress/e2e/photo.cy.ts"`                    | Spustí konkrétny test len v termináli (bez GUI)                       |

---

Ak máte otázky alebo sa chcete dozvedieť viac, navštívte oficiálnu dokumentáciu Cypressu:  
👉 [https://docs.cypress.io](https://docs.cypress.io)
