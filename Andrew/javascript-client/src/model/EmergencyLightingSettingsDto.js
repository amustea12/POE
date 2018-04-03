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
    root.GatewaySoftwareApi.EmergencyLightingSettingsDto = factory(root.GatewaySoftwareApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EmergencyLightingSettingsDto model module.
   * @module model/EmergencyLightingSettingsDto
   * @version v1
   */

  /**
   * Constructs a new <code>EmergencyLightingSettingsDto</code>.
   * The emergency lighting settings
   * @alias module:model/EmergencyLightingSettingsDto
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>EmergencyLightingSettingsDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmergencyLightingSettingsDto} obj Optional instance to populate.
   * @return {module:model/EmergencyLightingSettingsDto} The populated <code>EmergencyLightingSettingsDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('lightId')) {
        obj['lightId'] = ApiClient.convertToType(data['lightId'], 'Number');
      }
      if (data.hasOwnProperty('timeout')) {
        obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
      }
      if (data.hasOwnProperty('lightLevel')) {
        obj['lightLevel'] = ApiClient.convertToType(data['lightLevel'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The light ID
   * @member {Number} lightId
   */
  exports.prototype['lightId'] = undefined;
  /**
   * The timeout in milliseconds (5000-30000) before the emergency light turns on (0=disable)
   * @member {Number} timeout
   */
  exports.prototype['timeout'] = undefined;
  /**
   * The lighting level during emergency
   * @member {Number} lightLevel
   */
  exports.prototype['lightLevel'] = undefined;



  return exports;
}));


