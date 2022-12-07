const nodemailer = require('nodemailer')


const sendEmail = async options =>{

    //!1). create transport

    const transporter =  nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "mantrimallslogin@gmail.com",
          pass: "eivkffcgeucufnkm",
  }
    })

    //!2). Define the email option

    const mailOptions = {
        from: '<mantrimallslogin@gmail.com>',
        to: options.email ,
        subject: options.subject,
        text: options.message,
      
    }

    //!3). Actually send the email
    await transporter.sendMail(mailOptions);
}

module.exports = sendEmail