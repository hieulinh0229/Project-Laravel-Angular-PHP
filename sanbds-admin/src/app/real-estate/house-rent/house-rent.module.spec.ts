import { HouseRentModule } from './house-rent.module';

describe('HouseRentModule', () => {
  let houseRentModule: HouseRentModule;

  beforeEach(() => {
    houseRentModule = new HouseRentModule();
  });

  it('should create an instance', () => {
    expect(houseRentModule).toBeTruthy();
  });
});
