// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import * as d3 from 'd3';
// import Link from '../_modules/link/link';
import Stock from '../_modules/stock/stock'

$(() => {
  // new Link(); // Activate Link modules logic
  // console.log('Welcome to Yeogurt!');

  new Stock();
});
