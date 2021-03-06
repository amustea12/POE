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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.GatewaySoftwareApi) {
      root.GatewaySoftwareApi = {};
    }
    root.GatewaySoftwareApi.CreateLightSensorEventDto = factory(root.GatewaySoftwareApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateLightSensorEventDto model module.
   * @module model/CreateLightSensorEventDto
   * @version v1
   */

  /**
   * Constructs a new <code>CreateLightSensorEventDto</code>.
   * The light sensor event
   * @alias module:model/CreateLightSensorEventDto
   * @class
   * @param sensorLevel {Number} The sensor level
   */
  var exports = function(sensorLevel) {
    var _this = this;

    _this['sensorLevel'] = sensorLevel;
  };

  /**
   * Constructs a <code>CreateLightSensorEventDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateLightSensorEventDto} obj Optional instance to populate.
   * @return {module:model/CreateLightSensorEventDto} The populated <code>CreateLightSensorEventDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sensorLevel')) {
        obj['sensorLevel'] = ApiClient.convertToType(data['sensorLevel'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The sensor level
   * @member {Number} sensorLevel
   */
  exports.prototype['sensorLevel'] = undefined;



  return exports;
}));


