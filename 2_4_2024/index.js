/*

Pokračujte na stránce z přechozího příkladu.

Do souboru index.js přidejte funkci fillSubject s jedním parametrem subject. 
Tato funkce ze stránky vybere DOM element představující předmět e-mailu a nastaví jeho obsah na řetězec, 
který přišel v parametru.
Zavolejte funkci na konci souboru index.js a
 vykoušejte si nastavit předmět e-mailu na nějaký smysluplný text.
Napište funkci fillBody s jedním parametrem body,
 která ze stránky vybere DOM element představující tělo e-mailu a nastaví jeho obsah dle hodnoty parametru.
Zavolejte funkci na konci souboru index.js a ověřte, 
že v zobrazené stránce správně změní tělo e-mailu.
Z předchozího cvičení nám zůstala funkce goodbye. Do funkce fillBody přidejte další parametr s názvem name. 
Tento parametr bude představovat jméno odesílatele.
 Funkce vyplní tělo e-mailu a do elementu email__closing vloží pozdrav, který vyrobí pomocí volání funkce goodbye.

*/


const name = 'Franta';

const greet = (name) => {
  document.body.innerHTML += `<p>${name}</p>`;
};

greet('Jožin');

const age = 25;
let price = 0
if (age > 21) {
    price = 100;
} else if (age > 15) {
    price = 50;
} else {
    price = 0;
}

document.body.innerHTML += `<p>${price}</p>`;