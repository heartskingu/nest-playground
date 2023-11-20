import { Controller, Get, Param } from '@nestjs/common';
import { MockDbService } from 'src/mock-db/mock-db.service';
import { Gem } from 'src/shared/models/gem.model';

@Controller('')
export class GemApiController {
  constructor(private mockDbService: MockDbService) {}

  @Get('gems')
  getAll(): Array<Gem> {
    return this.mockDbService.getDbGem();
  }

  @Get('gems/:name')
  getGem(@Param('id') name: string): Gem {
    return this.mockDbService
      .getDbGem()
      .filter((gem) => gem.name === name)?.[0];
  }
}
