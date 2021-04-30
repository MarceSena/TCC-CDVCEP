
import { AxiosStatic } from "axios";
import { Promise } from "mongoose";


export class ProcessInit{
    constructor(protected request: AxiosStatic) {}

    public async getDatas(num: number): Promise<{}>{
        return this.request.get('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5');
    }
}