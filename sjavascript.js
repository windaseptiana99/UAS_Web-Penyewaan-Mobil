
// Mengambil elemen form dari HTML
const form = document.getElementById("formPenyewaan");

// Mengambil elemen pesan
const pesan = document.getElementById("pesan");

// Menangkap event submit
form.addEventListener("submit", function(event) {

    // Mencegah form terkirim secara otomatis
    event.preventDefault();

    // Mengambil nilai input
    const nama = document.getElementById("nama").value;
    const mobil = document.getElementById("mobil").value;
    const lamaSewa = Number(
        document.getElementById("lamaSewa").value
    );

    // Menghapus pesan sebelumnya
    pesan.textContent = "";

    // Validasi nama
    if (nama.trim().length < 3) {
        alert("Nama lengkap minimal 3 karakter!");
        pesan.textContent = "Error: Nama lengkap harus diisi minimal 3 karakter.";
        return;
    }

    // Validasi pilihan mobil
    if (mobil === "") {
        alert("Silakan pilih mobil terlebih dahulu!");
        pesan.textContent = "Error: Pilihan mobil belum diisi.";
        return;
    }

    // Validasi lama sewa
    // Validasi lama sewa
if (lamaSewa < 1 || lamaSewa > 7 || !Number.isInteger(lamaSewa)) {

    alert("Lama sewa harus antara 1 sampai 7 hari!");

    pesan.textContent =
        "Error: Lama sewa minimal 1 hari dan maksimal 7 hari.";

    return;
}

    // Jika semua data valid
    alert("Penyewaan berhasil divalidasi!");

    pesan.textContent =
        "Data penyewaan berhasil divalidasi. Terima kasih, " + nama + "!";

});
