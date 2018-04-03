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
    root.GatewaySoftwareApi.CreateSwitchEventDto = factory(root.GatewaySoftwareApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateSwitchEventDto model module.
   * @module model/CreateSwitchEventDto
   * @version v1
   */

  /**
   * Constructs a new <code>CreateSwitchEventDto</code>.
   * The switch event
   * @alias module:model/CreateSwitchEventDto
   * @class
   * @param state {module:model/CreateSwitchEventDto.StateEnum} The switch state
   */
  var exports = function(state) {
    var _this = this;

    _this['state'] = state;
  };

  /**
   * Constructs a <code>CreateSwitchEventDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSwitchEventDto} obj Optional instance to populate.
   * @return {module:model/CreateSwitchEventDto} The populated <code>CreateSwitchEventDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
    }
    return obj;
  }

  /**
   * The switch state
   * @member {module:model/CreateSwitchEventDto.StateEnum} state
   */
  exports.prototype['state'] = undefined;


  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "Off"
     * @const
     */
    "Off": "Off",
    /**
     * value: "On"
     * @const
     */
    "On": "On"  };


  return exports;
}));


