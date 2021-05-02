import { ProcessInit } from '@src/clients/processInit';
import axios from 'axios';
import process_data from '@test/fixtures/process_data.json';
import process_normalised_data from '@test/fixtures/process_normalised_data_response.json';

jest.mock('axios');

describe ('ProcessInit client', () => {
    it ('Should return the normallired initial datas process', async() =>{
        const max = 1000;
        const min = 100 ; 
        const count = 5 ; 
         
        axios.get = jest.fn().mockResolvedValue(process_data);
        const processInit = new ProcessInit(axios);
        const response = await processInit.getDataProcess(max , min, count);
        const data = response.slice(0,2); 
 
        expect(data).toEqual(process_normalised_data);
    });
});