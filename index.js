const express = require("express"),
  app = express(),
  nodemailer = require("nodemailer");
require("dotenv").config();

const clientemail = require("./clientMail"),
  ownermail = require("./ownerMail");
app.use(express.json());
app.use("/", express.static(__dirname + "/public"));
const generateMail = (
  name,
  email,
  description = "",
  phone = "",
  project = "",
  items = "",
  random = "",
  account = "",
  paymentType = "",
  note = ""
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailOptions = !description
    ? {
        from: "dhanushkrthk15@gmail.com",
        to: email,
        subject: "Welcome from Orange",
        html: clientemail(name),
      }
    : {
        from: "dhanushkrthk15@gmail.com",
        to: "dhanushkrthk15@gmail.com",
        subject: "Welcome from Orange ",
        html: ownermail(
          name,
          email,
          description,
          phone,
          project,
          items,
          random,
          account,
          paymentType,
          note
        ),
      };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

app.post("/sendmail", (req, res) => {
  const { name, email, phone, description, project, items, random,account,paymentType,note } = req.body;
  generateMail(name, email);
  generateMail(name, email, description, phone, project, items, random,account,paymentType,note);
  res.json({ data: "message sent" });
});

app.get("*", function (req, res) {
  if (req.accepts("html")) {
    res.status(404).send('<script>location.href = "404.html";</script>');
    return;
  }
});

app.listen(5000, () => console.log(`server listen at 5000`));