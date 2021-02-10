
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsrumpf (body)
function test()
{
    console.log("Hallo Drazen!");
}

// Funktionsaufruf (call)
//test();

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen() 
{
    let firstName = "Ahmad"; // Variable 
    console.log("Hallo " + firstName + "!");
}

//ausgabeNamen();
//console.log(firstName); // Fehler --> lokal

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

function ausgabeNamen(firstName) 
{
   if (firstName == undefined) {
    firstName = "nobody";
   }
   
    console.log("Hallo " + firstName + "!");
}

/*
ausgabeNamen("Ahmad");  // Argument / ext. Daten
ausgabeNamen("Jenny");
ausgabeNamen(); // Fehler, keine Daten ....
ausgabeNamen(prompt("Bitte Namen eingeben!"));
*/

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

function ausgabeNamenParams(firstName,familyName) 
{
    console.log("Hallo " + firstName + " " + familyName + "!");
}

// ausgabeNamenParams("Drazen","Savi");
// ausgabeNamenParams("Savi","Drazen");
// ausgabeNamenParams(prompt("Vorname?"), prompt("Name?"));