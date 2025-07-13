import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    profile: {
        displayName: {
            type: String,
            required: true
        },
        bio: {
            type: String,
            required: true
        },
        profilePic: {
            type: String
        },
        chiyaOptions: [{
            title: { type: String, required: true },
            price: { type: Number, required: true },
        }]
    },
    username: {
        type: String,
        required: true,
        minLength: [5, "Username should be between 5-30 characters"],
        maxLength: [30, "Username should be between 5-30 characters"]
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        minLength: [10, "Email should be at least 10 characters"],
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

if (mongoose.models.User) {
    delete mongoose.models.User;
}

const User = mongoose.model("User", UserSchema);

export default User