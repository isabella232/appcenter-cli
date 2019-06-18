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
 * This response contains an estimated price-per-RU denominated in a given
 * currency.
 *
 */
class EstimatedPricingResponse {
  /**
   * Create a EstimatedPricingResponse.
   * @property {number} [pricePerHour]
   * @property {string} [currency] Possible values include: 'USD', 'EUR',
   * 'GBP', 'AUD', 'INR', 'CAD', 'ARS', 'BRL', 'DKK', 'HKD', 'IDR', 'JPY',
   * 'KRW', 'MYR', 'MXN', 'NZD', 'NOK', 'RUB', 'SAR', 'ZAR', 'SEK', 'CHF',
   * 'TWD', 'TRY'
   */
  constructor() {
  }

  /**
   * Defines the metadata of EstimatedPricingResponse
   *
   * @returns {object} metadata of EstimatedPricingResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EstimatedPricingResponse',
      type: {
        name: 'Composite',
        className: 'EstimatedPricingResponse',
        modelProperties: {
          pricePerHour: {
            required: false,
            serializedName: 'pricePerHour',
            type: {
              name: 'Number'
            }
          },
          currency: {
            required: false,
            serializedName: 'currency',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EstimatedPricingResponse;