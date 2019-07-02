const User = require('./../db/dbmodels');

const addUser = (req,res) => {
  const {task, created_At} = req.body;
  User.create({username: task, password: created_At}, (error,result)=>{
  if(error){
    console.error(error);
  }
  console.log('connection established!')
  return result;
  })
}

module.exports = addUser;
