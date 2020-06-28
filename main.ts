import fetch from "node-fetch";

function printSeparator() {
    console.log("---------------------------------------------------------------");
}

async function normalRead() {

    printSeparator();

    // Welcher Typ ist a?
    // Wie bekomme ich raus, welcher typ a ist?
    const a = await fetch("https://www.orf.at");

    // Was passiert hier?
    // Wie bekomme ich den content von b?
    const json = await a.json();
    console.log("json", json);

    const text = await a.text();
    console.log("text", text);
}


async function notFound() {

    printSeparator();

    // Wie bekommt der caller mit, dass server 404 retourniert?
    // Mit try catch?
    const a = await fetch("https://www.orf.at/hansiburli");

    // Was ist der Unterschied hierzu?
    // Hier try catch?
    const b = await fetch("https://www.orf.athansiburli");
}

// Was ist der Unterschied von dieser Funktion zu readWithSeparateExceptionHandling?
async function readWithExceptionHandling() {

    printSeparator();

    try {
        const a = await fetch("https://www.orf.at");

        const json = await a.json();
        console.log("json", json);

        const text = await a.text();
        console.log("text", text);
    } catch (err) {
        console.log("error", err);
    }
}


async function readWithSeparateExceptionHandling() {

    printSeparator();

    let a;
    try {
        a = await fetch("https://www.orf.at");
    } catch (err) {
        // Was sollte man hier machen?
        console.log("error", err);
    }

    try {
        const json = await a.json();
        console.log("json", json);
        return json;
    } catch (err) {
        console.log("error", err);
    }

    try {
        const text = await a.text();
        console.log("text", text);
        return text
    } catch (err) {
        console.log("error", err);
    }
}


function callNormalRead() {
    // Brauche ich hier ein try catch?
    // Ist hier noch ein Fehler?
    normalRead();
}


async function callreadWithExceptionHandling() {
    // Brauche ich hier ein try catch?
    await readWithExceptionHandling();
}



let isLoading = false;

// Was ist der Wert von isLoading am Ende der Funktion?
async function loadingState() {
    isLoading = true;

    try {
        const a = await fetch("https://www.orf.at");
    } catch (err) {
        // Was sollte man hier machen?
        console.log("error", err);
    }

    isLoading = false;
}

// Was ist der Wert von isLoading am Ende der Funktion?
function doSomething() {

    isLoading = true;
    let a = Math.floor(Math.random() * 10);
    if (a === 0) {
        return 1;
    }

    a = a * 23;
    if (a > 50) {
        return 2;
    }
    isLoading = false;
}

