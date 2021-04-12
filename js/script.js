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
    }
  }
  yourSurname = prompt("Qual è il tuo cognome?");
}
