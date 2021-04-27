import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';
import { InittestController } from './controllers/inittest';


export class SetupServer extends Server {

    constructor(private port = 3000){
        super();
    }

    public init():void {
        this.setupExpress();
        this.setupControllers();

    }

    private setupExpress():void{
        this.app.use(bodyParser.json());
        this.setupControllers();
    }
    private setupControllers():void{
        const inittestController = new InittestController();
        this.addControllers([inittestController]);
    }

    public getApp(): Application {
        return this.app;

    }

} 