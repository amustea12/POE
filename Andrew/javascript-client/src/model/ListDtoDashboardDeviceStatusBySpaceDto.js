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
    define(['ApiClient', 'model/DashboardDeviceStatusBySpaceDto'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DashboardDeviceStatusBySpaceDto'));
  } else {
    // Browser globals (root is window)
    if (!root.GatewaySoftwareApi) {
      root.GatewaySoftwareApi = {};
    }
    root.GatewaySoftwareApi.ListDtoDashboardDeviceStatusBySpaceDto = factory(root.GatewaySoftwareApi.ApiClient, root.GatewaySoftwareApi.DashboardDeviceStatusBySpaceDto);
  }
}(this, function(ApiClient, DashboardDeviceStatusBySpaceDto) {
  'use strict';




  /**
   * The ListDtoDashboardDeviceStatusBySpaceDto model module.
   * @module model/ListDtoDashboardDeviceStatusBySpaceDto
   * @version v1
   */

  /**
   * Constructs a new <code>ListDtoDashboardDeviceStatusBySpaceDto</code>.
   * @alias module:model/ListDtoDashboardDeviceStatusBySpaceDto
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ListDtoDashboardDeviceStatusBySpaceDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListDtoDashboardDeviceStatusBySpaceDto} obj Optional instance to populate.
   * @return {module:model/ListDtoDashboardDeviceStatusBySpaceDto} The populated <code>ListDtoDashboardDeviceStatusBySpaceDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = ApiClient.convertToType(data['list'], [DashboardDeviceStatusBySpaceDto]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/DashboardDeviceStatusBySpaceDto>} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));


