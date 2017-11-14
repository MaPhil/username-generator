'use strict';
var data = {
    names: require('./names.json'),
    adjectives: require('./adjectives.json')
  },
  seperator = '-';
module.exports.setNames = function (names) {
  data.names = names;
};
module.exports.setAdjectives = function (adjectives) {
  data.adjectives = adjectives;
};
module.exports.setSeperator = function (new_seperator) {
  seperator = new_seperator;
};

module.exports.generate = function () {
  var ran_a = Math.floor(Math.random() * data.names.length),
    ran_b = Math.floor(Math.random() * data.adjectives.length),
    ran_suffix = Math.floor(Math.random() * 100);
  return  data.adjectives[ran_b]+ seperator + data.names[ran_a] + seperator + ran_suffix;
};
