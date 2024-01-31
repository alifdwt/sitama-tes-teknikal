// 1. Mengambil nama provider dari suatu email
function getEmailProvider(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.error("Format email tidak valid");
  } else {
    const [, domain] = email.split("@");
    const [provider] = domain.split(".");
    console.log(provider);
  }
}

// 2
// Buatkan code dengan javascript :
// Buat objek 'mahasiswa' dengan properti 'nama' dan 'nilai'.
// Tambahkan metode 'keterangan' pada objek untuk menentukan apakah mahasiswa tersebut lulus atau tidak (jika nilai >= 70, Lulus).
// Log keterangan mahasiswa.

// 	Hasil Output :
// 	Lulus
function getMahasiswaStatus(mahasiswa: {
  nama: string;
  nilai: number;
  keterangan?: string;
}) {
  {
    const keterangan = mahasiswa.nilai >= 70 ? "Lulus" : "Tidak Lulus";
    mahasiswa.keterangan = keterangan;

    console.log(mahasiswa.keterangan);
  }
}

getMahasiswaStatus({ nama: "John", nilai: 60 });

// 3. Ada bilangan integer, print 10 kali lalu masing-masing dikali dua
function multiplyByTwo(number: number) {
  for (let i = 0; i < 10; i++) {
    console.log(number * (i + 1));
  }
}

multiplyByTwo(2);

// 4. Buat pengulangan untuk menampilkan angka genap dari 2 hingga 10
function evenNumbers() {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

evenNumbers();

// 5
// Buatkan code dengan javascript :
// Buat variabel 'kalimat' dengan nilai awal "Halo, dunia!".
// Ubah 'kalimat' menjadi "Halo, Indonesia!" menggunakan metode string.
// Log hasilnya.
let kalimat = "Halo, dunia!";
function ubahKalimat(kata: string) {
  kalimat = kalimat.replace("dunia", kata);
  console.log(kalimat);
}

ubahKalimat("Indonesia");
