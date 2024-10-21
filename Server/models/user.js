import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        min:2,
        max:50,
    },
    lastName:{
        type: String,
        required: true,
        min:2,
        max:50,
    },
    email:{
        type: String,
        required: true,
        max:100,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        min:6,
    },
    picturePath:{
        type: String,
        default: "",
    },
    friends:{
        type: Array,
        default: [],
    },
    location:String,
    description:String,
    viewedProfile: Number,
    impressions: Number,

},
{timeStamps:true}
);

const User = mongoose.model('User',userSchema);
export default User;