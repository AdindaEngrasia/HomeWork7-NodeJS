// Menulis Log ke File log.txt
// Buat file soal2.js untuk menulis log ke dalam file log.txt
// Berikut adalah isi dari soal2.js :

const fs = require("fs");

const logData = "Data log berhasil ditulis ke dalam file log.txt\n";

fs.appendFile("log.txt", logData, (err) => {
  if (err) {
    console.error("Gagal menulis ke file log.txt", err);
  } else {
    console.log("Data log berhasil ditulis ke dalam file log.txt");
  }
});
