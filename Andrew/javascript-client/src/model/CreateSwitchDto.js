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
    root.GatewaySoftwareApi.CreateSwitchDto = factory(root.GatewaySoftwareApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateSwitchDto model module.
   * @module model/CreateSwitchDto
   * @version v1
   */

  /**
   * Constructs a new <code>CreateSwitchDto</code>.
   * The switch
   * @alias module:model/CreateSwitchDto
   * @class
   * @param externalId {String} The external system's ID for this switch
   * @param name {String} The device name
   */
  var exports = function(externalId, name) {
    var _this = this;

    _this['externalId'] = externalId;
    _this['name'] = name;

  };

  /**
   * Constructs a <code>CreateSwitchDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSwitchDto} obj Optional instance to populate.
   * @return {module:model/CreateSwitchDto} The populated <code>CreateSwitchDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('externalId')) {
        obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], 'String');
      }
    }
    return obj;
  }

  /**
   * The external system's ID for this switch
   * @member {String} externalId
   */
  exports.prototype['externalId'] = undefined;
  /**
   * The device name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The external system's device properties
   * @member {String} properties
   */
  exports.prototype['properties'] = undefined;



  return exports;
}));


