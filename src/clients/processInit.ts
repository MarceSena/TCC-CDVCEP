import { AxiosStatic } from "axios";
// É um arrey, não é um objeto, logo, ou eu procuro outra api, ou eu faço tudo como arrey

//tipo da resposta api externa
export interface ProcessResponse {
  dataProcess: ProcessResponse;
}

//tipo de dados normalizados da classe que normaliza esses dados
export interface DataNormalized{
    dataProcessNormalized: ProcessResponse[];
}

export class ProcessInit{
    constructor(protected request: AxiosStatic) {}

    public async getDataProcess(max: number,  mim:number, count:number): Promise< DataNormalized[]> {
       const response = await this.request.get<ProcessResponse>('http://www.randomnumberapi.com/api/v1.0/random?min=${min}&max=${max}&count=${max}');
       return this.normalizeDataResponse(response.data) ;
    }   
  
    private normalizeDataResponse(dataProcessNormal: ProcessResponse): DataNormalized[]{
        const dataProcess :DataNormalized = {
            dataProcessNormalized : [dataProcessNormal]
        }
       
        return [dataProcess]
    
    }
}
