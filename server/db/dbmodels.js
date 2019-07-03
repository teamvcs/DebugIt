const { UserSchema, ProblemSchema } = require('./schema');
const mongoose = require('mongoose');

const User = new mongoose.model('User', UserSchema);
// const Problem = new mongoose.model('Problem', ProblemSchema);

module.exports = User;
