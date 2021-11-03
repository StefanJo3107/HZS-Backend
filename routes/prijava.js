const express = require("express");
const Prijava = require("../models/Prijava");
const nodemailer = require("nodemailer");
const cors = require("cors");
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PWD,
    },
});

let potvrdaMail = {
    subject: "[HZS 4.0] - Uspešno evidentirana prijava",
    html: '<p>Poštovani,<br /><br />Obaveštavamo Vas da je Vaša prijava za takmičenje Hakaton za srednjoškolce uspešno evidentirana.<br /><br />Hvala Vam što ste prepoznali ovo takmičenje kao jedinstvenu priliku za sticanje novih znanja, iskustava i motivacije za daljim usavršavanjem.<br /><br />Rezultate prvog kruga selekcije možete da očekujete nakon zatvaranja prijava. Ukoliko prođete u naredni krug, sledeći korak je online test 22. novembra.<br /><br />Srdačan pozdrav,</p><table style="color: rgb(32, 33, 36); font-family: Arial, Helvetica, sans-serif; font-size: small; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; border: none; border-collapse: collapse;"><tbody><tr style="height: 139.818pt;"><td style="font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; margin: 0px; border-right: 2.25pt solid rgb(0, 255, 163); vertical-align: top; padding: 5pt; overflow: hidden;"><p dir="ltr" style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 12pt; font-family: Roboto, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;"><span style="border: none; display: inline-block; overflow: hidden; width: 108px; height: 108px;"><img src="https://lh4.googleusercontent.com/aw2sAWlcqdGDk4nlCxfvnUxeE0PmzLG5BPgstkYh5GKPoG0z4EeJ5x2Rzwd5Z-9rz3tJeEYxYnILO43NBke6799vHwfZhlw145OPtdTZJF8Jd1BxVer0KsfQ8RMHqA=s0" width="108" height="108"></span></span></p><p dir="ltr" style="line-height: 1.2; text-align: center; margin-top: 0pt; margin-bottom: 0pt;"><a href="https://www.facebook.com/fonis.rs/" target="_blank"><span style="font-size: 12pt; font-family: Roboto, sans-serif; color: rgb(17, 85, 204); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;"><span style="border: none; display: inline-block; overflow: hidden; width: 27px; height: 27px;"><img src="https://lh5.googleusercontent.com/yDQ0G143T0Broz3b_hQVs6S8iHCvPnq0lQ5aSUhZbPcdrwmBMSAEKjXH6BfXv5hsTACENl2bJjbYRkmOiB1t4ekCb8csImgBTLqCYEpai4HXAidvQGc50H1CntWzOw=s0" width="27" height="27"></span></span></a><span style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">&nbsp;</span><a href="https://www.instagram.com/fonis_fon/" target="_blank"><span style="font-size: 11pt; font-family: Arial; color: rgb(17, 85, 204); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;"><span style="border: none; display: inline-block; overflow: hidden; width: 28px; height: 28px;"><img src="https://lh6.googleusercontent.com/Q3LVu5o4nCO_QlGpKDcJgQL_a5pREahwnntilC_42OF2aJbsbga0T62YTaReXXwJnXG48kuYzknJoXzSXsCuFywKUrmBoFKpAO4STUwTf9ywWFn3AlXmDnGBwgzUnw=s0" width="28" height="28"></span></span></a><span style="font-size: 11pt; font-family: Arial; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">&nbsp;</span><a href="https://www.linkedin.com/company/fonis" target="_blank"><span style="font-size: 12pt; font-family: Roboto, sans-serif; color: rgb(17, 85, 204); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;"><span style="border: none; display: inline-block; overflow: hidden; width: 27px; height: 27px;"><img src="https://lh4.googleusercontent.com/lBf5zpenpQ1cOTxxQau001zpfDGHbzOlqv1S9LMALMOF63b-SaJVme-XOMF1u4tQ6eigb2N4DWDoiDP3I23uq7Qe2VUARf3AoNtGBeWjTlgyKxY-KTfxIamRYREeHA=s0" width="27" height="27"></span></span></a></p></td><td style="font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; margin: 0px; border-left: 2.25pt solid rgb(0, 255, 163); vertical-align: top; padding: 14.4pt; overflow: hidden;"><p dir="ltr" style="line-height: 1.8; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 14pt; font-family: Roboto, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">Jelena Subotić</span></p><p dir="ltr" style="line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 10pt; font-family: Roboto, sans-serif; color: rgb(22, 22, 22); background-color: transparent; font-weight: 700; font-style: italic; vertical-align: baseline; white-space: pre-wrap;">Koordinator tima</span></p><p dir="ltr" style="line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 10pt; font-family: Roboto, sans-serif; color: rgb(22, 22, 22); background-color: transparent; font-weight: 700; font-style: italic; vertical-align: baseline; white-space: pre-wrap;">za ljudske resurse</span></p><p dir="ltr" style="line-height: 1.38; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 10pt; font-family: Roboto, sans-serif; color: rgb(22, 22, 22); background-color: transparent; font-weight: 700; font-style: italic; vertical-align: baseline; white-space: pre-wrap;">Hakaton za srednjo&scaron;kolce 4.0</span></p><p dir="ltr" style="line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 10pt; font-family: Roboto, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-style: italic; vertical-align: baseline; white-space: pre-wrap;">Telefon</span><span style="font-size: 10pt; font-family: Roboto, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">:</span><span style="font-size: 10pt; font-family: Roboto, sans-serif; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">&nbsp;</span><span style="font-size: 10pt; font-family: Roboto, sans-serif; color: rgb(121, 82, 216); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">+381 69 1508208</span></p><p dir="ltr" style="line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 10pt; font-family: Roboto, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-style: italic; vertical-align: baseline; white-space: pre-wrap;">Email:</span><span style="font-size: 10pt; font-family: Roboto, sans-serif; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">&nbsp;</span><a href="mailto:jelena.subotic@fonis.rs" target="_blank"><span style="font-size: 10pt; font-family: Roboto, sans-serif; color: rgb(121, 82, 216); background-color: transparent; font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">jelena.subotic@fonis.rs</span></a></p><p dir="ltr" style="line-height: 1.5; margin-top: 0pt; margin-bottom: 0pt;"><span style="font-size: 10pt; font-family: Roboto, sans-serif; color: rgb(0, 0, 0); background-color: transparent; font-style: italic; vertical-align: baseline; white-space: pre-wrap;">Adresa:</span><span style="font-size: 10pt; font-family: Roboto, sans-serif; color: rgb(0, 0, 0); background-color: transparent; vertical-align: baseline; white-space: pre-wrap;">&nbsp;</span><a href="https://goo.gl/maps/tWGXWcyfqAopmfd97" target="_blank"><span style="font-size: 10pt; font-family: Roboto, sans-serif; color: rgb(121, 82, 216); font-weight: 700; vertical-align: baseline; white-space: pre-wrap;">Jove Ilića 154, Beograd</span></a></p></td></tr></tbody></table>',
};

