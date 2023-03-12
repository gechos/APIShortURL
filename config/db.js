const mongoose = require ('mongoose');

const DB_URI =`mongodb://127.0.0.1:27017/urlShortener`
// // const DB_URI =`mongodb+srv://gechos:.Villalba69@cluster0.zrgd20q.mongodb.net/urlShortener`
module.exports = () =>{
    const connect = () => {
        mongoose.connect(
            DB_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) =>{
                if (err) {console.log('DB: ERROR !');
                } else {
                    console.log('Conexion correcta a DB');
                }
            }
            
        )
    }
   connect();
} 

// mongoose
//   .connect(process.env.MONGODB_URI)
//   .then(() => console.log("Connected to MongoDB Atlas"))
//   .catch((error) => console.error(error));
// mongoose.connect('mongodb://127.0.0.1:27017/urlShortener',{
//     useNewUrlParser:true, useUnifiedTopology:true
// });
//