import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('inittest')
export class InittestController {
  @Get('')
  public getForecastForgeLoggedUser(_: Request, res: Response): void {
    res.send([
      {
        test: 'hello wolrd',
      },
      {
        test: 'hello wolrd',
      },
    ]);
  }
}
