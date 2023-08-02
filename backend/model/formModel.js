const mongoose = require("mongoose")

const FormSchema = mongoose.Schema({
    name : {
        type : String
    },
    phone : {
        type : String,
        maxLength : 10
    },
    gender : {
        type : String,
    },
    email : {
        type : String,
        unique : true
    }
}, {timestamps : true}


)

module.exports = mongoose.model("Form", FormSchema)