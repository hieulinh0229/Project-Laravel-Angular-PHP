import { VillaSaleModule } from './villa-sale.module';

describe('VillaSaleModule', () => {
  let villaSaleModule: VillaSaleModule;

  beforeEach(() => {
    villaSaleModule = new VillaSaleModule();
  });

  it('should create an instance', () => {
    expect(villaSaleModule).toBeTruthy();
  });
});
