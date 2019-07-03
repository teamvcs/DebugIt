const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb+srv://teamtesting:sG7XyjEPaYbZ3sez@gql-practice-pfkjl.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

const UserSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  score: {type: Number},
  current_problem: { problem_id: {type: Number}},
});

const ProblemSchema = new Schema({
  _id : {type: Number},
  prompt: {type: String, required: true},
  completed: {type: Boolean}
});


module.exports = {UserSchema, ProblemSchema, mongoose};
