import { PlotRentModule } from './plot-rent.module';

describe('PlotRentModule', () => {
  let plotRentModule: PlotRentModule;

  beforeEach(() => {
    plotRentModule = new PlotRentModule();
  });

  it('should create an instance', () => {
    expect(plotRentModule).toBeTruthy();
  });
});
