import { PlotSaleModule } from './plot-sale.module';

describe('PlotSaleModule', () => {
  let plotSaleModule: PlotSaleModule;

  beforeEach(() => {
    plotSaleModule = new PlotSaleModule();
  });

  it('should create an instance', () => {
    expect(plotSaleModule).toBeTruthy();
  });
});
