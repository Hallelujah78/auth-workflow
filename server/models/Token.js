const mongoose = require("mongoose");

const TokenSchema = mongoose.Schema(
  {
    refreshToken: { type: String, required: true },
    ip: { type: String, required: true },
    user: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
    isValid: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Token", TokenSchema);
