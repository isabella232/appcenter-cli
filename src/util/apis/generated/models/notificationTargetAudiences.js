/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the NotificationTargetAudiences class.
 * @constructor
 * Notification target audiences.
 *
 * @member {array} audiences List of target audiences.
 * 
 */
function NotificationTargetAudiences() {
  NotificationTargetAudiences['super_'].call(this);
}

util.inherits(NotificationTargetAudiences, models['NotificationTarget']);

/**
 * Defines the metadata of NotificationTargetAudiences
 *
 * @returns {object} metadata of NotificationTargetAudiences
 *
 */
NotificationTargetAudiences.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'NotificationTargetAudiences',
    type: {
      name: 'Composite',
      className: 'NotificationTargetAudiences',
      modelProperties: {
        type: {
          required: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        audiences: {
          required: true,
          serializedName: 'audiences',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = NotificationTargetAudiences;