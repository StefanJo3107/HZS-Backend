const mongoose = require("mongoose");

const ClanSchema = mongoose.Schema({
    ime: {
        type: String,
        required: true,
    },
    grad: {
        type: String,
        required: true,
    },
    srednja: {
        type: String,
        required: true,
    },
    razred: {
        type: String,
        required: true,
    },
    brojTelefona: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

const PrijavaSchema = mongoose.Schema({
    imeTima: {
        type: String,
        required: true,
    },
    kakoSteSaznali: {
        type: String,
        required: true,
    },
    daLiSteUcestvovali: {
        type: String,
        required: true,
    },
    staVasMotivise: {
        type: String,
        required: true,
    },
    inspiracija: {
        type: String,
        required: true,
    },
    timUTriReci: {
        type: String,
        required: true,
    },
    clanovi: [ClanSchema],
});

module.exports = mongoose.model("Prijava", PrijavaSchema);
