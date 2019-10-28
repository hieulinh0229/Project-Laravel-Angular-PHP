import { HouseSaleModule } from './house-sale.module';

describe('HouseSaleModule', () => {
  let houseSaleModule: HouseSaleModule;

  beforeEach(() => {
    houseSaleModule = new HouseSaleModule();
  });

  it('should create an instance', () => {
    expect(houseSaleModule).toBeTruthy();
  });
});
