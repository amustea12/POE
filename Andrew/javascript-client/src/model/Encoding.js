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
    define(['ApiClient', 'model/DecoderFallback', 'model/EncoderFallback'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DecoderFallback'), require('./EncoderFallback'));
  } else {
    // Browser globals (root is window)
    if (!root.GatewaySoftwareApi) {
      root.GatewaySoftwareApi = {};
    }
    root.GatewaySoftwareApi.Encoding = factory(root.GatewaySoftwareApi.ApiClient, root.GatewaySoftwareApi.DecoderFallback, root.GatewaySoftwareApi.EncoderFallback);
  }
}(this, function(ApiClient, DecoderFallback, EncoderFallback) {
  'use strict';




  /**
   * The Encoding model module.
   * @module model/Encoding
   * @version v1
   */

  /**
   * Constructs a new <code>Encoding</code>.
   * @alias module:model/Encoding
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>Encoding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Encoding} obj Optional instance to populate.
   * @return {module:model/Encoding} The populated <code>Encoding</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bodyName')) {
        obj['bodyName'] = ApiClient.convertToType(data['bodyName'], 'String');
      }
      if (data.hasOwnProperty('encodingName')) {
        obj['encodingName'] = ApiClient.convertToType(data['encodingName'], 'String');
      }
      if (data.hasOwnProperty('headerName')) {
        obj['headerName'] = ApiClient.convertToType(data['headerName'], 'String');
      }
      if (data.hasOwnProperty('webName')) {
        obj['webName'] = ApiClient.convertToType(data['webName'], 'String');
      }
      if (data.hasOwnProperty('windowsCodePage')) {
        obj['windowsCodePage'] = ApiClient.convertToType(data['windowsCodePage'], 'Number');
      }
      if (data.hasOwnProperty('isBrowserDisplay')) {
        obj['isBrowserDisplay'] = ApiClient.convertToType(data['isBrowserDisplay'], 'Boolean');
      }
      if (data.hasOwnProperty('isBrowserSave')) {
        obj['isBrowserSave'] = ApiClient.convertToType(data['isBrowserSave'], 'Boolean');
      }
      if (data.hasOwnProperty('isMailNewsDisplay')) {
        obj['isMailNewsDisplay'] = ApiClient.convertToType(data['isMailNewsDisplay'], 'Boolean');
      }
      if (data.hasOwnProperty('isMailNewsSave')) {
        obj['isMailNewsSave'] = ApiClient.convertToType(data['isMailNewsSave'], 'Boolean');
      }
      if (data.hasOwnProperty('isSingleByte')) {
        obj['isSingleByte'] = ApiClient.convertToType(data['isSingleByte'], 'Boolean');
      }
      if (data.hasOwnProperty('encoderFallback')) {
        obj['encoderFallback'] = EncoderFallback.constructFromObject(data['encoderFallback']);
      }
      if (data.hasOwnProperty('decoderFallback')) {
        obj['decoderFallback'] = DecoderFallback.constructFromObject(data['decoderFallback']);
      }
      if (data.hasOwnProperty('isReadOnly')) {
        obj['isReadOnly'] = ApiClient.convertToType(data['isReadOnly'], 'Boolean');
      }
      if (data.hasOwnProperty('codePage')) {
        obj['codePage'] = ApiClient.convertToType(data['codePage'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} bodyName
   */
  exports.prototype['bodyName'] = undefined;
  /**
   * @member {String} encodingName
   */
  exports.prototype['encodingName'] = undefined;
  /**
   * @member {String} headerName
   */
  exports.prototype['headerName'] = undefined;
  /**
   * @member {String} webName
   */
  exports.prototype['webName'] = undefined;
  /**
   * @member {Number} windowsCodePage
   */
  exports.prototype['windowsCodePage'] = undefined;
  /**
   * @member {Boolean} isBrowserDisplay
   */
  exports.prototype['isBrowserDisplay'] = undefined;
  /**
   * @member {Boolean} isBrowserSave
   */
  exports.prototype['isBrowserSave'] = undefined;
  /**
   * @member {Boolean} isMailNewsDisplay
   */
  exports.prototype['isMailNewsDisplay'] = undefined;
  /**
   * @member {Boolean} isMailNewsSave
   */
  exports.prototype['isMailNewsSave'] = undefined;
  /**
   * @member {Boolean} isSingleByte
   */
  exports.prototype['isSingleByte'] = undefined;
  /**
   * @member {module:model/EncoderFallback} encoderFallback
   */
  exports.prototype['encoderFallback'] = undefined;
  /**
   * @member {module:model/DecoderFallback} decoderFallback
   */
  exports.prototype['decoderFallback'] = undefined;
  /**
   * @member {Boolean} isReadOnly
   */
  exports.prototype['isReadOnly'] = undefined;
  /**
   * @member {Number} codePage
   */
  exports.prototype['codePage'] = undefined;



  return exports;
}));


