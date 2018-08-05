const expect = require('expect');
const utils = require('./utils');


describe('Utils', () => {
    describe('#1525dd', () =>{
        it('should add two number', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    });

    it('should square a number', () => {
        var res = utils.square(3);
        expect(res).toBe(9).toBeA('number')
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(4, (square) => {
            expect(square).toBe(16).toBeA('number');
            done();
        })
    });

    it('should expect some values', () => {
        expect({
            name: "DImitry",
            age: 23,
            location: "Kyiv"
        }).toInclude({
            age: 23
        })
    });

    it('should verify first and last name', () => {
        let user = {};
        var names = 'Dimitry Rudakov';
        var result = utils.setName(user, names);

        expect(result).toInclude({
            firstName: 'Dimitry',
            lastName: 'Rudakov'
        });
    });
});



