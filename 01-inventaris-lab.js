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