/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ErrorRetentionInDays.
 */
class ErrorRetentionInDays {
  /**
   * Create a ErrorRetentionInDays.
   * @property {number} retentionInDays
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorRetentionInDays
   *
   * @returns {object} metadata of ErrorRetentionInDays
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'errorRetentionInDays',
      type: {
        name: 'Composite',
        className: 'ErrorRetentionInDays',
        modelProperties: {
          retentionInDays: {
            required: true,
            serializedName: 'retention_in_days',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorRetentionInDays;
