const barangLab = [
    "Keyboard",
    "Mouse",
    "Monitor",
    "Kabel HDMI"
];

function tampilkanBarang(daftarBarang) {
    console.log("\nDaftar Barang:");

    if (daftarBarang.length === 0) {
        console.log("Daftar barang kosong");
    } else {
        for (let i = 0; i < daftarBarang.length; i++) {
            console.log((i + 1) +". " + daftarBarang[i])
        }
    }

    console.log("Jumlah Barang: " + daftarBarang.length);
}

function tambahBarang(daftarBarang, namaBarang) {
    if (namaBarang === "" || daftarBarang.includes(namaBarang)) {
        return false;
    }

    daftarBarang.push(namaBarang);
    return true;
}

function cariBarang(daftarBarang, namaBarang) {
    return daftarBarang.indexOf(namaBarang);
}

function hapusBarang(daftarBarang, namaBarang) {
    let indeks = daftarBarang.indexOf(namaBarang);

    if (indeks === -1) {
        return false;
    }

    daftarBarang.splice(indeks, 1);
    return true;
}

console.log("=== INVENTARIS LABORATORIUM ===");

console.log("\nDaftar Barang Awal:");
tampilkanBarang(barangLab);

console.log("\n[Tambah Barang]");
if (tambahBarang(barangLab, "Webcam")) {
    console.log("Webcam berhasil ditambahkan.");
} else{
    console.log("Penambahan barang gagal.");
}

console.log("\n[Cari Barang]");
let hasilCari = cariBarang(barangLab, "Monitor");

if (hasilCari !== -1) {
    console.log("Monitor ditemukan pada indeks " + hasilCari + ".");
} else {
    console.log("Monitor tidak ditemukan. ");
}

console.log("\n[Hapus Barang]");
if (hapusBarang(barangLab, "Mouse")) {
    console.log("Mouse berhasil dihapus.");
} else {
    console.log("Mouse tidak ditemukan.");
}

console.log("\nDaftar Barang Terbaru:");
tampilkanBarang(barangLab);

console.log("\n=== Pengujian Program ===");

let dataUji = ["Keyboard", "Mouse", "Monitor", "Kabel HDMI"]

console.log("Tambah Printer:",
    tambahBarang(dataUji, "Printer"));

    console.log("Tambah Monitor:",
        tambahBarang(dataUji, "Monitor"));

        console.log("Tambah kosong:",
            tambahBarang(dataUji, ""));

            console.log("Cari Scanner:",
                cariBarang(dataUji, "Scanner"));

                console.log("Hapus Scanner:",
                    hapusBarang(dataUji, "Scanner"));

                    console.log("Tampilkan Array kosong:");
                    tampilkanBarang([]);