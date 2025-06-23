import mongoose from "mongoose"

const PageSchema = new mongoose.Schema({
    displayName: {
        type: String,
        required: true
    },
    qr: [{
        type: mongoose.Types.ObjectId,
        ref: "Qr",
        required: [true, "Provide at least one payment method"]
    }],
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
})

if (mongoose.models.Page) {
    delete mongoose.models.Page
}

const Page = mongoose.model("Page", PageSchema);

export default Page;