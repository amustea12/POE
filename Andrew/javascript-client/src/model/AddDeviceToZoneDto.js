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
    root.GatewaySoftwareApi.AddDeviceToZoneDto = factory(root.GatewaySoftwareApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddDeviceToZoneDto model module.
   * @module model/AddDeviceToZoneDto
   * @version v1
   */

  /**
   * Constructs a new <code>AddDeviceToZoneDto</code>.
   * The device
   * @alias module:model/AddDeviceToZoneDto
   * @class
   * @param deviceId {Number} The device ID
   * @param deviceType {module:model/AddDeviceToZoneDto.DeviceTypeEnum} The device type
   */
  var exports = function(deviceId, deviceType) {
    var _this = this;

    _this['deviceId'] = deviceId;
    _this['deviceType'] = deviceType;
  };

  /**
   * Constructs a <code>AddDeviceToZoneDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddDeviceToZoneDto} obj Optional instance to populate.
   * @return {module:model/AddDeviceToZoneDto} The populated <code>AddDeviceToZoneDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('deviceId')) {
        obj['deviceId'] = ApiClient.convertToType(data['deviceId'], 'Number');
      }
      if (data.hasOwnProperty('deviceType')) {
        obj['deviceType'] = ApiClient.convertToType(data['deviceType'], 'String');
      }
    }
    return obj;
  }

  /**
   * The device ID
   * @member {Number} deviceId
   */
  exports.prototype['deviceId'] = undefined;
  /**
   * The device type
   * @member {module:model/AddDeviceToZoneDto.DeviceTypeEnum} deviceType
   */
  exports.prototype['deviceType'] = undefined;


  /**
   * Allowed values for the <code>deviceType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DeviceTypeEnum = {
    /**
     * value: "Light"
     * @const
     */
    "Light": "Light",
    /**
     * value: "Switch"
     * @const
     */
    "Switch": "Switch",
    /**
     * value: "Dimmer"
     * @const
     */
    "Dimmer": "Dimmer",
    /**
     * value: "MotionSensor"
     * @const
     */
    "MotionSensor": "MotionSensor",
    /**
     * value: "LightSensor"
     * @const
     */
    "LightSensor": "LightSensor",
    /**
     * value: "TemperatureSensor"
     * @const
     */
    "TemperatureSensor": "TemperatureSensor",
    /**
     * value: "Relay"
     * @const
     */
    "Relay": "Relay"  };


  return exports;
}));


