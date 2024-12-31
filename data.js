Learning alert, promp, log, const, let
alert('Hello World');
prompt('masukkan data anda!');
var data = 678

let data = 678
data = 900
console.log('data kamu adalah' + data);
alert('Data kamu adalah' + data)

let data = prompt('data anda adalah');
alert('data anda adalah' + data)

let nama = 'rasya huda ramadhan' // String
let usia = 17// Number
let asalSekolah = 'smk muhammadiyah 3 surakarta'
let favoritNumber = 7
let nilai = 100

if (nilai == null) {
    nilai = 'jelek'
} else {
    nilai = 'bagus'
}

switch (nilai) {
    case 40:
    nilai = 'saya mempunyai nilai yang sangat jelek'
    break
    case 100:
    nilai = 'saya mempunyai nilai yang bagus'
    break
    default:
    nilai = 'saya tidak mempunyai nilai'
    break
}

let saldoAwal = 60000
let saldoTambahan = 90000
const hutang = 30000
const saldoAkhir = saldoAwal + saldoTambahan - hutang


const x = 24
const y = 50
const mines = 20
const z = 24 * 50 - 20

alert(`nilai x ${x} dikali dengan nilai y ${y} maka hasilnya adalah ${z}`)

alert (
    `nama saya ${nama} usia saya ${usia} tahun dan asal sekolah saya dari ${asalSekolah} nomer favorit saya adalah ${favoritNumber} nilai saya ${nilai}`
)

alert(
    `saya mempunyai saldo awal sebesar Rp.${saldoAwal} dan saya diberikan saldo tambahan sebesar Rp.${saldoTambahan} dengan itu saldo akhir saya menjadi sebesar Rp.${saldoAkhir}`

)


Array
let namaCharacter = ['l', 'rasya', 'r']
namaCharacter.push('b', 'r')
namaCharacter.shift()
namaCharacter.pop()
alert(namaCharacter)

let namaCharacter = []
namaCharacter [0] = 'r'
namaCharacter [1] = 'd'
namaCharacter.shift()
alert(namaCharacter)


for loop while
3 statement
for (let i = 1; i <= 20; i = i + 1) {
    console.log('rasya huda')
}

const namaCharacter = ['rasya', 'indah', 'bunga', 'ilham']
for (let i = 0; i < namaCharacter.length; i++) {
    console.log(namaCharacter[i])
}


Tugas 1
let nilaiAwal = Number(prompt('berapa nilai yang ingin anda tambahkan'))
let nilaiTambahan = 30
const nilaiAkhir = nilaiAwal + nilaiTambahan
alert(`jadi total nilai akhir anda adalah ${nilaiAkhir}`)


