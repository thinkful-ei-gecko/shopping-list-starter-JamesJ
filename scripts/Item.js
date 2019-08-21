'use strict';
/* global cuid */

// eslint-disable-next-line no-unused-vars
const Item = (function(){

  let validateName = function(name) {
    if (!name) { throw new TypeError('name not defined');}
  };

  let create = function(name) {

    return {
      id: cuid(),
      name: name,
      checked: false
    };
  };

  return {
    validateName,
    create
  };
}());