const sendEmail = (to, subject, html) => {
    let mailOptions = {
        from: process.env.EMAIL,
        to,
        cc: "hzs@fonis.rs",
        subject,
        html,
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
router.use(
    cors({
        origin: "*",
    })
);
router.get("/", (req, res) => {
    res.json({ message: "Hello from server!" });
});

router.post("/", async (req, res) => {
    const prijava = new Prijava({
        imeTima: req.body.imeTima,
        kakoSteSaznali: req.body.kakoSteSaznali,
        daLiSteUcestvovali: req.body.daLiSteUcestvovali,
        staVasMotivise: req.body.staVasMotivise,
        staBiPredstavljaoUspeh: req.body.staBiPredstavljaoUspeh,
        inspiracija: req.body.inspiracija,
        timUTriReci: req.body.timUTriReci,
        clanovi: req.body.clanovi,
    });

    try {
        const sacuvanaPrijava = await prijava.save();
        let emails = "";

        for (let i = 0; i < sacuvanaPrijava.clanovi.length; i++) {
            emails += sacuvanaPrijava.clanovi[i].email + ", ";
        }
        sendEmail(emails, potvrdaMail.subject, potvrdaMail.html);
        res.status(200).json(sacuvanaPrijava);
    } catch (err) {
        res.status(400).json({ message: err });
    }
});

module.exports = router;
