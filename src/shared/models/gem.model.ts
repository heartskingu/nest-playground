export enum GemEnum {
  PERL = 'PERL',
  AMETHYST = 'AMETHYST',
  RUBY = 'RUBY',
  SAPPHIRE = 'SAPPHIRE',
  GARNET = 'GARNET',
  ROSE_QUARTZ = 'ROSE_QUARTZ',
}

export interface Human {
  name: string;
}

export interface Gem {
  name: string;
  gem: GemEnum;
}

export interface HumanGem extends Human, Gem {
  parents: Array<Human | Gem>;
}

export interface Fusion extends Gem {
  beings: Array<Gem | Human>;
}
