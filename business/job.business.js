const nodemailer = require("nodemailer");

class Job {
    constructor({ EmailEditorService }) {
        this._entityService = EmailEditorService;
    }
    async execute(script) {
            console.log(script);
            return await this.processFunction(script);
        }
        //login generardo
    processFunction(script) {
        if (script.ok) {
            console.log("Hola mundo");
            let contenido = 'console.log("hola")\n console.log("chau")\n this.enviarEmail()\nthis.enviarEmail()\n this.getInstances("select * from")';
            eval(contenido);















            return "Hola mundo";
        }

    }
    async enviarEmail(to, subject, html) {
        console.log(to, subject, html);
        // await this._entityService.getEmailEditorByCodigo(codigo)
        //     .then(async html => {
        var transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 25,
            secure: false,
            auth: {
                user: "testing@softland.com.ar",
                pass: "SendTest2020!"
            }

        });
        var mailOptions = {
            from: '"Softland S.A." <testing@softland.com.ar>', // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            // text: "Hello world?", // plain text body
            html: html, // html body
        };
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return error.message;
            } else {
                return info;
            }
        });
        // });


    }
    async getInstances(values) {
        await console.log(values);
    }
}
module.exports = Job;
// auth: {
//     user: "russ.sanford57@ethereal.email",
//     pass: "5vvT3Y6AZVbN9vsgys"
// }