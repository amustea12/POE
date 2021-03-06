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
    instance = new GatewaySoftwareApi.ActionSetsApi();
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

  describe('ActionSetsApi', function() {
    describe('actionSetsDelete', function() {
      it('should call actionSetsDelete successfully', function(done) {
        //uncomment below and update the code to test actionSetsDelete
        //instance.actionSetsDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionSetsExecute', function() {
      it('should call actionSetsExecute successfully', function(done) {
        //uncomment below and update the code to test actionSetsExecute
        //instance.actionSetsExecute(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionSetsGet', function() {
      it('should call actionSetsGet successfully', function(done) {
        //uncomment below and update the code to test actionSetsGet
        //instance.actionSetsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionSetsGetActionSet', function() {
      it('should call actionSetsGetActionSet successfully', function(done) {
        //uncomment below and update the code to test actionSetsGetActionSet
        //instance.actionSetsGetActionSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionSetsGetEvents', function() {
      it('should call actionSetsGetEvents successfully', function(done) {
        //uncomment below and update the code to test actionSetsGetEvents
        //instance.actionSetsGetEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionSetsPost', function() {
      it('should call actionSetsPost successfully', function(done) {
        //uncomment below and update the code to test actionSetsPost
        //instance.actionSetsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('actionSetsPut', function() {
      it('should call actionSetsPut successfully', function(done) {
        //uncomment below and update the code to test actionSetsPut
        //instance.actionSetsPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
