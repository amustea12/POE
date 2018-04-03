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
    instance = new GatewaySoftwareApi.MotionSensorDto();
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

  describe('MotionSensorDto', function() {
    it('should create an instance of MotionSensorDto', function() {
      // uncomment below and update the code to test MotionSensorDto
      //var instane = new GatewaySoftwareApi.MotionSensorDto();
      //expect(instance).to.be.a(GatewaySoftwareApi.MotionSensorDto);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new GatewaySoftwareApi.MotionSensorDto();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new GatewaySoftwareApi.MotionSensorDto();
      //expect(instance).to.be();
    });

    it('should have the property protocol (base name: "protocol")', function() {
      // uncomment below and update the code to test the property protocol
      //var instane = new GatewaySoftwareApi.MotionSensorDto();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "externalId")', function() {
      // uncomment below and update the code to test the property externalId
      //var instane = new GatewaySoftwareApi.MotionSensorDto();
      //expect(instance).to.be();
    });

    it('should have the property discoveredDate (base name: "discoveredDate")', function() {
      // uncomment below and update the code to test the property discoveredDate
      //var instane = new GatewaySoftwareApi.MotionSensorDto();
      //expect(instance).to.be();
    });

    it('should have the property isOnline (base name: "isOnline")', function() {
      // uncomment below and update the code to test the property isOnline
      //var instane = new GatewaySoftwareApi.MotionSensorDto();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new GatewaySoftwareApi.MotionSensorDto();
      //expect(instance).to.be();
    });

    it('should have the property properties (base name: "properties")', function() {
      // uncomment below and update the code to test the property properties
      //var instane = new GatewaySoftwareApi.MotionSensorDto();
      //expect(instance).to.be();
    });

  });

}));
