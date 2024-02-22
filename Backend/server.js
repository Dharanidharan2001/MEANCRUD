const mongoose = require('mongoose');

const app = require('./app');




// try {
//     mongoose.connect('mongodb://localhost:27017/CRUDDB');
//     console.log('Database connection successful');
// } catch (error) {
//     console.error('Error in DB connection:', error);
// }
mongoose.connect('mongodb://localhost:27017/CRUDDB',{
    useNewUrlParser:true
}).then((conn)=>{
    //console.log(conn);
    console.log('Database connected successfully');
}).catch((err)=>{
    console.log('some error has occured'+ err);
})

//to start the server
port=3000;
app.listen(port,()=>{
    console.log(`app running on port ${port}`);
})

// module.exports = mongoose;