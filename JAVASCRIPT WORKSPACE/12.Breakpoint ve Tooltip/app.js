//  Breakpoint ve Tooltip Nedir ?

// Tooltip : Yazılımcıyı bilgilendiren açıklama satırları.

// function ortalamaBul(vize1, vize2, final) {
//   // kodlar
//   return "75";
// }

// Breakpoint : Derleyicinin bütün kodları milisaniyeler içinde çalışmasını engelleyip adım adım çalışmasını sağlarız.

let a = 10;
let b = 15;
let c = a + b;
debugger;
let d = a + b + c;
let e = a + c + b;

let sonuc = a + b + c + d + e;
console.log("Sonuç", sonuc);
