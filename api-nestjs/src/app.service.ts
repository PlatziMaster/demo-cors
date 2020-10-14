import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any[] {
    return [
      {
        "id": 1,
        "poll": "Poll 1"
      },
      {
        "id": 2,
        "poll": "Poll 2"
      }
    ];
  }
}
