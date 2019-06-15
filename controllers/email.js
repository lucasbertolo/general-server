const handleEmail = (req, res, nodemailer, receiver) => {

	const transporter = nodemailer.createTransport({
   service: process.env.NODEMAILER_SERVICE,
     auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }
  });

  const {email, name, message, phone} = req.body;

  if(!email || !name){
    return res.status(400).json('Empty field')
  }

  let mailOptions = {
      from: 'aneospes@yahoo.com',
      to: receiver,
      subject: "Contato site",
      html: 
            `
             <h3>De ${name} - ${email} </h3>
             <p>${message}</p>
             <p>Telefone - ${phone}</p>
             ` 

  };

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        return res.status(400).json("something went wrong")
      } else {
        console.log('Email sent: ' + info.response);
      }

    return res.status(200).json("nice job");
  });
}

module.exports = {
	handleEmail: handleEmail
};