/**
 * Gateway Software API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GatewaySoftwareApi);
  }
}(this, function(expect, GatewaySoftwareApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GatewaySoftwareApi.SwitchesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SwitchesApi', function() {
    describe('switchesDelete', function() {
      it('should call switchesDelete successfully', function(done) {
        //uncomment below and update the code to test switchesDelete
        //instance.switchesDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('switchesDiscover', function() {
      it('should call switchesDiscover successfully', function(done) {
        //uncomment below and update the code to test switchesDiscover
        //instance.switchesDiscover(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('switchesEventPost', function() {
      it('should call switchesEventPost successfully', function(done) {
        //uncomment below and update the code to test switchesEventPost
        //instance.switchesEventPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('switchesGet', function() {
      it('should call switchesGet successfully', function(done) {
        //uncomment below and update the code to test switchesGet
        //instance.switchesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('switchesGetEvents', function() {
      it('should call switchesGetEvents successfully', function(done) {
        //uncomment below and update the code to test switchesGetEvents
        //instance.switchesGetEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('switchesGetSwitch', function() {
      it('should call switchesGetSwitch successfully', function(done) {
        //uncomment below and update the code to test switchesGetSwitch
        //instance.switchesGetSwitch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('switchesPost', function() {
      it('should call switchesPost successfully', function(done) {
        //uncomment below and update the code to test switchesPost
        //instance.switchesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('switchesPut', function() {
      it('should call switchesPut successfully', function(done) {
        //uncomment below and update the code to test switchesPut
        //instance.switchesPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
