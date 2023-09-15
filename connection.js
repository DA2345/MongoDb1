const mongoose = require("mongoose")

const url = process.env.URI || "mongodb+srv://techna123:123@deemadb.8g3lt.mongodb.net/New?retryWrites=true&w=majority"

async function main(){
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

    const mgDB = mongoose.connection;

    mgDB.on('connected', console.log.bind(console, 'MongoDB & Mongoose Connected'));
}



module.exports=main