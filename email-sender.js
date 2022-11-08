var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'abc@gmail.com',
        pass: '*******'
    }
});

let mailOptions = {
    from: 'abc@gmail.com',
    to: 'xyz@gmail.com',
    subject: 'Sending email using node.js',
    text: 'That was easy'
};

transporter.sendMail(mailOptions, function(err, data){
    if (err) {
        console.log('error');
    
    }
    else {
        console.log('Email sent successfully');
    }
});