import supertest from 'supertest';

describe('Beach forecast functional tests', () => {
    it('should return a forecast with just a few times', async () => {
        const { body, status } = await supertest(app).get('/forecast');
        expect(status).toBe(200);
        expect(body).toBe([{
            "time": "2020-04-26T00:00:00+00:00",
           
        }, {
            "time": "2020-04-26T01:00:00+00:00",

         }
        ]);
    });
});

