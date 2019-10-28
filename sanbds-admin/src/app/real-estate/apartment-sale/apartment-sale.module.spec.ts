import { ApartmentSaleModule } from './apartment-sale.module';

describe('ApartmentSaleModule', () => {
  let apartmentSaleModule: ApartmentSaleModule;

  beforeEach(() => {
    apartmentSaleModule = new ApartmentSaleModule();
  });

  it('should create an instance', () => {
    expect(apartmentSaleModule).toBeTruthy();
  });
});
