const Mongoose = require('mongoose');
const Schema = Mongoose.Schema();
Mongoose.connect('mongodb://localhost:3000/testgame', {useNewUrlParser: true});

const UserSchema = new Schema({
    userName: {type: String, required: true},
    seq: {type: Number, default: 0}
});

const User = mongoose.model('User', UserSchema);


module.exports = {
    User,
}
