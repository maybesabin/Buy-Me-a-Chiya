import mongoose from "mongoose"

const OtpSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    expiresAt: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
})

if (mongoose.models.Otp) {
    delete mongoose.models.Otp
}

const Otp = mongoose.model("Otp", OtpSchema)

export default Otp