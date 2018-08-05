const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app.js');


describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Dimitry', 29);
        expect(spy).toHaveBeenCalledWith('Dimitry', 29);
    });

    it('should call saveUser with user object', () => {
        var email = 'dimitry.rd@gmail.com';
        var password = '123abc';

        app.handleSign(email, password);
        expect(db.saveUser).toHaveBeenCalledWith(email, password);
    })
});