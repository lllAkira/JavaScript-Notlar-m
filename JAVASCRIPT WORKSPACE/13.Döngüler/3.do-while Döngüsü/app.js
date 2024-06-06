// do-while Döngüsü
/*
do {
    kodlar
} while (koşul);
*/

// while ile arasındaki fark : koşul sağlamasa bile do while ın koşul aşşağıda olduğu için en az 1 kere

// let sayac = 1;
// do {
//     console.log(sayac);
//     sayac++;
// } while (sayac<=10);

// let yas = 21;

// do {
//     console.log("Ehliyeyi alabilirsiniz.")
// } while (yas>=25);

// 1 den 20 ye kadar olan tek sayıların toplamını bulalım

let sayac = 1;
let toplam = 0;
do {
  if (sayac % 2 == 1) {
    toplam += sayac;
  }
  sayac++;
} while (sayac <= 20);
console.log("Toplam :" + toplam);
