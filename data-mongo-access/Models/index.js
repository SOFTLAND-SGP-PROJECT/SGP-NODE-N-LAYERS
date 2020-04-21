var mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true)
    //conexión a la base de datos mongodb
mongoose.connection.openUri('mongodb://localhost:27017/mariner', (err, res) => {
    if (err) throw err;
    console.log(`Base de datos mongo en el puerto: ${27017} \x1b[36m%s\x1b[0m`, 'online');
});