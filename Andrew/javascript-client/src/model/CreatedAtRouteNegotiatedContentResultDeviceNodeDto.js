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
    define(['ApiClient', 'model/DeviceNodeDto', 'model/IContentNegotiator', 'model/MediaTypeFormatter', 'model/UrlHelper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceNodeDto'), require('./IContentNegotiator'), require('./MediaTypeFormatter'), require('./UrlHelper'));
  } else {
    // Browser globals (root is window)
    if (!root.GatewaySoftwareApi) {
      root.GatewaySoftwareApi = {};
    }
    root.GatewaySoftwareApi.CreatedAtRouteNegotiatedContentResultDeviceNodeDto = factory(root.GatewaySoftwareApi.ApiClient, root.GatewaySoftwareApi.DeviceNodeDto, root.GatewaySoftwareApi.IContentNegotiator, root.GatewaySoftwareApi.MediaTypeFormatter, root.GatewaySoftwareApi.UrlHelper);
  }
}(this, function(ApiClient, DeviceNodeDto, IContentNegotiator, MediaTypeFormatter, UrlHelper) {
  'use strict';




  /**
   * The CreatedAtRouteNegotiatedContentResultDeviceNodeDto model module.
   * @module model/CreatedAtRouteNegotiatedContentResultDeviceNodeDto
   * @version v1
   */

  /**
   * Constructs a new <code>CreatedAtRouteNegotiatedContentResultDeviceNodeDto</code>.
   * @alias module:model/CreatedAtRouteNegotiatedContentResultDeviceNodeDto
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>CreatedAtRouteNegotiatedContentResultDeviceNodeDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreatedAtRouteNegotiatedContentResultDeviceNodeDto} obj Optional instance to populate.
   * @return {module:model/CreatedAtRouteNegotiatedContentResultDeviceNodeDto} The populated <code>CreatedAtRouteNegotiatedContentResultDeviceNodeDto</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('routeName')) {
        obj['routeName'] = ApiClient.convertToType(data['routeName'], 'String');
      }
      if (data.hasOwnProperty('routeValues')) {
        obj['routeValues'] = ApiClient.convertToType(data['routeValues'], {'String': Object});
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = DeviceNodeDto.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('urlFactory')) {
        obj['urlFactory'] = UrlHelper.constructFromObject(data['urlFactory']);
      }
      if (data.hasOwnProperty('contentNegotiator')) {
        obj['contentNegotiator'] = IContentNegotiator.constructFromObject(data['contentNegotiator']);
      }
      if (data.hasOwnProperty('request')) {
        obj['request'] = ApiClient.convertToType(data['request'], Object);
      }
      if (data.hasOwnProperty('formatters')) {
        obj['formatters'] = ApiClient.convertToType(data['formatters'], [MediaTypeFormatter]);
      }
    }
    return obj;
  }

  /**
   * @member {String} routeName
   */
  exports.prototype['routeName'] = undefined;
  /**
   * @member {Object.<String, Object>} routeValues
   */
  exports.prototype['routeValues'] = undefined;
  /**
   * @member {module:model/DeviceNodeDto} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {module:model/UrlHelper} urlFactory
   */
  exports.prototype['urlFactory'] = undefined;
  /**
   * @member {module:model/IContentNegotiator} contentNegotiator
   */
  exports.prototype['contentNegotiator'] = undefined;
  /**
   * @member {Object} request
   */
  exports.prototype['request'] = undefined;
  /**
   * @member {Array.<module:model/MediaTypeFormatter>} formatters
   */
  exports.prototype['formatters'] = undefined;



  return exports;
}));


