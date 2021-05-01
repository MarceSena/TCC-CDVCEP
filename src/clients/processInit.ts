import { AxiosStatic } from "axios";



export class ProcessInit{
    constructor(protected request: AxiosStatic) {}

    public async getDataProcess(max: number,  mim:number, count:number): Promise<{


    }> {
        return this.request.get('http://www.randomnumberapi.com/api/v1.0/random?min=${min}&max=${max}&count=${max}');
    }
}