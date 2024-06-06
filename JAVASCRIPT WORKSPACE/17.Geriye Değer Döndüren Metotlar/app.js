// Geriye Değer Döndüren Metotlar ----
/* 
return : geriye döndürmek
1- Bir değeri metodun dışarısına çıkarmak, taşımak için kullanılır.
2- Bir metodu bitiren anahtar kelimedir. Return anahtar kelimesinden sonra yazılan kodlar erişilemez.
*/

let donenDeger = cube(2);
// kareAl(donenDeger);
// console.log(donenDeger);

function kareAl(sayi) {
  let sonuc = sayi * sayi;
  // console.log(sonuc);
  return sonuc;
}

function cube(sayi) {
  let sonuc = sayi * sayi * sayi;
  let kareSonuc = kareAl(sonuc);
  console.log(kareSonuc);

  // console.log(sonuc);
  // return sonuc;
  // console.log("Nilsu");
}

// void : geriye değer döndürmeyen demektir.
// function yazdir(){
//   console.log("Nilsu");
// }
// yazdir();
