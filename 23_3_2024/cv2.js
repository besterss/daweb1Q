const apartment = {
    type: 'rent',
    disposition: '3+1',
    area: {
      floorage: 100,
      balcony: 2,
      units: 'sqm',
    },
    city: 'Prague',
    district: 'Old Town',
    price: {
      rent: 28000,
      fees: {
        water: 1000,
        energy: 2500,
        services: 560,
      },
      currency: 'czk',
    },
    ownership: 'personal',
    condition: 'renovated',
    status: 'free',
    floor: 3,
};

document.body.innerHTML += apartment.disposition
document.body.innerHTML += apartment.price.rent
document.body.innerHTML += apartment.area.floorage + apartment.area.units + " Balkonu:" + apartment.area.balcony 

let mesto = apartment.city
let cast = apartment.district

apartment.status = "taken"
/*

Vytvořte webovou stránku s JavaScriptem, zkopírujte si tento kód do vašeho programu a vyřešte následující úkoly.

Pomocí tečkové notace vypište do stránky dispozici bytu.
Vypište do stránky čistý nájem bez poplatků.
Vypište do stránky celý objekt představující výměru bytu.
Do separátních proměnných uložte město a městskou část. Vypište je do stránky.
Změnte stav inzerátu z 'free' na 'taken'.

*/


/*V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. Uvažte, jaké vlastnosti může taková kniha mít. Rozhodně budeme chtít název, autora a počet stran. Přidejte do objektu alespoň tři další vlastnosti tak, aby obsahovaly čísla, řetězce i vnořený objekt.
Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.*/

const book1 = {
  name: 'Harry Potter a Kámen mudrců', 
  author: 'J.K. Rowling',
  pages: '420',
  sales: {
    earns: 100000,
    country: 'CZ'
  }
}

const book2 = {
  name: 'Harry Potter a Tajemná komnata', 
  author: 'J.K. Rowling',
  pages: '380',
  sales: {
    earns: 10000,
    country: 'SK'
  }
}

/*
Pokračujme v našem registračním systému na očkováni. Zatím se umíme uživatele zeptat na jméno a věk.

Vytvořte objekt person, do kterého vložte uživatelem zadané údaje. Objekt bude mít následující strukturu
{
  name: 'Květoslav Voňavý',
  age: 67,
}
Přidejte do objektu person údaj o tom, v jakém jazyce si uživatel přeje komunikovat. Zjistěte jej z objektu window.
Poté, co uživatel zadá všechny údaje, vypište do stránky objekt person se všemi jeho vlastnostmi v nějakém hezkém formátu a zkontrolujte, že obsahuje správné informace.
*/


const person = {
  name: prompt("Zadej jméno registrovaného pacienta"),
  age: Number(prompt("Zadej věk registrovaného pacienta")),
  location: window.navigator.language
}

console.log(person)