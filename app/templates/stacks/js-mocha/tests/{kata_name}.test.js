'use strict';

var chai = require('chai');
var expect = chai.expect;

// Uncoment the next line to use the "should" API
// var should = chai.should();
// see http://chaijs.com/guide/styles/#should

/**
 * Configuration for Chai.
 *
 * @see http://chaijs.com/guide/styles/#configure
 */
chai.config.showDiff = false;
var <%= kata.pascalized %> = require('../src/<%= kata.pascalized %>');




describe('<%= kata.slug %>', function(){
  throw new Error('Nothing here but us fails');
});
