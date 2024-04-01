const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        maxLength: 30,
        trim: true,
        validate: {
            validator: function(value) {
                const nameRegex = /^[a-zA-Z\s]*$/;
                return nameRegex.test(value);
            },
            message: "name should only contains alphabets"
        },
        required: [true, "name is require"]
    },
    email: {
        type: String,
        minLength: 10,
        unique: true,
        required: [true, "email is required"]
    },
    technologies: [{
        type: String,
        required: true
    }],
    students: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Student'
    }]
})

//model
const Mentor = mongoose.model("Mentor", mentorSchema);

//export
module.exports = Mentor;