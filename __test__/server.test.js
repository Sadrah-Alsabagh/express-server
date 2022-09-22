'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe( 'API server testing', () => {

    it('Testing if home Page Works fine', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello World');
    });


    it( 'Testing if person Route Works fine', async () => { 
        const data = ({
            name: 'Sedra',
            age: 21,
            gender: 'female'
        });
        const res = await request.post( '/person').send(data);

        expect(res.status).toEqual(200);
        expect(res.text).toEqual('26');
    });

});