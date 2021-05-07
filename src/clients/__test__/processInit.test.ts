import { ProcessInit } from '@src/clients/processInit';
import axios from 'axios';
import processData from '@test/fixtures/process.json';
import processNormalizedData from '@test/fixtures/processNormalizedDataResponse.json';
import * as HTTPUtil  from '@src/util/request';

jest.mock('@src/util/request');

describe('ProcessInit client', () => {
  
  const mockedRequest = new HTTPUtil.Request() as jest.Mocked<HTTPUtil.Request>

  it('Should return the normallired initial datas process', async () => {
    const max = 1000;
    const min = 100;
    const count = 5;

    mockedRequest.get.mockResolvedValue({ data: processData } as HTTPUtil.Response);

    const processInit = new ProcessInit(mockedRequest);
    const response = await processInit.getDataProcess(max, min, count);
    expect(response).toEqual(processNormalizedData);
  });

  it('Should get a generic error from Process service when the request fails before reaching ther service', async () => {
  
    /* observar esse message: NEtwaorl Error*/
    mockedRequest.get.mockResolvedValue({ message: 'Network Error' } as unknown  as HTTPUtil.Response);
    const processInit = new ProcessInit(mockedRequest);

    await expect(processInit.getDataProcess).rejects.toThrow(
      'Unexpected error when trying to comunicate to Process : Network Error'
    );
  });
});
