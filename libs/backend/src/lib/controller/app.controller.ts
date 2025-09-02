import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getData() {
    return { message: `Welcome ${new Date()}` };
  }

  @Get('throw-error')
  throwError() {
    throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @Get('slow')
  async slow(): Promise<object> {
    const slowTime = 10000;
    const response = { message: `Slow request took ${slowTime}` };
    return await new Promise((resolve) =>
      setTimeout(() => resolve(response), slowTime)
    );
  }
  @Post('echo')
  async echo(@Req() request: Request, @Body() body: unknown): Promise<unknown> {
    console.log(body);
    return body;
  }
}
