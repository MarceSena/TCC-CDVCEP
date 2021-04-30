import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('process')
export class ProcessController {
  @Get('')
  public getProcessForLoggedUser(_: Request, res: Response): void {
    res.send([
      {
        test: [684, 434, 864, 261, 375],
      },
      {
        test: [684, 434, 864, 261, 375],
      },
    ]);
  }
}
