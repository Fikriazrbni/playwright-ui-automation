// === TIPE DATA DASAR TypeScript ===

// String
let nama: string = "Fikri"

// Number
let umur: number = 25

// Boolean
let sudahMenikah: boolean = false

// Array
let hobi: string[] = ["coding", "gaming", "reading"]
let angka: number[] = [1, 2, 3]

// Object
let user: { nama: string; umur: number; aktif: boolean } = {
  nama: "Fikri",
  umur: 25,
  aktif: true,
}

// Tuple (array dengan tipe fixed)
let coordinate: [number, number] = [10, 20]

// Enum
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}
let myRole: Role = Role.Admin

// Union type (bisa lebih dari 1 tipe)
let id: string | number = "ABC123"
id = 123 // ini juga valid

// Any (hindari kalau bisa, tapi berguna saat transisi dari JS)
let data: any = "bisa apa aja"

//method
const luasSegitiga = (alas: number, tinggi: number): Number => {
    return alas * tinggi /2
}

async function luasLingkaran (jari2: number): Promise<void> {
    console.log("luas lingkaran: ",  3.14 * jari2 * jari2)
}

// === PRINT SEMUA ===
console.log("Nama:", nama)
console.log("Umur:", umur)
console.log("Sudah Menikah:", sudahMenikah)
console.log("Hobi:", hobi)
console.log("User:", user)
console.log("Coordinate:", coordinate)
console.log("Role:", myRole)
console.log("ID:", id)
luasLingkaran(30)
console.log("luas segitiga: ", luasSegitiga(12, 20))