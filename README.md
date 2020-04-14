# REDUX in React JS

Redux adalah sebuah state management yang berguna untuk memanajemen state dalam project besar <br>
dalam gambaran kasaranya kita tanpa REDUX mengambil state secara class dan inheritance yg tidak akan efisien jika dalam skala besar, dengan adanya REDUX
kita mengambil state ke komponent lain tanpa harus mendefinisikan class parent nya dulu

bagian bagian REDUX :

- ## Action

action merupakan sebuah object yang memiliki property type

- ## Reducer

Reducer adalah bagian redux yang merubah state menjadi respon yang terjadi ketika Action di dispatch().
dispatch() berfungsi sebagai connector

- ## Store

Store adalah menggabungkan Action dan Reducer agar bisa bekerja sebagai state manajemen.
Store bertanggung jawab sebagai:

1. menyimpan keseluruhan state.
2. mengakses state dengan cara getState()
   -menjalankan reducer untuk merubah state dengan cara dispatch(action)

Sumber referensi :

1. https://medium.com/easyread/belajar-redux-dalam-3-menit-b9afc7bc59f0

2. https://www.youtube.com/watch?v=CVpUuw9XSjY
