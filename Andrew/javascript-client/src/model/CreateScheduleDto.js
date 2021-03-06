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
    root.GatewaySoftwareApi.CreateScheduleDto = factory(root.GatewaySoftwareApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateScheduleDto model module.
   * @module model/CreateScheduleDto
   * @version v1
   */

  /**
   * Constructs a new <code>CreateScheduleDto</code>.
   * The schedule
   * @alias module:model/CreateScheduleDto
   * @class
   * @param name {String} The schedule name
   * @param cronExpression {String} The cron expression
   */
  var exports = function(name, cronExpression) {
    var _this = this;

    _this['name'] = name;
    _this['cronExpression'] = cronExpression;
  };

  /**
   * Constructs a <code>CreateScheduleDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateScheduleDto} obj Optional instance to populate.
   * @return {module:model/CreateScheduleDto} The populated <code>CreateScheduleDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('cronExpression')) {
        obj['cronExpression'] = ApiClient.convertToType(data['cronExpression'], 'String');
      }
    }
    return obj;
  }

  /**
   * The schedule name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The cron expression
   * @member {String} cronExpression
   */
  exports.prototype['cronExpression'] = undefined;



  return exports;
}));


