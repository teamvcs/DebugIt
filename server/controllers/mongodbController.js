// Imports: Dependencies
const { User, Problem } = require('../../db/schema');


// MongoDB Queries

const users = {
    // findUser : () => {},
    addUser : (req,res)=>{
        const { user_id, username, password } = req.body;
        console.log('User ID', user_id);
        User.Create({
            user_id,
            username,
            password
        }, (err))
    }, 

    // deleteUser = () => {},

    // updateUser = () => {}
}

const problems = {

}

module.exports = users;
module.exports = problem;

