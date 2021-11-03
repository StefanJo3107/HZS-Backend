const express = require("express");
const nodemailer = require("nodemailer");
var cors = require("cors");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PWD,
    },
});

let pitanjeMail = {
    subject: "[HZS 4.0] - Pitanje: ",
};

const sendEmail = (to, subject, text) => {
    let mailOptions = {
        from: process.env.EMAIL,
        to,
        cc: "hzs@fonis.rs",
        subject,
        text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
};

const router = express.Router();
// router.use(
//     cors({
//         origin: [
//             "http://localhost:3000",
//             "https://hzs.fonis.rs/4.0",
//             "https://stefanjo3107.github.io/HZS-4.0-Site/",
//         ],
//     })
// );
router.post("/", (req, res) => {
    try {
        sendEmail(
            process.env.EMAIL,
            `${pitanjeMail.subject} ${req.body.email} ${req.body.ime}`,
            req.body.pitanje
        );
        res.status(200).json({ message: "Uspesno poslat mejl" });
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
