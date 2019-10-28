import { RealEstateModule } from './real-estate.module';

describe('RealEstateModule', () => {
  let realEstateModule: RealEstateModule;

  beforeEach(() => {
    realEstateModule = new RealEstateModule();
  });

  it('should create an instance', () => {
    expect(realEstateModule).toBeTruthy();
  });
});
