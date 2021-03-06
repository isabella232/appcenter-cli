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
 * Class representing a UserProfileResponseManagement.
 */
class UserProfileResponseManagement {
  /**
   * Create a UserProfileResponseManagement.
   * @property {uuid} id The unique id (UUID) of the user
   * @property {string} [avatarUrl] The avatar URL of the user
   * @property {boolean} [canChangePassword] User is required to send an old
   * password in order to change the password.
   * @property {string} displayName The full name of the user. Might for
   * example be first and last name
   * @property {string} email The email address of the user
   * @property {string} name The unique name that is used to identify the user.
   * @property {array} [permissions] The permissions the user has for the app
   * @property {string} origin The creation origin of this user. Possible
   * values include: 'appcenter', 'hockeyapp', 'codepush'
   * @property {array} [featureFlags] The feature flags that are enabled for
   * this app
   * @property {string} [adminRole] The new admin_role. Possible values
   * include: 'superAdmin', 'admin', 'devOps', 'customerSupport', 'notAdmin'
   * @property {object} [settings] The user's settings
   * @property {string} [settings.marketingOptIn] The marketing opt-in setting
   * @property {string} [updatedAt] The date when the app was last updated
   * @property {boolean} [verified] A boolean flag that indicates if the user
   * is already verified
   * @property {array} [identityProviders] The identity providers associated
   * with the user's account
   */
  constructor() {
  }

  /**
   * Defines the metadata of UserProfileResponseManagement
   *
   * @returns {object} metadata of UserProfileResponseManagement
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UserProfileResponseManagement',
      type: {
        name: 'Composite',
        className: 'UserProfileResponseManagement',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          avatarUrl: {
            required: false,
            serializedName: 'avatar_url',
            type: {
              name: 'String'
            }
          },
          canChangePassword: {
            required: false,
            serializedName: 'can_change_password',
            type: {
              name: 'Boolean'
            }
          },
          displayName: {
            required: true,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          },
          email: {
            required: true,
            serializedName: 'email',
            type: {
              name: 'String'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          permissions: {
            required: false,
            serializedName: 'permissions',
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
          },
          origin: {
            required: true,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          },
          featureFlags: {
            required: false,
            serializedName: 'feature_flags',
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
          },
          adminRole: {
            required: false,
            serializedName: 'admin_role',
            type: {
              name: 'String'
            }
          },
          settings: {
            required: false,
            serializedName: 'settings',
            type: {
              name: 'Composite',
              className: 'UserProfileResponseManagementSettings'
            }
          },
          updatedAt: {
            required: false,
            serializedName: 'updated_at',
            type: {
              name: 'String'
            }
          },
          verified: {
            required: false,
            serializedName: 'verified',
            type: {
              name: 'Boolean'
            }
          },
          identityProviders: {
            required: false,
            serializedName: 'identity_providers',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'UserProfileResponseManagementIdentityProvidersItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'UserProfileResponseManagementIdentityProvidersItem'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = UserProfileResponseManagement;