let namaHari = ["senin","selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]
let hari = new Date().getDay()
hari = namaHari[0]
console.log(`Hari ini adalah hari ${hari}`)
tugas 1 selesai



let list = ['rasya', 'fahmi', 'haidar', 'rizki', 'imam', 'sholeh']
for (let z = 0; z <= 50; z = 1 + 1) {
    console.log('rasyahuda')
}


input data user
let data = prompt('Masukkan Nama anda')
let saldo = 1200000
let bayar = 400000
let sisaSaldo = saldo - bayar
alert(`sisa saldo anda adalah ${sisaSaldo}`)


Looping menggunakan for
const namaCharacter = ['rasya', 'indah', 'bunga', 'ilham']
for (let i = 0; i < namaCharacter.length; i++) {
    console.log(namaCharacter[i])
}


Tugas 1
let nilaiAwal = Number(prompt('berapa nilai yang ingin anda tambahkan'))
let nilaiTambahan = 30
const nilaiAkhir = nilaiAwal + nilaiTambahan
alert(`jadi total nilai akhir anda adalah ${nilaiAkhir}`)


let namaHari = ["senin","selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]
let hari = new Date().getDay()
hari = namaHari[1]
console.log(`Hari ini adalah hari ${hari}`)

tugas 1 selesai

for (let z = 0; z <= 50; 1++) {
    
}

input data user
let data = prompt('Masukkan Nama anda')
let saldo = 1200000
let bayar = 400000
let sisaSaldo = saldo - bayar
alert(`sisa saldo anda adalah ${sisaSaldo}`)

const namaData = ['a', 'b', 'c', 'd', 'e', 'f']
for (let a = 0; a < namaData.length; a++) {
    console.log(namaData[a])
}

let i = 0
while (i <= 19) {
    i++
    console.log('abcdefghi')
}


Array utk mengetahui data terletak dimana dan sebelah mana
let namaUser = ['list', 'ctrl', 'fn', 'alt', 'esc', 'insert']
let nama = namaUser.includes('ctrl')

if (nama) {
    const namaPosisi = namaUser.indexOf('ctrl')
    const indexBefore = namaPosisi - 1
    const indexAfter = namaPosisi + 1
    const before = namaUser[indexBefore]
    const after = namaUser[indexAfter]
    const namaAwal = namaUser.shift()
    console.log(`nama user awal adalah ${namaAwal}`)
    const namaAkhir = namaUser.pop()
    console.log(`nama user terakhir adalah ${namaAkhir}`)
    bisa juga pake ini
    console.log(`nama awal dari nama user adalah ${namaAwal} dan nama akhir dari nama user adalah ${namaAkhir}`)
    console.log(`nama user sebelum ctrl adalah ${before} dan nama user sesudah rasya adalah ${after}`)
    console.log(`jadi nama user yg bernama ctrl berada di index - ${namaPosisi}`)
} else {
    console.log('tidak diketahui')
}


Manipulation array
const myArray = ['1', '2', '3', '4', '5', '6']
const newArray = myArray.slice()

newArray[1] = '10'
console.log({ myArray })
console.log({ newArray })


Different array
const arraySaya = ['❤️', 7, { jeruk: true}, ['wow', 'war']]
console.log(arraySaya[3][1])


const me = ['💕', '🤣', '😊']
const you = ['👌', '😎', '😒']

const mergeArray = me.concat(you)
console.log(mergeArray)
for(list of mergeArray) console.log(list)
for(list in mergeArray) console.log(list)
Untuk memunculkan semua data
mergeArray.map((value, index) => console.log(value, index))


DOM
document.title = 'rasya huda'
const body = document.body

body.append('Hello World')

const h1Var = document.createElement('h1')
h1Var.textContent = "haiiiiiiiii"

const myName = document.createElement('p')
myName.innerHTML = 'Rasya Huda'

const namaKamu = document.createElement('b')
namaKamu.innerText = 'yesssss'


body.append(h1Var)
body.append(myName)
body.append(namaKamu)

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')
console.log(btn2)

const defaultText = 'Testtttt'
btn1.textContent = defaultText


btn1.style.border = 'none'

function gantiWarna() {
    btn1.style.background = 'yellow'
    console.log('amans')
    alert('amans')
}

function ubahText() {
    btn1.textContent = 'we areee'
}

function balikText() {
    btn1.textContent = defaultText
}

Tugas utk dom
const oriText = 'Testtttt2'
btn2.textContent = oriText


const newText = document.createElement('p')
function munculText () {
    newText.textContent = 'Rasya Huda Ramadhan'
    body.append(newText)
}


function gantiwarnaText () {
    newText.style.color = 'red'
}


const fullName = function addName (firstname, lastname) {
    console.log('nama depan:', firstname)
    console.log('nama belakang:', lastname)
}

fullName('r', 'h')


function addName () {
    for(let z = 0; z < arguments.length; z++) {
        console.log('nama lengkap:', arguments[z])
    }
    // console.log('nama depan;', arguments[0])
    // console.log('nama belakang;', arguments[1])
}

addName('r', 'h')

// Tugas
const userName = prompt('Masukkan nama anda')
const value = Number(prompt('Masukkan gaji anda perhari'))
const valueGift = 200000
const absen = Number(prompt('Berapa kali anda masuk dalam bulan ini'))
const all = value * absen + valueGift
alert(`jadi untuk ${userName} gaji yang didapatkan untuk bulan ini adalah ${all} dan ${userName} masuk full di bulan ini`)


