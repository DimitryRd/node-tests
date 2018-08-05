const db = require('./db.js');
module.exports.handleSign = (email, password) => {
    db.saveUser({email, password})
};