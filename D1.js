/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

const firstDataTypeString = "Giuseppe"; // Le stringhe sono elementi utilizzati per descrivere informazioni in caratteri testuali
console.log(typeof firstDataTypeString);

const secondDataTypeNumber = 123; //i numeri sono comparabili alle stringhe in termini di frequenza e motivo di utilizzo, ma con i caratteri numerici
console.log(typeof secondDataTypeNumber);

const trueOrFalse = true; // I booleani ammettono solo due valori: vero o falso. Ci aiuta facendo prendere decisioni al codice
console.log(trueOrFalse);

let fourthDataTypeNull = null; // i null segnalano l'assenza voluta di un valore, da un indizio a chi sta guardando il nostro codice dell'intenzione al volerci tornare a modificare l'elemento in futuro
console.log(fourthDataTypeNull);

let fifthDataTypeUndefined = undefined; // indica, una variabile senza valore assegnato o non definita affatto
console.log(fifthDataTypeUndefined);

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const name = "Giuseppe";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let somma = 20 + 12;
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// Uncaught TypeError: Assignment to constant variable. at D1.js:54:6

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = x - 4;
console.log(sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

const name1 = "john";
const name2 = "John";

console.log(name1 === name2);
console.log(name1.toLowerCase === name2.toLowerCase);
