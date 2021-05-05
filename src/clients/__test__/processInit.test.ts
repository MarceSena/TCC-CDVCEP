import { ProcessInit } from '@src/clients/processInit';
import axios from 'axios';
import process_data from '@test/fixtures/process.json';
import process_normalized_data from '@test/fixtures/processNormalizedDataResponse.json';

jest.mock('axios');

describe ('ProcessInit client', () => {
    it ('Should return the normallired initial datas process', async() =>{
        const max = 1000;
        const min = 100 ; 
        const count = 5 ; 
         
        axios.get = jest.fn().mockResolvedValue({data : process_data});

        const processInit = new ProcessInit(axios);
        const response = await processInit.getDataProcess(max , min, count);
        expect(response).toEqual(process_normalized_data);
    });
});