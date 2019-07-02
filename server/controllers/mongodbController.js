// Imports: Dependencies
const { User } = require('../../db/schema');
// import mongoDatabase from '../database/mongodb';

// MongoDB Queries

const queries = {
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

module.exports = queries;
