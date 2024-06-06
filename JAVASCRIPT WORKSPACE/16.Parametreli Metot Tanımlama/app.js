// Parametreli Metot Tanımlamak
// () ----> sen bir metotsun

// function yazdir(isim, soyisim) {
//   // debugger;
//   console.log(isim + " " + soyisim);
// }
// // debugger;
// yazdir("Nilsu", "Can");
// yazdir("Nurten","Uslu");

// cube(5);
// cube(3);

// function cube(sayi){
//   console.log(sayi*sayi*sayi);
// }

let yas = Number(prompt("Yaşinizi giriniz"));

kontrolEt(yas);

function kontrolEt(yas) {
  if (yas > 18) {
    console.log("Ehliyet alabilirsiniz");
  } else {
    console.log("Ehliyet alamazsınız");
  }
}
