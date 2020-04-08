var express = require("express");
var nodemailer = require("nodemailer");
var bodyParser = require("body-parser");

const port = process.env.PORT || 3001;
var app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,Content-Type, Authorization, Cache-Control"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  return next();
});

let transport = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "tdlreset@gmail.com", // generated ethereal user
      pass: "9599015901" // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
});

transport.verify((error, success) => {
  if (error) {
    console.log("error is", error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.use(express.static(__dirname + "/build"));
//cross origin resource sharing access permission attached in Header section

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: email,
    to: "akakankur81@gmail.com", // Change to email address that you want to receive messages on
    subject: `New Message from PORTFOLIO: ${name}`,
    text: content,
  };
  transport.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
      transport.close();
    }
  });
});

app.listen(port, () => {
  console.log("App is running on port:", port);
});
