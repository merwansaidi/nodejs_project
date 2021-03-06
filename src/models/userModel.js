const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {Schema} = mongoose;

let userSchema = new Schema ({
    role: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
        trim: true
    },
    nom: {
      type: String,
      required: true
    },
    prenom: {
      type: String,
      required: true
    },
    hash_password: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    user_id: {
        type: String
    }
})

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
};

module.exports = mongoose.model('User', userSchema);

