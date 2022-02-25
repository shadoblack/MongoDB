let mongoose = require("mongoose");
let User = require("./reto3Dia1MongoDBModeloUser.js");
let Profile = require("./reto3Dia1MongoDBModeloProfile");
let Credentials = require("./reto3Dia1MongoDBModeloCredentials");

mongoose.connect('mongodb://localhost:27017/codenotch2',
                    {useNewUrlParser: false, useUnifiedTopology: false  } )

//modelo profile

let userDocument = new Profile({
    name: "Juan",
    surname: "Pedro",
    dateOfBirth: 14-12-1984,
    comments: "Solo un comentario",
    rol: "Admin",

});

//modelo usuario

userDocument = new User({
    login: "Juan",
    password: "inclopelusia",

});

//modelo credenciales

userDocument = new Credentials({
    address:  "c/inventada, nº 123, 4º 2ª",
    phone: 936552454,
    email: "incrapista@llegada.com"
});

userDocument.save(checkRespuesta)

function checkRespuesta(err, res)
{
    if (err)
        console.log("Error: " + err)
    else
    {
        console.log("Documento guardado correctamente")
    }
}
