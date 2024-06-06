// break ve continue
// break hem pc yormaısn performans için hemde zaman kaybetmeyelim

//  1 den 10 a kadar sayıları yazdıralım 8 e geldiğinde döngüden çıkalım

// let sayac = 1;

// while (sayac <= 10) {
//   console.log(sayac);
//   if (sayac == 8) {
//     break;
//   }
//   sayac++;
// }

// ? Continue sadecebir kere döngüyü kırar. Döngünün parantezinin bitişinden continue nun çalıştığı yerdeki arasındaki hiçbir kodu çalıştırmaz
// 1 2 3 4 5 6 7 9 10

let sayac = 0;
while (sayac <= 10) {
  sayac++;
  if (sayac > 10) {
    break;
  }
  if (sayac == 8) {
    continue;
  }
  console.log(sayac);
}