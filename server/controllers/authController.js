
const authController = {
  bCryptPassword = (req, res, next) => {
    const { username, password } = req.body;
    // encrypts the password
    // passes on the username and encrypted password
    // to signup middleware
  },

  verifyPassword = (req, res, next) => {
    const { username, password } = req.body;
    // decrypts username with bcrypt
    // checks database for doc with username / decrypted password
    // if err
      // send error message in response
    // passes on the username and something else?
    // to login middleware O
  },
  
}