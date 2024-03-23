/*
V JavaScriptovém programu si založte proměnnou title a uložte 
do ní název svého oblíbeného filmu (např. Pán prstenů). 
Proveďte následující úkoly.

Vypište do stránky počet znaků názvu.
Vypište název filmu převedený na velká písmena.
Vypište z názvu prvních pět písmen.
Vypište z názvu posledních pět písmen
*/

const title = "Forest Gump"

document.body.innerHTML += title.length
document.body.innerHTML += "<br />"
document.body.innerHTML += title.toUpperCase()
document.body.innerHTML += "<br />"
document.body.innerHTML += title.slice(0,5)
document.body.innerHTML += "<br />"
document.body.innerHTML += title.slice(-5, title.length)
document.body.innerHTML += "<br />"

/*
Vytvořte stránku, která bude pracovat s e-mailovými adresami ve formátu

jmeno.prijmeni@domena
Tedy například:

petr.novak@gmail.com
romana.nejedla@czechitas.cz
slavomir.ponuchalek@yahoo.com
Postupujte dle následujících kroků.

Vytvořte jednoduchou webovou stránku s JavaScriptovým programem.
Nechte uživatele zadat jeho e-mail a uložte si jej do proměnné email.
Pomocí metody indexOf najděte v tomto e-mailu pozici znaku zavináč. 
Tuto pozici si uložte do proměnné atIndex.
Pomocí metody slice získejte z e-mailu první část představující uživatelské jméno uživatele.
Dále z e-mailu získejte název domény tedy například gmail.com.
Ze získaných informací vytvořte objekt, který bude vypadat například takto:
const parsedEmail = {
  userName: 'slavomir.ponuchalek',
  domain: 'yahoo.com',
};
Pro kontrolu vypište tento objekt do stránky. Každou hodnotu vypište jako odstavec.
*/

const inputEmail = prompt("Zadej svoji emailovou adresu")
let indexEmail = inputEmail.indexOf('@')

const parsedEmail = {
    userName: inputEmail.slice(0,indexEmail),
    domain: inputEmail.slice(indexEmail + 1)
}
document.body.innerHTML += "<hr />"
document.body.innerHTML += "<h2> Emaily: </h2>"
document.body.innerHTML += "<p> username: <strong>" + parsedEmail.userName + "</strong></p>"
document.body.innerHTML += "<p> domain: <strong>" + parsedEmail.domain + "</strong></p>"

/*

Vytvořte webovou stránku, kde uživatel zadá svoji adresu například pro účely doručení 
objednaného zboží. Požaduje ulici, číslo domu, město a PSČ.

Uložte všechny údaje do vhodně pojmenovaných proměnných.
Ze zadanách údajů sestavte pomocí interpolace řetězeců obsahující HTML ve formátu jako níže
<address>
  <p>Pod Stájemi 67</p>
  <p>12754 Klysnov</p>
</address>
Pomocí document.body.innerHTML vložte sestavené HTML do stránky.

*/


const address = {
    street: prompt("Zadej ulici:"),
    houseNumber: prompt("Zadej číslo domu:"),
    postcode: prompt("Zadej PSČ:")
}

document.body.innerHTML += "<hr />"
document.body.innerHTML += "<h2> Adresa: </h2>"

document.body.innerHTML += `
<address>
    <p> ${address.street} ${address.houseNumber} </p>
    <p> ${address.postcode} </p>
</address>
`
