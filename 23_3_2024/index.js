/*
V předchozí lekci jsem vytvářeli stránku pro registraci na očkování. 
Chtěli jsme po uživateli jméno a věk. Nyní budeme chtít, 
aby uživatel zadal také heslo. To bychom v pozdější verzi aplikaci mohli použít 
například k přihlášení do systému.

Vytvořte novou stránku, nebo pokračujte ve stránce z předchozí lekce pro registraci 
na očkování.

Nejdříve nechte uživatele zadat všechny hodnoty, tedy jméno, věk i heslo. 
Uložte si je do dobře pojmenovaných proměnných.
Napište první podmínku, ve které zkontrolujte, že věk uživatele je větší nebo roven 65.
Pokud ano, vypište do stránky „věk v pořádku“. 
Pokud uživateli není alespoň 65 let, vypište „nízký věk“.
Napište druhou podmínku, která zkontroluje, zda je zadané heslo delší než osm znaků.
Pokud není, vypište „slabé heslo“. Heslo se bude kontrolovat pouze v případě, 
kdy uživatel splnil první podmínku (věk alespoň 65 let).
*/

const userName = prompt("Zadej své jméno")
const userAge = Number(prompt("Zadej svůj věk"))
const userPassword = prompt("Zadej svoje heslo")

if(userAge >= 65) {
    document.body.innerHTML += "<strong> VĚK JE V POŘÁDKU </strong>"
    if(userPassword.length >= 8) {
        document.body.innerHTML += "<strong style=\"color: green\"> REGISTRACE PROBĚHLA V POŘÁDKU </strong>"
    }else{
        document.body.innerHTML += "<strong style=\"color: red;\"> REGISTRACE NENÍ V POŘÁDKU Z DŮVODU SLABÉHO HESLA</strong>"
    }
}else{
    document.body.innerHTML += "<strong style=\"color: red;\"> VĚK NENÍ V POŘÁDKU </strong>"
}

document.body.innerHTML += "<hr />"
document.body.innerHTML += "Vstupenky divadlo"

/*
Pokusme se o základ jednoduchého rezervačního sestému pro vstupenky do divadla.

Založte si webovou stránku s JavaScriptem.
Nechte uživatele zadat jeho věk.
Vytvořte si proměnnou plnaCena, udávající základní cenu vstupenky a uložte do ní hodnotu 12.
Vytvořte podmínku, která do proměnné cena uloží cenu spočítanou 
podle věku uživatele dle následujících pravidel:
0 euro pro návštěvníky mladší 6 let,
65 % ze základní ceny pro návštěvníky 6 až 26 let (žák, student),
100 % ze základní ceny pro návštěvníky 27 až 64 let (dospělý),
50 % ze základní ceny pro ostatní (senior).

Nezapomeňte na zaokrouhlování, ať nám cena vyjde v celých eurech.
Nakonec spočtenou cenu vypište s nějakou hezkou zprávou na výstup.
*/

const clientAge = Number(prompt("Zadej svůj věk"))

const plnaCena = 12

let celkovaCena

if(clientAge > 64) {
    celkovaCena = plnaCena * 0.5
}else if(clientAge > 27) {
    celkovaCena = plnaCena
}else if(clientAge > 6) {
    celkovaCena = plnaCena * 0.65
}else{
    celkovaCena = 0
}

document.body.innerHTML += `
<div style="max-width: 400px; padding: 30px; border: 1 px solid black; background-color: #008744; color: white; font-style: bold">
    Vaše konečná cena vstupenky v košíku je: ${Math.floor(celkovaCena)}€ 
</div>
`