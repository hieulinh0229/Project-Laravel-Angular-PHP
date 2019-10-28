import { ApartmentRentModule } from './apartment-rent.module';

describe('ApartmentRentModule', () => {
  let apartmentRentModule: ApartmentRentModule;

  beforeEach(() => {
    apartmentRentModule = new ApartmentRentModule();
  });

  it('should create an instance', () => {
    expect(apartmentRentModule).toBeTruthy();
  });
});
