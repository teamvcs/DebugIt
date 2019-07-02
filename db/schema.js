const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:3000/guidance', {useNewUrlParser: true});

const UserSchema = new Schema({
  userName: {type: String, required: true},
  password: {type: String, required: true},
});

const ProblemSchema = new Schema({
  prompt: {type: String, required: true},
})


module.exports = {UserSchema, ProblemSchema};
