const { UserSchema,ProblemSchema } = require('./schema');

const User = new mongoose.model('User', UserSchema);
const Problem = new mongoose.model('Problem', ProblemSchema);

