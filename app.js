// const { ObjectID } = require('bson')
const { MongoClient } = require('mongodb')

require('dotenv').config()

const uri = process.env.MONGO_URI

const dbName =  process.env.DB_NAME

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

client.connect((error, client) => {
    if(error){
        return console.log('Koneksi Gagal !')
    }

    // Pilih Database
    const db = client.db(dbName)
    
    // 1. Menambahkan 1 data ke collection
    // Data dari inputan
    // const data = {
    //     nama: 'Erick',
    //     email: 'erick@mail.com'
    // }

    // db.collection('mahasiswa').insertOne(
    //     data,
    //     (error, result) => {
    //         if(error) {
    //             return console.log('gagal menambah data !')
    //         }

    //         console.log('result', result)
    //     }
    // )


    // 2. Menambahkan lebih dari 1 data ke collection
    // data dari inputan
    // const datas = [
    //     {
    //         nama: 'Joko',
    //         email: 'jokosusilo@mail.com'
    //     },
    //     {
    //         nama: 'Anilias',
    //         email: 'anilias@mail.com'
    //     },
    //     {
    //         nama: 'Monjave',
    //         email: 'monjave@mail.com'
    //     },
    //     {
    //         nama: 'Sierra',
    //         email: 'sierra@mail.com'
    //     },
    //     {
    //         nama: 'Obsucbs',
    //         email: 'obsucbs@mail.com'
    //     },
    //     {
    //         nama: 'Nekomi',
    //         email: 'nekomi@mail.com',
    //         status: 1
    //     },
    //     {
    //         nama: 'Asmirda',
    //         email: 'asmirda@mail.com',
    //         status: 0
    //     }
    // ]
    // db.collection('mahasiswa').insertMany(
    //     datas,
    //     (error, result) => {
    //         if(error) {
    //             console.log('gagal menambahkan data !')
    //         }

    //         console.log('result', result)
    //     }
    // )

    // 3. Menampilkan data dari collection 
    // console.log(
    //     db
    //     .collection('mahasiswa')
    //     .find()
    //     .toArray((error, result)=> {
    //         console.log('result', result)
    //     }))

    // 4. Menampilkan data berdasarkan kriteria
    // console.log(
    //     db
    //     .collection('mahasiswa')
    //     .find({ nama: 'Erick' })
    //     .toArray((error, result)=> {
    //         console.log('result', result)
    //     }))

    // 5. Mengubah satu data berdasarkan ID
    // data dari inputan
    // const data = {
    //     nama: 'Erick',
    //     email: 'erick@mail.com'
    // }
    
    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectID('6146efa04e51217954ce91cc')
    //     },
    //     {
    //         $set: {
    //             nama: 'Erick kim'
    //         }
    //     }
    // )

    // updatePromise
    // .then((result) => { 
    //     console.log('result', result)
    // })
    // .catch((err) => { 
    //     console.log('error', err )
    // })

    // 6. Mengubah data lebih dari satu berdasarkan kriteria
    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama: 'Erick'
    //     },
    //     {
    //         $set: {
    //             nama: 'Erick Doang'
    //         }
    //     }
    // )

    // 7. Menghapus 1 data
    // db.collection('mahasiswa')
    // .deleteOne({
    //     _id: ObjectID('6146efa04e51217954ce91cc')
    // }).then((result) => {
    //     console.log('result', result)
    // })
    // .catch(err => {
    //     console.log('error', err)
    // })

    // 8. Menghapus 1 data
    // db.collection('mahasiswa')
    // .deleteMany({
    //     nama: 'Erick Doang'
    // }).then((result) => {
    //     console.log('result', result)
    // }).catch((error) => {
    //     console.log('error', error)
    // })
})