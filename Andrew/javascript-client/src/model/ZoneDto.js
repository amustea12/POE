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
    root.GatewaySoftwareApi.ZoneDto = factory(root.GatewaySoftwareApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ZoneDto model module.
   * @module model/ZoneDto
   * @version v1
   */

  /**
   * Constructs a new <code>ZoneDto</code>.
   * @alias module:model/ZoneDto
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;


    _this['name'] = name;








  };

  /**
   * Constructs a <code>ZoneDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ZoneDto} obj Optional instance to populate.
   * @return {module:model/ZoneDto} The populated <code>ZoneDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('setpoint')) {
        obj['setpoint'] = ApiClient.convertToType(data['setpoint'], 'Number');
      }
      if (data.hasOwnProperty('deadband')) {
        obj['deadband'] = ApiClient.convertToType(data['deadband'], 'Number');
      }
      if (data.hasOwnProperty('bias')) {
        obj['bias'] = ApiClient.convertToType(data['bias'], 'Number');
      }
      if (data.hasOwnProperty('gain')) {
        obj['gain'] = ApiClient.convertToType(data['gain'], 'Number');
      }
      if (data.hasOwnProperty('timeDelay')) {
        obj['timeDelay'] = ApiClient.convertToType(data['timeDelay'], 'Number');
      }
      if (data.hasOwnProperty('raiseDimRate')) {
        obj['raiseDimRate'] = ApiClient.convertToType(data['raiseDimRate'], 'Number');
      }
      if (data.hasOwnProperty('lowerDimRate')) {
        obj['lowerDimRate'] = ApiClient.convertToType(data['lowerDimRate'], 'Number');
      }
      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} setpoint
   */
  exports.prototype['setpoint'] = undefined;
  /**
   * @member {Number} deadband
   */
  exports.prototype['deadband'] = undefined;
  /**
   * @member {Number} bias
   */
  exports.prototype['bias'] = undefined;
  /**
   * @member {Number} gain
   */
  exports.prototype['gain'] = undefined;
  /**
   * @member {Number} timeDelay
   */
  exports.prototype['timeDelay'] = undefined;
  /**
   * @member {Number} raiseDimRate
   */
  exports.prototype['raiseDimRate'] = undefined;
  /**
   * @member {Number} lowerDimRate
   */
  exports.prototype['lowerDimRate'] = undefined;
  /**
   * @member {Number} level
   */
  exports.prototype['level'] = undefined;



  return exports;
}));

