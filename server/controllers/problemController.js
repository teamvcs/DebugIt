// connect to db

// const Problem = require('../db/dbmodels');
const User = require('../db/dbmodels');
const problems = require('../db/ProblemStore');

const problemController = {

  displayProblem: (req, res, next) => {
    const { score } = req.params;
    res.json(JSON.parse(JSON.stringify(problems[score])));
  }

}

module.exports = problemController;