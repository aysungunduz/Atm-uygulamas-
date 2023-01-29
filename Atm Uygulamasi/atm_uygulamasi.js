let bakiye = 1000;
let metin = `
1-Bakiye görüntüleme
2-Para cekme
3-Para Yatırma
4-Cıkıs
Lütfen bir deger seciniz.`

// console.log (metin);

let secim = prompt(metin);

switch (secim) {
    case "1":
        console.log(`Bakiyeniz ${bakiye} TL`);
        break;
    case "2":
        let cekilecekPara = Number(prompt("Ne kadar para cekmek istersiniz?"));
        if (cekilecekPara < bakiye) {
            console.log("İslem basarili");
            bakiye -= cekilecekPara;
            console.log(`Kalan bakiyeniz ${bakiye} TL`);
        }
        else {
            console.log("Bakiyenizden fazla para cekemezsiniz.")
        }
        break;
    case "3":
        let yatirilacakPara = Number(prompt("Yatirilacak tutari giriniz."));
        bakiye += yatirilacakPara;
        console.log(`Yeni bakiyeniz ${bakiye}`);
        break;
    case "4":
        console.log("Sistemden cikis yapilmistir.");
        break;
    default:
        console.log("Lütfen 1 ve 4 arasinda deger giriniz.")
}