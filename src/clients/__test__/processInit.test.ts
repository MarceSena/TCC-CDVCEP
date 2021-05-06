import { ProcessInit } from '@src/clients/processInit';
import axios from 'axios';
import processData from '@test/fixtures/process.json';
import processNormalizedData from '@test/fixtures/processNormalizedDataResponse.json';

jest.mock('axios');

describe('ProcessInit client', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  it('Should return the normallired initial datas process', async () => {
    const max = 1000;
    const min = 100;
    const count = 5;

    mockedAxios.get.mockResolvedValue({ data: processData });

    const processInit = new ProcessInit(mockedAxios);
    const response = await processInit.getDataProcess(max, min, count);
    expect(response).toEqual(processNormalizedData);
  });

  it('Should get a generic error from Process service when the request fails before reaching ther service', async () => {
    
    /* observar esse message: NEtwaorl Error*/
    mockedAxios.get.mockResolvedValue({ message : 'Network Error' });
    const processInit = new ProcessInit(mockedAxios);

    await expect(processInit.getDataProcess).rejects.toThrow(
      'Unexpected error when trying to comunicate to Process : Network Error'
    );
  });
});
