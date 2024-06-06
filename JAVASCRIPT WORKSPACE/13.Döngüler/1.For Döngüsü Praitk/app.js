// For Döngüsü
// yukarıdan aşşağıya çalışmaya başlar

// for (degisken; kosul; arttirma-azaltma) {
//  kodlar
// }
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// birden 100e yazdırma
// for(let i=1; i<=100;i++){
//   console.log(i);
// }

// 1 den 10 a çift
// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

// 1 den 10 a tek
// for (let i = 1; i <= 10; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 1) {
//     console.log("Nilsu");
//   } else {
//     console.log("Naber");
//   }
// }

// 50 den 1 e kadar gidelim ve toplamlarını bulalım
let toplam = 0;
for (let i = 50; i >= 1; i--) {
  toplam += i;
  console.log(i);
}
console.log("Toplam :" + toplam);

// let satir = 5;
// for (let i = 1; i <= satir; i++){
//   let s_at='';
//   for(let j = 1; j<=i; j++){
//     s_at+='* ';
//   }
//   console.log(s_at);
// }
