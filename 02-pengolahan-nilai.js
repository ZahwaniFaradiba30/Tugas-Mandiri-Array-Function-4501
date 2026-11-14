const nilaiPraktik = [80, 70, 90, 65, 75, 85];
const batasTuntas = 75;

function tampilkanNilai(nilai) {
    console.log("\n=== NILAI PRAKTIK SISWA ===");

    for (let i = 0; i < nilai.length; i++) {
        console.log("Siswa " + (i + 1) + ": " + nilai[i]);
    }
}

function hitungRataRata(nilai) {
    if (nilai.length === 0) {
        return 0;
    }

    let total = 0;

    for (let i = 0; i < nilai.length; i++) {
        total += nilai[i];
    }

    return total / nilai.length;
}

function hitungJumlahTuntas(nilai, batas) {
    let jumlah = 0;

    for (let i = 0; i < nilai.length; i++) {
        if (nilai[i] >= batas) {
            jumlah++;
        }
    }

    return jumlah;
}

tampilkanNilai(nilaiPraktik);

let jumlahSiswa = nilaiPraktik.length;
let rataRata = hitungRataRata(nilaiPraktik);
let jumlahTuntas = hitungJumlahTuntas(nilaiPraktik, batasTuntas);
let jumlahBelumTuntas = jumlahSiswa - jumlahTuntas;

console.log("\n=== REKAPITULASI ===");
console.log("Jumlah Siswa: " + jumlahSiswa);
console.log("Nilai Rata-rata: " + rataRata);
console.log("Jumlah Tuntas: " + jumlahTuntas);
console.log("Jumlah Belum Tuntas: " + jumlahBelumTuntas);