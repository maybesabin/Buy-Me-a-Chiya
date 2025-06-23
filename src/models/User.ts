import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [5, "Username should be between 5-30 characters"],
        maxLength: [30, "Username should be between 4-30 characters"]
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
    }
}, {
    timestamps: true
})

if (mongoose.models.User) {
    delete mongoose.models.User;
}

const User = mongoose.model("User", UserSchema);

export default User