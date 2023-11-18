import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData() {
    this.powerService.supplyPower(25);
    console.log('Getting data...');
    return 'fake data'
  }
}
