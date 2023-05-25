function hitungJumlahHuruf(input) {
    input = input.toLowerCase();
    var huruf = {};
    for (var i = 0; i < input.length; i++) {
        var karakter = input[i];
        if (/[a-z]/.test(karakter)) {
            if (huruf.hasOwnProperty(karakter)) {
                huruf[karakter]++;
            } else {
                huruf[karakter] = 1;
            }
        }
    }
    var hurufUrut = Object.keys(huruf).sort();
    var hasilAkhir = [];
    for (var j = 0; j < hurufUrut.length; j++) {
        var hurufSaatIni = hurufUrut[j];
        var jumlahHuruf = huruf[hurufSaatIni];
        hasilAkhir.push(hurufSaatIni + ": " + jumlahHuruf);
    }
    return hasilAkhir.join(", ");
}
var inputan = prompt("Masukkan sebuah kalimat:");
var hasil = hitungJumlahHuruf(inputan);
console.log(hasil);