/* --------MANTIKSAL OPERATÖRLERİ--------
    && : ve 1 false olursa false olur
    || : veya --true olursa true olur
    ! : değil--!T=F olur. bir şeyi tersini yapar.
    
*/

// Yaşınız 18'den büyükse VE 3000 TL para olması (TRUE TRUE OLMALI-- FALSE OLURSA OLAMAZ)

let yas = 20;
let para = 3500;
let saglikliMi= false;
let hakSayisi = 3;

// console.log(yas>18 && para >3000 && saglikliMi==true);

// console.log(5>3 || 2<1);

// console.log(!(5>3))

console.log((para>3000 && hakSayisi>1) || (yas>18 && saglikliMi));