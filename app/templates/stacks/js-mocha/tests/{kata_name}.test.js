'use strict';

var chai = require('chai');
var expect = chai.expect;

/**
 * Simply change `false` to `true` if you'd like to use Chai's "should" style.
 *
 * @see http://chaijs.com/guide/styles/#should
 */
var should = (false) ? chai.should() : null;

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
