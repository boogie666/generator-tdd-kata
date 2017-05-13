'use strict';

var chai = require('chai');
var expect = chai.expect;

// Uncoment the next line to use the "should" API
// var should = chai.should();
// see http://chaijs.com/guide/styles/#should

var <%= kata.pascalized %> = require('../src/<%= kata.pascalized %>');

describe('<%= kata.pascalized %> variable', function() {
  it('should not be null', function() {
    expect(<%= kata.pascalized %>).not.to.equal(null);
  });
});
