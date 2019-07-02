const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://Rodolfoguzman25:Debugger123!@gql-practice-pfkjl.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});
const UserSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
});

const ProblemSchema = new Schema({
  prompt: {type: String, required: true},
});


module.exports = {UserSchema, ProblemSchema};
