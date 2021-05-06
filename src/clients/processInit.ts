import { InternalError } from '@src/util/errors/internal-errors';
import { AxiosStatic } from 'axios';
import config, { IConfig } from 'config';

//tipo da resposta api externa
export interface ProcessResponse {
  dataProcess: ProcessResponse;
}

//tipo de dados normalizados da classe que normaliza esses dados
export interface DataNormalized {
  dataProcessNormalized: ProcessResponse[];
}

export class ClientRequestError extends InternalError {
  constructor(message: string) {
    const internalMessage =
      'Unexpected error when trying to comunicate to Process';
    super(`${internalMessage} : ${message}`);
  }
}

const processResourceConfig : IConfig = config.get('App.resource.Process')


export class ProcessInit {
  constructor(protected request: AxiosStatic) {}

  public async getDataProcess(
    max: number,
    min: number,
    count: number
  ): Promise<DataNormalized[]> {
    console.log(processResourceConfig)
    try {
      const response = await this.request.get<ProcessResponse>(
        `${processResourceConfig.get('apiUrl')}min=${min}&max=${max}&count=${count}`,
        {
          headers: {
            autorization:  processResourceConfig.get('apiToken'),
          },
        }
      );
      return this.normalizeDataResponse(response.data);
    } catch (err) {
      /* ${err.message} tenho que verificar isso*/
      throw new ClientRequestError('Network Error');
    }
  }

  private normalizeDataResponse(
    dataProcessNormal: ProcessResponse
  ): DataNormalized[] {
    const dataProcess: DataNormalized = {
      dataProcessNormalized: [dataProcessNormal],
    };

    return [dataProcess];
  }
}
