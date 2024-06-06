// While Döngüsü
// false ise while döngüüsne girmez

/*while (koşul) {
  kodlar

  sayacın değerini atarız > atamazsak sonsuz döngüye girer.
}*/

// 1 den 10 a kadar yazdıralım

// let sayac = 1;
// while (sayac<=10) {
//   console.log(sayac);

//   sayac++;
// }

// 1 den 10 a kadar çift ve tek

// let sayac = 1;
// while (sayac <= 10) {
//   if (sayac % 2 == 0) {
//     console.log(sayac);
//   }
//   sayac++;
// }

let sayac = 1;
while (true) {
  console.log(sayac);
  if (sayac == 7) {
    break;
  }
  sayac++;
}
