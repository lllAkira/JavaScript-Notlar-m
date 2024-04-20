// Let - Var - Const

// Değişken Nedir ?

/* 
Javascriptte int string boolean vb değişkenler belirtilmez yoktur.

var/let/const degiskenIsmi = degiskenDegeri
let sayi = 10;
 */

//  var : function scope -- çoğu yerden erişilebildiği için ram bellekte çok fazla yer kaplar.
// fonksiyon içinde tanımlansada block scope içinde tanımlansa da öyle gibi davranıyor.

// function selamVer() {
//     var selam = "Herkese selam"; //function scope
//     if (true) {
//         var b = 10;
//         console.log(b);
//     }
//      var ile tanımlandığı için function scope taklidi yapıp dıştanda erişilebilir.
//     console.log(b);
//     console.log(selam);
// }
// selamVer();

// let/const : block scope özelliğine sahiptir.

// function selamVer() {
//     var selam = "Herkese selam"; 
//     if (true) {
//         let b = 10;
//         console.log(b);
//     }
    
//      console.log(b); let ve const ile tanımlanırsa block scope dışında yazdırılırsa erişilemez ve hata verir.
//     console.log(selam);
// }
// selamVer();

// var a = 5;
// var a = 10;
// console.log(a);

//  varda bir değişken isminden iki tane oluşturulabiliir. 

// if (true) {
//     let a = 5;
//     let a = 10;
//     console.log(a);
// }
// let ve const ile bir değişken isminden bir tane daha oluşturulamaz.

// LET & CONST arasındaki fark ?

// const (constant) : sabit, değişmez

// const a=10;
// a=15; yapamayız çünkü sabit değerlidir.
// console.log(a);

// let b = 10;
// let = 7;
// console.log(b);
// fakat let de değiştirilebilir sabit değildir.


const user = {
    username :"nilsu",
    password :"123"
}
// şu şekilde değiştirilebilir.
user.username="yağmur";
// user={} böyle yeni bir değer atamaya çalışırsak hata alırız. fakat let ile yapsaydık atayabilirdik.
console.log(user);