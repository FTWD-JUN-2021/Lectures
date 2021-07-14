const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        name: String,
        cats: [{ type: Schema.Types.ObjectId, ref: "Cat" }]
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

module.exports = model("User", userSchema);
