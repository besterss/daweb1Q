/*
Založte si novou prázdnou stránku s JavaScriptovým programem.
V programu spočítejte svůj měsíční příjem, víte-li, 
že pracujete 7 hodin denně se mzdou 320 Kč na hodinu. 
Řekněme, že měsíc má 21 pracovních dní.
Měsíční příjem vypište do stránky.
Pokud pracujete na živnostenský list, můžete si odečíst 60 % příjmů jako paušál a ze zbytku zaplatíte 15% daň. Spočítejte, jak velkou daň zaplatíte ze své výplaty. Pomocí funkce Math.floor zaokrouhlete výsledek dolů na celé koruny.
Daň také vypište do stránky.
*/

document.body.innerHTML += 7 * 21 * 320
document.body.innerHTML += "<br />"
document.body.innerHTML += Math.floor(((7 * 21 * 320) * 0.4) * 0.15 )

document.body.innerHTML += (Math.floor(223/60) * 60) - 223

/*
Sestavte e-mailovou adresu tak, že sečtete dohromady vaše křestní jméno, znak tečka, vaše příjmení a koncovku @mujmail.com.
Celou e-mailovou adresu vypište do stránky.
*/

document.body.innerHTML += 'filip.prochazka@mujemail.cz'

document.body.innerHTML += "<br /> <br />"

document.body.innerHTML += "<h1>Cvičení: Programy, proměnné </h1>"
// Cvičení: Programy, proměnné

/* 
Založte si JavaScriptový program a pomocí document.body.innerHTML a 
funkce Math.random zobrazte na stránce náhodné číslo. 
Zkuste stránku několikrát po sobě obnovit a ověřte si, že pokaždé obdržíte jiné číslo.
*/

const nahodneCislo =  Math.random()

document.body.innerHTML += "<h2>" + nahodneCislo + "</h2>"


/*
Založte si novou prázdnou stránku s JavaScriptovým programem.

Dejme tomu, že si jako programátoři vyděláváte 20 euro na hodinu. 
Uložte tuto hodnotu do proměnné wageInEur.

Spočítejte, kolik je vaše hodinová mzda v českých korunách, 
jestliže kurz eura je 24.55 Kč. Výsledek zaokrouhlete na celé koruny a 
uložte do proměnné wageInCzk.

Vypište obsah proměnné wageInCzk do webové stránky tak, 
aby na stránce byl nadpis h1 s obsahem:
*/ 

const wageInEur = 20;
const rateEurCzk = 24.55;
const wageInCzk = Math.round(wageInEur*rateEurCzk)

document.body.innerHTML += "<h1> Mzda v korunách: " + wageInCzk + "Kč</h1>"

/*
Představte si, že jste pořadatelé ultramaratonského závodu. 
Závod začíná ve tři hodiny odpoledne, což ve 24hodinovém formátu zapíšeme jako 15.
 Nejlepší běžec zvládne vaši brutální trasu za 10 hodin. 
 Doběhne tedy v jednu hodinu ráno, v našem formátu zapsáno jako 1.

Založte si JavaScriptový program a uložte čas startu závodu do proměnné start.
Do proměnné delka uložte délku závodu pro nějakého běžce. 
Klidně může být pomalejší než náš šampion.
Do proměnné konec spočítejte, v kolik hodin závod pro našeho běžce skončí a 
vypište její obsah do stránky.
Vyzkoušejte různé délky a ověřte, že váš postup funguje.

*/
console.log("123")



