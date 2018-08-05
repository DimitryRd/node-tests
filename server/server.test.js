const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Server', () =>{
    describe('Get 404', () =>{
        it('should return Page not found!', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: "Page not found!"
                    })
                })
                .end(done);
        });
    })

    describe('Get users', () =>{
        it('should return users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude(
                        {
                            name: "Dimitry",
                            age: 29
                        });
                })
                .end(done);
        })
    })
})



