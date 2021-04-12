var yourSurname = prompt("Qual è il tuo cognome?");
var surnameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.log("Lista iniziale: " + surnameList);

while (yourSurname !== "") {
  surnameList.push(yourSurname);
  console.log("*********************************");
  console.log("Cognome aggiunto: " + yourSurname);
  console.log("Lista non ordinata: ", surnameList);
  surnameList.sort();
  console.log("Lista ordinata: " + surnameList);
  console.log("*********************************");
  for (var i = 0; i < surnameList.length; i++) {
    if (surnameList[i] === yourSurname) {
      console.log("Posizione cognome aggiunto in lista ordinata: " + (i + 1));
      document.getElementById("surname-added").innerHTML +=
        "Nuovo cognome aggiunto: " +
        yourSurname +
        ". Posizione cognome aggiunto in lista ordinata:  " +
        (i + 1) +
        "<br>";
    }
  }
  yourSurname = prompt("Qual è il tuo cognome?");
}

for (var i = 0; i < surnameList.length; i++) {
  var list_item = surnameList[i];
  var before_content = document.getElementById("list-updated").innerHTML;
  document.getElementById("list-updated").innerHTML =
    before_content + "<li>" + list_item + "</li>";
}
