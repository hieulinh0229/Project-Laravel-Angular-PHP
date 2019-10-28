import { VillaRentModule } from './villa-rent.module';

describe('VillaRentModule', () => {
  let villaRentModule: VillaRentModule;

  beforeEach(() => {
    villaRentModule = new VillaRentModule();
  });

  it('should create an instance', () => {
    expect(villaRentModule).toBeTruthy();
  });
});
