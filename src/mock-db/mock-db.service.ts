import { Injectable } from '@nestjs/common';
import { HumanGem, GemEnum, Gem, Fusion } from 'src/shared/models/gem.model';

@Injectable()
export class MockDbService {
  private steven: HumanGem = {
    name: 'Steven Universe',
    gem: GemEnum.ROSE_QUARTZ,
    parents: [],
  };
  private ruby: Gem = {
    name: 'Ruby',
    gem: GemEnum.RUBY,
  };
  private sapphire: Gem = {
    name: 'Sapphire',
    gem: GemEnum.SAPPHIRE,
  };
  private garnet: Fusion = {
    name: 'Garnet',
    gem: GemEnum.GARNET,
    beings: [this.ruby, this.sapphire],
  };
  private amethyst: Gem = {
    name: 'Amethyst',
    gem: GemEnum.AMETHYST,
  };
  private perl: Gem = {
    name: 'Perl',
    gem: GemEnum.PERL,
  };
  private gems: Array<Gem> = [
    this.steven,
    this.garnet,
    this.amethyst,
    this.perl,
    this.ruby,
    this.sapphire,
  ];

  getDbGem(): Array<Gem> {
    return this.gems;
  }
}
