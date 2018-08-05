module.exports.add = (a, b) => a + b;

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(this.add(a,b));
    }, 1000)
};



module.exports.square = (a) => a * a;

module.exports.asyncSquare = (a, callback) => {
    setTimeout(() => {
        callback(this.square(a));
    }, 1000);
};


module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}