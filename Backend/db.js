// const mongoose = require('mongoose');

// // try {
// //     mongoose.connect('mongodb://localhost:27017/CRUDDB');
// //     console.log('Database connection successful');
// // } catch (error) {
// //     console.error('Error in DB connection:', error);
// // }
// mongoose.connect('mongodb://localhost:27017/CRUDDB',{
//     useNewUrlParser:true
// }).then((conn)=>{
//     //console.log(conn);
//     console.log('Database connected successfully');
// }).catch((err)=>{
//     console.log('some error has occured'+ err);
// })

// module.exports = mongoose;