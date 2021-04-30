import { ProcessInit } from '@src/clients/processInit';
import axios from 'axios';

describe ('ProcessInit client', () => {
    it ('Should return the normallired initial datas process', async() =>{
        const num = 10;
         
        axios.get = jest.fn().mockReturnValue({});

        const processInit = new ProcessInit(axios);
        const response = await processInit.getDatas(num);
        expect(response).toEqual({});
    });
});