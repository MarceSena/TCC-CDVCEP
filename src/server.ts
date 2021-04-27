import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { Application } from 'express';
import { InittestController } from './controllers/inittest';
import * as database from '@src/database';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    this.setupControllers();
    await this.dataBaseSetup();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.setupControllers();
  }
  private setupControllers(): void {
    const inittestController = new InittestController();
    this.addControllers([inittestController]);
  }
  private async dataBaseSetup():Promise<void>{
    await database.connect();
  }

  public async close():Promise<void>{
     await database.close();
  }
  public start():void {
    this.app.listen(this.port, ( ) => {
      console.info('Server listening of port:' , this.port);

    });
  } 

  public getApp(): Application {
    return this.app;
  }
}
