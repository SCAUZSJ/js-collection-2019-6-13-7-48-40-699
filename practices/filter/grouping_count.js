'use strict';

function grouping_count(collection) {
  let object={};
  collection.filter((val)=>{
    object[val] = val in object ? ++object[val] : 1 ; 
  })
  return object;
}

module.exports = grouping_count;
