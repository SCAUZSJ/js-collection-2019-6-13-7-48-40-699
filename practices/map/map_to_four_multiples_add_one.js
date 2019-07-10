'use strict';
var map_to_four_multiples_add_one = function (collection) {
  return collection.map((val, index, array) => {
    return val + index * 3 + 4;
  })
};

module.exports = map_to_four_multiples_add_one;
