'use strict';

import Stock from '../stock';

describe('Stock View', function() {

  beforeEach(() => {
    this.stock = new Stock();
  });

  it('Should run a few assertions', () => {
    expect(this.stock);
  });

});
