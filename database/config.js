const mongoose = require('mongoose');

const dbConenection = async() => {
    try {
        await mongoose.connect( process.env.DB_CNN, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
            

        });
        console.log('DB online');

    } catch (error) {
        
        throw new Error ('Error a la hora de inicializar DB => ' +  error);
    }
}

module.exports = {
    dbConenection
}
