// connect to db
const Problem = require('../db/dbmodels');
const User = require('../db/dbmodels');

const problemController = {

  displayProblems: (req, res, next) => {
    // should get it from frontend (fetch request)
    const { username, problemsSolved } = req.body;


  },

  openCurrentProblem: (req, res, next) => {

  }

}

module.exports = problemController;