let A = present(prompt("A ni kiriting"));
if (A > 0) {
    console.log("musbatson");
} else {
    console.log("manfiyson");
}

//8 chi misol
let A = present(prompt("A ni kiriting"));
let B = present(prompt("B ni kiriting"));
let C = present(prompt("C ni kiriting"));
if (A === B || B === C || A === C) {
    console.log("togri");
} else {
    console.log("xato");
}

//2 misol
let A = present(prompt("A ni kiriting"));
if (A % 2 !== 0) {
    console.log("rost: A toq");
} else {
    console.log("yolg'on: A juft");
}
//3 misol
let A = present(prompt("A ni kiriting"));
let B = present(prompt("B ni kiriting"));
if (A > 2 && B <= 3) {
    console.log("Jumla rost.");
} else {
    console.log("Jumla yolg'on.");
}
//4 misol
let A = present(prompt("A ni kiriting"));
let B = present(prompt("B ni kiriting"));
let C = present(prompt("C ni kiriting"));
if (A <= B && B <= C) {
    console.log("rost");
} else {
    console.log("xato");
}
//5
let A = parseInt(prompt("A ni kiriting"));
let B = parseInt(prompt("B ni kiriting"));
if ((A % 2 === 0 && B % 2 === 0) || (A % 2 !== 0 && B % 2 !== 0)) {
    console.log(" rost");
} else {
    console.log("xato");
}
//6
let A = parseInt(prompt("A ni kiriting"));
let B = parseInt(prompt("B ni kiriting"));
let C = parseInt(prompt("C ni kiriting"));
if (A > 0 || B > 0 || C > 0) {
    console.log("rost");
} else {
    console.log("xato");
}
//7
let number = parseInt(prompt("Uch xonali sonni kiriting:"));
let x = Math.floor(number / 100); // Yuzliklar xonasi
let y = Math.floor((number % 100) / 10); // O'nliklar xonasi
let z = number % 10; // Birliklar xonasi
if (x !== y && y !== z && x !== z) {
    console.log("Jumla rost.");
} else {
    console.log("Jumla yolg'on.");
}
//8
let A = parseInt(prompt("A sonini kiriting:"));
let B = parseInt(prompt("B sonini kiriting:"));
let C = parseInt(prompt("C sonini kiriting:"));
if (A === B || B === C || A === C) {
    console.log("Jumla rost.");
} else {
    console.log("Jumla yolg'on.");
}
//9
let x1 = parseInt(prompt("Farzinning birinchi holati uchun x1 kiriting:"));
let y1 = parseInt(prompt("Farzinning birinchi holati uchun y1 kiriting:"));
let x2 = parseInt(prompt("Farzinning ikkinchi holati uchun x2 kiriting:"));
let y2 = parseInt(prompt("Farzinning ikkinchi holati uchun y2 kiriting:"));

// Farzin xuddi shu qator, ustun yoki diagonal bo'ylab yurishi mumkin
if (x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
    console.log("Jumla rost: Farzin bir yurishda o'ta oladi.");
} else {
    console.log("Jumla yolg'on: Farzin bir yurishda o'ta olmaydi.");
}


