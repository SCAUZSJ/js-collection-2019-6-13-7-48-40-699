'use strict';

function choose_even(collection) {

  return collection.filter((val) =>{return val%2==0});
}
function func2(val){
  return val%2==0;
}

module.exports = choose_even;
