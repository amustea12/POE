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
    define(['ApiClient', 'model/NameValueHeaderValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NameValueHeaderValue'));
  } else {
    // Browser globals (root is window)
    if (!root.GatewaySoftwareApi) {
      root.GatewaySoftwareApi = {};
    }
    root.GatewaySoftwareApi.MediaTypeHeaderValue = factory(root.GatewaySoftwareApi.ApiClient, root.GatewaySoftwareApi.NameValueHeaderValue);
  }
}(this, function(ApiClient, NameValueHeaderValue) {
  'use strict';




  /**
   * The MediaTypeHeaderValue model module.
   * @module model/MediaTypeHeaderValue
   * @version v1
   */

  /**
   * Constructs a new <code>MediaTypeHeaderValue</code>.
   * @alias module:model/MediaTypeHeaderValue
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>MediaTypeHeaderValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediaTypeHeaderValue} obj Optional instance to populate.
   * @return {module:model/MediaTypeHeaderValue} The populated <code>MediaTypeHeaderValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('charSet')) {
        obj['charSet'] = ApiClient.convertToType(data['charSet'], 'String');
      }
      if (data.hasOwnProperty('parameters')) {
        obj['parameters'] = ApiClient.convertToType(data['parameters'], [NameValueHeaderValue]);
      }
      if (data.hasOwnProperty('mediaType')) {
        obj['mediaType'] = ApiClient.convertToType(data['mediaType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} charSet
   */
  exports.prototype['charSet'] = undefined;
  /**
   * @member {Array.<module:model/NameValueHeaderValue>} parameters
   */
  exports.prototype['parameters'] = undefined;
  /**
   * @member {String} mediaType
   */
  exports.prototype['mediaType'] = undefined;



  return exports;
}));


