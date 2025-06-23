import mongoose from "mongoose";

const QrSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

if (mongoose.models.Qr) {
    delete mongoose.models.Qr
}

const Qr = mongoose.model("Qr", QrSchema);

export default Qr;