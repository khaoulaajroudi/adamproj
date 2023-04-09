const mongoose = require("mongoose");
const schema = mongoose.Schema;
const tournoiSchema = new schema({
    gamename:{
        type:String,
        required:true,
    },
    mode:{
        type:String,
        required:true,
    },

    money:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    partie:[]
});
module.exports = mongoose.model("tournoi", tournoiSchema);
