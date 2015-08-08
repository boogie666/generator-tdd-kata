'use strict';

var chai = require('chai');
var expect = chai.expect;

// Uncoment the next line to use the "should" API
// var should = chai.should();
// see http://chaijs.com/guide/styles/#should

var <%= kata.pascalized %> = require('../src/<%= kata.pascalized %>');

describe('<%= kata.slug %>', function() {
  it('your first failing test', function() {
    expect('Get your kata started!').not.to.be.a.string;
  });
});
