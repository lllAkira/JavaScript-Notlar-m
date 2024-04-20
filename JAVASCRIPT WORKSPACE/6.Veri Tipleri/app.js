/*
? Veri Tipleri

1-String = harf içeren yerlerde string tipi kullanılır.
2-Number = Rakamların içerdiği bütün varyasyonlar
3-Boolean = true ve false'dan oluşur evet hayırlı durumlar
4-Null = boş yani içinde bir şey yok, herhangi bir değer atanmayan daha sonra atanabilir.
5-Undefined = tanımlanmamış
6-Object = 
7-Function
*/

// let isim = "Nilsu";
// console.log(typeof isim);

// let sayi1 = 10.7;
// let sayi2 = 5.3;
// console.log(sayi1+sayi2);
// console.log(typeof sayi1);

// Yaşınız : 23

// let stringDegisken = "Yaşınız : ";
// let yas = 23;
// console.log(stringDegisken+yas);

// console.log(5>8);

// let a = 3;
// let b = 12;
// let sonuc = a+b;
// console.log(sonuc>12);

// let a = null;
// a = 17;
// console.log(a);

// let a;
// console.log(typeof a);

// -------OBJECT VERİ TİPİ-------
// referans tipli
// primitive ve referans tipliler nedir ve farkları nelerdir.
// let insan ={
//     isim : "Nilsu",
//     soyisim : "Can",
//     yas : 16
// }
// console.log(insan);

// let rakamlar =[1,2,3,4,5];
// console.log(rakamlar);

// -------FUNCTION VERİ TİPİ-------

let func = function(){
    console.log("Merhaba");
}
func();
console.log(typeof func);