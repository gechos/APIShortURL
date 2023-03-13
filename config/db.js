const mongoose = require ('mongoose');

module.exports = () =>{
    const connect = () => {
        mongoose.connect(
            process.env.DB_URI,
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

