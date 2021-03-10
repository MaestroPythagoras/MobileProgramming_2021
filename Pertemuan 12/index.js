// 1. Call Back

// a. Buatlah function JavaScript bernama mandi lalu lakukan console.log() yang berisi nilai string "Mandi"
// function mandi() {
//     console.log("mandi");
// }
// mandi();

// b. Buatlah function JavaScript bernama sarapan. Di dalam function tersebut gunakan setTimeout() dengan argumen pertama function yang mengembalikan console.log() berisi nilai string "Sarapan tertunda 3 detik" dan argumen kedua berupa durasi waktunya sebesar 3000 (milidetik).
// function sarapan() {
//     setTimeout(() => { console.log('Sarapan tertunda 3 detik')
//  },3000)
// }
// sarapan();

// c. Buatlah function JavaScript bernama berangkatSekolah lalu lakukan console.log() yang berisi nilai string "Berangkat Sekolah".
// function berangkatSekolah() {
//     console.log("Berangkat Sekolah");
// }
// berangkatSekolah();

// d. Jika kita memanggil ketiga function dengan urutan mandi, sarapan dan berangkatSekolah maka sarapan menjadi paling terakhir dieksekusi. (DONE!)
// mandi();
// sarapan();
// berangkatSekolah();

// e. Ubahlah function sarapan menjadi selesai dieksekusi sebelum berangkatSekolah menggunakan callback.
console.log("========== NOMOR-1 ==========");
function mandi() {
    console.log("Mandi DONE");
}
function sarapan(callback) {
    setTimeout(function(){
        console.log('Sarapan DONE');callback()},3000)
}
function berangkatSekolah() {
    console.log("Berangkat Sekolah DONE");
}
// f. Panggillah kembali ketiga function di atas dengan urutan mandi, sarapan, lalu berangkatSekolah.
mandi();
sarapan(berangkatSekolah);

// 2. Promise
// a. Buatlah sebuah function bernama helloWorld. Di dalam function, tambahkan return statement new Promise. Isi parameter Promise dengan callback function yang memiliki parameter resolve. Di dalam Promise, tambahkan method setTimeOut. Isi parameter pertama setTimeOut dengan callback function yang berisi resolve string "Hello World!". Argumen kedua berisi durasi time out sebesar 2000.
function helloWorld() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 2000);
  });
}

// b. Buatlah sebuah async function bernama messages. Di dalam function, buatlah sebuah variabel bernama msg dan isi dengan statement await helloWorld(). Lakukan console.log() variabel msg di dalam function messages.
const msg = async function() {
  const msg = await helloWorld();
  console.log('Message:', msg);
}

// c. Panggil function messages di luar blok kode function messages yang sudah dibuat. Statement string Hello World! akan keluar setelah 2 detik. Cek pada tab Console untuk melihat data.
msg();

// 3. Fetch
// a. Buatlah sebuah function bernama ambilDataUser()
// b. Gunakan fetch() untuk mengambil data dari end-point API berikut "https://jsonplaceholder.typicode.com/users"
// c. Gunakan promise untuk melakukan fetch(). Tambahkan .then() di bawah kode fetch(). Isi parameter .then() berupa callback function yang memiliki argumen bernama response.Di dalamnya lakukan return terhadap response dan gunakan method .json()

function ambilDataUser() {
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((json) => console.log(json));
}
ambilDataUser();



// by : Maestro Pythagoras | S11910046