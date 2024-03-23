/*
Úkol č.1: 

Představte si, že vyrábíte registrační systém na očkování proti COVID-19. 
U každého registrovaného chceme evidovat jméno a věk.

Vytvořte webovou stránku, která se uživatele zeptá nejdříve na jméno a poté na věk. 
Tyto hodnoty si uložte do smysluplně pojmenovaných proměnných. Nezpomeňte věk převést na číslo.
Poté, co uživatel zadá všechny údaje, vypište do stránky odstavec s obsahem ve tvaru
*/

const vstupJmeno = prompt("Zadej své jméno:")
const vstupVek = Number(prompt("Zadej svůj věk"))

document.body.innerHTML += "<p>" + vstupJmeno + ", věk: " + vstupVek + "</p>"


/* 
Úkol č.2: 

Vytvořte webovou stránku, která uživatele požádá o jeho hodinovou sazbu v korunách a
 spočítá jeho hrubou mzdu za předpokladu, 
že pracuje 8 hodin denně 21 dní v měsíci. Do stránky vypište výsledek zabalený do nějaké přívětivé formulace. 
Dbejte na to, abyste korektně převedli uživatelem zadanou hodnotu na číslo.
Nechte uživatele zadat nejen hodinovou sazbu, ale také počet hodin a dní v měsíci. Opět dejte pozor na správnou konverzi.

*/

const vstupSazba = prompt("Zadej hodinovou sazbu")
const vstupHodiny = prompt("Zadej počet hodin")
const vstupDny = prompt("Zadej počet dní kolik pracuješ")

let vypocetMzda = Number(vstupSazba) * Number(vstupHodiny) * Number(vstupDny)

document.body.innerHTML += "<strong> Vaše hrubá mzda měsíčně je: " + vypocetMzda + "</strong>"