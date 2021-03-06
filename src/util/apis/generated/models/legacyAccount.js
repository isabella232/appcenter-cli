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
 * Class representing a LegacyAccount.
 */
class LegacyAccount {
  /**
   * Create a LegacyAccount.
   * @property {string} [name] The account name of the calling user.
   * @property {string} [email] The calling user's email.
   * @property {array} [linkedProviders] Array of linked authentication
   * providers associated with the account.
   */
  constructor() {
  }

  /**
   * Defines the metadata of LegacyAccount
   *
   * @returns {object} metadata of LegacyAccount
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'LegacyAccount',
      type: {
        name: 'Composite',
        className: 'LegacyAccount',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          email: {
            required: false,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          },
          linkedProviders: {
            required: false,
            serializedName: 'linkedProviders',
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
  }
}

module.exports = LegacyAccount;
