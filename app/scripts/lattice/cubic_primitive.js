'use strict';

define(function() {
  return {
    originArray: [
      { x: 0, y: 0, z: 0 }
    ],
    vector: { x: 1, y: 1, z: 1 },
    grid: {
      '0_0_0_0': [ '1_0_0_0', '0_1_0_0', '0_0_1_0' ],
      '1_1_0_0': [ '1_0_0_0', '0_1_0_0', '1_1_1_0' ],
      '1_0_1_0': [ '1_0_0_0', '0_0_1_0', '1_1_1_0' ],
      '0_1_1_0': [ '0_1_0_0', '0_0_1_0', '1_1_1_0' ]
    }
  };
});
